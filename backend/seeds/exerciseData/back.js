/**
 * back.js
 * Exports an array of exercise objects for the "Back" muscle group.
 * 
 * Note: Assumes `muscleIds` is an object mapping muscle names to their ObjectIDs.
 */

module.exports = [
  {
    // 1) Cable Lat Pulldown
    name: "Cable Lat Pulldown",
    description: "A staple back exercise known for targeting the latissimus dorsi to help create a V-shaped back. Performed with a wide overhand grip on a cable machine, it also engages the shoulders and is a favorite among bodybuilders and fitness enthusiasts for back width and strength.",
    primaryMuscles: ["Back"],
    secondaryMuscles: ["Shoulders"],
    logType: "setsAndReps",
    recommended: {
      minRecommendedSets: 3,
      maxRecommendedSets: 4,
      minRecommendedReps: 8,
      maxRecommendedReps: 12,
    },
    instructions: [
      "Start by sitting under a cable pull-down machine with a wide bar attachment, grabbing it with an overhand grip.",
      "Keep your abs drawn in and back straight, then pull the bar down to your upper chest.",
      "Hold briefly at the bottom, squeeze your lats, then slowly return to the starting position."
    ],
    commonMistakes: [
      "Using too much momentum",
      "Pulling the bar too far",
      "Arching the back"
    ],
    equipment: ["Cable Machine"],
    exerciseImages: ["exercises/cableLatPulldown.gif"],
    tags: ["Back", "Strength"]
  },
  {
    // 2) Cable Seated Row
    name: "Cable Seated Row",
    description: "A classic compound movement that targets the middle back muscles, helping improve posture and build a strong, defined back. By pulling a cable handle towards your torso, you engage your rhomboids, lats, and even your forearms, making it a fundamental exercise in many strength programs.",
    primaryMuscles: ["Back"],
    secondaryMuscles: ["Forearms"],
    logType: "setsAndReps",
    recommended: {
      minRecommendedSets: 3,
      maxRecommendedSets: 4,
      minRecommendedReps: 8,
      maxRecommendedReps: 12,
    },
    instructions: [
      "Attach the desired handle to the cable row machine. Adjust seat/chest pad if needed.",
      "Sit down with feet on the footrests, knees slightly bent, and grasp the handle with a secure grip.",
      "Pull the handle towards your torso, leading with your elbows while keeping your back straight and core engaged.",
      "Pause briefly, then slowly return the handle to the start position, maintaining control."
    ],
    commonMistakes: [
      "Leaning too far forward",
      "Using lower back to pull instead of upper/middle back"
    ],
    equipment: ["Cable Machine"],
    exerciseImages: ["exercises/cableSeatedRow.gif"],
    tags: ["Back", "Strength"]
  },
  {
    // 3) Barbell Bent-Over Row
    name: "Barbell Bent-Over Row",
    description: "A fundamental exercise for building overall back thickness and strength. This movement involves hinging at the hips and rowing a loaded barbell towards your torso, engaging the lats, rhomboids, and biceps. It’s a mainstay in strength training and bodybuilding routines for developing a powerful posterior chain.",
    primaryMuscles: ["Back"],
    secondaryMuscles: ["Shoulders", "Biceps"],
    logType: "setsAndReps",
    recommended: {
      minRecommendedSets: 3,
      maxRecommendedSets: 5,
      minRecommendedReps: 8,
      maxRecommendedReps: 12,
    },
    instructions: [
      "Load a barbell with appropriate weight and stand with feet shoulder-width apart.",
      "Bend at your hips and knees, grasping the bar with a slightly wider-than-shoulder grip (overhand or underhand).",
      "Lift the bar to your shins, then hinge forward so your torso is nearly parallel to the floor, keeping your back straight.",
      "Row the bar towards your lower ribcage, squeezing your shoulder blades together and keeping your elbows close to your sides.",
      "Slowly lower the bar back to the starting position under control."
    ],
    commonMistakes: [
      "Rounding the back",
      "Using excessive momentum",
      "Not bending far enough forward"
    ],
    equipment: ["Barbell"],
    exerciseImages: ["exercises/barbellBentOverRow.gif"],
    tags: ["Back", "Strength", "Beginner"]
  },
  {
    // 4) Cable V-Bar Row
    name: "Cable V-Bar Row",
    description: "A variation of the seated row performed with a V-Bar attachment on a cable machine. This exercise isolates the middle back and lat muscles with a neutral grip, offering a controlled range of motion ideal for developing back strength and muscle definition. It’s well-suited for both beginners and intermediates.",
    primaryMuscles: ["Back"],
    logType: "setsAndReps",
    recommended: {
      minRecommendedSets: 3,
      maxRecommendedSets: 4,
      minRecommendedReps: 8,
      maxRecommendedReps: 12,
    },
    instructions: [
      "Attach a V-Bar to a high pulley cable machine and stand with feet shoulder-width apart.",
      "Grab the handles with a neutral grip and slowly pull the bar in towards your chest, feeling a stretch in your back and lat muscles.",
      "Squeeze and hold for a count, then return back to the starting position."
    ],
    commonMistakes: ["Using too much momentum"],
    equipment: ["Cable Machine"],
    exerciseImages: ["exercises/cableVBarRow.gif"],
    tags: ["Back", "Strength", "Beginner"]
  },
  {
    // 5) Stability Ball Full Body Plank
    name: "Stability Ball Full Body Plank",
    description: "A challenging variation of the traditional plank that incorporates a stability ball to increase core and back activation. This exercise not only engages the back and shoulders but also improves balance and overall core stability, making it a favorite in functional training and rehabilitation routines.",
    primaryMuscles: ["Back"],
    secondaryMuscles: ["Shoulders"],
    logType: "time",
    recommended: { timeInMinutes: 0.5 }, // 30 seconds
    instructions: [
      "Roll onto an exercise ball so that your hips are resting on top of the ball.",
      "Extend your feet behind and your arms in front, holding a plank position.",
      "Hold for 15-30 seconds, then return to the starting position."
    ],
    commonMistakes: [],
    equipment: ["Exercise Ball"],
    exerciseImages: ["exercises/stabilityBallFullBodyPlank.gif"],
    tags: ["Back", "Core", "Stretching"]
  },
  {
    // 6) Cable Rope Face Pull
    name: "Cable Rope Face Pull",
    description: "An effective exercise targeting the rear deltoids and upper back, the cable rope face pull is prized for improving shoulder health and posture. It’s commonly included in strength and corrective exercise programs to develop balanced upper body strength.",
    primaryMuscles: ["Back"],
    logType: "setsAndReps",
    recommended: {
      minRecommendedSets: 3,
      maxRecommendedSets: 4,
      minRecommendedReps: 8,
      maxRecommendedReps: 12,
    },
    instructions: [
      "Face a high pulley cable machine with a rope attachment.",
      "Pull the weight directly towards your face, separating the handles as you pull back.",
      "Hold for a count, then return back to the starting position."
    ],
    commonMistakes: ["Using too much weight"],
    equipment: ["Cable Machine"],
    exerciseImages: ["exercises/cableRopeFacePull.gif"],
    tags: ["Back", "Strength", "Intermediate"]
  },
  {
    // 7) Superman
    name: "Superman",
    description: "A classic bodyweight exercise that strengthens the lower back and improves overall posture. Named for its resemblance to the flying superhero, this movement involves lifting your arms and legs off the floor simultaneously to engage the entire posterior chain.",
    primaryMuscles: ["Back"],
    logType: "time",
    recommended: { timeInMinutes: 0.5 }, // 30 seconds
    instructions: [
      "Lie flat on your stomach with your arms stretched out in front.",
      "Slowly raise your arms and legs off the floor, holding the position for a few seconds.",
      "Return back to the starting position."
    ],
    commonMistakes: [],
    equipment: ["Body Weight"],
    exerciseImages: ["exercises/superman.gif"],
    tags: ["Back", "Stretching"]
  },
  {
    // 8) Kettlebell Row
    name: "Kettlebell Row",
    description: "An excellent unilateral exercise that targets the lats and upper back while also engaging the biceps. The kettlebell row challenges your core stability and coordination, making it a popular choice in functional training and conditioning programs.",
    primaryMuscles: ["Back"],
    secondaryMuscles: ["Biceps"],
    logType: "setsAndReps",
    recommended: {
      minRecommendedSets: 3,
      maxRecommendedSets: 4,
      minRecommendedReps: 8,
      maxRecommendedReps: 12,
    },
    instructions: [
      "Start with two kettlebells in front of you, bending your knees and pushing your glutes out.",
      "Grab both kettlebells and pull them up towards your stomach using your shoulders and back.",
      "As the kettlebells reach your torso, squeeze your back tightly and hold for a few seconds.",
      "Return back to the starting position.",
      "Repeat for the desired number of reps and sets."
    ],
    commonMistakes: [
      "Using too much momentum instead of controlled movement",
      "Not fully squeezing the back at the top of the movement"
    ],
    equipment: ["Kettlebell"],
    exerciseImages: ["exercises/kettlebellRow.gif"],
    tags: ["Back", "Strength", "Intermediate"]
  },
  {
    // 9) Machine Assisted Chin-Up
    name: "Machine Assisted Chin-Up",
    description: "A beginner-friendly variation of the classic chin-up that uses machine assistance to help build the necessary strength in your lats and upper back. This exercise allows you to progressively reduce assistance as you develop strength and improve overall pulling power.",
    primaryMuscles: ["Back"],
    logType: "setsAndReps",
    recommended: {
      minRecommendedSets: 3,
      maxRecommendedSets: 4,
      minRecommendedReps: 6,
      maxRecommendedReps: 10,
    },
    instructions: [
      "Set up the machine with the appropriate weight to assist your movement, ensuring the knee rest is positioned correctly.",
      "Climb onto the machine and place your knees on the rest. Grab the pull-up handles with an underhand grip (palms facing toward you).",
      "Lift yourself up towards the ceiling, squeezing your lat and back muscles as your shoulders reach hand level.",
      "Hold for a count at the top, then slowly return to the starting position.",
      "Repeat for the desired number of reps and sets."
    ],
    commonMistakes: [
      "Not engaging the back muscles properly",
      "Using too much weight assistance, reducing effectiveness"
    ],
    equipment: ["Cable Machine"],
    exerciseImages: ["exercises/machineAssistedChinUp.gif"],
    tags: ["Back", "Strength", "Beginner"]
  }
];

  