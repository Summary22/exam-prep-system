import { Question } from './mockData';

export const sysprincipleQuestions: Question[] = [
  {
    "id": "sysprinciple_q1",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "下列程序中可以将汇编指令翻译成机器指令的是（　）。",
    "options": [
      "汇编程序",
      "编译程序",
      "反汇编程序",
      "解释程序"
    ],
    "answer": "汇编程序",
    "explanation": "用来将汇编语言源程序中的汇编指令翻译成机器指令的程序称为汇编程序。参见教材P91。"
  },
  {
    "id": "sysprinciple_q2",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "在计算机系统的抽象层中，（　）作为计算机硬件之上的抽象层，对使用硬件的软件屏蔽了底层硬件的实现细节。",
    "options": [
      "操作系统层",
      "指令集体系结构",
      "编程语言层",
      "应用软件层"
    ],
    "answer": "指令集体系结构",
    "explanation": "在计算机系统的抽象层中，最重要的抽象层就是指令集体系结构（Instruction Set Architecture，ISA），它作为计算机硬件之上的抽象层，对使用硬件的软件屏蔽了底层硬件的实现细节，将物理上的计算机硬件抽象成一个逻辑上的虚拟计算机，称为机器语言级虚拟机。参见教材P92。"
  },
  {
    "id": "sysprinciple_q3",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "下列两种语言中统称为机器级语言的是（　）。",
    "options": [
      "机器语言和汇编语言",
      "汇编语言和高级语言",
      "机器语言和高级语言",
      "汇编语言和解释语言"
    ],
    "answer": "机器语言和汇编语言",
    "explanation": "机器语言和汇编语言统称为机器级语言。参见教材P91。"
  },
  {
    "id": "sysprinciple_q4",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "下列类型的指令的操作数分别来自存储单元和立即数的是（　）。",
    "options": [
      "RR型",
      "RS型",
      "SI型",
      "SS型"
    ],
    "answer": "SI型",
    "explanation": "指令类型可以是RR型（两个操作数都来自寄存器）、RS型（两个操作数分别来自寄存器和存储单元）、SI型（两个操作数分别来自存储单元和立即数）、SS型（两个操作数都来自存储单元）等。参见教材P92。"
  },
  {
    "id": "sysprinciple_q5",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "RISC指令系统的主要是通过（　）使计算机结构更加简单合理。",
    "options": [
      "简化指令",
      "提高计算机结构复杂性",
      "降低机器性能",
      "增加指令数量"
    ],
    "answer": "简化指令",
    "explanation": "RISC的着眼点不是简单地放在简化指令系统上，而是通过简化指令使计算机结构更加简单合理，从而提高机器的性能。参见教材P93。"
  },
  {
    "id": "sysprinciple_q6",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "在GCC的转换过程中，（　）步骤会将预处理后的源程序文件转换为汇编语言程序。",
    "options": [
      "预处理",
      "编译",
      "汇编",
      "链接"
    ],
    "answer": "编译",
    "explanation": "编译：将预处理后的源程序文件编译生成相应的汇编语言程序。参见教材P93。"
  },
  {
    "id": "sysprinciple_q7",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "在IA-32架构中，操作数是整数类型还是浮点数类型是由（　）区分的。",
    "options": [
      "操作数地址字段",
      "操作码字段op",
      "指令前缀字段",
      "寄存器指示符"
    ],
    "answer": "操作码字段op",
    "explanation": "在IA-32中，操作数是整数类型还是浮点数类型由操作码字段op区分，操作数的长度也由op中相应的位标明。参见教材P99。"
  },
  {
    "id": "sysprinciple_q8",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "在IA-32指令中，直接包含在指令中，无需指定其存放位置的操作数是（　）。",
    "options": [
      "寄存器操作数",
      "存储器操作数",
      "立即数",
      "浮点寄存器栈"
    ],
    "answer": "立即数",
    "explanation": "，IA-32指令的操作数有三类：立即数、寄存器操作数和存储器操作数。①立即数就在指令中，无须指定其存放位置。参见教材P100。"
  },
  {
    "id": "sysprinciple_q9",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "在IA-32的保护模式下，存储地址计算采用的是（　）存储管理方式。",
    "options": [
      "实地址模式",
      "虚拟地址模式",
      "段页式存储管理方式",
      "寄存器直接寻址方式"
    ],
    "answer": "段页式存储管理方式",
    "explanation": "IA-32引入了保护模式，采用的是段页式存储管理方式，因而存储地址计算变得比较复杂。参见教材P101。"
  },
  {
    "id": "sysprinciple_q10",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "在IA-32指令中，（　）方式是指令中直接给出操作数。",
    "options": [
      "立即寻址",
      "寄存器寻址",
      "存储器寻址",
      "隐含寻址"
    ],
    "answer": "立即寻址",
    "explanation": "根据指令给定信息得到操作数或操作数地址的方式称为寻址方式。其中，立即寻址指指令中直接给出操作数。参见教材P103。"
  },
  {
    "id": "sysprinciple_q11",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "存储器操作数的寻址方式与处理器的工作模式有关。IA-32处理器主要有（　）两种工作模式。",
    "options": [
      "虚拟模式和物理模式",
      "实地址模式和虚拟地址模式",
      "实地址模式和保护模式",
      "用户模式和内核模式"
    ],
    "answer": "实地址模式和保护模式",
    "explanation": "存储器操作数的寻址方式与处理器的工作模式有关。IA-32处理器主要有两种工作模式，即实地址模式和保护模式。参见教材P103。"
  },
  {
    "id": "sysprinciple_q12",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "机器指令是用0和1表示的一串0/1序列，用来指示（　）完成一个特定的原子操作。",
    "options": [
      "存储器",
      "输入/输出设备",
      "总线",
      "中央处理器（CPU）"
    ],
    "answer": "中央处理器（CPU）",
    "explanation": "机器指令（Instruction）是用0和1表示的一串0/1序列，用来指示CPU完成一个特定的原子操作。参见教材P106。"
  },
  {
    "id": "sysprinciple_q13",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "在MOVS指令中，movsbw操作的含义是（　）。",
    "options": [
      "将一个字节高位符号扩展后送到一个32位寄存器中",
      "将一个字节进行符号扩展后送到一个16位寄存器中",
      "将一个字进行符号扩展后送到一个16位寄存器中",
      "将一个字进行符号扩展后送到一个32位寄存器中"
    ],
    "answer": "将一个字节进行符号扩展后送到一个16位寄存器中",
    "explanation": "MOVS：符号扩展传送指令，将短的源数据高位符号扩展后传送到目的地址，如movsbw表示把一个字节进行符号扩展后送到一个16位寄存器中。参见教材P107。"
  },
  {
    "id": "sysprinciple_q14",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "数据传送指令传送中的XCHG指令的功能是（　）。",
    "options": [
      "将一个寄存器的内容复制到另一个寄存器",
      "将两个寄存器的内容相加",
      "将两个寄存器的内容互换",
      "将一个寄存器的内容与内存中的值互换"
    ],
    "answer": "将两个寄存器的内容互换",
    "explanation": "XCHG：数据交换指令，将两个寄存器内容互换。参见教材P107。"
  },
  {
    "id": "sysprinciple_q15",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "栈是一种采用（　）方式进行访问的一块存储区。",
    "options": [
      "先进先出",
      "先进后出",
      "后进先出",
      "后进后出"
    ],
    "answer": "先进后出",
    "explanation": "栈（Stack）是一种采用“先进后出”方式进行访问的一块存储区，在处理过程调用时非常有用。参见教材P107。"
  },
  {
    "id": "sysprinciple_q16",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "地址传送指令的源操作数必须是（　）寻址方式。",
    "options": [
      "立即数",
      "寄存器",
      "存储器",
      "隐含"
    ],
    "answer": "存储器",
    "explanation": "地址传送指令传送的是操作数的存储地址，指定的目的寄存器不能是段寄存器，且源操作数必须是存储器寻址方式。参见教材P108。"
  },
  {
    "id": "sysprinciple_q17",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "CMP指令的主要功能是（　）。",
    "options": [
      "将两个操作数相加",
      "将两个操作数相减并将结果存回目的操作数",
      "比较两个操作数的大小并改变标志位",
      "将一个操作数的值复制到另一个操作数"
    ],
    "answer": "比较两个操作数的大小并改变标志位",
    "explanation": "比较指令CMP用于两个寄存器操作数的比较，用目的操作数减去源操作数，结果不送回目的操作数，即两个操作数保持原值不变，只是标志位做相应改变。参见教材P111。"
  },
  {
    "id": "sysprinciple_q18",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "下列逻辑运算指令中，（　）是单操作数的取反指令。",
    "options": [
      "NOT",
      "AND",
      "OR",
      "XOR"
    ],
    "answer": "NOT",
    "explanation": "NOT：单操作数的取反指令，它将操作数每一位取反，然后把结果送回对应位。参见教材P113。"
  },
  {
    "id": "sysprinciple_q19",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "下列跳转方式中是将指令中设置的目标地址直接设置到EIP中的是（　）。",
    "options": [
      "直接跳转",
      "间接跳转",
      "相对跳转",
      "绝对跳转"
    ],
    "answer": "绝对跳转",
    "explanation": "直接将指令中设置的目标地址设置到EIP中，称为绝对跳转。参见教材P114。"
  },
  {
    "id": "sysprinciple_q20",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "CALL指令在跳转到被调用过程执行之前，首先会执行（　）。",
    "options": [
      "将返回地址压入栈中",
      "将参数压入栈中",
      "清除栈顶元素",
      "修改EIP寄存器但不压栈"
    ],
    "answer": "将返回地址压入栈中",
    "explanation": "为了支持嵌套和递归调用，通常利用栈来保存返回地址、入口参数和过程内部定义的非静态局部变量，因此，CALL指令在跳转到被调用过程执行之前先要把返回地址压栈。参见教材P119。"
  },
  {
    "id": "sysprinciple_q21",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "编译器在编译多个模块时，模块代码之间必须遵循的接口约定称为（　）。",
    "options": [
      "调用接口",
      "调用约定",
      "编译规范",
      "编程约定"
    ],
    "answer": "调用约定",
    "explanation": "整个程序分成若干模块后，编译器对每个模块可以分别编译。为了彼此统一，编译的模块代码之间必须遵循一些调用接口约定，这些约定称为调用约定（Calling Convention）。参见教材P119。"
  },
  {
    "id": "sysprinciple_q22",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "在过程调用中，（　）需要将被调用过程使用的通用寄存器中的值保存到栈中。",
    "options": [
      "准备阶段",
      "执行阶段",
      "结束阶段",
      "返回值处理阶段"
    ],
    "answer": "准备阶段",
    "explanation": "在被调用过程使用这些寄存器前，在准备阶段先将寄存器中的值保存到栈中，用完以后，在结束阶段再从栈中将这些值重新写回到寄存器中，这样，回到调用过程后，寄存器中存放的还是调用过程中的值。参见教材P120。"
  },
  {
    "id": "sysprinciple_q23",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "在C函数中，形式参数为（　）时，通常使用按值传递方式。",
    "options": [
      "数组类型变量名",
      "构造类型变量名",
      "指针类型变量名",
      "基本类型变量名"
    ],
    "answer": "数组类型变量名",
    "explanation": "当形参是基本类型变量名时，采用按值传递方式；当形参是指针类型变量名或构造类型变量名时，采用按地址传递方式。参见教材P125。"
  },
  {
    "id": "sysprinciple_q24",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "在C语言中，外部参照型变量和静态变量通常被分配在（　）。",
    "options": [
      "栈区",
      "堆区",
      "静态数据区",
      "代码区"
    ],
    "answer": "静态数据区",
    "explanation": "C语言中的外部参照型变量和静态变量被分配在静态数据区，而不是分配在栈中，因而这些变量在整个程序运行期间一直占据着固定的存储单元，它们具有“全局生存期”。参见教材P122。"
  },
  {
    "id": "sysprinciple_q25",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "只有（　）数组被分配在栈中，其他存储型数组都分配在静态数据区。",
    "options": [
      "静态存储型",
      "外部存储型",
      "自动存储型",
      "全局静态区"
    ],
    "answer": "自动存储型",
    "explanation": "数组可以定义为静态存储型（static）、外部存储型（extern）、自动存储型（auto）或者定义为全局静态区数组，其中，只有auto型数组被分配在栈中，其他存储型数组都分配在静态数据区。参见教材P136。"
  },
  {
    "id": "sysprinciple_q26",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "已知int array[5]={1,2,3,4,5};，且int*p=array;，则*(p+2)的值是（　）。",
    "options": [
      "1",
      "2",
      "3",
      "编译错误"
    ],
    "answer": "3",
    "explanation": "对于存储器中连续的10个int型数据，可以用数组a来说明，也可以用指针变量ptr来说明。数组变量a的值就是其首地址，即a=&a[0]，因而a =ptr，从而有&a[i]=ptr+i以及a[i]=ptr[i]=*(ptr+i)=*(a+i)。参见教材P138。"
  },
  {
    "id": "sysprinciple_q27",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "指向结构的指针实际上是指向结构体（　）。",
    "options": [
      "变量的地址",
      "第一个字节的地址",
      "字节数",
      "最后一个字节的地址"
    ],
    "answer": "第一个字节的地址",
    "explanation": "结构体中的数据成员存放在存储器中一段连续的存储区中，指向结构的指针就是其第一个字节的地址。参见教材P139。"
  },
  {
    "id": "sysprinciple_q28",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "与结构体类似的还有一种联合体数据类型，它们的主要区别是（　）。",
    "options": [
      "联合体可以有多个成员，结构体只能有一个。",
      "联合体和结构体的存储空间使用方式相同。",
      "联合体的每个成员占用各自的存储空间，结构体的成员共享存储空间。",
      "联合体的成员共享存储空间，而结构体的每个成员占用各自的存储空间。"
    ],
    "answer": "联合体的成员共享存储空间，而结构体的每个成员占用各自的存储空间。",
    "explanation": "与结构体类似的还有一种联合体数据类型，它也是不同数据类型的集合，不过它与结构体数据相比，在存储空间的使用方式上不同。结构体的每个成员占用各自的存储空间，而联合体的各个成员共享存储空间。参见教材P140。"
  },
  {
    "id": "sysprinciple_q29",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "在C语言中，（　）关键字用于声明外部存储型数组。",
    "options": [
      "extern",
      "auto",
      "static",
      "register"
    ],
    "answer": "extern",
    "explanation": "数组可以定义为静态存储型（static）、外部存储型（extern）、自动存储型（auto）或者定义为全局静态区数组。参见教材P136。"
  },
  {
    "id": "sysprinciple_q30",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "在C语言中，以下哪个关键字用于声明静态存储型数组？",
    "options": [
      "const",
      "register",
      "static",
      "volatile"
    ],
    "answer": "static",
    "explanation": "数组可以定义为静态存储型（static）、外部存储型（extern）、自动存储型（auto）或者定义为全局静态区数组。参见教材P136。"
  },
  {
    "id": "sysprinciple_q31",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "与IA-32架构相比，x86-64架构中long double型数据所分配的存储空间大小扩展为（　）。",
    "options": [
      "8字节",
      "10字节",
      "12字节",
      "16字节"
    ],
    "answer": "16字节",
    "explanation": "对于long double型数据，虽然还是采用与IA-32相同的80位扩展精度格式，但是，所分配的存储空间从IA-32的12字节大小扩展为16字节大小。参见教材P145。"
  },
  {
    "id": "sysprinciple_q32",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "在x86-64中，当不使用帧指针寄存器RBP作为栈帧底部时，（　）寄存器会被用作基址寄存器来访问栈帧中的信息。",
    "options": [
      "RSP",
      "RBP",
      "RAX",
      "RDI"
    ],
    "answer": "RSP",
    "explanation": "在x86-64中，过程调用通过寄存器传送参数，寄存器的使用约定包括：可以不用帧指针寄存器RBP作为栈帧底部，此时，使用RSP作为基址寄存器来访问栈帧中的信息，而RBP可作为普通寄存器使用。参见教材P145。"
  },
  {
    "id": "sysprinciple_q33",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "在x86-64中，（　）指令用于将一个64位立即数送到一个64位通用寄存器中。",
    "options": [
      "movl",
      "movq",
      "movabsq",
      "movzlq"
    ],
    "answer": "movabsq",
    "explanation": "在x86-64中，提供了一些在IA-32中没有的数据传送指令，例如，movabsq指令用于将一个64位立即数送到一个64位通用寄存器中。参见教材P146。"
  },
  {
    "id": "sysprinciple_q34",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "在x86-64指令集中，（　）指令用于执行两个四字（64位）数的无符号乘法。",
    "options": [
      "imulq",
      "subq",
      "mulq",
      "umulq"
    ],
    "answer": "mulq",
    "explanation": "在x86-64中，增加了操作数长度为四字的运算类指令（长度后缀为q），例如，mulq（无符号整数四字相乘）。参见教材P147。"
  },
  {
    "id": "sysprinciple_q35",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "在x86-64指令集中，（　）x86-64指令用于将四字（64位）操作数逻辑左移指定的位数。",
    "options": [
      "sal",
      "salq",
      "shl",
      "shlq"
    ],
    "answer": "salq",
    "explanation": "在x86-64中，增加了操作数长度为四字的运算类指令（长度后缀为q），例如，salq（算术左移）。参见教材P147。"
  },
  {
    "id": "sysprinciple_q36",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "在x86-64架构中，long型、double型数据和指针型变量必须按（　）边界对齐。",
    "options": [
      "1字节",
      "2字节",
      "4字节",
      "8字节"
    ],
    "answer": "8字节",
    "explanation": "因为x86-64中存储器的访问接口被设计成按8字节或16字节为单位进行存取，其对齐规则是，任何K字节宽的基本数据类型和指针类型数据的起始地址一定是K的倍数。因此，long型、double型数据和指针型变量都必须按8字节边界对齐；long double型数据必须按16字节边界对齐。参见教材P147。"
  },
  {
    "id": "sysprinciple_q37",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "根据冯·诺依曼结构的基本思想，不是计算机五大基本部件之一的是（　）。",
    "options": [
      "运算器",
      "控制器",
      "显示器",
      "存储器"
    ],
    "answer": "显示器",
    "explanation": "计算机由运算器、控制器、存储器、输入设备和输出设备五大基本部件组成。参见教材P26。"
  },
  {
    "id": "sysprinciple_q38",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "使用特定计算机规定的指令格式而形成的0/1序列称为（　）。",
    "options": [
      "机器语言",
      "低级语言",
      "高级语言",
      "源语言"
    ],
    "answer": "机器语言",
    "explanation": "使用特定计算机规定的指令格式而形成的0/1序列称为机器语言。参见教材P30。"
  },
  {
    "id": "sysprinciple_q39",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "人们看到的各种芯片、板卡、外设、电缆等都是计算机硬件，硬件是（　）的总称。",
    "options": [
      "物理装置",
      "应用软件",
      "系统软件",
      "操作系统"
    ],
    "answer": "物理装置",
    "explanation": "硬件是物理装置的总称，人们看到的各种芯片、板卡、外设、电缆等都是计算机硬件。参见教材P36。"
  },
  {
    "id": "sysprinciple_q40",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "可以评判两台计算机性能的优劣的是（　）。",
    "options": [
      "用户CPU时间",
      "系统CPU时间",
      "时钟周期",
      "时钟频率"
    ],
    "answer": "用户CPU时间",
    "explanation": "有了用户CPU时间，就可以评判两台计算机性能的优劣。参见教材P41。"
  },
  {
    "id": "sysprinciple_q41",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "结果是否为0（零标志ZF）、是否为负数(符号标志SF)等，这些标志信息需要记录在（　）。",
    "options": [
      "标志寄存器",
      "指令寄存器",
      "程序计数器",
      "中央处理器"
    ],
    "answer": "标志寄存器",
    "explanation": "结果是否为0（零标志ZF）、是否为负数(符号标志SF)等，这些标志信息需要记录在专门的标志寄存器中。参见教材P27。"
  },
  {
    "id": "sysprinciple_q42",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "从主存取来的指令需要临时保存在（　）。",
    "options": [
      "标志寄存器",
      "指令寄存器",
      "程序计数器",
      "中央处理器"
    ],
    "answer": "指令寄存器",
    "explanation": "从主存取来的指令需要临时保存在指令寄存器中。参见教材P27。"
  },
  {
    "id": "sysprinciple_q43",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "计算机能理解和执行的程序称为机器代码或机器语言程序，其中的每条指令都由0和1组成，称为（　）。",
    "options": [
      "目标指令",
      "汇编指令",
      "源程序指令",
      "机器指令"
    ],
    "answer": "机器指令",
    "explanation": "计算机能理解和执行的程序称为机器代码或机器语言程序，其中的每条指令都由0和1组成，称为机器指令。参见教材P30。"
  },
  {
    "id": "sysprinciple_q44",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "汇编语言和机器语言都属于低级语言，它们统称为（　）。",
    "options": [
      "低级程序设计语言",
      "高级程序设计语言",
      "机器级语言",
      "源语言"
    ],
    "answer": "机器级语言",
    "explanation": "汇编语言和机器语言都属于低级语言，它们统称为机器级语言。参见教材P30。"
  },
  {
    "id": "sysprinciple_q45",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "语言标准规范中没有强制规定程序行为，而是列出多种结果供编译器选择，不同编译器可能选择不同行为结果，这种行为是（　）。",
    "options": [
      "未定义行为",
      "未指定行为",
      "实现定义行为",
      "标准规范行为"
    ],
    "answer": "未指定行为",
    "explanation": "未指定行为是指语言标准规范中没有强制规定程序行为，而是列出多种结果供编译器选择，不同编译器可能选择不同行为结果。参见教材P38。"
  },
  {
    "id": "sysprinciple_q46",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "下列不属于ISA的定义的是（　）。",
    "options": [
      "一台计算机可以执行的所有指令的集合",
      "每条指令执行什么操作",
      "所处理的操作数存放的地址空间",
      "程序语言的规范"
    ],
    "answer": "程序语言的规范",
    "explanation": "ISA是对指令系统的一种规定，ISA定义了一台计算机可以执行的所有指令的集合，以及每条指令执行什么操作、所处理的操作数存放的地址空间和操作数类型等。参见教材P39。"
  },
  {
    "id": "sysprinciple_q47",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "计算机系统的性能评价主要考虑的是（　）。",
    "options": [
      "吞吐率",
      "CPI",
      "CPU性能",
      "相对MIPS"
    ],
    "answer": "CPU性能",
    "explanation": "计算机系统的性能评价主要考虑的是CPU性能。参见教材P40。"
  },
  {
    "id": "sysprinciple_q48",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "等待I/O操作完成的时间或CPU用于执行其他用户程序的时间，被称为（　）。",
    "options": [
      "其他时间",
      "执行时间",
      "等待时间",
      "响应时间"
    ],
    "answer": "其他时间",
    "explanation": "其他时间指等待I/O操作完成的时间或CPU用于执行其他用户程序的时间。参见教材P40。"
  },
  {
    "id": "sysprinciple_q49",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "在汇编语言中，当一条指令引用了一个标号，这个标号的作用是（　）。",
    "options": [
      "指定指令的操作数",
      "表示目标指令的地址",
      "定义变量的存储位置",
      "标记循环的开始"
    ],
    "answer": "表示目标指令的地址",
    "explanation": "在汇编语言代码中，可以用一个标号表示某个跳转目标指令的地址（即给定了一个标号的定义），而在另一条跳转指令中引用该标号；也可以用一个标号表示某个操作数的地址，而在某条使用该操作数的指令中引用该标号。参见教材P159。"
  },
  {
    "id": "sysprinciple_q50",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "链接器在将多个可重定位文件组合成一个可执行文件时，完成的任务是（　）。",
    "options": [
      "将汇编语言翻译成机器语言",
      "符号解析和重定位",
      "检查代码中的语法错误",
      "优化代码的执行效率"
    ],
    "answer": "符号解析和重定位",
    "explanation": "链接器在将多个可重定位文件组合成一个可执行文件时，主要完成符号解析和重定位两个任务。参见教材P162。"
  },
  {
    "id": "sysprinciple_q51",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "可重定位目标文件和可执行文件的不同是（　）。",
    "options": [
      "可重定位目标文件只能包含一个模块，而可执行文件可以包含多个模块",
      "可重定位目标文件是机器语言代码，而可执行文件不是",
      "前者是单个模块生成的，而后者是多个模块组合而成的",
      "可重定位目标文件可以直接运行，而可执行文件需要经过链接"
    ],
    "answer": "前者是单个模块生成的，而后者是多个模块组合而成的",
    "explanation": "可重定位文件和可执行文件都是机器语言目标文件，所不同的是前者是单个模块生成的，而后者是多个模块组合而成的。参见教材P161。"
  },
  {
    "id": "sysprinciple_q52",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "可重定位目标文件中的代码总是从（　）开始。",
    "options": [
      "0",
      "ABI规范规定的地址",
      "随机地址",
      "由链接器决定的地址"
    ],
    "answer": "0",
    "explanation": "可重定位文件和可执行文件都是机器语言目标文件，所不同的是前者是单个模块生成的，而后者是多个模块组合而成的。因而，对于前者，代码总是从0开始，而对于后者，代码在ABI规范规定的虚拟地址空间中产生。参见教材P161。"
  },
  {
    "id": "sysprinciple_q53",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "在程序中，可以被视为符号的是（　）。",
    "options": [
      "函数内的局部变量",
      "全局静态变量",
      "函数的形参",
      "函数内的静态局部变量"
    ],
    "answer": "全局静态变量",
    "explanation": "符号包括全局静态变量名和函数名,而非静态局郡变量名则不是符号。参见教材P162。"
  },
  {
    "id": "sysprinciple_q54",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "在生成单个模块的机器语言目标代码时，不能确定每条指令或每个数据的最终地址的原因是（　）。",
    "options": [
      "最终的可执行文件不需要这些地址",
      "每个模块的大小是不确定的",
      "最终的可执行文件是由多个不同模块的机器语言目标代码组合而成",
      "编译器不支持地址分配"
    ],
    "answer": "最终的可执行文件是由多个不同模块的机器语言目标代码组合而成",
    "explanation": "因为通常最终的可执行文件由多个不同模块对应的机器语言目标代码组合而成，所以，在生成单个模块的机器语言目标代码时，不可能确定每条指令或每个数据最终的地址，即单个模块的机器语言目标代码需要重新定位，因此，通常把汇编生成的机器语言目标文件称为可重定位目标文件。参见教材P160。"
  },
  {
    "id": "sysprinciple_q55",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "编译器处理源程序的方式是（　）。",
    "options": [
      "一次性读取整个源程序并完成所有任务",
      "对源程序进行多次扫描，每次扫描完成特定的任务",
      "只进行一次扫描，但同时完成所有任务",
      "不扫描源程序，而是直接生成目标代码"
    ],
    "answer": "对源程序进行多次扫描，每次扫描完成特定的任务",
    "explanation": "编译器通常采用对源程序进行多次扫描的方式进行处理,每次扫描集中完成一项或几项任务,也可以将一项任务分散到几次扫描去完成。参见教材P160。"
  },
  {
    "id": "sysprinciple_q56",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "在目标文件中唯一与运行时相关的要素是（　）。",
    "options": [
      "注释和宏定义",
      "源代码和预处理器指令",
      "机器代码及其使用的数据",
      "符号表和重定位信息"
    ],
    "answer": "机器代码及其使用的数据",
    "explanation": "目标文件中唯一与运行时相关的要素是机器代码及其使用的数据。参见教材P163。"
  },
  {
    "id": "sysprinciple_q57",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "关于可重定位文件和程序头表，以下说法正确的是（　）。",
    "options": [
      "可重定位文件必须包含节头表和程序头表",
      "可重定位文件必须包含节头表，但无需程序头表",
      "可重定位文件无需包含节头表和程序头表",
      "可重定位文件必须包含程序头表，但无需节头表"
    ],
    "answer": "可重定位文件必须包含节头表，但无需程序头表",
    "explanation": "可重定位文件就一定要有节头表。程序头表用来指示系统如何创建进程的存储器映像，用于创建进程存储映像的可执行文件和共享库文件必须具有程序头表，而可重定位目标文件无需程序头表。参见教材P164。"
  },
  {
    "id": "sysprinciple_q58",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "关于ELF头的描述，以下正确的是（　）。",
    "options": [
      "ELF头只存在于32位系统的可执行文件中",
      "ELF头位于目标文件的末尾位置",
      "ELF头位于目标文件的起始位置，包含文件结构说明信息",
      "ELF头的数据结构在32位和64位系统中完全相同"
    ],
    "answer": "ELF头位于目标文件的起始位置，包含文件结构说明信息",
    "explanation": "ELF头位于目标文件的起始位置，包含文件结构说明信息。ELF头的数据结构分32位系统对应结构和64位系统对应结构。参见教材P164。"
  },
  {
    "id": "sysprinciple_q59",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "关于ELF文件结构，以下正确的是（　）。",
    "options": [
      "ELF头的位置在文件中是可变的",
      "节头表的位置总是紧随ELF头之后",
      "除了ELF头之外，ELF文件的其他部分不需要具有固定的顺序",
      "节头表的位置是由程序头表决定的"
    ],
    "answer": "除了ELF头之外，ELF文件的其他部分不需要具有固定的顺序",
    "explanation": "仅ELF头在文件中具有固定位置，即总是在最开始的位置，其他部分的位置由ELF头和节头表指出，不需要具有固定的顺序。参见教材P165。"
  },
  {
    "id": "sysprinciple_q60",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "关于节头表的描述，以下正确的是（　）。",
    "options": [
      "节头表只描述了节的名称和大小",
      "节头表中的每个表项对应目标文件中的一个节",
      "节头表位于ELF头之前",
      "节头表不是ELF可重定位目标文件的重要组成部分"
    ],
    "answer": "节头表中的每个表项对应目标文件中的一个节",
    "explanation": "节头表由若干个表项组成，每个表项描述相应节的节名、在文件中的偏移、大小、访问属性、对齐方式等，目标文件中的每个节都有一个表项与之对应。除ELF头之外，节头表是ELF可重定位目标文件中最重要的一部分内容。参见教材P166。"
  },
  {
    "id": "sysprinciple_q61",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "关于ELF头中的字段e_entry，以下描述正确的是（　）。",
    "options": [
      "e_entry给出程序执行入口地址，可重定位文件中此字段为0",
      "e_entry字段在可重定位文件中指示程序的入口地址",
      "e_entry字段在所有类型的ELF文件中都必须有非零值",
      "e_entry字段仅在可执行文件中存在"
    ],
    "answer": "e_entry给出程序执行入口地址，可重定位文件中此字段为0",
    "explanation": "ELF头中字段e_entry给出程序执行入口地址，可重定位文件中此字段为0。参见教材P168。"
  },
  {
    "id": "sysprinciple_q62",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "对于特定系统，可执行文件与虚拟地址空间之间的存储器映像由（　）定义。",
    "options": [
      "操作系统内核",
      "ABI规范",
      "编译器",
      "链接器"
    ],
    "answer": "ABI规范",
    "explanation": "对于特定系统，可执行文件与虚拟地址空间之间的存储器映像由ABI规范定义。参见教材P170。"
  },
  {
    "id": "sysprinciple_q63",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "对于在同一个模块中定义且引用的本地符号，链接器处理符号解析的方式是（　）。",
    "options": [
      "链接器会检查每个模块中的本地符号是否有多个定义",
      "链接器会自动选择第一个本地定义符号与之关联",
      "链接器会报错，因为本地符号不能在同一模块中定义和引用",
      "链接器不需要解析本地符号"
    ],
    "answer": "链接器会自动选择第一个本地定义符号与之关联",
    "explanation": "对于在同一个模块中定义且引用的本地符号的符号解析比较容易，因为编译器会检查每个模块中的本地符号是否具有唯一的定义，所以只要找到第一个本地定义符号与之关联即可。参见教材P173。"
  },
  {
    "id": "sysprinciple_q64",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "编译器在处理源程序时，处理全局符号的定义的方式是（　）。",
    "options": [
      "编译器会将每个全局符号的定义直接写入可执行文件中",
      "编译器会将每个全局符号的定义输出到汇编代码文件中",
      "编译器会忽略全局符号的定义",
      "编译器会将全局符号的定义直接嵌入到源程序中"
    ],
    "answer": "编译器会将每个全局符号的定义输出到汇编代码文件中",
    "explanation": "编译器在对源程序编译时，会把每个全局符号的定义输出到汇编代码文件中，汇编器通过对汇编代码文件的处理，在可重定位文件的符号表中记录全局符号的特性，以供链接时全局符号的符号解析所用。参见教材P173。"
  },
  {
    "id": "sysprinciple_q65",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "在构建可执行文件时，链接器处理静态库文件的方式是（　）。",
    "options": [
      "链接器会自动提取静态库中的所有目标模块",
      "链接器会自动提取静态库中应用程序用到的目标模块",
      "链接器需要显式指定要提取的目标模块",
      "链接器不处理静态库文件"
    ],
    "answer": "链接器会自动提取静态库中应用程序用到的目标模块",
    "explanation": "在构建可执行文件时只需指定静态库文件名，链接器会自动到库中寻找那些在应用程序中用到的目标模块，并且只把用到的模块从库中提取出来，和应用程序模块进行链接。参见教材P175。"
  },
  {
    "id": "sysprinciple_q66",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "链接器在进行符号解析时，处理命令的顺序是（　）。",
    "options": [
      "忽略输入文件的顺序",
      "按照输入文件的逆序",
      "按照输入文件的顺序",
      "随机处理输入文件的顺序"
    ],
    "answer": "按照输入文件的顺序",
    "explanation": "链接器进行符号解析时会根据命令中指定的输入文件顺序进行处理。参见教材P176。"
  },
  {
    "id": "sysprinciple_q67",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "在链接过程中，链接器确定符号的存储地址的方式是（　）。",
    "options": [
      "根据符号在源文件中的位置",
      "根据符号在合并后的新节中的位置及新节在虚拟地址空间中的起始位置",
      "根据符号在用户指定的地址",
      "根据符号在链接器默认分配的地址"
    ],
    "answer": "根据符号在合并后的新节中的位置及新节在虚拟地址空间中的起始位置",
    "explanation": "链接器将相互关联的所有可重定位文件中相同类型的节合并，生成一个同一类型的新节，并根据合并后的新节在虚拟地址空间中的起始位置以及新节中定义的每个符号的位置，确定每个符号的存储地址。参见教材P177。"
  },
  {
    "id": "sysprinciple_q68",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "在静态链接方式下，库函数代码被合并在可执行文件中，这会导致（　）。",
    "options": [
      "提高程序的加载速度",
      "减少磁盘空间的使用",
      "导致盘空间和主存空间的浪费",
      "提高程序的执行效率"
    ],
    "answer": "导致盘空间和主存空间的浪费",
    "explanation": "静态链接方式，因为库函数代码被合并在可执行文件中，因而会造成盘空间和主存空间的浪费。参见教材P180。"
  },
  {
    "id": "sysprinciple_q69",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "动态链接的两种方式是（　）。",
    "options": [
      "在程序编译过程中加载和链接共享库，在程序执行过程中加载并链接共享库",
      "在程序加载过程中加载和链接共享库，在程序执行过程中加载并链接共享库",
      "在程序编译过程中加载和链接共享库，在程序链接过程中加载并链接共享库",
      "在程序加载过程中加载和链接共享库，在程序链接过程中加载并链接共享库"
    ],
    "answer": "在程序加载过程中加载和链接共享库，在程序执行过程中加载并链接共享库",
    "explanation": "动态链接有两种方式，一种是在程序加载过程中加载和链接共享库，另一种是在程序执行过程中加载并链接共享库。参见教材P181。"
  },
  {
    "id": "sysprinciple_q70",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "现代多任务操作系统环境下，关于进程的描述，下列说法正确的是（　）。",
    "options": [
      "任何时候仅有一个进程在系统中运行",
      "进程之间不能共享主存资源",
      "多个进程轮流使用处理器并共享同一个主存",
      "进程直接与硬件交互，无需操作系统干预"
    ],
    "answer": "多个进程轮流使用处理器并共享同一个主存",
    "explanation": "对于现代多任务操作系统，通常一段时间内会有多个不同的进程在系统中运行，这些进程轮流使用处理器并共享同一个主存。参见教材P181。"
  },
  {
    "id": "sysprinciple_q71",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "以下最能准确反映PID的含义的是（　）。",
    "options": [
      "PID是一个负整数，用于标识进程",
      "PID是一个唯一的正整数，用于标识进程",
      "PID是一个字符串，用于标识进程",
      "PID是一个浮点数，用于标识进程"
    ],
    "answer": "PID是一个唯一的正整数，用于标识进程",
    "explanation": "通常用一个唯一的正整数标识一个进程，称为进程ID，简写为PID。参见教材P184。"
  },
  {
    "id": "sysprinciple_q72",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "execve函数的功能是（　）。",
    "options": [
      "在一个新的进程中创建并运行一个新程序",
      "在当前进程的上下文中加载并运行一个新程序",
      "创建一个子线程来运行一个新程序",
      "在父进程中创建一个子进程，并在子进程中运行一个新程序"
    ],
    "answer": "在当前进程的上下文中加载并运行一个新程序",
    "explanation": "execve函数的功能是在当前进程的上下文中加载并运行一个新程序。参见教材P183。"
  },
  {
    "id": "sysprinciple_q73",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "在编程环境中，符号_start处定义的启动代码主要是一系列（　）。",
    "options": [
      "函数定义",
      "过程调用",
      "变量声明",
      "循环结构"
    ],
    "answer": "过程调用",
    "explanation": "符号_start处定义的启动代码主要是一系列过程调用。参见教材P183。"
  },
  {
    "id": "sysprinciple_q74",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "通过fork函数创建的子进程与父进程之间（　）是不同的。",
    "options": [
      "只读代码段的内容",
      "用户栈的初始状态",
      "进程的PID",
      "打开文件描述符表的内容"
    ],
    "answer": "进程的PID",
    "explanation": "新创建的子进程和父进程之间最大的差别是它们的PID不同。参见教材P185。"
  },
  {
    "id": "sysprinciple_q75",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "在运行过程中，一旦CPU检测到所访问的指令或数据不在主存（即缺页），则（　）。",
    "options": [
      "操作系统立即终止该进程",
      "CPU自动从辅存中加载所需信息",
      "调用用户程序中的错误处理函数",
      "调用操作系统内核中的缺页处理程序执行"
    ],
    "answer": "调用操作系统内核中的缺页处理程序执行",
    "explanation": "在运行过程中，一旦CPU检测到所访问的指令或数据不在主存（即缺页），则调用操作系统内核中的缺页处理程序执行。参见教材P185。"
  },
  {
    "id": "sysprinciple_q76",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "在操作系统中，当加载器完成加载任务后，它将程序计数器PC设置为指向（　），标志着a.out程序开始在其新进程的上下文中执行。",
    "options": [
      "程序的main函数入口",
      "符号_init处",
      "符号_start处",
      "动态链接库的起始地址"
    ],
    "answer": "符号_start处",
    "explanation": "当加载器执行完加载任务后，便将PC设定指向程序入口点（即符号_start处），从而开始转到a.out程序执行，从此，a.out程序开始在新进程的上下文中运行。参见教材P185。"
  },
  {
    "id": "sysprinciple_q77",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "当一个可执行文件被系统加载并准备执行时，CPU就会（　）。",
    "options": [
      "随机从可执行文件的任意位置开始执行",
      "从可执行文件的数据段开始顺序执行",
      "按照可执行文件只读代码段中指令的顺序执行",
      "先执行可执行文件的注释部分"
    ],
    "answer": "按照可执行文件只读代码段中指令的顺序执行",
    "explanation": "可执行文件被启动加载后，CPU就会按照可执行文件只读代码段中指令给定的顺序执行。参见教材P185。"
  },
  {
    "id": "sysprinciple_q78",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "CPU的基本功能是（　）。",
    "options": [
      "仅进行数学运算",
      "周期性地执行硬件自检",
      "不断循环处理数据，但不执行指令",
      "周而复始地执行指令"
    ],
    "answer": "周而复始地执行指令",
    "explanation": "CPU的基本职能是周而复始地执行指令。参见教材P187。"
  },
  {
    "id": "sysprinciple_q79",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "在计算机体系结构中，PC常被称为指令计数器或指令指针寄存器（IP），它的主要作用是（　）。",
    "options": [
      "保存正在执行指令的地址",
      "记录已执行指令的数量",
      "存放即将执行指令的地址",
      "指向最近使用的数据缓存位置"
    ],
    "answer": "存放即将执行指令的地址",
    "explanation": "PC又称指令计数器或指令指针寄存器（IP），用来存放即将执行指令的地址。参见教材P188。"
  },
  {
    "id": "sysprinciple_q80",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "在计算机系统中，（　）对IR中的操作码部分进行译码，产生的译码信号提供给操作控制信号形成部件，以产生控制信号。",
    "options": [
      "算术逻辑单元（ALU）",
      "指令寄存器（IR）自身",
      "指令译码器（ID）",
      "程序状态字寄存器（PSWR）"
    ],
    "answer": "指令译码器（ID）",
    "explanation": "ID对IR中的操作码部分进行译码，产生的译码信号提供给操作控制信号形成部件，以产生控制信号。参见教材P188。"
  },
  {
    "id": "sysprinciple_q81",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "在计算机系统中，（　）对IR中的操作码部分进行译码，产生的译码信号提供给操作控制信号形成部件，以产生控制信号。",
    "options": [
      "算术逻辑单元（ALU）",
      "指令寄存器（IR）自身",
      "指令译码器（ID）",
      "程序状态字寄存器（PSWR）"
    ],
    "answer": "指令译码器（ID）",
    "explanation": "ID对IR中的操作码部分进行译码，产生的译码信号提供给操作控制信号形成部件，以产生控制信号。参见教材P188。"
  },
  {
    "id": "sysprinciple_q82",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "在计算机系统中，（　）负责产生CPU所需的时钟信号。",
    "options": [
      "随机数发生器",
      "晶体振荡器",
      "脉冲源",
      "电压调节器"
    ],
    "answer": "脉冲源",
    "explanation": "脉冲源产生一定频率的脉冲信号作为CPU的时钟信号。参见教材P188。"
  },
  {
    "id": "sysprinciple_q83",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "在计算机系统中，（　）负责产生CPU所需的时钟信号。",
    "options": [
      "随机数发生器",
      "晶体振荡器",
      "脉冲源",
      "电压调节器"
    ],
    "answer": "脉冲源",
    "explanation": "脉冲源产生一定频率的脉冲信号作为CPU的时钟信号。参见教材P188。"
  },
  {
    "id": "sysprinciple_q84",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "在计算机系统中，启停控制逻辑在需要时能（　）。",
    "options": [
      "通过调整电源电压来控制计算机的开关",
      "直接操纵硬盘读写头的移动来启动或停止系统",
      "保证可靠地开放或封锁时钟信号，实现对机器的启动与停机",
      "通过监控外部环境温度来决定计算机的运行状态"
    ],
    "answer": "保证可靠地开放或封锁时钟信号，实现对机器的启动与停机",
    "explanation": "启停控制逻辑在需要时能保证可靠地开放或封锁时钟信号，实现对机器的启动与停机。参见教材P188。"
  },
  {
    "id": "sysprinciple_q85",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "在计算机系统架构的数据通路中，负责数据运算的部件的部件称为（　）。",
    "options": [
      "运算器",
      "执行元件",
      "寄存器组",
      "控制器"
    ],
    "answer": "执行元件",
    "explanation": "通常把数据通路中专门进行数据运算的部件称为执行元件或功能元件，数据通路由控制元件（也称控制器）进行控制。参见教材P191。"
  },
  {
    "id": "sysprinciple_q86",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "在计算机系统中，启停控制逻辑在需要时能（　）。",
    "options": [
      "通过调整电源电压来控制计算机的开关",
      "直接操纵硬盘读写头的移动来启动或停止系统",
      "保证可靠地开放或封锁时钟信号，实现对机器的启动与停机",
      "通过监控外部环境温度来决定计算机的运行状态"
    ],
    "answer": "保证可靠地开放或封锁时钟信号，实现对机器的启动与停机",
    "explanation": "启停控制逻辑在需要时能保证可靠地开放或封锁时钟信号，实现对机器的启动与停机。参见教材P188。"
  },
  {
    "id": "sysprinciple_q87",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "在计算机系统架构的数据通路中，负责数据运算的部件的部件称为（　）。",
    "options": [
      "运算器",
      "执行元件",
      "寄存器组",
      "控制器"
    ],
    "answer": "执行元件",
    "explanation": "通常把数据通路中专门进行数据运算的部件称为执行元件或功能元件，数据通路由控制元件（也称控制器）进行控制。参见教材P191。"
  },
  {
    "id": "sysprinciple_q88",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "在计算机内部，所有信息采用二进制表示的主要原因是（　）。",
    "options": [
      "二进制更容易被人类理解",
      "二进制在计算机硬件中更容易实现",
      "二进制能表示更多的信息",
      "二进制便于进行数学运算"
    ],
    "answer": "二进制在计算机硬件中更容易实现",
    "explanation": "计算机内部采用二进制表示信息的主要原因是二进制只有两种基本状态（0和1），这使得使用有两个稳定状态的物理器件（如晶体管）能够容易地表示二进制数的每一位。此外，二进制的编码、计数和运算规则相对简单，也促进了其在计算机中的广泛应用。参见教材P47。"
  },
  {
    "id": "sysprinciple_q89",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "在相同字长下，无符号整数与带符号整数相比，其能表示的最大数的特点是（　）。",
    "options": [
      "无符号整数能表示的最大数比带符号整数小",
      "无符号整数能表示的最大数与带符号整数相同",
      "无符号整数能表示的最大数比带符号整数大",
      "无法确定，取决于具体的编码方式"
    ],
    "answer": "无符号整数能表示的最大数比带符号整数大",
    "explanation": "无符号整数没有符号位，在字长相同的情况下，它能表示的最大数比带符号整数所能表示的大，n位无符号整数可表示的数的范围为0~(2n-1)。参见教材P54。"
  },
  {
    "id": "sysprinciple_q90",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "在IEEE754标准中，32位单精度浮点数的表示中，尾数实际上有（　）位有效数字来表示（考虑到隐藏位）。",
    "options": [
      "22位",
      "23位",
      "24位",
      "25位"
    ],
    "answer": "24位",
    "explanation": "在IEEE754标准中，32位单精度浮点数格式包含1位符号位、8位阶码和23位尾数。然而，由于尾数首位总是1（这被称为隐藏位），因此实际上可以用这23位尾数加上这个隐藏的1位来表示一个24位的二进制数，即24位有效数字。参见教材P58。"
  },
  {
    "id": "sysprinciple_q91",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "在计算机中，逻辑值主要用于（　）类型的数据操作。",
    "options": [
      "数值计算",
      "逻辑运算",
      "图形处理",
      "文本编辑"
    ],
    "answer": "逻辑运算",
    "explanation": "逻辑值通常用于逻辑运算，如按位“与”、按位“或”、逻辑左移、逻辑右移等。这些操作都是针对二进制数据的每一位进行的，而不是用于数值计算、图形处理或文本编辑。参见教材P63。"
  },
  {
    "id": "sysprinciple_q92",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "在Intel x86架构的计算机中，数据的存储方式通常是（　）。",
    "options": [
      "大端方式",
      "小端方式",
      "字节序无关",
      "自定义方式"
    ],
    "answer": "小端方式",
    "explanation": "Intel x86架构的计算机采用小端方式来存储数据，即最低有效字节（LSB）存放在低地址，最高有效字节（MSB）存放在高地址。参见教材P66。"
  },
  {
    "id": "sysprinciple_q93",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "在n位加法器中，如果采用串行进位方式，其主要的缺点是（　）。",
    "options": [
      "功耗大",
      "占用面积大",
      "运算速度慢",
      "稳定性差"
    ],
    "answer": "运算速度慢",
    "explanation": "串行进位方式意味着每一位的进位依赖于前一位的进位结果，这导致在加法运算过程中，每一位的计算都需要等待前一位的进位结果，从而降低了整体的运算速度。因此，主要缺点是运算速度慢。参见教材P69。"
  },
  {
    "id": "sysprinciple_q94",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "在原码乘法运算中，两个数的乘积的符号位是由（　）决定的。",
    "options": [
      "两个乘数符号位的与运算",
      "两个乘数符号位的或运算",
      "两个乘数符号位的异或运算",
      "乘积的数值部分的最高位"
    ],
    "answer": "两个乘数符号位的异或运算",
    "explanation": "在原码乘法运算中，乘积的符号位是由两个乘数的符号位通过异或运算得到的。这是因为异或运算能够正确地反映出两个数的符号组合情况（正正得正、负负得正、正负得负、负正得负），从而确定乘积的符号。参见教材P73。"
  },
  {
    "id": "sysprinciple_q95",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "在IEEE 754标准中，进行浮点数运算时，为了保证运算精度，中间结果需要保留（　）位附加位。",
    "options": [
      "1",
      "2",
      "3",
      "根据需要动态确定"
    ],
    "answer": "2",
    "explanation": "IEEE 754标准规定，所有浮点数运算的中间结果右边都必须至少额外保留两位附加位。这两位附加位中，紧跟在浮点数尾数右边那一位为保护位或警戒位，用以保护尾数右移的位；紧跟保护位右边的是舍入位，左规时可以根据其值进行舍入。为了更进一步提高计算精度，还可以引入粘位，但这不是必需的。因此，正确答案是B，即保留2位附加位。参见教材P82。"
  },
  {
    "id": "sysprinciple_q96",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "表示一个数值数据要确定的要素不包括（　）。",
    "options": [
      "进位记数制",
      "定/浮点表示",
      "编码规则",
      "字节长度"
    ],
    "answer": "字节长度",
    "explanation": "表示一个数值数据要确定三个要素：进位记数制、定/浮点表示和编码规则。参见教材P47。"
  },
  {
    "id": "sysprinciple_q97",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "(1011)2转换为十进制数为（　）。",
    "options": [
      "10",
      "11",
      "12",
      "13"
    ],
    "answer": "11",
    "explanation": "(1011)2=1×23+0×22+1×21+1×20=11。参见教材P49。"
  },
  {
    "id": "sysprinciple_q98",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "(BAD)16转换为十进制为（　）。",
    "options": [
      "2898",
      "2989",
      "2998",
      "3848"
    ],
    "answer": "2989",
    "explanation": "(BAD)16=11×162+10×161+13×160=2989。参见教材P49。"
  },
  {
    "id": "sysprinciple_q99",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "十进制106转为二进制为（　）。",
    "options": [
      "1101010",
      "1101001",
      "1001010",
      "1011101"
    ],
    "answer": "1101010",
    "explanation": "除基取余,上右下左。参见教材P49。"
  },
  {
    "id": "sysprinciple_q100",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "在浮点数表示中，采用移码表示阶码的主要目的是（　）。",
    "options": [
      "扩大浮点数的表示范围",
      "简化浮点数的加减运算中的对阶操作",
      "增加浮点数的精度",
      "方便浮点数的乘法运算"
    ],
    "answer": "简化浮点数的加减运算中的对阶操作",
    "explanation": "移码表示阶码的主要目的是为了简化浮点数的加减运算中的对阶操作。通过将所有的阶码都转换为正整数（通过加上偏置常数），可以直接按位从左到右进行比对，而不需要考虑阶的符号，从而简化了对阶的过程。参见教材P54。"
  },
  {
    "id": "sysprinciple_q101",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "若一个8位无符号整数的二进制表示为11111111，则它表示的十进制数值是（　）。",
    "options": [
      "127",
      "255",
      "-1",
      "0"
    ],
    "answer": "255",
    "explanation": "8位无符号整数11111111的二进制转十进制计算为1*2^7+1*2^6+1*2^5+1*2^4+1*2^3+1*2^2+1*2^1+1*2^0=255。由于是无符号整数，所有位都用于表示数值，不涉及负数表示。参见教材P55。"
  },
  {
    "id": "sysprinciple_q102",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "在IEEE754标准中，若一个浮点数的阶码全为1（对于单精度格式），这通常表示（　）。",
    "options": [
      "该数为0",
      "该数为无穷大或NaN（非数字）",
      "该数为规格化的最大正数",
      "该数为非规格化的数"
    ],
    "answer": "该数为无穷大或NaN（非数字）",
    "explanation": "在IEEE754标准中，阶码全为1的特殊情况用于表示无穷大（当尾数全为0时）或非数字NaN（当尾数不全为0时）。这些值用于表示超出浮点数表示范围或运算结果未定义的情况。参见教材P59。"
  },
  {
    "id": "sysprinciple_q103",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "在ASCII码表中，一个字符通常占用（　）位二进制数表示。",
    "options": [
      "6",
      "7",
      "8",
      "16"
    ],
    "answer": "8",
    "explanation": "ASCII码表中，虽然字符的编码值实际上是7位二进制数（足够表示128个不同的字符），但在计算机内部，一个字符通常使用8位（即一个字节）来表示，以便与计算机内存和处理器的基本操作单位对齐。最高位（第8位）在标准ASCII码中通常为0，但在需要时可用于奇偶校验。参见教材P64。"
  },
  {
    "id": "sysprinciple_q104",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "在计算机中，汉字的输入码又称为（　）。",
    "options": [
      "内码",
      "外码",
      "字形码",
      "区位码"
    ],
    "answer": "外码",
    "explanation": "汉字的输入码，也称为外码，是指利用键盘等设备输入汉字时，根据一定的编码规则对汉字进行编码的表示方法。内码是汉字在计算机内部存储、处理时使用的编码；字形码用于描述汉字的字形；区位码则是用于汉字编码字符集中每个字符的唯一位置编码，但它不是输入码。参见教材P64。"
  },
  {
    "id": "sysprinciple_q105",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "下列不是汉字信息处理过程中常用的汉字代码是（　）。",
    "options": [
      "输入码",
      "内码",
      "ASCII码",
      "字形码"
    ],
    "answer": "ASCII码",
    "explanation": "ASCII码是美国信息交换标准代码，用于表示英文字符和一些控制字符，并不是汉字信息处理过程中特有的或常用的汉字代码。输入码、内码和字形码都是汉字信息处理过程中需要处理的汉字代码。参见教材P64。"
  },
  {
    "id": "sysprinciple_q106",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "GB2312-80标准中，汉字的区位码转换为内码时，需要在区号和位号上各自加上（　），并将两个字节的最高位置1。",
    "options": [
      "31",
      "32",
      "33",
      "34"
    ],
    "answer": "32",
    "explanation": "GB2312-80标准中，汉字的区位码转换为内码时，需要在区号和位号上各自加上32，并将两个字节的最高位（即最左边的位）置1。这样可以确保内码与ASCII码不冲突，因为ASCII码的最高位是0。参见教材P65。"
  },
  {
    "id": "sysprinciple_q107",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "若一个32位的整数在内存中的地址为0x1000，且该整数在小端方式下存储的值为0x12345678，则地址0x1003中存储的字节是（　）。",
    "options": [
      "0x12",
      "0x34",
      "0x56",
      "0x78"
    ],
    "answer": "0x12",
    "explanation": "在小端方式下，最低有效字节（LSB）存放在低地址。因此，对于32位整数0x12345678，其字节顺序从低到高依次是78,56,34,12。所以地址0x1003中存储的字节是0x12。参见教材P66。"
  },
  {
    "id": "sysprinciple_q108",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "在计算机中，字节（Byte）和位（Bit）的关系是（　）。",
    "options": [
      "1Byte=2Bit",
      "1Byte=4Bit",
      "1Byte=8Bit",
      "1Byte=16Bit"
    ],
    "answer": "1Byte=8Bit",
    "explanation": "在计算机中，一个字节（Byte）等于8个位（Bit）。参见教材P66。"
  },
  {
    "id": "sysprinciple_q109",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "某计算机的字长为32位，这意味着（　）。",
    "options": [
      "该计算机的CPU内部数据通路宽度为32位",
      "该计算机的内存地址空间为32位",
      "该计算机能同时处理的最大整数为32位",
      "该计算机的硬盘容量为32位"
    ],
    "answer": "该计算机的CPU内部数据通路宽度为32位",
    "explanation": "字长通常指CPU内部用于整数运算的数据通路的宽度。在32位计算机中，这意味着CPU内部数据通路宽度为32位，能够同时处理32位的数据。参见教材P65。"
  },
  {
    "id": "sysprinciple_q110",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "带标志加法器相比普通无符号数加法器，增加的功能有（　）。",
    "options": [
      "只能进行无符号数的加法和减法",
      "只能进行带符号数的加法和减法",
      "不仅能进行无符号数和带符号数的加/减运算，还能生成相应的标志信息",
      "增加了乘法运算功能"
    ],
    "answer": "不仅能进行无符号数和带符号数的加/减运算，还能生成相应的标志信息",
    "explanation": "带标志加法器不仅具备普通无符号数加法器的功能，即能进行无符号数的加法运算，还能通过增加的逻辑门电路实现无符号数的减法运算和带符号数的加/减运算，并且能生成相应的标志信息。因此，选项C是正确的。参见教材P69。"
  },
  {
    "id": "sysprinciple_q111",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "在Booth乘法算法中，如果乘数最低位和次低位为01，则应该（　）。",
    "options": [
      "直接算术右移一位",
      "将乘数左移一位",
      "将部分积加上乘数（取补码）",
      "将部分积减去乘数（取补码）"
    ],
    "answer": "将部分积加上乘数（取补码）",
    "explanation": "在Booth乘法算法中，如果乘数最低位和次低位为01，则需要进行“+[x]补”的操作，即将部分积加上乘数的补码。这是因为Booth算法通过检查乘数的最低两位来决定是加乘数、减乘数还是直接右移，以优化乘法过程。参见教材P74。"
  },
  {
    "id": "sysprinciple_q112",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "下列（　）存储器属于非易失性存储器。",
    "options": [
      "DRAM",
      "SRAM",
      "ROM",
      "Cache"
    ],
    "answer": "ROM",
    "explanation": "DRAM（动态随机存取存储器）和SRAM（静态随机存取存储器）都属于易失性存储器，因为它们在断电后会丢失存储的信息。Cache也是由SRAM组成，同样属于易失性存储器。ROM（只读存储器）是非易失性的，其信息在断电后仍然保留。参见教材P199。"
  },
  {
    "id": "sysprinciple_q113",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "下列存储器中，通常用于高速缓存（Cache）的是（　）。",
    "options": [
      "DRAM",
      "SRAM",
      "磁盘",
      "光盘"
    ],
    "answer": "SRAM",
    "explanation": "高速缓存（Cache）通常由SRAM（静态随机存取存储器）组成，因为它具有比DRAM更快的访问速度，能够接近CPU的工作速度。参见教材P199。"
  },
  {
    "id": "sysprinciple_q114",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "指令直接面向的存储器是（　）。",
    "options": [
      "磁盘",
      "磁带",
      "主存",
      "光盘"
    ],
    "answer": "主存",
    "explanation": "指令直接面向的存储器是主存储器（简称主存），它由DRAM芯片组成，用于存放系统中被启动运行的程序代码及其数据。参见教材P199。"
  },
  {
    "id": "sysprinciple_q115",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "下列存储器中，主要用于信息的备份和脱机存档的是（　）。",
    "options": [
      "主存",
      "高速缓存",
      "磁盘",
      "磁带和光盘"
    ],
    "answer": "磁带和光盘",
    "explanation": "磁带存储器和光盘存储器的容量大、速度慢，因此主要用于信息的备份和脱机存档，作为海量后备存储器。参见教材P200。"
  },
  {
    "id": "sysprinciple_q116",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "在计算机的主存储器中，记忆单元的主要功能是（　）。",
    "options": [
      "执行算术和逻辑运算",
      "存储数据和控制信息",
      "控制计算机的输入和输出",
      "转换二进制到十进制"
    ],
    "answer": "存储数据和控制信息",
    "explanation": "记忆单元是存储器的核心部分，它用于存储数据和控制信息，这些数据可以是二进制形式的0和1。参见教材P200。"
  },
  {
    "id": "sysprinciple_q117",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "现代计算机主存储器通常采用（　）技术。",
    "options": [
      "SRAM",
      "DRAM",
      "EEPROM",
      "Flash"
    ],
    "answer": "DRAM",
    "explanation": "现代处理器一般采用DRAM作为主存，因此主存控制器也称为DRAM控制器。参见教材P200。"
  },
  {
    "id": "sysprinciple_q118",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "在计算机存储系统中，编址单位指的是（　）。",
    "options": [
      "存储单元的容量",
      "具有相同地址的位元构成的单位",
      "CPU的时钟频率",
      "主存的访问速度"
    ],
    "answer": "具有相同地址的位元构成的单位",
    "explanation": "编址单位是指具有相同地址的那些位元构成的一个单位，可以是按字节编址时的一个字节，或按字编址时的一个字。参见教材P200。"
  },
  {
    "id": "sysprinciple_q119",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "在层次化存储系统中，数据从慢速存储器传送到快速存储器的单位大小，（　）之间的传送单位通常更大。",
    "options": [
      "Cache与主存之间",
      "主存与硬盘之间",
      "两者相同",
      "都不确定"
    ],
    "answer": "主存与硬盘之间",
    "explanation": "在层次化存储系统中，数据从慢速存储器传送到快速存储器的单位大小是随着层次的增加而增大的。例如，在cache和主存之间传送的主存块大小通常为几十字节；而在主存与硬盘之间传送的页大小通常为几千字节以上。参见教材P201。"
  },
  {
    "id": "sysprinciple_q120",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "关于SDRAM与CPU之间的数据交换方式，下列描述正确的是（　）。",
    "options": [
      "SDRAM与CPU之间采用异步方式交换数据。",
      "SDRAM与CPU之间采用同步方式交换数据，并受外部系统时钟控制。",
      "SDRAM不需要外部时钟信号即可与CPU交换数据。",
      "SDRAM的数据传输速度完全取决于CPU的时钟频率。"
    ],
    "answer": "SDRAM与CPU之间采用同步方式交换数据，并受外部系统时钟控制。",
    "explanation": "SDRAM是一种与CPU前端总线同步的DRAM芯片，其数据交换是同步的，并受外部系统时钟控制。参见教材P204。"
  },
  {
    "id": "sysprinciple_q121",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "DDR SDRAM相比传统SDRAM，其主要改进体现在（　）。",
    "options": [
      "增加了存储容量",
      "降低了功耗",
      "提高了数据传输率，通过双数据率传输",
      "改进了物理封装形式"
    ],
    "answer": "提高了数据传输率，通过双数据率传输",
    "explanation": "DDR SDRAM通过双数据率传输和内部预取缓冲区技术，提高了数据传输率。参见教材P204。"
  },
  {
    "id": "sysprinciple_q122",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "关于DDR3 SDRAM与DDR2 SDRAM的比较，下列说法正确的是（　）。",
    "options": [
      "DDR3的预取位数和总线时钟频率与DDR2相同",
      "DDR3的功耗比DDR2更低",
      "DDR3的预取位数是DDR2的两倍，且总线时钟频率是芯片内部时钟频率的4倍",
      "DDR3的存储单元密度比DDR2小"
    ],
    "answer": "DDR3的预取位数是DDR2的两倍，且总线时钟频率是芯片内部时钟频率的4倍",
    "explanation": "DDR3 SDRAM芯片内部缓冲采用8位预取，存储器总线时钟频率为芯片内部的4倍，相比DDR2（4位预取，总线时钟频率为芯片内部2倍）有显著提升。参见教材P205。"
  },
  {
    "id": "sysprinciple_q123",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "关于总线的说法，下列说法错误的是（　）。",
    "options": [
      "总线由控制线、数据线和地址线构成",
      "总线连接计算机中各部件，实现共享传输介质",
      "CPU通过数据线向主存写入数据，而不是通过地址线",
      "内存条插槽是存储器总线的物理接口"
    ],
    "answer": "CPU通过数据线向主存写入数据，而不是通过地址线",
    "explanation": "总线由控制线、数据线和地址线构成，用于连接计算机中各部件并实现数据传输。CPU通过数据线向主存写入数据，通过地址线传输地址信息。因此，C选项错误地指出CPU通过地址线向主存写入数据。参见教材P205。"
  },
  {
    "id": "sysprinciple_q124",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "下列内存扩展方式不涉及位数改变的是（　）。",
    "options": [
      "位扩展",
      "字扩展",
      "字和位同时扩展",
      "都不是"
    ],
    "answer": "字扩展",
    "explanation": "字扩展是指增加存储器的容量而不改变其位数。例如，使用多个相同位数的存储芯片在字方向上扩展，以增加总存储容量但保持数据位宽不变。参见教材P206。"
  },
  {
    "id": "sysprinciple_q125",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "磁盘存储器的数据读/写单位是（　）。",
    "options": [
      "磁道",
      "柱面",
      "扇区",
      "磁头"
    ],
    "answer": "扇区",
    "explanation": "磁盘存储器的数据读/写操作是以扇区为单位进行的。每个磁道被划分为若干个扇区，用于存储数据。参见教材P209。"
  },
  {
    "id": "sysprinciple_q126",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "在磁盘读写过程中，（　）步骤涉及将磁头移动到指定的柱面。",
    "options": [
      "旋转等待",
      "寻道",
      "读/写",
      "初始化"
    ],
    "answer": "寻道",
    "explanation": "寻道操作是磁盘控制器根据磁头号和柱面号，通过磁头定位伺服系统选择并移动指定的磁头到指定的柱面。参见教材P210。"
  },
  {
    "id": "sysprinciple_q127",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "记录密度中的道密度指的是（　）。",
    "options": [
      "磁道上单位长度内的磁道数",
      "磁道上单位长度内存放的二进制信息量",
      "磁盘中所有磁道的总数",
      "磁盘中每个扇区的二进制信息量"
    ],
    "answer": "磁道上单位长度内的磁道数",
    "explanation": "道密度指在沿磁道分布方向上单位长度内的磁道数。位密度指在沿磁道方向上单位长度内存放的二进制信息量。参见教材P211。"
  },
  {
    "id": "sysprinciple_q128",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "磁盘的实际数据容量与（　）不直接相关。",
    "options": [
      "盘片数",
      "磁道数/面",
      "扇区数/磁道",
      "磁头寻道时间"
    ],
    "answer": "磁头寻道时间",
    "explanation": "磁盘的实际数据容量与盘片数、每面的磁道数、每磁道的扇区数以及每扇区的大小直接相关。磁头寻道时间影响存取速度，但不直接影响存储容量。参见教材P211。"
  },
  {
    "id": "sysprinciple_q129",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "关于磁盘存储器的数据传输率，下列描述正确的是（　）。",
    "options": [
      "内部传输速率和外部传输速率总是相同",
      "外部传输速率受外设接口类型限制",
      "数据传输时间总是最长的时间部分",
      "磁盘的平均存取时间等于数据传输时间"
    ],
    "answer": "外部传输速率受外设接口类型限制",
    "explanation": "内部传输速率（内部读写速度）和外部传输速率（主机与外设之间的传输速度）是不同的，外部传输速率受外设接口类型的限制。数据传输时间通常很短，相对于寻道时间和旋转等待时间来说。参见教材P211。"
  },
  {
    "id": "sysprinciple_q130",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "现代计算机中，磁盘与主机交换数据的最小单位是（　）。",
    "options": [
      "字节",
      "扇区",
      "磁道",
      "簇"
    ],
    "answer": "扇区",
    "explanation": "磁盘与主机交换数据的最小单位是一个扇区。参见教材P212。"
  },
  {
    "id": "sysprinciple_q131",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "下列不是提高CPU访存速度的有效方法是（　）。",
    "options": [
      "提高DRAM芯片的速度",
      "在CPU和主存之间增加cache",
      "减小CPU的时钟频率",
      "采用并行结构技术"
    ],
    "answer": "减小CPU的时钟频率",
    "explanation": "提高DRAM芯片的速度、在CPU和主存之间增加cache、采用并行结构技术都是提高CPU访存速度的有效方法。而减小CPU的时钟频率会降低CPU的执行速度，不利于提高访存速度。参见教材P214。"
  },
  {
    "id": "sysprinciple_q132",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "下列cache替换算法能较好地反映程序访问局部性的是（　）。",
    "options": [
      "先进先出",
      "最近最少用",
      "最不经常用",
      "随机替换"
    ],
    "answer": "最近最少用",
    "explanation": "最近最少用算法的基本思想是：总是选择近期最少使用的主存块被替换掉。这种算法能比较正确地反映程序的访问局部性，因为当前最少使用的块一般来说也是将来最少被访问的。但是，它的实现比FIFO算法要复杂一些。参见教材P222。"
  },
  {
    "id": "sysprinciple_q133",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "在回写cache策略中，用于标识cache行中的主存块是否被CPU修改过的位是（　）。",
    "options": [
      "脏位",
      "有效位",
      "标记位",
      "LRU位"
    ],
    "answer": "脏位",
    "explanation": "在回写cache策略中，每个cache行都会关联一个修改位，也称为脏位。这个位用于标识cache行中的主存块是否被CPU修改过。如果cache行被CPU修改过，则脏位被置为1；如果cache行自被加载以来未被修改，则脏位保持为0。在替换cache行时，如果脏位为1，则需要将该主存块写回主存。参见教材P222。"
  },
  {
    "id": "sysprinciple_q134",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "在不采用虚拟存储机制的计算机系统中，CPU执行指令时使用的地址是（　）。",
    "options": [
      "逻辑地址",
      "虚拟地址",
      "物理地址",
      "相对地址"
    ],
    "answer": "物理地址",
    "explanation": "在不采用虚拟存储机制的计算机系统中，CPU执行指令时，取指令和存取操作数所用的地址都是主存的物理地址，无须进行地址转换。参见教材P226。"
  },
  {
    "id": "sysprinciple_q135",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "在采用虚拟存储技术的计算机中，CPU通过（　）将逻辑地址转换为主存的物理地址。",
    "options": [
      "算术逻辑单元",
      "控制单元",
      "存储管理部件",
      "寄存器组"
    ],
    "answer": "存储管理部件",
    "explanation": "在采用虚拟存储技术的计算机中，CPU通过存储管理部件将指令中的逻辑地址（虚拟地址）转换为主存的物理地址。参见教材P226。"
  },
  {
    "id": "sysprinciple_q136",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "进程的虚拟地址空间分为（　）。",
    "options": [
      "用户空间和内核空间",
      "数据空间和代码空间",
      "栈空间和堆空间",
      "静态区和动态区"
    ],
    "answer": "用户空间和内核空间",
    "explanation": "进程的虚拟地址空间分为两大部分：操作系统内核区和用户虚拟存储空间，分别简称为内核空间和用户空间。参见教材P227。"
  },
  {
    "id": "sysprinciple_q137",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "在Linux系统中，用户栈区随着程序的执行变化是（　）。",
    "options": [
      "始终从低地址向高地址增长",
      "始终从高地址向低地址增长",
      "始终固定不变",
      "从高地址向低地址增长或向反方向减退"
    ],
    "answer": "从高地址向低地址增长或向反方向减退",
    "explanation": "用户栈区对应程序运行时过程调用的参数、返回地址、过程局部变量等所在空间，随着程序的执行，该区会不断动态地从高地址向低地址增长或向反方向减退。参见教材P228。"
  },
  {
    "id": "sysprinciple_q138",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "I/O子系统主要解决（　）问题。",
    "options": [
      "计算机内部的数据处理",
      "信息的输入和输出",
      "程序的编译和优化",
      "内存的管理和分配"
    ],
    "answer": "信息的输入和输出",
    "explanation": "I/O子系统主要解决信息的输入和输出问题，即将所需信息（如文字、图表、声音、视频等）通过不同外设输入到计算机中，或者将计算机内部处理的结果通过相应外设输出给用户。参见教材P248。"
  },
  {
    "id": "sysprinciple_q139",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "下列选项中，（　）不是I/O子系统采用层次结构的主要原因。",
    "options": [
      "共享性",
      "复杂性",
      "同步性",
      "异步性"
    ],
    "answer": "同步性",
    "explanation": "I/O子系统采用层次结构的主要原因包括共享性（多个进程共享I/O资源）、复杂性（设备控制细节复杂）和异步性（I/O设备与主机速度差异大，使用异步中断方式）。同步性并不是I/O子系统采用层次结构的主要原因，反而异步性是其中的一个重要因素。参见教材P249。"
  },
  {
    "id": "sysprinciple_q140",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "用户程序通过（　）方式最终实现I/O操作。",
    "options": [
      "直接控制硬件设备",
      "调用操作系统提供的系统调用",
      "使用高级语言内置的I/O函数",
      "通过网络协议进行数据传输"
    ],
    "answer": "调用操作系统提供的系统调用",
    "explanation": "用户程序总是通过某种I/O函数或I/O操作符请求I/O操作，但最终都通过操作系统内核提供的系统调用来实现I/O。参见教材P249。"
  },
  {
    "id": "sysprinciple_q141",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "在UNIX/Linux系统中，用户程序通常通过（　）方式提出I/O请求。",
    "options": [
      "直接控制硬件设备",
      "调用C标准I/O库函数或系统调用封装函数",
      "使用网络协议",
      "访问内存地址"
    ],
    "answer": "调用C标准I/O库函数或系统调用封装函数",
    "explanation": "在UNIX/Linux系统中，用户程序通常通过调用C标准I/O库函数或系统调用封装函数来提出I/O请求。这些函数提供了对设备进行输入和输出的抽象，使得用户程序无需直接控制硬件设备。参见教材P252。"
  },
  {
    "id": "sysprinciple_q142",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "在UNIX系统中，所有I/O操作都通过（　）实现。",
    "options": [
      "网络套接字",
      "读写文件",
      "终端设备",
      "内存映射"
    ],
    "answer": "读写文件",
    "explanation": "在UNIX系统中，所有I/O操作都通过读写文件实现，所有外设，包括网络（套接字socket）、终端设备（键盘和显示器）等，都被看成文件。参见教材P254。"
  },
  {
    "id": "sysprinciple_q143",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "在Linux系统中，（　）层次提供了基于索引节点的一系列内存数据结构，实现了对下面逻辑文件系统层的抽象和封装。",
    "options": [
      "用户空间I/O软件层",
      "虚拟文件系统（VFS）层",
      "通用块设备I/O层",
      "缓存层"
    ],
    "answer": "虚拟文件系统（VFS）层",
    "explanation": "虚拟文件系统（VFS）层在Linux系统中提供了基于索引节点（inode）的一系列内存数据结构，用于实现对下面逻辑文件系统层的抽象和封装，并为上层应用程序提供统一的文件操作接口。参见教材P264。"
  },
  {
    "id": "sysprinciple_q144",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "下列不是磁盘高速缓存主要作用的是（　）。",
    "options": [
      "减少磁盘读/写次数",
      "提高I/O请求的处理效率",
      "永久存储数据",
      "利用数据访问的局部性特点"
    ],
    "answer": "永久存储数据",
    "explanation": "磁盘高速缓存的主要作用是减少磁盘读/写次数，提高I/O请求的处理效率，以及利用数据访问的局部性特点。然而，它并不负责数据的永久存储，数据的永久存储仍然依赖于磁盘等外部存储器。参见教材P267。"
  },
  {
    "id": "sysprinciple_q145",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "在Linux系统中，当应用程序打开一个文件时，虚拟文件系统（VFS）通过（　）进行路径解析，以找到对应的inode号。",
    "options": [
      "文件描述符",
      "文件名",
      "目录文件",
      "设备驱动程序"
    ],
    "answer": "目录文件",
    "explanation": "当应用程序打开一个文件时，VFS通过目录文件对文件名进行路径解析，找到相应的目录项，从而获得对应的inode号。参见教材P264。"
  },
  {
    "id": "sysprinciple_q146",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "下列不属于字符设备的是（　）。",
    "options": [
      "磁盘驱动器",
      "打印机",
      "键盘",
      "手写笔"
    ],
    "answer": "磁盘驱动器",
    "explanation": "字符设备是以字符为单位向主机发送或从主机接收字符流的设备。字符设备传送的字符流不能形成数据块，无法定位和寻址。大多数输入设备和输出设备都可以看作字符设备。磁盘驱动器属于块设备。参见教材P275。"
  },
  {
    "id": "sysprinciple_q147",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "在基于总线互连的计算机系统中，（　）负责连接CPU和主存。",
    "options": [
      "南桥芯片",
      "北桥芯片",
      "处理器总线",
      "存储器总线"
    ],
    "answer": "北桥芯片",
    "explanation": "北桥芯片是计算机中负责连接CPU和主存的芯片。它本质上是一个DMA控制器，可以直接访问主存和显卡中的显存。南桥芯片则主要负责I/O设备的连接和控制。参见教材P276。"
  },
  {
    "id": "sysprinciple_q148",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "下列采用了串行传输方式的是（　）。",
    "options": [
      "PCI",
      "AGP",
      "PCI-Express",
      "ISA"
    ],
    "answer": "PCI-Express",
    "explanation": "PCI-Express（简称PCI-e）是第三代I/O总线，它采用了串行传输方式。参见教材P277。"
  },
  {
    "id": "sysprinciple_q149",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "冯·诺依曼结构计算机的基本思想不包括（　）。",
    "options": [
      "采用“存储程序”工作方式",
      "计算机由运算器、控制器、存储器、输入设备和输出设备五大基本部件组成",
      "计算机内部以十进制形式表示指令和数据",
      "存储器能存放数据和指令，计算机能区分它们"
    ],
    "answer": "计算机内部以十进制形式表示指令和数据",
    "explanation": "冯·诺依曼结构计算机内部以二进制形式表示指令和数据，而不是十进制，所以选项C错误。参见教材P26。"
  },
  {
    "id": "sysprinciple_q150",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "在冯·诺依曼结构的模型计算机中，用来进行算术逻辑运算的部件是（　）。",
    "options": [
      "主存储器",
      "算术逻辑部件（ALU）",
      "控制元件（CU）",
      "通用寄存器组（GPRs）"
    ],
    "answer": "算术逻辑部件（ALU）",
    "explanation": "算术逻辑部件（ALU）的作用是进行算术逻辑运算，在ALU操作控制信号ALUop的控制下，对输入端A和B进行不同的运算，得到结果F，所以选B。参见教材P26。"
  },
  {
    "id": "sysprinciple_q151",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "CPU为了自动按序读取主存中的指令，需要用到的寄存器是（　）。",
    "options": [
      "指令寄存器（IR）",
      "标志寄存器",
      "程序计数器（PC）",
      "主存地址寄存器（MAR）"
    ],
    "answer": "程序计数器（PC）",
    "explanation": "程序计数器（PC）的作用是在执行当前指令的过程中，自动计算出下一条指令的地址并保存，从而使CPU能自动按序读取主存中的指令，所以选C。参见教材P27。"
  },
  {
    "id": "sysprinciple_q152",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "通常把连接不同部件进行信息传输的介质称为（　）。",
    "options": [
      "寄存器",
      "总线",
      "存储器",
      "运算器"
    ],
    "answer": "总线",
    "explanation": "连接不同部件进行信息传输的介质称为总线，其中包含地址线、数据线和控制线，所以选B。参见教材P27。"
  },
  {
    "id": "sysprinciple_q153",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "CPU访问主存时，发送到或从数据线取来的信息存放在（　）中。",
    "options": [
      "主存地址寄存器（MAR）",
      "主存数据寄存器（MDR）",
      "指令寄存器（IR）",
      "通用寄存器"
    ],
    "answer": "主存数据寄存器（MDR）",
    "explanation": "CPU访问主存时，将主存地址存放在主存地址寄存器（MAR）中，而发送到或从数据线取来的信息存放在主存数据寄存器（MDR）中，所以选B。参见教材P27。"
  },
  {
    "id": "sysprinciple_q154",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "指令通常被划分为若干个字段，其中操作码字段的作用是（　）。",
    "options": [
      "指出指令所处理的操作数的地址",
      "指出指令的操作类型",
      "保存指令执行的结果",
      "保存指令执行的状态信息"
    ],
    "answer": "指出指令的操作类型",
    "explanation": "操作码字段的作用是指出指令的操作类型，如取数、存数、加、减、传送、跳转等，所以选B。参见教材P28。"
  },
  {
    "id": "sysprinciple_q155",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "下列指令中，将通用寄存器的内容写入主存单元的是（　）。",
    "options": [
      "取数指令（load）",
      "存数指令（store）",
      "加法指令（add）",
      "传送指令（mov）"
    ],
    "answer": "存数指令（store）",
    "explanation": "存数指令（store）的功能是将通用寄存器的内容写入主存单元，所以选B。参见教材P27。"
  },
  {
    "id": "sysprinciple_q156",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "下列属于高级程序设计语言的是（　）。",
    "options": [
      "机器语言",
      "汇编语言",
      "C++",
      "二进制代码"
    ],
    "answer": "C++",
    "explanation": "高级程序设计语言是指面向算法设计的、较接近于日常英语书面语言的程序设计语言。C++是典型的高级编程语言，而机器语言和汇编语言都属于低级语言，二进制代码是机器语言的另一种表述方式。参见教材P30。"
  },
  {
    "id": "sysprinciple_q157",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "将汇编语言源程序转换为机器语言目标程序的过程称为（　）。",
    "options": [
      "编译",
      "解释",
      "汇编",
      "链接"
    ],
    "answer": "汇编",
    "explanation": "汇编程序用于将汇编语言源程序翻译成机器语言目标程序。参见教材P30。"
  },
  {
    "id": "sysprinciple_q158",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "下列不属于翻译程序的是（　）。",
    "options": [
      "汇编程序",
      "解释程序",
      "编译程序",
      "调试程序"
    ],
    "answer": "调试程序",
    "explanation": "翻译程序包括汇编程序、解释程序和编译程序，它们负责将一种编程语言表示的程序转换为另一种编程语言表示的程序。调试程序用于检测和修复程序中的错误，不属于翻译程序的类型。参见教材P30。"
  },
  {
    "id": "sysprinciple_q159",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "在计算机中，I/O设备通常通过（　）连接到主机上。",
    "options": [
      "总线",
      "电缆",
      "网络",
      "I/O控制器或I/O适配器"
    ],
    "answer": "I/O控制器或I/O适配器",
    "explanation": "I/O设备通过I/O控制器或I/O适配器（统称为设备控制器）连接到主机上。这些控制器负责处理主机与I/O设备之间的数据传输和控制。参见教材P34。"
  },
  {
    "id": "sysprinciple_q160",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "下列关于程序执行过程的描述，正确的是（　）。",
    "options": [
      "数据只在CPU和主存储器之间流动",
      "数据流动不依赖于总线",
      "数据在CPU、主存储器和I/O模块之间流动",
      "I/O模块不参与数据流动"
    ],
    "answer": "数据在CPU、主存储器和I/O模块之间流动",
    "explanation": "程序的执行过程涉及数据的流动，数据在CPU、主存储器和I/O模块之间流动，所有数据的流动都是通过总线和I/O桥接器等进行的。I/O模块是数据流动的重要部分。参见教材P34。"
  },
  {
    "id": "sysprinciple_q161",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "下列不是高级程序设计语言特点的是（　）。",
    "options": [
      "可读性好",
      "与具体机器结构无关",
      "描述能力强",
      "每条语句对应一条机器指令"
    ],
    "answer": "每条语句对应一条机器指令",
    "explanation": "高级程序设计语言的特点包括可读性好、与具体机器结构无关、描述能力强。高级语言的一条语句通常对应多条机器指令，而不是一条。参见教材P30。"
  },
  {
    "id": "sysprinciple_q162",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "下列将高级语言源程序翻译成机器语言目标程序的过程是（　）。",
    "options": [
      "汇编",
      "解释",
      "编译",
      "链接"
    ],
    "answer": "编译",
    "explanation": "编译是将高级语言源程序翻译成机器语言目标程序的过程。参见教材P31。"
  },
  {
    "id": "sysprinciple_q163",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "下列不属于系统软件的是（　）。",
    "options": [
      "操作系统",
      "数据库管理系统",
      "电子邮件客户端",
      "编译器"
    ],
    "answer": "电子邮件客户端",
    "explanation": "系统软件是为有效、安全地使用和管理计算机以及为开发和运行应用软件而提供的各种软件。电子邮件客户端是用于发送和接收电子邮件的应用软件，不属于系统软件。参见教材P36。"
  },
  {
    "id": "sysprinciple_q164",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "计算机系统的核心部分是（　）。",
    "options": [
      "CPU",
      "操作系统",
      "指令集架构（ISA）",
      "内存"
    ],
    "answer": "指令集架构（ISA）",
    "explanation": "指令集架构（ISA）是软件和硬件之间的接口，定义了计算机可以执行的所有指令的集合，是计算机系统的核心部分。参见教材P35。"
  },
  {
    "id": "sysprinciple_q165",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "以下（　）角色主要负责配置、管理和维护计算机系统。",
    "options": [
      "最终用户",
      "系统管理员",
      "应用程序员",
      "系统程序员"
    ],
    "answer": "系统管理员",
    "explanation": "系统管理员负责利用操作系统、数据库管理系统等软件提供的功能对系统进行配置、管理和维护。参见教材P36。"
  },
  {
    "id": "sysprinciple_q166",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "下列属于操作系统主要功能之一的是（　）。",
    "options": [
      "提供人机交互界面",
      "编译高级语言程序",
      "设计数据库结构",
      "开发应用软件"
    ],
    "answer": "提供人机交互界面",
    "explanation": "操作系统提供计算机用户和硬件之间的人机交互界面，并管理计算机系统的资源。编译高级语言程序是编译器的功能，设计数据库结构是数据库管理员或数据库设计师的职责，开发应用软件是应用程序员的职责。参见教材P36。"
  },
  {
    "id": "sysprinciple_q167",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "在计算机技术中，“透明”一词的含义是（　）。",
    "options": [
      "可见",
      "不可见或感觉不到",
      "易于理解",
      "高效率"
    ],
    "answer": "不可见或感觉不到",
    "explanation": "在计算机技术中，“透明”是指对实际存在的事物或概念感觉不到，即对某个层次的用户来说，某些底层细节是不可见的。参见教材P37。"
  },
  {
    "id": "sysprinciple_q168",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "机器语言程序的基本组成单位是（　）。",
    "options": [
      "语句",
      "指令",
      "函数",
      "过程"
    ],
    "answer": "指令",
    "explanation": "机器语言程序是由一系列指令组成的，每条指令规定了计算机执行什么操作以及所处理的操作数的地址空间和类型。参见教材P35。"
  },
  {
    "id": "sysprinciple_q169",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "用于编辑和调试源代码的工具是（　）。",
    "options": [
      "操作系统",
      "编译器",
      "集成开发环境（IDE）",
      "链接器"
    ],
    "answer": "集成开发环境（IDE）",
    "explanation": "集成开发环境（IDE）提供了程序编辑器、调试器、编译器、链接器等工具，方便程序员进行源代码的编写、调试和编译。参见教材P35。"
  },
  {
    "id": "sysprinciple_q170",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "使用高级编程语言进行编程的是（　）。",
    "options": [
      "最终用户",
      "系统管理员",
      "应用程序员",
      "系统程序员"
    ],
    "answer": "应用程序员",
    "explanation": "应用程序员是指使用高级编程语言编制应用软件的程序员。参见教材P36。"
  },
  {
    "id": "sysprinciple_q171",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "吞吐率主要衡量的是（　）。",
    "options": [
      "单位时间内传输的信息量",
      "单位时间内CPU执行指令的数量",
      "单个任务的执行时间",
      "等待I/O操作完成的时间"
    ],
    "answer": "单位时间内传输的信息量",
    "explanation": "吞吐率表示在单位时间内所完成的工作量，类似于带宽，它衡量的是单位时间内传输的信息量。参见教材P40。"
  },
  {
    "id": "sysprinciple_q172",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "在多媒体应用中，用户通常更关心的是（　）。",
    "options": [
      "响应时间",
      "吞吐率",
      "CPU时间",
      "等待时间"
    ],
    "answer": "吞吐率",
    "explanation": "在多媒体应用场合，用户希望音/视频的播放要流畅，因此更关心系统的吞吐率。参见教材P40。"
  },
  {
    "id": "sysprinciple_q173",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "CPI表示的是（　）。",
    "options": [
      "每秒钟执行的指令数量",
      "执行一条指令所需的时钟周期数",
      "CPU的主频",
      "CPU运行操作系统程序的时间"
    ],
    "answer": "执行一条指令所需的时钟周期数",
    "explanation": "CPI表示执行一条指令所需的时钟周期数，反映了指令执行的效率。参见教材P40。"
  },
  {
    "id": "sysprinciple_q174",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "MIPS是衡量（　）的指标。",
    "options": [
      "CPU的时钟频率",
      "每秒钟完成的加法指令数量",
      "每秒钟执行的指令数量（百万条）",
      "执行一条指令所需的平均时间"
    ],
    "answer": "每秒钟执行的指令数量（百万条）",
    "explanation": "MIPS是衡量计算机每秒执行指令数量的指标，通常用来反映机器执行定点指令的速度。参见教材P42。"
  },
  {
    "id": "sysprinciple_q175",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "下列不是用来衡量计算机系统性能的是（　）。",
    "options": [
      "吞吐率",
      "响应时间",
      "CPU温度",
      "MIPS"
    ],
    "answer": "CPU温度",
    "explanation": "CPU温度是衡量计算机硬件状态的一个指标，而不是衡量系统性能的指标。参见教材P40。"
  },
  {
    "id": "sysprinciple_q176",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "时钟频率与时钟周期的关系是（　）。",
    "options": [
      "时钟频率是时钟周期的倒数",
      "时钟频率等于时钟周期",
      "时钟频率与时钟周期无关",
      "时钟频率是时钟周期的两倍"
    ],
    "answer": "时钟频率是时钟周期的倒数",
    "explanation": "时钟频率是CPU主脉冲信号的频率，是时钟周期的倒数。参见教材P40。"
  },
  {
    "id": "sysprinciple_q177",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "存储元件必须（　）才能用来表示二进制代码0和1。",
    "options": [
      "具有两种截然不同的物理状态",
      "具有三种物理状态",
      "具有四种物理状态",
      "能存储模拟信号"
    ],
    "answer": "具有两种截然不同的物理状态",
    "explanation": "存储元件必须具有两个截然不同的物理状态，才能被用来表示二进制代码0和1。参见教材P199。"
  },
  {
    "id": "sysprinciple_q178",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "随机存取存储器（RAM）的主要特点是（　）。",
    "options": [
      "访问时间随地址变化",
      "只能读不能写",
      "访问时间与地址无关（不考虑芯片内部缓冲）",
      "断电后信息不丢失"
    ],
    "answer": "访问时间与地址无关（不考虑芯片内部缓冲）",
    "explanation": "RAM的主要特点是通过对地址译码来访问存储单元，访问时间与地址无关（在不考虑芯片内部缓冲的前提下）。参见教材P199。"
  },
  {
    "id": "sysprinciple_q179",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "下列存储器中，属于非易失性存储器的是（　）。",
    "options": [
      "DRAM",
      "SRAM",
      "ROM",
      "Cache"
    ],
    "answer": "ROM",
    "explanation": "非易失性存储器的信息可一直保留，不需电源维持，ROM属于非易失性存储器。参见教材P199。"
  },
  {
    "id": "sysprinciple_q180",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "主存储器主要由（　）芯片组成。",
    "options": [
      "ROM",
      "DRAM",
      "磁带",
      "光盘"
    ],
    "answer": "DRAM",
    "explanation": "主存储器主要由DRAM芯片组成，用于存放系统中被启动运行的程序代码及其数据。参见教材P199。"
  },
  {
    "id": "sysprinciple_q181",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "CPU执行指令时给出的存储器地址是（　）。",
    "options": [
      "逻辑地址",
      "物理地址",
      "主存地址",
      "辅存地址"
    ],
    "answer": "主存地址",
    "explanation": "CPU执行指令时给出的存储器地址是主存地址。参见教材P199。"
  },
  {
    "id": "sysprinciple_q182",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "磁盘存储器相对于其他辅助存储器的主要优势是（　）。",
    "options": [
      "容量大",
      "价格便宜",
      "速度快",
      "便于携带"
    ],
    "answer": "速度快",
    "explanation": "磁盘存储器相对于磁带和光盘存储器速度快，因此常用作辅存。参见教材P200。"
  },
  {
    "id": "sysprinciple_q183",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "存储器的层次化结构主要是为了解决（　）。",
    "options": [
      "存储器容量不足",
      "处理器和存储器速度不匹配",
      "存储器成本高",
      "存储器可靠性低"
    ],
    "answer": "处理器和存储器速度不匹配",
    "explanation": "随着时间的推移，处理器和存储器在性能上的差异越来越大。为了缩小存储器和处理器两者之间的差距，通常在计算机系统中采用层次化存储结构。参见教材P201。"
  },
  {
    "id": "sysprinciple_q184",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "SDRAM与传统DRAM的主要区别在于数据交换方式，其中SDRAM是（　）。",
    "options": [
      "异步交换数据",
      "同步交换数据",
      "异步读取，同步写入",
      "同步读取，异步写入"
    ],
    "answer": "同步交换数据",
    "explanation": "SDRAM是一种与前端总线同步的DRAM芯片，与CPU之间采用同步方式交换数据，因此选项B正确。参见教材P204。"
  },
  {
    "id": "sysprinciple_q185",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "下列负责将CPU的存储单元地址转换为DRAM芯片的行地址和列地址的是（　）。",
    "options": [
      "北桥芯片",
      "主存控制器",
      "内存条插槽",
      "存储器总线"
    ],
    "answer": "主存控制器",
    "explanation": "主存控制器负责将CPU的存储单元地址转换为DRAM芯片的行地址和列地址，然后分时送到DRAM芯片内部的行地址译码器和列地址译码器，因此选项B正确。参见教材P206。"
  },
  {
    "id": "sysprinciple_q186",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "现代计算机大多按（　）单位编址。",
    "options": [
      "位",
      "字节",
      "字",
      "半字"
    ],
    "answer": "字节",
    "explanation": "现代通用计算机大多按字节编址，每个存储单元都有一个唯一的字节地址，因此选项B正确。参见教材P206。"
  },
  {
    "id": "sysprinciple_q187",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "下列关于磁盘存储容量的描述，正确的是（　）。",
    "options": [
      "存储容量与磁道数无关",
      "存储容量与扇区数无关",
      "存储容量与记录密度无关",
      "存储容量与磁表面大小和记录密度密切相关"
    ],
    "answer": "存储容量与磁表面大小和记录密度密切相关",
    "explanation": "磁盘的存储容量指整个存储器存放的二进制信息量，它与磁表面大小和记录密度密切相关，因此选项D正确。参见教材P211。"
  },
  {
    "id": "sysprinciple_q188",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "在磁盘存储器的格式化过程中，下列属于格式化后的是（　）。",
    "options": [
      "数据区",
      "头空",
      "ID域",
      "CRC码"
    ],
    "answer": "数据区",
    "explanation": "磁盘格式化后的实际容量只包含数据区，而头空、ID域、CRC码等信息属于未格式化容量中的内容，因此选项A正确。参见教材P211。"
  },
  {
    "id": "sysprinciple_q189",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "I/O子系统主要负责解决（　）。",
    "options": [
      "计算机内部数据处理",
      "信息的输入和输出",
      "内存管理",
      "程序编译"
    ],
    "answer": "信息的输入和输出",
    "explanation": "I/O子系统主要负责解决信息的输入和输出问题，即将所需信息通过不同外设输入到计算机中，或将计算机处理的结果输出给用户。参见教材P248。"
  },
  {
    "id": "sysprinciple_q190",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "操作系统在I/O子系统中的作用不包括（　）。",
    "options": [
      "统一调度管理I/O资源",
      "提供专门的驱动程序",
      "直接处理所有I/O操作",
      "简化应用程序开发"
    ],
    "answer": "直接处理所有I/O操作",
    "explanation": "操作系统在I/O子系统中的作用包括统一调度管理I/O资源、提供专门的驱动程序和简化应用程序开发，但它并不直接处理所有I/O操作，而是通过系统调用等方式间接管理。参见教材P249。"
  },
  {
    "id": "sysprinciple_q191",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "系统调用封装函数被转换为一组与（　）相关的指令序列。",
    "options": [
      "操作系统类型",
      "具体机器架构",
      "I/O设备类型",
      "应用程序类型"
    ],
    "answer": "具体机器架构",
    "explanation": "系统调用封装函数会被转换为一组与具体机器架构相关的指令序列，这些指令序列中至少包含一条陷阱指令。参见教材P250。"
  },
  {
    "id": "sysprinciple_q192",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "在I/O子系统中，设备准备好数据后发出的是（　）。",
    "options": [
      "系统调用请求",
      "中断请求",
      "陷阱请求",
      "读写请求"
    ],
    "answer": "中断请求",
    "explanation": "在I/O子系统中，当设备准备好数据或准备好接收数据时，会发出中断请求，CPU响应中断后调出中断服务程序执行数据交换。参见教材P250。"
  },
  {
    "id": "sysprinciple_q193",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "在Linux操作系统中，所有I/O操作都是通过（　）实现的。",
    "options": [
      "内存访问",
      "文件系统",
      "网络接口",
      "设备驱动程序"
    ],
    "answer": "文件系统",
    "explanation": "在Linux操作系统中，所有I/O操作都是通过文件系统实现的，所有外设都被抽象为文件。参见教材P254。"
  },
  {
    "id": "sysprinciple_q194",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "下列函数中，用于在Linux中创建一个新文件的是（　）。",
    "options": [
      "fopen",
      "creat",
      "write",
      "open"
    ],
    "answer": "creat",
    "explanation": "creat函数用于在Linux中创建一个新文件。fopen是C标准I/O库函数，write用于写文件，open用于打开文件，但open函数不如creat直接用于创建新文件。参见教材P255。"
  },
  {
    "id": "sysprinciple_q195",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "在Linux系统中，标准输入文件的描述符是（　）。",
    "options": [
      "0",
      "1",
      "2",
      "3"
    ],
    "answer": "0",
    "explanation": "在Linux系统中，标准输入文件的描述符是0，标准输出是1，标准错误是2。参见教材P259。"
  },
  {
    "id": "sysprinciple_q196",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "在UNIX系统中，下列设备不被看成文件的是（　）。",
    "options": [
      "键盘",
      "显示器",
      "打印机",
      "鼠标指针"
    ],
    "answer": "鼠标指针",
    "explanation": "在UNIX系统里，所有I/O操作都通过读写文件实现，像键盘、显示器、打印机等外设都被抽象成文件，但鼠标指针并不是一个独立的、可被看作文件的外设实体，所以选D。参见教材P254。"
  },
  {
    "id": "sysprinciple_q197",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "若要设置文件读/写位置，可使用的系统调用封装函数是（　）。",
    "options": [
      "creat",
      "open",
      "lseek",
      "close"
    ],
    "answer": "lseek",
    "explanation": "若当前读/写位置并非用户预期的位置，则需要用lseek函数来调整文件的当前读/写位置。参见教材P256。"
  },
  {
    "id": "sysprinciple_q198",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "执行读文件操作时，若文件当前读/写位置k等于文件大小m，这种情况称为（　）。",
    "options": [
      "文件开始",
      "文件中间",
      "文件结束",
      "文件错误"
    ],
    "answer": "文件结束",
    "explanation": "当执行读文件操作时，若k=m，即当前位置为结尾处，这种情况被称为文件结束，所以选C。参见教材P255。"
  },
  {
    "id": "sysprinciple_q199",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "使用creat函数创建文件时，若文件已存在，会发生（　）。",
    "options": [
      "函数返回-1表示出错",
      "不做任何处理",
      "把文件长度截断为0，丢弃原文件内容",
      "重新命名该文件"
    ],
    "answer": "把文件长度截断为0，丢弃原文件内容",
    "explanation": "使用creat函数创建文件时，若文件已存在，则把文件长度截断为0，即将原文件的内容全部丢弃，并且创建操作不会发生错误，函数仍会返回文件描述符，所以选C。参见教材P255。"
  },
  {
    "id": "sysprinciple_q200",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "single_choice",
    "text": "系统级I/O函数中的（　）函数将文件名和文件描述符fd建立关联。",
    "options": [
      "read和write",
      "lseek",
      "creat和open",
      "close"
    ],
    "answer": "creat和open",
    "explanation": "系统级I/O函数中的creat和open函数将文件名和文件描述符fd建立关联。因此答案是C。参见教材P264。"
  },
  {
    "id": "sysprinciple_q201",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "short_answer",
    "text": "假设某个频繁使用的程序Q在机器N1上运行需要12秒，N1的时钟频率为1.5GHz。设计人员想开发一台与N1具有相同ISA的新机器N2。采用新技术可使N2的时钟频率增加，但同时也会使CPI增加。假定程序Q在N2上的时钟周期数是在N1上的1.8倍，则N2的时钟频率至少达到多少才能使程序Q在N2上的运行时间缩短为8秒？",
    "answer": "程序Q在机器N1上的时钟周期数为用户CPU时间×时钟频率=12s×1.5GHz=18G。 因此，程序Q在机器N2上的时钟周期数为1.8×18G=32.4G。 要使程序Q在N2上运行时间缩短到8s，则N2的时钟频率至少应为程序总时钟周期数：用户CPU时间=32.4G/8s=4.05GHz。",
    "explanation": "参见教材P41。"
  },
  {
    "id": "sysprinciple_q202",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "short_answer",
    "text": "将二进制数(11011.01)2转换成十进制数。",
    "answer": "（10101.01)2=(1×20+1×21+0×22+1×23+1×24+0×2-1+1×2-2)10=(27.25)10",
    "explanation": "参见教材P49。"
  },
  {
    "id": "sysprinciple_q203",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "short_answer",
    "text": "假定某处理器的时钟周期为1ns，cache的命中时间为1个时钟周期，缺失损失为10个时钟周期。若某程序的cache命中率为98%，求CPU在cache-主存层次的平均访问时间。",
    "answer": "根据题目，处理器的时钟周期为1ns，cache的命中时间为1个时钟周期（即1ns），缺失损失为10个时钟周期（即10ns）。cache命中率为98%，即p=0.98。 CPU在cache-主存层次的平均访问时间T可以通过以下公式计算： T=p×Tc+(1−p)×(Tm+Tc) 其中，Tc是cache命中时间，Tm是缺失损失。将已知数值代入公式： T=0.98×1ns+(1−0.98)×(10ns+1ns) T=0.98ns+0.02×11ns T=0.98ns+0.22ns T=1.2ns 因此，CPU在cache-主存层次的平均访问时间为1.2ns。",
    "explanation": "参见教材P216。"
  },
  {
    "id": "sysprinciple_q204",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "short_answer",
    "text": "使用汇编器处理以下AT&T格式汇编指令时都会产生错误，请说明每一行汇编指令存在什么错误（提示：AT&T格式汇编指令中逗号左边是源操作数，右边是目的操作数）。 【图片缺失】",
    "answer": "第（1）行指令长度后缀为b，说明传送的是一字节数据，源操作数应该在一个8位寄存器中，但指令中给出的源操作数寄存器为%bx，是一个16位寄存器。 第（2）行指令的目的操作数为立即数寻址方式，指令执行结果无法保存。 第（3）行指令的目的操作数寻址方式是基址寻址方式，基址寄存器中存放的是一个32位（IA-32架构）或64位（x86-64架构）存储单元地址，因而基址寄存器不应该是一个8位寄存器，该指令中的%dl是一个8位寄存器。 第（4）行指令中传送操作的源寄存器位数与目的寄存器位数不匹配。",
    "explanation": "参见教材P95。"
  },
  {
    "id": "sysprinciple_q205",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "short_answer",
    "text": "以下是在IA-32+Linux 系统中执行的用户程序P的汇编代码（提示:#后是注释）： 【图片缺失】 针对上述汇编代码，回答下列问题。 （1）程序P的功能是什么？ （2）执行到哪些指令时会发生从用户态转到内核态执行的情况？ （3）该用户程序调用了哪些系统调用？",
    "answer": "（1）程序P的功能是在屏幕（fd=1）上输出“Hello，world.”。 （2）执行到第15条和第19条“int $0x80”指令时会从用户态转到内核态执行。 （3）该用户程序调用了write系统调用和exit系统调用。",
    "explanation": "参见教材P95。"
  },
  {
    "id": "sysprinciple_q206",
    "subjectId": "sysprinciple",
    "section": "practice",
    "type": "short_answer",
    "text": "以下是一个C语言函数： 【图片缺失】 已知形式参数p1和p2对应的实参已压入调用过程的栈帧，p1和p2对应实参的存储地址分别为R[ebp]+8、R[ebp]+12，这里，EBP指向当前栈帧底部。返回结果存放在EAX中，请写出上述函数体对应的汇编代码，要求用GCC默认的AT&T格式书写。",
    "answer": "因为p1和p2是指针类型参数，所以指令助记符中的长度后缀是1，比较指令cmpl的两个操作数应该都来自寄存器，故应先将p1和p2对应的实参从栈中取到通用寄存器中，比较指令执行后得到各个条件标志位，程序需要根据条件标志的组合选择执行不同的指令，因此需要用到条件跳转指令，跳转目标地址用标号.L1和.L2等标识。 以下汇编代码能够正确完成上述函数的功能（不包括过程调用的准备阶段和结束阶段）。 【图片缺失】",
    "explanation": "参见教材P130。"
  }
];
