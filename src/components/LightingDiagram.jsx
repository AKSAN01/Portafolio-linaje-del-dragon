import React from 'react';

export function LightingDiagram({ photo }) {
  const { diagram, exif } = photo;
  const type = diagram.type;

  return (
    <div className="diagrams-column">
      {/* TOP VIEW (PLANTA) */}
      <div className="diagram-card">
        <div className="diagram-header">
          <span className="diagram-title">V I S T A &nbsp; S U P E R I O R &nbsp; ( P L A N T A )</span>
          <span className="diagram-distance">Distancia cámara–sujeto: {diagram.topDistance}</span>
        </div>

        <svg viewBox="0 0 420 230" className="diagram-svg" aria-label={`Vista superior ${photo.title}`}>
          {/* Dark surface / desk mat */}
          <rect
            x="45"
            y="24"
            width="330"
            height="122"
            rx="4"
            fill="#17171d"
            stroke="#2a2a35"
            strokeWidth="1"
          />
          <text x="364" y="136" textAnchor="end" fill="#8b8b99" fontSize="10">
            {diagram.surfaceLabel}
          </text>

          {/* Optical Axis Dashed Line */}
          <line
            x1="210"
            y1="88"
            x2="210"
            y2="178"
            stroke="#555566"
            strokeWidth="1"
            strokeDasharray="4 4"
          />

          {/* SUBJECT BY TYPE */}
          {type === 'control' && (
            <g>
              {/* Controller body */}
              <path
                d="M175 68 C175 52, 245 52, 245 68 L254 92 C256 102, 242 106, 234 96 L224 84 L196 84 L186 96 C178 106, 164 102, 166 92 Z"
                fill="#c8c8d0"
                stroke="#ffffff"
                strokeWidth="1"
              />
              {/* 10 of Diamonds card in front */}
              <rect x="196" y="82" width="28" height="8" rx="1.5" fill="#f3ead8" stroke="#e11d2e" strokeWidth="1.2" />
              <text x="210" y="45" textAnchor="middle" fill="#d8d8e2" fontSize="11">
                {diagram.subjectLabel}
              </text>

              {/* Left Red Rim Light (LED Rojo) */}
              <circle cx="88" cy="76" r="9" fill="#e11d2e" />
              <path d="M100 76 L158 76" stroke="#e11d2e" strokeWidth="1.5" strokeDasharray="4 3" />
              <polygon points="158,76 150,72 150,80" fill="#e11d2e" />
              <path d="M102 68 L116 62 M103 76 L119 76 M102 84 L116 90" stroke="#e11d2e" strokeWidth="1.2" />
              <text x="88" y="58" textAnchor="middle" fill="#ff5a67" fontSize="10">
                LED Rojo (Recorte)
              </text>

              {/* Front-Top Soft Key Light */}
              <circle cx="248" cy="148" r="8" fill="#e6b85c" />
              <path d="M242 138 L220 98" stroke="#e6b85c" strokeWidth="1.3" strokeDasharray="4 3" />
              <text x="298" y="152" textAnchor="start" fill="#e6b85c" fontSize="10">
                Luz suave frontal
              </text>
            </g>
          )}

          {type === 'teclado' && (
            <g>
              {/* Mechanical Keyboard */}
              <rect x="148" y="54" width="124" height="54" rx="4" fill="#d8d8e0" stroke="#888" strokeWidth="1" />
              {/* Key grid lines */}
              <line x1="156" y1="68" x2="264" y2="68" stroke="#999" strokeWidth="1" strokeDasharray="6 3" />
              <line x1="156" y1="82" x2="264" y2="82" stroke="#999" strokeWidth="1" strokeDasharray="6 3" />
              <line x1="156" y1="96" x2="264" y2="96" stroke="#999" strokeWidth="1" strokeDasharray="6 3" />
              {/* Queen of Hearts tilted on right */}
              <rect
                x="232"
                y="62"
                width="28"
                height="38"
                rx="2"
                transform="rotate(-14 246 81)"
                fill="#f3ead8"
                stroke="#e11d2e"
                strokeWidth="1.5"
              />
              <text x="210" y="44" textAnchor="middle" fill="#d8d8e2" fontSize="11">
                {diagram.subjectLabel}
              </text>

              {/* Warm-Red Left Light */}
              <circle cx="86" cy="66" r="9" fill="#e11d2e" />
              <path d="M98 68 L142 74" stroke="#e11d2e" strokeWidth="1.5" strokeDasharray="4 3" />
              <polygon points="142,74 134,69 133,77" fill="#e11d2e" />
              <text x="86" y="48" textAnchor="middle" fill="#ff5a67" fontSize="10">
                Acento Rojo Izq.
              </text>

              {/* Overhead Soft Key */}
              <circle cx="296" cy="118" r="8" fill="#e6b85c" />
              <path d="M286 112 L258 92" stroke="#e6b85c" strokeWidth="1.3" strokeDasharray="4 3" />
              <text x="310" y="122" textAnchor="start" fill="#e6b85c" fontSize="10">
                Luz principal
              </text>
            </g>
          )}

          {type === 'smartphones' && (
            <g>
              {/* iPhone Left + Samsung Right + Cards */}
              <rect x="188" y="34" width="38" height="16" rx="2" fill="#f3ead8" stroke="#aaa" strokeWidth="1" />
              <rect x="145" y="54" width="60" height="44" rx="5" fill="#dcdce4" stroke="#fff" strokeWidth="1" />
              <circle cx="192" cy="76" r="7" fill="#b91522" />
              <rect x="210" y="52" width="62" height="50" rx="2" fill="#23232b" stroke="#888" strokeWidth="1" />
              <circle cx="238" cy="80" r="8" fill="#b91522" />
              <rect x="164" y="102" width="38" height="16" rx="2" fill="#f3ead8" stroke="#aaa" strokeWidth="1" />

              <text x="128" y="44" textAnchor="end" fill="#d8d8e2" fontSize="10.5">
                {diagram.subjectLabel}
              </text>

              {/* Top-left warm/red accent */}
              <circle cx="88" cy="58" r="8.5" fill="#e11d2e" />
              <path d="M100 62 L138 70" stroke="#e11d2e" strokeWidth="1.4" strokeDasharray="4 3" />
              <text x="88" y="42" textAnchor="middle" fill="#ff5a67" fontSize="10">
                Luz cálida-roja
              </text>

              {/* Overhead diffused light */}
              <circle cx="315" cy="78" r="8.5" fill="#e6b85c" />
              <path d="M302 78 L276 78" stroke="#e6b85c" strokeWidth="1.4" strokeDasharray="4 3" />
              <text x="315" y="62" textAnchor="middle" fill="#e6b85c" fontSize="10">
                Luz cenital 35°
              </text>
            </g>
          )}

          {type === 'portatil' && (
            <g>
              {/* Laptop screen + keyboard base */}
              <line x1="142" y1="54" x2="278" y2="54" stroke="#e2e2ec" strokeWidth="4" strokeLinecap="round" />
              <rect x="146" y="58" width="128" height="46" rx="3" fill="#262630" stroke="#666" strokeWidth="1" />
              {/* Ace of Spades on left of screen */}
              <rect x="156" y="50" width="22" height="6" rx="1" fill="#f3ead8" stroke="#e11d2e" strokeWidth="1" />
              {/* Moon reflection spot on right of screen */}
              <circle cx="242" cy="54" r="5" fill="#e8f4ff" />

              <text x="210" y="40" textAnchor="middle" fill="#d8d8e2" fontSize="11">
                {diagram.subjectLabel}
              </text>

              {/* Point light creating the moon reflection */}
              <circle cx="292" cy="128" r="8.5" fill="#cbe5ff" />
              <path d="M285 118 L245 62" stroke="#cbe5ff" strokeWidth="1.4" strokeDasharray="4 3" />
              <polygon points="245,62 247,71 254,66" fill="#cbe5ff" />
              <text x="336" y="132" textAnchor="middle" fill="#cbe5ff" fontSize="10">
                Luz puntual (Luna)
              </text>
            </g>
          )}

          {/* CAMERA ICON AT BOTTOM */}
          <g transform="translate(196, 174)">
            <polygon points="6,0 22,0 26,-10 2,-10" fill="#a5a5b5" />
            <rect x="0" y="0" width="28" height="22" rx="3" fill="#f4f4f8" />
          </g>
          <text x="210" y="213" textAnchor="middle" fill="#d0d0dc" fontSize="10.5">
            {exif.modeloCamara} ({exif.distanciaFocal === 'No completamente visible en la captura.' ? 'f/5.6' : `${exif.distanciaFocal} · ${exif.puntoF}`})
          </text>
        </svg>
      </div>

      {/* SIDE VIEW (CORTE LATERAL) */}
      <div className="diagram-card">
        <div className="diagram-header">
          <span className="diagram-title">A L T U R A &nbsp; D E &nbsp; L A &nbsp; L U Z &nbsp; ( C O R T E &nbsp; L A T E R A L )</span>
          <span className="diagram-distance">Ángulo: {diagram.sideAngle}</span>
        </div>

        <svg viewBox="0 0 420 190" className="diagram-svg" aria-label={`Corte lateral ${photo.title}`}>
          {/* Table surface */}
          <rect x="36" y="136" width="348" height="10" rx="2" fill="#25252e" />
          <text x="44" y="164" fill="#8b8b99" fontSize="10.5">
            {diagram.surfaceLabel}
          </text>

          {/* Subject silhouette on surface */}
          <ellipse cx="248" cy="128" rx="36" ry="10" fill="#c8c8d4" />
          <rect
            x="234"
            y="102"
            width="6"
            height="28"
            rx="1.5"
            transform="rotate(12 237 116)"
            fill="#f3ead8"
            stroke="#e11d2e"
            strokeWidth="1"
          />
          <text x="248" y="164" textAnchor="middle" fill="#d8d8e2" fontSize="10.5">
            {diagram.subjectLabel}
          </text>

          {/* Primary Light Source & Ray */}
          <circle cx="136" cy="52" r="9" fill="#e6b85c" />
          <text x="136" y="36" textAnchor="middle" fill="#e6b85c" fontSize="10">
            Luz continua / Key
          </text>
          <line
            x1="146"
            y1="58"
            x2="226"
            y2="116"
            stroke="#e6b85c"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <polygon points="226,116 216,114 221,107" fill="#e6b85c" />

          {/* Secondary Rim / Red Accent Light at low angle */}
          <circle cx="78" cy="116" r="7.5" fill="#e11d2e" />
          <text x="78" y="101" textAnchor="middle" fill="#ff5a67" fontSize="9.5">
            Acento Rojo
          </text>
          <line
            x1="88"
            y1="117"
            x2="204"
            y2="125"
            stroke="#e11d2e"
            strokeWidth="1.3"
            strokeDasharray="3 3"
          />
          <polygon points="204,125 195,121 195,128" fill="#e11d2e" />

          {/* Angle Arc */}
          <path
            d="M 188 136 A 46 46 0 0 1 204 102"
            fill="none"
            stroke="#8b8b99"
            strokeWidth="1"
          />
          <text x="166" y="114" fill="#d0d0dc" fontSize="10">
            {type === 'smartphones' ? '90° / 35°' : type === 'teclado' ? '55°' : '35°'}
          </text>
        </svg>
      </div>
    </div>
  );
}
