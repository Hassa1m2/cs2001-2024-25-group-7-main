/**
 * abs.js
 * Exports an array of exercise objects for the "Abs" muscle group.
 */

module.exports = [
    {
        // 1) Plank
        name: "Plank",
        description: "A classic isometric exercise, the plank involves maintaining a rigid, straight line from head to heels. It engages the entire core—abdominals, lower back, and stabilizers—and is widely recommended in both fitness and rehabilitation programs to build overall core endurance.",
        primaryMuscles: ["Abs"],
        secondaryMuscles: ["Back"],
        logType: "time",
        recommended: {
            timeInMinutes: 1, 
        },
        instructions: [
            "Start by kneeling on all fours, aligning both hands below your shoulders and knees beneath your hips.",
            "Extend both feet behind you, engaging your core to keep your body straight.",
            "Hold this position for about 30 seconds to a minute.",
            "Release, return to the starting position, and repeat as desired."
        ],
        commonMistakes: [
            "Letting hips sag",
            "Arching the lower back",
            "Not engaging the core properly"
        ],
        equipment: ["Body Weight"],
        exerciseImages: ["exercises/plank.gif"],
        tags: ["Abs", "Strength"]
    },
    {
        // 2) Stability Ball Incline Ab Crunch
        name: "Stability Ball Incline Ab Crunch",
        description: "By performing crunches on a stability ball set at an incline, this exercise increases the range of motion and forces your core to engage more deeply. It’s popular in functional training programs as the instability of the ball helps activate additional stabilizer muscles while improving balance.",
        primaryMuscles: ["Abs"],
        secondaryMuscles: ["Back", "Glutes"],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 2,
            maxRecommendedSets: 4, 
            minRecommendedReps: 10,
            maxRecommendedReps: 20
        },
        instructions: [
            "Lie on an exercise ball with your lower back supported, legs bent, and feet on the floor.",
            "Cross your arms over your chest or place your hands behind your head.",
            "Engage your core and crunch up, pulling your ribs towards your hips.",
            "Slowly return to the starting position and repeat."
        ],
        commonMistakes: [
            "Using momentum instead of core strength",
            "Not keeping the lower back supported on the ball",
            "Pulling on the neck with hands"
        ],
        equipment: ["Exercise Ball"],
        exerciseImages: ["exercises/stabilityBallInclineAbCrunch.gif"],
        tags: ["Abs", "Strength"]
    },
    {
        // 3) Bird Dog
        name: "Bird Dog",
        description: "Known as the bird dog, this functional exercise is a favorite in both physical therapy and strength training. It improves core stability, balance, and coordination by engaging the abdominal and lower back muscles simultaneously as you extend the opposite arm and leg.",
        primaryMuscles: ["Abs"],
        secondaryMuscles: ["Back", "Upper Legs"],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 2,
            maxRecommendedSets: 4, 
            minRecommendedReps: 10,
            maxRecommendedReps: 15
        },
        instructions: [
            "Start on all fours with knees under hips and wrists under shoulders.",
            "Extend your right arm forward and your left leg straight back, keeping your spine neutral.",
            "Hold for a few seconds, then return to the start.",
            "Repeat with the opposite arm and leg."
        ],
        commonMistakes: [
            "Arching the lower back",
            "Not keeping the core engaged",
            "Rushing through the movement"
        ],
        equipment: ["Body Weight"],
        exerciseImages: ["exercises/birdDog.gif"],
        tags: ["Abs", "Stability"]
    },
    {
        // 4) Cable Rotational Crunch (Kneeling)
        name: "Cable Rotational Crunch (Kneeling)",
        description: "Performed in a kneeling position with cable resistance, this exercise targets both the rectus abdominis and oblique muscles. It’s often incorporated into resistance training programs to develop a well-defined midsection and improve rotational core strength.",
        primaryMuscles: ["Abs"],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 2,
            maxRecommendedSets: 4, 
            minRecommendedReps: 8,
            maxRecommendedReps: 12
        },
        instructions: [
            "Attach a rope to a high pulley on a cable machine.",
            "Kneel with your back to the machine, holding the rope behind your head.",
            "Crunch down in a twisting motion, bringing your right elbow toward your left knee.",
            "Return to the starting position and repeat on the opposite side."
        ],
        commonMistakes: [
            "Pulling with arms instead of engaging abs",
            "Not keeping the movement controlled"
        ],
        equipment: ["Cable Machine"],
        exerciseImages: ["exercises/cableRotationalCrunchKneeling.gif"],
        tags: ["Abs", "Strength"]
    },
    {
        // 5) Cable Rotation (Stability Ball)
        name: "Cable Rotation (Stability Ball)",
        description: "This advanced exercise combines cable resistance with the instability of a stability ball. It challenges your core’s rotational strength and balance, making it popular among athletes and those looking to enhance functional core performance through controlled, dynamic movements.",
        primaryMuscles: ["Abs"],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 2,
            maxRecommendedSets: 4, 
            minRecommendedReps: 10,
            maxRecommendedReps: 15
        },
        instructions: [
            "Sit on a stability ball with feet shoulder-width apart near a cable machine.",
            "Hold a cable handle with both hands and extend your arms in front of you.",
            "Slowly rotate your torso away from the machine, engaging your abs.",
            "Return to the center and rotate toward the machine."
        ],
        commonMistakes: [
            "Using the arms instead of the core",
            "Not maintaining a straight spine"
        ],
        equipment: ["Cable Machine", "Stability Ball"],
        exerciseImages: ["exercises/cableRotationStabilityBall.gif"],
        tags: ["Abs", "Stability"]
    },
    {
        // 6) Weight Plate Russian Twist
        name: "Weight Plate Russian Twist",
        description: "A classic exercise for the obliques, the weight plate Russian twist involves sitting with your legs elevated and twisting your torso while holding a weight plate. It is renowned in athletic conditioning programs for its ability to enhance rotational strength and improve overall core stability.",
        primaryMuscles: ["Abs"],
        secondaryMuscles: ["Glutes", "Back"],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 2,
            maxRecommendedSets: 4, 
            minRecommendedReps: 12,
            maxRecommendedReps: 20
        },
        instructions: [
            "Sit on the floor with knees bent and feet secured under a bench or held by a partner.",
            "Hold a weight plate in front of your chest and lean slightly back.",
            "Rotate your torso to the right, keeping your abs engaged.",
            "Return to the center and rotate to the left."
        ],
        commonMistakes: [
            "Relying on arms instead of core",
            "Not maintaining control throughout the movement"
        ],
        equipment: ["Weight Plate"],
        exerciseImages: ["exercises/weightPlateRussianTwist.gif"],
        tags: ["Abs", "Strength"]
    },
    {
        // 7) Oblique Crunch
        name: "Oblique Crunch",
        description: "Often referred to as a side crunch, this movement specifically isolates the oblique muscles. By incorporating a twisting motion, it helps sculpt the waistline and is a staple in many targeted ab workouts focused on enhancing lateral core strength.",
        primaryMuscles: ["Abs"],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 2,
            maxRecommendedSets: 4, 
            minRecommendedReps: 10,
            maxRecommendedReps: 15
        },
        instructions: [
            "Lie on your side with legs stacked or knees bent for stability.",
            "Place one hand behind your head and the other on your side.",
            "Crunch up, bringing your elbow toward your hip, engaging your obliques.",
            "Slowly lower back down and repeat."
        ],
        commonMistakes: [
            "Using momentum instead of core engagement",
            "Not fully contracting obliques"
        ],
        equipment: ["Body Weight"],
        exerciseImages: ["exercises/obliqueCrunch.gif"],
        tags: ["Abs", "Strength"]
    },
    {
        // 8) Alternating Heel Touch
        name: "Alternating Heel Touch",
        description: "Also known as alternating heel taps, this exercise focuses on the obliques and lower abs by having you reach side-to-side toward your heels while lying on your back. It’s commonly used in rehabilitation and core stability workouts to improve lateral abdominal strength and tone the waist.",
        primaryMuscles: ["Abs"],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 2,
            maxRecommendedSets: 4, 
            minRecommendedReps: 12,
            maxRecommendedReps: 20
        },
        instructions: [
            "Lie on your back with knees bent and feet on the floor.",
            "Lift your head and shoulders slightly off the ground.",
            "Reach your right hand toward your right heel, engaging your obliques.",
            "Return to the center, then reach toward the left heel."
        ],
        commonMistakes: [
            "Not maintaining core tension",
            "Rushing through the movement"
        ],
        equipment: ["Body Weight"],
        exerciseImages: ["exercises/alternatingHeelTouch.gif"],
        tags: ["Abs", "Stability"]
    },
    {
        // 9) Toe Touches
        name: "Toe Touches",
        description: "A foundational exercise for the upper abs, toe touches involve lying on your back and reaching your hands toward your toes. This movement isolates the upper abdominal muscles, improving core definition and flexibility, and is often used as a warm-up or finisher in ab workouts.",
        primaryMuscles: ["Abs"],
        secondaryMuscles: ["Shoulders"],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 2,
            maxRecommendedSets: 4, 
            minRecommendedReps: 12,
            maxRecommendedReps: 20
        },
        instructions: [
          "Lie down flat on your back on a mat, keeping arms by your sides and legs together.",
          "Raise your legs up toward the ceiling while extending your arms at a 45-degree angle.",
          "Keep your lower back flat on the floor and reach your fingers towards your toes, squeezing your abs.",
          "Lower back to the starting position and repeat."
        ],
        commonMistakes: [
          "Lifting head too forcefully",
          "Not keeping lower back on the mat"
        ],
        equipment: ["Body Weight"],
        exerciseImages: ["exercises/toeTouches.gif"],
        tags: ["Abs", "Strength"]
    },
    {
        // 10) Side Bridge
        name: "Side Bridge",
        description: "Also known as the side plank, the side bridge is an isometric exercise that emphasizes the oblique muscles and lateral stability. It’s widely used in fitness and rehabilitation settings to build a strong, balanced core and prevent injury by strengthening the muscles along the side of the torso.",
        primaryMuscles: ["Abs"],
        logType: "time",
        recommended: {
            timeInMinutes: 1
        },
        instructions: [
          "Lie on your side with legs extended and your forearm perpendicular to your body.",
          "Engage your abs and slowly lift your body so you are balanced on your feet and forearm.",
          "Hold this position for the desired time, keeping your body in a straight line.",
          "Return to the starting position and switch sides."
        ],
        commonMistakes: [
          "Dropping hips too low",
          "Not keeping the core engaged"
        ],
        equipment: ["Body Weight"],
        exerciseImages: ["exercises/sideBridge.gif"],
        tags: ["Abs", "Stability"]
    },
    {
        // 11) Scissor Kick
        name: "Scissor Kick",
        description: "A dynamic exercise that mimics a scissor motion with the legs, scissor kicks primarily target the lower abs and hip flexors. Commonly included in Pilates and core routines, this movement builds muscular endurance, enhances flexibility, and strengthens the lower midsection.",
        primaryMuscles: ["Abs"],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 2,
            maxRecommendedSets: 4, 
            minRecommendedReps: 15,
            maxRecommendedReps: 25
        },
        instructions: [
          "Lie on your back with hands at your sides and legs extended.",
          "Lift both legs slightly off the ground, keeping them straight.",
          "Raise your left leg above your right while lowering your right close to the ground.",
          "Switch legs in a controlled scissor motion, keeping abs engaged.",
          "Repeat for the desired number of reps."
        ],
        commonMistakes: [
          "Arching the lower back",
          "Not keeping core engaged"
        ],
        equipment: ["Body Weight"],
        exerciseImages: ["exercises/scissorKick.gif"],
        tags: ["Abs", "Strength"]
    },
    {
        // 12) Plank with Alternating Knee Drive
        name: "Plank with Alternating Knee Drive",
        description: "This dynamic variation of the traditional plank adds alternating knee drives, increasing both the intensity and the cardiovascular component. It boosts core engagement and lower body agility, making it a popular choice for functional training routines.",
        primaryMuscles: ["Abs"],
        secondaryMuscles: [ "Upper Legs", "Chest", "Shoulders", "Triceps" ],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 2,
            maxRecommendedSets: 4, 
            minRecommendedReps: 10,
            maxRecommendedReps: 20
        },
        instructions: [
          "Start in a forearm plank position with elbows under shoulders and body in a straight line.",
          "Lift your right knee towards your chest, engaging your abs.",
          "Hold briefly, then return your leg to the plank position.",
          "Repeat on the opposite side, alternating legs."
        ],
        commonMistakes: [
          "Letting hips drop",
          "Not engaging the core fully"
        ],
        equipment: ["Body Weight"],
        exerciseImages: ["exercises/plankWithAlternatingKneeDrive.gif"],
        tags: ["Abs", "Strength"]
    },
    {
        // 13) Reach and Catch
        name: "Reach and Catch",
        description: "Often used as a functional movement drill, the reach and catch exercise challenges your balance, coordination, and core stability simultaneously. It’s popular in athletic training settings to improve reaction time and dynamic core control while incorporating elements of full-body movement.",
        primaryMuscles: ["Abs"],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 2,
            maxRecommendedSets: 4, 
            minRecommendedReps: 12,
            maxRecommendedReps: 20
        },
        instructions: [
          "Lie on your back with knees bent and feet together.",
          "Extend your arms straight in front of you with fingers interlaced.",
          "Place your hands on your right thigh, then crunch up, reaching toward your knee.",
          "Lower back to the start, then repeat on the opposite side."
        ],
        commonMistakes: [
          "Using momentum instead of controlled movement",
          "Not fully engaging abs"
        ],
        equipment: ["Body Weight"],
        exerciseImages: ["exercises/reachAndCatch.gif"],
        tags: ["Abs", "Strength"]
    },
    {
        // 14) Stability Ball Roman Twist
        name: "Stability Ball Roman Twist",
        description: "Also known as the Swiss ball twist, this exercise involves sitting on a stability ball and rotating your torso from side to side. It effectively targets the oblique muscles and enhances rotational strength, making it a favorite in routines focused on core mobility and functional strength.",
        primaryMuscles: ["Abs"],
        logType: "setsAndReps",
        recommended: {
            minRecommendedSets: 2,
            maxRecommendedSets: 4, 
            minRecommendedReps: 10,
            maxRecommendedReps: 15
        },
        instructions: [
          "Lie on an exercise ball with your middle to upper back supported and feet planted on the floor.",
          "Extend your arms straight towards the ceiling.",
          "Slowly rotate your upper body to one side while keeping your arms straight.",
          "Pause at the peak, then return to the starting position and twist to the opposite side."
        ],
        commonMistakes: [
          "Not keeping core engaged",
          "Using arms instead of twisting the torso"
        ],
        equipment: ["Exercise Ball"],
        exerciseImages: ["exercises/stabilityBallRomanTwist.gif"],
        tags: ["Abs", "Strength"]
    }
];

  