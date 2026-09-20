document.addEventListener('DOMContentLoaded', function() {
    const openBtn = document.querySelector('.openBtn');
    const closeBtn = document.querySelector('.closeBtn');
    const nav = document.getElementById('myNav');

    openBtn.addEventListener('click', function(e) {
        e.preventDefault();
        nav.classList.add('open');
    });

    closeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        nav.classList.remove('open');
    });
});