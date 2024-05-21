// Animate elements on scroll
const animateItems = document.querySelectorAll('.animate-in');

function checkScroll() {
    animateItems.forEach((item) => {
        if (isElementInViewport(item)) {
            item.classList.add('animated');
        } else {
            item.classList.remove('animated');
        }
    });
}

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

window.addEventListener('scroll', checkScroll);
checkScroll();
