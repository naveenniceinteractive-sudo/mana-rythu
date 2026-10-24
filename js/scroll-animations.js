// Mana Rythu - Master GSAP & ScrollTrigger Animation Engine (Vanilla JS)

document.addEventListener("DOMContentLoaded", () => {
  // Check if GSAP and ScrollTrigger are loaded
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    console.warn("GSAP or ScrollTrigger CDN not loaded yet.");
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  // Initialize Lenis Smooth Scroll if available
  let lenis = null;
  if (typeof Lenis !== "undefined") {
    lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
  }

  // Global Scroll Progress Bar
  const progressBar = document.getElementById("global-scroll-progress");
  if (progressBar) {
    window.addEventListener("scroll", () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      progressBar.style.width = scrolled + "%";
    });
  }

  // -------------------------------------------------------------
  // 1. HERO SECTION: Seamless Seed Descent toward Soil
  // -------------------------------------------------------------
  const heroSection = document.getElementById("hero");
  const heroSeed = document.getElementById("hero-heritage-seed");
  const heroBg = document.getElementById("hero-bg");

  if (heroSection && heroSeed) {
    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: heroSection,
        start: "top top",
        end: "bottom top",
        scrub: 1.2,
      },
    });

    if (heroBg) {
      heroTl.to(heroBg, { scale: 1.12, y: 70, ease: "none" }, 0);
    }

    heroTl.to(
      heroSeed,
      {
        y: 420,
        rotation: 340,
        scale: 1.2,
        ease: "power1.inOut",
      },
      0
    );
  }

  // -------------------------------------------------------------
  // 2. SEED-TO-PLANT: Seamless Soil Germination & Living Rice Plant Growth
  // -------------------------------------------------------------
  const plantSection = document.getElementById("seed-to-plant");
  if (plantSection) {
    const seedInSoil = document.getElementById("soil-seed-element");
    const soilCrack = document.getElementById("soil-crack-element");
    const rootSystem = document.getElementById("plant-roots-system");
    const sproutShoot = document.getElementById("plant-sprout-shoot");
    const leafPrimary = document.getElementById("plant-leaf-primary");
    const leafSecondary = document.getElementById("plant-leaf-secondary");
    const ricePlantFull = document.getElementById("photoreal-rice-seedling");
    const sunbeams = document.getElementById("plant-sunbeams");
    const dewdrops = document.getElementById("plant-dewdrops");
    const plantTextCard = document.getElementById("plant-text-card");
    const plantBg = document.getElementById("plant-bg-image");

    const plantTl = gsap.timeline({
      scrollTrigger: {
        trigger: plantSection,
        start: "top top",
        end: "+=180%",
        scrub: 1.2,
        pin: true,
        anticipatePin: 1,
      },
    });

    // Background push
    if (plantBg) {
      plantTl.to(plantBg, { scale: 1.18, y: -40, ease: "none" }, 0);
    }

    // Editorial text enters
    if (plantTextCard) {
      plantTl.fromTo(
        plantTextCard,
        { opacity: 0, x: -60 },
        { opacity: 1, x: 0, duration: 0.35, ease: "power2.out" },
        0
      );
    }

    // STAGE 1: Seed settles into underground soil pocket (0% -> 20%)
    if (seedInSoil) {
      plantTl.fromTo(
        seedInSoil,
        { y: -30, scale: 0.9, opacity: 0.8 },
        { y: 0, scale: 1, opacity: 1, duration: 0.25, ease: "none" },
        0
      );
    }

    // STAGE 2: Seed coat splits, fine roots extend into fertile loam (20% -> 40%)
    if (soilCrack) {
      plantTl.to(soilCrack, { opacity: 1, scaleX: 1.3, duration: 0.2 }, 0.2);
    }
    if (rootSystem) {
      plantTl.fromTo(
        rootSystem,
        { scaleY: 0, opacity: 0, transformOrigin: "top center" },
        { scaleY: 1, opacity: 1, duration: 0.35, ease: "power1.out" },
        0.22
      );
    }

    // STAGE 3: Tiny emerald sprout shoot breaks through soil crust (35% -> 60%)
    if (sproutShoot) {
      plantTl.fromTo(
        sproutShoot,
        { scaleY: 0, opacity: 0, transformOrigin: "bottom center" },
        { scaleY: 1, opacity: 1, duration: 0.4, ease: "power1.inOut" },
        0.35
      );
    }

    // STAGE 4: Stem elongates, tender leaves unfold (55% -> 80%)
    if (leafPrimary) {
      plantTl.fromTo(
        leafPrimary,
        { scale: 0, rotation: -25, opacity: 0, transformOrigin: "bottom left" },
        { scale: 1, rotation: 0, opacity: 1, duration: 0.35, ease: "back.out(1.5)" },
        0.55
      );
    }
    if (leafSecondary) {
      plantTl.fromTo(
        leafSecondary,
        { scale: 0, rotation: 30, opacity: 0, transformOrigin: "bottom right" },
        { scale: 1, rotation: 0, opacity: 1, duration: 0.35, ease: "back.out(1.5)" },
        0.62
      );
    }

    // STAGE 5: Seamless transition into photorealistic multi-tillered rice seedling (75% -> 100%)
    if (ricePlantFull) {
      plantTl.fromTo(
        ricePlantFull,
        { opacity: 0, scale: 0.85, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.45, ease: "power2.out" },
        0.72
      );
    }

    // Sunbeams expand and dewdrops glint in morning sunlight
    if (sunbeams) {
      plantTl.fromTo(
        sunbeams,
        { opacity: 0.15, scale: 0.7 },
        { opacity: 0.9, scale: 1.35, duration: 0.6, ease: "power2.out" },
        0.4
      );
    }
    if (dewdrops) {
      plantTl.fromTo(
        dewdrops,
        { opacity: 0, scale: 0.4 },
        { opacity: 1, scale: 1.1, duration: 0.3, ease: "back.out(2)" },
        0.75
      );
    }
  }

  // -------------------------------------------------------------
  // 3. FLYING TOMATO: 3D Flight Arc with Rotation & Badges
  // -------------------------------------------------------------
  const tomatoSection = document.getElementById("flying-tomato");
  if (tomatoSection) {
    const tomatoContainer = document.getElementById("tomato-container");
    const tomatoImg = document.getElementById("tomato-img-rotator");
    const tomatoBg = document.getElementById("tomato-bg-image");
    const tomatoBadge1 = document.getElementById("tomato-badge-1");
    const tomatoBadge2 = document.getElementById("tomato-badge-2");
    const tomatoBadge3 = document.getElementById("tomato-badge-3");

    const tomatoTl = gsap.timeline({
      scrollTrigger: {
        trigger: tomatoSection,
        start: "top top",
        end: "+=130%",
        scrub: 1.1,
        pin: true,
        anticipatePin: 1,
      },
    });

    if (tomatoBg) {
      tomatoTl.to(tomatoBg, { scale: 1.15, y: -30, ease: "none" }, 0);
    }

    if (tomatoContainer) {
      tomatoTl.fromTo(
        tomatoContainer,
        { x: -160, y: 60, scale: 0.85 },
        { x: 260, y: -40, scale: 1.3, duration: 0.8, ease: "power1.inOut" },
        0
      );
    }

    if (tomatoImg) {
      tomatoTl.to(
        tomatoImg,
        { rotation: 360, duration: 1.2, ease: "none" },
        0
      );
    }

    // Popup badges
    if (tomatoBadge1) {
      tomatoTl.fromTo(
        tomatoBadge1,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.25, ease: "back.out(2)" },
        0.35
      );
    }
    if (tomatoBadge2) {
      tomatoTl.fromTo(
        tomatoBadge2,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.25, ease: "back.out(2)" },
        0.5
      );
    }
    if (tomatoBadge3) {
      tomatoTl.fromTo(
        tomatoBadge3,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.25, ease: "back.out(2)" },
        0.65
      );
    }
  }

  // -------------------------------------------------------------
  // 4. FARMER BASKET: Tomato Landing in Bamboo Basket
  // -------------------------------------------------------------
  const basketSection = document.getElementById("farmer-basket");
  if (basketSection) {
    const basketContainer = document.getElementById("bamboo-basket-container");
    const basketTomato = document.getElementById("basket-falling-tomato");
    const basketBg = document.getElementById("basket-bg-image");

    const basketTl = gsap.timeline({
      scrollTrigger: {
        trigger: basketSection,
        start: "top top",
        end: "+=130%",
        scrub: 1.1,
        pin: true,
        anticipatePin: 1,
      },
    });

    if (basketBg) {
      basketTl.to(basketBg, { scale: 1.15, y: -30, ease: "none" }, 0);
    }

    if (basketContainer) {
      basketTl.fromTo(
        basketContainer,
        { y: 220, opacity: 0, scale: 0.8 },
        { y: 0, opacity: 1, scale: 1, duration: 0.65, ease: "back.out(1.4)" },
        0.1
      );
    }

    if (basketTomato) {
      basketTl.fromTo(
        basketTomato,
        { x: -220, y: -260, scale: 1.4, rotation: -60, opacity: 0 },
        { x: 0, y: 0, scale: 0.75, rotation: 0, opacity: 1, duration: 0.7, ease: "power2.inOut" },
        0.25
      );
    }

    if (basketContainer) {
      basketTl.to(
        basketContainer,
        { y: -20, scale: 1.05, duration: 0.35, ease: "power1.inOut" },
        0.85
      );
    }
  }

  // -------------------------------------------------------------
  // 5. REALISTIC DELIVERY VAN JOURNEY & DOORSTEP HANDOVER
  // -------------------------------------------------------------
  const deliverySection = document.getElementById("delivery-journey");
  if (deliverySection) {
    const vanContainer = document.getElementById("realistic-van-container");
    const wheelFront = document.getElementById("van-wheel-front");
    const wheelBack = document.getElementById("van-wheel-back");
    const vanShadow = document.getElementById("van-ground-shadow");
    const deliveryPerson = document.getElementById("delivery-driver-person");
    const customerDoor = document.getElementById("customer-front-door");
    const handoverSuccess = document.getElementById("doorstep-handover-modal");
    const roadBg = document.getElementById("delivery-road-bg");
    const telemetryPill = document.getElementById("delivery-telemetry-pill");

    const deliveryTl = gsap.timeline({
      scrollTrigger: {
        trigger: deliverySection,
        start: "top top",
        end: "+=260%",
        scrub: 1.2,
        pin: true,
        anticipatePin: 1,
      },
    });

    // 1. Road Camera Pan & Zoom
    if (roadBg) {
      deliveryTl.to(roadBg, { x: -80, scale: 1.15, ease: "none" }, 0);
    }

    // 2. Van driving along country asphalt road with wheels rotating
    // Van moves from left to customer home driveway (0% -> 45%)
    if (vanContainer) {
      deliveryTl.fromTo(
        vanContainer,
        { x: -520, y: 0 },
        { x: 120, y: 0, duration: 1.2, ease: "power1.inOut" },
        0
      );
    }

    // Natural wheel rotation strictly based on linear distance traveled
    if (wheelFront && wheelBack) {
      deliveryTl.to(
        [wheelFront, wheelBack],
        { rotation: 1440, duration: 1.2, ease: "power1.inOut" },
        0
      );
    }

    // Ground shadow follows van
    if (vanShadow) {
      deliveryTl.fromTo(
        vanShadow,
        { scaleX: 0.8, opacity: 0.6 },
        { scaleX: 1.1, opacity: 0.9, duration: 1.2, ease: "power1.inOut" },
        0
      );
    }

    // 3. Van slows down smoothly and parks directly at doorstep (45% -> 60%)
    if (telemetryPill) {
      deliveryTl.to(
        telemetryPill,
        { opacity: 1, y: 0, duration: 0.3 },
        0.3
      );
    }

    // 4. Van stops, driver exits vehicle carrying organic produce crate & rice sack (60% -> 80%)
    if (deliveryPerson) {
      deliveryTl.fromTo(
        deliveryPerson,
        { opacity: 0, x: 100, y: 15, scale: 0.85 },
        { opacity: 1, x: 260, y: 0, scale: 1, duration: 0.6, ease: "power1.out" },
        0.58
      );
    }

    // 5. Driver walks up to porch; customer opens door and warmly receives delivery (80% -> 100%)
    if (customerDoor) {
      deliveryTl.fromTo(
        customerDoor,
        { opacity: 0.4, scaleX: 0.9 },
        { opacity: 1, scaleX: 1, duration: 0.4 },
        0.75
      );
    }

    if (handoverSuccess) {
      deliveryTl.fromTo(
        handoverSuccess,
        { opacity: 0, scale: 0.85, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "back.out(1.6)" },
        0.82
      );
    }
  }

  // -------------------------------------------------------------
  // 6. CLOSING CTA: Horizon Sprout Entrance
  // -------------------------------------------------------------
  const closingSection = document.getElementById("closing-cta");
  const closingSprout = document.getElementById("closing-sprout");
  if (closingSection && closingSprout) {
    gsap.fromTo(
      closingSprout,
      { scale: 0.65, y: 50, opacity: 0.4 },
      {
        scale: 1.15,
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: closingSection,
          start: "top 70%",
        },
      }
    );
  }

  // Refresh ScrollTrigger after assets settle
  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 500);
});
