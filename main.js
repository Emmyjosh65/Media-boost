/**
 * ============================================================
 * MEDIA BOOST — Core Module
 * Owner: Zeus  |  Contact: ge5853987@gmail.com
 * GitHub: zeus
 * ============================================================
 * Contains: Navigation, Counters, Services, Order, Payment,
 * Dashboard, Admin, FAQ, Support, Modals, Toasts
 * Tools are in tools.js
 * ============================================================
 */
'use strict';

document.addEventListener('DOMContentLoaded', () => {

    // --- Preloader ---
    const preloader = document.getElementById('preloader');
    setTimeout(() => { preloader.classList.add('hidden'); }, 2200);

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
            { name: 'Word Counter', icon: 'fas fa-calculator', desc: 'Count words and characters' },
            { name: 'Character Counter', icon: 'fas fa-align-left', desc: 'Count text characters' },
            { name: 'URL Shortener', icon: 'fas fa-link', desc: 'Shorten long URLs' },
            { name: 'Base64 Encoder', icon: 'fas fa-lock', desc: 'Encode to Base64' },
            { name: 'Base64 Decoder', icon: 'fas fa-unlock', desc: 'Decode Base64' },
            { name: 'JSON Formatter', icon: 'fas fa-code', desc: 'Format JSON' },
            { name: 'Markdown Preview', icon: 'fab fa-markdown', desc: 'Live markdown preview' },
            { name: 'Age Calculator', icon: 'fas fa-calendar-alt', desc: 'Calculate exact age' },
            { name: 'Currency Converter', icon: 'fas fa-money-bill-wave', desc: 'Convert currencies' },
            { name: 'Password Strength', icon: 'fas fa-shield-alt', desc: 'Check password strength' },
            { name: 'Free Instagram Likes', icon: 'fas fa-heart', desc: 'Get free IG likes on your posts' },
            { name: 'Free Instagram Likes', icon: 'fas fa-heart', desc: 'Get free IG likes on your posts' },
            { name: 'Free Instagram Views', icon: 'fas fa-eye', desc: 'Get free IG video views' },
            { name: 'Free Instagram Followers', icon: 'fas fa-user-plus', desc: 'Get free IG followers' },
            { name: 'Free TikTok Likes', icon: 'fab fa-tiktok', desc: 'Get free TikTok video likes' },
            { name: 'Free TikTok Views', icon: 'fas fa-play-circle', desc: 'Get free TikTok views' },
            { name: 'Free TikTok Followers', icon: 'fab fa-tiktok', desc: 'Get free TikTok followers' },
            { name: 'Free TikTok Followers', icon: 'fab fa-tiktok', desc: 'Get free TikTok followers' },
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

    function showToast(message, type) {
        if (!type) type = 'info';
        const container = document.getElementById('toastContainer');
        if (!container) return;
        const icons = { success: 'fa-check-circle', error: 'fa-times-circle', info: 'fa-info-circle' };
        const toast = document.createElement('div');
        toast.className = 'toast ' + type;
        toast.innerHTML = '<i class="fas ' + (icons[type] || icons.info) + '"></i> ' + message;
        container.appendChild(toast);
        setTimeout(function() { toast.remove(); }, 4000);
    }

    function showModal(content, title) {
        const overlay = document.getElementById('modalOverlay');
        const body = document.getElementById('modalBody');
        if (!overlay || !body) return;
        var html = '';
        if (title) {
            html += '<h3 style="margin-bottom:16px;font-size:1.1rem;">' + title + '</h3>';
        }
        html += content;
        body.innerHTML = html;
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        var overlay = document.getElementById('modalOverlay');
        if (overlay) {
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    function copyToClipboard(text) {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text).then(function() {
                showToast('Copied to clipboard!', 'success');
            }).catch(function() {
                fallbackCopy(text);
            });
        } else {
            fallbackCopy(text);
        }
    }

    function fallbackCopy(text) {
        var ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.left = '-9999px';
        document.body.appendChild(ta);
        ta.select();
        try {
            document.execCommand('copy');
            showToast('Copied!', 'success');
        } catch (e) {
            showToast('Failed to copy', 'error');
        }
        ta.remove();
    }

    // Expose globally for inline use
    window.showToast = showToast;
    window.showModal = showModal;
    window.closeModal = closeModal;
    window.copyToClipboard = copyToClipboard;
    window.DB = DB;

    // ============================================================
    // NAVBAR
    // ============================================================
    var navbar = document.getElementById('navbar');
    var mobileToggle = document.getElementById('mobileToggle');
    var mobileNav = document.getElementById('mobileNav');
    var mobileNavOverlay = document.getElementById('mobileNavOverlay');
    var mobileNavClose = document.getElementById('mobileNavClose');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    mobileToggle.addEventListener('click', function() {
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
    document.querySelectorAll('.mobile-link').forEach(function(link) {
        link.addEventListener('click', closeMobileNav);
    });

    // ============================================================
    // SCROLL ANIMATIONS
    // ============================================================
    var animateElements = document.querySelectorAll('.animate-on-scroll');
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    animateElements.forEach(function(el) { observer.observe(el); });

    // ============================================================
    // ANIMATED COUNTERS
    // ============================================================
    var counterNumbers = document.querySelectorAll('.counter-number');
    var counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                var el = entry.target;
                var target = parseInt(el.dataset.target);
                animateCounter(el, target);
                counterObserver.unobserve(el);
            }
        });
    }, { threshold: 0.5 });
    counterNumbers.forEach(function(el) { counterObserver.observe(el); });

    function animateCounter(el, target) {
        var current = 0;
        var increment = Math.ceil(target / 60);
        var timer = setInterval(function() {
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
    function renderServices(filter) {
        if (!filter) filter = 'all';
        var grid = document.getElementById('servicesGrid');
        if (!grid) return;
        var filtered;
        if (filter === 'all') {
            filtered = DB.services;
        } else {
            filtered = DB.services.filter(function(s) {
                var p = s.platform.toLowerCase();
                if (p === filter) return true;
                if (filter === 'other' && ['instagram','tiktok','youtube','facebook','x (twitter)'].indexOf(p) === -1) return true;
                return false;
            });
        }
        grid.innerHTML = '';
        filtered.forEach(function(s) {
            var card = document.createElement('div');
            card.className = 'service-card animate-on-scroll';
            var itemsHtml = '';
            s.items.forEach(function(item) {
                itemsHtml += '<span class="service-tag">' + item + '</span>';
            });
            card.innerHTML = '<div class="service-card-header"><div class="service-icon" style="background:' + s.color + '20;color:' + s.color + '"><i class="' + s.icon + '"></i></div><div><h4>' + s.platform + '</h4><span class="service-count">' + s.count + '</span></div></div><div class="service-items">' + itemsHtml + '</div>';
            grid.appendChild(card);
            observer.observe(card);
        });
    }
    renderServices();

    document.querySelectorAll('.filter-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(function(b) { b.classList.remove('active'); });
            btn.classList.add('active');
            renderServices(btn.dataset.filter);
        });
    });

    // ============================================================
    // RENDER TOOLS
    // ============================================================
    function renderTools(filter) {
        if (!filter) filter = '';
        var grid = document.getElementById('toolsGrid');
        if (!grid) return;
        var filtered;
        if (!filter) {
            filtered = DB.tools;
        } else {
            filtered = DB.tools.filter(function(t) {
                return t.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1 || t.desc.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
            });
        }
        grid.innerHTML = '';
        filtered.forEach(function(t) {
            var card = document.createElement('div');
            card.className = 'tool-card';
            card.setAttribute('data-tool', t.name);
            card.innerHTML = '<i class="' + t.icon + '"></i><h4>' + t.name + '</h4><p>' + t.desc + '</p>';
            card.addEventListener('click', function() {
                var toolName = card.getAttribute('data-tool');
                if (typeof handleToolClick === 'function') {
                    handleToolClick(toolName);
                } else {
                    showToast('Tool system loading...', 'info');
                }
            });
            grid.appendChild(card);
        });
    }
    renderTools();

    document.getElementById('toolsSearch').addEventListener('input', function(e) {
        renderTools(e.target.value);
    });

    // ============================================================
    // ORDER FORM
    // ============================================================
    var orderForm = document.getElementById('orderForm');
    if (orderForm) {
        orderForm.addEventListener('submit', function(e) {
            e.preventDefault();
            var platform = document.getElementById('orderPlatform').value;
            var service = document.getElementById('orderService').value;
            var quantity = document.getElementById('orderQuantity').value;
            var link = document.getElementById('orderLink').value;
            var email = document.getElementById('orderEmail').value;
            if (!platform || !service || !quantity || !link || !email) {
                showToast('Please fill in all fields', 'error');
                return;
            }
            sessionStorage.setItem('pendingOrder', JSON.stringify({ platform: platform, service: service, quantity: quantity, link: link, email: email }));
            showToast('Order ready! Proceed to payment.', 'success');
            document.getElementById('payment').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // ============================================================
    // PAYMENT VERIFICATION
    // ============================================================
    var paidBtn = document.getElementById('paidBtn');
    var verificationScreen = document.getElementById('verificationScreen');
    var verifyProgress = document.getElementById('verifyProgress');
    var verifyText = document.getElementById('verifyText');
    var verifyTimer = document.getElementById('verifyTimer');
    var verificationInterval = null;

    if (paidBtn) {
        paidBtn.addEventListener('click', function() {
            verificationScreen.classList.add('active');
            paidBtn.style.display = 'none';
            verifyProgress.style.width = '0%';
            var seconds = 120;

            function updateTimer() {
                var mins = Math.floor(seconds / 60);
                var secs = seconds % 60;
                verifyTimer.textContent = mins + ':' + (secs < 10 ? '0' : '') + secs;
            }
            updateTimer();

            var progressInterval = setInterval(function() {
                var elapsed = 120 - seconds;
                var pct = (elapsed / 120) * 100;
                verifyProgress.style.width = pct + '%';
            }, 1000);

            verificationInterval = setInterval(function() {
                seconds--;
                updateTimer();
                if (seconds <= 90 && seconds > 60) verifyText.textContent = 'Connecting to payment gateway...';
                else if (seconds <= 60 && seconds > 30) verifyText.textContent = 'Verifying transaction...';
                else if (seconds <= 30 && seconds > 10) verifyText.textContent = 'Almost done...';
                else if (seconds <= 10 && seconds > 0) verifyText.textContent = 'Finalizing...';
                else if (seconds === 0) {
                    clearInterval(verificationInterval);
                    clearInterval(progressInterval);
                    verifyText.textContent = 'Payment Verified!';
                    verifyProgress.style.width = '100%';
                    setTimeout(function() {
                        verificationScreen.classList.remove('active');
                        paidBtn.style.display = 'inline-flex';
                        var txSection = document.getElementById('transaction');
                        if (txSection) txSection.scrollIntoView({ behavior: 'smooth' });
                        showToast('Payment verified! Complete your order details.', 'success');
                    }, 1500);
                }
            }, 1000);
        });
    }

    // ============================================================
    // FILE UPLOAD
    // ============================================================
    var fileUpload = document.getElementById('fileUpload');
    var fileInput = document.getElementById('txScreenshot');
    var filePreview = document.getElementById('filePreview');

    if (fileUpload && fileInput) {
        fileUpload.addEventListener('click', function() { fileInput.click(); });
        fileUpload.addEventListener('dragover', function(e) { e.preventDefault(); fileUpload.style.borderColor = 'var(--blue)'; });
        fileUpload.addEventListener('dragleave', function() { fileUpload.style.borderColor = ''; });
        fileUpload.addEventListener('drop', function(e) {
            e.preventDefault();
            fileUpload.style.borderColor = '';
            if (e.dataTransfer.files.length) {
                fileInput.files = e.dataTransfer.files;
                previewFile(e.dataTransfer.files[0]);
            }
        });
        fileInput.addEventListener('change', function() {
            if (fileInput.files.length) previewFile(fileInput.files[0]);
        });
    }

    function previewFile(file) {
        if (!file.type.startsWith('image/')) {
            showToast('Please upload an image', 'error');
            return;
        }
        var reader = new FileReader();
        reader.onload = function(e) {
            filePreview.innerHTML = '<img src="' + e.target.result + '" alt="Screenshot">';
            filePreview.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }

    // ============================================================
    // TRANSACTION FORM
    // ============================================================
    var transactionForm = document.getElementById('transactionForm');
    if (transactionForm) {
        transactionForm.addEventListener('submit', function(e) {
            e.preventDefault();
            var txId = document.getElementById('txId').value.trim();
            var amount = document.getElementById('txAmount').value;
            var method = document.getElementById('txMethod').value;
            var sender = document.getElementById('txSender').value.trim();
            var email = document.getElementById('txEmail').value.trim();
            var phone = document.getElementById('txPhone').value.trim();
            var service = document.getElementById('txService').value.trim();
            var target = document.getElementById('txTarget').value.trim();

            if (!txId || !amount || !method || !sender || !email || !phone || !service || !target) {
                showToast('Please fill in all fields', 'error');
                return;
            }

            var screenshotSrc = null;
            var previewImg = filePreview ? filePreview.querySelector('img') : null;
            if (previewImg) screenshotSrc = previewImg.src;

            var orderData = {
                id: generateId(),
                txId: txId,
                amount: amount,
                method: method,
                sender: sender,
                email: email,
                phone: phone,
                service: service,
                target: target,
                status: 'active',
                date: new Date().toISOString(),
                screenshot: screenshotSrc
            };

            DB.orders.unshift(orderData);
            localStorage.setItem('mb_orders', JSON.stringify(DB.orders));

            var orderSuccess = document.getElementById('orderSuccess');
            var successRef = document.getElementById('successRef');
            if (orderSuccess) orderSuccess.classList.add('active');
            if (successRef) successRef.textContent = orderData.id;
            transactionForm.style.display = 'none';
            updateDashboard();
            updateAdminPanel();
            showToast('Order submitted successfully!', 'success');

            setTimeout(function() {
                transactionForm.reset();
                transactionForm.style.display = 'block';
                if (orderSuccess) orderSuccess.classList.remove('active');
                if (filePreview) {
                    filePreview.innerHTML = '';
                    filePreview.style.display = 'none';
                }
            }, 5000);
        });
    }

    // ============================================================
    // COPY PAYMENT DETAILS
    // ============================================================
    document.querySelectorAll('.copy-text').forEach(function(el) {
        el.addEventListener('click', function() {
            copyToClipboard(el.dataset.copy);
        });
    });

    // ============================================================
    // DASHBOARD
    // ============================================================
    function updateDashboard() {
        var orders = DB.orders;
        var active = orders.filter(function(o) { return o.status === 'active'; }).length;
        var completed = orders.filter(function(o) { return o.status === 'completed'; }).length;
        var cancelled = orders.filter(function(o) { return o.status === 'cancelled'; }).length;

        var dashActive = document.getElementById('dashActive');
        var dashCompleted = document.getElementById('dashCompleted');
        var dashCancelled = document.getElementById('dashCancelled');
        if (dashActive) dashActive.textContent = active;
        if (dashCompleted) dashCompleted.textContent = completed;
        if (dashCancelled) dashCancelled.textContent = cancelled;

        renderOrders();
    }

    function renderOrders(filter, search) {
        if (!filter) filter = 'all';
        if (!search) search = '';
        var container = document.getElementById('dashOrdersList');
        if (!container) return;
        var orders = DB.orders;
        if (filter !== 'all') orders = orders.filter(function(o) { return o.status === filter; });
        if (search) {
            orders = orders.filter(function(o) {
                return o.service.toLowerCase().indexOf(search.toLowerCase()) !== -1 || o.id.toLowerCase().indexOf(search.toLowerCase()) !== -1;
            });
        }
        if (!orders.length) {
            container.innerHTML = '<p class="dash-empty">No orders found.</p>';
            return;
        }
        container.innerHTML = '';
        orders.forEach(function(o) {
            var div = document.createElement('div');
            div.className = 'order-item';
            var statusClass = 'status-active';
            if (o.status === 'completed') statusClass = 'status-completed';
            else if (o.status === 'cancelled') statusClass = 'status-cancelled';
            var statusLabel = o.status.charAt(0).toUpperCase() + o.status.slice(1);
            var dateStr = new Date(o.date).toLocaleDateString();
            div.innerHTML = '<div class="order-item-info"><h4>' + o.service + '</h4><p>' + o.id + ' &bull; ' + dateStr + '</p></div><span class="order-item-status ' + statusClass + '">' + statusLabel + '</span>';
            container.appendChild(div);
        });
    }

    // Dashboard tabs
    document.querySelectorAll('.dash-tab').forEach(function(tab) {
        tab.addEventListener('click', function() {
            document.querySelectorAll('.dash-tab').forEach(function(t) { t.classList.remove('active'); });
            document.querySelectorAll('.dash-panel').forEach(function(p) { p.classList.remove('active'); });
            tab.classList.add('active');
            var panelId = 'dash' + tab.dataset.tab.charAt(0).toUpperCase() + tab.dataset.tab.slice(1);
            var panel = document.getElementById(panelId);
            if (panel) panel.classList.add('active');
        });
    });

    // Order filter buttons
    document.querySelectorAll('.order-filter-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.order-filter-btn').forEach(function(b) { b.classList.remove('active'); });
            btn.classList.add('active');
            var searchInput = document.getElementById('orderSearch');
            var search = searchInput ? searchInput.value : '';
            renderOrders(btn.dataset.status, search);
        });
    });

    // Order search
    var orderSearch = document.getElementById('orderSearch');
    if (orderSearch) {
        orderSearch.addEventListener('input', function(e) {
            var activeFilter = document.querySelector('.order-filter-btn.active');
            var status = activeFilter ? activeFilter.dataset.status : 'all';
            renderOrders(status, e.target.value);
        });
    }

    window.copyReferral = function() {
        var refInput = document.getElementById('refLink');
        if (refInput) copyToClipboard(refInput.value);
    };

    // ============================================================
    // ADMIN PANEL
    // ============================================================
    var isAdminLoggedIn = false;
    var adminLoginForm = document.getElementById('adminLoginForm');
    if (adminLoginForm) {
        adminLoginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            var user = document.getElementById('adminUser').value;
            var pass = document.getElementById('adminPass').value;
            if (user === 'admin' && pass === 'admin123') {
                isAdminLoggedIn = true;
                var adminLoginDiv = document.getElementById('adminLogin');
                var adminPanel = document.getElementById('adminPanel');
                if (adminLoginDiv) adminLoginDiv.style.display = 'none';
                if (adminPanel) adminPanel.classList.add('active');
                showToast('Welcome, Admin!', 'success');
                updateAdminPanel();
            } else {
                showToast('Invalid credentials', 'error');
            }
        });
    }

    function updateAdminPanel() {
        var orders = DB.orders;
        var totalOrders = document.getElementById('adminTotalOrders');
        var pendingOrders = document.getElementById('adminPendingOrders');
        var revenue = document.getElementById('adminRevenue');
        var users = document.getElementById('adminUsers');
        if (totalOrders) totalOrders.textContent = orders.length;
        if (pendingOrders) pendingOrders.textContent = orders.filter(function(o) { return o.status === 'active'; }).length;
        var rev = 0;
        orders.forEach(function(o) {
            rev += parseFloat(o.amount) || 0;
        });
        if (revenue) revenue.textContent = '$' + (rev / 1550).toFixed(2);
        var uniqueEmails = [];
        orders.forEach(function(o) {
            if (o.email && uniqueEmails.indexOf(o.email) === -1) uniqueEmails.push(o.email);
        });
        if (users) users.textContent = uniqueEmails.length;
        renderAdminServices();
        renderAdminOrders();
    }

    // Admin tabs
    document.querySelectorAll('.admin-tab').forEach(function(tab) {
        tab.addEventListener('click', function() {
            document.querySelectorAll('.admin-tab').forEach(function(t) { t.classList.remove('active'); });
            document.querySelectorAll('.admin-panel-content').forEach(function(p) { p.classList.remove('active'); });
            tab.classList.add('active');
            var panelId = 'apanel' + tab.dataset.apanel.charAt(0).toUpperCase() + tab.dataset.apanel.slice(1);
            var panel = document.getElementById(panelId);
            if (panel) panel.classList.add('active');
        });
    });

    function renderAdminServices() {
        var tbody = document.querySelector('#adminServicesTable tbody');
        if (!tbody) return;
        var services = DB.adminServices;
        if (!services.length) {
            services = [
                { platform: 'Instagram', service: 'Followers', price: 2.5, min: 50, max: 10000 },
                { platform: 'TikTok', service: 'Followers', price: 3.0, min: 50, max: 10000 },
                { platform: 'YouTube', service: 'Subscribers', price: 5.0, min: 10, max: 5000 },
            ];
            DB.adminServices = services;
            localStorage.setItem('mb_adminServices', JSON.stringify(services));
        }
        tbody.innerHTML = '';
        services.forEach(function(s, i) {
            var tr = document.createElement('tr');
            tr.innerHTML = '<td>' + s.platform + '</td><td>' + s.service + '</td><td>$' + s.price.toFixed(2) + '</td><td>' + s.min + '</td><td>' + s.max.toLocaleString() + '</td><td><button class="action-btn edit" onclick="editService(' + i + ')"><i class=\"fas fa-edit\"></i></button> <button class="action-btn delete" onclick="deleteService(' + i + ')"><i class=\"fas fa-trash\"></i></button></td>';
            tbody.appendChild(tr);
        });
    }

    window.editService = function(index) {
        var services = JSON.parse(localStorage.getItem('mb_adminServices') || '[]');
        var s = services[index];
        if (!s) { showToast('Service not found', 'error'); return; }
        showModal(
            '<h4 style="margin-bottom:16px;">Edit Service</h4>' +
            '<div class="form-group"><label>Price/1k</label><input type="number" id="editPrice" value="' + s.price + '" step="0.1" style="width:100%;padding:10px;background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);border-radius:8px;color:#fff;"></div>' +
            '<div class="form-group"><label>Min</label><input type="number" id="editMin" value="' + s.min + '" style="width:100%;padding:10px;background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);border-radius:8px;color:#fff;"></div>' +
            '<div class="form-group"><label>Max</label><input type="number" id="editMax" value="' + s.max + '" style="width:100%;padding:10px;background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);border-radius:8px;color:#fff;"></div>' +
            '<button class="btn btn-primary btn-full" onclick="saveServiceEdit(' + index + ')"><i class=\"fas fa-save\"></i> Save</button>',
            'Edit - ' + s.platform + ' ' + s.service
        );
    };

    window.saveServiceEdit = function(index) {
        var services = JSON.parse(localStorage.getItem('mb_adminServices') || '[]');
        var priceInput = document.getElementById('editPrice');
        var minInput = document.getElementById('editMin');
        var maxInput = document.getElementById('editMax');
        if (priceInput) services[index].price = parseFloat(priceInput.value) || services[index].price;
        if (minInput) services[index].min = parseInt(minInput.value) || services[index].min;
        if (maxInput) services[index].max = parseInt(maxInput.value) || services[index].max;
        localStorage.setItem('mb_adminServices', JSON.stringify(services));
        DB.adminServices = services;
        renderAdminServices();
        closeModal();
        showToast('Service updated!', 'success');
    };

    window.deleteService = function(index) {
        if (!confirm('Delete this service?')) return;
        var services = JSON.parse(localStorage.getItem('mb_adminServices') || '[]');
        services.splice(index, 1);
        localStorage.setItem('mb_adminServices', JSON.stringify(services));
        DB.adminServices = services;
        renderAdminServices();
        showToast('Service deleted', 'info');
    };

    var addServiceBtn = document.getElementById('addServiceBtn');
    if (addServiceBtn) {
        addServiceBtn.addEventListener('click', function() {
            showModal(
                '<h4 style="margin-bottom:16px;">Add New Service</h4>' +
                '<div class="form-group"><label>Platform</label><input type="text" id="addPlatform" placeholder="Instagram" style="width:100%;padding:10px;background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);border-radius:8px;color:#fff;"></div>' +
                '<div class="form-group"><label>Service</label><input type="text" id="addService" placeholder="Followers" style="width:100%;padding:10px;background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);border-radius:8px;color:#fff;"></div>' +
                '<div class="form-group"><label>Price per 1k ($)</label><input type="number" id="addPrice" value="2.5" step="0.1" style="width:100%;padding:10px;background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);border-radius:8px;color:#fff;"></div>' +
                '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;"><div class="form-group"><label>Min</label><input type="number" id="addMin" value="50" style="width:100%;padding:10px;background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);border-radius:8px;color:#fff;"></div>' +
                '<div class="form-group"><label>Max</label><input type="number" id="addMax" value="10000" style="width:100%;padding:10px;background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);border-radius:8px;color:#fff;"></div></div>' +
                '<button class="btn btn-primary btn-full" onclick="addNewService()"><i class=\"fas fa-plus\"></i> Add Service</button>',
                'Add New Service'
            );
        });
    }

    window.addNewService = function() {
        var platform = document.getElementById('addPlatform');
        var service = document.getElementById('addService');
        var price = document.getElementById('addPrice');
        var min = document.getElementById('addMin');
        var max = document.getElementById('addMax');
        if (!platform || !service) { showToast('Platform and service required', 'error'); return; }
        var p = platform.value.trim();
        var s = service.value.trim();
        if (!p || !s) { showToast('Fill in all fields', 'error'); return; }
        var services = JSON.parse(localStorage.getItem('mb_adminServices') || '[]');
        services.push({
            platform: p,
            service: s,
            price: parseFloat(price ? price.value : 2.5) || 2.5,
            min: parseInt(min ? min.value : 50) || 50,
            max: parseInt(max ? max.value : 10000) || 10000
        });
        localStorage.setItem('mb_adminServices', JSON.stringify(services));
        DB.adminServices = services;
        renderAdminServices();
        closeModal();
        showToast('Service added!', 'success');
    };

    function renderAdminOrders() {
        var tbody = document.querySelector('#adminOrdersTable tbody');
        if (!tbody) return;
        var orders = DB.orders;
        if (!orders.length) {
            tbody.innerHTML = '<tr><td colspan="7" style="text-align:center;color:var(--text-muted);padding:24px;">No orders yet</td></tr>';
            return;
        }
        tbody.innerHTML = '';
        orders.forEach(function(o) {
            var tr = document.createElement('tr');
            var amountDisplay = o.amount ? '$' + (parseFloat(o.amount) / 1550).toFixed(2) : 'N/A';
            var proofDisplay = o.screenshot ? '<a href="' + o.screenshot + '" target="_blank" style="color:var(--blue);"><i class=\"fas fa-image\"></i> View</a>' : 'N/A';
            var actionsDisplay;
            if (o.status === 'active') {
                actionsDisplay = '<button class="action-btn approve" onclick="approveOrder(\'' + o.id + '\')"><i class=\"fas fa-check\"></i></button> <button class="action-btn reject" onclick="rejectOrder(\'' + o.id + '\')"><i class=\"fas fa-times\"></i></button>';
            } else {
                actionsDisplay = '<span style="color:var(--text-muted);font-size:0.75rem;">Done</span>';
            }
            tr.innerHTML = '<td style="font-family:var(--font-mono);font-size:0.75rem;">' + o.id + '</td><td>' + (o.sender || 'N/A') + '</td><td>' + o.service + '</td><td>' + amountDisplay + '</td><td><span class="order-item-status status-' + o.status + '">' + o.status.charAt(0).toUpperCase() + o.status.slice(1) + '</span></td><td>' + proofDisplay + '</td><td>' + actionsDisplay + '</td>';
            tbody.appendChild(tr);
        });
    }

    window.approveOrder = function(id) {
        var orders = JSON.parse(localStorage.getItem('mb_orders') || '[]');
        var found = false;
        orders.forEach(function(o) {
            if (o.id === id) { o.status = 'completed'; found = true; }
        });
        if (found) {
            localStorage.setItem('mb_orders', JSON.stringify(orders));
            DB.orders = orders;
            updateAdminPanel();
            updateDashboard();
            showToast('Order approved', 'success');
        }
    };

    window.rejectOrder = function(id) {
        var orders = JSON.parse(localStorage.getItem('mb_orders') || '[]');
        var found = false;
        orders.forEach(function(o) {
            if (o.id === id) { o.status = 'cancelled'; found = true; }
        });
        if (found) {
            localStorage.setItem('mb_orders', JSON.stringify(orders));
            DB.orders = orders;
            updateAdminPanel();
            updateDashboard();
            showToast('Order rejected', 'info');
        }
    };

    // ============================================================
    // FAQ ACCORDION
    // ============================================================
    document.querySelectorAll('.faq-question').forEach(function(q) {
        q.addEventListener('click', function() {
            var item = q.parentElement;
            var wasActive = item.classList.contains('active');
            document.querySelectorAll('.faq-item').forEach(function(i) { i.classList.remove('active'); });
            if (!wasActive) item.classList.add('active');
        });
    });

    // ============================================================
    // FLOATING SUPPORT
    // ============================================================
    var supportToggle = document.getElementById('supportToggle');
    var supportMenu = document.getElementById('supportMenu');
    if (supportToggle) {
        supportToggle.addEventListener('click', function() {
            supportMenu.classList.toggle('active');
        });
    }
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.support-float')) {
            if (supportMenu) supportMenu.classList.remove('active');
        }
    });
    var liveChatBtn = document.getElementById('liveChatBtn');
    if (liveChatBtn) {
        liveChatBtn.addEventListener('click', function(e) {
            e.preventDefault();
            showToast('Live chat coming soon! Email us at ge5853987@gmail.com', 'info');
            if (supportMenu) supportMenu.classList.remove('active');
        });
    }

    // ============================================================
    // MODAL CLOSE
    // ============================================================
    var modalClose = document.getElementById('modalClose');
    var modalOverlay = document.getElementById('modalOverlay');
    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modalOverlay) {
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === modalOverlay) closeModal();
        });
    }

    // ============================================================
    // INITIALIZE
    // ============================================================
    updateDashboard();
    if (isAdminLoggedIn) updateAdminPanel();

    var lastOrder = DB.orders[0];
    if (lastOrder) {
        var profileName = document.getElementById('profileName');
        var profileEmail = document.getElementById('profileEmail');
        var profilePhone = document.getElementById('profilePhone');
        if (profileName) profileName.textContent = lastOrder.sender || 'Guest User';
        if (profileEmail) profileEmail.textContent = lastOrder.email || 'Not set';
        if (profilePhone) profilePhone.textContent = lastOrder.phone || 'Not set';
    }

    console.log('MEDIA BOOST Core initialized');
    console.log('Owner: Zeus | Contact: ge5853987@gmail.com');

});
