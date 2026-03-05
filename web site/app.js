/**
 * codewithadarsh - Application Logic
 */

document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const sidebarNav = document.getElementById('sidebar-nav');
    const contentContainer = document.getElementById('content-container');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    // State
    let currentDayIndex = 0;

    // ==========================================
    // INITIALIZATION
    // ==========================================

    function init() {
        // Force dark mode
        document.documentElement.removeAttribute('data-theme');

        // Ensure data exists
        if (typeof tutorialData === 'undefined' || tutorialData.length === 0) {
            contentContainer.innerHTML = '<h2>Error: No content data found.</h2><p>Please ensure content file is loaded properly.</p>';
            return;
        }

        // Generate Sidebar Navigation
        generateSidebarLinks();

        // Load initial content (Day 0)
        loadContent(0);

        // Setup Event Listeners
        setupEventListeners();
    }

    // ==========================================
    // RENDER LOGIC
    // ==========================================

    function generateSidebarLinks() {
        sidebarNav.innerHTML = ''; // Clear default

        tutorialData.forEach((dayData, index) => {
            const link = document.createElement('a');
            link.href = '#';
            link.className = 'sidebar-link';
            link.dataset.index = index;

            link.innerHTML = `
                <span class="day-label">Topic</span>
                <span class="day-title">${dayData.topic}</span>
            `;

            sidebarNav.appendChild(link);
        });
    }

    function loadContent(index) {
        if (index < 0 || index >= tutorialData.length) return;

        currentDayIndex = index;
        const data = tutorialData[index];

        // Small fade effect
        contentContainer.style.opacity = 0;

        setTimeout(() => {
            // Update content HTML
            contentContainer.innerHTML = data.content;

            // Highlight active link in sidebar
            document.querySelectorAll('.sidebar-link').forEach((link, i) => {
                if (i === index) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });

            // Update Navigation Buttons state
            prevBtn.disabled = index === 0;
            nextBtn.disabled = index === tutorialData.length - 1;

            // Fade back in
            contentContainer.style.opacity = 1;
            window.scrollTo({ top: 0, behavior: 'smooth' });

            // Close sidebar on mobile after clicking
            if (window.innerWidth <= 768 && sidebar.classList.contains('active')) {
                toggleSidebar();
            }
        }, 200);
    }

    // ==========================================
    // EVENT LISTENERS
    // ==========================================

    function setupEventListeners() {
        // Sidebar link clicks
        sidebarNav.addEventListener('click', (e) => {
            const link = e.target.closest('.sidebar-link');
            if (!link) return;

            e.preventDefault();
            const index = parseInt(link.dataset.index);
            loadContent(index);
        });

        // Prev/Next buttons
        prevBtn.addEventListener('click', () => loadContent(currentDayIndex - 1));
        nextBtn.addEventListener('click', () => loadContent(currentDayIndex + 1));

        // Mobile menu toggle
        hamburgerMenu.addEventListener('click', toggleSidebar);
        overlay.addEventListener('click', toggleSidebar);
    }

    // ==========================================
    // UI HELPERS
    // ==========================================

    function toggleSidebar() {
        const isActive = sidebar.classList.contains('active');

        if (isActive) {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
            hamburgerMenu.classList.remove('open');
        } else {
            sidebar.classList.add('active');
            overlay.classList.add('active');
            hamburgerMenu.classList.add('open');
        }
    }

    // Start App
    init();
});
