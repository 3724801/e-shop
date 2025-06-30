import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useGSAPAnimations = () => {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    setTimeout(() => {
      const heroTimeline = gsap.timeline();
      heroTimeline
        .from('.hero-title', {
          duration: 0.6,
          y: 30,
          opacity: 0,
          ease: 'power2.out',
          stagger: 0.1,
          clearProps: 'all'
        })
        .from('.hero-subtitle', {
          duration: 0.5,
          y: 20,
          opacity: 0,
          ease: 'power2.out',
          clearProps: 'all'
        }, '-=0.4')
        .from('.hero-rating', {
          duration: 0.4,
          y: 15,
          opacity: 0,
          ease: 'power2.out',
          clearProps: 'all'
        }, '-=0.3')
        .from('.hero-button', {
          duration: 0.5,
          y: 15,
          opacity: 0,
          scale: 0.95,
          ease: 'power2.out',
          clearProps: 'all'
        }, '-=0.2')
        .from('.hero-image', {
          duration: 0.6,
          x: 30,
          opacity: 0,
          ease: 'power2.out',
          clearProps: 'all'
        }, '-=0.5')
        .from('.hero-badge', {
          duration: 0.3,
          scale: 0,
          ease: 'back.out(1.7)',
          clearProps: 'all'
        }, '-=0.3');
    }, 0);

    ScrollTrigger.create({
      trigger: '.categories-section',
      start: 'top 85%',
      onEnter: () => {
        gsap.from('.category-title', {
          duration: 0.5,
          y: 20,
          opacity: 0,
          ease: 'power2.out',
          clearProps: 'all'
        });
        gsap.from('.category-card', {
          duration: 0.5,
          y: 30,
          opacity: 0,
          stagger: 0.1,
          ease: 'power2.out',
          delay: 0.2,
          clearProps: 'all'
        });
      }
    });

    ScrollTrigger.create({
      trigger: '.featured-section',
      start: 'top 85%',
      onEnter: () => {
        gsap.from('.featured-title', {
          duration: 0.5,
          y: 20,
          opacity: 0,
          ease: 'power2.out',
          clearProps: 'all'
        });
        gsap.from('.product-card', {
          duration: 0.5,
          y: 30,
          opacity: 0,
          stagger: 0.08,
          ease: 'power2.out',
          delay: 0.2,
          clearProps: 'all'
        });
      }
    });

    ScrollTrigger.create({
      trigger: '.products-section',
      start: 'top 85%',
      onEnter: () => {
        gsap.from('.products-header', {
          duration: 0.5,
          y: 20,
          opacity: 0,
          ease: 'power2.out',
          clearProps: 'all'
        });
        gsap.from('.product-card', {
          duration: 0.5,
          y: 30,
          opacity: 0,
          stagger: 0.05,
          ease: 'power2.out',
          delay: 0.2,
          clearProps: 'all'
        });
      }
    });

    ScrollTrigger.create({
      trigger: 'footer',
      start: 'top 90%',
      onEnter: () => {
        gsap.from('.footer-content', {
          duration: 0.5,
          y: 20,
          opacity: 0,
          stagger: 0.1,
          ease: 'power2.out',
          clearProps: 'all'
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const animateProductHover = (element: HTMLElement, isEntering: boolean) => {
    const image = element.querySelector('.product-image');
    const quickAdd = element.querySelector('.quick-add-btn');

    if (isEntering) {
      gsap.to(element, {
        duration: 0.2,
        y: -5,
        scale: 1.02,
        boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
        ease: 'power2.out'
      });
      gsap.to(image, {
        duration: 0.3,
        scale: 1.05,
        ease: 'power2.out'
      });
      gsap.to(quickAdd, {
        duration: 0.2,
        opacity: 1,
        scale: 1,
        ease: 'power2.out'
      });
    } else {
      gsap.to(element, {
        duration: 0.2,
        y: 0,
        scale: 1,
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        ease: 'power2.out'
      });
      gsap.to(image, {
        duration: 0.3,
        scale: 1,
        ease: 'power2.out'
      });
      gsap.to(quickAdd, {
        duration: 0.2,
        opacity: 0,
        scale: 0.8,
        ease: 'power2.out'
      });
    }
  };

  const animateCategoryHover = (element: HTMLElement, isEntering: boolean) => {
    const image = element.querySelector('.category-image');

    if (isEntering) {
      gsap.to(element, {
        duration: 0.2,
        scale: 1.03,
        boxShadow: '0 15px 30px rgba(0,0,0,0.2)',
        ease: 'power2.out'
      });
      gsap.to(image, {
        duration: 0.3,
        scale: 1.1,
        ease: 'power2.out'
      });
    } else {
      gsap.to(element, {
        duration: 0.2,
        scale: 1,
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        ease: 'power2.out'
      });
      gsap.to(image, {
        duration: 0.3,
        scale: 1,
        ease: 'power2.out'
      });
    }
  };

  const animateModalOpen = (modalElement: HTMLElement) => {
    const backdrop = modalElement.querySelector('.modal-backdrop');
    const content = modalElement.querySelector('.modal-content');

    gsap.set(modalElement, { display: 'block' });
    gsap.fromTo(backdrop, { opacity: 0 }, { duration: 0.2, opacity: 1, ease: 'power2.out' });
    gsap.fromTo(content, { opacity: 0, scale: 0.9, y: 20 }, {
      duration: 0.3,
      opacity: 1,
      scale: 1,
      y: 0,
      ease: 'power2.out'
    });
  };

  const animateModalClose = (modalElement: HTMLElement, onComplete: () => void) => {
    const backdrop = modalElement.querySelector('.modal-backdrop');
    const content = modalElement.querySelector('.modal-content');

    gsap.to(backdrop, { duration: 0.2, opacity: 0, ease: 'power2.out' });
    gsap.to(content, {
      duration: 0.2,
      opacity: 0,
      scale: 0.9,
      y: 20,
      ease: 'power2.in',
      onComplete: () => {
        gsap.set(modalElement, { display: 'none' });
        onComplete();
      }
    });
  };

  const animateCartOpen = (cartElement: HTMLElement) => {
    const backdrop = cartElement.querySelector('.cart-backdrop');
    const panel = cartElement.querySelector('.cart-panel');

    gsap.set(cartElement, { display: 'block' });
    gsap.fromTo(backdrop, { opacity: 0 }, { duration: 0.2, opacity: 1, ease: 'power2.out' });
    gsap.fromTo(panel, { x: '100%' }, { duration: 0.3, x: '0%', ease: 'power2.out' });
  };

  const animateCartClose = (cartElement: HTMLElement, onComplete: () => void) => {
    const backdrop = cartElement.querySelector('.cart-backdrop');
    const panel = cartElement.querySelector('.cart-panel');

    gsap.to(backdrop, { duration: 0.2, opacity: 0, ease: 'power2.out' });
    gsap.to(panel, {
      duration: 0.3,
      x: '100%',
      ease: 'power2.in',
      onComplete: () => {
        gsap.set(cartElement, { display: 'none' });
        onComplete();
      }
    });
  };

  const animateButtonClick = (buttonElement: HTMLElement) => {
    gsap.to(buttonElement, {
      duration: 0.05,
      scale: 0.95,
      ease: 'power2.out',
      yoyo: true,
      repeat: 1
    });
  };

  const animateLoading = (element: HTMLElement) => {
    gsap.to(element, {
      duration: 1,
      rotation: 360,
      ease: 'none',
      repeat: -1
    });
  };

  const animateStagger = (elements: NodeListOf<Element> | Element[], delay = 0) => {
    gsap.from(elements, {
      duration: 0.5,
      y: 20,
      opacity: 0,
      stagger: 0.05,
      ease: 'power2.out',
      delay
    });
  };

  return {
    animateProductHover,
    animateCategoryHover,
    animateModalOpen,
    animateModalClose,
    animateCartOpen,
    animateCartClose,
    animateButtonClick,
    animateLoading,
    animateStagger
  };
};
