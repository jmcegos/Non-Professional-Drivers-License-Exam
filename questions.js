/* Shared question bank for the Non-Professional Driver's License Exam.
   Loaded by both exam.html and answer-key.html via a plain <script> tag
   so it also works when opened directly from disk (file://).
   `answer` is the 0-based index of the correct choice. */

var EXAM_META = {
  title: "Non-Professional Driver's License Examination",
  subtitle: 'Written Examination — Road Signs, Traffic Rules & Regulations',
  durationMinutes: 60,
  passingScore: 45
};

var QUESTIONS = [
  {
    q: "What does a solid white line painted along the road mean?",
    art: "markingSolidWhite",
    choices: [
      "Overtaking is encouraged",
      "Lane changing is discouraged — stay in your lane",
      "Parking is allowed on the line",
      "The road ends ahead"
    ],
    answer: 1,
    why: "A solid white line separates lanes of traffic moving in the same direction and discourages lane changing."
  },
  {
    q: "An octagonal (eight-sided) traffic sign always means:",
    art: "signStop",
    choices: [
      "Railroad crossing",
      "Yield",
      "Stop",
      "No entry"
    ],
    answer: 2,
    why: "The octagon shape is reserved worldwide for the STOP sign."
  },
  {
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
    q: "A flashing YELLOW traffic light means:",
    art: "lightAmberFlash",
    choices: [
      "Slow down and proceed with caution",
      "Make a U-turn",
      "Back up and take another route",
      "Stop completely"
    ],
    answer: 0,
    why: "Flashing yellow warns of a hazard ahead; reduce speed and pass carefully."
  },
  {
    q: "At an intersection with no signs, signals, or traffic enforcer, who has the right of way?",
    choices: [
      "The faster vehicle",
      "The bigger or heavier vehicle",
      "The vehicle on the left",
      "The vehicle that arrives first; if arriving at the same time, the vehicle on the right"
    ],
    answer: 3,
    why: "\"First to arrive, first to go.\" When simultaneous, yield to the vehicle on your right."
  },
  {
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
    q: "A triangular sign with a red border generally indicates:",
    art: "signWarningTriangle",
    choices: [
      "A warning of danger ahead",
      "An informative or service sign",
      "A tourist destination",
      "A regulatory instruction"
    ],
    answer: 0,
    why: "Triangular signs with red borders are warning signs."
  },
  {
    q: "A round BLUE traffic sign generally indicates:",
    art: "signBlueMandatory",
    choices: [
      "A mandatory instruction that must be followed",
      "A warning of a hazard",
      "A hospital ahead",
      "A prohibition"
    ],
    answer: 0,
    why: "Blue circular signs give a positive, mandatory instruction (e.g. \"Turn left ahead\")."
  },
  {
    q: "An ambulance with siren and flashing lights is approaching from behind. You should:",
    choices: [
      "Follow closely behind it to get through traffic",
      "Continue driving normally",
      "Speed up so you do not delay it",
      "Pull over to the right, slow down or stop, and give way"
    ],
    answer: 3,
    why: "Emergency vehicles on duty always have the right of way. Clear the lane to the right and stop if necessary."
  },
  {
    q: "You may enter a yellow box junction only when:",
    art: "markingBoxJunction",
    choices: [
      "The traffic light is green",
      "Your exit beyond the box is clear",
      "A traffic enforcer is present",
      "At any time — the box has no meaning"
    ],
    answer: 1,
    why: "The yellow box must never be blocked. Enter only if you can clear it without stopping inside."
  },
  {
    q: "Double solid yellow lines in the middle of the road mean:",
    art: "markingDoubleYellow",
    choices: [
      "Overtaking is allowed from both directions",
      "Overtaking is prohibited from both directions",
      "The road is one-way",
      "The lane is reserved for bicycles"
    ],
    answer: 1,
    why: "Double solid yellow lines absolutely prohibit crossing or overtaking from either side."
  },
  {
    q: "Overtaking on the RIGHT side is allowed when:",
    choices: [
      "The vehicle ahead is making or signalling a left turn and the road to the right is clear and wide enough",
      "You are on a curve",
      "You are crossing a bridge",
      "Never — it is always illegal"
    ],
    answer: 0,
    why: "Passing on the right is permitted only in limited situations, such as when the vehicle ahead is turning left."
  },
  {
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
    q: "Under normal conditions, what is the recommended following distance behind the vehicle ahead?",
    choices: [
      "10 seconds",
      "1 second",
      "2 seconds",
      "At least 3 seconds"
    ],
    answer: 3,
    why: "The 3-second rule gives you time to perceive, react, and brake. Increase it in rain or at night."
  },
  {
    q: "Your vehicle begins to skid. The correct response is to:",
    choices: [
      "Switch off the engine",
      "Brake hard and hold the brake down",
      "Ease off the accelerator and steer smoothly in the direction you want to go",
      "Accelerate to regain traction"
    ],
    answer: 2,
    why: "Hard braking worsens a skid. Release the accelerator and steer gently into the intended path."
  },
  {
    q: "Which documents must you always carry while driving?",
    choices: [
      "Your birth certificate and NBI clearance",
      "A barangay clearance",
      "Only the insurance policy",
      "Your driver's license and the vehicle's Certificate of Registration and latest Official Receipt"
    ],
    answer: 3,
    why: "License plus CR/OR must be presented on demand to a law enforcement officer."
  },
  {
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
    q: "At a rotunda (roundabout), who has the right of way?",
    art: "signRoundabout",
    choices: [
      "The vehicle already travelling inside the rotunda",
      "The vehicle approaching from the left",
      "The larger vehicle",
      "The vehicle entering the rotunda"
    ],
    answer: 0,
    why: "Vehicles already circulating in the rotunda have priority; entering vehicles must yield."
  },
  {
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
    q: "Before changing lanes, you should:",
    choices: [
      "Sound your horn continuously",
      "Check your mirrors, signal, check your blind spot, then move over smoothly",
      "Move over as quickly as possible",
      "Brake sharply first"
    ],
    answer: 1,
    why: "Mirror – signal – blind spot – manoeuvre. Signalling alone does not give you the right of way."
  },
  {
    q: "A crossbuck (\"X\"-shaped) sign marked \"RR\" warns of:",
    art: "signCrossbuck",
    choices: [
      "A railroad crossing",
      "A rough road",
      "A river crossing",
      "A rest area"
    ],
    answer: 0,
    why: "The crossbuck marks a railroad grade crossing. Slow down, look, and listen before crossing."
  },
  {
    q: "Parking is PROHIBITED:",
    choices: [
      "Inside designated parking lots",
      "Anywhere along the curb",
      "Within 6 meters of an intersection, on a crosswalk, or in front of a private driveway",
      "On any public street at any time"
    ],
    answer: 2,
    why: "These are standard no-parking locations because they obstruct traffic, pedestrians, and access."
  },
  {
    q: "A broken (dashed) white line between lanes means:",
    art: "markingBrokenWhite",
    choices: [
      "The road is closed ahead",
      "The lane is reserved for buses",
      "Lane changing or overtaking is allowed when it is safe to do so",
      "Overtaking is strictly prohibited"
    ],
    answer: 2,
    why: "Broken lines may be crossed with care; solid lines may not."
  },
  {
    q: "A green traffic light with a lighted green arrow means:",
    art: "lightGreenArrow",
    choices: [
      "U-turns only",
      "Stop and wait for the next cycle",
      "You may proceed in the direction shown by the arrow",
      "Yield to all other traffic before moving"
    ],
    answer: 2,
    why: "A green arrow is a protected movement in the indicated direction."
  },
  {
    q: "A school bus stops ahead of you and displays flashing warning lights. You must:",
    choices: [
      "Sound your horn to warn the children",
      "Proceed at normal speed",
      "Overtake it quickly before the children get off",
      "Stop and wait until the children have finished crossing and the bus moves on"
    ],
    answer: 3,
    why: "Children may cross unpredictably. Stop until it is clearly safe to proceed."
  },
  {
    q: "Two vehicles meet on a steep, narrow mountain road where only one can pass. Who has the right of way?",
    choices: [
      "The vehicle going down the slope",
      "The vehicle going up the slope",
      "The bigger vehicle",
      "The vehicle travelling faster"
    ],
    answer: 1,
    why: "The ascending vehicle has the right of way; the descending vehicle can stop and reverse more safely."
  },
  {
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
    q: "A solid yellow line paired with a broken yellow line beside it means:",
    art: "markingYellowSolidBroken",
    choices: [
      "Two-way traffic ends ahead",
      "Neither direction may overtake",
      "Only traffic on the side with the broken line may overtake",
      "Both directions may overtake freely"
    ],
    answer: 2,
    why: "You may cross only when the line nearest to you is broken."
  },
  {
    q: "Which hand signal indicates a RIGHT turn?",
    art: "handRightTurn",
    choices: [
      "Both arms extended outward",
      "Left arm extended straight out to the side",
      "Left arm bent upward at the elbow",
      "Left arm extended and pointing downward"
    ],
    answer: 2,
    why: "Left arm straight out = left turn; left arm bent up = right turn; left arm pointing down = slowing or stopping."
  },
  {
    q: "Which hand signal indicates that you are slowing down or stopping?",
    art: "handSlowStop",
    choices: [
      "Waving the arm back and forth",
      "Left arm extended and bent downward",
      "Left arm extended straight out",
      "Left arm bent upward at the elbow"
    ],
    answer: 1,
    why: "The downward-bent arm is the recognised signal for slowing or stopping."
  },
  {
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
    q: "You are involved in a road accident in which a person is injured. You must first:",
    choices: [
      "Argue with the other driver about who is at fault",
      "Move both vehicles away before anything else",
      "Leave the scene to avoid trouble",
      "Stop, assist the injured, and report the accident to the nearest authorities"
    ],
    answer: 3,
    why: "Failure to lend assistance and to report the accident is a separate offense."
  },
  {
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
    q: "A steady AMBER (yellow) traffic light means:",
    art: "lightAmberSteady",
    choices: [
      "Stop only if a traffic enforcer is watching",
      "Prepare to stop — do not enter the intersection if you can stop safely",
      "Speed up to beat the red light",
      "Proceed as if the light were green"
    ],
    answer: 1,
    why: "Amber warns that red is next. Enter the intersection only if stopping would be unsafe."
  },
  {
    q: "When is it proper to use your horn?",
    choices: [
      "To greet friends along the road",
      "To hurry along the vehicle in front of you",
      "To warn other road users of your presence in order to avoid an accident",
      "To express annoyance at slow drivers"
    ],
    answer: 2,
    why: "The horn is a safety device, not a means of expressing irritation. Needless blowing is a violation."
  },
  {
    q: "A road area painted with white diagonal stripes or chevrons (hatched markings) means:",
    art: "markingHatched",
    choices: [
      "It is a designated overtaking lane",
      "Keep out of this area — it separates traffic streams",
      "It is an extra parking bay",
      "It is a loading and unloading zone"
    ],
    answer: 1,
    why: "Hatched markings channel traffic and must not be driven on or parked in."
  },
  {
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
    q: "When preparing to turn LEFT at an intersection, you should position your vehicle:",
    choices: [
      "In the outermost right lane",
      "In the middle of two lanes",
      "On the shoulder of the road",
      "In the lane nearest to the center line of the road"
    ],
    answer: 3,
    why: "Turning from the correct lane prevents cutting across other vehicles."
  },
  {
    q: "Defensive driving is best described as:",
    choices: [
      "Driving only in the leftmost lane to stay clear of traffic",
      "Depending on other drivers to avoid you",
      "Driving to save lives, time, and money in spite of the conditions around you and the actions of others",
      "Driving as fast as the traffic flow allows"
    ],
    answer: 2,
    why: "Defensive driving means anticipating hazards and other drivers’ mistakes rather than reacting to them."
  },
  {
    q: "Your brakes fail while driving. You should:",
    choices: [
      "Steer into the opposite lane to slow down",
      "Pump the brake pedal, shift to a lower gear, apply the hand brake gradually, and steer to a safe area",
      "Switch off the engine immediately and let go of the wheel",
      "Pull the hand brake all the way up at once"
    ],
    answer: 1,
    why: "Engine braking plus a gradual hand brake slows the vehicle without locking the wheels or losing steering."
  },
  {
    q: "What is the safest way to negotiate a sharp curve?",
    choices: [
      "Shift to neutral and coast around it",
      "Slow down before entering the curve, then accelerate gently as you exit",
      "Brake hard while in the middle of the curve",
      "Maintain full speed all the way through"
    ],
    answer: 1,
    why: "Braking inside a curve upsets balance and can cause a skid. Reduce speed before you enter."
  },
  {
    q: "Your engine overheats and steam comes from the hood. You should:",
    choices: [
      "Pull over safely, switch off the engine, and let it cool before opening the radiator cap",
      "Open the radiator cap right away to release the pressure",
      "Pour cold water on the engine block immediately",
      "Keep driving to the nearest shop with the heater on"
    ],
    answer: 0,
    why: "Opening a hot radiator releases scalding steam under pressure. Let the engine cool first."
  },
  {
    q: "When driving in heavy rain with poor visibility, you should:",
    choices: [
      "Follow closely behind a large truck to use it as a guide",
      "Slow down, switch on your headlights, increase your following distance, and pull over safely if visibility is lost",
      "Turn on your hazard lights and keep your normal speed",
      "Use high beams to see farther through the rain"
    ],
    answer: 1,
    why: "Wet roads lengthen braking distance. Hazard lights while moving hide your signals from other drivers."
  },
  {
    q: "A \"blind spot\" refers to:",
    choices: [
      "The area around your vehicle that you cannot see in your mirrors",
      "A poorly lighted stretch of road at night",
      "A curve where the road ahead is hidden",
      "A spot on the windshield blocked by the wiper"
    ],
    answer: 0,
    why: "Always turn your head to check blind spots before changing lanes or turning."
  },
  {
    q: "You begin to feel drowsy while driving on a long trip. The correct action is to:",
    choices: [
      "Turn the radio up loud and keep going",
      "Pull over at a safe place and rest before continuing",
      "Open the window and drive faster to reach your destination sooner",
      "Drink coffee and continue driving through the night"
    ],
    answer: 1,
    why: "Only rest cures fatigue. A drowsy driver is as dangerous as an intoxicated one."
  },
  {
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
    q: "Under RA 10054 (Motorcycle Helmet Act), a motorcycle rider and back rider must:",
    choices: [
      "Wear a helmet only when riding at night",
      "Wear any cap or head covering of their choice",
      "Wear a standard protective helmet bearing the PS or ICC mark at all times while riding",
      "Wear a helmet only when travelling on national highways"
    ],
    answer: 2,
    why: "Both the driver and the back rider must wear an LTO-approved standard helmet on any public road."
  },
  {
    q: "Under RA 11229 (Child Safety in Motor Vehicles Act), a child aged 12 and below who is shorter than 150 cm must:",
    choices: [
      "Sit in the front seat wearing the adult seat belt",
      "Stand between the front seats where an adult can hold them",
      "Be properly secured in an age- and size-appropriate child restraint system",
      "Sit on the lap of an adult passenger in front"
    ],
    answer: 2,
    why: "Children below the height threshold must use a child restraint and may not ride in the front seat."
  },
  {
    q: "Your vehicle breaks down and is stalled on the road. You must:",
    choices: [
      "Simply switch on the hazard lights and leave it unattended",
      "Push the vehicle into the next lane so traffic can pass on the shoulder",
      "Set up an early warning device at the required distance behind and in front of the vehicle",
      "Leave the vehicle where it is and go for help immediately"
    ],
    answer: 2,
    why: "Carrying and deploying an early warning device is required so approaching drivers are alerted in time."
  },
  {
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
    q: "You see a \"Merging Traffic\" warning sign ahead. You should:",
    art: "signMerge",
    choices: [
      "Adjust your speed and position to allow merging vehicles to blend safely into the traffic flow",
      "Speed up so you pass the merge point first",
      "Stop at the merge point and wait for all vehicles to pass",
      "Move onto the shoulder to avoid the merging lane"
    ],
    answer: 0,
    why: "Merging works by cooperation — adjust speed and leave a gap rather than racing to the merge point."
  }
];
