const fs = require('fs');

const rawText = fs.readFileSync('./c_question.txt', 'utf-8');

const questions = [];

const scRegex = /(\d+)\.\s*(.*?)\s*A\.(.*?)\s*B\.(.*?)\s*C\.(.*?)\s*D\.(.*?)\s*【正确答案】\s*([A-D])\s*【答案解析】/g;
let match;
let lastIndex = 0;
let lastQuestion = null;

while ((match = scRegex.exec(rawText)) !== null) {
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
        id: `prog_sc_${id}`,
        subjectId: 'programming',
        section: 'practice',
        type: 'single_choice',
        text: text.trim().replace(/（\s*）|（　）/, '（  ）'),
        options,
        answer,
        explanation: ''
    };
    lastIndex = scRegex.lastIndex;
}

if (lastQuestion) {
    let explanation = rawText.substring(lastIndex).trim();
    const endMarker = explanation.indexOf('<USER_REQUEST>');
    if (endMarker !== -1) {
        explanation = explanation.substring(0, endMarker).trim();
    }
    explanation = explanation.replace(/-+$/, '').trim();
    lastQuestion.explanation = explanation;
    questions.push(lastQuestion);
}

const output = `import { Question } from './mockData';\n\nexport const programmingQuestions: Question[] = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync('./src/data/programmingQuestions.ts', output);
console.log('Generated ' + questions.length + ' questions.');
