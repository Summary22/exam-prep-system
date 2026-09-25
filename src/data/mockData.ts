import {
  BookOpen, Network, Code, Cpu,
  Globe, Microchip, CircuitBoard, Blocks, Binary, Sigma, Calculator,
  Languages, History, Scale, Landmark,
} from 'lucide-react';
import { osQuestions } from './osQuestions';
import { networkQuestions } from './networkQuestions';
import { programmingQuestions } from './programmingQuestions';
import { introQuestions } from './introQuestions';
import { networkprincipleQuestions } from './networkprincipleQuestions';
import { sysprincipleQuestions } from './sysprincipleQuestions';
import { hardwareQuestions } from './hardwareQuestions';
import { sysintegrationQuestions } from './sysintegrationQuestions';
import { datastructureQuestions } from './datastructureQuestions';
import { discretemathQuestions } from './discretemathQuestions';
import { mathQuestions } from './mathQuestions';
import { englishQuestions } from './englishQuestions';
import { gangyaoQuestions } from './gangyaoQuestions';
import { marxismQuestions } from './marxismQuestions';
import { xigaiQuestions } from './xigaiQuestions';

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

// 题库科目。前四科沿用最初的 AI Studio 版题库，其余为按自考课程代码整理的分科题库
// （代码见 README）。侧边栏、总览、错题本、科目页全部由这个数组驱动，所以新增科目
// 只需要在这里登记、并补一条 initialQuestions 展开。
export const subjects: Subject[] = [
  { id: 'network', name: '计算机网络维护技术', icon: Network },
  { id: 'intro', name: '计算机导论', icon: BookOpen },
  { id: 'programming', name: '高级语言程序设计', icon: Code },
  { id: 'os', name: '操作系统', icon: Cpu },
  { id: 'networkprinciple', name: '计算机网络原理及应用', icon: Globe },
  { id: 'sysprinciple', name: '计算机系统原理', icon: Microchip },
  { id: 'hardware', name: '计算机硬件技术', icon: CircuitBoard },
  { id: 'sysintegration', name: '计算机系统集成', icon: Blocks },
  { id: 'datastructure', name: '数据结构与算法', icon: Binary },
  { id: 'discretemath', name: '离散数学', icon: Sigma },
  { id: 'math', name: '高等数学（工本）', icon: Calculator },
  { id: 'english', name: '英语（专升本）', icon: Languages },
  { id: 'gangyao', name: '中国近现代史纲要', icon: History },
  { id: 'marxism', name: '马克思主义基本原理', icon: Scale },
  { id: 'xigai', name: '习近平新时代中国特色社会主义思想概论', icon: Landmark },
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
  ...introQuestions,
  ...networkprincipleQuestions,
  ...sysprincipleQuestions,
  ...hardwareQuestions,
  ...sysintegrationQuestions,
  ...datastructureQuestions,
  ...discretemathQuestions,
  ...mathQuestions,
  ...englishQuestions,
  ...gangyaoQuestions,
  ...marxismQuestions,
  ...xigaiQuestions
];
