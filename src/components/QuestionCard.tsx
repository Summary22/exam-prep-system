import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, AlertCircle, CheckCircle2, Eye, Code, Sparkles, Loader2 } from 'lucide-react';
import { Question, subjects } from '@/src/data/mockData';
import { cn } from '@/lib/utils';
import { explanationPrompt, getClient, getModel, hasApiKey } from '@/src/lib/gemini';

interface QuestionCardProps {
  question: Question;
  onUpdate: (q: Question) => void;
  showSubjectBadge?: boolean;
  key?: string | number;
}

export function QuestionCard({ question, onUpdate, showSubjectBadge }: QuestionCardProps) {
  const showAnswer = question.showAnswer || false;
  const selectedOption = question.userAnswer || null;
  const [isGeneratingAi, setIsGeneratingAi] = useState(false);
  const [aiExplanation, setAiExplanation] = useState<string | null>(null);

  const subjectName = subjects.find(s => s.id === question.subjectId)?.name || question.subjectId;

  const handleToggleImportant = () => {
    onUpdate({ ...question, isImportant: !question.isImportant });
  };

  const handleToggleIncorrect = () => {
    onUpdate({ ...question, isIncorrect: !question.isIncorrect });
  };

  const handleGenerateAiExplanation = async () => {
    if (!hasApiKey()) {
      setAiExplanation(
        '还没有配置 Gemini API Key。题库里每道题都自带标准解析，点「查看答案解析」就能看到；' +
          '如果想要更详细的 AI 讲解，请到左侧「设置」里填入自己的 Key（可选，非必需）。'
      );
      return;
    }
    setIsGeneratingAi(true);
    setAiExplanation(null);
    try {
      const ai = await getClient();
      if (!ai) throw new Error('无法初始化 Gemini 客户端');
      const response = await ai.models.generateContent({
        model: getModel(),
        contents: explanationPrompt({
          text: question.text,
          options: question.options,
          answer: question.answer,
        }),
      });
      setAiExplanation(response.text || 'AI 未返回解析内容。');
    } catch (error) {
      console.error('AI 解析失败:', error);
      const detail = error instanceof Error ? error.message : String(error);
      setAiExplanation(`AI 解析生成失败：${detail}`);
    } finally {
      setIsGeneratingAi(false);
    }
  };

  return (
    <Card className="mb-6 border-slate-200 shadow-sm overflow-hidden">
      <CardHeader className="bg-slate-50/50 border-b border-slate-100 pb-4">
        <div className="flex justify-between items-start gap-4">
          <div className="flex flex-wrap gap-2 items-center">
            <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
              {question.type === 'single_choice' ? '单选题' : 
               question.type === 'multiple_choice' ? '多选题' : 
               question.type === 'coding' ? '编程题' : '简答题'}
            </Badge>
            <Badge variant="outline" className="text-slate-600 border-slate-200 bg-white">
              {question.section === 'practice' ? '知识点练习' : '历年考题'}
            </Badge>
            {showSubjectBadge && (
              <Badge variant="secondary" className="bg-slate-100 text-slate-700">
                {subjectName}
              </Badge>
            )}
          </div>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleToggleImportant}
              className={cn("h-8 px-2", question.isImportant ? "text-yellow-500 hover:text-yellow-600" : "text-slate-400 hover:text-yellow-500")}
              title="标记重点"
            >
              <Star className={cn("w-4 h-4", question.isImportant && "fill-current")} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleToggleIncorrect}
              className={cn("h-8 px-2", question.isIncorrect ? "text-red-500 hover:text-red-600" : "text-slate-400 hover:text-red-500")}
              title="加入错题本"
            >
              <AlertCircle className={cn("w-4 h-4", question.isIncorrect && "fill-current")} />
            </Button>
          </div>
        </div>
        <CardTitle className="text-lg font-medium text-slate-800 mt-4 leading-relaxed">
          {question.text}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="pt-6">
        {(question.type === 'single_choice' || question.type === 'multiple_choice') && question.options && (
          <div className="space-y-3">
            {question.options.map((option, idx) => {
              const isMultiple = question.type === 'multiple_choice';
              const selectedOptions = Array.isArray(selectedOption) ? selectedOption : (selectedOption ? [selectedOption] : []);
              const isSelected = selectedOptions.includes(option);
              const isCorrectOption = isMultiple 
                ? Array.isArray(question.answer) && question.answer.includes(option)
                : option === question.answer;
              const showResult = showAnswer || (!isMultiple && selectedOption !== null);
              
              let optionClass = "border-slate-200 hover:border-blue-300 hover:bg-blue-50";
              if (showResult) {
                if (isCorrectOption) {
                  optionClass = "border-green-500 bg-green-50 text-green-900";
                } else if (isSelected && !isCorrectOption) {
                  optionClass = "border-red-500 bg-red-50 text-red-900";
                } else {
                  optionClass = "border-slate-200 opacity-50";
                }
              } else if (isSelected) {
                optionClass = "border-blue-500 bg-blue-50 text-blue-900";
              }

              return (
                <div
                  key={idx}
                  onClick={() => {
                    if (!showResult) {
                      // For multiple choice, we might want a "Submit" button instead of auto-submit.
                      // But for simplicity, let's just toggle selection if not showing result.
                      // Actually, if it's multiple choice, we can't auto-submit on first click.
                      // Let's just allow toggling if !showAnswer.
                      if (!showAnswer) {
                        let newSelected: string | string[];
                        if (isMultiple) {
                          if (isSelected) {
                            newSelected = selectedOptions.filter(o => o !== option);
                          } else {
                            newSelected = [...selectedOptions, option];
                          }
                        } else {
                          newSelected = option;
                        }
                        
                        const updatedQuestion = { ...question, userAnswer: newSelected };
                        
                        // For single choice, auto-check correctness and add to incorrect
                        if (!isMultiple) {
                          if (option !== question.answer && !question.isIncorrect) {
                            updatedQuestion.isIncorrect = true;
                          }
                        }
                        
                        onUpdate(updatedQuestion);
                      }
                    }
                  }}
                  className={cn(
                    "p-4 rounded-lg border cursor-pointer transition-all flex items-center gap-3",
                    optionClass
                  )}
                >
                  <div className={cn(
                    "w-6 h-6 rounded-full border flex items-center justify-center text-sm font-medium",
                    showResult && isCorrectOption ? "border-green-500 bg-green-500 text-white" :
                    showResult && isSelected && !isCorrectOption ? "border-red-500 bg-red-500 text-white" :
                    !showResult && isSelected ? "border-blue-500 bg-blue-500 text-white" :
                    "border-slate-300 text-slate-500"
                  )}>
                    {String.fromCharCode(65 + idx)}
                  </div>
                  <span className="flex-1">{option}</span>
                  {showResult && isCorrectOption && <CheckCircle2 className="w-5 h-5 text-green-500" />}
                </div>
              );
            })}
            
            {question.type === 'multiple_choice' && !showAnswer && (
              <Button 
                className="mt-4"
                onClick={() => {
                  const selectedOptions = Array.isArray(selectedOption) ? selectedOption : (selectedOption ? [selectedOption] : []);
                  const correctAnswers = Array.isArray(question.answer) ? question.answer : [question.answer];
                  
                  const isCorrect = selectedOptions.length === correctAnswers.length && 
                                    selectedOptions.every(o => correctAnswers.includes(o));
                                    
                  const updatedQuestion = { ...question, showAnswer: true };
                  if (!isCorrect && !question.isIncorrect) {
                    updatedQuestion.isIncorrect = true;
                  }
                  onUpdate(updatedQuestion);
                }}
              >
                提交答案
              </Button>
            )}
          </div>
        )}

        {question.type === 'coding' && (
          <div className="p-4 bg-slate-900 rounded-lg text-slate-300 font-mono text-sm overflow-x-auto">
            <div className="flex items-center gap-2 mb-2 text-slate-500 border-b border-slate-800 pb-2">
              <Code className="w-4 h-4" />
              <span>C Language</span>
            </div>
            {/* Just a placeholder for the user to think about coding */}
            <p className="text-slate-500 italic">请在"C语言在线运行"板块或本地环境中编写代码，然后核对答案。</p>
          </div>
        )}
      </CardContent>

      <CardFooter className="bg-slate-50 border-t border-slate-100 flex flex-col items-start gap-4 p-6">
        <div className="flex flex-wrap gap-3 w-full sm:w-auto">
          <Button 
            variant={showAnswer ? "secondary" : "default"}
            onClick={() => onUpdate({ ...question, showAnswer: !showAnswer })}
            className="w-full sm:w-auto"
          >
            <Eye className="w-4 h-4 mr-2" />
            {showAnswer ? '隐藏答案解析' : '查看答案解析'}
          </Button>
          
          {showAnswer && (
            <Button 
              variant="outline"
              onClick={handleGenerateAiExplanation}
              disabled={isGeneratingAi}
              className="w-full sm:w-auto border-purple-200 text-purple-700 hover:bg-purple-50 hover:text-purple-800"
            >
              {isGeneratingAi ? (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <Sparkles className="w-4 h-4 mr-2" />
              )}
              AI 智能解析
            </Button>
          )}
        </div>

        {showAnswer && (
          <div className="w-full space-y-4 animate-in fade-in slide-in-from-top-2">
            <div className="p-4 bg-blue-50/50 border border-blue-100 rounded-lg space-y-3">
              <div>
                <span className="font-semibold text-slate-700">正确答案：</span>
                {question.type === 'coding' ? (
                  <pre className="mt-2 p-4 bg-slate-900 text-green-400 rounded-md font-mono text-sm overflow-x-auto">
                    {question.answer}
                  </pre>
                ) : (
                  <span className="text-green-600 font-medium ml-2">
                    {Array.isArray(question.answer) ? question.answer.join(', ') : question.answer}
                  </span>
                )}
              </div>
              {question.explanation && (
                <div>
                  <span className="font-semibold text-slate-700">标准解析：</span>
                  <p className="text-slate-600 mt-1 leading-relaxed">{question.explanation}</p>
                </div>
              )}
            </div>

            {aiExplanation && (
              <div className="p-4 bg-purple-50/50 border border-purple-100 rounded-lg space-y-3">
                <div className="flex items-center gap-2 text-purple-800 font-semibold border-b border-purple-100 pb-2">
                  <Sparkles className="w-4 h-4" />
                  <span>AI 智能解析</span>
                </div>
                <div className="text-slate-700 leading-relaxed text-sm whitespace-pre-wrap">
                  {aiExplanation}
                </div>
              </div>
            )}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
