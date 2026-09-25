import React from 'react';
import { BookOpen, AlertCircle, Star, Terminal, LayoutDashboard, Cog, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { subjects, Question } from '@/src/data/mockData';

interface SidebarProps {
  currentView: string;
  setCurrentView: (view: string) => void;
  questions: Question[];
  /** Mobile drawer state. Ignored from md upwards, where the sidebar is always visible. */
  open: boolean;
  onClose: () => void;
}

export function Sidebar({ currentView, setCurrentView, questions, open, onClose }: SidebarProps) {
  const incorrectCount = questions.filter(q => q.isIncorrect).length;
  const importantCount = questions.filter(q => q.isImportant).length;

  const navItems = [
    { id: 'dashboard', name: '总览', icon: LayoutDashboard },
    ...subjects.map(s => ({ id: `subject-${s.id}`, name: s.name, icon: s.icon })),
    { id: 'incorrect', name: '错题本', icon: AlertCircle, count: incorrectCount },
    { id: 'important', name: '重点标记', icon: Star, count: importantCount },
    { id: 'compiler', name: 'C语言在线运行', icon: Terminal },
    { id: 'settings', name: '设置', icon: Cog },
  ];

  return (
    <>
      {/* Backdrop — mobile only, closes the drawer on tap. */}
      {open && (
        <div
          className="fixed inset-0 z-30 bg-slate-900/60 md:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <div
        className={cn(
          'bg-slate-900 text-slate-300 flex flex-col h-full border-r border-slate-800 w-64 shrink-0',
          // Mobile: off-canvas drawer that slides in over the content.
          'fixed inset-y-0 left-0 z-40 transition-transform duration-200 ease-out',
          // md and up: a normal in-flow column, always visible.
          'md:static md:z-auto md:translate-x-0',
          open ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="p-6 flex items-center justify-between gap-2">
          <h1 className="text-xl font-bold text-white flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-blue-500" />
            <span>考试刷题系统</span>
          </h1>
          <button
            onClick={onClose}
            aria-label="关闭菜单"
            className="md:hidden p-1 -mr-1 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <nav className="flex-1 px-4 space-y-2 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentView(item.id);
                  onClose();
                }}
                className={cn(
                  "flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                  isActive 
                    ? "bg-blue-600 text-white" 
                    : "hover:bg-slate-800 hover:text-white"
                )}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5" />
                  {item.name}
                </div>
                {item.count !== undefined && item.count > 0 && (
                  <span className={cn(
                    "px-2 py-0.5 rounded-full text-[10px] font-bold",
                    isActive ? "bg-white text-blue-600" : "bg-slate-800 text-slate-400"
                  )}>
                    {item.count}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
        <div className="p-4 border-t border-slate-800 text-xs text-slate-500 text-center">
          © 2026 Exam Prep System
        </div>
      </div>
    </>
  );
}
