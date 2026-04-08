// API调用模块
import { API_CONFIG } from './config.js';

// 调用AI API
export async function callAI(userMessage) {
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
                    {
                        role: 'system',
                        content: '你是一个友好的AI助手，用简洁明了的语言回答问题。'
                    },
                    {
                        role: 'user',
                        content: userMessage
                    }
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
            return data.choices[0].message.content;
        } else {
            throw new Error('API返回数据格式错误');
        }
    } catch (error) {
        console.error('API调用错误:', error);
        return '抱歉，我遇到了一些问题，请稍后再试。';
    }
}// API调用模块
import { API_CONFIG } from './config.js';

// 调用AI API
export async function callAI(userMessage) {
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
                    {
                        role: 'system',
                        content: '你是一个友好的AI助手，用简洁明了的语言回答问题。'
                    },
                    {
                        role: 'user',
                        content: userMessage
                    }
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
            return data.choices[0].message.content;
        } else {
            throw new Error('API返回数据格式错误');
        }
    } catch (error) {
        console.error('API调用错误:', error);
        return '抱歉，我遇到了一些问题，请稍后再试。';
    }
}// API调用模块
import { API_CONFIG } from './config.js';

// 调用AI API
export async function callAI(userMessage) {
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
                    {
                        role: 'system',
                        content: '你是一个友好的AI助手，用简洁明了的语言回答问题。'
                    },
                    {
                        role: 'user',
                        content: userMessage
                    }
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
            return data.choices[0].message.content;
        } else {
            throw new Error('API返回数据格式错误');
        }
    } catch (error) {
        console.error('API调用错误:', error);
        return '抱歉，我遇到了一些问题，请稍后再试。';
    }
}// API调用模块
import { API_CONFIG } from './config.js';

// 调用AI API
export async function callAI(userMessage) {
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
                    {
                        role: 'system',
                        content: '你是一个友好的AI助手，用简洁明了的语言回答问题。'
                    },
                    {
                        role: 'user',
                        content: userMessage
                    }
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
            return data.choices[0].message.content;
        } else {
            throw new Error('API返回数据格式错误');
        }
    } catch (error) {
        console.error('API调用错误:', error);
        return '抱歉，我遇到了一些问题，请稍后再试。';
    }
}