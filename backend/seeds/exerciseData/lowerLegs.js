/**
 * lowerLegs.js
 * Exports an array of exercise objects for the "Lower Legs" muscle group.
 */

module.exports = [
    {
        // 1) Barbell Squat
        name: "Barbell Squat",
        description: "A fundamental compound exercise that targets the quadriceps, glutes, and hamstrings. The barbell squat is essential for building lower body strength and power while engaging the core for stability, making it a staple in any leg training program.",
        primaryMuscles: ["Upper Legs"],
        secondaryMuscles: ["Glutes", "Lower Legs"],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 3,
            maxRecommendedSets: 5,
            minRecommendedReps: 6,
            maxRecommendedReps: 12
        },
        instructions: [
            "Stand with your feet shoulder-width apart with a barbell resting on your upper back.",
            "Keep your chest up and core engaged as you lower your body by bending your knees and hips until your thighs are parallel to the ground.",
            "Push through your heels to return to the starting position.",
            "Repeat for the desired number of reps and sets."
        ],
        commonMistakes: [
            "Allowing knees to cave inward",
            "Leaning too far forward",
            "Rounding the back"
        ],
        equipment: ["Barbell"],
        exerciseImages: ["exercises/barbellSquat.gif"],
        tags: ["Upper Legs", "Glutes", "Strength", "Beginner"]
    },
    {
        // 2) Leg Press
        name: "Leg Press",
        description: "A machine-based exercise that isolates the quadriceps, glutes, and hamstrings while reducing stress on the lower back. The leg press is popular for its ability to safely load the lower body, promoting muscle hypertrophy and strength gains.",
        primaryMuscles: ["Upper Legs"],
        secondaryMuscles: ["Glutes", "Hamstrings"],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 3,
            maxRecommendedSets: 4,
            minRecommendedReps: 8,
            maxRecommendedReps: 15
        },
        instructions: [
            "Sit on the leg press machine and place your feet shoulder-width apart on the platform.",
            "Release the safety handles and lower the platform until your knees form a 90-degree angle.",
            "Press the platform back up by extending your legs without locking your knees.",
            "Repeat for the desired number of reps and sets."
        ],
        commonMistakes: [
            "Locking the knees at full extension",
            "Not controlling the movement during descent"
        ],
        equipment: ["Strength Machine"],
        exerciseImages: ["exercises/machineSingleLegPress.gif"],
        tags: ["Upper Legs", "Strength", "Beginner"]
    },
    {
        // 3) Romanian Deadlift
        name: "Romanian Deadlift",
        description: "An essential exercise for targeting the hamstrings, glutes, and lower back, the Romanian deadlift emphasizes a hip hinge movement. It builds posterior chain strength and improves hamstring flexibility, making it a key component of lower body training.",
        primaryMuscles: ["Hamstrings"],
        secondaryMuscles: ["Glutes", "Lower Back"],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 3,
            maxRecommendedSets: 4,
            minRecommendedReps: 8,
            maxRecommendedReps: 12
        },
        instructions: [
            "Stand with feet hip-width apart holding a barbell in front of your thighs with an overhand grip.",
            "Keep a slight bend in the knees and hinge at your hips to lower the bar along your legs.",
            "Lower until you feel a stretch in your hamstrings, then drive your hips forward to return to the starting position."
        ],
        commonMistakes: [
            "Rounding the back",
            "Lowering the bar too far",
            "Relying on the lower back instead of the hamstrings"
        ],
        equipment: ["Barbell"],
        exerciseImages: ["exercises/dumbbellRomanianDeadlift.gif"],
        tags: ["Hamstrings", "Glutes", "Strength", "Intermediate"]
    },
    {
        // 4) Bulgarian Split Squat
        name: "Bulgarian Split Squat",
        description: "A unilateral lower-body exercise that targets the quadriceps, glutes, and hamstrings while challenging balance and core stability. By elevating the rear foot, this exercise increases the range of motion and intensifies muscle engagement on the front leg.",
        primaryMuscles: ["Upper Legs"],
        secondaryMuscles: ["Glutes", "Hamstrings"],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 3,
            maxRecommendedSets: 4,
            minRecommendedReps: 8,
            maxRecommendedReps: 12
        },
        instructions: [
            "Stand a few feet in front of a bench and place the top of one foot on the bench behind you.",
            "Lower your body until your front thigh is parallel to the ground, ensuring your knee stays in line with your foot.",
            "Push through your front heel to return to the starting position.",
            "Repeat for the desired reps and sets before switching legs."
        ],
        commonMistakes: [
            "Allowing the front knee to cave inward",
            "Not keeping the torso upright",
            "Using momentum instead of controlled movement"
        ],
        equipment: ["Body Weight", "Dumbbell", "Barbell"],
        exerciseImages: ["exercises/smithMachineBulgarianSplitSquat.gif"],
        tags: ["Upper Legs", "Glutes", "Strength", "Intermediate"]
    },
    {
        // 5) Lunge
        name: "Lunge",
        description: "A dynamic, compound exercise that targets the quadriceps, glutes, and hamstrings. The walking lunge also improves balance and coordination, making it a versatile movement that can be performed with or without added resistance.",
        primaryMuscles: ["Upper Legs"],
        secondaryMuscles: ["Glutes", "Hamstrings"],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 3,
            maxRecommendedSets: 4,
            minRecommendedReps: 10,
            maxRecommendedReps: 20
        },
        instructions: [
            "Stand upright with your feet hip-width apart.",
            "Step forward with one leg and lower your hips until both knees are bent at about 90 degrees.",
            "Push off your back foot and step forward into the next lunge.",
            "Continue walking forward in a controlled manner for the desired reps or distance."
        ],
        commonMistakes: [
            "Allowing the front knee to push past the toes",
            "Not keeping the torso upright"
        ],
        equipment: ["Body Weight", "Dumbbell"],
        exerciseImages: ["exercises/dumbbellLunge.gif"],
        tags: ["Upper Legs", "Glutes", "Strength", "Beginner"]
    },
    {
        // 6) Leg Extension
        name: "Leg Extension",
        description: "An isolation exercise that primarily targets the quadriceps. The leg extension machine allows you to focus on the front of your thighs by extending your legs, making it ideal for sculpting and strengthening the quads while minimizing the involvement of other muscle groups.",
        primaryMuscles: ["Upper Legs"],
        secondaryMuscles: [],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 3,
            maxRecommendedSets: 4,
            minRecommendedReps: 10,
            maxRecommendedReps: 15
        },
        instructions: [
            "Sit on a leg extension machine with your back firmly against the pad and your legs under the padded lever.",
            "Extend your legs fully by contracting your quadriceps, holding the contraction briefly at the top.",
            "Slowly lower the weight back to the starting position.",
            "Repeat for the desired reps and sets."
        ],
        commonMistakes: [
            "Lifting too quickly, reducing time under tension",
            "Locking the knees at full extension"
        ],
        equipment: ["Strength Machine"],
        exerciseImages: ["exercises/machineLegExtension.gif"],
        tags: ["Upper Legs", "Strength", "Beginner"]
    },
    {
        // 7) Hamstring Curl
        name: "Hamstring Curl",
        description: "An isolation exercise focused on strengthening the hamstrings. Performed on a dedicated machine, the hamstring curl improves muscle balance in the legs and supports overall lower body performance, making it a crucial component of leg workouts.",
        primaryMuscles: ["Hamstrings"],
        secondaryMuscles: [],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 3,
            maxRecommendedSets: 4,
            minRecommendedReps: 10,
            maxRecommendedReps: 15
        },
        instructions: [
            "Lie face down on a hamstring curl machine and adjust the pad so it rests just above your heels.",
            "Curl your legs upward as far as possible, squeezing your hamstrings at the top.",
            "Hold briefly, then slowly lower back to the starting position.",
            "Repeat for the desired reps and sets."
        ],
        commonMistakes: [
            "Using momentum instead of controlled movement",
            "Not achieving a full range of motion"
        ],
        equipment: ["Strength Machine"],
        exerciseImages: ["exercises/machineLegCurlProne.gif"],
        tags: ["Hamstrings", "Strength", "Beginner"]
    }
];
  