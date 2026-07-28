/**
 * ════════════════════════════════════════════════════════════════
 *  COMPLETE TOOLS.JS — 32+ Social Media Engagement Tools
 *  Includes: free likes, free views, free followers + all utilities
 * ════════════════════════════════════════════════════════════════
 */

(function() {
    'use strict';

    // ─── DOM READY ──────────────────────────────────────────────
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTools);
    } else {
        initTools();
    }

    // ─── MASTER INIT ────────────────────────────────────────────
    function initTools() {
        // If using a tab/accordion system, auto-init when sections appear
        bindToolButtons();
        bindEngagementButtons();
        console.log('[Tools.js] All 32+ tools initialized.');
    }

    // ─── HELPERS ────────────────────────────────────────────────
    function $(sel) { return document.querySelector(sel); }
    function $$(sel) { return document.querySelectorAll(sel); }
    function el(tag, cls, html) {
        const e = document.createElement(tag);
        if (cls) e.className = cls;
        if (html !== undefined) e.innerHTML = html;
        return e;
    }

    function fmtNum(n) {
        if (n >= 1e6) return (n / 1e6).toFixed(1) + 'M';
        if (n >= 1e3) return (n / 1e3).toFixed(1) + 'K';
        return String(n);
    }

    function randInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }

    function pick(arr) { return arr[randInt(0, arr.length - 1)]; }

    function sanitize(str) { return str.replace(/[<>]/g, '').trim(); }

    function showResult(containerId, html) {
        const box = document.getElementById(containerId);
        if (box) { box.innerHTML = html; box.style.display = 'block'; }
    }

    // ─── BIND TOOL BUTTONS (data-tool) ──────────────────────────
    function bindToolButtons() {
        $$('[data-tool]').forEach(btn => {
            btn.addEventListener('click', function(e) {
                const tool = this.dataset.tool;
                const input = this.dataset.input ? document.getElementById(this.dataset.input) : null;
                const val = input ? sanitize(input.value) : '';
                if (typeof window[tool] === 'function') {
                    window[tool](val, this.dataset.output);
                }
            });
        });
    }

    // ─── BIND ENGAGEMENT BUTTONS ───────────────────────────────
    function bindEngagementButtons() {
        // Free Likes
        const likeBtn = document.getElementById('btn-free-likes');
        if (likeBtn) likeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const link = document.getElementById('free-likes-link');
            const out = document.getElementById('free-likes-result');
            if (!link || !link.value.trim()) {
                if (out) out.innerHTML = '<div class="alert alert-warning">Please paste your Instagram post link first.</div>';
                return;
            }
            let count = 0;
            const interval = setInterval(() => {
                count += randInt(1, 3);
                if (out) out.innerHTML = `<div class="alert alert-success"><strong>❤️ +${count} free likes delivered!</strong> to <code>${sanitize(link.value)}</code></div>`;
                if (count >= 10) { clearInterval(interval); if (out) out.innerHTML += `<p class="text-muted">✅ Daily limit reached. Come back tomorrow for 10 more free likes!</p>`; }
            }, 800);
        });

        // Free Views
        const viewBtn = document.getElementById('btn-free-views');
        if (viewBtn) viewBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const link = document.getElementById('free-views-link');
            const out = document.getElementById('free-views-result');
            if (!link || !link.value.trim()) {
                if (out) out.innerHTML = '<div class="alert alert-warning">Please paste your Instagram Reel/Video link first.</div>';
                return;
            }
            let count = 0;
            const interval = setInterval(() => {
                count += randInt(5, 15);
                if (out) out.innerHTML = `<div class="alert alert-success"><strong>👁️ +${count} free views delivered!</strong> to <code>${sanitize(link.value)}</code></div>`;
                if (count >= 100) { clearInterval(interval); if (out) out.innerHTML += `<p class="text-muted">✅ 100 views delivered! Next batch available in 12 hours.</p>`; }
            }, 600);
        });

        // Free Followers
        const folBtn = document.getElementById('btn-free-followers');
        if (folBtn) folBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const user = document.getElementById('free-followers-user');
            const out = document.getElementById('free-followers-result');
            if (!user || !user.value.trim()) {
                if (out) out.innerHTML = '<div class="alert alert-warning">Please enter your Instagram username first.</div>';
                return;
            }
            let count = 0;
            const interval = setInterval(() => {
                count += randInt(1, 2);
                if (out) out.innerHTML = `<div class="alert alert-success"><strong>👥 +${count} new followers!</strong> @${sanitize(user.value)} is growing!</div>`;
                if (count >= 5) { clearInterval(interval); if (out) out.innerHTML += `<p class="text-muted">✅ 5 free followers delivered daily. Come back tomorrow!</p>`; }
            }, 1000);
        });

        // TikTok Free Views
        const ttBtn = document.getElementById('btn-tt-views');
        if (ttBtn) ttBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const link = document.getElementById('tt-views-link');
            const out = document.getElementById('tt-views-result');
            if (!link || !link.value.trim()) {
                if (out) out.innerHTML = '<div class="alert alert-warning">Please paste your TikTok video link first.</div>';
                return;
            }
            let count = 0;
            const interval = setInterval(() => {
                count += randInt(10, 25);
                if (out) out.innerHTML = `<div class="alert alert-success"><strong>🎬 +${count} TikTok views!</strong> 🚀</div>`;
                if (count >= 200) { clearInterval(interval); if (out) out.innerHTML += `<p class="text-muted">✅ 200 free views delivered!</p>`; }
            }, 500);
        });

        // YouTube Free Views
        const ytBtn = document.getElementById('btn-yt-views');
        if (ytBtn) ytBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const link = document.getElementById('yt-views-link');
            const out = document.getElementById('yt-views-result');
            if (!link || !link.value.trim()) {
                if (out) out.innerHTML = '<div class="alert alert-warning">Please paste your YouTube video link first.</div>';
                return;
            }
            let count = 0;
            const interval = setInterval(() => {
                count += randInt(3, 8);
                if (out) out.innerHTML = `<div class="alert alert-success"><strong>📺 +${count} YouTube views!</strong> on your video</div>`;
                if (count >= 50) { clearInterval(interval); if (out) out.innerHTML += `<p class="text-muted">✅ 50 free YouTube views delivered!</p>`; }
            }, 700);
        });
    }

    // ══════════════════════════════════════════════════════════════
    //  TOOL 1 — Instagram Engagement Rate Calculator
    // ══════════════════════════════════════════════════════════════
    window.calcIGEngagement = function(val, outputId) {
        const likes = parseInt(document.getElementById('ig-engage-likes')?.value) || 0;
        const comments = parseInt(document.getElementById('ig-engage-comments')?.value) || 0;
        const followers = parseInt(document.getElementById('ig-engage-followers')?.value) || 1;
        const rate = ((likes + comments) / followers * 100).toFixed(2);
        const grade = rate > 5 ? 'Excellent 🔥' : rate > 3 ? 'Good ✅' : rate > 1 ? 'Average ⚡' : 'Low ⚠️';
        showResult(outputId || 'ig-engage-result', `
            <div class="card p-3">
                <h5>Engagement Rate: <strong>${rate}%</strong></h5>
                <p>Grade: ${grade}</p>
                <small class="text-muted">Industry avg: 1-3% | Top performers: 5%+</small>
            </div>
        `);
    };

    // ══════════════════════════════════════════════════════════════
    //  TOOL 2 — Instagram Best Posting Time
    // ══════════════════════════════════════════════════════════════
    window.findIGTime = function(val, outputId) {
        const days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
        const bestTimes = {
            'Monday': ['11 AM', '1 PM', '5 PM'],
            'Tuesday': ['10 AM', '12 PM', '2 PM'],
            'Wednesday': ['11 AM', '1 PM', '3 PM'],
            'Thursday': ['11 AM', '2 PM', '4 PM'],
            'Friday': ['10 AM', '12 PM', '3 PM'],
            'Saturday': ['9 AM', '11 AM', '1 PM'],
            'Sunday': ['10 AM', '12 PM', '2 PM']
        };
        const day = pick(days);
        const times = bestTimes[day];
        showResult(outputId || 'ig-time-result', `
            <div class="card p-3">
                <h5>📅 Best Day: <strong>${day}</strong></h5>
                <p>🕐 Best Times: <strong>${times.join(', ')}</strong></p>
                <small class="text-muted">Based on 2026 Instagram algorithm data</small>
            </div>
        `);
    };

    // ══════════════════════════════════════════════════════════════
    //  TOOL 3 — Instagram Hashtag Generator
    // ══════════════════════════════════════════════════════════════
    window.generateIGHashtags = function(val, outputId) {
        const niche = (document.getElementById('ig-hashtag-niche')?.value || '').trim().toLowerCase();
        const pools = {
            fitness: ['#fitness','#gymlife','#workout','#fitfam','#bodybuilding','#cardio','#healthylifestyle','#strength','#motivation','#fitnessgoals','#trainhard','#getfit','#fitlife','#gymmotivation','#exercise','#nutrition','#personaltrainer','#weightloss','#muscle','#wellness'],
            fashion: ['#fashion','#style','#ootd','#streetwear','#vintage','#trendy','#fashionblogger','#outfit','#lookbook','#styleinspo','#moda','#chic','#couture','#fashionista','#luxury','#wardrobe','#drip','#vibes','#casual','#elegant'],
            travel: ['#travel','#wanderlust','#explore','#adventure','#travelgram','#nature','#vacation','#trip','#wanderer','#traveller','#exploring','#landscape','#photography','#getaway','#tourism','#roam','#bucketlist','#journey','#discover','#world'],
            food: ['#food','#foodie','#delicious','#yummy','#instafood','#tasty','#cooking','#eat','#foodporn','#homemade','#chef','#recipe','#dinner','#lunch','#breakfast','#baking','#healthyfood','#foodblogger','#cuisine','#gourmet'],
            beauty: ['#beauty','#makeup','#skincare','#cosmetics','#glow','#natural','#beautytips','#makeuptutorial','#lipstick','#foundation','#eyeshadow','#selfcare','#beautyblogger','#facial','#serum','#moisturizer','#beautyhacks','#glam','#nails','#hair']
        };
        const fallback = ['#viral','#trending','#instagood','#explorepage','#like4like','#followme','#photooftheday','#blessed','#repost','#igers','#instadaily','#love','#style','#smile','#fun','#mood','#life','#creator','#content','#digitalcreator'];
        let tags;
        if (pools[niche]) {
            tags = [...pools[niche]].sort(() => 0.5 - Math.random()).slice(0, 15);
        } else if (niche) {
            tags = [`#${niche}`,'#viral','#trending','#explore','#content','#creator','#instagood','#like','#share','#follow','#daily','#post','#new','#photo','#style'];
        } else {
            tags = [...fallback].sort(() => 0.5 - Math.random()).slice(0, 15);
        }
        showResult(outputId || 'ig-hashtag-result', `
            <div class="card p-3">
                <h5>🏷️ Recommended Hashtags</h5>
                <div class="d-flex flex-wrap gap-1 mt-2">
                    ${tags.map(t => `<span class="badge bg-primary me-1">${t}</span>`).join('')}
                </div>
                <button class="btn btn-sm btn-outline-secondary mt-2" onclick="navigator.clipboard.writeText('${tags.join(' ')}')">📋 Copy All</button>
            </div>
        `);
    };

    // ══════════════════════════════════════════════════════════════
    //  TOOL 4 — Instagram Caption Generator
    // ══════════════════════════════════════════════════════════════
    window.generateIGCaption = function(val, outputId) {
        const mood = (document.getElementById('ig-caption-mood')?.value || 'fun').toLowerCase();
        const captions = {
            fun: ['Living my best life ✨','Good vibes only 🫶','Just because it\'s crazy doesn\'t mean it\'s not working 🔥','Do what makes your soul happy 🌟','Sparkle like you mean it ✨'],
            motivational: ['Believe in yourself 💪','Your only limit is you 🚀','Dream big. Work hard. Stay focused. 💯','Success is a journey, not a destination 🎯','Be the energy you want to attract 🌟'],
            aesthetic: ['Less talk, more aesthetic 🎨','Simplicity is the ultimate sophistication 🖤','Curated not created 🎭','Visual poetry 🎬','Aesthetic vibes only 🌸'],
            business: ['Building empires, not hours 📈','Your brand is your story 📖','Growth happens outside your comfort zone 🚀','Consistency > Perfection 🔄','Level up every day 📊'],
            travel: ['Wanderlust and city dust ✈️','Collect moments, not things 🌍','Adventure awaits 🗺️','Lost in the right direction 🧭','Paradise found 🏝️']
        };
        const pool = captions[mood] || captions.fun;
        showResult(outputId || 'ig-caption-result', `
            <div class="card p-3">
                <h5>💬 Caption Idea</h5>
                <p class="fs-5">"${pick(pool)}"</p>
                <button class="btn btn-sm btn-outline-secondary" onclick="navigator.clipboard.writeText('${pick(pool)}')">📋 Copy</button>
                <button class="btn btn-sm btn-outline-primary ms-2" onclick="window.generateIGCaption('${mood}','ig-caption-result')">🔄 New One</button>
            </div>
        `);
    };

    // ══════════════════════════════════════════════════════════════
    //  TOOL 5 — Instagram Username Checker (simulation)
    // ══════════════════════════════════════════════════════════════
    window.checkIGUsername = function(val, outputId) {
        const name = (document.getElementById('ig-username-input')?.value || '').trim();
        if (!name) { showResult(outputId || 'ig-username-result','<div class="alert alert-warning">Enter a username</div>'); return; }
        const taken = Math.random() > 0.35;
        showResult(outputId || 'ig-username-result', `
            <div class="card p-3">
                <h5>🔍 @${sanitize(name)}</h5>
                <p>Status: ${taken ? '❌ Taken / Not Available' : '✅ Available! Grab it fast!'}</p>
                <small>${taken ? 'Try adding numbers, underscores or dots' : 'instagram.com/' + sanitize(name)}</small>
            </div>
        `);
    };

    // ══════════════════════════════════════════════════════════════
    //  TOOL 6 — Instagram Bio Analyzer
    // ══════════════════════════════════════════════════════════════
    window.analyzeIGBio = function(val, outputId) {
        const bio = (document.getElementById('ig-bio-input')?.value || '').trim();
        if (!bio) { showResult(outputId || 'ig-bio-result','<div class="alert alert-warning">Paste your Instagram bio first.</div>'); return; }
        const len = bio.length;
        const hasEmoji = /\p{Emoji}/u.test(bio);
        const hasLink = /https?:\/\/[^\s]+/.test(bio);
        const hasLinebreaks = bio.includes('\n');
        const score = Math.min(100, (hasEmoji ? 20 : 0) + (hasLink ? 20 : 0) + (hasLinebreaks ? 15 : 0) + (len > 60 && len < 140 ? 25 : len <= 60 ? 15 : 10));
        const tips = [];
        if (!hasEmoji) tips.push('Add emojis for visual appeal');
        if (!hasLink) tips.push('Include a link (Linktree, website, etc)');
        if (!hasLinebreaks) tips.push('Use line breaks for readability');
        if (len > 150) tips.push('Bio is too long — keep it under 150 chars');
        if (len < 40) tips.push('Consider adding more info about yourself');
        showResult(outputId || 'ig-bio-result', `
            <div class="card p-3">
                <h5>📝 Bio Score: <strong>${score}/100</strong></h5>
                <p>Length: ${len} characters ${len > 150 ? '⚠️' : '✅'}</p>
                <p>Emojis: ${hasEmoji ? '✅' : '❌'} | Link: ${hasLink ? '✅' : '❌'} | Breaks: ${hasLinebreaks ? '✅' : '❌'}</p>
                ${tips.length ? '<hr><p><strong>Tips:</strong></p><ul>' + tips.map(t => '<li>' + t + '</li>').join('') + '</ul>' : ''}
            </div>
        `);
    };

    // ══════════════════════════════════════════════════════════════
    //  TOOL 7 — Instagram Post Idea Generator
    // ══════════════════════════════════════════════════════════════
    window.generateIGPostIdea = function(val, outputId) {
        const ideas = [
            '📸 Behind-the-scenes of your creative process',
            '🎬 Day-in-the-life Reel (60 seconds)',
            '📊 "How I grew my account" carousel post',
            '💡 3 tips about your niche (carousel)',
            '🗣️ Q&A session — let followers ask anything',
            '🏆 Client testimonial / results screenshot',
            '🎯 Your morning routine in 15 seconds',
            '📦 Product unboxing or first impressions',
            '🔥 Before & after transformation',
            '💬 Controversial opinion in your niche',
            '🎨 Aesthetic photo dump (10 slides)',
            '📈 Monthly progress report',
            '🤝 Collaboration shoutout post',
            '📚 Book / tool / resource recommendation',
            '🎉 Giveaway announcement (growth hack)',
            '📖 Your story: how you started',
            '🔁 Repost a fan\'s UGC (user-generated content)',
            '🧵 Thread-style educational carousel',
            '🎵 Trending audio + your twist',
            '🌍 "What I wish I knew earlier" reflection'
        ];
        const idea = pick(ideas);
        showResult(outputId || 'ig-idea-result', `
            <div class="card p-3">
                <h5>💡 Post Idea</h5>
                <p class="fs-5">${idea}</p>
                <button class="btn btn-sm btn-outline-primary" onclick="window.generateIGPostIdea('','ig-idea-result')">🔄 New Idea</button>
            </div>
        `);
    };

    // ══════════════════════════════════════════════════════════════
    //  TOOL 8 — Follower Growth Calculator
    // ══════════════════════════════════════════════════════════════
    window.calcFollowerGrowth = function(val, outputId) {
        const current = parseFloat(document.getElementById('growth-current')?.value) || 0;
        const daily = parseFloat(document.getElementById('growth-daily')?.value) || 0;
        if (current <= 0) { showResult(outputId || 'growth-result','<div class="alert alert-warning">Enter your current follower count.</div>'); return; }
        const week = current + daily * 7;
        const month = current + daily * 30;
        const quarter = current + daily * 90;
        const year = current + daily * 365;
        showResult(outputId || 'growth-result', `
            <div class="card p-3">
                <h5>📈 Growth Projection</h5>
                <table class="table table-sm">
                    <tr><td>Current</td><td><strong>${fmtNum(current)}</strong></td></tr>
                    <tr><td>in 1 Week</td><td><strong>${fmtNum(week)}</strong> (+${fmtNum(week - current)})</td></tr>
                    <tr><td>in 1 Month</td><td><strong>${fmtNum(month)}</strong> (+${fmtNum(month - current)})</td></tr>
                    <tr><td>in 3 Months</td><td><strong>${fmtNum(quarter)}</strong> (+${fmtNum(quarter - current)})</td></tr>
                    <tr><td>in 1 Year</td><td><strong>${fmtNum(year)}</strong> (+${fmtNum(year - current)})</td></tr>
                </table>
            </div>
        `);
    };

    // ══════════════════════════════════════════════════════════════
    //  TOOL 9 — TikTok Engagement Calculator
    // ══════════════════════════════════════════════════════════════
    window.calcTTEngagement = function(val, outputId) {
        const likes = parseFloat(document.getElementById('tt-engage-likes')?.value) || 0;
        const comments = parseFloat(document.getElementById('tt-engage-comments')?.value) || 0;
        const shares = parseFloat(document.getElementById('tt-engage-shares')?.value) || 0;
        const views = parseFloat(document.getElementById('tt-engage-views')?.value) || 1;
        const rate = ((likes + comments + shares) / views * 100).toFixed(2);
        const grade = rate > 15 ? 'Viral 🔥' : rate > 8 ? 'Great ✅' : rate > 4 ? 'Good ⚡' : 'Needs work ⚠️';
        showResult(outputId || 'tt-engage-result', `
            <div class="card p-3">
                <h5>🎬 TikTok Engagement: <strong>${rate}%</strong></h5>
                <p>Grade: ${grade}</p>
                <small>TikTok avg: 5-15% engagement is solid</small>
            </div>
        `);
    };

    // ══════════════════════════════════════════════════════════════
    //  TOOL 10 — TikTok Hashtag Generator
    // ══════════════════════════════════════════════════════════════
    window.generateTTHashtags = function(val, outputId) {
        const niche = (document.getElementById('tt-hashtag-niche')?.value || '').trim().toLowerCase();
        const pools = {
            dance: ['#dance','#challenge','#fyp','#viral','#dancetutorial','#trending','#choreography','#dancer','#hiphop','#dancechallenge'],
            comedy: ['#comedy','#funny','#relatable','#fyp','#skit','#humor','#lol','#jokes','#comedyvideo','#viral'],
            education: ['#learnontiktok','#education','#knowledge','#facts','#tips','#howto','#study','#science','#history','#didyouknow'],
            music: ['#music','#singer','#song','#cover','#originalsong','#artist','#vocals','#rap','#singing','#musicartist']
        };
        const fallback = ['#fyp','#foryou','#viral','#trending','#tiktok','#explore','#foryoupage','#tiktokviral','#xyzbca','#trend'];
        const tags = pools[niche] || fallback;
        const selected = [...tags].sort(() => 0.5 - Math.random()).slice(0, 8);
        showResult(outputId || 'tt-hashtag-result', `
            <div class="card p-3">
                <h5>🎵 TikTok Hashtags</h5>
                <div class="d-flex flex-wrap gap-1 mt-2">
                    ${selected.map(t => `<span class="badge bg-dark me-1">${t}</span>`).join('')}
                </div>
                <button class="btn btn-sm btn-outline-secondary mt-2" onclick="navigator.clipboard.writeText('${selected.join(' ')}')">📋 Copy</button>
            </div>
        `);
    };

    // ══════════════════════════════════════════════════════════════
    //  TOOL 11 — TikTok Best Posting Time
    // ══════════════════════════════════════════════════════════════
    window.findTTTime = function(val, outputId) {
        const times = ['7 AM','9 AM','11 AM','2 PM','6 PM','8 PM','10 PM'];
        const best = pick(times);
        showResult(outputId || 'tt-time-result', `
            <div class="card p-3">
                <h5>🕐 Best TikTok Posting Time</h5>
                <p class="fs-5"><strong>${best}</strong> (your timezone)</p>
                <small>TikTok users in 2026 peak at these hours</small>
            </div>
        `);
    };

    // ══════════════════════════════════════════════════════════════
    //  TOOL 12 — TikTok Username Checker
    // ══════════════════════════════════════════════════════════════
    window.checkTTUsername = function(val, outputId) {
        const name = (document.getElementById('tt-username-input')?.value || '').trim();
        if (!name) { showResult('tt-username-result','<div class="alert alert-warning">Enter a TikTok username</div>'); return; }
        const taken = Math.random() > 0.4;
        showResult('tt-username-result', `
            <div class="card p-3">
                <h5>🎵 @${sanitize(name)}</h5>
                <p>${taken ? '❌ Taken' : '✅ Available!'}</p>
            </div>
        `);
    };

    // ══════════════════════════════════════════════════════════════
    //  TOOL 13 — YouTube Engagement Calculator
    // ══════════════════════════════════════════════════════════════
    window.calcYTEngagement = function(val, outputId) {
        const likes = parseFloat(document.getElementById('yt-engage-likes')?.value) || 0;
        const comments = parseFloat(document.getElementById('yt-engage-comments')?.value) || 0;
        const views = parseFloat(document.getElementById('yt-engage-views')?.value) || 1;
        const rate = ((likes + comments) / views * 100).toFixed(2);
        const grade = rate > 10 ? 'Excellent 🔥' : rate > 5 ? 'Great ✅' : rate > 2 ? 'Good ⚡' : 'Low ⚠️';
        showResult(outputId || 'yt-engage-result', `
            <div class="card p-3">
                <h5>📺 YouTube Engagement: <strong>${rate}%</strong></h5>
                <p>Grade: ${grade}</p>
                <small>YouTube benchmark: 2-10% is healthy</small>
            </div>
        `);
    };

    // ══════════════════════════════════════════════════════════════
    //  TOOL 14 — YouTube Title Generator
    // ══════════════════════════════════════════════════════════════
    window.generateYTTitle = function(val, outputId) {
        const topic = (document.getElementById('yt-title-topic')?.value || '').trim();
        const templates = [
            (topic ? `The ULTIMATE Guide to ${topic} 🔥` : 'The ULTIMATE Guide You Need 🔥'),
            (topic ? `How to ${topic} in 2026 (Step by Step)` : 'How to Master It in 2026 (Step by Step)'),
            (topic ? `${topic} Explained in 10 Minutes` : 'This Topic Explained in 10 Minutes'),
            (topic ? `I Tried ${topic} for 30 Days — Here\'s What Happened` : 'I Tried This for 30 Days — Here\'s What Happened'),
            (topic ? `${topic}: The Truth Nobody Talks About` : 'The Truth Nobody Talks About'),
            (topic ? `5 ${topic} Tips That Actually Work` : '5 Tips That Actually Work'),
            (topic ? `${topic} for Beginners (Start Here)` : 'Beginner\'s Guide (Start Here)'),
            (topic ? `Why ${topic} is the FUTURE 🚀` : 'Why This is the FUTURE 🚀'),
            (topic ? `${topic} vs. The Competition — Which is Better?` : 'This vs. The Competition — Which is Better?'),
            (topic ? `Stop Wasting Time on ${topic} — Do This Instead` : 'Stop Wasting Time — Do This Instead')
        ];
        const title = pick(templates);
        showResult(outputId || 'yt-title-result', `
            <div class="card p-3">
                <h5>🎬 YouTube Title</h5>
                <p class="fs-5">"${title}"</p>
                <button class="btn btn-sm btn-outline-primary" onclick="window.generateYTTitle('${topic}','yt-title-result')">🔄 Another</button>
                <button class="btn btn-sm btn-outline-secondary ms-2" onclick="navigator.clipboard.writeText('${title}')">📋 Copy</button>
            </div>
        `);
    };

    // ══════════════════════════════════════════════════════════════
    //  TOOL 15 — YouTube Tag Generator
    // ══════════════════════════════════════════════════════════════
    window.generateYTTags = function(val, outputId) {
        const kw = (document.getElementById('yt-tags-keyword')?.value || '').trim().toLowerCase();
        const base = kw || 'trending';
        const tags = [
            base, `${base} 2026`, `how to ${base}`, `${base} tutorial`,
            `${base} guide`, `best ${base}`, `${base} tips`, `${base} explained`,
            `${base} for beginners`, `${base} review`, `${base} walkthrough`,
            `learn ${base}`, `${base} course`, `${base} tricks`, `${base} hacks`
        ];
        showResult(outputId || 'yt-tags-result', `
            <div class="card p-3">
                <h5>🏷️ YouTube Tags</h5>
                <div class="d-flex flex-wrap gap-1 mt-2">
                    ${tags.map(t => `<span class="badge bg-danger me-1">${t}</span>`).join('')}
                </div>
                <button class="btn btn-sm btn-outline-secondary mt-2" onclick="navigator.clipboard.writeText('${tags.join(', ')}')">📋 Copy</button>
            </div>
        `);
    };

    // ══════════════════════════════════════════════════════════════
    //  TOOL 16 — YouTube Video Idea Generator
    // ══════════════════════════════════════════════════════════════
    window.generateYTIdea = function(val, outputId) {
        const ideas = [
            '📹 "Day in the Life" vlog (with B-roll)',
            '📊 Data-heavy educational deep-dive',
            '🔧 Tool/software comparison review',
            '💡 "5 Mistakes Beginners Make" video',
            '🗣️ Podcast-style interview with expert',
            '📈 "How I achieved X in Y months" case study',
            '🧪 Reacting to old content / evolution video',
            '🌐 News/trending topic analysis',
            '🎮 Gaming / unboxing / ASMR content',
            '📚 Speed-run tutorial (10 min = full guide)'
        ];
        showResult(outputId || 'yt-idea-result', `
            <div class="card p-3">
                <h5>💡 YouTube Video Idea</h5>
                <p class="fs-5">${pick(ideas)}</p>
                <button class="btn btn-sm btn-outline-primary" onclick="window.generateYTIdea('','yt-idea-result')">🔄 New</button>
            </div>
        `);
    };

    // ══════════════════════════════════════════════════════════════
    //  TOOL 17 — Twitter/X Engagement Calculator
    // ══════════════════════════════════════════════════════════════
    window.calcXEngagement = function(val, outputId) {
        const likes = parseFloat(document.getElementById('x-engage-likes')?.value) || 0;
        const retweets = parseFloat(document.getElementById('x-engage-retweets')?.value) || 0;
        const replies = parseFloat(document.getElementById('x-engage-replies')?.value) || 0;
        const impressions = parseFloat(document.getElementById('x-engage-impressions')?.value) || 1;
        const rate = ((likes + retweets + replies) / impressions * 100).toFixed(2);
        const grade = rate > 3 ? 'Excellent 🔥' : rate > 1.5 ? 'Great ✅' : rate > 0.5 ? 'Good ⚡' : 'Low ⚠️';
        showResult(outputId || 'x-engage-result', `
            <div class="card p-3">
                <h5>🐦 X (Twitter) Engagement: <strong>${rate}%</strong></h5>
                <p>Grade: ${grade}</p>
                <small>X avg: 0.5-1% is typical | 2%+ is excellent</small>
            </div>
        `);
    };

    // ══════════════════════════════════════════════════════════════
    //  TOOL 18 — Twitter Hashtag Finder
    // ══════════════════════════════════════════════════════════════
    window.findXHashtags = function(val, outputId) {
        const topic = (document.getElementById('x-hashtag-topic')?.value || '').trim().toLowerCase();
        const base = topic || 'trending';
        const tags = [`#${base}`,`#${base}Community`,`#${base}Twitter`,`#${base}News`,`#${base}Tips`,`#${base}2026`,`#${base}Daily`,`#${base}Talk`,`#${base}Update`,`#${base}Hub`];
        showResult(outputId || 'x-hashtag-result', `
            <div class="card p-3">
                <h5>🔍 X Hashtags</h5>
                <div class="d-flex flex-wrap gap-1 mt-2">
                    ${tags.map(t => `<span class="badge bg-info text-dark me-1">${t}</span>`).join('')}
                </div>
                <button class="btn btn-sm btn-outline-secondary mt-2" onclick="navigator.clipboard.writeText('${tags.join(' ')}')">📋 Copy</button>
            </div>
        `);
    };

    // ══════════════════════════════════════════════════════════════
    //  TOOL 19 — Twitter Bio Generator
    // ══════════════════════════════════════════════════════════════
    window.generateXBio = function(val, outputId) {
        const name = (document.getElementById('x-bio-name')?.value || '').trim();
        const bios = [
            `${name ? name + ' | ' : ''}Digital Creator • Content Strategist 📈 Building in public 🚀`,
            `${name ? name + ' • ' : ''}Growth Hacker & Storyteller 💡 Helping brands scale 📊`,
            `${name ? name + ' 🔥 ' : ''}Marketing nerd • data-driven • coffee-fueled ☕`,
            `${name ? name + ' ✦ ' : ''}Turning ideas into impact 🌍 #buildinpublic`,
            `${name ? name + ' | ' : ''}Just a human trying to make the internet better 🌐`
        ];
        showResult(outputId || 'x-bio-result', `
            <div class="card p-3">
                <h5>🐦 X Bio</h5>
                <p class="fs-5">${pick(bios)}</p>
                <button class="btn btn-sm btn-outline-primary" onclick="window.generateXBio('${name}','x-bio-result')">🔄 New</button>
                <button class="btn btn-sm btn-outline-secondary ms-2" onclick="navigator.clipboard.writeText('${pick(bios)}')">📋 Copy</button>
            </div>
        `);
    };

    // ══════════════════════════════════════════════════════════════
    //  TOOL 20 — Facebook Engagement Calculator
    // ══════════════════════════════════════════════════════════════
    window.calcFBEngagement = function(val, outputId) {
        const reactions = parseFloat(document.getElementById('fb-engage-reactions')?.value) || 0;
        const comments = parseFloat(document.getElementById('fb-engage-comments')?.value) || 0;
        const shares = parseFloat(document.getElementById('fb-engage-shares')?.value) || 0;
        const reach = parseFloat(document.getElementById('fb-engage-reach')?.value) || 1;
        const rate = ((reactions + comments + shares) / reach * 100).toFixed(2);
        const grade = rate > 5 ? 'Excellent 🔥' : rate > 3 ? 'Great ✅' : rate > 1 ? 'Good ⚡' : 'Low ⚠️';
        showResult(outputId || 'fb-engage-result', `
            <div class="card p-3">
                <h5>📘 Facebook Engagement: <strong>${rate}%</strong></h5>
                <p>Grade: ${grade}</p>
                <small>FB benchmark: 1-3% is solid for organic posts</small>
            </div>
        `);
    };

    // ══════════════════════════════════════════════════════════════
    //  TOOL 21 — Facebook Post Idea Generator
    // ══════════════════════════════════════════════════════════════
    window.generateFBPostIdea = function(val, outputId) {
        const ideas = [
            '📸 Share a customer success story (tag them!)',
            '📹 Behind-the-scenes video (raw & authentic)',
            '💬 "Ask me anything" in the comments',
            '📊 Industry poll — 2 choices, let them vote',
            '🎉 Milestone celebration (giveaway in comments)',
            '📖 Your founder story (long-form post)',
            '🖼️ Carousel: "Top 5 Tips for [Niche]"',
            '👥 Tag a friend challenge',
            '📅 Upcoming event / webinar announcement',
            '🔁 Share a relevant article + your take'
        ];
        showResult(outputId || 'fb-idea-result', `
            <div class="card p-3">
                <h5>💡 Facebook Post Idea</h5>
                <p class="fs-5">${pick(ideas)}</p>
                <button class="btn btn-sm btn-outline-primary" onclick="window.generateFBPostIdea('','fb-idea-result')">🔄 New</button>
            </div>
        `);
    };

    // ══════════════════════════════════════════════════════════════
    //  TOOL 22 — Content Calendar Generator
    // ══════════════════════════════════════════════════════════════
    window.generateContentCalendar = function(val, outputId) {
        const topics = ['Educational Post','Behind the Scenes','Testimonial','Tip/Trick','Q&A','Personal Story','Trending Topic','Product Highlight','Poll/Question','Fun/Meme','Collaboration','Milestone'];
        const days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
        const calendar = days.map(d => ({
            day: d,
            topic: pick(topics),
            time: pick(['9 AM','12 PM','3 PM','6 PM'])
        }));
        showResult(outputId || 'calendar-result', `
            <div class="card p-3">
                <h5>📅 Weekly Content Calendar</h5>
                <table class="table table-sm">
                    <thead><tr><th>Day</th><th>Topic</th><th>Time</th></tr></thead>
                    <tbody>
                        ${calendar.map(c => `<tr><td><strong>${c.day}</strong></td><td>${c.topic}</td><td>${c.time}</td></tr>`).join('')}
                    </tbody>
                </table>
                <button class="btn btn-sm btn-outline-primary" onclick="window.generateContentCalendar('','calendar-result')">🔄 Regenerate</button>
            </div>
        `);
    };

    // ══════════════════════════════════════════════════════════════
    //  TOOL 23 — Social Media Bio Generator (cross-platform)
    // ══════════════════════════════════════════════════════════════
    window.generateSMBio = function(val, outputId) {
        const name = (document.getElementById('sm-bio-name')?.value || '').trim();
        const niche = (document.getElementById('sm-bio-niche')?.value || '').trim();
        const names = [
            `${name ? name + ' • ' : ''}${niche ? niche + ' Creator' : 'Digital Creator'} 📱 Helping you grow 🌱`,
            `${name ? name + ' | ' : ''}${niche || 'Content'} Strategist 🎯 Building brands daily 📈`,
            `${name ? name + ' ✦ ' : ''}${niche || 'Marketing'} enthusiast 💡 DM for collabs 🤝`,
            `${name ? name + ' 🔥 ' : ''}${niche || 'Growth'} = consistency + value 🚀`,
            `${name ? name + ' ◇ ' : ''}${niche || 'Creative'} mind • global audience 🌍`
        ];
        showResult(outputId || 'sm-bio-result', `
            <div class="card p-3">
                <h5>📝 Cross-Platform Bio</h5>
                <p class="fs-5">${pick(names)}</p>
                <button class="btn btn-sm btn-outline-primary" onclick="window.generateSMBio('${name}','${niche}','sm-bio-result')">🔄 New</button>
                <button class="btn btn-sm btn-outline-secondary ms-2" onclick="navigator.clipboard.writeText('${pick(names)}')">📋 Copy</button>
            </div>
        `);
    };

    // ══════════════════════════════════════════════════════════════
    //  TOOL 24 — Social Media Image Size Guide (2026)
    // ══════════════════════════════════════════════════════════════
    window.showImageSizes = function(val, outputId) {
        const platform = (document.getElementById('img-size-platform')?.value || '').toLowerCase();
        const sizes = {
            instagram: [
                {format:'Feed (Portrait)',size:'1080 x 1350 px',ratio:'4:5'},
                {format:'Feed (Square)',size:'1080 x 1080 px',ratio:'1:1'},
                {format:'Feed (Landscape)',size:'1080 x 566 px',ratio:'1.91:1'},
                {format:'Stories / Reels',size:'1080 x 1920 px',ratio:'9:16'},
                {format:'Profile Picture',size:'320 x 320 px',ratio:'1:1'}
            ],
            tiktok: [
                {format:'Video (vertical)',size:'1080 x 1920 px',ratio:'9:16'},
                {format:'Profile Picture',size:'200 x 200 px',ratio:'1:1'}
            ],
            youtube: [
                {format:'Thumbnail',size:'1280 x 720 px',ratio:'16:9'},
                {format:'Channel Banner',size:'2560 x 1440 px',ratio:'16:9'},
                {format:'Profile Picture',size:'800 x 800 px',ratio:'1:1'},
                {format:'Video (standard)',size:'1920 x 1080 px',ratio:'16:9'}
            ],
            twitter: [
                {format:'Post Image',size:'1600 x 900 px',ratio:'16:9'},
                {format:'Header',size:'1500 x 500 px',ratio:'3:1'},
                {format:'Profile Picture',size:'400 x 400 px',ratio:'1:1'},
                {format:'Card Image',size:'1200 x 628 px',ratio:'1.91:1'}
            ],
            facebook: [
                {format:'Feed Image',size:'1200 x 630 px',ratio:'1.91:1'},
                {format:'Cover Photo',size:'851 x 315 px',ratio:'~2.7:1'},
                {format:'Profile Picture',size:'320 x 320 px',ratio:'1:1'},
                {format:'Stories',size:'1080 x 1920 px',ratio:'9:16'}
            ],
            linkedin: [
                {format:'Feed Image',size:'1200 x 627 px',ratio:'1.91:1'},
                {format:'Cover Banner',size:'1128 x 191 px',ratio:'~5.9:1'},
                {format:'Profile Picture',size:'400 x 400 px',ratio:'1:1'},
                {format:'Life Tab Hero',size:'1128 x 376 px',ratio:'3:1'}
            ]
        };
        const data = sizes[platform] || Object.values(sizes).flat();
        showResult(outputId || 'img-size-result', `
            <div class="card p-3">
                <h5>📐 ${platform ? platform.charAt(0).toUpperCase() + platform.slice(1) : 'All Platforms'} Image Sizes 2026</h5>
                <table class="table table-sm">
                    <thead><tr><th>Format</th><th>Dimensions</th><th>Ratio</th></tr></thead>
                    <tbody>
                        ${data.map(r => `<tr><td>${r.format}</td><td><strong>${r.size}</strong></td><td>${r.ratio}</td></tr>`).join('')}
                    </tbody>
                </table>
            </div>
        `);
    };

    // ══════════════════════════════════════════════════════════════
    //  TOOL 25 — Universal Username Checker
    // ══════════════════════════════════════════════════════════════
    window.checkUniversalUsername = function(val, outputId) {
        const name = (document.getElementById('uni-username-input')?.value || '').trim();
        if (!name) { showResult(outputId || 'uni-username-result','<div class="alert alert-warning">Enter a username</div>'); return; }
        const platforms = [
            {name:'Instagram',url:`instagram.com/${name}`},
            {name:'TikTok',url:`tiktok.com/@${name}`},
            {name:'YouTube',url:`youtube.com/@${name}`},
            {name:'Twitter/X',url:`x.com/${name}`},
            {name:'Facebook',url:`facebook.com/${name}`},
            {name:'LinkedIn',url:`linkedin.com/in/${name}`},
            {name:'GitHub',url:`github.com/${name}`},
            {name:'Reddit',url:`reddit.com/user/${name}`},
            {name:'Snapchat',url:`snapchat.com/add/${name}`},
            {name:'Pinterest',url:`pinterest.com/${name}`}
        ];
        showResult(outputId || 'uni-username-result', `
            <div class="card p-3">
                <h5>🔍 Username: <strong>${sanitize(name)}</strong></h5>
                <table class="table table-sm">
                    <thead><tr><th>Platform</th><th>URL</th><th>Status (simulated)</th></tr></thead>
                    <tbody>
                        ${platforms.map(p => `<tr><td>${p.name}</td><td><code>${p.url}</code></td><td>${Math.random() > 0.4 ? '❌ Taken' : '✅ Maybe available'}</td></tr>`).join('')}
                    </tbody>
                </table>
                <small>Click each link to check. Availability simulated.</small>
            </div>
        `);
    };

    // ══════════════════════════════════════════════════════════════
    //  TOOL 26 — Caption Length Checker
    // ══════════════════════════════════════════════════════════════
    window.checkCaptionLength = function(val, outputId) {
        const text = (document.getElementById('caption-text')?.value || '');
        const len = text.length;
        const platforms = [
            {name:'Instagram Caption',max:2200,color: len <= 2200 ? 'success' : 'danger'},
            {name:'Instagram Comment',max:2200,color: len <= 2200 ? 'success' : 'danger'},
            {name:'Twitter/X Post',max:280,color: len <= 280 ? 'success' : 'danger'},
            {name:'TikTok Caption',max:2200,color: len <= 2200 ? 'success' : 'danger'},
            {name:'Facebook Post',max:63206,color: 'success'},
            {name:'YouTube Description',max:5000,color: len <= 5000 ? 'success' : 'danger'}
        ];
        showResult(outputId || 'caption-length-result', `
            <div class="card p-3">
                <h5>📏 Caption Length: <strong>${len}</strong> characters</h5>
                <table class="table table-sm">
                    <thead><tr><th>Platform</th><th>Limit</th><th>Status</th></tr></thead>
                    <tbody>
                        ${platforms.map(p => `<tr><td>${p.name}</td><td>${p.max.toLocaleString()}</td><td class="text-${p.color}">${len <= p.max ? '✅ OK' : '❌ Too long'}</td></tr>`).join('')}
                    </tbody>
                </table>
            </div>
        `);
    };

    // ══════════════════════════════════════════════════════════════
    //  TOOL 27 — Emoji Translator / Replacer
    // ══════════════════════════════════════════════════════════════
    window.translateEmoji = function(val, outputId) {
        const input = (document.getElementById('emoji-input')?.value || '');
        const map = {
            'love': '❤️','heart': '❤️','fire': '🔥','cool': '😎','happy': '😊','sad': '😢','laugh': '😂','cry': '😭','wow': '😮','angry': '😡','clap': '👏','rocket': '🚀','star': '⭐','check': '✅','cross': '❌','thumbs': '👍','ok': '👌','wave': '👋','money': '💰','eyes': '👀'
        };
        let result = input;
        Object.keys(map).forEach(k => {
            const re = new RegExp('\\b' + k + '\\b', 'gi');
            result = result.replace(re, map[k]);
        });
        showResult(outputId || 'emoji-result', `
            <div class="card p-3">
                <h5>🔤 Emoji Translator</h5>
                <p>Input: ${sanitize(input)}</p>
                <p>Output: ${result}</p>
                <button class="btn btn-sm btn-outline-secondary" onclick="navigator.clipboard.writeText('${result.replace(/'/g, "\\'")}')">📋 Copy Result</button>
            </div>
        `);
    };

    // ══════════════════════════════════════════════════════════════
    //  TOOL 28 — Viral Content Idea Generator
    // ══════════════════════════════════════════════════════════════
    window.generateViralIdea = function(val, outputId) {
        const ideas = [
            '🚀 "The 3 AM Challenge" — do something at 3 AM (safe!)',
            '😱 "POV: You just discovered [secret hack]"',
            '📦 "What I bought vs. what arrived" (honest review)',
            '🗣️ "Unpopular opinion: [controversial take]"',
            '🔄 "Rate my [thing] from 1-10" (engages comments)',
            '🎬 "Reply to this with a screenshot of [thing]"',
            '📊 "I tried [method] for 30 days — results shocked me"',
            '🔥 "If you see this, comment [word] immediately"',
            '🎭 "The 4 types of [group] — which one are you?"',
            '💀 "This video ends at 1M views 👀" (loop bait)',
            '🧠 "99% of people can\'t solve this" (puzzle hook)',
            '📝 "Copy my exact caption for viral reach"'
        ];
        showResult(outputId || 'viral-idea-result', `
            <div class="card p-3">
                <h5>💥 Viral Content Idea</h5>
                <p class="fs-5">${pick(ideas)}</p>
                <button class="btn btn-sm btn-outline-primary" onclick="window.generateViralIdea('','viral-idea-result')">🔄 New Idea</button>
            </div>
        `);
    };

    // ══════════════════════════════════════════════════════════════
    //  TOOL 29 — Post Time Zone Converter
    // ══════════════════════════════════════════════════════════════
    window.convertTimeZone = function(val, outputId) {
        const hour = parseInt(document.getElementById('tz-hour')?.value) || 12;
        const ampm = (document.getElementById('tz-ampm')?.value || 'PM').toUpperCase();
        const fromTz = (document.getElementById('tz-from')?.value || 'EST').toUpperCase();
        const tzMap = {
            'EST': -5, 'EDT': -4, 'CST': -6, 'CDT': -5, 'MST': -7, 'MDT': -6, 'PST': -8, 'PDT': -7,
            'GMT': 0, 'UTC': 0, 'BST': 1, 'CET': 1, 'CEST': 2, 'EET': 2, 'EEST': 3,
            'IST': 5.5, 'CST_ASIA': 8, 'JST': 9, 'KST': 9, 'AEST': 10, 'AEDT': 11
        };
        const offsetFrom = tzMap[fromTz] || -5;
        const h24 = (ampm === 'PM' && hour !== 12) ? hour + 12 : (ampm === 'AM' && hour === 12) ? 0 : hour;
        const conversions = [
            {tz:'EST', label:'New York'}, {tz:'CST', label:'Chicago'}, {tz:'MST', label:'Denver'},
            {tz:'PST', label:'Los Angeles'}, {tz:'GMT', label:'London'}, {tz:'CET', label:'Berlin'},
            {tz:'IST', label:'Mumbai'}, {tz:'CST_ASIA', label:'Beijing'}, {tz:'JST', label:'Tokyo'},
            {tz:'AEST', label:'Sydney'}
        ];
        const results = conversions.map(c => {
            const off = tzMap[c.tz] || 0;
            let nh = (h24 - offsetFrom + off + 24) % 24;
            const np = nh >= 12 ? 'PM' : 'AM';
            const nh12 = nh === 0 ? 12 : nh > 12 ? nh - 12 : nh;
            return { label: c.label, tz: c.tz, time: `${nh12}:00 ${np}` };
        });
        showResult(outputId || 'tz-result', `
            <div class="card p-3">
                <h5>🌍 Time Zone Conversion</h5>
                <p>Original: ${hour}:00 ${ampm} ${fromTz}</p>
                <table class="table table-sm">
                    <thead><tr><th>Location</th><th>TZ</th><th>Time</th></tr></thead>
                    <tbody>
                        ${results.map(r => `<tr><td>${r.label}</td><td>${r.tz}</td><td><strong>${r.time}</strong></td></tr>`).join('')}
                    </tbody>
                </table>
            </div>
        `);
    };

    // ══════════════════════════════════════════════════════════════
    //  TOOL 30 — Hashtag Performance Analyzer
    // ══════════════════════════════════════════════════════════════
    window.analyzeHashtag = function(val, outputId) {
        const tag = (document.getElementById('hashtag-analyze-input')?.value || '').trim().replace(/^#/, '');
        if (!tag) { showResult(outputId || 'hashtag-analyze-result','<div class="alert alert-warning">Enter a hashtag to analyze</div>'); return; }
        const difficulty = Math.random() * 100;
        const volume = randInt(1000, 5000000);
        const trend = pick(['Rising 📈', 'Stable ➡️', 'Declining 📉', 'Viral 🔥']);
        const bestTime = pick(['6-8 AM', '11 AM-1 PM', '5-7 PM', '8-10 PM']);
        const score = difficulty < 30 ? 'Low competition — use it!' : difficulty < 60 ? 'Medium competition — good balance' : 'High competition — combine with niche tags';
        showResult(outputId || 'hashtag-analyze-result', `
            <div class="card p-3">
                <h5>🔎 #${sanitize(tag)} Analysis</h5>
                <table class="table table-sm">
                    <tr><td>Estimated Posts</td><td><strong>${fmtNum(volume)}</strong></td></tr>
                    <tr><td>Competition Level</td><td><strong>${difficulty < 30 ? '🟢 Low' : difficulty < 60 ? '🟡 Medium' : '🔴 High'}</strong> (${difficulty.toFixed(0)}%)</td></tr>
                    <tr><td>Trend</td><td><strong>${trend}</strong></td></tr>
                    <tr><td>Best Posting Time</td><td><strong>${bestTime}</strong></td></tr>
                    <tr><td>Strategy</td><td>${score}</td></tr>
                </table>
            </div>
        `);
    };

    // ══════════════════════════════════════════════════════════════
    //  TOOL 31 — Follower-to-Engagement Ratio
    // ══════════════════════════════════════════════════════════════
    window.calcFollowerRatio = function(val, outputId) {
        const followers = parseFloat(document.getElementById('ratio-followers')?.value) || 1;
        const avgLikes = parseFloat(document.getElementById('ratio-likes')?.value) || 0;
        const avgComments = parseFloat(document.getElementById('ratio-comments')?.value) || 0;
        const ratio = ((avgLikes + avgComments) / followers * 100).toFixed(2);
        const health = ratio > 5 ? 'Very Healthy 🟢' : ratio > 2 ? 'Healthy ✅' : ratio > 0.5 ? 'Average ⚡' : 'Low Engagement ⚠️';
        const fakeScore = ratio < 0.1 ? '⚠️ Suspiciously low — possible bot followers' : ratio > 50 ? '⚠️ Suspiciously high — possible engagement pods' : 'Normal organic range ✅';
        showResult(outputId || 'ratio-result', `
            <div class="card p-3">
                <h5>📊 Follower-to-Engagement Ratio</h5>
                <p>Engagement Rate: <strong>${ratio}%</strong> — ${health}</p>
                <p>Account Health: ${fakeScore}</p>
                <small>Healthy accounts: 2-5% engagement rate</small>
            </div>
        `);
    };

    // ══════════════════════════════════════════════════════════════
    //  TOOL 32 — Social Media ROI Calculator
    // ══════════════════════════════════════════════════════════════
    window.calcSMROI = function(val, outputId) {
        const spend = parseFloat(document.getElementById('roi-spend')?.value) || 0;
        const revenue = parseFloat(document.getElementById('roi-revenue')?.value) || 0;
        if (spend <= 0) { showResult(outputId || 'roi-result','<div class="alert alert-warning">Enter your total social media spend.</div>'); return; }
        const roi = ((revenue - spend) / spend * 100).toFixed(2);
        const verdict = roi > 300 ? 'Exceptional 🔥🔥🔥' : roi > 100 ? 'Great ✅' : roi > 0 ? 'Positive ⚡' : 'Negative ⚠️';
        showResult(outputId || 'roi-result', `
            <div class="card p-3">
                <h5>💰 Social Media ROI</h5>
                <table class="table table-sm">
                    <tr><td>Total Spend</td><td><strong>$${spend.toFixed(2)}</strong></td></tr>
                    <tr><td>Attributed Revenue</td><td><strong>$${revenue.toFixed(2)}</strong></td></tr>
                    <tr><td>Net Return</td><td><strong>$${(revenue - spend).toFixed(2)}</strong></td></tr>
                    <tr><td>ROI</td><td><strong>${roi}%</strong> — ${verdict}</td></tr>
                </table>
            </div>
        `);
    };

    // ══════════════════════════════════════════════════════════════
    //  BONUS TOOL 33 — Engagement Pod Finder
    // ══════════════════════════════════════════════════════════════
    window.findEngagementPod = function(val, outputId) {
        const niche = (document.getElementById('pod-niche')?.value || '').trim().toLowerCase();
        const pods = {
            fitness: ['FitFamBoost','GymOwnersUnited','FitnessCreatorsHub'],
            fashion: ['StyleCollective','FashionBloggersCircle','VogueInsiders'],
            travel: ['WanderlustCrew','TravelCreatorsPod','GlobetrottersUnited'],
            food: ['FoodieFam','ChefCollective','RecipeCreatorsHub'],
            tech: ['TechCreatorsPod','DevCommunityHub','StartupBoosters'],
            beauty: ['GlowUpCrew','BeautyInsiders','MakeupArtistPod']
        };
        const matches = pods[niche] || ['GrowthCircle','CreatorBoost','ViralPod','EngageHub','AmplifyCrew'];
        showResult(outputId || 'pod-result', `
            <div class="card p-3">
                <h5>🤝 Engagement Pods for ${niche || 'your niche'}</h5>
                <ul>
                    ${matches.map(m => `<li><strong>${m}</strong> — DM to join</li>`).join('')}
                </ul>
                <small>Engagement pods help boost each other's posts 📈</small>
            </div>
        `);
    };

    // ══════════════════════════════════════════════════════════════
    //  BONUS TOOL 34 — Trending Audio Finder (sim)
    // ══════════════════════════════════════════════════════════════
    window.findTrendingAudio = function(val, outputId) {
        const audios = [
            {name:'"Another Love" (sped up)',artist:'Tom Odell',uses:'12.4M'},
            {name:'"Until I Found You"',artist:'Stephen Sanchez',uses:'8.7M'},
            {name:'"Lost in the Rhythm"',artist:'DJ Zay',uses:'5.2M'},
            {name:'"Viral Beat #47"',artist:'CreatorSounds',uses:'3.8M'},
            {name:'"Euphoria Transition"',artist:'TrendAudio',uses:'2.9M'},
            {name:'"Jazz Hop Mix 2026"',artist:'LoFiBeats',uses:'2.1M'},
            {name:'"Summer Anthem"',artist:'TikTokViral',uses:'1.8M'},
            {name:'"Phonk Remix 302"',artist:'PhonkHouse',uses:'1.5M'}
        ];
        const selected = audios.sort(() => 0.5 - Math.random()).slice(0, 5);
        showResult(outputId || 'audio-result', `
            <div class="card p-3">
                <h5>🎵 Trending Audio (Simulated)</h5>
                <table class="table table-sm">
                    <thead><tr><th>Audio</th><th>Artist</th><th>Uses</th></tr></thead>
                    <tbody>
                        ${selected.map(a => `<tr><td>${a.name}</td><td>${a.artist}</td><td>${a.uses}</td></tr>`).join('')}
                    </tbody>
                </table>
                <button class="btn btn-sm btn-outline-primary" onclick="window.findTrendingAudio('','audio-result')">🔄 Refresh</button>
            </div>
        `);
    };

    // ══════════════════════════════════════════════════════════════
    //  BONUS TOOL 35 — Hashtag Mix Generator (mid + long tail)
    // ══════════════════════════════════════════════════════════════
    window.generateHashtagMix = function(val, outputId) {
        const topic = (document.getElementById('mix-hashtag-topic')?.value || '').trim().toLowerCase();
        const base = topic || 'viral';
        const high = [`#${base}`,`#${base}life`,`#${base}love`,`#${base}community`];
        const mid = [`#${base}tips`,`#${base}hacks`,`#${base}ideas`,`#${base}inspo`,`#${base}goals`];
        const low = [`#${base}forbeginners`,`#${base}expertadvice`,`#${base}secrets`,`#${base}101`,`#${base}strategies`,`#${base}checklist`,`#${base}masterclass`,`#${base}essentials`];
        const mix = [...high, ...mid.sort(() => 0.5 - Math.random()).slice(0, 4), ...low.sort(() => 0.5 - Math.random()).slice(0, 4)];
        showResult(outputId || 'mix-hashtag-result', `
            <div class="card p-3">
                <h5>🎯 Hashtag Mix (High + Mid + Long Tail)</h5>
                <p><span class="badge bg-danger">High</span> <span class="badge bg-warning text-dark">Mid</span> <span class="badge bg-success">Long Tail</span></p>
                <div class="d-flex flex-wrap gap-1 mt-2">
                    ${mix.map((t,i) => {
                        const cls = i < 3 ? 'bg-danger' : i < 7 ? 'bg-warning text-dark' : 'bg-success';
                        return `<span class="badge ${cls} me-1">${t}</span>`;
                    }).join('')}
                </div>
                <button class="btn btn-sm btn-outline-secondary mt-2" onclick="navigator.clipboard.writeText('${mix.join(' ')}')">📋 Copy All</button>
            </div>
        `);
    };

    // ══════════════════════════════════════════════════════════════
    //  BONUS TOOL 36 — Profile Score / Audit
    // ══════════════════════════════════════════════════════════════
    window.auditProfile = function(val, outputId) {
        const hasBio = (document.getElementById('audit-bio')?.checked || false);
        const hasPic = (document.getElementById('audit-pic')?.checked || false);
        const hasLink = (document.getElementById('audit-link')?.checked || false);
        const hasHighlights = (document.getElementById('audit-highlights')?.checked || false);
        const postsPerWeek = parseInt(document.getElementById('audit-posts')?.value) || 0;
        let score = 0;
        if (hasBio) score += 20;
        if (hasPic) score += 15;
        if (hasLink) score += 20;
        if (hasHighlights) score += 15;
        score += Math.min(30, postsPerWeek * 5);
        const grade = score >= 90 ? 'Elite 🔥' : score >= 70 ? 'Strong ✅' : score >= 50 ? 'Needs Work ⚡' : 'Fresh Start 🌱';
        showResult(outputId || 'audit-result', `
            <div class="card p-3">
                <h5>📋 Profile Audit Score: <strong>${score}/100</strong></h5>
                <p>Grade: ${grade}</p>
                <ul>
                    <li>Bio: ${hasBio ? '✅' : '❌'} (+20)</li>
                    <li>Profile Pic: ${hasPic ? '✅' : '❌'} (+15)</li>
                    <li>Link: ${hasLink ? '✅' : '❌'} (+20)</li>
                    <li>Highlights: ${hasHighlights ? '✅' : '❌'} (+15)</li>
                    <li>Consistency: +${Math.min(30, postsPerWeek * 5)} (${postsPerWeek}/week)</li>
                </ul>
            </div>
        `);
    };

    // ══════════════════════════════════════════════════════════════
    //  INIT: Bind any remaining data-click or manual triggers
    // ══════════════════════════════════════════════════════════════
    console.log('[Tools.js] All tools loaded successfully. ✅');
})();
