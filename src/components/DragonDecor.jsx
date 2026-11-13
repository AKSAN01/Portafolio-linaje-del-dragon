import React from 'react';

export function OrientalDragonEmblem({ className = '', size = 180 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 220 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="crimsonSun" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#e11d2e" stopOpacity="0.95" />
          <stop offset="70%" stopColor="#9e111d" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#45060b" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="goldStroke" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f5ede0" />
          <stop offset="50%" stopColor="#d4b483" />
          <stop offset="100%" stopColor="#8c6d46" />
        </linearGradient>
      </defs>

      {/* Outer tech/oriental compass ring */}
      <circle
        cx="110"
        cy="110"
        r="102"
        stroke="url(#goldStroke)"
        strokeWidth="0.75"
        strokeDasharray="4 6"
        opacity="0.35"
      />
      <circle
        cx="110"
        cy="110"
        r="92"
        stroke="#c81e2b"
        strokeWidth="0.8"
        opacity="0.4"
      />

      {/* Crimson Rising Sun (matching the red circle on the cards & phones) */}
      <circle cx="126" cy="96" r="54" fill="url(#crimsonSun)" />
      <circle cx="126" cy="96" r="44" fill="#b91522" opacity="0.85" />

      {/* Stylized Oriental Dragon Coiling S-Curve & Horns */}
      <path
        d="M62 168C44 150 48 118 72 104C96 90 132 108 148 86C162 67 146 42 120 44C102 45 92 58 84 68"
        stroke="url(#goldStroke)"
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.9"
      />
      <path
        d="M62 168C44 150 48 118 72 104C96 90 132 108 148 86C162 67 146 42 120 44"
        stroke="#0a0a0e"
        strokeWidth="2"
        strokeDasharray="3 4"
        strokeLinecap="round"
      />

      {/* Dragon Head & Whiskers / Horns */}
      <path
        d="M118 44L100 28M122 44L112 24M128 48L152 38L142 54L158 58L138 66"
        stroke="url(#goldStroke)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Oriental Cloud Swirls */}
      <path
        d="M36 138C44 132 56 134 62 142C68 136 80 138 84 146M142 148C152 142 166 144 172 152C178 146 190 148 194 156"
        stroke="url(#goldStroke)"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.6"
      />

      {/* Corner Poker Suit Accents */}
      <text x="110" y="18" textAnchor="middle" fill="#e5dccb" fontSize="10" opacity="0.55">♠</text>
      <text x="204" y="114" textAnchor="middle" fill="#e11d2e" fontSize="10" opacity="0.75">♦</text>
      <text x="110" y="210" textAnchor="middle" fill="#e5dccb" fontSize="10" opacity="0.55">♣</text>
      <text x="16" y="114" textAnchor="middle" fill="#e11d2e" fontSize="10" opacity="0.75">♥</text>
    </svg>
  );
}

export function PokerCardBadge({ rank, suit, color = 'red', size = 'md' }) {
  const isRed = color === 'red';
  const dimensions =
    size === 'sm'
      ? 'w-9 h-12 text-xs'
      : size === 'lg'
      ? 'w-14 h-20 text-base'
      : 'w-11 h-15 text-sm';

  return (
    <div
      className={`poker-card-badge ${
        isRed ? 'poker-card-red' : 'poker-card-black'
      } ${dimensions}`}
      title={`Naipe ${rank}${suit}`}
    >
      <div className="card-corner-top">
        <span className="card-rank">{rank}</span>
        <span className="card-suit">{suit}</span>
      </div>
      <div className="card-center-sun">
        <span className="card-dragon-glyph">{suit}</span>
      </div>
      <div className="card-corner-bottom">
        <span className="card-rank">{rank}</span>
      </div>
    </div>
  );
}

export function DragonCardArtwork({ rank, isRed }) {
  const suitColor = isRed ? '#b81422' : '#151519';

  return (
    <svg
      viewBox="0 0 240 160"
      className="dragon-card-svg"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Subtle parchment/plastic sheen and tech micro-border */}
      <rect
        x="6"
        y="6"
        width="228"
        height="148"
        rx="7"
        fill="none"
        stroke="rgba(20, 20, 24, 0.12)"
        strokeWidth="1"
      />

      {/* Crimson Sun Circle behind the top-right of the inner frame (exact match to the physical cards) */}
      <circle cx="156" cy="48" r="26" fill="#b81422" />

      {/* Oriental Dragon Coiling Around the Central Frame */}
      {/* Upper Dragon Body & Scales */}
      <path
        d="M98 34 C112 18, 142 18, 158 34 C172 48, 166 76, 148 86"
        fill="none"
        stroke="#18181d"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path
        d="M98 34 C112 18, 142 18, 158 34 C172 48, 166 76, 148 86"
        fill="none"
        stroke="#ebe1cf"
        strokeWidth="7"
        strokeLinecap="round"
        strokeDasharray="2 3"
      />
      {/* Dragon Head & Horns Lunging Over the Crimson Sun */}
      <path
        d="M142 22 L126 12 M148 22 L138 9 M152 28 L174 25 L164 35 L176 41 L158 44"
        fill="none"
        stroke="#18181d"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Lower Dragon Tail Coiling Bottom-Left */}
      <path
        d="M92 78 C72 88, 68 116, 86 132 C100 144, 124 142, 138 130"
        fill="none"
        stroke="#18181d"
        strokeWidth="9"
        strokeLinecap="round"
      />
      <path
        d="M92 78 C72 88, 68 116, 86 132 C100 144, 124 142, 138 130"
        fill="none"
        stroke="#ebe1cf"
        strokeWidth="6"
        strokeLinecap="round"
        strokeDasharray="2 3"
      />

      {/* Oriental Clouds */}
      <path
        d="M64 78 C70 73, 78 74, 82 80 M68 134 C76 129, 86 131, 92 138 M146 124 C154 120, 164 122, 168 128"
        fill="none"
        stroke="#222228"
        strokeWidth="1.3"
        strokeLinecap="round"
        opacity="0.75"
      />

      {/* Inner Rectangular Card Frame (like the box inside the 10♦, Q♥, K♣, A♠) */}
      <rect
        x="86"
        y="32"
        width="68"
        height="96"
        rx="2"
        fill="#ece2d0"
        stroke={suitColor}
        strokeWidth="1.6"
      />

      {/* Center Content Inside the Inner Box by Rank */}
      {rank === '10' && (
        <g fill={suitColor} fontSize="15" textAnchor="middle">
          <text x="102" y="50">♦</text>
          <text x="138" y="50">♦</text>
          <text x="120" y="62">♦</text>
          <text x="102" y="74">♦</text>
          <text x="138" y="74">♦</text>
          <text x="102" y="96">♦</text>
          <text x="138" y="96">♦</text>
          <text x="120" y="106">♦</text>
          <text x="102" y="118">♦</text>
          <text x="138" y="118">♦</text>
        </g>
      )}

      {rank === 'Q' && (
        <g>
          <rect
            x="91"
            y="37"
            width="58"
            height="86"
            fill="none"
            stroke="#b81422"
            strokeWidth="0.8"
          />
          <text x="103" y="56" fill="#b81422" fontSize="16" textAnchor="middle">
            ♥
          </text>
          <text x="137" y="114" fill="#b81422" fontSize="16" textAnchor="middle">
            ♥
          </text>
          {/* Royal Crown + Queen Emblem */}
          <polygon
            points="106,74 113,63 120,71 127,63 134,74"
            fill="#d4a024"
            stroke="#18181d"
            strokeWidth="1.2"
          />
          <circle cx="120" cy="85" r="9" fill="none" stroke="#18181d" strokeWidth="1.5" />
          <path d="M108 104 C112 94, 128 94, 132 104 Z" fill="#b81422" stroke="#18181d" strokeWidth="1.2" />
        </g>
      )}

      {rank === 'K' && (
        <g>
          <rect
            x="91"
            y="37"
            width="58"
            height="86"
            fill="none"
            stroke="#18181d"
            strokeWidth="0.8"
          />
          <text x="103" y="56" fill="#18181d" fontSize="16" textAnchor="middle">
            ♣
          </text>
          <text x="137" y="114" fill="#18181d" fontSize="16" textAnchor="middle">
            ♣
          </text>
          {/* King Crown & Dual Dragon Crest */}
          <polygon
            points="104,74 111,61 120,70 129,61 136,74"
            fill="#d4a024"
            stroke="#18181d"
            strokeWidth="1.2"
          />
          <circle cx="120" cy="86" r="10" fill="#b81422" opacity="0.9" />
          <text x="120" y="91" fill="#f5ede0" fontSize="13" fontWeight="bold" textAnchor="middle">
            ♣
          </text>
        </g>
      )}

      {rank === 'A' && (
        <g>
          {/* Ornate Ace of Spades Filigree */}
          <text x="120" y="84" fill="#151519" fontSize="38" textAnchor="middle">
            ♠
          </text>
          <circle cx="120" cy="72" r="7" fill="#ece2d0" stroke="#151519" strokeWidth="1" />
          <text x="120" y="75" fill="#151519" fontSize="8" fontWeight="bold" textAnchor="middle">
            K
          </text>
          <text x="120" y="106" fill="#151519" fontSize="5.5" fontFamily="monospace" textAnchor="middle">
            100% ALL PLASTIC
          </text>
          <text x="120" y="114" fill="#151519" fontSize="5.5" fontFamily="monospace" textAnchor="middle">
            PLAYING CARDS
          </text>
        </g>
      )}
    </svg>
  );
}

export function HeroFlipCard({ photo, isFlipped, onToggleFlip, onOpenLightbox }) {
  const isRed = photo.cardColor === 'red';

  return (
    <div
      className={`hero-flip-container ${isFlipped ? 'is-flipped' : ''}`}
      onClick={() => onToggleFlip(photo.id)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onToggleFlip(photo.id);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`Carta ${photo.cardRank}${photo.cardSuit} - ${photo.rawTitle}. Pasa el cursor o presiona para girar.`}
    >
      <div className="hero-flip-inner">
        {/* FRONT FACE: THE ORIENTAL DRAGON POKER CARD COVER */}
        <div
          className={`hero-flip-front ${
            isRed ? 'card-face-red' : 'card-face-black'
          }`}
        >
          {/* Top-Left Corner Index */}
          <div className="playing-card-corner top-left">
            <span className="corner-rank">{photo.cardRank}</span>
            <span className="corner-suit">{photo.cardSuit}</span>
          </div>

          {/* Center Oriental Dragon + Crimson Sun Artwork */}
          <DragonCardArtwork
            rank={photo.cardRank}
            suit={photo.cardSuit}
            isRed={isRed}
          />

          {/* Bottom-Right Inverted Corner Index */}
          <div className="playing-card-corner bottom-right">
            <span className="corner-rank">{photo.cardRank}</span>
            <span className="corner-suit">{photo.cardSuit}</span>
          </div>

          {/* Bottom Subtle Tech Label */}
          <div className="card-cover-footer">
            <span className="cover-photo-id">{photo.rawTitle}</span>
            <span className="cover-flip-hint">Girar ↻</span>
          </div>
        </div>

        {/* BACK FACE: THE ACTUAL PHOTOGRAPH */}
        <div className="hero-flip-back">
          <img src={photo.image} alt={photo.rawTitle} loading="eager" />
          <div className="hero-back-overlay">
            <div className="back-top-row">
              <span
                className={`strip-card-pill ${
                  isRed ? 'pill-red' : 'pill-black'
                }`}
              >
                {photo.cardRank}
                {photo.cardSuit} · {photo.cardSuitName}
              </span>
              <button
                type="button"
                className="back-zoom-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenLightbox(photo);
                }}
                title="Ver fotografía en pantalla completa"
              >
                Ampliar ↗
              </button>
            </div>

            <div className="back-bottom-info">
              <strong className="back-photo-title">{photo.title}</strong>
              <span className="back-photo-meta">
                {photo.rawTitle} · {photo.exif.puntoF} · {photo.exif.tiempoExposicion} ·{' '}
                {photo.exif.velocidadISO}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
