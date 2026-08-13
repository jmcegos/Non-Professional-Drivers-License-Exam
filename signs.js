/* Illustrations for the exam questions — hand-authored inline SVG.

   Everything here is self-contained: no external image files, no network
   requests, so the exam still works from a USB stick or an offline PC.
   A question opts in by setting `art: '<key>'` in questions.js.

   These strings are inserted with innerHTML, so they are trusted markup by
   design. Only add SVG you have written yourself — never user input. */

var SIGN_ART = {

  /* ---------------------------------------------------------------- signs -- */

  signStop:
    '<svg viewBox="0 0 200 200" role="img" aria-label="Red octagonal STOP sign">' +
      '<polygon points="59,4 141,4 196,59 196,141 141,196 59,196 4,141 4,59" fill="#c1121f" stroke="#fff" stroke-width="8"/>' +
      '<polygon points="59,4 141,4 196,59 196,141 141,196 59,196 4,141 4,59" fill="none" stroke="#8a0c16" stroke-width="2"/>' +
      '<text x="100" y="118" font-family="Arial Black, Arial, sans-serif" font-size="46" font-weight="900" fill="#fff" text-anchor="middle" letter-spacing="2">STOP</text>' +
    '</svg>',

  signWarningTriangle:
    '<svg viewBox="0 0 200 180" role="img" aria-label="Triangular sign with a red border and an exclamation mark">' +
      '<polygon points="100,10 192,168 8,168" fill="#fff" stroke="#c1121f" stroke-width="14" stroke-linejoin="round"/>' +
      '<rect x="92" y="62" width="16" height="56" rx="8" fill="#1a1a1a"/>' +
      '<circle cx="100" cy="140" r="10" fill="#1a1a1a"/>' +
    '</svg>',

  signBlueMandatory:
    '<svg viewBox="0 0 200 200" role="img" aria-label="Round blue sign with a white arrow curving to the right">' +
      '<circle cx="100" cy="100" r="92" fill="#12508f" stroke="#fff" stroke-width="10"/>' +
      '<path d="M100 158 L100 96 Q100 68 128 68 L146 68" fill="none" stroke="#fff" stroke-width="18" stroke-linecap="round"/>' +
      '<polygon points="138,44 176,68 138,92" fill="#fff"/>' +
    '</svg>',

  signProhibitory:
    '<svg viewBox="0 0 200 200" role="img" aria-label="Red circle with a diagonal slash across a car symbol">' +
      '<circle cx="100" cy="100" r="90" fill="#fff" stroke="#c1121f" stroke-width="18"/>' +
      '<g fill="#2a2a2a">' +
        '<path d="M46 116 L54 92 Q57 84 66 84 L134 84 Q143 84 146 92 L154 116 Z"/>' +
        '<rect x="44" y="114" width="112" height="20" rx="6"/>' +
        '<circle cx="68" cy="140" r="11"/><circle cx="132" cy="140" r="11"/>' +
      '</g>' +
      '<line x1="36" y1="164" x2="164" y2="36" stroke="#c1121f" stroke-width="18" stroke-linecap="round"/>' +
    '</svg>',

  signNoHorn:
    '<svg viewBox="0 0 200 200" role="img" aria-label="No blowing of horn sign">' +
      '<circle cx="100" cy="100" r="90" fill="#fff" stroke="#c1121f" stroke-width="18"/>' +
      '<g fill="#2a2a2a">' +
        '<path d="M62 84 L96 84 L128 58 L128 142 L96 116 L62 116 Z"/>' +
        '<path d="M144 74 Q160 100 144 126" fill="none" stroke="#2a2a2a" stroke-width="9" stroke-linecap="round"/>' +
      '</g>' +
      '<line x1="36" y1="164" x2="164" y2="36" stroke="#c1121f" stroke-width="18" stroke-linecap="round"/>' +
    '</svg>',

  /* Steep bars (60 degrees) so the left and right quadrants stay clear for the
     R R lettering — a shallower X would run straight through the letters. */
  signCrossbuck:
    '<svg viewBox="0 0 220 215" role="img" aria-label="Railroad crossing crossbuck sign marked R R">' +
      '<g stroke="#1a1a1a" stroke-width="3">' +
        '<rect x="20" y="80" width="180" height="30" rx="6" fill="#fff" transform="rotate(-60 110 95)"/>' +
        '<rect x="20" y="80" width="180" height="30" rx="6" fill="#fff" transform="rotate(60 110 95)"/>' +
      '</g>' +
      '<text x="28" y="106" font-family="Arial Black, Arial, sans-serif" font-size="30" font-weight="900" fill="#1a1a1a" text-anchor="middle">R</text>' +
      '<text x="192" y="106" font-family="Arial Black, Arial, sans-serif" font-size="30" font-weight="900" fill="#1a1a1a" text-anchor="middle">R</text>' +
      '<rect x="104" y="176" width="12" height="38" fill="#6b7280"/>' +
    '</svg>',

  /* Three 90-degree arcs with 30-degree gaps, each capped by an arrowhead on the
     tangent. Arc endpoints and triangles are computed, not eyeballed. */
  signRoundabout:
    '<svg viewBox="0 0 200 200" role="img" aria-label="Blue roundabout sign with three curved arrows">' +
      '<circle cx="100" cy="100" r="92" fill="#12508f" stroke="#fff" stroke-width="10"/>' +
      '<g fill="none" stroke="#fff" stroke-width="13" stroke-linecap="butt">' +
        '<path d="M49.3 81.5 A54 54 0 0 1 118.5 49.3"/>' +
        '<path d="M141.4 65.3 A54 54 0 0 1 134.7 141.4"/>' +
        '<path d="M109.4 153.2 A54 54 0 0 1 46.8 109.4"/>' +
      '</g>' +
      '<g fill="#fff">' +
        '<polygon points="142.9,58.1 113.3,63.4 123.6,35.2"/>' +
        '<polygon points="114.8,158.1 125.1,129.9 144.4,152.9"/>' +
        '<polygon points="42.3,83.8 61.6,106.8 32,112"/>' +
      '</g>' +
    '</svg>',

  signMerge:
    '<svg viewBox="0 0 200 200" role="img" aria-label="Diamond-shaped merging traffic warning sign">' +
      '<polygon points="100,8 192,100 100,192 8,100" fill="#f4b703" stroke="#1a1a1a" stroke-width="7"/>' +
      '<g fill="none" stroke="#1a1a1a" stroke-width="12" stroke-linecap="round">' +
        '<path d="M78 168 L78 96 Q78 74 100 62"/>' +
        '<path d="M132 168 L132 120 Q132 98 110 84"/>' +
      '</g>' +
      '<polygon points="88,66 104,34 118,68" fill="#1a1a1a"/>' +
    '</svg>',

  /* ------------------------------------------------------- traffic lights -- */

  lightRedFlash:
    '<svg viewBox="0 0 130 260" role="img" aria-label="Traffic signal with the red lamp flashing">' +
      '<rect x="24" y="10" width="82" height="220" rx="14" fill="#2b3340" stroke="#151b24" stroke-width="4"/>' +
      '<circle cx="65" cy="62" r="26" fill="#e01b24"/>' +
      '<circle cx="65" cy="62" r="34" fill="none" stroke="#e01b24" stroke-width="4" opacity=".55"/>' +
      '<circle cx="65" cy="62" r="43" fill="none" stroke="#e01b24" stroke-width="3" opacity=".28"/>' +
      '<circle cx="65" cy="130" r="26" fill="#4a5260"/>' +
      '<circle cx="65" cy="198" r="26" fill="#4a5260"/>' +
      '<rect x="58" y="230" width="14" height="26" fill="#6b7280"/>' +
    '</svg>',

  lightAmberFlash:
    '<svg viewBox="0 0 130 260" role="img" aria-label="Traffic signal with the amber lamp flashing">' +
      '<rect x="24" y="10" width="82" height="220" rx="14" fill="#2b3340" stroke="#151b24" stroke-width="4"/>' +
      '<circle cx="65" cy="62" r="26" fill="#4a5260"/>' +
      '<circle cx="65" cy="130" r="26" fill="#f5a301"/>' +
      '<circle cx="65" cy="130" r="34" fill="none" stroke="#f5a301" stroke-width="4" opacity=".55"/>' +
      '<circle cx="65" cy="130" r="43" fill="none" stroke="#f5a301" stroke-width="3" opacity=".28"/>' +
      '<circle cx="65" cy="198" r="26" fill="#4a5260"/>' +
      '<rect x="58" y="230" width="14" height="26" fill="#6b7280"/>' +
    '</svg>',

  lightAmberSteady:
    '<svg viewBox="0 0 130 260" role="img" aria-label="Traffic signal showing a steady amber lamp">' +
      '<rect x="24" y="10" width="82" height="220" rx="14" fill="#2b3340" stroke="#151b24" stroke-width="4"/>' +
      '<circle cx="65" cy="62" r="26" fill="#4a5260"/>' +
      '<circle cx="65" cy="130" r="26" fill="#f5a301"/>' +
      '<circle cx="65" cy="198" r="26" fill="#4a5260"/>' +
      '<rect x="58" y="230" width="14" height="26" fill="#6b7280"/>' +
    '</svg>',

  lightGreenArrow:
    '<svg viewBox="0 0 130 260" role="img" aria-label="Traffic signal showing a green arrow pointing right">' +
      '<rect x="24" y="10" width="82" height="220" rx="14" fill="#2b3340" stroke="#151b24" stroke-width="4"/>' +
      '<circle cx="65" cy="62" r="26" fill="#4a5260"/>' +
      '<circle cx="65" cy="130" r="26" fill="#4a5260"/>' +
      '<circle cx="65" cy="198" r="26" fill="#1c8a4a"/>' +
      '<g fill="#eafff2">' +
        '<rect x="48" y="192" width="22" height="11" rx="2"/>' +
        '<polygon points="66,186 84,198 66,210"/>' +
      '</g>' +
      '<rect x="58" y="230" width="14" height="26" fill="#6b7280"/>' +
    '</svg>',

  /* ------------------------------------------------- pavement markings ----- */
  /* Bird's-eye view of a road: dark asphalt with painted lines. */

  markingSolidWhite:
    '<svg viewBox="0 0 320 170" role="img" aria-label="Road with a single solid white line between two lanes">' +
      '<rect width="320" height="170" fill="#4b5158"/>' +
      '<rect x="0" y="16" width="320" height="6" fill="#e9edf2"/>' +
      '<rect x="0" y="148" width="320" height="6" fill="#e9edf2"/>' +
      '<rect x="0" y="82" width="320" height="7" fill="#fff"/>' +
      '<g fill="#cfd6de" font-family="Arial, sans-serif" font-size="13">' +
        '<text x="12" y="58">same direction</text>' +
        '<text x="12" y="128">same direction</text>' +
      '</g>' +
    '</svg>',

  markingBrokenWhite:
    '<svg viewBox="0 0 320 170" role="img" aria-label="Road with a broken white line between two lanes">' +
      '<rect width="320" height="170" fill="#4b5158"/>' +
      '<rect x="0" y="16" width="320" height="6" fill="#e9edf2"/>' +
      '<rect x="0" y="148" width="320" height="6" fill="#e9edf2"/>' +
      '<g fill="#fff">' +
        '<rect x="10" y="82" width="42" height="7"/><rect x="76" y="82" width="42" height="7"/>' +
        '<rect x="142" y="82" width="42" height="7"/><rect x="208" y="82" width="42" height="7"/>' +
        '<rect x="274" y="82" width="42" height="7"/>' +
      '</g>' +
    '</svg>',

  markingDoubleYellow:
    '<svg viewBox="0 0 320 170" role="img" aria-label="Road with double solid yellow center lines">' +
      '<rect width="320" height="170" fill="#4b5158"/>' +
      '<rect x="0" y="16" width="320" height="6" fill="#e9edf2"/>' +
      '<rect x="0" y="148" width="320" height="6" fill="#e9edf2"/>' +
      '<rect x="0" y="76" width="320" height="7" fill="#f5c518"/>' +
      '<rect x="0" y="90" width="320" height="7" fill="#f5c518"/>' +
      '<g fill="#cfd6de" font-family="Arial, sans-serif" font-size="13">' +
        '<text x="12" y="56">&#8594; opposing traffic</text>' +
        '<text x="12" y="130">&#8592; opposing traffic</text>' +
      '</g>' +
    '</svg>',

  markingYellowSolidBroken:
    '<svg viewBox="0 0 320 170" role="img" aria-label="Road with one solid yellow line beside one broken yellow line">' +
      '<rect width="320" height="170" fill="#4b5158"/>' +
      '<rect x="0" y="16" width="320" height="6" fill="#e9edf2"/>' +
      '<rect x="0" y="148" width="320" height="6" fill="#e9edf2"/>' +
      '<rect x="0" y="76" width="320" height="7" fill="#f5c518"/>' +
      '<g fill="#f5c518">' +
        '<rect x="10" y="90" width="40" height="7"/><rect x="74" y="90" width="40" height="7"/>' +
        '<rect x="138" y="90" width="40" height="7"/><rect x="202" y="90" width="40" height="7"/>' +
        '<rect x="266" y="90" width="40" height="7"/>' +
      '</g>' +
      '<g fill="#cfd6de" font-family="Arial, sans-serif" font-size="13">' +
        '<text x="12" y="56">solid line on this side</text>' +
        '<text x="12" y="130">broken line on this side</text>' +
      '</g>' +
    '</svg>',

  markingStopLine:
    '<svg viewBox="0 0 320 190" role="img" aria-label="Pavement painted with the word STOP behind a solid transverse stop line">' +
      '<rect width="320" height="190" fill="#4b5158"/>' +
      '<rect x="0" y="10" width="320" height="6" fill="#e9edf2"/>' +
      '<rect x="0" y="174" width="320" height="6" fill="#e9edf2"/>' +
      '<rect x="196" y="16" width="14" height="158" fill="#fff"/>' +
      '<text x="120" y="112" font-family="Arial Black, Arial, sans-serif" font-size="52" font-weight="900" fill="#fff" text-anchor="middle" letter-spacing="4">STOP</text>' +
      '<text x="250" y="106" font-family="Arial, sans-serif" font-size="13" fill="#cfd6de" text-anchor="middle">stop line</text>' +
    '</svg>',

  markingZebra:
    '<svg viewBox="0 0 320 190" role="img" aria-label="Pedestrian lane marked with white zebra stripes across the road">' +
      '<rect width="320" height="190" fill="#4b5158"/>' +
      '<g fill="#fff">' +
        '<rect x="90" y="18" width="26" height="154"/><rect x="128" y="18" width="26" height="154"/>' +
        '<rect x="166" y="18" width="26" height="154"/><rect x="204" y="18" width="26" height="154"/>' +
      '</g>' +
      /* Figure sits on a white stripe, not in the gap, so it stays legible. */
      '<g fill="#1f242b">' +
        '<circle cx="179" cy="62" r="11"/>' +
        '<rect x="172" y="74" width="14" height="30" rx="6"/>' +
        '<rect x="171" y="102" width="6" height="26" rx="3"/>' +
        '<rect x="181" y="102" width="6" height="26" rx="3"/>' +
      '</g>' +
    '</svg>',

  markingBoxJunction:
    '<svg viewBox="0 0 300 200" role="img" aria-label="Intersection with a yellow cross-hatched box junction painted on it">' +
      '<rect width="300" height="200" fill="#4b5158"/>' +
      '<rect x="70" y="40" width="160" height="120" fill="none" stroke="#f5c518" stroke-width="6"/>' +
      '<g stroke="#f5c518" stroke-width="4" opacity=".95">' +
        '<line x1="70" y1="40" x2="230" y2="160"/><line x1="230" y1="40" x2="70" y2="160"/>' +
        '<line x1="70" y1="100" x2="150" y2="40"/><line x1="150" y1="160" x2="230" y2="100"/>' +
        '<line x1="70" y1="100" x2="150" y2="160"/><line x1="150" y1="40" x2="230" y2="100"/>' +
      '</g>' +
      '<text x="150" y="186" font-family="Arial, sans-serif" font-size="13" fill="#cfd6de" text-anchor="middle">keep clear unless your exit is clear</text>' +
    '</svg>',

  markingHatched:
    '<svg viewBox="0 0 320 170" role="img" aria-label="Road with a white diagonally striped hatched area separating traffic">' +
      '<rect width="320" height="170" fill="#4b5158"/>' +
      '<rect x="0" y="14" width="320" height="6" fill="#e9edf2"/>' +
      '<rect x="0" y="150" width="320" height="6" fill="#e9edf2"/>' +
      '<rect x="40" y="58" width="240" height="54" fill="none" stroke="#fff" stroke-width="5"/>' +
      '<g stroke="#fff" stroke-width="5">' +
        '<line x1="52" y1="112" x2="106" y2="58"/><line x1="92" y1="112" x2="146" y2="58"/>' +
        '<line x1="132" y1="112" x2="186" y2="58"/><line x1="172" y1="112" x2="226" y2="58"/>' +
        '<line x1="212" y1="112" x2="266" y2="58"/>' +
      '</g>' +
    '</svg>',

  /* ---------------------------------------------------------- hand signals -- */

  /* Driver's door seen from outside. The arm leaves the window at window height
     and the forearm is drawn on top of the door, which is where it really is. */
  handRightTurn:
    '<svg viewBox="0 0 240 220" role="img" aria-label="Driver signalling a right turn: left arm out of the window with the forearm bent upward">' +
      '<rect x="14" y="84" width="212" height="100" rx="12" fill="#12508f"/>' +
      '<rect x="32" y="94" width="78" height="52" rx="7" fill="#8fbde8"/>' +
      '<circle cx="70" cy="184" r="16" fill="#22282f"/><circle cx="186" cy="184" r="16" fill="#22282f"/>' +
      '<g stroke="#e8b98f" stroke-width="18" stroke-linecap="round" fill="none">' +
        '<path d="M108 122 L164 122"/>' +
        '<path d="M164 122 L164 44"/>' +
      '</g>' +
      '<circle cx="164" cy="34" r="14" fill="#e8b98f"/>' +
      '<text x="205" y="40" font-family="Arial, sans-serif" font-size="15" font-weight="700" fill="#1c8a4a" text-anchor="middle">up</text>' +
    '</svg>',

  handSlowStop:
    '<svg viewBox="0 0 240 220" role="img" aria-label="Driver signalling a stop: left arm out of the window with the forearm bent downward">' +
      '<rect x="14" y="30" width="212" height="100" rx="12" fill="#12508f"/>' +
      '<rect x="32" y="40" width="78" height="52" rx="7" fill="#8fbde8"/>' +
      '<circle cx="70" cy="130" r="16" fill="#22282f"/><circle cx="186" cy="130" r="16" fill="#22282f"/>' +
      '<g stroke="#e8b98f" stroke-width="18" stroke-linecap="round" fill="none">' +
        '<path d="M108 68 L164 68"/>' +
        '<path d="M164 68 L164 168"/>' +
      '</g>' +
      '<circle cx="164" cy="178" r="14" fill="#e8b98f"/>' +
      '<text x="205" y="184" font-family="Arial, sans-serif" font-size="15" font-weight="700" fill="#c62b2b" text-anchor="middle">down</text>' +
    '</svg>'
};
