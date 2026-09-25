import React, { useMemo } from 'react';
import { QuestionCard } from './QuestionCard';
import { Question, subjects } from '@/src/data/mockData';
import { AlertCircle, BookOpen, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

interface IncorrectQuestionsProps {
  questions: Question[];
  onUpdateQuestion: (q: Question) => void;
}

export function IncorrectQuestions({ questions, onUpdateQuestion }: IncorrectQuestionsProps) {
  const incorrectQuestions = questions.filter(q => q.isIncorrect);

  const groupedQuestions = useMemo(() => {
    const groups: Record<string, Question[]> = {};
    incorrectQuestions.forEach(q => {
      if (!groups[q.subjectId]) {
        groups[q.subjectId] = [];
      }
      groups[q.subjectId].push(q);
    });
    return groups;
  }, [incorrectQuestions]);

  const availableSubjects = useMemo(() => {
    return subjects.filter(s => groupedQuestions[s.id] && groupedQuestions[s.id].length > 0);
  }, [groupedQuestions]);

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
              <AlertCircle className="w-8 h-8 text-red-500" />
              错题本
            </h1>
            <p className="text-slate-500 mt-2">集中攻克薄弱环节，温故而知新。</p>
          </div>
          <div className="bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm">
            <span className="text-sm font-medium text-slate-600">总计错题: </span>
            <span className="text-lg font-bold text-red-500">{incorrectQuestions.length}</span>
          </div>
        </div>
      </div>

      {incorrectQuestions.length > 0 ? (
        <Tabs defaultValue="all" className="space-y-6">
          <TabsList className="bg-slate-100 p-1 h-auto flex-wrap justify-start">
            <TabsTrigger value="all" className="gap-2 px-4 py-2">
              <Layers className="w-4 h-4" />
              全部 ({incorrectQuestions.length})
            </TabsTrigger>
            {availableSubjects.map(subject => (
              <TabsTrigger key={subject.id} value={subject.id} className="gap-2 px-4 py-2">
                <subject.icon className="w-4 h-4" />
                {subject.name} ({groupedQuestions[subject.id].length})
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="all" className="space-y-6 mt-6">
            <AnimatePresence mode="wait">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                {incorrectQuestions.map(q => (
                  <QuestionCard 
                    key={q.id} 
                    question={q} 
                    onUpdate={onUpdateQuestion} 
                    showSubjectBadge={true} 
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </TabsContent>

          {availableSubjects.map(subject => (
            <TabsContent key={subject.id} value={subject.id} className="space-y-6 mt-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                {groupedQuestions[subject.id].map(q => (
                  <QuestionCard 
                    key={q.id} 
                    question={q} 
                    onUpdate={onUpdateQuestion} 
                    showSubjectBadge={false} 
                  />
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      ) : (
        <div className="text-center py-24 text-slate-500 bg-white rounded-2xl border border-slate-200 border-dashed flex flex-col items-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: 'spring' }}
          >
            <AlertCircle className="w-16 h-16 text-green-400 mb-6" />
          </motion.div>
          <h3 className="text-xl font-bold text-slate-800">太棒了，目前没有错题！</h3>
          <p className="text-slate-500 mt-2 max-w-xs">
            您的错题本空空如也，这说明您的基础非常扎实。继续保持，在练习中不断精进。
          </p>
        </div>
      )}
    </div>
  );
}
