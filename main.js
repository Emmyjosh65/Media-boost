/**
 * ============================================================
 * MEDIA BOOST — Core Module v3
 * Owner: Zeus  |  Contact: ge5853987@gmail.com
 * WhatsApp: 09066760078  |  Email: ge5853987@gmail.com
 * 
 * Features:
 * - Tab navigation (one page at a time)
 * - Price: followers ₦1,000/100, views ₦600/100, likes ₦600/100
 * - User types quantity manually → price shows live
 * - Real social media profile photo auto-fetched via oEmbed API
 * - WhatsApp & Email submission after payment
 * - Hidden admin (tap logo 5x or #admin)
 * ============================================================
 */
'use strict';

// ===== PRICING =====
const PRICE_FOLLOWERS = 1000;
const PRICE_VIEWS = 600;
const PRICE_LIKES = 600;

function getPricePerHundred(serviceName) {
    var n = (serviceName || '').toLowerCase();
    if (n.indexOf('follower') !== -1 || n.indexOf('subscriber') !== -1 || n.indexOf('member') !== -1) return PRICE_FOLLOWERS;
    if (n.indexOf('like') !== -1 || n.indexOf('comment') !== -1 || n.indexOf('reaction') !== -1 || n.indexOf('save') !== -1 || n.indexOf('share') !== -1) return PRICE_LIKES;
    if (n.indexOf('view') !== -1 || n.indexOf('visit') !== -1 || n.indexOf('watch') !== -1 || n.indexOf('live') !== -1) return PRICE_VIEWS;
    return PRICE_VIEWS;
}

function calculatePrice(serviceName, quantity) {
    var q = parseInt(quantity) || 0;
    return (q / 100) * getPricePerHundred(serviceName);
}

function formatNaira(amount) {
    return '₦' + Math.round(amount).toLocaleString();
}

// ===== DATA =====
var DB = {
    services: [
        { platform: 'Instagram', icon: 'fab fa-instagram', color: '#E4405F', items: ['Followers','Likes','Views','Reels Views','Story Views','Saves','Comments','Profile Visits'] },
        { platform: 'TikTok', icon: 'fab fa-tiktok', color: '#000', items: ['Followers','Likes','Views','Shares','Comments','Live Views'] },
        { platform: 'Facebook', icon: 'fab fa-facebook', color: '#1877F2', items: ['Page Likes','Followers','Video Views','Post Likes','Shares','Comments'] },
        { platform: 'YouTube', icon: 'fab fa-youtube', color: '#FF0000', items: ['Subscribers','Views','Likes','Comments','Watch Hours'] },
        { platform: 'WhatsApp', icon: 'fab fa-whatsapp', color: '#25D366', items: ['Channel Followers','Channel Reactions'] },
        { platform: 'Telegram', icon: 'fab fa-telegram', color: '#0088CC', items: ['Members','Views','Reactions'] },
        { platform: 'X (Twitter)', icon: 'fab fa-x-twitter', color: '#000', items: ['Followers','Likes','Views','Retweets','Comments'] },
        { platform: 'Snapchat', icon: 'fab fa-snapchat', color: '#FFFC00', items: ['Followers','Views','Lenses Views'] },
        { platform: 'LinkedIn', icon: 'fab fa-linkedin', color: '#0A66C2', items: ['Followers','Post Likes','Profile Views','Comments'] },
        { platform: 'Twitch', icon: 'fab fa-twitch', color: '#9146FF', items: ['Followers','Views','Live Views'] },
        { platform: 'Spotify', icon: 'fab fa-spotify', color: '#1DB954', items: ['Followers','Monthly Listeners','Playlist Followers'] },
        { platform: 'SoundCloud', icon: 'fab fa-soundcloud', color: '#FF5500', items: ['Followers','Plays','Likes','Reposts'] },
        { platform: 'Pinterest', icon: 'fab fa-pinterest', color: '#E60023', items: ['Followers','Pins','Repins','Likes'] },
        { platform: 'YouTube Music', icon: 'fas fa-music', color: '#FF0000', items: ['Subscribers','Views','Likes'] },
        { platform: 'TikTok Music', icon: 'fas fa-headphones', color: '#000', items: ['Followers','Plays','Likes'] },
        { platform: 'Facebook Story', icon: 'fas fa-history', color: '#1877F2', items: ['Story Views','Story Reactions'] },
        { platform: 'IG Story', icon: 'fas fa-history', color: '#E4405F', items: ['Story Views','Story Reactions'] },
        { platform: 'IG TV', icon: 'fas fa-tv', color: '#E4405F', items: ['Views','Likes','Comments'] },
        { platform: 'Threads', icon: 'fab fa-threads', color: '#000', items: ['Followers','Likes','Views','Reposts'] },
        { platform: 'Discord', icon: 'fab fa-discord', color: '#5865F2', items: ['Members','Online Members'] }
    ],
    tools: [
        { name:'IG Profile Pic Downloader', icon:'fas fa-download', desc:'Download any IG profile picture' },
        { name:'IG Video Downloader', icon:'fab fa-instagram', desc:'Download Instagram videos' },
        { name:'IG Reels Downloader', icon:'fab fa-instagram', desc:'Download Instagram Reels' },
        { name:'TikTok Video Downloader', icon:'fab fa-tiktok', desc:'Download TikTok videos' },
        { name:'FB Video Downloader', icon:'fab fa-facebook', desc:'Download Facebook videos' },
        { name:'YT Thumbnail Downloader', icon:'fab fa-youtube', desc:'Download YouTube thumbnails' },
        { name:'YT Tags Extractor', icon:'fab fa-youtube', desc:'Extract video tags' },
        { name:'Hashtag Generator', icon:'fas fa-hashtag', desc:'Generate trending hashtags' },
        { name:'Username Generator', icon:'fas fa-user', desc:'Create cool usernames' },
        { name:'Bio Generator', icon:'fas fa-pen', desc:'Generate social bios' },
        { name:'Caption Generator', icon:'fas fa-quote-right', desc:'AI-powered captions' },
        { name:'Emoji Generator', icon:'fas fa-smile', desc:'Generate emoji combos' },
        { name:'QR Code Generator', icon:'fas fa-qrcode', desc:'Create QR codes' },
        { name:'Password Generator', icon:'fas fa-lock', desc:'Secure random passwords' },
        { name:'Image Compressor', icon:'fas fa-compress', desc:'Compress images online' },
        { name:'Image Converter', icon:'fas fa-exchange-alt', desc:'Convert image formats' },
        { name:'Video Thumbnail Gen', icon:'fas fa-image', desc:'Generate video thumbnails' },
        { name:'Text to Emoji', icon:'fas fa-arrow-right', desc:'Convert text to emoji' },
        { name:'Emoji to Text', icon:'fas fa-arrow-left', desc:'Convert emoji to text' },
        { name:'Font Generator', icon:'fas fa-font', desc:'Fancy font styles' },
        { name:'Color Palette Gen', icon:'fas fa-palette', desc:'Beautiful color schemes' },
        { name:'HEX to RGB', icon:'fas fa-eyedropper', desc:'Convert HEX to RGB' },
        { name:'Word Counter', icon:'fas fa-file-alt', desc:'Count words and characters' },
        { name:'Character Counter', icon:'fas fa-sort-alpha-up', desc:'Count text characters' },
        { name:'URL Shortener', icon:'fas fa-link', desc:'Shorten long URLs' },
        { name:'Base64 Encoder', icon:'fas fa-lock', desc:'Encode to Base64' },
        { name:'Base64 Decoder', icon:'fas fa-unlock', desc:'Decode Base64' },
        { name:'JSON Formatter', icon:'fas fa-code', desc:'Format JSON' },
        { name:'Markdown Preview', icon:'fab fa-markdown', desc:'Live markdown preview' },
        { name:'Age Calculator', icon:'fas fa-calendar-alt', desc:'Calculate exact age' },
        { name:'Currency Converter', icon:'fas fa-money-bill-wave', desc:'Convert currencies' },
        { name:'Password Strength', icon:'fas fa-shield-alt', desc:'Check password strength' },
        { name:'Free Instagram Likes', icon:'fas fa-heart', desc:'Get free IG likes on your posts' },
        { name:'Free Instagram Views', icon:'fas fa-eye', desc:'Get free IG video views' },
        { name:'Free Instagram Followers', icon:'fas fa-user-plus', desc:'Get free IG followers' },
        { name:'Free TikTok Likes', icon:'fab fa-tiktok', desc:'Get free TikTok video likes' },
        { name:'Free TikTok Views', icon:'fas fa-play-circle', desc:'Get free TikTok views' },
        { name:'Free TikTok Followers', icon:'fab fa-tiktok', desc:'Get free TikTok followers' }
    ],
    orders: JSON.parse(localStorage.getItem('mb_orders') || '[]')
};

// ===== DOM READY =====
document.addEventListener('DOMContentLoaded', function() {

    var preloader = document.getElementById('preloader');
    if (preloader) { setTimeout(function() { preloader.classList.add('hidden'); }, 2000); }

    // ===== NAVIGATION =====
    function switchPage(pageId) {
        document.querySelectorAll('.page').forEach(function(p) { p.classList.remove('active'); });
        var target = document.getElementById('page-' + pageId);
        if (target) target.classList.add('active');
        document.querySelectorAll('.tab-link').forEach(function(t) { t.classList.toggle('active', t.dataset.section === pageId); });
        document.querySelectorAll('.sidebar-link').forEach(function(l) { l.classList.toggle('active', l.dataset.section === pageId); });
        window.scrollTo({ top: 0, behavior: 'smooth' });
        closeSidebar();
    }

    document.querySelectorAll('.tab-link, .sidebar-link').forEach(function(el) {
        el.addEventListener('click', function(e) {
            e.preventDefault();
            switchPage(this.dataset.section);
        });
    });

    document.querySelectorAll('.section-link').forEach(function(el) {
        el.addEventListener('click', function(e) {
            e.preventDefault();
            var s = this.getAttribute('href').replace('#', '');
            switchPage(s === 'more' ? 'more' : s);
        });
    });

    function handleHash() {
        var hash = window.location.hash.replace('#', '');
        if (hash === 'admin') { setTimeout(toggleAdmin, 300); return; }
        if (hash && document.getElementById('page-' + hash)) { switchPage(hash); }
    }
    window.addEventListener('hashchange', handleHash);
    handleHash();

    // ===== SIDEBAR =====
    var sidebar = document.getElementById('sidebar');
    var sidebarOverlay = document.getElementById('sidebarOverlay');
    var menuToggle = document.getElementById('menuToggle');
    var sidebarClose = document.getElementById('sidebarClose');

    window.openSidebar = function() { if(sidebar) sidebar.classList.add('open'); if(sidebarOverlay) sidebarOverlay.classList.add('active'); };
    window.closeSidebar = function() { if(sidebar) sidebar.classList.remove('open'); if(sidebarOverlay) sidebarOverlay.classList.remove('active'); };
    if (menuToggle) menuToggle.addEventListener('click', openSidebar);
    if (sidebarClose) sidebarClose.addEventListener('click', closeSidebar);
    if (sidebarOverlay) sidebarOverlay.addEventListener('click', closeSidebar);

    // ===== COUNTERS =====
    function animateCounter(el, target) {
        if (!el) return;
        var current = 0;
        var step = Math.ceil(target / 40) || 1;
        var interval = setInterval(function() {
            current += step;
            if (current >= target) { current = target; clearInterval(interval); }
            el.textContent = current.toLocaleString();
        }, 30);
    }

    var completedCount = DB.orders.filter(function(o) { return o.status === 'completed'; }).length;
    animateCounter(document.getElementById('totalOrders'), completedCount || 0);
    animateCounter(document.getElementById('totalCustomers'), completedCount || 0);
    animateCounter(document.getElementById('totalCountries'), 15);
    animateCounter(document.getElementById('totalUsers'), DB.orders.length || 0);

    // ===== SERVICES GRID =====
    function renderServices(filter) {
        var grid = document.getElementById('servicesGrid');
        var filterEl = document.getElementById('servicesFilter');
        if (!grid || !filterEl) return;
        var platforms = [];
        DB.services.forEach(function(s) { if (platforms.indexOf(s.platform) === -1) platforms.push(s.platform); });
        var fHtml = '<button class="filter-btn active" data-filter="all">All</button>';
        platforms.forEach(function(p) { fHtml += '<button class="filter-btn" data-filter="'+p+'">'+p+'</button>'; });
        filterEl.innerHTML = fHtml;
        filterEl.querySelectorAll('.filter-btn').forEach(function(btn) {
            btn.addEventListener('click', function() {
                filterEl.querySelectorAll('.filter-btn').forEach(function(b) { b.classList.remove('active'); });
                this.classList.add('active');
                renderServices(this.dataset.filter);
            });
        });

        var services = DB.services;
        if (filter && filter !== 'all') { services = services.filter(function(s) { return s.platform === filter; }); }
        var html = '';
        services.forEach(function(svc) {
            html += '<div class="service-card" onclick="openService(\''+svc.platform+'\')">';
            html += '<div class="service-icon" style="background:'+svc.color+'20;color:'+svc.color+'"><i class="'+svc.icon+'"></i></div>';
            html += '<h4>'+svc.platform+'</h4>';
            html += '<span class="service-count">'+svc.items.length+' services</span>';
            html += '<div class="service-items">';
            svc.items.slice(0,5).forEach(function(item) {
                html += '<span class="service-tag">'+item+'</span>';
            });
            if (svc.items.length > 5) html += '<span class="service-tag">+'+(svc.items.length-5)+' more</span>';
            html += '</div></div>';
        });
        grid.innerHTML = html;
    }
    renderServices('all');

    window.openService = function(platform) {
        var select = document.getElementById('orderPlatform');
        if (select) {
            for (var i = 0; i < select.options.length; i++) {
                if (select.options[i].value === platform) { select.value = platform; break; }
            }
            updateServices();
        }
        switchPage('order');
    };

    // ===== ORDER FORM =====
    var orderPlatform = document.getElementById('orderPlatform');
    var orderService = document.getElementById('orderService');
    var orderQuantity = document.getElementById('orderQuantity');

    if (orderPlatform) { orderPlatform.addEventListener('change', function() { updateServices(); updatePrice(); }); }
    if (orderService) { orderService.addEventListener('change', updatePrice); }
    if (orderQuantity) {
        orderQuantity.addEventListener('input', updatePrice);
        orderQuantity.addEventListener('change', updatePrice);
    }

    function updateServices() {
        if (!orderPlatform || !orderService) return;
        var platform = orderPlatform.value;
        orderService.innerHTML = '<option value="">Select service...</option>';
        if (!platform) return;
        var svc = DB.services.filter(function(s) { return s.platform === platform; });
        if (svc.length === 0) return;
        svc[0].items.forEach(function(item) {
            // ONLY show service name, NO price in dropdown
            orderService.innerHTML += '<option value="'+item+'">'+item+'</option>';
        });
    }

    function updatePrice() {
        var service = orderService ? orderService.value : '';
        var qty = parseInt(orderQuantity ? orderQuantity.value : 0) || 0;
        var price = calculatePrice(service, qty);
        var formatted = formatNaira(price);
        ['totalPrice','priceBtn','payAmount','payAmountMoMo'].forEach(function(id) {
            var el = document.getElementById(id);
            if (el) el.textContent = formatted;
        });
    }

    // ===== PROFILE PREVIEW with REAL Social Media Photo =====
    window.previewProfile = function() {
        var input = document.getElementById('orderUsername');
        var preview = document.getElementById('profilePreview');
        var img = document.getElementById('profilePreviewImg');
        var nameEl = document.getElementById('profilePreviewName');
        var platEl = document.getElementById('profilePreviewPlatform');
        if (!input || !preview) return;
        var val = input.value.trim();
        if (val.length < 3) { preview.style.display = 'none'; return; }

        // Extract username from URL or raw username
        var username = val.replace(/^https?:\/\/(www\.)?(instagram\.com|tiktok\.com|facebook\.com|twitter\.com|x\.com|snapchat\.com|youtube\.com|linkedin\.com|twitch\.tv)\//, '')
                         .replace(/[\/\?#].*$/, '')
                         .replace('@', '');
        if (!username) username = val.replace(/[^a-zA-Z0-9_\.]/g, '');

        // Get platform name
        var platSelect = document.getElementById('orderPlatform');
        var platform = platSelect && platSelect.value ? platSelect.value : 'Social Media';
        platEl.textContent = platform;

        // Show real profile photo using Instagram/Youtube oEmbed or fallback
        var imgUrl = '';
        var platLower = platform.toLowerCase();

        if (platLower.indexOf('instagram') !== -1) {
            // Try Instagram oEmbed API for real profile
            imgUrl = 'https://ui-avatars.com/api/?name='+encodeURIComponent(username)+'&background=E4405F&color=fff&size=120&bold=true';
            // Attempt real profile via Instagram oEmbed
            var igUrl = 'https://www.instagram.com/' + username + '/';
            fetch('https://api.instagram.com/oembed?url='+encodeURIComponent(igUrl)+'&format=json')
                .then(function(r) { return r.json(); })
                .then(function(d) {
                    if (d && d.thumbnail_url) { img.src = d.thumbnail_url; }
                })
                .catch(function(){});
        } else if (platLower.indexOf('tiktok') !== -1) {
            imgUrl = 'https://ui-avatars.com/api/?name='+encodeURIComponent(username)+'&background=000000&color=fff&size=120&bold=true';
        } else if (platLower.indexOf('youtube') !== -1) {
            imgUrl = 'https://ui-avatars.com/api/?name='+encodeURIComponent(username)+'&background=FF0000&color=fff&size=120&bold=true';
        } else if (platLower.indexOf('facebook') !== -1) {
            imgUrl = 'https://ui-avatars.com/api/?name='+encodeURIComponent(username)+'&background=1877F2&color=fff&size=120&bold=true';
        } else if (platLower.indexOf('twitter') !== -1 || platLower.indexOf('x ') !== -1) {
            imgUrl = 'https://ui-avatars.com/api/?name='+encodeURIComponent(username)+'&background=000000&color=fff&size=120&bold=true';
        } else {
            imgUrl = 'https://ui-avatars.com/api/?name='+encodeURIComponent(username)+'&background=3b82f6&color=fff&size=120&bold=true';
        }

        img.src = imgUrl;
        nameEl.textContent = val.length > 20 ? val.substring(0,20)+'...' : val;
        preview.style.display = 'flex';

        // Also try to get real photo from Google's cache or other sources
        // Second attempt with a different API for Instagram
        if (platLower.indexOf('instagram') !== -1) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'https://www.instagram.com/' + username + '/?__a=1&__d=1', true);
            xhr.withCredentials = false;
            xhr.onload = function() {
                try {
                    var data = JSON.parse(xhr.responseText);
                    var profilePic = data?.graphql?.user?.profile_pic_url_hd || data?.graphql?.user?.profile_pic_url;
                    if (profilePic) { img.src = profilePic; }
                } catch(e) {}
            };
            xhr.send();
        }
    };

    // ===== PROCEED TO PAYMENT =====
    window.proceedToPayment = function() {
        var platform = orderPlatform ? orderPlatform.value : '';
        var service = orderService ? orderService.value : '';
        var qty = parseInt(orderQuantity ? orderQuantity.value : 0) || 0;
        var username = document.getElementById('orderUsername');
        var email = document.getElementById('orderEmail');
        var uname = username ? username.value.trim() : '';
        var em = email ? email.value.trim() : '';

        if (!platform) { showToast('Select a platform', 'error'); return; }
        if (!service) { showToast('Select a service', 'error'); return; }
        if (qty < 10) { showToast('Minimum quantity is 10', 'error'); return; }
        if (!uname) { showToast('Enter your username or profile link', 'error'); return; }
        if (!em) { showToast('Enter your email for updates', 'error'); return; }

        sessionStorage.setItem('mb_pendingOrder', JSON.stringify({
            platform: platform, service: service, quantity: qty, username: uname, email: em, price: calculatePrice(service, qty)
        }));
        updatePrice();
        switchPage('payment');
    };

    // ===== CONFIRM ORDER =====
    window.openConfirmOrder = function() {
        var pending = JSON.parse(sessionStorage.getItem('mb_pendingOrder') || '{}');
        if (!pending.service) { showToast('No pending order. Go back to order page.', 'error'); return; }
        showModal(
            '<h3 style="margin-bottom:16px;">📝 Confirm Your Order</h3>'+
            '<div style="background:rgba(255,255,255,0.03);border-radius:12px;padding:16px;margin-bottom:16px;">'+
            '<p><strong>Platform:</strong> '+(pending.platform||'N/A')+'</p>'+
            '<p><strong>Service:</strong> '+(pending.service||'N/A')+'</p>'+
            '<p><strong>Quantity:</strong> '+(pending.quantity||0).toLocaleString()+'</p>'+
            '<p><strong>Username:</strong> '+(pending.username||'N/A')+'</p>'+
            '<p><strong>Total:</strong> <span style="color:var(--green);font-size:1.2rem;font-weight:700;">'+formatNaira(pending.price||0)+'</span></p>'+
            '</div>'+
            '<div class="form-section"><label class="form-label">Transaction ID</label><input type="text" id="confirmTxnId" class="form-input" placeholder="e.g. OPay transaction ref"></div>'+
            '<div class="form-section"><label class="form-label">Payment Method</label><select id="confirmMethod" class="form-select"><option>OPay (Nigeria)</option><option>MoMo (Mobile Money)</option></select></div>'+
            '<div class="form-section"><label class="form-label">Sender Name</label><input type="text" id="confirmSender" class="form-input" placeholder="Your full name"></div>'+
            '<div class="form-section"><label class="form-label">Phone Number</label><input type="tel" id="confirmPhone" class="form-input" placeholder="+234..."></div>'+
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
            id: 'MB-'+new Date().getFullYear()+'-'+String(Date.now()).slice(-4),
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

        // Save to localStorage
        var orders = JSON.parse(localStorage.getItem('mb_orders') || '[]');
        orders.unshift(order);
        localStorage.setItem('mb_orders', JSON.stringify(orders));
        DB.orders = orders;
        sessionStorage.removeItem('mb_pendingOrder');
        closeModal();

        // Send to WhatsApp
        var waMsg = '🆕 *NEW ORDER - MEDIA BOOST*%0A' +
                    '━━━━━━━━━━━━━━%0A' +
                    '👤 *Customer:* ' + encodeURIComponent(order.sender) + '%0A' +
                    '📞 *Phone:* ' + encodeURIComponent(order.phone) + '%0A' +
                    '📧 *Email:* ' + encodeURIComponent(order.email) + '%0A' +
                    '━━━━━━━━━━━━━━%0A' +
                    '📱 *Platform:* ' + encodeURIComponent(order.platform) + '%0A' +
                    '🎯 *Service:* ' + encodeURIComponent(order.service) + '%0A' +
                    '🔢 *Quantity:* ' + order.quantity.toLocaleString() + '%0A' +
                    '👤 *Username:* ' + encodeURIComponent(order.username) + '%0A' +
                    '━━━━━━━━━━━━━━%0A' +
                    '💰 *Amount:* ' + formatNaira(order.price) + '%0A' +
                    '💳 *Payment:* ' + encodeURIComponent(order.method) + '%0A' +
                    '🏷️ *Txn ID:* ' + encodeURIComponent(order.txnId) + '%0A' +
                    '🆔 *Order ID:* ' + order.id + '%0A' +
                    '📅 *Date:* ' + encodeURIComponent(new Date(order.date).toLocaleString()) + '%0A' +
                    '━━━━━━━━━━━━━━%0A' +
                    '✅ *Status:* Pending Approval%0A' +
                    'Please process this order. 🙏';

        var waUrl = 'https://wa.me/2349066760078?text=' + waMsg;

        // Send to Email
        var emailSubject = 'NEW ORDER - ' + order.id + ' - ' + order.platform + ' ' + order.service;
        var emailBody = 'NEW ORDER - MEDIA BOOST\n' +
                        '================================\n\n' +
                        'Customer: ' + order.sender + '\n' +
                        'Phone: ' + order.phone + '\n' +
                        'Email: ' + order.email + '\n\n' +
                        'Platform: ' + order.platform + '\n' +
                        'Service: ' + order.service + '\n' +
                        'Quantity: ' + order.quantity.toLocaleString() + '\n' +
                        'Username: ' + order.username + '\n\n' +
                        'Amount: ' + formatNaira(order.price) + '\n' +
                        'Payment Method: ' + order.method + '\n' +
                        'Transaction ID: ' + order.txnId + '\n' +
                        'Order ID: ' + order.id + '\n' +
                        'Date: ' + new Date(order.date).toLocaleString() + '\n\n' +
                        'Status: Pending Approval\n' +
                        'Please process this order.';

        var mailtoUrl = 'mailto:ge5853987@gmail.com?subject=' + encodeURIComponent(emailSubject) + '&body=' + encodeURIComponent(emailBody);

        // Show success message with WhatsApp + Email buttons
        showModal(
            '<div style="text-align:center;padding:20px;">'+
            '<i class="fas fa-check-circle" style="font-size:4rem;color:var(--green);margin-bottom:16px;"></i>'+
            '<h3 style="color:var(--green);">Order Received!</h3>'+
            '<p style="color:var(--text-secondary);margin:12px 0;">Your order has been saved. Please send your payment details to the owner via WhatsApp or Email below.</p>'+
            '<p style="background:rgba(255,255,255,0.05);padding:8px 16px;border-radius:8px;font-family:monospace;font-size:0.9rem;">'+order.id+'</p>'+
            '<div style="display:flex;gap:12px;justify-content:center;margin-top:16px;flex-wrap:wrap;">'+
            '<a href="'+waUrl+'" target="_blank" class="btn btn-success" style="padding:12px 24px;display:inline-flex;align-items:center;gap:8px;text-decoration:none;"><i class="fab fa-whatsapp" style="font-size:1.2rem;"></i> Send to WhatsApp</a>'+
            '<a href="'+mailtoUrl+'" class="btn btn-primary" style="padding:12px 24px;display:inline-flex;align-items:center;gap:8px;text-decoration:none;"><i class="fas fa-envelope" style="font-size:1.2rem;"></i> Send to Email</a>'+
            '</div>'+
            '<p style="font-size:0.8rem;color:var(--text-muted);margin-top:16px;">After sending, the owner will confirm and process your order.</p>'+
            '<button class="btn btn-glass" onclick="closeModal();switchPage(\'dashboard\')" style="margin-top:12px;"><i class="fas fa-chart-line"></i> View Dashboard</button>'+
            '</div>',
            '🎉 Success!'
        );

        // Auto-open WhatsApp in new tab
        setTimeout(function() {
            window.open(waUrl, '_blank');
        }, 800);

        showToast('✅ Order submitted! Send payment details via WhatsApp', 'success');
        updateDashboard();
    };

    // ===== DASHBOARD =====
    function updateDashboard() {
        var orders = DB.orders;
        var active = orders.filter(function(o) { return o.status === 'active' || o.status === 'pending'; }).length;
        var completed = orders.filter(function(o) { return o.status === 'completed'; }).length;
        var cancelled = orders.filter(function(o) { return o.status === 'cancelled'; }).length;
        ['dashActive','dashCompleted','dashCancelled','dashReferrals'].forEach(function(id) {
            var el = document.getElementById(id);
            if (!el) return;
            var val = id === 'dashActive' ? active : (id === 'dashCompleted' ? completed : (id === 'dashCancelled' ? cancelled : 0));
            el.textContent = val;
        });
        renderOrders('all');
        var last = orders[0];
        if (last) {
            ['profileName','profileEmail','profilePhone'].forEach(function(id) {
                var el = document.getElementById(id);
                if (!el) return;
                if (id === 'profileName') el.textContent = last.sender || 'Guest User';
                if (id === 'profileEmail') el.textContent = last.email || 'Not set';
                if (id === 'profilePhone') el.textContent = last.phone || 'Not set';
            });
        }
    }

    window.filterOrders = function(status) {
        document.querySelectorAll('.dash-filter-btn').forEach(function(b) { b.classList.remove('active'); });
        var btns = document.querySelectorAll('.dash-filter-btn');
        for (var i = 0; i < btns.length; i++) {
            if (btns[i].getAttribute('onclick') && btns[i].getAttribute('onclick').indexOf("'"+status+"'") !== -1) {
                btns[i].classList.add('active'); break;
            }
        }
        renderOrders(status);
    };

    function renderOrders(status) {
        var list = document.getElementById('ordersList');
        if (!list) return;
        var orders = DB.orders;
        if (status && status !== 'all') { orders = orders.filter(function(o) { return o.status === status; }); }
        if (orders.length === 0) { list.innerHTML = '<p class="empty-state">No orders found.</p>'; return; }
        var html = '';
        orders.forEach(function(o) {
            var sc = o.status === 'completed' ? 'status-completed' : (o.status === 'cancelled' ? 'status-cancelled' : 'status-pending');
            var si = o.status === 'completed' ? '✅' : (o.status === 'cancelled' ? '❌' : '⏳');
            html += '<div class="order-item">'+
                '<div class="order-item-header"><span class="order-id">'+o.id+'</span><span class="order-status '+sc+'">'+si+' '+o.status.charAt(0).toUpperCase()+o.status.slice(1)+'</span></div>'+
                '<div class="order-item-body"><p><strong>'+o.platform+'</strong> — '+o.service+' × '+(o.quantity||0).toLocaleString()+'</p>'+
                '<p class="order-meta">'+(o.username||'')+' | '+formatNaira(o.price||0)+'</p></div>'+
                '<div class="order-item-date">'+new Date(o.date).toLocaleDateString()+'</div></div>';
        });
        list.innerHTML = html;
    }

    window.switchDashTab = function(tab) {
        document.querySelectorAll('.dash-tab').forEach(function(t) { t.classList.remove('active'); });
        document.querySelectorAll('.dash-content').forEach(function(c) { c.classList.remove('active'); });
        var tabs = document.querySelectorAll('.dash-tab');
        for (var i = 0; i < tabs.length; i++) {
            if (tabs[i].getAttribute('onclick') && tabs[i].getAttribute('onclick').indexOf("'"+tab+"'") !== -1) {
                tabs[i].classList.add('active'); break;
            }
        }
        var content = document.getElementById('dash' + tab.charAt(0).toUpperCase() + tab.slice(1));
        if (content) content.classList.add('active');
    };

    window.copyReferralLink = function() {
        var input = document.getElementById('referralLink');
        if (input) { input.select(); document.execCommand('copy'); showToast('Referral link copied!', 'success'); }
    };

    // ===== TOOLS GRID =====
    function renderTools() {
        var grid = document.getElementById('toolsGrid');
        if (!grid) return;
        var html = '';
        DB.tools.forEach(function(tool) {
            html += '<div class="tool-card" onclick="handleToolClick(\''+tool.name.replace(/'/g,"\\'")+'\')">'+
                '<i class="'+tool.icon+'"></i>'+
                '<h4>'+tool.name+'</h4>'+
                '<p>'+tool.desc+'</p></div>';
        });
        grid.innerHTML = html;
    }
    renderTools();

    // ===== FAQ =====
    document.querySelectorAll('.faq-question').forEach(function(q) {
        q.addEventListener('click', function() {
            var item = this.parentElement;
            var wasActive = item.classList.contains('active');
            document.querySelectorAll('.faq-item').forEach(function(i) { i.classList.remove('active'); });
            if (!wasActive) item.classList.add('active');
        });
    });

    // ===== HIDDEN ADMIN =====
    var adminTapCount = 0;
    var adminTapTimer = null;
    var brandLink = document.getElementById('brandLink');
    if (brandLink) {
        brandLink.addEventListener('click', function(e) {
            e.preventDefault();
            adminTapCount++;
            if (adminTapTimer) clearTimeout(adminTapTimer);
            adminTapTimer = setTimeout(function() { adminTapCount = 0; }, 1500);
            if (adminTapCount >= 5) { adminTapCount = 0; toggleAdmin(); }
        });
    }
    if (window.location.hash === '#admin') { setTimeout(toggleAdmin, 500); }

    function toggleAdmin() {
        if (localStorage.getItem('mb_adminLoggedIn') === 'true') { showAdminPanel(); return; }
        showModal(
            '<h3 style="margin-bottom:16px;">🔐 Admin Login</h3>'+
            '<div class="form-section"><label class="form-label">Admin Username</label><input type="text" id="adminUser" class="form-input" placeholder="admin"></div>'+
            '<div class="form-section"><label class="form-label">Password</label><input type="password" id="adminPass" class="form-input" placeholder="••••••••"></div>'+
            '<button class="btn btn-primary btn-full" onclick="adminLogin()"><i class="fas fa-lock"></i> Login</button>'+
            '<p style="font-size:0.7rem;color:var(--text-muted);margin-top:12px;text-align:center;">Hidden admin panel — authorized access only</p>',
            'Admin Access'
        );
    }

    window.adminLogin = function() {
        var user = document.getElementById('adminUser');
        var pass = document.getElementById('adminPass');
        if (user && user.value === 'zeus' && pass && pass.value === 'media2026') {
            localStorage.setItem('mb_adminLoggedIn', 'true');
            closeModal();
            showAdminPanel();
            showToast('Welcome, Zeus!', 'success');
        } else { showToast('Invalid credentials', 'error'); }
    };

    function showAdminPanel() {
        var totalRevenue = DB.orders.reduce(function(sum, o) { return sum + (parseFloat(o.price) || 0); }, 0);
        var uniqueEmails = new Set(DB.orders.map(function(o) { return o.email; }));
        showModal(
            '<h3 style="margin-bottom:16px;">⚙️ Hidden Admin Panel</h3>'+
            '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:16px;">'+
            '<div style="padding:12px;background:rgba(255,255,255,0.03);border-radius:8px;text-align:center;"><span style="display:block;font-size:1.5rem;font-weight:800;color:var(--blue);">'+DB.orders.length+'</span><span style="font-size:0.7rem;color:var(--text-muted);">Total Orders</span></div>'+
            '<div style="padding:12px;background:rgba(255,255,255,0.03);border-radius:8px;text-align:center;"><span style="display:block;font-size:1.5rem;font-weight:800;color:var(--orange);">'+DB.orders.filter(function(o){return o.status==='pending'}).length+'</span><span style="font-size:0.7rem;color:var(--text-muted);">Pending</span></div>'+
            '<div style="padding:12px;background:rgba(255,255,255,0.03);border-radius:8px;text-align:center;"><span style="display:block;font-size:1.5rem;font-weight:800;color:var(--green);">'+formatNaira(totalRevenue)+'</span><span style="font-size:0.7rem;color:var(--text-muted);">Revenue</span></div>'+
            '<div style="padding:12px;background:rgba(255,255,255,0.03);border-radius:8px;text-align:center;"><span style="display:block;font-size:1.5rem;font-weight:800;color:var(--purple);">'+uniqueEmails.size+'</span><span style="font-size:0.7rem;color:var(--text-muted);">Users</span></div>'+
            '</div>'+
            '<div style="margin-bottom:12px;"><div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px;">'+
            '<button class="btn btn-sm btn-secondary" onclick="adminViewOrders()">📋 View Orders</button>'+
            '<button class="btn btn-sm btn-danger" onclick="adminLogout()">🚪 Logout</button></div>'+
            '<div id="adminOrdersList"></div></div>',
            '⚙️ Admin Panel'
        );
        adminViewOrders();
    }

    window.adminViewOrders = function() {
        var container = document.getElementById('adminOrdersList');
        if (!container) return;
        var orders = DB.orders;
        if (orders.length === 0) { container.innerHTML = '<p style="color:var(--text-muted);text-align:center;padding:20px;">No orders yet</p>'; return; }
        var html = '';
        orders.forEach(function(o, i) {
            var actions = o.status === 'pending'
                ? '<button class="btn btn-sm btn-success" onclick="adminApprove('+i+')">✅ Approve</button> <button class="btn btn-sm btn-danger" onclick="adminReject('+i+')">❌ Reject</button>'
                : '<span style="font-size:0.75rem;color:var(--text-muted);">'+o.status+'</span>';
            html += '<div style="padding:10px;margin-bottom:8px;background:rgba(255,255,255,0.02);border-radius:6px;font-size:0.8rem;">'+
                '<div style="display:flex;justify-content:space-between;align-items:center;">'+
                '<span><strong>'+o.id+'</strong> — '+o.platform+' '+o.service+' × '+(o.quantity||0).toLocaleString()+'</span>'+
                '<span>'+actions+'</span></div>'+
                '<div style="font-size:0.7rem;color:var(--text-muted);margin-top:4px;">'+
                o.sender+' | '+o.email+' | '+formatNaira(o.price||0)+' | Txn: '+(o.txnId||'N/A')+
                '</div></div>';
        });
        container.innerHTML = html;
    };

    window.adminApprove = function(index) {
        var orders = JSON.parse(localStorage.getItem('mb_orders') || '[]');
        if (orders[index]) orders[index].status = 'completed';
        localStorage.setItem('mb_orders', JSON.stringify(orders));
        DB.orders = orders;
        adminViewOrders(); updateDashboard(); showToast('Order approved ✅', 'success');
    };

    window.adminReject = function(index) {
        var orders = JSON.parse(localStorage.getItem('mb_orders') || '[]');
        if (orders[index]) orders[index].status = 'cancelled';
        localStorage.setItem('mb_orders', JSON.stringify(orders));
        DB.orders = orders;
        adminViewOrders(); updateDashboard(); showToast('Order rejected', 'info');
    };

    window.adminLogout = function() {
        localStorage.removeItem('mb_adminLoggedIn');
        closeModal(); showToast('Logged out', 'info');
    };

    // ===== MODAL =====
    window.showModal = function(html, title) {
        var body = document.getElementById('modalBody');
        var overlay = document.getElementById('modalOverlay');
        if (!body || !overlay) return;
        body.innerHTML = (title ? '<h2 style="margin-bottom:16px;font-size:1.3rem;">'+title+'</h2>' : '') + html;
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

    // ===== TOAST =====
    window.showToast = function(message, type) {
        var container = document.getElementById('toastContainer');
        if (!container) return;
        var toast = document.createElement('div');
        toast.className = 'toast ' + (type || 'info');
        var icons = { success: 'check-circle', error: 'times-circle', info: 'info-circle' };
        toast.innerHTML = '<i class="fas fa-'+(icons[type]||'info-circle')+'"></i> '+message;
        container.appendChild(toast);
        setTimeout(function() { toast.remove(); }, 4000);
    };

    window.copyToClipboard = function(text) {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text).then(function() { showToast('Copied!', 'success'); });
        } else {
            var ta = document.createElement('textarea');
            ta.value = text; document.body.appendChild(ta);
            ta.select(); document.execCommand('copy');
            document.body.removeChild(ta);
            showToast('Copied!', 'success');
        }
    };

    // ===== INIT =====
    updateDashboard();
    updatePrice();
    console.log('MEDIA BOOST v3 loaded — Zeus 👑');
});
