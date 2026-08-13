/* Question bank for the Non-Professional Driver's License Exam.
   Loaded by both exam.html and answer-key.html via a plain <script> tag
   so it also works when opened directly from disk (file://).

   Each session draws `itemsPerSession` items at random from this bank, so no
   two sittings are alike. `id` is stable and is what an attempt record stores,
   which is how the answer-key page reconstructs the exact paper someone sat.
   `answer` is the 0-based index of the correct choice.

   To grow the bank just append entries; nothing else needs editing. Two
   conventions to preserve: correct answers are spread evenly across A-D with
   no long runs, and items whose options are purely numeric keep those options
   in ascending order rather than shuffled. */

var EXAM_META = {
  title: "Non-Professional Driver's License Examination",
  subtitle: 'Written Examination — Road Signs, Traffic Rules & Regulations',
  durationMinutes: 60,
  itemsPerSession: 60,
  passingPercent: 75
};

var QUESTIONS = [
  {
    id: 1,
    q: "What does a solid white line painted along the road mean?",
    art: "markingSolidWhite",
    choices: [
      "Lane changing is discouraged — stay in your lane",
      "Parking is allowed on the line",
      "The road ends ahead",
      "Overtaking is encouraged"
    ],
    answer: 0,
    why: "A solid white line separates lanes of traffic moving in the same direction and discourages lane changing."
  },
  {
    id: 2,
    q: "An octagonal (eight-sided) traffic sign always means:",
    art: "signStop",
    choices: [
      "No entry",
      "Railroad crossing",
      "Yield",
      "Stop"
    ],
    answer: 3,
    why: "The octagon shape is reserved worldwide for the STOP sign."
  },
  {
    id: 3,
    q: "What is the minimum age to apply for a Non-Professional Driver's License in the Philippines?",
    choices: [
      "16 years old",
      "17 years old",
      "18 years old",
      "21 years old"
    ],
    answer: 2,
    why: "A student permit may be issued at 17, but a non-professional license requires at least 18 years of age."
  },
  {
    id: 4,
    q: "A flashing RED traffic light means:",
    art: "lightRedFlash",
    choices: [
      "Speed up to clear the intersection",
      "The signal is out of order — ignore it",
      "Proceed without slowing down",
      "Come to a full stop, then proceed only when it is safe"
    ],
    answer: 3,
    why: "A flashing red light is treated exactly like a STOP sign."
  },
  {
    id: 5,
    q: "A flashing YELLOW traffic light means:",
    art: "lightAmberFlash",
    choices: [
      "Stop completely",
      "Slow down and proceed with caution",
      "Make a U-turn",
      "Back up and take another route"
    ],
    answer: 1,
    why: "Flashing yellow warns of a hazard ahead; reduce speed and pass carefully."
  },
  {
    id: 6,
    q: "At an intersection with no signs, signals, or traffic enforcer, who has the right of way?",
    choices: [
      "The vehicle on the left",
      "The vehicle that arrives first; if arriving at the same time, the vehicle on the right",
      "The faster vehicle",
      "The bigger or heavier vehicle"
    ],
    answer: 1,
    why: "\"First to arrive, first to go.\" When simultaneous, yield to the vehicle on your right."
  },
  {
    id: 7,
    q: "What is the maximum speed limit for cars on an open country road with no blind corners?",
    choices: [
      "40 kph",
      "60 kph",
      "80 kph",
      "100 kph"
    ],
    answer: 2,
    why: "Under the Land Transportation and Traffic Code, cars may travel up to 80 kph on open country roads."
  },
  {
    id: 8,
    q: "What is the speed limit through crowded streets, blind corners, and school zones?",
    choices: [
      "20 kph",
      "30 kph",
      "40 kph",
      "50 kph"
    ],
    answer: 0,
    why: "20 kph is the prescribed limit for crowded streets, approaching intersections at blind corners, and passing school zones."
  },
  {
    id: 9,
    q: "Under RA 10586 (Anti-Drunk and Drugged Driving Act), the blood alcohol limit for a non-professional driver of a private vehicle is:",
    choices: [
      "0.00%",
      "0.05%",
      "0.08%",
      "0.10%"
    ],
    answer: 1,
    why: "0.05% BAC for non-professional drivers; 0.00% is required for professional and public utility drivers."
  },
  {
    id: 10,
    q: "A triangular sign with a red border generally indicates:",
    art: "signWarningTriangle",
    choices: [
      "A regulatory instruction",
      "A warning of danger ahead",
      "An informative or service sign",
      "A tourist destination"
    ],
    answer: 1,
    why: "Triangular signs with red borders are warning signs."
  },
  {
    id: 11,
    q: "A round BLUE traffic sign generally indicates:",
    art: "signBlueMandatory",
    choices: [
      "A prohibition",
      "A mandatory instruction that must be followed",
      "A warning of a hazard",
      "A hospital ahead"
    ],
    answer: 1,
    why: "Blue circular signs give a positive, mandatory instruction (e.g. \"Turn left ahead\")."
  },
  {
    id: 12,
    q: "An ambulance with siren and flashing lights is approaching from behind. You should:",
    choices: [
      "Continue driving normally",
      "Speed up so you do not delay it",
      "Pull over to the right, slow down or stop, and give way",
      "Follow closely behind it to get through traffic"
    ],
    answer: 2,
    why: "Emergency vehicles on duty always have the right of way. Clear the lane to the right and stop if necessary."
  },
  {
    id: 13,
    q: "You may enter a yellow box junction only when:",
    art: "markingBoxJunction",
    choices: [
      "At any time — the box has no meaning",
      "The traffic light is green",
      "Your exit beyond the box is clear",
      "A traffic enforcer is present"
    ],
    answer: 2,
    why: "The yellow box must never be blocked. Enter only if you can clear it without stopping inside."
  },
  {
    id: 14,
    q: "Double solid yellow lines in the middle of the road mean:",
    art: "markingDoubleYellow",
    choices: [
      "Overtaking is prohibited from both directions",
      "The road is one-way",
      "The lane is reserved for bicycles",
      "Overtaking is allowed from both directions"
    ],
    answer: 0,
    why: "Double solid yellow lines absolutely prohibit crossing or overtaking from either side."
  },
  {
    id: 15,
    q: "Overtaking on the RIGHT side is allowed when:",
    choices: [
      "You are crossing a bridge",
      "Never — it is always illegal",
      "The vehicle ahead is making or signalling a left turn and the road to the right is clear and wide enough",
      "You are on a curve"
    ],
    answer: 2,
    why: "Passing on the right is permitted only in limited situations, such as when the vehicle ahead is turning left."
  },
  {
    id: 16,
    q: "Hydroplaning occurs when:",
    choices: [
      "The engine overheats and loses power",
      "The brake fluid boils",
      "The windshield fogs up in the rain",
      "The tires lose contact with the road because they ride on a film of water"
    ],
    answer: 3,
    why: "On wet roads at speed, water can lift the tires off the pavement, causing loss of steering and braking."
  },
  {
    id: 17,
    q: "Under normal conditions, what is the recommended following distance behind the vehicle ahead?",
    choices: [
      "1 second",
      "2 seconds",
      "At least 3 seconds",
      "10 seconds"
    ],
    answer: 2,
    why: "The 3-second rule gives you time to perceive, react, and brake. Increase it in rain or at night."
  },
  {
    id: 18,
    q: "Your vehicle begins to skid. The correct response is to:",
    choices: [
      "Accelerate to regain traction",
      "Switch off the engine",
      "Brake hard and hold the brake down",
      "Ease off the accelerator and steer smoothly in the direction you want to go"
    ],
    answer: 3,
    why: "Hard braking worsens a skid. Release the accelerator and steer gently into the intended path."
  },
  {
    id: 19,
    q: "Which documents must you always carry while driving?",
    choices: [
      "A barangay clearance",
      "Only the insurance policy",
      "Your driver's license and the vehicle's Certificate of Registration and latest Official Receipt",
      "Your birth certificate and NBI clearance"
    ],
    answer: 2,
    why: "License plus CR/OR must be presented on demand to a law enforcement officer."
  },
  {
    id: 20,
    q: "A white \"STOP\" painted on the pavement with a solid transverse line means:",
    art: "markingStopLine",
    choices: [
      "Come to a complete stop before the line",
      "Yield only if another vehicle is coming",
      "This is a designated parking area",
      "Merely slow down"
    ],
    answer: 0,
    why: "The line is the stop limit. Your bumper must not cross it."
  },
  {
    id: 21,
    q: "A sign showing a red circle with a diagonal red slash across a symbol means:",
    art: "signProhibitory",
    choices: [
      "The action shown is prohibited",
      "A warning of a hazard",
      "A route or highway marker",
      "The action is mandatory"
    ],
    answer: 0,
    why: "A red circle with a slash is the universal prohibitory sign."
  },
  {
    id: 22,
    q: "You must dim (lower) your headlights when:",
    choices: [
      "Driving on a wide highway",
      "Driving through thick fog",
      "Never — high beams are always safer",
      "Meeting an oncoming vehicle or following closely behind another vehicle"
    ],
    answer: 3,
    why: "High beams blind other drivers. Switch to low beam when meeting or following traffic."
  },
  {
    id: 23,
    q: "At a rotunda (roundabout), who has the right of way?",
    art: "signRoundabout",
    choices: [
      "The larger vehicle",
      "The vehicle entering the rotunda",
      "The vehicle already travelling inside the rotunda",
      "The vehicle approaching from the left"
    ],
    answer: 2,
    why: "Vehicles already circulating in the rotunda have priority; entering vehicles must yield."
  },
  {
    id: 24,
    q: "At a pedestrian lane (zebra crossing) with no traffic signal:",
    art: "markingZebra",
    choices: [
      "It is a designated parking area",
      "It marks a loading and unloading zone",
      "Pedestrians must wait for all vehicles to pass",
      "Vehicles must give way to pedestrians who are crossing"
    ],
    answer: 3,
    why: "Pedestrians on a marked crossing always have the right of way."
  },
  {
    id: 25,
    q: "Under RA 8750 (Seat Belt Use Act), seat belts must be worn by:",
    choices: [
      "The driver and all front-seat passengers",
      "The driver only",
      "Passengers only when travelling on expressways",
      "No one — its use is optional"
    ],
    answer: 0,
    why: "The driver and front-seat occupants must be belted at all times while the vehicle is in motion."
  },
  {
    id: 26,
    q: "Under RA 10913 (Anti-Distracted Driving Act), it is unlawful to:",
    choices: [
      "Use a mobile phone or similar device while driving, including while stopped at a red light",
      "Talk with your passengers",
      "Listen to the car radio",
      "Drink water while driving"
    ],
    answer: 0,
    why: "Handheld use of a mobile device is prohibited while the vehicle is in motion or temporarily stopped in traffic."
  },
  {
    id: 27,
    q: "Before changing lanes, you should:",
    choices: [
      "Move over as quickly as possible",
      "Brake sharply first",
      "Sound your horn continuously",
      "Check your mirrors, signal, check your blind spot, then move over smoothly"
    ],
    answer: 3,
    why: "Mirror – signal – blind spot – manoeuvre. Signalling alone does not give you the right of way."
  },
  {
    id: 28,
    q: "A crossbuck (\"X\"-shaped) sign marked \"RR\" warns of:",
    art: "signCrossbuck",
    choices: [
      "A rough road",
      "A river crossing",
      "A rest area",
      "A railroad crossing"
    ],
    answer: 3,
    why: "The crossbuck marks a railroad grade crossing. Slow down, look, and listen before crossing."
  },
  {
    id: 29,
    q: "Parking is PROHIBITED:",
    choices: [
      "On any public street at any time",
      "Inside designated parking lots",
      "Anywhere along the curb",
      "Within 6 meters of an intersection, on a crosswalk, or in front of a private driveway"
    ],
    answer: 3,
    why: "These are standard no-parking locations because they obstruct traffic, pedestrians, and access."
  },
  {
    id: 30,
    q: "A broken (dashed) white line between lanes means:",
    art: "markingBrokenWhite",
    choices: [
      "Lane changing or overtaking is allowed when it is safe to do so",
      "Overtaking is strictly prohibited",
      "The road is closed ahead",
      "The lane is reserved for buses"
    ],
    answer: 0,
    why: "Broken lines may be crossed with care; solid lines may not."
  },
  {
    id: 31,
    q: "A green traffic light with a lighted green arrow means:",
    art: "lightGreenArrow",
    choices: [
      "You may proceed in the direction shown by the arrow",
      "Yield to all other traffic before moving",
      "U-turns only",
      "Stop and wait for the next cycle"
    ],
    answer: 0,
    why: "A green arrow is a protected movement in the indicated direction."
  },
  {
    id: 32,
    q: "A school bus stops ahead of you and displays flashing warning lights. You must:",
    choices: [
      "Overtake it quickly before the children get off",
      "Stop and wait until the children have finished crossing and the bus moves on",
      "Sound your horn to warn the children",
      "Proceed at normal speed"
    ],
    answer: 1,
    why: "Children may cross unpredictably. Stop until it is clearly safe to proceed."
  },
  {
    id: 33,
    q: "Two vehicles meet on a steep, narrow mountain road where only one can pass. Who has the right of way?",
    choices: [
      "The vehicle travelling faster",
      "The vehicle going down the slope",
      "The vehicle going up the slope",
      "The bigger vehicle"
    ],
    answer: 2,
    why: "The ascending vehicle has the right of way; the descending vehicle can stop and reverse more safely."
  },
  {
    id: 34,
    q: "A front tire blows out while you are driving. You should:",
    choices: [
      "Slam on the brakes immediately",
      "Grip the steering wheel firmly, ease off the accelerator, and slow down gradually before pulling over",
      "Steer sharply toward the shoulder",
      "Shift into reverse"
    ],
    answer: 1,
    why: "Sudden braking or steering after a blowout can cause a rollover or spin."
  },
  {
    id: 35,
    q: "A solid yellow line paired with a broken yellow line beside it means:",
    art: "markingYellowSolidBroken",
    choices: [
      "Both directions may overtake freely",
      "Two-way traffic ends ahead",
      "Neither direction may overtake",
      "Only traffic on the side with the broken line may overtake"
    ],
    answer: 3,
    why: "You may cross only when the line nearest to you is broken."
  },
  {
    id: 36,
    q: "Which hand signal indicates a RIGHT turn?",
    art: "handRightTurn",
    choices: [
      "Left arm bent upward at the elbow",
      "Left arm extended and pointing downward",
      "Both arms extended outward",
      "Left arm extended straight out to the side"
    ],
    answer: 0,
    why: "Left arm straight out = left turn; left arm bent up = right turn; left arm pointing down = slowing or stopping."
  },
  {
    id: 37,
    q: "Which hand signal indicates that you are slowing down or stopping?",
    art: "handSlowStop",
    choices: [
      "Left arm extended and bent downward",
      "Left arm extended straight out",
      "Left arm bent upward at the elbow",
      "Waving the arm back and forth"
    ],
    answer: 0,
    why: "The downward-bent arm is the recognised signal for slowing or stopping."
  },
  {
    id: 38,
    q: "Another vehicle is overtaking you. You should:",
    choices: [
      "Swerve to the left",
      "Brake hard",
      "Speed up to prevent it from passing",
      "Keep to your lane and maintain or slightly reduce your speed until it has passed"
    ],
    answer: 3,
    why: "The overtaken driver is legally required to give way and must not increase speed."
  },
  {
    id: 39,
    q: "You are involved in a road accident in which a person is injured. You must first:",
    choices: [
      "Stop, assist the injured, and report the accident to the nearest authorities",
      "Argue with the other driver about who is at fault",
      "Move both vehicles away before anything else",
      "Leave the scene to avoid trouble"
    ],
    answer: 0,
    why: "Failure to lend assistance and to report the accident is a separate offense."
  },
  {
    id: 40,
    q: "A first-time Non-Professional Driver's License in the Philippines is generally valid for:",
    choices: [
      "1 year",
      "3 years",
      "5 years",
      "10 years"
    ],
    answer: 2,
    why: "First issuance is valid for 5 years; renewal may be for 10 years if the holder has no traffic violations."
  },
  {
    id: 41,
    q: "A steady AMBER (yellow) traffic light means:",
    art: "lightAmberSteady",
    choices: [
      "Proceed as if the light were green",
      "Stop only if a traffic enforcer is watching",
      "Prepare to stop — do not enter the intersection if you can stop safely",
      "Speed up to beat the red light"
    ],
    answer: 2,
    why: "Amber warns that red is next. Enter the intersection only if stopping would be unsafe."
  },
  {
    id: 42,
    q: "When is it proper to use your horn?",
    choices: [
      "To hurry along the vehicle in front of you",
      "To warn other road users of your presence in order to avoid an accident",
      "To express annoyance at slow drivers",
      "To greet friends along the road"
    ],
    answer: 1,
    why: "The horn is a safety device, not a means of expressing irritation. Needless blowing is a violation."
  },
  {
    id: 43,
    q: "A road area painted with white diagonal stripes or chevrons (hatched markings) means:",
    art: "markingHatched",
    choices: [
      "It is a loading and unloading zone",
      "It is a designated overtaking lane",
      "Keep out of this area — it separates traffic streams",
      "It is an extra parking bay"
    ],
    answer: 2,
    why: "Hatched markings channel traffic and must not be driven on or parked in."
  },
  {
    id: 44,
    q: "Before backing up (reversing) your vehicle, you should:",
    choices: [
      "Rely only on the rear-view mirror and reverse quickly",
      "Sound the horn continuously and reverse at normal speed",
      "Ask a passenger to steer while you look back",
      "Look behind the vehicle, check your mirrors and blind spots, then reverse slowly"
    ],
    answer: 3,
    why: "Most of the area directly behind a vehicle is not visible in mirrors. Look, then reverse slowly."
  },
  {
    id: 45,
    q: "When preparing to turn LEFT at an intersection, you should position your vehicle:",
    choices: [
      "In the middle of two lanes",
      "On the shoulder of the road",
      "In the lane nearest to the center line of the road",
      "In the outermost right lane"
    ],
    answer: 2,
    why: "Turning from the correct lane prevents cutting across other vehicles."
  },
  {
    id: 46,
    q: "Defensive driving is best described as:",
    choices: [
      "Driving as fast as the traffic flow allows",
      "Driving only in the leftmost lane to stay clear of traffic",
      "Depending on other drivers to avoid you",
      "Driving to save lives, time, and money in spite of the conditions around you and the actions of others"
    ],
    answer: 3,
    why: "Defensive driving means anticipating hazards and other drivers’ mistakes rather than reacting to them."
  },
  {
    id: 47,
    q: "Your brakes fail while driving. You should:",
    choices: [
      "Switch off the engine immediately and let go of the wheel",
      "Pull the hand brake all the way up at once",
      "Steer into the opposite lane to slow down",
      "Pump the brake pedal, shift to a lower gear, apply the hand brake gradually, and steer to a safe area"
    ],
    answer: 3,
    why: "Engine braking plus a gradual hand brake slows the vehicle without locking the wheels or losing steering."
  },
  {
    id: 48,
    q: "What is the safest way to negotiate a sharp curve?",
    choices: [
      "Maintain full speed all the way through",
      "Shift to neutral and coast around it",
      "Slow down before entering the curve, then accelerate gently as you exit",
      "Brake hard while in the middle of the curve"
    ],
    answer: 2,
    why: "Braking inside a curve upsets balance and can cause a skid. Reduce speed before you enter."
  },
  {
    id: 49,
    q: "Your engine overheats and steam comes from the hood. You should:",
    choices: [
      "Keep driving to the nearest shop with the heater on",
      "Pull over safely, switch off the engine, and let it cool before opening the radiator cap",
      "Open the radiator cap right away to release the pressure",
      "Pour cold water on the engine block immediately"
    ],
    answer: 1,
    why: "Opening a hot radiator releases scalding steam under pressure. Let the engine cool first."
  },
  {
    id: 50,
    q: "When driving in heavy rain with poor visibility, you should:",
    choices: [
      "Use high beams to see farther through the rain",
      "Follow closely behind a large truck to use it as a guide",
      "Slow down, switch on your headlights, increase your following distance, and pull over safely if visibility is lost",
      "Turn on your hazard lights and keep your normal speed"
    ],
    answer: 2,
    why: "Wet roads lengthen braking distance. Hazard lights while moving hide your signals from other drivers."
  },
  {
    id: 51,
    q: "A \"blind spot\" refers to:",
    choices: [
      "A spot on the windshield blocked by the wiper",
      "The area around your vehicle that you cannot see in your mirrors",
      "A poorly lighted stretch of road at night",
      "A curve where the road ahead is hidden"
    ],
    answer: 1,
    why: "Always turn your head to check blind spots before changing lanes or turning."
  },
  {
    id: 52,
    q: "You begin to feel drowsy while driving on a long trip. The correct action is to:",
    choices: [
      "Open the window and drive faster to reach your destination sooner",
      "Drink coffee and continue driving through the night",
      "Turn the radio up loud and keep going",
      "Pull over at a safe place and rest before continuing"
    ],
    answer: 3,
    why: "Only rest cures fatigue. A drowsy driver is as dangerous as an intoxicated one."
  },
  {
    id: 53,
    q: "You are leaving a private driveway and entering a public highway. You must:",
    choices: [
      "Proceed first because you are the smaller vehicle",
      "Sound your horn and enter without stopping",
      "Enter the highway in reverse",
      "Yield to all traffic and pedestrians already on the highway"
    ],
    answer: 3,
    why: "Traffic on the through highway always has the right of way over vehicles entering from a driveway."
  },
  {
    id: 54,
    q: "Under RA 10054 (Motorcycle Helmet Act), a motorcycle rider and back rider must:",
    choices: [
      "Wear any cap or head covering of their choice",
      "Wear a standard protective helmet bearing the PS or ICC mark at all times while riding",
      "Wear a helmet only when travelling on national highways",
      "Wear a helmet only when riding at night"
    ],
    answer: 1,
    why: "Both the driver and the back rider must wear an LTO-approved standard helmet on any public road."
  },
  {
    id: 55,
    q: "Under RA 11229 (Child Safety in Motor Vehicles Act), a child aged 12 and below who is shorter than 150 cm must:",
    choices: [
      "Be properly secured in an age- and size-appropriate child restraint system",
      "Sit on the lap of an adult passenger in front",
      "Sit in the front seat wearing the adult seat belt",
      "Stand between the front seats where an adult can hold them"
    ],
    answer: 0,
    why: "Children below the height threshold must use a child restraint and may not ride in the front seat."
  },
  {
    id: 56,
    q: "Your vehicle breaks down and is stalled on the road. You must:",
    choices: [
      "Set up an early warning device at the required distance behind and in front of the vehicle",
      "Leave the vehicle where it is and go for help immediately",
      "Simply switch on the hazard lights and leave it unattended",
      "Push the vehicle into the next lane so traffic can pass on the shoulder"
    ],
    answer: 0,
    why: "Carrying and deploying an early warning device is required so approaching drivers are alerted in time."
  },
  {
    id: 57,
    q: "When making a U-turn, you should:",
    choices: [
      "Make it anywhere as long as no enforcer is watching",
      "Make it quickly from the outermost right lane",
      "Make it on a curve where traffic is lighter",
      "Make it only where it is allowed, signal in advance, and yield to oncoming traffic and pedestrians"
    ],
    answer: 3,
    why: "A U-turn is illegal where prohibited or where your view is obstructed, and it never has priority."
  },
  {
    id: 58,
    q: "Which of the following is a REGULATORY sign?",
    choices: [
      "A \"Rest Area 2 km\" sign",
      "A \"Speed Limit 60\" sign",
      "A \"Slippery When Wet\" sign",
      "A \"Hospital Ahead\" sign"
    ],
    answer: 1,
    why: "Regulatory signs impose a legal requirement. The others are warning and informative signs."
  },
  {
    id: 59,
    q: "A \"No Blowing of Horn\" sign near a hospital or school means:",
    art: "signNoHorn",
    choices: [
      "You are in a silence zone and must not sound your horn",
      "You may sound your horn only briefly",
      "The sign applies only at night",
      "You may use the horn if traffic is heavy"
    ],
    answer: 0,
    why: "Silence zones protect patients and students. Use of the horn there is a violation."
  },
  {
    id: 60,
    q: "You see a \"Merging Traffic\" warning sign ahead. You should:",
    art: "signMerge",
    choices: [
      "Stop at the merge point and wait for all vehicles to pass",
      "Move onto the shoulder to avoid the merging lane",
      "Adjust your speed and position to allow merging vehicles to blend safely into the traffic flow",
      "Speed up so you pass the merge point first"
    ],
    answer: 2,
    why: "Merging works by cooperation — adjust speed and leave a gap rather than racing to the merge point."
  },
  {
    id: 61,
    q: "A sign showing a U-turn arrow inside a red circle with a slash means:",
    choices: [
      "A U-turn slot is ahead",
      "You must make a U-turn",
      "Making a U-turn at that location is prohibited",
      "U-turns are allowed only at night"
    ],
    answer: 2,
    why: "A red circle with a slash over a symbol prohibits the action shown."
  },
  {
    id: 62,
    q: "A red circle with a slash over a left-turn arrow means:",
    choices: [
      "You may not turn left at that intersection",
      "You must turn left",
      "Left turns are allowed only for buses",
      "The road curves left ahead"
    ],
    answer: 0,
    why: "The sign prohibits the left turn; continue straight or find another route."
  },
  {
    id: 63,
    q: "A white horizontal bar inside a red circle is the sign for:",
    choices: [
      "One-way street ahead",
      "End of restrictions",
      "No entry — do not proceed in that direction",
      "Road under repair"
    ],
    answer: 2,
    why: "This is the \"No Entry\" or \"Do Not Enter\" regulatory sign."
  },
  {
    id: 64,
    q: "A rectangular sign with a white arrow on a blue field indicates:",
    choices: [
      "A detour to the left",
      "Two-way traffic resumes",
      "A one-way street in the direction of the arrow",
      "A parking area ahead"
    ],
    answer: 2,
    why: "It marks one-way traffic; entering against the arrow is illegal."
  },
  {
    id: 65,
    q: "An inverted (upside-down) triangle sign with a red border means:",
    choices: [
      "A crossroad is ahead",
      "Give way to traffic on the road you are entering",
      "Come to a complete stop always",
      "No entry for trucks"
    ],
    answer: 1,
    why: "The inverted triangle is the Give Way or Yield sign."
  },
  {
    id: 66,
    q: "A yellow diamond sign showing a car with wavy lines beneath it warns of:",
    choices: [
      "A flooded road ahead",
      "A car wash ahead",
      "Loose gravel",
      "A slippery road when wet"
    ],
    answer: 3,
    why: "It warns that the surface loses grip in the rain; slow down."
  },
  {
    id: 67,
    q: "A warning sign showing a truck on a steep slope means:",
    choices: [
      "A truck lane begins",
      "No trucks allowed",
      "A weighing station ahead",
      "A steep descent ahead — shift to a lower gear"
    ],
    answer: 3,
    why: "Use engine braking on long descents instead of riding the brakes."
  },
  {
    id: 68,
    q: "A warning sign showing the road narrowing from both sides means:",
    choices: [
      "The road widens ahead",
      "A toll gate ahead",
      "Lane markings end",
      "A narrow road or narrow bridge ahead"
    ],
    answer: 3,
    why: "Reduce speed and be ready to give way where only one vehicle fits."
  },
  {
    id: 69,
    q: "A warning sign showing a figure with a shovel means:",
    choices: [
      "Road works ahead — slow down and follow flagmen",
      "A quarry entrance",
      "A farm crossing",
      "A construction supply store"
    ],
    answer: 0,
    why: "Men are working on the road; speed limits in work zones are lower."
  },
  {
    id: 70,
    q: "A warning sign showing rocks tumbling down a slope means:",
    choices: [
      "A gravel road begins",
      "A dumping site ahead",
      "Falling rocks or landslide-prone area",
      "A rocky beach nearby"
    ],
    answer: 2,
    why: "Watch for debris on the carriageway and do not stop under the slope."
  },
  {
    id: 71,
    q: "A warning sign showing a series of S-curves means:",
    choices: [
      "A winding road for the distance indicated",
      "A single sharp curve",
      "A detour ahead",
      "A river crossing"
    ],
    answer: 0,
    why: "Expect successive bends; keep to your lane and moderate your speed."
  },
  {
    id: 72,
    q: "A speed limit sign showing \"60\" means:",
    choices: [
      "60 kph is safe in any weather",
      "The maximum lawful speed there is 60 kph in good conditions",
      "You must drive exactly 60 kph",
      "The minimum speed is 60 kph"
    ],
    answer: 1,
    why: "It is a ceiling, not a target; conditions may require slower speeds."
  },
  {
    id: 73,
    q: "A round sign showing a number in blue with white figures indicates:",
    choices: [
      "A minimum speed that must be maintained",
      "A maximum speed limit",
      "The distance to the next town",
      "A route number"
    ],
    answer: 0,
    why: "Blue mandatory signs may set a minimum speed, common on expressways."
  },
  {
    id: 74,
    q: "A sign showing a letter \"P\" crossed out inside a red circle means:",
    choices: [
      "A police station ahead",
      "No parking at that place",
      "Paid parking ahead",
      "Parking for PWD only"
    ],
    answer: 1,
    why: "The crossed-out P prohibits parking along that stretch."
  },
  {
    id: 75,
    q: "A \"Tow-Away Zone\" sign warns that:",
    choices: [
      "Trucks may not pass",
      "The road is for towed trailers",
      "Illegally parked vehicles will be towed at the owner’s expense",
      "Towing services are available"
    ],
    answer: 2,
    why: "Parking there risks impounding and towing fees on top of the fine."
  },
  {
    id: 76,
    q: "A blue sign bearing a white \"H\" indicates:",
    choices: [
      "A hospital is nearby",
      "A hotel ahead",
      "A helicopter pad",
      "A highway patrol post"
    ],
    answer: 0,
    why: "Blue informative or service signs point to facilities such as hospitals."
  },
  {
    id: 77,
    q: "A sign reading \"DETOUR\" with an arrow means:",
    choices: [
      "The road ahead is closed and you must follow the marked alternate route",
      "A shortcut is available",
      "The road ahead is one-way",
      "A rest stop is ahead"
    ],
    answer: 0,
    why: "Follow the arrow; proceeding straight is blocked or unsafe."
  },
  {
    id: 78,
    q: "A sign indicating \"DEAD END\" or \"NO THROUGH ROAD\" tells you that:",
    choices: [
      "Heavy vehicles are banned",
      "The road becomes a footpath for pedestrians only",
      "The road does not continue and you must turn back",
      "The road is closed only at night"
    ],
    answer: 2,
    why: "There is no exit at the far end; avoid entering unless it is your destination."
  },
  {
    id: 79,
    q: "A round yellow sign bearing a black cross or \"X\" placed before a railway is:",
    choices: [
      "An advance warning that a railroad crossing is ahead",
      "A first aid station marker",
      "A church zone marker",
      "A no-crossing sign for pedestrians"
    ],
    answer: 0,
    why: "It gives advance notice so you can slow down before the crossing itself."
  },
  {
    id: 80,
    q: "A warning sign showing two children walking means:",
    choices: [
      "A school zone or children’s crossing — slow to the posted limit",
      "A playground for residents only",
      "A day care centre for enrolment",
      "Children are prohibited on the road"
    ],
    answer: 0,
    why: "Children are unpredictable; the prescribed limit in school zones is 20 kph."
  },
  {
    id: 81,
    q: "A warning sign showing the silhouette of a cow or carabao means:",
    choices: [
      "A slaughterhouse is ahead",
      "A livestock market is nearby",
      "Animal-drawn vehicles are banned",
      "Animals may stray onto the road"
    ],
    answer: 3,
    why: "Be ready to slow or stop; livestock may cross without warning."
  },
  {
    id: 82,
    q: "A warning sign showing a traffic light symbol means:",
    choices: [
      "A new traffic light is being installed",
      "The signal is for pedestrians only",
      "A signalised intersection is ahead — be ready to stop",
      "The traffic light is out of order"
    ],
    answer: 2,
    why: "It gives warning where the signal itself may be hard to see in time."
  },
  {
    id: 83,
    q: "A sign showing two opposing vertical arrows, one up and one down, means:",
    choices: [
      "Two-way traffic — the road carries opposing traffic ahead",
      "A dual carriageway begins",
      "A U-turn slot is ahead",
      "Overtaking is permitted"
    ],
    answer: 0,
    why: "Often posted where a one-way section ends; expect oncoming vehicles."
  },
  {
    id: 84,
    q: "A warning sign showing one lane merging into another means:",
    choices: [
      "A weaving section for buses",
      "An exit ramp is ahead",
      "A lane ends ahead and traffic must merge",
      "A new lane opens ahead"
    ],
    answer: 2,
    why: "Adjust speed early and merge in turn instead of racing to the taper."
  },
  {
    id: 85,
    q: "A sign showing a height in metres between two arrows warns of:",
    choices: [
      "The depth of floodwater",
      "The width of the bridge",
      "A low clearance that tall vehicles must not exceed",
      "The height above sea level"
    ],
    answer: 2,
    why: "Vehicles taller than the posted clearance will strike the structure."
  },
  {
    id: 86,
    q: "A sign showing a weight in tonnes inside a red circle means:",
    choices: [
      "A weighbridge is ahead",
      "The load limit per axle only",
      "Vehicles heavier than the posted weight are prohibited",
      "The weight of the bridge"
    ],
    answer: 2,
    why: "Weight limits protect bridges and pavements from structural damage."
  },
  {
    id: 87,
    q: "A sign showing two cars side by side, one black and one red, inside a red circle means:",
    choices: [
      "Two lanes are available",
      "Red vehicles are restricted",
      "Convoy driving is required",
      "Overtaking is prohibited on that stretch"
    ],
    answer: 3,
    why: "The no-overtaking sign applies until an end-of-restriction sign appears."
  },
  {
    id: 88,
    q: "A blue sign bearing a white bicycle indicates:",
    choices: [
      "A lane or path designated for bicycles",
      "Bicycles are prohibited",
      "A bicycle shop ahead",
      "A cycling race is in progress"
    ],
    answer: 0,
    why: "Motor vehicles must keep out of a designated bicycle lane."
  },
  {
    id: 89,
    q: "A yellow-and-black chevron arrow sign on the outside of a bend tells you to:",
    choices: [
      "Follow the sharp change of direction it indicates",
      "Overtake on that side",
      "Stop before the bend",
      "Merge to the right"
    ],
    answer: 0,
    why: "Chevrons mark the alignment of a sharp curve, especially at night."
  },
  {
    id: 90,
    q: "A sign marked with a bus symbol at the roadside indicates:",
    choices: [
      "A designated loading and unloading point for buses",
      "Buses are prohibited",
      "A bus terminal ticket office",
      "A lane for buses only at all hours"
    ],
    answer: 0,
    why: "Public utility vehicles may pick up and drop off passengers only at such points."
  },
  {
    id: 91,
    q: "A curb painted solid yellow generally means:",
    choices: [
      "Free parking for two hours",
      "A loading zone for trucks",
      "A pedestrian waiting area",
      "No parking or stopping along that curb"
    ],
    answer: 3,
    why: "Yellow curb markings prohibit parking; check local ordinances for details."
  },
  {
    id: 92,
    q: "The solid white line running along the outer edge of the carriageway is the:",
    choices: [
      "Parking bay boundary",
      "Edge line, marking the limit of the usable roadway",
      "Centre line",
      "Bicycle lane divider"
    ],
    answer: 1,
    why: "It guides drivers at night and in rain by showing where the pavement ends."
  },
  {
    id: 93,
    q: "White arrows painted within a lane indicate:",
    choices: [
      "The direction of travel permitted from that lane",
      "Where to park",
      "A pedestrian crossing ahead",
      "The location of a speed camera"
    ],
    answer: 0,
    why: "Select the lane whose arrow matches your intended movement well in advance."
  },
  {
    id: 94,
    q: "A series of closely spaced raised ridges across the lane (rumble strips) are there to:",
    choices: [
      "Mark the boundary of a toll plaza",
      "Provide grip for motorcycles",
      "Alert drivers by noise and vibration to slow down or stay in lane",
      "Drain water from the road"
    ],
    answer: 2,
    why: "They warn an inattentive or drifting driver through sound and feel."
  },
  {
    id: 95,
    q: "Two solid white lines side by side across your lane at an intersection mark:",
    choices: [
      "The start of a bus lane",
      "A no-overtaking area",
      "The limit line where you must stop",
      "A pedestrian-only zone"
    ],
    answer: 2,
    why: "Stop with your front bumper behind the line, not on or beyond it."
  },
  {
    id: 96,
    q: "At a signalised intersection with both a stop line and a pedestrian lane, you must stop:",
    choices: [
      "Before the stop line, which comes before the pedestrian lane",
      "On the pedestrian lane",
      "Beyond the pedestrian lane",
      "Anywhere inside the intersection"
    ],
    answer: 0,
    why: "Stopping on the crossing forces pedestrians into moving traffic."
  },
  {
    id: 97,
    q: "A painted island or raised traffic island in the middle of the road serves to:",
    choices: [
      "Provide extra parking",
      "Mark the halfway point of the road",
      "Reserve space for street vendors",
      "Separate and channel traffic streams and shelter pedestrians"
    ],
    answer: 3,
    why: "Never drive over an island; it directs traffic and protects pedestrians."
  },
  {
    id: 98,
    q: "A wide white band painted across the mouth of a side street means:",
    choices: [
      "The street is closed",
      "Traffic emerging must give way to the main road",
      "Parking is allowed there",
      "It is a pedestrian-only street"
    ],
    answer: 1,
    why: "Give-way lines require you to yield before entering the through road."
  },
  {
    id: 99,
    q: "A fire truck responding to a fire with siren sounding approaches. You must:",
    choices: [
      "Follow it to the fire",
      "Overtake it if traffic is heavy",
      "Give way immediately, pulling over and stopping if necessary",
      "Maintain your speed and position"
    ],
    answer: 2,
    why: "Fire trucks, ambulances, and police on emergency duty always have priority."
  },
  {
    id: 100,
    q: "When a funeral procession is passing, other drivers should:",
    choices: [
      "Give way and not cut into or break the procession",
      "Overtake the procession quickly",
      "Join the procession to pass traffic",
      "Sound the horn continuously"
    ],
    answer: 0,
    why: "A procession is treated as a single unit and should not be broken up."
  },
  {
    id: 101,
    q: "A pedestrian carrying a white cane is crossing ahead of you. You must:",
    choices: [
      "Sound your horn to warn them",
      "Drive around them quickly",
      "Flash your headlights",
      "Stop and give way — the pedestrian may be visually impaired"
    ],
    answer: 3,
    why: "A white cane signals impaired vision; the pedestrian has absolute right of way."
  },
  {
    id: 102,
    q: "Unless a sign expressly allows it, turning right while the light is red is:",
    choices: [
      "Prohibited — you must wait for the green",
      "Always allowed after stopping",
      "Allowed only for motorcycles",
      "Allowed if no enforcer is present"
    ],
    answer: 0,
    why: "In the Philippines there is no general right turn on red; obey the signal."
  },
  {
    id: 103,
    q: "Overtaking is prohibited when you are:",
    choices: [
      "On a curve, a bridge, an intersection, or a railroad crossing",
      "On a straight and level road",
      "In the outermost lane",
      "Travelling below the speed limit"
    ],
    answer: 0,
    why: "Sight distance is inadequate in these places, so passing is unlawful."
  },
  {
    id: 104,
    q: "On a multi-lane highway, slower vehicles should keep to:",
    choices: [
      "The innermost lane",
      "The centre lane at all times",
      "Whichever lane is emptiest",
      "The outermost (rightmost) lane, leaving inner lanes for overtaking"
    ],
    answer: 3,
    why: "Keep right except to overtake; blocking the fast lane obstructs traffic."
  },
  {
    id: 105,
    q: "You should activate your signal light before turning:",
    choices: [
      "After you have started turning",
      "Only if another vehicle is behind you",
      "At least 30 metres before the turn so others can react",
      "Only as you begin to turn"
    ],
    answer: 2,
    why: "Early signalling gives following and oncoming traffic time to respond."
  },
  {
    id: 106,
    q: "When two vehicles approach a T-intersection, the vehicle on the terminating road must:",
    choices: [
      "Sound the horn and go",
      "Reverse and wait",
      "Give way to traffic on the continuing through road",
      "Proceed first"
    ],
    answer: 2,
    why: "The through road has priority over the road that ends at it."
  },
  {
    id: 107,
    q: "The minimum speed rule on an expressway exists because:",
    choices: [
      "It saves fuel",
      "It reduces toll fees",
      "It shortens travel time for buses only",
      "Vehicles travelling too slowly create a hazard for faster traffic"
    ],
    answer: 3,
    why: "Large speed differences between vehicles are a major cause of collisions."
  },
  {
    id: 108,
    q: "Which of these is generally prohibited from using an expressway?",
    choices: [
      "Tricycles, pedicabs, and animal-drawn vehicles",
      "Private cars",
      "Buses",
      "Delivery vans"
    ],
    answer: 0,
    why: "Slow-moving and non-motorised vehicles are barred for safety reasons."
  },
  {
    id: 109,
    q: "You may stop on the shoulder of an expressway only:",
    choices: [
      "In a genuine emergency or breakdown, with warning devices displayed",
      "To rest whenever you feel like it",
      "To pick up passengers",
      "To answer a phone call"
    ],
    answer: 0,
    why: "The shoulder is for emergencies; stopping there otherwise is an offence."
  },
  {
    id: 110,
    q: "Reversing or making a U-turn on an expressway is:",
    choices: [
      "Allowed for emergency vehicles only",
      "Strictly prohibited — continue to the next exit or U-turn slot",
      "Allowed if traffic is light",
      "Allowed on the shoulder only"
    ],
    answer: 1,
    why: "Traffic closes at high speed; reversing there is extremely dangerous."
  },
  {
    id: 111,
    q: "Driving against the flow of traffic (counterflow) is:",
    choices: [
      "Permitted for motorcycles",
      "A serious violation that endangers everyone and is never justified by traffic",
      "Acceptable when traffic is at a standstill",
      "Allowed if an enforcer waves you on only"
    ],
    answer: 1,
    why: "Head-on collisions are the most lethal type; counterflowing is heavily penalised."
  },
  {
    id: 112,
    q: "When parking facing uphill beside a curb, you should turn your front wheels:",
    choices: [
      "Away from the curb and set the hand brake",
      "Straight ahead",
      "Toward the curb",
      "It does not matter"
    ],
    answer: 0,
    why: "If the vehicle rolls, the wheels catch the curb instead of entering traffic."
  },
  {
    id: 113,
    q: "When parking facing downhill beside a curb, you should turn your front wheels:",
    choices: [
      "Toward the centre of the road",
      "Toward the curb and set the hand brake",
      "Away from the curb",
      "Straight ahead"
    ],
    answer: 1,
    why: "Turned into the curb, a rolling vehicle is stopped by the kerb face."
  },
  {
    id: 114,
    q: "Parking within a few metres of a fire hydrant is prohibited because:",
    choices: [
      "It obstructs firefighters’ access to water in an emergency",
      "The paint may damage your vehicle",
      "Hydrants leak onto vehicles",
      "It is reserved for delivery vans"
    ],
    answer: 0,
    why: "Blocking a hydrant can cost lives and is a standard no-parking location."
  },
  {
    id: 115,
    q: "Parking your vehicle on a sidewalk is:",
    choices: [
      "Prohibited — sidewalks are for pedestrians",
      "Allowed if the sidewalk is wide",
      "Allowed at night only",
      "Allowed for motorcycles only"
    ],
    answer: 0,
    why: "It forces pedestrians onto the carriageway and is an obstruction offence."
  },
  {
    id: 116,
    q: "Double parking — leaving your vehicle beside another parked vehicle — is:",
    choices: [
      "Permitted if hazard lights are on",
      "Permitted outside business hours",
      "An obstruction violation, even if you remain inside the vehicle",
      "Permitted for short stops"
    ],
    answer: 2,
    why: "It narrows the roadway and blocks the vehicle already lawfully parked."
  },
  {
    id: 117,
    q: "You are approaching an intersection but traffic ahead is backed up. You should:",
    choices: [
      "Change to the leftmost lane and proceed",
      "Wait before entering so you do not block the intersection",
      "Enter and wait inside the intersection",
      "Sound your horn and push through"
    ],
    answer: 1,
    why: "Blocking an intersection gridlocks every other approach."
  },
  {
    id: 118,
    q: "A vehicle ahead has stopped at a pedestrian lane. You should:",
    choices: [
      "Change lanes and continue at speed",
      "Stop as well — a pedestrian you cannot see may be crossing",
      "Overtake it on the right",
      "Sound your horn"
    ],
    answer: 1,
    why: "Passing a vehicle stopped at a crossing is a common cause of pedestrian deaths."
  },
  {
    id: 119,
    q: "Following a large truck or bus, you should keep a greater distance because:",
    choices: [
      "Its brakes are always better than yours",
      "It is required to travel slowly",
      "Trucks are not allowed to brake suddenly",
      "It blocks your view ahead and needs a longer distance to stop"
    ],
    answer: 3,
    why: "You cannot read the road through a truck, so buy yourself time and space."
  },
  {
    id: 120,
    q: "When you intend to turn at an intersection with several lanes, you should:",
    choices: [
      "Move into the correct lane well before the intersection",
      "Turn from whichever lane you are in",
      "Turn from the middle of two lanes",
      "Signal only after entering the intersection"
    ],
    answer: 0,
    why: "Last-moment lane changes at intersections cause side-swipe collisions."
  },
  {
    id: 121,
    q: "A student driver’s permit allows the holder to drive:",
    choices: [
      "Alone, but only during daytime",
      "Only motorcycles",
      "Only while accompanied by a licensed driver seated beside them",
      "Alone, on any road"
    ],
    answer: 2,
    why: "A student permit is never a licence to drive unaccompanied."
  },
  {
    id: 122,
    q: "The main difference between a professional and a non-professional licence is that:",
    choices: [
      "There is no practical difference",
      "A professional licence allows driving for hire or compensation",
      "A professional licence is valid longer only",
      "A non-professional licence covers trucks"
    ],
    answer: 1,
    why: "Driving a for-hire or public utility vehicle requires a professional licence."
  },
  {
    id: 123,
    q: "Restriction codes on a driver’s licence indicate:",
    choices: [
      "The roads the holder may use",
      "The hours the holder may drive",
      "The provinces where the licence is valid",
      "The types of vehicles the holder is authorised to drive"
    ],
    answer: 3,
    why: "Driving a vehicle outside your restriction code is a violation."
  },
  {
    id: 124,
    q: "Before a first licence is issued, an applicant is required to:",
    choices: [
      "Only present a barangay clearance",
      "Only pass an eye test",
      "Complete the prescribed driving course and pass the written and practical examinations",
      "Only pay the licence fee"
    ],
    answer: 2,
    why: "A theoretical driving course plus both examinations are prerequisites."
  },
  {
    id: 125,
    q: "A medical certificate from an accredited physician is required when applying for a licence in order to:",
    choices: [
      "Register the applicant for insurance",
      "Prove the applicant’s age",
      "Waive the written examination",
      "Confirm the applicant is physically and mentally fit to drive"
    ],
    answer: 3,
    why: "Fitness to drive, including eyesight, must be established before issuance."
  },
  {
    id: 126,
    q: "If your driver’s licence is lost, you should:",
    choices: [
      "Borrow a relative’s licence",
      "Report the loss and apply for a duplicate before driving again",
      "Continue driving and explain if apprehended",
      "Use a photocopy of the old licence"
    ],
    answer: 1,
    why: "Driving without carrying a valid licence is an offence regardless of the reason."
  },
  {
    id: 127,
    q: "Driving with a licence that has already expired is:",
    choices: [
      "Allowed for up to one year after expiry",
      "Allowed if you carry the renewal receipt only",
      "Allowed within your home province",
      "A violation subject to a fine, the same as driving unlicensed"
    ],
    answer: 3,
    why: "An expired licence is not a valid licence; renew before it lapses."
  },
  {
    id: 128,
    q: "Allowing an unlicensed person to drive your vehicle makes:",
    choices: [
      "Both the driver and the vehicle owner liable",
      "Only the driver liable",
      "Only the owner liable if an accident occurs",
      "Nobody liable if no accident occurs"
    ],
    answer: 0,
    why: "Permitting an unlicensed person to drive is a separate offence by the owner."
  },
  {
    id: 129,
    q: "Motor vehicle registration (the OR and CR) must be renewed:",
    choices: [
      "Only when the vehicle is sold",
      "Only when the engine is replaced",
      "Annually, according to the schedule based on the plate number",
      "Once every five years"
    ],
    answer: 2,
    why: "Registration renewal is yearly and includes emission and insurance requirements."
  },
  {
    id: 130,
    q: "Operating a vehicle with an unregistered or improperly displayed plate is:",
    choices: [
      "A violation that can lead to a fine and impounding",
      "Allowed while waiting for the plate",
      "Allowed if the CR is in the vehicle",
      "A minor matter with no penalty"
    ],
    answer: 0,
    why: "Plates must be attached and legible front and rear as issued."
  },
  {
    id: 131,
    q: "Tires worn smooth with little or no tread are dangerous mainly because:",
    choices: [
      "They make the ride noisier",
      "They wear the suspension faster",
      "They reduce fuel efficiency only",
      "They cannot channel water away, greatly increasing skid and hydroplaning risk"
    ],
    answer: 3,
    why: "Tread depth is what maintains grip on a wet road."
  },
  {
    id: 132,
    q: "Tire pressure should be checked:",
    choices: [
      "Immediately after a long fast drive",
      "Only when a tire looks flat",
      "Only during the annual inspection",
      "When the tires are cold, against the manufacturer’s recommended figure"
    ],
    answer: 3,
    why: "Hot tires read higher than their true cold pressure, giving a false result."
  },
  {
    id: 133,
    q: "The recommended tire pressure for your vehicle is found:",
    choices: [
      "On the licence plate",
      "In the owner’s manual or on the placard in the door jamb",
      "Moulded on the tire tread",
      "On the fuel filler cap"
    ],
    answer: 1,
    why: "Use the vehicle maker’s figure, not the maximum stamped on the tire wall."
  },
  {
    id: 134,
    q: "A spongy or soft brake pedal usually indicates:",
    choices: [
      "Normal wear that can be ignored",
      "That the tires are over-inflated",
      "That the engine oil is low",
      "Air or a leak in the brake system, which must be repaired before driving"
    ],
    answer: 3,
    why: "A soft pedal means the brakes may fail; have the system checked at once."
  },
  {
    id: 135,
    q: "Engine oil should be checked:",
    choices: [
      "Only when the engine is running fast",
      "Only when the oil light comes on",
      "Once every two years",
      "Regularly, with the engine off and the vehicle on level ground"
    ],
    answer: 3,
    why: "Running low on oil destroys an engine; check it as part of routine care."
  },
  {
    id: 136,
    q: "Before a long trip, the most sensible practice is to:",
    choices: [
      "Have the vehicle washed",
      "Drive fast early to gain time",
      "Inspect tires, brakes, lights, fluids, and the spare tire beforehand",
      "Simply fill the fuel tank"
    ],
    answer: 2,
    why: "A pre-trip check prevents most roadside breakdowns."
  },
  {
    id: 137,
    q: "If your signal lights fail while you are driving, you should:",
    choices: [
      "Use the proper hand signals and have the lights repaired promptly",
      "Continue without signalling",
      "Use the hazard lights for every turn",
      "Sound the horn instead of signalling"
    ],
    answer: 0,
    why: "Hand signals are the lawful substitute when the lamps are inoperative."
  },
  {
    id: 138,
    q: "You should adjust your seat, mirrors, and head restraint:",
    choices: [
      "Only at the first stoplight",
      "Only if another person drove the vehicle",
      "Only for long journeys",
      "Before you start driving, never while the vehicle is moving"
    ],
    answer: 3,
    why: "Adjusting controls in motion takes your attention off the road."
  },
  {
    id: 139,
    q: "The recommended hand position on the steering wheel is:",
    choices: [
      "One hand resting on the gear lever",
      "Roughly the 9 and 3 o’clock positions, with both hands on the wheel",
      "One hand at 12 o’clock",
      "Both hands at the bottom of the wheel"
    ],
    answer: 1,
    why: "It gives the best control and keeps your arms clear of the airbag."
  },
  {
    id: 140,
    q: "Under RA 8749 (Clean Air Act), a vehicle emitting excessive smoke:",
    choices: [
      "Is exempt if it is more than ten years old",
      "Is only a concern in Metro Manila",
      "May be apprehended and must pass an emission test before re-registration",
      "Is fined only if it is a truck"
    ],
    answer: 2,
    why: "Smoke belching is an offence, and emission testing is required to register."
  },
  {
    id: 141,
    q: "Modifying your exhaust to make the vehicle much louder is:",
    choices: [
      "Allowed if the vehicle passes emission testing",
      "Allowed outside city limits",
      "A violation, since noise limits and muffler requirements apply",
      "Allowed for private vehicles"
    ],
    answer: 2,
    why: "Vehicles must be equipped with a muffler that keeps noise within limits."
  },
  {
    id: 142,
    q: "Carrying a load that projects beyond the body of your vehicle requires you to:",
    choices: [
      "Travel only at night",
      "Secure it properly and mark it with a red flag or light as a warning",
      "Drive slowly and nothing more",
      "Sound the horn frequently"
    ],
    answer: 1,
    why: "Unsecured or unmarked projecting loads endanger other road users."
  },
  {
    id: 143,
    q: "Overloading a vehicle beyond its rated capacity is dangerous because:",
    choices: [
      "It has no real effect below highway speeds",
      "It lengthens braking distance and makes the vehicle unstable",
      "It only increases fuel consumption",
      "It voids the radio warranty"
    ],
    answer: 1,
    why: "Brakes, tires, and suspension are all designed for a maximum rated load."
  },
  {
    id: 144,
    q: "If your vehicle skids on loose gravel, you should:",
    choices: [
      "Brake hard and hold it",
      "Accelerate to power through",
      "Turn the wheel sharply the other way",
      "Ease off the accelerator and steer gently in the direction you want to go"
    ],
    answer: 3,
    why: "Smooth inputs restore grip; abrupt ones make the slide worse."
  },
  {
    id: 145,
    q: "If you smell burning and see smoke from the engine compartment, you should:",
    choices: [
      "Pour water into the fuel tank",
      "Stop, switch off the engine, get everyone out, and keep clear of the vehicle",
      "Keep driving to the nearest shop",
      "Open the hood fully and fan the flames out"
    ],
    answer: 1,
    why: "A vehicle fire spreads fast; occupant safety comes before the vehicle."
  },
  {
    id: 146,
    q: "If your accelerator sticks open while driving, the first thing to do is:",
    choices: [
      "Pull the hand brake fully at once",
      "Steer into the opposite lane",
      "Shift to neutral, brake to a stop, then switch off the engine",
      "Switch off the engine immediately at speed"
    ],
    answer: 2,
    why: "Neutral cuts drive to the wheels while you keep steering and braking."
  },
  {
    id: 147,
    q: "If your headlights suddenly fail at night, you should:",
    choices: [
      "Switch on the hazard lights, slow down, and pull over safely",
      "Continue using the light of other vehicles",
      "Speed up to reach your destination",
      "Switch to high beam repeatedly"
    ],
    answer: 0,
    why: "Driving without lights at night is both unlawful and extremely dangerous."
  },
  {
    id: 148,
    q: "If your windshield wipers fail during heavy rain, the safest action is to:",
    choices: [
      "Pull over at a safe place and wait for the rain to ease",
      "Continue driving with your head out of the window",
      "Speed up so less rain lands on the glass",
      "Use the hazard lights and maintain speed"
    ],
    answer: 0,
    why: "You cannot drive safely without a clear view of the road."
  },
  {
    id: 149,
    q: "At the scene of an accident, an injured person should generally not be moved unless:",
    choices: [
      "The vehicle is blocking traffic",
      "They are in immediate danger, such as from fire or oncoming traffic",
      "They ask to sit up",
      "A crowd has gathered"
    ],
    answer: 1,
    why: "Moving someone with a spinal injury can cause permanent harm."
  },
  {
    id: 150,
    q: "The nationwide emergency hotline in the Philippines is:",
    choices: [
      "1-800",
      "117 only",
      "143",
      "911"
    ],
    answer: 3,
    why: "Dial 911 for police, fire, and medical emergencies."
  },
  {
    id: 151,
    q: "Leaving the scene of an accident you were involved in (hit and run):",
    choices: [
      "Carries no penalty if nobody saw you",
      "Is a serious criminal offence separate from the accident itself",
      "Is acceptable if the damage seems minor",
      "Is acceptable if you later report by phone"
    ],
    answer: 1,
    why: "The law requires you to stop, assist, and report."
  },
  {
    id: 152,
    q: "For an insurance claim after a collision, it is important to:",
    choices: [
      "Avoid informing the insurer to keep premiums low",
      "Document the scene, exchange details, and secure a police report",
      "Repair the vehicle first and claim afterwards",
      "Admit fault in writing at the scene"
    ],
    answer: 1,
    why: "Insurers require contemporaneous evidence and an official report."
  },
  {
    id: 153,
    q: "The purpose of compulsory third party liability (CTPL) insurance is to:",
    choices: [
      "Pay your traffic fines",
      "Cover theft of the vehicle",
      "Cover death or injury caused to third parties by your vehicle",
      "Repair your own vehicle after any accident"
    ],
    answer: 2,
    why: "CTPL is required for registration and protects other people, not your car."
  },
  {
    id: 154,
    q: "Another driver cuts you off in traffic. The correct response is to:",
    choices: [
      "Chase and overtake them to make a point",
      "Sound your horn continuously and flash your lights",
      "Block them so they cannot move",
      "Stay calm, keep your distance, and let it go"
    ],
    answer: 3,
    why: "Retaliation escalates risk for everyone; road rage causes crashes and assaults."
  },
  {
    id: 155,
    q: "When sharing the road with motorcycles, drivers should remember that motorcycles:",
    choices: [
      "Are required to stay behind cars",
      "Are small, easily hidden in blind spots, and must be checked for deliberately",
      "Are always visible in mirrors",
      "Can always stop faster than cars"
    ],
    answer: 1,
    why: "Most car-motorcycle collisions happen because the rider was never seen."
  },
  {
    id: 156,
    q: "When overtaking a bicycle, you should:",
    choices: [
      "Expect the cyclist to leave the road for you",
      "Slow down and leave a wide, safe gap before passing",
      "Pass as closely as possible to save time",
      "Sound the horn and pass immediately"
    ],
    answer: 1,
    why: "Cyclists wobble and swerve to avoid hazards; give them room."
  },
  {
    id: 157,
    q: "An elderly person is crossing slowly at a pedestrian lane as your light turns green. You should:",
    choices: [
      "Wait until they have finished crossing safely",
      "Edge forward to hurry them along",
      "Sound your horn once and proceed",
      "Pass behind them quickly"
    ],
    answer: 0,
    why: "A green light never overrides the duty to avoid endangering a pedestrian."
  },
  {
    id: 158,
    q: "Yielding the right of way when you legally have it is:",
    choices: [
      "Always wrong because it confuses others",
      "A traffic violation",
      "Only for professional drivers",
      "Sometimes the safest choice — right of way is given, never taken"
    ],
    answer: 3,
    why: "Insisting on right of way in the face of a hazard causes avoidable collisions."
  },
  {
    id: 159,
    q: "Driving while extremely angry or upset is a concern because:",
    choices: [
      "It only matters on expressways",
      "Strong emotion impairs judgement and slows reaction, much like fatigue",
      "It uses more fuel",
      "It is illegal in itself"
    ],
    answer: 1,
    why: "Calm down before driving; emotional distraction is a genuine crash factor."
  },
  {
    id: 160,
    q: "Using headphones or earphones in both ears while driving is unsafe because:",
    choices: [
      "It is uncomfortable on long trips",
      "You cannot hear horns, sirens, or warning sounds around you",
      "It drains the vehicle battery",
      "It interferes with the radio"
    ],
    answer: 1,
    why: "Hearing is part of hazard perception, especially for emergency vehicles."
  },
  {
    id: 161,
    q: "The safest assumption to make about other road users is that:",
    choices: [
      "They can see you at all times",
      "They will always give way to you",
      "They may make mistakes, so leave yourself room and time to react",
      "They will always follow the rules"
    ],
    answer: 2,
    why: "This is the core of defensive driving: plan for others’ errors."
  },
  {
    id: 162,
    q: "You should switch on your headlights:",
    choices: [
      "Only on unlit roads",
      "Only when other vehicles do",
      "At dusk, at night, and whenever visibility is poor such as in rain or fog",
      "Only in complete darkness"
    ],
    answer: 2,
    why: "Lights are as much about being seen by others as about seeing the road."
  },
  {
    id: 163,
    q: "When driving in fog, the correct practice is to:",
    choices: [
      "Follow the vehicle ahead closely to keep your bearings",
      "Stop in the middle of the lane",
      "Slow down, use low beams or fog lamps, and increase your following distance",
      "Use high beams for maximum light"
    ],
    answer: 2,
    why: "High beams reflect off fog and reduce your vision further."
  },
  {
    id: 164,
    q: "Oncoming headlights are dazzling you at night. You should:",
    choices: [
      "Close one eye until they pass",
      "Look toward the right edge of your lane and avoid staring at the lights",
      "Stare directly at the lights to adapt",
      "Switch on your own high beams in reply"
    ],
    answer: 1,
    why: "Using the edge line as a guide preserves what night vision you have."
  },
  {
    id: 165,
    q: "Driving at night generally requires lower speeds because:",
    choices: [
      "Traffic rules change after sunset",
      "You can only see as far as your headlights reach",
      "Roads are always wetter at night",
      "Engines lose power in the dark"
    ],
    answer: 1,
    why: "Never drive faster than the distance in which you can stop within your lights."
  },
  {
    id: 166,
    q: "When you must cross a flooded section of road, the safest approach is to:",
    choices: [
      "Rev the engine hard while crossing",
      "Avoid it if possible; if unavoidable, proceed slowly in low gear and test the brakes after",
      "Drive through quickly to avoid stalling",
      "Follow closely behind a larger vehicle"
    ],
    answer: 1,
    why: "Deep water stalls engines and hides hazards; wet brakes also need drying."
  },
  {
    id: 167,
    q: "Strong crosswinds on an exposed bridge call for:",
    choices: [
      "Higher speed to get across sooner",
      "Driving with one hand to feel the wind",
      "Closing all the windows and nothing else",
      "A firm grip on the wheel, reduced speed, and extra space around large vehicles"
    ],
    answer: 3,
    why: "Gusts can push a vehicle sideways, especially when leaving shelter."
  },
  {
    id: 168,
    q: "Driving into low sun glare, you should:",
    choices: [
      "Drive on the shoulder for shade",
      "Use the sun visor, keep the windshield clean, slow down, and increase your gap",
      "Speed up to get past it",
      "Wear no eye protection so your eyes adapt"
    ],
    answer: 1,
    why: "Glare can blind you to pedestrians and stopped traffic ahead."
  },
  {
    id: 169,
    q: "After driving through deep water, you should test your brakes because:",
    choices: [
      "The tires need re-inflating",
      "The engine needs to cool first",
      "Wet brakes may be much less effective until they dry out",
      "The brake fluid needs replacing"
    ],
    answer: 2,
    why: "Brake gently a few times at low speed to dry the friction surfaces."
  },
  {
    id: 170,
    q: "Braking distance at higher speed increases:",
    choices: [
      "Only for heavy vehicles",
      "Much faster than the speed itself — doubling speed roughly quadruples it",
      "In direct proportion to speed",
      "Not at all on dry roads"
    ],
    answer: 1,
    why: "This is why small speed increases produce large increases in crash severity."
  },
  {
    id: 171,
    q: "Total stopping distance is made up of:",
    choices: [
      "Braking distance alone",
      "Reaction distance alone",
      "The length of the vehicle plus braking distance",
      "Perception and reaction distance plus braking distance"
    ],
    answer: 3,
    why: "You travel a surprising distance before the brakes even begin to bite."
  },
  {
    id: 172,
    q: "On a wet road, your following distance should be:",
    choices: [
      "The same as on a dry road",
      "Reduced to stay in convoy",
      "Based only on the speed limit",
      "Increased well beyond the usual dry-road gap"
    ],
    answer: 3,
    why: "Wet surfaces lengthen braking distance considerably."
  },
  {
    id: 173,
    q: "Driving much slower than the flow of traffic without reason:",
    choices: [
      "Only matters on expressways",
      "Is hazardous and can itself be an obstruction violation",
      "Is always the safest choice",
      "Is required of new drivers"
    ],
    answer: 1,
    why: "Large speed differences cause frustration, risky overtaking, and rear-end crashes."
  },
  {
    id: 174,
    q: "The prescribed speed limit on a \"through street or boulevard\" free of traffic, for cars, is:",
    choices: [
      "20 kph",
      "40 kph",
      "60 kph",
      "80 kph"
    ],
    answer: 1,
    why: "The Land Transportation and Traffic Code sets 40 kph for such streets."
  },
  {
    id: 175,
    q: "When passing a school zone during class hours, you must:",
    choices: [
      "Use the shoulder to pass quickly",
      "Slow to the prescribed 20 kph and watch for children",
      "Maintain the normal city speed",
      "Sound your horn to warn children"
    ],
    answer: 1,
    why: "School zones carry the lowest prescribed limit for good reason."
  }
];
