/* =========================================================
   DREDGE — CONFIGURACIÓN DE ASSETS
   ========================================================= */

const assets = {

  /* Logos */
  logo:
    "https://ext.same-assets.com/1579239493/4083411106.png",

  navLogo:
    "https://ext.same-assets.com/1579239493/3874027479.png",

  /* Fondo principal HERO + ABOUT */
  keyArt:
    "https://static.wixstatic.com/media/7cae03_dcaacfc85b10486aa513c65bb1dc34d0~mv2.png/v1/fill/w_980,h_2035,al_c,q_95,usm_0.66_1.00_0.01,enc_avif,quality_auto/7cae03_dcaacfc85b10486aa513c65bb1dc34d0~mv2.png",

  heroBoat: null,

  /* Expansión The Iron Rig */
  ironRig:
    "https://ext.same-assets.com/1579239493/2131255047.svg",


  /* Sección de características */

  featureBg:
    "https://ext.same-assets.com/1579239493/4198368407.png",

  bubbles:
    "https://ext.same-assets.com/1579239493/3026245881.png",

  musicBox:
    "https://ext.same-assets.com/1579239493/3684865074.png",

  fish:
    "https://ext.same-assets.com/1579239493/1291696676.png",

  fishmonger:
    "https://ext.same-assets.com/1579239493/3157905305.png",


  /* Imágenes de la galería */

  media: [
    "https://ext.same-assets.com/1579239493/2486222064.jpeg",
    "https://ext.same-assets.com/1579239493/2674522898.jpeg",
    "https://ext.same-assets.com/1579239493/44798036.jpeg",
    "https://ext.same-assets.com/1579239493/2070933264.jpeg"
  ],


  /* Decoración Media */

  brush:
    "https://ext.same-assets.com/1579239493/3169069815.png",

  mediaDecor:
    "https://ext.same-assets.com/1579239493/3779530014.png",


  /* Tienda */

  dredgeStoreLogo:
    "https://ext.same-assets.com/1579239493/1526677388.png",

  xboxBox:
    "https://ext.same-assets.com/1579239493/3496182274.png",

  psBox:
    "https://ext.same-assets.com/1579239493/1457127371.png",

  switchBox:
    "https://ext.same-assets.com/1579239493/1293813360.png",

  octopus:
    "https://ext.same-assets.com/1579239493/3795121910.png",

  steamBg:
    "https://ext.same-assets.com/1579239493/3119331980.jpeg",


  /* Logos del footer */

  team17:
    "https://ext.same-assets.com/1579239493/318615010.png",

  blackSalt:
    "https://ext.same-assets.com/1579239493/1890297382.png",

  pegi:
    "https://ext.same-assets.com/1579239493/230185467.png",


  /* Iconos */

  steam:
      "./images/steam-logo.png",

  itchio:
      "./images/itchio-logo.png",

  discord:
      "./images/discord-logo.png",

  facebook:
      "./images/  facebook-logo.png",

  x:
      "./images/x-logo.png"
};


/* =========================================================
   ENLACES DE LAS PLATAFORMAS
   ========================================================= */

const storeLinks = [
  [
    assets.steam,
    "Steam",
    "https://store.steampowered.com/app/1562430/DREDGE/"
  ],
  [
    assets.itchio,
    "Itch.io",
    "https://dredgegame.itch.io/dredge"
  ]
];


/* =========================================================
   RESEÑAS
   ========================================================= */

const reviews = [
  ["Kept me hooked", "The Guardian"],
  ["Your next indie obsession ...", "VG247"],
  [
    "... the scariest fishing game you'll ever play",
    "GamesRadar"
  ],
  [
    "One of the most exciting indie titles in years",
    "Bloody Disgusting"
  ],
  [
    "a fantastic horror-tinged adventure ...",
    "Screen Rant"
  ],
  [
    "... already feels like one of this year's greatest indie horrors ...",
    "Rock Paper Shotgun"
  ]
];


/* =========================================================
   CONTENEDOR PRINCIPAL
   ========================================================= */

const app = document.querySelector("#app");

if (!app) {
  throw new Error("App root not found");
}


/* =========================================================
   ESTRUCTURA HTML
   ========================================================= */

app.innerHTML = `

  <div class="grain" aria-hidden="true"></div>


  <!-- =====================================================
       HEADER
       ===================================================== -->

  <header class="site-header" data-header>

    <a
      class="brand"
      href="#top"
      aria-label="DREDGE home"
    >
      <img
        src="${assets.navLogo}"
        alt="DREDGE"
      />
    </a>


    <nav
      class="desktop-nav"
      aria-label="Main navigation"
    >
      <a href="#about">ABOUT</a>
      <a href="#features">FEATURES</a>
      <a href="#media">MEDIA</a>
      <a href="#stores">STORES</a>
    </nav>


    <nav class="expansion-nav" aria-label="Expansions">
      <a href="#features">SECCIÓN 01</a>
      <a href="#iron-rig">SECCIÓN 02</a>
      <a href="#stores">SECCIÓN 03</a>
    </nav>


    <div class="header-actions">
      <!--
      <button
        class="language"
        type="button"
        aria-label="Change language"
      >
        EN
      </button>
  -->
      <a class="buy-link" href="#stores">
        <span>JUEGA YA</span>
      </a>

    </div>


    <button
      class="menu-toggle"
      type="button"
      aria-label="Open navigation"
      aria-expanded="false"
    >
      <i></i>
      <i></i>
      <i></i>
    </button>

  </header>


  <!-- =====================================================
       MENÚ MÓVIL
       ===================================================== -->

  <div
    class="mobile-menu"
    aria-hidden="true"
  >

    <nav>

      <a href="#about">ABOUT</a>
      <a href="#features">FEATURES</a>
      <a href="#media">MEDIA</a>
      <a href="#stores">STORES</a>
      <a href="#iron-rig">THE IRON RIG</a>

    </nav>

  </div>


  <!-- =====================================================
       CONTENIDO PRINCIPAL
       ===================================================== -->

  <main id="top">


    <!-- ===================================================
         HERO + ABOUT
         =================================================== -->

    <div class="hero-about-background">


      <!-- =================================================
           HERO
           ================================================= -->

      <section
        class="hero"
        aria-label="DREDGE The Iron Rig"
      >

        <div
          class="hero-backdrop"
          data-parallax="0.12"
        ></div>


        <!-- Faro -->

        <div
          class="lighthouse-beam"
          aria-hidden="true"
        ></div>


        <!-- Niebla -->

        <div class="fog fog-one"></div>
        <div class="fog fog-two"></div>


        <!-- Barco -->

        ${
          assets.heroBoat
            ? `
              <img
                class="hero-boat"
                src="${assets.heroBoat}"
                alt="Fishing boat facing the Iron Rig"
                data-parallax="0.05"
              />
            `
            : ""
        }


        <!-- Contenido -->

        <div class="hero-copy reveal">

          <img
            class="hero-logo"
            src="${assets.logo}"
            alt="DREDGE"
          />


          <div
            class="iron-rig-mark"
            aria-label="The Iron Rig"
          >

            <img
              src="${assets.ironRig}"
              alt="The Iron Rig"
            />

          </div>


          <a
            class="hero-announcement"
            href="#iron-rig"
          >
            THE IRON RIG

            <em>
              available now!
            </em>
          </a>


          <div class="hero-buttons">

            <button
              class="scratch-button play-trailer"
              type="button"
            >
              <span class="play-icon">
                ▶
              </span>

              TRAILER
            </button>
            <a class="scratch-button light" href="#iron-rig">MOSTRAR MÁS</a>
          </div>
        </div>

        <!-- Plataformas -->
        <div class="store-strip">

          ${storeLinks
            .map(
              ([icon, label, url]) => `
                <a
                  href="${url}"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="${icon}"
                    alt="${label}"
                  />
                </a>
              `
            )
            .join("")}

        </div>        
      </section>



      <!-- =================================================
           ABOUT
           ================================================= -->

      <section
        class="about torn-top"
        id="about"
      >

        <div class="section-tag reveal">

          <span>01</span>ACERCA DE</div>


        <div class="about-grid">


          <!-- Título -->

          <div class="about-title reveal">

            <p>
              A SINISTER
            </p>

            <h1>
              DIVE INTO<br />
              THE DEPTHS
            </h1>

          </div>


          <!-- Texto -->
          <div class="about-copy reveal">

            <p>
              DREDGE is a single-player fishing adventure with
              a sinister undercurrent. Sell your catch, upgrade
              your boat, and dredge the depths for long-buried secrets.
            </p>

            <p>
              Explore a mysterious archipelago and discover why
              some things are best left forgotten.
            </p>

            <!-- Redes -->
            <div class="socials">

              <small>ENCUÉNTRANOS EN REDES SOCIALES</small>

              <div>

                <a
                  href="https://discord.com/invite/s9j9JCydzN"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="${assets.discord}"
                    alt="Discord"
                  />
                </a>

                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="${assets.facebook}"
                    alt="Facebook"
                  />
                </a>

                <a
                  href="https://twitter.com/BSG_DREDGE"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="${assets.x}"
                    alt="X"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>


        <!--
          La antigua imagen del About se mantiene en el DOM
          por compatibilidad, pero CSS la oculta porque ahora
          el fondo principal ocupa Hero + About.
        -->

        <div class="about-art reveal">
          <img src="${assets.keyArt}" alt="DREDGE boat crossing dangerous waters"/>
        </div>

      </section>
    </div>

    <!-- ===================================================
         FEATURES
         =================================================== -->

    <section
      class="features"
      id="features"
    >

      <img
        class="feature-texture"
        src="${assets.featureBg}"
        alt=""
      />

      <div class="section-tag light-tag reveal">
        <span>02</span>
        CARACTERÍSTICAS
      </div>

      <!-- Feature 1 -->
      <article
        class="feature-card feature-one reveal"
      >

        <div class="feature-number">I</div>
        <h2>PESCA PARA<br />SOBREVIVIR</h2>

        <p>
          Catch more than 125 deep sea denizens and pack them
          into your cargo hold for maximum profit.
        </p>

        <img
          class="fish-art"
          src="${assets.fish}"
          alt="An aberrant deep sea fish"
        />

      </article>

      <!-- Feature 2 -->

      <article
        class="feature-card feature-two reveal"
      >

        <div class="feature-number">II</div>
        <h2>DREDGE THE<br /> DEPTHS</h2>

        <p>
          Scour the sea for valuables and deep-sea curios.
          Who knows what you'll find below the waves?
        </p>

        <img
          class="relic-art"
          src="${assets.musicBox}"
          alt="A music box relic"
        />

      </article>

      <!-- Feature 3 -->

      <article
        class="feature-card feature-three reveal"
      >

        <div class="feature-number">III</div>
        <h2>MEET THE<br />LOCALS</h2>

        <p>
          Get acquainted with each area's curious inhabitants
          and complete quests to unravel their personal stories.
        </p>

        <img
          class="local-art"
          src="${assets.fishmonger}"
          alt="The Fishmonger"
        />

      </article>

      <!-- Burbujas -->

      <img
        class="bubbles"
        src="${assets.bubbles}"
        alt=""
      />

    </section>

    <!-- ===================================================
         MEDIA
         =================================================== -->

    <section class="media torn-top" id="media">

      <div class="section-tag reveal">
        <span>03</span>MEDIA</div>
      <div class="media-heading reveal">
        <p>THE LAST BEACON</p>
        <h2>MEDIA</h2>
      </div>

      <div class="media-stage reveal">

        <button
          class="gallery-arrow prev"
          type="button"
          aria-label="Previous image"
        >
          ←
        </button>

        <figure class="media-frame">
          <img
            src="${assets.media[0]}"
            alt="DREDGE gameplay scene"
            data-gallery-image
          />

          <button
            class="video-play play-trailer"
            type="button"
            aria-label="Play trailer"
          >
            ▶
          </button>

          <figcaption>
            <span data-slide-number>
              01
            </span>
            / 04
          </figcaption>

        </figure>

        <button
          class="gallery-arrow next"
          type="button"
          aria-label="Next image"
        >
          →
        </button>

      </div>

      <div
        class="gallery-dots"
        aria-label="Choose image"
      >

        ${assets.media
          .map(
            (_, index) => `
              <button
                class="${index === 0 ? "active" : ""}"
                data-slide="${index}"
                aria-label="Image ${index + 1}"
              ></button>
            `
          )
          .join("")}

      </div>

      <img
        class="media-brush"
        src="${assets.brush}"
        alt=""
      />

    </section>

    <!-- ===================================================
         REVIEWS
         =================================================== -->

    <section
      class="reviews"
      aria-label="Reviews"
    >
      <img
        class="review-creature"
        src="${assets.mediaDecor}"
        alt=""
      />

      <div class="review-track">

        ${[...reviews, ...reviews]
          .map(
            ([quote, source]) => `
              <blockquote>
                <div class="stars">★★★★★</div>
                <p>“${quote}”</p>
                <cite>${source}</cite>
              </blockquote>
            `
          )
          .join("")}

      </div>

    </section>

    <section
      class="stores torn-top"
      id="stores"
    >

      <div class="section-tag light-tag reveal">

        <span>04</span>TIENDA</div>


      <div class="store-heading reveal">

        <img
          src="${assets.dredgeStoreLogo}"
          alt="DREDGE"
        />

        <h2>¡YA DISPONIBLE<br />EN PC!</h2>

      </div>

      <div class="console-display reveal">

        <img
          class="tentacles"
          src="${assets.octopus}"
          alt=""
        />

        <a
          href="https://www.xbox.com/en-us/games/store/dredge/9p4x5fq6gr63"
          target="_blank"
          rel="noreferrer"
        >

          <img
            src="${assets.xboxBox}"
            alt="DREDGE Xbox edition"
          />

          <span>XBOX</span>

        </a>

        <a
          href="https://store.playstation.com/"
          target="_blank"
          rel="noreferrer"
        >

          <img
            src="${assets.psBox}"
            alt="DREDGE PlayStation edition"
          />

          <span>PLAYSTATION</span>

        </a>

        <a
          href="https://www.nintendo.com/store/products/dredge-switch/"
          target="_blank"
          rel="noreferrer"
        >

          <img
            src="${assets.switchBox}"
            alt="DREDGE Nintendo Switch edition"
          />

          <span>NINTENDO SWITCH</span>

        </a>

      </div>

      <!-- Steam -->

      <article
        class="steam-card reveal"
        style="background-image: url('${assets.steamBg}')"
      >

        <div>

          <p>JUÉGALO YA </p>
          <h3>EN STEAM</h3>

          <a class="scratch-button light" href="https://store.steampowered.com/app/1562430/DREDGE/" target="_blank" rel="noreferrer">          
            VISITAR TIENDA
          </a>
        </div>
      </article>
    </section>

  </main>

  <footer>

    <div class="footer-top">
      <a href="#top">
        <img
          class="footer-logo"
          src="${assets.navLogo}"
          alt="DREDGE"
        />
      </a>

      <div class="partners">

        <img
          src="${assets.team17}"
          alt="Team17"
        />

        <img
          src="${assets.blackSalt}"
          alt="Black Salt Games"
        />

        <img
          src="${assets.pegi}"
          alt="PEGI 12"
        />

      </div>

      <a
        class="back-top"
        href="#top"
      >
        VOLVER AL INICIO ↑
      </a>

    </div>

    <div class="footer-bottom">

      <div>

        <a
          href="https://www.blacksaltgames.com/contact/"
          target="_blank"
          rel="noreferrer"
        >
          CONTÁCTANOS
        </a>

        <a
          href="https://www.dredge.game/press-kit"
          target="_blank"
          rel="noreferrer"
        >
          PRESS KIT
        </a>

        <a
          href="https://www.dredge.game/wallpapers"
          target="_blank"
          rel="noreferrer"
        >
          WALLPAPERS
        </a>

      </div>


      <p>THE LAST BEACON © 2026 ALL RIGHTS RESERVED.<br /></p>

    </div>

  </footer>
  <!-- =====================================================
       MODAL DEL TRAILER
       ===================================================== -->

  <div
    class="trailer-modal"
    role="dialog"
    aria-modal="true"
    aria-label="DREDGE trailer"
    aria-hidden="true"
  >

    <button
      class="modal-close"
      type="button"
      aria-label="Close trailer"
    >
      ×
    </button>


    <div class="video-shell">

      <iframe
        title="DREDGE Official Launch Trailer"
        src=""
        data-src="https://www.youtube.com/embed/s3ws82dj_fA?autoplay=1"
        allow="autoplay; encrypted-media; picture-in-picture"
        allowfullscreen
      ></iframe>

    </div>

  </div>

`;


/* =========================================================
   OPTIMIZACIÓN DE IMÁGENES
   ========================================================= */

const images = document.querySelectorAll("img");

for (const image of images) {

  image.decoding = "async";

  const isHeroImage = image.closest(".hero");
  const isStoreIcon = image.closest(".store-strip");

  if (isHeroImage || isStoreIcon) {
    image.fetchPriority = "high";
  } else {
    image.loading = "lazy";
  }
}


/* =========================================================
   MENÚ MÓVIL
   ========================================================= */

const menuButton =
  document.querySelector(".menu-toggle");

const mobileMenu =
  document.querySelector(".mobile-menu");


const setMenu = (isOpen) => {

  menuButton?.setAttribute(
    "aria-expanded",
    String(isOpen)
  );

  mobileMenu?.setAttribute(
    "aria-hidden",
    String(!isOpen)
  );

  document.body.classList.toggle(
    "menu-open",
    isOpen
  );
};


menuButton?.addEventListener(
  "click",
  () => {

    const isOpen =
      document.body.classList.contains(
        "menu-open"
      );

    setMenu(!isOpen);
  }
);


for (
  const link of
  mobileMenu?.querySelectorAll("a") ?? []
) {

  link.addEventListener(
    "click",
    () => {
      setMenu(false);
    }
  );
}


/* =========================================================
   SCROLL + PARALLAX
   ========================================================= */

const header =
  document.querySelector("[data-header]");

const parallaxElements = [
  ...document.querySelectorAll(
    "[data-parallax]"
  )
];

let scrollTicking = false;


const updateScrollEffects = () => {

  const scrollY = window.scrollY;


  header?.classList.toggle(
    "scrolled",
    scrollY > 40
  );


  const reducedMotion =
    window
      .matchMedia(
        "(prefers-reduced-motion: reduce)"
      )
      .matches;


  if (
    window.innerWidth > 800 &&
    !reducedMotion
  ) {

    for (
      const element of parallaxElements
    ) {

      const speed =
        Number(
          element.dataset.parallax
        );

      element.style.transform =
        `translate3d(0, ${scrollY * speed}px, 0)`;
    }

  }


  scrollTicking = false;
};


window.addEventListener(
  "scroll",
  () => {

    if (scrollTicking) return;

    scrollTicking = true;

    requestAnimationFrame(
      updateScrollEffects
    );
  },
  {
    passive: true
  }
);


updateScrollEffects();


/* =========================================================
   ANIMACIONES REVEAL
   ========================================================= */

const revealObserver =
  new IntersectionObserver(
    (entries) => {

      for (
        const entry of entries
      ) {

        if (!entry.isIntersecting)
          continue;

        entry.target.classList.add(
          "visible"
        );

        revealObserver.unobserve(
          entry.target
        );
      }
    },
    {
      threshold: 0.12
    }
  );


for (
  const element of
  document.querySelectorAll(".reveal")
) {

  revealObserver.observe(element);
}


/* =========================================================
   PAUSAR ANIMACIONES FUERA DE PANTALLA
   ========================================================= */

const animationObserver =
  new IntersectionObserver(
    (entries) => {

      for (
        const entry of entries
      ) {

        entry.target.classList.toggle(
          "is-active",
          entry.isIntersecting
        );
      }
    },
    {
      threshold: 0.05
    }
  );


for (
  const section of
  document.querySelectorAll(
    ".features, .reviews"
  )
) {

  animationObserver.observe(section);
}

/* =========================================================
   GALERÍA
   ========================================================= */

let currentSlide = 0;

const galleryImage =
  document.querySelector(
    "[data-gallery-image]"
  );

const slideNumber =
  document.querySelector(
    "[data-slide-number]"
  );

const galleryDots = [
  ...document.querySelectorAll(
    "[data-slide]"
  )
];

const showSlide = (index) => {

  const totalSlides =
    assets.media.length;

  currentSlide =
    (index + totalSlides) %
    totalSlides;


  if (galleryImage) {

    galleryImage.classList.add(
      "switching"
    );

    window.setTimeout(
      () => {

        galleryImage.src =
          assets.media[currentSlide];

        galleryImage.classList.remove(
          "switching"
        );
      },
      180
    );
  }

  if (slideNumber) {

    slideNumber.textContent =
      String(
        currentSlide + 1
      ).padStart(2, "0");
  }

  for (
    const [index, dot] of
    galleryDots.entries()
  ) {

    dot.classList.toggle(
      "active",
      index === currentSlide
    );
  }
};

document
  .querySelector(
    ".gallery-arrow.prev"
  )
  ?.addEventListener(
    "click",
    () => {
      showSlide(
        currentSlide - 1
      );
    }
  );

document
  .querySelector(
    ".gallery-arrow.next"
  )
  ?.addEventListener(
    "click",
    () => {
      showSlide(
        currentSlide + 1
      );
    }
  );


for (
  const dot of galleryDots
) {

  dot.addEventListener(
    "click",
    () => {

      showSlide(
        Number(
          dot.dataset.slide
        )
      );
    }
  );
}


/* =========================================================
   MODAL DEL TRAILER
   ========================================================= */

const modal =
  document.querySelector(
    ".trailer-modal"
  );

const iframe =
  modal?.querySelector(
    "iframe"
  );

const setModal = (isOpen) => {

  modal?.setAttribute(
    "aria-hidden",
    String(!isOpen)
  );

  document.body.classList.toggle(
    "modal-open",
    isOpen
  );

  if (iframe) {

    iframe.src =
      isOpen
        ? iframe.dataset.src ?? ""
        : "";
  }
};

for (
  const button of
  document.querySelectorAll(
    ".play-trailer"
  )
) {

  button.addEventListener(
    "click",
    () => {
      setModal(true);
    }
  );
}

document
  .querySelector(
    ".modal-close"
  )
  ?.addEventListener(
    "click",
    () => {
      setModal(false);
    }
  );


modal?.addEventListener(
  "click",
  (event) => {

    if (
      event.target === modal
    ) {

      setModal(false);
    }
  }
);


/* =========================================================
   TECLA ESC
   ========================================================= */

document.addEventListener(
  "keydown",
  (event) => {

    if (
      event.key !== "Escape"
    ) {
      return;
    }

    setModal(false);
    setMenu(false);
  }
);