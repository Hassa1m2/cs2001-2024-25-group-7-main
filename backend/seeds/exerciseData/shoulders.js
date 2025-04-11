/**
 * shoulders.js
 * Exports an array of exercise objects for the "Shoulders" muscle group.
 */

module.exports = [
    {
        // 1) Dumbbell Lateral Raise
        name: "Dumbbell Lateral Raise",
        description: "A fundamental isolation exercise for the shoulders, the dumbbell lateral raise targets the lateral deltoids. This movement is essential for creating width in the upper body and is widely used to sculpt and define the shoulder muscles.",
        primaryMuscles: ["Shoulders"],
        secondaryMuscles: [],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 2,
            maxRecommendedSets: 4,
            minRecommendedReps: 10,
            maxRecommendedReps: 12
        },
        instructions: [
            "Stand with feet shoulder-width apart, holding a dumbbell in each hand by your sides.",
            "Raise your arms out to the sides until they reach shoulder height, keeping a slight bend in your elbows.",
            "Pause briefly at the top, ensuring your shoulders stay level.",
            "Lower the dumbbells back to the starting position in a controlled manner."
        ],
        commonMistakes: [
            "Using momentum instead of controlled movement",
            "Lifting weights too high above shoulder level",
            "Shrugging shoulders instead of isolating the delts"
        ],
        equipment: ["Dumbbell"],
        exerciseImages: ["exercises/dumbbellLateralRaise.gif"],
        tags: ["Shoulders", "Strength", "Beginner"]
    },
    {
        // 2) Dumbbell Alternating Shoulder Press
        name: "Dumbbell Alternating Shoulder Press",
        description: "A dynamic variation of the shoulder press, this exercise trains each shoulder independently. Alternating the press allows for improved focus on muscle contraction and can help correct imbalances, while also engaging the triceps for added upper-body strength.",
        primaryMuscles: ["Shoulders"],
        secondaryMuscles: ["Triceps"],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 2,
            maxRecommendedSets: 4,
            minRecommendedReps: 8,
            maxRecommendedReps: 12
        },
        instructions: [
            "Stand with feet shoulder-width apart, holding a dumbbell in each hand at head level with a neutral grip.",
            "Press one dumbbell overhead while keeping the other at head level.",
            "Lower the dumbbell back down, then repeat with the opposite arm.",
            "Continue alternating arms for the desired number of reps."
        ],
        commonMistakes: [
            "Arching the back instead of keeping the core engaged",
            "Using excessive weight, leading to improper form"
        ],
        equipment: ["Dumbbell"],
        exerciseImages: ["exercises/dumbbellAlternatingShoulderPress.gif"],
        tags: ["Shoulders", "Strength", "Beginner"]
    },
    {
        // 3) Dumbbell Dublin Press
        name: "Dumbbell Dublin Press",
        description: "A slightly unconventional press variation that emphasizes shoulder strength and stability. The Dumbbell Dublin Press requires controlled movement to ensure proper isolation of the deltoids and triceps, making it an excellent addition for intermediate shoulder training.",
        primaryMuscles: ["Shoulders"],
        secondaryMuscles: ["Triceps"],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 2,
            maxRecommendedSets: 4,
            minRecommendedReps: 10,
            maxRecommendedReps: 12
        },
        instructions: [
            "Stand with feet shoulder-width apart, holding a dumbbell in each hand at shoulder level.",
            "Extend your arms overhead while squeezing your shoulders.",
            "Lower the dumbbells back down to shoulder level in a controlled motion.",
            "Repeat for the desired reps and sets."
        ],
        commonMistakes: [
            "Not maintaining control while lowering the dumbbells",
            "Locking elbows too forcefully at the top"
        ],
        equipment: ["Dumbbell"],
        exerciseImages: ["exercises/dumbbellDublinPress.gif"],
        tags: ["Shoulders", "Strength", "Intermediate"]
    },
    {
        // 4) Cable One-Arm Lateral Raise
        name: "Cable One-Arm Lateral Raise",
        description: "An excellent variation that uses cable resistance to provide constant tension on the shoulder muscles. This unilateral movement isolates the lateral deltoid and promotes improved muscle definition and balance.",
        primaryMuscles: ["Shoulders"],
        secondaryMuscles: [],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 2,
            maxRecommendedSets: 4,
            minRecommendedReps: 10,
            maxRecommendedReps: 12
        },
        instructions: [
            "Set up a handle on a low pulley cable machine and stand to the side of the weight stack.",
            "Hold the handle with the arm opposite the machine, keeping your hand at waist level.",
            "Slowly raise your arm outward in a semi-circle motion until it reaches shoulder height.",
            "Hold briefly, then lower back to the starting position."
        ],
        commonMistakes: [
            "Using excessive momentum",
            "Shrugging shoulders instead of isolating the delts"
        ],
        equipment: ["Strength Machine"],
        exerciseImages: ["exercises/cableOneArmLateralRaise.gif"],
        tags: ["Shoulders", "Strength", "Beginner"]
    },
    {
        // 5) Dumbbell Seated Shoulder Press
        name: "Dumbbell Seated Shoulder Press",
        description: "A controlled, seated press that minimizes lower body involvement and maximizes shoulder engagement. This exercise effectively targets the deltoids while also recruiting the triceps and core for stability, making it a staple for building shoulder strength.",
        primaryMuscles: ["Shoulders"],
        secondaryMuscles: ["Triceps", "Abs"],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 2,
            maxRecommendedSets: 4,
            minRecommendedReps: 8,
            maxRecommendedReps: 12
        },
        instructions: [
            "Sit on an upright bench with a dumbbell in each hand at shoulder height.",
            "Press the dumbbells overhead until your arms are fully extended.",
            "Lower the dumbbells back to shoulder height in a controlled motion.",
            "Repeat for the desired reps and sets."
        ],
        commonMistakes: [
            "Arching the back instead of engaging the core",
            "Lowering the weights too fast, causing loss of control"
        ],
        equipment: ["Dumbbell"],
        exerciseImages: ["exercises/dumbbellSeatedShoulderPress.gif"],
        tags: ["Shoulders", "Strength", "Intermediate"]
    },
    {
        // 6) Dumbbell Seated Bent-Over Reverse Fly
        name: "Dumbbell Seated Bent-Over Reverse Fly",
        description: "This exercise focuses on the posterior deltoids and upper back by using a bent-over position to isolate the reverse fly movement. It’s particularly effective for improving shoulder posture and balance by counteracting forward shoulder rounding.",
        primaryMuscles: ["Shoulders"],
        secondaryMuscles: [],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 2,
            maxRecommendedSets: 4,
            minRecommendedReps: 10,
            maxRecommendedReps: 12
        },
        instructions: [
            "Sit on the edge of a flat bench with a dumbbell in each hand and feet together.",
            "Bend forward so that your chest is resting on your thighs, with arms extended down.",
            "Slowly raise the dumbbells outward until they reach head level.",
            "Hold briefly, then return to the starting position."
        ],
        commonMistakes: [
            "Using too much weight and swinging the arms",
            "Not engaging the shoulders properly"
        ],
        equipment: ["Dumbbell"],
        exerciseImages: ["exercises/dumbbellSeatedBentOverReverseFly.gif"],
        tags: ["Shoulders", "Strength", "Beginner"]
    },
    {
        // 7) Dumbbell Seated One-Arm Front Raise
        name: "Dumbbell Seated One-Arm Front Raise",
        description: "An isolation exercise that targets the anterior deltoids, the dumbbell seated one-arm front raise helps build shoulder definition and strength. Performing the movement one arm at a time allows for focused muscle engagement and improved balance.",
        primaryMuscles: ["Shoulders"],
        secondaryMuscles: [],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 2,
            maxRecommendedSets: 4,
            minRecommendedReps: 8,
            maxRecommendedReps: 12
        },
        instructions: [
            "Sit up straight at the end of a flat bench, holding a dumbbell in one hand with an overhand grip.",
            "Slowly lift your arm straight up towards the ceiling while squeezing your shoulder.",
            "Pause briefly at the top, then return back to the starting position.",
            "Repeat for the desired reps and sets, then switch arms."
        ],
        commonMistakes: [
            "Swinging the dumbbell instead of using controlled motion",
            "Lifting the dumbbell too high, causing unnecessary strain"
        ],
        equipment: ["Dumbbell"],
        exerciseImages: ["exercises/dumbbellSeatedOneArmFrontRaise.gif"],
        tags: ["Shoulders", "Strength", "Beginner"]
    },
    {
        // 8) Smith Machine Shoulder Press
        name: "Smith Machine Shoulder Press",
        description: "A guided version of the shoulder press using a Smith machine that ensures a stable movement path. This exercise effectively targets the deltoids and triceps while reducing the risk of improper form, making it a reliable choice for beginners.",
        primaryMuscles: ["Shoulders"],
        secondaryMuscles: ["Triceps"],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 2,
            maxRecommendedSets: 4,
            minRecommendedReps: 8,
            maxRecommendedReps: 12
        },
        instructions: [
            "Place an incline bench underneath a Smith machine and adjust the bar to a reachable height.",
            "Grip the barbell with palms facing forward and unrack it from the rack.",
            "Lower the barbell until it reaches chin level while maintaining control.",
            "Press the barbell back up to the starting position by squeezing your shoulders."
        ],
        commonMistakes: [
            "Lowering the bar too quickly, leading to loss of control",
            "Arching the lower back instead of keeping the core engaged"
        ],
        equipment: ["Strength Machine"],
        exerciseImages: ["exercises/smithMachineShoulderPress.gif"],
        tags: ["Shoulders", "Strength", "Beginner"]
    },
    {
        // 9) Band Reverse Fly
        name: "Band Reverse Fly",
        description: "An excellent exercise for targeting the rear deltoids, the band reverse fly utilizes resistance bands to provide continuous tension throughout the movement. This exercise is ideal for correcting posture and balancing shoulder development by strengthening the upper back and posterior delts.",
        primaryMuscles: ["Shoulders"],
        secondaryMuscles: [],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 2,
            maxRecommendedSets: 4,
            minRecommendedReps: 10,
            maxRecommendedReps: 15
        },
        instructions: [
            "Secure a resistance band to a stable anchor point at chest height.",
            "Stand facing the anchor, holding one end of the band in each hand.",
            "With a slight bend in the elbows, pull the band apart by moving your arms out to the sides.",
            "Squeeze your shoulder blades together, then return to the starting position in a controlled manner."
        ],
        commonMistakes: [
            "Using excessive momentum instead of controlled movement",
            "Not fully squeezing the shoulder blades at the peak"
        ],
        equipment: ["Bands"],
        exerciseImages: ["exercises/bandReverseFly.gif"],
        tags: ["Shoulders", "Strength", "Beginner"]
    },
    {
        // 10) Cable Bent-Over Lateral Pulley
        name: "Cable Bent-Over Lateral Pulley",
        description: "A unique cable variation that targets the rear deltoids and upper back through a bent-over movement. This exercise helps to improve shoulder stability and posture by emphasizing controlled, cross-body motion.",
        primaryMuscles: ["Shoulders"],
        secondaryMuscles: [],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 2,
            maxRecommendedSets: 4,
            minRecommendedReps: 10,
            maxRecommendedReps: 12
        },
        instructions: [
            "Set up handles on two low pulley cable machines and stand between them with feet shoulder-width apart.",
            "Bend forward so that your back is parallel with the floor, keeping your lower body stable.",
            "Grab each handle with the opposite hand and bring them in towards your chest with arms crossed.",
            "Slowly extend your arms outward, feeling a stretch in your shoulders, and squeeze at the peak.",
            "Hold briefly, then return back to the starting position."
        ],
        commonMistakes: [
            "Using too much weight, causing excessive swinging",
            "Not maintaining a neutral spine while bending over"
        ],
        equipment: ["Strength Machine"],
        exerciseImages: ["exercises/cableBentOverLateralPulley.gif"],
        tags: ["Shoulders", "Strength", "Beginner"]
    },
    {
        // 11) Kettlebell Seated Press
        name: "Kettlebell Seated Press",
        description: "A versatile press performed in a seated position that challenges shoulder strength and stability using a kettlebell. This exercise emphasizes controlled movement and is excellent for developing overall shoulder power and endurance.",
        primaryMuscles: ["Shoulders"],
        secondaryMuscles: ["Triceps"],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 2,
            maxRecommendedSets: 4,
            minRecommendedReps: 8,
            maxRecommendedReps: 12
        },
        instructions: [
            "Sit on the floor with legs spread wide for stability.",
            "Clean press a kettlebell to your shoulder, then press it overhead using your shoulders' momentum.",
            "Hold briefly at the top, ensuring your arm is fully extended.",
            "Lower the kettlebell back to the starting position and repeat for the desired reps.",
            "Switch sides and repeat the exercise."
        ],
        commonMistakes: [
            "Using too much weight, leading to instability",
            "Not fully locking out the elbow at the top"
        ],
        equipment: ["Kettlebell"],
        exerciseImages: ["exercises/kettlebellSeatedPress.gif"],
        tags: ["Shoulders", "Strength", "Intermediate"]
    }
];
  