/**
 * chest.js
 * Exports an array of exercise objects for the "Chest" muscle group.
 */

module.exports = [
    {
        // 1) Barbell Bench Press
        name: "Barbell Bench Press",
        description: "A fundamental compound exercise that primarily targets the pectoral muscles while also engaging the triceps and shoulders. Widely regarded as a cornerstone for building upper body strength, it helps develop mass and power in the chest.",
        primaryMuscles: ["Chest"],
        secondaryMuscles: ["Triceps", "Shoulders"],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 2,
            maxRecommendedSets: 4, 
            minRecommendedReps: 8,
            maxRecommendedReps: 12
        },
        instructions: [
            "Lie on a flat bench with your feet planted on the ground, gripping the barbell slightly wider than shoulder-width apart.",
            "Unrack the barbell and position it above your chest with arms fully extended.",
            "Lower the barbell slowly to your mid-chest while keeping elbows at a 45-degree angle.",
            "Press the barbell back up to the starting position, fully extending your arms."
        ],
        commonMistakes: [
            "Bouncing the bar off the chest",
            "Flaring elbows too wide",
            "Not keeping feet flat on the floor"
        ],
        equipment: ["Barbell"],
        exerciseImages: ["exercises/barbellBenchPress.gif"],
        tags: ["Chest", "Strength", "Beginner"]
    },
    {
        // 2) Dumbbell Incline Bench Press
        name: "Dumbbell Incline Bench Press",
        description: "A variation of the bench press performed on an incline bench, it shifts emphasis to the upper portion of the pectorals. It also involves the shoulders and triceps, making it a popular exercise for achieving a well-rounded chest development.",
        primaryMuscles: ["Chest"],
        secondaryMuscles: ["Shoulders", "Triceps"],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 2,
            maxRecommendedSets: 4, 
            minRecommendedReps: 8,
            maxRecommendedReps: 12
        },
        instructions: [
            "Adjust the bench to an incline position (30-45 degrees) and sit with dumbbells on your thighs.",
            "Lie back and bring the dumbbells to chest level with palms facing forward.",
            "Press the dumbbells up towards the ceiling until your arms are fully extended.",
            "Slowly lower the dumbbells back to chest level in a controlled manner."
        ],
        commonMistakes: [
            "Using too much weight, leading to improper form",
            "Not controlling the dumbbells on the way down"
        ],
        equipment: ["Dumbbell"],
        exerciseImages: ["exercises/dumbbellInclineBenchPress.gif"],
        tags: ["Chest", "Strength", "Beginner"]
    },
    {
        // 3) Machine Fly
        name: "Machine Fly",
        description: "An isolation exercise designed to target the chest muscles by simulating a hugging motion. The machine’s guided path helps maintain proper form, making it ideal for beginners and for those looking to fine-tune chest definition without worrying about balance.",
        primaryMuscles: ["Chest"],
        secondaryMuscles: ["Shoulders"],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 2,
            maxRecommendedSets: 4, 
            minRecommendedReps: 10,
            maxRecommendedReps: 15
        },
        instructions: [
            "Adjust the seat height so that the handles are at chest level.",
            "Sit on the machine with your back firmly against the pad and grasp the handles.",
            "Bring the handles together in a controlled arc motion while squeezing your chest.",
            "Slowly return to the starting position, allowing a full stretch."
        ],
        commonMistakes: [
            "Using momentum instead of controlled movement",
            "Letting shoulders roll forward"
        ],
        equipment: ["Strength Machine"],
        exerciseImages: ["exercises/machineFly.gif"],
        tags: ["Chest", "Strength", "Beginner"]
    },
    {
        // 4) Dumbbell Bench Press
        name: "Dumbbell Bench Press",
        description: "A versatile chest exercise that allows for a greater range of motion compared to the barbell version. Using dumbbells helps correct muscle imbalances and offers a more natural movement path, engaging the chest, triceps, and shoulders effectively.",
        primaryMuscles: ["Chest"],
        secondaryMuscles: ["Triceps", "Shoulders"],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 2,
            maxRecommendedSets: 4, 
            minRecommendedReps: 8,
            maxRecommendedReps: 12
        },
        instructions: [
            "Sit on a bench with dumbbells resting on your thighs, then lie back with the dumbbells at chest level.",
            "Press the dumbbells upward until your arms are fully extended, bringing them close but not touching.",
            "Lower the dumbbells back down in a slow and controlled manner."
        ],
        commonMistakes: [
            "Not maintaining control over the dumbbells",
            "Using excessive weight, leading to improper form"
        ],
        equipment: ["Dumbbell"],
        exerciseImages: ["exercises/dumbellBenchPress.gif"],
        tags: ["Chest", "Strength", "Beginner"]
    },
    {
        // 5) Barbell Incline Bench Press
        name: "Barbell Incline Bench Press",
        description: "A variation of the bench press that emphasizes the upper chest and front deltoids. This exercise is essential for achieving a balanced and well-defined chest, especially for individuals aiming to develop a strong upper body.",
        primaryMuscles: ["Chest"],
        secondaryMuscles: ["Shoulders", "Triceps"],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 2,
            maxRecommendedSets: 4, 
            minRecommendedReps: 8,
            maxRecommendedReps: 12
        },
        instructions: [
            "Adjust the bench to an incline position (30-45 degrees).",
            "Grip the barbell slightly wider than shoulder-width apart and unrack the bar.",
            "Lower the barbell to your upper chest in a controlled motion.",
            "Press the barbell back up to the starting position, extending your arms fully."
        ],
        commonMistakes: [
            "Bouncing the bar off the chest",
            "Allowing the lower back to arch excessively"
        ],
        equipment: ["Barbell"],
        exerciseImages: ["exercises/barbellInclineBenchPress.gif"],
        tags: ["Chest", "Strength", "Beginner"]
    },
    {
        // 6) Dumbbell Fly
        name: "Dumbbell Fly",
        description: "An isolation exercise that targets the chest by simulating a wide, hugging motion. Dumbbell flys are excellent for stretching the chest muscles and enhancing definition, while also engaging the shoulders and biceps to a lesser extent.",
        primaryMuscles: ["Chest"],
        secondaryMuscles: ["Biceps", "Shoulders"],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 2,
            maxRecommendedSets: 4, 
            minRecommendedReps: 10,
            maxRecommendedReps: 15
        },
        instructions: [
            "Lie on a flat bench with dumbbells held above your chest, palms facing each other.",
            "Lower the dumbbells out to the sides in a wide arc while keeping a slight bend in your elbows.",
            "Once you feel a deep stretch in the chest, bring the dumbbells back together over your chest."
        ],
        commonMistakes: [
            "Locking elbows and turning the exercise into a press",
            "Going too low and risking shoulder strain"
        ],
        equipment: ["Dumbbell"],
        exerciseImages: ["exercises/dumbbellFly.gif"],
        tags: ["Chest", "Strength", "Beginner"]
    },
    {
        // 7) Cable Lower Chest Raise
        name: "Cable Lower Chest Raise",
        description: "An isolation movement targeting the lower portion of the chest, this exercise uses a cable machine to provide constant tension. It’s ideal for sculpting the lower chest and is often included in routines focused on achieving a well-balanced chest.",
        primaryMuscles: ["Chest"],
        secondaryMuscles: ["Shoulders"],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 2,
            maxRecommendedSets: 4, 
            minRecommendedReps: 10,
            maxRecommendedReps: 15
        },
        instructions: [
            "Set up handles on a low pulley cable machine and stand between them, grabbing the handles with both hands at your sides.",
            "Bring the handles together in front of your body at about waist level, squeezing your lower chest.",
            "Hold for a moment, then slowly return to the starting position."
        ],
        commonMistakes: [
            "Using excessive momentum",
            "Not fully contracting the chest at the top"
        ],
        equipment: ["Strength Machine"],
        exerciseImages: ["exercises/cableLowerChestRaise.gif"],
        tags: ["Chest", "Strength", "Intermediate"]
    },
    {
        // 8) Cable Mid Chest Crossover
        name: "Cable Mid Chest Crossover",
        description: "This exercise uses cables to target the mid-portion of the chest, providing a continuous tension that maximizes muscle activation. It’s great for enhancing chest definition and is commonly used as a finisher in chest workouts.",
        primaryMuscles: ["Chest"],
        secondaryMuscles: ["Shoulders"],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 2,
            maxRecommendedSets: 4, 
            minRecommendedReps: 10,
            maxRecommendedReps: 15
        },
        instructions: [
            "Attach handles to high pulleys on two cable machines and stand between them, gripping the handles with arms extended outward.",
            "Bring the handles down and together in front of your body while squeezing your chest.",
            "Pause briefly, then slowly return to the starting position."
        ],
        commonMistakes: [
            "Letting shoulders roll forward",
            "Using momentum instead of controlled movement"
        ],
        equipment: ["Strength Machine"],
        exerciseImages: ["exercises/cableMidChestCrossover.gif"],
        tags: ["Chest", "Strength", "Beginner"]
    },
    {
        // 9) Kettlebell Alternating Floor Press
        name: "Kettlebell Alternating Floor Press",
        description: "A unique chest exercise that utilizes kettlebells on the floor, reducing the range of motion and emphasizing the contraction of the chest muscles. It’s an excellent option for those seeking variety and enhanced stability in their chest workout.",
        primaryMuscles: ["Chest"],
        secondaryMuscles: [],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 2,
            maxRecommendedSets: 4, 
            minRecommendedReps: 8,
            maxRecommendedReps: 12
        },
        instructions: [
            "Lie flat on the floor with kettlebells in both hands next to your shoulders.",
            "Press one kettlebell up towards the ceiling while keeping the other at chest level.",
            "Lower the lifted kettlebell back to the chest and alternate arms.",
            "Repeat for the desired reps and sets."
        ],
        commonMistakes: [
            "Not keeping elbows at a stable angle",
            "Allowing the kettlebells to drop too quickly"
        ],
        equipment: ["Kettlebell"],
        exerciseImages: ["exercises/kettlebellAlternatingFloorPress.gif"],
        tags: ["Chest", "Strength", "Beginner"]
    },
    {
        // 10) Clap Push-Up
        name: "Clap Push-Up",
        description: "An explosive variation of the traditional push-up that builds power and speed in the chest muscles. By requiring a clap mid-air, this exercise not only enhances upper body strength but also improves overall athletic performance.",
        primaryMuscles: ["Chest"],
        secondaryMuscles: [],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 2,
            maxRecommendedSets: 4, 
            minRecommendedReps: 5,
            maxRecommendedReps: 12
        },
        instructions: [
            "Start in a push-up position with legs extended behind you.",
            "Perform a forceful push-up so your hands leave the ground.",
            "While in mid-air, clap your hands together before landing back in push-up position.",
            "Repeat for the desired reps and sets."
        ],
        commonMistakes: [
            "Not generating enough power to perform the clap",
            "Letting hips sag or rise too much"
        ],
        equipment: ["Body Weight"],
        exerciseImages: ["exercises/clapPushUp.gif"],
        tags: ["Chest", "Strength", "Intermediate"]
    },
    {
        // 11) Single-Leg Push-Up
        name: "Single-Leg Push-Up",
        description: "A challenging variation of the push-up that requires increased core stability and balance. By lifting one leg off the ground, this exercise places greater emphasis on the chest, shoulders, and triceps while engaging the core for stability.",
        primaryMuscles: ["Chest"],
        secondaryMuscles: ["Shoulders", "Triceps"],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 2,
            maxRecommendedSets: 4, 
            minRecommendedReps: 8,
            maxRecommendedReps: 15
        },
        instructions: [
            "Start in a push-up position with feet extended behind you.",
            "Lift one foot off the ground, balancing on the other foot.",
            "Lower yourself until your chest nearly touches the floor, keeping your core tight.",
            "Push back up to the starting position and repeat, alternating legs."
        ],
        commonMistakes: [
            "Letting the hips rotate or drop",
            "Not maintaining a straight body position"
        ],
        equipment: ["Body Weight"],
        exerciseImages: ["exercises/singleLegPushUp.gif"],
        tags: ["Chest", "Strength", "Beginner"]
    }
];
