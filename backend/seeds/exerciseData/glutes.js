/**
 * glutes.js
 * Exports an array of exercise objects for the "Glutes" muscle group.
 */

module.exports = [
    {
        // 1) Barbell Hip Thrust
        name: "Barbell Hip Thrust",
        description: "A powerhouse exercise for targeting the gluteus maximus, the barbell hip thrust is renowned for its ability to build glute strength and size. By driving through the heels and fully extending the hips, it places maximum tension on the glutes while also engaging the hamstrings and lower back.",
        primaryMuscles: ["Glutes"],
        secondaryMuscles: ["Lower Legs", "Upper Legs"],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 2,
            maxRecommendedSets: 4,
            minRecommendedReps: 8,
            maxRecommendedReps: 12
        },
        instructions: [
            "Start seated on the ground with your back resting on a bench.",
            "Position a weighted barbell above your hips as the starting position.",
            "Lean your back against the bench and rest your shoulders on the top of it.",
            "Push your hips up vertically, keeping the barbell over your pelvis region while supporting the weight with your back and heels.",
            "Lower back down and repeat for the desired reps and sets."
        ],
        commonMistakes: [
            "Not fully extending the hips at the top",
            "Placing the feet too far forward or backward"
        ],
        equipment: ["Barbell"],
        exerciseImages: ["exercises/barbellHipThrust.gif"],
        tags: ["Glutes", "Strength", "Power", "Intermediate"]
    },
    {
        // 2) Bench Hip Thrust
        name: "Bench Hip Thrust",
        description: "A variation of the hip thrust performed with the back on a bench, this exercise emphasizes glute activation while also engaging the core and hamstrings. Its controlled movement makes it ideal for beginners looking to build foundational glute strength.",
        primaryMuscles: ["Glutes"],
        secondaryMuscles: ["Upper Legs", "Lower Legs", "Abs"],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 2,
            maxRecommendedSets: 4,
            minRecommendedReps: 10,
            maxRecommendedReps: 15
        },
        instructions: [
            "Lay with your back on a flat bench, feet hanging off one end, and grip the bench above your head.",
            "Keep feet and knees together, then bring them up towards the ceiling while keeping them straight.",
            "Thrust your hips up off the bench, then lower back down slowly.",
            "Repeat for the desired reps and sets."
        ],
        commonMistakes: [
            "Using momentum instead of controlled movement",
            "Not fully engaging the glutes at the top"
        ],
        equipment: ["Bench"],
        exerciseImages: ["exercises/benchHipThrust.gif"],
        tags: ["Glutes", "Strength", "Beginner"]
    },
    {
        // 3) Machine Single-Leg Press
        name: "Machine Single-Leg Press",
        description: "A unilateral exercise that isolates the glutes and quads by forcing each leg to work independently. This machine-based movement is excellent for addressing muscle imbalances and developing both strength and stability in the lower body.",
        primaryMuscles: ["Glutes"],
        secondaryMuscles: ["Upper Legs", "Lower Legs"],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 2,
            maxRecommendedSets: 4,
            minRecommendedReps: 8,
            maxRecommendedReps: 12
        },
        instructions: [
            "Adjust a leg press machine with the desired weight.",
            "Sit down and position one leg against the footrest.",
            "Extend your foot to release the weight, then slowly lower the weight down until your leg is at a 45-degree angle, squeezing your glutes.",
            "Hold for a count, then press back to the starting position.",
            "Repeat for the desired reps and sets."
        ],
        commonMistakes: [
            "Not controlling the descent",
            "Using too much weight, leading to improper form"
        ],
        equipment: ["Strength Machine"],
        exerciseImages: ["exercises/machineSingleLegPress.gif"],
        tags: ["Glutes", "Strength", "Intermediate"]
    },
    {
        // 4) Cable Leg Kickback
        name: "Cable Leg Kickback",
        description: "A targeted isolation movement that focuses on the glutes by extending the leg backward against cable resistance. This exercise is highly effective for sculpting the glute muscles and is often included in rehabilitation and glute activation routines.",
        primaryMuscles: ["Glutes"],
        secondaryMuscles: ["Upper Legs"],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 2,
            maxRecommendedSets: 4,
            minRecommendedReps: 12,
            maxRecommendedReps: 15
        },
        instructions: [
            "Attach an ankle strap to a low pulley cable machine and secure it to one ankle.",
            "Stand in front of the machine and place your hands against it for support.",
            "Move the weighted leg backward, extending it as far as possible while engaging the glutes.",
            "Hold briefly at the top, then return to the starting position.",
            "Repeat for the desired reps and sets, then switch legs."
        ],
        commonMistakes: [
            "Swinging the leg instead of controlled movements",
            "Leaning too far forward, reducing glute engagement"
        ],
        equipment: ["Strength Machine"],
        exerciseImages: ["exercises/cableLegKickback.gif"],
        tags: ["Glutes", "Strength", "Beginner"]
    },
    {
        // 5) Barbell Glute Bridge
        name: "Barbell Glute Bridge",
        description: "A foundational movement for glute development, the barbell glute bridge focuses on hip extension to maximize glute contraction. This exercise is popular in both strength training and rehabilitation settings for enhancing lower body power.",
        primaryMuscles: ["Glutes"],
        secondaryMuscles: ["Lower Legs", "Upper Legs"],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 2,
            maxRecommendedSets: 4,
            minRecommendedReps: 10,
            maxRecommendedReps: 12
        },
        instructions: [
            "Lie flat on your back with a weighted barbell resting above your legs.",
            "Roll the bar so it rests above your hips.",
            "With feet planted, push through your heels and lift your hips upward.",
            "Squeeze the glutes at the top, then slowly return to the starting position.",
            "Repeat for the desired reps and sets."
        ],
        commonMistakes: [
            "Arching the lower back instead of engaging the glutes",
            "Not reaching full hip extension at the top"
        ],
        equipment: ["Barbell"],
        exerciseImages: ["exercises/barbellGluteBridge.gif"],
        tags: ["Glutes", "Power", "Strength", "Intermediate"]
    },
    {
        // 6) Barbell Kneeling Squat
        name: "Barbell Kneeling Squat",
        description: "A dynamic movement that challenges the glutes and lower body through a kneeling squat variation. It emphasizes controlled hip movement and is an effective exercise for building explosive power and balance in the glutes.",
        primaryMuscles: ["Glutes"],
        secondaryMuscles: ["Lower Legs", "Upper Legs"],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 2,
            maxRecommendedSets: 4,
            minRecommendedReps: 8,
            maxRecommendedReps: 10
        },
        instructions: [
            "Start in a kneeling position with a weighted barbell resting on your shoulders.",
            "Lower your pelvis down until your glutes touch your calves.",
            "Push your hips forward to return to the starting position.",
            "Repeat for the desired reps and sets."
        ],
        commonMistakes: [
            "Not maintaining a neutral spine",
            "Rushing through the movement without control"
        ],
        equipment: ["Barbell"],
        exerciseImages: ["exercises/barbellKneelingSquat.gif"],
        tags: ["Glutes", "Power", "Intermediate"]
    },
    {
        // 7) Bridge
        name: "Bridge",
        description: "A simple yet effective bodyweight exercise, the bridge focuses on strengthening the glutes and lower back. Often used as a warm-up or accessory movement, it helps improve hip mobility and core stability.",
        primaryMuscles: ["Glutes"],
        secondaryMuscles: [],
        logType: "time",
        recommended: {
            timeInMinutes: 1
        },
        instructions: [
            "Lie on your back with your knees bent and feet flat on the floor.",
            "Lift your hips off the ground while keeping your abs engaged and glutes tight.",
            "Hold the position for the desired duration, then lower back to the ground.",
            "Repeat for the desired sets."
        ],
        commonMistakes: [
            "Overarching the lower back instead of engaging the core",
            "Not holding the top position long enough"
        ],
        equipment: ["Body Weight"],
        exerciseImages: ["exercises/bridge.gif"],
        tags: ["Glutes", "Strength", "Beginner"]
    },
    {
        // 8) Smith Machine Split Squat
        name: "Smith Machine Split Squat",
        description: "A unilateral lower-body exercise performed under the stability of a Smith machine, this movement targets the glutes and legs by isolating each side independently. It helps correct muscle imbalances and develops strength and stability in the lower body.",
        primaryMuscles: ["Glutes"],
        secondaryMuscles: [],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 2,
            maxRecommendedSets: 4,
            minRecommendedReps: 10,
            maxRecommendedReps: 12
        },
        instructions: [
            "Begin in a lunge position underneath a Smith machine bar with one foot in front and one in the back.",
            "Release the bar off the guides and slowly lower until your thighs are parallel to the floor.",
            "Hold briefly, then push back up to the starting position.",
            "Repeat for the desired reps and sets, then switch legs."
        ],
        commonMistakes: [
            "Not maintaining a straight posture",
            "Allowing the front knee to extend too far past the toes"
        ],
        equipment: ["Strength Machine"],
        exerciseImages: ["exercises/smithMachineSplitSquat.gif"],
        tags: ["Glutes", "Strength", "Beginner"]
    },
    {
        // 9) Barbell Lateral Lunge
        name: "Barbell Lateral Lunge",
        description: "A lateral movement that targets the glutes and inner thighs, the barbell lateral lunge improves lower body strength and stability. This exercise challenges balance and coordination while emphasizing muscle engagement in the glute region.",
        primaryMuscles: ["Glutes"],
        secondaryMuscles: ["Upper Legs"],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 2,
            maxRecommendedSets: 4,
            minRecommendedReps: 8,
            maxRecommendedReps: 10
        },
        instructions: [
            "Stand with feet shoulder-width apart, holding a barbell across your upper back with hands wider than shoulder-width.",
            "Take a short lateral step in one direction, bending the leading knee while keeping the other leg straight.",
            "Lower until you feel a stretch in your thighs, keeping your chest upright.",
            "Push off the leading foot to return to the starting position.",
            "Repeat for the desired reps and sets, then switch sides."
        ],
        commonMistakes: [
            "Leaning too far forward",
            "Not fully engaging the glutes and legs"
        ],
        equipment: ["Barbell"],
        exerciseImages: ["exercises/barbellLateralLunge.gif"],
        tags: ["Glutes", "Strength", "Intermediate"]
    },
    {
        // 10) Barbell Kneeling Jump Squat
        name: "Barbell Kneeling Jump Squat",
        description: "An explosive and dynamic movement, the barbell kneeling jump squat combines strength and power by challenging the glutes and lower body to generate force. This advanced exercise is often used in Olympic-style training and plyometric workouts to improve athletic performance.",
        primaryMuscles: ["Glutes"],
        secondaryMuscles: ["Lower Legs", "Upper Legs"],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 2,
            maxRecommendedSets: 4,
            minRecommendedReps: 6,
            maxRecommendedReps: 8
        },
        instructions: [
            "Start in a kneeling position on the floor with a weighted barbell resting on your shoulders.",
            "Lean back with your pelvis until your glutes touch your heels.",
            "Explode forward and upward using your hips, generating enough power to lift your feet off the ground.",
            "Land in a squat position and then push up into a full standing position.",
            "Repeat for the desired reps and sets."
        ],
        commonMistakes: [
            "Not generating enough explosive power",
            "Landing too hard, which can increase joint strain"
        ],
        equipment: ["Barbell"],
        exerciseImages: ["exercises/barbellKneelingJumpSquat.gif"],
        tags: ["Glutes", "Olympic", "Advanced"]
    }
];

  