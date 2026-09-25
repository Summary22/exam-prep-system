const fs = require('fs');

const rawText = fs.readFileSync('./com_maintain_questions.txt', 'utf-8');

const questions = [];

// Split into single choice and true/false sections
const sections = rawText.split('二、判断题');
const singleChoiceText = sections[0];
const trueFalseText = sections[1] || '';

// Parse single choice
const scRegex = /(\d+)\.\s*(.*?)\s*A\.\s*(.*?)\s*B\.\s*(.*?)\s*C\.\s*(.*?)\s*D\.\s*(.*?)\s*【 正确答案 】\s*([A-D])\s*【 答案解析 】/g;
let match;
let lastIndex = 0;
let lastQuestion = null;

while ((match = scRegex.exec(singleChoiceText)) !== null) {
    if (lastQuestion) {
        let explanation = singleChoiceText.substring(lastIndex, match.index).trim();
        explanation = explanation.replace(/-+$/, '').trim();
        lastQuestion.explanation = explanation;
        questions.push(lastQuestion);
    }

    const [_, id, text, a, b, c, d, answerLetter] = match;
    const options = [a.trim(), b.trim(), c.trim(), d.trim()];
    const answerIndex = answerLetter.charCodeAt(0) - 65;
    const answer = options[answerIndex];

    lastQuestion = {
        id: `net_sc_${id}`,
        subjectId: 'network',
        section: 'practice',
        type: 'single_choice',
        text: text.trim().replace(/（\s*）/, '（  ）'),
        options,
        answer,
        explanation: ''
    };
    lastIndex = scRegex.lastIndex;
}

if (lastQuestion) {
    let explanation = singleChoiceText.substring(lastIndex).trim();
    explanation = explanation.replace(/-+$/, '').trim();
    lastQuestion.explanation = explanation;
    questions.push(lastQuestion);
}

// Parse true/false
const tfRegex = /(\d+)\.\s*(.*?)\s*A\.\s*(.*?)\s*B\.\s*(.*?)\s*【 正确答案 】\s*(对|错)\s*【 答案解析 】/g;
lastIndex = 0;
lastQuestion = null;

while ((match = tfRegex.exec(trueFalseText)) !== null) {
    if (lastQuestion) {
        let explanation = trueFalseText.substring(lastIndex, match.index).trim();
        explanation = explanation.replace(/-+$/, '').trim();
        lastQuestion.explanation = explanation;
        questions.push(lastQuestion);
    }

    const [_, id, text, a, b, answerText] = match;
    const options = [a.trim(), b.trim()]; // "对", "错"
    const answer = answerText.trim(); // "对" or "错"

    lastQuestion = {
        id: `net_tf_${id}`,
        subjectId: 'network',
        section: 'practice',
        type: 'single_choice', // True/false can be modeled as single choice
        text: text.trim().replace(/（\s*）/, '（  ）'),
        options,
        answer,
        explanation: ''
    };
    lastIndex = tfRegex.lastIndex;
}

if (lastQuestion) {
    let explanation = trueFalseText.substring(lastIndex).trim();
    const endMarker = explanation.indexOf('</USER_REQUEST>');
    if (endMarker !== -1) {
        explanation = explanation.substring(0, endMarker).trim();
    }
    explanation = explanation.replace(/-+$/, '').trim();
    lastQuestion.explanation = explanation;
    questions.push(lastQuestion);
}

const output = `import { Question } from './mockData';\n\nexport const networkQuestions: Question[] = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync('./src/data/networkQuestions.ts', output);
console.log('Generated ' + questions.length + ' questions.');
