/**
 * Gomery Marketing - Main JavaScript
 * Montgomery, Alabama's Premier Digital Marketing Agency
 */

(function() {
  'use strict';

  // ============================================================
  // DOM Ready
  // ============================================================

  document.addEventListener('DOMContentLoaded', function() {
    initMobileNav();
    initSmoothScroll();
    initHeaderScroll();
    initContactForm();
    initScrollAnimations();
  });

  // ============================================================
  // Mobile Navigation
  // ============================================================

  function initMobileNav() {
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');
    const navOverlay = document.querySelector('.nav-overlay');
    const navLinks = document.querySelectorAll('.nav__link');

    if (!navToggle || !nav) return;

    // Toggle mobile navigation
    navToggle.addEventListener('click', function() {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      toggleNav(!isExpanded);
    });

    // Close nav when clicking overlay
    if (navOverlay) {
      navOverlay.addEventListener('click', function() {
        toggleNav(false);
      });
    }

    // Close nav when clicking a link
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
          toggleNav(false);
        }
      });
    });

    // Close nav on escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && nav.classList.contains('active')) {
        toggleNav(false);
        navToggle.focus();
      }
    });

    // Handle resize
    window.addEventListener('resize', debounce(function() {
      if (window.innerWidth > 768 && nav.classList.contains('active')) {
        toggleNav(false);
      }
    }, 100));

    function toggleNav(open) {
      navToggle.setAttribute('aria-expanded', open);
      nav.classList.toggle('active', open);
      if (navOverlay) {
        navOverlay.classList.toggle('active', open);
      }
      document.body.style.overflow = open ? 'hidden' : '';
    }
  }

  // ============================================================
  // Smooth Scroll for Anchor Links
  // ============================================================

  function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function(link) {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');

        // Skip if it's just "#" or empty
        if (href === '#' || href === '') return;

        const target = document.querySelector(href);

        if (target) {
          e.preventDefault();

          const headerHeight = document.querySelector('.header').offsetHeight;
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });

          // Update URL without jumping
          history.pushState(null, null, href);

          // Set focus for accessibility
          target.setAttribute('tabindex', '-1');
          target.focus({ preventScroll: true });
        }
      });
    });

    // Handle hash in URL on page load
    if (window.location.hash) {
      setTimeout(function() {
        const target = document.querySelector(window.location.hash);
        if (target) {
          const headerHeight = document.querySelector('.header').offsetHeight;
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }

  // ============================================================
  // Header Scroll Effect
  // ============================================================

  function initHeaderScroll() {
    const header = document.querySelector('.header');

    if (!header) return;

    let lastScroll = 0;

    window.addEventListener('scroll', throttle(function() {
      const currentScroll = window.pageYOffset;

      // Add/remove scrolled class for shadow effect
      if (currentScroll > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }

      lastScroll = currentScroll;
    }, 10));
  }

  // ============================================================
  // Contact Form Validation & Submission
  // ============================================================

  function initContactForm() {
    const form = document.getElementById('contactForm');

    if (!form) return;

    const nameInput = form.querySelector('#name');
    const emailInput = form.querySelector('#email');
    const messageInput = form.querySelector('#message');
    const successMessage = document.getElementById('form-success');

    // Real-time validation
    if (nameInput) {
      nameInput.addEventListener('blur', function() {
        validateField(this, 'name');
      });
      nameInput.addEventListener('input', function() {
        clearError(this, 'name');
      });
    }

    if (emailInput) {
      emailInput.addEventListener('blur', function() {
        validateField(this, 'email');
      });
      emailInput.addEventListener('input', function() {
        clearError(this, 'email');
      });
    }

    if (messageInput) {
      messageInput.addEventListener('blur', function() {
        validateField(this, 'message');
      });
      messageInput.addEventListener('input', function() {
        clearError(this, 'message');
      });
    }

    // Form submission
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      // Validate all fields
      const isNameValid = validateField(nameInput, 'name');
      const isEmailValid = validateField(emailInput, 'email');
      const isMessageValid = validateField(messageInput, 'message');

      if (isNameValid && isEmailValid && isMessageValid) {
        // Simulate form submission (replace with actual submission logic)
        submitForm(form);
      } else {
        // Focus first invalid field
        const firstInvalid = form.querySelector('.error');
        if (firstInvalid) {
          firstInvalid.focus();
        }
      }
    });

    function validateField(input, fieldName) {
      if (!input) return true;

      const value = input.value.trim();
      const errorElement = document.getElementById(fieldName + '-error');
      let isValid = true;

      switch (fieldName) {
        case 'name':
          isValid = value.length >= 2;
          break;
        case 'email':
          isValid = isValidEmail(value);
          break;
        case 'message':
          isValid = value.length >= 10;
          break;
      }

      if (!isValid) {
        input.classList.add('error');
        if (errorElement) {
          errorElement.classList.add('visible');
        }
      } else {
        input.classList.remove('error');
        if (errorElement) {
          errorElement.classList.remove('visible');
        }
      }

      return isValid;
    }

    function clearError(input, fieldName) {
      const errorElement = document.getElementById(fieldName + '-error');
      input.classList.remove('error');
      if (errorElement) {
        errorElement.classList.remove('visible');
      }
    }

    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }

    function submitForm(form) {
      const submitButton = form.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;

      // Show loading state
      submitButton.disabled = true;
      submitButton.textContent = 'Sending...';

      // Simulate API call (replace with actual form submission)
      setTimeout(function() {
        // Hide form fields
        const formGroups = form.querySelectorAll('.form-group');
        formGroups.forEach(function(group) {
          group.style.display = 'none';
        });
        submitButton.style.display = 'none';

        // Show success message
        if (successMessage) {
          successMessage.classList.add('visible');
        }

        // Reset form
        form.reset();

        // Optional: Reset after delay
        setTimeout(function() {
          formGroups.forEach(function(group) {
            group.style.display = 'block';
          });
          submitButton.style.display = 'block';
          submitButton.disabled = false;
          submitButton.textContent = originalText;
          if (successMessage) {
            successMessage.classList.remove('visible');
          }
        }, 5000);

      }, 1500);
    }
  }

  // ============================================================
  // Scroll Animations (Intersection Observer)
  // ============================================================

  function initScrollAnimations() {
    // Check for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const animatedElements = document.querySelectorAll('.service-card, .feature, .testimonial-card, .value-card, .team-member');

    if (!animatedElements.length) return;

    // Add initial state
    animatedElements.forEach(function(el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    // Create observer
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry, index) {
        if (entry.isIntersecting) {
          // Add staggered delay
          setTimeout(function() {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, index * 100);

          // Unobserve after animation
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Observe elements
    animatedElements.forEach(function(el) {
      observer.observe(el);
    });
  }

  // ============================================================
  // Utility Functions
  // ============================================================

  /**
   * Debounce function to limit execution rate
   * @param {Function} func - Function to debounce
   * @param {number} wait - Delay in milliseconds
   * @returns {Function}
   */
  function debounce(func, wait) {
    let timeout;
    return function executedFunction() {
      const context = this;
      const args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(function() {
        func.apply(context, args);
      }, wait);
    };
  }

  /**
   * Throttle function to limit execution frequency
   * @param {Function} func - Function to throttle
   * @param {number} limit - Minimum interval in milliseconds
   * @returns {Function}
   */
  function throttle(func, limit) {
    let inThrottle;
    return function() {
      const context = this;
      const args = arguments;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(function() {
          inThrottle = false;
        }, limit);
      }
    };
  }

})();
