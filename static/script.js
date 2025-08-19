document.addEventListener('DOMContentLoaded', () => {
    // Particle Background Effect
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-2';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 100;

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 5 + 2;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.speedY = Math.random() * 0.5 - 0.25;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.size > 0.2) this.size -= 0.1;
        }

        draw() {
            ctx.fillStyle = 'rgba(255, 69, 0, 0.5)';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function init() {
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
            if (particles[i].size <= 0.2) {
                particles.splice(i, 1);
                i--;
                particles.push(new Particle());
            }
        }
        requestAnimationFrame(animate);
    }

    init();
    animate();

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    // Console Welcome
    console.log('ChainLogger - Forged by PUK @ คัมภีร์สายกระบี่คริปโต');

    // Fade-in Effect
    document.body.style.opacity = 0;
    setTimeout(() => {
        document.body.style.transition = 'opacity 1s ease-in-out';
        document.body.style.opacity = 1;
    }, 100);

    // Welcome Message Animation
    const welcomeMessage = document.querySelector('.welcome-message');
    if (welcomeMessage) {
        welcomeMessage.style.opacity = 0;
        welcomeMessage.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            welcomeMessage.style.transition = 'opacity 1s, transform 1s';
            welcomeMessage.style.opacity = 1;
            welcomeMessage.style.transform = 'translateY(0)';
        }, 500);
    }

    // Content Slide-in
    const content = document.querySelector('.content');
    if (content) {
        content.style.opacity = 0;
        content.style.transform = 'translateY(30px)';
        setTimeout(() => {
            content.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
            content.style.opacity = 1;
            content.style.transform = 'translateY(0)';
        }, 700);
    }

    // Time Capsule Form
    const timeCapsuleForm = document.querySelector('.timecapsule-form');
    if (timeCapsuleForm) {
        timeCapsuleForm.addEventListener('submit', (e) => {
            const editor = document.getElementById('message-editor');
            const input = document.getElementById('message-input');
            if (editor && input) {
                input.value = editor.innerHTML;
                showToast('Time Capsule sealed with Crypto Blade!', 'success');
                triggerSlashEffect();
            }
        });
    }

    // Buy Block Form Validation
    const buyForm = document.querySelector('form');
    if (buyfoForm) {
        buyForm.addEventListener('submit', (e) => {
            const offerPrice = document.getElementById('offer_price')?.value;
            if (offerPrice <= 0) {
                e.preventDefault();
                showToast('Samurai, offer price must be greater than 0!', 'danger');
            } else {
                showToast('Offer submitted! Slash the market!', 'success');
                triggerSlashEffect();
            }
        });
    }

    // Delete Buttons Animation
    document.querySelectorAll('.btn-danger').forEach(button => {
        button.addEventListener('click', (e) => {
            if (button.form && confirm('Are you sure you want to delete this?')) {
                triggerSlashEffect();
                showToast('Slashed from the Dojo!', 'success');
            }
        });
    });

    // Easter Egg: Click Logo
    const logo = document.querySelector('.navbar-brand');
    let clickCount = 0;
    if (logo) {
        logo.addEventListener('click', () => {
            clickCount++;
            if (clickCount === 3) {
                showToast('PUK @ คัมภีร์สายกระบี่คริปโต - Master of the Blockchain Dojo!', 'success');
                triggerSlashEffect();
                clickCount = 0;
            } else {
                showToast('PUK @ คัมภีร์สายกระบี่คริปโต - Slash the FUD!', 'success');
            }
        });
    }

    // PUK Quote Rotation
    const quotes = [
        "Slash the FUD with Crypto Blade! - PUK",
        "Ride the Blockchain, Samurai! - PUK",
        "Forge your fate in the Crypto Dojo! - PUK",
        "HODL with the heart of a warrior! - PUK"
    ];
    const quoteElement = document.querySelector('.quote-text');
    let quoteIndex = 0;
    if (quoteElement) {
        setInterval(() => {
            quoteElement.style.opacity = 0;
            setTimeout(() => {
                quoteElement.textContent = quotes[quoteIndex];
                quoteElement.style.opacity = 1;
                quoteIndex = (quoteIndex + 1) % quotes.length;
            }, 500);
        }, 5000);
    }
});

// Custom Toast Notification
function showToast(message, type = 'success') {
    const toastContainer = document.createElement('div');
    toastContainer.style.position = 'fixed';
    toastContainer.style.top = '20px';
    toastContainer.style.right = '20px';
    toastContainer.style.zIndex = '9999';
    toastContainer.innerHTML = `
        <div class="alert alert-${type} alert-dismissible fade show" role="alert">
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `;
    document.body.appendChild(toastContainer);
    setTimeout(() => {
        toastContainer.remove();
    }, 3000);
}

// Copy to Clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showToast('Address copied to clipboard, Samurai!', 'success');
        triggerSlashEffect();
    }).catch(() => {
        showToast('Failed to copy address. Try again!', 'danger');
    });
}

// Text Formatting
function formatText(command, value = null) {
    document.execCommand(command, false, value);
    const editor = document.getElementById('message-editor');
    if (editor) editor.focus();
}

// Slash Effect Animation
function triggerSlashEffect() {
    const slash = document.createElement('div');
    slash.style.position = 'fixed';
    slash.style.top = '0';
    slash.style.left = '0';
    slash.style.width = '100%';
    slash.style.height = '100%';
    slash.style.background = 'linear-gradient(45deg, transparent, rgba(255, 69, 0, 0.5), transparent)';
    slash.style.zIndex = '9998';
    slash.style.opacity = '0';
    slash.style.transform = 'translateX(-100%)';
    document.body.appendChild(slash);

    setTimeout(() => {
        slash.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
        slash.style.transform = 'translateX(100%)';
        slash.style.opacity = '1';
    }, 10);

    setTimeout(() => {
        slash.remove();
    }, 300);
}
// Admin Dashboard Animation (จากโค้ดก่อนหน้า)
const tables = document.querySelectorAll('.table-dark');
tables.forEach(table => {
    table.style.opacity = 0;
    table.style.transform = 'translateY(20px)';
    setTimeout(() => {
        table.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
        table.style.opacity = 1;
        table.style.transform = 'translateY(0)';
    }, 800);
});
// Register Admin Form Animation
const registerAdminForm = document.querySelector('form');
if (registerAdminForm) {
    registerAdminForm.addEventListener('submit', (e) => {
        showToast('Forged a new Crypto Samurai Admin!', 'success');
        triggerSlashEffect();
    });
}
// Delete Buttons Animation
document.querySelectorAll('.btn-danger').forEach(button => {
    button.addEventListener('click', (e) => {
        if (button.form && confirm('Are you sure you want to delete this?')) {
            triggerSlashEffect();
            showToast('Slashed from the Dojo!', 'success');
        }
    });
});

// Flash Messages Animation
document.querySelectorAll('.alert').forEach(alert => {
    alert.style.opacity = 0;
    alert.style.transform = 'translateY(-20px)';
    setTimeout(() => {
        alert.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        alert.style.opacity = 1;
        alert.style.transform = 'translateY(0)';
    }, 100);
});

// Register Admin Form Animation
const registerAdminForm = document.querySelector('form');
if (registerAdminForm) {
    registerAdminForm.addEventListener('submit', (e) => {
        showToast('Forged a new Crypto Samurai Admin!', 'success');
        triggerSlashEffect();
    });
}
function showToast(message, type) {
    const toast = document.createElement('div');
    toast.className = `alert alert-${type} alert-dismissible fade show`;
    toast.style.position = 'fixed';
    toast.style.top = '20px';
    toast.style.right = '20px';
    toast.style.zIndex = '1000';
    toast.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}

function triggerSlashEffect() {
    const slash = document.createElement('div');
    slash.style.position = 'fixed';
    slash.style.top = '0';
    slash.style.left = '0';
    slash.style.width = '100%';
    slash.style.height = '100%';
    slash.style.background = 'linear-gradient(45deg, transparent, rgba(255, 69, 0, 0.5), transparent)';
    slash.style.zIndex = '9999';
    slash.style.animation = 'slash 0.3s ease-out';
    document.body.appendChild(slash);
    setTimeout(() => slash.remove(), 300);
}

document.querySelectorAll('.alert').forEach(alert => {
    alert.style.opacity = 0;
    alert.style.transform = 'translateY(-20px)';
    setTimeout(() => {
        alert.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        alert.style.opacity = 1;
        alert.style.transform = 'translateY(0)';
    }, 100);
});

const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        const action = form.action || '';
        if (action.includes('register_admin')) {
            showToast('Forged a new Crypto Samurai Admin!', 'success');
            triggerSlashEffect();
        } else if (action.includes('timecapsule')) {
            showToast('Block forged into the Time Capsule!', 'success');
            triggerSlashEffect();
        } else if (action.includes('transfer')) {
            showToast('PUK transferred successfully!', 'success');
            triggerSlashEffect();
        } else if (action.includes('new_post') || action.includes('post_details')) {
            showToast('Post forged in the Dojo!', 'success');
            triggerSlashEffect();
        }
    });
});

document.querySelectorAll('.btn-danger').forEach(button => {
    button.addEventListener('click', (e) => {
        if (button.form && confirm('Are you sure you want to delete this?')) {
            triggerSlashEffect();
            showToast('Slashed from the Dojo!', 'success');
        }
    });
});

const style = document.createElement('style');
style.innerHTML = `
    @keyframes slash {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
    }
`;
document.head.appendChild(style);