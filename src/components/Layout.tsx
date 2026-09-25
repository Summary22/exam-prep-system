import React, { useState, useEffect } from 'react';
import { Sidebar } from './Sidebar';
import { Dashboard } from './Dashboard';
import { SubjectView } from './SubjectView';
import { IncorrectQuestions } from './IncorrectQuestions';
import { ImportantQuestions } from './ImportantQuestions';
import { Compiler } from './Compiler';
import { Settings } from './Settings';
import { initialQuestions, subjects, Question } from '@/src/data/mockData';
import { Menu } from 'lucide-react';
import { PROGRESS_KEY, clearProgress } from '@/src/lib/userState';

export function Layout() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [questions, setQuestions] = useState<Question[]>(() => {
    try {
      const saved = localStorage.getItem(PROGRESS_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          // Merge saved state with initialQuestions to ensure new questions are loaded
          // while preserving user's answers and flags.
          return initialQuestions.map(initialQ => {
            const savedQ = parsed.find((q: Question) => q.id === initialQ.id);
            if (savedQ) {
              return { ...initialQ, ...savedQ };
            }
            return initialQ;
          });
        }
      }
    } catch (e) {
      console.error('Failed to parse questions from localStorage', e);
    }
    return initialQuestions;
  });

  useEffect(() => {
    try {
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(questions));
    } catch (e) {
      // Private-browsing mode or a full quota both land here; the app still works,
      // it just will not remember anything after a reload.
      console.error('保存进度失败（可能是隐私模式或存储已满）', e);
    }
  }, [questions]);

  const handleUpdateQuestion = (updatedQuestion: Question) => {
    setQuestions(questions.map(q => q.id === updatedQuestion.id ? updatedQuestion : q));
  };

  const handleRefreshSubject = (subjectId: string) => {
    setQuestions(questions.map(q => 
      q.subjectId === subjectId 
        ? { ...q, userAnswer: undefined, showAnswer: false } 
        : q
    ));
  };

  const handleImportProgress = (imported: Question[]) => {
    setQuestions(imported);
  };

  const handleClearProgress = () => {
    clearProgress();
    setQuestions(initialQuestions);
  };

  const renderContent = () => {
    if (currentView === 'dashboard') {
      return <Dashboard questions={questions} setCurrentView={setCurrentView} />;
    }
    if (currentView.startsWith('subject-')) {
      const subjectId = currentView.replace('subject-', '');
      return <SubjectView subjectId={subjectId} questions={questions} onUpdateQuestion={handleUpdateQuestion} onRefreshSubject={handleRefreshSubject} />;
    }
    if (currentView === 'incorrect') {
      return <IncorrectQuestions questions={questions} onUpdateQuestion={handleUpdateQuestion} />;
    }
    if (currentView === 'important') {
      return <ImportantQuestions questions={questions} onUpdateQuestion={handleUpdateQuestion} />;
    }
    if (currentView === 'compiler') {
      return <Compiler />;
    }
    if (currentView === 'settings') {
      return (
        <Settings
          questions={questions}
          onImportProgress={handleImportProgress}
          onClearProgress={handleClearProgress}
        />
      );
    }
    return <div>Not Found</div>;
  };

  const viewTitle = (() => {
    if (currentView === 'dashboard') return '总览';
    if (currentView.startsWith('subject-')) {
      const id = currentView.replace('subject-', '');
      return subjects.find(s => s.id === id)?.name ?? '科目';
    }
    if (currentView === 'incorrect') return '错题本';
    if (currentView === 'important') return '重点标记';
    if (currentView === 'compiler') return 'C语言在线运行';
    if (currentView === 'settings') return '设置';
    return '考试刷题系统';
  })();

  return (
    // h-dvh (not h-screen) so mobile browser chrome collapsing doesn't clip the layout.
    <div className="flex h-dvh w-full bg-slate-50 overflow-hidden font-sans">
      <Sidebar
        currentView={currentView}
        setCurrentView={setCurrentView}
        questions={questions}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile-only top bar: opens the navigation drawer and shows the current section. */}
        <header className="md:hidden flex items-center gap-3 h-14 px-3 shrink-0 bg-slate-900 text-white border-b border-slate-800">
          <button
            onClick={() => setSidebarOpen(true)}
            aria-label="打开菜单"
            className="p-2 -ml-1 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
          <span className="font-semibold truncate">{viewTitle}</span>
        </header>
        <main className="flex-1 overflow-y-auto bg-slate-50">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}
