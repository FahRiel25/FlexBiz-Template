// darkmode.js
(function() {
    const body = document.body;
    const toggleBtn = document.getElementById('darkModeToggle');

    // Cek localStorage
    const darkMode = localStorage.getItem('flexbiz-darkmode');
    if (darkMode === 'enabled') {
        body.classList.add('dark');
    }

    // Jika tombol toggle ada
    if (toggleBtn) {
        // Set ikon awal
        updateIcon();

        toggleBtn.addEventListener('click', () => {
            body.classList.toggle('dark');
            const isDark = body.classList.contains('dark');
            localStorage.setItem('flexbiz-darkmode', isDark ? 'enabled' : 'disabled');
            updateIcon();
        });
    }

    function updateIcon() {
        if (!toggleBtn) return;
        const icon = toggleBtn.querySelector('i');
        if (body.classList.contains('dark')) {
            icon.classList.remove('bi-moon-fill');
            icon.classList.add('bi-sun-fill');
        } else {
            icon.classList.remove('bi-sun-fill');
            icon.classList.add('bi-moon-fill');
        }
    }
})();