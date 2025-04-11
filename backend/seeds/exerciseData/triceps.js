/**
 * triceps.js
 * Exports an array of exercise objects for the "Triceps" muscle group.
 */

module.exports = [
    {
        // 1) Cable Tricep Pushdown (Rope)
        name: "Cable Tricep Pushdown (Rope)",
        description: "A staple isolation exercise for the triceps, the cable pushdown using a rope attachment provides constant tension throughout the movement. By splitting the rope at the bottom, it maximizes contraction and effectively targets all three heads of the triceps.",
        primaryMuscles: ["Triceps"],
        secondaryMuscles: [],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 2,
            maxRecommendedSets: 4,
            minRecommendedReps: 10,
            maxRecommendedReps: 12
        },
        instructions: [
            "Stand in front of a cable machine and attach a rope to the high pulley.",
            "Grip the attachment with an overhand (palms down) grip.",
            "Keep your elbows in at your sides and push the rope down towards your thighs.",
            "As you push down, split the rope apart at the bottom to isolate the triceps.",
            "Hold briefly, then return to the starting position."
        ],
        commonMistakes: [
            "Leaning forward too much, reducing tricep activation",
            "Not fully extending the arms at the bottom"
        ],
        equipment: ["Strength Machine"],
        exerciseImages: ["exercises/cableTricepPushdownRope.gif"],
        tags: ["Triceps", "Strength", "Beginner"]
    },
    {
        // 2) Dumbbell Seated Tricep Press
        name: "Dumbbell Seated Tricep Press",
        description: "An effective isolation exercise that targets the triceps through a pressing movement performed in a seated position. This exercise emphasizes controlled motion and a full range of extension, making it ideal for developing tricep strength and muscle definition.",
        primaryMuscles: ["Triceps"],
        secondaryMuscles: [],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 2,
            maxRecommendedSets: 4,
            minRecommendedReps: 8,
            maxRecommendedReps: 12
        },
        instructions: [
            "Sit on a short straight bench with feet planted firmly on the floor.",
            "Grip a dumbbell with both hands, palms facing up, above your head.",
            "Slowly lower the dumbbell in an arc motion behind your neck.",
            "Feel the stretch in your triceps and hold briefly.",
            "Return to the starting position."
        ],
        commonMistakes: [
            "Flaring elbows out too much, reducing effectiveness",
            "Using excessive momentum instead of controlled movement"
        ],
        equipment: ["Dumbbell"],
        exerciseImages: ["exercises/dumbbellSeatedTricepPress.gif"],
        tags: ["Triceps", "Strength", "Beginner"]
    },
    {
        // 3) Dumbbell Tricep Extension (Supine)
        name: "Dumbbell Tricep Extension (Supine)",
        description: "Performed lying on a bench, this exercise isolates the triceps by focusing on the extension of the elbow. It is particularly effective for targeting the long head of the triceps, enhancing muscle definition and strength when executed with strict form.",
        primaryMuscles: ["Triceps"],
        secondaryMuscles: ["Forearms"],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 2,
            maxRecommendedSets: 4,
            minRecommendedReps: 8,
            maxRecommendedReps: 12
        },
        instructions: [
            "Lie flat on a bench with a dumbbell in each hand, arms extended towards the ceiling.",
            "Keep your elbows stationary and slowly lower the dumbbells towards your head.",
            "Lower until your forearms are parallel to the floor or a good stretch is felt in the triceps.",
            "Pause briefly, then extend your arms back to the starting position."
        ],
        commonMistakes: [
            "Not keeping the elbows in a fixed position",
            "Using too much weight, leading to loss of control"
        ],
        equipment: ["Dumbbell"],
        exerciseImages: ["exercises/dumbbellTricepExtensionSupine.gif"],
        tags: ["Triceps", "Strength", "Intermediate"]
    },
    {
        // 4) Barbell Tricep Press (Supine)
        name: "Barbell Tricep Press (Supine)",
        description: "A compound triceps exercise performed while lying on a bench, the barbell tricep press isolates the triceps through an arc motion. It effectively builds arm strength and mass while also engaging the chest as a secondary muscle group.",
        primaryMuscles: ["Triceps"],
        secondaryMuscles: ["Chest"],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 2,
            maxRecommendedSets: 4,
            minRecommendedReps: 8,
            maxRecommendedReps: 12
        },
        instructions: [
            "Lie on a flat bench with feet planted firmly on the ground.",
            "Grip a barbell with an overhand grip, slightly narrower than shoulder-width.",
            "Extend your arms straight up above your chest.",
            "Slowly lower the bar in an arc over your head until a stretch is felt in your triceps.",
            "Return to the starting position."
        ],
        commonMistakes: [
            "Lowering the bar too fast, risking injury",
            "Not keeping the elbows close to the body"
        ],
        equipment: ["Barbell"],
        exerciseImages: ["exercises/barbellTricepPressSupine.gif"],
        tags: ["Triceps", "Strength", "Beginner"]
    },
    {
        // 5) Bench Dip
        name: "Bench Dip",
        description: "A bodyweight exercise that effectively isolates the triceps by using a bench for support. Bench dips are excellent for improving tricep endurance and strength, while also engaging the chest and shoulders as stabilizers.",
        primaryMuscles: ["Triceps"],
        secondaryMuscles: ["Chest"],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 2,
            maxRecommendedSets: 4,
            minRecommendedReps: 10,
            maxRecommendedReps: 15
        },
        instructions: [
            "Sit on a bench and place your hands on the edge with fingers facing forward.",
            "Extend your legs in front and place your feet on another bench or the floor.",
            "Lower your body by bending your elbows until your arms are at a 90-degree angle.",
            "Push back up to the starting position."
        ],
        commonMistakes: [
            "Lowering too quickly without control",
            "Shrugging shoulders instead of keeping them down"
        ],
        equipment: ["Bench"],
        exerciseImages: ["exercises/benchDip.gif"],
        tags: ["Triceps", "Strength", "Intermediate"]
    },
    {
        // 6) Dumbbell Incline Tricep Extension
        name: "Dumbbell Incline Tricep Extension",
        description: "Performed on an incline bench, this exercise emphasizes the triceps by stretching and contracting them through a greater range of motion. It is effective for targeting the long head of the triceps and enhancing overall arm definition.",
        primaryMuscles: ["Triceps"],
        secondaryMuscles: ["Shoulders"],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 2,
            maxRecommendedSets: 4,
            minRecommendedReps: 8,
            maxRecommendedReps: 12
        },
        instructions: [
            "Lie back on an incline bench holding a dumbbell in each hand above your shoulders.",
            "Lower the dumbbells behind your head by bending at the elbows.",
            "Hold briefly, then return to the starting position."
        ],
        commonMistakes: [
            "Allowing elbows to flare out excessively",
            "Using momentum instead of controlled movement"
        ],
        equipment: ["Dumbbell"],
        exerciseImages: ["exercises/dumbbellInclineTricepExtension.gif"],
        tags: ["Triceps", "Strength", "Intermediate"]
    },
    {
        // 7) Cable Tricep Kickback
        name: "Cable Tricep Kickback",
        description: "A cable-based isolation exercise that focuses on the triceps by extending the arm fully. The kickback ensures a strong contraction at the end of the movement, making it a popular choice for refining tricep muscle definition and strength.",
        primaryMuscles: ["Triceps"],
        secondaryMuscles: [],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 2,
            maxRecommendedSets: 4,
            minRecommendedReps: 10,
            maxRecommendedReps: 12
        },
        instructions: [
            "Attach a single handle to a low pulley cable machine.",
            "Grasp the handle with one hand, bending at the waist so your torso is nearly parallel to the floor.",
            "Keep your elbow close to your side and extend your arm straight back.",
            "Squeeze the tricep at the top, then return to the starting position."
        ],
        commonMistakes: [
            "Not keeping the upper arm stable",
            "Using too much weight, leading to improper form"
        ],
        equipment: ["Strength Machine"],
        exerciseImages: ["exercises/cableTricepKickback.gif"],
        tags: ["Triceps", "Strength", "Beginner"]
    },
    {
        // 8) Dip
        name: "Dip",
        description: "A challenging bodyweight exercise that primarily targets the triceps while also engaging the shoulders and chest. Dips require significant upper body strength and control, making them a key movement for developing powerful and defined arms.",
        primaryMuscles: ["Triceps"],
        secondaryMuscles: ["Shoulders", "Forearms"],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 2,
            maxRecommendedSets: 4,
            minRecommendedReps: 8,
            maxRecommendedReps: 15
        },
        instructions: [
            "Grip the parallel bars firmly and lift yourself up so your arms are fully extended.",
            "Lower your body by bending your elbows, keeping them close to your body.",
            "Descend until your upper arms are parallel to the ground or slightly below.",
            "Push yourself back up to the starting position without locking your elbows."
        ],
        commonMistakes: [
            "Flaring elbows too much, reducing tricep activation",
            "Not lowering to a full range of motion",
            "Swinging the body instead of controlled movement"
        ],
        equipment: ["Strength Machine"],
        exerciseImages: ["exercises/dip.gif"],
        tags: ["Triceps", "Strength", "Intermediate"]
    },
    {
        // 9) Cable Tricep Pushdown (V-Bar)
        name: "Cable Tricep Pushdown (V-Bar)",
        description: "Similar to the rope variation but using a V-Bar attachment, this exercise provides a different grip angle to emphasize the triceps. It ensures constant tension throughout the movement and is excellent for building arm strength and muscle definition.",
        primaryMuscles: ["Triceps"],
        secondaryMuscles: [],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 2,
            maxRecommendedSets: 4,
            minRecommendedReps: 10,
            maxRecommendedReps: 12
        },
        instructions: [
            "Stand in front of a cable machine and attach a V-Bar to the high pulley.",
            "Grip the V-Bar with an overhand grip and keep elbows close to your body.",
            "Push the bar straight down towards your thighs until your arms are fully extended.",
            "Hold briefly, then return back to the starting position."
        ],
        commonMistakes: [
            "Allowing elbows to flare out",
            "Not fully extending the arms at the bottom"
        ],
        equipment: ["Strength Machine"],
        exerciseImages: ["exercises/cableTricepPushdownVBar.gif"],
        tags: ["Triceps", "Strength", "Beginner"]
    },
    {
        // 10) Machine Tricep Extension
        name: "Machine Tricep Extension",
        description: "An isolation exercise performed on a dedicated machine that allows for a controlled movement to target the triceps. The machine ensures consistent resistance and proper form, making it an effective tool for developing tricep strength.",
        primaryMuscles: ["Triceps"],
        secondaryMuscles: [],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 2,
            maxRecommendedSets: 4,
            minRecommendedReps: 10,
            maxRecommendedReps: 12
        },
        instructions: [
            "Adjust the seat height so your upper arms rest flat on the pad.",
            "Grasp the handles and extend your arms downward, squeezing your triceps.",
            "Hold briefly, then slowly return to the starting position."
        ],
        commonMistakes: [
            "Not keeping elbows fixed in position",
            "Using momentum instead of controlled movement"
        ],
        equipment: ["Strength Machine"],
        exerciseImages: ["exercises/machineTricepExtension.gif"],
        tags: ["Triceps", "Strength", "Intermediate"]
    },
    {
        // 11) Machine Dip
        name: "Machine Dip",
        description: "A guided version of the traditional dip that uses a machine to assist in body stabilization. This exercise effectively isolates the triceps while reducing the need for advanced body control, making it a great option for beginners looking to build foundational strength.",
        primaryMuscles: ["Triceps"],
        secondaryMuscles: ["Shoulders", "Chest"],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 2,
            maxRecommendedSets: 4,
            minRecommendedReps: 8,
            maxRecommendedReps: 15
        },
        instructions: [
            "Sit on a dip machine and grab the handles with a firm grip.",
            "Keep your elbows tucked in and push down on the handles, squeezing your triceps.",
            "Hold at the bottom, then slowly return to the starting position."
        ],
        commonMistakes: [
            "Using too much weight, leading to improper form",
            "Not controlling the movement on the way down"
        ],
        equipment: ["Strength Machine"],
        exerciseImages: ["exercises/machineDip.gif"],
        tags: ["Triceps", "Strength", "Beginner"]
    },
    {
        // 12) Dumbbell One-Arm Tricep Kickback
        name: "Dumbbell One-Arm Tricep Kickback",
        description: "A unilateral isolation exercise that focuses on the triceps by extending the arm fully backward. This movement is excellent for emphasizing the contraction of the tricep muscles and for correcting any imbalances between arms.",
        primaryMuscles: ["Triceps"],
        secondaryMuscles: [],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 2,
            maxRecommendedSets: 4,
            minRecommendedReps: 10,
            maxRecommendedReps: 12
        },
        instructions: [
            "Stand beside a bench, place one knee and hand on it for support.",
            "Hold a dumbbell in your other hand, keeping your elbow bent at 90 degrees.",
            "Extend your arm fully backward until your arm is straight, squeezing the triceps.",
            "Hold briefly, then return to the starting position."
        ],
        commonMistakes: [
            "Not keeping the upper arm stationary",
            "Using momentum instead of controlled movement"
        ],
        equipment: ["Dumbbell"],
        exerciseImages: ["exercises/dumbbellOneArmTricepKickback.gif"],
        tags: ["Triceps", "Strength", "Beginner"]
    }
];

  