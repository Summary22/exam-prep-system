import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { subjects, Question } from '@/src/data/mockData';
import { BookOpen, AlertCircle, Star, CheckCircle2, Database } from 'lucide-react';

interface DashboardProps {
  questions: Question[];
  setCurrentView: (view: string) => void;
}

export function Dashboard({ questions, setCurrentView }: DashboardProps) {
  const incorrectCount = questions.filter(q => q.isIncorrect).length;
  const importantCount = questions.filter(q => q.isImportant).length;
  const totalQuestions = questions.length;
  const withExplanation = questions.filter(q => (q.explanation || '').trim().length > 0).length;

  // Per-subject explanation coverage, so the gaps in the question bank are visible
  // rather than hidden behind an "everything has an explanation" claim.
  const coverage = subjects.map(s => {
    const list = questions.filter(q => q.subjectId === s.id);
    const withExp = list.filter(q => (q.explanation || '').trim().length > 0).length;
    return {
      id: s.id,
      name: s.name,
      total: list.length,
      withExp,
      pct: list.length ? Math.round((withExp / list.length) * 100) : 0,
    };
  });

  return (
    <div className="p-8 max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">学习总览</h1>
        <p className="text-slate-500 mt-2">欢迎回来，继续你的备考之旅吧！</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-white shadow-sm border-slate-200">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">总题数</CardTitle>
            <BookOpen className="w-4 h-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900">{totalQuestions}</div>
            <p className="text-xs text-slate-500 mt-1">题库总容量</p>
          </CardContent>
        </Card>
        
        <Card className="bg-white shadow-sm border-slate-200 cursor-pointer hover:border-red-300 transition-colors" onClick={() => setCurrentView('incorrect')}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">错题本</CardTitle>
            <AlertCircle className="w-4 h-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{incorrectCount}</div>
            <p className="text-xs text-slate-500 mt-1">待复习错题</p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-sm border-slate-200 cursor-pointer hover:border-yellow-300 transition-colors" onClick={() => setCurrentView('important')}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">重点标记</CardTitle>
            <Star className="w-4 h-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">{importantCount}</div>
            <p className="text-xs text-slate-500 mt-1">核心知识点</p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-slate-50 border-slate-200 shadow-sm">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-slate-800 text-lg">
            <Database className="w-5 h-5" />
            题库解析覆盖
          </CardTitle>
          <CardDescription>
            操作系统与高级语言程序设计的<strong>历年真题</strong>多为「有答案、无解析」。这几部分正是「AI 智能解析」最有用的地方（需在设置里填自己的 Key）。
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 pt-3">
          <div className="grid grid-cols-3 gap-3">
            <div className="p-3 bg-white border border-slate-200 rounded-lg">
              <div className="text-xl font-bold text-slate-900">{withExplanation}</div>
              <div className="text-xs text-slate-500 mt-0.5">题带标准解析</div>
            </div>
            <div className="p-3 bg-white border border-slate-200 rounded-lg">
              <div className="text-xl font-bold text-amber-600">{totalQuestions - withExplanation}</div>
              <div className="text-xs text-slate-500 mt-0.5">题仅有答案</div>
            </div>
            <div className="p-3 bg-white border border-slate-200 rounded-lg">
              <div className="text-xl font-bold text-blue-600">
                {totalQuestions ? Math.round((withExplanation / totalQuestions) * 100) : 0}%
              </div>
              <div className="text-xs text-slate-500 mt-0.5">解析覆盖率</div>
            </div>
          </div>
          <div className="space-y-2.5">
            {coverage.map(row => (
              <div key={row.id} className="flex items-center gap-3">
                <span className="w-44 shrink-0 text-sm text-slate-600 truncate">{row.name}</span>
                <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: `${row.pct}%` }}
                  />
                </div>
                <span className="w-24 shrink-0 text-xs text-slate-500 text-right tabular-nums">
                  {row.withExp}/{row.total}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-800">科目列表</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {subjects.map(subject => {
            const Icon = subject.icon;
            const subjectQuestions = questions.filter(q => q.subjectId === subject.id);
            const subjectIncorrectCount = subjectQuestions.filter(q => q.isIncorrect).length;
            
            return (
              <Card 
                key={subject.id} 
                className="hover:shadow-md transition-shadow cursor-pointer border-slate-200 group"
                onClick={() => setCurrentView(`subject-${subject.id}`)}
              >
                <CardContent className="p-6 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-50 rounded-lg text-blue-600 group-hover:bg-blue-100 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">{subject.name}</h3>
                      <p className="text-sm text-slate-500 mt-1">共 {subjectQuestions.length} 题</p>
                    </div>
                  </div>
                  {subjectIncorrectCount > 0 && (
                    <div 
                      className="flex items-center gap-1.5 bg-red-50 text-red-600 px-3 py-1.5 rounded-full text-sm font-medium border border-red-100 hover:bg-red-100 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentView('incorrect');
                      }}
                    >
                      <AlertCircle className="w-4 h-4" />
                      {subjectIncorrectCount} 错题
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
