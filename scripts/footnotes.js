document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.footnote-link, .footnote-return').forEach(function (link) {
        link.addEventListener('click', function (event) {
            var targetSelector = this.getAttribute('href');
            if (!targetSelector || !targetSelector.startsWith('#')) {
                return;
            }

            var target = document.querySelector(targetSelector);
            if (!target) {
                return;
            }

            event.preventDefault();

            target.classList.remove('footnote-highlight');
            target.scrollIntoView({ behavior: 'smooth', block: 'center' });
            history.replaceState(null, '', targetSelector);

            requestAnimationFrame(function () {
                target.classList.add('footnote-highlight');
                window.setTimeout(function () {
                    target.classList.remove('footnote-highlight');
                }, 1800);
            });
        });
    });
});
