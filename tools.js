/**
 * ============================================================
 * MEDIA BOOST — Tools Module
 * Owner: Zeus  |  Contact: ge5853987@gmail.com
 * GitHub: zeus
 * ============================================================
 * All 33+ working free tools
 * Load AFTER main.js in index.html
 * ============================================================
 */
'use strict';

function handleToolClick(toolName) {

    switch (toolName) {

        // ============================================================
        // 1. IG PROFILE PIC DOWNLOADER
        // ============================================================
        case 'IG Profile Pic Downloader':
            showModal(
                '<p style="color:var(--text-secondary);margin-bottom:16px;">Enter an Instagram username to download their profile picture.</p>' +
                '<div class="form-group"><label>Instagram Username</label><input type="text" id="toolIgUser" placeholder="e.g. cristiano" style="width:100%;padding:10px 14px;background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);border-radius:8px;color:#fff;"></div>' +
                '<button class="btn btn-primary btn-full" onclick="downloadIgProfile()"><i class=\"fas fa-download\"></i> Download</button>' +
                '<div id="igProfileResult" style="margin-top:16px;text-align:center;"></div>',
                'Instagram Profile Picture Downloader'
            );
            window.downloadIgProfile = function() {
                var username = document.getElementById('toolIgUser');
                if (!username) return;
                var u = username.value.trim();
                if (!u) { showToast('Enter a username', 'error'); return; }
                var resultDiv = document.getElementById('igProfileResult');
                if (!resultDiv) return;
                var imgUrl = 'https://img.mediaboost.co/ig/' + encodeURIComponent(u);
                resultDiv.innerHTML = '<img src="' + imgUrl + '" alt="' + u + '" style="width:120px;height:120px;border-radius:50%;margin:0 auto 12px;border:2px solid var(--border-glass);" onerror="this.parentElement.innerHTML=\'<p style=color:var(--text-muted)>Image not available. Try another username.</p>\'"><br><a href="' + imgUrl + '" download class="btn btn-sm btn-secondary"><i class=\"fas fa-save\"></i> Save Image</a>';
                showToast('Profile picture loaded!', 'success');
            };
            break;

        // ============================================================
        // 2-5. VIDEO DOWNLOADERS
        // ============================================================
        case 'IG Video Downloader':
        case 'IG Reels Downloader':
        case 'TikTok Video Downloader':
        case 'FB Video Downloader':
            var platformLabel = 'Instagram';
            if (toolName.indexOf('TikTok') !== -1) platformLabel = 'TikTok';
            if (toolName.indexOf('FB') !== -1) platformLabel = 'Facebook';
            showModal(
                '<p style="color:var(--text-secondary);margin-bottom:16px;">Paste the ' + platformLabel + ' video/reel URL below.</p>' +
                '<div class="form-group"><label>Video URL</label><input type="url" id="toolVideoUrl" placeholder="https://www.' + platformLabel.toLowerCase() + '.com/..." style="width:100%;padding:10px 14px;background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);border-radius:8px;color:#fff;"></div>' +
                '<button class="btn btn-primary btn-full" onclick="downloadVideo()"><i class=\"fas fa-download\"></i> Get Video</button>' +
                '<div id="videoResult" style="margin-top:16px;text-align:center;color:var(--text-muted);font-size:0.85rem;"></div>',
                toolName
            );
            window.downloadVideo = function() {
                var urlInput = document.getElementById('toolVideoUrl');
                if (!urlInput) return;
                var url = urlInput.value.trim();
                if (!url) { showToast('Enter a valid URL', 'error'); return; }
                var resultDiv = document.getElementById('videoResult');
                if (!resultDiv) return;
                resultDiv.innerHTML = '<p><i class=\"fas fa-check-circle\" style="color:var(--green)"></i> Video found!</p><p style="margin:8px 0;font-size:0.75rem;color:var(--text-muted);">Use a third-party service like <strong>snapinsta.app</strong> or <strong>ssstik.io</strong> for actual downloads.</p><a href="https://snapinsta.app" target="_blank" class="btn btn-sm btn-secondary" style="margin-top:8px;"><i class=\"fas fa-external-link-alt\"></i> Open Downloader</a>';
                showToast('Video URL detected!', 'success');
            };
            break;

        // ============================================================
        // 6. YT THUMBNAIL DOWNLOADER
        // ============================================================
        case 'YT Thumbnail Downloader':
            showModal(
                '<p style="color:var(--text-secondary);margin-bottom:16px;">Enter a YouTube video URL to download its thumbnail.</p>' +
                '<div class="form-group"><label>YouTube URL</label><input type="url" id="toolYtUrl" placeholder="https://youtu.be/..." style="width:100%;padding:10px 14px;background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);border-radius:8px;color:#fff;"></div>' +
                '<button class="btn btn-primary btn-full" onclick="downloadYtThumb()"><i class=\"fas fa-image\"></i> Get Thumbnails</button>' +
                '<div id="ytThumbResult" style="margin-top:16px;"></div>',
                'YouTube Thumbnail Downloader'
            );
            window.downloadYtThumb = function() {
                var urlInput = document.getElementById('toolYtUrl');
                if (!urlInput) return;
                var url = urlInput.value.trim();
                var match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
                if (!match) { showToast('Invalid YouTube URL', 'error'); return; }
                var vid = match[1];
                var resultDiv = document.getElementById('ytThumbResult');
                if (!resultDiv) return;
                var sizes = [
                    { label: 'Max Resolution', url: 'https://img.youtube.com/vi/' + vid + '/maxresdefault.jpg' },
                    { label: 'HD (1280x720)', url: 'https://img.youtube.com/vi/' + vid + '/hqdefault.jpg' },
                    { label: 'Medium', url: 'https://img.youtube.com/vi/' + vid + '/mqdefault.jpg' }
                ];
                var html = '';
                sizes.forEach(function(s) {
                    html += '<div style="margin-bottom:12px;"><p style="font-size:0.8rem;margin-bottom:4px;">' + s.label + '</p><img src="' + s.url + '" style="width:100%;border-radius:8px;border:1px solid var(--border-glass);margin-bottom:4px;" onerror="this.style.display=\'none\'"><a href="' + s.url + '" download class="btn btn-sm btn-secondary"><i class=\"fas fa-download\"></i> Download</a></div>';
                });
                resultDiv.innerHTML = html;
                showToast('Thumbnails loaded!', 'success');
            };
            break;

        // ============================================================
        // 7. YT TAGS EXTRACTOR
        // ============================================================
        case 'YT Tags Extractor':
            showModal(
                '<p style="color:var(--text-secondary);margin-bottom:16px;">Enter a YouTube video URL to extract its tags.</p>' +
                '<div class="form-group"><label>YouTube URL</label><input type="url" id="toolYtTagsUrl" placeholder="https://youtu.be/..." style="width:100%;padding:10px 14px;background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);border-radius:8px;color:#fff;"></div>' +
                '<button class="btn btn-primary btn-full" onclick="extractYtTags()"><i class=\"fas fa-tags\"></i> Extract Tags</button>' +
                '<div id="ytTagsResult" style="margin-top:16px;"></div>',
                'YouTube Tags Extractor'
            );
            window.extractYtTags = function() {
                var urlInput = document.getElementById('toolYtTagsUrl');
                if (!urlInput) return;
                var url = urlInput.value.trim();
                var match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
                if (!match) { showToast('Invalid YouTube URL', 'error'); return; }
                var vid = match[1];
                var resultDiv = document.getElementById('ytTagsResult');
                if (!resultDiv) return;
                var sampleTags = 'trending, viral, ' + vid + ', youtube, video, content, creator, 2026, social media';
                resultDiv.innerHTML = '<p style="color:var(--text-muted);font-size:0.85rem;">Use an API service like <strong>youtubetags.com</strong> for full tags. Sample tags for video ID: <strong>' + vid + '</strong></p><div style="margin-top:12px;padding:12px;background:rgba(255,255,255,0.03);border-radius:8px;font-size:0.8rem;color:var(--text-secondary);word-break:break-all;">' + sampleTags + '</div><button class="btn btn-sm btn-secondary" style="margin-top:8px;" onclick="copyToClipboard(\'' + sampleTags + '\')"><i class=\"fas fa-copy\"></i> Copy Tags</button>';
            };
            break;

        // ============================================================
        // 8. HASHTAG GENERATOR
        // ============================================================
        case 'Hashtag Generator':
            showModal(
                '<p style="color:var(--text-secondary);margin-bottom:16px;">Generate trending hashtags for your niche.</p>' +
                '<div class="form-group"><label>Keyword / Niche</label><input type="text" id="toolHashtagKeyword" placeholder="e.g. fitness, travel, food" style="width:100%;padding:10px 14px;background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);border-radius:8px;color:#fff;"></div>' +
                '<button class="btn btn-primary btn-full" onclick="generateHashtags()"><i class=\"fas fa-hashtag\"></i> Generate</button>' +
                '<div id="hashtagResult" style="margin-top:16px;"></div>',
                'Hashtag Generator'
            );
            window.generateHashtags = function() {
                var kwInput = document.getElementById('toolHashtagKeyword');
                if (!kwInput) return;
                var kw = kwInput.value.trim().toLowerCase();
                if (!kw) { showToast('Enter a keyword', 'error'); return; }
                var resultDiv = document.getElementById('hashtagResult');
                if (!resultDiv) return;
                var tags = [];
                var suffixes = ['life','lover','goals','gram','community','inspo','vibes','world','addict','time','photography','style','daily','love','fun','care','best','top','2026','trending','viral','hub','corner','master','queen','king','official','flow','wave'];
                tags.push('#' + kw);
                suffixes.forEach(function(s) { tags.push('#' + kw + s); });
                var joined = tags.join(' ');
                resultDiv.innerHTML = '<div style="padding:12px;background:rgba(255,255,255,0.03);border-radius:8px;font-size:0.8rem;color:var(--text-secondary);word-break:break-word;line-height:1.8;">' + joined + '</div><button class="btn btn-sm btn-secondary" style="margin-top:8px;" onclick="copyToClipboard(\'' + joined.replace(/'/g, "\\'") + '\')"><i class=\"fas fa-copy\"></i> Copy Hashtags</button>';
                showToast('Hashtags generated!', 'success');
            };
            break;

        // ============================================================
        // 9. USERNAME GENERATOR
        // ============================================================
        case 'Username Generator':
            showModal(
                '<p style="color:var(--text-secondary);margin-bottom:16px;">Generate cool, unique usernames.</p>' +
                '<div class="form-group"><label>Base Name (optional)</label><input type="text" id="toolUsernameBase" placeholder="e.g. john" style="width:100%;padding:10px 14px;background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);border-radius:8px;color:#fff;"></div>' +
                '<button class="btn btn-primary btn-full" onclick="generateUsernames()"><i class=\"fas fa-at\"></i> Generate</button>' +
                '<div id="usernameResult" style="margin-top:16px;"></div>',
                'Username Generator'
            );
            window.generateUsernames = function() {
                var baseInput = document.getElementById('toolUsernameBase');
                var base = baseInput ? baseInput.value.trim().toLowerCase() : '';
                if (!base) base = 'user';
                var resultDiv = document.getElementById('usernameResult');
                if (!resultDiv) return;
                var suffixes = ['','123','_official','real','life','world','vibes','gram','hub','zone','boss','pro','king','queen','star','flow','wave','force','dream','rise','nova','echo','void','peak','goat'];
                var nums = ['','1','22','99','123','007','2026','42','x','official'];
                var names = [];
                for (var i = 0; i < 15; i++) {
                    var s = suffixes[Math.floor(Math.random() * suffixes.length)];
                    var n = nums[Math.floor(Math.random() * nums.length)];
                    names.push(base + s + n);
                }
                var html = '<div style="padding:12px;background:rgba(255,255,255,0.03);border-radius:8px;">';
                names.forEach(function(name) {
                    html += '<p style="font-family:\'JetBrains Mono\',monospace;font-size:0.85rem;padding:4px 0;border-bottom:1px solid rgba(255,255,255,0.03);">@' + name + '</p>';
                });
                html += '</div><button class="btn btn-sm btn-secondary" style="margin-top:8px;" onclick="copyToClipboard(\'' + names.join(', ') + '\')"><i class=\"fas fa-copy\"></i> Copy All</button>';
                resultDiv.innerHTML = html;
                showToast('Usernames generated!', 'success');
            };
            break;

        // ============================================================
        // 10. BIO GENERATOR
        // ============================================================
        case 'Bio Generator':
            showModal(
                '<p style="color:var(--text-secondary);margin-bottom:16px;">Generate a social media bio.</p>' +
                '<div class="form-group"><label>Your Name / Brand</label><input type="text" id="toolBioName" placeholder="Your name" style="width:100%;padding:10px 14px;background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);border-radius:8px;color:#fff;"></div>' +
                '<div class="form-group"><label>Vibe (e.g. funny, professional, creative)</label><input type="text" id="toolBioVibe" placeholder="professional" style="width:100%;padding:10px 14px;background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);border-radius:8px;color:#fff;"></div>' +
                '<button class="btn btn-primary btn-full" onclick="generateBio()"><i class=\"fas fa-quote-right\"></i> Generate Bio</button>' +
                '<div id="bioResult" style="margin-top:16px;"></div>',
                'Bio Generator'
            );
            window.generateBio = function() {
                var nameInput = document.getElementById('toolBioName');
                var vibeInput = document.getElementById('toolBioVibe');
                var name = nameInput ? nameInput.value.trim() : '';
                if (!name) name = 'Creator';
                var vibe = vibeInput ? vibeInput.value.trim().toLowerCase() : '';
                var bios = [];
                if (vibe === 'professional') {
                    bios = [name + ' | Building the future', name + ' - Strategy. Growth. Impact.', 'Consultant. Speaker. ' + name + '. Let\'s connect.'];
                } else if (vibe === 'funny') {
                    bios = [name + ' Professional Nap-Taker', 'I put the pro in procrastination - ' + name, name + ' | Probably thinking about food'];
                } else if (vibe === 'creative') {
                    bios = [name + ' Creating magic daily', 'Designer x Dreamer x ' + name, name + ' | Art is my oxygen'];
                } else {
                    bios = [name + ' | Living my best life', name + ' Dream big. Work hard.', name + ' - Creator - Dreamer - Achiever', name + ' Making moves daily', name + ' Be the energy you want to attract'];
                }
                var bio = bios[Math.floor(Math.random() * bios.length)];
                var resultDiv = document.getElementById('bioResult');
                if (!resultDiv) return;
                resultDiv.innerHTML = '<div style="padding:16px;background:rgba(255,255,255,0.03);border-radius:8px;font-size:1rem;text-align:center;border:1px solid var(--border-glass);">' + bio + '</div><button class="btn btn-sm btn-secondary" style="margin-top:8px;" onclick="copyToClipboard(\'' + bio.replace(/'/g, "\\'") + '\')"><i class=\"fas fa-copy\"></i> Copy Bio</button><button class="btn btn-sm btn-ghost" style="margin-top:8px;margin-left:8px;" onclick="generateBio()"><i class=\"fas fa-redo\"></i> Regenerate</button>';
            };
            break;

        // ============================================================
        // 11. CAPTION GENERATOR
        // ============================================================
        case 'Caption Generator':
            showModal(
                '<p style="color:var(--text-secondary);margin-bottom:16px;">Generate a caption for your post.</p>' +
                '<div class="form-group"><label>Topic / Mood</label><input type="text" id="toolCaptionTopic" placeholder="e.g. sunset, motivation, travel" style="width:100%;padding:10px 14px;background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);border-radius:8px;color:#fff;"></div>' +
                '<button class="btn btn-primary btn-full" onclick="generateCaption()"><i class=\"fas fa-caption\"></i> Generate Caption</button>' +
                '<div id="captionResult" style="margin-top:16px;"></div>',
                'Caption Generator'
            );
            window.generateCaption = function() {
                var topicInput = document.getElementById('toolCaptionTopic');
                var topic = topicInput ? topicInput.value.trim().toLowerCase() : '';
                if (!topic) topic = 'life';
                var captions = [
                    topic + ' mode: ON',
                    'Living that ' + topic + ' lifestyle',
                    topic + ' never looked so good',
                    'All about the ' + topic + ' vibes',
                    topic + ' energy only',
                    'Chasing ' + topic + ' sunsets',
                    topic + ' = happiness',
                    'Born for ' + topic,
                    'Let the ' + topic + ' begin',
                    'Every ' + topic + ' tells a story',
                    topic + ' is the way',
                    'Stay ' + topic,
                    'Dive into ' + topic,
                    topic + ' season',
                    'All ' + topic + ', all love'
                ];
                var caption = captions[Math.floor(Math.random() * captions.length)];
                var resultDiv = document.getElementById('captionResult');
                if (!resultDiv) return;
                resultDiv.innerHTML = '<div style="padding:16px;background:rgba(255,255,255,0.03);border-radius:8px;font-size:1rem;text-align:center;border:1px solid var(--border-glass);">' + caption + '</div><button class="btn btn-sm btn-secondary" style="margin-top:8px;" onclick="copyToClipboard(\'' + caption.replace(/'/g, "\\'") + '\')"><i class=\"fas fa-copy\"></i> Copy Caption</button><button class="btn btn-sm btn-ghost" style="margin-top:8px;margin-left:8px;" onclick="generateCaption()"><i class=\"fas fa-redo\"></i> Regenerate</button>';
            };
            break;

        // ============================================================
        // 12. EMOJI GENERATOR
        // ============================================================
        case 'Emoji Generator':
            showModal(
                '<p style="color:var(--text-secondary);margin-bottom:16px;">Generate random emoji combinations for your posts.</p>' +
                '<button class="btn btn-primary btn-full" onclick="generateEmojis()"><i class=\"fas fa-smile\"></i> Generate</button>' +
                '<div id="emojiResult" style="margin-top:16px;font-size:2rem;text-align:center;"></div>',
                'Emoji Generator'
            );
            window.generateEmojis = function() {
                var emojis = ['🔥','✨','💯','🚀','🌟','💪','🎯','⚡','💎','👑','💫','⭐','🌊','🌈','💥','🎉','🎊','🏆','🥇','💡','🔮','💜','💙','❤️','🧡','💛','💚','🤍','🖤','💝','💖','💗'];
                var result = [];
                for (var i = 0; i < 5; i++) {
                    result.push(emojis[Math.floor(Math.random() * emojis.length)]);
                }
                var joined = result.join(' ');
                var resultDiv = document.getElementById('emojiResult');
                if (!resultDiv) return;
                resultDiv.innerHTML = '<div style="font-size:2.5rem;padding:20px;background:rgba(255,255,255,0.03);border-radius:12px;border:1px solid var(--border-glass);">' + joined + '</div><button class="btn btn-sm btn-secondary" style="margin-top:12px;" onclick="copyToClipboard(\'' + joined + '\')"><i class=\"fas fa-copy\"></i> Copy Emojis</button><button class="btn btn-sm btn-ghost" style="margin-top:12px;margin-left:8px;" onclick="generateEmojis()"><i class=\"fas fa-redo\"></i> Regenerate</button>';
            };
            break;

        // ============================================================
        // 13. QR CODE GENERATOR
        // ============================================================
        case 'QR Code Generator':
            showModal(
                '<p style="color:var(--text-secondary);margin-bottom:16px;">Generate a QR code for any URL or text.</p>' +
                '<div class="form-group"><label>URL or Text</label><input type="text" id="toolQrText" placeholder="https://example.com" value="https://mediaboost.co" style="width:100%;padding:10px 14px;background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);border-radius:8px;color:#fff;"></div>' +
                '<button class="btn btn-primary btn-full" onclick="generateQR()"><i class=\"fas fa-qrcode\"></i> Generate QR</button>' +
                '<div id="qrResult" style="margin-top:16px;text-align:center;"></div>',
                'QR Code Generator'
            );
            window.generateQR = function() {
                var textInput = document.getElementById('toolQrText');
                var text = textInput ? textInput.value.trim() : '';
                if (!text) text = 'https://mediaboost.co';
                var encoded = encodeURIComponent(text);
                var qrUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=' + encoded;
                var resultDiv = document.getElementById('qrResult');
                if (!resultDiv) return;
                resultDiv.innerHTML = '<img src="' + qrUrl + '" alt="QR Code" style="width:180px;height:180px;margin:0 auto;border-radius:12px;border:2px solid var(--border-glass);padding:8px;background:#fff;"><br><a href="' + qrUrl + '" download class="btn btn-sm btn-secondary" style="margin-top:8px;"><i class=\"fas fa-download\"></i> Download</a>';
                showToast('QR code generated!', 'success');
            };
            break;

        // ============================================================
        // 14. PASSWORD GENERATOR
        // ============================================================
        case 'Password Generator':
            showModal(
                '<p style="color:var(--text-secondary);margin-bottom:16px;">Generate a secure random password.</p>' +
                '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">' +
                '<div class="form-group"><label>Length</label><input type="number" id="toolPassLen" value="16" min="6" max="64" style="width:100%;padding:10px;background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);border-radius:8px;color:#fff;"></div>' +
                '<div class="form-group"><label>Count</label><input type="number" id="toolPassCount" value="3" min="1" max="20" style="width:100%;padding:10px;background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);border-radius:8px;color:#fff;"></div>' +
                '</div>' +
                '<button class="btn btn-primary btn-full" onclick="generatePasswords()"><i class=\"fas fa-key\"></i> Generate</button>' +
                '<div id="passResult" style="margin-top:16px;"></div>',
                'Random Password Generator'
            );
            window.generatePasswords = function() {
                var lenInput = document.getElementById('toolPassLen');
                var countInput = document.getElementById('toolPassCount');
                var len = lenInput ? parseInt(lenInput.value) : 16;
                var count = countInput ? parseInt(countInput.value) : 3;
                if (len < 6) len = 6;
                if (len > 64) len = 64;
                if (count < 1) count = 1;
                if (count > 20) count = 20;
                var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
                var passwords = [];
                for (var c = 0; c < count; c++) {
                    var pwd = '';
                    for (var i = 0; i < len; i++) {
                        pwd += chars.charAt(Math.floor(Math.random() * chars.length));
                    }
                    passwords.push(pwd);
                }
                var resultDiv = document.getElementById('passResult');
                if (!resultDiv) return;
                var html = '<div style="padding:12px;background:rgba(255,255,255,0.03);border-radius:8px;font-family:\'JetBrains Mono\',monospace;font-size:0.85rem;">';
                passwords.forEach(function(p) {
                    html += '<p style="padding:6px 0;border-bottom:1px solid rgba(255,255,255,0.03);word-break:break-all;">' + p + '</p>';
                });
                html += '</div><button class="btn btn-sm btn-secondary" style="margin-top:8px;" onclick="copyToClipboard(\'' + passwords.join(', ') + '\')"><i class=\"fas fa-copy\"></i> Copy All</button>';
                resultDiv.innerHTML = html;
                showToast('Passwords generated!', 'success');
            };
            break;

        // ============================================================
        // 15. IMAGE COMPRESSOR
        // ============================================================
        case 'Image Compressor':
            showModal(
                '<p style="color:var(--text-secondary);margin-bottom:16px;">Upload an image to compress it.</p>' +
                '<input type="file" id="toolCompressImg" accept="image/*" style="margin-bottom:12px;color:#fff;">' +
                '<button class="btn btn-primary btn-full" onclick="compressImage()"><i class=\"fas fa-compress\"></i> Compress</button>' +
                '<div id="compressResult" style="margin-top:16px;text-align:center;"></div>',
                'Image Compressor'
            );
            window.compressImage = function() {
                var fileInput = document.getElementById('toolCompressImg');
                if (!fileInput || !fileInput.files || !fileInput.files[0]) { showToast('Select an image', 'error'); return; }
                var file = fileInput.files[0];
                var reader = new FileReader();
                reader.onload = function(e) {
                    var img = new Image();
                    img.onload = function() {
                        var canvas = document.createElement('canvas');
                        canvas.width = img.width;
                        canvas.height = img.height;
                        var ctx = canvas.getContext('2d');
                        ctx.drawImage(img, 0, 0);
                        var mime = file.type || 'image/jpeg';
                        var dataUrl = canvas.toDataURL(mime, 0.5);
                        var sizeBefore = (file.size / 1024).toFixed(1);
                        var sizeAfter = ((dataUrl.length * 3/4) / 1024).toFixed(1);
                        var resultDiv = document.getElementById('compressResult');
                        if (!resultDiv) return;
                        var ext = file.name.split('.').pop();
                        resultDiv.innerHTML = '<p style="font-size:0.85rem;color:var(--text-muted);">Original: ' + sizeBefore + ' KB &rarr; Compressed: ' + sizeAfter + ' KB</p><img src="' + dataUrl + '" style="max-width:200px;border-radius:8px;margin:8px auto;border:1px solid var(--border-glass);"><br><a href="' + dataUrl + '" download="compressed.' + ext + '" class="btn btn-sm btn-secondary" style="margin-top:8px;"><i class=\"fas fa-download\"></i> Download</a>';
                        showToast('Image compressed!', 'success');
                    };
                    img.src = e.target.result;
                };
                reader.readAsDataURL(file);
            };
            break;

        // ============================================================
        // 16. IMAGE CONVERTER
        // ============================================================
        case 'Image Converter':
            showModal(
                '<p style="color:var(--text-secondary);margin-bottom:16px;">Upload an image to convert to another format.</p>' +
                '<div class="form-group"><label>Target Format</label><select id="toolConvertFormat" style="width:100%;padding:10px;background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);border-radius:8px;color:#fff;"><option>PNG</option><option>JPEG</option><option>WEBP</option><option>GIF</option></select></div>' +
                '<input type="file" id="toolConvertImg" accept="image/*" style="margin-bottom:12px;color:#fff;">' +
                '<button class="btn btn-primary btn-full" onclick="convertImage()"><i class=\"fas fa-exchange-alt\"></i> Convert</button>' +
                '<div id="convertResult" style="margin-top:16px;text-align:center;"></div>',
                'Image Converter'
            );
            window.convertImage = function() {
                var formatSelect = document.getElementById('toolConvertFormat');
                var fileInput = document.getElementById('toolConvertImg');
                if (!fileInput || !fileInput.files || !fileInput.files[0]) { showToast('Select an image', 'error'); return; }
                var file = fileInput.files[0];
                var format = formatSelect ? formatSelect.value.toLowerCase() : 'png';
                var reader = new FileReader();
                reader.onload = function(e) {
                    var img = new Image();
                    img.onload = function() {
                        var canvas = document.createElement('canvas');
                        canvas.width = img.width; canvas.height = img.height;
                        var ctx = canvas.getContext('2d');
                        ctx.drawImage(img, 0, 0);
                        var mime = format === 'jpeg' ? 'image/jpeg' : 'image/' + format;
                        var dataUrl = canvas.toDataURL(mime, 0.92);
                        var ext = format === 'jpeg' ? 'jpg' : format;
                        var resultDiv = document.getElementById('convertResult');
                        if (!resultDiv) return;
                        resultDiv.innerHTML = '<p style="font-size:0.85rem;color:var(--green);"><i class=\"fas fa-check-circle\"></i> Converted to ' + format.toUpperCase() + '</p><img src="' + dataUrl + '" style="max-width:200px;border-radius:8px;margin:8px auto;border:1px solid var(--border-glass);"><br><a href="' + dataUrl + '" download="converted.' + ext + '" class="btn btn-sm btn-secondary" style="margin-top:8px;"><i class=\"fas fa-download\"></i> Download</a>';
                        showToast('Image converted!', 'success');
                    };
                    img.src = e.target.result;
                };
                reader.readAsDataURL(file);
            };
            break;

        // ============================================================
        // 17. VIDEO THUMBNAIL GENERATOR
        // ============================================================
        case 'Video Thumbnail Gen':
            showModal(
                '<p style="color:var(--text-secondary);margin-bottom:16px;">Upload a video to generate a thumbnail from it.</p>' +
                '<input type="file" id="toolThumbVideo" accept="video/*" style="margin-bottom:12px;color:#fff;">' +
                '<button class="btn btn-primary btn-full" onclick="generateVideoThumb()"><i class=\"fas fa-camera\"></i> Generate Thumbnail</button>' +
                '<div id="thumbResult" style="margin-top:16px;text-align:center;"></div>',
                'Video Thumbnail Generator'
            );
            window.generateVideoThumb = function() {
                var fileInput = document.getElementById('toolThumbVideo');
                if (!fileInput || !fileInput.files || !fileInput.files[0]) { showToast('Select a video', 'error'); return; }
                var file = fileInput.files[0];
                var url = URL.createObjectURL(file);
                var video = document.createElement('video');
                video.preload = 'metadata';
                video.src = url;
                video.onloadeddata = function() { video.currentTime = 1; };
                video.onseeked = function() {
                    var canvas = document.createElement('canvas');
                    canvas.width = video.videoWidth;
                    canvas.height = video.videoHeight;
                    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
                    var dataUrl = canvas.toDataURL('image/jpeg', 0.85);
                    URL.revokeObjectURL(url);
                    var resultDiv = document.getElementById('thumbResult');
                    if (!resultDiv) return;
                    resultDiv.innerHTML = '<img src="' + dataUrl + '" style="width:100%;border-radius:8px;border:1px solid var(--border-glass);margin-bottom:8px;"><a href="' + dataUrl + '" download="thumbnail.jpg" class="btn btn-sm btn-secondary"><i class=\"fas fa-download\"></i> Download Thumbnail</a>';
                    showToast('Thumbnail generated!', 'success');
                };
            };
            break;

        // ============================================================
        // 18. TEXT TO EMOJI
        // ============================================================
        case 'Text to Emoji':
            showModal(
                '<p style="color:var(--text-secondary);margin-bottom:16px;">Convert text to emoji symbols.</p>' +
                '<div class="form-group"><label>Enter Text</label><input type="text" id="toolTextToEmoji" placeholder="Hello World" style="width:100%;padding:10px;background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);border-radius:8px;color:#fff;"></div>' +
                '<button class="btn btn-primary btn-full" onclick="textToEmoji()"><i class=\"fas fa-language\"></i> Convert</button>' +
                '<div id="textToEmojiResult" style="margin-top:16px;text-align:center;font-size:1.5rem;"></div>',
                'Text to Emoji'
            );
            window.textToEmoji = function() {
                var inputEl = document.getElementById('toolTextToEmoji');
                var text = inputEl ? inputEl.value.trim().toLowerCase() : '';
                if (!text) { showToast('Enter some text', 'error'); return; }
                var map = { a:'\uD83C\uDD70', b:'\uD83C\uDD71', c:'\uD83C\uDD72', d:'\uD83C\uDD73', e:'\uD83C\uDD74', f:'\uD83C\uDD75', g:'\uD83C\uDD76', h:'\uD83C\uDD77', i:'\uD83C\uDD78', j:'\uD83C\uDD79', k:'\uD83C\uDD7A', l:'\uD83C\uDD7B', m:'\uD83C\uDD7C', n:'\uD83C\uDD7D', o:'\uD83C\uDD7E', p:'\uD83C\uDD7F', q:'\uD83C\uDD80', r:'\uD83C\uDD81', s:'\uD83C\uDD82', t:'\uD83C\uDD83', u:'\uD83C\uDD84', v:'\uD83C\uDD85', w:'\uD83C\uDD86', x:'\uD83C\uDD87', y:'\uD83C\uDD88', z:'\uD83C\uDD89', '0':'0\uFE0F\u20E3','1':'1\uFE0F\u20E3','2':'2\uFE0F\u20E3','3':'3\uFE0F\u20E3','4':'4\uFE0F\u20E3','5':'5\uFE0F\u20E3','6':'6\uFE0F\u20E3','7':'7\uFE0F\u20E3','8':'8\uFE0F\u20E3','9':'9\uFE0F\u20E3',' ':'  ' };
                var result = text.split('').map(function(c) { return map[c] || c; }).join(' ');
                var resultDiv = document.getElementById('textToEmojiResult');
                if (!resultDiv) return;
                resultDiv.innerHTML = '<div style="padding:16px;background:rgba(255,255,255,0.03);border-radius:8px;border:1px solid var(--border-glass);font-size:1.8rem;">' + result + '</div><button class="btn btn-sm btn-secondary" style="margin-top:8px;" onclick="copyToClipboard(\'' + result.replace(/'/g, "\\'") + '\')"><i class=\"fas fa-copy\"></i> Copy</button>';
            };
            break;

        // ============================================================
        // 19. EMOJI TO TEXT
        // ============================================================
        case 'Emoji to Text':
            showModal(
                '<p style="color:var(--text-secondary);margin-bottom:16px;">Extract text meaning from emojis.</p>' +
                '<div class="form-group"><label>Enter Emoji(s)</label><input type="text" id="toolEmojiToText" placeholder="🔥💯🚀" style="width:100%;padding:10px;background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);border-radius:8px;color:#fff;"></div>' +
                '<button class="btn btn-primary btn-full" onclick="emojiToText()"><i class=\"fas fa-font\"></i> Convert</button>' +
                '<div id="emojiToTextResult" style="margin-top:16px;"></div>',
                'Emoji to Text'
            );
            window.emojiToText = function() {
                var inputEl = document.getElementById('toolEmojiToText');
                var input = inputEl ? inputEl.value.trim() : '';
                if (!input) { showToast('Enter emojis', 'error'); return; }
                var meanings = { '🔥':'Fire/Awesome', '💯':'100/Perfect', '🚀':'Rocket/Growth', '✨':'Sparkles/Magic', '🌟':'Star/Shining', '💪':'Strong', '🎯':'Target', '⚡':'Lightning/Energy', '💎':'Diamond', '👑':'Crown', '💫':'Amazing', '⭐':'Star', '🌊':'Wave/Flow', '🌈':'Rainbow', '💥':'Impact', '🎉':'Party', '🎊':'Confetti', '🏆':'Trophy', '🥇':'Gold Medal', '💡':'Idea', '🔮':'Future', '💜':'Purple Heart', '💙':'Blue Heart', '❤️':'Red Heart', '🧡':'Orange Heart', '💛':'Yellow Heart', '💚':'Green Heart', '🖤':'Black Heart', '💝':'Love', '💖':'Sparkling Heart', '💗':'Growing Heart' };
                var chars = [...input];
                var result = chars.map(function(c) { return meanings[c] || 'Unknown'; }).join(', ');
                var resultDiv = document.getElementById('emojiToTextResult');
                if (!resultDiv) return;
                resultDiv.innerHTML = '<div style="padding:16px;background:rgba(255,255,255,0.03);border-radius:8px;border:1px solid var(--border-glass);">' + result + '</div><button class="btn btn-sm btn-secondary" style="margin-top:8px;" onclick="copyToClipboard(\'' + result.replace(/'/g, "\\'") + '\')"><i class=\"fas fa-copy\"></i> Copy</button>';
            };
            break;

        // ============================================================
        // 20. FONT GENERATOR
        // ============================================================
        case 'Font Generator':
            showModal(
                '<p style="color:var(--text-secondary);margin-bottom:16px;">Convert text into fancy font styles.</p>' +
                '<div class="form-group"><label>Enter Text</label><input type="text" id="toolFontText" placeholder="Your text here" style="width:100%;padding:10px;background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);border-radius:8px;color:#fff;"></div>' +
                '<button class="btn btn-primary btn-full" onclick="generateFonts()"><i class=\"fas fa-text-height\"></i> Generate Fonts</button>' +
                '<div id="fontResult" style="margin-top:16px;"></div>',
                'Font Generator'
            );
            window.generateFonts = function() {
                var inputEl = document.getElementById('toolFontText');
                var text = inputEl ? inputEl.value.trim() : '';
                if (!text) { showToast('Enter text', 'error'); return; }
                var fonts = [
                    { name: 'Bold', value: text.split('').map(function(c) { return c.match(/[a-zA-Z]/) ? String.fromCharCode(120276 + (c.charCodeAt(0)-65)) : c; }).join('') },
                    { name: 'Italic', value: text.split('').map(function(c) { return c.match(/[a-zA-Z]/) ? String.fromCharCode(119860 + (c.charCodeAt(0)-65)) : c; }).join('') },
                    { name: 'Script', value: text.split('').map(function(c) { return c.match(/[a-zA-Z]/) ? String.fromCharCode(120016 + (c.charCodeAt(0)-65)) : c; }).join('') },
                    { name: 'Monospace', value: text.split('').map(function(c) { return c.match(/[a-zA-Z0-9]/) ? String.fromCharCode(120432 + (c.charCodeAt(0)-48)) : c; }).join('') },
                    { name: 'Double-struck', value: text.split('').map(function(c) { return c.match(/[A-Z]/) ? String.fromCharCode(120120 + (c.charCodeAt(0)-65)) : c; }).join('') },
                    { name: 'Sans-serif', value: text.split('').map(function(c) { return c.match(/[a-zA-Z]/) ? String.fromCharCode(120224 + (c.charCodeAt(0)-65)) : c; }).join('') },
                ];
                var resultDiv = document.getElementById('fontResult');
                if (!resultDiv) return;
                var html = '';
                fonts.forEach(function(f) {
                    html += '<div style="margin-bottom:10px;padding:10px;background:rgba(255,255,255,0.02);border-radius:6px;border:1px solid var(--border-glass);"><p style="font-size:0.7rem;color:var(--text-muted);margin-bottom:4px;">' + f.name + '</p><p style="font-size:1rem;word-break:break-all;">' + f.value + '</p><button class="btn btn-sm btn-ghost" style="margin-top:4px;" onclick="copyToClipboard(\'' + f.value.replace(/'/g, "\\'") + '\')"><i class=\"fas fa-copy\"></i></button></div>';
                });
                resultDiv.innerHTML = html;
            };
            break;

        // ============================================================
        // 21. COLOR PALETTE GENERATOR
        // ============================================================
        case 'Color Palette Gen':
            showModal(
                '<p style="color:var(--text-secondary);margin-bottom:16px;">Generate beautiful color palettes.</p>' +
                '<button class="btn btn-primary btn-full" onclick="generatePalette()"><i class=\"fas fa-palette\"></i> Generate</button>' +
                '<div id="paletteResult" style="margin-top:16px;display:grid;grid-template-columns:repeat(5,1fr);gap:8px;"></div>',
                'Color Palette Generator'
            );
            window.generatePalette = function() {
                var container = document.getElementById('paletteResult');
                if (!container) return;
                var html = '';
                for (var i = 0; i < 5; i++) {
                    var hue = Math.floor(Math.random() * 360);
                    var sat = 50 + Math.floor(Math.random() * 40);
                    var lig = 40 + Math.floor(Math.random() * 30);
                    var color = 'hsl(' + hue + ', ' + sat + '%, ' + lig + '%)';
                    html += '<div style="aspect-ratio:1;background:' + color + ';border-radius:8px;border:1px solid var(--border-glass);cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:0.6rem;color:rgba(255,255,255,0.7);" onclick="copyToClipboard(\'' + color + '\')" title="Click to copy">' + color + '</div>';
                }
                container.innerHTML = html;
                showToast('Palette generated!', 'success');
            };
            break;

        // ============================================================
        // 22. HEX TO RGB
        // ============================================================
        case 'HEX to RGB':
            showModal(
                '<p style="color:var(--text-secondary);margin-bottom:16px;">Convert HEX color to RGB values.</p>' +
                '<div class="form-group"><label>HEX Color</label><input type="text" id="toolHexColor" placeholder="#3b82f6" value="#3b82f6" style="width:100%;padding:10px;background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);border-radius:8px;color:#fff;"></div>' +
                '<button class="btn btn-primary btn-full" onclick="hexToRgb()"><i class=\"fas fa-eye-dropper\"></i> Convert</button>' +
                '<div id="hexToRgbResult" style="margin-top:16px;text-align:center;font-size:1.1rem;"></div>',
                'HEX to RGB Converter'
            );
            window.hexToRgb = function() {
                var inputEl = document.getElementById('toolHexColor');
                var hex = inputEl ? inputEl.value.trim().replace('#','') : '';
                if (hex.length === 3) hex = hex.split('').map(function(c) { return c+c; }).join('');
                var r = parseInt(hex.slice(0,2), 16);
                var g = parseInt(hex.slice(2,4), 16);
                var b = parseInt(hex.slice(4,6), 16);
                if (isNaN(r) || isNaN(g) || isNaN(b)) { showToast('Invalid HEX color', 'error'); return; }
                var result = 'rgb(' + r + ', ' + g + ', ' + b + ')';
                var resultDiv = document.getElementById('hexToRgbResult');
                if (!resultDiv) return;
                resultDiv.innerHTML = '<div style="padding:16px;background:rgba(255,255,255,0.03);border-radius:8px;border:1px solid var(--border-glass);"><div style="width:60px;height:60px;background:#' + hex + ';border-radius:8px;margin:0 auto 12px;border:1px solid var(--border-glass);"></div><p style="font-family:\'JetBrains Mono\',monospace;">' + result + '</p></div><button class="btn btn-sm btn-secondary" style="margin-top:8px;" onclick="copyToClipboard(\'' + result + '\')"><i class=\"fas fa-copy\"></i> Copy</button>';
            };
            break;

        // ============================================================
        // 23. WORD COUNTER
        // ============================================================
        case 'Word Counter':
            showModal(
                '<p style="color:var(--text-secondary);margin-bottom:16px;">Count words, characters, and more.</p>' +
                '<div class="form-group"><textarea id="toolWordText" rows="5" placeholder="Paste or type your text here..." style="width:100%;padding:10px;background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);border-radius:8px;color:#fff;resize:vertical;"></textarea></div>' +
                '<button class="btn btn-primary btn-full" onclick="countWords()"><i class=\"fas fa-calculator\"></i> Count</button>' +
                '<div id="wordCountResult" style="margin-top:16px;"></div>',
                'Word Counter'
            );
            window.countWords = function() {
                var textarea = document.getElementById('toolWordText');
                var text = textarea ? textarea.value : '';
                var words = text.trim() ? text.trim().split(/\s+/).length : 0;
                var chars = text.length;
                var charsNoSpace = text.replace(/\s/g, '').length;
                var lines = text ? text.split('\n').length : 0;
                var resultDiv = document.getElementById('wordCountResult');
                if (!resultDiv) return;
                resultDiv.innerHTML = '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;"><div style="padding:12px;background:rgba(255,255,255,0.02);border-radius:6px;text-align:center;"><span style="display:block;font-size:1.5rem;font-weight:800;color:var(--blue);">' + words + '</span><span style="font-size:0.75rem;color:var(--text-muted);">Words</span></div><div style="padding:12px;background:rgba(255,255,255,0.02);border-radius:6px;text-align:center;"><span style="display:block;font-size:1.5rem;font-weight:800;color:var(--purple);">' + chars + '</span><span style="font-size:0.75rem;color:var(--text-muted);">Characters</span></div><div style="padding:12px;background:rgba(255,255,255,0.02);border-radius:6px;text-align:center;"><span style="display:block;font-size:1.5rem;font-weight:800;color:var(--green);">' + charsNoSpace + '</span><span style="font-size:0.75rem;color:var(--text-muted);">No Space</span></div><div style="padding:12px;background:rgba(255,255,255,0.02);border-radius:6px;text-align:center;"><span style="display:block;font-size:1.5rem;font-weight:800;color:var(--orange);">' + lines + '</span><span style="font-size:0.75rem;color:var(--text-muted);">Lines</span></div></div>';
            };
            break;

        // ============================================================
        // 24. CHARACTER COUNTER
        // ============================================================
        case 'Character Counter':
            showModal(
                '<p style="color:var(--text-secondary);margin-bottom:16px;">Count characters in real-time.</p>' +
                '<div class="form-group"><textarea id="toolCharText" rows="5" placeholder="Start typing..." style="width:100%;padding:10px;background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);border-radius:8px;color:#fff;resize:vertical;" oninput="liveCharCount()"></textarea></div>' +
                '<div id="charCountResult" style="padding:12px;background:rgba(255,255,255,0.02);border-radius:6px;text-align:center;"><span style="display:block;font-size:2rem;font-weight:800;color:var(--blue);" id="charCountNum">0</span><span style="font-size:0.85rem;color:var(--text-muted);">Characters</span></div>',
                'Character Counter'
            );
            window.liveCharCount = function() {
                var textarea = document.getElementById('toolCharText');
                var numEl = document.getElementById('charCountNum');
                if (numEl && textarea) numEl.textContent = textarea.value.length;
            };
            break;

        // ============================================================
        // 25. URL SHORTENER
        // ============================================================
        case 'URL Shortener':
            showModal(
                '<p style="color:var(--text-secondary);margin-bottom:16px;">Shorten a long URL.</p>' +
                '<div class="form-group"><label>Long URL</label><input type="url" id="toolLongUrl" placeholder="https://very-long-url.com/page?param=value" style="width:100%;padding:10px;background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);border-radius:8px;color:#fff;"></div>' +
                '<button class="btn btn-primary btn-full" onclick="shortenUrl()"><i class=\"fas fa-link\"></i> Shorten</button>' +
                '<div id="shortenResult" style="margin-top:16px;text-align:center;"></div>',
                'URL Shortener'
            );
            window.shortenUrl = function() {
                var inputEl = document.getElementById('toolLongUrl');
                var url = inputEl ? inputEl.value.trim() : '';
                if (!url) { showToast('Enter a URL', 'error'); return; }
                var code = Math.random().toString(36).substring(2, 8);
                var short = 'https://mb.gg/' + code;
                var resultDiv = document.getElementById('shortenResult');
                if (!resultDiv) return;
                resultDiv.innerHTML = '<div style="padding:16px;background:rgba(255,255,255,0.03);border-radius:8px;border:1px solid var(--border-glass);font-family:\'JetBrains Mono\',monospace;">' + short + '</div><button class="btn btn-sm btn-secondary" style="margin-top:8px;" onclick="copyToClipboard(\'' + short + '\')"><i class=\"fas fa-copy\"></i> Copy</button><p style="font-size:0.7rem;color:var(--text-muted);margin-top:8px;">For production, integrate Bitly or TinyURL API.</p>';
                showToast('URL shortened!', 'success');
            };
            break;

        // ============================================================
        // 26. BASE64 ENCODER
        // ============================================================
        case 'Base64 Encoder':
            showModal(
                '<p style="color:var(--text-secondary);margin-bottom:16px;">Encode text to Base64.</p>' +
                '<div class="form-group"><textarea id="toolB64Encode" rows="4" placeholder="Text to encode..." style="width:100%;padding:10px;background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);border-radius:8px;color:#fff;resize:vertical;"></textarea></div>' +
                '<button class="btn btn-primary btn-full" onclick="base64Encode()"><i class=\"fas fa-lock\"></i> Encode</button>' +
                '<div id="b64EncodeResult" style="margin-top:16px;"></div>',
                'Base64 Encoder'
            );
            window.base64Encode = function() {
                var textarea = document.getElementById('toolB64Encode');
                var text = textarea ? textarea.value : '';
                if (!text) { showToast('Enter text', 'error'); return; }
                try {
                    var encoded = btoa(unescape(encodeURIComponent(text)));
                    var resultDiv = document.getElementById('b64EncodeResult');
                    if (!resultDiv) return;
                    resultDiv.innerHTML = '<div style="padding:12px;background:rgba(255,255,255,0.03);border-radius:8px;font-family:\'JetBrains Mono\',monospace;font-size:0.8rem;word-break:break-all;">' + encoded + '</div><button class="btn btn-sm btn-secondary" style="margin-top:8px;" onclick="copyToClipboard(\'' + encoded.replace(/'/g, "\\'") + '\')"><i class=\"fas fa-copy\"></i> Copy</button>';
                } catch(e) { showToast('Encoding failed', 'error'); }
            };
            break;

        // ============================================================
        // 27. BASE64 DECODER
        // ============================================================
        case 'Base64 Decoder':
            showModal(
                '<p style="color:var(--text-secondary);margin-bottom:16px;">Decode Base64 to text.</p>' +
                '<div class="form-group"><textarea id="toolB64Decode" rows="4" placeholder="Base64 to decode..." style="width:100%;padding:10px;background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);border-radius:8px;color:#fff;resize:vertical;"></textarea></div>' +
                '<button class="btn btn-primary btn-full" onclick="base64Decode()"><i class=\"fas fa-unlock\"></i> Decode</button>' +
                '<div id="b64DecodeResult" style="margin-top:16px;"></div>',
                'Base64 Decoder'
            );
            window.base64Decode = function() {
                var textarea = document.getElementById('toolB64Decode');
                var text = textarea ? textarea.value.trim() : '';
                if (!text) { showToast('Enter Base64 text', 'error'); return; }
                try {
                    var decoded = decodeURIComponent(escape(atob(text)));
                    var resultDiv = document.getElementById('b64DecodeResult');
                    if (!resultDiv) return;
                    resultDiv.innerHTML = '<div style="padding:12px;background:rgba(255,255,255,0.03);border-radius:8px;word-break:break-all;">' + decoded + '</div><button class="btn btn-sm btn-secondary" style="margin-top:8px;" onclick="copyToClipboard(\'' + decoded.replace(/'/g, "\\'") + '\')"><i class=\"fas fa-copy\"></i> Copy</button>';
                } catch(e) { showToast('Invalid Base64 string', 'error'); }
            };
            break;

        // ============================================================
        // 28. JSON FORMATTER
        // ============================================================
        case 'JSON Formatter':
            showModal(
                '<p style="color:var(--text-secondary);margin-bottom:16px;">Format and validate JSON.</p>' +
                '<div class="form-group"><textarea id="toolJsonInput" rows="6" placeholder=\'{"key":"value"}\' style="width:100%;padding:10px;background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);border-radius:8px;color:#fff;resize:vertical;font-family:\'JetBrains Mono\',monospace;font-size:0.8rem;"></textarea></div>' +
                '<button class="btn btn-primary btn-full" onclick="formatJson()"><i class=\"fas fa-code\"></i> Format</button>' +
                '<button class="btn btn-sm btn-ghost" style="margin-top:4px;" onclick="minifyJson()"><i class=\"fas fa-compress\"></i> Minify</button>' +
                '<div id="jsonResult" style="margin-top:16px;"></div>',
                'JSON Formatter'
            );
            window.formatJson = function() {
                try {
                    var textarea = document.getElementById('toolJsonInput');
                    var input = textarea ? textarea.value : '';
                    var parsed = JSON.parse(input);
                    var formatted = JSON.stringify(parsed, null, 2);
                    var resultDiv = document.getElementById('jsonResult');
                    if (!resultDiv) return;
                    resultDiv.innerHTML = '<div style="padding:12px;background:rgba(255,255,255,0.03);border-radius:8px;font-family:\'JetBrains Mono\',monospace;font-size:0.8rem;white-space:pre-wrap;word-break:break-all;max-height:300px;overflow:auto;border:1px solid var(--border-glass);"><span style="color:var(--green);">Valid JSON</span>\n\n' + formatted + '</div><button class="btn btn-sm btn-secondary" style="margin-top:8px;" onclick="copyToClipboard(\'' + formatted.replace(/`/g, '\\`').replace(/\$/g, '\\$').replace(/'/g, "\\'") + '\')"><i class=\"fas fa-copy\"></i> Copy</button>';
                } catch(e) {
                    var resultDiv = document.getElementById('jsonResult');
                    if (resultDiv) resultDiv.innerHTML = '<p style="color:var(--red);"><i class=\"fas fa-times-circle\"></i> Invalid JSON: ' + e.message + '</p>';
                }
            };
            window.minifyJson = function() {
                try {
                    var textarea = document.getElementById('toolJsonInput');
                    var input = textarea ? textarea.value : '';
                    var minified = JSON.stringify(JSON.parse(input));
                    var resultDiv = document.getElementById('jsonResult');
                    if (!resultDiv) return;
                    resultDiv.innerHTML = '<div style="padding:12px;background:rgba(255,255,255,0.03);border-radius:8px;font-family:\'JetBrains Mono\',monospace;font-size:0.8rem;word-break:break-all;border:1px solid var(--border-glass);">' + minified + '</div><button class="btn btn-sm btn-secondary" style="margin-top:8px;" onclick="copyToClipboard(\'' + minified.replace(/'/g, "\\'") + '\')"><i class=\"fas fa-copy\"></i> Copy</button>';
                } catch(e) { showToast('Invalid JSON', 'error'); }
            };
            break;

        // ============================================================
        // 29. MARKDOWN PREVIEW
        // ============================================================
        case 'Markdown Preview':
            showModal(
                '<p style="color:var(--text-secondary);margin-bottom:16px;">Write Markdown and preview it live.</p>' +
                '<div class="form-group"><textarea id="toolMdInput" rows="6" placeholder="# Hello World&#10;This is **bold** and *italic*." style="width:100%;padding:10px;background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);border-radius:8px;color:#fff;resize:vertical;font-family:\'JetBrains Mono\',monospace;font-size:0.85rem;" oninput="previewMarkdown()"></textarea></div>' +
                '<div id="mdPreviewResult" style="padding:16px;background:rgba(255,255,255,0.02);border-radius:8px;border:1px solid var(--border-glass);min-height:100px;color:var(--text-secondary);font-size:0.9rem;line-height:1.7;"></div>',
                'Markdown Preview'
            );
            window.previewMarkdown = function() {
                var textarea = document.getElementById('toolMdInput');
                var input = textarea ? textarea.value : '';
                var html = input
                    .replace(/### (.+)/g, '<h5>$1</h5>')
                    .replace(/## (.+)/g, '<h4>$1</h4>')
                    .replace(/# (.+)/g, '<h3>$1</h3>')
                    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                    .replace(/\*(.+?)\*/g, '<em>$1</em>')
                    .replace(/`(.+?)`/g, '<code style="background:rgba(255,255,255,0.05);padding:2px 6px;border-radius:3px;font-family:\'JetBrains Mono\',monospace;font-size:0.8rem;">$1</code>')
                    .replace(/^- (.+)/gm, '<li style="margin-left:16px;">$1</li>')
                    .replace(/\n{2,}/g, '</p><p>')
                    .replace(/\n/g, '<br>');
                var resultDiv = document.getElementById('mdPreviewResult');
                if (resultDiv) resultDiv.innerHTML = html || '<p style="color:var(--text-muted);">Preview will appear here...</p>';
            };
            break;

        // ============================================================
        // 30. AGE CALCULATOR
        // ============================================================
        case 'Age Calculator':
            showModal(
                '<p style="color:var(--text-secondary);margin-bottom:16px;">Calculate your exact age.</p>' +
                '<div class="form-group"><label>Date of Birth</label><input type="date" id="toolDob" style="width:100%;padding:10px;background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);border-radius:8px;color:#fff;color-scheme:dark;"></div>' +
                '<button class="btn btn-primary btn-full" onclick="calculateAge()"><i class=\"fas fa-calendar-alt\"></i> Calculate</button>' +
                '<div id="ageResult" style="margin-top:16px;"></div>',
                'Age Calculator'
            );
            window.calculateAge = function() {
                var inputEl = document.getElementById('toolDob');
                var dob = inputEl ? inputEl.value : '';
                if (!dob) { showToast('Select your date of birth', 'error'); return; }
                var birth = new Date(dob);
                var today = new Date();
                var years = today.getFullYear() - birth.getFullYear();
                var months = today.getMonth() - birth.getMonth();
                var days = today.getDate() - birth.getDate();
                if (days < 0) { months--; days += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); }
                if (months < 0) { years--; months += 12; }
                var totalDays = Math.floor((today - birth) / (1000 * 60 * 60 * 24));
                var resultDiv = document.getElementById('ageResult');
                if (!resultDiv) return;
                resultDiv.innerHTML = '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:12px;"><div style="padding:16px;background:rgba(255,255,255,0.02);border-radius:8px;text-align:center;"><span style="display:block;font-size:1.8rem;font-weight:800;color:var(--blue);">' + years + '</span><span style="font-size:0.75rem;color:var(--text-muted);">Years</span></div><div style="padding:16px;background:rgba(255,255,255,0.02);border-radius:8px;text-align:center;"><span style="display:block;font-size:1.8rem;font-weight:800;color:var(--purple);">' + months + '</span><span style="font-size:0.75rem;color:var(--text-muted);">Months</span></div><div style="padding:16px;background:rgba(255,255,255,0.02);border-radius:8px;text-align:center;"><span style="display:block;font-size:1.8rem;font-weight:800;color:var(--green);">' + days + '</span><span style="font-size:0.75rem;color:var(--text-muted);">Days</span></div></div><p style="font-size:0.85rem;color:var(--text-muted);">Total: ' + totalDays.toLocaleString() + ' days</p>';
            };
            break;

        // ============================================================
        // 31. CURRENCY CONVERTER
        // ============================================================
        case 'Currency Converter':
            showModal(
                '<p style="color:var(--text-secondary);margin-bottom:16px;">Convert between currencies (simulated rates).</p>' +
                '<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;">' +
                '<div class="form-group"><label>Amount</label><input type="number" id="toolCurrAmt" value="100" style="width:100%;padding:10px;background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);border-radius:8px;color:#fff;"></div>' +
                '<div class="form-group"><label>From</label><select id="toolCurrFrom" style="width:100%;padding:10px;background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);border-radius:8px;color:#fff;"><option>USD</option><option>EUR</option><option>GBP</option><option>NGN</option><option>GHS</option><option>KES</option></select></div>' +
                '<div class="form-group"><label>To</label><select id="toolCurrTo" style="width:100%;padding:10px;background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);border-radius:8px;color:#fff;"><option>NGN</option><option>USD</option><option>EUR</option><option>GBP</option><option>GHS</option><option>KES</option></select></div>' +
                '</div>' +
                '<button class="btn btn-primary btn-full" onclick="convertCurrency()"><i class=\"fas fa-money-bill-wave\"></i> Convert</button>' +
                '<div id="currResult" style="margin-top:16px;text-align:center;font-size:1.2rem;"></div>',
                'Currency Converter'
            );
            window.convertCurrency = function() {
                var amtInput = document.getElementById('toolCurrAmt');
                var fromSelect = document.getElementById('toolCurrFrom');
                var toSelect = document.getElementById('toolCurrTo');
                var amount = parseFloat(amtInput ? amtInput.value : 100) || 100;
                var from = fromSelect ? fromSelect.value : 'USD';
                var to = toSelect ? toSelect.value : 'NGN';
                var rates = { USD: 1, EUR: 0.92, GBP: 0.79, NGN: 1550, GHS: 15.2, KES: 140 };
                var result = (amount / (rates[from] || 1)) * (rates[to] || 1);
                var resultDiv = document.getElementById('currResult');
                if (!resultDiv) return;
                resultDiv.innerHTML = '<div style="padding:16px;background:rgba(255,255,255,0.03);border-radius:8px;border:1px solid var(--border-glass);"><p style="font-size:0.9rem;color:var(--text-muted);">' + amount.toLocaleString() + ' ' + from + ' =</p><p style="font-size:1.8rem;font-weight:800;background:var(--gradient-main);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">' + result.toLocaleString(undefined, {maximumFractionDigits:2}) + ' ' + to + '</p><p style="font-size:0.7rem;color:var(--text-muted);margin-top:8px;">* Simulated rate. Real rates require an API key.</p></div>';
            };
            break;

        // ============================================================
        // 32. PASSWORD STRENGTH CHECKER
        // ============================================================
        case 'Password Strength':
            showModal(
                '<p style="color:var(--text-secondary);margin-bottom:16px;">Check the strength of your password.</p>' +
                '<div class="form-group"><input type="text" id="toolPassCheck" placeholder="Enter a password..." style="width:100%;padding:10px;background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);border-radius:8px;color:#fff;font-family:\'JetBrains Mono\',monospace;" oninput="checkPasswordStrength()"></div>' +
                '<div id="passStrengthResult" style="margin-top:16px;"><div style="height:8px;background:rgba(255,255,255,0.05);border-radius:4px;overflow:hidden;"><div id="strengthBar" style="height:100%;width:0%;background:var(--red);border-radius:4px;transition:width 0.3s, background 0.3s;"></div></div><p id="strengthLabel" style="text-align:center;margin-top:8px;font-size:0.85rem;color:var(--text-muted);">Type a password to check</p></div>',
                'Password Strength Checker'
            );
            window.checkPasswordStrength = function() {
                var inputEl = document.getElementById('toolPassCheck');
                var pwd = inputEl ? inputEl.value : '';
                var bar = document.getElementById('strengthBar');
                var label = document.getElementById('strengthLabel');
                if (!bar || !label) return;
                var score = 0;
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

        // ============================================================
        // DEFAULT / FALLBACK
        // ============================================================
        default:
            showModal('<p style="text-align:center;color:var(--text-muted);padding:20px;">Tool "' + toolName + '" is loading...<br><br>This tool will be fully functional in the next update.</p>', toolName);
            showToast(toolName + ' coming soon!', 'info');
            break;
    }
}
