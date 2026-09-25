import { Question } from './mockData';

export const introQuestions: Question[] = [
  {
    "id": "intro_q_1",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "冯·诺依曼提出的计算机硬件结构不包括（  ）。",
    "options": [
      "运算器",
      "控制器",
      "总线",
      "存储器"
    ],
    "answer": "总线",
    "explanation": "冯·诺依曼结构包括运算器、控制器、存储器、输入设备、输出设备。参见教材P2。"
  },
  {
    "id": "intro_q_2",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "内存储器的特点是（  ）。",
    "options": [
      "存储容量大，存取速度慢",
      "存储容量小，存取速度快",
      "价格低",
      "不能直接与CPU交换信息"
    ],
    "answer": "存储容量小，存取速度快",
    "explanation": "内存容量较小，但存取速度快，可直接与CPU交换信息。参见教材P2。"
  },
  {
    "id": "intro_q_3",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "系统软件的核心是（  ）。",
    "options": [
      "数据库管理系统",
      "操作系统",
      "语言处理程序",
      "实用工具程序"
    ],
    "answer": "操作系统",
    "explanation": "操作系统是系统软件的核心，管理硬件和软件资源。参见教材P3。"
  },
  {
    "id": "intro_q_4",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "机器语言的特点是（  ）。",
    "options": [
      "易读易写",
      "占用内存少",
      "执行速度慢",
      "易维护"
    ],
    "answer": "占用内存少",
    "explanation": "机器语言程序难编写、难修改、难维护，它具有执行速度快、占用内存少等优点。参见教材P3-7。"
  },
  {
    "id": "intro_q_5",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "高级语言源程序需要通过（  ）转换为机器语言。",
    "options": [
      "汇编程序",
      "解释程序或编译程序",
      "编辑程序",
      "连接程序"
    ],
    "answer": "解释程序或编译程序",
    "explanation": "高级语言需经解释程序（边翻译边执行）或编译程序（生成目标程序）转换。参见教材P4。"
  },
  {
    "id": "intro_q_6",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "下列属于计算机软件系统的是（  ）。",
    "options": [
      "主板",
      "操作系统",
      "显示器",
      "硬盘"
    ],
    "answer": "操作系统",
    "explanation": "操作系统属于软件系统，其他选项为硬件，参见教材P3。"
  },
  {
    "id": "intro_q_7",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "外存储器的特点是（  ）。",
    "options": [
      "可直接被CPU访问",
      "断电后数据丢失",
      "存储容量大，价格低",
      "存取速度比内存快"
    ],
    "answer": "存储容量大，价格低",
    "explanation": "外存容量大、价格低，存取速度慢，不能直接被CPU访问，断电后数据不丢失。参见教材P2。"
  },
  {
    "id": "intro_q_8",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "计算机的巨型化并不是指计算机（  ）。",
    "options": [
      "体积更大",
      "存储容量更大",
      "运算速度更快",
      "功能更强"
    ],
    "answer": "体积更大",
    "explanation": "巨型化并不是指计算机的体积大，而是指计算机存储容量更大、运算速度更快、功能更强。参见教材P12。"
  },
  {
    "id": "intro_q_9",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "控制器的主要功能是（  ）。",
    "options": [
      "进行算术运算",
      "协调计算机各部件工作",
      "存储数据和程序",
      "输入数据"
    ],
    "answer": "协调计算机各部件工作",
    "explanation": "控制器是计算机的“神经中枢”，协调各部件工作，参见教材P2。"
  },
  {
    "id": "intro_q_10",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "下列关于汇编语言的说法，正确的是（  ）。",
    "options": [
      "汇编语言是高级语言",
      "汇编语言程序可直接执行",
      "汇编语言用助记符表示指令",
      "汇编语言通用性强"
    ],
    "answer": "汇编语言用助记符表示指令",
    "explanation": "汇编语言是低级语言，需经汇编程序转换为机器语言才能执行，用助记符表示，参见教材P4。"
  },
  {
    "id": "intro_q_11",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "输入设备的作用是（  ）。",
    "options": [
      "输出处理结果",
      "存储程序和数据",
      "将外部信息转换为计算机可识别的信号",
      "进行数据运算"
    ],
    "answer": "将外部信息转换为计算机可识别的信号",
    "explanation": "输入设备主要是把程序、数据和各种信息转换成计算机能识别接收的电信号。参见教材P2。"
  },
  {
    "id": "intro_q_12",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "计算机发展趋势不包括（  ）。",
    "options": [
      "巨型化",
      "微型化",
      "封闭化",
      "智能化"
    ],
    "answer": "封闭化",
    "explanation": "计算机发展趋势为巨型化、微型化、网络化、智能化。参见教材P12。"
  },
  {
    "id": "intro_q_13",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "计算机学科的核心概念不包括（  ）。",
    "options": [
      "绑定",
      "大问题的复杂性",
      "死锁",
      "抽象层次"
    ],
    "answer": "死锁",
    "explanation": "死锁是操作系统中的概念，计算机学科核心概念包括绑定、抽象层次等12个。参见教材P7。"
  },
  {
    "id": "intro_q_14",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "下列关于计算机的定义，错误的是（  ）。",
    "options": [
      "计算机能按照事先存储的程序自动、高速处理信息",
      "计算机仅能进行数值计算",
      "计算机是智能化电子设备",
      "计算机可处理文字、图像等多种数据"
    ],
    "answer": "计算机仅能进行数值计算",
    "explanation": "计算机不仅能进行数值计算，还能处理文字、图像、声音等多种信息。参见教材P2。"
  },
  {
    "id": "intro_q_15",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "计算机中信息的最小单位是（  ）。",
    "options": [
      "字节",
      "位",
      "字",
      "千字节"
    ],
    "answer": "位",
    "explanation": "位是表示信息的最小单位，表示一位二进制信息。参见教材P15。"
  },
  {
    "id": "intro_q_16",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "1KB等于（  ）。",
    "options": [
      "1000字节",
      "1024字节",
      "1000位",
      "1024位"
    ],
    "answer": "1024字节",
    "explanation": "1KB=210字节=1024字节，参见教材P15。 翻译 搜索 复制"
  },
  {
    "id": "intro_q_17",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "下列不属于二进制优点的是（  ）。",
    "options": [
      "物理电路易实现",
      "运算简单",
      "运算规则多",
      "通用性强"
    ],
    "answer": "运算规则多",
    "explanation": "二进制仅有3种运算规则。参见教材P15。"
  },
  {
    "id": "intro_q_18",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "将十进制数25转换为二进制数是（  ）。",
    "options": [
      "11001",
      "10011",
      "11101",
      "10101"
    ],
    "answer": "11001",
    "explanation": "25÷2取余得11001，参见教材P17。"
  },
  {
    "id": "intro_q_19",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "与二进制数1111等值的十进制数是（  ）。",
    "options": [
      "14",
      "15",
      "16",
      "17"
    ],
    "answer": "15",
    "explanation": "1×23+1×22+1×21+1×20=15，参见教材P16。 翻译 搜索 复制"
  },
  {
    "id": "intro_q_20",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "十六进制数A对应的十进制数是（  ）。",
    "options": [
      "8",
      "9",
      "10",
      "11"
    ],
    "answer": "10",
    "explanation": "十六进制中A代表10，参见教材P18。"
  },
  {
    "id": "intro_q_21",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "二进制加法1010+0101的结果是（  ）。",
    "options": [
      "1111",
      "10000",
      "0111",
      "1101"
    ],
    "answer": "1111",
    "explanation": "1010+0101=1111（二进制），参见教材P18。"
  },
  {
    "id": "intro_q_22",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "逻辑运算中，1 AND 0的结果是（  ）。",
    "options": [
      "1",
      "0",
      "不确定",
      "出错"
    ],
    "answer": "0",
    "explanation": "逻辑与运算：有0则0，参见教材P18。"
  },
  {
    "id": "intro_q_23",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "原码表示法中，负数的符号位为（  ）。",
    "options": [
      "0",
      "1",
      "-1",
      "任意值"
    ],
    "answer": "1",
    "explanation": "原码中0表示正数，1表示负数，参见教材P19。"
  },
  {
    "id": "intro_q_24",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "补码表示法的特点是（  ）。",
    "options": [
      "符号位不参与运算",
      "符号位参加运算",
      "表示范围比原码小",
      "易于手工计算"
    ],
    "answer": "符号位参加运算",
    "explanation": "补码表示法中符号位参加运算。参见教材P20。"
  },
  {
    "id": "intro_q_25",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "7位ASCII码可以表示（  ）个字符。",
    "options": [
      "64",
      "128",
      "7",
      "256"
    ],
    "answer": "128",
    "explanation": "7位ASCII码表示128个字符。参见教材P20。"
  },
  {
    "id": "intro_q_26",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "大写字母’C’的ASCII码值为（  ）。",
    "options": [
      "66",
      "67",
      "68",
      "69"
    ],
    "answer": "67",
    "explanation": "'A'为65，'B'为66，'C'为67。参见教材P21。"
  },
  {
    "id": "intro_q_27",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "逻辑运算OR中，1 OR 0的结果是（  ）。",
    "options": [
      "1",
      "0",
      "不确定",
      "10"
    ],
    "answer": "1",
    "explanation": "逻辑或运算：有1则1，参见教材P18。"
  },
  {
    "id": "intro_q_28",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "补码10000000对应的十进制数是（  ）。",
    "options": [
      "0",
      "-128",
      "128",
      "-1"
    ],
    "answer": "-128",
    "explanation": "8位补码中10000000表示-128，参见教材P20。"
  },
  {
    "id": "intro_q_29",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "下列关于Unicode的说法，正确的是（  ）。",
    "options": [
      "仅支持英文",
      "采用固定16位编码",
      "可以使用三种编码形式",
      "不支持中文"
    ],
    "answer": "可以使用三种编码形式",
    "explanation": "Unicode支持多种语言，包括中文，有UTF-8等编码形式，可以使用8位、16位和32位编码形式。参见教材P22。"
  },
  {
    "id": "intro_q_30",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "CPU的核心功能不包括（  ）。",
    "options": [
      "执行算术运算",
      "进行逻辑判断",
      "分析指令并生成控制信号",
      "存储程序和数据"
    ],
    "answer": "存储程序和数据",
    "explanation": "CPU的主要功能是进行算术和逻辑运算，对指令进行分析并产生各种操作和控制信号。参见教材P25。"
  },
  {
    "id": "intro_q_31",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "下列关于硬盘的叙述中，正确的是（  ）。",
    "options": [
      "硬盘属于主存储器",
      "硬盘驱动器属于外部设备",
      "断电后硬盘中的信息会丢失",
      "硬盘必须通过IDE接口与主板连接"
    ],
    "answer": "硬盘驱动器属于外部设备",
    "explanation": "硬盘属于外存储器，断电后信息不丢失，可通过IDE、SCSI等接口连接，属于外部设备。参见教材P28。"
  },
  {
    "id": "intro_q_32",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "计算机内存中每个基本单元的唯一序号称为（  ）。",
    "options": [
      "地址",
      "字节",
      "编号",
      "容量"
    ],
    "answer": "地址",
    "explanation": "内存单元的唯一标识是地址，字节是存储单位，容量是存储总量。参见教材P36。"
  },
  {
    "id": "intro_q_33",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "下列设备中，属于输入设备的是（  ）。",
    "options": [
      "打印机",
      "显示器",
      "扫描仪",
      "绘图仪"
    ],
    "answer": "扫描仪",
    "explanation": "扫描仪用于将图像等信息输入计算机，属于输入设备；其余均为输出设备。参见教材P46-47。"
  },
  {
    "id": "intro_q_34",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "下列关于ROM和RAM的说法中，正确的是（  ）。",
    "options": [
      "ROM断电后信息丢失",
      "RAM断电后信息不丢失",
      "ROM可随时读写",
      "RAM可随时读写"
    ],
    "answer": "RAM可随时读写",
    "explanation": "RAM是随机存储器，可随时读写，断电后信息丢失；ROM是只读存储器，断电后信息保留，通常不能随意写入。参见教材P36。"
  },
  {
    "id": "intro_q_35",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "显示器的分辨率1024×768表示（  ）。",
    "options": [
      "每行有1024个像素，每列有768个像素",
      "每列有1024个像素，每行有768个像素",
      "屏幕大小为1024mm×768mm",
      "屏幕可显示1024种颜色和768种灰度"
    ],
    "answer": "每行有1024个像素，每列有768个像素",
    "explanation": "分辨率是屏幕水平和垂直方向的像素数量，1024×768表示水平1024像素、垂直768像素。参见教材P49。"
  },
  {
    "id": "intro_q_36",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "下列不属于计算机硬件的是（  ）。",
    "options": [
      "键盘",
      "操作系统",
      "硬盘",
      "主板"
    ],
    "answer": "操作系统",
    "explanation": "操作系统属于软件系统，其余均为硬件部件。参见教材P25。"
  },
  {
    "id": "intro_q_37",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "针式打印机的主要耗材是（  ）。",
    "options": [
      "墨水",
      "碳粉",
      "色带",
      "硒鼓"
    ],
    "answer": "色带",
    "explanation": "针式打印机通过打印头上的若干根针击打色带；喷墨用墨水；激光用碳粉和硒鼓。参见教材P49。"
  },
  {
    "id": "intro_q_38",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "下列关于总线的说法中，错误的是（  ）。",
    "options": [
      "ISA总线是16位总线",
      "PCI总线属于局部总线",
      "总线负责CPU与外设之间的数据传输",
      "总线带宽与数据线宽度无关"
    ],
    "answer": "总线带宽与数据线宽度无关",
    "explanation": "总线带宽与数据线宽度、频率相关，宽度越宽、频率越高，带宽越大。参见教材P29-30。"
  },
  {
    "id": "intro_q_39",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "中央处理器（CPU）的核心部件是（  ）。",
    "options": [
      "控制器和存储器",
      "运算器和控制器",
      "运算器和寄存器",
      "控制器和寄存器"
    ],
    "answer": "运算器和控制器",
    "explanation": "CPU由运算器和控制器组成，是计算机的核心。参见教材P33。"
  },
  {
    "id": "intro_q_40",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "下列属于半导体存储器的是（  ）。",
    "options": [
      "硬盘",
      "光盘",
      "RAM",
      "软盘"
    ],
    "answer": "RAM",
    "explanation": "RAM是半导体存储器，硬盘、光盘、软盘属于外部存储介质。参见教材P36。"
  },
  {
    "id": "intro_q_41",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "下列关于Cache的说法中，正确的是（  ）。",
    "options": [
      "Cache是外存储器",
      "Cache的速度比内存慢",
      "Cache用于缓解CPU与内存的速度差异",
      "Cache容量越大，计算机性能越差"
    ],
    "answer": "Cache用于缓解CPU与内存的速度差异",
    "explanation": "Cache是高速缓冲存储器，速度接近CPU，用于解决CPU与内存的速度瓶颈，容量适当增大可提升性能。参见教材P42。"
  },
  {
    "id": "intro_q_42",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "下列关于USB接口的说法中，正确的是（  ）。",
    "options": [
      "USB接口只能连接一个设备",
      "USB接口支持热插拔",
      "USB接口传输速度比串口慢",
      "USB接口不能提供电源"
    ],
    "answer": "USB接口支持热插拔",
    "explanation": "USB支持即插即用和热插拔，可级联多个设备，传输速度快于串口，能提供电源。参见教材P32。"
  },
  {
    "id": "intro_q_43",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "下列存储器中，存取速度最快的是（  ）。",
    "options": [
      "硬盘",
      "内存",
      "光盘",
      "软盘"
    ],
    "answer": "内存",
    "explanation": "内存存取速度远快于外存（硬盘、光盘、软盘）。参见教材P42。"
  },
  {
    "id": "intro_q_44",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "下列属于系统总线的是（  ）。",
    "options": [
      "USB总线",
      "PCI总线",
      "IDE总线",
      "SATA总线"
    ],
    "answer": "PCI总线",
    "explanation": "PCI属于系统总线，USB、IDE、SATA是外设接口总线。参见教材P30。"
  },
  {
    "id": "intro_q_45",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "下列设备中，既可作为输入设备又可作为输出设备的是（  ）。",
    "options": [
      "扫描仪",
      "触摸屏",
      "打印机",
      "键盘"
    ],
    "answer": "触摸屏",
    "explanation": "触摸屏可输入指令（触摸）和输出显示，属于两用设备。参见教材P47。"
  },
  {
    "id": "intro_q_46",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "下列关于BIOS的说法中，正确的是（  ）。",
    "options": [
      "BIOS存放在硬盘中",
      "BIOS负责启动计算机和硬件自检",
      "BIOS可随意修改",
      "断电后BIOS信息会丢失"
    ],
    "answer": "BIOS负责启动计算机和硬件自检",
    "explanation": "BIOS存放在ROM中，负责开机自检和启动系统，通常不可随意修改，断电后信息保留。参见教材P26。"
  },
  {
    "id": "intro_q_47",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "操作系统的主要功能是（  ）。",
    "options": [
      "把源代码转换成目标代码",
      "管理计算机资源",
      "提供各种中断处理程序",
      "实现硬件与软件之间的转换"
    ],
    "answer": "管理计算机资源",
    "explanation": "操作系统负责管理硬件和软件资源。参见教材P53。"
  },
  {
    "id": "intro_q_48",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "下列不属于分时系统特征的是（  ）。",
    "options": [
      "交互性",
      "多路性",
      "及时性",
      "同时性"
    ],
    "answer": "同时性",
    "explanation": "分时系统具有交互性、多路性、及时性，“同时性”并非其特征。参见教材P101。"
  },
  {
    "id": "intro_q_49",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "多道程序设计是指（  ）。",
    "options": [
      "多个程序同时在CPU上运行",
      "多个程序同时进入内存并运行",
      "一个程序分多个步骤运行",
      "多个程序轮流占用CPU"
    ],
    "answer": "多个程序同时进入内存并运行",
    "explanation": "多道程序设计指多个作业同时存放在内存并交替运行。参见教材P55。"
  },
  {
    "id": "intro_q_50",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "在数据库的三级模式中，内模式的个数是（  ）。",
    "options": [
      "1个",
      "2个",
      "3个",
      "任意多个"
    ],
    "answer": "1个",
    "explanation": "内模式（物理模式）只有1个，描述数据的物理存储。参见教材P102。"
  },
  {
    "id": "intro_q_51",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "数据模型的三个要素是（  ）。",
    "options": [
      "实体完整性、参照完整性、用户自定义完整性",
      "数据结构、数据操作、完整性约束",
      "数据查询、数据更新、数据定义",
      "主键、外键、索引"
    ],
    "answer": "数据结构、数据操作、完整性约束",
    "explanation": "数据模型包括数据结构、数据操作和完整性约束三要素。参见教材P89。"
  },
  {
    "id": "intro_q_52",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "数据库系统（DBS）、数据库（DB）和数据库管理系统（DBMS）的关系是（  ）。",
    "options": [
      "DBS包括DB和DBMS",
      "DBMS包括DB和DBS",
      "DB包括DBS和DBMS",
      "三者相互独立"
    ],
    "answer": "DBS包括DB和DBMS",
    "explanation": "数据库系统由数据库、数据库管理系统、应用系统数据库管理员和用户组成。参见教材P83。"
  },
  {
    "id": "intro_q_53",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "下列（  ）不属于关系数据库的特点。",
    "options": [
      "提供非过程性语言",
      "数据独立性低",
      "数据独立性髙",
      "结构简单"
    ],
    "answer": "数据独立性低",
    "explanation": "关系数据库具有结构简单、理论基础坚实、数据独立性髙和提供非过程性语言等优点。参见教材P86。"
  },
  {
    "id": "intro_q_54",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "操作系统提供的用户接口包括（  ）。",
    "options": [
      "编程接口和命令接口",
      "硬件接口和软件接口",
      "输入接口和输出接口",
      "网络接口和本地接口"
    ],
    "answer": "编程接口和命令接口",
    "explanation": "操作系统为用户提供编程接口（如系统调用）和命令接口（如命令行、图形界面）。参见教材P102。"
  },
  {
    "id": "intro_q_55",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "输出重定向的符号是（  ）。",
    "options": [
      "“<”",
      "“>”",
      "“|”",
      "【 正确答案 】 B"
    ],
    "answer": "“>”",
    "explanation": "“>”用于将命令输出重定向到文件。参见教材P102。"
  },
  {
    "id": "intro_q_56",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "关系数据库中，二维表的列称为（  ）。",
    "options": [
      "属性",
      "元组",
      "字段",
      "记录"
    ],
    "answer": "属性",
    "explanation": "关系中列是属性，行是元组（记录）。参见教材P83。"
  },
  {
    "id": "intro_q_57",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "DBMS的主要功能不包括（  ）。",
    "options": [
      "数据定义功能",
      "数据操作功能",
      "硬件维护功能",
      "数据库运行管理功能"
    ],
    "answer": "硬件维护功能",
    "explanation": "DBMS负责数据定义、操作、运行管理等，不直接维护硬件。参见教材P83。"
  },
  {
    "id": "intro_q_58",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "关系代数中，专门的关系运算包括（  ）。",
    "options": [
      "选择、投影、连接",
      "并、交、差",
      "加法、减法、乘法",
      "关联、聚合、排序"
    ],
    "answer": "选择、投影、连接",
    "explanation": "选择、投影、连接是关系代数的专门运算；并、交、差是集合运算。参见教材P102。"
  },
  {
    "id": "intro_q_59",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "关系的实体完整性规则规定（  ）不能取空值。",
    "options": [
      "外键字段",
      "主键字段",
      "所有字段",
      "非主键字段"
    ],
    "answer": "主键字段",
    "explanation": "实体完整性要求主键字段的值唯一且非空。参见教材P90。"
  },
  {
    "id": "intro_q_60",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "并发控制的基本单位是（  ）。",
    "options": [
      "程序",
      "进程",
      "事务",
      "线程"
    ],
    "answer": "事务",
    "explanation": "事务是并发控制的基本单位。参见教材P97。"
  },
  {
    "id": "intro_q_61",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "TCP是面向（  ）的协议，通过三次握手和滑动窗口机制保证可靠性。",
    "options": [
      "连接",
      "无连接",
      "实体",
      "网络"
    ],
    "answer": "连接",
    "explanation": "TCP是面向连接的传输层协议，UDP是无连接的。参见教材P116。"
  },
  {
    "id": "intro_q_62",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "下列（  ）协议规定了网际层数据分组的格式。",
    "options": [
      "TCP",
      "IP",
      "UDP",
      "FTP"
    ],
    "answer": "IP",
    "explanation": "IP协议定义了网际层数据报的格式和传输规则。参见教材P115。"
  },
  {
    "id": "intro_q_63",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "OSI参参见教材模型中，网络层的主要功能是（  ）。",
    "options": [
      "组织会话进程通信，管理数据交换",
      "数据格式变换、加密与解密",
      "路由选择、拥塞控制与网络互连",
      "确定进程通信性质，满足用户需求"
    ],
    "answer": "路由选择、拥塞控制与网络互连",
    "explanation": "网络层负责路由选择、拥塞控制和网络互连。参见教材P107。"
  },
  {
    "id": "intro_q_64",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "常用的数据交换技术包括（  ）和存储转发交换。",
    "options": [
      "频率交换",
      "信息交换",
      "数字交换",
      "电路交换"
    ],
    "answer": "电路交换",
    "explanation": "数据交换技术分为电路交换和存储转发交换（报文交换、分组交换）。参见教材P105。"
  },
  {
    "id": "intro_q_65",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "下列属于全双工通信的是（  ）。",
    "options": [
      "对讲机",
      "广播",
      "以太网通信",
      "电话"
    ],
    "answer": "电话",
    "explanation": "电话允许双方同时发送和接收信息，属于全双工；对讲机是半双工，广播是单工。参见教材P107。"
  },
  {
    "id": "intro_q_66",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "半双工通信中，信号可以双向传送，但任一时刻只能向一个方向传送，例如（  ）。",
    "options": [
      "对讲机",
      "广播",
      "以太网通信",
      "局域网"
    ],
    "answer": "对讲机",
    "explanation": "对讲机允许双向通信，但不能同时进行，属于半双工。参见教材P107。"
  },
  {
    "id": "intro_q_67",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "网络资源子网负责（  ）。",
    "options": [
      "数据传输",
      "信息处理",
      "路由选择",
      "差错控制"
    ],
    "answer": "信息处理",
    "explanation": "资源子网负责信息处理（主机、终端、软件等），通信子网负责数据传输。参见教材P105。"
  },
  {
    "id": "intro_q_68",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "与电路交换相比，分组交换的优点是（  ）。",
    "options": [
      "实时性强",
      "线路利用率高",
      "适合长报文传输",
      "通信效率低"
    ],
    "answer": "线路利用率高",
    "explanation": "分组交换通过共享线路提高利用率，电路交换实时性强但利用率低。参见教材P135。"
  },
  {
    "id": "intro_q_69",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "主干网的特点是（  ）。",
    "options": [
      "分布式结构，节点多",
      "集中式结构，辐射状",
      "速率低，覆盖范围小",
      "仅用于企业内部"
    ],
    "answer": "分布式结构，节点多",
    "explanation": "主干网通常是分布式结构，覆盖范围广、速率高。参见教材P135。"
  },
  {
    "id": "intro_q_70",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "计算机网络的组成不包括（  ）。",
    "options": [
      "主机",
      "通信子网",
      "协议",
      "操作系统"
    ],
    "answer": "操作系统",
    "explanation": "计算机网络由主机、通信子网、协议组成；操作系统是主机中的软件。参见教材P136。"
  },
  {
    "id": "intro_q_71",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "物理层的主要功能是（  ）。",
    "options": [
      "确定数据传输格式",
      "实现物理设备接口特性定义",
      "进行路由选择",
      "提供端到端的可靠传输"
    ],
    "answer": "实现物理设备接口特性定义",
    "explanation": "物理层定义接口的机械、电气、功能、过程特性。参见教材P107。"
  },
  {
    "id": "intro_q_72",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "数据链路层的主要功能是（  ）。",
    "options": [
      "差错控制和流量控制",
      "路由选择",
      "数据压缩",
      "进程通信管理"
    ],
    "answer": "差错控制和流量控制",
    "explanation": "数据链路层负责链路管理、差错控制、流量控制。参见教材P112。"
  },
  {
    "id": "intro_q_73",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "下列属于应用层协议的是（  ）。",
    "options": [
      "TCP",
      "IP",
      "HTTP",
      "ARP"
    ],
    "answer": "HTTP",
    "explanation": "HTTP是应用层协议；TCP是传输层，IP是网络层，ARP是网络层辅助协议。参见教材P124。"
  },
  {
    "id": "intro_q_74",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "“互联网+”的核心是（  ）。",
    "options": [
      "互联网与传统行业深度融合",
      "开发互联网新应用",
      "建设新的互联网基础设施",
      "提高互联网普及率"
    ],
    "answer": "互联网与传统行业深度融合",
    "explanation": "“互联网+”强调互联网与传统行业融合，创造新生态。参见教材P128。"
  },
  {
    "id": "intro_q_75",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "慕课（MOOC）的特点是（  ）。",
    "options": [
      "小规模、封闭性",
      "大规模、开放性",
      "仅面向在校学生",
      "无互动性"
    ],
    "answer": "大规模、开放性",
    "explanation": "慕课是大规模开放在线课程，具有开放性和互动性。参见教材P132。"
  },
  {
    "id": "intro_q_76",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "分组交换的特点不包括（  ）。",
    "options": [
      "线路利用率高",
      "传输时延小",
      "适合突发式数据传输",
      "需要建立专用电路"
    ],
    "answer": "需要建立专用电路",
    "explanation": "分组交换无需建立专用电路，采用存储-转发机制。参见教材P135。"
  },
  {
    "id": "intro_q_77",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "程序与算法的关系是（  ）。",
    "options": [
      "程序就是算法",
      "算法是程序的核心",
      "程序与算法无关",
      "算法必须用程序实现"
    ],
    "answer": "算法是程序的核心",
    "explanation": "程序=算法+数据结构，算法是程序的核心逻辑。参见教材P137。"
  },
  {
    "id": "intro_q_78",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "栈的操作特点是（  ）。",
    "options": [
      "先进先出",
      "先进后出",
      "随机访问",
      "只能在中间插入"
    ],
    "answer": "先进后出",
    "explanation": "栈是“先进后出”的数据结构，队列是“先进先出”。参见教材P150。"
  },
  {
    "id": "intro_q_79",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "队列的主要应用场景是（  ）。",
    "options": [
      "表达式求值",
      "递归调用",
      "缓冲处理",
      "函数调用"
    ],
    "answer": "缓冲处理",
    "explanation": "队列常用于缓冲处理等；栈用于表达式求值、递归、函数调用。参见教材P151。"
  },
  {
    "id": "intro_q_80",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "树的深度是指（  ）。",
    "options": [
      "树中节点的最大层次",
      "树中节点的个数",
      "树中叶子节点的个数",
      "树的分支数"
    ],
    "answer": "树中节点的最大层次",
    "explanation": "树的深度是指树中节点的最大层次值，又称为树的高度。参见教材P155。"
  },
  {
    "id": "intro_q_81",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "下列关于静态查找表的说法，正确的是（  ）。",
    "options": [
      "可以对数据元素进行插入操作",
      "可以对数据元素进行删除操作",
      "只对数据元素进行查询或检索",
      "必须按关键字升序排列数据元素"
    ],
    "answer": "只对数据元素进行查询或检索",
    "explanation": "在查找时只对数据元素进行查询或检索，查找表称为静态查找表。参见教材P156。"
  },
  {
    "id": "intro_q_82",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "分治法的基本步骤是（  ）。",
    "options": [
      "分解、求解、合并",
      "枚举、检验、筛选",
      "贪心选择、最优子结构",
      "递归、迭代、终止"
    ],
    "answer": "分解、求解、合并",
    "explanation": "分治法通过分解问题、求解子问题、合并结果解决问题。参见教材P140。"
  },
  {
    "id": "intro_q_83",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "数据结构的存储结构不会影响（  ）。",
    "options": [
      "数据的访问效率",
      "插入和删除操作的效率",
      "数据的逻辑结构",
      "算法的时间复杂度"
    ],
    "answer": "数据的逻辑结构",
    "explanation": "存储结构影响访问、插入、删除效率，空间利用率和时间复杂度；逻辑结构是数据固有的关系，与存储无关。参见教材P148。"
  },
  {
    "id": "intro_q_84",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "下列（  ）不是数据的存储结构。",
    "options": [
      "顺序存储",
      "链式存储",
      "聚合存储",
      "散列存储"
    ],
    "answer": "聚合存储",
    "explanation": "数据的存储结构主要有顺序存储、链式存储、索引存储和散列存储四种基本方式。参见教材P148。"
  },
  {
    "id": "intro_q_85",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "算法的基本特征不包括（  ）。",
    "options": [
      "有穷性",
      "确定性",
      "可行性",
      "无限性"
    ],
    "answer": "无限性",
    "explanation": "算法需满足有穷性、确定性、可行性、输入、输出，无限性不属于其特征。参见教材P138。"
  },
  {
    "id": "intro_q_86",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "冯·诺依曼计算机的产生是由（  ）诱发的。",
    "options": [
      "图灵机",
      "递归函数",
      "λ演算",
      "神经网络"
    ],
    "answer": "图灵机",
    "explanation": "冯·诺依曼计算机的产生是由图灵机诱发的。参见教材P161。"
  },
  {
    "id": "intro_q_87",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "专家系统的核心组成部分是（  ）。",
    "options": [
      "知识库和推理机",
      "输入设备和输出设备",
      "数据库和控制器",
      "传感器和执行器"
    ],
    "answer": "知识库和推理机",
    "explanation": "专家系统由知识库（存储知识）和推理机（运用知识推理）核心组成。参见教材P171。"
  },
  {
    "id": "intro_q_88",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "搜索算法在人工智能中的作用是（  ）。",
    "options": [
      "从解空间中寻找最优解",
      "存储知识",
      "处理自然语言",
      "模拟人类情感"
    ],
    "answer": "从解空间中寻找最优解",
    "explanation": "搜索算法用于在问题的解空间中寻找满足目标的解。参见教材P165。"
  },
  {
    "id": "intro_q_89",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "神经网络的基本单元是（  ）。",
    "options": [
      "神经元",
      "逻辑门",
      "框架",
      "状态"
    ],
    "answer": "神经元",
    "explanation": "神经网络由大量神经元（节点）通过连接构成，模拟人脑神经元的工作方式。参见教材P169。"
  },
  {
    "id": "intro_q_90",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "下列属于不可计算问题的是（  ）。",
    "options": [
      "排序问题",
      "停机问题",
      "最短路径问题",
      "质数判定问题"
    ],
    "answer": "停机问题",
    "explanation": "停机问题无法通过通用算法求解，属于不可计算问题；其他选项均有有效算法。参见教材P164。"
  },
  {
    "id": "intro_q_91",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "并行与分布式计算的模型不包括（  ）。",
    "options": [
      "Petri网",
      "CCS",
      "π演算",
      "图灵机"
    ],
    "answer": "图灵机",
    "explanation": "Petri网、CCS、π演算是并行与分布式系统的模型。参见教材P8。"
  },
  {
    "id": "intro_q_92",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "发展和实用化阶段是人工智能发展的第（  ）阶段。",
    "options": [
      "一",
      "二",
      "三",
      "四"
    ],
    "answer": "三",
    "explanation": "发展和实用化阶段是人工智能发展的第三阶段。参见教材P165。"
  },
  {
    "id": "intro_q_93",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "状态空间搜索中，“状态”指的是（  ）。",
    "options": [
      "问题的初始条件",
      "问题求解过程中的中间情况",
      "问题的最终答案",
      "搜索算法的参数"
    ],
    "answer": "问题求解过程中的中间情况",
    "explanation": "状态是问题求解过程中每一步问题状况的数据结构。参见教材P176。"
  },
  {
    "id": "intro_q_94",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "图灵测试中，使机器可以用人类语言交流称为（  ）。",
    "options": [
      "知识表示",
      "自动推理",
      "机器学习",
      "自然语言处理"
    ],
    "answer": "自然语言处理",
    "explanation": "图灵测试中，使机器可以用人类语言交流称为自然语言处理。参见教材P166。"
  },
  {
    "id": "intro_q_95",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "停机问题的结论是（  ）。",
    "options": [
      "存在通用算法判断任意程序是否停机",
      "不存在通用算法判断任意程序是否停机",
      "所有程序都能在有限步骤内停机",
      "只有简单程序能停机"
    ],
    "answer": "不存在通用算法判断任意程序是否停机",
    "explanation": "停机问题是不可判定问题，即不存在通用算法判断任意程序是否会停机。参见教材P164。"
  },
  {
    "id": "intro_q_96",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "哥德尔数的作用是（  ）。",
    "options": [
      "证明数学定理的正确性",
      "将数学命题编码为自然数",
      "解决停机问题",
      "优化算法效率"
    ],
    "answer": "将数学命题编码为自然数",
    "explanation": "哥德尔数通过编码将数学命题转化为自然数，为研究数理逻辑提供工具。参见教材P163。"
  },
  {
    "id": "intro_q_97",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "需求分析阶段的主要任务是（  ）。",
    "options": [
      "确定软件如何实现功能",
      "明确用户对软件的功能需求和非功能需求",
      "编写代码",
      "测试软件功能"
    ],
    "answer": "明确用户对软件的功能需求和非功能需求",
    "explanation": "需求分析旨在明确用户需求，包括功能、性能、安全等，参见教材P194。"
  },
  {
    "id": "intro_q_98",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "软件需求中，“软件响应时间不超过2秒”属于（  ）。",
    "options": [
      "功能需求",
      "非功能需求",
      "设计需求",
      "测试需求"
    ],
    "answer": "非功能需求",
    "explanation": "非功能需求包括性能、安全性等，响应时间属于性能需求，参见教材P195。"
  },
  {
    "id": "intro_q_99",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "结构化设计方法的核心是（  ）。",
    "options": [
      "自底向上设计",
      "模块化和层次化",
      "优先考虑界面设计",
      "直接编写代码"
    ],
    "answer": "模块化和层次化",
    "explanation": "结构化设计强调模块化划分和层次结构，降低复杂度。参见教材P201。"
  },
  {
    "id": "intro_q_100",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "软件设计中，模块的内聚性是指（  ）。",
    "options": [
      "模块间的独立性",
      "模块内部各元素的关联程度",
      "模块的大小",
      "模块的可重用性"
    ],
    "answer": "模块内部各元素的关联程度",
    "explanation": "内聚性指模块内部元素结合的紧密程度，内聚性越高，模块独立性越强，参见教材P201。"
  },
  {
    "id": "intro_q_101",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "下列属于黑盒测试方法的是（  ）。",
    "options": [
      "语句覆盖",
      "判定覆盖",
      "等价类划分",
      "路径覆盖"
    ],
    "answer": "等价类划分",
    "explanation": "黑盒测试不关注内部逻辑，等价类划分是典型黑盒方法，参见教材P209。"
  },
  {
    "id": "intro_q_102",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "软件测试的主要目的是（  ）。",
    "options": [
      "证明软件无错误",
      "发现软件中的错误",
      "优化软件性能",
      "降低开发成本"
    ],
    "answer": "发现软件中的错误",
    "explanation": "测试的核心是发现错误，而非证明无错，参见教材P207。"
  },
  {
    "id": "intro_q_103",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "瀑布模型的特点是（  ）。",
    "options": [
      "迭代开发",
      "线性阶段划分，阶段间严格顺序",
      "可随时修改需求",
      "适用于需求不确定的项目"
    ],
    "answer": "线性阶段划分，阶段间严格顺序",
    "explanation": "瀑布模型按阶段线性推进，前一阶段完成后进入下一阶段，参见教材P199。"
  },
  {
    "id": "intro_q_104",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "下列（  ）分析方法由数据流图表示。",
    "options": [
      "功能",
      "结构化",
      "信息建模",
      "面向对象"
    ],
    "answer": "结构化",
    "explanation": "结构化分析方法由数据流图表示。参见教材P195。"
  },
  {
    "id": "intro_q_105",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "软件风险管理中，风险评估的第一步是（  ）。",
    "options": [
      "风险缓解",
      "风险识别",
      "风险监控",
      "风险应对"
    ],
    "answer": "风险识别",
    "explanation": "风险管理流程为风险识别、风险分析、风险计划、风险控制及风险跟踪。参见教材P211。"
  },
  {
    "id": "intro_q_106",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "模块的耦合性越低，表明（  ）。",
    "options": [
      "模块间依赖越强",
      "模块间接口越复杂",
      "模块独立性越好",
      "模块功能越单一"
    ],
    "answer": "模块独立性越好",
    "explanation": "耦合性指模块间的依赖程度，耦合越低，独立性越好，参见教材P201。"
  },
  {
    "id": "intro_q_107",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "单元测试的测试对象是（  ）。",
    "options": [
      "整个软件系统",
      "模块",
      "多个模块的交互",
      "用户界面"
    ],
    "answer": "模块",
    "explanation": "单元测试是对每一个编制好的模块进行测试。参见教材P209。"
  },
  {
    "id": "intro_q_108",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "用例图主要用于（  ）。",
    "options": [
      "描述系统的功能需求",
      "展示模块间的调用关系",
      "描述数据流程",
      "表示算法步骤"
    ],
    "answer": "描述系统的功能需求",
    "explanation": "用例图是需求分析中描述用户与系统交互的工具，参见教材P213。"
  },
  {
    "id": "intro_q_109",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "将风险事件的概率或结果降低到一个可以接受的程度，即（  ）。",
    "options": [
      "风险避免",
      "风险弱化",
      "风险承担",
      "风险转移"
    ],
    "answer": "风险弱化",
    "explanation": "将风险事件的概率或结果降低到一个可以接受的程度，即风险弱化。参见教材P211。"
  },
  {
    "id": "intro_q_110",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "下列属于对称加密算法的是（  ）。",
    "options": [
      "RSA",
      "AES",
      "ECC",
      "DSA"
    ],
    "answer": "AES",
    "explanation": "AES是对称加密算法，RSA、ECC、DSA为非对称加密，参见教材P219。"
  },
  {
    "id": "intro_q_111",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "系统安全中，“最小权限原则”是指（  ）。",
    "options": [
      "用户仅获得必要的最低权限",
      "所有用户拥有相同权限",
      "管理员拥有全部权限",
      "定期回收所有权限"
    ],
    "answer": "用户仅获得必要的最低权限",
    "explanation": "最小权限原则限制用户权限至必要范围，降低风险，参见教材P215。"
  },
  {
    "id": "intro_q_112",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "入侵检测系统（IDS）的主要功能是（  ）。",
    "options": [
      "阻止入侵行为",
      "检测并报告可疑入侵行为",
      "加密数据传输",
      "修复系统漏洞"
    ],
    "answer": "检测并报告可疑入侵行为",
    "explanation": "IDS负责检测入侵并报警，阻断通常由防火墙完成，参见教材P228。"
  },
  {
    "id": "intro_q_113",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "防火墙的主要作用是（  ）。",
    "options": [
      "检测病毒",
      "隔离网络，控制进出流量",
      "修复系统漏洞",
      "加密数据"
    ],
    "answer": "隔离网络，控制进出流量",
    "explanation": "防火墙通过规则控制网络访问，隔离内外网，参见教材P239。"
  },
  {
    "id": "intro_q_114",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "分布式拒绝服务攻击的原理是（  ）。",
    "options": [
      "窃取用户数据",
      "发送大量请求耗尽目标资源",
      "破坏硬件设备",
      "篡改数据内容"
    ],
    "answer": "发送大量请求耗尽目标资源",
    "explanation": "分布式拒绝服务攻击通过大量恶意请求使目标服务不可用，参见教材P229。"
  },
  {
    "id": "intro_q_115",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "数据备份的主要目的是（  ）。",
    "options": [
      "提高访问速度",
      "便于恢复丢失的数据",
      "加密数据",
      "压缩数据"
    ],
    "answer": "便于恢复丢失的数据",
    "explanation": "备份用于数据丢失后恢复，保障可用性。参见教材P96。"
  },
  {
    "id": "intro_q_116",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "下列属于网络钓鱼攻击的是（  ）。",
    "options": [
      "发送带有恶意链接的虚假邮件，骗取用户信息",
      "发送大量请求瘫痪服务器",
      "窃取用户密码哈希",
      "篡改网站内容"
    ],
    "answer": "发送带有恶意链接的虚假邮件，骗取用户信息",
    "explanation": "网络钓鱼通过伪装骗取敏感信息，如虚假邮件，参见教材P232。"
  },
  {
    "id": "intro_q_117",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "操作系统安全加固的措施不包括（  ）。",
    "options": [
      "及时安装补丁",
      "关闭不必要的服务",
      "使用弱密码",
      "启用防火墙"
    ],
    "answer": "使用弱密码",
    "explanation": "弱密码会降低安全性，属于不安全措施，参见教材P215。"
  },
  {
    "id": "intro_q_118",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "能自我复制和广泛传播，以占用系统和网络资源为主要目的的恶意代码，即（  ）。",
    "options": [
      "僵尸程序",
      "蠕虫",
      "病毒",
      "漏洞"
    ],
    "answer": "蠕虫",
    "explanation": "蠕虫能自我复制和广泛传播，以占用系统和网络资源为主要目的的恶意代码。参见教材P229。"
  },
  {
    "id": "intro_q_119",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "下列属于计算机伦理问题的是（  ）。",
    "options": [
      "如何提高编程效率",
      "未经授权获取他人数据",
      "选择哪种编程语言",
      "硬件升级方案"
    ],
    "answer": "未经授权获取他人数据",
    "explanation": "未经授权获取数据涉及隐私和伦理，其他为技术问题，参见教材P242。"
  },
  {
    "id": "intro_q_120",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "黑客伦理中的“白帽黑客”是指（  ）。",
    "options": [
      "恶意攻击者",
      "合法的安全测试人员，帮助修复漏洞",
      "网络间谍",
      "窃取数据的黑客"
    ],
    "answer": "合法的安全测试人员，帮助修复漏洞",
    "explanation": "白帽黑客通过合法方式测试并修复漏洞，参见教材P248。"
  },
  {
    "id": "intro_q_121",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "计算机伦理中的“信息污染”指（  ）。",
    "options": [
      "网络拥堵",
      "传播虚假信息、垃圾信息",
      "硬件故障",
      "软件漏洞"
    ],
    "answer": "传播虚假信息、垃圾信息",
    "explanation": "信息污染指有害、无用信息的传播。参见教材P242。"
  },
  {
    "id": "intro_q_122",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "职业道德中的“公平原则”要求（  ）。",
    "options": [
      "偏袒某些客户",
      "平等对待所有客户，不歧视",
      "优先处理熟人项目",
      "拒绝小型项目"
    ],
    "answer": "平等对待所有客户，不歧视",
    "explanation": "公平原则要求平等对待客户，参见教材P248。"
  },
  {
    "id": "intro_q_123",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "下列属于侵犯隐私权的行为是（  ）。",
    "options": [
      "公开他人邮箱内容",
      "保护用户数据",
      "加密传输信息",
      "获得授权后处理数据"
    ],
    "answer": "公开他人邮箱内容",
    "explanation": "公开他人邮箱内容侵犯隐私权，参见教材P247。"
  },
  {
    "id": "intro_q_124",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "我国《个人信息保护法》规定，处理个人信息应当遵循（  ）。",
    "options": [
      "合法、正当、必要原则",
      "随意收集原则",
      "公开所有信息原则",
      "无限期存储原则"
    ],
    "answer": "合法、正当、必要原则",
    "explanation": "《个人信息保护法》要求处理个人信息需合法、正当、必要，参见教材P248。"
  },
  {
    "id": "intro_q_125",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "计算机伦理中的“数字鸿沟”指（  ）。",
    "options": [
      "不同群体在计算机使用能力和资源上的差距",
      "软件中的漏洞",
      "网络速度差异",
      "硬件价格差异"
    ],
    "answer": "不同群体在计算机使用能力和资源上的差距",
    "explanation": "数字鸿沟指不同群体在信息技术获取上的差距。参见教材P242。"
  },
  {
    "id": "intro_q_126",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "数据隐私保护的核心是（  ）。",
    "options": [
      "公开用户数据",
      "收集尽可能多的用户信息",
      "合理使用并保护用户数据，避免滥用",
      "出售用户数据"
    ],
    "answer": "合理使用并保护用户数据，避免滥用",
    "explanation": "隐私保护强调合法收集、使用和保护用户数据。参见教材P247。"
  },
  {
    "id": "intro_q_127",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "人工智能中的“感知”技术主要涉及（  ）。",
    "options": [
      "自然语言处理",
      "计算机视觉和语音识别",
      "路径规划",
      "定理证明"
    ],
    "answer": "计算机视觉和语音识别",
    "explanation": "感知技术使机器通过视觉（如图像识别）、听觉（如语音识别）等获取环境信息，属于人工智能的基础技术。参见教材P164。"
  },
  {
    "id": "intro_q_128",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "机器学习是人工智能的分支，其核心是（  ）。",
    "options": [
      "让机器通过数据学习规律",
      "手动编写规则",
      "硬件性能提升",
      "自然语言处理"
    ],
    "answer": "让机器通过数据学习规律",
    "explanation": "机器学习通过算法使机器从数据中自动学习模式和规律，无需手动编程，是人工智能的核心技术之一。参见教材P164。"
  },
  {
    "id": "intro_q_129",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "神经网络的“训练”过程主要是调整（  ）。",
    "options": [
      "输入数据",
      "神经元数量",
      "权重和偏置",
      "输出层结构"
    ],
    "answer": "权重和偏置",
    "explanation": "神经网络训练通过反向传播算法，根据误差调整各层神经元之间的权重和偏置，使输出更接近预期；输入数据是训练素材，结构通常固定。参见教材P168。"
  },
  {
    "id": "intro_q_130",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "启发式搜索与盲目搜索的主要区别是（  ）。",
    "options": [
      "启发式搜索不扩展节点",
      "启发式搜索使用评估函数引导搜索",
      "盲目搜索效率更高",
      "启发式搜索只适用于NP问题"
    ],
    "answer": "启发式搜索使用评估函数引导搜索",
    "explanation": "启发式搜索通过评估函数估计节点优先级，引导搜索向目标靠近，效率高于盲目搜索；盲目搜索无评估函数，随机或按固定顺序扩展。参见教材P175。"
  },
  {
    "id": "intro_q_131",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "知识表示中的“框架表示法”适合描述（  ）。",
    "options": [
      "逻辑规则",
      "层次化的对象属性",
      "时序关系",
      "数学公式"
    ],
    "answer": "层次化的对象属性",
    "explanation": "框架表示法通过“槽-值”结构描述对象的属性及关系，适合层次化知识（如“人”的框架包含“姓名”“年龄”等槽）；逻辑规则适合逻辑表示法。参见教材P170。"
  },
  {
    "id": "intro_q_132",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "计算理论中，图灵机与实际计算机的关系是（  ）。",
    "options": [
      "图灵机是实际计算机的物理实现",
      "实际计算机是图灵机的一种简化模型",
      "图灵机是实际计算机的理论模型",
      "两者无关"
    ],
    "answer": "图灵机是实际计算机的理论模型",
    "explanation": "图灵机是一种抽象的计算模型，定义了计算的本质，实际计算机是图灵机的物理实现，遵循图灵机的计算逻辑。参见教材P160。"
  },
  {
    "id": "intro_q_133",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "盲目搜索算法中，按“先入先出”原则扩展节点的是（  ）。",
    "options": [
      "深度优先搜索",
      "广度优先搜索",
      "A*算法",
      "启发式搜索"
    ],
    "answer": "广度优先搜索",
    "explanation": "广度优先搜索以队列作为数据结构，按“先入先出”顺序扩展节点，优先探索浅层节点；深度优先搜索用栈，优先深入探索分支。参见教材P178。"
  },
  {
    "id": "intro_q_134",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "关于专家系统优缺点的说法，正确的是（  ）。",
    "options": [
      "不具备并行分布功能",
      "具备多专家协同能力",
      "系统适应能力好",
      "处理不确定问题的能力较高"
    ],
    "answer": "不具备并行分布功能",
    "explanation": "专家系统不具备并行分布功能，不具备多专家协同能力，系统适应能力较差，处理不确定问题的能力较差。参见教材P171。"
  },
  {
    "id": "intro_q_135",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "数学是计算理论的基础，下列不属于线性代数研究范畴的是（  ）。",
    "options": [
      "行列式",
      "微积分",
      "矩阵",
      "线性方程组"
    ],
    "answer": "微积分",
    "explanation": "线性代数主要包含行列式、矩阵、线性方程组、向量空间与线性变换等。参见教材P160。"
  },
  {
    "id": "intro_q_136",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "专家系统组件不包括（  ）。",
    "options": [
      "知识库",
      "推理机",
      "人机接口",
      "中央处理器"
    ],
    "answer": "中央处理器",
    "explanation": "专家系统由知识库（存储知识）、推理机（处理推理）、人机接口（用户交互）组成；中央处理器是硬件，不属于专家系统组件。参见教材P171。"
  },
  {
    "id": "intro_q_137",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "树的应用场景不包括（  ）。",
    "options": [
      "图形渲染",
      "查找",
      "排序",
      "路由选择"
    ],
    "answer": "图形渲染",
    "explanation": "树适用于查找（二叉搜索树）、排序（堆排序）、路由选择（决策树）等；图形渲染更多用图结构。参见教材P147。"
  },
  {
    "id": "intro_q_138",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "事务并发控制机制中，避免活锁产生的方法是采用（  ）的策略。",
    "options": [
      "先来先服务",
      "优先级调度",
      "时间片轮转",
      "短作业优先"
    ],
    "answer": "先来先服务",
    "explanation": "事务并发控制机制中，先来先服务策略可避免活锁。参见教材P103。"
  },
  {
    "id": "intro_q_139",
    "subjectId": "intro",
    "section": "practice",
    "type": "single_choice",
    "text": "下列不属于操作系统进程管理功能的是（  ）。",
    "options": [
      "内存分配",
      "进程调度",
      "进程同步和互斥",
      "死锁处理"
    ],
    "answer": "内存分配",
    "explanation": "进程管理包括进程创建/撤销、调度、同步互斥、死锁处理；内存分配属于存储管理。参见教材P55。 二、多项选择题"
  },
  {
    "id": "intro_q_140",
    "subjectId": "intro",
    "section": "practice",
    "type": "multiple_choice",
    "text": "冯·诺依曼计算机硬件结构包括（  ）。",
    "options": [
      "运算器",
      "控制器",
      "存储器",
      "输入设备",
      "输出设备"
    ],
    "answer": [
      "运算器",
      "控制器",
      "存储器",
      "输入设备",
      "输出设备"
    ],
    "explanation": "冯·诺依曼结构主要由运算器、控制器、存储器、输入设备和输出设备五大部件组成。参见教材P2。"
  },
  {
    "id": "intro_q_141",
    "subjectId": "intro",
    "section": "practice",
    "type": "multiple_choice",
    "text": "下列属于内存储器的是（  ）。",
    "options": [
      "ROM",
      "RAM",
      "硬盘",
      "光盘",
      "Cache"
    ],
    "answer": [
      "ROM",
      "RAM"
    ],
    "explanation": "内存储器可分为只读存储器（ROM）和随机存储器（RAM）。参见教材P2。"
  },
  {
    "id": "intro_q_142",
    "subjectId": "intro",
    "section": "practice",
    "type": "multiple_choice",
    "text": "按功能可将计算机软件系统分为（  ）。",
    "options": [
      "系统软件",
      "应用软件",
      "硬件驱动程序",
      "办公软件",
      "游戏软件"
    ],
    "answer": [
      "系统软件",
      "应用软件"
    ],
    "explanation": "按功能可将计算机软件系统分为系统软件和应用软件。参见教材P3。"
  },
  {
    "id": "intro_q_143",
    "subjectId": "intro",
    "section": "practice",
    "type": "multiple_choice",
    "text": "高级语言的特点包括（  ）。",
    "options": [
      "是接近人类的自然语言",
      "独立于机器",
      "需翻译为机器语言执行",
      "执行速度比机器语言快",
      "易读易写"
    ],
    "answer": [
      "是接近人类的自然语言",
      "独立于机器",
      "需翻译为机器语言执行",
      "易读易写"
    ],
    "explanation": "高级语言是接近人类的自然语言，独立于机器，需翻译后执行，易读易写，但执行速度慢于机器语言，参见教材P4。"
  },
  {
    "id": "intro_q_144",
    "subjectId": "intro",
    "section": "practice",
    "type": "multiple_choice",
    "text": "系统软件包括（  ）。",
    "options": [
      "操作系统",
      "语言处理程序",
      "管理程序",
      "办公软件",
      "游戏软件"
    ],
    "answer": [
      "操作系统",
      "语言处理程序",
      "管理程序"
    ],
    "explanation": "系统软件包括操作系统、语言处理程序、管理程序等，办公软件和游戏软件是应用软件。参见教材P3。"
  },
  {
    "id": "intro_q_145",
    "subjectId": "intro",
    "section": "practice",
    "type": "multiple_choice",
    "text": "有符号数的编码方式包括（  ）。",
    "options": [
      "原码",
      "补码",
      "反码",
      "BCD码",
      "ASCII码"
    ],
    "answer": [
      "原码",
      "补码",
      "反码"
    ],
    "explanation": "有符号数编码为原码、补码、反码，BCD和ASCII是字符编码，参见教材P19。"
  },
  {
    "id": "intro_q_146",
    "subjectId": "intro",
    "section": "practice",
    "type": "multiple_choice",
    "text": "下列关于ASCII码的说法，正确的有（  ）。",
    "options": [
      "有7位码和8位码两种形式",
      "7位ASCII码有128个字符",
      "大写字母的ASCII码值小于小写字母",
      "'0'的ASCII码值为48",
      "一个字符的ASCII码占一个字节"
    ],
    "answer": [
      "有7位码和8位码两种形式",
      "7位ASCII码有128个字符",
      "大写字母的ASCII码值小于小写字母",
      "'0'的ASCII码值为48",
      "一个字符的ASCII码占一个字节"
    ],
    "explanation": "ASCII码有7位码和8位码两种形式，7位ASCII码有128个字符，大写字母的ASCII码值小于小写字母，'0'的ASCII码值为48，一个字符的ASCII码占一个字节。参见教材P20。"
  },
  {
    "id": "intro_q_147",
    "subjectId": "intro",
    "section": "practice",
    "type": "multiple_choice",
    "text": "汉字的输入编码方案大体上分为（  ）。",
    "options": [
      "字音编码",
      "数字编码",
      "ASCII码",
      "字形编码",
      "BCD码"
    ],
    "answer": [
      "字音编码",
      "数字编码",
      "字形编码"
    ],
    "explanation": "汉字的输入编码方案大体上分为字音编码、数字编码和字形编码三类。参见教材P23。"
  },
  {
    "id": "intro_q_148",
    "subjectId": "intro",
    "section": "practice",
    "type": "multiple_choice",
    "text": "补码的优势在于（  ）。",
    "options": [
      "只简化加法运算",
      "简化加减法的运算规则",
      "符号位可参与运算",
      "表示范围更大",
      "是有符号数的最简单的表示法"
    ],
    "answer": [
      "简化加减法的运算规则",
      "符号位可参与运算",
      "表示范围更大"
    ],
    "explanation": "原码表示法是有符号数的最简单的表示法；补码符号位参加运算，从而简化加减法的运算规则，表示范围更大。参见教材P20。"
  },
  {
    "id": "intro_q_149",
    "subjectId": "intro",
    "section": "practice",
    "type": "multiple_choice",
    "text": "下列属于存储容量单位的有（  ）。",
    "options": [
      "Byte",
      "KB",
      "MB",
      "GB",
      "MIPS"
    ],
    "answer": [
      "Byte",
      "KB",
      "MB",
      "GB"
    ],
    "explanation": "Byte、KB、MB、GB是存储单位，MIPS是运算速度单位，参见教材P15。"
  },
  {
    "id": "intro_q_150",
    "subjectId": "intro",
    "section": "practice",
    "type": "multiple_choice",
    "text": "关于显示器适配卡的描述，正确的有（  ）。",
    "options": [
      "显示卡主要用于与显示器连接",
      "可分为单色显示器适配卡和彩色显示器适配卡",
      "MCGP卡复合了MDA和CGA显示模式",
      "MCGP卡通常包含并行打印接口",
      "高分辨率显示器一般适配VGA、TVGA或SVGA卡"
    ],
    "answer": [
      "显示卡主要用于与显示器连接",
      "可分为单色显示器适配卡和彩色显示器适配卡",
      "MCGP卡复合了MDA和CGA显示模式",
      "MCGP卡通常包含并行打印接口",
      "高分辨率显示器一般适配VGA、TVGA或SVGA卡"
    ],
    "explanation": "显示卡主要用于与显示器连接，可分为单色显示器适配卡和彩色显示器适配卡，MCGP卡复合了MDA和CGA显示模式，MCGP卡通常包含并行打印接口，高分辨率显示器一般适配VGA、TVGA或SVGA卡。参见教材P28。"
  },
  {
    "id": "intro_q_151",
    "subjectId": "intro",
    "section": "practice",
    "type": "multiple_choice",
    "text": "微处理器的内部结构可以分为（  ）三大部分。",
    "options": [
      "控制单元",
      "逻辑单元",
      "存储单元",
      "输入单元",
      "输出单元"
    ],
    "answer": [
      "控制单元",
      "逻辑单元",
      "存储单元"
    ],
    "explanation": "微处理器的内部结构可以分为控制单元、逻辑单元和存储单元三大部分。参见教材P33。"
  },
  {
    "id": "intro_q_152",
    "subjectId": "intro",
    "section": "practice",
    "type": "multiple_choice",
    "text": "下列关于显示器的说法中，正确的有（  ）。",
    "options": [
      "CRT显示器体积较大",
      "LCD显示器功耗较低",
      "分辨率越高，显示效果越清晰",
      "颜色深度越大，可显示颜色越多",
      "显示器属于输入设备"
    ],
    "answer": [
      "CRT显示器体积较大",
      "LCD显示器功耗较低",
      "分辨率越高，显示效果越清晰",
      "颜色深度越大，可显示颜色越多"
    ],
    "explanation": "显示器是输出设备，CRT体积大、LCD功耗低，分辨率和颜色深度影响显示效果。参见教材P49。"
  },
  {
    "id": "intro_q_153",
    "subjectId": "intro",
    "section": "practice",
    "type": "multiple_choice",
    "text": "下列属于半导体存储器的特点的有（  ）。",
    "options": [
      "速度快",
      "体积小",
      "容量大",
      "断电后信息丢失（RAM）",
      "可长期保存信息（ROM）"
    ],
    "answer": [
      "速度快",
      "体积小",
      "断电后信息丢失（RAM）",
      "可长期保存信息（ROM）"
    ],
    "explanation": "半导体存储器（如RAM、ROM）速度快、体积小，RAM断电丢失信息，ROM可长期保存；外存通常容量更大。参见教材P36。"
  },
  {
    "id": "intro_q_154",
    "subjectId": "intro",
    "section": "practice",
    "type": "multiple_choice",
    "text": "下列关于中断的说法中，正确的有（  ）。",
    "options": [
      "中断可提高CPU利用率",
      "中断分为硬件中断和软件中断",
      "中断处理过程包括中断请求、中断响应、中断处理、中断返回",
      "中断会暂停当前程序的执行",
      "中断处理完成后会继续执行原程序"
    ],
    "answer": [
      "中断可提高CPU利用率",
      "中断分为硬件中断和软件中断",
      "中断处理过程包括中断请求、中断响应、中断处理、中断返回",
      "中断会暂停当前程序的执行",
      "中断处理完成后会继续执行原程序"
    ],
    "explanation": "中断是CPU处理外部事件的机制，可提高效率，分为硬中断和软中断，处理过程包括请求、响应、处理、返回，会暂停原程序并在处理后恢复。参见教材P40。"
  },
  {
    "id": "intro_q_155",
    "subjectId": "intro",
    "section": "practice",
    "type": "multiple_choice",
    "text": "按存取方式分类，可将存储器分为（  ）。",
    "options": [
      "RAM",
      "ROM",
      "SAM",
      "DAM",
      "Cache"
    ],
    "answer": [
      "RAM",
      "ROM",
      "SAM",
      "DAM"
    ],
    "explanation": "按存取方式分类，可将存储器分为RAM、ROM、SAM和DAM。参见教材P43。"
  },
  {
    "id": "intro_q_156",
    "subjectId": "intro",
    "section": "practice",
    "type": "multiple_choice",
    "text": "进程的基本属性包括（  ）。",
    "options": [
      "动态性",
      "并发性",
      "独立性",
      "共享性",
      "结构性"
    ],
    "answer": [
      "动态性",
      "并发性",
      "独立性",
      "共享性",
      "结构性"
    ],
    "explanation": "进程具有动态性、并发性、独立性、共享性、结构性、制约性。参见教材P55。"
  },
  {
    "id": "intro_q_157",
    "subjectId": "intro",
    "section": "practice",
    "type": "multiple_choice",
    "text": "数据库的完整性约束包括（  ）。",
    "options": [
      "实体完整性",
      "参照完整性",
      "用户定义完整性",
      "数据一致性",
      "数据安全性"
    ],
    "answer": [
      "实体完整性",
      "参照完整性",
      "用户定义完整性"
    ],
    "explanation": "数据库完整性包括实体完整性、参照完整性、用户定义完整性。参见教材P90。"
  },
  {
    "id": "intro_q_158",
    "subjectId": "intro",
    "section": "practice",
    "type": "multiple_choice",
    "text": "字符常量与字符串常量的区别在于（  ）。",
    "options": [
      "字符常量用单引号，字符串用双引号",
      "字符常量占1个字节，字符串占多个字节",
      "字符常量可参与算术运算，字符串代表地址",
      "字符常量和字符串常量都占多个字节",
      "字符常量和字符串常量都可参与算术运算"
    ],
    "answer": [
      "字符常量用单引号，字符串用双引号",
      "字符常量占1个字节，字符串占多个字节",
      "字符常量可参与算术运算，字符串代表地址"
    ],
    "explanation": "字符常量与字符串常量在形式、内存占用、含义上均有区别。参见教材P103。"
  },
  {
    "id": "intro_q_159",
    "subjectId": "intro",
    "section": "practice",
    "type": "multiple_choice",
    "text": "死锁产生的条件包括（  ）。",
    "options": [
      "互斥条件",
      "剥夺条件",
      "不剥夺条件",
      "请求和保持条件",
      "环路条件"
    ],
    "answer": [
      "互斥条件",
      "不剥夺条件",
      "请求和保持条件",
      "环路条件"
    ],
    "explanation": "死锁产生的条件包括互斥条件、不剥夺条件、请求和保持条件和环路条件。参见教材P60。"
  },
  {
    "id": "intro_q_160",
    "subjectId": "intro",
    "section": "practice",
    "type": "multiple_choice",
    "text": "事务的ACID性质包括（  ）。",
    "options": [
      "原子性",
      "一致性",
      "隔离性",
      "持久性",
      "多样性"
    ],
    "answer": [
      "原子性",
      "一致性",
      "隔离性",
      "持久性"
    ],
    "explanation": "事务的ACID性质包括原子性、一致性、隔离性、持久性。参见教材P97。"
  },
  {
    "id": "intro_q_161",
    "subjectId": "intro",
    "section": "practice",
    "type": "multiple_choice",
    "text": "下列属于数据库恢复主要策略的有（  ）。",
    "options": [
      "事务故障恢复",
      "系统故障恢复",
      "介质故障恢复",
      "网络故障恢复",
      "人为误操作恢复"
    ],
    "answer": [
      "事务故障恢复",
      "系统故障恢复",
      "介质故障恢复"
    ],
    "explanation": "数据库恢复策略可大致分为事务故障恢复、系统故障恢复和介质故障恢复。参见教材P96。"
  },
  {
    "id": "intro_q_162",
    "subjectId": "intro",
    "section": "practice",
    "type": "multiple_choice",
    "text": "关系模型中的操作主要包含（  ）。",
    "options": [
      "SELECT",
      "INSERT",
      "UPDATE",
      "CREATE",
      "DELETE"
    ],
    "answer": [
      "SELECT",
      "INSERT",
      "UPDATE",
      "DELETE"
    ],
    "explanation": "关系模型中的操作主要包含数据查询、数据插入、数据修改和数据删除。参见教材P90。"
  },
  {
    "id": "intro_q_163",
    "subjectId": "intro",
    "section": "practice",
    "type": "multiple_choice",
    "text": "信道的多路复用技术包括（  ）。",
    "options": [
      "频分多路复用",
      "时分多路复用",
      "波分多路复用",
      "码分多路复用",
      "地址多路复用"
    ],
    "answer": [
      "频分多路复用",
      "时分多路复用",
      "波分多路复用",
      "码分多路复用"
    ],
    "explanation": "多路复用技术包括频分、时分、波分、码分复用，无地址复用。参见教材P109。"
  },
  {
    "id": "intro_q_164",
    "subjectId": "intro",
    "section": "practice",
    "type": "multiple_choice",
    "text": "计算机网络按拓扑结构可分为（  ）。",
    "options": [
      "星型",
      "总线型",
      "树型",
      "环型",
      "网状型"
    ],
    "answer": [
      "星型",
      "总线型",
      "树型",
      "环型",
      "网状型"
    ],
    "explanation": "网络拓扑结构包括星型、总线型、树型、环型、网状型。参见教材P134。"
  },
  {
    "id": "intro_q_165",
    "subjectId": "intro",
    "section": "practice",
    "type": "multiple_choice",
    "text": "计算机网络发展的阶段包括（  ）。",
    "options": [
      "面向终端的计算机通信网",
      "分组交换网",
      "统一体系结构的标准化网络",
      "高速计算机网络",
      "物联网"
    ],
    "answer": [
      "面向终端的计算机通信网",
      "分组交换网",
      "统一体系结构的标准化网络",
      "高速计算机网络"
    ],
    "explanation": "计算机网络发展分为四个阶段：面向终端、分组交换、标准化网络、高速网络。参见教材P105。"
  },
  {
    "id": "intro_q_166",
    "subjectId": "intro",
    "section": "practice",
    "type": "multiple_choice",
    "text": "计算机网络按作用范围可分为（  ）。",
    "options": [
      "局域网",
      "公用网",
      "城域网",
      "广域网",
      "专用网"
    ],
    "answer": [
      "局域网",
      "城域网",
      "广域网"
    ],
    "explanation": "计算机网络按作用范围分为局域网（LAN）、城域网（MAN）、广域网（WAN）。参见教材P136。"
  },
  {
    "id": "intro_q_167",
    "subjectId": "intro",
    "section": "practice",
    "type": "multiple_choice",
    "text": "工业互联网平台的核心层级包括（  ）。",
    "options": [
      "边缘层",
      "平台层",
      "感知层",
      "汇聚层",
      "应用层"
    ],
    "answer": [
      "边缘层",
      "平台层",
      "应用层"
    ],
    "explanation": "工业互联网平台包括边缘层、平台层（工业PaaS）、应用层（工业SaaS）。参见教材P130。"
  },
  {
    "id": "intro_q_168",
    "subjectId": "intro",
    "section": "practice",
    "type": "multiple_choice",
    "text": "分组交换的特点包括（  ）。",
    "options": [
      "基于存储-转发机制",
      "比电路交换的电路利用率高",
      "比报文交换的传输时延小",
      "比电路交换的电路利用率低",
      "比报文交换的传输时延大"
    ],
    "answer": [
      "基于存储-转发机制",
      "比电路交换的电路利用率高",
      "比报文交换的传输时延小"
    ],
    "explanation": "分组交换采用存储-转发，比电路交换的电路利用率高，比报文交换的传输时延小。参见教材P135。"
  },
  {
    "id": "intro_q_169",
    "subjectId": "intro",
    "section": "practice",
    "type": "multiple_choice",
    "text": "电路交换、报文交换、分组交换的区别在于（  ）。",
    "options": [
      "电路交换需要建立专用电路",
      "报文交换以报文为单位存储转发",
      "分组交换将报文分成小块传输",
      "分组交换实时性优于电路交换",
      "报文交换线路利用率高于电路交换"
    ],
    "answer": [
      "电路交换需要建立专用电路",
      "报文交换以报文为单位存储转发",
      "分组交换将报文分成小块传输",
      "报文交换线路利用率高于电路交换"
    ],
    "explanation": "电路交换实时性最好，分组交换实时性优于报文交换但不及电路交换。参见教材P135。"
  },
  {
    "id": "intro_q_170",
    "subjectId": "intro",
    "section": "practice",
    "type": "multiple_choice",
    "text": "从网络的拓扑结构进行分类可分为（  ）。",
    "options": [
      "集中式网络",
      "分散式网络",
      "分布式网络",
      "电路交换",
      "分组交换"
    ],
    "answer": [
      "集中式网络",
      "分散式网络",
      "分布式网络"
    ],
    "explanation": "从网络的拓扑结构进行分类：集中式网络、分散式网络和分布式网络。参见教材P136。"
  },
  {
    "id": "intro_q_171",
    "subjectId": "intro",
    "section": "practice",
    "type": "multiple_choice",
    "text": "主干网与本地接入网的区别在于（  ）。",
    "options": [
      "主干网一般是分布式结构",
      "本地接入网一般是集中式结构",
      "主干网速率高",
      "本地接入网覆盖范围小",
      "主干网仅用于企业内部"
    ],
    "answer": [
      "主干网一般是分布式结构",
      "本地接入网一般是集中式结构",
      "主干网速率高",
      "本地接入网覆盖范围小"
    ],
    "explanation": "主干网是分布式、高速、广覆盖；本地接入网是集中式、速率较低、覆盖范围小。参见教材P136。"
  },
  {
    "id": "intro_q_172",
    "subjectId": "intro",
    "section": "practice",
    "type": "multiple_choice",
    "text": "物理层的接口特性包括（  ）。",
    "options": [
      "机械特性",
      "电气特性",
      "功能特性",
      "过程特性",
      "数据特性"
    ],
    "answer": [
      "机械特性",
      "电气特性",
      "功能特性",
      "过程特性"
    ],
    "explanation": "物理层接口特性包括机械、电气、功能、过程特性。参见教材P107。"
  },
  {
    "id": "intro_q_173",
    "subjectId": "intro",
    "section": "practice",
    "type": "multiple_choice",
    "text": "数据链路层的协议包括（  ）。",
    "options": [
      "PPP",
      "以太网",
      "TCP",
      "IP",
      "ARP"
    ],
    "answer": [
      "PPP",
      "以太网"
    ],
    "explanation": "PPP和以太网协议属于数据链路层；TCP是传输层，IP和ARP是网络层。参见教材P113。"
  },
  {
    "id": "intro_q_174",
    "subjectId": "intro",
    "section": "practice",
    "type": "multiple_choice",
    "text": "传输层协议包括（  ）。",
    "options": [
      "TCP",
      "UDP",
      "IP",
      "HTTP",
      "FTP"
    ],
    "answer": [
      "TCP",
      "UDP"
    ],
    "explanation": "TCP和UDP是传输层协议；IP是网络层，HTTP和FTP是应用层。参见教材P116。"
  },
  {
    "id": "intro_q_175",
    "subjectId": "intro",
    "section": "practice",
    "type": "multiple_choice",
    "text": "人工智能的关键技术包括（  ）。",
    "options": [
      "知识表示",
      "专家系统",
      "感知技术",
      "搜索算法",
      "神经网络"
    ],
    "answer": [
      "知识表示",
      "专家系统",
      "感知技术",
      "搜索算法",
      "神经网络"
    ],
    "explanation": "人工智能技术包括知识表示、专家系统、感知、搜索、神经网络等。参见教材167。"
  },
  {
    "id": "intro_q_176",
    "subjectId": "intro",
    "section": "practice",
    "type": "multiple_choice",
    "text": "下列属于算法设计方法的是（  ）。",
    "options": [
      "分支限界法",
      "分治法",
      "动态规划法",
      "贪心算法",
      "回溯算法"
    ],
    "answer": [
      "分支限界法",
      "分治法",
      "动态规划法",
      "贪心算法",
      "回溯算法"
    ],
    "explanation": "贪心算法、分治法、动态规划法、回溯算法、分支限界法等都属于算法设计方法。参见教材P143。"
  },
  {
    "id": "intro_q_177",
    "subjectId": "intro",
    "section": "practice",
    "type": "multiple_choice",
    "text": "递归算法的特点是（  ）。",
    "options": [
      "直接或间接调用自身",
      "必须有终止条件",
      "可转化为迭代算法",
      "不能转化为迭代算法",
      "可以没有终止条件"
    ],
    "answer": [
      "直接或间接调用自身",
      "必须有终止条件",
      "可转化为迭代算法"
    ],
    "explanation": "递归算法通过调用自身求解问题，需有终止条件，通常可转化为迭代形式。参见教材P139。"
  },
  {
    "id": "intro_q_178",
    "subjectId": "intro",
    "section": "practice",
    "type": "multiple_choice",
    "text": "动态规划法与分治法的区别在于（  ）。",
    "options": [
      "动态规划处理重叠子问题",
      "分治法处理独立子问题",
      "动态规划利用最优子结构",
      "分治法无需合并子问题",
      "动态规划适合解决资源分配优化问题"
    ],
    "answer": [
      "动态规划处理重叠子问题",
      "分治法处理独立子问题",
      "动态规划利用最优子结构",
      "动态规划适合解决资源分配优化问题"
    ],
    "explanation": "动态规划适用于重叠子问题和最优子结构，分治法适用于独立子问题，均需合并子问题。参见教材P140。"
  },
  {
    "id": "intro_q_179",
    "subjectId": "intro",
    "section": "practice",
    "type": "multiple_choice",
    "text": "下列属于线性结构的是（  ）。",
    "options": [
      "数组",
      "图",
      "栈",
      "队列",
      "树"
    ],
    "answer": [
      "栈",
      "队列"
    ],
    "explanation": "栈、队列是线性结构。参见教材P147。"
  },
  {
    "id": "intro_q_180",
    "subjectId": "intro",
    "section": "practice",
    "type": "multiple_choice",
    "text": "栈的基本操作包括（  ）。",
    "options": [
      "入栈",
      "出栈",
      "取栈顶元素",
      "判断栈空",
      "遍历"
    ],
    "answer": [
      "入栈",
      "出栈",
      "取栈顶元素",
      "判断栈空"
    ],
    "explanation": "栈的操作包括入栈、出栈、取栈顶、判空。参见教材P150。"
  },
  {
    "id": "intro_q_181",
    "subjectId": "intro",
    "section": "practice",
    "type": "multiple_choice",
    "text": "数据结构包括（  ）。",
    "options": [
      "数据的逻辑结构",
      "数据的存储结构",
      "数据的运算",
      "输入输出格式",
      "类型定义"
    ],
    "answer": [
      "数据的逻辑结构",
      "数据的存储结构",
      "数据的运算"
    ],
    "explanation": "数据结构包括数据的逻辑结构、数据的存储结构和数据的运算三方面。参见教材P148。"
  },
  {
    "id": "intro_q_182",
    "subjectId": "intro",
    "section": "practice",
    "type": "multiple_choice",
    "text": "算法按实现方式可分为（  ）。",
    "options": [
      "递归算法",
      "迭代算法",
      "并行算法",
      "分布式算法",
      "贪心算法"
    ],
    "answer": [
      "递归算法",
      "迭代算法",
      "并行算法",
      "分布式算法"
    ],
    "explanation": "递归、迭代、并行、分布式是按实现方式分类；贪心算法是按设计方法分类。参见教材P139。"
  },
  {
    "id": "intro_q_183",
    "subjectId": "intro",
    "section": "practice",
    "type": "multiple_choice",
    "text": "要想程序通过图灵测试，还需（  ）技能。",
    "options": [
      "自然语言处理",
      "知识表示",
      "自动推理",
      "机器学习",
      "机器人技术"
    ],
    "answer": [
      "自然语言处理",
      "知识表示",
      "自动推理",
      "机器学习",
      "机器人技术"
    ],
    "explanation": "要想程序通过图灵测试，还需自然语言处理、知识表示、自动推理、机器学习、机器人技术。参见教材P166。"
  },
  {
    "id": "intro_q_184",
    "subjectId": "intro",
    "section": "practice",
    "type": "multiple_choice",
    "text": "知识表示的常用方法有（  ）。",
    "options": [
      "一阶谓词逻辑表示法",
      "框架表示法",
      "语义网络表示法",
      "过程表示法",
      "产生式表示法"
    ],
    "answer": [
      "一阶谓词逻辑表示法",
      "框架表示法",
      "语义网络表示法",
      "过程表示法",
      "产生式表示法"
    ],
    "explanation": "知识表示方法包括一阶谓词逻辑、框架、语义网络、过程、产生式表示法等。参见教材P167。"
  },
  {
    "id": "intro_q_185",
    "subjectId": "intro",
    "section": "practice",
    "type": "multiple_choice",
    "text": "常见的需求分析方法有（  ）。",
    "options": [
      "功能分析方法",
      "结构化分析方法",
      "信息建模法",
      "面向对象的分析方法",
      "面向过程的分析方法"
    ],
    "answer": [
      "功能分析方法",
      "结构化分析方法",
      "信息建模法",
      "面向对象的分析方法"
    ],
    "explanation": "常见的需求分析方法有功能分析方法、结构化分析方法、信息建模法、面向对象的分析方法。参见教材P195。"
  },
  {
    "id": "intro_q_186",
    "subjectId": "intro",
    "section": "practice",
    "type": "multiple_choice",
    "text": "软件工程的基本目标包括（  ）。",
    "options": [
      "可靠性",
      "可维护性",
      "适用性",
      "可重用性",
      "有效性"
    ],
    "answer": [
      "可靠性",
      "可维护性",
      "适用性",
      "可重用性",
      "有效性"
    ],
    "explanation": "软件工程的基本目标包括可靠性、可维护性、适用性等。参见教材P185。"
  },
  {
    "id": "intro_q_187",
    "subjectId": "intro",
    "section": "practice",
    "type": "multiple_choice",
    "text": "软件过程通用框架活动包括（  ）。",
    "options": [
      "沟通",
      "策划",
      "建模",
      "构建",
      "部署"
    ],
    "answer": [
      "沟通",
      "策划",
      "建模",
      "构建",
      "部署"
    ],
    "explanation": "软件过程通用框架活动包括沟通、策划、建模、构建和部署。参见教材P188。"
  },
  {
    "id": "intro_q_188",
    "subjectId": "intro",
    "section": "practice",
    "type": "multiple_choice",
    "text": "软件是包括（  ）的完整集合。",
    "options": [
      "程序",
      "数据",
      "相关文档",
      "逻辑",
      "开发"
    ],
    "answer": [
      "程序",
      "数据",
      "相关文档"
    ],
    "explanation": "软件是包括程序，数据及其相关文档的完整集合。参见教材P185。"
  },
  {
    "id": "intro_q_189",
    "subjectId": "intro",
    "section": "practice",
    "type": "multiple_choice",
    "text": "软件项目管理包括（  ）。",
    "options": [
      "软件度量",
      "项目估算",
      "进度控制",
      "配置管理",
      "项目计划"
    ],
    "answer": [
      "软件度量",
      "项目估算",
      "进度控制",
      "配置管理",
      "项目计划"
    ],
    "explanation": "软件项目管理包括软件度量、项目估算、进度控制、人员管理、配置管理和项目计划。参见教材P187。"
  },
  {
    "id": "intro_q_190",
    "subjectId": "intro",
    "section": "practice",
    "type": "multiple_choice",
    "text": "衡量密码系统攻击的复杂性主要考虑（  ）。",
    "options": [
      "对称加密",
      "数据复杂性",
      "处理复杂性",
      "存储需求",
      "防火墙"
    ],
    "answer": [
      "数据复杂性",
      "处理复杂性",
      "存储需求"
    ],
    "explanation": "衡量密码系统攻击的复杂性主要考虑数据复杂性、处理复杂性和存储需求。参见教材P225。"
  },
  {
    "id": "intro_q_191",
    "subjectId": "intro",
    "section": "practice",
    "type": "multiple_choice",
    "text": "常见的网络攻击方法有（  ）。",
    "options": [
      "钓鱼攻击",
      "分布式拒绝服务攻击",
      "缓冲区溢出",
      "SQL注入",
      "数据备份"
    ],
    "answer": [
      "钓鱼攻击",
      "分布式拒绝服务攻击",
      "缓冲区溢出",
      "SQL注入"
    ],
    "explanation": "钓鱼攻击、分布式拒绝服务攻击等均为攻击方法，数据备份是防护措施，参见教材P230。"
  },
  {
    "id": "intro_q_192",
    "subjectId": "intro",
    "section": "practice",
    "type": "multiple_choice",
    "text": "常见的恶意软件类型有（  ）。",
    "options": [
      "病毒",
      "蠕虫",
      "木马",
      "防火墙",
      "入侵检测系统"
    ],
    "answer": [
      "病毒",
      "蠕虫",
      "木马"
    ],
    "explanation": "恶意软件包括病毒、蠕虫、木马。防火墙和入侵检测系统是安全防护工具。参见教材P229。"
  },
  {
    "id": "intro_q_193",
    "subjectId": "intro",
    "section": "practice",
    "type": "multiple_choice",
    "text": "非对称密码体制的主要优势是（  ）。",
    "options": [
      "密钥分配简单",
      "系统密钥量少，便于管理",
      "系统开放性好",
      "可以实现数字签名",
      "效率高"
    ],
    "answer": [
      "密钥分配简单",
      "系统密钥量少，便于管理",
      "系统开放性好",
      "可以实现数字签名"
    ],
    "explanation": "对称密码体制的优势是效率高。参见教材P227。"
  },
  {
    "id": "intro_q_194",
    "subjectId": "intro",
    "section": "practice",
    "type": "multiple_choice",
    "text": "评估密码系统安全性主要有（  ）方法。",
    "options": [
      "无条件安全性",
      "计算安全性",
      "可证明安全性",
      "有条件安全性",
      "存储安全性"
    ],
    "answer": [
      "无条件安全性",
      "计算安全性",
      "可证明安全性"
    ],
    "explanation": "评估密码系统安全性主要有三种方法：无条件安全性、计算安全性、可证明安全性。参见教材P225。"
  },
  {
    "id": "intro_q_195",
    "subjectId": "intro",
    "section": "practice",
    "type": "multiple_choice",
    "text": "网络信息安全的基本属性有（  ）。",
    "options": [
      "信息的完整性",
      "可用性",
      "机密性",
      "可靠性",
      "可控性"
    ],
    "answer": [
      "信息的完整性",
      "可用性",
      "机密性",
      "可靠性",
      "可控性"
    ],
    "explanation": "网络信息安全的基本属性有信息的完整性、可用性、机密性、可控性、可靠性和不可否认性。参见教材P216。"
  },
  {
    "id": "intro_q_196",
    "subjectId": "intro",
    "section": "practice",
    "type": "multiple_choice",
    "text": "计算机伦理教育的目的是（  ）。",
    "options": [
      "培养正确的价值观",
      "规范计算机使用行为",
      "预防计算机犯罪",
      "提高编程能力",
      "促进负责任的技术创新"
    ],
    "answer": [
      "培养正确的价值观",
      "规范计算机使用行为",
      "预防计算机犯罪",
      "促进负责任的技术创新"
    ],
    "explanation": "伦理教育旨在培养价值观、规范行为等，与编程能力无关，参见教材P242。"
  },
  {
    "id": "intro_q_197",
    "subjectId": "intro",
    "section": "practice",
    "type": "multiple_choice",
    "text": "网络信息安全具有（  ）特征。",
    "options": [
      "整体的",
      "动态的",
      "无边界",
      "静态的",
      "发展的"
    ],
    "answer": [
      "整体的",
      "动态的",
      "无边界",
      "发展的"
    ],
    "explanation": "网络信息安全具有整体的、动态的、无边界和发展的特征。参见教材P217。"
  },
  {
    "id": "intro_q_198",
    "subjectId": "intro",
    "section": "practice",
    "type": "multiple_choice",
    "text": "计算机伦理涉及的主要问题包括（  ）。",
    "options": [
      "隐私保护",
      "知识产权",
      "计算机犯罪",
      "软件盗版",
      "硬件升级"
    ],
    "answer": [
      "隐私保护",
      "知识产权",
      "计算机犯罪",
      "软件盗版"
    ],
    "explanation": "计算机伦理涵盖隐私、知识产权等，硬件升级是技术问题，参见教材P247。"
  },
  {
    "id": "intro_q_199",
    "subjectId": "intro",
    "section": "practice",
    "type": "multiple_choice",
    "text": "通常一个密码体制包括（  ）。",
    "options": [
      "消息空间",
      "密文空间",
      "秘钥空间",
      "加密算法",
      "解密算法"
    ],
    "answer": [
      "消息空间",
      "密文空间",
      "秘钥空间",
      "加密算法",
      "解密算法"
    ],
    "explanation": "通常一个密码体制包括消息空间、密文空间、秘钥空间、加密算法和解密算法。参见教材P222。"
  }
];
