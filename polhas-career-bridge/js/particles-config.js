// Particles.js Configuration - Static Decorative Dots
export const particlesConfig = {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: ["#3b82f6", "#8b5cf6", "#ec4899", "#06b6d4", "#10b981"]
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            }
        },
        opacity: {
            value: 0.15,
            random: true,
            anim: {
                enable: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false
            }
        },
        line_linked: {
            enable: false
        },
        move: {
            enable: false
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: false
            },
            onclick: {
                enable: false
            },
            resize: true
        }
    },
    retina_detect: true
};

// Initialize particles on a specific element
export function initParticles(elementId = 'particles-js') {
    if (typeof particlesJS !== 'undefined') {
        particlesJS(elementId, particlesConfig);
        console.log('✨ Particles initialized');
    } else {
        console.error('❌ particles.js library not loaded');
    }
}
