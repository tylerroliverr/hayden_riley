export function toggleAccordion(accordionId) {
    const accordion = document.getElementById(accordionId);
    const isOpen = accordion.classList.contains('open');
    const allAccordions = document.querySelectorAll('.accordion');

    // Close all accordions
    allAccordions.forEach(acc => {
        if (acc !== accordion) {
            acc.classList.remove('open');
            acc.querySelector('.openTag').style.display = 'inline';
            acc.querySelector('.closeTag').style.display = 'none';
            acc.nextElementSibling.style.display = 'none';
        }
    });

    // Toggle the clicked accordion
    if (isOpen) {
        accordion.classList.remove('open');
        accordion.querySelector('.openTag').style.display = 'inline';
        accordion.querySelector('.closeTag').style.display = 'none';
        accordion.nextElementSibling.style.display = 'none';
    } else {
        accordion.classList.add('open');
        accordion.querySelector('.openTag').style.display = 'none';
        accordion.querySelector('.closeTag').style.display = 'inline';
        accordion.nextElementSibling.style.display = 'block';
    }
}