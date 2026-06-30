export function GalaxyBackground() {
  return (
    <svg
      className="fixed inset-0 -z-10 w-full h-full pointer-events-none"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        {/* Ambient depth glows */}
        <radialGradient id="cg-glow-a" cx="25%" cy="18%" r="45%">
          <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="cg-glow-b" cx="78%" cy="62%" r="38%">
          <stop offset="0%" stopColor="#1d4ed8" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="cg-glow-c" cx="55%" cy="90%" r="30%">
          <stop offset="0%" stopColor="#0369a1" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
        </radialGradient>
        {/* Soft halo on bright stars */}
        <filter id="cg-halo" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Base */}
      <rect width="1440" height="900" fill="#0f172a" />
      <rect width="1440" height="900" fill="url(#cg-glow-a)" />
      <rect width="1440" height="900" fill="url(#cg-glow-b)" />
      <rect width="1440" height="900" fill="url(#cg-glow-c)" />

      {/* ── Constellation lines ───────────────────────────────────────────── */}
      <g stroke="#93C5FD" strokeOpacity="0.13" strokeWidth="0.85" fill="none" strokeLinecap="round">
        {/* Big Dipper — top left */}
        <polyline points="145,192 196,172 248,184 288,212 342,160 392,138 442,108" />

        {/* Cassiopeia — top right */}
        <polyline points="1022,88 1082,52 1144,92 1198,56 1262,82" />

        {/* Orion — center */}
        <line x1="560" y1="308" x2="682" y2="298" />
        <line x1="560" y1="308" x2="572" y2="410" />
        <line x1="682" y1="298" x2="670" y2="408" />
        <polyline points="572,410 618,400 670,408" />
        <line x1="572" y1="410" x2="542" y2="538" />
        <line x1="670" y1="408" x2="702" y2="532" />
        <line x1="560" y1="308" x2="618" y2="228" />

        {/* Summer Triangle — top center */}
        <polyline points="780,118 922,84 872,202 780,118" />

        {/* Scorpius tail — right */}
        <polyline points="1158,398 1138,458 1118,522 1148,582 1198,612 1248,626 1290,598 1322,626 1352,658" />

        {/* Corvus box — bottom right */}
        <polyline points="1052,618 1114,588 1144,652 1082,682 1052,618" />

        {/* Southern Cross — bottom left */}
        <line x1="234" y1="634" x2="234" y2="758" />
        <line x1="168" y1="696" x2="308" y2="696" />

        {/* Boötes loop — bottom center */}
        <polyline points="700,678 660,730 718,792 782,762 792,698 742,648 700,678" />

        {/* Lyra rhombus — mid right */}
        <polyline points="1058,278 1028,332 1088,362 1058,278" />
        <line x1="1028" y1="332" x2="1042" y2="392" />
        <line x1="1088" y1="362" x2="1042" y2="392" />
      </g>

      {/* ── Constellation vertex stars (bright, with halo) ────────────────── */}
      <g filter="url(#cg-halo)">
        {/* Big Dipper */}
        <circle cx="145" cy="192" r="2.4" fill="white" fillOpacity="0.95" />
        <circle cx="196" cy="172" r="2.0" fill="#93C5FD" fillOpacity="0.9" />
        <circle cx="248" cy="184" r="1.9" fill="white" fillOpacity="0.88" />
        <circle cx="288" cy="212" r="2.2" fill="white" fillOpacity="0.92" />
        <circle cx="342" cy="160" r="2.1" fill="#BFDBFE" fillOpacity="0.9" />
        <circle cx="392" cy="138" r="1.8" fill="white" fillOpacity="0.85" />
        <circle cx="442" cy="108" r="2.3" fill="white" fillOpacity="0.93" />

        {/* Cassiopeia */}
        <circle cx="1022" cy="88" r="2.2" fill="white" fillOpacity="0.92" />
        <circle cx="1082" cy="52" r="2.6" fill="#BFDBFE" fillOpacity="0.96" />
        <circle cx="1144" cy="92" r="2.0" fill="white" fillOpacity="0.88" />
        <circle cx="1198" cy="56" r="2.3" fill="white" fillOpacity="0.93" />
        <circle cx="1262" cy="82" r="2.1" fill="#93C5FD" fillOpacity="0.9" />

        {/* Orion */}
        <circle cx="560" cy="308" r="2.6" fill="#BFDBFE" fillOpacity="0.96" />
        <circle cx="682" cy="298" r="2.8" fill="white" fillOpacity="0.97" />
        <circle cx="572" cy="410" r="1.7" fill="white" fillOpacity="0.82" />
        <circle cx="618" cy="400" r="1.6" fill="white" fillOpacity="0.80" />
        <circle cx="670" cy="408" r="1.7" fill="white" fillOpacity="0.82" />
        <circle cx="542" cy="538" r="2.5" fill="#93C5FD" fillOpacity="0.94" />
        <circle cx="702" cy="532" r="2.7" fill="white" fillOpacity="0.96" />
        <circle cx="618" cy="228" r="2.0" fill="#BFDBFE" fillOpacity="0.88" />

        {/* Summer Triangle */}
        <circle cx="780" cy="118" r="2.8" fill="white" fillOpacity="0.97" />
        <circle cx="922" cy="84" r="2.4" fill="#93C5FD" fillOpacity="0.93" />
        <circle cx="872" cy="202" r="2.1" fill="white" fillOpacity="0.90" />

        {/* Scorpius tail */}
        <circle cx="1158" cy="398" r="2.3" fill="white" fillOpacity="0.93" />
        <circle cx="1138" cy="458" r="1.7" fill="white" fillOpacity="0.80" />
        <circle cx="1118" cy="522" r="1.8" fill="white" fillOpacity="0.83" />
        <circle cx="1148" cy="582" r="2.0" fill="#93C5FD" fillOpacity="0.88" />
        <circle cx="1198" cy="612" r="2.2" fill="white" fillOpacity="0.92" />
        <circle cx="1248" cy="626" r="2.5" fill="white" fillOpacity="0.94" />
        <circle cx="1290" cy="598" r="1.7" fill="white" fillOpacity="0.80" />
        <circle cx="1322" cy="626" r="1.8" fill="#BFDBFE" fillOpacity="0.84" />
        <circle cx="1352" cy="658" r="2.1" fill="white" fillOpacity="0.90" />

        {/* Corvus */}
        <circle cx="1052" cy="618" r="1.9" fill="white" fillOpacity="0.87" />
        <circle cx="1114" cy="588" r="2.0" fill="#93C5FD" fillOpacity="0.88" />
        <circle cx="1144" cy="652" r="1.8" fill="white" fillOpacity="0.84" />
        <circle cx="1082" cy="682" r="2.1" fill="white" fillOpacity="0.90" />

        {/* Southern Cross */}
        <circle cx="234" cy="634" r="2.4" fill="white" fillOpacity="0.94" />
        <circle cx="234" cy="758" r="2.0" fill="#93C5FD" fillOpacity="0.88" />
        <circle cx="168" cy="696" r="2.2" fill="white" fillOpacity="0.91" />
        <circle cx="308" cy="696" r="2.0" fill="white" fillOpacity="0.89" />

        {/* Boötes */}
        <circle cx="700" cy="678" r="2.1" fill="#BFDBFE" fillOpacity="0.90" />
        <circle cx="660" cy="730" r="1.8" fill="white" fillOpacity="0.84" />
        <circle cx="718" cy="792" r="2.0" fill="white" fillOpacity="0.88" />
        <circle cx="782" cy="762" r="1.9" fill="white" fillOpacity="0.86" />
        <circle cx="792" cy="698" r="2.2" fill="white" fillOpacity="0.92" />
        <circle cx="742" cy="648" r="2.4" fill="white" fillOpacity="0.94" />

        {/* Lyra */}
        <circle cx="1058" cy="278" r="2.6" fill="#BFDBFE" fillOpacity="0.96" />
        <circle cx="1028" cy="332" r="1.7" fill="white" fillOpacity="0.81" />
        <circle cx="1088" cy="362" r="1.7" fill="white" fillOpacity="0.81" />
        <circle cx="1042" cy="392" r="1.8" fill="white" fillOpacity="0.84" />
      </g>

      {/* ── Background stars ────────────────────────────────────────────────── */}
      <g>
        <circle cx={363} cy={79} r={0.94} fill="white" fillOpacity={0.29} />
        <circle cx={37} cy={403} r={0.55} fill="#93C5FD" fillOpacity={0.6} />
        <circle cx={1229} cy={450} r={1} fill="white" fillOpacity={0.59} />
        <circle cx={131} cy={126} r={1.26} fill="#93C5FD" fillOpacity={0.62} />
        <circle cx={793} cy={162} r={0.92} fill="#93C5FD" fillOpacity={0.3} />
        <circle cx={1183} cy={140} r={1.15} fill="white" fillOpacity={0.4} />
        <circle cx={32} cy={484} r={1.16} fill="white" fillOpacity={0.59} />
        <circle cx={548} cy={527} r={1.04} fill="white" fillOpacity={0.52} />
        <circle cx={183} cy={692} r={0.95} fill="white" fillOpacity={0.57} />
        <circle cx={311} cy={245} r={0.47} fill="white" fillOpacity={0.31} />
        <circle cx={1271} cy={860} r={0.61} fill="white" fillOpacity={0.6} />
        <circle cx={485} cy={283} r={0.56} fill="white" fillOpacity={0.65} />
        <circle cx={1327} cy={725} r={0.82} fill="white" fillOpacity={0.52} />
        <circle cx={171} cy={458} r={0.55} fill="white" fillOpacity={0.3} />
        <circle cx={1005} cy={442} r={0.63} fill="white" fillOpacity={0.29} />
        <circle cx={1270} cy={735} r={1.04} fill="white" fillOpacity={0.58} />
        <circle cx={221} cy={114} r={0.91} fill="#93C5FD" fillOpacity={0.49} />
        <circle cx={613} cy={672} r={0.82} fill="white" fillOpacity={0.2} />
        <circle cx={408} cy={441} r={1.16} fill="white" fillOpacity={0.62} />
        <circle cx={455} cy={477} r={0.67} fill="white" fillOpacity={0.37} />
        <circle cx={933} cy={330} r={0.85} fill="white" fillOpacity={0.3} />
        <circle cx={1009} cy={498} r={0.96} fill="white" fillOpacity={0.29} />
        <circle cx={602} cy={842} r={0.65} fill="#93C5FD" fillOpacity={0.62} />
        <circle cx={823} cy={832} r={0.47} fill="white" fillOpacity={0.3} />
        <circle cx={723} cy={857} r={1.28} fill="white" fillOpacity={0.52} />
        <circle cx={437} cy={581} r={1.02} fill="white" fillOpacity={0.4} />
        <circle cx={1038} cy={455} r={0.48} fill="white" fillOpacity={0.59} />
        <circle cx={1302} cy={665} r={0.91} fill="#93C5FD" fillOpacity={0.66} />
        <circle cx={894} cy={706} r={0.5} fill="white" fillOpacity={0.44} />
        <circle cx={359} cy={673} r={0.47} fill="white" fillOpacity={0.63} />
        <circle cx={849} cy={63} r={0.57} fill="white" fillOpacity={0.23} />
        <circle cx={407} cy={505} r={0.82} fill="white" fillOpacity={0.65} />
        <circle cx={862} cy={325} r={1.05} fill="#93C5FD" fillOpacity={0.31} />
        <circle cx={1270} cy={500} r={1.01} fill="white" fillOpacity={0.54} />
        <circle cx={400} cy={132} r={0.65} fill="white" fillOpacity={0.23} />
        <circle cx={636} cy={701} r={1} fill="white" fillOpacity={0.58} />
        <circle cx={997} cy={384} r={0.75} fill="white" fillOpacity={0.53} />
        <circle cx={1085} cy={616} r={0.68} fill="#93C5FD" fillOpacity={0.57} />
        <circle cx={1145} cy={793} r={0.59} fill="white" fillOpacity={0.46} />
        <circle cx={328} cy={348} r={1.28} fill="white" fillOpacity={0.5} />
        <circle cx={171} cy={450} r={0.94} fill="white" fillOpacity={0.63} />
        <circle cx={221} cy={735} r={1.27} fill="white" fillOpacity={0.55} />
        <circle cx={322} cy={707} r={1.19} fill="#93C5FD" fillOpacity={0.6} />
        <circle cx={132} cy={612} r={1.24} fill="white" fillOpacity={0.48} />
        <circle cx={1283} cy={686} r={1.09} fill="white" fillOpacity={0.39} />
        <circle cx={343} cy={450} r={0.96} fill="white" fillOpacity={0.3} />
        <circle cx={610} cy={125} r={1.12} fill="white" fillOpacity={0.51} />
        <circle cx={332} cy={82} r={1.14} fill="white" fillOpacity={0.65} />
        <circle cx={625} cy={111} r={0.54} fill="white" fillOpacity={0.58} />
        <circle cx={646} cy={533} r={0.76} fill="white" fillOpacity={0.53} />
        <circle cx={265} cy={276} r={0.73} fill="white" fillOpacity={0.62} />
        <circle cx={666} cy={44} r={1.12} fill="#93C5FD" fillOpacity={0.39} />
        <circle cx={59} cy={624} r={0.53} fill="white" fillOpacity={0.53} />
        <circle cx={259} cy={215} r={1.08} fill="white" fillOpacity={0.27} />
        <circle cx={1413} cy={684} r={0.83} fill="white" fillOpacity={0.43} />
        <circle cx={282} cy={56} r={0.88} fill="#93C5FD" fillOpacity={0.5} />
        <circle cx={338} cy={346} r={1.2} fill="white" fillOpacity={0.46} />
        <circle cx={498} cy={186} r={1.1} fill="white" fillOpacity={0.44} />
        <circle cx={112} cy={638} r={1.19} fill="white" fillOpacity={0.49} />
        <circle cx={648} cy={682} r={0.56} fill="white" fillOpacity={0.25} />
        <circle cx={736} cy={245} r={0.64} fill="white" fillOpacity={0.2} />
        <circle cx={1099} cy={320} r={0.85} fill="#93C5FD" fillOpacity={0.39} />
        <circle cx={228} cy={467} r={0.62} fill="white" fillOpacity={0.41} />
        <circle cx={1430} cy={374} r={1.11} fill="white" fillOpacity={0.66} />
        <circle cx={1188} cy={253} r={0.78} fill="white" fillOpacity={0.61} />
        <circle cx={324} cy={492} r={0.71} fill="white" fillOpacity={0.65} />
        <circle cx={181} cy={636} r={1.13} fill="white" fillOpacity={0.66} />
        <circle cx={959} cy={158} r={1.14} fill="white" fillOpacity={0.37} />
        <circle cx={1278} cy={764} r={1.03} fill="white" fillOpacity={0.32} />
        <circle cx={222} cy={135} r={0.49} fill="white" fillOpacity={0.53} />
        <circle cx={1151} cy={430} r={1} fill="white" fillOpacity={0.52} />
        <circle cx={70} cy={501} r={1.07} fill="white" fillOpacity={0.59} />
        <circle cx={552} cy={894} r={0.69} fill="white" fillOpacity={0.56} />
        <circle cx={1334} cy={271} r={0.72} fill="#93C5FD" fillOpacity={0.32} />
        <circle cx={1133} cy={267} r={1.01} fill="white" fillOpacity={0.36} />
        <circle cx={63} cy={792} r={0.89} fill="#93C5FD" fillOpacity={0.4} />
        <circle cx={566} cy={774} r={0.56} fill="white" fillOpacity={0.38} />
        <circle cx={274} cy={809} r={0.71} fill="white" fillOpacity={0.66} />
        <circle cx={862} cy={92} r={0.51} fill="white" fillOpacity={0.56} />
        <circle cx={1276} cy={652} r={1} fill="white" fillOpacity={0.38} />
        <circle cx={79} cy={297} r={1.11} fill="white" fillOpacity={0.39} />
        <circle cx={102} cy={502} r={0.93} fill="white" fillOpacity={0.34} />
        <circle cx={1248} cy={60} r={1.28} fill="#93C5FD" fillOpacity={0.52} />
        <circle cx={1116} cy={226} r={0.94} fill="white" fillOpacity={0.24} />
        <circle cx={913} cy={619} r={0.84} fill="white" fillOpacity={0.28} />
        <circle cx={842} cy={813} r={1.23} fill="white" fillOpacity={0.33} />
        <circle cx={691} cy={773} r={1.2} fill="white" fillOpacity={0.48} />
        <circle cx={484} cy={698} r={1.14} fill="white" fillOpacity={0.55} />
        <circle cx={492} cy={408} r={1.04} fill="white" fillOpacity={0.36} />
        <circle cx={257} cy={773} r={0.87} fill="white" fillOpacity={0.34} />
        <circle cx={424} cy={562} r={0.78} fill="white" fillOpacity={0.42} />
        <circle cx={322} cy={569} r={1.3} fill="white" fillOpacity={0.26} />
        <circle cx={1282} cy={550} r={0.79} fill="white" fillOpacity={0.47} />
        <circle cx={1082} cy={485} r={0.66} fill="#93C5FD" fillOpacity={0.46} />
        <circle cx={11} cy={581} r={0.55} fill="white" fillOpacity={0.53} />
        <circle cx={999} cy={830} r={0.66} fill="white" fillOpacity={0.59} />
        <circle cx={1308} cy={204} r={0.56} fill="white" fillOpacity={0.53} />
        <circle cx={649} cy={132} r={1.27} fill="white" fillOpacity={0.24} />
        <circle cx={792} cy={553} r={1.2} fill="white" fillOpacity={0.65} />
        <circle cx={779} cy={99} r={0.83} fill="#93C5FD" fillOpacity={0.3} />
        <circle cx={95} cy={701} r={1.08} fill="white" fillOpacity={0.22} />
        <circle cx={1204} cy={434} r={1.14} fill="white" fillOpacity={0.4} />
        <circle cx={786} cy={204} r={1.24} fill="white" fillOpacity={0.58} />
        <circle cx={1247} cy={679} r={1.08} fill="white" fillOpacity={0.42} />
        <circle cx={224} cy={239} r={0.98} fill="white" fillOpacity={0.44} />
        <circle cx={1213} cy={109} r={0.73} fill="white" fillOpacity={0.25} />
        <circle cx={818} cy={451} r={1.08} fill="white" fillOpacity={0.41} />
        <circle cx={647} cy={354} r={1.08} fill="white" fillOpacity={0.34} />
        <circle cx={641} cy={308} r={0.96} fill="#93C5FD" fillOpacity={0.38} />
        <circle cx={1061} cy={226} r={0.69} fill="white" fillOpacity={0.27} />
        <circle cx={85} cy={370} r={0.73} fill="#93C5FD" fillOpacity={0.27} />
        <circle cx={729} cy={276} r={1.05} fill="white" fillOpacity={0.63} />
        <circle cx={1166} cy={405} r={1.17} fill="#93C5FD" fillOpacity={0.52} />
        <circle cx={917} cy={296} r={0.92} fill="white" fillOpacity={0.33} />
        <circle cx={887} cy={295} r={0.63} fill="#93C5FD" fillOpacity={0.45} />
        <circle cx={240} cy={268} r={1.1} fill="white" fillOpacity={0.63} />
        <circle cx={735} cy={828} r={0.6} fill="white" fillOpacity={0.57} />
        <circle cx={1206} cy={256} r={0.94} fill="white" fillOpacity={0.41} />
        <circle cx={1398} cy={480} r={1.29} fill="white" fillOpacity={0.45} />
        <circle cx={1140} cy={38} r={1.17} fill="white" fillOpacity={0.52} />
        <circle cx={1278} cy={830} r={0.96} fill="white" fillOpacity={0.44} />
        <circle cx={413} cy={303} r={1.26} fill="white" fillOpacity={0.32} />
        <circle cx={1074} cy={502} r={1.1} fill="white" fillOpacity={0.38} />
        <circle cx={155} cy={637} r={0.66} fill="white" fillOpacity={0.39} />
        <circle cx={175} cy={815} r={0.58} fill="white" fillOpacity={0.29} />
        <circle cx={1212} cy={629} r={1.1} fill="white" fillOpacity={0.5} />
        <circle cx={1131} cy={182} r={1.28} fill="white" fillOpacity={0.37} />
        <circle cx={340} cy={785} r={1.26} fill="white" fillOpacity={0.34} />
        <circle cx={48} cy={894} r={1.26} fill="white" fillOpacity={0.65} />
        <circle cx={1141} cy={343} r={0.7} fill="white" fillOpacity={0.32} />
        <circle cx={162} cy={591} r={0.57} fill="white" fillOpacity={0.42} />
        <circle cx={974} cy={289} r={0.94} fill="white" fillOpacity={0.25} />
        <circle cx={1230} cy={622} r={0.57} fill="white" fillOpacity={0.56} />
        <circle cx={1019} cy={312} r={1.3} fill="white" fillOpacity={0.32} />
        <circle cx={118} cy={9} r={0.65} fill="white" fillOpacity={0.36} />
        <circle cx={173} cy={264} r={0.56} fill="#93C5FD" fillOpacity={0.22} />
        <circle cx={228} cy={818} r={0.87} fill="white" fillOpacity={0.49} />
        <circle cx={301} cy={716} r={0.93} fill="white" fillOpacity={0.28} />
        <circle cx={1056} cy={91} r={0.87} fill="white" fillOpacity={0.56} />
        <circle cx={1408} cy={840} r={1.21} fill="white" fillOpacity={0.59} />
        <circle cx={792} cy={382} r={0.86} fill="white" fillOpacity={0.41} />
        <circle cx={280} cy={370} r={0.64} fill="white" fillOpacity={0.32} />
        <circle cx={1019} cy={23} r={0.81} fill="white" fillOpacity={0.54} />
        <circle cx={694} cy={492} r={0.99} fill="#93C5FD" fillOpacity={0.33} />
        <circle cx={291} cy={42} r={0.55} fill="white" fillOpacity={0.38} />
        <circle cx={724} cy={388} r={1.25} fill="#93C5FD" fillOpacity={0.61} />
        <circle cx={102} cy={525} r={1.2} fill="white" fillOpacity={0.35} />
        <circle cx={656} cy={465} r={1.22} fill="white" fillOpacity={0.57} />
        <circle cx={909} cy={129} r={0.48} fill="white" fillOpacity={0.63} />
        <circle cx={867} cy={310} r={0.94} fill="white" fillOpacity={0.4} />
        <circle cx={1016} cy={360} r={0.54} fill="white" fillOpacity={0.56} />
        <circle cx={48} cy={867} r={1.19} fill="white" fillOpacity={0.6} />
        <circle cx={398} cy={551} r={0.55} fill="white" fillOpacity={0.38} />
        <circle cx={603} cy={276} r={0.78} fill="white" fillOpacity={0.44} />
        <circle cx={822} cy={812} r={0.95} fill="#93C5FD" fillOpacity={0.38} />
        <circle cx={793} cy={377} r={0.98} fill="white" fillOpacity={0.32} />
        <circle cx={92} cy={151} r={0.72} fill="#93C5FD" fillOpacity={0.38} />
        <circle cx={36} cy={616} r={0.79} fill="#93C5FD" fillOpacity={0.31} />
        <circle cx={595} cy={813} r={0.48} fill="white" fillOpacity={0.3} />
        <circle cx={1225} cy={187} r={0.64} fill="white" fillOpacity={0.53} />
        <circle cx={995} cy={327} r={0.67} fill="white" fillOpacity={0.64} />
        <circle cx={1213} cy={567} r={0.83} fill="white" fillOpacity={0.41} />
        <circle cx={1108} cy={129} r={1.29} fill="white" fillOpacity={0.65} />
        <circle cx={709} cy={166} r={0.7} fill="white" fillOpacity={0.29} />
        <circle cx={443} cy={809} r={0.98} fill="white" fillOpacity={0.48} />
        <circle cx={1335} cy={700} r={0.77} fill="#93C5FD" fillOpacity={0.44} />
        <circle cx={1081} cy={876} r={0.63} fill="white" fillOpacity={0.58} />
        <circle cx={910} cy={155} r={0.61} fill="white" fillOpacity={0.41} />
        <circle cx={1295} cy={285} r={0.93} fill="#93C5FD" fillOpacity={0.57} />
        <circle cx={192} cy={483} r={1.21} fill="#93C5FD" fillOpacity={0.52} />
      </g>
    </svg>
  )
}
