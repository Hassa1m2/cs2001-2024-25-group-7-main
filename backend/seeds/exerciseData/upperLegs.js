/**
 * upperlegs.js
 * Exports an array of exercise objects for the "Upper Legs" muscle group.
 */

module.exports = [
    {
        // 1) Machine Leg Extension
        name: "Machine Leg Extension",
        description: "An isolation exercise designed to target the quadriceps, the machine leg extension allows you to focus exclusively on your upper legs. By extending the knees in a controlled manner, it promotes muscle definition and strength in the front of the thighs.",
        primaryMuscles: ["Upper Legs"],
        secondaryMuscles: [],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 2,
            maxRecommendedSets: 4,
            minRecommendedReps: 10,
            maxRecommendedReps: 15
        },
        instructions: [
            "Adjust the seat of the leg extension machine so your knees align with the pivot point.",
            "Grab the machine handles and slowly extend your legs until they are straight.",
            "Hold briefly at the top, then return to the starting position in a controlled manner."
        ],
        commonMistakes: [
            "Locking the knees at the top, increasing injury risk",
            "Swinging the weight instead of controlled movement"
        ],
        equipment: ["Strength Machine"],
        exerciseImages: ["exercises/machineLegExtension.gif"],
        tags: ["Upper Legs", "Strength", "Beginner"]
    },
    {
        // 2) Barbell Squat
        name: "Barbell Squat",
        description: "A foundational compound exercise that targets the quadriceps, glutes, and core. The barbell squat is renowned for building overall lower-body strength and power, while also engaging the upper legs to improve functional movement and athletic performance.",
        primaryMuscles: ["Upper Legs"],
        secondaryMuscles: ["Glutes", "Abs"],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 2,
            maxRecommendedSets: 4,
            minRecommendedReps: 8,
            maxRecommendedReps: 12
        },
        instructions: [
            "Stand with your feet shoulder-width apart and place a barbell across your upper back.",
            "Engage your core and lower yourself into a squat, keeping your chest up and knees tracking over your toes.",
            "Lower until your thighs are parallel to the ground, then push through your heels to return to the starting position."
        ],
        commonMistakes: [
            "Leaning too far forward, straining the lower back",
            "Not squatting deep enough for full range of motion"
        ],
        equipment: ["Barbell"],
        exerciseImages: ["exercises/barbellSquat.gif"],
        tags: ["Upper Legs", "Strength", "Beginner"]
    },
    {
        // 3) Dumbbell Romanian Deadlift
        name: "Dumbbell Romanian Deadlift",
        description: "An effective exercise for targeting the hamstrings and glutes, the dumbbell Romanian deadlift emphasizes a hip hinge movement. It develops strength in the posterior chain while also engaging the upper legs, making it essential for balanced lower-body training.",
        primaryMuscles: ["Upper Legs"],
        secondaryMuscles: ["Glutes", "Forearms"],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 2,
            maxRecommendedSets: 4,
            minRecommendedReps: 8,
            maxRecommendedReps: 12
        },
        instructions: [
            "Stand with feet hip-width apart, holding dumbbells in each hand with a neutral grip.",
            "Hinge at the hips, lowering the dumbbells while keeping your back straight.",
            "Lower until you feel a stretch in your hamstrings, then engage your glutes to return to standing."
        ],
        commonMistakes: [
            "Rounding the back instead of maintaining a neutral spine",
            "Bending at the knees too much, turning it into a squat"
        ],
        equipment: ["Dumbbell"],
        exerciseImages: ["exercises/dumbbellRomanianDeadlift.gif"],
        tags: ["Upper Legs", "Strength", "Intermediate"]
    },
    {
        // 4) Machine Leg Press
        name: "Machine Leg Press",
        description: "A controlled, machine-based exercise that targets the quadriceps, glutes, and hamstrings. The leg press allows for safe loading of the lower body while reducing stress on the spine, making it a popular choice for developing leg strength and muscle mass.",
        primaryMuscles: ["Upper Legs"],
        secondaryMuscles: ["Lower Legs", "Glutes"],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 2,
            maxRecommendedSets: 4,
            minRecommendedReps: 10,
            maxRecommendedReps: 15
        },
        instructions: [
            "Sit on the leg press machine with your feet placed shoulder-width apart on the platform.",
            "Lower the weight towards your chest until your knees are at a 90-degree angle.",
            "Push through your heels to extend your legs, avoiding full knee lockout."
        ],
        commonMistakes: [
            "Placing feet too high or low, shifting stress to the knees",
            "Not controlling the descent, leading to improper form"
        ],
        equipment: ["Strength Machine"],
        exerciseImages: ["exercises/machineLegPress.gif"],
        tags: ["Upper Legs", "Strength", "Beginner"]
    },
    {
        // 5) Smith Machine Bulgarian Split Squat
        name: "Smith Machine Bulgarian Split Squat",
        description: "A unilateral exercise that isolates the quadriceps and glutes by performing a split squat under the controlled guidance of a Smith machine. This movement challenges balance and stability while promoting lower-body strength and muscular symmetry.",
        primaryMuscles: ["Upper Legs"],
        secondaryMuscles: ["Glutes", "Back"],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 2,
            maxRecommendedSets: 4,
            minRecommendedReps: 8,
            maxRecommendedReps: 12
        },
        instructions: [
            "Position a bench about 2 feet behind the Smith machine and set the barbell to shoulder height.",
            "Place one foot on the bench behind you, keeping your front foot flat on the ground.",
            "Lower your back knee towards the floor, then push through your front heel to return to standing."
        ],
        commonMistakes: [
            "Placing too much weight on the back foot",
            "Not keeping the front knee in line with the toes"
        ],
        equipment: ["Strength Machine"],
        exerciseImages: ["exercises/smithMachineBulgarianSplitSquat.gif"],
        tags: ["Upper Legs", "Strength", "Beginner"]
    },
    {
        // 6) Kettlebell Single-Leg Deadlift
        name: "Kettlebell Single-Leg Deadlift",
        description: "A unilateral exercise that challenges balance while targeting the hamstrings, glutes, and upper legs. This kettlebell variation improves stability and corrects muscle imbalances by forcing each leg to work independently.",
        primaryMuscles: ["Upper Legs"],
        secondaryMuscles: ["Glutes", "Back"],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 2,
            maxRecommendedSets: 4,
            minRecommendedReps: 8,
            maxRecommendedReps: 12
        },
        instructions: [
            "Hold a kettlebell in one hand and balance on the same-side leg.",
            "Hinge at the hips, extending your opposite leg straight behind you as you lower the kettlebell.",
            "Return to standing by engaging your glutes and core."
        ],
        commonMistakes: [
            "Not maintaining balance and control",
            "Rounding the back instead of keeping it straight"
        ],
        equipment: ["Kettlebell"],
        exerciseImages: ["exercises/kettlebellSingleLegDeadlift.gif"],
        tags: ["Upper Legs", "Strength", "Intermediate"]
    },
    {
        // 7) Barbell Bench Squat
        name: "Barbell Bench Squat",
        description: "A compound movement that combines elements of a squat and a bench press. The barbell bench squat emphasizes the eccentric portion of the squat as you sit back onto a bench, promoting strength, control, and power in the upper legs and glutes.",
        primaryMuscles: ["Upper Legs"],
        secondaryMuscles: ["Glutes", "Back"],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 2,
            maxRecommendedSets: 4,
            minRecommendedReps: 8,
            maxRecommendedReps: 12
        },
        instructions: [
            "Place a weighted barbell on your shoulders and position a bench behind you.",
            "Squat down until your hamstrings and glutes rest on the bench.",
            "Push through your heels to return to standing."
        ],
        commonMistakes: [
            "Not maintaining an upright chest position",
            "Using momentum instead of controlled movement"
        ],
        equipment: ["Barbell"],
        exerciseImages: ["exercises/barbellBenchSquat.gif"],
        tags: ["Upper Legs", "Strength", "Intermediate"]
    },
    {
        // 8) Machine Hip Adduction
        name: "Machine Hip Adduction",
        description: "An isolation exercise that targets the inner thighs by using a machine to adduct the legs. This movement is effective for developing stability and strength in the hip region, contributing to overall lower body balance.",
        primaryMuscles: ["Upper Legs"],
        secondaryMuscles: [],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 2,
            maxRecommendedSets: 4,
            minRecommendedReps: 12,
            maxRecommendedReps: 15
        },
        instructions: [
            "Sit on the hip adduction machine with your knees against the pads.",
            "Squeeze your thighs together, engaging your inner thighs.",
            "Slowly return to the starting position."
        ],
        commonMistakes: [
            "Using excessive weight and straining the inner thighs",
            "Not controlling the movement"
        ],
        equipment: ["Strength Machine"],
        exerciseImages: ["exercises/machineHipAdduction.gif"],
        tags: ["Upper Legs", "Strength", "Beginner"]
    },
    {
        // 9) Machine Leg Curl (Prone)
        name: "Machine Leg Curl (Prone)",
        description: "An isolation exercise for the hamstrings, performed on a dedicated machine. The prone leg curl allows you to focus solely on the contraction of the hamstrings, which is essential for balanced leg development and injury prevention.",
        primaryMuscles: ["Upper Legs"],
        secondaryMuscles: [],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 2,
            maxRecommendedSets: 4,
            minRecommendedReps: 10,
            maxRecommendedReps: 15
        },
        instructions: [
            "Lie prone on the leg curl machine, ensuring your knees are just beyond the edge of the bench.",
            "Place your lower legs under the lever pads and grip the handles for stability.",
            "Flex your knees, raising the lever pad toward the back of your thighs.",
            "Slowly lower the lever pad back to the starting position.",
            "Repeat for the desired amount of reps and sets."
        ],
        commonMistakes: [
            "Using momentum instead of controlled movement",
            "Not fully extending the legs, limiting range of motion"
        ],
        equipment: ["Strength Machine"],
        exerciseImages: ["exercises/machineLegCurlProne.gif"],
        tags: ["Upper Legs", "Strength", "Beginner"]
    },
    {
        // 10) Dumbbell Lunge
        name: "Dumbbell Lunge",
        description: "A dynamic unilateral exercise that targets the quadriceps and glutes while challenging balance and coordination. Dumbbell lunges are effective for improving functional strength and muscular symmetry in the lower body.",
        primaryMuscles: ["Upper Legs"],
        secondaryMuscles: ["Lower Legs", "Glutes"],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 2,
            maxRecommendedSets: 4,
            minRecommendedReps: 8,
            maxRecommendedReps: 12
        },
        instructions: [
            "Hold a dumbbell in each hand, standing with feet hip-width apart.",
            "Step forward about 2-3 feet, keeping your upper body upright.",
            "Lower your back knee toward the ground while keeping the front knee at a 90-degree angle.",
            "Push through your front foot to return to the starting position.",
            "Repeat with the opposite leg."
        ],
        commonMistakes: [
            "Allowing the front knee to move past the toes",
            "Leaning forward instead of maintaining an upright posture"
        ],
        equipment: ["Dumbbell"],
        exerciseImages: ["exercises/dumbbellLunge.gif"],
        tags: ["Upper Legs", "Strength", "Beginner"]
    },
    {
        // 11) Kettlebell Goblet Squat
        name: "Kettlebell Goblet Squat",
        description: "A versatile lower-body exercise that emphasizes quad and glute development while improving core stability. Holding the kettlebell close to your chest, the goblet squat encourages proper form and depth, making it a great choice for beginners and as a warm-up for heavier squats.",
        primaryMuscles: ["Upper Legs"],
        secondaryMuscles: ["Glutes", "Shoulders"],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 2,
            maxRecommendedSets: 4,
            minRecommendedReps: 10,
            maxRecommendedReps: 15
        },
        instructions: [
            "Hold a kettlebell close to your chest, just below your chin.",
            "Stand with your feet slightly wider than shoulder-width apart.",
            "Squat down by bending your knees and pushing your hips back, lowering until your hamstrings touch your calves.",
            "Hold briefly at the bottom, then push through your heels to return to the starting position."
        ],
        commonMistakes: [
            "Leaning too far forward instead of keeping the chest upright",
            "Not squatting deep enough to fully engage the glutes and legs"
        ],
        equipment: ["Kettlebell"],
        exerciseImages: ["exercises/kettlebellGobletSquat.gif"],
        tags: ["Upper Legs", "Strength", "Beginner"]
    },
    {
        // 12) Bodyweight Squat
        name: "Bodyweight Squat",
        description: "A fundamental movement that develops lower-body strength and endurance using only your body weight. The bodyweight squat reinforces proper squat mechanics and builds a strong foundation for more advanced weighted variations.",
        primaryMuscles: ["Upper Legs"],
        secondaryMuscles: ["Glutes", "Abs"],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 2,
            maxRecommendedSets: 4,
            minRecommendedReps: 12,
            maxRecommendedReps: 20
        },
        instructions: [
            "Stand with feet shoulder-width apart.",
            "Bend at the knees and sit back with your hips, lowering yourself until your thighs are parallel to the floor.",
            "Extend your arms forward for balance.",
            "Push through your heels to return to standing."
        ],
        commonMistakes: [
            "Letting knees cave inward instead of keeping them aligned with toes",
            "Not engaging the core, leading to excessive forward lean"
        ],
        equipment: ["Body Weight"],
        exerciseImages: ["exercises/bodyweightSquat.gif"],
        tags: ["Upper Legs", "Strength", "Beginner"]
    }
];

  