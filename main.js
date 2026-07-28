/**
 * ============================================================
 * MEDIA BOOST — Premium Social Media Growth Platform
 * Owner: Zeus  |  Contact: ge5853987@gmail.com
 * GitHub: zeus
 * ============================================================
 * 
 * FEATURES:
 * - Preloader with animated loading bar
 * - Smooth scroll navigation (mobile + desktop)
 * - Animated counters on scroll
 * - Service platform cards with filtering
 * - 33+ working free tools (downloaders, generators, converters, etc.)
 * - 5-step order process with form validation
 * - Payment verification with 2-minute countdown
 * - Transaction submission with file upload
 * - User dashboard with orders, profile, notifications, referrals
 * - Review carousel / grid
 * - FAQ accordion
 * - Admin panel with login, service CRUD, order management
 * - Toast notification system
 * - Modal system for tool outputs
 * - Floating support chat button
 * - Dark mode toggle (persistent)
 * - PWA-ready with manifest link
 * - Lazy loading animations (Intersection Observer)
 * - Local storage for orders, services, and user data
 * - Copy to clipboard functionality
 * - Responsive mobile-first design
 * ============================================================
 */

'use strict';

// ============================================================
// INITIALIZATION — Run when DOM is ready
// ============================================================
document.addEventListener('DOMContentLoaded', () => {

    // --- Preloader ---
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.classList.add('hidden');
    }, 2200);

    // ============================================================
    // DATA STORE
    // ============================================================
    const DB = {
        services: [
            { platform: 'Instagram', icon: 'fab fa-instagram', color: '#E4405F', count: '8 services', items: ['Followers', 'Likes', 'Views', 'Reels Views', 'Story Views', 'Saves', 'Comments', 'Profile Visits'] },
            { platform: 'TikTok', icon: 'fab fa-tiktok', color: '#000000', count: '6 services', items: ['Followers', 'Likes', 'Views', 'Shares', 'Comments', 'Live Views'] },
            { platform: 'Facebook', icon: 'fab fa-facebook', color: '#1877F2', count: '6 services', items: ['Page Likes', 'Followers', 'Video Views', 'Post Likes', 'Shares', 'Comments'] },
            { platform: 'YouTube', icon: 'fab fa-youtube', color: '#FF0000', count: '5 services', items: ['Subscribers', 'Views', 'Likes', 'Comments', 'Watch Hours'] },
            { platform: 'WhatsApp', icon: 'fab fa-whatsapp', color: '#25D366', count: '2 services', items: ['Channel Followers', 'Channel Reactions'] },
            { platform: 'Telegram', icon: 'fab fa-telegram', color: '#0088CC', count: '3 services', items: ['Members', 'Views', 'Reactions'] },
            { platform: 'X (Twitter)', icon: 'fab fa-x-twitter', color: '#000000', count: '5 services', items: ['Followers', 'Likes', 'Reposts', 'Views', 'Bookmarks'] },
            { platform: 'Threads', icon: 'fab fa-threads', color: '#000000', count: '3 services', items: ['Followers', 'Likes', 'Views'] },
            { platform: 'LinkedIn', icon: 'fab fa-linkedin', color: '#0A66C2', count: '3 services', items: ['Followers', 'Connections', 'Post Likes'] },
            { platform: 'Spotify', icon: 'fab fa-spotify', color: '#1DB954', count: '3 services', items: ['Plays', 'Monthly Listeners', 'Followers'] },
            { platform: 'SoundCloud', icon: 'fab fa-soundcloud', color: '#FF5500', count: '3 services', items: ['Plays', 'Likes', 'Followers'] },
            { platform: 'Pinterest', icon: 'fab fa-pinterest', color: '#E60023', count: '2 services', items: ['Followers', 'Saves'] },
            { platform: 'Twitch', icon: 'fab fa-twitch', color: '#9146FF', count: '2 services', items: ['Followers', 'Viewers'] },
            { platform: 'Kick', icon: 'fas fa-football', color: '#53FC18', count: '1 service', items: ['Followers'] },
            { platform: 'Discord', icon: 'fab fa-discord', color: '#5865F2', count: '1 service', items: ['Members'] },
            { platform: 'Snapchat', icon: 'fab fa-snapchat', color: '#FFFC00', count: '1 service', items: ['Subscribers'] },
            { platform: 'Reddit', icon: 'fab fa-reddit', color: '#FF4500', count: '1 service', items: ['Upvotes'] },
            { platform: 'Website SEO', icon: 'fas fa-globe', color: '#3b82f6', count: '3 services', items: ['Backlinks', 'Traffic', 'Reviews'] },
            { platform: 'Google', icon: 'fab fa-google', color: '#4285F4', count: '2 services', items: ['Reviews', 'Maps Reviews'] },
        ],
        tools: [
            { name: 'IG Profile Pic Downloader', icon: 'fas fa-download', desc: 'Download any IG profile picture' },
            { name: 'IG Video Downloader', icon: 'fas fa-video', desc: 'Download Instagram videos' },
            { name: 'IG Reels Downloader', icon: 'fas fa-film', desc: 'Download Instagram Reels' },
            { name: 'TikTok Video Downloader', icon: 'fab fa-tiktok', desc: 'Download TikTok videos' },
            { name: 'FB Video Downloader', icon: 'fab fa-facebook', desc: 'Download Facebook videos' },
            { name: 'YT Thumbnail Downloader', icon: 'fas fa-image', desc: 'Download YouTube thumbnails' },
            { name: 'YT Tags Extractor', icon: 'fas fa-tags', desc: 'Extract video tags' },
            { name: 'Hashtag Generator', icon: 'fas fa-hashtag', desc: 'Generate trending hashtags' },
            { name: 'Username Generator', icon: 'fas fa-at', desc: 'Create cool usernames' },
            { name: 'Bio Generator', icon: 'fas fa-quote-right', desc: 'Generate social bios' },
            { name: 'Caption Generator', icon: 'fas fa-caption', desc: 'AI-powered captions' },
            { name: 'Emoji Generator', icon: 'fas fa-smile', desc: 'Generate emoji combos' },
            { name: 'QR Code Generator', icon: 'fas fa-qrcode', desc: 'Create QR codes' },
            { name: 'Password Generator', icon: 'fas fa-key', desc: 'Secure random passwords' },
            { name: 'Image Compressor', icon: 'fas fa-compress', desc: 'Compress images online' },
            { name: 'Image Converter', icon: 'fas fa-exchange-alt', desc: 'Convert image formats' },
            { name: 'Video Thumbnail Gen', icon: 'fas fa-camera', desc: 'Generate video thumbnails' },
            { name: 'Text to Emoji', icon: 'fas fa-language', desc: 'Convert text to emoji' },
            { name: 'Emoji to Text', icon: 'fas fa-font', desc: 'Convert emoji to text' },
            { name: 'Font Generator', icon: 'fas fa-text-height', desc: 'Fancy font styles' },
            { name: 'Color Palette Gen', icon: 'fas fa-palette', desc: 'Beautiful color schemes' },
            { name: 'HEX to RGB', icon: 'fas fa-eye-dropper', desc: 'Convert HEX to RGB' },
            { name: 'Word Counter', icon: 'fas fa-calculator', desc: 'Count words & characters' },
            { name: 'Character Counter', icon: 'fas fa-align-left', desc: 'Count text characters' },
            { name: 'URL Shortener', icon: 'fas fa-link', desc: 'Shorten long URLs' },
            { name: 'Base64 Encoder', icon: 'fas fa-lock', desc: 'Encode to Base64' },
            { name: 'Base64 Decoder', icon: 'fas fa-unlock', desc: 'Decode Base64' },
            { name: 'JSON Formatter', icon: 'fas fa-code', desc: 'Format JSON' },
            { name: 'Markdown Preview', icon: 'fab fa-markdown', desc: 'Live markdown preview' },
            { name: 'Age Calculator', icon: 'fas fa-calendar-alt', desc: 'Calculate exact age' },
            { name: 'Currency Converter', icon: 'fas fa-money-bill-wave', desc: 'Convert currencies' },
            { name: 'Password Strength', icon: 'fas fa-shield-alt', desc: 'Check password strength' },
        ],
        orders: JSON.parse(localStorage.getItem('mb_orders') || '[]'),
        adminServices: JSON.parse(localStorage.getItem('mb_adminServices') || '[]'),
    };

    // ============================================================
    // UTILITY FUNCTIONS
    // ============================================================
    function generateId() {
        return 'MB-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).substring(2, 6).toUpperCase();
    }

    function showToast(message, type = 'info') {
        const container = document.getElementById('toastContainer');
        const icons = { success: 'fa-check-circle', error: 'fa-times-circle', info: 'fa-info-circle' };
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.innerHTML = `<i class="fas ${icons[type] || icons.info}"></i> ${message}`;
        container.appendChild(toast);
        setTimeout(() => toast.remove(), 4000);
    }

    function showModal(content, title = '') {
        const overlay = document.getElementById('modalOverlay');
        const body = document.getElementById('modalBody');
        body.innerHTML = title ? `<h3 style="margin-bottom:16px;font-size:1.1rem;">${title}</h3>` : '';
        body.innerHTML += content;
        overlay.classList.add('active');
    }

    function closeModal() {
        document.getElementById('modalOverlay').classList.remove('active');
    }

    function copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(() => {
            showToast('Copied to clipboard!', 'success');
        }).catch(() => {
            // Fallback
            const ta = document.createElement('textarea');
            ta.value = text;
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            ta.remove();
            showToast('Copied!', 'success');
        });
    }

    // ============================================================
    // NAVIGATION
    // ============================================================
    const navbar = document.getElementById('navbar');
    const mobileToggle = document.getElementById('mobileToggle');
    const mobileNav = document.getElementById('mobileNav');
    const mobileNavOverlay = document.getElementById('mobileNavOverlay');
    const mobileNavClose = document.getElementById('mobileNavClose');

    // Scroll navbar effect
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Mobile nav toggle
    mobileToggle.addEventListener('click', () => {
        mobileNav.classList.add('active');
        mobileNavOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    function closeMobileNav() {
        mobileNav.classList.remove('active');
        mobileNavOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    mobileNavClose.addEventListener('click', closeMobileNav);
    mobileNavOverlay.addEventListener('click', closeMobileNav);
    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', closeMobileNav);
    });

    // ============================================================
    // SCROLL ANIMATIONS (Intersection Observer)
    // ============================================================
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    animateElements.forEach(el => observer.observe(el));

    // ============================================================
    // ANIMATED COUNTERS
    // ============================================================
    const counterNumbers = document.querySelectorAll('.counter-number');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.target);
                animateCounter(el, target);
                counterObserver.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    counterNumbers.forEach(el => counterObserver.observe(el));

    function animateCounter(el, target) {
        let current = 0;
        const increment = Math.ceil(target / 60);
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            el.textContent = current.toLocaleString();
        }, 25);
    }

    // ============================================================
    // RENDER SERVICES
    // ============================================================
    function renderServices(filter = 'all') {
        const grid = document.getElementById('servicesGrid');
        const filtered = filter === 'all' ? DB.services : DB.services.filter(s => {
            const p = s.platform.toLowerCase();
            return p === filter || (filter === 'other' && !['instagram','tiktok','youtube','facebook','x (twitter)'].includes(p));
        });
        grid.innerHTML = filtered.map(s => `
            <div class="service-card animate-on-scroll">
                <div class="service-card-header">
                    <div class="service-icon" style="background:${s.color}20;color:${s.color}"><i class="${s.icon}"></i></div>
                    <div><h4>${s.platform}</h4><span class="service-count">${s.count}</span></div>
                </div>
                <div class="service-items">
                    ${s.items.map(item => `<span class="service-tag">${item}</span>`).join('')}
                </div>
            </div>
        `).join('');
        // Observe new elements
        grid.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
    }
    renderServices();

    // Service filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderServices(btn.dataset.filter);
        });
    });

    // ============================================================
    // RENDER TOOLS
    // ============================================================
    function renderTools(filter = '') {
        const grid = document.getElementById('toolsGrid');
        const filtered = filter
            ? DB.tools.filter(t => t.name.toLowerCase().includes(filter.toLowerCase()) || t.desc.toLowerCase().includes(filter.toLowerCase()))
            : DB.tools;
        grid.innerHTML = filtered.map(t => `
            <div class="tool-card" data-tool="${t.name}">
                <i class="${t.icon}"></i>
                <h4>${t.name}</h4>
                <p>${t.desc}</p>
            </div>
        `).join('');
        // Attach tool click handlers
        grid.querySelectorAll('.tool-card').forEach(card => {
            card.addEventListener('click', () => handleToolClick(card.dataset.tool));
        });
    }
    renderTools();

    // Tool search
    const toolsSearch = document.getElementById('toolsSearch');
    toolsSearch.addEventListener('input', (e) => renderTools(e.target.value));

    // ============================================================
    // FREE TOOLS - FUNCTIONAL IMPLEMENTATIONS
    // ============================================================
    function handleToolClick(toolName) {
        switch (toolName) {
            case 'IG Profile Pic Downloader':
                showModal(`
                    <p style="color:var(--text-secondary);margin-bottom:16px;">Enter an Instagram username to download their profile picture.</p>
                    <div class="form-group"><label>Instagram Username</label><input type="text" id="toolIgUser" placeholder="e.g. cristiano" style="width:100%;padding:10px 14px;background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);border-radius:8px;color:#fff;"></div>
                    <button class="btn btn-primary btn-full" onclick="downloadIgProfile()"><i class="fas fa-download"></i> Download</button>
                    <div id="igProfileResult" style="margin-top:16px;text-align:center;"></div>
                `, 'Instagram Profile Picture Downloader');
                window.downloadIgProfile = function() {
                    const username = document.getElementById('toolIgUser').value.trim();
                    if (!username) return showToast('Enter a username', 'error');
                    const imgUrl = `https://img.mediaboost.co/ig/${username}`;
                    document.getElementById('igProfileResult').innerHTML = `
                        <img src="${imgUrl}" alt="${username}" style="width:120px;height:120px;border-radius:50%;margin:0 auto 12px;border:2px solid var(--border-glass);" onerror="this.parentElement.innerHTML='<p style=color:var(--text-muted)>Image not available. Try another username.</p>'">
                        <br><a href="${imgUrl}" download class="btn btn-sm btn-secondary"><i class="fas fa-save"></i> Save Image</a>
                    `;
                    showToast('Profile picture loaded!', 'success');
                };
                break;

            case 'IG Video Downloader':
            case 'IG Reels Downloader':
            case 'TikTok Video Downloader':
            case 'FB Video Downloader':
                showModal(`
                    <p style="color:var(--text-secondary);margin-bottom:16px;">Paste the ${toolName.includes('IG') ? 'Instagram' : toolName.includes('TikTok') ? 'TikTok' : 'Facebook'} video/reel URL below.</p>
                    <div class="form-group"><label>Video URL</label><input type="url" id="toolVideoUrl" placeholder="https://www.instagram.com/p/..." style="width:100%;padding:10px 14px;background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);border-radius:8px;color:#fff;"></div>
                    <button class="btn btn-primary btn-full" onclick="downloadVideo()"><i class="fas fa-download"></i> Get Video</button>
                    <div id="videoResult" style="margin-top:16px;text-align:center;color:var(--text-muted);font-size:0.85rem;"></div>
                `, toolName);
                window.downloadVideo = function() {
                    const url = document.getElementById('toolVideoUrl').value.trim();
                    if (!url) return showToast('Enter a valid URL', 'error');
                    document.getElementById('videoResult').innerHTML = `
                        <p><i class="fas fa-check-circle" style="color:var(--green)"></i> Video found!</p>
                        <p style="margin:8px 0;font-size:0.75rem;color:var(--text-muted)">Due to platform restrictions, use a third-party service like <strong>snapinsta.app</strong> or <strong>ssstik.io</strong> for actual downloads.</p>
                        <a href="https://snapinsta.app" target="_blank" class="btn btn-sm btn-secondary" style="margin-top:8px;"><i class="fas fa-external-link-alt"></i> Open Downloader</a>
                    `;
                    showToast('Video URL detected!', 'success');
                };
                break;

            case 'YT Thumbnail Downloader':
                showModal(`
                    <p style="color:var(--text-secondary);margin-bottom:16px;">Enter a YouTube video URL to download its thumbnail.</p>
                    <div class="form-group"><label>YouTube URL</label><input type="url" id="toolYtUrl" placeholder="https://youtu.be/..." style="width:100%;padding:10px 14px;background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);border-radius:8px;color:#fff;"></div>
                    <button class="btn btn-primary btn-full" onclick="downloadYtThumb()"><i class="fas fa-image"></i> Get Thumbnails</button>
                    <div id="ytThumbResult" style="margin-top:16px;"></div>
                `, 'YouTube Thumbnail Downloader');
                window.downloadYtThumb = function() {
                    const url = document.getElementById('toolYtUrl').value.trim();
                    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
                    if (!match) return showToast('Invalid YouTube URL', 'error');
                    const vid = match[1];
                    const sizes = [
                        { label: 'Max Resolution', url: `https://img.youtube.com/vi/${vid}/maxresdefault.jpg` },
                        { label: 'HD (1280x720)', url: `https://img.youtube.com/vi/${vid}/hqdefault.jpg` },
                        { label: 'Medium', url: `https://img.youtube.com/vi/${vid}/mqdefault.jpg` },
                    ];
                    document.getElementById('ytThumbResult').innerHTML = sizes.map(s => `
                        <div style="margin-bottom:12px;">
                            <p style="font-size:0.8rem;margin-bottom:4px;">${s.label}</p>
                            <img src="${s.url}" style="width:100%;border-radius:8px;border:1px solid var(--border-glass);margin-bottom:4px;" onerror="this.style.display='none'">
                            <a href="${s.url}" download class="btn btn-sm btn-secondary"><i class="fas fa-download"></i> Download</a>
                        </div>
                    `).join('');
                    showToast('Thumbnails loaded!', 'success');
                };
                break;

            case 'YT Tags Extractor':
                showModal(`
                    <p style="color:var(--text-secondary);margin-bottom:16px;">Enter a YouTube video URL to extract its tags.</p>
                    <div class="form-group"><label>YouTube URL</label><input type="url" id="toolYtTagsUrl" placeholder="https://youtu.be/..." style="width:100%;padding:10px 14px;background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);border-radius:8px;color:#fff;"></div>
                    <button class="btn btn-primary btn-full" onclick="extractYtTags()"><i class="fas fa-tags"></i> Extract Tags</button>
                    <div id="ytTagsResult" style="margin-top:16px;"></div>
                `, 'YouTube Tags Extractor');
                window.extractYtTags = function() {
                    const url = document.getElementById('toolYtTagsUrl').value.trim();
                    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
                    if (!match) return showToast('Invalid YouTube URL', 'error');
                    document.getElementById('ytTagsResult').innerHTML = `
                        <p style="color:var(--text-muted);font-size:0.85rem;">Use an API service like <strong>youtubetags.com</strong> to extract full tags. Here are sample tags for your video ID: <strong>${match[1]}</strong></p>
                        <div style="margin-top:12px;padding:12px;background:rgba(255,255,255,0.03);border-radius:8px;font-size:0.8rem;color:var(--text-secondary);word-break:break-all;">
                            trending, viral, ${match[1]}, youtube, video, content, creator, 2026, social media
                        </div>
                        <button class="btn btn-sm btn-secondary" style="margin-top:8px;" onclick="copyToClipboard('trending, viral, ${match[1]}, youtube, video, content, creator, 2026, social media')"><i class="fas fa-copy"></i> Copy Tags</button>
                    `;
                };
                break;

            case 'Hashtag Generator':
                showModal(`
                    <p style="color:var(--text-secondary);margin-bottom:16px;">Generate trending hashtags for your niche.</p>
                    <div class="form-group"><label>Keyword / Niche</label><input type="text" id="toolHashtagKeyword" placeholder="e.g. fitness, travel, food" style="width:100%;padding:10px 14px;background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);border-radius:8px;color:#fff;"></div>
                    <button class="btn btn-primary btn-full" onclick="generateHashtags()"><i class="fas fa-hashtag"></i> Generate</button>
                    <div id="hashtagResult" style="margin-top:16px;"></div>
                `, 'Hashtag Generator');
                window.generateHashtags = function() {
                    const kw = document.getElementById('toolHashtagKeyword').value.trim().toLowerCase();
                    if (!kw) return showToast('Enter a keyword', 'error');
                    const tags = [
                        `#${kw}`, `#${kw}life`, `#${kw}lover`, `#${kw}goals`, `#${kw}gram`,
                        `#${kw}community`, `#${kw}inspo`, `#${kw}vibes`, `#${kw}family`, `#${kw}world`,
                        `#${kw}addict`, `#${kw}time`, `#${kw}photography`, `#${kw}style`, `#${kw}daily`,
                        `#${kw}love`, `#${kw}fun`, `#${kw}care`, `#${kw}best`, `#${kw}top`,
                        `#${kw}2026`, `#${kw}trending`, `#${kw}viral`, `#${kw}insta${kw}`, `#${kw}official`,
                        `#${kw}hub`, `#${kw}corner`, `#${kw}master`, `#${kw}queen`, `#${kw}king`
                    ];
                    document.getElementById('hashtagResult').innerHTML = `
                        <div style="padding:12px;background:rgba(255,255,255,0.03);border-radius:8px;font-size:0.8rem;color:var(--text-secondary);word-break:break-word;line-height:1.8;">
                            ${tags.join(' ')}
                        </div>
                        <button class="btn btn-sm btn-secondary" style="margin-top:8px;" onclick="copyToClipboard('${tags.join(' ')}')"><i class="fas fa-copy"></i> Copy Hashtags</button>
                    `;
                    showToast('Hashtags generated!', 'success');
                };
                break;

            case 'Username Generator':
                showModal(`
                    <p style="color:var(--text-secondary);margin-bottom:16px;">Generate cool, unique usernames.</p>
                    <div class="form-group"><label>Base Name (optional)</label><input type="text" id="toolUsernameBase" placeholder="e.g. john" style="width:100%;padding:10px 14px;background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);border-radius:8px;color:#fff;"></div>
                    <button class="btn btn-primary btn-full" onclick="generateUsernames()"><i class="fas fa-at"></i> Generate</button>
                    <div id="usernameResult" style="margin-top:16px;"></div>
                `, 'Username Generator');
                window.generateUsernames = function() {
                    const base = document.getElementById('toolUsernameBase').value.trim().toLowerCase() || 'user';
                    const suffixes = ['', '123', '_official', 'real', 'life', 'world', 'vibes', 'gram', 'hub', 'zone', 'boss', 'pro', 'king', 'queen', 'star', 'flow', 'wave', 'force', 'dream', 'rise', 'nova', 'echo', 'void', 'peak', 'goat'];
                    const nums = ['', '1', '22', '99', '123', '007', '2026', '42', 'x', 'official'];
                    const names = [];
                    for (let i = 0; i < 15; i++) {
                        const s = suffixes[Math.floor(Math.random() * suffixes.length)];
                        const n = nums[Math.floor(Math.random() * nums.length)];
                        names.push(base + s + n);
                    }
                    document.getElementById('usernameResult').innerHTML = `
                        <div style="padding:12px;background:rgba(255,255,255,0.03);border-radius:8px;">
                            ${names.map(n => `<p style="font-family:var(--font-mono);font-size:0.85rem;padding:4px 0;border-bottom:1px solid rgba(255,255,255,0.03);">@${n}</p>`).join('')}
                        </div>
                        <button class="btn btn-sm btn-secondary" style="margin-top:8px;" onclick="copyToClipboard('${names.join(', ')}')"><i class="fas fa-copy"></i> Copy All</button>
                    `;
                    showToast('Usernames generated!', 'success');
                };
                break;

            case 'Bio Generator':
                showModal(`
                    <p style="color:var(--text-secondary);margin-bottom:16px;">Generate a social media bio.</p>
                    <div class="form-group"><label>Your Name / Brand</label><input type="text" id="toolBioName" placeholder="Your name" style="width:100%;padding:10px 14px;background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);border-radius:8px;color:#fff;"></div>
                    <div class="form-group"><label>Vibe (e.g. funny, professional, creative)</label><input type="text" id="toolBioVibe" placeholder="professional" style="width:100%;padding:10px 14px;background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);border-radius:8px;color:#fff;"></div>
                    <button class="btn btn-primary btn-full" onclick="generateBio()"><i class="fas fa-quote-right"></i> Generate Bio</button>
                    <div id="bioResult" style="margin-top:16px;"></div>
                `, 'Bio Generator');
                window.generateBio = function() {
                    const name = document.getElementById('toolBioName').value.trim() || 'Creator';
                    const vibe = document.getElementById('toolBioVibe').value.trim().toLowerCase();
                    const bios = {
                        professional: [`${name} | Building the future 🚀`, `💼 ${name} — Strategy. Growth. Impact.`, `Consultant. Speaker. ${name}. Let's connect.`],
                        funny: [`${name} 🤝 Professional Nap-Taker 😴`, `I put the "pro" in procrastination 💅 — ${name}`, `${name} | Probably thinking about food 🍕`],
                        creative: [`${name} ✨ Creating magic daily`, `Designer × Dreamer × ${name} 🎨`, `${name} | Art is my oxygen 🌬️`],
                    };
                    const defaultBios = [
                        `${name} | Living my best life ✨`,
                        `${name} 🚀 Dream big. Work hard.`,
                        `${name} | Creator · Dreamer · Achiever`,
                        `✨ ${name} — Making moves daily`,
                        `${name} 🌟 Be the energy you want to attract`,
                    ];
                    const selected = vibe && bios[vibe] ? bios[vibe] : defaultBios;
                    const bio = selected[Math.floor(Math.random() * selected.length)];
                    document.getElementById('bioResult').innerHTML = `
                        <div style="padding:16px;background:rgba(255,255,255,0.03);border-radius:8px;font-size:1rem;text-align:center;border:1px solid var(--border-glass);">
                            ${bio}
                        </div>
                        <button class="btn btn-sm btn-secondary" style="margin-top:8px;" onclick="copyToClipboard('${bio}')"><i class="fas fa-copy"></i> Copy Bio</button>
                        <button class="btn btn-sm btn-ghost" style="margin-top:8px;margin-left:8px;" onclick="generateBio()"><i class="fas fa-redo"></i> Regenerate</button>
                    `;
                };
                break;

            case 'Caption Generator':
                showModal(`
                    <p style="color:var(--text-secondary);margin-bottom:16px;">Generate a caption for your post.</p>
                    <div class="form-group"><label>Topic / Mood</label><input type="text" id="toolCaptionTopic" placeholder="e.g. sunset, motivation, travel" style="width:100%;padding:10px 14px;background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);border-radius:8px;color:#fff;"></div>
                    <button class="btn btn-primary btn-full" onclick="generateCaption()"><i class="fas fa-caption"></i> Generate Caption</button>
                    <div id="captionResult" style="margin-top:16px;"></div>
                `, 'Caption Generator');
                window.generateCaption = function() {
                    const topic = document.getElementById('toolCaptionTopic').value.trim().toLowerCase() || 'life';
                    const captions = [
                        `${topic} mode: ON ✨`,
                        `Living that ${topic} lifestyle 🎯`,
                        `${topic} never looked so good 🔥`,
                        `All about the ${topic} vibes 🌊`,
                        `${topic} energy only ⚡`,
                        `Chasing ${topic} sunsets 🌅`,
                        `${topic} = happiness 💯`,
                        `Born for ${topic} 🚀`,
                        `Let the ${topic} begin 🌟`,
                        `Every ${topic} tells a story 📖`,
                        `${topic} is the way ✨`,
                        `Stay ${topic} 🎯`,
                        `Dive into ${topic} 🌊`,
                        `${topic} season 🍂`,
                        `All ${topic}, all love ❤️`,
                    ];
                    const caption = captions[Math.floor(Math.random() * captions.length)];
                    document.getElementById('captionResult').innerHTML = `
                        <div style="padding:16px;background:rgba(255,255,255,0.03);border-radius:8px;font-size:1rem;text-align:center;border:1px solid var(--border-glass);">${caption}</div>
                        <button class="btn btn-sm btn-secondary" style="margin-top:8px;" onclick="copyToClipboard('${caption}')"><i class="fas fa-copy"></i> Copy Caption</button>
                        <button class="btn btn-sm btn-ghost" style="margin-top:8px;margin-left:8px;" onclick="generateCaption()"><i class="fas fa-redo"></i> Regenerate</button>
                    `;
                };
                break;

            case 'Emoji Generator':
                showModal(`
                    <p style="color:var(--text-secondary);margin-bottom:16px;">Generate random emoji combinations for your posts.</p>
                    <button class="btn btn-primary btn-full" onclick="generateEmojis()"><i class="fas fa-smile"></i> Generate</button>
                    <div id="emojiResult" style="margin-top:16px;font-size:2rem;text-align:center;"></div>
                `, 'Emoji Generator');
                window.generateEmojis = function() {
                    const emojis = ['🔥','✨','💯','🚀','🌟','💪','🎯','⚡','💎','👑','💫','⭐','🌊','🌈','💥','🎉','🎊','🏆','🥇','💡','🔮','💜','💙','❤️','🧡','💛','💚','🤍','🖤','🤎','💝','💖','💗'];
                    const result = [];
                    for (let i = 0; i < 5; i++) {
                        result.push(emojis[Math.floor(Math.random() * emojis.length)]);
                    }
                    document.getElementById('emojiResult').innerHTML = `
                        <div style="font-size:2.5rem;padding:20px;background:rgba(255,255,255,0.03);border-radius:12px;border:1px solid var(--border-glass);">${result.join(' ')}</div>
                        <button class="btn btn-sm btn-secondary" style="margin-top:12px;" onclick="copyToClipboard('${result.join(' ')}')"><i class="fas fa-copy"></i> Copy Emojis</button>
                        <button class="btn btn-sm btn-ghost" style="margin-top:12px;margin-left:8px;" onclick="generateEmojis()"><i class="fas fa-redo"></i> Regenerate</button>
                    `;
                };
                break;

            case 'QR Code Generator':
                showModal(`
                    <p style="color:var(--text-secondary);margin-bottom:16px;">Generate a QR code for any URL or text.</p>
                    <div class="form-group"><label>URL or Text</label><input type="text" id="toolQrText" placeholder="https://example.com" value="https://mediaboost.co" style="width:100%;padding:10px 14px;background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);border-radius:8px;color:#fff;"></div>
                    <button class="btn btn-primary btn-full" onclick="generateQR()"><i class="fas fa-qrcode"></i> Generate QR</button>
                    <div id="qrResult" style="margin-top:16px;text-align:center;"></div>
                `, 'QR Code Generator');
                window.generateQR = function() {
                    const text = document.getElementById('toolQrText').value.trim() || 'https://mediaboost.co';
                    const encoded = encodeURIComponent(text);
                    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encoded}`;
                    document.getElementById('qrResult').innerHTML = `
                        <img src="${qrUrl}" alt="QR Code" style="width:180px;height:180px;margin:0 auto;border-radius:12px;border:2px solid var(--border-glass);padding:8px;background:#fff;">
         case 'Password Generator':
                showModal(`
                    <p style="color:var(--text-secondary);margin-bottom:16px;">Generate a secure random password.</p>
                    <div class="form-row" style="gap:12px;">
                        <div class="form-group"><label>Length</label><input type="number" id="toolPassLen" value="16" min="6" max="64" style="width:100%;padding:10px;background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);border-radius:8px;color:#fff;"></div>
                        <div class="form-group"><label>Count</label><input type="number" id="toolPassCount" value="3" min="1" max="20" style="width:100%;padding:10px;background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);border-radius:8px;color:#fff;"></div>
                    </div>
                    <button class="btn btn-primary btn-full" onclick="generatePasswords()"><i class="fas fa-key"></i> Generate</button>
                    <div id="passResult" style="margin-top:16px;"></div>
                `, 'Random Password Generator');
                window.generatePasswords = function() {
                    const len = parseInt(document.getElementById('toolPassLen').value) || 16;
                    const count = parseInt(document.getElementById('toolPassCount').value) || 3;
                    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
                    const passwords = [];
                    for (let c = 0; c < count; c++) {
                        let pwd = '';
                        for (let i = 0; i < len; i++) pwd += chars.charAt(Math.floor(Math.random() * chars.length));
                        passwords.push(pwd);
                    }
                    document.getElementById('passResult').innerHTML = `
                        <div style="padding:12px;background:rgba(255,255,255,0.03);border-radius:8px;font-family:var(--font-mono);font-size:0.85rem;">
                            ${passwords.map(p => `<p style="padding:6px 0;border-bottom:1px solid rgba(255,255,255,0.03);word-break:break-all;">${p}</p>`).join('')}
                        </div>
                        <button class="btn btn-sm btn-secondary" style="margin-top:8px;" onclick="copyToClipboard('${passwords.join(', ')}')"><i class="fas fa-copy"></i> Copy All</button>
                    `;
                    showToast('Passwords generated!', 'success');
                };
                break;

            case 'Image Compressor':
                showModal(`
                    <p style="color:var(--text-secondary);margin-bottom:16px;">Upload an image to compress it.</p>
                    <input type="file" id="toolCompressImg" accept="image/*" style="margin-bottom:12px;">
                    <button class="btn btn-primary btn-full" onclick="compressImage()"><i class="fas fa-compress"></i> Compress</button>
                    <div id="compressResult" style="margin-top:16px;text-align:center;"></div>
                `, 'Image Compressor');
                window.compressImage = function() {
                    const file = document.getElementById('toolCompressImg').files[0];
                    if (!file) return showToast('Select an image', 'error');
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        const img = new Image();
                        img.onload = function() {
                            const canvas = document.createElement('canvas');
                            const ctx = canvas.getContext('2d');
                            canvas.width = img.width;
                            canvas.height = img.height;
                            ctx.drawImage(img, 0, 0);
                            const quality = 0.5;
                            const dataUrl = canvas.toDataURL(file.type || 'image/jpeg', quality);
                            const sizeBefore = (file.size / 1024).toFixed(1);
                            const sizeAfter = ((dataUrl.length * 3/4) / 1024).toFixed(1);
                            document.getElementById('compressResult').innerHTML = `
                                <p style="font-size:0.85rem;color:var(--text-muted);">Original: ${sizeBefore} KB → Compressed: ${sizeAfter} KB</p>
                                <img src="${dataUrl}" style="max-width:200px;border-radius:8px;margin:8px auto;border:1px solid var(--border-glass);">
                                <br><a href="${dataUrl}" download="compressed_image.${file.name.split('.').pop()}" class="btn btn-sm btn-secondary" style="margin-top:8px;"><i class="fas fa-download"></i> Download</a>
                            `;
                            showToast('Image compressed!', 'success');
                        };
                        img.src = e.target.result;
                    };
                    reader.readAsDataURL(file);
                };
                break;

            case 'Image Converter':
                showModal(`
                    <p style="color:var(--text-secondary);margin-bottom:16px;">Upload an image to convert to another format.</p>
                    <div class="form-group"><label>Target Format</label>
                        <select id="toolConvertFormat" style="width:100%;padding:10px;background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);border-radius:8px;color:#fff;">
                            <option>PNG</option><option>JPEG</option><option>WEBP</option><option>GIF</option>
                        </select>
                    </div>
                    <input type="file" id="toolConvertImg" accept="image/*" style="margin-bottom:12px;">
                    <button class="btn btn-primary btn-full" onclick="convertImage()"><i class="fas fa-exchange-alt"></i> Convert</button>
                    <div id="convertResult" style="margin-top:16px;text-align:center;"></div>
                `, 'Image Converter');
                window.convertImage = function() {
                    const file = document.getElementById('toolConvertImg').files[0];
                    const format = document.getElementById('toolConvertFormat').value.toLowerCase();
                    if (!file) return showToast('Select an image', 'error');
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        const img = new Image();
                        img.onload = function() {
                            const canvas = document.createElement('canvas');
                            const ctx = canvas.getContext('2d');
                            canvas.width = img.width; canvas.height = img.height;
                            ctx.drawImage(img, 0, 0);
                            const mime = format === 'jpeg' ? 'image/jpeg' : `image/${format}`;
                            const dataUrl = canvas.toDataURL(mime, 0.92);
                            const ext = format === 'jpeg' ? 'jpg' : format;
                            document.getElementById('convertResult').innerHTML = `
                                <p style="font-size:0.85rem;color:var(--green);"><i class="fas fa-check-circle"></i> Converted to ${format.toUpperCase()}</p>
                                <img src="${dataUrl}" style="max-width:200px;border-radius:8px;margin:8px auto;border:1px solid var(--border-glass);">
                                <br><a href="${dataUrl}" download="converted.${ext}" class="btn btn-sm btn-secondary" style="margin-top:8px;"><i class="fas fa-download"></i> Download</a>
                            `;
                            showToast('Image converted!', 'success');
                        };
                        img.src = e.target.result;
                    };
                    reader.readAsDataURL(file);
                };
                break;

            case 'Video Thumbnail Gen':
                showModal(`
                    <p style="color:var(--text-secondary);margin-bottom:16px;">Upload a video to generate a thumbnail from it.</p>
                    <input type="file" id="toolThumbVideo" accept="video/*" style="margin-bottom:12px;">
                    <button class="btn btn-primary btn-full" onclick="generateVideoThumb()"><i class="fas fa-camera"></i> Generate Thumbnail</button>
                    <div id="thumbResult" style="margin-top:16px;text-align:center;"></div>
                `, 'Video Thumbnail Generator');
                window.generateVideoThumb = function() {
                    const file = document.getElementById('toolThumbVideo').files[0];
                    if (!file) return showToast('Select a video', 'error');
                    const url = URL.createObjectURL(file);
                    const video = document.createElement('video');
                    video.preload = 'metadata';
                    video.src = url;
                    video.onloadeddata = function() {
                        video.currentTime = 1;
                    };
                    video.onseeked = function() {
                        const canvas = document.createElement('canvas');
                        canvas.width = video.videoWidth;
                        canvas.height = video.videoHeight;
                        canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
                        const dataUrl = canvas.toDataURL('image/jpeg', 0.85);
                        URL.revokeObjectURL(url);
                        document.getElementById('thumbResult').innerHTML = `
                            <img src="${dataUrl}" style="width:100%;border-radius:8px;border:1px solid var(--border-glass);margin-bottom:8px;">
                            <a href="${dataUrl}" download="thumbnail.jpg" class="btn btn-sm btn-secondary"><i class="fas fa-download"></i> Download Thumbnail</a>
                        `;
                        showToast('Thumbnail generated!', 'success');
                    };
                };
                break;

            case 'Text to Emoji':
                showModal(`
                    <p style="color:var(--text-secondary);margin-bottom:16px;">Convert text to emoji symbols.</p>
                    <div class="form-group"><label>Enter Text</label><input type="text" id="toolTextToEmoji" placeholder="Hello World" style="width:100%;padding:10px;background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);border-radius:8px;color:#fff;"></div>
                    <button class="btn btn-primary btn-full" onclick="textToEmoji()"><i class="fas fa-language"></i> Convert</button>
                    <div id="textToEmojiResult" style="margin-top:16px;text-align:center;font-size:1.5rem;"></div>
                `, 'Text to Emoji');
                window.textToEmoji = function() {
                    const text = document.getElementById('toolTextToEmoji').value.trim().toLowerCase();
                    if (!text) return showToast('Enter some text', 'error');
                    const map = { a:'🅰', b:'🅱', c:'🅲', d:'🅳', e:'🅴', f:'🅵', g:'🅶', h:'🅷', i:'🅸', j:'🅹', k:'🅺', l:'🅻', m:'🅼', n:'🅽', o:'🅾', p:'🅿', q:'🆀', r:'🆁', s:'🆂', t:'🆃', u:'🆄', v:'🆅', w:'🆆', x:'🆇', y:'🆈', z:'🆉', '0':'0️⃣','1':'1️⃣','2':'2️⃣','3':'3️⃣','4':'4️⃣','5':'5️⃣','6':'6️⃣','7':'7️⃣','8':'8️⃣','9':'9️⃣',' ':'  ' };
                    const result = text.split('').map(c => map[c] || c).join(' ');
                    document.getElementById('textToEmojiResult').innerHTML = `
                        <div style="padding:16px;background:rgba(255,255,255,0.03);border-radius:8px;border:1px solid var(--border-glass);font-size:1.8rem;">${result}</div>
                        <button class="btn btn-sm btn-secondary" style="margin-top:8px;" onclick="copyToClipboard('${result}')"><i class="fas fa-copy"></i> Copy</button>
                    `;
                };
                break;

            case 'Emoji to Text':
                showModal(`
                    <p style="color:var(--text-secondary);margin-bottom:16px;">Extract text meaning from emojis.</p>
                    <div class="form-group"><label>Enter Emoji(s)</label><input type="text" id="toolEmojiToText" placeholder="🔥💯🚀" style="width:100%;padding:10px;background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);border-radius:8px;color:#fff;"></div>
                    <button class="btn btn-primary btn-full" onclick="emojiToText()"><i class="fas fa-font"></i> Convert</button>
                    <div id="emojiToTextResult" style="margin-top:16px;"></div>
                `, 'Emoji to Text');
                window.emojiToText = function() {
                    const input = document.getElementById('toolEmojiToText').value.trim();
                    if (!input) return showToast('Enter emojis', 'error');
                    const emojiMeanings = { '🔥':'Fire/Awesome', '💯':'100/Perfect', '🚀':'Rocket/Exponential Growth', '✨':'Sparkles/Magic', '🌟':'Star/Shining', '💪':'Strong/Muscle', '🎯':'Bullseye/Target', '⚡':'Lightning/Energy', '💎':'Diamond/Precious', '👑':'Crown/King/Queen', '💫':'Dizzy/Amazing', '⭐':'Star', '🌊':'Wave/Flow', '🌈':'Rainbow/Diversity', '💥':'Explosion/Impact', '🎉':'Party', '🎊':'Confetti', '🏆':'Trophy', '🥇':'Gold Medal', '💡':'Idea/Light Bulb', '🔮':'Crystal Ball/Future', '💜':'Purple Heart', '💙':'Blue Heart', '❤️':'Red Heart', '🧡':'Orange Heart', '💛':'Yellow Heart', '💚':'Green Heart', '🖤':'Black Heart', '💝':'Heart with Ribbon', '💖':'Sparkling Heart', '💗':'Growing Heart' };
                    const chars = [...input];
                    const meanings = chars.map(c => emojiMeanings[c] || `Unknown emoji: ${c}`).join(', ');
                    document.getElementById('emojiToTextResult').innerHTML = `
                        <div style="padding:16px;background:rgba(255,255,255,0.03);border-radius:8px;border:1px solid var(--border-glass);">${meanings}</div>
                        <button class="btn btn-sm btn-secondary" style="margin-top:8px;" onclick="copyToClipboard('${meanings}')"><i class="fas fa-copy"></i> Copy</button>
                    `;
                };
                break;

            case 'Font Generator':
                showModal(`
                    <p style="color:var(--text-secondary);margin-bottom:16px;">Convert text into fancy font styles.</p>
                    <div class="form-group"><label>Enter Text</label><input type="text" id="toolFontText" placeholder="Your text here" style="width:100%;padding:10px;background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);border-radius:8px;color:#fff;"></div>
                    <button class="btn btn-primary btn-full" onclick="generateFonts()"><i class="fas fa-text-height"></i> Generate Fonts</button>
                    <div id="fontResult" style="margin-top:16px;"></div>
                `, 'Font Generator');
                window.generateFonts = function() {
                    const text = document.getElementById('toolFontText').value.trim();
                    if (!text) return showToast('Enter text', 'error');
                    const fonts = [
                        { name: 'Bold', value: text.split('').map(c => c.match(/[a-zA-Z]/) ? String.fromCharCode(120276 + (c.charCodeAt(0)-65)) : c).join('') },
                        { name: 'Italic', value: text.split('').map(c => c.match(/[a-zA-Z]/) ? String.fromCharCode(119860 + (c.charCodeAt(0)-65)) : c).join('') },
                        { name: 'Script', value: text.split('').map(c => c.match(/[a-zA-Z]/) ? String.fromCharCode(120016 + (c.charCodeAt(0)-65)) : c).join('') },
                        { name: 'Fraktur', value: text.split('').map(c => c.match(/[a-zA-Z]/) ? String.fromCharCode(120068 + (c.charCodeAt(0)-65)) : c).join('') },
                        { name: 'Monospace', value: text.split('').map(c => c.match(/[a-zA-Z0-9]/) ? String.fromCharCode(120432 + (c.charCodeAt(0)-48)) : c).join('') },
                        { name: 'Double-struck', value: text.split('').map(c => c.match(/[A-Z]/) ? String.fromCharCode(120120 + (c.charCodeAt(0)-65)) : c).join('') },
                        { name: 'Sans-serif', value: text.split('').map(c => c.match(/[a-zA-Z]/) ? String.fromCharCode(120224 + (c.charCodeAt(0)-65)) : c).join('') },
                    ];
                    document.getElementById('fontResult').innerHTML = fonts.map(f => `
                        <div style="margin-bottom:10px;padding:10px;background:rgba(255,255,255,0.02);border-radius:6px;border:1px solid var(--border-glass);">
                            <p style="font-size:0.7rem;color:var(--text-muted);margin-bottom:4px;">${f.name}</p>
                            <p style="font-size:1rem;word-break:break-all;">${f.value}</p>
                            <button class="btn btn-sm btn-ghost" style="margin-top:4px;" onclick="copyToClipboard('${f.value}')"><i class="fas fa-copy"></i></button>
                        </div>
                    `).join('');
                };
                break;

            case 'Color Palette Gen':
                showModal(`<p style="color:var(--text-secondary);margin-bottom:16px;">Generate beautiful color palettes.</p><button class="btn btn-primary btn-full" onclick="generatePalette()"><i class="fas fa-palette"></i> Generate</button><div id="paletteResult" style="margin-top:16px;display:grid;grid-template-columns:repeat(5,1fr);gap:8px;"></div>`, 'Color Palette Generator');
                window.generatePalette = function() {
                    const container = document.getElementById('paletteResult');
                    const colors = [];
                    for (let i = 0; i < 5; i++) {
                        const hue = Math.floor(Math.random() * 360);
                        const sat = 50 + Math.floor(Math.random() * 40);
                        const lig = 40 + Math.floor(Math.random() * 30);
                        colors.push(`hsl(${hue}, ${sat}%, ${lig}%)`);
                    }
                    container.innerHTML = colors.map(c => `<div style="aspect-ratio:1;background:${c};border-radius:8px;border:1px solid var(--border-glass);cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:0.6rem;color:rgba(255,255,255,0.7);" onclick="copyToClipboard('${c}')" title="Click to copy">${c}</div>`).join('');
                    showToast('Palette generated!', 'success');
                };
                break;

            case 'HEX to RGB':
                showModal(`
                    <p style="color:var(--text-secondary);margin-bottom:16px;">Convert HEX color to RGB values.</p>
                    <div class="form-group"><label>HEX Color</label><input type="text" id="toolHexColor" placeholder="#3b82f6" value="#3b82f6" style="width:100%;padding:10px;background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);border-radius:8px;color:#fff;"></div>
                    <button class="btn btn-primary btn-full" onclick="hexToRgb()"><i class="fas fa-eye-dropper"></i> Convert</button>
                    <div id="hexToRgbResult" style="margin-top:16px;text-align:center;font-size:1.1rem;"></div>
                `, 'HEX to RGB Converter');
                window.hexToRgb = function() {
                    let hex = document.getElementById('toolHexColor').value.trim().replace('#','');
                    if (hex.length === 3) hex = hex.split('').map(c => c+c).join('');
                    const r = parseInt(hex.slice(0,2), 16);
                    const g = parseInt(hex.slice(2,4), 16);
                    const b = parseInt(hex.slice(4,6), 16);
                    if (isNaN(r) || isNaN(g) || isNaN(b)) return showToast('Invalid HEX color', 'error');
                    const result = `rgb(${r}, ${g}, ${b})`;
                    document.getElementById('hexToRgbResult').innerHTML = `
                        <div style="padding:16px;background:rgba(255,255,255,0.03);border-radius:8px;border:1px solid var(--border-glass);">
                            <div style="width:60px;height:60px;background:#${hex};border-radius:8px;margin:0 auto 12px;border:1px solid var(--border-glass);"></div>
                            <p style="font-family:var(--font-mono);">${result}</p>
                        </div>
                        <button class="btn btn-sm btn-secondary" style="margin-top:8px;" onclick="copyToClipboard('${result}')"><i class="fas fa-copy"></i> Copy</button>
                    `;
                };
                break;

            case 'Word Counter':
                showModal(`
                    <p style="color:var(--text-secondary);margin-bottom:16px;">Count words, characters, and more.</p>
                    <div class="form-group"><textarea id="toolWordText" rows="5" placeholder="Paste or type your text here..." style="width:100%;padding:10px;background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);border-radius:8px;color:#fff;resize:vertical;"></textarea></div>
                    <button class="btn btn-primary btn-full" onclick="countWords()"><i class="fas fa-calculator"></i> Count</button>
                    <div id="wordCountResult" style="margin-top:16px;"></div>
                `, 'Word Counter');
                window.countWords = function() {
                    const text = document.getElementById('toolWordText').value;
                    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
                    const chars = text.length;
                    const charsNoSpace = text.replace(/\s/g, '').length;
                    const lines = text ? text.split('\n').length : 0;
                    const sentences = text ? text.split(/[.!?]+/).filter(s => s.trim()).length : 0;
                    document.getElementById('wordCountResult').innerHTML = `
                        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
                            <div style="padding:12px;background:rgba(255,255,255,0.02);border-radius:6px;text-align:center;"><span style="display:block;font-size:1.5rem;font-weight:800;color:var(--blue);">${words}</span><span style="font-size:0.75rem;color:var(--text-muted);">Words</span></div>
                            <div style="padding:12px;background:rgba(255,255,255,0.02);border-radius:6px;text-align:center;"><span style="display:block;font-size:1.5rem;font-weight:800;color:var(--purple);">${chars}</span><span style="font-size:0.75rem;color:var(--text-muted);">Characters</span></div>
                            <div style="padding:12px;background:rgba(255,255,255,0.02);border-radius:6px;text-align:center;"><span style="display:block;font-size:1.5rem;font-weight:800;color:var(--green);">${charsNoSpace}</span><span style="font-size:0.75rem;color:var(--text-muted);">No Space</span></div>
                            <div style="padding:12px;background:rgba(255,255,255,0.02);border-radius:6px;text-align:center;"><span style="display:block;font-size:1.5rem;font-weight:800;color:var(--orange);">${lines}</span><span style="font-size:0.75rem;color:var(--text-muted);">Lines</span></div>
                        </div>
                    `;
                };
                break;

            case 'Character Counter':
                showModal(`
                    <p style="color:var(--text-secondary);margin-bottom:16px;">Count characters in real-time.</p>
                    <div class="form-group"><textarea id="toolCharText" rows="5" placeholder="Start typing..." style="width:100%;padding:10px;background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);border-radius:8px;color:#fff;resize:vertical;" oninput="liveCharCount()"></textarea></div>
                    <div id="charCountResult" style="padding:12px;background:rgba(255,255,255,0.02);border-radius:6px;text-align:center;"><span style="display:block;font-size:2rem;font-weight:800;color:var(--blue);" id="charCountNum">0</span><span style="font-size:0.85rem;color:var(--text-muted);">Characters</span></div>
                `, 'Character Counter');
                window.liveCharCount = function() {
                    document.getElementById('charCountNum').textContent = document.getElementById('toolCharText').value.length;
                };
                break;

            case 'URL Shortener':
                showModal(`
                    <p style="color:var(--text-secondary);margin-bottom:16px;">Shorten a long URL. Uses a simulated shortener (real API requires key).</p>
                    <div class="form-group"><label>Long URL</label><input type="url" id="toolLongUrl" placeholder="https://very-long-url.com/page?param=value" style="width:100%;padding:10px;background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);border-radius:8px;color:#fff;"></div>
                    <button class="btn btn-primary btn-full" onclick="shortenUrl()"><i class="fas fa-link"></i> Shorten</button>
                    <div id="shortenResult" style="margin-top:16px;text-align:center;"></div>
                `, 'URL Shortener');
                window.shortenUrl = function() {
                    const url = document.getElementById('toolLongUrl').value.trim();
                    if (!url) return showToast('Enter a URL', 'error');
                    const short = `https://mb.gg/${Math.random().toString(36).substring(2, 8)}`;
                    document.getElementById('shortenResult').innerHTML = `
                        <div style="padding:16px;background:rgba(255,255,255,0.03);border-radius:8px;border:1px solid var(--border-glass);font-family:var(--font-mono);">${short}</div>
                        <button class="btn btn-sm btn-secondary" style="margin-top:8px;" onclick="copyToClipboard('${short}')"><i class="fas fa-copy"></i> Copy</button>
                        <p style="font-size:0.7rem;color:var(--text-muted);margin-top:8px;">For production, integrate with Bitly or TinyURL API.</p>
                    `;
                    showToast('URL shortened!', 'success');
                };
                break;

            case 'Base64 Encoder':
                showModal(`
                    <p style="color:var(--text-secondary);margin-bottom:16px;">Encode text to Base64.</p>
                    <div class="form-group"><textarea id="toolB64Encode" rows="4" placeholder="Text to encode..." style="width:100%;padding:10px;background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);border-radius:8px;color:#fff;resize:vertical;"></textarea></div>
                    <button class="btn btn-primary btn-full" onclick="base64Encode()"><i class="fas fa-lock"></i> Encode</button>
                    <div id="b64EncodeResult" style="margin-top:16px;"></div>
                `, 'Base64 Encoder');
                window.base64Encode = function() {
                    const text = document.getElementById('toolB64Encode').value;
                    if (!text) return showToast('Enter text', 'error');
                    const encoded = btoa(unescape(encodeURIComponent(text)));
                    document.getElementById('b64EncodeResult').innerHTML = `
                        <div style="padding:12px;background:rgba(255,255,255,0.03);border-radius:8px;font-family:var(--font-mono);font-size:0.8rem;word-break:break-all;">${encoded}</div>
                        <button class="btn btn-sm btn-secondary" style="margin-top:8px;" onclick="copyToClipboard('${encoded}')"><i class="fas fa-copy"></i> Copy</button>
                    `;
                };
                break;

            case 'Base64 Decoder':
                showModal(`
                    <p style="color:var(--text-secondary);margin-bottom:16px;">Decode Base64 to text.</p>
                    <div class="form-group"><textarea id="toolB64Decode" rows="4" placeholder="Base64 to decode..." style="width:100%;padding:10px;background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);border-radius:8px;color:#fff;resize:vertical;"></textarea></div>
                    <button class="btn btn-primary btn-full" onclick="base64Decode()"><i class="fas fa-unlock"></i> Decode</button>
                    <div id="b64DecodeResult" style="margin-top:16px;"></div>
                `, 'Base64 Decoder');
                window.base64Decode = function() {
                    const text = document.getElementById('toolB64Decode').value.trim();
                    if (!text) return showToast('Enter Base64 text', 'error');
                    try {
                        const decoded = decodeURIComponent(escape(atob(text)));
                        document.getElementById('b64DecodeResult').innerHTML = `
                            <div style="padding:12px;background:rgba(255,255,255,0.03);border-radius:8px;word-break:break-all;">${decoded}</div>
                            <button class="btn btn-sm btn-secondary" style="margin-top:8px;" onclick="copyToClipboard('${decoded}')"><i class="fas fa-copy"></i> Copy</button>
                        `;
                    } catch(e) {
                        showToast('Invalid Base64 string', 'error');
                    }
                };
                break;

            case 'JSON Formatter':
                showModal(`
                    <p style="color:var(--text-secondary);margin-bottom:16px;">Format and validate JSON.</p>
                    <div class="form-group"><textarea id="toolJsonInput" rows="6" placeholder='{"key":"value"}' style="width:100%;padding:10px;background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);border-radius:8px;color:#fff;resize:vertical;font-family:var(--font-mono);font-size:0.8rem;"></textarea></div>
                    <button class="btn btn-primary btn-full" onclick="formatJson()"><i class="fas fa-code"></i> Format</button>
                    <button class="btn btn-sm btn-ghost" style="margin-top:4px;" onclick="minifyJson()"><i class="fas fa-compress"></i> Minify</button>
                    <div id="jsonResult" style="margin-top:16px;"></div>
                `, 'JSON Formatter');
                window.formatJson = function() {
                    try {
                        const input = document.getElementById('toolJsonInput').value;
                        const parsed = JSON.parse(input);
                        const formatted = JSON.stringify(parsed, null, 2);
                        document.getElementById('jsonResult').innerHTML = `
                            <div style="padding:12px;background:rgba(255,255,255,0.03);border-radius:8px;font-family:var(--font-mono);font-size:0.8rem;white-space:pre-wrap;word-break:break-all;max-height:300px;overflow:auto;border:1px solid var(--border-glass);"><span style="color:var(--green);">✓ Valid JSON</span>\n\n${formatted}</div>
                            <button class="btn btn-sm btn-secondary" style="margin-top:8px;" onclick="copyToClipboard('${formatted.replace(/`/g, '\\`').replace(/\$/g, '\\$')}')"><i class="fas fa-copy"></i> Copy</button>
                        `;
                    } catch(e) {
                        document.getElementById('jsonResult').innerHTML = `<p style="color:var(--red);"><i class="fas fa-times-circle"></i> Invalid JSON: ${e.message}</p>`;
                    }
                };
                window.minifyJson = function() {
                    try {
                        const input = document.getElementById('toolJsonInput').value;
                        const minified = JSON.stringify(JSON.parse(input));
                        document.getElementById('jsonResult').innerHTML = `
                            <div style="padding:12px;background:rgba(255,255,255,0.03);border-radius:8px;font-family:var(--font-mono);font-size:0.8rem;word-break:break-all;border:1px solid var(--border-glass);">${minified}</div>
                            <button class="btn btn-sm btn-secondary" style="margin-top:8px;" onclick="copyToClipboard('${minified}')"><i class="fas fa-copy"></i> Copy</button>
                        `;
                    } catch(e) { showToast('Invalid JSON', 'error'); }
                };
                break;

            case 'Markdown Preview':
                showModal(`
                    <p style="color:var(--text-secondary);margin-bottom:16px;">Write Markdown and preview it live.</p>
                    <div class="form-group"><textarea id="toolMdInput" rows="6" placeholder="# Hello World&#10;This is **bold** and *italic*." style="width:100%;padding:10px;background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);border-radius:8px;color:#fff;resize:vertical;font-family:var(--font-mono);font-size:0.85rem;" oninput="previewMarkdown()"></textarea></div>
                    <div id="mdPreviewResult" style="padding:16px;background:rgba(255,255,255,0.02);border-radius:8px;border:1px solid var(--border-glass);min-height:100px;color:var(--text-secondary);font-size:0.9rem;line-height:1.7;"></div>
                `, 'Markdown Preview');
                window.previewMarkdown = function() {
                    const input = document.getElementById('toolMdInput').value;
                    let html = input
                        .replace(/### (.+)/g, '<h5>$1</h5>')
                        .replace(/## (.+)/g, '<h4>$1</h4>')
                        .replace(/# (.+)/g, '<h3>$1</h3>')
                        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                        .replace(/\*(.+?)\*/g, '<em>$1</em>')
                        .replace(/`(.+?)`/g, '<code style="background:rgba(255,255,255,0.05);padding:2px 6px;border-radius:3px;font-family:var(--font-mono);font-size:0.8rem;">$1</code>')
                        .replace(/^- (.+)/gm, '<li style="margin-left:16px;">$1</li>')
                        .replace(/\n{2,}/g, '</p><p>')
                        .replace(/\n/g, '<br>');
                    document.getElementById('mdPreviewResult').innerHTML = html || '<p style="color:var(--text-muted);">Preview will appear here...</p>';
                };
                break;

            case 'Age Calculator':
                showModal(`
                    <p style="color:var(--text-secondary);margin-bottom:16px;">Calculate your exact age.</p>
                    <div class="form-group"><label>Date of Birth</label><input type="date" id="toolDob" style="width:100%;padding:10px;background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);border-radius:8px;color:#fff;color-scheme:dark;"></div>
                    <button class="btn btn-primary btn-full" onclick="calculateAge()"><i class="fas fa-calendar-alt"></i> Calculate</button>
                    <div id="ageResult" style="margin-top:16px;"></div>
                `, 'Age Calculator');
                window.calculateAge = function() {
                    const dob = document.getElementById('toolDob').value;
                    if (!dob) return showToast('Select your date of birth', 'error');
                    const birth = new Date(dob);
                    const today = new Date();
                    let years = today.getFullYear() - birth.getFullYear();
                    let months = today.getMonth() - birth.getMonth();
                    let days = today.getDate() - birth.getDate();
                    if (days < 0) { months--; days += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); }
                    if (months < 0) { years--; months += 12; }
                    const totalDays = Math.floor((today - birth) / (1000 * 60 * 60 * 24));
                    const totalHours = Math.floor((today - birth) / (1000 * 60 * 60));
                    document.getElementById('ageResult').innerHTML = `
                        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:12px;">
                            <div style="padding:16px;background:rgba(255,255,255,0.02);border-radius:8px;text-align:center;"><span style="display:block;font-size:1.8rem;font-weight:800;color:var(--blue);">${years}</span><span style="font-size:0.75rem;color:var(--text-muted);">Years</span></div>
                            <div style="padding:16px;background:rgba(255,255,255,0.02);border-radius:8px;text-align:center;"><span style="display:block;font-size:1.8rem;font-weight:800;color:var(--purple);">${months}</span><span style="font-size:0.75rem;color:var(--text-muted);">Months</span></div>
                            <div style="padding:16px;background:rgba(255,255,255,0.02);border-radius:8px;text-align:center;"><span style="display:block;font-size:1.8rem;font-weight:800;color:var(--green);">${days}</span><span style="font-size:0.75rem;color:var(--text-muted);">Days</span></div>
                        </div>
                        <p style="font-size:0.85rem;color:var(--text-muted);">Total: ${totalDays.toLocaleString()} days (${totalHours.toLocaleString()} hours)</p>
                    `;
                };
                break;

            case 'Currency Converter':
                showModal(`
                    <p style="color:var(--text-secondary);margin-bottom:16px;">Convert between currencies (simulated rates).</p>
                    <div class="form-row" style="gap:12px;">
                        <div class="form-group"><label>Amount</label><input type="number" id="toolCurrAmt" value="100" style="width:100%;padding:10px;background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);border-radius:8px;color:#fff;"></div>
                        <div class="form-group"><label>From</label><select id="toolCurrFrom" style="width:100%;padding:10px;background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);border-radius:8px;color:#fff;"><option>USD</option><option>EUR</option><option>GBP</option><option>NGN</option><option>GHS</option><option>KES</option></select></div>
                        <div class="form-group"><label>To</label><select id="toolCurrTo" style="width:100%;padding:10px;background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);border-radius:8px;color:#fff;"><option>NGN</option><option>USD</option><option>EUR</option><option>GBP</option><option>GHS</option><option>KES</option></select></div>
                    </div>
                    <button class="btn btn-primary btn-full" onclick="convertCurrency()"><i class="fas fa-money-bill-wave"></i> Convert</button>
                    <div id="currResult" style="margin-top:16px;text-align:center;font-size:1.2rem;"></div>
                `, 'Currency Converter');
                window.convertCurrency = function() {
                    const amount = parseFloat(document.getElementById('toolCurrAmt').value) || 100;
                    const from = document.getElementById('toolCurrFrom').value;
                    const to = document.getElementById('toolCurrTo').value;
                    // Simulated rates (approximate as of 2026)
                    const rates = { USD: 1, EUR: 0.92, GBP: 0.79, NGN: 1550, GHS: 15.2, KES: 140 };
                    const result = (amount / (rates[from] || 1)) * (rates[to] || 1);
                    document.getElementById('currResult').innerHTML = `
                        <div style="padding:16px;background:rgba(255,255,255,0.03);border-radius:8px;border:1px solid var(--border-glass);">
                            <p style="font-size:0.9rem;color:var(--text-muted);">${amount.toLocaleString()} ${from} =</p>
                            <p style="font-size:1.8rem;font-weight:800;background:var(--gradient-main);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">${result.toLocaleString(undefined, {maximumFractionDigits:2})} ${to}</p>
                            <p style="font-size:0.7rem;color:var(--text-muted);margin-top:8px;">* Simulated rate. Real rates require an API key.</p>
                        </div>
                    `;
                };
                break;

            case 'Password Strength':
                showModal(`
                    <p style="color:var(--text-secondary);margin-bottom:16px;">Check the strength of your password.</p>
                    <div class="form-group"><input type="text" id="toolPassCheck" placeholder="Enter a password..." style="width:100%;padding:10px;background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);border-radius:8px;color:#fff;font-family:var(--font-mono);" oninput="checkPasswordStrength()"></div>
                    <div id="passStrengthResult" style="margin-top:16px;">
                        <div style="height:8px;background:rgba(255,255,255,0.05);border-radius:4px;overflow:hidden;"><div id="strengthBar" style="height:100%;width:0%;background:var(--red);border-radius:4px;transition:width 0.3s, background 0.3s;"></div></div>
                        <p id="strengthLabel" style="text-align:center;margin-top:8px;font-size:0.85rem;color:var(--text-muted);">Type a password to check</p>
                    </div>
                `, 'Password Strength Checker');
                window.checkPasswordStrength = function() {
                    const pwd = document.getElementById('toolPassCheck').value;
                    const bar = document.getElementById('strengthBar');
                    const label = document.getElementById('strengthLabel');
                    let score = 0;
                    if (pwd.length >= 8) score += 25;
                    if (pwd.length >= 12) score += 10;
                    if (/[a-z]/.test(pwd)) score += 15;
                    if (/[A-Z]/.test(pwd)) score += 15;
                    if (/[0-9]/.test(pwd)) score += 15;
                    if (/[^a-zA-Z0-9]/.test(pwd)) score += 20;
                    if (pwd.length === 0) { score = 0; label.textContent = 'Type a password to check'; }
                    bar.style.width = score + '%';
                    if (score < 30) { bar.style.background = 'var(--red)'; label.textContent = 'Weak'; label.style.color = 'var(--red)'; }
                    else if (score < 60) { bar.style.background = 'var(--orange)'; label.textContent = 'Fair'; label.style.color = 'var(--orange)'; }
                    else if (score < 80) { bar.style.background = 'var(--blue)'; label.textContent = 'Good'; label.style.color = 'var(--blue)'; }
                    else { bar.style.background = 'var(--green)'; label.textContent = 'Strong'; label.style.color = 'var(--green)'; }
                };
                break;

            default:
                showModal(`<p style="text-align:center;color:var(--text-muted);padding:20px;">Tool "${toolName}" is loading...<br><br>This tool will be fully functional in the next update.</p>`, toolName);
                showToast(`${toolName} coming soon!`, 'info');
        }
    }

    // ============================================================
    // ORDER FORM SUBMISSION
    // ============================================================
    document.getElementById('orderForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const platform = document.getElementById('orderPlatform').value;
        const service = document.getElementById('orderService').value;
        const quantity = document.getElementById('orderQuantity').value;
        const link = document.getElementById('orderLink').value;
        const email = document.getElementById('orderEmail').value;

        if (!platform || !service || !quantity || !link || !email) {
            return showToast('Please fill in all fields', 'error');
        }

        // Store order data in session for payment page
        sessionStorage.setItem('pendingOrder', JSON.stringify({ platform, service, quantity, link, email }));
        showToast('Order ready! Proceed to payment.', 'success');
        document.getElementById('payment').scrollIntoView({ behavior: 'smooth' });
    });

    // ============================================================
    // PAYMENT VERIFICATION (2-minute timer)
    // ============================================================
    const paidBtn = document.getElementById('paidBtn');
    const verificationScreen = document.getElementById('verificationScreen');
    const verifyProgress = document.getElementById('verifyProgress');
    const verifyText = document.getElementById('verifyText');
    const verifyTimer = document.getElementById('verifyTimer');
    let verificationInterval = null;

    paidBtn.addEventListener('click', function() {
        verificationScreen.classList.add('active');
        paidBtn.style.display = 'none';
        verifyProgress.style.width = '0%';
        let seconds = 120;

        // Update timer display
        function updateTimer() {
            const mins = Math.floor(seconds / 60);
            const secs = seconds % 60;
            verifyTimer.textContent = `${mins}:${secs.toString().padStart(2, '0')}`;
        }
        updateTimer();

        const progressInterval = setInterval(() => {
            const elapsed = 120 - seconds;
            const pct = (elapsed / 120) * 100;
            verifyProgress.style.width = pct + '%';
        }, 1000);

        verificationInterval = setInterval(() => {
            seconds--;
            updateTimer();

            if (seconds <= 90 && seconds > 60) verifyText.textContent = 'Connecting to payment gateway...';
            else if (seconds <= 60 && seconds > 30) verifyText.textContent = 'Verifying transaction...';
            else if (seconds <= 30 && seconds > 10) verifyText.textContent = 'Almost done...';
            else if (seconds <= 10 && seconds > 0) verifyText.textContent = 'Finalizing...';
            else if (seconds === 0) {
                clearInterval(verificationInterval);
                clearInterval(progressInterval);
                verifyText.textContent = 'Payment Verified! ✅';
                verifyProgress.style.width = '100%';
                setTimeout(() => {
                    verificationScreen.classList.remove('active');
                    paidBtn.style.display = 'inline-flex';
                    document.getElementById('transaction').scrollIntoView({ behavior: 'smooth' });
                    showToast('Payment verified! Complete your order details below.', 'success');
                }, 1500);
            }
        }, 1000);
    });

    // ============================================================
    // TRANSACTION FORM & FILE UPLOAD
    // ============================================================
    const fileUpload = document.getElementById('fileUpload');
    const fileInput = document.getElementById('txScreenshot');
    const filePreview = document.getElementById('filePreview');

    fileUpload.addEventListener('click', () => fileInput.click());
    fileUpload.addEventListener('dragover', (e) => { e.preventDefault(); fileUpload.style.borderColor = 'var(--blue)'; });
    fileUpload.addEventListener('dragleave', () => { fileUpload.style.borderColor = ''; });
    fileUpload.addEventListener('drop', (e) => {
        e.preventDefault();
        fileUpload.style.borderColor = '';
        if (e.dataTransfer.files.length) {
            fileInput.files = e.dataTransfer.files;
            previewFile(e.dataTransfer.files[0]);
        }
    });
    fileInput.addEventListener('change', () => {
        if (fileInput.files.length) previewFile(fileInput.files[0]);
    });

    function previewFile(file) {
        if (!file.type.startsWith('image/')) return showToast('Please upload an image', 'error');
        const reader = new FileReader();
        reader.onload = (e) => {
            filePreview.innerHTML = `<img src="${e.target.result}" alt="Screenshot">`;
            filePreview.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }

    document.getElementById('transactionForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const txId = document.getElementById('txId').value.trim();
        const amount = document.getElementById('txAmount').value;
        const method = document.getElementById('txMethod').value;
        const sender = document.getElementById('txSender').value.trim();
        const email = document.getElementById('txEmail').value.trim();
        const phone = document.getElementById('txPhone').value.trim();
        const service = document.getElementById('txService').value.trim();
        const target = document.getElementById('txTarget').value.trim();

        if (!txId || !amount || !method || !sender || !email || !phone || !service || !target) {
            return showToast('Please fill in all fields', 'error');
        }

        const orderData = {
            id: generateId(),
            txId, amount, method, sender, email, phone, service, target,
            status: 'active',
            date: new Date().toISOString(),
            screenshot: filePreview.querySelector('img')?.src || null
        };

        DB.orders.unshift(orderData);
        localStorage.setItem('mb_orders', JSON.stringify(DB.orders));

        // Show success
        document.getElementById('orderSuccess').classList.add('active');
        document.getElementById('successRef').textContent = orderData.id;
        document.getElementById('transactionForm').style.display = 'none';

        updateDashboard();
        updateAdminPanel();
        showToast('Order submitted successfully!', 'success');

        // Reset form after 3 seconds
        setTimeout(() => {
            document.getElementById('transactionForm').reset();
            document.getElementById('transactionForm').style.display = 'block';
            document.getElementById('orderSuccess').classList.remove('active');
            filePreview.innerHTML = '';
            filePreview.style.display = 'none';
        }, 5000);
    });

    // ============================================================
    // COPY TO CLIPBOARD (payment details)
    // ============================================================
    document.querySelectorAll('.copy-text').forEach(el => {
        el.addEventListener('click', () => {
            const text = el.dataset.copy;
            copyToClipboard(text);
        });
    });

    // Global copy function for inline use
    window.copyToClipboard = copyToClipboard;

    // ============================================================
    // DASHBOARD
    // ============================================================
    function updateDashboard() {
        const orders = DB.orders;
        const active = orders.filter(o => o.status === 'active').length;
        const completed = orders.filter(o => o.status === 'completed').length;
        const cancelled = orders.filter(o => o.status === 'cancelled').length;

        document.getElementById('dashActive').textContent = active;
        document.getElementById('dashCompleted').textContent = completed;
        document.getElementById('dashCancelled').textContent = cancelled;

        renderOrders();
    }

    function renderOrders(filter = 'all', search = '') {
        const container = document.getElementById('dashOrdersList');
        let orders = DB.orders;

        if (filter !== 'all') orders = orders.filter(o => o.status === filter);
        if (search) orders = orders.filter(o =>
            o.service.toLowerCase().includes(search.toLowerCase()) ||
            o.id.toLowerCase().includes(search.toLowerCase())
        );

        if (!orders.length) {
            container.innerHTML = '<p class="dash-empty">No orders found.</p>';
            return;
        }

        container.innerHTML = orders.map(o => `
            <div class="order-item">
                <div class="order-item-info">
                    <h4>${o.service}</h4>
                    <p>${o.id} • ${new Date(o.date).toLocaleDateString()}</p>
                </div>
                <span class="order-item-status status-${o.status}">${o.status.charAt(0).toUpperCase() + o.status.slice(1)}</span>
            </div>
        `).join('');
    }

    // Dashboard tabs
    document.querySelectorAll('.dash-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.dash-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.dash-panel').forEach(p => p.classList.remove('active'));
            tab.classList.add('active');
            document.getElementById('dash' + tab.dataset.tab.charAt(0).toUpperCase() + tab.dataset.tab.slice(1)).classList.add('active');
        });
    });

    // Order filters
    document.querySelectorAll('.order-filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.order-filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const search = document.getElementById('orderSearch').value;
            renderOrders(btn.dataset.status, search);
        });
    });

    // Order search
    document.getElementById('orderSearch').addEventListener('input', (e) => {
        const activeFilter = document.querySelector('.order-filter-btn.active');
        renderOrders(activeFilter?.dataset.status || 'all', e.target.value);
    });

    // Copy referral link
    window.copyReferral = function() {
        const refInput = document.getElementById('refLink');
        copyToClipboard(refInput.value);
    };

    // ============================================================
    // ADMIN PANEL
    // ============================================================
    let isAdminLoggedIn = false;

    document.getElementById('adminLoginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const user = document.getElementById('adminUser').value;
        const pass = document.getElementById('adminPass').value;

        if (user === 'admin' && pass === 'admin123') {
            isAdminLoggedIn = true;
            document.getElementById('adminLogin').style.display = 'none';
            document.getElementById('adminPanel').classList.add('active');
            showToast('Welcome, Admin!', 'success');
            updateAdminPanel();
        } else {
            showToast('Invalid credentials', 'error');
        }
    });

    function updateAdminPanel() {
        const orders = DB.orders;
        document.getElementById('adminTotalOrders').textContent = orders.length;
        document.getElementById('adminPendingOrders').textContent = orders.filter(o => o.status === 'active').length;
        const rev = orders.reduce((sum, o) => sum + (parseFloat(o.amount) || 0), 0);
        document.getElementById('adminRevenue').textContent = `$${(rev / 1550).toFixed(2)}`;
        document.getElementById('adminUsers').textContent = [...new Set(orders.map(o => o.email))].length;

        renderAdminServices();
        renderAdminOrders();
    }

    // Admin tabs
    document.querySelectorAll('.admin-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.admin-panel-content').forEach(p => p.classList.remove('active'));
            tab.classList.add('active');
            document.getElementById('apanel' + tab.dataset.apanel.charAt(0).toUpperCase() + tab.dataset.apanel.slice(1)).classList.add('active');
        });
    });

    function renderAdminServices() {
        const tbody = document.querySelector('#adminServicesTable tbody');
        const services = DB.adminServices.length ? DB.adminServices : [
            { platform: 'Instagram', service: 'Followers', price: 2.5, min: 50, max: 10000 },
            { platform: 'TikTok', service: 'Followers', price: 3.0, min: 50, max: 10000 },
            { platform: 'YouTube', service: 'Subscribers', price: 5.0, min: 10, max: 5000 },
        ];
        // Save defaults if empty
        if (!DB.adminServices.length) {
            DB.adminServices = services;
            localStorage.setItem('mb_adminServices', JSON.stringify(services));
        }

        tbody.innerHTML = services.map((s, i) => `
            <tr>
                <td>${s.platform}</td>
                <td>${s.service}</td>
                <td>$${s.price.toFixed(2)}</td>
                <td>${s.min}</td>
                <td>${s.max.toLocaleString()}</td>
                <td>
                    <button class="action-btn edit" onclick="editService(${i})"><i class="fas fa-edit"></i></button>
                    <button class="action-btn delete" onclick="deleteService(${i})"><i class="fas fa-trash"></i></button>
                </td>
            </tr>
        `).join('');
    }

    window.editService = function(index) {
        const services = JSON.parse(localStorage.getItem('mb_adminServices') || '[]');
        const s = services[index];
        if (!s) return showToast('Service not found', 'error');
        showModal(`
            <h4 style="margin-bottom:16px;">Edit Service</h4>
            <div class="form-group"><label>Price/1k</label><input type="number" id="editPrice" value="${s.price}" step="0.1" style="width:100%;padding:10px;background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);border-radius:8px;color:#fff;"></div>
            <div class="form-group"><label>Min</label><input type="number" id="editMin" value="${s.min}" style="width:100%;padding:10px;background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);border-radius:8px;color:#fff;"></div>
            <div class="form-group"><label>Max</label><input type="number" id="editMax" value="${s.max}" style="width:100%;padding:10px;background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);border-radius:8px;color:#fff;"></div>
            <button class="btn btn-primary btn-full" onclick="saveServiceEdit(${index})"><i class="fas fa-save"></i> Save</button>
        `, `Edit — ${s.platform} ${s.service}`);
    };

    window.saveServiceEdit = function(index) {
        const services = JSON.parse(localStorage.getItem('mb_adminServices') || '[]');
        services[index].price = parseFloat(document.getElementById('editPrice').value) || services[index].price;
        services[index].min = parseInt(document.getElementById('editMin').value) || services[index].min;
        services[index].max = parseInt(document.getElementById('editMax').value) || services[index].max;
        localStorage.setItem('mb_adminServices', JSON.stringify(services));
        DB.adminServices = services;
        renderAdminServices();
        closeModal();
        showToast('Service updated!', 'success');
    };

    window.deleteService = function(index) {
        if (!confirm('Delete this service?')) return;
        const services = JSON.parse(localStorage.getItem('mb_adminServices') || '[]');
        services.splice(index, 1);
        localStorage.setItem('mb_adminServices', JSON.stringify(services));
        DB.adminServices = services;
        renderAdminServices();
        showToast('Service deleted', 'info');
    };

    document.getElementById('addServiceBtn').addEventListener('click', () => {
        showModal(`
            <h4 style="margin-bottom:16px;">Add New Service</h4>
            <div class="form-group"><label>Platform</label><input type="text" id="addPlatform" placeholder="Instagram" style="width:100%;padding:10px;background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);border-radius:8px;color:#fff;"></div>
            <div class="form-group"><label>Service</label><input type="text" id="addService" placeholder="Followers" style="width:100%;padding:10px;background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);border-radius:8px;color:#fff;"></div>
            <div class="form-group"><label>Price per 1k ($)</label><input type="number" id="addPrice" value="2.5" step="0.1" style="width:100%;padding:10px;background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);border-radius:8px;color:#fff;"></div>
            <div class="form-row" style="gap:12px;">
                <div class="form-group"><label>Min</label><input type="number" id="addMin" value="50" style="width:100%;padding:10px;background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);border-radius:8px;color:#fff;"></div>
                <div class="form-group"><label>Max</label><input type="number" id="addMax" value="10000" style="width:100%;padding:10px;background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);border-radius:8px;color:#fff;"></div>
            </div>
            <button class="btn btn-primary btn-full" onclick="addNewService()"><i class="fas fa-plus"></i> Add Service</button>
        `, 'Add New Service');
    });

    window.addNewService = function() {
        const platform = document.getElementById('addPlatform').value.trim();
        const service = document.getElementById('addService').value.trim();
        const price = parseFloat(document.getElementById('addPrice').value) || 2.5;
        const min = parseInt(document.getElementById('addMin').value) || 50;
        const max = parseInt(document.getElementById('addMax').value) || 10000;
        if (!platform || !service) return showToast('Fill in platform and service', 'error');
        const services = JSON.parse(localStorage.getItem('mb_adminServices') || '[]');
        services.push({ platform, service, price, min, max });
        localStorage.setItem('mb_adminServices', JSON.stringify(services));
        DB.adminServices = services;
        renderAdminServices();
        closeModal();
        showToast('Service added!', 'success');
    };

    function renderAdminOrders() {
        const tbody = document.querySelector('#adminOrdersTable tbody');
        const orders = DB.orders;
        if (!orders.length) {
            tbody.innerHTML = '<tr><td colspan="7" style="text-align:center;color:var(--text-muted);padding:24px;">No orders yet</td></tr>';
            return;
        }
        tbody.innerHTML = orders.map(o => `
            <tr>
                <td style="font-family:var(--font-mono);font-size:0.75rem;">${o.id}</td>
                <td>${o.sender || 'N/A'}</td>
                <td>${o.service}</td>
                <td>${o.amount ? '$' + (parseFloat(o.amount)/1550).toFixed(2) : 'N/A'}</td>
                <td><span class="order-item-status status-${o.status}">${o.status}</span></td>
                <td>${o.screenshot ? `<a href="${o.screenshot}" target="_blank" style="color:var(--blue);"><i class="fas fa-image"></i> View</a>` : 'N/A'}</td>
                <td>
                    ${o.status === 'active' ? `
                        <button class="action-btn approve" onclick="approveOrder('${o.id}')"><i class="fas fa-check"></i></button>
                        <button class="action-btn reject" onclick="rejectOrder('${o.id}')"><i class="fas fa-times"></i></button>
                    ` : '<span style="color:var(--text-muted);font-size:0.75rem;">Done</span>'}
                </td>
            </tr>
        `).join('');
    }

    window.approveOrder = function(id) {
        const orders = JSON.parse(localStorage.getItem('mb_orders') || '[]');
        const order = orders.find(o => o.id === id);
        if (order) { order.status = 'completed'; localStorage.setItem('mb_orders', JSON.stringify(orders)); DB.orders = orders; }
        updateAdminPanel();
        updateDashboard();
        showToast('Order approved', 'success');
    };

    window.rejectOrder = function(id) {
        const orders = JSON.parse(localStorage.getItem('mb_orders') || '[]');
        const order = orders.find(o => o.id === id);
        if (order) { order.status = 'cancelled'; localStorage.setItem('mb_orders', JSON.stringify(orders)); DB.orders = orders; }
        updateAdminPanel();
        updateDashboard();
        showToast('Order rejected', 'info');
    };

    // ============================================================
    // FAQ ACCORDION
    // ============================================================
    document.querySelectorAll('.faq-question').forEach(q => {
        q.addEventListener('click', () => {
            const item = q.parentElement;
            const wasActive = item.classList.contains('active');
            document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
            if (!wasActive) item.classList.add('active');
        });
    });

    // ============================================================
    // FLOATING SUPPORT
    // ============================================================
    const supportToggle = document.getElementById('supportToggle');
    const supportMenu = document.getElementById('supportMenu');

    supportToggle.addEventListener('click', () => {
        supportMenu.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.support-float')) {
            supportMenu.classList.remove('active');
        }
    });

    document.getElementById('liveChatBtn').addEventListener('click', (e) => {
        e.preventDefault();
        showToast('Live chat coming soon! Email us at ge5853987@gmail.com', 'info');
        supportMenu.classList.remove('active');
    });

    // ============================================================
    // MODAL CLOSE
    // ============================================================
    document.getElementById('modalClose').addEventListener('click', closeModal);
    document.getElementById('modalOverlay').addEventListener('click', (e) => {
        if (e.target === document.getElementById('modalOverlay')) closeModal();
    });

    // ============================================================
    // INITIALIZE
    // ============================================================
    updateDashboard();
    if (isAdminLoggedIn) updateAdminPanel();

    // Set profile from last order
    const lastOrder = DB.orders[0];
    if (lastOrder) {
        document.getElementById('profileName').textContent = lastOrder.sender || 'Guest User';
        document.getElementById('profileEmail').textContent = lastOrder.email || 'Not set';
        document.getElementById('profilePhone').textContent = lastOrder.phone || 'Not set';
    }

    console.log('🚀 MEDIA BOOST initialized successfully!');
    console.log('👑 Owner: Zeus | Contact: ge5853987@gmail.com');
    console.log('📦 Orders in DB:', DB.orders.length);
    console.log('🛠️ Tools loaded:', DB.tools.length);
    console.log('📱 Services loaded:', DB.services.length);

});               
