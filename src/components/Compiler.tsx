import React, { useState } from 'react';
import Editor from 'react-simple-code-editor';
import Prism from 'prismjs';
import 'prismjs/components/prism-c';
import 'prismjs/themes/prism-tomorrow.css'; // Dark theme for editor
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Terminal, Play, Loader2 } from 'lucide-react';

export function Compiler() {
  const [code, setCode] = useState<string>('#include <stdio.h>\n\nint main() {\n    printf("Hello, World!\\n");\n    return 0;\n}');
  const [output, setOutput] = useState<string>('');
  const [isRunning, setIsRunning] = useState(false);

  const handleRunCode = async () => {
    setIsRunning(true);
    setOutput('正在编译运行...\n');
    
    try {
      const response = await fetch('https://wandbox.org/api/compile.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          compiler: 'gcc-head-c',
          code: code,
          save: false
        }),
      });

      const data = await response.json();

      if (data.status !== '0') {
        setOutput(`编译或运行错误:\n${data.compiler_error || data.program_error || data.compiler_message || '未知错误'}`);
      } else {
        setOutput(`${data.program_message || data.program_output || ''}\n\n[Program finished with exit code 0]`);
      }
    } catch (error) {
      console.error('Execution error:', error);
      setOutput('请求执行服务器失败，请检查网络连接。');
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div className="p-8 max-w-5xl mx-auto h-full flex flex-col">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
          <Terminal className="w-8 h-8 text-blue-600" />
          C语言在线运行
        </h1>
        <p className="text-slate-500 mt-2">编写、编译并运行你的C语言代码。</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1 min-h-0">
        <Card className="flex flex-col border-slate-200 shadow-sm overflow-hidden">
          <CardHeader className="bg-slate-50 border-b border-slate-100 py-3 flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-sm font-medium text-slate-700">源代码 (main.c)</CardTitle>
            </div>
            <Button 
              size="sm" 
              onClick={handleRunCode} 
              disabled={isRunning}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              {isRunning ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Play className="w-4 h-4 mr-2" />}
              运行代码
            </Button>
          </CardHeader>
          <CardContent className="p-0 flex-1 overflow-auto bg-[#1d1f21]">
            <Editor
              value={code}
              onValueChange={code => setCode(code)}
              highlight={code => Prism.highlight(code, Prism.languages.c, 'c')}
              padding={16}
              style={{
                fontFamily: '"JetBrains Mono", "Fira Code", monospace',
                fontSize: 14,
                minHeight: '100%',
                color: '#c5c8c6'
              }}
              className="editor-container"
            />
          </CardContent>
        </Card>

        <Card className="flex flex-col border-slate-200 shadow-sm overflow-hidden">
          <CardHeader className="bg-slate-50 border-b border-slate-100 py-3">
            <CardTitle className="text-sm font-medium text-slate-700 flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              运行结果
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 flex-1 overflow-auto bg-slate-900 text-slate-300 font-mono text-sm whitespace-pre-wrap">
            {output || <span className="text-slate-600 italic">点击"运行代码"查看结果...</span>}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
