/**
 * @file tests/exercise.test.js
 * @description End-to-end tests for Exercise-related REST endpoints.
 * These tests cover success cases and error handling for each endpoint.
 * The endpoints being tested include:
 *   - POST   /api/v1/exercises        (Create a new exercise)
 *   - GET    /api/v1/exercises        (Retrieve all exercises)
 *   - PATCH  /api/v1/exercises/:id    (Update an exercise by ID)
 *   - DELETE /api/v1/exercises/:id    (Delete an exercise by ID)
 *
 * Each test simulates various scenarios, including valid requests,
 * missing or invalid parameters, and simulated internal errors.
 */

const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app');
const Muscle = require('../models/muscle');
const Exercise = require('../models/exercise');

describe('Exercise API Endpoints', () => {

  /**
   * Tests for the POST /api/v1/exercises endpoint.
   *
   * These tests ensure that creating a new exercise works as expected:
   *   - With valid data, an exercise is created (201).
   *   - With invalid primary muscle IDs, a 400 error is returned.
   *   - If an internal error occurs, a 500 error is returned.
   */
  describe('POST /api/v1/exercises', () => {
    it('should create a new exercise entry when provided valid data', async () => {
        // Create valid muscle records to reference in the exercise.
        const primaryMuscle = await Muscle.create({ 
            name: 'Chest', 
        });
        const secondaryMuscle = await Muscle.create({ 
            name: 'Triceps', 
        });

        // Define valid exercise data.
        const newExercise = {
            name: 'Bench Press',
            description: 'Description of exercise',
            primaryMuscles: [primaryMuscle._id],
            secondaryMuscles: [secondaryMuscle._id],
            logType: "setsAndReps", 
            recommended: {         
                minRecommendedSets: 3,
                maxRecommendedSets: 5,
                minRecommendedReps: 8,
                maxRecommendedReps: 12,
            },
            instructions: ['Lie on bench', 'Lower the bar', 'Press upward'],
        };

        // Execute the POST request and expect a 201 Created response.
        const res = await request(app)
            .post('/api/v1/exercises')
            .send(newExercise)
            .expect(201);

        // Validate response structure and data consistency.
        expect(res.body).toHaveProperty('message', 'Exercise created successfully');
        expect(res.body).toHaveProperty('exercise');
        expect(res.body.exercise).toHaveProperty('_id');
        expect(res.body.exercise.name).toBe(newExercise.name);
    });

    it('should return 400 if invalid primary muscle IDs are provided', async () => {
        // Send a request with a primaryMuscles field containing a non-existent ObjectId.
        const res = await request(app)
            .post('/api/v1/exercises')
            .send({
                name: 'Squat',
                description: 'Description of exercise',
                primaryMuscles: [new mongoose.Types.ObjectId()], // Fake ID.
                logType: "setsAndReps",
                recommended: {
                    minRecommendedSets: 3,
                    maxRecommendedSets: 5,
                    minRecommendedReps: 8,
                    maxRecommendedReps: 12,
                },
                instructions: ['Stand with feet shoulder-width apart', 'Squat down', 'Return to standing'],
            })
            .expect(400);

        // Validate that the error message indicates invalid primary muscle IDs.
        expect(res.body).toHaveProperty('error', 'Invalid primary muscle IDs provided');
    });

    it('should return 500 if an internal error occurs', async () => {

        // Create a valid primary muscle record.
        const primaryMuscle = await Muscle.create({ 
            name: 'Back', 
        });

        // Force an internal error by mocking the save method.
        const originalSave = Exercise.prototype.save;
        Exercise.prototype.save = jest.fn().mockImplementation(() => {
            throw new Error('Simulated failure');
        });

        // Define valid exercise data.
        const newExercise = {
            name: 'Deadlift',
            description: 'Description of exercise',
            primaryMuscles: [primaryMuscle._id],
            logType: "setsAndReps",
            recommended: {
                minRecommendedSets: 3,
                maxRecommendedSets: 5,
                minRecommendedReps: 8,
                maxRecommendedReps: 12,
            },
            instructions: ['Lift the barbell', 'Stand upright', 'Lower slowly'],
        };

        // Execute the POST request and expect a 500 Internal Server Error response.
        const res = await request(app)
            .post('/api/v1/exercises')
            .send(newExercise)
            .expect(500);

        // Validate that the error message indicates an internal server error.
        expect(res.body).toHaveProperty('error', 'Internal server error');

        // Restore the original save method.
        Exercise.prototype.save = originalSave;
    });
  });

  /**
   * Tests for the GET /api/v1/exercises endpoint.
   *
   * These tests verify that retrieving all exercises works as expected:
   *   - When exercises exist, the endpoint returns an array of exercises (200).
   *   - If an internal error occurs, the endpoint returns a 500 error.
   */
  describe('GET /api/v1/exercises', () => {
    it('should retrieve all exercises', async () => {
        // Insert sample exercise data into the database.
        const primaryMuscle = await Muscle.create({ 
            name: 'Legs', 
        });
        
        await Exercise.create({
            name: 'Squat',
            description: 'Description of exercise',
            primaryMuscles: [primaryMuscle._id],
            logType: "setsAndReps",
            recommended: {
                minRecommendedSets: 3,
                maxRecommendedSets: 5,
                minRecommendedReps: 8,
                maxRecommendedReps: 12,
            },
            instructions: ['Stand', 'Squat', 'Rise'],
        });
        
        await Exercise.create({
            name: 'Lunge',
            description: 'Description of exercise',
            primaryMuscles: [primaryMuscle._id],
            logType: "setsAndReps",
            recommended: {
                minRecommendedSets: 2,
                maxRecommendedSets: 4,
                minRecommendedReps: 10,
                maxRecommendedReps: 15,
            },
            instructions: ['Step forward', 'Lower', 'Push back'],
        });

        // Execute the GET request and expect a 200 OK response.
        const res = await request(app)
            .get('/api/v1/exercises')
            .expect(200);

        // Validate that the response is an array with at least two exercise entries.
        expect(Array.isArray(res.body)).toBe(true);
        expect(res.body.length).toBeGreaterThanOrEqual(2);
    });

    it('should return 500 if an internal error occurs', async () => {

        // Force an internal error by mocking the Exercise.find method.
        const originalFind = Exercise.find;
        Exercise.find = jest.fn().mockImplementation(() => {
            throw new Error('Simulated failure');
        });

        // Execute the GET request and expect a 500 Internal Server Error response.
        const res = await request(app)
            .get('/api/v1/exercises')
            .expect(500);

        // Validate that the error message indicates an internal server error.
        expect(res.body).toHaveProperty('error', 'Internal server error');

        // Restore the original Exercise.find method.
        Exercise.find = originalFind;
    });
  });

  /**
   * Tests for the GET /api/v1/exercises/:id endpoint.
   *
   * These tests verify that retrieving all exercises works as expected:
   *   - When exercise exist, the endpoint retrieves the exercises (200).
   *   - If an internal error occurs, the endpoint returns a 500 error.
   */
  describe('GET /api/v1/exercises/:id', () => {
    it('should retrieve a single exercise when provided a valid ID', async () => {
      // Create a valid muscle record
      const primaryMuscle = await Muscle.create({ name: 'Chest' });
  
      // Create a valid exercise record referencing the muscle
      const exercise = await Exercise.create({
        name: 'Bench Press',
        description: 'Description of exercise',
        primaryMuscles: [primaryMuscle._id],
        logType: "setsAndReps",
        recommended: {         
            minRecommendedSets: 3,
            maxRecommendedSets: 5,
            minRecommendedReps: 8,
            maxRecommendedReps: 12,
        },
        instructions: ['Lie on bench', 'Lower the bar', 'Press upward'],
      });
  
      // Execute the GET request for a single exercise
      const res = await request(app)
        .get(`/api/v1/exercises/${exercise._id}`)
        .expect(200);
  
      // Validate the returned exercise
      expect(res.body).toHaveProperty('_id', exercise._id.toString());
      expect(res.body).toHaveProperty('name', 'Bench Press');
      expect(res.body).toHaveProperty('description', 'Description of exercise');
      // Validate that the primaryMuscles field is populated with muscle objects
      expect(Array.isArray(res.body.primaryMuscles)).toBe(true);
      expect(res.body.primaryMuscles[0]).toHaveProperty('name', 'Chest');
    });
  
    it('should return 400 for an invalid exercise ID format', async () => {
      // Execute the GET request with an invalid ID format
      const res = await request(app)
        .get('/api/v1/exercises/invalid-id')
        .expect(400);
  
      // Validate the error message
      expect(res.body).toHaveProperty('error', 'Invalid exercise ID format');
    });
  
    it('should return 404 if the exercise is not found', async () => {
      // Create a valid ObjectId that does not exist in the database
      const nonExistentId = new mongoose.Types.ObjectId();
  
      // Execute the GET request with the non-existent ID
      const res = await request(app)
        .get(`/api/v1/exercises/${nonExistentId}`)
        .expect(404);
  
      // Validate that the error message indicates the exercise was not found
      expect(res.body).toHaveProperty('error', 'Exercise not found');
    });
  
    it('should return 500 if an internal error occurs', async () => {
      // Force an internal error by mocking the findById method
      const originalFindById = Exercise.findById;
      Exercise.findById = jest.fn().mockImplementation(() => {
        throw new Error('Simulated failure');
      });
  
      // Create a valid muscle and exercise record
      const primaryMuscle = await Muscle.create({ name: 'Back' });
      const exercise = await Exercise.create({
        name: 'Deadlift',
        description: 'Description of exercise',
        primaryMuscles: [primaryMuscle._id],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 3,
            maxRecommendedSets: 5,
            minRecommendedReps: 8,
            maxRecommendedReps: 12,
        },
        instructions: ['Lift the barbell', 'Stand upright', 'Lower slowly'],
      });
  
      // Execute the GET request and expect a 500 error
      const res = await request(app)
        .get(`/api/v1/exercises/${exercise._id}`)
        .expect(500);
  
      // Validate the error message
      expect(res.body).toHaveProperty('error', 'Internal server error');
  
      // Restore the original findById method
      Exercise.findById = originalFindById;
    });
  });
  
  /**
   * Tests for the PATCH /api/v1/exercises/:id endpoint.
   *
   * These tests verify that updating an exercise works correctly:
   *   - A valid update request returns the updated exercise (200).
   *   - An invalid ID format returns a 400 error.
   *   - A valid but non-existent ID returns a 404 error.
   *   - If an internal error occurs during update, a 500 error is returned.
   */
  describe('PATCH /api/v1/exercises/:id', () => {
    it('should update an existing exercise', async () => {

        // Create a muscle and an exercise record for testing.
        const primaryMuscle = await Muscle.create({ 
            name: 'Shoulders', 
        });

        const exercise = await Exercise.create({
            name: 'Overhead Press',
            description: 'Description of exercise',
            primaryMuscles: [primaryMuscle._id],
            logType: "setsAndReps",
            recommended: {
                minRecommendedSets: 2,
                maxRecommendedSets: 4,
                minRecommendedReps: 10,
                maxRecommendedReps: 15,
            },
            instructions: ['Stand', 'Press upward'],
        });

        // Define the update data.
        const updates = { name: 'Overhead Press (Updated)' };

        // Execute the PATCH request and expect a 200 OK response.
        const res = await request(app)
            .patch(`/api/v1/exercises/${exercise._id}`)
            .send(updates)
            .expect(200);

        // Validate that the response contains a success message and updated exercise data.
        expect(res.body).toHaveProperty('message', 'Exercise updated successfully');
        expect(res.body.exercise.name).toBe('Overhead Press (Updated)');
    });

    it('should return 400 for an invalid exercise ID format', async () => {

        // Execute the PATCH request with an invalid exercise ID format and expect a 400 Bad Request.
        const res = await request(app)
            .patch('/api/v1/exercises/invalid-id')
            .send({ name: 'New Name' })
            .expect(400);

        // Validate the error message.
        expect(res.body).toHaveProperty('error', 'Invalid exercise ID format');
    });

    it('should return 404 if the exercise is not found', async () => {

        // Create a valid ObjectId that does not exist in the database.
        const nonExistentId = new mongoose.Types.ObjectId();

        // Execute the PATCH request with the non-existent ID and expect a 404 Not Found.
        const res = await request(app)
            .patch(`/api/v1/exercises/${nonExistentId}`)
            .send({ name: 'Does Not Exist' })
            .expect(404);

        // Validate that the error message indicates the exercise was not found.
        expect(res.body).toHaveProperty('error', 'Exercise not found');
    });

    it('should return 500 if an internal error occurs', async () => {
        // Create a muscle and an exercise record.
        const primaryMuscle = await Muscle.create({ 
            name: 'Arms', 
        });
        const exercise = await Exercise.create({
            name: 'Bicep Curl',
            description: 'Description of exercise',
            primaryMuscles: [primaryMuscle._id],
            logType: "setsAndReps",
            recommended: {
                minRecommendedSets: 2,
                maxRecommendedSets: 4,
                minRecommendedReps: 10,
                maxRecommendedReps: 15,
            },
            instructions: ['Curl up', 'Lower down'],
        });

        // Force an internal error by mocking the findByIdAndUpdate method.
        const originalUpdate = Exercise.findByIdAndUpdate;
        Exercise.findByIdAndUpdate = jest.fn().mockImplementation(() => {
            throw new Error('Simulated failure');
        });

        // Execute the PATCH request and expect a 500 Internal Server Error.
        const res = await request(app)
            .patch(`/api/v1/exercises/${exercise._id}`)
            .send({ name: 'Bicep Curl (Updated)' })
            .expect(500);

        // Validate that the error message indicates an internal server error.
        expect(res.body).toHaveProperty('error', 'Internal server error');

        // Restore the original method.
        Exercise.findByIdAndUpdate = originalUpdate;
    });
  });

  /**
   * Tests for the DELETE /api/v1/exercises/:id endpoint.
   *
   * These tests ensure that deleting an exercise works correctly:
   *   - A valid deletion request returns a success message (200) and the exercise is removed from the database.
   *   - An invalid ID format returns a 400 error.
   *   - A valid but non-existent ID returns a 404 error.
   *   - If an internal error occurs during deletion, a 500 error is returned.
   */
  describe('DELETE /api/v1/exercises/:id', () => {
    it('should delete an existing exercise', async () => {
        // Create a muscle and an exercise record to be deleted.
        const primaryMuscle = await Muscle.create({ 
            name: 'Core', 
        });
        const exercise = await Exercise.create({
            name: 'Plank',
            description: 'Description of exercise',
            primaryMuscles: [primaryMuscle._id],
            logType: "setsAndReps",
            recommended: {
                minRecommendedSets: 2,
                maxRecommendedSets: 4,
                minRecommendedReps: 10,
                maxRecommendedReps: 15,
            },
            instructions: ['Hold position'],
        });

        // Execute the DELETE request and expect a 200 OK response.
        const res = await request(app)
            .delete(`/api/v1/exercises/${exercise._id}`)
            .expect(200);

        // Validate the success message.
        expect(res.body).toHaveProperty('message', 'Exercise deleted successfully');

        // Verify that the exercise has been removed from the database.
        const deletedExercise = await Exercise.findById(exercise._id);
        expect(deletedExercise).toBeNull();
    });

    it('should return 400 for an invalid exercise ID format', async () => {
        // Execute the DELETE request with an invalid exercise ID format and expect a 400 Bad Request.
        const res = await request(app)
            .delete('/api/v1/exercises/invalid-id')
            .expect(400);

        // Validate that the error message indicates an invalid ID format.
        expect(res.body).toHaveProperty('error', 'Invalid exercise ID format');
    });

    it('should return 404 if the exercise is not found', async () => {
        // Create a valid ObjectId that does not exist in the database.
        const nonExistentId = new mongoose.Types.ObjectId();

        // Execute the DELETE request with the non-existent ID and expect a 404 Not Found.
        const res = await request(app)
            .delete(`/api/v1/exercises/${nonExistentId}`)
            .expect(404);

        // Validate that the error message indicates the exercise was not found.
        expect(res.body).toHaveProperty('error', 'Exercise not found');
    });

    it('should return 500 if an internal error occurs', async () => {
        // Create a muscle and an exercise record.
        const primaryMuscle = await Muscle.create({ 
            name: 'Glutes', 
        });
        const exercise = await Exercise.create({
            name: 'Hip Thrust',
            description: 'Description of exercise',
            primaryMuscles: [primaryMuscle._id],
            logType: "setsAndReps",
            recommended: {
                minRecommendedSets: 2,
                maxRecommendedSets: 4,
                minRecommendedReps: 10,
                maxRecommendedReps: 15,
            },
            instructions: ['Thrust upward'],
        });

        // Force an internal error by mocking the findByIdAndDelete method.
        const originalDelete = Exercise.findByIdAndDelete;
        Exercise.findByIdAndDelete = jest.fn().mockImplementation(() => {
            throw new Error('Simulated failure');
        });

        // Execute the DELETE request and expect a 500 Internal Server Error.
        const res = await request(app)
            .delete(`/api/v1/exercises/${exercise._id}`)
            .expect(500);

        // Validate that the error message indicates an internal server error.
        expect(res.body).toHaveProperty('error', 'Internal server error');

        // Restore the original method.
        Exercise.findByIdAndDelete = originalDelete;
    });
  });
});
