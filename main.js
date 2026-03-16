<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Nivora Presentations</title>
  <meta name="description" content="Presentaciones interactivas con scroll para marcas y propuestas comerciales." />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/shared/css/base.css" />
  <style>
    body {
      min-height: 100vh;
      background:
        radial-gradient(circle at top, rgba(0, 194, 255, 0.12), transparent 30%),
        linear-gradient(180deg, #07111c 0%, #050910 55%, #03060b 100%);
    }
    .landing {
      min-height: 100vh;
      display: grid;
      place-items: center;
      padding: 48px 20px;
    }
    .landing__wrap {
      width: min(1120px, 100%);
      display: grid;
      gap: 32px;
    }
    .landing__hero {
      display: grid;
      gap: 18px;
      max-width: 760px;
    }
    .landing__eyebrow {
      display: inline-flex;
      width: fit-content;
      padding: 8px 14px;
      border: 1px solid rgba(255,255,255,.14);
      border-radius: 999px;
      color: var(--text-muted);
      background: rgba(255,255,255,.04);
      font-size: .9rem;
    }
    .landing__grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 22px;
    }
    .brand-card {
      position: relative;
      min-height: 280px;
      padding: 28px;
      border-radius: 28px;
      overflow: hidden;
      border: 1px solid rgba(255,255,255,.12);
      background:
        linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.02)),
        radial-gradient(circle at top right, rgba(0, 194, 255, 0.25), transparent 35%),
        #09111c;
      transition: transform .35s ease, border-color .35s ease, box-shadow .35s ease;
    }
    .brand-card:hover {
      transform: translateY(-8px);
      border-color: rgba(0, 194, 255, .55);
      box-shadow: 0 18px 60px rgba(0,0,0,.35);
    }
    .brand-card__badge {
      display: inline-flex;
      padding: 7px 12px;
      border-radius: 999px;
      background: rgba(255,255,255,.08);
      color: var(--text-muted);
      font-size: .85rem;
      margin-bottom: 18px;
    }
    .brand-card h2 {
      font-size: clamp(1.8rem, 3vw, 2.6rem);
      margin-bottom: 8px;
    }
    .brand-card p {
      max-width: 40ch;
      color: var(--text-muted);
      margin-bottom: 24px;
    }
    .brand-card__link {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      color: var(--text-color);
      text-decoration: none;
      font-weight: 700;
    }
    .brand-card__link::after {
      content: '→';
      transition: transform .3s ease;
    }
    .brand-card:hover .brand-card__link::after {
      transform: translateX(6px);
    }
  </style>
</head>
<body>
  <main class="landing">
    <div class="landing__wrap">
      <section class="landing__hero">
        <span class="landing__eyebrow">Presentaciones interactivas · Sitio estático</span>
        <h1>Pitch decks con scroll, animación y estructura multi-marca.</h1>
        <p>Explora propuestas comerciales listas para desplegar en Vercel. Cada presentación vive en su propia ruta, comparte una base visual común y puede personalizar su identidad tocando solo variables CSS y archivos de datos.</p>
      </section>

      <section class="landing__grid">
        <article class="brand-card">
          <span class="brand-card__badge">Nueva presentación</span>
          <h2>Acqua Vitali</h2>
          <p>Servicio de hidratación purificada para empresas, obras, universidades, colegios y eventos, además de insumos y soluciones complementarias.</p>
          <a class="brand-card__link" href="/brands/acqua-vitali/">Ver presentación</a>
        </article>
      </section>
    </div>
  </main>
</body>
</html>
