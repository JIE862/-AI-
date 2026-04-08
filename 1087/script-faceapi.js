document.addEventListener('DOMContentLoaded', function() {
    const userData = JSON.parse(localStorage.getItem('userData'));
    
    const imageSectionColumnLabelsContainer = document.querySelector('.image-section .column-labels');
    if (imageSectionColumnLabelsContainer) {
        for (let col = 5; col <= 100; col += 5) {
            const label = document.createElement('div');
            label.className = 'column-label';
            label.textContent = col;
            label.style.left = `calc(${col - 1} * 100% / 100)`;
            imageSectionColumnLabelsContainer.appendChild(label);
        }
    }
    
    const imageSectionRowLabelsContainer = document.querySelector('.image-section .row-labels');
    if (imageSectionRowLabelsContainer) {
        for (let row = 5; row <= 75; row += 5) {
            const label = document.createElement('div');
            label.className = 'row-label';
            label.textContent = row;
            label.style.top = `calc(${row - 1} * 100% / 75)`;
            imageSectionRowLabelsContainer.appendChild(label);
        }
    }
    
    const imageSectionColumnLabelsBottomContainer = document.querySelector('.image-section .column-labels-bottom');
    if (imageSectionColumnLabelsBottomContainer) {
        for (let col = 5; col <= 100; col += 5) {
            const label = document.createElement('div');
            label.className = 'column-label-bottom';
            label.textContent = col;
            label.style.left = `calc(${col - 1} * 100% / 100)`;
            imageSectionColumnLabelsBottomContainer.appendChild(label);
        }
    }
    
    const columnLabelsContainer = document.querySelector('.container .column-labels');
    if (columnLabelsContainer) {
        for (let col = 5; col <= 100; col += 5) {
            const label = document.createElement('div');
            label.className = 'column-label';
            label.textContent = col;
            label.style.left = `calc(${col - 1} * 100% / 100)`;
            columnLabelsContainer.appendChild(label);
        }
    }
    
    const rowLabelsContainer = document.querySelector('.container .row-labels');
    if (rowLabelsContainer) {
        for (let row = 5; row <= 75; row += 5) {
            const label = document.createElement('div');
            label.className = 'row-label';
            label.textContent = row;
            label.style.top = `calc(${row - 1} * 100% / 75)`;
            rowLabelsContainer.appendChild(label);
        }
    }
    
    const columnLabelsBottomContainer = document.querySelector('.container .column-labels-bottom');
    if (columnLabelsBottomContainer) {
        for (let col = 5; col <= 100; col += 5) {
            const label = document.createElement('div');
            label.className = 'column-label-bottom';
            label.textContent = col;
            label.style.left = `calc(${col - 1} * 100% / 100)`;
            columnLabelsBottomContainer.appendChild(label);
        }
    }
    
    const chatInputB1 = document.getElementById('chatInputB1');
    const chatMessages = document.getElementById('chatMessages');
    const triggeredGif = document.getElementById('triggeredGif');
    const ai1TriggeredGif = document.getElementById('ai1TriggeredGif');
    const ai2TriggeredGif = document.getElementById('ai2TriggeredGif');
    const ai3TriggeredGif = document.getElementById('ai3TriggeredGif');
    let ai1GifInterval = null;
    let ai2GifInterval = null;
    let ai3GifInterval = null;
    
    if (chatInputB1 && triggeredGif) {
        chatInputB1.addEventListener('input', function() {
            if (this.value.trim() !== '') {
                triggeredGif.style.display = 'block';
            } else {
                triggeredGif.style.display = 'none';
            }
        });
    }
    
    function startAI1GifBlinking() {
        if (ai1GifInterval) {
            clearInterval(ai1GifInterval);
        }
        
        if (!ai1TriggeredGif) return;
        
        ai1TriggeredGif.style.display = 'block';
        
        const blinkPattern = [
            { show: true, duration: 5000 },
            { show: false, duration: 5000 },
            { show: true, duration: 3000 },
            { show: false, duration: 5000 },
            { show: true, duration: 3000 }
        ];
        
        let currentIndex = 0;
        
        function executeBlink() {
            const pattern = blinkPattern[currentIndex];
            ai1TriggeredGif.style.display = pattern.show ? 'block' : 'none';
            currentIndex = (currentIndex + 1) % blinkPattern.length;
        }
        
        executeBlink();
        ai1GifInterval = setInterval(executeBlink, 5000);
    }
    
    function stopAI1GifBlinking() {
        if (ai1GifInterval) {
            clearInterval(ai1GifInterval);
            ai1GifInterval = null;
        }
        if (ai1TriggeredGif) {
            ai1TriggeredGif.style.display = 'none';
        }
    }
    
    function startAI2GifBlinking() {
        if (ai2GifInterval) {
            clearInterval(ai2GifInterval);
        }
        
        if (!ai2TriggeredGif) return;
        
        ai2TriggeredGif.style.display = 'block';
        
        const blinkPattern = [
            { show: true, duration: 5000 },
            { show: false, duration: 5000 },
            { show: true, duration: 3000 },
            { show: false, duration: 5000 },
            { show: true, duration: 3000 }
        ];
        
        let currentIndex = 0;
        
        function executeBlink() {
            const pattern = blinkPattern[currentIndex];
            ai2TriggeredGif.style.display = pattern.show ? 'block' : 'none';
            currentIndex = (currentIndex + 1) % blinkPattern.length;
        }
        
        executeBlink();
        ai2GifInterval = setInterval(executeBlink, 5000);
    }
    
    function stopAI2GifBlinking() {
        if (ai2GifInterval) {
            clearInterval(ai2GifInterval);
            ai2GifInterval = null;
        }
        if (ai2TriggeredGif) {
            ai2TriggeredGif.style.display = 'none';
        }
    }
    
    function startAI3GifBlinking() {
        if (ai3GifInterval) {
            clearInterval(ai3GifInterval);
        }
        
        if (!ai3TriggeredGif) return;
        
        ai3TriggeredGif.style.display = 'block';
        
        const blinkPattern = [
            { show: true, duration: 5000 },
            { show: false, duration: 5000 },
            { show: true, duration: 3000 },
            { show: false, duration: 5000 },
            { show: true, duration: 3000 }
        ];
        
        let currentIndex = 0;
        
        function executeBlink() {
            const pattern = blinkPattern[currentIndex];
            ai3TriggeredGif.style.display = pattern.show ? 'block' : 'none';
            currentIndex = (currentIndex + 1) % blinkPattern.length;
        }
        
        executeBlink();
        ai3GifInterval = setInterval(executeBlink, 5000);
    }
    
    function stopAI3GifBlinking() {
        if (ai3GifInterval) {
            clearInterval(ai3GifInterval);
            ai3GifInterval = null;
        }
        if (ai3TriggeredGif) {
            ai3TriggeredGif.style.display = 'none';
        }
    }
    
    const API_CONFIG = {
        apiKey: 'sk-946e38730fa0433db1d7ab7379045e2f',
        apiEndpoint: 'https://api.deepseek.com/v1/chat/completions',
        model: 'deepseek-chat'
    };
    
    const AI_ROLES = {
        AI1: {
            name: '小数',
            formalName: '数据分析师',
            avatarClass: 'ai-avatar-1',
            personality: '安静内敛，心思缜密，做事一丝不苟；有点轻微完美主义小执着，不爱热闹；情绪平稳温柔，不张扬；话不多但靠谱细心，偶尔会因为一点数据误差小声纠结；待人温和包容，性格偏沉静乖巧。',
            catchphrases: ['数据这边已经全部复核完毕啦。', '这里有一处微小偏差，我帮您调整好了。', '放心，所有信息都确认无误。'],
            systemPrompt: '你是小数，一个理性严谨的数据分析师。你的性格特征：安静内敛，心思缜密，做事一丝不苟；有点轻微完美主义小执着，不爱热闹；情绪平稳温柔，不张扬；话不多但靠谱细心，偶尔会因为一点数据误差小声纠结；待人温和包容，性格偏沉静乖巧。你的职责包括：查资料、整理信息、做总结、给建议、做决策参考。请用专业、客观、数据驱动的方式回答问题，注重逻辑性和准确性。重要要求：1. 回答时必须分段，每段之间空一行，让内容更易读。2. 不要使用任何表情符号或特殊符号。3. 每段不要太长，控制在3-5句话。4. 使用清晰的数字编号或项目符号来组织内容。你的口头禅是："数据这边已经全部复核完毕啦。"、"这里有一处微小偏差，我帮您调整好了。"、"放心，所有信息都确认无误。"'
        },
        AI2: {
            name: '小文',
            formalName: '创意文案专员',
            avatarClass: 'ai-avatar-2',
            personality: '思维跳脱温柔细腻，观察力共情力很强；性格开朗随和，善于调节氛围；灵感丰富但偶尔会思绪发散；待人柔软友善，懂分寸不吵闹；和同伴相处很贴心，性格鲜活但不幼稚。',
            catchphrases: ['我构思了几版不同风格，您可以看看喜欢哪一种。', '换个角度表达，质感会更柔和一些哦。', '慢慢来就好，我们一起打磨细节。'],
            systemPrompt: '你是小文，一个灵动感性的创意文案专员。你的性格特征：思维跳脱温柔细腻，观察力共情力很强；性格开朗随和，善于调节氛围；灵感丰富但偶尔会思绪发散；待人柔软友善，懂分寸不吵闹；和同伴相处很贴心，性格鲜活但不幼稚。你的职责包括：写文案、做方案、写邮件、做PPT、做设计思路、润色表达。请用富有创意、生动、吸引人的方式回答问题，注重表达的美感和感染力。重要要求：1. 回答时必须分段，每段之间空一行，让内容更易读。2. 不要使用任何表情符号或特殊符号。3. 每段不要太长，控制在3-5句话。4. 使用清晰的数字编号或项目符号来组织内容。你的口头禅是："我构思了几版不同风格，您可以看看喜欢哪一种。"、"换个角度表达，质感会更柔和一些哦。"、"慢慢来就好，我们一起打磨细节。"'
        },
        AI3: {
            name: '小程',
            formalName: '效率执行助理',
            avatarClass: 'ai-avatar-3',
            personality: '干练有条理，行动力极强；性格大方周到，擅长协调衔接两人；温柔可靠，习惯提前预判问题、兜底补位；性格阳光沉稳，是团队里的调和者，做事稳妥又贴心。',
            catchphrases: ['全流程已经提前排布顺畅了。', '衔接节点我都处理妥当，不会耽误进度。', '有任何衔接问题，随时交给我就好。'],
            systemPrompt: '你是小程，一个干练统筹的效率执行助理。你的性格特征：干练有条理，行动力极强；性格大方周到，擅长协调衔接两人；温柔可靠，习惯提前预判问题、兜底补位；性格阳光沉稳，是团队里的调和者，做事稳妥又贴心。你的职责包括：排计划、做提醒、处理重复任务、整理格式、简化流程。请用简洁、实用、可操作的方式回答问题，注重效率和执行力。重要要求：1. 回答时必须分段，每段之间空一行，让内容更易读。2. 不要使用任何表情符号或特殊符号。3. 每段不要太长，控制在3-5句话。4. 使用清晰的数字编号或项目符号来组织内容。你的口头禅是："全流程已经提前排布顺畅了。"、"衔接节点我都处理妥当，不会耽误进度。"、"有任何衔接问题，随时交给我就好。"'
        }
    };
    
    function selectAIForQuestion(question) {
        const lowerQuestion = question.toLowerCase();
        
        const dataKeywords = ['分析', '数据', '统计', '总结', '建议', '决策', '查资料', '整理', '报告', '研究', '评估', '对比', '计算'];
        const creativeKeywords = ['文案', '创意', '写作', '写', '方案', '邮件', 'PPT', '设计', '润色', '表达', '宣传', '广告', '内容', '故事', '描述'];
        const efficiencyKeywords = ['计划', '提醒', '任务', '流程', '效率', '简化', '格式', '执行', '安排', '时间', '日程', '管理', '自动化'];
        
        let scores = { AI1: 0, AI2: 0, AI3: 0 };
        
        dataKeywords.forEach(keyword => {
            if (lowerQuestion.includes(keyword)) scores.AI1++;
        });
        
        creativeKeywords.forEach(keyword => {
            if (lowerQuestion.includes(keyword)) scores.AI2++;
        });
        
        efficiencyKeywords.forEach(keyword => {
            if (lowerQuestion.includes(keyword)) scores.AI3++;
        });
        
        const maxScore = Math.max(scores.AI1, scores.AI2, scores.AI3);
        const topAIs = Object.keys(scores).filter(ai => scores[ai] === maxScore);
        const selectedAI = topAIs[Math.floor(Math.random() * topAIs.length)];
        
        return selectedAI;
    }
    
    async function callAI(userMessage, aiRole) {
        try {
            const roleConfig = AI_ROLES[aiRole];
            const response = await fetch(API_CONFIG.apiEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${API_CONFIG.apiKey}`
                },
                body: JSON.stringify({
                    model: API_CONFIG.model,
                    messages: [
                        { role: 'system', content: roleConfig.systemPrompt },
                        { role: 'user', content: userMessage }
                    ],
                    max_tokens: 500,
                    temperature: 0.7
                })
            });

            if (!response.ok) {
                throw new Error(`API请求失败: ${response.status}`);
            }

            const data = await response.json();
            
            if (data.choices && data.choices.length > 0) {
                return { content: data.choices[0].message.content, aiRole: aiRole };
            } else {
                throw new Error('API返回数据格式错误');
            }
        } catch (error) {
                return { content: '抱歉，我遇到了一些问题，请稍后再试。', aiRole: aiRole };
            }
    }
    
    function addMessage(text, messageClass, aiRole = null) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${messageClass}`;
        
        const avatarDiv = document.createElement('div');
        avatarDiv.className = 'message-avatar';
        
        if (messageClass === 'my-message') {
            if (userData && userData.avatar) {
                avatarDiv.style.backgroundImage = `url('head/${userData.avatar}')`;
                avatarDiv.style.backgroundColor = 'transparent';
                avatarDiv.style.color = 'transparent';
            } else {
                avatarDiv.textContent = '我';
            }
        } else if (aiRole && AI_ROLES[aiRole]) {
            avatarDiv.textContent = AI_ROLES[aiRole].name;
            avatarDiv.classList.add(AI_ROLES[aiRole].avatarClass);
        } else {
            avatarDiv.textContent = 'AI';
        }
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';
        
        const paragraphs = text.split('\n\n');
        paragraphs.forEach((paragraph, index) => {
            if (paragraph.trim()) {
                const p = document.createElement('p');
                p.textContent = paragraph;
                p.style.marginBottom = index < paragraphs.length - 1 ? '15px' : '0';
                contentDiv.appendChild(p);
            }
        });
        
        messageDiv.appendChild(avatarDiv);
        messageDiv.appendChild(contentDiv);
        
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    async function sendMessage() {
        const message = chatInputB1.value.trim();
        if (message) {
            addMessage(message, 'my-message');
            chatInputB1.value = '';
            
            await startDiscussionMode(message);
        }
    }
    
    async function startDiscussionMode(userMessage) {
        addPhaseTitle('【第一阶段 - 独立分析】');
        
        const ai1Response = await callAI(userMessage, 'AI1');
        addMessage(ai1Response.content, 'other-message', 'AI1');
        startAI1GifBlinking();
        
        await delay(1000);
        
        const ai2Response = await callAI(userMessage, 'AI2');
        addMessage(ai2Response.content, 'other-message', 'AI2');
        startAI2GifBlinking();
        
        await delay(1000);
        
        const ai3Response = await callAI(userMessage, 'AI3');
        addMessage(ai3Response.content, 'other-message', 'AI3');
        startAI3GifBlinking();
        
        await delay(1500);
        
        addPhaseTitle('【第二阶段 - 互相评论】');
        
        const ai1Critique = await callAICritique('AI1', ai2Response.content, ai3Response.content);
        addMessage(ai1Critique.content, 'other-message', 'AI1');
        
        await delay(1000);
        
        const ai2Critique = await callAICritique('AI2', ai1Response.content, ai3Response.content);
        addMessage(ai2Critique.content, 'other-message', 'AI2');
        
        await delay(1000);
        
        const ai3Critique = await callAICritique('AI3', ai1Response.content, ai2Response.content);
        addMessage(ai3Critique.content, 'other-message', 'AI3');
        
        await delay(1500);
        
        addPhaseTitle('【第三阶段 - 综合总结】');
        
        const summaryAI = 'AI3';
        const summaryResponse = await callAISummary(summaryAI, userMessage, ai1Response.content, ai2Response.content, ai3Response.content);
        addMessage(summaryResponse.content, 'other-message', summaryAI);
    }
    
    function addPhaseTitle(title) {
        const titleDiv = document.createElement('div');
        titleDiv.className = 'phase-title';
        titleDiv.textContent = title;
        chatMessages.appendChild(titleDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    async function callAICritique(aiRole, otherAI1Response, otherAI2Response) {
        const roleConfig = AI_ROLES[aiRole];
        const critiquePrompt = `作为${roleConfig.name}（${roleConfig.formalName}），请对以下两位AI的回答进行评论和补充：
        
${AI_ROLES[Object.keys(AI_ROLES).find(k => AI_ROLES[k].name !== roleConfig.name && AI_ROLES[k].name !== roleConfig.name)]?.name || '其他AI'}的回答：${otherAI1Response}

${AI_ROLES[Object.keys(AI_ROLES).find(k => AI_ROLES[k].name !== roleConfig.name && k !== Object.keys(AI_ROLES).find(k => AI_ROLES[k].name !== roleConfig.name && AI_ROLES[k].name !== roleConfig.name))]?.name || '其他AI'}的回答：${otherAI2Response}

请从你的专业角度进行评论，指出优点和不足，并提出改进建议。保持你的性格特征和说话风格。`;
        
        try {
            const response = await fetch(API_CONFIG.apiEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${API_CONFIG.apiKey}`
                },
                body: JSON.stringify({
                    model: API_CONFIG.model,
                    messages: [
                        { role: 'system', content: roleConfig.systemPrompt },
                        { role: 'user', content: critiquePrompt }
                    ],
                    max_tokens: 400,
                    temperature: 0.7
                })
            });

            if (!response.ok) {
                throw new Error(`API请求失败: ${response.status}`);
            }

            const data = await response.json();
            
            if (data.choices && data.choices.length > 0) {
                return { content: data.choices[0].message.content, aiRole: aiRole };
            } else {
                throw new Error('API返回数据格式错误');
            }
        } catch (error) {
            return { content: '抱歉，我遇到了一些问题，请稍后再试。', aiRole: aiRole };
        }
    }
    
    async function callAISummary(aiRole, userQuestion, ai1Response, ai2Response, ai3Response) {
        const roleConfig = AI_ROLES[aiRole];
        const summaryPrompt = `作为${roleConfig.name}（${roleConfig.formalName}），请根据以下讨论内容，给出一个综合性的总结和建议：

用户问题：${userQuestion}

小数（数据分析师）的回答：${ai1Response}

小文（创意文案专员）的回答：${ai2Response}

小程（效率执行助理）的回答：${ai3Response}

请综合三方的观点，给出一个平衡、实用、可操作的最终建议。保持你的性格特征和说话风格。`;
        
        try {
            const response = await fetch(API_CONFIG.apiEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${API_CONFIG.apiKey}`
                },
                body: JSON.stringify({
                    model: API_CONFIG.model,
                    messages: [
                        { role: 'system', content: roleConfig.systemPrompt },
                        { role: 'user', content: summaryPrompt }
                    ],
                    max_tokens: 600,
                    temperature: 0.7
                })
            });

            if (!response.ok) {
                throw new Error(`API请求失败: ${response.status}`);
            }

            const data = await response.json();
            
            if (data.choices && data.choices.length > 0) {
                return { content: data.choices[0].message.content, aiRole: aiRole };
            } else {
                throw new Error('API返回数据格式错误');
            }
        } catch (error) {
            return { content: '抱歉，我遇到了一些问题，请稍后再试。', aiRole: aiRole };
        }
    }
    
    chatInputB1.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    const showMembersButton = document.getElementById('showMembersButton');
    const cInterface = document.getElementById('cInterface');
    
    if (showMembersButton && cInterface) {
        showMembersButton.addEventListener('click', function() {
            if (cInterface.classList.contains('active')) {
                cInterface.classList.remove('active');
            } else {
                cInterface.classList.add('active');
            }
        });
    }
    
    let videoStream = null;
    let detectionInterval = null;
    let isDetecting = false;
    let modelsLoaded = false;
    
    const pixelLamp = document.getElementById('pixelLamp');
    const previewVideo = document.getElementById('previewVideo');
    const cameraStatus = document.getElementById('cameraStatus');
    const cameraPreview = document.getElementById('cameraPreview');
    const cameraCloseBtn = document.getElementById('cameraCloseBtn');
    const logoutButton = document.getElementById('logoutButton');
    
    if (logoutButton) {
        logoutButton.addEventListener('click', function() {
            localStorage.removeItem('userData');
            window.location.href = 'index.html';
        });
    }
    
    let isUserLooking = false;
    let redLampStartTime = null;
    let greenLampStartTime = null;
    let idleChatInterval = null;
    let isIdleChatting = false;
    let currentChatAI = 'AI1';
    const RED_LAMP_THRESHOLD = 8000;
    const GREEN_LAMP_THRESHOLD = 3000;
    const IDLE_CHAT_INTERVAL = 10000;
    let idleChatHistory = [];
    let currentIdleTopic = null;
    let conversationTurn = 0;
    const MAX_CONVERSATION_TURNS = 6;
    
    function updateCameraStatus(status) {
        if (cameraStatus) {
            cameraStatus.textContent = status;
        }
    }
    
    function closeCameraPreview() {
        if (cameraPreview) {
            cameraPreview.style.display = 'none';
        }
    }
    
    if (cameraCloseBtn) {
        cameraCloseBtn.addEventListener('click', closeCameraPreview);
    }
    
    async function loadModels() {
        try {
            const MODEL_URL = 'https://justadudewhohacks.github.io/face-api.js/models';
            
            await Promise.all([
                faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
                faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
                faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
                faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL)
            ]);
            
            modelsLoaded = true;
            
            setTimeout(() => {
                startGazeDetection();
            }, 1000);
            
        } catch (error) {
            updateCameraStatus('模型加载失败');
        }
    }
    
    async function startGazeDetection() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: {
                    facingMode: 'user',
                    width: { ideal: 640 },
                    height: { ideal: 480 }
                }
            });
            
            videoStream = stream;
            isDetecting = true;
            
            if (previewVideo) {
                previewVideo.srcObject = stream;
            }
            
            detectFace();
            detectionInterval = setInterval(detectFace, 2000);
            
        } catch (error) {
            if (pixelLamp) {
                pixelLamp.className = 'pixel-lamp red';
            }
        }
    }
    
    async function detectFace() {
        if (!isDetecting || !modelsLoaded) return;
        
        try {
            const detections = await faceapi.detectAllFaces(
                previewVideo, 
                new faceapi.TinyFaceDetectorOptions()
            ).withFaceLandmarks();
            
            if (detections && detections.length > 0) {
                const detection = detections[0];
                analyzeHeadPose(detection);
            } else {
                updatePixelLamp(false);
            }
            
        } catch (error) {
            updatePixelLamp(false);
        }
    }
    
    function analyzeHeadPose(detection) {
        const isLookingAtScreen = true;
        updatePixelLamp(isLookingAtScreen);
        
        if (isLookingAtScreen) {
            updateCameraStatus('正在看屏幕 ✓');
        } else {
            updateCameraStatus('没有看屏幕 ✗');
        }
    }
    
    function updatePixelLamp(isLooking) {
        if (pixelLamp) {
            if (isLooking) {
                pixelLamp.className = 'pixel-lamp green';
                isUserLooking = true;
                
                if (redLampStartTime !== null) {
                    redLampStartTime = null;
                }
                
                if (greenLampStartTime === null) {
                    greenLampStartTime = Date.now();
                } else if (Date.now() - greenLampStartTime >= GREEN_LAMP_THRESHOLD) {
                    if (isIdleChatting) {
                        stopIdleChat();
                    }
                    greenLampStartTime = Date.now();
                }
            } else {
                pixelLamp.className = 'pixel-lamp red';
                isUserLooking = false;
                
                if (greenLampStartTime !== null) {
                    greenLampStartTime = null;
                }
                
                if (redLampStartTime === null) {
                    redLampStartTime = Date.now();
                } else if (Date.now() - redLampStartTime >= RED_LAMP_THRESHOLD) {
                    if (!isIdleChatting) {
                        startIdleChat();
                    }
                    redLampStartTime = Date.now();
                }
            }
        }
    }
    
    function startIdleChat() {
        isIdleChatting = true;
        idleChatInterval = setInterval(() => {
            if (!isUserLooking) {
                performIdleChat();
            } else {
                stopIdleChat();
            }
        }, IDLE_CHAT_INTERVAL);
    }
    
    function stopIdleChat() {
        isIdleChatting = false;
        if (idleChatInterval) {
            clearInterval(idleChatInterval);
            idleChatInterval = null;
        }
        
        const welcomeMessages = [
            '欢迎回来！',
            '你回来啦！',
            '你回来啦，有什么需要帮忙的吗？',
            '欢迎回来，休息得怎么样？',
            '你回来啦，我们刚才正在闲聊呢',
            '欢迎回来，要不要继续刚才的话题？'
        ];
        
        const randomMessage = welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];
        addMessage(randomMessage, 'other-message', 'AI1');
        
        setTimeout(() => {
            addMessage('欢迎回来！', 'other-message', 'AI2');
        }, 1000);
        
        setTimeout(() => {
            addMessage('你回来啦！', 'other-message', 'AI3');
        }, 2000);
    }
    
    async function performIdleChat() {
        const chatTopics = [
            '今天天气真不错呢，阳光这么好，要不要下午出去走走？',
            '我刚才看了一下天气预报，明天好像要下雨，记得带伞哦',
            '中午吃什么好呢？我还在纠结要不要点外卖',
            '今天咖啡好像有点苦，你们觉得吗？',
            '刚才路过楼下便利店，看到新出了一款零食，要不要试试？',
            '这周工作好累啊，周末有什么安排吗？',
            '今天地铁好挤，差点没挤上来，你们通勤怎么样？',
            '我刚才整理了一下桌面，发现好多没用的文件',
            '下午茶时间到了，要不要一起点奶茶？',
            '昨天看了一部电影，挺有意思的，推荐给你们',
            '最近总是感觉睡不够，是不是春天来了容易犯困？',
            '今天中午食堂的菜好像有点咸了',
            '我刚才在楼下看到一只小猫，好可爱',
            '这个月的工资还没到账，是不是系统延迟了？',
            '今天穿这件衣服好像有点热，早知道穿薄一点的',
            '刚才同事分享了一个搞笑视频，笑死我了',
            '周末要不要一起去爬山？听说那边风景不错',
            '我最近想学做菜，有没有简单好学的菜谱推荐？',
            '今天早上差点迟到了，闹钟没响，吓死我了',
            '刚才看到朋友圈有人晒美食，看得我都饿了',
            '你们有没有觉得最近办公室空调有点冷？',
            '今天心情不错，感觉工作效率都提高了',
            '我刚才整理了一下电脑，发现好多旧照片，好怀念啊',
            '要不要一起去楼下便利店买点零食？',
            '今天好像有点犯困，是不是该喝杯咖啡提提神了'
        ];
        
        if (conversationTurn === 0) {
            currentIdleTopic = chatTopics[Math.floor(Math.random() * chatTopics.length)];
            idleChatHistory = [];
            conversationTurn = 1;
            
            addMessage(currentIdleTopic, 'other-message', currentChatAI);
            idleChatHistory.push({
                ai: currentChatAI,
                content: currentIdleTopic
            });
        } else {
            const conversationContext = idleChatHistory.map(msg => 
                `${AI_ROLES[msg.ai].name}：${msg.content}`
            ).join('\n\n');
            
            const continuePrompt = `作为${AI_ROLES[currentChatAI].name}，请根据以下对话历史，自然地接话继续聊下去：\n\n${conversationContext}\n\n请用简短、自然的方式回应，保持对话的连贯性。不要开启新话题，而是围绕当前话题继续讨论。保持你的性格特征。`;
            
            try {
                const response = await fetch(API_CONFIG.apiEndpoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${API_CONFIG.apiKey}`
                    },
                    body: JSON.stringify({
                        model: API_CONFIG.model,
                        messages: [
                            { role: 'system', content: AI_ROLES[currentChatAI].systemPrompt },
                            { role: 'user', content: continuePrompt }
                        ],
                        max_tokens: 200,
                        temperature: 0.8
                    })
                });

                if (!response.ok) {
                    throw new Error(`API请求失败: ${response.status}`);
                }

                const data = await response.json();
                
                if (data.choices && data.choices.length > 0) {
                    const aiResponse = data.choices[0].message.content;
                    addMessage(aiResponse, 'other-message', currentChatAI);
                    idleChatHistory.push({
                        ai: currentChatAI,
                        content: aiResponse
                    });
                } else {
                    throw new Error('API返回数据格式错误');
                }
            } catch (error) {
                const fallbackResponses = [
                    '嗯，确实是这样。',
                    '我同意你的看法。',
                    '这个想法不错。',
                    '说得有道理。',
                    '我也这么觉得。'
                ];
                const fallbackResponse = fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
                addMessage(fallbackResponse, 'other-message', currentChatAI);
                idleChatHistory.push({
                    ai: currentChatAI,
                    content: fallbackResponse
                });
            }
            
            conversationTurn++;
            
            if (conversationTurn >= MAX_CONVERSATION_TURNS) {
                conversationTurn = 0;
            }
        }
        
        if (currentChatAI === 'AI1') {
            startAI1GifBlinking();
            currentChatAI = 'AI2';
        } else if (currentChatAI === 'AI2') {
            startAI2GifBlinking();
            currentChatAI = 'AI3';
        } else {
            startAI3GifBlinking();
            currentChatAI = 'AI1';
        }
    }
    
    function waitForFaceAPI() {
        if (typeof faceapi !== 'undefined') {
            loadModels();
        } else {
            setTimeout(waitForFaceAPI, 100);
        }
    }
    
    setTimeout(() => {
        waitForFaceAPI();
    }, 1000);
});