const mongoose = require("mongoose");

/**
 * MuscleSchema
 * 
 * Defines the structure of muscle documents in the database.
 */

const MuscleSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true, 
    },

    name: {
        type: String,
        required: true, 
    },

    imageURL: {
        type: String, 
        required: false, 
    }
},  { timestamps: true })

const Muscle = mongoose.model("Muscle", MuscleSchema, "muscles");

module.exports = Muscle;
