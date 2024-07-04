document.addEventListener("DOMContentLoaded", () => {
    const newsItems = document.querySelectorAll('.news-item');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.1
    });

    newsItems.forEach(item => {
        observer.observe(item);
    });
});
