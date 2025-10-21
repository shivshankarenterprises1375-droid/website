document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section, .hero');
    const navToggle = document.querySelector('.nav-toggle');
    const navLinksContainer = document.querySelector('.nav-links');

    function smoothScrollTo(target) {
        const targetPosition = target.offsetTop - 70;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 1000;
        let start = null;

        function animation(currentTime) {
            if (start === null) start = currentTime;
            const timeElapsed = currentTime - start;
            const run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);

            navLinks.forEach(nl => nl.classList.remove('active'));
            this.classList.add('active');

            if (navLinksContainer.classList.contains('active')) {
                navLinksContainer.classList.remove('active');
                navToggle.classList.remove('active');
            }

            smoothScrollTo(targetSection);
        });
    });

    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navLinksContainer.classList.toggle('active');
            this.classList.toggle('active');
        });
    }

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animate');
                }, index * 100);
            }
        });
    }, observerOptions);

    const elementsToAnimate = [
        ...document.querySelectorAll('.section-title'),
        ...document.querySelectorAll('.about-text'),
        ...document.querySelectorAll('.feature'),
        ...document.querySelectorAll('.product-card'),
        ...document.querySelectorAll('.contact-item'),
        document.querySelector('.contact-form-wrapper')
    ].filter(Boolean);

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });

    const productCards = document.querySelectorAll('.product-card');
    const productObserver = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const index = Array.from(productCards).indexOf(entry.target);
                setTimeout(() => {
                    entry.target.classList.add('animate');
                }, index * 100);
            }
        });
    }, observerOptions);

    productCards.forEach(card => {
        productObserver.observe(card);
    });

    let ticking = false;
    window.addEventListener('scroll', function () {
        if (!ticking) {
            requestAnimationFrame(() => {
                let current = '';
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    if (window.pageYOffset >= sectionTop - 100) {
                        current = section.getAttribute('id');
                    }
                });

                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + current) {
                        link.classList.add('active');
                    }
                });
                ticking = false;
            });
            ticking = true;
        }
    });

    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.3)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.pointerEvents = 'none';
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    }

    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        card.addEventListener('click', function() {
            this.style.transform = 'translateY(-10px) scale(1.01)';
            setTimeout(() => {
                this.style.transform = 'translateY(-15px) scale(1.02)';
            }, 150);
        });
    });

    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach((item, index) => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Contact Form Handler
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const submitButton = this.querySelector('.submit-button');
            const buttonText = submitButton.querySelector('.button-text');
            const buttonLoader = submitButton.querySelector('.button-loader');
            
            // Get form data
            const formData = {
                firstName: document.getElementById('firstName').value,
                lastName: document.getElementById('lastName').value,
                email: document.getElementById('email').value,
                company: document.getElementById('company').value || 'Not provided',
                message: document.getElementById('message').value
            };
            
            // Disable button and show loader
            submitButton.disabled = true;
            buttonText.style.display = 'none';
            buttonLoader.style.display = 'inline';
            formMessage.style.display = 'none';
            
            try {
                // Using FormSubmit.co service (free email forwarding service)
                const response = await fetch('https://formsubmit.co/ajax/connect@shivshankarenterprises.com', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        name: `${formData.firstName} ${formData.lastName}`,
                        email: formData.email,
                        company: formData.company,
                        message: formData.message,
                        _subject: `New Contact Form Submission from ${formData.firstName} ${formData.lastName}`,
                        _template: 'table'
                    })
                });
                
                if (response.ok) {
                    formMessage.textContent = 'Thank you! Your message has been sent successfully. We will get back to you soon.';
                    formMessage.className = 'form-message success';
                    contactForm.reset();
                } else {
                    throw new Error('Form submission failed');
                }
            } catch (error) {
                formMessage.textContent = 'Oops! Something went wrong. Please try again or contact us directly via email.';
                formMessage.className = 'form-message error';
            } finally {
                // Re-enable button
                submitButton.disabled = false;
                buttonText.style.display = 'inline';
                buttonLoader.style.display = 'none';
            }
        });
    }
});

// Background Slider Functionality
const slides = document.querySelectorAll('.bg-slide');
const dots = document.querySelectorAll('.slider-dot');
let currentSlide = 0;
const slideInterval = 5000; // 5 seconds
let autoSlideTimer;

// Function to show specific slide
function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    
    currentSlide = index;
}

// Function to go to next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Start auto-sliding
function startAutoSlide() {
    autoSlideTimer = setInterval(nextSlide, slideInterval);
}

// Stop auto-sliding
function stopAutoSlide() {
    clearInterval(autoSlideTimer);
}

// Add click event to dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        stopAutoSlide();
        showSlide(index);
        startAutoSlide();
    });
});

// Pause slider on hover
const heroSection = document.querySelector('.hero');
if (heroSection) {
    heroSection.addEventListener('mouseenter', stopAutoSlide);
    heroSection.addEventListener('mouseleave', startAutoSlide);
}

// Start the slider
startAutoSlide();

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        stopAutoSlide();
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
        startAutoSlide();
    } else if (e.key === 'ArrowRight') {
        stopAutoSlide();
        nextSlide();
        startAutoSlide();
    }
});