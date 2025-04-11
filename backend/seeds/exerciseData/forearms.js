/**
 * forearms.js
 * Exports an array of exercise objects for the "Forearms" muscle group.
 */

module.exports = [
    {
        // 1) Dumbbell Wrist Curl (Palms Up)
        name: "Dumbbell Wrist Curl (Palms Up)",
        description: "A classic isolation exercise for the forearms, this movement targets the wrist flexors. By performing this exercise with a supinated (palms up) grip, you develop wrist strength and grip, which are essential for overall forearm development.",
        primaryMuscles: ["Forearms"],
        secondaryMuscles: [],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 2,
            maxRecommendedSets: 4, 
            minRecommendedReps: 10,
            maxRecommendedReps: 15
        },
        instructions: [
            "Pick up a dumbbell in each hand while kneeling over a bench.",
            "With your palms facing upwards, flex each forearm by lifting and lowering the dumbbell using only your wrist.",
            "Exhale while raising your wrist, then inhale while lowering it.",
            "Repeat for the desired amount of reps and sets."
        ],
        commonMistakes: [
            "Using excessive arm movement instead of isolating the wrists",
            "Not controlling the weight on the way down"
        ],
        equipment: ["Dumbbell"],
        exerciseImages: ["exercises/dumbbellWristCurlPalmsUp.gif"],
        tags: ["Forearms", "Strength", "Beginner"]
    },
    {
        // 2) Barbell Wrist Curl (Palms Down)
        name: "Barbell Wrist Curl (Palms Down)",
        description: "This exercise targets the wrist extensors using a pronated (palms down) grip. It helps to build balanced forearm strength by isolating the muscles on the opposite side of those worked in wrist curls with palms up.",
        primaryMuscles: ["Forearms"],
        secondaryMuscles: [],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 2,
            maxRecommendedSets: 4, 
            minRecommendedReps: 10,
            maxRecommendedReps: 15
        },
        instructions: [
            "Place a barbell on the floor in front of a flat bench.",
            "Sit on the bench with your legs shoulder-width apart.",
            "Grab the barbell and bring it up so that your forearms rest on your thighs with your palms facing downward.",
            "Curl your wrists upwards, exhaling as you lift.",
            "Slowly lower your wrists back down while inhaling.",
            "Repeat for the desired amount of reps and sets."
        ],
        commonMistakes: [
            "Lifting with the entire arm instead of isolating the forearms",
            "Not using a full range of motion"
        ],
        equipment: ["Barbell"],
        exerciseImages: ["exercises/barbellWristCurlPalmsDown.gif"],
        tags: ["Forearms", "Strength", "Beginner"]
    },
    {
        // 3) Smith Machine Wrist Curl
        name: "Smith Machine Wrist Curl",
        description: "Utilizing the stability of a Smith machine, this exercise isolates the wrist flexors with minimal risk of improper form. The fixed path ensures a controlled movement, making it an effective option for building forearm strength.",
        primaryMuscles: ["Forearms"],
        secondaryMuscles: [],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 2,
            maxRecommendedSets: 4, 
            minRecommendedReps: 8,
            maxRecommendedReps: 12
        },
        instructions: [
            "Sit at the end of a flat bench positioned behind a weighted Smith machine, grabbing it with an underhand shoulder-width grip.",
            "Keep your elbows at your side and slowly lower the weight below your legs, squeezing your forearms, and hold for a count.",
            "Return back to the starting position.",
            "Repeat for the desired reps and sets."
        ],
        commonMistakes: [
            "Not fully extending the wrists at the bottom",
            "Using too much weight, leading to excessive momentum"
        ],
        equipment: ["Strength Machine", "Bench"],
        exerciseImages: ["exercises/smithMachineWristCurl.gif"],
        tags: ["Forearms", "Strength", "Beginner"]
    },
    {
        // 4) Barbell Wrist Curl (Posterior)
        name: "Barbell Wrist Curl (Posterior)",
        description: "Also known as the reverse wrist curl, this exercise focuses on the wrist extensors. By holding the barbell with your palms facing outward, you emphasize the muscles on the top of the forearm, contributing to improved grip strength and muscle balance.",
        primaryMuscles: ["Forearms"],
        secondaryMuscles: [],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 2,
            maxRecommendedSets: 4, 
            minRecommendedReps: 10,
            maxRecommendedReps: 15
        },
        instructions: [
            "Stand with your feet shoulder-width apart, holding a barbell with your palms facing outward.",
            "Lift the barbell up and down using only your wrists while keeping your arms straight.",
            "Maintain control throughout the motion to engage the forearms effectively."
        ],
        commonMistakes: [
            "Bending the elbows instead of isolating the wrists",
            "Rushing through the movement without proper control"
        ],
        equipment: ["Barbell"],
        exerciseImages: ["exercises/barbellWristCurlPosterior.gif"],
        tags: ["Forearms", "Strength", "Beginner"]
    },
    {
        // 5) Dumbbell One-Arm Wrist Curl (Pronated)
        name: "Dumbbell One-Arm Wrist Curl (Pronated)",
        description: "This unilateral exercise uses a pronated grip to specifically target the forearm extensors. It allows you to correct imbalances between arms and focuses on the controlled contraction of the muscles responsible for wrist extension.",
        primaryMuscles: ["Forearms"],
        secondaryMuscles: [],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 2,
            maxRecommendedSets: 4, 
            minRecommendedReps: 10,
            maxRecommendedReps: 15
        },
        instructions: [
            "Sit on the edge of a flat bench, keeping both feet on the floor.",
            "Hold a dumbbell with your forearm resting on your knee, palm facing downward.",
            "Curl the dumbbell up using only your wrist, feeling a stretch in your forearm.",
            "Lower the dumbbell back down and repeat.",
            "Switch arms and repeat for the desired reps and sets."
        ],
        commonMistakes: [
            "Using too much weight, reducing control",
            "Not keeping the forearm stable on the knee"
        ],
        equipment: ["Dumbbell"],
        exerciseImages: ["exercises/dumbbellOneArmWristCurlPronated.gif"],
        tags: ["Forearms", "Strength", "Intermediate"]
    },
    {
        // 6) Dumbbell Wrist Curl (Neutral Grip)
        name: "Dumbbell Wrist Curl (Neutral Grip)",
        description: "This variation is performed with a neutral grip, which balances the stress on the forearm muscles. It’s ideal for developing overall forearm strength while reducing strain on the wrists, making it a safe and effective exercise for beginners.",
        primaryMuscles: ["Forearms"],
        secondaryMuscles: [],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 2,
            maxRecommendedSets: 4, 
            minRecommendedReps: 10,
            maxRecommendedReps: 15
        },
        instructions: [
            "Kneel in front of a horizontal bench, resting your forearms on the padding while holding a dumbbell in each hand with a neutral grip.",
            "Lower the dumbbells below the bench as far as possible, squeezing your forearms.",
            "Hold for a count, then return to the starting position.",
            "Repeat for the desired reps and sets."
        ],
        commonMistakes: [
            "Not fully lowering the dumbbells to get a full stretch",
            "Using momentum instead of controlled movement"
        ],
        equipment: ["Dumbbell"],
        exerciseImages: ["exercises/dumbbellWristCurlNeutralGrip.gif"],
        tags: ["Forearms", "Strength", "Beginner"]
    },
    {
        // 7) EZ Bar Curl (Reverse Grip)
        name: "EZ Bar Curl (Reverse Grip)",
        description: "Using a reverse grip on an EZ bar, this exercise targets both the biceps and forearms. The reverse grip shifts emphasis to the wrist extensors, promoting balanced arm development while also enhancing grip strength.",
        primaryMuscles: ["Forearms"],
        secondaryMuscles: ["Biceps"],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 2,
            maxRecommendedSets: 4, 
            minRecommendedReps: 8,
            maxRecommendedReps: 12
        },
        instructions: [
            "Stand up straight with feet shoulder-width apart, holding a weighted EZ Bar at waist level with a reverse grip (palms facing down).",
            "Slowly curl the bar up toward your shoulders while squeezing your forearms.",
            "Hold for a moment, then lower the bar back to the starting position.",
            "Repeat for the desired reps and sets."
        ],
        commonMistakes: [
            "Letting the elbows move excessively instead of isolating the forearms",
            "Using too much weight, reducing control and range of motion"
        ],
        equipment: ["EZ Curl Bar"],
        exerciseImages: ["exercises/ezBarCurlReverseGrip.gif"],
        tags: ["Forearms", "Biceps", "Strength", "Beginner"]
    }
];

  