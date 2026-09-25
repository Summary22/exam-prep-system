const fs = require('fs');

const rawText = fs.readFileSync('./com_intro.txt', 'utf-8');

const questions = [];

const blocks = rawText.split(/-{10,}/);

for (const block of blocks) {
    if (!block.trim()) continue;

    const qMatch = block.match(/(\d+)\.\s*(.*?)(?=\n\s*[A-Z]\.)/s);
    if (!qMatch) continue;

    const id = qMatch[1];
    let text = qMatch[2].trim().replace(/（\s*）|（　）/g, '（  ）');

    const options = [];
    const optionLines = block.match(/^\s*[A-Z]\.\s*.*$/gm);
    if (optionLines) {
        for (const line of optionLines) {
            const match = line.match(/^\s*[A-Z]\.\s*(.*)$/);
            if (match) {
                options.push(match[1].trim());
            }
        }
    }

    const ansMatch = block.match(/【\s*正确答案\s*】\s*([A-Z]+)/);
    if (!ansMatch) continue;
    const answerStr = ansMatch[1].trim();

    const expMatch = block.match(/【\s*答案解析\s*】\s*(.*)/s);
    const explanation = expMatch ? expMatch[1].trim() : '';

    let type = 'single_choice';
    let answer;

    if (answerStr.length > 1) {
        type = 'multiple_choice';
        answer = answerStr.split('').map(char => {
            const index = char.charCodeAt(0) - 65;
            return options[index];
        });
    } else {
        const index = answerStr.charCodeAt(0) - 65;
        answer = options[index];
    }

    questions.push({
        id: `intro_q_${id}`,
        subjectId: 'intro',
        section: 'practice',
        type,
        text,
        options,
        answer,
        explanation
    });
}

const output = `import { Question } from './mockData';\n\nexport const introQuestions: Question[] = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync('./src/data/introQuestions.ts', output);
console.log('Generated ' + questions.length + ' questions.');
