import React, { useMemo } from 'react';
import { QuestionCard } from './QuestionCard';
import { Question, subjects } from '@/src/data/mockData';
import { Star, BookOpen } from 'lucide-react';

interface ImportantQuestionsProps {
  questions: Question[];
  onUpdateQuestion: (q: Question) => void;
}

export function ImportantQuestions({ questions, onUpdateQuestion }: ImportantQuestionsProps) {
  const importantQuestions = questions.filter(q => q.isImportant);

  const groupedQuestions = useMemo(() => {
    const groups: Record<string, Question[]> = {};
    importantQuestions.forEach(q => {
      if (!groups[q.subjectId]) {
        groups[q.subjectId] = [];
      }
      groups[q.subjectId].push(q);
    });
    return groups;
  }, [importantQuestions]);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
          <Star className="w-8 h-8 text-yellow-500" />
          重点标记
        </h1>
        <p className="text-slate-500 mt-2">核心知识点，考前必看。</p>
      </div>

      <div className="space-y-10">
        {importantQuestions.length > 0 ? (
          Object.entries(groupedQuestions).map(([subjectId, subjectQuestions]) => {
            const subjectName = subjects.find(s => s.id === subjectId)?.name || subjectId;
            const typedQuestions = subjectQuestions as Question[];
            return (
              <div key={subjectId} className="space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                  <h2 className="text-xl font-semibold text-slate-800">{subjectName}</h2>
                  <span className="text-sm text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full ml-2">
                    {typedQuestions.length} 题
                  </span>
                </div>
                <div className="space-y-6">
                  {typedQuestions.map(q => (
                    <QuestionCard key={q.id} question={q} onUpdate={onUpdateQuestion} showSubjectBadge={false} />
                  ))}
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center py-16 text-slate-500 bg-white rounded-xl border border-slate-200 border-dashed flex flex-col items-center">
            <Star className="w-12 h-12 text-slate-300 mb-4" />
            <p className="text-lg font-medium text-slate-700">暂无重点标记</p>
            <p className="text-sm text-slate-500 mt-1">在刷题过程中遇到重要的题目，可以点击星星图标标记。</p>
          </div>
        )}
      </div>
    </div>
  );
}
