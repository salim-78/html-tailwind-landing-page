document.addEventListener('DOMContentLoaded', () => {
    const faqButtons = document.querySelectorAll('[data-faq-button]');

    faqButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            const icon = button.querySelector('.faq-icon');

            // Toggle content
            content.classList.toggle('hidden');

            // Rotate icon
            icon.classList.toggle('rotate-180');

            // Update aria-expanded
            const isExpanded = content.classList.contains('hidden');
            button.setAttribute('aria-expanded', !isExpanded);
        });
    });
});
