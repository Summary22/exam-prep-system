const fs = require('fs');

const logPath = '/.gemini/antigravity/brain/b9a42887-44cb-40ce-af9b-5bbb293cbe74/.system_generated/logs/overview.txt';

try {
    const logContent = fs.readFileSync(logPath, 'utf-8');

    const startIndex = logContent.indexOf('1. 保证计算机系统按用户要求协调工作的是（ ）。');
    if (startIndex === -1) {
        console.error("Could not find the start of the questions in the log.");
        process.exit(1);
    }

    const rawText = logContent.slice(startIndex);
    const regex = /(\d+)\.\s*(.*?)\s*A\.\s*(.*?)\s*B\.\s*(.*?)\s*C\.\s*(.*?)\s*D\.\s*(.*?)\s*【 正确答案 】\s*([A-D])\s*【 答案解析 】/g;

    const questions = [];
    let match;
    let lastIndex = 0;
    let lastQuestion = null;

    while ((match = regex.exec(rawText)) !== null) {
        if (lastQuestion) {
            let explanation = rawText.substring(lastIndex, match.index).trim();
            explanation = explanation.replace(/-+$/, '').trim();
            lastQuestion.explanation = explanation;
            questions.push(lastQuestion);
        }

        const [_, id, text, a, b, c, d, answerLetter] = match;
        const options = [a.trim(), b.trim(), c.trim(), d.trim()];
        const answerIndex = answerLetter.charCodeAt(0) - 65;
        const answer = options[answerIndex];

        lastQuestion = {
            id: `os_q${id}`,
            subjectId: 'os',
            section: 'practice',
            type: 'single_choice',
            text: text.trim().replace(/（\s*）/, '（  ）'),
            options,
            answer,
            explanation: ''
        };
        lastIndex = regex.lastIndex;
    }

    if (lastQuestion) {
        let explanation = rawText.substring(lastIndex).trim();
        const endMarker = explanation.indexOf('</USER_REQUEST>');
        if (endMarker !== -1) {
            explanation = explanation.substring(0, endMarker).trim();
        }
        const endMarker2 = explanation.indexOf('Error: There was a problem.');
        if (endMarker2 !== -1) {
            explanation = explanation.substring(0, endMarker2).trim();
        }
        explanation = explanation.replace(/-+$/, '').trim();
        lastQuestion.explanation = explanation;
        questions.push(lastQuestion);
    }

    const output = `import { Question } from './mockData';\n\nexport const osQuestions: Question[] = ${JSON.stringify(questions, null, 2)};\n`;
    fs.writeFileSync('./src/data/osQuestions.ts', output);
    console.log('Generated ' + questions.length + ' questions.');

} catch (err) {
    console.error("Error:", err);
    process.exit(1);
}
