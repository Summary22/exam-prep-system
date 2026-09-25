import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { QuestionCard } from './QuestionCard';
import { Question, subjects } from '@/src/data/mockData';
import { Database, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SubjectViewProps {
  subjectId: string;
  questions: Question[];
  onUpdateQuestion: (q: Question) => void;
  onRefreshSubject: (subjectId: string) => void;
}

export function SubjectView({ subjectId, questions, onUpdateQuestion, onRefreshSubject }: SubjectViewProps) {
  const subject = subjects.find(s => s.id === subjectId);
  const subjectQuestions = questions.filter(q => q.subjectId === subjectId);
  
  const practiceQuestions = subjectQuestions.filter(q => q.section === 'practice');
  const examQuestions = subjectQuestions.filter(q => q.section === 'exam');

  if (!subject) return <div>Subject not found</div>;

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-8 flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
            <subject.icon className="w-8 h-8 text-blue-600" />
            {subject.name}
          </h1>
          <p className="text-slate-500 mt-2">选择练习模式，开始刷题吧！</p>
        </div>
        <Button 
          variant="outline" 
          onClick={() => onRefreshSubject(subjectId)}
          className="flex items-center gap-2"
        >
          <RefreshCw className="w-4 h-4" />
          重新开始
        </Button>
      </div>

      <Tabs defaultValue="practice" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8 bg-slate-100 p-1 rounded-xl">
          <TabsTrigger value="practice" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">
            知识点练习 ({practiceQuestions.length})
          </TabsTrigger>
          <TabsTrigger value="exam" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">
            历年考题 ({examQuestions.length})
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="practice" className="space-y-6 mt-0">
          {practiceQuestions.length > 0 ? (
            practiceQuestions.map(q => (
              <QuestionCard key={q.id} question={q} onUpdate={onUpdateQuestion} />
            ))
          ) : (
            <div className="text-center py-12 text-slate-500 bg-white rounded-xl border border-slate-200 border-dashed">
              暂无知识点练习题
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="exam" className="space-y-6 mt-0">
          {examQuestions.length > 0 ? (
            (() => {
              // Group exam questions by examName
              const groupedExams = examQuestions.reduce((acc, q) => {
                const name = q.examName || '综合考题';
                if (!acc[name]) acc[name] = [];
                acc[name].push(q);
                return acc;
              }, {} as Record<string, Question[]>);
              
              const examNames = Object.keys(groupedExams);
              
              if (examNames.length === 1 && examNames[0] === '综合考题') {
                return examQuestions.map(q => (
                  <QuestionCard key={q.id} question={q} onUpdate={onUpdateQuestion} />
                ));
              }

              return (
                <Tabs defaultValue={examNames[0]} className="w-full">
                  <TabsList className="flex flex-wrap h-auto mb-6 bg-slate-50 p-1 rounded-xl border border-slate-200">
                    {examNames.map(name => (
                      <TabsTrigger 
                        key={name} 
                        value={name}
                        className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-blue-600"
                      >
                        {name} ({groupedExams[name].length})
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  
                  {examNames.map(name => (
                    <TabsContent key={name} value={name} className="space-y-6 mt-0">
                      {groupedExams[name].map(q => (
                        <QuestionCard key={q.id} question={q} onUpdate={onUpdateQuestion} />
                      ))}
                    </TabsContent>
                  ))}
                </Tabs>
              );
            })()
          ) : (
            <div className="text-center py-12 text-slate-500 bg-white rounded-xl border border-slate-200 border-dashed">
              暂无历年考题
            </div>
          )}
        </TabsContent>
      </Tabs>

      <Card className="mt-12 bg-blue-50/50 border-blue-200 shadow-sm">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-blue-800 text-lg">
            <Database className="w-5 h-5" />
            如何为 {subject.name} 导入新题库？
          </CardTitle>
          <CardDescription className="text-blue-700/80">
            目前系统使用内置的演示数据。未来您可以通过以下方式导入自己的题库：
          </CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-blue-800/90 space-y-2 pt-2">
          <p>1. <strong>JSON 文件导入</strong>：准备符合特定格式的 JSON 文件，一键导入所有题目。</p>
          <p>2. <strong>Excel/CSV 导入</strong>：使用表格整理题目，系统自动解析并分类。</p>
          <p>3. <strong>手动录入</strong>：在系统后台逐题添加，支持富文本和代码块。</p>
          <p className="mt-4 text-xs text-blue-600 font-medium">提示：此功能正在开发中，敬请期待。</p>
        </CardContent>
      </Card>
    </div>
  );
}
