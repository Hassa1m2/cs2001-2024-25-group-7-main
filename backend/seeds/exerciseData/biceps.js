/**
 * biceps.js
 * Exports an array of exercise objects for the "Biceps" muscle group.
 */

module.exports = [
  {
    // 1) Dumbbell Alternating Bicep Curl
    name: "Dumbbell Alternating Bicep Curl",
    description: "A classic biceps exercise that involves curling one dumbbell at a time, allowing you to focus on peak contraction and muscle isolation for each arm. This exercise is widely used to improve bicep symmetry and overall arm definition.",
    primaryMuscles: ["Biceps"],
    logType: "setsAndReps",
    recommended: {
      minRecommendedSets: 2,
      maxRecommendedSets: 4, 
      minRecommendedReps: 8,
      maxRecommendedReps: 12
    },
    instructions: [
      "Stand with feet shoulder-width apart, holding a dumbbell in each hand with palms facing inward.",
      "Curl one dumbbell towards your shoulder while keeping the other arm extended.",
      "Lower back to the starting position and repeat with the opposite arm."
    ],
    commonMistakes: [
      "Swinging the back",
      "Not fully extending the arms"
    ],
    equipment: ["Dumbbell"],
    exerciseImages: ["exercises/dumbbellAlternatingBicepCurl.gif"],
    tags: ["Biceps", "Strength"]
  },
  {
    // 2) Barbell Curl
    name: "Barbell Curl",
    description: "A staple in arm training, the barbell curl allows for heavier loading and a strict movement to effectively isolate the biceps. This exercise is essential for building mass and strength in the upper arms.",
    primaryMuscles: ["Biceps"],
    logType: "setsAndReps",
    recommended: {
      minRecommendedSets: 2,
      maxRecommendedSets: 4, 
      minRecommendedReps: 8,
      maxRecommendedReps: 12
    },
    instructions: [
      "Stand up straight with feet shoulder-width apart, knees slightly bent.",
      "Hold the barbell with a shoulder-width underhand grip, resting arms fully extended.",
      "Curl the bar towards your chest, squeezing your biceps at the top.",
      "Lower the bar back to the starting position in a controlled motion."
    ],
    commonMistakes: [
      "Using momentum to lift",
      "Not keeping elbows stationary"
    ],
    equipment: ["Barbell"],
    exerciseImages: ["exercises/barbellCurl.gif"],
    tags: ["Biceps", "Strength"]
  },
  {
    // 3) Dumbbell Alternating Hammer Curl
    name: "Dumbbell Alternating Hammer Curl",
    description: "This variation uses a neutral grip to target not only the biceps but also the brachialis and brachioradialis muscles of the forearm. It helps develop arm thickness and improves overall functional strength with reduced wrist strain.",
    primaryMuscles: ["Biceps"],
    logType: "setsAndReps",
    recommended: {
      minRecommendedSets: 2,
      maxRecommendedSets: 4, 
      minRecommendedReps: 8,
      maxRecommendedReps: 12
    },
    instructions: [
      "Stand with feet shoulder-width apart, holding a dumbbell in each hand with palms facing inward.",
      "Keep elbows close to your sides and curl one dumbbell up in a hammering motion.",
      "Lower back down and repeat with the opposite arm."
    ],
    commonMistakes: [
      "Turning wrists during the movement",
      "Swinging the arms for momentum"
    ],
    equipment: ["Dumbbell"],
    exerciseImages: ["exercises/dumbellAlternatingHammerCurl.gif"],
    tags: ["Biceps", "Strength"]
  },
  {
    // 4) Dumbbell Incline Curl
    name: "Dumbbell Incline Curl",
    description: "Performed on an incline bench, this exercise emphasizes a greater stretch in the biceps, particularly targeting the long head. It helps develop a more defined peak while minimizing the use of momentum for better isolation.",
    primaryMuscles: ["Biceps"],
    logType: "setsAndReps",
    recommended: {
      minRecommendedSets: 2,
      maxRecommendedSets: 4, 
      minRecommendedReps: 8,
      maxRecommendedReps: 12
    },
    instructions: [
      "Set an incline bench to a 45-degree angle and sit with a dumbbell in each hand.",
      "Let your arms hang down fully extended, palms facing forward.",
      "Curl both dumbbells up simultaneously towards your shoulders.",
      "Lower them back down in a controlled motion."
    ],
    commonMistakes: [
      "Lifting too quickly",
      "Not keeping elbows fixed"
    ],
    equipment: ["Dumbbell"],
    exerciseImages: ["exercises/dumbbellInclineCurl.gif"],
    tags: ["Biceps", "Strength"]
  },
  {
    // 5) Cable Bicep Curl
    name: "Cable Bicep Curl",
    description: "Utilizing a cable machine, this exercise provides continuous tension throughout the entire range of motion. It’s an effective way to target the biceps for both strength and endurance, often used in diverse training routines.",
    primaryMuscles: ["Biceps"],
    logType: "setsAndReps",
    recommended: {
      minRecommendedSets: 2,
      maxRecommendedSets: 4, 
      minRecommendedReps: 8,
      maxRecommendedReps: 12
    },
    instructions: [
      "Attach a short bar to a low pulley cable machine.",
      "Stand with feet shoulder-width apart, grabbing the bar with an underhand grip.",
      "Curl the bar towards your chest while keeping elbows close to your body.",
      "Lower back down in a controlled motion."
    ],
    commonMistakes: [
      "Not fully extending arms",
      "Using momentum instead of muscle contraction"
    ],
    equipment: ["Cable Machine"],
    exerciseImages: ["exercises/cableBicepCurl.gif"],
    tags: ["Biceps", "Strength"]
  },
  {
    // 6) EZ Bar Curl
    name: "EZ Bar Curl",
    description: "The EZ Bar Curl is designed with an angled grip to reduce wrist strain while effectively targeting the biceps. This exercise is a popular alternative to the standard barbell curl, promoting balanced muscle development in the arms.",
    primaryMuscles: ["Biceps"],
    logType: "setsAndReps",
    recommended: {
      minRecommendedSets: 2,
      maxRecommendedSets: 4, 
      minRecommendedReps: 8,
      maxRecommendedReps: 12
    },
    instructions: [
      "Stand with feet shoulder-width apart, knees slightly bent.",
      "Hold the EZ curl bar with an underhand grip and arms fully extended.",
      "Curl the bar up towards your chest, keeping elbows fixed.",
      "Lower back down in a controlled manner."
    ],
    commonMistakes: [
      "Swinging the back",
      "Not keeping elbows stationary"
    ],
    equipment: ["EZ Curl Bar"],
    exerciseImages: ["exercises/ezBarCurl.gif"],
    tags: ["Biceps", "Strength"]
  },
  {
    // 7) Dumbbell Preacher Curl
    name: "Dumbbell Preacher Curl",
    description: "Performed on a preacher bench, this exercise isolates the biceps by stabilizing the arms against the pad, preventing cheating through body movement. It’s highly effective for building peak contraction and overall arm definition.",
    primaryMuscles: ["Biceps"],
    secondaryMuscles: ["Forearms"],
    logType: "setsAndReps",
    recommended: {
      minRecommendedSets: 2,
      maxRecommendedSets: 4, 
      minRecommendedReps: 8,
      maxRecommendedReps: 12
    },
    instructions: [
      "Adjust the preacher bench so arms are level with the top pad.",
      "Hold a dumbbell in each hand with an underhand grip.",
      "Rest arms against the pad and extend them fully.",
      "Curl the weights up towards your shoulders, keeping your arms on the pad."
    ],
    commonMistakes: [
      "Lifting too fast",
      "Not fully extending arms"
    ],
    equipment: ["Dumbbell", "Strength Machine"],
    exerciseImages: ["exercises/dumbbellPreacherCurl.gif"],
    tags: ["Biceps", "Strength"]
  },
  {
    // 8) Cable One-Arm High Curl
    name: "Cable One-Arm High Curl",
    description: "An unconventional variation that targets the biceps from a unique angle using a high pulley. This exercise challenges the muscle with continuous resistance throughout the movement, making it an excellent tool for developing the biceps peak.",
    primaryMuscles: ["Biceps"],
    logType: "setsAndReps",
    recommended: {
      minRecommendedSets: 2,
      maxRecommendedSets: 4, 
      minRecommendedReps: 10,
      maxRecommendedReps: 15
    },
    instructions: [
      "Stand sideways next to a high pulley machine, arm extended at shoulder height.",
      "Grip the handle and slowly curl towards your head.",
      "Hold for a moment, then return to the starting position.",
      "Repeat for the desired reps before switching sides."
    ],
    commonMistakes: [
      "Not keeping the arm in a fixed position",
      "Using excessive momentum"
    ],
    equipment: ["Cable Machine"],
    exerciseImages: ["exercises/cableOneArmHighCurl.gif"],
    tags: ["Biceps", "Strength"]
  },
  {
    // 9) Barbell Spider Curl
    name: "Barbell Spider Curl",
    description: "Performed on a spider (or reverse preacher) bench, this exercise isolates the biceps by positioning your arms behind your body. It minimizes the use of momentum, ensuring a concentrated contraction that is highly effective for building bicep definition.",
    primaryMuscles: ["Biceps"],
    logType: "setsAndReps",
    recommended: {
        minRecommendedSets: 2,
        maxRecommendedSets: 4, 
        minRecommendedReps: 8,
        maxRecommendedReps: 12
    },
    instructions: [
      "Set up a preacher bench by turning it around so you can lean against the angled side.",
      "Hold a barbell with a close underhand grip (palms up).",
      "Lower the bar down fully, keeping arms extended.",
      "Curl the bar up towards your forearms, isolating the biceps.",
      "Pause at the top, then slowly lower back to the starting position."
    ],
    commonMistakes: [
      "Not extending arms fully",
      "Using momentum instead of controlled movement"
    ],
    equipment: ["Barbell"],
    exerciseImages: ["exercises/barbellSpiderCurl.gif"],
    tags: ["Biceps", "Strength", "Intermediate"]
  },
  {
    // 10) Dumbbell Alternating Seated Curl
    name: "Dumbbell Alternating Seated Curl",
    description: "A seated variation of the alternating bicep curl that minimizes body movement to isolate the biceps more effectively. This controlled exercise is ideal for building balanced strength and improving muscle symmetry in the arms.",
    primaryMuscles: ["Biceps"],
    logType: "setsAndReps",
    recommended: {
        minRecommendedSets: 2,
        maxRecommendedSets: 4, 
        minRecommendedReps: 10,
        maxRecommendedReps: 15
    },
    instructions: [
      "Sit on a flat bench with a dumbbell in each hand, feet flat on the floor.",
      "Hold the dumbbells in an underhand grip, palms facing up.",
      "Curl one dumbbell towards your shoulder while keeping the other arm extended.",
      "Lower the dumbbell back down and repeat with the opposite arm."
    ],
    commonMistakes: [
      "Leaning too far back",
      "Not fully extending arms between reps"
    ],
    equipment: ["Dumbbell"],
    exerciseImages: ["exercises/dumbbellAlternatingSeatedCurl.gif"],
    tags: ["Biceps", "Strength", "Beginner"]
  },
  {
    // 11) Dumbbell Reverse Bicep Curl
    name: "Dumbbell Reverse Bicep Curl",
    description: "This reverse curl variation uses an overhand grip to target both the biceps and forearms. It is especially effective for developing grip strength and balancing arm musculature, making it a valuable addition to any comprehensive arm workout.",
    primaryMuscles: ["Biceps"],
    secondaryMuscles: ["Forearms"],
    logType: "setsAndReps",
    recommended: {
        minRecommendedSets: 2,
        maxRecommendedSets: 4, 
        minRecommendedReps: 8,
        maxRecommendedReps: 12
    },
    instructions: [
      "Stand with feet shoulder-width apart, knees slightly bent.",
      "Hold a dumbbell in each hand with an overhand (palms facing down) grip.",
      "Curl the dumbbells towards your shoulders while keeping elbows fixed.",
      "Pause at the top, then slowly lower back to the starting position."
    ],
    commonMistakes: [
      "Not keeping wrists stable",
      "Swinging arms instead of controlled curls"
    ],
    equipment: ["Dumbbell"],
    exerciseImages: ["exercises/dumbbellReverseBicepCurl.gif"],
    tags: ["Biceps", "Forearms", "Strength", "Beginner"]
  }
];

  