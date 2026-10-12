// ============================================================
//  1. REGISTER PLUGIN (once)
// ============================================================
gsap.registerPlugin(ScrollTrigger);

// ============================================================
//  2. LENIS SMOOTH SCROLL
// ============================================================
const lenis = new Lenis({
    duration: 1.2,
    smoothWheel: true,
    touchMultiplier: 1.5,
});

lenis.on('scroll', ScrollTrigger.update);

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// ============================================================
//  3. HERO LOAD ANIMATION (timeline)
// ============================================================
window.addEventListener('load', () => {
    const tl = gsap.timeline();

    tl.from('.reveal-image', {
        opacity: 0,
        scale: 0.95,
        duration: 1.3,
        ease: 'power3.out',
    })
    .from('.eyebrow', {
        opacity: 0,
        y: 20,
        duration: 0.6,
    }, '-=0.9')
    .from('h1', {
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: 'power3.out',
    }, '-=0.5')
    .from('.hero p', {
        opacity: 0,
        y: 25,
        duration: 0.7,
    }, '-=0.5')
    .from('.button', {
        opacity: 0,
        y: 15,
        duration: 0.6,
    }, '-=0.4');
});

// ============================================================
//  4. HERO IMAGE PARALLAX (scrub)
// ============================================================
gsap.to('.hero-right img', {
    y: 120,
    ease: 'none',
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
    },
});

// ============================================================
//  5. ABOUT SECTION ANIMATIONS
// ============================================================
gsap.from('.about-image', {
    opacity: 0,
    x: -40,
    duration: 1.2,
    ease: 'power3.out',
    scrollTrigger: {
        trigger: '.about',
        start: 'top 75%',
    },
});

gsap.from('.about-content', {
    opacity: 0,
    x: 40,
    duration: 1.2,
    ease: 'power3.out',
    scrollTrigger: {
        trigger: '.about',
        start: 'top 75%',
    },
});

// ============================================================
//  6. HOW SECTION ANIMATIONS
// ============================================================
gsap.from('.how-header', {
    opacity: 0,
    y: 40,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
        trigger: '.how',
        start: 'top 80%',
    },
});

gsap.from('.how-card', {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out',
    stagger: 0.15,
    scrollTrigger: {
        trigger: '.how',
        start: 'top 70%',
    },
});

// ============================================================
//  7. CONSULTATION SECTION ANIMATIONS
// ============================================================
gsap.from('.consultation-image img', {
    opacity: 0,
    scale: 1.08,
    duration: 1.5,
    ease: 'power3.out',
    scrollTrigger: {
        trigger: '.consultation',
        start: 'top 75%',
    },
});

gsap.from('.consultation-small', {
    opacity: 0,
    y: 40,
    duration: 0.8,
    scrollTrigger: {
        trigger: '.consultation',
        start: 'top 70%',
    },
});

gsap.from('.consultation-title', {
    opacity: 0,
    y: 80,
    duration: 1.2,
    ease: 'power3.out',
    scrollTrigger: {
        trigger: '.consultation',
        start: 'top 65%',
    },
});

gsap.from('.consultation-text', {
    opacity: 0,
    y: 40,
    duration: 1,
    delay: 0.2,
    scrollTrigger: {
        trigger: '.consultation',
        start: 'top 60%',
    },
});

// ============================================================
//  8. FAQ SECTION ANIMATIONS
// ============================================================
gsap.from('.faq-header', {
    opacity: 0,
    y: 40,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
        trigger: '.faq',
        start: 'top 80%',
    },
});

gsap.from('.faq-item', {
    opacity: 0,
    y: 50,
    duration: 0.9,
    ease: 'power3.out',
    stagger: 0.12,
    scrollTrigger: {
        trigger: '.faq',
        start: 'top 70%',
    },
});

// ============================================================
//  9. CONTACT SECTION ANIMATIONS
// ============================================================
gsap.from('.contact-title', {
    opacity: 0,
    y: 40,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
        trigger: '.contact',
        start: 'top 80%',
    },
});

gsap.from('.contact-text', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: 0.15,
    scrollTrigger: {
        trigger: '.contact',
        start: 'top 80%',
    },
});

gsap.from('.contact-buttons', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: 0.3,
    scrollTrigger: {
        trigger: '.contact',
        start: 'top 80%',
    },
});

gsap.from('.contact-note', {
    opacity: 0,
    y: 20,
    duration: 0.8,
    delay: 0.4,
    scrollTrigger: {
        trigger: '.contact',
        start: 'top 80%',
    },
});

// ============================================================
//  10. FAQ ACCORDION (с анимацией)
// ============================================================
const faqItems = document.querySelectorAll('.faq-item');
if (faqItems.length) {
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', () => {
                // Закрыть все открытые
                faqItems.forEach(other => {
                    if (other !== item && other.classList.contains('active')) {
                        other.classList.remove('active');
                    }
                });
                // Переключить текущий
                item.classList.toggle('active');
            });
        }
    });
}