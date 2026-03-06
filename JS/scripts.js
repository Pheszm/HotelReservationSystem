
window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});



document.getElementById('LoginButtnn').onclick = function() {
    window.location.href = 'Html folder/login-signup.html';
};

// ── Scroll-to-top button ──
(function () {
    var topBtn = document.getElementById('scrollTopBtn');
    if (!topBtn) return;
    window.addEventListener('scroll', function () {
        topBtn.classList.toggle('visible', window.scrollY > 400);
    });
    topBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}());

// ── Scroll-reveal animation ──
(function () {
    var revealEls = document.querySelectorAll(
        '.portfolio-item, .service-card, .team-member, .timeline-panel, .contact-info-card, .stat-item'
    );
    revealEls.forEach(function (el) { el.classList.add('reveal'); });
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { observer.observe(el); });
}());

// ── Contact form handler ──
(function () {
    var form = document.getElementById('contactForm');
    if (!form) return;
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        var name = (document.getElementById('name').value || '').trim();
        var email = (document.getElementById('email').value || '').trim();
        var phone = (document.getElementById('phone').value || '').trim();
        var message = (document.getElementById('message').value || '').trim();
        if (!name || !email || !phone || !message) {
            form.querySelectorAll('.form-control').forEach(function (inp) {
                if (!inp.value.trim()) inp.classList.add('is-invalid');
            });
            return;
        }
        var success = document.getElementById('submitSuccessMessage');
        var btn = document.getElementById('submitButton');
        form.reset();
        if (success) { success.classList.remove('d-none'); }
        if (btn) { btn.disabled = true; btn.textContent = 'Message Sent!'; }
    });
    form.querySelectorAll('.form-control').forEach(function (inp) {
        inp.addEventListener('input', function () { inp.classList.remove('is-invalid'); });
    });
}());

// Chatbot toggle
(function () {
    var btn = document.getElementById('chatbotbtn');
    var panel = document.getElementById('chatbot-panel');
    var closeBtn = document.getElementById('chatbot-close');
    var sendBtn = document.getElementById('chatbot-send');
    var input = document.getElementById('chatbot-input');
    var messages = document.getElementById('chatbot-messages');

    function appendMessage(text, sender) {
        var msg = document.createElement('div');
        msg.classList.add('chat-msg', sender);
        msg.textContent = text;
        messages.appendChild(msg);
        messages.scrollTop = messages.scrollHeight;
    }

    function botReply(userText) {
        var lower = userText.toLowerCase();
        var reply;
        if (lower.includes('room') || lower.includes('reserve') || lower.includes('book')) {
            reply = 'You can browse our available rooms in the Rooms section and click Reserve to book!';
        } else if (lower.includes('price') || lower.includes('cost') || lower.includes('rate')) {
            reply = 'Room prices vary by type. Please check the Rooms section for details.';
        } else if (lower.includes('contact') || lower.includes('phone') || lower.includes('email')) {
            reply = 'You can reach us via the Contact section at the bottom of this page.';
        } else if (lower.includes('check') && lower.includes('in')) {
            reply = 'Check-in time is 2:00 PM. Early check-in is subject to availability.';
        } else if (lower.includes('check') && lower.includes('out')) {
            reply = 'Check-out time is 12:00 PM noon.';
        } else if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey')) {
            reply = 'Hi there! How can I assist you with your stay at HMS?';
        } else {
            reply = 'I\'m sorry, I didn\'t quite understand that. Please try asking about rooms, reservations, prices, or contact info.';
        }
        setTimeout(function () { appendMessage(reply, 'bot'); }, 400);
    }

    function sendMessage() {
        var text = input.value.trim();
        if (!text) return;
        appendMessage(text, 'user');
        input.value = '';
        botReply(text);
    }

    btn.addEventListener('click', function () {
        panel.classList.toggle('open');
        if (panel.classList.contains('open')) input.focus();
    });

    closeBtn.addEventListener('click', function () {
        panel.classList.remove('open');
    });

    sendBtn.addEventListener('click', sendMessage);

    input.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') sendMessage();
    });
}());