import { BookOpen, Network, Code, Cpu } from 'lucide-react';
import { osQuestions } from './osQuestions';
import { networkQuestions } from './networkQuestions';
import { programmingQuestions } from './programmingQuestions';
import { introQuestions } from './introQuestions';

export type QuestionType = 'single_choice' | 'multiple_choice' | 'short_answer' | 'coding';

export interface Question {
  id: string;
  subjectId: string;
  section: 'practice' | 'exam';
  examName?: string;
  type: QuestionType;
  text: string;
  options?: string[];
  answer: string | string[];
  explanation?: string;
  isImportant?: boolean;
  isIncorrect?: boolean;
  userAnswer?: string | string[] | null;
  showAnswer?: boolean;
}

export interface Subject {
  id: string;
  name: string;
  icon: any;
}

export const subjects: Subject[] = [
  { id: 'network', name: '计算机网络维护技术', icon: Network },
  { id: 'intro', name: '计算机导论', icon: BookOpen },
  { id: 'programming', name: '高级语言程序设计', icon: Code },
  { id: 'os', name: '操作系统', icon: Cpu },
];

export const initialQuestions: Question[] = [
  {
    id: 'q5',
    subjectId: 'os',
    section: 'exam',
    type: 'single_choice',
    text: '操作系统的基本特征不包括？',
    options: ['并发', '共享', '虚拟', '面向对象'],
    answer: '面向对象',
    explanation: '操作系统的基本特征包括并发、共享、虚拟和异步。',
  },
  ...osQuestions,
  ...networkQuestions,
  ...programmingQuestions,
  ...introQuestions
];
