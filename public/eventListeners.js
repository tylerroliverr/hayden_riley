export function toggleAccordion(accordionId) {
    const accordion = document.getElementById(accordionId);
    const isOpen = accordion.classList.contains('open');
    const allAccordions = document.querySelectorAll('.accordion');
    const allSubHeadings = document.querySelectorAll('.subHeading');

    // Close all accordions
    allAccordions.forEach(acc => {
        if (acc !== accordion) {
            acc.classList.remove('open');
            acc.querySelector('.openTag').style.display = 'flex';
            acc.querySelector('.closeTag').style.display = 'none';
            const itemsWrapper = acc.nextElementSibling;
            itemsWrapper.classList.remove('open'); // Remove open class from itemsWrapper
            acc.querySelector('.subHeading').classList.remove('italic'); // Remove italic class from subHeading
        }
    });

    // Toggle the clicked accordion
    if (isOpen) {
        accordion.classList.remove('open');
        accordion.querySelector('.openTag').style.display = 'flex';
        accordion.querySelector('.closeTag').style.display = 'none';
        const itemsWrapper = accordion.nextElementSibling;
        itemsWrapper.classList.remove('open'); // Remove open class from itemsWrapper
        accordion.querySelector('.subHeading').classList.remove('italic'); // Remove italic class from subHeading
    } else {
        accordion.classList.add('open');
        accordion.querySelector('.openTag').style.display = 'none';
        accordion.querySelector('.closeTag').style.display = 'flex';
        const itemsWrapper = accordion.nextElementSibling;
        itemsWrapper.classList.add('open'); // Add open class to itemsWrapper
        accordion.querySelector('.subHeading').classList.add('italic'); // Add italic class to subHeading
    }
}
