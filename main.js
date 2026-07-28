/**
 * ============================================================
 * MEDIA BOOST — Core Module (v2)
 * Owner: Zeus  |  Contact: ge5853987@gmail.com
 * GitHub: zeus
 * 
 * Features:
 * - Section-based navigation (one page at a time)
 * - Naira pricing engine (followers: ₦1000/100, views/likes: ₦600/100)
 * - Order form with profile photo preview
 * - Hidden admin panel (double-tap logo or #admin URL)
 * - 20+ platforms, full order/payment/dashboard system
 * ============================================================
 */
'use strict';

// ============================================================
// PRICING ENGINE
// ============================================================
const PRICE = {
    followers: 1000,   // ₦1,000 per 100
    likes: 600,        // ₦600 per 100
    views: 600,        // ₦600 per 100
    default: 600
};

function getPricePerHundred(serviceName) {
    var name = (serviceName || '').toLowerCase();
    if (name.indexOf('follower') !== -1 || name.indexOf('subscriber') !== -1 || name.indexOf('member') !== -1) {
        return PRICE.followers;
    }
    if (name.indexOf('like') !== -1 || name.indexOf('comment') !== -1 || name.indexOf('reaction') !== -1 || name.indexOf('save') !== -1 || name.indexOf('share') !== -1) {
        return PRICE.likes;
    }
    if (name.indexOf('view') !== -1 || name.indexOf('visit') !== -1 || name.indexOf('watch') !== -1 || name.indexOf('live') !== -1) {
        return PRICE.views;
    }
    return PRICE.default;
}

function calculatePrice(serviceName, quantity) {
    var perHundred = getPricePerHundred(serviceName);
    return (quantity / 100) * perHundred;
}

function formatNaira(amount) {
    return '₦' + Math.round(amount).toLocaleString();
}

// ============================================================
// DATA STORE
// ============================================================
const DB = {
    services: [
        { platform: 'Instagram', icon: 'fab fa-instagram', color: '#E4405F', items: ['Followers', 'Likes', 'Views', 'Reels Views', 'Story Views', 'Saves', 'Comments', 'Profile Visits'] },
        { platform: 'TikTok', icon: 'fab fa-tiktok', color: '#000000', items: ['Followers', 'Likes', 'Views', 'Shares', 'Comments', 'Live Views'] },
        { platform: 'Facebook', icon: 'fab fa-facebook', color: '#1877F2', items: ['Page Likes', 'Followers', 'Video Views', 'Post Likes', 'Shares', 'Comments'] },
        { platform: 'YouTube', icon: 'fab fa-youtube', color: '#FF0000', items: ['Subscribers', 'Views', 'Likes', 'Comments', 'Watch Hours'] },
        { platform: 'WhatsApp', icon: 'fab fa-whatsapp', color: '#25D366', items: ['Channel Followers', 'Channel Reactions'] },
        { platform: 'Telegram', icon: 'fab fa-telegram', color: '#0088CC', items: ['Members', 'Views', 'Reactions'] },
        { platform: 'X (Twitter)', icon: 'fab fa-x-twitter', color: '#000000', items: ['Followers', 'Likes', 'Views', 'Retweets', 'Comments'] },
        { platform: 'Snapchat', icon: 'fab fa-snapchat', color: '#FFFC00', items: ['Followers', 'Views', 'Lenses Views'] },
        { platform: 'LinkedIn', icon: 'fab fa-linkedin', color: '#0A66C2', items: ['Followers', 'Post Likes', 'Profile Views', 'Comments'] },
        { platform: 'Twitch', icon: 'fab fa-twitch', color: '#9146FF', items: ['Followers', 'Views', 'Live Views'] },
        { platform: 'Spotify', icon: 'fab fa-spotify', color: '#1DB954', items: ['Followers', 'Monthly Listeners', 'Playlist Followers'] },
        { platform: 'SoundCloud', icon: 'fab fa-soundcloud', color: '#FF5500', items: ['Followers', 'Plays', 'Likes', 'Reposts'] },
        { platform: 'Pinterest', icon: 'fab fa-pinterest', color: '#E60023', items: ['Followers', 'Pins', 'Repins', 'Likes'] },
        { platform: 'YouTube Music', icon: 'fas fa-music', color: '#FF0000', items: ['Subscribers', 'Views', 'Likes'] },
        { platform: 'TikTok Music', icon: 'fas fa-headphones', color: '#000000', items: ['Followers', 'Plays', 'Likes'] },
        { platform: 'Facebook Story', icon: 'fas fa-history', color: '#1877F2', items: ['Story Views', 'Story Reactions'] },
        { platform: 'IG Story', icon: 'fas fa-history', color: '#E4405F', items: ['Story Views', 'Story Reactions'] },
        { platform: 'IG TV', icon: 'fas fa-tv', color: '#E4405F', items: ['Views', 'Likes', 'Comments'] },
        { platform: 'Threads', icon: 'fab fa-threads', color: '#000000', items: ['Followers', 'Likes', 'Views', 'Reposts'] },
        { platform: 'Discord', icon: 'fab fa-discord', color: '#5865F2', items: ['Members', 'Online Members'] }
    ],
    tools: [
        { name: 'IG Profile Pic Downloader', icon: 'fas fa-download', desc: 'Download any IG profile picture' },
        { name: 'IG Video Downloader', icon: 'fab fa-instagram', desc: 'Download Instagram videos' },
        { name: 'IG Reels Downloader', icon: 'fab fa-instagram', desc: 'Download Instagram Reels' },
        { name: 'TikTok Video Downloader', icon: 'fab fa-tiktok', desc: 'Download TikTok videos' },
        { name: 'FB Video Downloader', icon: 'fab fa-facebook', desc: 'Download Facebook videos' },
        { name: 'YT Thumbnail Downloader', icon: 'fab fa-youtube', desc: 'Download YouTube thumbnails' },
        { name: 'YT Tags Extractor', icon: 'fab fa-youtube', desc: 'Extract video tags' },
        { name: 'Hashtag Generator', icon: 'fas fa-hashtag', desc: 'Generate trending hashtags' },
        { name: 'Username Generator', icon: 'fas fa-user', desc: 'Create cool usernames' },
        { name: 'Bio Generator', icon: 'fas fa-pen', desc: 'Generate social bios' },
        { name: 'Caption Generator', icon: 'fas fa-quote-right', desc: 'AI-powered captions' },
        { name: 'Emoji Generator', icon: 'fas fa-smile', desc: 'Generate emoji combos' },
        { name: 'QR Code Generator', icon: 'fas fa-qrcode', desc: 'Create QR codes' },
        { name: 'Password Generator', icon: 'fas fa-lock', desc: 'Secure random passwords' },
        { name: 'Image Compressor', icon: 'fas fa-compress', desc: 'Compress images online' },
        { name: 'Image Converter', icon: 'fas fa-exchange-alt', desc: 'Convert image formats' },
        { name: 'Video Thumbnail Gen', icon: 'fas fa-image', desc: 'Generate video thumbnails' },
        { name: 'Text to Emoji', icon: 'fas fa-arrow-right', desc: 'Convert text to emoji' },
        { name: 'Emoji to Text', icon: 'fas fa-arrow-left', desc: 'Convert emoji to text' },
        { name: 'Font Generator', icon: 'fas fa-font', desc: 'Fancy font styles' },
        { name: 'Color Palette Gen', icon: 'fas fa-palette', desc: 'Beautiful color schemes' },
        { name: 'HEX to RGB', icon: 'fas fa-eyedropper', desc: 'Convert HEX to RGB' },
        { name: 'Word Counter', icon: 'fas fa-file-alt', desc: 'Count words and characters' },
        { name: 'Character Counter', icon: 'fas fa-sort-alpha-up', desc: 'Count text characters' },
        { name: 'URL Shortener', icon: 'fas fa-link', desc: 'Shorten long URLs' },
        { name: 'Base64 Encoder', icon: 'fas fa-lock', desc: 'Encode to Base64' },
        { name: 'Base64 Decoder', icon: 'fas fa-unlock', desc: 'Decode Base64' },
        { name: 'JSON Formatter', icon: 'fas fa-code', desc: 'Format JSON' },
        { name: 'Markdown Preview', icon: 'fab fa-markdown', desc: 'Live markdown preview' },
        { name: 'Age Calculator', icon: 'fas fa-calendar-alt', desc: 'Calculate exact age' },
        { name: 'Currency Converter', icon: 'fas fa-money-bill-wave', desc: 'Convert currencies' },
        { name: 'Password Strength', icon: 'fas fa-shield-alt', desc: 'Check password strength' },
        { name: 'Free Instagram Likes', icon: 'fas fa-heart', desc: 'Get free IG likes on your posts' },
        { name: 'Free Instagram Views', icon: 'fas fa-eye', desc: 'Get free IG video views' },
        { name: 'Free Instagram Followers', icon: 'fas fa-user-plus', desc: 'Get free IG followers' },
        { name: 'Free TikTok Likes', icon: 'fab fa-tiktok', desc: 'Get free TikTok video likes' },
        { name: 'Free TikTok Views', icon: 'fas fa-play-circle', desc: 'Get free TikTok views' },
        { name: 'Free TikTok Followers', icon: 'fab fa-tiktok', desc: 'Get free TikTok followers' }
    ],
    orders: JSON.parse(localStorage.getItem('mb_orders') || '[]'),
    adminServices: JSON.parse(localStorage.getItem('mb_adminServices') || '[]')
};

// ============================================================
// DOM READY
// ============================================================
document.addEventListener('DOMContentLoaded', function() {

    // --- Preloader ---
    var preloader = document.getElementById('preloader');
    setTimeout(function() { preloader.classList.add('hidden'); }, 2000);

    // ============================================================
    // NAVIGATION SYSTEM — One page at a time
    // ============================================================
    var currentPage = 'home';

    function switchPage(pageId) {
        // Hide all pages
        document.querySelectorAll('.page').forEach(function(p) { p.classList.remove('active'); });
        // Show target
        var target = document.getElementById('page-' + pageId);
        if (target) target.classList.add('active');
        // Update tab links
        document.querySelectorAll('.tab-link').forEach(function(t) {
            t.classList.toggle('active', t.dataset.section === pageId);
        });
        document.querySelectorAll('.sidebar-link').forEach(function(l) {
            l.classList.toggle('active', l.dataset.section === pageId);
        });
        currentPage = pageId;
        // Scroll top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        // Close sidebar
        closeSidebar();
    }

    // Tab clicks
    document.querySelectorAll('.tab-link, .sidebar-link').forEach(function(el) {
        el.addEventListener('click', function(e) {
            e.preventDefault();
            var section = this.dataset.section;
            if (section === 'more') section = 'more';
            switchPage(section);
        });
    });

    // Section links (e.g. "Get Started" button)
    document.querySelectorAll('.section-link').forEach(function(el) {
        el.addEventListener('click', function(e) {
            e.preventDefault();
            var href = this.getAttribute('href');
            if (href) {
                var section = href.replace('#', '');
                if (section === 'more') section = 'more';
                switchPage(section);
            }
        });
    });

    // Hash-based navigation (for direct links)
    function handleHash() {
        var hash = window.location.hash.replace('#', '');
        if (hash === 'admin') { toggleAdmin(); return; }
        if (hash && document.getElementById('page-' + hash)) {
            switchPage(hash);
        }
    }
    window.addEventListener('hashchange', handleHash);
    handleHash();

    // ============================================================
    // SIDEBAR
    // ============================================================
    var sidebar = document.getElementById('sidebar');
    var sidebarOverlay = document.getElementById('sidebarOverlay');
    var menuToggle = document.getElementById('menuToggle');
    var sidebarClose = document.getElementById('sidebarClose');

    function openSidebar() {
        sidebar.classList.add('open');
        sidebarOverlay.classList.add('active');
    }
    function closeSidebar() {
        sidebar.classList.remove('open');
        sidebarOverlay.classList.remove('active');
    }
    if (menuToggle) menuToggle.addEventListener('click', openSidebar);
    if (sidebarClose) sidebarClose.addEventListener('click', closeSidebar);
    if (sidebarOverlay) sidebarOverlay.addEventListener('click', closeSidebar);

    // ============================================================
    // COUNTERS (animated)
    // ============================================================
    function animateCounter(el, target) {
        if (!el) return;
        var current = 0;
        var step = Math.ceil(target / 40);
        var interval = setInterval(function() {
            current += step;
            if (current >= target) { current = target; clearInterval(interval); }
            el.textContent = current.toLocaleString();
        }, 30);
    }

    // Load from localStorage
    var orderCount = DB.orders.length;
    var completedOrders = DB.orders.filter(function(o) { return o.status === 'completed'; }).length;
    animateCounter(document.getElementById('totalOrders'), completedOrders || 0);
    animateCounter(document.getElementById('totalCustomers'), completedOrders || 0);
    animateCounter(document.getElementById('totalCountries'), 15);
    animateCounter(document.getElementById('totalUsers'), DB.orders.length || 0);

    // ============================================================
    // SERVICES GRID with Pricing
    // ============================================================
    function renderServices(filter) {
        var grid = document.getElementById('servicesGrid');
        if (!grid) return;
        var filterEl = document.getElementById('servicesFilter');
        if (!filterEl) return;

        // Get unique platforms
        var platforms = [];
        DB.services.forEach(function(s) {
            if (platforms.indexOf(s.platform) === -1) platforms.push(s.platform);
        });

        // Render filter buttons
        var filterHtml = '<button class="filter-btn active" data-filter="all">All</button>';
        platforms.forEach(function(p) {
            filterHtml += '<button class="filter-btn" data-filter="' + p + '">' + p + '</button>';
        });
        filterEl.innerHTML = filterHtml;

        // Filter click
        filterEl.querySelectorAll('.filter-btn').forEach(function(btn) {
            btn.addEventListener('click', function() {
                filterEl.querySelectorAll('.filter-btn').forEach(function(b) { b.classList.remove('active'); });
                this.classList.add('active');
                renderServices(this.dataset.filter);
            });
        });

        // Filter services
        var services = DB.services;
        if (filter && filter !== 'all') {
            services = services.filter(function(s) { return s.platform === filter; });
        }

        // Build grid
        var html = '';
        services.forEach(function(svc) {
            html += '<div class="service-card" onclick="openService(\'' + svc.platform + '\')">';
            html += '<div class="service-icon" style="background:' + svc.color + '20;color:' + svc.color + ';"><i class="' + svc.icon + '"></i></div>';
            html += '<h4>' + svc.platform + '</h4>';
            html += '<span class="service-count">' + svc.items.length + ' services</span>';
            html += '<div class="service-items">';
            svc.items.slice(0, 4).forEach(function(item) {
                var price = formatNaira(calculatePrice(item, 100));
                html += '<span class="service-tag">' + item + ' <small>' + price + '/100</small></span>';
            });
            if (svc.items.length > 4) html += '<span class="service-tag">+' + (svc.items.length - 4) + ' more</span>';
            html += '</div></div>';
        });
        grid.innerHTML = html;
    }
    renderServices('all');

    // ============================================================
    // OPEN SERVICE → Go to Order with platform pre-selected
    // ============================================================
    window.openService = function(platform) {
        var select = document.getElementById('orderPlatform');
        if (select) {
            for (var i = 0; i < select.options.length; i++) {
                if (select.options[i].value === platform) {
                    select.value = platform;
                    break;
                }
            }
            updateServices();
        }
        switchPage('order');
    };

    // ============================================================
    // ORDER FORM
    // ============================================================
    var orderPlatform = document.getElementById('orderPlatform');
    var orderService = document.getElementById('orderService');
    var orderQuantity = document.getElementById('orderQuantity');
    var orderUsername = document.getElementById('orderUsername');
    var orderEmail = document.getElementById('orderEmail');

    if (orderPlatform) {
        orderPlatform.addEventListener('change', function() {
            updateServices();
            updatePrice();
        });
    }

    if (orderService) {
        orderService.addEventListener('change', function() {
            updatePrice();
        });
    }

    if (orderQuantity) {
        orderQuantity.addEventListener('change', function() {
            if (parseInt(this.value) < 10) this.value = 10;
            updatePrice();
        });
        orderQuantity.addEventListener('input', function() {
            updatePrice();
        });
    }

    window.adjustQty = function(amount) {
        var input = document.getElementById('orderQuantity');
        if (!input) return;
        var val = parseInt(input.value) || 100;
        val = Math.max(10, val + amount);
        input.value = val;
        updatePrice();
    };

    function updateServices() {
        if (!orderPlatform || !orderService) return;
        var platform = orderPlatform.value;
        orderService.innerHTML = '<option value="">Select service...</option>';
        if (!platform) return;
        var svc = DB.services.filter(function(s) { return s.platform === platform; });
        if (svc.length === 0) return;
        svc[0].items.forEach(function(item) {
            var price = formatNaira(calculatePrice(item, 100));
            orderService.innerHTML += '<option value="' + item + '">' + item + ' (' + price + '/100)</option>';
        });
    }

    function updatePrice() {
        var service = orderService ? orderService.value : '';
        var qty = parseInt(orderQuantity ? orderQuantity.value : 100) || 100;
        var price = calculatePrice(service, qty);
        var formatted = formatNaira(price);
        var priceDisplay = document.getElementById('totalPrice');
        var priceBtn = document.getElementById('priceBtn');
        var payAmount = document.getElementById('payAmount');
        var payAmountMoMo = document.getElementById('payAmountMoMo');
        if (priceDisplay) priceDisplay.textContent = formatted;
        if (priceBtn) priceBtn.textContent = formatted;
        if (payAmount) payAmount.textContent = formatted;
        if (payAmountMoMo) payAmountMoMo.textContent = formatted;
    }

    // ============================================================
    // PROFILE PREVIEW (when username/link entered)
    // ============================================================
    window.previewProfile = function() {
        var input = document.getElementById('orderUsername');
        var preview = document.getElementById('profilePreview');
        var img = document.getElementById('profilePreviewImg');
        var name = document.getElementById('profilePreviewName');
        var platform = document.getElementById('profilePreviewPlatform');
        if (!input || !preview) return;
        var val = input.value.trim();
        if (val.length < 3) { preview.style.display = 'none'; return; }

        // Generate avatar from username
        var avatarUrl = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(val.replace(/[^a-zA-Z0-9_]/g, '')) + '&background=3b82f6&color=fff&size=80&bold=true';
        img.src = avatarUrl;
        name.textContent = val.length > 20 ? val.substring(0, 20) + '...' : val;
        var platSelect = document.getElementById('orderPlatform');
        platform.textContent = platSelect ? platSelect.value || 'Social Media' : 'Social Media';
        preview.style.display = 'flex';
    };

    // ============================================================
    // PROCEED TO PAYMENT
    // ============================================================
    window.proceedToPayment = function() {
        var platform = orderPlatform ? orderPlatform.value : '';
        var service = orderService ? orderService.value : '';
        var qty = parseInt(orderQuantity ? orderQuantity.value : 0) || 0;
        var username = orderUsername ? orderUsername.value.trim() : '';
        var email = orderEmail ? orderEmail.value.trim() : '';

        if (!platform) { showToast('Select a platform', 'error'); return; }
        if (!service) { showToast('Select a service', 'error'); return; }
        if (qty < 10) { showToast('Minimum quantity is 10', 'error'); return; }
        if (!username) { showToast('Enter your username or profile link', 'error'); return; }
        if (!email) { showToast('Enter your email for updates', 'error'); return; }

        // Store order data for payment page
        sessionStorage.setItem('mb_pendingOrder', JSON.stringify({
            platform: platform,
            service: service,
            quantity: qty,
            username: username,
            email: email,
            price: calculatePrice(service, qty)
        }));

        // Update payment amounts
        updatePrice();
        switchPage('payment');
    };

    // ============================================================
    // CONFIRM ORDER (I Have Paid)
    // ============================================================
    window.openConfirmOrder = function() {
        var pending = JSON.parse(sessionStorage.getItem('mb_pendingOrder') || '{}');
        if (!pending.service) { showToast('No pending order. Go back to order page.', 'error'); return; }

        showModal(
            '<h3 style="margin-bottom:16px;">📝 Confirm Your Order</h3>' +
            '<div style="background:rgba(255,255,255,0.03);border-radius:12px;padding:16px;margin-bottom:16px;">' +
            '<p><strong>Platform:</strong> ' + (pending.platform || 'N/A') + '</p>' +
            '<p><strong>Service:</strong> ' + (pending.service || 'N/A') + '</p>' +
            '<p><strong>Quantity:</strong> ' + (pending.quantity || 0).toLocaleString() + '</p>' +
            '<p><strong>Username:</strong> ' + (pending.username || 'N/A') + '</p>' +
            '<p><strong>Total:</strong> <span style="color:var(--green);font-size:1.2rem;font-weight:700;">' + formatNaira(pending.price || 0) + '</span></p>' +
            '</div>' +
            '<div class="form-section"><label class="form-label">Transaction ID</label><input type="text" id="confirmTxnId" class="form-input" placeholder="e.g. OPay transaction ref"></div>' +
            '<div class="form-section"><label class="form-label">Payment Method</label><select id="confirmMethod" class="form-select"><option>OPay (Nigeria)</option><option>MoMo (Mobile Money)</option></select></div>' +
            '<div class="form-section"><label class="form-label">Sender Name</label><input type="text" id="confirmSender" class="form-input" placeholder="Your full name"></div>' +
            '<div class="form-section"><label class="form-label">Phone Number</label><input type="tel" id="confirmPhone" class="form-input" placeholder="+234..."></div>' +
            '<button class="btn btn-success btn-glow btn-full btn-lg" onclick="submitOrder()"><i class="fas fa-check"></i> Submit Order</button>',
            'Confirm Payment'
        );
    };

    window.submitOrder = function() {
        var pending = JSON.parse(sessionStorage.getItem('mb_pendingOrder') || '{}');
        var txnId = document.getElementById('confirmTxnId');
        var method = document.getElementById('confirmMethod');
        var sender = document.getElementById('confirmSender');
        var phone = document.getElementById('confirmPhone');

        if (!txnId || !txnId.value.trim()) { showToast('Enter transaction ID', 'error'); return; }
        if (!sender || !sender.value.trim()) { showToast('Enter your name', 'error'); return; }

        var order = {
            id: 'MB-' + new Date().getFullYear() + '-' + String(Date.now()).slice(-4),
            platform: pending.platform || 'N/A',
            service: pending.service || 'N/A',
            quantity: pending.quantity || 0,
            username: pending.username || 'N/A',
            email: pending.email || 'N/A',
            price: pending.price || 0,
            txnId: txnId.value.trim(),
            method: method ? method.value : 'OPay',
            sender: sender.value.trim(),
            phone: phone ? phone.value.trim() : 'N/A',
            status: 'pending',
            date: new Date().toISOString()
        };

        var orders = JSON.parse(localStorage.getItem('mb_orders') || '[]');
        orders.unshift(order);
        localStorage.setItem('mb_orders', JSON.stringify(orders));
        DB.orders = orders;

        sessionStorage.removeItem('mb_pendingOrder');
        closeModal();
        showToast('✅ Order submitted! Reference: ' + order.id, 'success');

        // Show success
        showModal(
            '<div style="text-align:center;padding:20px;">' +
            '<i class="fas fa-check-circle" style="font-size:4rem;color:var(--green);margin-bottom:16px;"></i>' +
            '<h3 style="color:var(--green);">Order Received!</h3>' +
            '<p style="color:var(--text-secondary);margin:12px 0;">Your order is now under review.</p>' +
            '<p style="background:rgba(255,255,255,0.05);padding:8px 16px;border-radius:8px;font-family:monospace;font-size:0.9rem;">' + order.id + '</p>' +
            '<p style="font-size:0.8rem;color:var(--text-muted);margin-top:12px;">You will receive a confirmation email shortly.</p>' +
            '<button class="btn btn-primary" onclick="closeModal();switchPage(\'dashboard\')" style="margin-top:16px;"><i class="fas fa-chart-line"></i> View Dashboard</button>' +
            '</div>',
            '🎉 Success!'
        );

        updateDashboard();
        animateCounter(document.getElementById('totalOrders'), DB.orders.filter(function(o) { return o.status === 'completed'; }).length);
    };

    // ============================================================
    // DASHBOARD
    // ============================================================
    function updateDashboard() {
        var orders = DB.orders;
        var active = orders.filter(function(o) { return o.status === 'active' || o.status === 'pending'; }).length;
        var completed = orders.filter(function(o) { return o.status === 'completed'; }).length;
        var cancelled = orders.filter(function(o) { return o.status === 'cancelled'; }).length;

        var dashActive = document.getElementById('dashActive');
        var dashCompleted = document.getElementById('dashCompleted');
        var dashCancelled = document.getElementById('dashCancelled');
        if (dashActive) dashActive.textContent = active;
        if (dashCompleted) dashCompleted.textContent = completed;
        if (dashCancelled) dashCancelled.textContent = cancelled;

        renderOrders('all');

        // Profile
        var lastOrder = orders[0];
        if (lastOrder) {
            var pn = document.getElementById('profileName');
            var pe = document.getElementById('profileEmail');
            var pp = document.getElementById('profilePhone');
            if (pn) pn.textContent = lastOrder.sender || 'Guest User';
            if (pe) pe.textContent = lastOrder.email || 'Not set';
            if (pp) pp.textContent = lastOrder.phone || 'Not set';
        }
    }

    window.filterOrders = function(status) {
        document.querySelectorAll('.dash-filter-btn').forEach(function(b) { b.classList.remove('active'); });
        var activeBtn = document.querySelector('.dash-filter-btn[onclick*="' + status + '"]');
        if (activeBtn) activeBtn.classList.add('active');
        renderOrders(status);
    };

    function renderOrders(status) {
        var list = document.getElementById('ordersList');
        if (!list) return;
        var orders = DB.orders;
        if (status && status !== 'all') {
            orders = orders.filter(function(o) { return o.status === status; });
        }
        if (orders.length === 0) {
            list.innerHTML = '<p class="empty-state">No orders found.</p>';
            return;
        }
        var html = '';
        orders.forEach(function(o) {
            var statusClass = o.status === 'completed' ? 'status-completed' : (o.status === 'cancelled' ? 'status-cancelled' : 'status-pending');
            var statusIcon = o.status === 'completed' ? '✅' : (o.status === 'cancelled' ? '❌' : '⏳');
            html += '<div class="order-item">' +
                '<div class="order-item-header">' +
                '<span class="order-id">' + o.id + '</span>' +
                '<span class="order-status ' + statusClass + '">' + statusIcon + ' ' + o.status.charAt(0).toUpperCase() + o.status.slice(1) + '</span>' +
                '</div>' +
                '<div class="order-item-body">' +
                '<p><strong>' + o.platform + '</strong> — ' + o.service + ' × ' + (o.quantity || 0).toLocaleString() + '</p>' +
                '<p class="order-meta">' + (o.username || '') + ' | ' + formatNaira(o.price || 0) + '</p>' +
                '</div>' +
                '<div class="order-item-date">' + new Date(o.date).toLocaleDateString() + '</div>' +
                '</div>';
        });
        list.innerHTML = html;
    }

    window.switchDashTab = function(tab) {
        document.querySelectorAll('.dash-tab').forEach(function(t) { t.classList.remove('active'); });
        document.querySelectorAll('.dash-content').forEach(function(c) { c.classList.remove('active'); });
        var tabEl = document.querySelector('.dash-tab[onclick*="' + tab + '"]');
        if (tabEl) tabEl.classList.add('active');
        var content = document.getElementById('dash' + tab.charAt(0).toUpperCase() + tab.slice(1));
        if (content) content.classList.add('active');
    };

    // ============================================================
    // REFERRAL
    // ============================================================
    window.copyReferralLink = function() {
        var input = document.getElementById('referralLink');
        if (input) {
            input.select();
            document.execCommand('copy');
            showToast('Referral link copied!', 'success');
        }
    };

    // ============================================================
    // TOOLS GRID
    // ============================================================
    function renderTools() {
        var grid = document.getElementById('toolsGrid');
        if (!grid) return;
        var html = '';
        DB.tools.forEach(function(tool) {
            html += '<div class="tool-card" onclick="handleToolClick(\'' + tool.name.replace(/'/g, "\\'") + '\')">' +
                '<i class="' + tool.icon + '"></i>' +
                '<h4>' + tool.name + '</h4>' +
                '<p>' + tool.desc + '</p>' +
                '</div>';
        });
        grid.innerHTML = html;
    }
    renderTools();

    // ============================================================
    // FAQ ACCORDION
    // ============================================================
    document.querySelectorAll('.faq-question').forEach(function(q) {
        q.addEventListener('click', function() {
            var item = this.parentElement;
            var wasActive = item.classList.contains('active');
            document.querySelectorAll('.faq-item').forEach(function(i) { i.classList.remove('active'); });
            if (!wasActive) item.classList.add('active');
        });
    });

    // ============================================================
    // HIDDEN ADMIN PANEL (Secret access)
    // ============================================================
    var isAdminLoggedIn = false;
    var adminTapCount = 0;
    var adminTapTimer = null;

    // Secret: tap the brand logo 5 times fast
    var brandLink = document.getElementById('brandLink');
    if (brandLink) {
        brandLink.addEventListener('click', function(e) {
            e.preventDefault();
            adminTapCount++;
            if (adminTapTimer) clearTimeout(adminTapTimer);
            adminTapTimer = setTimeout(function() { adminTapCount = 0; }, 1500);
            if (adminTapCount >= 5) {
                adminTapCount = 0;
                toggleAdmin();
            }
        });
    }

    // Also check URL hash for #admin
    if (window.location.hash === '#admin') {
        setTimeout(toggleAdmin, 500);
    }

    function toggleAdmin() {
        var loggedIn = localStorage.getItem('mb_adminLoggedIn');
        if (loggedIn === 'true') {
            isAdminLoggedIn = true;
            showAdminPanel();
            return;
        }
        showModal(
            '<h3 style="margin-bottom:16px;">🔐 Admin Login</h3>' +
            '<div class="form-section"><label class="form-label">Admin Username</label><input type="text" id="adminUser" class="form-input" placeholder="admin"></div>' +
            '<div class="form-section"><label class="form-label">Password</label><input type="password" id="adminPass" class="form-input" placeholder="••••••••"></div>' +
            '<button class="btn btn-primary btn-full" onclick="adminLogin()"><i class="fas fa-lock"></i> Login</button>' +
            '<p style="font-size:0.7rem;color:var(--text-muted);margin-top:12px;text-align:center;">Hidden admin panel — authorized access only</p>',
            'Admin Access'
        );
    }

    window.adminLogin = function() {
        var user = document.getElementById('adminUser');
        var pass = document.getElementById('adminPass');
        if (user && user.value === 'zeus' && pass && pass.value === 'media2026') {
            isAdminLoggedIn = true;
            localStorage.setItem('mb_adminLoggedIn', 'true');
            closeModal();
            showAdminPanel();
            showToast('Welcome, Zeus!', 'success');
        } else {
            showToast('Invalid credentials', 'error');
        }
    };

    function showAdminPanel() {
        showModal(
            '<h3 style="margin-bottom:16px;">⚙️ Hidden Admin Panel</h3>' +
            '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:16px;">' +
            '<div style="padding:12px;background:rgba(255,255,255,0.03);border-radius:8px;text-align:center;"><span style="display:block;font-size:1.5rem;font-weight:800;color:var(--blue);" id="adminTotalOrders">' + DB.orders.length + '</span><span style="font-size:0.7rem;color:var(--text-muted);">Total Orders</span></div>' +
            '<div style="padding:12px;background:rgba(255,255,255,0.03);border-radius:8px;text-align:center;"><span style="display:block;font-size:1.5rem;font-weight:800;color:var(--orange);" id="adminPendingOrders">' + DB.orders.filter(function(o) { return o.status === 'pending'; }).length + '</span><span style="font-size:0.7rem;color:var(--text-muted);">Pending</span></div>' +
            '<div style="padding:12px;background:rgba(255,255,255,0.03);border-radius:8px;text-align:center;"><span style="display:block;font-size:1.5rem;font-weight:800;color:var(--green);" id="adminRevenue">' + formatNaira(DB.orders.reduce(function(sum, o) { return sum + (parseFloat(o.price) || 0); }, 0)) + '</span><span style="font-size:0.7rem;color:var(--text-muted);">Revenue</span></div>' +
            '<div style="padding:12px;background:rgba(255,255,255,0.03);border-radius:8px;text-align:center;"><span style="display:block;font-size:1.5rem;font-weight:800;color:var(--purple);" id="adminUsers">' + new Set(DB.orders.map(function(o) { return o.email; })).size + '</span><span style="font-size:0.7rem;color:var(--text-muted);">Users</span></div>' +
            '</div>' +
            '<div style="margin-bottom:12px;">' +
            '<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px;">' +
            '<button class="btn btn-sm btn-secondary" onclick="adminViewOrders()">📋 View Orders</button>' +
            '<button class="btn btn-sm btn-secondary" onclick="adminLogout()">🚪 Logout</button>' +
            '</div>' +
            '<div id="adminOrdersList"></div>' +
            '</div>',
            '⚙️ Admin Panel'
        );
        adminViewOrders();
    }

    window.adminViewOrders = function() {
        var container = document.getElementById('adminOrdersList');
        if (!container) return;
        var orders = DB.orders;
        if (orders.length === 0) {
            container.innerHTML = '<p style="color:var(--text-muted);text-align:center;padding:20px;">No orders yet</p>';
            return;
        }
        var html = '';
        orders.forEach(function(o, i) {
            var statusActions = '';
            if (o.status === 'pending') {
                statusActions = '<button class="btn btn-sm btn-success" onclick="adminApprove(' + i + ')">✅ Approve</button> <button class="btn btn-sm btn-danger" onclick="adminReject(' + i + ')">❌ Reject</button>';
            } else {
                statusActions = '<span style="font-size:0.75rem;color:var(--text-muted);">' + o.status + '</span>';
            }
            html += '<div style="padding:10px;margin-bottom:8px;background:rgba(255,255,255,0.02);border-radius:6px;font-size:0.8rem;">' +
                '<div style="display:flex;justify-content:space-between;align-items:center;">' +
                '<span><strong>' + o.id + '</strong> — ' + o.platform + ' ' + o.service + ' × ' + (o.quantity || 0).toLocaleString() + '</span>' +
                '<span>' + statusActions + '</span>' +
                '</div>' +
                '<div style="font-size:0.7rem;color:var(--text-muted);margin-top:4px;">' +
                o.sender + ' | ' + o.email + ' | ' + formatNaira(o.price || 0) + ' | Txn: ' + (o.txnId || 'N/A') +
                '</div></div>';
        });
        container.innerHTML = html;
    };

    window.adminApprove = function(index) {
        var orders = JSON.parse(localStorage.getItem('mb_orders') || '[]');
        if (orders[index]) { orders[index].status = 'completed'; }
        localStorage.setItem('mb_orders', JSON.stringify(orders));
        DB.orders = orders;
        adminViewOrders();
        updateDashboard();
        showToast('Order approved ✅', 'success');
    };

    window.adminReject = function(index) {
        var orders = JSON.parse(localStorage.getItem('mb_orders') || '[]');
        if (orders[index]) { orders[index].status = 'cancelled'; }
        localStorage.setItem('mb_orders', JSON.stringify(orders));
        DB.orders = orders;
        adminViewOrders();
        updateDashboard();
        showToast('Order rejected', 'info');
    };

    window.adminLogout = function() {
        isAdminLoggedIn = false;
        localStorage.removeItem('mb_adminLoggedIn');
        closeModal();
        showToast('Logged out', 'info');
    };

    // ============================================================
    // MODAL & TOAST HELPERS
    // ============================================================
    window.showModal = function(html, title) {
        var body = document.getElementById('modalBody');
        var overlay = document.getElementById('modalOverlay');
        if (!body || !overlay) return;
        var titleHtml = title ? '<h2 style="margin-bottom:16px;font-size:1.3rem;">' + title + '</h2>' : '';
        body.innerHTML = titleHtml + html;
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    window.closeModal = function() {
        var overlay = document.getElementById('modalOverlay');
        if (overlay) overlay.classList.remove('active');
        document.body.style.overflow = '';
    };

    var modalClose = document.getElementById('modalClose');
    var modalOverlay = document.getElementById('modalOverlay');
    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modalOverlay) {
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === modalOverlay) closeModal();
        });
    }

    window.showToast = function(message, type) {
        var container = document.getElementById('toastContainer');
        if (!container) return;
        var toast = document.createElement('div');
        toast.className = 'toast ' + (type || 'info');
        var icons = { success: 'check-circle', error: 'times-circle', info: 'info-circle' };
        var icon = icons[type] || 'info-circle';
        toast.innerHTML = '<i class="fas fa-' + icon + '"></i> ' + message;
        container.appendChild(toast);
        setTimeout(function() { toast.remove(); }, 4000);
    };

    window.copyToClipboard = function(text) {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text).then(function() {
                showToast('Copied!', 'success');
            });
        } else {
            var textarea = document.createElement('textarea');
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            showToast('Copied!', 'success');
        }
    };

    // ============================================================
    // INIT
    // ============================================================
    updateDashboard();
    updatePrice();

    console.log('MEDIA BOOST v2 loaded');
    console.log('Owner: Zeus | ge5853987@gmail.com');
    console.log('💡 Hidden admin: tap logo 5x or add #admin to URL');
});
