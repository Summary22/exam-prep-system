import { Question } from './mockData';

export const discretemathQuestions: Question[] = [
  {
    "id": "discretemath_q1",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "设P：他勤奋，Q：他成绩高，命题“只有他勤奋，他成绩才高”符号化为（　）。",
    "options": [
      "P∨Q",
      "Q→P",
      "￢P∨￢Q",
      "P→Q"
    ],
    "answer": "Q→P",
    "explanation": "命题Q→P表示“Q是P的必要条件”。参见教材P23。（2021年04月试题）"
  },
  {
    "id": "discretemath_q2",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "下列命题公式是矛盾式的为（　）。",
    "options": [
      "（P→Q）∧（Q→R）→（P→R）",
      "（P→Q）→（￢Q→￢P）",
      "￢（P∧Q）∨（￢P∧￢Q）",
      "￢（P→Q）∧Q"
    ],
    "answer": "￢（P→Q）∧Q",
    "explanation": "设A为一命题公式，若A在它的各种指派情况下，其取值均为假，则称公式A为矛盾式或永假式。 ![](qimg/f75cc98495b53edf.gif) 参见教材P27。（2021年04月试题）"
  },
  {
    "id": "discretemath_q3",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "下列式子中，不正确的是（　）。",
    "options": [
      "![](qimg/0e1937d5db0e3f2b.gif)",
      "![](qimg/e09cbfa52483987e.gif)",
      "![](qimg/de739a648a8de6f4.gif)",
      "![](qimg/bc77b53edd6bf388.gif)"
    ],
    "answer": "![](qimg/de739a648a8de6f4.gif)",
    "explanation": "![](qimg/79b563b119e3ac8d.gif) 参见教材P61。（2021年04月试题）"
  },
  {
    "id": "discretemath_q4",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "设论域的元素为a和b，与谓词公式 ![](qimg/617336c6031cbe16.gif) 等价的是（　）。",
    "options": [
      "P（a）∧P（b）",
      "P（a）∨P（b）",
      "P（a）→P（b）",
      "P（b）→P（a）"
    ],
    "answer": "P（a）∧P（b）",
    "explanation": "设R为非空集合A上的关系，若R是自反的、对称的和传递的，则称R为A上的等价关系。参见教材P94。（2021年04月试题）"
  },
  {
    "id": "discretemath_q5",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "下列关系矩阵所对应的关系具有自反性的是（　）。",
    "options": [
      "![](qimg/dd99d862bcd987c1.gif)",
      "![](qimg/fe1cfd709d456a25.gif)",
      "![](qimg/132b26767e704efb.gif)",
      "![](qimg/fb149472d4dbb208.gif)"
    ],
    "answer": "![](qimg/fb149472d4dbb208.gif)",
    "explanation": "若关系R是自反的，当且仅当在关系矩阵中，对角线上的所有元素都是1，在关系图上每个顶点都有到自身的有向边。参见教材P85。（2021年04月试题）"
  },
  {
    "id": "discretemath_q6",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "下列非负整数度序列可简单图化的是（　）。",
    "options": [
      "（5，5，4，1，1）",
      "（3，3，2，2，1，1）",
      "（3，3，3，1）",
      "（4，3，2，1）"
    ],
    "answer": "（3，3，2，2，1，1）",
    "explanation": "可简单图化的是（3，3，2，2，1，1）。参见教材P135。（2021年04月试题）"
  },
  {
    "id": "discretemath_q7",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "![](qimg/e689ffb951973a83.gif) （　）。",
    "options": [
      "交换律",
      "幂等律",
      "结合律",
      "消去律"
    ],
    "answer": "幂等律",
    "explanation": "b。b=a不满足幂等律。参见教材P109。（2021年04月试题）"
  },
  {
    "id": "discretemath_q8",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "设集合A={1，2，3}上的二元关系R={<1，1>，<1，2>，<2，1>，<2，2>，<2，3>，<3，2>，<3，3>}，则R是A上的（　）。",
    "options": [
      "相容关系",
      "等价关系",
      "偏序关系",
      "拟序关系"
    ],
    "answer": "相容关系",
    "explanation": "R是自反的、对称的，是A上的相容关系。参见教材P94。（2021年04月试题）"
  },
  {
    "id": "discretemath_q9",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "设R为实数集，下列关系中能构成函数的是（　）。",
    "options": [
      "![](qimg/31b26283a668479f.gif)",
      "![](qimg/81a40280d1d84262.gif)",
      "![](qimg/c16e67b5d0f60fb6.gif)",
      "![](qimg/ef86fd914bb0f080.gif)"
    ],
    "answer": "![](qimg/81a40280d1d84262.gif)",
    "explanation": "A选项是x对y是一对多，C、D是x都不可以取0，违反了x、y取整个实数集。参见教材P99。（2021年04月试题）"
  },
  {
    "id": "discretemath_q10",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "设R、S均为集合A上的二元关系，下列命题错误的是（　）。",
    "options": [
      "若R和S是反自反的，则R∪S也是反自反的",
      "若R和S是自反的，则R∪S也是自反的",
      "若R和S是反对称的，则R∪S也是反对称的",
      "若R和S是对称的，则R∪S也是对称的"
    ],
    "answer": "若R和S是反对称的，则R∪S也是反对称的",
    "explanation": "R={<1，2>，<2，3>}是反对称的，S={<2，1>，<3，2>}是反对称的，R∪S={<1，2>，<2，1>，<2，3>，<3，2>}是对称的，所以C是错误的。参见教材P84。（2021年04月试题）"
  },
  {
    "id": "discretemath_q11",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "下列图为欧拉图的是（　）。",
    "options": [
      "![](qimg/982cc2bc7f5b8d53.gif)",
      "![](qimg/bec7782dd27aee46.gif)",
      "![](qimg/ca7a4c7cf37c66d5.gif)",
      "![](qimg/916c2123693d9224.gif)"
    ],
    "answer": "![](qimg/916c2123693d9224.gif)",
    "explanation": "在连通图G中，经过G中每条边一次且仅一次的通路，称为欧拉通路；若欧拉通路为回路，则称为欧拉回路。具有欧拉回路的图称为欧拉图。参见教材P147。（2021年04月试题）"
  },
  {
    "id": "discretemath_q12",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "下列图中不是哈密顿图的是（　）。",
    "options": [
      "![](qimg/af10fb453f045326.gif)",
      "![](qimg/eedc1dffe61908cf.gif)",
      "![](qimg/9198820531453e7f.gif)",
      "![](qimg/da5dd8682af6331a.gif)"
    ],
    "answer": "![](qimg/9198820531453e7f.gif)",
    "explanation": "给定无向图G，若存在一条路L，经过图中每个顶点一次且仅一次，则L称为哈密顿路；若存在一条回路C，经过图中的每个顶点一次且仅一次，C称作哈密顿回路。具有哈密顿回路的图称作哈密顿图。参见教材P149。（2021年04月试题）"
  },
  {
    "id": "discretemath_q13",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "下列选项中与题13图互为补图的是（　）。 ![](qimg/cc7cb490c6f9ee8c.gif)",
    "options": [
      "![](qimg/d7051fdd4c7d3fc6.gif)",
      "![](qimg/182cdfd739ad4f03.gif)",
      "![](qimg/7c3003c77f213b5b.gif)",
      "![](qimg/fc926b35f674f128.gif)"
    ],
    "answer": "![](qimg/d7051fdd4c7d3fc6.gif)",
    "explanation": "一个图G的补图是一个图有着跟G相同的点，而且这些点之间有边相连当且仅当在G里面他们没有边相连。参见教材P138。（2021年04月试题）"
  },
  {
    "id": "discretemath_q14",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "![](qimg/1a8df97b0737b5a4.gif) （　）。",
    "options": [
      "G为自然数集合",
      "G为偶数集合",
      "G为有理数集合",
      "G为整数集合"
    ],
    "answer": "G为自然数集合",
    "explanation": "自然数中不存在它的逆元。参见教材P115。（2021年04月试题）"
  },
  {
    "id": "discretemath_q15",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "如题15图所示的格中，元c的补元是（　）。 ![](qimg/5595915aac9bb766.gif)",
    "options": [
      "a",
      "b",
      "d",
      "e"
    ],
    "answer": "a",
    "explanation": "c和d的补元都是a。参见教材P129。（2021年04月试题）"
  },
  {
    "id": "discretemath_q16",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "设p：今天晴天，q：我们去放风筝，命题“今天要是晴天，我们就去放风筝。”的符号化为（　）。",
    "options": [
      "p→q",
      "p→￢q",
      "q→p",
      "￢q→p"
    ],
    "answer": "p→q",
    "explanation": "参见教材P22。（2023年04月试题）"
  },
  {
    "id": "discretemath_q17",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "下列命题公式是矛盾式的是（　）。",
    "options": [
      "![](qimg/5eaac13bb5ea72af.gif)",
      "![](qimg/4f1fd90f7c10dfce.gif)",
      "![](qimg/675deb9fb08d9498.gif)",
      "![](qimg/6c1861fce93f949c.gif)"
    ],
    "answer": "![](qimg/4f1fd90f7c10dfce.gif)",
    "explanation": "设A为一命题公式，若A在它的各种指派情况下，其取值均为假，则称公式A为矛盾式或永假式。参见教材P27。（2023年04月试题）"
  },
  {
    "id": "discretemath_q18",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "下列式子不正确的是（　）。",
    "options": [
      "![](qimg/e8eb37b110028b63.gif)",
      "![](qimg/f89a3955c2cc373e.gif)",
      "![](qimg/a19ba18accbddb6a.gif)",
      "![](qimg/d4083832ff994483.gif)"
    ],
    "answer": "![](qimg/f89a3955c2cc373e.gif)",
    "explanation": "B项不成立。参见教材P61。（2023年04月试题）"
  },
  {
    "id": "discretemath_q19",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "设命题公式A含有2个命题变元，且已知A为矛盾式，则A的主合取范式含大项的个数为（　）。",
    "options": [
      "2",
      "3",
      "4",
      "1"
    ],
    "answer": "4",
    "explanation": "若A可化为与其等价的含2n=22=4个大项的主合取范式，则A为矛盾式。参见教材P45。（2023年04月试题）"
  },
  {
    "id": "discretemath_q20",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "设A={1，2，3}，A上的二元关系R={<1，2>，<2，3>，<3，2〉}，则R具有（　）。",
    "options": [
      "自反性",
      "反自反性",
      "对称性",
      "反对称性"
    ],
    "answer": "反自反性",
    "explanation": "因为R不包含<1，1>，<2，2>，<3，3>，所以是反自反的。参见教材P84。（2023年04月试题）"
  },
  {
    "id": "discretemath_q21",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "设A={1，2，3}，A上的二元关系R={<1，1>，<1，2>，<1，3>，<2，1>，<2，2>，<3，1>，<3，3>}，则R是（　）。",
    "options": [
      "相容关系",
      "等价关系",
      "偏序关系",
      "全序关系"
    ],
    "answer": "相容关系",
    "explanation": "因为R是自反的，对称的，所以R是A上的相容关系。参见教材P94。（2023年04月试题）"
  },
  {
    "id": "discretemath_q22",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "设A={1，2，3，4}，B={5，6，7}，给定f={<1，6>，<2，7>，<3，5>，<4，6>}，则下列选项中，正确的是（　）。",
    "options": [
      "f不是从A到B的函数",
      "f是单射函数",
      "f是满射函数",
      "f是双射函数"
    ],
    "answer": "f是满射函数",
    "explanation": "A中所有的元素在B上都有对应的值，B中的所有元素在A中都有对应的值，所以f是满射函数。参见教材P101。（2023年04月试题）"
  },
  {
    "id": "discretemath_q23",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "设集合A有2个元素，则A×A的所有不同的等价关系的个数是（　）。",
    "options": [
      "4",
      "8",
      "12",
      "15"
    ],
    "answer": "15",
    "explanation": "参见教材P94。（2023年04月试题）"
  },
  {
    "id": "discretemath_q24",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "设 ![](qimg/6300dae771d1c8f4.gif) 是布尔代数， ![](qimg/45b04761908d6405.gif) （　）。",
    "options": [
      "Φ",
      "B",
      "0",
      "1"
    ],
    "answer": "0",
    "explanation": "参见教材P132。（2023年04月试题）"
  },
  {
    "id": "discretemath_q25",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "正整数集上二元运算*封闭的是（　）。",
    "options": [
      "x*y=|x-y|",
      "x*y=x-y",
      "x*y=x/y",
      "x*y=x+2y"
    ],
    "answer": "x*y=x+2y",
    "explanation": "A项结果可能为0，B项可能为0和负数，C项可能为分数。参见教材P109。（2023年04月试题）"
  },
  {
    "id": "discretemath_q26",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "设S={0，1，2，5}，则代数系统 ![](qimg/840e1ad9a4e9c282.gif) 中∪运算的幺元是（　）。",
    "options": [
      "0",
      "1",
      "Φ",
      "S"
    ],
    "answer": "Φ",
    "explanation": "参见教材P110。（2023年04月试题）"
  },
  {
    "id": "discretemath_q27",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "设 ![](qimg/8bdbb8c21cc3a149.gif) 是代数系统， ![](qimg/04837964ae73bd8e.gif) 是二元运算，如果 ![](qimg/04837964ae73bd8e.gif) 满足交换律，结合律和吸收律，则 ![](qimg/8bdbb8c21cc3a149.gif) 构成一个（　）。",
    "options": [
      "环",
      "域",
      "格",
      "布尔代数"
    ],
    "answer": "格",
    "explanation": "考查定理7.5。参见教材P127。（2023年04月试题）"
  },
  {
    "id": "discretemath_q28",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "下列是自补图的是（　）。",
    "options": [
      "![](qimg/3339d02e85f47544.gif)",
      "![](qimg/f401670404471e35.gif)",
      "![](qimg/a8c3159689d08725.gif)",
      "![](qimg/3fa331ab180800c2.gif)"
    ],
    "answer": "![](qimg/a8c3159689d08725.gif)",
    "explanation": "参见教材P139。（2023年04月试题）"
  },
  {
    "id": "discretemath_q29",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "设一棵树的结点个数为2020，则此树中的割边数为（　）。",
    "options": [
      "2018",
      "2019",
      "2020",
      "2021"
    ],
    "answer": "2019",
    "explanation": "割边数为2020-1=2019。参见教材P142。（2023年04月试题）"
  },
  {
    "id": "discretemath_q30",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "在有6个顶点12条边的连通简单平面图中，所围成每个面的边数为（　）。",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "answer": "3",
    "explanation": "n=6，m=12欧拉公式n-m+r=2知r=2-n+m=2-6+12=8。若每个面的边数大于3，则与2m＞3r矛盾。参见教材P152。（2023年04月试题）"
  },
  {
    "id": "discretemath_q31",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "含有3个命题变元的任一命题公式的指派个数是（　）。",
    "options": [
      "6个",
      "8个",
      "9个",
      "10个"
    ],
    "answer": "8个",
    "explanation": "指派个数是23=8。参见教材P25。（2024年04月试题）"
  },
  {
    "id": "discretemath_q32",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "下列命题公式为矛盾式的是（　）。",
    "options": [
      "![](qimg/74f0055c0dc2f692.png)",
      "![](qimg/51a3b7cc2adb9443.png)",
      "![](qimg/6bec571761eea374.png)",
      "![](qimg/c32025cd99c5813b.png)"
    ],
    "answer": "![](qimg/51a3b7cc2adb9443.png)",
    "explanation": "设A为一命题公式，若A在它的各种指派情况下，其取值均为假，则称公式A为矛盾式或永假式。参见教材P27。（2024年04月试题）"
  },
  {
    "id": "discretemath_q33",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "含有2个命题变元的命题A是重言式的条件是A的主析取范式含有（　）。",
    "options": [
      "4个小项",
      "1个小项",
      "4个大项",
      "1个大项"
    ],
    "answer": "4个小项",
    "explanation": "若A可化为与其等价的含2n个小项的主析取范式，则A为重言式。参见教材P45。（2024年04月试题）"
  },
  {
    "id": "discretemath_q34",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "设论域元素为a、b，与 ![](qimg/e9ac59055bfd5c0d.png) 等价的是（　）。",
    "options": [
      "![](qimg/9fe9015aac39b111.png)",
      "![](qimg/29cf3364e7c75e6b.png)",
      "![](qimg/32b987e4199ab474.png)",
      "![](qimg/fe3a7fda7097661c.png)"
    ],
    "answer": "![](qimg/29cf3364e7c75e6b.png)",
    "explanation": "参见教材P59。（2024年04月试题）"
  },
  {
    "id": "discretemath_q35",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "谓词公式 ![](qimg/f10736928158393a.png) 中变元x为（　）。",
    "options": [
      "自由出现",
      "约束出现",
      "既不是自由出现也不是约束出现",
      "既是自由出现也是约束出现"
    ],
    "answer": "既是自由出现也是约束出现",
    "explanation": "在F中是约束出现，在G中是自由出现。参见教材P58。（2024年04月试题）"
  },
  {
    "id": "discretemath_q36",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "设论域是正整数，下列谓词公式中值为真的是（　）。",
    "options": [
      "![](qimg/69e8370d0c96132d.png)",
      "![](qimg/9199aafa4f655e31.png)",
      "![](qimg/8352f4d2c5b49935.png)",
      "![](qimg/0e25f6a6b7645e9e.png)"
    ],
    "answer": "![](qimg/0e25f6a6b7645e9e.png)",
    "explanation": "A项对于所有的x，存在一个y，使得x2 + y2 = 10；B项对于所有的y，存在一个x，使得x2 + y2 = 10；对于所有的x和y，x2 + y2 = 10；D项存在至少一对x和y，使得x2 + y2 = 10。参见教材P55。（2024年04月试题）"
  },
  {
    "id": "discretemath_q37",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "设 ![](qimg/9bee2bec8f46bdde.png) 是A 的幂集，下列选项中正确的是（　）。",
    "options": [
      "![](qimg/3e7128ece3e7490a.png)",
      "![](qimg/d8bed05d71705b70.png)",
      "![](qimg/5a4fd31e54659c99.png)",
      "![](qimg/5caccecc563e38f1.png)"
    ],
    "answer": "![](qimg/5a4fd31e54659c99.png)",
    "explanation": "P（A）={$$$O/$，{$$$O/$}，{a}，{a，$$$O/$}}，元素用属于表示，集合用包含于表示。参见教材P69。（2024年04月试题）"
  },
  {
    "id": "discretemath_q38",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "一个8阶简单图的边数最大为（　）。",
    "options": [
      "20",
      "25",
      "28",
      "30"
    ],
    "answer": "28",
    "explanation": "一个n阶简单图的最大边数是n*(n-1)/2=28。参见教材P137。（2024年04月试题）"
  },
  {
    "id": "discretemath_q39",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "下面关于n阶树的描述，错误的是（　）。",
    "options": [
      "连通图",
      "连通且有n-1条边",
      "无回路且有n-1条边",
      "连通且无回路"
    ],
    "answer": "连通图",
    "explanation": "给定图T，有n个结点，则下列命题是等价的。（1）T是树；（2）T无回路，且T的任何两个顶点间有唯一一条路；（3）T无回路，且有n-1条边；（4）T是连通的，且有n-1条边；（5）T是连通的，但删去任何一条边后便不再连通；（6）T无回路，但增加任何一条边，将得到唯一的一个回路。参见教材P154。（2024年04月试题）"
  },
  {
    "id": "discretemath_q40",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "![](qimg/9ab1516ffdd292eb.png) 下列正确的是（　）。",
    "options": [
      "![](qimg/b5162625c3b047d9.png)",
      "![](qimg/79480018ba9eff66.png)",
      "![](qimg/584be2b910ed53a1.png)",
      "![](qimg/5832a515cb5ec8c2.png)"
    ],
    "answer": "![](qimg/79480018ba9eff66.png)",
    "explanation": "ran(S)={1,2,3}，ran(R∪S)= {1,2,3}。参见教材P82。（2024年04月试题）"
  },
  {
    "id": "discretemath_q41",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "设A={1，2，3}，则下列关系中是反自反关系的为（　）。",
    "options": [
      "![](qimg/c0d44738f1031ede.png)",
      "![](qimg/5c4a74ae96e0de0e.png)",
      "![](qimg/2994c1e111353f9e.png)",
      "![](qimg/c86db21ba2d9eb56.png)"
    ],
    "answer": "![](qimg/2994c1e111353f9e.png)",
    "explanation": "A、B、D项分别包含﹤1,1＞，﹤2,2＞，﹤3,3＞，不满足反自反关系。参见教材P84。（2024年04月试题）"
  },
  {
    "id": "discretemath_q42",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "设A={a,b,c}，下列选项中既不是对称也不是反对称的是（　）。",
    "options": [
      "![](qimg/0ea204803fb771fb.png)",
      "![](qimg/c511bad09ced5d04.png)",
      "![](qimg/ecb8f2d582609935.png)",
      "![](qimg/6a7b6b29adf31a97.png)"
    ],
    "answer": "![](qimg/ecb8f2d582609935.png)",
    "explanation": "因为C选项缺少﹤c,a＞,﹤b,a＞。参见教材P84。（2024年04月试题）"
  },
  {
    "id": "discretemath_q43",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "设 ![](qimg/b27ab7c2f024f643.png) （　）。",
    "options": [
      "单射不满射",
      "满射不单射",
      "不单射不满射",
      "双射"
    ],
    "answer": "不单射不满射",
    "explanation": "当x小于3时，既不是单射也不是满射。参见教材P101。（2024年04月试题）"
  },
  {
    "id": "discretemath_q44",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "一个5阶简单图G，保证G为连通图的最少边数为（　）。",
    "options": [
      "4",
      "5",
      "6",
      "7"
    ],
    "answer": "4",
    "explanation": "对于一个5阶简单图G，要保证它是连通的，最少需要的边数是5-1=4条边。参见教材P139。（2024年04月试题）"
  },
  {
    "id": "discretemath_q45",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "下列各集合对于整除关系构成偏序集，不能构成格的集合是（　）。",
    "options": [
      "L1={1,2,3,4}",
      "L2={1,2,3,6}",
      "L3={1,3,5,15}",
      "L4={1,3,9,81}"
    ],
    "answer": "L1={1,2,3,4}",
    "explanation": "考虑元素2和3，它们的最大公约数为1，最小公倍数为6，但6不在集合L1中。因此，L1中任意两个元素不一定存在上确界和下确界，所以L1不构成格。参见教材P126。（2024年04月试题）"
  },
  {
    "id": "discretemath_q46",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "设P：小张是数学老师，Q：小张是计算机老师。命题“小张既是数学老师又是计算机老师”的符号化形式为（　）。",
    "options": [
      "P∧Q",
      "P∨Q",
      "P→Q",
      "![](qimg/2ddad7fb82a52df0.gif)"
    ],
    "answer": "P∧Q",
    "explanation": "P表示“小张是数学老师”,Q表示“小张是计算机老师”,“既是……又是……”表示两个条件同时成立，对应逻辑运算中的“与”，符号为∧。因此答案为A。参见教材P57。（2024年10月试题）"
  },
  {
    "id": "discretemath_q47",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "下列公式为永真式的是（　）。",
    "options": [
      "![](qimg/67f85472e463d82a.gif)",
      "![](qimg/c1512238a4d419df.gif)",
      "![](qimg/641fe19380d8f3d1.gif)",
      "![](qimg/d51285977ed5c3ae.gif)"
    ],
    "answer": "![](qimg/d51285977ed5c3ae.gif)",
    "explanation": "![](qimg/f29aa8c7201930e7.gif) 参见教材P27。（2024年10月试题）"
  },
  {
    "id": "discretemath_q48",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "命题公式P→Q的主析取范式中含小项的个数是（　）。",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": "3",
    "explanation": "主析取范式是这些情况的析取： ![](qimg/111aa66659069b55.gif) 这个表达式由三个小项组成。参见教材P42。（2024年10月试题）"
  },
  {
    "id": "discretemath_q49",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "设论域元素集为{a，b}，下列选项中与谓词公式 ![](qimg/650114722da2c436.gif) xP(x)等价的是（　）。",
    "options": [
      "P(a)∧P(b)",
      "![](qimg/0251573f2e5df3b3.gif)",
      "![](qimg/2948f3a51fceeb39.gif)",
      "P(a)∨P(b)"
    ],
    "answer": "P(a)∧P(b)",
    "explanation": "P(a)∧P(b)这个选项表示P(a)和P(b)都为真，这与全称量词 ![](qimg/650114722da2c436.gif) xP(x)的含义完全一致。参见教材P59。（2024年10月试题）"
  },
  {
    "id": "discretemath_q50",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "下列谓词公式中y是自由变元的是（　）。",
    "options": [
      "![](qimg/650114722da2c436.gif) xP(x,y)→ヨyQ(y)",
      "![](qimg/650114722da2c436.gif) xP(x,y)→ヨxQ(x)",
      "![](qimg/650114722da2c436.gif) yP(x,y)→ヨxQ(x)",
      "![](qimg/650114722da2c436.gif) xP(x)→ヨyQ(x,y)"
    ],
    "answer": "![](qimg/650114722da2c436.gif) xP(x,y)→ヨxQ(x)",
    "explanation": "选项B，在这个公式中，x被全称量词 ![](qimg/650114722da2c436.gif) 约束，而y在P(x,y)中是自由的。ヨxQ(x)中的x是约束的，但y没有被任何量词约束。因此，y在整个公式中是自由的。参见教材P59。（2024年10月试题）"
  },
  {
    "id": "discretemath_q51",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "设A={1,2,3,4}，下列选项中是自反关系的是（　）。",
    "options": [
      "R={<1,1>,<1,2>,<2,1>,<3,3>,<3,4>,<4,3>}",
      "R={<1,2>,<1,3>,<2,1>,<2,3>,<3,4>,<4,3>}",
      "R={<1,1>,<1,2>,<2,2>,<3,3>,<3,4>,<4,4>}",
      "R={<1,2>,<2,2>,<3,3>,<3,4>,<4,3>,<4,4>}"
    ],
    "answer": "R={<1,1>,<1,2>,<2,2>,<3,3>,<3,4>,<4,4>}",
    "explanation": "选项C：R={<1,1>,<1,2>,<2,2>,<3,3>,<3,4>,<4,4>}这个关系包含所有形式为(a,a)的对：(1,1),(2,2),(3,3)和(4,4)(4,4)。因此，它是自反的。参见教材P84。（2024年10月试题）"
  },
  {
    "id": "discretemath_q52",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "设X={1,2,3,4},Y=｛5,6,7,8｝,给定f={<1,5>，<1,6>，<2,6>,<3,7>,<4,8>}，下列选项中正确的是（　）。",
    "options": [
      "f是从X到Y的单射",
      "f是从X到Y的满射",
      "f是从X到Y的双射",
      "f不是从X到Y的映射（函数）"
    ],
    "answer": "f是从X到Y的满射",
    "explanation": "给定集合：X={1,2,3,4}Y ={5,6,7,8}以及函数f定义为：f={＜1,5＞,＜1,6＞,＜2,6＞,＜3,7＞,＜4,8＞}，对于y=5：从f中，我们看到＜1,5＞是一个有序对，所以f（1）=5。因此，5有一个原像，即1。对于y=6：从f中，我们看到＜1,6＞和＜2,6＞是有序对，所以f（1）=6和f（2）=6。因此，6有原像，即1和2。对于y=7：从f中，我们看到＜3,7＞是一个有序对，所以f（3）=7。因此，7有一个原像，即3。对于y=8：从f中，我们看到<4,8>是一个有序对，所以f（4)=8。因此，8有一个原像，即4。由于Y中的每个元素至少有一个在X中的原像，函数f是从X到Y的满射。参见教材P101。（2024年10月试题）"
  },
  {
    "id": "discretemath_q53",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "在自然数集N上，下列运算中满足交换律的是（　）。",
    "options": [
      "x*y=x",
      "x*y=y",
      "x*y=min(x,y)",
      "x*y=x+2y"
    ],
    "answer": "x*y=min(x,y)",
    "explanation": "C.x*y=min(x,y)对于这个运算，x*y=min(x,y)和y*x=min(y,x)。由于最小值函数是对称的，min(x,y)=min(y,x)总是成立。因此，这个运算满足交换律。参见教材P29。（2024年10月试题）"
  },
  {
    "id": "discretemath_q54",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "设A={1，2，3}，A的真子集是（　）。",
    "options": [
      "{1,4}",
      "{2,3}",
      "{1,2,3}",
      "{4}"
    ],
    "answer": "{2,3}",
    "explanation": "B.{2,3}这个集合是A的子集，因为它只包含A中的元素。它也不是A本身，所以它是A的真子集。参见教材P69。（2024年10月试题）"
  },
  {
    "id": "discretemath_q55",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "设集合A的元素个数为2，集合B的元素个数为3，则A×B的元素个数是（　）。",
    "options": [
      "2",
      "3",
      "5",
      "6"
    ],
    "answer": "6",
    "explanation": "在这个问题中，集合A的元素个数为2，集合B的元素个数为3。因此，笛卡尔积A×B的元素个数为：2×3=6参见教材P76。（2024年10月试题）"
  },
  {
    "id": "discretemath_q56",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "设A={1,2,3}，则A上的等价关系个数是（　）。",
    "options": [
      "1",
      "2",
      "3",
      "5"
    ],
    "answer": "5",
    "explanation": "每个元素都在自己的等价类中：{{1},{2},{3}}元素1和2在一个等价类中，元素3在另一个等价类中：{{1,2},{3}}元素1和3在一个等价类中，元素2在另一个等价类中：{{1,3},{2}}元素2和3在一个等价类中，元素1在另一个等价类中：{{2,3},{1}}所有元素都在一个等价类中：{{1,2,3}}因此，集合A={1,2,3}上的等价关系个数是5。参见教材P94。（2024年10月试题）"
  },
  {
    "id": "discretemath_q57",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "设集合A={a,b,c}，定义运算x*y=x，则A的左零元个数是（　）。",
    "options": [
      "0",
      "1",
      "2",
      "3"
    ],
    "answer": "3",
    "explanation": "左零元是一个元素么，使得对于集合中的任何元素y，都有z*y=z。 给定运算x*y=x，我们可以看到，对于任何元素x和y，结果总是x。这意味着任何元素ェ都满足 左零元的条件，因为a*y=a对于所有y都成立。 因此，集合A中的每个元素a,b,和c都是左零元。这意味着集合A有3个左零元。参见教材P111。（2024年10月试题）"
  },
  {
    "id": "discretemath_q58",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "下列各集合对于整除关系都构成偏序集，能构成格的集合是（　）。",
    "options": [
      "L={1,2,3,4}",
      "M={1,2,3,6}",
      "N={2,3,6}",
      "Q={1,2,3}"
    ],
    "answer": "M={1,2,3,6}",
    "explanation": "对于元素2和3：最小上界：6最大下界：1对于元素1和2：最小上界：2最大下界：1对于元素1和3：最小上界：3最大下界：1对于元素1和6：最小上界：6最大下界：1对于元素2和6：最小上界：6最大下界：2对于元素3和6：最小上界：6最大下界：3集合M中每对元素都有最小上界和最大下界，因此集合M构成格。参见教材P125。（2024年10月试题）"
  },
  {
    "id": "discretemath_q59",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "下列度数序列中不能构成无向图的是（　）。",
    "options": [
      "{1,1,3,4}",
      "{1,1,1,1}",
      "{1,2,2,3}",
      "{1,1,2,2}"
    ],
    "answer": "{1,1,3,4}",
    "explanation": "选项A度数和=1+1+3+4=9，9是奇数，因此这个度数序列不能构成无向图。参见教材P136。（2024年10月试题）"
  },
  {
    "id": "discretemath_q60",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "在一个5阶简单无向图中，其结点的最大度数不可能为（　）。",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "answer": "5",
    "explanation": "在一个5阶简单无向图中，每个顶点最多可以与其它4个顶点相连，因此最大度数为4。这是因为简单无向图中没有自环和重边，所以一个顶点不能与自己相连，也不能与同一个顶点连接多次。因此，5阶简单无向图中，顶点的最大度数不可能为5。参见教材P136。（2024年10月试题）"
  },
  {
    "id": "discretemath_q61",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "令p：今天我上班，q：今天我休息。命题“今天我要么上班要么休息”的符号化形式为（　）。",
    "options": [
      "pVq",
      "q→p",
      "![](qimg/fda798f196cbfa69.gif)",
      "![](qimg/9152e9c4bb191949.gif)"
    ],
    "answer": "![](qimg/9152e9c4bb191949.gif)",
    "explanation": "参见教材P19。（2023年10月试题）"
  },
  {
    "id": "discretemath_q62",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "设令F（x）：x是火车，G（x）：x是汽车，L（x，y）：x比y快。命题“有的火车比有的汽车快”的符号化形式为（　）。",
    "options": [
      "![](qimg/dd73649cd84ccc4e.gif)",
      "![](qimg/e2b55c0fde1cdf25.gif)",
      "![](qimg/651cf0043d3bd2f7.gif)",
      "![](qimg/eb9d711c92027096.gif)"
    ],
    "answer": "![](qimg/e2b55c0fde1cdf25.gif)",
    "explanation": "B项这个表达式意味着存在至少一个火车x，并且存在至少一个汽车y，使得x是火车，y是汽车，并且x比y快。这正是我们想要表达的命题。参见教材P55。（2023年10月试题）"
  },
  {
    "id": "discretemath_q63",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "下列关于小项和大项的性质表述正确的是（　）。",
    "options": [
      "任意两个不同小项的合取式必为真",
      "任意两个不同大项的析取式必为假",
      "任意两个不同小项的析取式必为假",
      "大项的否定是小项"
    ],
    "answer": "大项的否定是小项",
    "explanation": "A.任意两个不同小项的合取式必为真。这个选项是错误的。小项是互斥的，即在任何给定的输入组合下，只有一个小项可以为真。因此，两个不同的小项不可能同时为真，它们的合取式（AND）必为假。B.任意两个不同大项的析取式必为假。这个选项是错误的。大项不是互斥的，它们可以覆盖不同的输入组合。两个不同的大项可以同时为真，也可以同时为假，这取决于它们覆盖的输入组合。C.任意两个不同小项的析取式必为假。这个选项是错误的。小项是互斥的，但它们的析取式（OR）可以为真，因为至少有一个小项在任何给定的输入组合下为真。D.大项的否定是小项。这个选项是正确的。大项是小项的补集，因此大项的否定就是小项。如果一个逻辑函数由大项表示，那么它的否定（即逻辑非）将由小项表示。参见教材P39。（2023年10月试题）"
  },
  {
    "id": "discretemath_q64",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "下图中是欧拉图的为（　）。",
    "options": [
      "![](qimg/0073a23cd439499f.gif)",
      "![](qimg/2223340d487dd228.gif)",
      "![](qimg/55cd7f5489f7a0ec.gif)",
      "![](qimg/8a6aeec643cc55d9.gif)"
    ],
    "answer": "![](qimg/2223340d487dd228.gif)",
    "explanation": "参见教材P147。（2023年10月试题）"
  },
  {
    "id": "discretemath_q65",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "设有非空集合A上的全域关系S，则关系S不是（　）。",
    "options": [
      "自反关系",
      "对称关系",
      "传递关系",
      "反对称关系"
    ],
    "answer": "反对称关系",
    "explanation": "全域关系S是指在集合A上，任意两个元素之间都存在关系S。即对于任意的a，b∈A，都有aSb。对于任意的a，b∈A，如果aSb且bSa，则a=b。由于S是全域关系，所以aSb和bSa都成立，但a不一定等于b。因此，全域关系S不一定是反对称的。参见教材P82。（2023年10月试题）"
  },
  {
    "id": "discretemath_q66",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "简单无向图G有9条边，每个结点都是3度结点，则G的结点数为（　）。",
    "options": [
      "5",
      "6",
      "7",
      "8"
    ],
    "answer": "6",
    "explanation": "顶点度数总和等于边数的两倍，顶点度数总和是18，结点数是18/3=6。参见教材P137。（2023年10月试题）"
  },
  {
    "id": "discretemath_q67",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "下列谓词恒等式，不正确的是（　）。",
    "options": [
      "![](qimg/613f40aa660bd8ed.gif)",
      "![](qimg/dca5af1e9fe3b25a.gif)",
      "![](qimg/6426a3dabc44c2e7.gif)",
      "![](qimg/cd75bb7ad3bccc8f.gif)"
    ],
    "answer": "![](qimg/613f40aa660bd8ed.gif)",
    "explanation": "![](qimg/a7c949d68b406443.gif) 参见教材P61。（2023年10月试题）"
  },
  {
    "id": "discretemath_q68",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "下列度数序列中，不能构成简单无向图的是（　）。",
    "options": [
      "{1,1,1,2,3}",
      "{1,2,2,3}",
      "{6,2,2,2,4}",
      "{3,3,3,3}"
    ],
    "answer": "{6,2,2,2,4}",
    "explanation": "C选项因为存在一个度数为6的顶点，而序列中只有1个顶点的度数大于或等于6（即它自己）。这意味着这个顶点需要与其他6个顶点相连，但是序列中没有足够的顶点来满足这个条件。参见教材P137。（2023年10月试题）"
  },
  {
    "id": "discretemath_q69",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "设 ![](qimg/c33e079225c51765.gif) ，运算为实数加法+和乘法*，则 ![](qimg/e5b6a18c709e71ab.gif) 构成的代数系统是（　）。",
    "options": [
      "环",
      "整环",
      "域",
      "格"
    ],
    "answer": "环",
    "explanation": "我们可以在整数集、有理数集和实数集上定义普通的加法及乘法运算，构成相应的代数系统，它们都构成环。参见教材P120。（2023年10月试题）"
  },
  {
    "id": "discretemath_q70",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "集合A上的自反关系R的关系矩阵为M，则M的元素必定（　）。",
    "options": [
      "对角线上全是0",
      "关于反对角线对称",
      "关于对角线对称",
      "对角线上全是1"
    ],
    "answer": "对角线上全是1",
    "explanation": "若关系R是自反的，当且仅当在关系矩阵中，对角线上的所有元素都是1，在关系图上每个顶点都有到自身的有向边。参见教材P85。（2023年10月试题）"
  },
  {
    "id": "discretemath_q71",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "已知A、B、C、D是任意集合，则下列各式成立的是（　）。",
    "options": [
      "![](qimg/a49b76a62635b186.gif)",
      "![](qimg/6cdc72c62afa26c9.gif)",
      "![](qimg/99433131e0bee7fc.gif)",
      "![](qimg/6dda850da9f684b3.gif)"
    ],
    "answer": "![](qimg/6cdc72c62afa26c9.gif)",
    "explanation": "参见教材P77。（2023年10月试题）"
  },
  {
    "id": "discretemath_q72",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "要从完全图K4中得到一棵生成树，需要删除的边数为（　）。",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": "3",
    "explanation": "完全图K4有（4×3）/2=6条边，生成树有n-1=3条边，所以需要删除6-3=3条边。参见教材P137。（2023年10月试题）"
  },
  {
    "id": "discretemath_q73",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "设有集合A上的关系R1和R2，下列命题为真的是（　）。",
    "options": [
      "若关系R1和R2是自反的，则R1оR2也是自反的",
      "若关系R1和R2是对称的，则R1оR2也是对称的",
      "若关系R1和R2是传递的，则R1оR2也是传递的",
      "若关系R1和R2是反自反的，则R1оR2也是反自反的"
    ],
    "answer": "若关系R1和R2是自反的，则R1оR2也是自反的",
    "explanation": "![](qimg/714dec38b546940b.gif) 参见教材P88。（2023年10月试题）"
  },
  {
    "id": "discretemath_q74",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "下图中4个偏序集的图形，能构成格的是（　）。",
    "options": [
      "![](qimg/16330ddd0840b111.gif)",
      "![](qimg/f454057566c29051.gif)",
      "![](qimg/0e8ff8d25d6ca5d7.gif)",
      "![](qimg/ad73a0a1ed2912a7.gif)"
    ],
    "answer": "![](qimg/0e8ff8d25d6ca5d7.gif)",
    "explanation": "C选项的子集都有最大下界和最小上界。参见教材P125。（2023年10月试题）"
  },
  {
    "id": "discretemath_q75",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "设有穷集合A的元素个数为m，则A到A的不同单射函数的个数为（　）。",
    "options": [
      "m!",
      "mm",
      "m2",
      "2m"
    ],
    "answer": "m!",
    "explanation": "设有穷集合A的元素个数为m，则A到A的不同单射函数的个数为m×(m-1)×(m-2)…1=m!。参见教材P101。（2023年10月试题）"
  },
  {
    "id": "discretemath_q76",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "设p：今年是2020年，q：明年是2021年，命题“只有今年是2020年，明年才是2021年”的符号化为（　）。",
    "options": [
      "p∧q",
      "p∨q",
      "p→q",
      "q→p"
    ],
    "answer": "q→p",
    "explanation": "命题p→q表示“q是p的必要条件”。命题“只有今年是2020年，明年才是2021年”的符号化为q→p。参见教材P23。（2021年10月试题）"
  },
  {
    "id": "discretemath_q77",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "下列命题公式是永真式的是（　）。",
    "options": [
      "p∧（p→q）",
      "p∧（p↔q）",
      "p∨（p→q）",
      "p∨（p↔q）"
    ],
    "answer": "p∨（p→q）",
    "explanation": "设A为一命题公式，若A在它的各种指派情况下，其取值均为真，则称公式A为重言式或永真式。通过真值表可以判断C为永真式。参见教材P27。（2021年10月试题）"
  },
  {
    "id": "discretemath_q78",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "设P：我周末不加班，Q：我去爬山，命题“只要我周末不加班，我就去爬山”符号化为（　）。",
    "options": [
      "![](qimg/12d6a4dc67417418.gif)",
      "![](qimg/a6e787105d3fb37e.gif)",
      "![](qimg/d7f96bc9d8dd3604.gif)",
      "![](qimg/722f744c9ce8415f.gif)"
    ],
    "answer": "![](qimg/d7f96bc9d8dd3604.gif)",
    "explanation": "本题考查的是条件符号化。参见教材P23。（2020年10月试题）"
  },
  {
    "id": "discretemath_q79",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "下列命题公式为矛盾式的是（　）。",
    "options": [
      "![](qimg/ab873e18093fcf29.gif)",
      "![](qimg/a1f36aad7e4adbeb.gif)",
      "![](qimg/c8d09318c5925543.gif)",
      "![](qimg/16f697a43142db2d.gif)"
    ],
    "answer": "![](qimg/16f697a43142db2d.gif)",
    "explanation": "D选项的命题公式中P和Q取任意值，该公式的取值均为假，该公式为矛盾式。参见教材P27。（2020年10月试题）"
  },
  {
    "id": "discretemath_q80",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "设P：明天下雨，Q：我去游泳，命题“如果明天不下雨，我就去游泳”符号化为（　）。",
    "options": [
      "![](qimg/0bb6e07606c5fe92.gif)",
      "![](qimg/a02999f110456a3e.gif)",
      "![](qimg/a65bccbd63e4431a.gif)",
      "![](qimg/a34305a7e2400723.gif)"
    ],
    "answer": "![](qimg/a34305a7e2400723.gif)",
    "explanation": "命题“如果明天不下雨，我就去游泳”符号化为 ![](qimg/a34305a7e2400723.gif) 。参见教材P22。（2020年08月试题）"
  },
  {
    "id": "discretemath_q81",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "下列命题公式为重言式的是（　）。",
    "options": [
      "![](qimg/f7796cf8d8c2999a.gif)",
      "![](qimg/e87a5069f487c632.gif)",
      "![](qimg/918113901b534d45.gif)",
      "![](qimg/ed64c8861a1f051f.gif)"
    ],
    "answer": "![](qimg/e87a5069f487c632.gif)",
    "explanation": "设A为一命题公式，若A在它的各种指派情况下，其取值均为真，则称公式A为重言式或永真式。通过真值表进行判断B选项为重言式。参见教材P27。（2020年08月试题）"
  },
  {
    "id": "discretemath_q82",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "设P：a能被2整除，Q：a能被4整除，命题“只有a能被2整除，a才能被4整除”符号化为（　）。",
    "options": [
      "![](qimg/a0c7c4dc32c32883.gif)",
      "![](qimg/1670532bf098c293.gif)",
      "![](qimg/7f1aa8383fb05a21.gif)",
      "![](qimg/5e1333a7a8db09e0.gif)"
    ],
    "answer": "![](qimg/7f1aa8383fb05a21.gif)",
    "explanation": "命题p→q表示“q是p的必要条件”。自然语言中表示“q是p的必要条件”有许多不同的叙述方式，例如，“只要p，就q”，“因为p，所以q”，“只有q才p”等等。命题“只有a能被2整除，a才能被4整除”符号化为Q→P。参见教材P23。（2019年10月试题）"
  },
  {
    "id": "discretemath_q83",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "令p：下午下雨，q：我去公园，r：家里来客人，则命题“若下午不下雨，我就去公园，除非家里来客人”的符号化形式为（　）。",
    "options": [
      "![](qimg/4978c1f28f08285c.gif)",
      "![](qimg/fcd0d27f5b7d5b21.gif)",
      "![](qimg/0c6fcf518a685ae3.gif)",
      "![](qimg/0cf5bcbc393a4ca4.gif)"
    ],
    "answer": "![](qimg/0c6fcf518a685ae3.gif)",
    "explanation": "命题指的是当下午不下雨且家里不来客人的时候，我就去公园。参见教材P22。"
  },
  {
    "id": "discretemath_q84",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "令F（x）：x是火车，G（y）：y是汽车，H（x，y）：x比y快，则命题“说火车都比汽车快是不对的”的符号化形式为（　）。",
    "options": [
      "![](qimg/b6038c0b89061599.gif)",
      "![](qimg/0734d5247857a635.gif)",
      "![](qimg/c35167e8f8bb6b93.gif)",
      "![](qimg/38fb477cecea603b.gif)"
    ],
    "answer": "![](qimg/0734d5247857a635.gif)",
    "explanation": "参见教材P22。"
  },
  {
    "id": "discretemath_q85",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "令p：今天下雨，q：我今天进城。命题“因为今天不下雨，所以我今天进城”的符号化形式为（　）。",
    "options": [
      "p→q",
      "q→p",
      "￢p→q",
      "￢q→p"
    ],
    "answer": "￢p→q",
    "explanation": "今天不下雨是今天下雨的否定，所以是￢p，因为…所以…是一个条件命题。参见教材P22。（2022年4月真题）"
  },
  {
    "id": "discretemath_q86",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "令p：天下大雨，q：小王早到。命题“只要天不下大雨，小王就会早到”的符号化形式为（　）。",
    "options": [
      "p→q",
      "q→p",
      "￢p→q",
      "￢q→p"
    ],
    "answer": "￢p→q",
    "explanation": "天不下大雨是天下大雨的否定，所以是￢p；如果￢p那么q组成条件命题，即￢p→q。参见教材P22。（2022年10月试题）"
  },
  {
    "id": "discretemath_q87",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "下列公式中为永真式的是（　）。",
    "options": [
      "![](qimg/b70ad6fbb2a1ae6d.png)",
      "![](qimg/efd495a9f4c83762.png)",
      "![](qimg/20e2d669ca695d48.png)",
      "![](qimg/c51709f2c9ad8430.png)"
    ],
    "answer": "![](qimg/20e2d669ca695d48.png)",
    "explanation": "给定一命题公式，若无论对分量作怎样的指派，其对应的真值永为T（True），则称该命题公式为重言式或永真公式。"
  },
  {
    "id": "discretemath_q88",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "下列四个命题中真值为真的命题为（　）。（1）2+2=4 当且仅当 3 是奇数 （2）2+2=4 当且仅当 3 不是奇数；（3）2+2≠4 当且仅当 3 是奇数 （4）2+2≠4 当且仅当 3 不是奇数；",
    "options": [
      "（1）与（2）",
      "（1）与（4）",
      "（2）与（4）",
      "（3）与（4）"
    ],
    "answer": "（1）与（4）",
    "explanation": "一个命题，如果是真的，它的真值就是真。（1）和（4）命题中真值为真命题。"
  },
  {
    "id": "discretemath_q89",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "在命题逻辑中，任何非永真命题公式的主合取范式都是（　）。",
    "options": [
      "存在并且唯一",
      "存在但不唯一",
      "不存在",
      "不能够确定"
    ],
    "answer": "存在并且唯一",
    "explanation": "任何非永真命题公式的主合取范式都是存在并且唯一。"
  },
  {
    "id": "discretemath_q90",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "在命题逻辑中，任何非永假命题公式的主析取范式都是（　）。",
    "options": [
      "存在并且唯一",
      "存在但不唯一",
      "不存在",
      "不能够确定"
    ],
    "answer": "存在并且唯一",
    "explanation": "在命题逻辑中，任何非永假命题公式的主析取范式都是存在并且唯一。"
  },
  {
    "id": "discretemath_q91",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "n个命题变元所产生互不等价的极大项项数为（　）。",
    "options": [
      "![](qimg/6e9948a42b6afc07.png)",
      "![](qimg/04a3665c6630fa7f.png)",
      "![](qimg/1e8efa912395ee21.png)",
      "![](qimg/fc2e56cb86638ee5.png)"
    ],
    "answer": "![](qimg/fc2e56cb86638ee5.png)",
    "explanation": "n个命题变元所产生互不等价的极大项项数为 ![](qimg/fc2e56cb86638ee5.png) 。"
  },
  {
    "id": "discretemath_q92",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "包含n个命题变项的重言式的主析取范式包括有小项的个数为（　）。",
    "options": [
      "2n",
      "2n",
      "1",
      "0"
    ],
    "answer": "2n",
    "explanation": "若A可化为与其等价的含2n个小项的主析取范式，则A为重言式。参见教材P45。"
  },
  {
    "id": "discretemath_q93",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "下列关于小项和大项的性质，不正确的是（　）。",
    "options": [
      "任意两个不同小项的合取必为假",
      "任意两个不同大项的析取必为真",
      "任意两个不同小项的合取必为真",
      "大项的否定是小项"
    ],
    "answer": "任意两个不同小项的合取必为真",
    "explanation": "每个小项均只有一个成真赋值，对任意两个不同的小项，它们的成真赋值是不同的，所以任意两个不同小项的合取必为假。参见教材P40。（2022年4月真题）"
  },
  {
    "id": "discretemath_q94",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "下列式子不正确的是（　）。",
    "options": [
      "![](qimg/9fc21449c241053c.gif)",
      "![](qimg/2936a1d7cecbdf7e.gif)",
      "![](qimg/4248672ff42e8fd1.gif)",
      "![](qimg/75b986792e81d167.gif)"
    ],
    "answer": "![](qimg/75b986792e81d167.gif)",
    "explanation": "D选项正确的应该是 ![](qimg/8024e4d56b58196e.gif) 。参见教材P61。（2021年10月试题）"
  },
  {
    "id": "discretemath_q95",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "设论域为整数集，下列选项中，真值为真的是（　）。",
    "options": [
      "![](qimg/2f71672dfd0cf6ec.gif)",
      "![](qimg/f8ea56fc9a8ee3d3.gif)",
      "![](qimg/4623d9753d3cfefb.gif)",
      "![](qimg/0262a2a7ac42479d.gif)"
    ],
    "answer": "![](qimg/2f71672dfd0cf6ec.gif)",
    "explanation": "A选项任意的x都存在y使x+y=2020，取y=2020-x即可；B选项存在x使得任意的y，错误，知道了x就有对应y满足关系式；C选项任意的x都有任意的y满足x+y=2020，错误，知道了x就有对应y满足关系式；D选项存在y有任意的x满足x+y=2020，错误，y取一个定值，x就是固定的。参见教材P59。（2021年10月试题）"
  },
  {
    "id": "discretemath_q96",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "下列式子中，不正确的是（　）。",
    "options": [
      "![](qimg/6113931e086439de.gif)",
      "![](qimg/0d7541744af63789.gif)",
      "![](qimg/aa70bf4564d5596d.gif)",
      "![](qimg/beaf31a2014879cb.gif)"
    ],
    "answer": "![](qimg/beaf31a2014879cb.gif)",
    "explanation": "关于D选项正确的应该是 ![](qimg/0f5971108a623f84.gif) 参见教材P61。（2020年10月试题）"
  },
  {
    "id": "discretemath_q97",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "谓词公式 ![](qimg/2c4fc6856e4aaa2c.gif) 中量词 ![](qimg/260933b804dd451a.gif) 的辖域是（　）。",
    "options": [
      "![](qimg/5dae32852e4c68c7.gif)",
      "F（x）",
      "![](qimg/db6fa345fa106bfc.gif)",
      "F（x），H（x）"
    ],
    "answer": "![](qimg/5dae32852e4c68c7.gif)",
    "explanation": "![](qimg/260933b804dd451a.gif) 的辖域是 ![](qimg/5dae32852e4c68c7.gif) 。参见教材P58。（2020年10月试题）"
  },
  {
    "id": "discretemath_q98",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "下列式子中，不正确的是（　）。",
    "options": [
      "![](qimg/9a86b039b0305738.gif)",
      "![](qimg/7b3bac1b46cd0aa8.gif)",
      "![](qimg/7c1343ade70e0ec4.gif)",
      "![](qimg/89a26003b862b243.gif)"
    ],
    "answer": "![](qimg/9a86b039b0305738.gif)",
    "explanation": "A正确的应该是 ![](qimg/83e6f80afb8567d8.gif) 。参见教材P61。（2020年08月试题）"
  },
  {
    "id": "discretemath_q99",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "谓词公式 ![](qimg/c91762e4d72a585d.gif) 中量词 ![](qimg/b0028207e3c7fd94.gif) 的辖域是（　）。",
    "options": [
      "H（x）→S（y，z）",
      "S（y，z）",
      "H（x）",
      "G（y），S（y，z）"
    ],
    "answer": "H（x）→S（y，z）",
    "explanation": "量词的作用域就是该量词的辖域。参见教材P58。（2020年08月试题）"
  },
  {
    "id": "discretemath_q100",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "下列式子中，不正确的是（　）。",
    "options": [
      "![](qimg/1ae6a928f8d057db.gif)",
      "![](qimg/9a3250fa962d78ff.gif)",
      "![](qimg/36f973ce96f6a3d0.gif)",
      "![](qimg/236fc0b4fe747f06.gif)"
    ],
    "answer": "![](qimg/9a3250fa962d78ff.gif)",
    "explanation": "B选项正确的应该是 ![](qimg/51b235ccbaf2de51.gif) 。参见教材P61。（2019年10月试题）"
  },
  {
    "id": "discretemath_q101",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "设论域为{a，b}，与谓词公式 ![](qimg/14274fb75f0ca847.gif) 等价的是（　）。",
    "options": [
      "P（a）∧P（b）",
      "P（a）∨P（b）",
      "P（a）→P（b）",
      "P（b）→P（a）"
    ],
    "answer": "P（a）∨P（b）",
    "explanation": "与谓词公式 ![](qimg/14274fb75f0ca847.gif) 等价的是P（a）∨P（b）。参见教材P59。（2019年10月试题）"
  },
  {
    "id": "discretemath_q102",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "设R（x）：x是实数，Q（x，y）：y大于x。则命题“对每个实数，都存在一个比它更大的实数”对应的谓词公式是（　）。",
    "options": [
      "![](qimg/da3a4cf832526486.png)",
      "![](qimg/434bc00c8835f47d.png)",
      "![](qimg/5dd95b7e0f714686.png)",
      "![](qimg/29a650b018a98761.png)"
    ],
    "answer": "![](qimg/da3a4cf832526486.png)",
    "explanation": "每个实数对应的是全称量词，存在一个比它更大的实数对应特称量词。参见教材P55。（2022年4月真题）"
  },
  {
    "id": "discretemath_q103",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "下列谓词恒等式，不正确的是（　）。",
    "options": [
      "![](qimg/c23a52bd6153dda9.png)",
      "![](qimg/05f5d7cd2f3cac87.png)",
      "![](qimg/b6b5fe6b87ae0368.png)",
      "![](qimg/253c9dc90419cdbf.png)"
    ],
    "answer": "![](qimg/05f5d7cd2f3cac87.png)",
    "explanation": "![](qimg/c3999ae64905a0b4.png) 。参见教材P61。（2022年4月真题）"
  },
  {
    "id": "discretemath_q104",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "设令F（x）：x是火车，G（x）：x是汽车，L（x，y）：x比y快。命题“不存在比所有的火车都快的汽车”的符号化形式为（　）。",
    "options": [
      "![](qimg/8d9d58a8a1ea24bf.png)",
      "![](qimg/15f565a0453a3fcb.png)",
      "![](qimg/ec85ca8434a90024.png)",
      "![](qimg/df9fd844cee9c80f.png)"
    ],
    "answer": "![](qimg/ec85ca8434a90024.png)",
    "explanation": "所有的火车是 ![](qimg/b76f8089e4184c54.png) ，不存在...的汽车是 ![](qimg/faf54b51089aa7cb.png) 。参见教材P57。（2022年10月试题）"
  },
  {
    "id": "discretemath_q105",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "下列谓词公式中，不是前束范式的为（　）。",
    "options": [
      "![](qimg/46e64d14b3bae58f.png)",
      "![](qimg/a783dbb8bd375dc6.png)",
      "![](qimg/da5e6a8691d13092.png)",
      "![](qimg/a48d0f7a8665cd71.png)"
    ],
    "answer": "![](qimg/46e64d14b3bae58f.png)",
    "explanation": "—个公式，如果量词均在全式的开头，它们的作用域，延伸到整个公式的末尾，则该公式称为前束范式。参见教材P61。（2022年10月试题）"
  },
  {
    "id": "discretemath_q106",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "下列谓词恒等式，不正确的是（　）。",
    "options": [
      "![](qimg/c1aa910bba4fe72f.png)",
      "![](qimg/f4f341cf6afa0348.png)",
      "![](qimg/bde31af690d9a28c.png)",
      "![](qimg/a5b6f2aa43706a38.png)"
    ],
    "answer": "![](qimg/c1aa910bba4fe72f.png)",
    "explanation": "![](qimg/bde31af690d9a28c.png) 参见教材P61。（2022年10月试题）"
  },
  {
    "id": "discretemath_q107",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "已知A、B、C、D是任意集合，则下列各式不成立的是（　）。",
    "options": [
      "（A∪B）×（C∪D）=（A∪C）×（B∪D）",
      "（A∪B）×C=（A×C）∪（B×C）",
      "（A⊕B）×C=（A×C）⊕（B×C）",
      "（A-B）×C=（A×C）-（B×C）"
    ],
    "answer": "（A∪B）×（C∪D）=（A∪C）×（B∪D）",
    "explanation": "（A∪B）×（C∪D）=（A∪C）×（A∪D）×（B∪C）×（B∪D）。参见教材P76。（2022年10月试题）"
  },
  {
    "id": "discretemath_q108",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "已知A、B、C、D是任意集合，则下列各式不成立的是（　）。",
    "options": [
      "（A-B）×C=（A×C）-（B×C）",
      "（A⊕B）×（C⊕D）=（A×C）⊕（B×D）",
      "（A⊕B）×C＝（A×C）⊕（B×C）",
      "（A∪B）×C=（A×C）∪（B×C）"
    ],
    "answer": "（A⊕B）×（C⊕D）=（A×C）⊕（B×D）",
    "explanation": "（A⊕B）×（C⊕D）≠（A×C）⊕（B×D）。参见教材P74。（2022年4月真题）"
  },
  {
    "id": "discretemath_q109",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "集合A和B，其幂集分别为P（A）和P（B），下列关系不成立的是（　）。",
    "options": [
      "丨P（A）丨=2丨A丨",
      "丨P（B）丨=2丨B丨",
      "P（A∩B）=P（A）∩P（B）",
      "P（A∪B）=P（A）∪P（B）"
    ],
    "answer": "P（A∪B）=P（A）∪P（B）",
    "explanation": "关系不成立的是D选项，举个例子：设A=｛1｝，B=｛2，3｝，则A的幂集是｛Φ，｛1｝｝，B的幂集是｛Φ，｛2｝，｛3｝，｛2，3｝｝，它们的并集为｛Φ，｛1｝，｛2｝，｛3｝，｛2，3｝｝；A与B的并集为｛1，2，3｝，它的幂集为｛Φ，｛1｝，｛2｝，｛3｝，｛1，2｝，｛1，3｝，｛2，3｝，｛1，2，3｝｝。明显两者不相等。参见教材P69。"
  },
  {
    "id": "discretemath_q110",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "设集合A={a，b，c，d}，下列选项中A的真子集是（　）。",
    "options": [
      "{a，e}",
      "{b，e，d}",
      "{b，c，d}",
      "{a，b，c，d}"
    ],
    "answer": "{b，c，d}",
    "explanation": "如果集合A的每一个元素都属于B，但集合B中至少有一个元素不属于A，则称A为B的真子集。只有C选项符合。参见教材P69。（2020年08月试题）"
  },
  {
    "id": "discretemath_q111",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "设A={{1,2,3}, {4,5}, {6,7,8}}，下列哪个式子为真（　）.",
    "options": [
      "1∈A",
      "{1,2,3}⊆A",
      "{4,5}∈A",
      "φ∈A"
    ],
    "answer": "{4,5}∈A",
    "explanation": "{4,5}是A里面的一个元素，故选C."
  },
  {
    "id": "discretemath_q112",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "如果对任意的a属于A，必有aRa，则称关系R在A上是（　）。",
    "options": [
      "自反的",
      "反自反的",
      "对称的",
      "反对称的"
    ],
    "answer": "自反的",
    "explanation": "如果对任意的a属于A，必有aRa，则称关系R在A上是自反的。参见教材P84。"
  },
  {
    "id": "discretemath_q113",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "以下（　）不是集合A上的偏序关系。",
    "options": [
      "自反性",
      "反对称性",
      "传递性",
      "顺延性"
    ],
    "answer": "顺延性",
    "explanation": "集合A上的偏序关系是自反性、反对称性和传递性。"
  },
  {
    "id": "discretemath_q114",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "下列不是集合A上等价关系的性质的是（　）。",
    "options": [
      "自反性",
      "对称性",
      "传递性",
      "顺延性"
    ],
    "answer": "顺延性",
    "explanation": "集合A上的等价关系的三个性质是自反性、对称性和传递性。"
  },
  {
    "id": "discretemath_q115",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "设A和B是任意两个集合，若存在一个从A到B的双射函数f：A→B，则称A与B具有相同的基数或称A与B等势，记作（　）。",
    "options": [
      "A~B",
      "A-B",
      "A*B",
      "A△B"
    ],
    "answer": "A~B",
    "explanation": "设A和B是任意两个集合，若存在一个从A到B的双射函数f：A→B，则称A与B具有相同的基数或称A与B等势，记作A~B。"
  },
  {
    "id": "discretemath_q116",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "若f:X→Y，g:Y→Z都是可逆函数，则g·f也是可逆函数，那么（g。f）-1=（　）。",
    "options": [
      "f-1*g-1",
      "g-1f-1",
      "f-1。g-1",
      "g-1。f-1"
    ],
    "answer": "f-1。g-1",
    "explanation": "若f:X→Y，g:Y→Z都是可逆函数，则g·f也是可逆函数，并且（g。f）-1=f-1。g-1"
  },
  {
    "id": "discretemath_q117",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "如果关系R是集合A上的一个偏序关系，那么，R满足的性质不包括（　）。",
    "options": [
      "自反性",
      "反对称性",
      "传递性",
      "对称性"
    ],
    "answer": "对称性",
    "explanation": "集合A上的一个关系R满足自反性、反对称性和传递性时，称 R是A上的一个偏序关系。"
  },
  {
    "id": "discretemath_q118",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "R 为 X 上的一个等价关系，则R具有的性质不包括（　）。",
    "options": [
      "自反性",
      "对称性",
      "传递性",
      "平等性"
    ],
    "answer": "平等性",
    "explanation": "集合X上的关系 R 若具有自反性、对称性和传递性，则称 R 为 X 上的一个等价关系。"
  },
  {
    "id": "discretemath_q119",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "以下关于复合运算的性质描述不正确的是（　）。",
    "options": [
      "满足结合律",
      "满足交换律",
      "满足分配律",
      "设R是X到Y的关系，Ix为X中的恒等关系，Iy为Y中的恒等关系，则 Ix·R=R·Iy=R"
    ],
    "answer": "满足交换律",
    "explanation": "复合运算不满足交换律。"
  },
  {
    "id": "discretemath_q120",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "设R是从集合X到集合Y的二元关系，并且R={＜a，b＞|a∈X∧b∈Y}，则R-1={＜b，a＞|＜a，b＞∈R}称为R的（　）。",
    "options": [
      "逆关系",
      "泛关系",
      "正关系",
      "反关系"
    ],
    "answer": "逆关系",
    "explanation": "设R是从集合X到集合Y的二元关系，并且R={＜a，b＞|a∈X∧b∈Y}，则R-1={＜b，a＞|＜a，b＞∈R}称为R的逆关系。"
  },
  {
    "id": "discretemath_q121",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "以下属于自反关系的是（　）。",
    "options": [
      "数之间的等于关系",
      "数之间的大于关系",
      "数之间的小于关系",
      "x的平方数是Y"
    ],
    "answer": "数之间的等于关系",
    "explanation": "数之间的等于关系，是自反关系。数之间的小于关系，数之间的大于关系等都是反自反关系。x的平方数是Y是非自反关系。"
  },
  {
    "id": "discretemath_q122",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "设A，B是任意两个集合，则笛卡儿积A×B的任意一个子集R称为从集合A到集合B的一个（　）关系。",
    "options": [
      "一元",
      "二元",
      "交叉",
      "多元"
    ],
    "answer": "二元",
    "explanation": "设A，B是任意两个集合，则笛卡儿积A×B的任意一个子集R称为从集合A到集合B的一个二元关系。"
  },
  {
    "id": "discretemath_q123",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "集合A上的二元关系R和S都是自反关系，下列不是自反关系的为（　）。",
    "options": [
      "R-1",
      "R∩S",
      "R∪S",
      "R-S"
    ],
    "answer": "R-S",
    "explanation": "不是自反关系的为R-S。参见教材P84。"
  },
  {
    "id": "discretemath_q124",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "集合A={1，2，3}上的关系R={<1，1>，<1，2>，<2，1>，<2，2>，<3，3>}，则R不是（　）。",
    "options": [
      "自反关系",
      "对称关系",
      "传递关系",
      "反对称关系"
    ],
    "answer": "反对称关系",
    "explanation": "![](qimg/2b86b691cbaf63ba.png) 则称关系R在A上是反对称的。参见教材P84。（2022年4月真题）"
  },
  {
    "id": "discretemath_q125",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "集合A上的对称关系R的关系矩阵为M，则（　）。",
    "options": [
      "M的对角线上元素全是0",
      "M的对角线上元素全是1",
      "M为对称矩阵",
      "M为反对称矩阵"
    ],
    "answer": "M为对称矩阵",
    "explanation": "若关系是对称的，当且仅当关系矩阵是对称矩阵，且在关系图上，任何两个顶点间若存在有向边，必是成对出现。参见教材P85。（2022年4月真题）"
  },
  {
    "id": "discretemath_q126",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "设集合A的元素个数为4，则A上所有的等价关系的个数为（　）。",
    "options": [
      "4",
      "8",
      "10",
      "15"
    ],
    "answer": "15",
    "explanation": "在4个元素的集合上可定义的等价关系有15个：4个元素互不等价，有C（0，4）=1种情形；[C（m，n）表示n中取m的组合数]；4个元素分为3个等价类（分别含元素1，1，2个），共有C（2，4）=6种情形；4个元素分为2个等价类（分别含元素1，3个或2，2个），共有C（3，4）+C（2，4）/2=4+3=7种情形；4个元素属于同一等价类，只有1种情形。以上情形之和为1+6+7+1=15。参见教材P94。（2022年4月真题）"
  },
  {
    "id": "discretemath_q127",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "不能用来表达集合A上的二元关系R的方法是（　）。",
    "options": [
      "关系矩阵",
      "集合表达式",
      "关系图",
      "邻接矩阵"
    ],
    "answer": "邻接矩阵",
    "explanation": "关系的三种表示方法：集合表达式、关系矩阵和关系图。参见教材P81。（2022年10月试题）"
  },
  {
    "id": "discretemath_q128",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "设R、S是集合A上的两个不同的等价关系，则下列不是等价关系的为（　）。",
    "options": [
      "R∪S",
      "R-S",
      "RoS",
      "R∩S"
    ],
    "answer": "R-S",
    "explanation": "等价关系需要满足自反，对称和传递。参见教材P94。（2022年10月试题）"
  },
  {
    "id": "discretemath_q129",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "下列函数均为f：N×N→N，其中不是满射的为（　）。",
    "options": [
      "f（<x，y>）=xy",
      "f（<x，y>）=x+y",
      "f（<x，y>）=x2+y2+1",
      "f（<x，y>）=|x-y|"
    ],
    "answer": "f（<x，y>）=x2+y2+1",
    "explanation": "不存在x和y使得x2+y2+1=0，所以f（<x，y>）=x2+y2+1不是满射。参见教材P101。（2022年10月试题）"
  },
  {
    "id": "discretemath_q130",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "在自然数集N上，a，b∈N，不满足交换律的运算是（　）。",
    "options": [
      "a*b=min（a，b）",
      "a*b=a+b",
      "a*b=a-b",
      "a*b=max（a，b）"
    ],
    "answer": "a*b=a-b",
    "explanation": "不满足交换律的运算是C选项，因为a-b≠b-a。参见教材P109。（2020年10月试题）"
  },
  {
    "id": "discretemath_q131",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "令S={a，b，c}上的二元运算*如题15表所示，则该代数系统不满足（　）。 ![](qimg/955e681653c36047.gif)",
    "options": [
      "交换律",
      "幂等律",
      "结合律",
      "消去律"
    ],
    "answer": "消去律",
    "explanation": "因为c*a=b，b*a=b，但是c不等于b，所以该代数系统不满足消去律。参见教材P117。（2020年10月试题）"
  },
  {
    "id": "discretemath_q132",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "设S=Q×Q，其中Q为有理数集，*为S上的二元运算， ![](qimg/ac0aec067ccfaa81.gif) ，有 ![](qimg/512128c6281fb7d3.gif) ，则*运算在S上的幺元为（　）。",
    "options": [
      "<0，0>",
      "<0，1>",
      "<1，0>",
      "<1，1>"
    ],
    "answer": "<1，1>",
    "explanation": "*运算在S上的幺元为<1，1>。参见教材P110。（2020年08月试题）"
  },
  {
    "id": "discretemath_q133",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "在自然数集上的 ![](qimg/c2334ae8d8f461ee.gif) 不满足（　）。",
    "options": [
      "交换律",
      "幂等律",
      "结合律",
      "消去律"
    ],
    "answer": "消去律",
    "explanation": "设a＜b，a＜c且b≠c， ![](qimg/f77d43d83328000f.gif) 不满足消去律。参见教材P117。（2020年08月试题）"
  },
  {
    "id": "discretemath_q134",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "下列数集关于普通的加法与乘法构成的代数系统，其中不是域的是（　）。",
    "options": [
      "有理数集合",
      "实数集合",
      "复数集合",
      "整数集合"
    ],
    "answer": "整数集合",
    "explanation": "整数环Z不是域。参见教材P122。（2019年10月试题）"
  },
  {
    "id": "discretemath_q135",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "在自然数集上的 ![](qimg/4ccab816718bed0e.gif) 不满足（　）。",
    "options": [
      "交换律",
      "幂等律",
      "结合律",
      "消去律"
    ],
    "answer": "消去律",
    "explanation": "设a＞b，a＞c且b≠c， ![](qimg/619e2e63aa04e5e6.gif) 不满足消去律。参见教材P117。（2019年10月试题）"
  },
  {
    "id": "discretemath_q136",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "以下关于子代数的说法不正确的是（　）。",
    "options": [
      "子代数和原代数是同种的代数系统",
      "对于任何代数系统 V ，其子代数一定存在",
      "对于任何代数系统 V ，最大的子代数就是V本身",
      "只有最小的子代数称为V的平凡子代数"
    ],
    "answer": "只有最小的子代数称为V的平凡子代数",
    "explanation": "子代数和原代数是同种的代数系统，对于任何代数系统 V ，其子代数一定存在，对于任何代数系统 V ，最大的子代数就是V本身。最大和最小的子代数称为V的平凡子代数。"
  },
  {
    "id": "discretemath_q137",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "设V＝<S，*>是代数系统，*为二元运算，如果运算是封闭且是可结合的，则称V为（　）。",
    "options": [
      "半群",
      "群",
      "独异点",
      "结合点"
    ],
    "answer": "半群",
    "explanation": "设V＝<S，*>是代数系统，*为二元运算，如果运算是封闭且是可结合的，则称V为半群。"
  },
  {
    "id": "discretemath_q138",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "群要满足独异点的条件不包括（　）。",
    "options": [
      "封闭性",
      "结合律",
      "交换律",
      "存在幺元"
    ],
    "answer": "交换律",
    "explanation": "群要满足独异点的三个条件，即封闭性、结合律及存在幺元，同时还要求对集合中的每个元素都要有逆元。"
  },
  {
    "id": "discretemath_q139",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "将环中关于加法的单位元记作（　）。",
    "options": [
      "0",
      "1",
      "-1",
      "+1"
    ],
    "answer": "0",
    "explanation": "将环中关于加法的单位元记作0，将环中关于乘法的单位元记作1。"
  },
  {
    "id": "discretemath_q140",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "在一个群〈G,*〉中，若G中的元素a的阶是k，则a-1的阶是（　）。",
    "options": [
      "a-1",
      "G",
      "a",
      "k"
    ],
    "answer": "k",
    "explanation": "在一个群〈G,*〉中，若G中的元素a的阶是k，则a-1的阶是k"
  },
  {
    "id": "discretemath_q141",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "在自然数集N上，下列运算是可结合的是（　）。",
    "options": [
      "a*b=a-b",
      "a*b=max{a,b}",
      "a*b=a+2b",
      "a*b=|a-b|"
    ],
    "answer": "a*b=max{a,b}",
    "explanation": "是否有结合律，要验证是否有(a*b)*c=a*(b*c).上述各式中等号右边是左边：*运算的具体意义.对选项A：(a*b)*c=(a-b)-c，a*(b*c)=a-(b-c)，减法不满足结合律，如：(5-2)-6=-3, 5-(2-6)=9.对选项B：(a*b)*c=max(a,b)*c=max(max(a, b), c)，a*(b*c)=a*max(b, c)=max(a, max(b，c))，满足结合律.对选项C：(a*b)*c=(a+2b)+2c=a+2b+2c，a*(b*c)=a+2(b+2c)=a+2b+4c，不满足结合律.对选项D：(a*b)*c=||a-b|-c|，a*(b*c)=|a|b-c||，例如：取a=1，b=2，c=3，则(a*b)*c=2，a*(b*c)=0，不满足结合律."
  },
  {
    "id": "discretemath_q142",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "任意一个具有2个或以上元的半群，它（　）。",
    "options": [
      "不可能是群",
      "不一定是群",
      "一定是群",
      "是交换群"
    ],
    "answer": "不可能是群",
    "explanation": "半群是包含群的，任意一个具有2个或以上元的半群它不可能是群。"
  },
  {
    "id": "discretemath_q143",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "6阶有限群的任何子群一定不是（　）。",
    "options": [
      "2阶",
      "3阶",
      "4阶",
      "6阶"
    ],
    "answer": "4阶",
    "explanation": "据拉格朗日定理，这里应用的前提是讨论的群为有限群，4不是6的因子，故不可能有4阶的子群；虽然2，3，6是6的因子，但反过来说讨论的群一定有2阶、3阶、6阶子群则无根据，只有根据具体情况来判断可能会出现2，3，6阶子群中的部分或全部．即一定不会是C."
  },
  {
    "id": "discretemath_q144",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "设a是12阶群的生成元， 则a2是（　）阶元素。",
    "options": [
      "2",
      "4",
      "6",
      "8"
    ],
    "answer": "6",
    "explanation": "设＜G，*＞是群，e是幺元。对于a∈G ，使得ak=e成立的最小正整数k称为a的阶，记作| a |，a称为k阶元。此题中a是12阶群的生成元，a12=e，所以（a2）6=e，则a2是6阶元素。参见教材P116。"
  },
  {
    "id": "discretemath_q145",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "群<G,*>的幂等元有（　）个。",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": "1",
    "explanation": "在群<G,*>中，除幺元即单位元e外不可能有任何别的幂等元."
  },
  {
    "id": "discretemath_q146",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "六阶群的子群的阶数可以是（　）。",
    "options": [
      "1，2，5",
      "2，4",
      "3，6，7",
      "2，3"
    ],
    "answer": "2，3",
    "explanation": "六阶群的子群的阶数可以是2，3。"
  },
  {
    "id": "discretemath_q147",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "设 ![](qimg/df25acaa5326e800.gif) 是有界格，则下列叙述中，正确的是（　）。",
    "options": [
      "全上界与全下界没有补元",
      "每个元都有补元",
      "每个元都没有补元",
      "至少有两个元素存在补元"
    ],
    "answer": "至少有两个元素存在补元",
    "explanation": "在任何有界格中，全下界0与全上界1总是互补的。而对于其他元素，可能存在补元，也可能不存在补元。所以至少有两个元素存在补元。参见教材P131。（2021年10月试题）"
  },
  {
    "id": "discretemath_q148",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "设S={a，b}， ![](qimg/ee099f76eff3512f.gif) 满足（　）。",
    "options": [
      "交换律、结合律",
      "交换律、幂等律",
      "结合律、幂等律",
      "交换律、消去律"
    ],
    "answer": "结合律、幂等律",
    "explanation": "![](qimg/3c92f0a3655ad4fd.gif) 参见教材P127。（2021年10月试题）"
  },
  {
    "id": "discretemath_q149",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "下列格中不是分配格的是（　）。",
    "options": [
      "![](qimg/4a865e37e2ab09be.gif)",
      "![](qimg/040203b4648243aa.gif)",
      "![](qimg/dac04a2d06770a8a.gif)",
      "![](qimg/27c2156cd0516d36.gif)"
    ],
    "answer": "![](qimg/dac04a2d06770a8a.gif)",
    "explanation": "C选项中的子格与五角格同构，不是分配格。参见教材P129。（2021年10月试题）"
  },
  {
    "id": "discretemath_q150",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "如题4图所示的格中，元e的补元是（　）。 ![](qimg/280d4eadbf1416d5.gif)",
    "options": [
      "a和b",
      "a和c",
      "a和d",
      "a和f"
    ],
    "answer": "a和b",
    "explanation": "元e的补元是a和b。参见教材P131。（2020年10月试题）"
  },
  {
    "id": "discretemath_q151",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "如题4图所示的格中，元e的补元是（　）。 ![](qimg/b5a4af98a0462f0e.gif)",
    "options": [
      "a和b",
      "a和c",
      "a和d",
      "a和f"
    ],
    "answer": "a和b",
    "explanation": "元e的补元是a和b。参见教材P131。（2020年08月试题）"
  },
  {
    "id": "discretemath_q152",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "如题15图所示的格中，元d的补元是（　）。 ![](qimg/789bcfdf0b6742f4.gif)",
    "options": [
      "a",
      "b",
      "d",
      "e"
    ],
    "answer": "a",
    "explanation": "元d的补元是a。参见教材P131。（2019年10月试题）"
  },
  {
    "id": "discretemath_q153",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "设 ![](qimg/95e0bec500bfa9f3.gif) 是一个有界格，下列叙述中，正确的是（　）。",
    "options": [
      "每个元素都有补元",
      "每个元素都没有补元",
      "至少有两个元素有补元",
      "最多有一个元素有补元"
    ],
    "answer": "至少有两个元素有补元",
    "explanation": "在任何有界格中，全下界0与全上界1总是互补的。而对于其他元素，可能存在补元，也可能不存在补元。所以至少有两个元素0和1有补。参见教材P131。"
  },
  {
    "id": "discretemath_q154",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "下列4个偏序集的图形，不能构成格的是（　）。",
    "options": [
      "![](qimg/02777769a1ce4ac9.gif)",
      "![](qimg/50d6b9966259450b.gif)",
      "![](qimg/0bceb6e150b3e0ff.gif)",
      "![](qimg/b9ef29e9131ba3f5.gif)"
    ],
    "answer": "![](qimg/02777769a1ce4ac9.gif)",
    "explanation": "A偏序集的图形中，存在子集没有最小上界，所以不能构成格。参见教材P126。（2022年4月真题）"
  },
  {
    "id": "discretemath_q155",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "下图中4个偏序集的图形，能构成格的是（　）。",
    "options": [
      "![](qimg/8d8ec84a0e4d7dfc.png)",
      "![](qimg/b943f2a12b49b814.png)",
      "![](qimg/10210197ec4ae6a7.png)",
      "![](qimg/9aa9c9b98983351c.png)"
    ],
    "answer": "![](qimg/8d8ec84a0e4d7dfc.png)",
    "explanation": "B、C、D偏序集的图形中，存在子集没有最小上界，所以不能构成格。参见教材P126。（2022年10月试题）"
  },
  {
    "id": "discretemath_q156",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "格的对偶原理：如果命题P对一切格L为真，则P的对偶命题（　）。",
    "options": [
      "对某些格为假",
      "对某些格为真",
      "对一切格为假",
      "也对一切格为真"
    ],
    "answer": "也对一切格为真",
    "explanation": "格的对偶原理：如果命题P对一切格L为真，则P的对偶命题也对一切格为真。"
  },
  {
    "id": "discretemath_q157",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "以下不属于格的基本性质的是（　）。",
    "options": [
      "交换律",
      "分配律",
      "吸收律",
      "结合律"
    ],
    "answer": "分配律",
    "explanation": "![](qimg/fc0dec172fd62336.gif) 参见教材P127。"
  },
  {
    "id": "discretemath_q158",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "格L是分配格，当且仅当L中不含有与钻石格或五角格同构的（　）。",
    "options": [
      "子格",
      "母格",
      "分配格",
      "有补格"
    ],
    "answer": "子格",
    "explanation": "格L是分配格，当且仅当L中不含有与钻石格或五角格同构的子格。"
  },
  {
    "id": "discretemath_q159",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "如果一个格是（　），则称它为布尔格或布尔代数。",
    "options": [
      "有补格",
      "分配格",
      "有补格或分配格",
      "有补分配格"
    ],
    "answer": "有补分配格",
    "explanation": "如果一个格是有补分配格，则称它为布尔格或布尔代数。"
  },
  {
    "id": "discretemath_q160",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "设无向图有6条边，3度与5度顶点各一个，其余都是2度顶点，则该图的顶点个数为（　）。",
    "options": [
      "4",
      "5",
      "6",
      "7"
    ],
    "answer": "4",
    "explanation": "因为顶点的度数总和等于边数的二倍，所以顶点的度数总和是12，所以顶点的度数分别为3度，5度，两个2度，一共四个顶点。参见教材P137。（2021年10月试题）"
  },
  {
    "id": "discretemath_q161",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "下列度数列可简单图化的是（　）。",
    "options": [
      "（5，4，4，2，1）",
      "（3，3，1，1）",
      "（4，4，3，3，2，2）",
      "（4，3，2，1）"
    ],
    "answer": "（4，4，3，3，2，2）",
    "explanation": "下列度数列可简单图化的是（4，4，3，3，2，2）。参见教材P135。（2020年10月试题）"
  },
  {
    "id": "discretemath_q162",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "下列选项中为自补图的是（　）。",
    "options": [
      "![](qimg/0977fcd379b10403.gif)",
      "![](qimg/7d2123e747d527f7.gif)",
      "![](qimg/fd45b0c1487e4485.gif)",
      "![](qimg/4ab9551b36c0d530.gif)"
    ],
    "answer": "![](qimg/fd45b0c1487e4485.gif)",
    "explanation": "参见教材P139。（2019年10月试题）"
  },
  {
    "id": "discretemath_q163",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "一个7阶无向简单图，其结点的最大度数为（　）。",
    "options": [
      "5",
      "6",
      "7",
      "8"
    ],
    "answer": "6",
    "explanation": "一个7阶无向简单图，其结点的最大度数为7-1=6。参见教材P137。"
  },
  {
    "id": "discretemath_q164",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "下列可以作为4阶无向简单图的结点度数序列是（　）。",
    "options": [
      "1，2，3，4",
      "0，2，2，3",
      "1，1，2，2",
      "1，3，3，3"
    ],
    "answer": "1，1，2，2",
    "explanation": "下列可以作为4阶无向简单图的结点度数序列是1，1，2，2。参见教材P135。"
  },
  {
    "id": "discretemath_q165",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "设G为7阶无向简单图，下列命题中可成立的是（　）。",
    "options": [
      "G的每个结点的度数均为3",
      "G的每个结点的度数均为5",
      "G的每个结点的度数均为6",
      "G的每个结点的度数均为7"
    ],
    "answer": "G的每个结点的度数均为6",
    "explanation": "G的每个结点的度数均为n-1=7-1=6。参见教材P138。"
  },
  {
    "id": "discretemath_q166",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "简单无向图G有10条边，每个结点都是2度结点，则G的结点数为（　）。",
    "options": [
      "5",
      "10",
      "15",
      "20"
    ],
    "answer": "10",
    "explanation": "图G中所有顶点的度数之和为边数的两倍，所以G的结点数×2=10×2，即为10。所以参见教材P137。（2022年4月真题）"
  },
  {
    "id": "discretemath_q167",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "下列度数序列中，不能构成简单无向图的是（　）。",
    "options": [
      "{1，1，1，2，3}",
      "{1，2，2，3}",
      "{1，2，2，2，1}",
      "{5，3，3，3}"
    ],
    "answer": "{5，3，3，3}",
    "explanation": "不含多重边及环的图称为简单图，简单图的顶点度数最多为（n-1）。参见教材P136。（2022年4月真题）"
  },
  {
    "id": "discretemath_q168",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "一个6阶无向简单图，其结点的最大度数为（　）。",
    "options": [
      "5",
      "6",
      "7",
      "8"
    ],
    "answer": "5",
    "explanation": "一个n阶无向简单图，其结点的最大度数为（n-1），所以6阶无向简单图的结点的最大度数为5。参见教材P136。（2022年4月真题）"
  },
  {
    "id": "discretemath_q169",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "设G为9阶无向简单图，下列命题中可成立的是（　）。",
    "options": [
      "G的每个结点的度数均为3",
      "G的每个结点的度数均为6",
      "G的每个结点的度数均为5",
      "G的每个结点的度数均为7"
    ],
    "answer": "G的每个结点的度数均为6",
    "explanation": "对任意的图G，奇顶点必为偶数个。参见教材P137。（2022年4月真题）"
  },
  {
    "id": "discretemath_q170",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "一个6阶简单无向图G，其各结点度数之和不可能为（　）。",
    "options": [
      "10",
      "12",
      "18",
      "34"
    ],
    "answer": "34",
    "explanation": "一个6阶无向简单图，其结点的最大度数为5，所以各结点度数之和最大为5×6=30，不可能是34。参见教材P136。（2022年10月试题）"
  },
  {
    "id": "discretemath_q171",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "要从一颗4阶树得到完全图K4，需要添加的边数为（　）。",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": "3",
    "explanation": "4阶树有3条边，完全图K4有4×3/2=6条边，所以需要添加6-3=3条边。参见教材P137。（2022年10月试题）"
  },
  {
    "id": "discretemath_q172",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "图G=＜V，E＞中，顶点度数总和等于边数的（　）。",
    "options": [
      "2倍",
      "3倍",
      "4倍",
      "5倍"
    ],
    "answer": "2倍",
    "explanation": "图G=＜V，E＞中，顶点度数总和等于边数的两倍。"
  },
  {
    "id": "discretemath_q173",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "若无向图G=＜V，E＞中每个顶点的度数至少为（　），则G包含一条初级回路。",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": "2",
    "explanation": "若无向图G=＜V，E＞中每个顶点的度数至少为2，则G包含一条初级回路。"
  },
  {
    "id": "discretemath_q174",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "以下定义不正确的是（　）。",
    "options": [
      "平行边：无向图中，关联一对顶点的无向边多于3条，称这些边为平行边",
      "孤立点：与任何边都不关联的顶点",
      "多重图：含平行边的图",
      "简单图：既不含平行边也不含环的图"
    ],
    "answer": "平行边：无向图中，关联一对顶点的无向边多于3条，称这些边为平行边",
    "explanation": "平行边：无向图中，关联一对顶点的无向边多于1条，称这些边为平行边。平行边的条数称为重数。"
  },
  {
    "id": "discretemath_q175",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "设无向图G有16条边且每个顶点的度数都是2，则图G有（　）个顶点。",
    "options": [
      "10",
      "4",
      "8",
      "16"
    ],
    "answer": "16",
    "explanation": "顶点度数总和等于边数的两倍，所以顶点度数总和为16*2=32，所以顶点数为32/2=16。参见教材P137。"
  },
  {
    "id": "discretemath_q176",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "设无向图G有18条边且每个顶点的度数都是3，则图G有（　）个顶点。",
    "options": [
      "10",
      "4",
      "8",
      "12"
    ],
    "answer": "12",
    "explanation": "顶点度数总和等于边数的两倍，所以顶点度数总和为18*2=36，所以顶点数为36/3=12。参见教材P137。"
  },
  {
    "id": "discretemath_q177",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "无向连通图G是欧拉图的充分必要条件是G是（　）。",
    "options": [
      "无奇点",
      "连通的",
      "有奇点",
      "连通的且无奇点"
    ],
    "answer": "连通的且无奇点",
    "explanation": "无向连通图G是欧拉图的充分必要条件是G是连通的且无奇点。"
  },
  {
    "id": "discretemath_q178",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "设G具有n个顶点的简单图，如果G中每一对顶点度数之和大于等于（　），则在G中存在一条哈密顿回路。",
    "options": [
      "3",
      "n",
      "2n",
      "3n"
    ],
    "answer": "n",
    "explanation": "设G具有n个顶点的简单图，如果G中每一对顶点度数之和大于等于n，则在G中存在一条哈密顿回路。"
  },
  {
    "id": "discretemath_q179",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "设连通平面图G，面的次数之和等于其边数的（　）。",
    "options": [
      "一半",
      "2倍",
      "3倍",
      "4倍"
    ],
    "answer": "2倍",
    "explanation": "设连通平面图G，面的次数之和等于其边数的两倍。"
  },
  {
    "id": "discretemath_q180",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "一棵树有7片树叶，3个3度结点，其余全是4度结点，则该树有（　）个4度结点。",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": "1",
    "explanation": "一棵树有7片树叶，3个3度结点，其余全是4度结点，则该树有1个4度结点。"
  },
  {
    "id": "discretemath_q181",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "具有6个顶点，12条边的连通简单平面图中，每个面都是由（　）条边围成。",
    "options": [
      "2",
      "4",
      "3",
      "5"
    ],
    "answer": "3",
    "explanation": "具有6个顶点，12条边的连通简单平面图中，每个面都是由3条边围成。"
  },
  {
    "id": "discretemath_q182",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "一棵无向树T有4度、3度、2度的分支点各1个，其余顶点均为树叶，则T中有（　）片树叶。",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "answer": "5",
    "explanation": "根据握手定理：度数之和=边的两倍再根据树的许多等价定义：边的个数=树顶点-1因此4+3+2+X 就是度数之和2*(1+1+1+X-1)就是边的两倍4+3+2+X=2*(1+1+1+X-1)解的X=5，也就是有5片树叶。"
  },
  {
    "id": "discretemath_q183",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "若一棵完全二元（叉）树有2n－1个顶点，则它（　）片树叶。",
    "options": [
      "n",
      "2n",
      "n－1",
      "2"
    ],
    "answer": "n",
    "explanation": "[（2n-1）+1]/2=n。参见教材P159。"
  },
  {
    "id": "discretemath_q184",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "下列无向完全图中不是平面图的是（　）。",
    "options": [
      "K2",
      "K3",
      "K4",
      "K5"
    ],
    "answer": "K5",
    "explanation": "K5是著名的非平面图。参见教材P152。（2021年10月试题）"
  },
  {
    "id": "discretemath_q185",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "下列图为欧拉图的是（　）。",
    "options": [
      "![](qimg/de156c858bf9b3f5.gif)",
      "![](qimg/174f46c2722f800b.gif)",
      "![](qimg/890c4cb9890d5a05.gif)",
      "![](qimg/4dba1923cc34e2fc.gif)"
    ],
    "answer": "![](qimg/174f46c2722f800b.gif)",
    "explanation": "在连通图G中，经过G中每条边一次且仅一次的通路，称为欧拉通路或欧拉路；若欧拉通路为回路，则称为欧拉回路。具有欧拉回路的图称为欧拉图，含有欧拉通路但没有欧拉回路的图称为半欧拉图。B项为欧拉图。参见教材P147。（2021年10月试题）"
  },
  {
    "id": "discretemath_q186",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "下列图中不是哈密顿图的是（　）。",
    "options": [
      "![](qimg/c19c64e7b7604dbe.gif)",
      "![](qimg/e8b26a9cd8b83405.gif)",
      "![](qimg/6d1bb614984dc812.gif)",
      "![](qimg/4172f76957498e58.gif)"
    ],
    "answer": "![](qimg/e8b26a9cd8b83405.gif)",
    "explanation": "给定无向图G，若存在一条路L，经过图中每个顶点一次且仅一次，则L称为哈密顿路；若存在一条回路C，经过图中的每个顶点一次且仅一次，C称作哈密顿回路。具有哈密顿回路的图称作哈密顿图。B选项不是哈密顿图。参见教材P149。（2021年10月试题）"
  },
  {
    "id": "discretemath_q187",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "下列图为欧拉图的是（　）。",
    "options": [
      "![](qimg/6fd5008a97513e4b.gif)",
      "![](qimg/48d1b80c7e3db633.gif)",
      "![](qimg/094f2f3cdd7e0643.gif)",
      "![](qimg/acb89f91ecc4641c.gif)"
    ],
    "answer": "![](qimg/acb89f91ecc4641c.gif)",
    "explanation": "具有欧拉回路的图称为欧拉图。参见教材P147。（2020年10月试题）"
  },
  {
    "id": "discretemath_q188",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "下列图中不是哈密顿图的是（　）。",
    "options": [
      "![](qimg/a6a926f2fb6b2569.gif)",
      "![](qimg/edd4efbaeb5e4d92.gif)",
      "![](qimg/8306c2794d187b78.gif)",
      "![](qimg/874bb59c0d583bbf.gif)"
    ],
    "answer": "![](qimg/edd4efbaeb5e4d92.gif)",
    "explanation": "具有哈密顿回路的图称作哈密顿图，B选项不是回路。参见教材P149。（2020年10月试题）"
  },
  {
    "id": "discretemath_q189",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "下列图为欧拉图的是（　）。",
    "options": [
      "![](qimg/ece4652faba4a3ef.gif)",
      "![](qimg/ee168d9733acdaea.gif)",
      "![](qimg/1ffc39637d18298f.gif)",
      "![](qimg/611570e74ccdeff5.gif)"
    ],
    "answer": "![](qimg/611570e74ccdeff5.gif)",
    "explanation": "具有欧拉回路的图称为欧拉图。参见教材P147。（2020年08月试题）"
  },
  {
    "id": "discretemath_q190",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "下列图中不是哈密顿图的是（　）。",
    "options": [
      "![](qimg/114907e940a551a8.gif)",
      "![](qimg/f99f0fafe70adc39.gif)",
      "![](qimg/d935f960f387f04c.gif)",
      "![](qimg/6108267960404f8e.gif)"
    ],
    "answer": "![](qimg/d935f960f387f04c.gif)",
    "explanation": "具有哈密顿回路的图称作哈密顿图。参见教材P149。（2020年08月试题）"
  },
  {
    "id": "discretemath_q191",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "所有不同构的6阶无向树的棵数是（　）。",
    "options": [
      "4",
      "5",
      "6",
      "7"
    ],
    "answer": "6",
    "explanation": "![](qimg/e191c70d29e4f9df.gif) 参见教材P154。（2020年08月试题）"
  },
  {
    "id": "discretemath_q192",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "下列图中不是哈密顿图的是（　）。",
    "options": [
      "![](qimg/c196fe4acb87d737.gif)",
      "![](qimg/9c5207332bd0a4ec.gif)",
      "![](qimg/78db56b669b9a036.gif)",
      "![](qimg/7ac706a6fb91be00.gif)"
    ],
    "answer": "![](qimg/7ac706a6fb91be00.gif)",
    "explanation": "具有哈密顿回路的图称作哈密顿图。参见教材P149。（2019年10月试题）"
  },
  {
    "id": "discretemath_q193",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "所有不同构的5阶无向树的棵数是（　）。",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "answer": "3",
    "explanation": "![](qimg/19e181d72d194a4d.gif) 参见教材P154。（2019年10月试题）"
  },
  {
    "id": "discretemath_q194",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "下列图中是欧拉图的是（　）。",
    "options": [
      "![](qimg/c5af34550576cf26.gif)",
      "![](qimg/da8f7564f4ca4924.gif)",
      "![](qimg/54ee658b5da83c54.gif)",
      "![](qimg/7eba4ae40aa252d8.gif)"
    ],
    "answer": "![](qimg/c5af34550576cf26.gif)",
    "explanation": "具有欧拉回路的图称为欧拉图。参见教材P147。（2019年10月试题）"
  },
  {
    "id": "discretemath_q195",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "设G是有n个结点，m条边的连通图，要确定G的一棵生成树，必须删去G的多少条边?（　）。",
    "options": [
      "m-n+1",
      "m-n",
      "m+n+1",
      "n-m+1"
    ],
    "answer": "m-n+1",
    "explanation": "树的边数=点数-1=n-1，所以要删掉m-（n-1）=m-n+1条边。参见教材P154。"
  },
  {
    "id": "discretemath_q196",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "下列关于图的命题正确的是（　）。",
    "options": [
      "欧拉图都是哈密顿图",
      "哈密顿图都是欧拉图",
      "4阶以上完全图都是欧拉图",
      "4阶以上完全图都是哈密顿图"
    ],
    "answer": "4阶以上完全图都是哈密顿图",
    "explanation": "n（n>=3）阶有向完全图为哈密顿图。参见教材P149。"
  },
  {
    "id": "discretemath_q197",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "一个n阶图不一定是树的为（　）。",
    "options": [
      "无回路的连通图",
      "无回路且有n-1条边",
      "n阶连通图",
      "有n-1条边的连通图"
    ],
    "answer": "n阶连通图",
    "explanation": "n阶连通图且有n-1条边的时候一定是树，n阶连通图至少有n-1条边，所以n阶连通图不一定为树。参见教材P154。"
  },
  {
    "id": "discretemath_q198",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "下列5阶图中为哈密顿图的是（　）。",
    "options": [
      "![](qimg/bea99e123c43b350.gif)",
      "![](qimg/345c93582701a376.gif)",
      "![](qimg/de35177381ea7c1c.gif)",
      "![](qimg/eca6264fc7e47abe.gif)"
    ],
    "answer": "![](qimg/bea99e123c43b350.gif)",
    "explanation": "具有哈密顿回路的图称作哈密顿图。参见教材P149。"
  },
  {
    "id": "discretemath_q199",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "下列是欧拉图的为（　）。",
    "options": [
      "![](qimg/dbd99d9399e4186e.gif)",
      "![](qimg/02a579580fad5f28.gif)",
      "![](qimg/b5a17c954c4f8ddd.gif)",
      "![](qimg/70785cef1b3f2fd7.gif)"
    ],
    "answer": "![](qimg/02a579580fad5f28.gif)",
    "explanation": "无向连通图G是欧拉图的充分必要条件是G是连通的且无奇点。参见教材P147。（2022年4月真题）"
  },
  {
    "id": "discretemath_q200",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "要从完全图K4中得到一颗生成树，需要删除的边数为（　）。",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": "3",
    "explanation": "由n阶完全图的边数公式n(n-1)/2得K4有6条边，且4阶的生成树有4-1=3条边，则要从完全图K4得到生成树要删除6-3=3条边。参见教材P155。（2022年4月真题）"
  },
  {
    "id": "discretemath_q201",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "下列不是欧拉图的为（　）。",
    "options": [
      "![](qimg/8bb1a600934e8782.png)",
      "![](qimg/9e8b9a2929bfe4aa.png)",
      "![](qimg/3e323a613ebe2f15.png)",
      "![](qimg/8fade23a94909864.png)"
    ],
    "answer": "![](qimg/9e8b9a2929bfe4aa.png)",
    "explanation": "无向连通图G是欧拉图的充分必要条件是G是连通的且无奇点。参见教材P147。（2022年10月试题）"
  },
  {
    "id": "discretemath_q202",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "下列度数序列不能构成无向树的是（　）。",
    "options": [
      "{1，1，1，2，3}",
      "{1，1，2，2，2}",
      "{1，1，1，1，4}",
      "{1，2，3，3，3}"
    ],
    "answer": "{1，2，3，3，3}",
    "explanation": "对于一个有5个结点的树，它有4条边，所以其结点的度数之和应该是4×2=8。参见教材P154。（2022年10月试题）"
  },
  {
    "id": "discretemath_q203",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "single_choice",
    "text": "存在经过图中所有边一次且仅一次的回路的图是（　）。",
    "options": [
      "关系图",
      "哈斯图",
      "欧拉图",
      "哈密顿图"
    ],
    "answer": "欧拉图",
    "explanation": "在连通图G中，经过G中每条边一次且仅一次的通路，称为欧拉通路或欧拉路。若欧拉通路为回路，则称为欧拉回路。具有欧拉回路的图称为欧拉图，含有欧拉通路但没有欧拉回路的图称为半欧拉图。参见教材P147。（2022年10月试题）"
  },
  {
    "id": "discretemath_q204",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "short_answer",
    "text": "用真值表法判定命题公式 ![](qimg/6d956212fb19f531.png) 是否为非重言式的可满足式。",
    "answer": "![](qimg/f469a6b65da5cc69.png)",
    "explanation": "参见教材P27。（2021年04月试题）"
  },
  {
    "id": "discretemath_q205",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "short_answer",
    "text": "用等值演算法求命题公式 ![](qimg/0eae5c54efb63997.png) 的主析取范式。",
    "answer": "![](qimg/34c5864d38bbbc6a.png)",
    "explanation": "参见教材P42。（2021年04月试题）"
  },
  {
    "id": "discretemath_q206",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "short_answer",
    "text": "设集合A={1，2，3}的二元关系R={<1，1>，<1，2>，<1，3>，<2，1>，<3，2>}，写出自反闭包r（R），对称闭包s（R）和传递闭包t（R）的集合表达式。",
    "answer": "![](qimg/ed219d7385503964.png)",
    "explanation": "参见教材P91。（2021年04月试题）"
  },
  {
    "id": "discretemath_q207",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "short_answer",
    "text": "利用Kruskal算法求题29图所示的连通带权图的最小生成树，请给出详细过程并画出最小生成树。 ![](qimg/e04c683eedb575e7.png)",
    "answer": "![](qimg/cff9626e190df49c.png)",
    "explanation": "参见教材P156。（2021年04月试题）"
  },
  {
    "id": "discretemath_q208",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "short_answer",
    "text": "设有向图G如题30图所示， （1）写出图G的邻接矩阵； （2）计算图G中长度为4的通路数； （3）计算图G中长度小于或等于4的回路数。 ![](qimg/2e23d23fe6cfa9c5.png)",
    "answer": "![](qimg/0c7f42e52e56d7cc.png)  ![](qimg/551774f6f2946e15.png)",
    "explanation": "参见教材P142。（2021年04月试题）"
  },
  {
    "id": "discretemath_q209",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "short_answer",
    "text": "用二叉树表示算术表达式（3*a-2）/（b+c*d），并给出先序、中序和后序遍历序列。",
    "answer": "![](qimg/785852badbbee988.png)",
    "explanation": "参见教材P160。（2021年04月试题）"
  },
  {
    "id": "discretemath_q210",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "short_answer",
    "text": "设A={1，2，4，6，12}， ![](qimg/6ac40889d9e0e996.png) 为整除关系，回答下列问题： （1）画出 ![](qimg/a4c54b11947b71ed.png) 的哈斯图； （2）求子集B={2，4，6}的极大元，极小元，最大元，最小元； （3）判断该偏序集是否为格。",
    "answer": "![](qimg/a37ecff40eb180ef.png)  ![](qimg/82d257814c6ae81a.png)",
    "explanation": "参见教材P97。（2021年04月试题）"
  },
  {
    "id": "discretemath_q211",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "short_answer",
    "text": "用真值表法判定命题公式 ![](qimg/c1c94f71b4f84106.png) 是否为非重言式的可满足式。",
    "answer": "![](qimg/3054d6d9edd4b700.png)",
    "explanation": "参见教材P27。（2023年04月试题）"
  },
  {
    "id": "discretemath_q212",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "short_answer",
    "text": "用等值演算法求命题公式 ![](qimg/28d1c3435080dd1e.png) 的主析取范式。",
    "answer": "![](qimg/d1868d74c1b78226.png)",
    "explanation": "参见教材P42。（2023年04月试题）"
  },
  {
    "id": "discretemath_q213",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "short_answer",
    "text": "设集合A={1，2，3}上的二元关系R={<1，3>，<3，2>，<2，1>}，写出自反闭包r（R），对称闭包s（R）和传递闭包t（R）的集合表达式。",
    "answer": "![](qimg/235ee7e19c0f36e0.png)",
    "explanation": "参见教材P92。（2023年04月试题）"
  },
  {
    "id": "discretemath_q214",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "short_answer",
    "text": "画出A={2，4，8，12，24}上整除关系的哈斯图，并求B={4，8，12}的极大元、极小元。",
    "answer": "A={2，4，8，12，24}上整除关系的哈斯图见下图 ![](qimg/732a15393a57ab43.png) B={4，8，12}的极大元8，12；极小元4。",
    "explanation": "参见教材P98。（2023年04月试题）"
  },
  {
    "id": "discretemath_q215",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "short_answer",
    "text": "利用Kruskal算法求下图所示的连通带权图的最小生成树，请给出详细过程并画出最小生成树，求出最小生成树的权。 ![](qimg/2f0d692643f4fd4d.png)",
    "answer": "利用Kruskal算法计算，按权值从小到大对边进行排列，添加权值为1的边v1v2，v4v5；添加权值为2的边v2v3，v5v7；添加权值为3的边v3v4，v5v6；添加权值为7的边v7v8；得到的最小生成树如下图所示。 ![](qimg/186c9d92e9b6b92d.png) 得到的最小生成树的权为19。",
    "explanation": "参见教材P157。（2023年04月试题）"
  },
  {
    "id": "discretemath_q216",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "short_answer",
    "text": "![](qimg/19a4a66e43cb5a76.png) （1）证明R为等价关系；（2）求R导出的等价类。",
    "answer": "![](qimg/15450637896bf57b.png)  ![](qimg/d37ea036eb6e4eb4.png)",
    "explanation": "参见教材P94。（2023年04月试题）"
  },
  {
    "id": "discretemath_q217",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "short_answer",
    "text": "设有向图D如下图所示，（1）写出图D的邻接矩阵MD；（2）计算图D中长度为4的通路数；（3）计算图D中长度小于或等于4的回路数。 ![](qimg/2aa5b46998e0534b.png)",
    "answer": "![](qimg/b6ccd513311a8324.png)",
    "explanation": "参见教材P142。（2023年04月试题）"
  },
  {
    "id": "discretemath_q218",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "short_answer",
    "text": "用二叉树表示算术表达式（a*（b+c））÷（g+（h-i）），并给出该树的先序、中序、后序遍历序列。",
    "answer": "算术表达式（a*（b+c））÷（g+（h-i））的二叉树见下图 ![](qimg/240e1f9290229be1.png)",
    "explanation": "参见教材P160。（2023年04月试题）"
  },
  {
    "id": "discretemath_q219",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "short_answer",
    "text": "![](qimg/9a68f2e5d11d7477.png)",
    "answer": "![](qimg/e1049ba9fa2d34bf.png)",
    "explanation": "参见教材P116。（2021年04月试题）"
  },
  {
    "id": "discretemath_q220",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "short_answer",
    "text": "用CP规则证明下面有效推理。前提：P→（Q→R），S→P，Q结论：S→R",
    "answer": "![](qimg/6218042041acf383.png)",
    "explanation": "参见教材P50。（2021年04月试题）"
  },
  {
    "id": "discretemath_q221",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "short_answer",
    "text": "设G是n（n≥2）阶无向简单图，且G为自补图，证明n=4k或n=4k+1，其中k为正整数。",
    "answer": "![](qimg/1b9d3073d7890805.png)",
    "explanation": "参见教材P138。（2021年04月试题）"
  },
  {
    "id": "discretemath_q222",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "short_answer",
    "text": "证明：正有理数集Q+，关于普通乘法运算构成交换群。",
    "answer": "![](qimg/5574e4ded70d3b0c.png)",
    "explanation": "参见教材P116。（2023年04月试题）"
  },
  {
    "id": "discretemath_q223",
    "subjectId": "discretemath",
    "section": "practice",
    "type": "short_answer",
    "text": "用CP规则证明下面有效推理。 ![](qimg/3487bcaaa3210929.png)",
    "answer": "![](qimg/5c65354ed85b80c9.png)",
    "explanation": "参见教材P50。（2023年04月试题）"
  }
];
