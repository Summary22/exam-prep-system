import { Question } from './mockData';

export const sysintegrationQuestions: Question[] = [
  {
    "id": "sysintegration_q1",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "水平型微指令的特点是（　）。",
    "options": [
      "一次只能执行一条微命令",
      "微程序长度较长",
      "支持并行操作",
      "结构与机器指令类似"
    ],
    "answer": "支持并行操作",
    "explanation": "水平型微指令是指在一次运行中可以多个并行操作的微命令。参见教材P2。"
  },
  {
    "id": "sysintegration_q2",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "RISC指令集的优势不包括（　）。",
    "options": [
      "指令周期统一",
      "流水线效率高",
      "指令格式标准化",
      "支持复杂指令串行执行"
    ],
    "answer": "支持复杂指令串行执行",
    "explanation": "RISC精简指令集，采用流水线技术，指令周期统一、格式标准化；CISC才支持复杂指令串行执行。参见教材P4。"
  },
  {
    "id": "sysintegration_q3",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "PV原语中，V原语的主要作用是（　）。",
    "options": [
      "阻塞进程",
      "唤醒阻塞进程",
      "申请资源",
      "终止进程"
    ],
    "answer": "唤醒阻塞进程",
    "explanation": "V原语是唤醒原语，其工作内容是把一个被阻塞的进程的状态设置为唤醒。参见教材P5。"
  },
  {
    "id": "sysintegration_q4",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "汇编语言中，属于算术运算指令的是（　）。",
    "options": [
      "MOV",
      "ADD",
      "JMP",
      "IN"
    ],
    "answer": "ADD",
    "explanation": "ADD（加法）属于算术运算指令；MOV（传送）、IN（输入）是数据传送指令；JMP（跳转）是控制转移指令。参见教材P6。"
  },
  {
    "id": "sysintegration_q5",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "计算机系统结构的定义是（　）。",
    "options": [
      "硬件逻辑实现",
      "软硬件交界面的功能特性",
      "物理器件的制造工艺",
      "软件编程接口"
    ],
    "answer": "软硬件交界面的功能特性",
    "explanation": "计算机系统结构主要研究软硬件功能分配及对软硬件界面的确定。参见教材P11。"
  },
  {
    "id": "sysintegration_q6",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "计算机系统结构发展的第四阶段特征是（　）。",
    "options": [
      "集中式单一主机模式",
      "分布式客户机/服务器模式",
      "多程序多用户系统",
      "汇编语言为主的编程模式"
    ],
    "answer": "分布式客户机/服务器模式",
    "explanation": "在第四阶段（1980年代后期至今），计算机系统结构迅速地从集中式的单一主机环境转变成分布的客户机/服务器模式。参见教材P13。"
  },
  {
    "id": "sysintegration_q7",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "衡量计算机可靠性的指标是（　）。",
    "options": [
      "平均无故障时间",
      "每秒百万指令数",
      "每秒百万浮点运算",
      "每时钟周期指令数"
    ],
    "answer": "平均无故障时间",
    "explanation": "计算机可靠性是指在一定的时间范围内，计算机系统完成应有功能的能力，通常使用平均无故障时间。参见教材P22。"
  },
  {
    "id": "sysintegration_q8",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "阿姆达尔定律的核心思想是（　）。",
    "options": [
      "程序访问具有时间和空间局部性",
      "优化经常性事件以提升整体性能",
      "并行性开发可通过时间重叠实现",
      "哈夫曼编码可压缩高频事件"
    ],
    "answer": "优化经常性事件以提升整体性能",
    "explanation": "阿姆达尔定律指出，加快经常性事件的执行速度能够明显提高整个计算机系统的运行速度。参见教材P23。"
  },
  {
    "id": "sysintegration_q9",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "软件向后兼容的含义是（　）。",
    "options": [
      "低版本程序在高版本环境运行",
      "高版本程序处理低版本数据",
      "不同软件间数据格式兼容",
      "同一软件在不同系统运行"
    ],
    "answer": "高版本程序处理低版本数据",
    "explanation": "向后兼容指新版本软件能处理旧版本生成的数据。参见教材P29。"
  },
  {
    "id": "sysintegration_q10",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "系列机的关键特征是（　）。",
    "options": [
      "相同的硬件配置",
      "软件兼容性",
      "相同的价格区间",
      "相同的物理设计"
    ],
    "answer": "软件兼容性",
    "explanation": "系列机中各个型号之间必须具备软件兼容性。参见教材P29。"
  },
  {
    "id": "sysintegration_q11",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "并行性开发途径不包括（　）。",
    "options": [
      "时间重叠",
      "资源重复",
      "资源共享",
      "指令串行执行"
    ],
    "answer": "指令串行执行",
    "explanation": "并行性开发途径主要包括时间重叠、资源重复和资源共享这三种方法。参见教材P34。"
  },
  {
    "id": "sysintegration_q12",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "Flynn分类法中，SIMD是（　）。",
    "options": [
      "单指令流单数据流",
      "单指令流多数据流",
      "多指令流单数据流",
      "多指令流多数据流"
    ],
    "answer": "单指令流多数据流",
    "explanation": "Flynn分类法中，SIMD是单指令流多数据流。参见教材P36。"
  },
  {
    "id": "sysintegration_q13",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "冯式分类法中，字并位并计算机的特点是（　）。",
    "options": [
      "字宽1位，位宽1位",
      "字宽>1位，位宽1位",
      "字宽1位，位宽>1位",
      "字宽>1位，位宽>1位"
    ],
    "answer": "字宽>1位，位宽>1位",
    "explanation": "字并位并计算机就是字宽为大于1、位宽为大于1的计算机。参见教材P38。"
  },
  {
    "id": "sysintegration_q14",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "下列属于性能分类法的计算机类型是（　）。",
    "options": [
      "巨型计算机",
      "科学计算计算机",
      "分布式计算机",
      "堆栈机"
    ],
    "answer": "巨型计算机",
    "explanation": "性能分类法将计算机分为巨型、大型、中小型和微型计算机。参见教材P34。"
  },
  {
    "id": "sysintegration_q15",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "计算机字长的定义是（　）。",
    "options": [
      "CPU一次处理的二进制位数",
      "存储单位的字节数",
      "指令中地址码的长度",
      "总线传输的带宽"
    ],
    "answer": "CPU一次处理的二进制位数",
    "explanation": "计算机的字长是CPU—次能够处理的二进制数据的位数。参见教材P20。"
  },
  {
    "id": "sysintegration_q16",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "软件可移植性设计中，“适配层”的作用是（　）。",
    "options": [
      "实现核心业务逻辑",
      "隔离不同目标环境的差异",
      "优化代码执行效率",
      "配置系统环境参数"
    ],
    "answer": "隔离不同目标环境的差异",
    "explanation": "适配器能够让软件主体无法觉察到不同目标环境的差异，让软件主体能够在不同的目标环境下正常运行。参见教材P32。"
  },
  {
    "id": "sysintegration_q17",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "“固件”的定义是（　）。",
    "options": [
      "用硬件实现软件功能",
      "操作系统内核程序",
      "可动态修改的硬件逻辑",
      "应用程序的底层接口"
    ],
    "answer": "用硬件实现软件功能",
    "explanation": "固件是使用只读、读写存储器来实现软件功能的硬件。参见教材P2。"
  },
  {
    "id": "sysintegration_q18",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "计算机系统设计中，“自顶向下”的过程是（　）。",
    "options": [
      "从硬件设计到应用程序开发",
      "从应用需求到微指令系统设计",
      "从微指令到高级语言设计",
      "从硬件实现到系统结构定义"
    ],
    "answer": "从应用需求到微指令系统设计",
    "explanation": "采用自顶向下的设计过程包括设计面向应用的数学模型、设计髙级语言、设计操作系统、设计机器语言、设计硬件实现和微指令系统。参见教材P27。"
  },
  {
    "id": "sysintegration_q19",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "水平型微指令的格式不包括下列（　）字段。",
    "options": [
      "控制",
      "判别测试",
      "下地址",
      "操作码"
    ],
    "answer": "操作码",
    "explanation": "水平型微指令格式包括控制字段、判别测试字段和下地址字段。参见教材P2。"
  },
  {
    "id": "sysintegration_q20",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "信号量sem的取值为负数时，表示（　）。",
    "options": [
      "可用资源数量",
      "等待资源的进程数",
      "系统错误",
      "资源溢出"
    ],
    "answer": "等待资源的进程数",
    "explanation": "当sem变量值小于0的时候表示有多少个进程在等待使用资源。参见教材P4。"
  },
  {
    "id": "sysintegration_q21",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "嵌入式开发中常用的语言是（　）。",
    "options": [
      "Java",
      "Python",
      "C语言",
      "PHP"
    ],
    "answer": "C语言",
    "explanation": "目前嵌入式开发使用的语言主要以C语言为主。参见教材P10。"
  },
  {
    "id": "sysintegration_q22",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "计算机组成是计算机系统结构的（　）实现。",
    "options": [
      "物理",
      "逻辑",
      "硬件",
      "软件"
    ],
    "answer": "逻辑",
    "explanation": "计算机组成是计算机系统结构的逻辑实现。参见教材P13。"
  },
  {
    "id": "sysintegration_q23",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "程序访问的局部性包括（　）。",
    "options": [
      "时间局部性和空间局部性",
      "指令局部性和数据局部性",
      "进程局部性和线程局部性",
      "存储局部性和运算局部性"
    ],
    "answer": "时间局部性和空间局部性",
    "explanation": "程序访问的局部性包括时间局部性和空间局部性。参见教材P25。"
  },
  {
    "id": "sysintegration_q24",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "Flynn分类法中，多指令流多数据流（MIMD）的代表是（　）。",
    "options": [
      "单处理机",
      "并行向量处理机",
      "超标量处理机",
      "流水线计算机"
    ],
    "answer": "并行向量处理机",
    "explanation": "MIMD如并行向量处理机、SMP等，实现全面并行。参见教材P36。"
  },
  {
    "id": "sysintegration_q25",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "浮点数下溢的处理方式是（　）。",
    "options": [
      "机器停止运算",
      "尾数强制归0",
      "报错并继续运行",
      "溢出标志置1"
    ],
    "answer": "尾数强制归0",
    "explanation": "当浮点数的阶码小于最小阶码的时候出现下溢的情况，此时一般将尾数强制归0,之后计算机可以正常运行。参见教材P45。"
  },
  {
    "id": "sysintegration_q26",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "在原码一位乘运算中，乘积的符号位通过（　）确定。",
    "options": [
      "两个原码符号位的逻辑与运算",
      "两个原码符号位的逻辑或运算",
      "两个原码符号位的异或运算",
      "直接取被乘数的符号位"
    ],
    "answer": "两个原码符号位的异或运算",
    "explanation": "原码一位乘的符号由两个原码符号的异或运算决定。参见教材P51。"
  },
  {
    "id": "sysintegration_q27",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "移位运算中，当真值为正数的时候，不论进行什么样的移位运算，空位均填（　）。",
    "options": [
      "0",
      "1",
      "符号位",
      "随机值"
    ],
    "answer": "0",
    "explanation": "移位运算中，当真值为正数的时候，不论进行什么样的移位运算，空位均填0。参见教材P46。"
  },
  {
    "id": "sysintegration_q28",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "负数补码右移时，空位填充的二进制位是（　）。",
    "options": [
      "0",
      "1",
      "符号位",
      "随机值"
    ],
    "answer": "1",
    "explanation": "负数补码在右移的时候也就是左侧会出现空位，这个时候与反码的移位规则相同（即填1）。参见教材P46。"
  },
  {
    "id": "sysintegration_q29",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "指令的基本格式由（　）组成。",
    "options": [
      "操作码和地址码",
      "操作码和数据码",
      "地址码和控制码",
      "操作码和状态码"
    ],
    "answer": "操作码和地址码",
    "explanation": "指令的一般格式包括两个部分，分别是操作码和地址码。参见教材P63。"
  },
  {
    "id": "sysintegration_q30",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "四地址指令的主存储器访问次数是（　）。",
    "options": [
      "1次",
      "2次",
      "3次",
      "4次"
    ],
    "answer": "4次",
    "explanation": "完成一次四地址指令的操作需要访问四次主存储器，取指令一次，取两个操作数地址一共两次，存放操作结果一次。参见教材P66。"
  },
  {
    "id": "sysintegration_q31",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "立即寻址的形式地址A存放的是（　）。",
    "options": [
      "操作数地址",
      "操作数本身",
      "有效地址",
      "寄存器编号"
    ],
    "answer": "操作数本身",
    "explanation": "立即寻址的形式地址A存放的不是操作数的地址而是操作数本身。参见教材P70。"
  },
  {
    "id": "sysintegration_q32",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "间接寻址的有效地址EA是（　）。",
    "options": [
      "A",
      "(A)",
      "A+(BR)",
      "A+(PC)"
    ],
    "answer": "(A)",
    "explanation": "间接寻址中，最终的有效地址是通过形式地址A间接提供的，即EA = (A)。参见教材P71。"
  },
  {
    "id": "sysintegration_q33",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "基址寻址的有效地址计算方式为（　）。",
    "options": [
      "EA=A",
      "EA=(A)",
      "EA=A+(BR)",
      "EA=A+(IX)"
    ],
    "answer": "EA=A+(BR)",
    "explanation": "基址寻址中，有效地址EA等于指令字中的形式地址与基址寄存器中的内容相加，即EA = A + ( BR)。参见教材P74。"
  },
  {
    "id": "sysintegration_q34",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "堆栈寻址中，（　）运行方式使用一个接口进行进出栈操作。",
    "options": [
      "先进先出",
      "先进后出",
      "随机访问",
      "顺序访问"
    ],
    "answer": "先进后出",
    "explanation": "堆栈寻址中，先进后出运行方式使用一个接口进行进出栈操作。参见教材P77。"
  },
  {
    "id": "sysintegration_q35",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "下列属于转移操作的是（　）。",
    "options": [
      "ADD",
      "JMP",
      "IN",
      "CLR"
    ],
    "answer": "JMP",
    "explanation": "转移操作包括无条件转移操作（JMP）、条件转移操作、跳转操作、过程返回操作以及陷阱操作等。参见教材P69。"
  },
  {
    "id": "sysintegration_q36",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "PDP-11的指令字长不包括下列（　）。",
    "options": [
      "16位",
      "32位",
      "48位",
      "64位"
    ],
    "answer": "64位",
    "explanation": "PDP-11的指令字长有16位、32位、48位三种。参见教材P79。"
  },
  {
    "id": "sysintegration_q37",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "复杂指令系统遵循的“80-20规律”是指（　）。",
    "options": [
      "80%的指令完成20%的功能",
      "80%的语句使用20%的指令",
      "80%的程序使用20%的内存",
      "80%的时间运行20%的程序"
    ],
    "answer": "80%的语句使用20%的指令",
    "explanation": "对复杂指令系统的研究发现80-20规律，即程序中80%的语句仅使用计算机中20%的指令。参见教材P83。"
  },
  {
    "id": "sysintegration_q38",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "有符号位的移位运算称为（　）。",
    "options": [
      "逻辑移位",
      "算术移位",
      "循环移位",
      "带进位移位"
    ],
    "answer": "算术移位",
    "explanation": "有符号位的移位运算称为算术移位，无符号位的移位称为逻辑移位。参见教材P48。"
  },
  {
    "id": "sysintegration_q39",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "浮点数规格化时，向左规格化是指（　）。",
    "options": [
      "尾数左移，阶码加1",
      "尾数左移，阶码减1",
      "尾数右移，阶码加1",
      "尾数右移，阶码减1"
    ],
    "answer": "尾数左移，阶码减1",
    "explanation": "左规是当尾数出现00.0xx…x或者11.1xx…x这两种情况的时候，尾数需要左移一位，同时阶码值减1。参见教材P59。"
  },
  {
    "id": "sysintegration_q40",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "当浮点数和定点数的位数相同时，浮点数的表示范围（　）定点数的表示范围。",
    "options": [
      "大于",
      "小于",
      "等于",
      "不确定"
    ],
    "answer": "大于",
    "explanation": "当浮点数和定点数的位数相同时，浮点数的表示范围大于定点数的表示范围。参见教材P45。"
  },
  {
    "id": "sysintegration_q41",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "浮点数加减运算的第一步是（　）。",
    "options": [
      "尾数求和",
      "规格化",
      "对阶运算",
      "舍入"
    ],
    "answer": "对阶运算",
    "explanation": "浮点数加减运算的第一步是对阶运算。参见教材P59。"
  },
  {
    "id": "sysintegration_q42",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "浮点数乘法的阶码运算为（　）。",
    "options": [
      "相加",
      "相减",
      "相乘",
      "相除"
    ],
    "answer": "相加",
    "explanation": "两个浮点数相乘，乘积的阶码就是相乘两个数的阶码的和。参见教材P60。"
  },
  {
    "id": "sysintegration_q43",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "浮点数舍入方法中，0舍1入法是指在尾数右移的过程中，（　）。",
    "options": [
      "被移除的最高位若为0，则舍去，若为1，则将移位后的尾数加1",
      "被移除的最高位若为1，则舍去，若为0，则将移位后的尾数加1",
      "始终舍去除数",
      "始终尾数加1"
    ],
    "answer": "被移除的最高位若为0，则舍去，若为1，则将移位后的尾数加1",
    "explanation": "0舍1入法是指在尾数右移的过程中，被移除的最高位若为0，则舍去，若为1，则将移位后的尾数加1。参见教材P59。"
  },
  {
    "id": "sysintegration_q44",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "衡量主存性能的技术指标不包括（　）。",
    "options": [
      "存储容量",
      "存取时间",
      "时钟频率",
      "存储器带宽"
    ],
    "answer": "时钟频率",
    "explanation": "衡量一个主存储器性能的技术指标主要有存储容量、存取时间、存储周期和存储器带宽。参见教材P86。"
  },
  {
    "id": "sysintegration_q45",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "单位时间里存储器所存取的信息量即（　）。",
    "options": [
      "存储周期",
      "存储器带宽",
      "存储容量",
      "存取时间"
    ],
    "answer": "存储器带宽",
    "explanation": "存储器带宽是指单位时间里存储器所存取的信息量。参见教材P87。"
  },
  {
    "id": "sysintegration_q46",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "存储器带宽的计算公式是（　）。",
    "options": [
      "数据宽度/存储周期",
      "存储周期/数据宽度",
      "数据宽度×存储周期",
      "数据宽度+存储周期"
    ],
    "answer": "数据宽度/存储周期",
    "explanation": "存储器带宽=数据宽度/存储周期，单位为b/s或B/s。参见教材P87。"
  },
  {
    "id": "sysintegration_q47",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "中断处理次序可以通过（　）改变。",
    "options": [
      "硬件排队器",
      "中断级屏蔽位",
      "程序计数器",
      "存储周期"
    ],
    "answer": "中断级屏蔽位",
    "explanation": "操作系统可通过设置中断级屏蔽位改变实际中断处理次序。参见教材P94。"
  },
  {
    "id": "sysintegration_q48",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "由写在程序中的语句引起的中断程序的执行，称为（　）。",
    "options": [
      "内中断",
      "外中断",
      "软件中断",
      "可屏蔽中断"
    ],
    "answer": "软件中断",
    "explanation": "由写在程序中的语句引起的中断程序的执行，称为软件中断。参见教材P93。"
  },
  {
    "id": "sysintegration_q49",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "流水线按是否有反馈回路可分为（　）。",
    "options": [
      "线性和非线性",
      "单功能和多功能",
      "静态和动态",
      "标量和向量"
    ],
    "answer": "线性和非线性",
    "explanation": "按是否有反馈回路可以分为线性流水线和非线性流水线。参见教材P173。"
  },
  {
    "id": "sysintegration_q50",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "可屏蔽中断的请求线是（　）。",
    "options": [
      "INTR",
      "NMI",
      "IRQ",
      "RESET"
    ],
    "answer": "INTR",
    "explanation": "可屏蔽中断是指通过可屏蔽中断请求线INTR向CPU进行请求的中断。参见教材P93。"
  },
  {
    "id": "sysintegration_q51",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "链式查询总线控制的缺点是（　）。",
    "options": [
      "硬件复杂",
      "优先级固定",
      "无法扩充设备",
      "响应速度快"
    ],
    "answer": "优先级固定",
    "explanation": "链式查询中离控制器越近的设备优先级越高，优先级固定且对电路故障敏感。参见教材P101。"
  },
  {
    "id": "sysintegration_q52",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "异步通信的特点是（　）。",
    "options": [
      "有公共时钟",
      "靠应答信号通信",
      "传输速度高",
      "适用于高速设备"
    ],
    "answer": "靠应答信号通信",
    "explanation": "异步通信在部件之间进行通信时没有公共的时间标准，而是靠发送信息的同时发出本设备的时间标志信号，用“应答方式”来进行。参见教材P105。"
  },
  {
    "id": "sysintegration_q53",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "总线宽度指的是（　）。",
    "options": [
      "地址线根数",
      "控制线根数",
      "数据线根数",
      "电源线根数"
    ],
    "answer": "数据线根数",
    "explanation": "总线宽度是数据总线的根数。参见教材P107。"
  },
  {
    "id": "sysintegration_q54",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "半同步通信的关键信号是（　）。",
    "options": [
      "WAIT",
      "READY",
      "ACK",
      "BR"
    ],
    "answer": "WAIT",
    "explanation": "半同步通信增设了一条“等待”（WAIT）响应信号线，采用插入时钟（等待）周期的措施来协调通信双方的配合问题。参见教材P105。"
  },
  {
    "id": "sysintegration_q55",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "通道处理机的功能不包括（　）。",
    "options": [
      "执行通道程序",
      "控制外设操作",
      "数据格式转换",
      "执行用户程序"
    ],
    "answer": "执行用户程序",
    "explanation": "通道处理机执行通道程序，负责外设控制和数据传输，用户程序由CPU执行。参见教材P117。"
  },
  {
    "id": "sysintegration_q56",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "数组多路通道适合连接（　）。",
    "options": [
      "低速字符设备",
      "高速设备",
      "优先级高的设备",
      "所有类型设备"
    ],
    "answer": "高速设备",
    "explanation": "数组多路通道适合于链接多台像磁盘那样的高速设备。参见教材P119。"
  },
  {
    "id": "sysintegration_q57",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "通道极限流量的计算公式中，与（　）无关。",
    "options": [
      "选择设备时间TS",
      "传送字节时间TD",
      "数据块大小K",
      "CPU时钟频率"
    ],
    "answer": "CPU时钟频率",
    "explanation": "通道流量公式为f=K/(TS+K*TD)，与CPU时钟频率无关。参见教材P121。"
  },
  {
    "id": "sysintegration_q58",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "外围处理机（PPU）与通道的主要区别是（　）。",
    "options": [
      "无独立指令集",
      "不能执行运算",
      "更接近通用处理机",
      "仅控制外设"
    ],
    "answer": "更接近通用处理机",
    "explanation": "PPU更接近通用处理机，具备运算能力，可独立处理输入/输出及简单运算，而通道功能较单一。参见教材P124。"
  },
  {
    "id": "sysintegration_q59",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "DMA传送方式不包括（　）。",
    "options": [
      "单元传送",
      "块传送",
      "on-the-fly传送",
      "中断传送"
    ],
    "answer": "中断传送",
    "explanation": "DMA传送方式包括单元传送、块传送和on-the-fly传送。参见教材P113。"
  },
  {
    "id": "sysintegration_q60",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "虚拟存储器的“主存-辅存”层次解决的主要问题是（　）。",
    "options": [
      "速度匹配",
      "容量不足",
      "成本过高",
      "硬件复杂度"
    ],
    "answer": "容量不足",
    "explanation": "虚拟存储器通过辅存扩展主存容量，解决主存容量不足问题，速度由主存决定。参见教材P127。"
  },
  {
    "id": "sysintegration_q61",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "页式虚拟存储器中，虚地址到实地址的变换通过（　）实现。",
    "options": [
      "段表",
      "页表",
      "快表",
      "目录表"
    ],
    "answer": "页表",
    "explanation": "页式管理通过页表实现虚地址到实地址的变换。参见教材P135。"
  },
  {
    "id": "sysintegration_q62",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "段式管理的优点不包括（　）。",
    "options": [
      "便于程序模块化设计",
      "易于实现存储保护",
      "零头浪费小",
      "支持段的动态扩展"
    ],
    "answer": "零头浪费小",
    "explanation": "段式管理中，段长不固定，可能产生较大段间零头，零头浪费比页式大。参见教材P132。"
  },
  {
    "id": "sysintegration_q63",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "LRU替换算法的核心思想是（　）。",
    "options": [
      "替换最早进入主存的页",
      "替换最久未使用的页",
      "替换访问次数最少的页",
      "随机替换"
    ],
    "answer": "替换最久未使用的页",
    "explanation": "LRU算法替换过去一段时间里最久未被使用的页。参见教材P142。"
  },
  {
    "id": "sysintegration_q64",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "下列属于堆栈型替换算法的是（　）。",
    "options": [
      "FIFO",
      "LRU",
      "随机算法",
      "第二次机会算法"
    ],
    "answer": "LRU",
    "explanation": "LRU和OPT属于堆栈型算法。参见教材P146。"
  },
  {
    "id": "sysintegration_q65",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "页面失效处理中，后援寄存器的作用是（　）。",
    "options": [
      "保存CPU状态",
      "记录页表地址",
      "暂存替换页",
      "保存故障点现场"
    ],
    "answer": "保存故障点现场",
    "explanation": "后援寄存器保存页面失效时的指令现场，以便调页后恢复执行。参见教材P146。"
  },
  {
    "id": "sysintegration_q66",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "Cache的基本结构不包括（　）。",
    "options": [
      "存储体",
      "地址转换部件",
      "替换部件",
      "指令译码器"
    ],
    "answer": "指令译码器",
    "explanation": "Cache由存储体、地址转换部件、替换部件组成。参见教材P152。"
  },
  {
    "id": "sysintegration_q67",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "组相连映像中，组内块数S=1时等同于（　）。",
    "options": [
      "全相连映像",
      "直接映像",
      "段相连映像",
      "混合映像"
    ],
    "answer": "直接映像",
    "explanation": "组相连中S=1时就变成了直接映像。参见教材P159。"
  },
  {
    "id": "sysintegration_q68",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "写回法的特点是（　）。",
    "options": [
      "写Cache时同步写主存",
      "替换时才写回主存",
      "需要更多缓冲器",
      "主存与Cache一致性好"
    ],
    "answer": "替换时才写回主存",
    "explanation": "写回法是在CPU执行写操作时，只将信息写入Cache，仅当需要替换时，才将改写过的Cache块先写回主存，然后再调入新块。参见教材P163。"
  },
  {
    "id": "sysintegration_q69",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "全Cache技术的特点是（　）。",
    "options": [
      "无主存，直接用Cache和辅存",
      "必须保留主存",
      "仅用于单处理机",
      "块大小固定为512B"
    ],
    "answer": "无主存，直接用Cache和辅存",
    "explanation": "全Cache技术省去主存，用Cache和辅存构成存储系统，尚未商品化。参见教材P168。"
  },
  {
    "id": "sysintegration_q70",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "三级存储体系的三种形式不包括（　）。",
    "options": [
      "物理地址Cache",
      "虚地址Cache",
      "混合地址Cache",
      "全Cache技术"
    ],
    "answer": "混合地址Cache",
    "explanation": "三级存储体系包括物理地址Cache、虚地址Cache、全Cache技术，无混合地址Cache。参见教材P166。"
  },
  {
    "id": "sysintegration_q71",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "下列替换算法中，可能出现异常现象的是（　）。",
    "options": [
      "LRU",
      "FIFO",
      "OPT",
      "LFU"
    ],
    "answer": "FIFO",
    "explanation": "FIFO算法缺点是不能正确反映程序局部性原理，命中率不高，可能出现一种异常现象。参见教材P160。"
  },
  {
    "id": "sysintegration_q72",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "将访问次数最少的内容替换出Cache即（　）。",
    "options": [
      "LRU",
      "FIFO",
      "LFU",
      "Hybrid"
    ],
    "answer": "LFU",
    "explanation": "LFU算法将访问次数最少的内容替换出Cache。参见教材P160。"
  },
  {
    "id": "sysintegration_q73",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "写直达法的特点是（　）。",
    "options": [
      "主存写操作频繁",
      "Cache命中率低",
      "硬件实现复杂",
      "无法保证一致性"
    ],
    "answer": "主存写操作频繁",
    "explanation": "写直达法每当处理机写入Cache的同时，也通过此通路直接写入主存。参见教材P163。"
  },
  {
    "id": "sysintegration_q74",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "虚拟存储器的逻辑地址到物理地址变换由（　）完成。",
    "options": [
      "应用程序",
      "编译器",
      "硬件和操作系统",
      "用户手动"
    ],
    "answer": "硬件和操作系统",
    "explanation": "对虚拟存储器而言，其逻辑地址变换为物理地址的工作是由计算机系统的硬件和操作系统自动完成的，对程序员透明。参见教材P88。"
  },
  {
    "id": "sysintegration_q75",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "Cache的替换算法中，硬件实现最简单的是（　）。",
    "options": [
      "LRU",
      "FIFO",
      "随机算法",
      "LFU"
    ],
    "answer": "随机算法",
    "explanation": "随机算法简单，易于实现。参见教材P143。"
  },
  {
    "id": "sysintegration_q76",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "三级存储体系的目标是（　）。",
    "options": [
      "速度接近辅存，容量接近Cache",
      "速度接近Cache，容量接近辅存",
      "速度接近主存，容量接近辅存",
      "速度接近辅存，容量接近主存"
    ],
    "answer": "速度接近Cache，容量接近辅存",
    "explanation": "三级体系追求速度接近Cache，容量接近辅存，成本接近辅存的性价比。参见教材P132。"
  },
  {
    "id": "sysintegration_q77",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "主存储器中任意一个内存块都能映射到CPU缓存中任意块即（　）。",
    "options": [
      "组相联映射",
      "全相联映射",
      "直接相联映射",
      "磁盘调度"
    ],
    "answer": "全相联映射",
    "explanation": "全相联映射方式是指主存储器中任意一个内存块都能映射到CPU缓存中任意块。参见教材P15。"
  },
  {
    "id": "sysintegration_q78",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "指令的一次重叠解释将执行分为（　）两个阶段。",
    "options": [
      "取指和执行",
      "分析和执行",
      "取指和分析",
      "译码和执行"
    ],
    "answer": "分析和执行",
    "explanation": "一次重叠将指令执行分为“分析”和“执行”阶段。参见教材P170。"
  },
  {
    "id": "sysintegration_q79",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "二次重叠方式的三个阶段不包括（　）。",
    "options": [
      "取指",
      "分析",
      "执行",
      "存储"
    ],
    "answer": "存储",
    "explanation": "二次重叠分为“取指”“分析”“执行”三个阶段。参见教材P170。"
  },
  {
    "id": "sysintegration_q80",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "实现重叠解释的关键问题不包括（　）。",
    "options": [
      "独立的指令部件",
      "访存冲突解决",
      "功能段时间均衡",
      "指令预编译"
    ],
    "answer": "指令预编译",
    "explanation": "重叠解释需解决独立部件、访存冲突、时间均衡和指令之间各种相关的处理。参见教材P170。"
  },
  {
    "id": "sysintegration_q81",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "先行控制技术的核心是（　）。",
    "options": [
      "缓冲技术和预处理技术",
      "指令重排序",
      "多体并行存储",
      "动态调度"
    ],
    "answer": "缓冲技术和预处理技术",
    "explanation": "先行控制技术的关键是缓冲技术和预处理技术。参见教材P171。"
  },
  {
    "id": "sysintegration_q82",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "先行操作栈的作用是（　）。",
    "options": [
      "暂存指令操作数",
      "缓冲预处理后的RR型指令",
      "存储运算结果",
      "记录访存地址"
    ],
    "answer": "缓冲预处理后的RR型指令",
    "explanation": "先行操作栈存放指令分析器预处理后的RR型指令，供运算器执行。参见教材P172。"
  },
  {
    "id": "sysintegration_q83",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "后行写数栈的功能是（　）。",
    "options": [
      "缓冲写主存的数据",
      "暂存取主存的指令",
      "存储运算中间结果",
      "记录指令执行顺序"
    ],
    "answer": "缓冲写主存的数据",
    "explanation": "后行写数栈缓冲运算器写主存的数据，避免主存访问冲突。参见教材P172。"
  },
  {
    "id": "sysintegration_q84",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "先行控制中的预处理技术将指令转为（　）类型。",
    "options": [
      "寄存器-存储器型",
      "存储器-存储器型",
      "寄存器-寄存器型",
      "立即数型"
    ],
    "answer": "寄存器-寄存器型",
    "explanation": "预处理技术主要把将来在运算器中运算的指令的寻址方式处理为“寄存器-寄存器”型，即RR型。参见教材P171。"
  },
  {
    "id": "sysintegration_q85",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "重叠方式中，访存冲突的解决方法不包括（　）。",
    "options": [
      "低位交叉并行存取方式",
      "独立指令/数据存储器",
      "提高主存频率",
      "先行控制技术"
    ],
    "answer": "提高主存频率",
    "explanation": "解决访存冲突通过低位交叉并行存取方式、独立指令/数据存储器、先行控制。参见教材P171。"
  },
  {
    "id": "sysintegration_q86",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "流水线按功能数量可分为（　）。",
    "options": [
      "线性和非线性",
      "单功能和多功能",
      "静态和动态",
      "标量和向量"
    ],
    "answer": "单功能和多功能",
    "explanation": "按流水线具有的功能多少可以将流水线分为单功能流水线和多功能流水线。参见教材P174。"
  },
  {
    "id": "sysintegration_q87",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "非线性流水线的特点是（　）。",
    "options": [
      "无反馈回路",
      "任务多次经过同一功能段",
      "仅处理标量数据",
      "吞吐率固定"
    ],
    "answer": "任务多次经过同一功能段",
    "explanation": "如果该任务需要多次经过某个功能段，即只要某个功能段被用到了两次及两次以上，则该流水线被称为非线性流水线。参见教材P173。"
  },
  {
    "id": "sysintegration_q88",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "多体交叉存储器采用低位交叉的目的是（　）。",
    "options": [
      "提高存储容量",
      "减少访存冲突",
      "简化地址变换",
      "降低硬件成本"
    ],
    "answer": "减少访存冲突",
    "explanation": "高位交叉编址方案中，由于程序或数据存放在一个模块中，运行时极易发生访存冲突问题，所以采用低位交叉编址方案。参见教材P252。"
  },
  {
    "id": "sysintegration_q89",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "吞吐率TP的定义是（　）。",
    "options": [
      "单位时间处理的任务数",
      "流水线总执行时间",
      "功能段数量",
      "加速比与效率的乘积"
    ],
    "answer": "单位时间处理的任务数",
    "explanation": "吞吐率TP是流水线单位时间内能处理的任务数或结果数。参见教材P175。"
  },
  {
    "id": "sysintegration_q90",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "流水线中，加速比S的计算公式是（　）。",
    "options": [
      "顺序执行时间/流水执行时间",
      "流水执行时间/顺序执行时间",
      "吞吐率×流水执行时间",
      "效率×段数"
    ],
    "answer": "顺序执行时间/流水执行时间",
    "explanation": "加速比表示为顺序执行方式的执行时间比上用流水方式的执行时间。参见教材P179。"
  },
  {
    "id": "sysintegration_q91",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "全局性相关的处理方法不包括（　）。",
    "options": [
      "推后读操作",
      "加快和提前形成条件码",
      "采取延迟转移",
      "猜测法"
    ],
    "answer": "推后读操作",
    "explanation": "全局性相关处理包括猜测法、加快和提前形成条件码、采取延迟转移和加快短循环程序的处理。参见教材P185。"
  },
  {
    "id": "sysintegration_q92",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "流水线按功能数量可分为（　）。",
    "options": [
      "线性和非线性",
      "单功能和多功能",
      "静态和动态",
      "标量和向量"
    ],
    "answer": "单功能和多功能",
    "explanation": "按流水线具有的功能多少可以将流水线分为单功能流水线和多功能流水线。参见教材P174。"
  },
  {
    "id": "sysintegration_q93",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "全局性相关主要指（　）。",
    "options": [
      "已进入流水线转移指令与后续指令的相关",
      "寄存器读写冲突",
      "访存地址冲突",
      "运算结果依赖"
    ],
    "answer": "已进入流水线转移指令与后续指令的相关",
    "explanation": "全局性相关指已进入流水线的转移指令和其后续指令之间的相关。参见教材P184。"
  },
  {
    "id": "sysintegration_q94",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "精确断点法的特点是（　）。",
    "options": [
      "中断时流水线继续执行",
      "断点不精确但效率高",
      "保存完整现场便于恢复",
      "无需后援寄存器"
    ],
    "answer": "保存完整现场便于恢复",
    "explanation": "精确断点法保存所有流水线状态，中断处理完后能准确进行现场恢复。参见教材P187。"
  },
  {
    "id": "sysintegration_q95",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "VLIW的特点是（　）。",
    "options": [
      "指令字长数百位，多个功能部件并发工作",
      "动态调度指令并行",
      "依赖硬件动态检测相关",
      "与RISC架构冲突"
    ],
    "answer": "指令字长数百位，多个功能部件并发工作",
    "explanation": "VLIW指令字长可达数百位，多个功能部件并发工作。参见教材P195。"
  },
  {
    "id": "sysintegration_q96",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "超长指令字处理机的优点不包括（　）。",
    "options": [
      "指令译码相对容易",
      "能获得较高的指令级并行度",
      "硬件结构较为简单",
      "对传统硬件和软件有良好兼容性"
    ],
    "answer": "对传统硬件和软件有良好兼容性",
    "explanation": "超长指令字处理机缺乏对传统硬件和软件的兼容，这是其缺点。参见教材P195。"
  },
  {
    "id": "sysintegration_q97",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "关于超长指令字处理机，下列说法正确的是（　）。",
    "options": [
      "超长指令组装成功与否和短指令集合特点无关",
      "指令字中各字段都能有效利用，不会浪费存储空间",
      "系统结构和编译系统可分开独立设计",
      "因指令运算器控制字段与硬件紧密耦合，机器扩展性差"
    ],
    "answer": "因指令运算器控制字段与硬件紧密耦合，机器扩展性差",
    "explanation": "超长指令能否组装成功很大程度取决于短指令集合特点，容易出现指令字中许多字段无操作，浪费存储空间，系统结构和编译系统需同时设计。参见教材P195。"
  },
  {
    "id": "sysintegration_q98",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "典型的超长指令字处理机有（　）。",
    "options": [
      "Inteli 7",
      "Cydra 5",
      "AMD Ryzen",
      "ARM Cortex"
    ],
    "answer": "Cydra 5",
    "explanation": "典型的超长指令字处理机有Multiflow公司的TARCE计算机和Cydrome公司的Cydra 5计算机。参见教材P196。"
  },
  {
    "id": "sysintegration_q99",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "向量处理机中，横向处理方式的特点是（　）。",
    "options": [
      "数据相关导致流水线断流",
      "无法处理长向量",
      "硬件复杂度高",
      "只能处理标量运算"
    ],
    "answer": "数据相关导致流水线断流",
    "explanation": "横向处理因为数据相关的存在，流水机器会出现断流。参见教材P200。"
  },
  {
    "id": "sysintegration_q100",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "CRAY-1向量处理机的向量寄存器组数量是（　）。",
    "options": [
      "4个",
      "8个",
      "16个",
      "32个"
    ],
    "answer": "8个",
    "explanation": "CRAY-1的向量寄存器组V0~V7。参见教材P202。"
  },
  {
    "id": "sysintegration_q101",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "向量指令执行中的“Vi冲突”指（　）。",
    "options": [
      "不同指令使用相同功能部件",
      "源向量或结果向量使用相同寄存器",
      "指令格式错误",
      "向量长度超过寄存器容量"
    ],
    "answer": "源向量或结果向量使用相同寄存器",
    "explanation": "Vi冲突指要求并行工作的各向量指令，源向量或结果向量使用了相同的Vi。参见教材P203。"
  },
  {
    "id": "sysintegration_q102",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "向量指令的“链接”执行方式适用于（　）。",
    "options": [
      "无数据相关的指令",
      "存在“先写后读”相关的指令",
      "功能部件冲突的指令",
      "所有向量指令"
    ],
    "answer": "存在“先写后读”相关的指令",
    "explanation": "多条向量指令之间存在“先写后读”相关时，可采用“链接”方式执行。参见教材P204。"
  },
  {
    "id": "sysintegration_q103",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "向量屏蔽技术的作用是（　）。",
    "options": [
      "加速条件语句处理",
      "提高寄存器利用率",
      "减少访存次数",
      "优化浮点运算精度"
    ],
    "answer": "加速条件语句处理",
    "explanation": "向量屏蔽寄存器VM控制向量元素是否参与运算，用于加速条件语句处理。参见教材P205。"
  },
  {
    "id": "sysintegration_q104",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "向量递归操作的实现方式是（　）。",
    "options": [
      "源向量与结果向量共用寄存器",
      "增加专用递归寄存器",
      "分段处理长向量",
      "降低流水线频率"
    ],
    "answer": "源向量与结果向量共用寄存器",
    "explanation": "通过让源向量和结果向量使用同一寄存器组，并控制分量计数器值的修改来实现递归操作。参见教材P206。"
  },
  {
    "id": "sysintegration_q105",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "向量处理机中，纵横处理方式适用于（　）。",
    "options": [
      "向量长度小于向量寄存器长度",
      "向量长度大于向量寄存器长度",
      "标量运算为主的程序",
      "递归迭代运算"
    ],
    "answer": "向量长度大于向量寄存器长度",
    "explanation": "向量处理机中，纵横处理方式适用于向量长度大于向量寄存器长度。参见教材P200。"
  },
  {
    "id": "sysintegration_q106",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "ILLIACIV处理单元阵列的连接方式是（　）。",
    "options": [
      "闭合螺线阵列",
      "全连接网络",
      "星形连接",
      "树形结构"
    ],
    "answer": "闭合螺线阵列",
    "explanation": "ILLIACIV的PU阵列构成了闭合螺线阵列。参见教材P210。"
  },
  {
    "id": "sysintegration_q107",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "分布式存储器构型阵列处理机的特点是（　）。",
    "options": [
      "所有PE共享集中式主存",
      "PE有独立局部存储器",
      "仅控制部件有存储器",
      "存储器与PE分离"
    ],
    "answer": "PE有独立局部存储器",
    "explanation": "分布式构型中各处理单元PE有局部存储器PEM用于存放被分布的数据。参见教材P207。"
  },
  {
    "id": "sysintegration_q108",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "CRAY-1中每个向量寄存器组Vi由（　）个标量寄存器构成。",
    "options": [
      "32",
      "64",
      "128",
      "256"
    ],
    "answer": "64",
    "explanation": "每个向量寄存器组Vi由 64个标量寄存器构成。参见教材P202。"
  },
  {
    "id": "sysintegration_q109",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "向量指令执行时，“功能部件冲突”的条件是（　）。",
    "options": [
      "不同指令使用相同向量寄存器",
      "多条指令调用同一功能流水线",
      "向量长度超过寄存器容量",
      "指令中存在标量操作"
    ],
    "answer": "多条指令调用同一功能流水线",
    "explanation": "功能部件冲突指同一个功能部件被要求并行工作的多条指令所使用。参见教材P204。"
  },
  {
    "id": "sysintegration_q110",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "多级立方体网络中，N=8时的级数是（　）。",
    "options": [
      "2级",
      "3级",
      "4级",
      "8级"
    ],
    "answer": "3级",
    "explanation": "多级立方体网络的级数为log2N，N=8时级数为3。参见教材P230。"
  },
  {
    "id": "sysintegration_q111",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "关于混洗交换网络与omega网络的说法，下列正确的是（　）。",
    "options": [
      "混洗交换是omega的逆网络",
      "多级混洗交换网络又称omega网络",
      "两者拓扑结构完全不同",
      "混洗交换是静态网络，omega是动态网络"
    ],
    "answer": "多级混洗交换网络又称omega网络",
    "explanation": "多级混洗交换网络又称omega网络。参见教材P227。"
  },
  {
    "id": "sysintegration_q112",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "多处理机与阵列处理机的并行性等级区别是（　）。",
    "options": [
      "多处理机实现指令操作级并行，阵列处理机实现任务级并行",
      "多处理机实现任务级并行，阵列处理机实现指令操作级并行",
      "两者均实现指令操作级并行",
      "两者均实现任务级并行"
    ],
    "answer": "多处理机实现任务级并行，阵列处理机实现指令操作级并行",
    "explanation": "阵列处理机实现的是指令操作级并行，多处理机则是作业或任务间的并行。参见教材P243。"
  },
  {
    "id": "sysintegration_q113",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "多处理机系统的主要技术问题不包括（　）。",
    "options": [
      "处理机间互连问题",
      "任务粒度的合理划分",
      "提高单处理机主频",
      "资源分配与进程同步"
    ],
    "answer": "提高单处理机主频",
    "explanation": "多处理机的技术问题集中在并行性开发、互连、任务划分、资源分配等，与单处理机主频无关。参见教材P243。"
  },
  {
    "id": "sysintegration_q114",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "紧耦合多处理机的典型特征是（　）。",
    "options": [
      "分布式存储器",
      "通过共享主存通信",
      "各处理机异构",
      "仅通过消息传递通信"
    ],
    "answer": "通过共享主存通信",
    "explanation": "紧耦合多处理机是通过共享主存实现处理机间通信的。参见教材P244。"
  },
  {
    "id": "sysintegration_q115",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "松耦合多处理机适合（　）的并行计算。",
    "options": [
      "细粒度",
      "粗粒度",
      "指令级",
      "向量级"
    ],
    "answer": "粗粒度",
    "explanation": "松耦合多处理机较适合做粗粒度的并行计算。参见教材P245。"
  },
  {
    "id": "sysintegration_q116",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "NUMA结构的缺点是（　）。",
    "options": [
      "扩展性差",
      "如果过多访问远程存储器会导致性能下降",
      "编程模型复杂",
      "必须使用同构处理机"
    ],
    "answer": "如果过多访问远程存储器会导致性能下降",
    "explanation": "NUMA结构的缺点：如果过多地访问远程存储器，则性能会下降。参见教材P246。"
  },
  {
    "id": "sysintegration_q117",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "多Cache一致性问题产生的原因不包括（　）。",
    "options": [
      "对共享数据的写操作",
      "I/O传输",
      "进程迁移",
      "存储器容量不足"
    ],
    "answer": "存储器容量不足",
    "explanation": "多Cache一致性问题产生的原因包括对共享数据的写操作、I/O传输和进程迁移。参见教材P254。"
  },
  {
    "id": "sysintegration_q118",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "写作废法的作用是（　）。",
    "options": [
      "更新所有Cache中的副本",
      "作废其他处理机Cache中的副本",
      "禁止进程迁移",
      "强制写回主存"
    ],
    "answer": "作废其他处理机Cache中的副本",
    "explanation": "写作废法通过作废其他Cache的副本来保证一致性。参见教材P255。"
  },
  {
    "id": "sysintegration_q119",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "目录表法适用于（　）的多处理机。",
    "options": [
      "总线互连的小规模",
      "大规模多级网络互连",
      "仅单处理机系统",
      "松耦合"
    ],
    "answer": "大规模多级网络互连",
    "explanation": "当处理机的机数很多，或采用多级网络互连的多处理机，往往基于目录的协议来实现。参见教材P255。"
  },
  {
    "id": "sysintegration_q120",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "同步型并行算法的特点是（　）。",
    "options": [
      "进程完全独立",
      "进程间需等待",
      "仅用于数值计算",
      "无需通信"
    ],
    "answer": "进程间需等待",
    "explanation": "同步型算法指并行的各进程间由于相关，必须顺次等待。参见教材P256。"
  },
  {
    "id": "sysintegration_q121",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "数据反相关的表现是（　）。",
    "options": [
      "Pj左部变量在Pi右部变量集内",
      "Pi左部变量在Pj右部变量集内",
      "Pi和Pj左部变量相同",
      "Pi和Pj无共同变量"
    ],
    "answer": "Pj左部变量在Pi右部变量集内",
    "explanation": "Pj左部变量在Pi右部变量集内是数据反相关的表现。参见教材P259。"
  },
  {
    "id": "sysintegration_q122",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "FORK语句的作用是（　）。",
    "options": [
      "终止进程",
      "派生新进程",
      "同步进程",
      "分配存储器"
    ],
    "answer": "派生新进程",
    "explanation": "执行FORK m语句时，派生出标号为m开始的新进程。参见教材P260。"
  },
  {
    "id": "sysintegration_q123",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "各自独立型操作系统适用于（　）。",
    "options": [
      "紧耦合多处理机",
      "松耦合多处理机",
      "仅单处理机",
      "向量处理机"
    ],
    "answer": "松耦合多处理机",
    "explanation": "各自独立型操作系统适合于松耦合多处理机。参见教材P271。"
  },
  {
    "id": "sysintegration_q124",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "容错计算的目标是（　）。",
    "options": [
      "完全避免故障",
      "故障时仍能正确完成计算",
      "仅提高单机性能",
      "减少Cache容量"
    ],
    "answer": "故障时仍能正确完成计算",
    "explanation": "容错计算指在硬件或软件故障产生的情况下，仍能将指定的算法准确地完成。参见教材P269。"
  },
  {
    "id": "sysintegration_q125",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "远程认证的作用是（　）。",
    "options": [
      "加密本地数据",
      "感知用户电脑的配置变化",
      "提高主频",
      "分配Cache"
    ],
    "answer": "感知用户电脑的配置变化",
    "explanation": "远程认证让授权方感知用户电脑的软硬件变化。参见教材P270。"
  },
  {
    "id": "sysintegration_q126",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "SMP结构的典型特征是（　）。",
    "options": [
      "分布式存储器",
      "共享主存",
      "仅消息传递通信",
      "异构处理机"
    ],
    "answer": "共享主存",
    "explanation": "SMP是对称多处理机，采用UMA结构共享主存。参见教材P272。"
  },
  {
    "id": "sysintegration_q127",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "MPP系统的互连网络通常是（　）。",
    "options": [
      "通用以太网",
      "定制高带宽网络",
      "无线网络",
      "单总线"
    ],
    "answer": "定制高带宽网络",
    "explanation": "MPP使用定制的高带宽、低延迟互连网络。参见教材P247。"
  },
  {
    "id": "sysintegration_q128",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "机群系统与MPP的主要区别是（　）。",
    "options": [
      "机群用通用互连网络，MPP用定制网络",
      "机群必须同构，MPP必须异构",
      "机群无存储器，MPP共享主存",
      "机群仅用于科学计算"
    ],
    "answer": "机群用通用互连网络，MPP用定制网络",
    "explanation": "机群常用商品化通用网络，MPP用定制网络。参见教材P247。"
  },
  {
    "id": "sysintegration_q129",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "并行向量处理机的典型代表是（　）。",
    "options": [
      "曙光一号",
      "银河2号",
      "Cm*",
      "IBM stretch"
    ],
    "answer": "银河2号",
    "explanation": "银河2号是我国典型的并行向量处理机。参见教材P272。"
  },
  {
    "id": "sysintegration_q130",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "NUMA结构的优点是（　）。",
    "options": [
      "扩展性好",
      "远程访问延迟低",
      "编程模型与单机相同",
      "必须同构处理机"
    ],
    "answer": "扩展性好",
    "explanation": "NUMA比UMA扩展性更好，支持更高并行性。参见教材P246。"
  },
  {
    "id": "sysintegration_q131",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "多处理机中蠕虫穿洞寻经网络的特点是（　）。",
    "options": [
      "消息分组整体传送",
      "小组异步流水传送",
      "仅用于主从型系统",
      "无需缓冲区"
    ],
    "answer": "小组异步流水传送",
    "explanation": "蠕虫网络将消息分组拆分为小组异步流水传送。参见教材P252。"
  },
  {
    "id": "sysintegration_q132",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "交叉开关形式的特点是（　）。",
    "options": [
      "按时间分割机制",
      "总线冲突概率高",
      "按空间分配机制",
      "仅适合小规模系统"
    ],
    "answer": "按空间分配机制",
    "explanation": "交叉开关不是公用总线的按时间分割机制，而是按空间分配机制。参见教材P249。"
  },
  {
    "id": "sysintegration_q133",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "多端口存储器形式的缺点是（　）。",
    "options": [
      "可扩展性差",
      "需频繁广播",
      "仅适合松耦合系统",
      "必须动态调整端口"
    ],
    "answer": "可扩展性差",
    "explanation": "多端口存储器端口数不宜太多，且一经做好不能改变，系统的可扩展性较差。参见教材P251。"
  },
  {
    "id": "sysintegration_q134",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "环形互连的缺点是（　）。",
    "options": [
      "物理参数难控制",
      "处理机增加时延迟增大",
      "仅支持同步通信",
      "必须使用光纤"
    ],
    "answer": "处理机增加时延迟增大",
    "explanation": "环形互连中处理机增多会导致传输延迟增加。参见教材P248。"
  },
  {
    "id": "sysintegration_q135",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "可信计算的关键技术不包括（　）。",
    "options": [
      "签注密钥",
      "存储器屏蔽",
      "动态主频调整",
      "密封存储"
    ],
    "answer": "动态主频调整",
    "explanation": "可信计算的5项技术不包括动态主频调整。参见教材P269。"
  },
  {
    "id": "sysintegration_q136",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "数据驱动方式的核心特征是（　）。",
    "options": [
      "依赖程序计数器控制指令执行",
      "指令执行仅需操作数到齐",
      "必须按固定顺序执行指令",
      "仅支持标量运算"
    ],
    "answer": "指令执行仅需操作数到齐",
    "explanation": "数据驱动方式中，程序中任意一条指令所需操作数（数据令牌）到齐即可“点火”。参见教材P274。"
  },
  {
    "id": "sysintegration_q137",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "数据令牌的作用是（　）。",
    "options": [
      "标记指令优先级",
      "表示操作数已就绪",
      "存储程序计数器值",
      "替代主存地址"
    ],
    "answer": "表示操作数已就绪",
    "explanation": "数据令牌是表示操作数或参数已准备就绪的标志。参见教材P275。"
  },
  {
    "id": "sysintegration_q138",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "静态数据流计算机的限制是（　）。",
    "options": [
      "不支持循环",
      "每条弧同时只能传送一个令牌",
      "无法处理布尔运算",
      "必须使用全局变量"
    ],
    "answer": "每条弧同时只能传送一个令牌",
    "explanation": "静态数据流机中，每条弧同一时刻只能传送一个数据令牌。参见教材P280。"
  },
  {
    "id": "sysintegration_q139",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "需求驱动模型的核心思想是（　）。",
    "options": [
      "操作按固定顺序执行",
      "操作仅在需要结果时启动",
      "依赖共享存储器",
      "强制同步操作"
    ],
    "answer": "操作仅在需要结果时启动",
    "explanation": "在需求驱动模型中，一个操作仅在需要用到其输出结果时才开始启动。参见教材P283。"
  },
  {
    "id": "sysintegration_q140",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "规约机的设计目标是（　）。",
    "options": [
      "支持传统命令式语言",
      "高效执行函数式程序",
      "优化向量运算",
      "减少Cache一致性开销"
    ],
    "answer": "高效执行函数式程序",
    "explanation": "规约机专为函数式语言设计，支持动态存储分配和并行规约。参见教材P283。"
  },
  {
    "id": "sysintegration_q141",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "串归约与图归约的主要区别是（　）。",
    "options": [
      "串归约支持子表达式共享",
      "图归约通过指针减少复制开销",
      "串归约使用全局变量",
      "图归约必须顺序执行"
    ],
    "answer": "图归约通过指针减少复制开销",
    "explanation": "图归约通过指针实现子表达式共享，省去了规约时的复制开销。参见教材P285。"
  },
  {
    "id": "sysintegration_q142",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "规约机的典型互连结构是（　）。",
    "options": [
      "总线型",
      "树形或多层次复合",
      "环形",
      "全连接网状"
    ],
    "answer": "树形或多层次复合",
    "explanation": "规约机常采用树形或多层次复合互连结构。参见教材P284。"
  },
  {
    "id": "sysintegration_q143",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "图规约机的存储结构是（　）。",
    "options": [
      "线性数组",
      "树形结构",
      "栈结构",
      "固定大小寄存器"
    ],
    "answer": "树形结构",
    "explanation": "图规约机最常用的图是二叉树和N叉树。参见教材P285。"
  },
  {
    "id": "sysintegration_q144",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "规约机中“归约”的含义是（　）。",
    "options": [
      "压缩存储空间",
      "通过函数应用逐步简化表达式",
      "减少处理器数量",
      "固定执行顺序"
    ],
    "answer": "通过函数应用逐步简化表达式",
    "explanation": "归约指通过函数应用将复杂表达式逐步代换为常量目标。参见教材P283。"
  },
  {
    "id": "sysintegration_q145",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "数据流计算机与规约机的共同点是（　）。",
    "options": [
      "依赖程序计数器",
      "取消共享数据和指令计数器",
      "仅支持同步操作",
      "必须使用冯·诺依曼结构"
    ],
    "answer": "取消共享数据和指令计数器",
    "explanation": "两者均无共享数据和指令计数器，但驱动方式不同。参见教材P283。"
  },
  {
    "id": "sysintegration_q146",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "静态数据流机解决令牌冲突的方法是（　）。",
    "options": [
      "标记匹配",
      "控制令牌",
      "全局同步",
      "禁用循环"
    ],
    "answer": "控制令牌",
    "explanation": "静态数据流机通过控制令牌区分不同迭代的数据令牌。参见教材P280。"
  },
  {
    "id": "sysintegration_q147",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "动态数据流机的匹配部件功能是（　）。",
    "options": [
      "生成程序计数器",
      "匹配带标记的数据令牌",
      "固定指令顺序",
      "管理全局变量"
    ],
    "answer": "匹配带标记的数据令牌",
    "explanation": "匹配部件将带标记的数据令牌配对，触发指令执行。参见教材P281。"
  },
  {
    "id": "sysintegration_q148",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "多处理机与阵列处理机的主要区别在于（　）。",
    "options": [
      "多处理机实现指令级并行，阵列处理机实现任务级并行",
      "多处理机属于MIMD，阵列处理机属于SIMD",
      "多处理机只能处理标量，阵列处理机只能处理向量",
      "多处理机硬件结构更简单"
    ],
    "answer": "多处理机属于MIMD，阵列处理机属于SIMD",
    "explanation": "多处理机是MIMD（多指令流多数据流），阵列处理机是SIMD（单指令流多数据流），前者支持任务级并行，后者支持操作级并行。参见教材P208。"
  },
  {
    "id": "sysintegration_q149",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "紧耦合多处理机的典型特征是（　）。",
    "options": [
      "处理机通过消息传递系统通信",
      "共享集中式主存储器",
      "每个处理机有独立局部存储器",
      "采用分布式存储管理"
    ],
    "answer": "共享集中式主存储器",
    "explanation": "紧耦合多处理机通过共享主存通信，松耦合则采用分布式存储或消息传递。参见教材P244。"
  },
  {
    "id": "sysintegration_q150",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "UMA结构的含义是（　）。",
    "options": [
      "非均衡存储器访问",
      "高速缓存一致性非均匀存储",
      "均衡存储器访问",
      "仅用高速缓存存储器"
    ],
    "answer": "均衡存储器访问",
    "explanation": "紧耦合多处理机对于存储器管理的模式被称为均衡存储器访问结构UMA。参见教材P244。"
  },
  {
    "id": "sysintegration_q151",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "下列选项中，（　）的主要工作是管理计算机的软件资源和硬件资源。",
    "options": [
      "微程序机器层次",
      "传统语言机器层次",
      "操作系统机器层次",
      "汇编语言机器层次"
    ],
    "answer": "操作系统机器层次",
    "explanation": "操作系统机器层次的主要工作是管理计算机的软件资源和硬件资源。参见教材P4。"
  },
  {
    "id": "sysintegration_q152",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "关于RISC与CISC的对比，正确的是（　）。",
    "options": [
      "RISC指令周期不一致，导致系统稳定性差",
      "CISC采用流水线技术，并发性能优于RISC",
      "RISC面向寄存器堆设计指令，效率超过CISC",
      "CISC使用装入/存储指令访问内存，减少时间损耗"
    ],
    "answer": "RISC面向寄存器堆设计指令，效率超过CISC",
    "explanation": "RISC使用统一指令周期，稳定性更好；RISC的流水线并发性能优于CISC；装入/存储是RISC的特点，CISC会大量访问内存。参见教材P4。"
  },
  {
    "id": "sysintegration_q153",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "下列（　）不属于汇编语言的标准指令分类。",
    "options": [
      "数据传送指令",
      "算术运算指令",
      "图像渲染指令",
      "控制转移指令"
    ],
    "answer": "图像渲染指令",
    "explanation": "汇编语言分为数据传送、算术运算、逻辑运算、串操作、控制转移和处理器控制这六类。参见教材P6。"
  },
  {
    "id": "sysintegration_q154",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "面向对象语言的主要优势在于（　）。",
    "options": [
      "执行性能高于面向过程语言",
      "代码易维护、复用和扩展",
      "无需考虑程序结构设计",
      "更适合开发对性能要求极高的系统"
    ],
    "answer": "代码易维护、复用和扩展",
    "explanation": "面向对象语言的优点是易维护、复用和扩展，缺点是性能较面向过程语言低。参见教材P10。"
  },
  {
    "id": "sysintegration_q155",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "磁盘调度算法不包括（　）。",
    "options": [
      "时间片轮转算法",
      "最短寻道时间算法",
      "先来先服务算法",
      "电梯算法"
    ],
    "answer": "时间片轮转算法",
    "explanation": "磁盘调度算法包括先来先服务算法、最短寻道时间算法和电梯算法。参见教材P15。"
  },
  {
    "id": "sysintegration_q156",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "下列（　）不属于软件实现计算机功能的特点。",
    "options": [
      "运行速度较高",
      "重复执行成本低",
      "灵活性好",
      "占用内存较多"
    ],
    "answer": "运行速度较高",
    "explanation": "软件实现计算机功能有四个特点，分别是运行速度比较低、重复容易并且重复价格低、灵活性比较好和占用内存较多。参见教材P18。"
  },
  {
    "id": "sysintegration_q157",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "下列（　）不属于硬件实现计算机功能的特点。",
    "options": [
      "运行速度快",
      "成本高昂",
      "灵活性好",
      "占用内存较少"
    ],
    "answer": "灵活性好",
    "explanation": "硬件实现计算机功能也有四个特点，分别是运行速度快、成本高昂、灵活性较差和占用内存较少。参见教材P18。"
  },
  {
    "id": "sysintegration_q158",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "计算机存储的基本存储单位是（　）。",
    "options": [
      "KB",
      "MB",
      "B",
      "TB"
    ],
    "answer": "B",
    "explanation": "计算机存储的基本存储单位是字节（B）。参见教材P20。"
  },
  {
    "id": "sysintegration_q159",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "与CPU相关的可移植性不包括（　）。",
    "options": [
      "计算机字长",
      "计算机字节顺序",
      "计算机字对齐方式",
      "数据长度"
    ],
    "answer": "数据长度",
    "explanation": "与CPU相关的可移植性主要包括计算机字长、计算机字节顺序和计算机字对齐方式。参见教材P32。"
  },
  {
    "id": "sysintegration_q160",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "下列关于“同时性”和“并发性”的描述，正确的是（　）。",
    "options": [
      "同时性指事件在同一时间间隔内发生",
      "并发性要求事件严格在同一时刻发生",
      "同时性强调事件在“同一时间点”发生",
      "并发性等同于同时性，二者无区别"
    ],
    "answer": "同时性强调事件在“同一时间点”发生",
    "explanation": "同时性，两个及以上事件在同一时间内发生；并发性，两个及以上事件在同一时间间隔内发生。参见教材P33。"
  },
  {
    "id": "sysintegration_q161",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "下列（　）不属于软件实现计算机功能的特点。",
    "options": [
      "运行速度较高",
      "重复执行成本低",
      "灵活性好",
      "占用内存较多"
    ],
    "answer": "运行速度较高",
    "explanation": "软件实现计算机功能有四个特点，分别是运行速度比较低、重复容易并且重复价格低、灵活性比较好和占用内存较多。参见教材P18。"
  },
  {
    "id": "sysintegration_q162",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "第二代计算机使用（　）作为开关元件。",
    "options": [
      "电子管",
      "晶体管",
      "集成电路",
      "大规模集成电路"
    ],
    "answer": "晶体管",
    "explanation": "第二代计算机使用晶体管作为开关元件。参见教材P35。"
  },
  {
    "id": "sysintegration_q163",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "下列（　）不属于硬件实现计算机功能的特点。",
    "options": [
      "运行速度快",
      "成本高昂",
      "灵活性好",
      "占用内存较少"
    ],
    "answer": "灵活性好",
    "explanation": "硬件实现计算机功能也有四个特点，分别是运行速度快、成本高昂、灵活性较差和占用内存较少。参见教材P18。"
  },
  {
    "id": "sysintegration_q164",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "关于真值为正数时的编码，下列说法正确的是（　）。",
    "options": [
      "原码、补码、反码值不同",
      "原码与补码相同，反码不同",
      "三者值完全相同",
      "反码与补码相同，原码不同"
    ],
    "answer": "三者值完全相同",
    "explanation": "真值为正数的时候，原码、补码和反码的值是相同的。参见教材P43。"
  },
  {
    "id": "sysintegration_q165",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "当浮点数与定点数位数相同时，下列说法正确的是（　）。",
    "options": [
      "定点数的表示范围大于浮点数",
      "浮点数的表示范围大于定点数",
      "两者表示范围相同",
      "浮点数精度始终低于定点数"
    ],
    "answer": "浮点数的表示范围大于定点数",
    "explanation": "当浮点数和定点数的位数相同时，浮点数的表示范围大于定点数的表示范围；当浮点数为规格化数时，浮点数的表示精度比定点数高。参见教材P45。"
  },
  {
    "id": "sysintegration_q166",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "真值为正数时，移位运算中空位的填充规则是（　）。",
    "options": [
      "左移填0，右移填1",
      "无论左右移，空位均填0",
      "左移填1，右移填0",
      "由机器字长决定填充值"
    ],
    "answer": "无论左右移，空位均填0",
    "explanation": "当真值为正数的时候，不论进行什么样的移位运算，空位均填0。参见教材P46。"
  },
  {
    "id": "sysintegration_q167",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "流水线计算机使用（　）技术。",
    "options": [
      "时间重叠",
      "资源重复",
      "资源共享",
      "空间重叠"
    ],
    "answer": "时间重叠",
    "explanation": "流水线计算机使用时间重叠技术；阵列计算机使用资源重复技术；多处理机使用资源共享技术。参见教材P34。"
  },
  {
    "id": "sysintegration_q168",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "负数原码进行右移运算时，符号位与空位的处理方式是（　）。",
    "options": [
      "符号位变反，空位填0",
      "符号位不变，空位填1",
      "符号位不变，空位填0",
      "符号位变反，空位填1"
    ],
    "answer": "符号位不变，空位填0",
    "explanation": "负数的原码数值部分与真值是相同的，进行移位运算的时候符号位不变，其余空位均填0。参见教材P46。"
  },
  {
    "id": "sysintegration_q169",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "ASCII码是字符编码，共有（　）个编码。",
    "options": [
      "124",
      "126",
      "128",
      "132"
    ],
    "answer": "128",
    "explanation": "ASCII码共有128个编码。参见教材P68。"
  },
  {
    "id": "sysintegration_q170",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "单处理机属于（　）。",
    "options": [
      "字串位串计算机",
      "字并位串计算机",
      "字串位并计算机",
      "字并位并计算机"
    ],
    "answer": "字串位并计算机",
    "explanation": "单处理机属于字串位并计算机。参见教材P38。"
  },
  {
    "id": "sysintegration_q171",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "下列（　）不属于中断系统的基本功能。",
    "options": [
      "中断请求的优先级确定",
      "断点及现场的保存与恢复",
      "中断服务程序的编译执行",
      "中断请求的保存与清除"
    ],
    "answer": "中断服务程序的编译执行",
    "explanation": "中断系统的功能包括中断请求的保存和清除、优先级的确定、中断断点及现场的保存、对中断请求的分析和处理以及中断返回等。参见教材P97。"
  },
  {
    "id": "sysintegration_q172",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "中断系统中，不可屏蔽中断的优先级（　）。",
    "options": [
      "低于可屏蔽中断",
      "高于可屏蔽中断",
      "与可屏蔽中断相同",
      "由软件设定"
    ],
    "answer": "高于可屏蔽中断",
    "explanation": "不可屏蔽中断（如电源故障）优先级高于可屏蔽中断，确保紧急事件优先处理。参见教材P93。"
  },
  {
    "id": "sysintegration_q173",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "总线判优控制中，链式查询方式的特点是（　）。",
    "options": [
      "离控制器越近的设备优先级越高",
      "离控制器越近的设备优先级越低",
      "独立请求线",
      "计数器定时查询"
    ],
    "answer": "离控制器越近的设备优先级越高",
    "explanation": "在链式查询中，离总线控制部件最近的设备具有最高的优先权。参见教材P101。"
  },
  {
    "id": "sysintegration_q174",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "DMA方式的主要特点是（　）。",
    "options": [
      "CPU全程参与数据传输",
      "数据传输不经过主存",
      "硬件实现高速数据传输",
      "适用于低速设备"
    ],
    "answer": "硬件实现高速数据传输",
    "explanation": "DMA是在专门的硬件控制下，实现高速外设和主存储器之间自动成批交换数据，尽量减少CPU内存和外围设备之间进行，以高速传送数据。参见教材P112。"
  },
  {
    "id": "sysintegration_q175",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "超标量处理机的核心是（　）。",
    "options": [
      "单指令流多数据流",
      "多指令流单数据流",
      "同时发射多条指令",
      "超长指令字"
    ],
    "answer": "同时发射多条指令",
    "explanation": "超标量处理机通过多指令发射部件，在一个时钟周期内执行多条指令，提升指令级并行。参见教材P193。"
  },
  {
    "id": "sysintegration_q176",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "在CPU与RAM之间来回传送需要处理或是需要储存的数据即（　）。",
    "options": [
      "数据总线",
      "地址总线",
      "控制总线",
      "扩展总线"
    ],
    "answer": "数据总线",
    "explanation": "数据总线，在CPU与RAM之间来回传送需要处理或是需要储存的数据。参见教材P97。"
  },
  {
    "id": "sysintegration_q177",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "并行通信与串行通信相比，其缺点是（　）。",
    "options": [
      "通信速度慢",
      "实时性差",
      "不适于小型化产品",
      "数据吞吐量低"
    ],
    "answer": "不适于小型化产品",
    "explanation": "并行通信速度快、实时性好，但由于占用的口线多，不适于小型化产品。参见教材P99。"
  },
  {
    "id": "sysintegration_q178",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "I/O系统适合用（　）。",
    "options": [
      "专用总线",
      "非专用总线",
      "内部总线",
      "外部总线"
    ],
    "answer": "非专用总线",
    "explanation": "I/O系统适合用非专用总线。参见教材P100。"
  },
  {
    "id": "sysintegration_q179",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "在同步通信的总线系统中，总线数据传输率的影响因素主要是（　）。",
    "options": [
      "总线传输周期和数据线位数",
      "时钟频率和地址线位数",
      "仲裁方式和接口电路",
      "电源电压和负载数量"
    ],
    "answer": "总线传输周期和数据线位数",
    "explanation": "在同步通信的总线系统中，总线传输周期越短，数据线的位数越多，直接影响总线的数据传输率。参见教材P104。"
  },
  {
    "id": "sysintegration_q180",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "半同步通信的主要缺点是（　）。",
    "options": [
      "控制方式复杂，硬件成本高",
      "系统工作速度不高",
      "无法兼容速度差异大的设备",
      "可靠性低，易受干扰"
    ],
    "answer": "系统工作速度不高",
    "explanation": "半同步通信的缺点是对系统时钟频率不能要求太高，故从整体上来看，系统工作的速度还不是很高。参见教材P105。"
  },
  {
    "id": "sysintegration_q181",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "总线线数增加带来的直接影响不包括（　）。",
    "options": [
      "成本上升",
      "干扰增大",
      "可靠性提高",
      "传输速度提升"
    ],
    "answer": "可靠性提高",
    "explanation": "总线的线数越多，则成本越高，干扰越大，可靠性越低，占用的空间也越大，当然，传送速度和流量也越高。参见教材P107。"
  },
  {
    "id": "sysintegration_q182",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "下列（　）不属于输入设备。",
    "options": [
      "键盘",
      "鼠标",
      "摄像头",
      "显示器"
    ],
    "answer": "显示器",
    "explanation": "键盘、鼠标、摄像头、扫描仪、光笔、手写输入板、游戏杆、语音输入装置等都属于输入设备。参见教材P109。"
  },
  {
    "id": "sysintegration_q183",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "下列（　）不属于输出设备。",
    "options": [
      "打印机",
      "绘图仪",
      "磁记录设备",
      "光笔"
    ],
    "answer": "光笔",
    "explanation": "显示器、打印机、绘图仪、影像输出系统、语音输出系统、磁记录设备等属于输出设备。参见教材P109。"
  },
  {
    "id": "sysintegration_q184",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "下列（　）是主机与外设间进行信息交换的最简单的方式。",
    "options": [
      "程序查询方式",
      "程序中断方式",
      "直接内存访问方式",
      "通道方式"
    ],
    "answer": "程序查询方式",
    "explanation": "程序查询方式是主机与外设间进行信息交换的最简单的方式。参见教材P110。"
  },
  {
    "id": "sysintegration_q185",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "下列（　）适合于连接优先级高的磁盘等高速设备。",
    "options": [
      "字节多路通道",
      "数组多路通道",
      "选择通道",
      "顺序通道"
    ],
    "answer": "选择通道",
    "explanation": "选择通道适合于连接优先级高的磁盘等高速设备。参见教材P119。"
  },
  {
    "id": "sysintegration_q186",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "下列（　）负责硬件和中央处理机之间的信息转换。",
    "options": [
      "用户处理机",
      "中继处理机",
      "区域处理机",
      "中断处理机"
    ],
    "answer": "区域处理机",
    "explanation": "区域处理机 负责硬件和中央处理机之间的信息转换。参见教材P125。"
  },
  {
    "id": "sysintegration_q187",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "程序进行虚地址到实地址转换的过程称为（　）。",
    "options": [
      "程序编译",
      "程序再定位",
      "程序链接",
      "程序加载"
    ],
    "answer": "程序再定位",
    "explanation": "程序进行虚地址到实地址转换的过程称为程序的再定位。参见教材P131。"
  },
  {
    "id": "sysintegration_q188",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "虚拟存储器是由（　）自动实现存储信息调度和管理的。",
    "options": [
      "硬件和固件",
      "软件和固件",
      "硬件和操作系统",
      "软件和操作系统"
    ],
    "answer": "硬件和操作系统",
    "explanation": "虚拟存储器是由硬件和操作系统自动实现存储信息调度和管理的。参见教材P131。"
  },
  {
    "id": "sysintegration_q189",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "下列（　）不属于虚拟存储器的关键问题。",
    "options": [
      "调度问题",
      "替换问题",
      "更新问题",
      "速度问题"
    ],
    "answer": "速度问题",
    "explanation": "虚拟存储器的关键问题有调度问题、替换问题、更新问题和地址映射问题。参见教材P132。"
  },
  {
    "id": "sysintegration_q190",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "下列（　）的实质是选择在主存中停留时间最长（即最老）的一页置换。",
    "options": [
      "最佳置换算法",
      "先入先出法",
      "最近最久未使用算法",
      "CLOCK置换算法"
    ],
    "answer": "先入先出法",
    "explanation": "先入先出法的实质是选择在主存中停留时间最长（即最老）的一页置换。参见教材P142。"
  },
  {
    "id": "sysintegration_q191",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "以下（　）不是影响页面替换算法命中率的因素。",
    "options": [
      "地址流",
      "页面大小",
      "主存容量",
      "磁盘访问速度"
    ],
    "answer": "磁盘访问速度",
    "explanation": "影响命中率的因素除了替换算法外，还有地址流、页面大小、主存容量等。参见教材P145。"
  },
  {
    "id": "sysintegration_q192",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "全相连映像的主要缺点是（　）。",
    "options": [
      "命中率低",
      "存储空间利用率低",
      "访问速度慢且成本高",
      "不支持数据替换"
    ],
    "answer": "访问速度慢且成本高",
    "explanation": "全相连映像的优点是命中率比较高，Cache存储空间利用率高。但是，访问相关存储器时，每次都要与全部内容比较，速度低，成本高，因而应用少。参见教材P157。"
  },
  {
    "id": "sysintegration_q193",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "将近期最少使用的Cache中的信息块替换出去即（　）。",
    "options": [
      "LRU算法",
      "LFU算法",
      "FIFO算法",
      "随机替换算法"
    ],
    "answer": "LRU算法",
    "explanation": "LRU算法，将近期最少使用的Cache中的信息块替换出去。参见教材P160。"
  },
  {
    "id": "sysintegration_q194",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "互连网络传输信息的最大速率即（　）。",
    "options": [
      "传输时间",
      "频带宽度",
      "飞行时间",
      "发送方开销"
    ],
    "answer": "频带宽度",
    "explanation": "频带宽度：互连网络传输信息的最大速率。参见教材P216。"
  },
  {
    "id": "sysintegration_q195",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "阵列机都采用（　）工作方式。",
    "options": [
      "同步",
      "异步",
      "同步/异步",
      "半同步"
    ],
    "answer": "同步",
    "explanation": "阵列机都采用同步工作方式。参见教材P218。"
  },
  {
    "id": "sysintegration_q196",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "先行控制方式的处理机包括（　）个独立的控制器。",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "answer": "3",
    "explanation": "先行控制方式的处理机包括三个独立的控制器和四个缓冲栈。参见教材P172。"
  },
  {
    "id": "sysintegration_q197",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "下列（　）并行算法一般指向量或循环级的并行。",
    "options": [
      "细粒度",
      "中粒度",
      "粗粒度",
      "异步型"
    ],
    "answer": "细粒度",
    "explanation": "细粒度并行算法一般指向量或循环级的并行。参见教材P256。"
  },
  {
    "id": "sysintegration_q198",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "浮动型操作系统适用于（　）。",
    "options": [
      "紧耦合多处理机",
      "松耦合多处理机",
      "仅单处理机",
      "向量处理机"
    ],
    "answer": "紧耦合多处理机",
    "explanation": "浮动型操作系统适用于紧耦合多处理机。参见教材P271。"
  },
  {
    "id": "sysintegration_q199",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "-0的小数原码为（　）。",
    "options": [
      "0.0000",
      "1.0000",
      "0.1111",
      "1.1111"
    ],
    "answer": "1.0000",
    "explanation": "-0的小数原码为1.0000。参见教材P41。"
  },
  {
    "id": "sysintegration_q200",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "single_choice",
    "text": "原码转补码的规则是（　）。",
    "options": [
      "符号位取反，末位加1",
      "全部位取反，末位加1",
      "除符号位外取反，末位加1",
      "直接取反"
    ],
    "answer": "除符号位外取反，末位加1",
    "explanation": "补码是由原码除符号位外每位取反，末位加1得到的。参见教材P42。"
  },
  {
    "id": "sysintegration_q201",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "short_answer",
    "text": "计算机指令集包括哪几种指令集？",
    "answer": "计算机指令集包括复杂指令集CISC，精简指令集RISC，显式并行指令集EPIC，超长指令集VLIW。",
    "explanation": "参见教材P3。"
  },
  {
    "id": "sysintegration_q202",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "short_answer",
    "text": "精简指令系统应具备哪七个改进方面内容？",
    "answer": "（1）复杂指令分解； （2）指令具体属性； （3）单独指令执行速度； （4）硬件增加性能； （5）指令并行执行； （6）控制器方面实现技术； （7）编译程序方面。",
    "explanation": "参见教材P84。"
  },
  {
    "id": "sysintegration_q203",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "short_answer",
    "text": "什么是并行存储系统？",
    "answer": "称能并行读出多个CPU字的单体多字和多体单字、多体多字的交叉访问主存系统为并行主存系统。",
    "explanation": "参见教材P88。"
  },
  {
    "id": "sysintegration_q204",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "short_answer",
    "text": "简述三级存储系统有哪几层及其优点。",
    "answer": "三级存储器系统是由“Cache—主存”和“主存一辅存”两个独立的存储层次组成的。Cache-主存层使得速度近于Cache，主存一辅存使得容量和位价近于辅存。缓解了CPU和主存速度的不匹配问题，并且达到了速度、容量、位价的最佳状态。",
    "explanation": "参见教材P127。"
  },
  {
    "id": "sysintegration_q205",
    "subjectId": "sysintegration",
    "section": "practice",
    "type": "short_answer",
    "text": "什么是流水线的速度瓶颈？消除流水线瓶颈的方法有哪两种？",
    "answer": "将各段执行时间不相等的流水线中执行时间最长的子功能段定义为流水线的瓶颈段。消除瓶颈段一种方法是分离瓶颈段，另外一种方式为重复设置瓶颈段。",
    "explanation": "参见教材P178。"
  }
];
