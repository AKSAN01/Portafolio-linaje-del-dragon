import React, { useState, useEffect, useCallback } from 'react';
import {
  studentInfo,
  conceptData,
  photosData,
  storySection,
} from './data/portfolioData';
import {
  OrientalDragonEmblem,
  PokerCardBadge,
  HeroFlipCard,
} from './components/DragonDecor';
import { LightingDiagram } from './components/LightingDiagram';
import './App.css';

export function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [introExiting, setIntroExiting] = useState(false);
  const [activeSchemaTab, setActiveSchemaTab] = useState('8091');
  const [showAllSchemas, setShowAllSchemas] = useState(false);
  const [lightboxPhoto, setLightboxPhoto] = useState(null);
  const [flippedCards, setFlippedCards] = useState({});

  const enterPortfolio = useCallback(() => {
    if (introExiting) return;
    setIntroExiting(true);
    setTimeout(() => {
      setShowIntro(false);
      setIntroExiting(false);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 750);
  }, [introExiting]);

  const replayIntro = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setIntroExiting(false);
    setShowIntro(true);
  };

  const toggleCardFlip = (id) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const allCardsFlipped = photosData.every((p) => flippedCards[p.id]);
  const toggleAllCards = () => {
    if (allCardsFlipped) {
      setFlippedCards({});
    } else {
      const next = {};
      photosData.forEach((p) => {
        next[p.id] = true;
      });
      setFlippedCards(next);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (showIntro && (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown')) {
        e.preventDefault();
        enterPortfolio();
        return;
      }
      if (e.key === 'Escape' && lightboxPhoto) {
        setLightboxPhoto(null);
      }
      if (lightboxPhoto && (e.key === 'ArrowRight' || e.key === 'ArrowLeft')) {
        const currentIndex = photosData.findIndex((p) => p.id === lightboxPhoto.id);
        if (e.key === 'ArrowRight') {
          const next = photosData[(currentIndex + 1) % photosData.length];
          setLightboxPhoto(next);
        } else {
          const prev =
            photosData[(currentIndex - 1 + photosData.length) % photosData.length];
          setLightboxPhoto(prev);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxPhoto, showIntro, enterPortfolio]);

  const currentSchemaPhoto =
    photosData.find((p) => p.id === activeSchemaTab) || photosData[0];

  return (
    <div className={`portfolio-app ${showIntro ? 'intro-locked' : 'intro-unlocked'}`}>
      {/* =========================================================
          PANTALLA DE ENTRADA CINEMÁTICA (INTRO SPLASH)
         ========================================================= */}
      {showIntro && (
        <div
          className={`intro-splash-screen ${introExiting ? 'is-exiting' : ''}`}
          onWheel={(e) => {
            if (e.deltaY > 25) enterPortfolio();
          }}
        >
          <div className="intro-ambient-glow" aria-hidden="true" />
          <div className="intro-cyber-lines" aria-hidden="true" />

          {/* Corner HUD Brackets */}
          <div className="intro-hud-corner hud-tl" aria-hidden="true">
            <span>SYS // 2026</span>
          </div>
          <div className="intro-hud-corner hud-tr" aria-hidden="true">
            <span>CANON EOS REBEL T3i · f/5.6</span>
          </div>
          <div className="intro-hud-corner hud-bl" aria-hidden="true">
            <span>3456 × 2304 PX · sRGB</span>
          </div>
          <div className="intro-hud-corner hud-br" aria-hidden="true">
            <span>10♦ · Q♥ · K♣ · A♠</span>
          </div>

          <div className="intro-center-stage">
            <div className="intro-dragon-wrap">
              <OrientalDragonEmblem size={175} />
            </div>

            <p className="intro-kicker">{studentInfo.seriesTagline}</p>

            <h1 className="intro-giant-title">{studentInfo.seriesTitle}</h1>

            <p className="intro-subtitle">{studentInfo.seriesSubtitle}</p>

            {/* Fanned 4 Poker Cards Preview */}
            <div className="intro-fanned-cards" aria-hidden="true">
              {photosData.map((p, i) => (
                <div key={p.id} className={`intro-fan-item fan-${i + 1}`}>
                  <PokerCardBadge
                    rank={p.cardRank}
                    suit={p.cardSuit}
                    color={p.cardColor}
                  />
                </div>
              ))}
            </div>

            <button
              type="button"
              className="intro-enter-btn"
              onClick={enterPortfolio}
            >
              <span>Entrar al Portafolio</span>
              <span className="enter-arrow">↓</span>
            </button>

            <span className="intro-hint-text">
              Presiona el botón, Enter o desliza hacia abajo para continuar
            </span>
          </div>
        </div>
      )}

      {/* Ambient Background Layers */}
      <div className="ambient-bg" aria-hidden="true">
        <div className="ambient-crimson-orb orb-1" />
        <div className="ambient-crimson-orb orb-2" />
        <div className="cyber-grid-overlay" />
      </div>

      {/* Sticky Top Navigation */}
      <header className="top-navbar">
        <div className="navbar-inner">
          <a href="#portada" className="brand-link">
            <span className="brand-sun-dot" />
            <div className="brand-text">
              <span className="brand-title">LINAJE DEL DRAGÓN</span>
              <span className="brand-meta">
                S. VARGAS · 2024120044 · GR84
              </span>
            </div>
          </a>

          <nav className="nav-links" aria-label="Secciones del portafolio">
            <a href="#portada">01 Portada</a>
            <a href="#concepto">02 Concepto</a>
            <a href="#obras">03 Fotografías</a>
            <a href="#esquemas">04 Esquemas y Fichas</a>
            <a href="#historia">05 Historia</a>
            <a href="#estudiante">06 Entrega</a>
          </nav>

          <div className="navbar-suits">
            <span className="suit-red" aria-hidden="true">10♦</span>
            <span className="suit-red" aria-hidden="true">Q♥</span>
            <span className="suit-ivory" aria-hidden="true">K♣</span>
            <span className="suit-ivory" aria-hidden="true">A♠</span>
            <button
              type="button"
              className="btn-replay-intro"
              onClick={replayIntro}
              title="Volver a ver la portada de entrada"
            >
              Intro ↑
            </button>
          </div>
        </div>
      </header>

      <main className="portfolio-main">
        {/* =========================================================
            SECCIÓN 01 — PORTADA (Inspirada en la Pág. 1 del PDF)
           ========================================================= */}
        <section id="portada" className="pdf-sheet hero-sheet">
          <div className="sheet-top-bar">
            <span className="tech-code">SYS // COMPOSICIÓN FOTOGRÁFICA · PORTAFOLIO 2026</span>
            <div className="top-bar-right-actions">
              <span className="tech-code">
                PASA EL CURSOR O PRESIONA CADA CARTA PARA REVELAR LA FOTO
              </span>
              <button
                type="button"
                className="btn-flip-all"
                onClick={toggleAllCards}
              >
                {allCardsFlipped ? 'Cubrir cartas 🎴' : 'Revelar todas ↻'}
              </button>
            </div>
          </div>

          {/* 4-Photo Interactive 3D Poker Card Flip Strip */}
          <div className="hero-strip-grid">
            {photosData.map((photo) => (
              <HeroFlipCard
                key={photo.id}
                photo={photo}
                isFlipped={Boolean(flippedCards[photo.id])}
                onToggleFlip={toggleCardFlip}
                onOpenLightbox={setLightboxPhoto}
              />
            ))}
          </div>

          {/* Hero Title + Oriental Dragon Emblem */}
          <div className="hero-center-block">
            <div className="hero-title-col">
              <p className="spaced-kicker">{studentInfo.seriesTagline}</p>
              <h1 className="editorial-hero-title">
                {studentInfo.seriesTitle}
              </h1>
              <p className="editorial-hero-subtitle">
                {studentInfo.seriesSubtitle}
              </p>
              <div className="hero-Quick-pills">
                <a href="#obras" className="btn-crimson">
                  Explorar Serie Fotográfica
                </a>
                <a href="#esquemas" className="btn-outline-tech">
                  Ver Fichas Técnicas y EXIF
                </a>
              </div>
            </div>

            <div className="hero-emblem-col">
              <OrientalDragonEmblem size={200} className="dragon-spin-slow" />
            </div>
          </div>

          {/* Divider & Student Metadata Footer (Exact match to Page 1 of PDF) */}
          <div className="sheet-divider" />

          <div className="student-meta-grid">
            <div className="meta-block meta-block-wide">
              <span className="meta-label">E S T U D I A N T E</span>
              <div className="meta-student-row">
                <strong className="meta-value-lg">{studentInfo.name}</strong>
                <span className="meta-code-badge">
                  Código <strong>{studentInfo.code}</strong>
                </span>
              </div>
            </div>

            <div className="meta-block">
              <span className="meta-label">A S I G N A T U R A</span>
              <strong className="meta-value">{studentInfo.course}</strong>
            </div>

            <div className="meta-block">
              <span className="meta-label">G R U P O &nbsp; / &nbsp; M O D A L I D A D</span>
              <strong className="meta-value">{studentInfo.group}</strong>
            </div>

            <div className="meta-block">
              <span className="meta-label">S E R I E &nbsp; / &nbsp; C Á M A R A</span>
              <strong className="meta-value">4 Capturas · Canon EOS REBEL T3i</strong>
            </div>
          </div>

          <div className="sheet-footer">
            <span>
              {studentInfo.course} · Portafolio Digital · Estética Tecnológica, Póker y Dragones Orientales
            </span>
            <span className="sheet-page-num">01</span>
          </div>
        </section>

        {/* =========================================================
            SECCIÓN 02 — CONCEPTO GENERAL E INTENCIÓN NARRATIVA (Pág. 2 PDF)
           ========================================================= */}
        <section id="concepto" className="pdf-sheet">
          <p className="spaced-kicker">{conceptData.sectionLabel}</p>
          <h2 className="editorial-section-title">{conceptData.title}</h2>

          <div className="concept-two-col">
            <div className="concept-prose">
              {conceptData.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}

              <div className="concept-reference-box">
                <div className="ref-accent-bar" />
                <p>{conceptData.reference}</p>
              </div>
            </div>

            <div className="concept-cards-stack">
              {photosData.map((photo) => (
                <article
                  key={photo.id}
                  className="narrative-stage-card"
                  onClick={() => setLightboxPhoto(photo)}
                >
                  <div className="stage-thumb-wrap">
                    <img src={photo.image} alt={photo.rawTitle} />
                    <span className="stage-thumb-id">#{photo.id}</span>
                  </div>
                  <div className="stage-card-body">
                    <div className="stage-card-header">
                      <span className="stage-kicker">
                        {photo.stageShort} · {photo.rawTitle}
                      </span>
                      <span
                        className={`suit-mini-tag ${
                          photo.cardColor === 'red' ? 'suit-red' : 'suit-ivory'
                        }`}
                      >
                        {photo.cardRank}
                        {photo.cardSuit}
                      </span>
                    </div>
                    <h3 className="stage-card-title">{photo.title}</h3>
                    <p className="stage-card-desc">{photo.narrativeSummary}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="sheet-footer">
            <span>LINAJE DEL DRAGÓN · Concepto e Intención Narrativa</span>
            <span className="sheet-page-num">02</span>
          </div>
        </section>

        {/* =========================================================
            SECCIÓN 03 — LAS 4 FOTOGRAFÍAS EN GRAN FORMATO (Págs. 3-5 PDF)
           ========================================================= */}
        <div id="obras" className="photos-showcase-container">
          {photosData.map((photo, index) => (
            <section key={photo.id} className="pdf-sheet photo-full-sheet">
              <div className="photo-sheet-top">
                <span className="spaced-kicker">{photo.stageLabel}</span>
                <span className="tech-code">
                  {photo.rawTitle} · {photo.fileCode}
                </span>
              </div>

              <div
                className="photo-frame-large"
                onClick={() => setLightboxPhoto(photo)}
              >
                <img src={photo.image} alt={photo.rawTitle} />
                <button
                  type="button"
                  className="photo-zoom-trigger"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxPhoto(photo);
                  }}
                >
                  Ampliar 3456 × 2304 px ↗
                </button>
              </div>

              <div className="photo-caption-bar">
                <div className="caption-left">
                  <PokerCardBadge
                    rank={photo.cardRank}
                    suit={photo.cardSuit}
                    color={photo.cardColor}
                  />
                  <div>
                    <div className="caption-kicker">
                      {photo.rawTitle.toUpperCase()} · NAIPE {photo.cardRank}
                      {photo.cardSuit} ({photo.cardSuitName.toUpperCase()})
                    </div>
                    <h2 className="caption-title">{photo.title}</h2>
                    <p className="caption-subtitle">{photo.subtitle}</p>
                  </div>
                </div>

                <div className="caption-exif-strip">
                  <div className="exif-chip">
                    <span className="chip-label">CÁMARA</span>
                    <span className="chip-val">{photo.exif.modeloCamara}</span>
                  </div>
                  <div className="exif-chip">
                    <span className="chip-label">PUNTO F</span>
                    <span className="chip-val">{photo.exif.puntoF}</span>
                  </div>
                  <div className="exif-chip">
                    <span className="chip-label">EXPOSICIÓN</span>
                    <span className="chip-val">{photo.exif.tiempoExposicion}</span>
                  </div>
                  <div className="exif-chip">
                    <span className="chip-label">VELOCIDAD ISO</span>
                    <span className="chip-val">{photo.exif.velocidadISO}</span>
                  </div>
                  <div className="exif-chip">
                    <span className="chip-label">FOCAL</span>
                    <span className="chip-val">
                      {photo.exif.distanciaFocal ===
                      'No completamente visible en la captura.'
                        ? 'No visible'
                        : photo.exif.distanciaFocal}
                    </span>
                  </div>
                  <div className="exif-chip">
                    <span className="chip-label">DIMENSIONES</span>
                    <span className="chip-val">{photo.exif.dimensiones}</span>
                  </div>
                </div>
              </div>

              <div className="sheet-footer">
                <span>
                  LINAJE DEL DRAGÓN · Fotografía {photo.numberRoman} ({photo.rawTitle})
                </span>
                <span className="sheet-page-num">0{index + 3}</span>
              </div>
            </section>
          ))}
        </div>

        {/* =========================================================
            SECCIÓN 04 — ESQUEMA DE ILUMINACIÓN Y FICHA TÉCNICA EXIF (Págs. 7-9 PDF)
           ========================================================= */}
        <section id="esquemas" className="pdf-sheet schema-sheet">
          <div className="schema-top-controls">
            <div>
              <p className="spaced-kicker">
                E S Q U E M A &nbsp; D E &nbsp; I L U M I N A C I Ó N &nbsp; Y &nbsp; F I C H A &nbsp; T É C N I C A &nbsp; EXIF
              </p>
              <h2 className="editorial-section-title">
                Análisis Técnico por Captura
              </h2>
            </div>

            <div className="schema-mode-actions">
              <div className="schema-tabs" role="tablist">
                {photosData.map((photo) => (
                  <button
                    key={photo.id}
                    type="button"
                    role="tab"
                    aria-selected={!showAllSchemas && activeSchemaTab === photo.id}
                    className={`schema-tab-btn ${
                      !showAllSchemas && activeSchemaTab === photo.id ? 'active' : ''
                    }`}
                    onClick={() => {
                      setShowAllSchemas(false);
                      setActiveSchemaTab(photo.id);
                    }}
                  >
                    <span className="tab-suit">
                      {photo.cardRank}
                      {photo.cardSuit}
                    </span>
                    <span>{photo.rawTitle}</span>
                  </button>
                ))}
              </div>
              <button
                type="button"
                className={`btn-toggle-all ${showAllSchemas ? 'active' : ''}`}
                onClick={() => setShowAllSchemas(!showAllSchemas)}
              >
                {showAllSchemas
                  ? 'Ver por pestañas'
                  : 'Desplegar las 4 fichas simultáneamente'}
              </button>
            </div>
          </div>

          {(showAllSchemas ? photosData : [currentSchemaPhoto]).map((photo, idx) => (
            <div key={photo.id} className="schema-detail-block">
              <div className="schema-subtitle-bar">
                <div className="schema-title-pair">
                  <PokerCardBadge
                    rank={photo.cardRank}
                    suit={photo.cardSuit}
                    color={photo.cardColor}
                  />
                  <div>
                    <span className="schema-photo-kicker">
                      {photo.rawTitle.toUpperCase()} · ARCHIVO {photo.fileCode}
                    </span>
                    <h3 className="schema-photo-heading">
                      {photo.title}{' '}
                      <em className="schema-lighting-em">{photo.lightingTitle}</em>
                    </h3>
                  </div>
                </div>
              </div>

              <div className="schema-two-col">
                {/* Left Column: Top & Side Lighting Diagrams (like PDF p. 7-9) */}
                <LightingDiagram photo={photo} />

                {/* Right Column: Thumbnail + Explanation + Full 15-field EXIF Table */}
                <div className="specs-column">
                  <div className="specs-intro-row">
                    <div
                      className="specs-mini-photo"
                      onClick={() => setLightboxPhoto(photo)}
                    >
                      <img src={photo.image} alt={photo.rawTitle} />
                    </div>
                    <div className="specs-intro-text">
                      <p>{photo.lightingSummary}</p>
                      <p className="specs-comp-note">{photo.compositionNotes}</p>
                    </div>
                  </div>

                  <div className="exif-table-wrapper">
                    <table className="pdf-spec-table">
                      <tbody>
                        <tr>
                          <th>Identificador / Foto</th>
                          <td>
                            <strong>{photo.rawTitle}</strong> ({photo.fileCode})
                          </td>
                        </tr>
                        <tr>
                          <th>Dimensiones</th>
                          <td>{photo.exif.dimensiones}</td>
                        </tr>
                        <tr>
                          <th>Ancho</th>
                          <td>{photo.exif.ancho}</td>
                        </tr>
                        <tr>
                          <th>Alto</th>
                          <td>{photo.exif.alto}</td>
                        </tr>
                        <tr>
                          <th>Resolución horizontal</th>
                          <td>{photo.exif.resolucionHorizontal}</td>
                        </tr>
                        <tr>
                          <th>Resolución vertical</th>
                          <td>{photo.exif.resolucionVertical}</td>
                        </tr>
                        <tr>
                          <th>Profundidad en bits</th>
                          <td>{photo.exif.profundidadBits}</td>
                        </tr>
                        <tr>
                          <th>Unidad de resolución</th>
                          <td>{photo.exif.unidadResolucion}</td>
                        </tr>
                        <tr>
                          <th>Representación del color</th>
                          <td>{photo.exif.representacionColor}</td>
                        </tr>
                        <tr>
                          <th>Fabricante de cámara</th>
                          <td>{photo.exif.fabricanteCamara}</td>
                        </tr>
                        <tr>
                          <th>Modelo de cámara</th>
                          <td>
                            <strong>{photo.exif.modeloCamara}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>Punto F (Apertura)</th>
                          <td>
                            <span className="highlight-exif">{photo.exif.puntoF}</span>
                          </td>
                        </tr>
                        <tr>
                          <th>Tiempo de exposición</th>
                          <td>
                            <span className="highlight-exif">
                              {photo.exif.tiempoExposicion}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <th>Velocidad ISO</th>
                          <td>
                            <span className="highlight-exif">
                              {photo.exif.velocidadISO}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <th>Compensación de exposición</th>
                          <td>{photo.exif.compensacionExposicion}</td>
                        </tr>
                        <tr>
                          <th>Distancia focal</th>
                          <td>
                            <span className="highlight-exif">
                              {photo.exif.distanciaFocal}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <th>Esquema de iluminación</th>
                          <td>{photo.lightingTitle}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {showAllSchemas && idx < photosData.length - 1 && (
                <div className="sheet-divider my-divider" />
              )}
            </div>
          ))}

          <div className="sheet-footer">
            <span>
              LINAJE DEL DRAGÓN · Esquema de Iluminación y Ficha Técnica —{' '}
              {showAllSchemas ? '4 Fotografías' : currentSchemaPhoto.rawTitle}
            </span>
            <span className="sheet-page-num">08</span>
          </div>
        </section>

        {/* =========================================================
            SECCIÓN 06 — LA HISTORIA Y FICHA TÉCNICA GENERAL (Pág. 10 PDF)
           ========================================================= */}
        <section id="historia" className="pdf-sheet story-sheet">
          <p className="spaced-kicker">{storySection.sectionLabel}</p>
          <h2 className="editorial-section-title">{storySection.title}</h2>

          <div className="story-two-col">
            <div className="story-text-column">
              <p className="story-main-paragraph">{storySection.text}</p>
              <div className="story-word-counter">
                <span>{storySection.wordCount} palabras</span>
                <span className="suit-divider">♠ · ♦ · ♣ · ♥</span>
              </div>

              {/* Comparative Quick Matrix of the 4 Photos */}
              <div className="comparative-matrix-box">
                <h3 className="matrix-heading">
                  MATRIZ COMPARATIVA DE CAPTURA (EXIF)
                </h3>
                <div className="matrix-scroll">
                  <table className="matrix-table">
                    <thead>
                      <tr>
                        <th>Foto</th>
                        <th>Naipe</th>
                        <th>Punto F</th>
                        <th>Exposición</th>
                        <th>ISO</th>
                        <th>Focal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {photosData.map((p) => (
                        <tr
                          key={p.id}
                          onClick={() => {
                            setShowAllSchemas(false);
                            setActiveSchemaTab(p.id);
                            document
                              .getElementById('esquemas')
                              ?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="matrix-row-clickable"
                        >
                          <td>
                            <strong>{p.rawTitle}</strong>
                          </td>
                          <td>
                            <span
                              className={
                                p.cardColor === 'red' ? 'suit-red' : 'suit-ivory'
                              }
                            >
                              {p.cardRank}
                              {p.cardSuit}
                            </span>
                          </td>
                          <td>{p.exif.puntoF}</td>
                          <td>{p.exif.tiempoExposicion}</td>
                          <td>{p.exif.velocidadISO}</td>
                          <td>
                            {p.exif.distanciaFocal ===
                            'No completamente visible en la captura.'
                              ? 'No visible'
                              : p.exif.distanciaFocal}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="general-specs-column">
              <p className="spaced-kicker mb-sm">
                F I C H A &nbsp; T É C N I C A &nbsp; G E N E R A L
              </p>
              <table className="pdf-spec-table">
                <tbody>
                  {storySection.generalSpecs.map((item, i) => (
                    <tr key={i}>
                      <th>{item.label}</th>
                      <td>{item.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="sheet-footer">
            <span>LINAJE DEL DRAGÓN · Texto y Ficha Técnica General</span>
            <span className="sheet-page-num">09</span>
          </div>
        </section>

        {/* =========================================================
            SECCIÓN 07 — DATOS DE LA ENTREGA / ESTUDIANTE (Pág. 11 PDF)
           ========================================================= */}
        <section id="estudiante" className="pdf-sheet student-closing-sheet">
          <div className="closing-bg-emblem" aria-hidden="true">
            <OrientalDragonEmblem size={320} />
          </div>

          <p className="spaced-kicker">
            D A T O S &nbsp; D E &nbsp; L A &nbsp; E N T R E G A
          </p>
          <h2 className="editorial-section-title">Estudiante</h2>

          <div className="closing-two-col">
            <div className="closing-student-main">
              <h3 className="closing-student-name">{studentInfo.name}</h3>
              <p className="closing-student-code">
                Código estudiantil: <strong>{studentInfo.code}</strong>
              </p>
            </div>

            <div className="closing-details-list">
              <div className="closing-detail-item">
                <span className="meta-label">A S I G N A T U R A</span>
                <p className="closing-detail-val">{studentInfo.course}</p>
              </div>

              <div className="closing-detail-item">
                <span className="meta-label">G R U P O &nbsp; / &nbsp; M O D A L I D A D</span>
                <p className="closing-detail-val">{studentInfo.group}</p>
              </div>

              <div className="closing-detail-item">
                <span className="meta-label">E Q U I P O &nbsp; F O T O G R Á F I C O</span>
                <p className="closing-detail-val">
                  Canon EOS REBEL T3i · 3456 × 2304 px · 72 ppp · 24 bits · sRGB
                </p>
              </div>

              <div className="closing-detail-item">
                <span className="meta-label">T Í T U L O S &nbsp; D E &nbsp; L A &nbsp; S E R I E</span>
                <p className="closing-detail-val">
                  Foto 1 – 8091 (Control) &nbsp;/&nbsp; Foto 2 – 8080 (Teclado) &nbsp;/&nbsp; Foto 3 – 8061 (iPhone y Samsung) &nbsp;/&nbsp; Foto 4 – 8048 (Portátil)
                </p>
              </div>
            </div>
          </div>

          <div className="sheet-footer">
            <span>{studentInfo.footerNote}</span>
            <span className="sheet-page-num">10</span>
          </div>
        </section>
      </main>

      {/* =========================================================
          VISOR DE ALTA RESOLUCIÓN (LIGHTBOX MODAL)
         ========================================================= */}
      {lightboxPhoto && (
        <div
          className="lightbox-backdrop"
          onClick={() => setLightboxPhoto(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightboxPhoto.rawTitle}
        >
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="lightbox-topbar">
              <div className="lightbox-title-group">
                <span
                  className={`suit-mini-tag ${
                    lightboxPhoto.cardColor === 'red' ? 'suit-red' : 'suit-ivory'
                  }`}
                >
                  {lightboxPhoto.cardRank}
                  {lightboxPhoto.cardSuit}
                </span>
                <strong>{lightboxPhoto.rawTitle}</strong>
                <span className="lightbox-sub">— {lightboxPhoto.title}</span>
              </div>
              <button
                type="button"
                className="lightbox-close-btn"
                onClick={() => setLightboxPhoto(null)}
              >
                Cerrar [ESC] ✕
              </button>
            </div>

            <div className="lightbox-img-stage">
              <img src={lightboxPhoto.image} alt={lightboxPhoto.rawTitle} />
            </div>

            <div className="lightbox-bottom-exif">
              <span>
                <strong>Cámara:</strong> {lightboxPhoto.exif.modeloCamara}
              </span>
              <span>
                <strong>Dimensiones:</strong> {lightboxPhoto.exif.dimensiones}
              </span>
              <span>
                <strong>Punto F:</strong> {lightboxPhoto.exif.puntoF}
              </span>
              <span>
                <strong>Exposición:</strong> {lightboxPhoto.exif.tiempoExposicion}
              </span>
              <span>
                <strong>ISO:</strong> {lightboxPhoto.exif.velocidadISO}
              </span>
              <span>
                <strong>Focal:</strong> {lightboxPhoto.exif.distanciaFocal}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
