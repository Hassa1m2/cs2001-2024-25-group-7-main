/**
 * @file tests/muscle.test.js
 * @description End-to-end tests for Muscle-related REST endpoints.
 * These tests cover success cases and error handling for each endpoint.
 * The endpoints being tested include:
 *   - POST   /api/v1/muscles        (Create a new muscle)
 *   - GET    /api/v1/muscles        (Retrieve all muscles)
 *   - GET    /api/v1/muscles/:id    (Retrieve a specific muscle by ID)
 *   - PATCH  /api/v1/muscles/:id    (Update a muscle by ID)
 *   - DELETE /api/v1/muscles/:id    (Delete a muscle by ID)
 *
 * Each test simulates various scenarios, including valid requests,
 * missing or invalid parameters, and simulated internal errors.
 */


const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app'); 
const Muscle = require('../models/muscle');

describe('Muscle API Endpoints', () => {

  /**
   * Tests for the POST /api/v1/muscles endpoint.
   *
   * These tests ensure that creating a new muscle works as expected:
   *   - With valid data, a muscle is created (201).
   *   - With missing required fields, a 400 error is returned.
   *   - If a server error occurs, a 500 error is returned.
   */
    describe('POST /api/v1/muscles', () => {
       
       // Define a valid muscle object.
        it('should create a new muscle entry when provided valid data', async () => {
          const newMuscle = {
            name: 'Rear Deltoid',
            imageURL: 'http://example.com/reardeltoid.jpg',
          };
      
          // Execute the POST request and expect a successful creation (201)
          const res = await request(app)
            .post('/api/v1/muscles')
            .send(newMuscle)
            .expect(201);
      
          // Validate response structure and data consistency.
          expect(res.body).toHaveProperty('message', 'Muscle created successfully');
          expect(res.body).toHaveProperty('muscle');
          expect(res.body.muscle).toHaveProperty('_id');
          expect(res.body.muscle.name).toBe(newMuscle.name);
        });
      
        it('should return 400 if required fields are missing', async () => {

            // Test with incomplete data (missing name, muscleGroup, and bodyRegion).
            const incompleteData = { imageURL: 'http://example.com/reardeltoid.jpg' };
      
            // Expect the API to respond with a 400 Bad Request.
            const res = await request(app)
                .post('/api/v1/muscles')
                .send(incompleteData)
                .expect(400);
      
            // Check that the error message clearly indicates missing fields.
            expect(res.body).toHaveProperty('error', 'Missing required fields');
        });
      
        it('should return 500 if an internal error occurs', async () => {
            
            // Temporarily suppress console.error output during the test.
            const originalError = console.error;
            console.error = jest.fn();
        
            // Force an error by mocking the save method to throw an error.
            const originalSave = Muscle.prototype.save;
            Muscle.prototype.save = jest.fn().mockImplementation(() => {
                throw new Error('Simulated failure');
            });
        
            const newMuscle = {
                name: 'Rear Deltoid',
                imageURL: 'http://example.com/reardeltoid.jpg',
            };
            
            // Expect a 500 Internal Server Error response.
            const res = await request(app)
                .post('/api/v1/muscles')
                .send(newMuscle)
                .expect(500);
        
            // Validate that the response contains the appropriate error message.
            expect(res.body).toHaveProperty('error', 'Internal server error');
            
            // Restore the original method and console.error.
            Muscle.prototype.save = originalSave;
            console.error = originalError;
        });
    });

  /**
   * Tests for the GET /api/v1/muscles endpoint.
   *
   * These tests verify that retrieving all muscles works as expected:
   *   - When muscles exist, the endpoint returns an array of muscles (200).
   *   - If an internal error occurs, the endpoint returns a 500 error.
   */
  describe('GET /api/v1/muscles', () => {
    it('should retrieve all muscles', async () => {

        // Insert sample muscle data into the database.
        await Muscle.create([
            { name: 'Biceps', muscleGroup: 'Arms', bodyRegion: 'Upper Body' },
            { name: 'Triceps', muscleGroup: 'Arms', bodyRegion: 'Upper Body' },
        ]);

        // Send GET request and expect a 200 (OK) response.
        const res = await request(app)
            .get('/api/v1/muscles')
            .expect(200);

        // Validate that the response is an array with the expected number of muscle entries.
        expect(Array.isArray(res.body)).toBe(true);
        expect(res.body.length).toBe(2);
        expect(res.body[0]).toHaveProperty('name');
    });

    it('should return 500 if an internal error occurs', async () => {

        // Mock the Muscle.find method to simulate an error.
        const originalFind = Muscle.find;
        Muscle.find = jest.fn().mockImplementation(() => {
            throw new Error('Simulated failure');
        });

        // Send GET request and expect a 500 (Internal Server Error) response.
        const res = await request(app)
            .get('/api/v1/muscles')
            .expect(500);

        // Validate that the error message indicates an internal server error.
        expect(res.body).toHaveProperty('error', 'Internal server error');

       // Restore the original Muscle.find method.
        Muscle.find = originalFind;
    });
  });

  /**
   * Tests for the GET /api/v1/muscles/:id endpoint.
   *
   * These tests ensure that retrieving a single muscle by its ID works correctly:
   *   - A valid ID returns the muscle (200).
   *   - An invalid ID format returns a 400 error.
   *   - A valid but non-existent ID returns a 404 error.
   *   - If an internal error occurs, the endpoint returns a 500 error.
   */
  describe('GET /api/v1/muscles/:id', () => {
    it('should return a single muscle when given a valid ID', async () => {

        // Create a muscle record for testing.
        const muscle = await Muscle.create({
            name: 'Deltoid',
        });

        // Send GET request with the valid muscle ID and expect a 200 (OK) response.
        const res = await request(app)
            .get(`/api/v1/muscles/${muscle._id}`)
            .expect(200);

        // Validate that the returned muscle matches the created record.
        expect(res.body).toHaveProperty('name', 'Deltoid');
        expect(res.body).toHaveProperty('_id', muscle._id.toString());
    });

    it('should return 400 for an invalid muscle ID format', async () => {

        // Use an invalid ID string and expect a 400 (Bad Request) response.
        const res = await request(app)
            .get('/api/v1/muscles/invalid-id')
            .expect(400);

        // Validate the error message indicating an invalid ID format.
        expect(res.body).toHaveProperty('error', 'Invalid muscle ID format');
    });

    it('should return 404 if the muscle is not found', async () => {

        // Create a valid ObjectId that does not exist in the database.
        const nonExistentId = new mongoose.Types.ObjectId();

        // Send GET request and expect a 404 (Not Found) response.
        const res = await request(app)
            .get(`/api/v1/muscles/${nonExistentId}`)
            .expect(404);

        // Validate the error message indicating the muscle was not found.
        expect(res.body).toHaveProperty('error', 'Muscle not found');
    });

    it('should return 500 if an internal error occurs', async () => {

        // Mock the findById method to simulate an internal error.
        const originalFindById = Muscle.findById;
        Muscle.findById = jest.fn().mockImplementation(() => {
            throw new Error('Simulated failure');
        });

        // Use a valid ObjectId format.
        const validId = new mongoose.Types.ObjectId();

        // Send GET request and expect a 500 (Internal Server Error) response.
        const res = await request(app)
            .get(`/api/v1/muscles/${validId}`)
            .expect(500);

        // Validate the error message.
        expect(res.body).toHaveProperty('error', 'Internal server error');

        // Restore the original findById method.
        Muscle.findById = originalFindById;
    });
  });

  /**
   * Tests for the PATCH /api/v1/muscles/:id endpoint.
   *
   * These tests verify that updating a muscle works correctly:
   *   - A valid update request returns the updated muscle (200).
   *   - An invalid ID format returns a 400 error.
   *   - A valid but non-existent ID returns a 404 error.
   *   - If an internal error occurs during update, a 500 error is returned.
   */
  describe('PATCH /api/v1/muscles/:id', () => {
    it('should update an existing muscle', async () => {

        // Create a muscle record to update.
        const muscle = await Muscle.create({
            name: 'Hamstring',
        });

        // Define the update to be applied.
        const updates = { name: 'Hamstring (Updated)' };

        // Send PATCH request with the update data and expect a 200 (OK) response.
        const res = await request(app)
            .patch(`/api/v1/muscles/${muscle._id}`)
            .send(updates)
            .expect(200);

        // Validate that the response contains a success message and updated data.
        expect(res.body).toHaveProperty('message', 'Muscle updated successfully');
        expect(res.body.muscle.name).toBe('Hamstring (Updated)');
    });

    it('should return 400 for an invalid muscle ID format', async () => {

        // Send PATCH request with an invalid muscle ID and expect a 400 (Bad Request) response.
        const res = await request(app)
            .patch('/api/v1/muscles/invalid-id')
            .send({ name: 'New Name' })
            .expect(400);

        // Validate the error message.
        expect(res.body).toHaveProperty('error', 'Invalid muscle ID format');
    });

    it('should return 404 if the muscle is not found', async () => {

        // Create a valid ObjectId that does not correspond to any muscle.
        const nonExistentId = new mongoose.Types.ObjectId();

        // Send PATCH request and expect a 404 (Not Found) response.
        const res = await request(app)
            .patch(`/api/v1/muscles/${nonExistentId}`)
            .send({ name: 'Does Not Exist' })
            .expect(404);

        // Validate the error message indicating that the muscle was not found.
        expect(res.body).toHaveProperty('error', 'Muscle not found');
    });

    it('should return 500 if an internal error occurs', async () => {

        // Mock the findByIdAndUpdate method to simulate an internal error.
        const originalFn = Muscle.findByIdAndUpdate;
        Muscle.findByIdAndUpdate = jest.fn().mockImplementation(() => {
            throw new Error('Simulated failure');
        });

        // Use a valid ObjectId for the update request.
        const validId = new mongoose.Types.ObjectId();

        // Send PATCH request and expect a 500 (Internal Server Error) response.
        const res = await request(app)
            .patch(`/api/v1/muscles/${validId}`)
            .send({ name: 'Testing 500' })
            .expect(500);

        // Validate the error message.
        expect(res.body).toHaveProperty('error', 'Internal server error');

        // Restore the original findByIdAndUpdate method.
        Muscle.findByIdAndUpdate = originalFn;
    });
  });

  /**
   * Tests for the DELETE /api/v1/muscles/:id endpoint.
   *
   * These tests ensure that deleting a muscle works correctly:
   *   - A valid deletion request returns a success message (200)
   *     and the muscle is removed from the database.
   *   - An invalid ID format returns a 400 error.
   *   - A valid but non-existent ID returns a 404 error.
   *   - If an internal error occurs during deletion, a 500 error is returned.
   */
  describe('DELETE /api/v1/muscles/:id', () => {
    it('should delete an existing muscle', async () => {

        // Create a muscle record to be deleted.
        const muscle = await Muscle.create({
            name: 'Latissimus Dorsi',
        });

        // Send DELETE request with the muscle ID and expect a 200 (OK) response.
        const res = await request(app)
            .delete(`/api/v1/muscles/${muscle._id}`)
            .expect(200);

        // Validate the success message.
        expect(res.body).toHaveProperty('message', 'Muscle deleted successfully');

        // Verify that the muscle has been removed from the database.
        const deletedMuscle = await Muscle.findById(muscle._id);
        expect(deletedMuscle).toBeNull();
    });

    it('should return 400 for an invalid muscle ID format', async () => {

        // Send DELETE request with an invalid muscle ID and expect a 400 (Bad Request) response.
        const res = await request(app)
            .delete('/api/v1/muscles/invalid-id')
            .expect(400);

        // Validate the error message.
        expect(res.body).toHaveProperty('error', 'Invalid muscle ID format');
    });

    it('should return 404 if the muscle is not found', async () => {

        // Create a valid ObjectId that does not exist in the database.
        const nonExistentId = new mongoose.Types.ObjectId();

        // Send DELETE request and expect a 404 (Not Found) response.
        const res = await request(app)
            .delete(`/api/v1/muscles/${nonExistentId}`)
            .expect(404);

        // Validate the error message indicating that the muscle was not found.
        expect(res.body).toHaveProperty('error', 'Muscle not found');
    });

    it('should return 500 if an internal error occurs', async () => {

        // Mock the findByIdAndDelete method to simulate an internal error.
        const originalFn = Muscle.findByIdAndDelete;
        Muscle.findByIdAndDelete = jest.fn().mockImplementation(() => {
            throw new Error('Simulated failure');
        });

        // Use a valid ObjectId for the deletion request.
        const validId = new mongoose.Types.ObjectId();

        // Send DELETE request and expect a 500 (Internal Server Error) response.
        const res = await request(app)
            .delete(`/api/v1/muscles/${validId}`)
            .expect(500);

        // Validate the error message.
        expect(res.body).toHaveProperty('error', 'Internal server error');

        // Restore the original findByIdAndDelete method.
        Muscle.findByIdAndDelete = originalFn;
    });
  });
});
