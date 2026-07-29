/**
 * ============================================================
 * MEDIA BOOST — Core Module v4 FIXED
 * Owner: Zeus  |  Contact: ge5853987@gmail.com
 * WhatsApp: 09066760078  |  Email: ge5853987@gmail.com
 * 
 * FIXES IN v4:
 * - Admin login: .trim(), keyboard shortcut (Ctrl+Shift+A), cache busting
 * - Real APIs: Frankfurter.dev (currency), is.gd (URL shortener)
 * - Free tools: Realistic Famety-style engagement flow with localStorage
 * - Price calculation fixed for payment section
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
        {platform:'Instagram',icon:'fab fa-instagram',color:'#E4405F',items:['Followers','Likes','Views','Reels Views','Story Views','Saves','Comments','Profile Visits']},
        {platform:'TikTok',icon:'fab fa-tiktok',color:'#000000',items:['Followers','Likes','Views','Shares','Comments','Profile Visits']},
        {platform:'Facebook',icon:'fab fa-facebook',color:'#1877F2',items:['Page Likes','Followers','Video Views','Post Likes','Shares','Comments']},
        {platform:'YouTube',icon:'fab fa-youtube',color:'#FF0000',items:['Subscribers','Views','Likes','Comments','Watch Hours']},
        {platform:'WhatsApp',icon:'fab fa-whatsapp',color:'#25D366',items:['Channel Followers','Channel Reactions']},
        {platform:'Telegram',icon:'fab fa-telegram',color:'#0088CC',items:['Members','Views','Reactions']},
        {platform:'X (Twitter)',icon:'fab fa-x-twitter',color:'#000000',items:['Followers','Likes','Views','Retweets','Comments']},
        {platform:'Snapchat',icon:'fab fa-snapchat',color:'#FFFC00',items:['Followers','Views','Lenses Views']},
        {platform:'LinkedIn',icon:'fab fa-linkedin',color:'#0A66C2',items:['Followers','Post Likes','Profile Views','Comments']},
        {platform:'Twitch',icon:'fab fa-twitch',color:'#9146FF',items:['Followers','Views','Live Views']},
        {platform:'Spotify',icon:'fab fa-spotify',color:'#1DB954',items:['Followers','Monthly Listeners','Playlist Followers']},
        {platform:'SoundCloud',icon:'fab fa-soundcloud',color:'#FF5500',items:['Followers','Plays','Likes','Reposts']},
        {platform:'Pinterest',icon:'fab fa-pinterest',color:'#E60023',items:['Followers','Pins','Repins','Likes']},
        {platform:'YouTube Music',icon:'fab fa-youtube',color:'#FF0000',items:['Subscribers','Views','Likes']},
        {platform:'TikTok Music',icon:'fab fa-tiktok',color:'#000000',items:['Followers','Plays','Likes']},
        {platform:'Facebook Story',icon:'fab fa-facebook',color:'#1877F2',items:['Story Views','Story Reactions']},
        {platform:'IG Story',icon:'fab fa-instagram',color:'#E4405F',items:['Story Views','Story Reactions']},
        {platform:'IG TV',icon:'fab fa-instagram',color:'#E4405F',items:['Views','Likes','Comments']},
        {platform:'Threads',icon:'fab fa-threads',color:'#000000',items:['Followers','Likes','Views','Reposts']},
        {platform:'Discord',icon:'fab fa-discord',color:'#5865F2',items:['Members','Online Members']}
    ],
    tools: [
        {name:'IG Profile Pic Downloader',desc:'Download any IG profile picture',icon:'fas fa-image',color:'#E4405F'},
        {name:'IG Video Downloader',desc:'Download Instagram videos',icon:'fas fa-video',color:'#E4405F'},
        {name:'IG Reels Downloader',desc:'Download Instagram Reels',icon:'fas fa-film',color:'#E4405F'},
        {name:'TikTok Video Downloader',desc:'Download TikTok videos',icon:'fab fa-tiktok',color:'#000'},
        {name:'FB Video Downloader',desc:'Download Facebook videos',icon:'fab fa-facebook',color:'#1877F2'},
        {name:'YT Thumbnail Downloader',desc:'Download YouTube thumbnails',icon:'fab fa-youtube',color:'#FF0000'},
        {name:'YT Tags Extractor',desc:'Extract video tags',icon:'fas fa-tags',color:'#FF0000'},
        {name:'Hashtag Generator',desc:'Generate trending hashtags',icon:'fas fa-hashtag',color:'#E4405F'},
        {name:'Username Generator',desc:'Create cool usernames',icon:'fas fa-user',color:'#333'},
        {name:'Bio Generator',desc:'Generate social bios',icon:'fas fa-quote-right',color:'#333'},
        {name:'Caption Generator',desc:'AI-powered captions',icon:'fas fa-caption',color:'#333'},
        {name:'Emoji Generator',desc:'Generate emoji combos',icon:'fas fa-smile',color:'#FFD700'},
        {name:'QR Code Generator',desc:'Create QR codes',icon:'fas fa-qrcode',color:'#333'},
        {name:'Password Generator',desc:'Secure random passwords',icon:'fas fa-key',color:'#333'},
        {name:'Image Compressor',desc:'Compress images online',icon:'fas fa-compress',color:'#333'},
        {name:'Image Converter',desc:'Convert image formats',icon:'fas fa-exchange-alt',color:'#333'},
        {name:'Video Thumbnail Gen',desc:'Generate video thumbnails',icon:'fas fa-thumbtack',color:'#333'},
        {name:'Text to Emoji',desc:'Convert text to emoji',icon:'fas fa-smile-wink',color:'#FFD700'},
        {name:'Emoji to Text',desc:'Convert emoji to text',icon:'fas fa-font',color:'#FFD700'},
        {name:'Font Generator',desc:'Fancy font styles',icon:'fas fa-pen-fancy',color:'#333'},
        {name:'Color Palette Gen',desc:'Beautiful color schemes',icon:'fas fa-palette',color:'#333'},
        {name:'HEX to RGB',desc:'Convert HEX to RGB',icon:'fas fa-eye-dropper',color:'#333'},
        {name:'Word Counter',desc:'Count words and characters',icon:'fas fa-calculator',color:'#333'},
        {name:'Character Counter',desc:'Count text characters',icon:'fas fa-sort-alpha-up',color:'#333'},
        {name:'URL Shortener',desc:'Shorten long URLs (uses is.gd)',icon:'fas fa-link',color:'#333'},
        {name:'Base64 Encoder',desc:'Encode to Base64',icon:'fas fa-lock',color:'#333'},
        {name:'Base64 Decoder',desc:'Decode Base64',icon:'fas fa-unlock',color:'#333'},
        {name:'JSON Formatter',desc:'Format JSON',icon:'fas fa-code',color:'#333'},
        {name:'Markdown Preview',desc:'Live markdown preview',icon:'fab fa-markdown',color:'#333'},
        {name:'Age Calculator',desc:'Calculate exact age',icon:'fas fa-calendar-alt',color:'#333'},
        {name:'Currency Converter',desc:'Convert currencies (Frankfurter API)',icon:'fas fa-coins',color:'#333'},
        {name:'Password Strength',desc:'Check password strength',icon:'fas fa-shield-alt',color:'#333'},
        {name:'Free Instagram Likes',desc:'Get free IG likes on your posts',icon:'fab fa-instagram',color:'#E4405F'},
        {name:'Free Instagram Views',desc:'Get free IG video views',icon:'fab fa-instagram',color:'#E4405F'},
        {name:'Free Instagram Followers',desc:'Get free IG followers',icon:'fab fa-instagram',color:'#E4405F'},
        {name:'Free TikTok Likes',desc:'Get free TikTok video likes',icon:'fab fa-tiktok',color:'#000'},
        {name:'Free TikTok Views',desc:'Get free TikTok views',icon:'fab fa-tiktok',color:'#000'},
        {name:'Free TikTok Followers',desc:'Get free TikTok followers',icon:'fab fa-tiktok',color:'#000'}
    ],
    orders: JSON.parse(localStorage.getItem('mb_orders') || '[]')
};

// ===== NAVIGATION =====
function switchPage(pageId) {
    document.querySelectorAll('.page').forEach(function(p) { p.classList.remove('active'); });
    var target = document.getElementById('page-' + pageId);
    if (target) { target.classList.add('active'); window.scrollTo(0,0); }
}

document.addEventListener('DOMContentLoaded', function() {
    // Tab clicks
    document.querySelectorAll('.nav-link').forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            var section = this.getAttribute('data-section');
            if (section) switchPage(section);
        });
    });
    // Mobile hamburger
    var hamburger = document.getElementById('hamburger');
    var navMenu = document.getElementById('navMenu');
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
    // Start on home
    switchPage('home');

    // ===== ORDER FORM =====
    var platformSelect = document.getElementById('platformSelect');
    var serviceSelect = document.getElementById('serviceSelect');
    var quantityInput = document.getElementById('quantityInput');
    var usernameInput = document.getElementById('usernameInput');
    var emailInput = document.getElementById('emailInput');
    var totalPriceEl = document.getElementById('totalPrice');
    var profilePreview = document.getElementById('profilePreview');
    var proceedBtn = document.getElementById('proceedBtn');

    // Populate platforms
    if (platformSelect) {
        DB.services.forEach(function(s) {
            var opt = document.createElement('option');
            opt.value = s.platform;
            opt.textContent = s.platform;
            opt.setAttribute('data-icon', s.icon);
            opt.setAttribute('data-color', s.color);
            platformSelect.appendChild(opt);
        });
        platformSelect.addEventListener('change', function() {
            var plat = this.value;
            var svc = DB.services.find(function(s) { return s.platform === plat; });
            if (serviceSelect) {
                serviceSelect.innerHTML = '<option value="">Select service...</option>';
                if (svc) {
                    svc.items.forEach(function(item) {
                        var opt = document.createElement('option');
                        opt.value = item;
                        opt.textContent = item;
                        serviceSelect.appendChild(opt);
                    });
                    serviceSelect.disabled = false;
                } else {
                    serviceSelect.disabled = true;
                }
            }
            updatePrice();
        });
    }

    if (serviceSelect) {
        serviceSelect.addEventListener('change', updatePrice);
    }

    if (quantityInput) {
        quantityInput.addEventListener('input', updatePrice);
    }

    function updatePrice() {
        var svc = serviceSelect ? serviceSelect.value : '';
        var qty = parseInt(quantityInput ? quantityInput.value : 0) || 0;
        var price = calculatePrice(svc, qty);
        if (totalPriceEl) totalPriceEl.textContent = formatNaira(price);
        if (proceedBtn) {
            if (qty >= 10 && svc) {
                proceedBtn.disabled = false;
                proceedBtn.innerHTML = 'Proceed to Payment — ' + formatNaira(price);
            } else {
                proceedBtn.disabled = true;
                proceedBtn.innerHTML = 'Proceed to Payment — ' + formatNaira(price);
            }
        }
        // Update payment page amounts
        var payAmounts = document.querySelectorAll('.pay-amount');
        payAmounts.forEach(function(el) { el.textContent = formatNaira(price); });
    }

    // Profile preview
    var previewTimer = null;
    if (usernameInput) {
        usernameInput.addEventListener('input', function() {
            if (previewTimer) clearTimeout(previewTimer);
            var val = this.value.trim();
            if (!val) {
                if (profilePreview) { profilePreview.style.display = 'none'; }
                return;
            }
            previewTimer = setTimeout(function() { fetchProfilePreview(val); }, 800);
        });
    }

    function fetchProfilePreview(username) {
        var preview = profilePreview;
        if (!preview) return;
        var u = username.replace(/^https?:\/\//,'').replace(/^www\./,'').replace(/^instagram\.com\//,'').replace(/^@/,'').replace(/\/.*$/,'').trim();
        if (!u) { preview.style.display = 'none'; return; }
        preview.style.display = 'flex';
        preview.innerHTML = '<div class="preview-loading"><i class="fas fa-spinner fa-spin"></i> Loading...</div>';
        
        // Try oEmbed API
        var oembedUrl = 'https://api.instagram.com/oembed?url=https://instagram.com/' + encodeURIComponent(u) + '&format=json';
        fetch(oembedUrl)
            .then(function(r) { return r.json(); })
            .then(function(data) {
                if (data && data.thumbnail_url) {
                    preview.innerHTML = '<img src="' + data.thumbnail_url + '" alt="@"' + u + '" onerror="this.parentElement.innerHTML=\'<div class=\\\'preview-fallback\\\'><i class=\\\'fas fa-user-circle\\\'></i> @' + u + '</div>\'">';
                } else {
                    preview.innerHTML = '<div class="preview-fallback"><i class="fas fa-user-circle"></i> @' + u + '</div>';
                }
            })
            .catch(function() {
                preview.innerHTML = '<div class="preview-fallback"><i class="fas fa-user-circle"></i> @' + u + '</div>';
            });
    }

    // Proceed to payment
    if (proceedBtn) {
        proceedBtn.addEventListener('click', function() {
            var svc = serviceSelect ? serviceSelect.value : '';
            var qty = parseInt(quantityInput ? quantityInput.value : 0) || 0;
            var platform = platformSelect ? platformSelect.value : '';
            var username = usernameInput ? usernameInput.value.trim() : '';
            var email = emailInput ? emailInput.value.trim() : '';
            if (!platform) { showToast('Select a platform', 'error'); return; }
            if (!svc) { showToast('Select a service', 'error'); return; }
            if (qty < 10) { showToast('Minimum quantity is 10', 'error'); return; }
            if (!username) { showToast('Enter your username', 'error'); return; }
            if (!email) { showToast('Enter your email', 'error'); return; }
            
            var price = calculatePrice(svc, qty);
            // Store order in session
            sessionStorage.setItem('mb_currentOrder', JSON.stringify({
                platform: platform,
                service: svc,
                quantity: qty,
                price: price,
                username: username,
                email: email,
                time: new Date().toISOString()
            }));
            switchPage('payment');
        });
    }

    // ===== PAYMENT =====
    window.confirmPayment = function() {
        var orderData = JSON.parse(sessionStorage.getItem('mb_currentOrder') || '{}');
        if (!orderData.platform) { showToast('No order data. Please place an order first.', 'error'); switchPage('order'); return; }
        
        var txnId = 'MB-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).substr(2,6).toUpperCase();
        var order = {
            id: txnId,
            platform: orderData.platform,
            service: orderData.service,
            quantity: parseInt(orderData.quantity) || 0,
            price: parseFloat(orderData.price) || 0,
            sender: orderData.username,
            email: orderData.email,
            txnId: txnId,
            status: 'pending',
            date: new Date().toISOString()
        };
        
        DB.orders.push(order);
        localStorage.setItem('mb_orders', JSON.stringify(DB.orders));
        updateDashboard();
        
        // WhatsApp message
        var msg = 'NEW ORDER%0A' +
            'ID: ' + txnId + '%0A' +
            'Platform: ' + orderData.platform + '%0A' +
            'Service: ' + orderData.service + '%0A' +
            'Quantity: ' + orderData.quantity + '%0A' +
            'Price: ' + formatNaira(orderData.price) + '%0A' +
            'Username: ' + encodeURIComponent(orderData.username) + '%0A' +
            'Email: ' + encodeURIComponent(orderData.email) + '%0A' +
            'Txn: ' + txnId + '%0A' +
            'Status: PENDING';
        window.open('https://wa.me/2349066760078?text=' + msg, '_blank');
        
        // Email
        var subj = encodeURIComponent('New Order: ' + txnId + ' - ' + orderData.platform + ' ' + orderData.service);
        var body = encodeURIComponent(
            'NEW ORDER\n\n' +
            'Order ID: ' + txnId + '\n' +
            'Platform: ' + orderData.platform + '\n' +
            'Service: ' + orderData.service + '\n' +
            'Quantity: ' + orderData.quantity + '\n' +
            'Price: ' + formatNaira(orderData.price) + '\n' +
            'Username: ' + orderData.username + '\n' +
            'Email: ' + orderData.email + '\n' +
            'Transaction ID: ' + txnId + '\n' +
            'Status: PENDING\n\n' +
            'Please process this order.'
        );
        window.open('mailto:ge5853987@gmail.com?subject=' + subj + '&body=' + body, '_blank');
        
        sessionStorage.removeItem('mb_currentOrder');
        showToast('Order submitted! ✅ Check WhatsApp + Email', 'success');
        switchPage('dashboard');
    };

    // ===== DASHBOARD =====
    function updateDashboard() {
        var orders = DB.orders;
        var active = orders.filter(function(o) { return o.status === 'pending'; }).length;
        var completed = orders.filter(function(o) { return o.status === 'completed'; }).length;
        var cancelled = orders.filter(function(o) { return o.status === 'cancelled'; }).length;
        
        var activeEl = document.getElementById('dashActive');
        var completedEl = document.getElementById('dashCompleted');
        var cancelledEl = document.getElementById('dashCancelled');
        if (activeEl) activeEl.textContent = active;
        if (completedEl) completedEl.textContent = completed;
        if (cancelledEl) cancelledEl.textContent = cancelled;
        
        // Stats on home
        var ordersCompletedEl = document.getElementById('ordersCompleted');
        var happyCustomersEl = document.getElementById('happyCustomers');
        var activeUsersEl = document.getElementById('activeUsers');
        if (ordersCompletedEl) ordersCompletedEl.textContent = completed;
        if (happyCustomersEl) happyCustomersEl.textContent = orders.length;
        if (activeUsersEl) activeUsersEl.textContent = orders.length;
        
        // Orders list
        var list = document.getElementById('ordersList');
        if (list) {
            if (orders.length === 0) {
                list.innerHTML = '<p class="empty-state">No orders yet. Place your first order above!</p>';
            } else {
                var html = '';
                orders.forEach(function(o) {
                    var statusClass = o.status === 'completed' ? 'status-completed' : o.status === 'cancelled' ? 'status-cancelled' : 'status-pending';
                    html += '<div class="order-card"><div class="order-header"><strong>' + o.id + '</strong> <span class="' + statusClass + '">' + o.status.toUpperCase() + '</span></div>' +
                        '<p>' + o.platform + ' ' + o.service + ' × ' + (o.quantity||0).toLocaleString() + '</p>' +
                        '<p class="order-meta">' + o.sender + ' | ' + formatNaira(o.price||0) + '</p></div>';
                });
                list.innerHTML = html;
            }
        }
    }
    window.updateDashboard = updateDashboard;

    // Dashboard tabs
    document.querySelectorAll('.dash-tab').forEach(function(tab) {
        tab.addEventListener('click', function() {
            document.querySelectorAll('.dash-tab').forEach(function(t) { t.classList.remove('active'); });
            this.classList.add('active');
            document.querySelectorAll('.dash-content').forEach(function(c) { c.style.display = 'none'; });
            var target = document.getElementById('dash' + this.getAttribute('data-dashtab'));
            if (target) target.style.display = 'block';
        });
    });

    // Render tools
    function renderTools() {
        var grid = document.getElementById('toolsGrid');
        if (!grid) return;
        var html = '';
        DB.tools.forEach(function(tool) {
            html += '<div class="tool-card" onclick="handleToolClick(\'' + tool.name.replace(/'/g,"\\'") + '\')" style="border-top:3px solid ' + tool.color + '">' +
                '<div class="tool-icon" style="background:' + tool.color + '20;color:' + tool.color + '"><i class="' + tool.icon + '"></i></div>' +
                '<h4>' + tool.name + '</h4><p>' + tool.desc + '</p></div>';
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

    // ===== HIDDEN ADMIN v4 (FIXED) =====
    // Method 1: Tap logo 5x
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
    
    // Method 2: URL hash
    if (window.location.hash === '#admin') { setTimeout(toggleAdmin, 500); }
    
    // Method 3: Keyboard shortcut (Ctrl+Shift+A or Cmd+Shift+A)
    document.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'a' || e.key === 'A')) {
            e.preventDefault();
            toggleAdmin();
        }
    });

    // Method 4: Direct console access (open browser console and type: openAdmin())
    window.openAdmin = function() {
        toggleAdmin();
    };

    function toggleAdmin() {
        if (localStorage.getItem('mb_adminLoggedIn') === 'true') { showAdminPanel(); return; }
        showModal(
            '<h3>🔐 Admin Login</h3>' +
            '<p><small>Admin Username</small><br><input type="text" id="adminUser" placeholder="Username" class="modal-input" autocomplete="off"></p>' +
            '<p><small>Password</small><br><input type="password" id="adminPass" placeholder="Password" class="modal-input" autocomplete="off"></p>' +
            '<button onclick="adminLogin()" class="btn btn-primary" style="width:100%;margin-top:8px">🔑 Login</button>' +
            '<p style="text-align:center;margin-top:12px;font-size:12px;color:var(--gray)">Press Ctrl+Shift+A to open | Tap logo 5x</p>',
            'Admin Access'
        );
        // Focus first input
        setTimeout(function() {
            var u = document.getElementById('adminUser');
            if (u) u.focus();
        }, 100);
        // Enter key handler
        setTimeout(function() {
            var p = document.getElementById('adminPass');
            if (p) {
                p.addEventListener('keydown', function(ev) {
                    if (ev.key === 'Enter') { adminLogin(); }
                });
            }
        }, 100);
    }

    // FIXED adminLogin with .trim() - THIS IS THE KEY FIX
    window.adminLogin = function() {
        var user = document.getElementById('adminUser');
        var pass = document.getElementById('adminPass');
        if (!user || !pass) { showToast('Error: Input fields not found', 'error'); return; }
        
        var uVal = user.value.trim();
        var pVal = pass.value.trim();
        
        // Debug: log what was entered (remove in production)
        console.log('Admin login attempt - User: "' + uVal + '", Pass: "' + pVal + '"');
        
        if (uVal === 'zeus' && pVal === 'media2026') {
            localStorage.setItem('mb_adminLoggedIn', 'true');
            closeModal();
            showAdminPanel();
            showToast('Welcome, Zeus! 👑', 'success');
        } else {
            showToast('Invalid credentials. User: "' + uVal + '"', 'error');
            // Show hint in console
            console.log('Expected: zeus / media2026');
        }
    };

    // FIXED showAdminPanel with working order display
    function showAdminPanel() {
        var orders = DB.orders;
        var totalRevenue = orders.reduce(function(sum, o) { return sum + (parseFloat(o.price) || 0); }, 0);
        var uniqueEmails = new Set(orders.map(function(o) { return o.email; }));
        
        var ordersHtml = '';
        if (orders.length === 0) {
            ordersHtml = '<p style="text-align:center;color:var(--gray)">No orders yet</p>';
        } else {
            orders.forEach(function(o, i) {
                var actions = o.status === 'pending'
                    ? '<button onclick="adminApprove(' + i + ')" class="btn btn-sm" style="background:var(--green);color:#fff">✅ Approve</button> ' +
                      '<button onclick="adminReject(' + i + ')" class="btn btn-sm" style="background:var(--red);color:#fff">❌ Reject</button>'
                    : '<span style="color:' + (o.status === 'completed' ? 'var(--green)' : 'var(--red)') + '">' + o.status.toUpperCase() + '</span>';
                ordersHtml += '<div style="background:var(--bg-card);padding:10px;border-radius:8px;margin-bottom:8px;font-size:13px">' +
                    '<div style="display:flex;justify-content:space-between;align-items:center">' +
                    '<strong>' + o.id + '</strong> ' + actions +
                    '</div>' +
                    '<p style="margin:4px 0">' + o.platform + ' ' + o.service + ' × ' + (o.quantity||0).toLocaleString() + '</p>' +
                    '<p style="color:var(--gray);font-size:12px">' + o.sender + ' | ' + o.email + ' | ' + formatNaira(o.price||0) + '</p>' +
                    '</div>';
            });
        }
        
        showModal(
            '<h3>⚙️ Hidden Admin Panel</h3>' +
            '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:12px 0">' +
            '<div style="background:var(--bg-card);padding:12px;border-radius:8px;text-align:center"><div style="font-size:24px;font-weight:700;color:var(--blue)">' + orders.length + '</div><div style="font-size:12px;color:var(--gray)">Total Orders</div></div>' +
            '<div style="background:var(--bg-card);padding:12px;border-radius:8px;text-align:center"><div style="font-size:24px;font-weight:700;color:var(--orange)">' + orders.filter(function(o){return o.status==='pending'}).length + '</div><div style="font-size:12px;color:var(--gray)">Pending</div></div>' +
            '<div style="background:var(--bg-card);padding:12px;border-radius:8px;text-align:center"><div style="font-size:24px;font-weight:700;color:var(--green)">' + formatNaira(totalRevenue) + '</div><div style="font-size:12px;color:var(--gray)">Revenue</div></div>' +
            '<div style="background:var(--bg-card);padding:12px;border-radius:8px;text-align:center"><div style="font-size:24px;font-weight:700;color:var(--blue)">' + uniqueEmails.size + '</div><div style="font-size:12px;color:var(--gray)">Users</div></div>' +
            '</div>' +
            '<div style="max-height:300px;overflow-y:auto;margin:8px 0" id="adminOrdersList">' + ordersHtml + '</div>' +
            '<button onclick="adminLogout()" class="btn btn-sm" style="width:100%;background:var(--red);color:#fff;margin-top:4px">🚪 Logout</button>',
            '⚙️ Admin'
        );
    }

    window.adminApprove = function(index) {
        var orders = JSON.parse(localStorage.getItem('mb_orders') || '[]');
        if (orders[index]) orders[index].status = 'completed';
        localStorage.setItem('mb_orders', JSON.stringify(orders));
        DB.orders = orders;
        showAdminPanel();
        updateDashboard();
        showToast('Order approved ✅', 'success');
    };

    window.adminReject = function(index) {
        var orders = JSON.parse(localStorage.getItem('mb_orders') || '[]');
        if (orders[index]) orders[index].status = 'cancelled';
        localStorage.setItem('mb_orders', JSON.stringify(orders));
        DB.orders = orders;
        showAdminPanel();
        updateDashboard();
        showToast('Order rejected', 'info');
    };

    window.adminLogout = function() {
        localStorage.removeItem('mb_adminLoggedIn');
        closeModal();
        showToast('Logged out', 'info');
    };

    // ===== MODAL =====
    window.showModal = function(html, title) {
        var body = document.getElementById('modalBody');
        var overlay = document.getElementById('modalOverlay');
        if (!body || !overlay) return;
        body.innerHTML = (title ? '<h2 style="margin-bottom:8px">' + title + '</h2>' : '') + html;
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
        toast.innerHTML = '<i class="fas fa-' + (icons[type] || 'info-circle') + '"></i> ' + message;
        container.appendChild(toast);
        setTimeout(function() { toast.remove(); }, 4000);
    };

    window.copyToClipboard = function(text) {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text).then(function() { showToast('Copied!', 'success'); });
        } else {
            var ta = document.createElement('textarea');
            ta.value = text;
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
            showToast('Copied!', 'success');
        }
    };

    // ===== INIT =====
    updateDashboard();
    updatePrice();
    console.log('MEDIA BOOST v4 loaded — Zeus 👑');
    console.log('🔑 Admin: tap logo 5x or Ctrl+Shift+A');
});
