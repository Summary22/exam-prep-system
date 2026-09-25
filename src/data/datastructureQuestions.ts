import { Question } from './mockData';

export const datastructureQuestions: Question[] = [
  {
    "id": "datastructure_q1",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "在计算机科学中，最准确地描述了“数据”一词的广义含义是（　）。",
    "options": [
      "数据仅指整数或实数等数值类型",
      "数据仅指能输入计算机并被程序直接执行的指令",
      "数据是指所有能输入计算机并被计算机程序处理的符号的集合",
      "数据仅指文本和图像等多媒体内容"
    ],
    "answer": "数据是指所有能输入计算机并被计算机程序处理的符号的集合",
    "explanation": "在计算机科学中，数据的定义远不止整数或实数等数值类型。实际上，数据是指所有能输入计算机并被计算机程序处理的符号的集合。这包括源程序、文档、地图、照片、歌曲、视频等多种类型的内容。因此，选项C最准确地描述了“数据”一词的广义含义。参见教材P32。"
  },
  {
    "id": "datastructure_q2",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "下列描述中，最准确地反映了算法本质的是（　）。",
    "options": [
      "算法是计算机硬件的组成部分",
      "算法是独立于计算机和程序设计语言，由一系列明确步骤组成的问题求解过程",
      "算法仅能用计算机程序设计语言来表示",
      "算法是数学公式的一种特殊形式，用于解决计算问题"
    ],
    "answer": "算法是独立于计算机和程序设计语言，由一系列明确步骤组成的问题求解过程",
    "explanation": "算法是独立于计算机和程序设计语言的，它由一系列明确、无二义性、可执行的步骤组成，这些步骤能够终止，并描述了一个问题的求解过程。这完全符合算法的定义。参见教材P37。"
  },
  {
    "id": "datastructure_q3",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "下列方法中，（　）是通过利用问题本身的递推关系，从已知的小规模问题的解构造出大规模问题的解。",
    "options": [
      "迭代法",
      "递推法",
      "分治法",
      "动态规划法"
    ],
    "answer": "递推法",
    "explanation": "递推法正是通过利用问题本身所具有的递推关系，从已知的小规模问题的解来构造出大规模问题的解。在递推法中，问题的解是按照某种顺序逐步推导出来的，每一步的解都依赖于前面的解。参见教材P42。"
  },
  {
    "id": "datastructure_q4",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "下列选项中，（　）最准确地描述了线性表的特点。",
    "options": [
      "线性表中的元素个数是无限的，且各元素之间必须按大小关系排序",
      "线性表中的元素个数是有限的，但各元素之间可以没有次序关系",
      "线性表中的元素个数是有限的，且各元素之间一定有次序关系，但不一定有大小关系",
      "线性表中的元素可以属于不同的类型，但元素个数是有限的"
    ],
    "answer": "线性表中的元素个数是有限的，且各元素之间一定有次序关系，但不一定有大小关系",
    "explanation": "线性表有3个特点，分别是：（1）所有元素属于同一个类型。（2）元素个数是有限的。（3）各元素之间不一定有大小关系，但一定有次序关系。参见教材P51。"
  },
  {
    "id": "datastructure_q5",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "在线性表的顺序存储结构中，为了应对元素个数可能变化的情况，通常需要分配一个比当前元素个数更大的数组。这种做法的主要目的是（　）。",
    "options": [
      "节省存储空间",
      "提高元素访问速度",
      "为后续插入操作预留空间",
      "确保数组索引从0开始"
    ],
    "answer": "为后续插入操作预留空间",
    "explanation": "线性表中的元素个数可以是变化的，这意味着数组的单元数也要变化。而一旦数组分配完毕，它的个数就不会改变。一般地，需要分配一个足够大的数组以供线性表使用，这样既保证能够保存线性表中当前的全部元素，又为后续的插入操作预留了空间。参见教材P53。"
  },
  {
    "id": "datastructure_q6",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "在单链表的存储结构中，每个结点除了包含元素值外，还包含（　）。",
    "options": [
      "元素值的地址",
      "指向其后继结点的指针",
      "指向其前驱结点的指针",
      "指向任意其他结点的指针"
    ],
    "answer": "指向其后继结点的指针",
    "explanation": "单链表是由一组动态分配的结点形成的链表，每个结点保存线性表中的一个元素及一个指针，指针指向保存其直接后继元素的结点。参见教材P62。"
  },
  {
    "id": "datastructure_q7",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "以下关于线性表的顺序实现和链式实现的描述中，正确的是（　）。",
    "options": [
      "顺序表在任何情况下都比链表节省空间",
      "链表在任何情况下都比顺序表节省空间",
      "当线性表元素个数较少时，链表的实现比顺序表的实现更节省空间；而当线性表元素个数较多且接近数组分配的最大个数时，顺序表的空间存储效率很高",
      "顺序表和链表的空间存储效率与线性表的元素个数无关"
    ],
    "answer": "当线性表元素个数较少时，链表的实现比顺序表的实现更节省空间；而当线性表元素个数较多且接近数组分配的最大个数时，顺序表的空间存储效率很高",
    "explanation": "选项A错误，因为顺序表的空间存储效率取决于线性表元素个数与数组分配的最大个数的比例。当元素个数较少时，顺序表中会有大量空闲空间，此时链表可能更节省空间。选项B错误，因为当线性表元素个数较多且接近数组分配的最大个数时，顺序表的空间存储效率很高，此时顺序表可能比链表更节省空间（考虑到指针的结构性开销）。选项C正确，它准确地描述了顺序表和链表在不同情况下的空间存储效率。当线性表元素个数较少时，链表中指针的结构性开销相对较大，使得链表比顺序表更节省空间。而当线性表元素个数较多且接近数组分配的最大个数时，顺序表的空间利用率很高，此时顺序表更节省空间。选项D错误，因为顺序表和链表的空间存储效率确实与线性表的元素个数有关。参见教材P76。"
  },
  {
    "id": "datastructure_q8",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "以下关于查找单链表倒数第k个结点的方法描述中，正确的是（　）。",
    "options": [
      "只需要一个指针，从头结点开始遍历k次即可找到倒数第k个结点",
      "如果知道单链表的长度n，则倒数第k个结点即第n-k个结点",
      "使用两个指针front和rear，初始时让front前进k步作为“排头兵”，然后两个指针同步前进，当front到达表尾时，rear即指向倒数第k个结点",
      "使用两个指针，一个指针每次走两步，另一个指针每次走一步，当走得快的指针到达表尾时，走得慢的指针一定指向链表的中间结点"
    ],
    "answer": "使用两个指针front和rear，初始时让front前进k步作为“排头兵”，然后两个指针同步前进，当front到达表尾时，rear即指向倒数第k个结点",
    "explanation": "选项A错误。因为单链表是单向的，不能从尾到头遍历，所以无法仅通过一个指针从头结点开始遍历k次就找到倒数第k个结点。选项B错误。如果知道单链表的长度n，则倒数第k个结点应该是第n-k+1个结点，而不是第n-k个结点。因为头结点通常也参与编号，所以需要从头结点开始算起。选项C正确。这是查找单链表倒数第k个结点的常用方法。使用两个指针front和rear，初始时让front前进k步作为“排头兵”，保持front和rear之间相距k个结点。然后两个指针同步前进，当front到达表尾时，rear就指向了倒数第k个结点。选项D错误。虽然描述中使用了两个指针，但这种方法是用来查找链表的中间结点的，而不是倒数第k个结点。一个指针每次走两步，另一个指针每次走一步，当走得快的指针到达表尾时，走得慢的指针指向的是链表的中间结点（在结点总数为奇数时）或靠近中间的结点之一（在结点总数为偶数时）。这与查找倒数第k个结点的方法不同。参见教材P87。"
  },
  {
    "id": "datastructure_q9",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "以下关于顺序栈的描述中，正确的是（　）。",
    "options": [
      "顺序栈中的栈顶指针是一个真正的指针，指向栈顶元素",
      "顺序栈中的栈底通常定义在数组下标为-1的位置",
      "顺序栈中的栈顶指针用于标记栈顶元素在数组中的位置",
      "顺序栈中的栈顶元素和栈底元素都可以直接访问"
    ],
    "answer": "顺序栈中的栈顶指针用于标记栈顶元素在数组中的位置",
    "explanation": "选项A错误。顺序栈中的栈顶指针实际上是一个整数变量，用于表示栈顶元素在数组中的下标位置，而不是一个真正的指针（即内存地址）。因此，选项A的描述是错误的。选项B错误。在顺序栈的实现中，为了简化操作，通常将栈底定义在数组下标为0或1的位置，而不是-1。因此，选项B的描述是错误的。选项C正确。顺序栈中的栈顶指针确实用于标记栈顶元素在数组中的位置。这是顺序栈实现中的一个关键要素，使得栈的入栈和出栈操作能够正确地进行。因此，选项C的描述是正确的。选项D错误。在顺序栈中，只有栈顶元素是可以直接访问的（通过栈顶指针）。栈底元素和其他非栈顶元素都是不可直接访问的，因为它们的位置是通过栈顶指针和栈的长度间接确定的。因此，选项D的描述是错误的。参见教材P99。"
  },
  {
    "id": "datastructure_q10",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "在一个顺序队列的实现中，为了避免在入队或出队时移动元素，同时处理数组前后可能出现的空闲单元，通常引入两个指示变量。这两个变量分别用于指示（　）。",
    "options": [
      "队头和队尾元素的值",
      "队头和队尾元素在数组中的下标",
      "队头和队尾元素的前一个位置在数组中的下标",
      "队头和队尾元素后面的位置在数组中的下标"
    ],
    "answer": "队头和队尾元素在数组中的下标",
    "explanation": "在顺序队列的实现中，为了处理数组中的元素并避免在入队或出队时移动元素，通常使用两个指示变量来标记队列的当前状态。这两个变量分别是：front（队头指针）：指示队头元素在数组中的位置。rear（队尾指针）：指示队尾元素后面的空位置在数组中的位置，即下一个新元素应该插入的位置。这两个变量都是整型值，表示的是数组的下标，而不是具体的元素值或元素位置的前后偏移。因此，正确答案是B，即这两个变量分别用于指示队头和队尾元素在数组中的下标。参见教材P110。"
  },
  {
    "id": "datastructure_q11",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "下列数据结构中，（　）允许在两端进行插入和删除操作，且通过限制其中一端的操作可以得到输入受限或输出受限的数据结构。",
    "options": [
      "栈",
      "普通队列",
      "双向链表",
      "双端队列"
    ],
    "answer": "双端队列",
    "explanation": "双端队列允许在两端（通常称为前端和后端，或左端和右端）进行插入（入队）和删除（出队）操作。这正是题目所描述的特性。此外，通过对双端队列的一端进行限制（例如，仅允许在一端进行插入操作，在另一端进行插入和删除操作），可以得到输入受限的双端队列；类似地，仅允许在一端进行删除操作，在另一端进行插入和删除操作，可以得到输出受限的双端队列。参见教材P118。"
  },
  {
    "id": "datastructure_q12",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "下列表达式中，（　）能够确保运算符的出现次序与其实际执行计算的次序完全一致，从而简化表达式计算程序的流程。",
    "options": [
      "中缀表达式",
      "前缀表达式",
      "后缀表达式",
      "任意形式表达式"
    ],
    "answer": "后缀表达式",
    "explanation": "在后缀表达式中，不再出现括号，而且，各运算符在表达式中出现的次序与其计算次序完全一致。所以当从左至右扫描表达式时，遇到运算符的时候就是执行相应计算的时刻，计算表达式值的程序变得容易实现。参见教材P128。"
  },
  {
    "id": "datastructure_q13",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "下列关于数组的描述中，不正确的是（　）。",
    "options": [
      "数组是高级程序设计语言中的重要语法成分",
      "多维数组在系统内部都对应一个隐含的一维数组",
      "数组的每个元素都是一个形如(index,value)的三元对",
      "在C语言中，可以定义一维数组，并且数组元素还可以是数组，形成多维数组"
    ],
    "answer": "数组的每个元素都是一个形如(index,value)的三元对",
    "explanation": "数组的每个元素都是形如(index,value)的二元对，index是数组下标，也称为索引，value是对应于该下标的数值。任何两个元素的index值都不相同。参见教材P141。"
  },
  {
    "id": "datastructure_q14",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "下列关于C语言中字符串的描述中，不正确的是（　）。",
    "options": [
      "C语言中的字符串是通过字符数组来实现的",
      "字符串在C语言中自动以空字符'\\0'作为结束标志",
      "在C语言中，字符串\" \"（仅包含一个空格）与空串\"\"是等价的",
      "C语言提供了多种字符串操作函数，如strlen()用于获取字符串的长度"
    ],
    "answer": "在C语言中，字符串\" \"（仅包含一个空格）与空串\"\"是等价的",
    "explanation": "字符串\" \"实际上是一个包含一个空格字符和一个空字符'\\0'的字符数组，它的长度是1（只计算可见字符，不包括结束符'\\0'的话，长度是空格的个数，即1；但包括结束符的话，总长度是2）。而空串\"\"是一个长度为0的字符数组，它不包含任何字符，只包含一个空字符'\\0'作为结束标志。因此，字符串\" \"和空串\"\"在C语言中是不等价的。参见教材P154。"
  },
  {
    "id": "datastructure_q15",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "下列关于树的定义的描述中，不正确的是（　）。",
    "options": [
      "树是由一个或一个以上的结点组成的有限集",
      "树中除根结点外，其余结点可以划分为k（k≥0）个不相交的子集，每个子集都是一棵树",
      "树中根结点的各棵子树之间可以有重叠",
      "包含n个结点的树有且仅有n-1条边"
    ],
    "answer": "树中根结点的各棵子树之间可以有重叠",
    "explanation": "根据树的定义，根结点的各棵子树之间是不会有重叠的。它们是不相交的子集，每个子集都是一棵树，且这些子集之间没有共同的结点。参见教材P164。"
  },
  {
    "id": "datastructure_q16",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "下列关于二叉树的描述中，不正确的是（　）。",
    "options": [
      "二叉树是一个结点的有限集合，这个集合可以为空",
      "二叉树的根结点可以没有左子树和右子树",
      "二叉树的左子树和右子树必须同时存在，不能只有其中一个",
      "一个空的二叉树也是二叉树的一种有效形态"
    ],
    "answer": "二叉树的左子树和右子树必须同时存在，不能只有其中一个",
    "explanation": "二叉树的左子树和右子树可以存在或者为空，它们不必同时存在。也就是说，左子树和右子树可以独立地为空或者不为空，组合出多种形态。参见教材P166。"
  },
  {
    "id": "datastructure_q17",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "在通过一维数组顺序存储方式构建二叉链表表示的二叉树时，如果二叉树不是完全二叉树，为了区分数组中的空白元素（即不存在的结点）与正常存储的结点值，通常会采取（　）。",
    "options": [
      "使用数组的下标来表示结点是否存在",
      "在数组空白元素位置存储一个特殊值NA，该值应不同于二叉树中任何可能的结点值",
      "通过额外的数组来标记每个元素在二叉树中是否存在",
      "不需要采取任何措施，因为可以通过逻辑判断直接区分"
    ],
    "answer": "在数组空白元素位置存储一个特殊值NA，该值应不同于二叉树中任何可能的结点值",
    "explanation": "当二叉树不是完全二叉树时，其顺序存储在一维数组中会包含空白元素。为了区分这些空白元素与正常存储的结点值，通常会在空白元素位置存储一个特殊值NA，该值应不同于二叉树中任何可能的结点值。参见教材P172。"
  },
  {
    "id": "datastructure_q18",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "在优先队列中，元素被赋予了一个优先值，该值决定了元素被输出的顺序。若使用最大堆作为优先队列的存储结构，（　）正确地反映了优先队列中元素的输出特性。",
    "options": [
      "具有最小优先值的元素最先被输出",
      "具有最大优先值的元素最先被输出",
      "元素按照它们被插入优先队列的顺序被输出",
      "元素按照优先值的升序或降序被输出，取决于具体的实现"
    ],
    "answer": "具有最大优先值的元素最先被输出",
    "explanation": "使用最大堆作为优先队列的存储结构时，堆顶元素（即根结点）具有最大的优先值，因此它最先被输出。这是最大堆的基本特性，也是优先队列（特别是最大优先队列）所期望的行为。参见教材P190。"
  },
  {
    "id": "datastructure_q19",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "在树的父结点表示法中，若数组的每个单元代表树中的一个结点，并包含data域和parent域，其中data域存储结点信息，parent域存储父结点在数组中的下标，则（　）操作在这种表示法中相对容易实现。",
    "options": [
      "查找某个结点的所有直接子结点",
      "查找某个结点的父结点",
      "查找树中任意两个结点之间的最短路径",
      "查找树中叶子结点的数量"
    ],
    "answer": "查找某个结点的父结点",
    "explanation": "查找某个结点的父结点是很容易的。因为每个结点都存储了其父结点在数组中的下标（对于根结点，这个值通常设置为一个特殊的负数表示没有父结点）。所以，只需要通过访问该结点的parent域，就可以直接找到其父结点。参见教材P190。"
  },
  {
    "id": "datastructure_q20",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "在设计不等长编码方案时，为了使译文总长度尽可能短，应遵循的原则是（　）。",
    "options": [
      "所有字符的编码长度都相等",
      "出现次数较多的字符采用较长的编码",
      "出现次数较多的字符采用较短的编码",
      "编码长度与字符出现的频度无关"
    ],
    "answer": "出现次数较多的字符采用较短的编码",
    "explanation": "自然语言中各字符出现的频度是不一样的，可以借助这个特性来设计不等长编码方案，即变长编码方案，目的是得到尽可能短的译文。在译文缩短后，后续的操作将更有效率。采用不等长编码的原则是使要处理的文本中出现次数较多的字符采用较短的编码。参见教材P197。"
  },
  {
    "id": "datastructure_q21",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "为了明确表示图中的所有顶点，可以让各顶点带有标号，这样的图称为（　）。",
    "options": [
      "无权图",
      "连通图",
      "顶点图",
      "标号图"
    ],
    "answer": "标号图",
    "explanation": "为了明确表示图中的所有顶点，可以让各顶点带有标号，这样的图称为标号图。参见教材P208。"
  },
  {
    "id": "datastructure_q22",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "图也有两类基本的存储方式，即顺序存储结构及链式存储结构，链式存储结构以（　）为代表。",
    "options": [
      "邻接表",
      "邻接矩阵",
      "边集数组",
      "十字链表"
    ],
    "answer": "邻接表",
    "explanation": "图也有两类基本的存储方式，即顺序存储结构及链式存储结构。顺序存储结构以邻接矩阵为代表，链式存储结构以邻接表为代表。参见教材P212。"
  },
  {
    "id": "datastructure_q23",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "AdjMatrix是邻接矩阵，保存的是顶点间的（　）。",
    "options": [
      "点",
      "边",
      "图",
      "方向"
    ],
    "answer": "边",
    "explanation": "AdjMatrix是邻接矩阵，保存的是顶点间的边。参见教材P216。"
  },
  {
    "id": "datastructure_q24",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "从深度优先搜索的过程可知，顶点的访问顺序与回溯的顺序刚好相反，即（　）。",
    "options": [
      "右进左出",
      "先进后出",
      "后进先出",
      "左进右出"
    ],
    "answer": "后进先出",
    "explanation": "从深度优先搜索的过程可知，顶点的访问顺序与回溯的顺序刚好相反，即后进先出顺序。参见教材P221。"
  },
  {
    "id": "datastructure_q25",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "含有n个顶点的连通图G的最小生成树含有的边数为（　）。",
    "options": [
      "n",
      "n-1",
      "n+1",
      "2n"
    ],
    "answer": "n-1",
    "explanation": "含有n个顶点的连通图G的最小生成树含有的边数为n-1。参见教材P228。"
  },
  {
    "id": "datastructure_q26",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "在有向图中，以顶点表示活动，有向边表示活动之间的优先关系，这样的有向图称为（　）。",
    "options": [
      "顶点表示活动的网络",
      "顶点表示活动的图",
      "有向边表示活动的网络",
      "有向边表示活动的图"
    ],
    "answer": "顶点表示活动的网络",
    "explanation": "在有向图中，以顶点表示活动，有向边表示活动之间的优先关系，这样的有向图称为顶点表示活动的网络。参见教材P237。"
  },
  {
    "id": "datastructure_q27",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "可以求得所有顶点间的最短路径，与Dijkstra算法相比更简洁的算法是（　）。",
    "options": [
      "KMP算法",
      "Bellman-Ford算法",
      "BF算法",
      "弗洛伊德算法"
    ],
    "answer": "弗洛伊德算法",
    "explanation": "可以求得所有顶点间的最短路径，与Dijkstra算法相比更简洁的算法是弗洛伊德算法。参见教材P249。"
  },
  {
    "id": "datastructure_q28",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "当待排序的数据量不大，全部数据都可以放入内存，排序操作也完全在内存中进行时，相应的排序称为（　）。",
    "options": [
      "内存排序",
      "数量排序",
      "内部排序",
      "外部排序"
    ],
    "answer": "内部排序",
    "explanation": "当待排序的数据量不大，全部数据都可以放入内存，排序操作也完全在内存中进行时，相应的排序称为内部排序或内排序。参见教材P256。"
  },
  {
    "id": "datastructure_q29",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "希尔排序利用了（　）的两个特点。",
    "options": [
      "单增插入排序",
      "间接插入排序",
      "直接插入排序",
      "单减插入排序"
    ],
    "answer": "直接插入排序",
    "explanation": "希尔排序就是利用了直接插入排序的两个特点。参见教材P260。"
  },
  {
    "id": "datastructure_q30",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "基于分治思想的算法是（　）。",
    "options": [
      "快速排序算法",
      "起泡排序算法",
      "冒泡排序算法",
      "选择排序算法"
    ],
    "answer": "快速排序算法",
    "explanation": "快速排序算法基于分治思想。参见教材P267。"
  },
  {
    "id": "datastructure_q31",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "堆排序比简单选择排序的效率要高的原因是（　）。",
    "options": [
      "不需要进行排列比较",
      "不需要分配存储空间",
      "不需要进行全部元素的顺序查找",
      "不需要对树根进行调整"
    ],
    "answer": "不需要进行全部元素的顺序查找",
    "explanation": "堆排序借助于堆的结构，在选择最大值元素或最小值元素时，不需要进行全部元素的顺序查找，比简单选择排序的效率要高。参见教材P275。"
  },
  {
    "id": "datastructure_q32",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "归并排序每次二分数组，对于长度为n的数组，二分数组的次数应为（　）。",
    "options": [
      "n+1",
      "lnn",
      "logn",
      "n"
    ],
    "answer": "logn",
    "explanation": "归并排序每次二分数组，对于长度为n的数组，二分数组的次数应为logn。参见教材P285。"
  },
  {
    "id": "datastructure_q33",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "基数排序的时间复杂度是（　），且基数排序算法是稳定的。",
    "options": [
      "方程",
      "常数",
      "线性的",
      "非线性的"
    ],
    "answer": "线性的",
    "explanation": "基数排序的时间复杂度是线性的，且基数排序算法是稳定的。参见教材P287。"
  },
  {
    "id": "datastructure_q34",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "任何一种内部排序算法所能达到的最佳时间复杂度为（　）。",
    "options": [
      "O（nlnn）",
      "O（nlogn）",
      "O（n+1）",
      "O（n）"
    ],
    "answer": "O（nlogn）",
    "explanation": "对于有n个记录的序列，对它进行内部排序时，没有一种方法的比较次数能够少于nlogn,也就是说，任何一种内部排序算法所能达到的最佳时间复杂度为O（nlogn）。参见教材P290。"
  },
  {
    "id": "datastructure_q35",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "当查找表是有序表时，可以使用（　）。",
    "options": [
      "选择查找方法",
      "顺序查找方法",
      "折半查找方法",
      "并序查找方法"
    ],
    "answer": "折半查找方法",
    "explanation": "当查找表是有序表时，可以使用折半查找方法。参见教材P296。"
  },
  {
    "id": "datastructure_q36",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "折半查找是从（　）开始查找。",
    "options": [
      "有序表的最小值",
      "有序表的中间",
      "有序表的前端",
      "有序表的后端"
    ],
    "answer": "有序表的中间",
    "explanation": "折半查找并不是从有序表的一端开始查找，而是从中间开始查找。参见教材P299。"
  },
  {
    "id": "datastructure_q37",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "二叉查找树的高度决定（　）。",
    "options": [
      "查找时的平均比较次数",
      "查找时最大的比较次数",
      "查找得到的平均值",
      "查找得到的最值"
    ],
    "answer": "查找时最大的比较次数",
    "explanation": "二叉查找树的高度不仅决定了查找时最大的比较次数，也影响了平均查找长度。参见教材P311。"
  },
  {
    "id": "datastructure_q38",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "在二叉查找树的每个结点中增加一个标记，定义为该结点左子树的高度减去右子树的高度，称为（　）。",
    "options": [
      "最值因子",
      "倾向因子",
      "差值因子",
      "平衡因子"
    ],
    "answer": "平衡因子",
    "explanation": "在二叉查找树的每个结点中增加一个标记，称为平衡因子，定义为该结点左子树的高度减去右子树的高度。参见教材P312。"
  },
  {
    "id": "datastructure_q39",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "可以处理既需要高的查找效率，又需要灵活的数据变动机制的情况的方法是（　）。",
    "options": [
      "哈希方法",
      "有序存放法",
      "选择查找法",
      "顺序查找方法"
    ],
    "answer": "哈希方法",
    "explanation": "哈希方法可以处理既需要高的查找效率，又需要灵活的数据变动机制的情况。参见教材P320。"
  },
  {
    "id": "datastructure_q40",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "提高哈希方法的效率的方法的是（　）。",
    "options": [
      "减少关键字",
      "提高查找频率",
      "复杂算法",
      "减少冲突"
    ],
    "answer": "减少冲突",
    "explanation": "算法简单及冲突少都是为了提高哈希方法的效率。参见教材P322。"
  },
  {
    "id": "datastructure_q41",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "在数据结构中，数据的最小不可分割的单位是（　）。",
    "options": [
      "记录",
      "数据元素",
      "数据项",
      "数据"
    ],
    "answer": "数据项",
    "explanation": "在数据结构中，数据的最小不可分割的单位是数据项。参见教材P33。"
  },
  {
    "id": "datastructure_q42",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "下列（　）是一种网状结构，其中的每个数据元素都可以与多个其他的数据元素相关。",
    "options": [
      "集合",
      "线性结构",
      "树结构",
      "图结构"
    ],
    "answer": "图结构",
    "explanation": "图结构是一种网状结构，其中的每个数据元素都可以与多个其他的数据元素相关。参见教材P34。"
  },
  {
    "id": "datastructure_q43",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "如果考查数据元素之间存在关系的元素个数，那么，树结构中元素之间是（　）的关系。",
    "options": [
      "一对一",
      "一对多",
      "不确定的",
      "多对多"
    ],
    "answer": "一对多",
    "explanation": "如果考查数据元素之间存在关系的元素个数，那么，树结构中元素之间是一对多的关系。参见教材P34。"
  },
  {
    "id": "datastructure_q44",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "逻辑上相邻的数据元素，存储到物理位置相邻的存储单元中，这样的存储方法称为（　）。",
    "options": [
      "顺序存储方法",
      "链式存储方法",
      "索引存储方法",
      "散列(哈希)存储方法"
    ],
    "answer": "顺序存储方法",
    "explanation": "逻辑上相邻的数据元素，存储到物理位置相邻的存储单元中，这样的存储方法称为顺序存储方法。参见教材P35。"
  },
  {
    "id": "datastructure_q45",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "数据结构在采用（　）保存时，通常使用指针来指示数据元素之间的逻辑关系，指针保存的是相关数据元素的存储地址。",
    "options": [
      "顺序存储结构",
      "链式存储结构",
      "索引存储结构",
      "散列(哈希)存储结构"
    ],
    "answer": "链式存储结构",
    "explanation": "数据结构在采用链式存储结构保存时，通常使用指针来指示数据元素之间的逻辑关系，指针保存的是相关数据元素的存储地址。参见教材P35。"
  },
  {
    "id": "datastructure_q46",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "若增长函数不随算法问题规模变化，即不管问题规模有多大，花费的时间都是固定的,则增长函数称为（　）。",
    "options": [
      "O(n)阶",
      "O(1)阶",
      "O(n2)阶",
      "O(2n)阶"
    ],
    "answer": "O(1)阶",
    "explanation": "若增长函数不随算法问题规模变化，即不管问题规模有多大，花费的时间都是固定的,则增长函数称为O(1)阶。参见教材P40。"
  },
  {
    "id": "datastructure_q47",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "—般来说，分治法的求解过程分为三个阶段，下列（　）不属于其中。",
    "options": [
      "划分",
      "求解小问题",
      "直接求解大问题",
      "小问题解的合并"
    ],
    "answer": "直接求解大问题",
    "explanation": "—般来说，分治法的求解过程分为三个阶段，即划分、求解小问题及小问题解的合并。参见教材P45。"
  },
  {
    "id": "datastructure_q48",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "下列（　）强调了时间和空间的连续性。不同阶段的求解往往不是独立进行的，可能存在依赖关系。",
    "options": [
      "递推法",
      "迭代法",
      "递归法",
      "动态规划法"
    ],
    "answer": "动态规划法",
    "explanation": "动态规划法强调了时间和空间的连续性。不同阶段的求解往往不是独立进行的，可能存在依赖关系。参见教材P45。"
  },
  {
    "id": "datastructure_q49",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "在数据结构与算法中，从逻辑上可以把数据结构分为（　）。",
    "options": [
      "紧凑结构和非紧凑结构",
      "线性结构和非线性结构",
      "内部结构和外部结构",
      "动态结构和静态结构"
    ],
    "answer": "线性结构和非线性结构",
    "explanation": "在数据结构与算法中，从逻辑上可以把数据结构分为两大类：线性结构和非线性结构。参见教材P34。"
  },
  {
    "id": "datastructure_q50",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "算法分析要评估的两个主要方面是（　）。",
    "options": [
      "正确性和简明性",
      "时间复杂度和空间复杂度",
      "可读性和可维护性",
      "数据复杂性和程序复杂性"
    ],
    "answer": "时间复杂度和空间复杂度",
    "explanation": "除了要评判算法的时间复杂度以外，算法在运行过程中临时占用的空间大小也要考虑，这称为空间复杂度。参见教材P42。"
  },
  {
    "id": "datastructure_q51",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "下列算法的时间复杂度中，算法效率最低的是（　）。",
    "options": [
      "O(n)",
      "O(logn)",
      "O(n2)",
      "O(2n)"
    ],
    "answer": "O(2n)",
    "explanation": "D项增长速度最快，随着输入规模的增加，算法的执行时间会迅速增加，因此它是效率最低的时间复杂度。参见教材P40。"
  },
  {
    "id": "datastructure_q52",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "设n是描述问题规模的非负整数，则下面程序片段的时间复杂度是（　）。 x=2; while (x<n/2) x=2 * x;",
    "options": [
      "O(n)",
      "O(log2n)",
      "O(n2)",
      "O(n log2n)"
    ],
    "answer": "O(log2n)",
    "explanation": "每次循环中，x 的值都会翻倍。第 0 次循环后：x = 2；第 1 次循环后：x = 2 * 2 = 4；第 k 次循环后：x = 2^(k+1)。我们需要找到最小的 k，使得 2^(k+1) 不小于 n / 2。取对数计算，由于 k 是一个整数，循环的次数 k可以简化为：log2n。所以该程序片段的时间复杂度是 O(log2n)。参见教材P40。"
  },
  {
    "id": "datastructure_q53",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "设n是描述问题规模的非负整数，则下列程序片段的时间复杂度是（　）。x=1;while (x>n) x=x * 2;",
    "options": [
      "O(n)",
      "O(1)",
      "O(n2)",
      "O(2n)"
    ],
    "answer": "O(1)",
    "explanation": "n 是一个非负整数，并且初始时 x = 1，那么循环条件 x > n 在第一次检查时就不成立。因此，循环体中的代码实际上根本不会执行。这个程序片段的时间复杂度是 O(1)。参见教材P40。"
  },
  {
    "id": "datastructure_q54",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "在单链表中进行插入或删除时，插入操作及删除操作涉及的表结点都只有（　）个。",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": "3",
    "explanation": "在单链表中进行插入或删除时，插入操作及删除操作涉及的表结点都只有3个，即当前结点及它的前驱结点和新结点。参见教材P64。"
  },
  {
    "id": "datastructure_q55",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "若线性表采用链式存储结构保存，则要求内存中可用存储单元的地址（　）。",
    "options": [
      "必须是连续的",
      "部分地址必须是连续的",
      "一定是不连续的",
      "连续或不连续都可以"
    ],
    "answer": "连续或不连续都可以",
    "explanation": "链式存储结构是一种动态且灵活的存储方式，它不要求预先分配一块连续的存储空间,而是按需分配，随时需要，随时分配。参见教材P62。"
  },
  {
    "id": "datastructure_q56",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "若已经设定当前指针的指向，n是链表的长度，则进行插入、删除操作时，时间复杂度均为（　）。",
    "options": [
      "O(n)",
      "O(1)",
      "O(n2)",
      "O(2n)"
    ],
    "answer": "O(1)",
    "explanation": "如果已经设定当前指针的指向，则进行插入、删除操作时，时间复杂度均为O(1)，因为操作过程中不需要进行元素的移动，也不需要将当前指针从表头后移到当前位置。参见教材P72。"
  },
  {
    "id": "datastructure_q57",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "双向链表的结构性开销是单链表的（　）倍。",
    "options": [
      "1",
      "1.5",
      "2",
      "4"
    ],
    "answer": "2",
    "explanation": "双向链表中每个结点都带有两个指针，比单链表中每个结点的指针数多1个。所以双向链表的结构性开销是单链表的2倍。参见教材P77。"
  },
  {
    "id": "datastructure_q58",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "下列选项中，不属于链表特点的是（　）。",
    "options": [
      "插入、删除时不需要移动元索",
      "可随机访问任一元素",
      "不必事先估计存储空间",
      "所需空间与元素个数成正比"
    ],
    "answer": "可随机访问任一元素",
    "explanation": "链表不支持随机访问，即不能通过索引直接访问某个节点。必须从头节点开始，逐个遍历节点，直到找到目标节点。参见教材P63。"
  },
  {
    "id": "datastructure_q59",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "若一个线性表分别采用下列存储结构进行存储，则读取一个指定位置（序号）的元素所花费时间最少的是（　）。",
    "options": [
      "顺序表",
      "单向链表",
      "双向链表",
      "循环链表"
    ],
    "answer": "顺序表",
    "explanation": "顺序表支持随机访问，可以直接通过索引访问任意位置的元素，时间复杂度为O(1)。单向链表、双向链表和循环链表都需要遍历链表来访问指定位置的元素，时间复杂度为O(n)。因此，读取一个指定位置的元素所花费时间最少的是顺序表。参见教材P72。"
  },
  {
    "id": "datastructure_q60",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "下列关于线性表的叙述中，错误的是（　）。",
    "options": [
      "除第一个元素以外，均有唯一的前驱",
      "除最后一个元素以外，均有唯一的后继",
      "元素的个数可以是0,此时表为空表",
      "若元素的个数为无穷，则表为无穷表"
    ],
    "answer": "若元素的个数为无穷，则表为无穷表",
    "explanation": "在实际应用中，线性表的元素个数总是有限的。计算机的存储空间是有限的，不可能存储无限个元素。因此，线性表的定义中并没有“无穷表”这一概念。参见教材P51。"
  },
  {
    "id": "datastructure_q61",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "对于含n个元素且采用顺序存储的线性表，访问位置i（0≤i≤n-1）处的元素和在位置i（0≤i≤n）插入元素的时间复杂度分别为（　）。",
    "options": [
      "O(n)和O(n)",
      "O(n)和O(1)",
      "O(1)和O(n)",
      "O(1)和O(1)"
    ],
    "answer": "O(1)和O(n)",
    "explanation": "在顺序存储的线性表中，元素存储在一个连续的数组中。访问位置 ( i ) 处的元素可以直接通过数组索引访问，无需遍历，因此时间复杂度为常数时间 ( O(1) )。在位置 ( i ) 插入元素时，需要将位置 ( i ) 及其之后的所有元素向后移动一位，为新元素腾出空间。这需要遍历从位置 ( i ) 到最后一个元素的所有元素，并将它们依次向后移动。因此，时间复杂度为线性时间 ( O(n) )。参见教材P55。"
  },
  {
    "id": "datastructure_q62",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "在双向循环链表中，在指针p所指结点之后插入指针S所指结点的操作是（　）。",
    "options": [
      "p->next = s; s->prev=p; p->next->prev=s; s->next= p->next;",
      "p->next= s; p->next->prev=s; s->prev =p; s->next= p->next;",
      "s->prev = p; s->next = p->next; p->next = s; p->next->prev = s;",
      "s->prev = p; s->next = p->next; p->next->prev = s; p->next = s;"
    ],
    "answer": "s->prev = p; s->next = p->next; p->next = s; p->next->prev = s;",
    "explanation": "s->prev = p;：设置 s 的前驱结点为 p。s->next = p->next;：设置 s 的后继结点为 p 的后继结点。p->next = s;：将 p 的后继结点设置为 s。p->next->prev = s;：将 p 的后继结点的前驱结点设置为 s。这些步骤确保了 s 正确地插入到 p 和 p 的后继结点之间，并且双向链接关系正确更新。参见教材P73。"
  },
  {
    "id": "datastructure_q63",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "一个栈的输入序列为1,2,3,…,n，若输出序列的第一个元素是n，则第i（1＜i≤n）个输出元素是（　）。",
    "options": [
      "n-i",
      "不确定",
      "n-i+1",
      "n-i-1"
    ],
    "answer": "n-i+1",
    "explanation": "如果第一个输出元素是n，则意味着全部数据都入栈后才开始出栈。在全部数据入栈后，栈中从栈底到栈顶的数据依次是1,2,3,…,n。n出栈后，栈顶是n-1，此时只能出栈n-1。依此类推，后面依次出栈的元素是n-2,n-3,n-4,…3,2,1。出栈序列是入栈序列的逆序列。参见教材P101。"
  },
  {
    "id": "datastructure_q64",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "入栈序列是a1,a3,a5,a2,a4,a6，出栈序列是a5,a4,a2,a6,a3,a1，则栈的容量最小是（　）。",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "answer": "4",
    "explanation": "1. 入栈 a1，栈：a12. 入栈 a3，栈：a1, a33. 入栈 a5，栈：a1, a3, a54. 出栈 a5，栈：a1, a35. 入栈 a2，栈：a1, a3, a26. 入栈 a4，栈：a1, a3, a2, a47. 出栈 a4，栈：a1, a3, a28. 出栈 a2，栈：a1, a39. 入栈 a6，栈：a1, a3, a610. 出栈 a6，栈：a1, a311. 出栈 a3，栈：a112. 出栈 a1，栈：空栈的最大容量出现在第6步，此时栈中有4个元素，因此，栈的最小容量必须至少为4，以容纳这些元素。参见教材P102。"
  },
  {
    "id": "datastructure_q65",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "6个元素6、5、4、3、2和1依次入栈，不能得到的出栈序列是（　）。",
    "options": [
      "5,4,3,6,1,2",
      "4,5,3,1,2,6",
      "3,4,6,5,2,1",
      "2,3,4,1,5,6"
    ],
    "answer": "3,4,6,5,2,1",
    "explanation": "操作步骤:6入，5入，5出，4入，4出，3入，3出，6出，2入，1入，1出，2出。符合LIFO原则，故A正确。6入，5入，4入，4出，5出，3入，3出，2入，1入，1出，2出，6出。符合LIFO原则，故B正确。6入，无法找到对应3的出栈操作，因此无合法出栈顺序，故C错误。6入，5入，4入，3入，2入，2出，3出，4出，1入，1出，5出，6出。符合LIFO原则，故D正确。参见教材P100。"
  },
  {
    "id": "datastructure_q66",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "若使用不带头结点的单链表存储队列，则进行入队操作时（　）。",
    "options": [
      "仅需要修改队头指针，不需要修改队尾指针",
      "仅需要修改队尾指针，不需要修改队头指针",
      "队尾指针一定要修改，队头指针也一定要修改",
      "队尾指针一定要修改，队头指针可能要修改"
    ],
    "answer": "队尾指针一定要修改，队头指针可能要修改",
    "explanation": "入队时，新元素插入在队尾，队尾指针一定要修改，让它指向这个新元素。通常队头指针是不需要修改的。但当向空队列中插入一个新元素时，队头指针也需要修改。参见教材P117。"
  },
  {
    "id": "datastructure_q67",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "下列链式队列的操作中，不可能修改队尾指针的是（　）。",
    "options": [
      "入队操作",
      "清空队列操作",
      "出队操作",
      "判定队列是否为空"
    ],
    "answer": "判定队列是否为空",
    "explanation": "入队操作会在队列的末尾添加一个新元素，因此会修改队尾指针。清空队列操作会将所有元素移除，队尾指针会被重置。出队操作会从队列的头部移除一个元素，通常不会修改队尾指针，但在某些情况下（如队列变为空时），队尾指针也会被重置。判定队列是否为空只是检查队列是否为空，不会对队尾指针进行任何修改。参见教材P114。"
  },
  {
    "id": "datastructure_q68",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "在循环队列Q (最多元素为MaxSize)中，front指向队头元素所在位置，rear指向队尾元素后的空位置，则循环队列为满的条件是（　）。",
    "options": [
      "Q. rear==Q. front",
      "Q. rear+1 ==Q. front",
      "Q. rear==Q. front+1",
      "(Q. rear+1) %MaxSize==Q. front"
    ],
    "answer": "(Q. rear+1) %MaxSize==Q. front",
    "explanation": "在循环队列中，当 rear 指针的下一个位置（即 (rear + 1) % MaxSize）等于 front 指针的位置时，表示队列已满。A选项这个条件表示队列为空，而不是满。B选项和C选项条件没有考虑循环队列的特性，可能会导致错误的结果。参见教材P114。"
  },
  {
    "id": "datastructure_q69",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "假设以数组A[0…m-1］存放循环队列的元素，队头指针front指向队头元素，队尾指针rear指向队尾元素后的空位置，则当前队列中的元素个数为（　）。",
    "options": [
      "( rear-front+m) %m",
      "rear-front+1",
      "( front-rear+m+1) %m",
      "( rear-front) %m"
    ],
    "answer": "( rear-front+m) %m",
    "explanation": "在循环队列中，rear 和 front 可能会超过数组的边界，因此需要加上数组长度 m 再取模，以确保结果在有效范围内。B选项这个公式没有考虑循环队列的特性，可能会导致错误的结果。C选项不符合循环队列的元素计数规则。D选项没有考虑 rear 小于 front 的情况，可能会导致负数结果。参见教材P111-P117。"
  },
  {
    "id": "datastructure_q70",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "栈和队列的共同点是（　）。",
    "options": [
      "都是后进先出",
      "都是先进先出",
      "只允许在端点处插入和删除元素",
      "没有共同点"
    ],
    "answer": "只允许在端点处插入和删除元素",
    "explanation": "栈只允许在一端（栈顶）进行插入和删除操作，队列只允许在一端（队尾）插入元素，在另一端（队首）删除元素。参见教材P99。"
  },
  {
    "id": "datastructure_q71",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "在C语言中，设有数组定义” char array [ ]=”Orange\";”,则数组array所占用的空间是（　）。",
    "options": [
      "5字节",
      "8字节",
      "6字节",
      "7字节"
    ],
    "answer": "7字节",
    "explanation": "array 是一个字符数组，包含了字符串 \"Orange\" 和结尾的空字符 \\0。参见教材P143。"
  },
  {
    "id": "datastructure_q72",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "假定一个二维数组的定义语句为”int a[3][4]={{3,4},{5,8,9}};”，则元素a[2][2]的值为（　）。",
    "options": [
      "8",
      "5",
      "0",
      "3"
    ],
    "answer": "0",
    "explanation": "a[2][2] 位于第三行的第三个位置，由于这一行未初始化，所以 a[2][2] 的值为 0。参见教材P143。"
  },
  {
    "id": "datastructure_q73",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "下列关于非空广义表的叙述中，错误的是（　）。",
    "options": [
      "广义表的表头一定不为空表",
      "广义表是一个多层次的线性结构",
      ".广义表的表尾总是一个广义表",
      "广义表中的数据元素有相对次序"
    ],
    "answer": "广义表的表头一定不为空表",
    "explanation": "虽然广义表的表头可以是一个原子或一个子表，但它不一定不能为空表。例如，对于广义表 L = ((), (a, b))，表头是 ()，即一个空表。参见教材P153。"
  },
  {
    "id": "datastructure_q74",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "数组通常具有的两种基本操作是（　）。",
    "options": [
      "查找和修改",
      "查找和索引",
      "索引和修改",
      "建立和删除"
    ],
    "answer": "查找和修改",
    "explanation": "索引是访问数组元素的方式，但不是一种独立的操作。建立数组是一种初始化操作，但不是数组的基本操作。删除：数组本身不支持删除操作，可以通过修改数组的某个元素为特定值（如0或空）来模拟删除，但这不是基本操作。参见教材P141-P153。"
  },
  {
    "id": "datastructure_q75",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "有一个二维数组A[ 10] [5],每个数据元素占1字节，按行主序保存，且A[0][0]的存储地址是1000,则A[i][j]的存储地址是（　）。",
    "options": [
      "1000+10i+j",
      "1000+i+j",
      "1000+5i+j",
      "1000+10i+5j"
    ],
    "answer": "1000+5i+j",
    "explanation": "地址=起始地址+(行数×每行元素数×每个元素占的字节数)+(列数×每个元素占的字节数)，地址=1000+(i×5×1)+(j×1)=1000+5i+j。参见教材P144。"
  },
  {
    "id": "datastructure_q76",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "若采用三元组表保存m×n的、有t个非0元素的稀疏矩阵A，则对矩阵A求转置的快速算法最好能够达到的时间复杂度是（　）。",
    "options": [
      "O(n)",
      "O(n＋t)",
      "O(m×n)",
      "O(m×n×t)"
    ],
    "answer": "O(n＋t)",
    "explanation": "首先，对新数组进行计数排序，基于列索引（即原行索引）来确定每个元素在转置后数组中的位置。然后，根据计数排序的结果，将转换后的三元组放置到新数组的正确位置。计数排序的时间复杂度是 O(t+n)。参见教材P146。"
  },
  {
    "id": "datastructure_q77",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "现有广义表L=((a，b)，(())，(a，(b)))，L中的元素个数是（　）。",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "answer": "3",
    "explanation": "元素个数可以通过直接计数每个顶层元素来确定。在这个广义表中，顶层元素有三个：第一个元素是子表 ( (a, b) )，第二个元素是子表 ( (()) )，第三个元素是子表 ( (a, (b)) )。所以L中的元素个数是3。参见教材P153。"
  },
  {
    "id": "datastructure_q78",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "在深度为5的二叉树中，结点个数最多是（　）。",
    "options": [
      "10",
      "16",
      "31",
      "32"
    ],
    "answer": "31",
    "explanation": "在深度为5的二叉树中，结点个数最多的情况是每一层都达到最大结点数。1 + 2 + 4 + 8 + 16 = 31。参见教材P167。"
  },
  {
    "id": "datastructure_q79",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "下列关于二叉树的叙述中，正确的是（　）。",
    "options": [
      "二叉树的度为2",
      "二叉树的度可以小于2",
      "二叉树中至少有一个结点的度为2",
      "二叉树中任何一个结点的度都为2"
    ],
    "answer": "二叉树的度可以小于2",
    "explanation": "二叉树的度是指树中所有结点的最大度数，而二叉树中结点的度可以是0、1或2。因此，二叉树的度可以小于2。考虑只有一个根节点的二叉树，这个根节点的度为0，因此二叉树中不一定有度为2的结点。参见教材P165。"
  },
  {
    "id": "datastructure_q80",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "借助于二叉树的遍历过程，对二叉树的结点从1开始进行连续编号，要求每个结点的编号大于其左子结点、右子结点（若存在）的编号，且其左子结点的编号小于其右子结点的编号（若存在），则遍历算法是（　）。",
    "options": [
      "先序遍历",
      "中序遍历",
      "后序遍历",
      "层序遍历"
    ],
    "answer": "后序遍历",
    "explanation": "根据题意，二叉树中任一结点v的编号要大于其子结点的编号，这意味着要先遍历子结点，再遍历结点V。对于V的子结点，先遍历其左子结点，再遍历其右子结点。这个过程与后序遍历是吻合的。参见教材P179。"
  },
  {
    "id": "datastructure_q81",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "设给定权值总数为n，用它构造的哈夫曼树的结点总数为（　）。",
    "options": [
      "2n-1",
      "2n",
      "2n+1",
      "不确定"
    ],
    "answer": "2n-1",
    "explanation": "初始时有n个叶子结点。每次合并两个结点会减少1个叶子结点，同时增加1个内部结点。为了将n个叶子结点合并成一棵树，需要进行n-1次合并操作。因此，最终会有n-1个内部结点。总的结点数等于叶子结点数加上内部结点数，n + (n - 1) = 2n – 1。参见教材P198。"
  },
  {
    "id": "datastructure_q82",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "在一棵非空二叉树的中序遍历序列中，根结点的右边（　）。",
    "options": [
      "只有左子树上的所有结点",
      "只有右子树上的所有结点",
      "只有右子树上的部分结点",
      "只有左子树上的部分结点"
    ],
    "answer": "只有右子树上的所有结点",
    "explanation": "先遍历左子树，然后访问根节点，最后遍历右子树。因此，在中序遍历序列中，根节点的右边是右子树上的所有结点。参见教材P180。"
  },
  {
    "id": "datastructure_q83",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "—棵二叉树共有20个结点，其中度为1的结点的个数是7，则叶结点个数是（　）。",
    "options": [
      "4",
      "7",
      "9",
      "13"
    ],
    "answer": "7",
    "explanation": "二叉树的一个重要性质是n0=n2+1,由题意可得n0+n2=13,可以求出n0=7，则叶结点个数是7。参见教材P168。"
  },
  {
    "id": "datastructure_q84",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "若一棵哈夫曼树共有215个结点，则树中编码的字符个数是（　）。",
    "options": [
      "107",
      "108",
      "214",
      "215"
    ],
    "answer": "108",
    "explanation": "在哈夫曼树中，每个字符对应一个叶结点。在哈夫曼树中，度为1的结点数通常为0，因为哈夫曼树是通过合并两个最小频率的结点来构建的，不会产生度为1的结点。所以通过n0=n2+1和n0+n2=215可以得出n0=108。参见教材P200。"
  },
  {
    "id": "datastructure_q85",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "下列4个序列中，能构成最大堆的是（　）。",
    "options": [
      "75,45,65,10,25,30,20,15",
      "75,45,65,30,15,25,20,10",
      "75,65,45,10,30,25,20,15",
      "75,65,30,15,25,45,20,10"
    ],
    "answer": "75,45,65,30,15,25,20,10",
    "explanation": "最大堆的性质：父节点的值大于或等于其子节点的值。选项B，索引 0: 75 ，左子节点 (1): 45，右子节点 (2): 65索引 1: 45 ，左子节点 (3): 30，右子节点 (4): 15索引 2: 65 ，左子节点 (5): 25，右子节点 (6): 20索引 3: 30 ，左子节点 (7): 10检查结果：75 > 45 和 75 > 6545 > 30 和 45 > 1565 > 25 和 65 > 2030 > 10，符合最大堆的性质。参见教材P188。"
  },
  {
    "id": "datastructure_q86",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "在图结构中，元素之间的关系可以看成（　）的。",
    "options": [
      "一对一",
      "一对多",
      "多对多",
      "多对一"
    ],
    "answer": "多对多",
    "explanation": "在图结构中，元素之间的关系可以看成多对多的。参见教材P207。"
  },
  {
    "id": "datastructure_q87",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "在有n个顶点的有向图中，其边数最多可达（　）。",
    "options": [
      "n(n-1)",
      "n(n-1)/2",
      "n(n+1)",
      "n(n+1)/2"
    ],
    "answer": "n(n-1)",
    "explanation": "在有n个顶点的有向图中，其边数最多可达n(n-1)。参见教材P209。"
  },
  {
    "id": "datastructure_q88",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "对于有向图G，邻接矩阵i列中非0（也不等于∞）元素的个数为顶点vi的（　）。",
    "options": [
      "度",
      "入度",
      "出度",
      "上述都不是"
    ],
    "answer": "入度",
    "explanation": "对于有向图G，邻接矩阵i列中非0（也不等于∞）元素的个数为顶点vi的入度。参见教材P213。"
  },
  {
    "id": "datastructure_q89",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "设用邻接矩阵表示有n个顶点的图G，在计算G中有多少条边时，需要检查矩阵中的所有元素，因此时间复杂度为（　）。",
    "options": [
      "O(n)",
      "O(n2)",
      "O(2n)",
      "O(2(n-1))"
    ],
    "answer": "O(n2)",
    "explanation": "设用邻接矩阵表示有n个顶点的图G，在计算G中有多少条边时，需要检查矩阵中的所有元素，因此时间复杂度为O(n2)。参见教材P213。"
  },
  {
    "id": "datastructure_q90",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "广度优先搜索又称为宽度优先搜索，它类似于树的（　）。",
    "options": [
      "前序遍历",
      "中序遍历",
      "后序遍历",
      "层序遍历"
    ],
    "answer": "层序遍历",
    "explanation": "广度优先搜索是遍历图的另一种常用方法，又称为宽度优先搜索，它类似于树的层序遍历。参见教材P224。"
  },
  {
    "id": "datastructure_q91",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "在含n个顶点的连通无向图中，边数至少是（　）。",
    "options": [
      "n-1",
      "n",
      "n+1",
      "nlog n"
    ],
    "answer": "n-1",
    "explanation": "连通无向图是指图中任意两个顶点之间都存在一条路径。最小连通图即树，是一类特殊的连通无向图，没有环且具有最少的边数。如果一个连通无向图的边数少于n-1，那么它一定不是连通的，因为至少需要n-1条边才能保证所有顶点连通。参见教材P211。"
  },
  {
    "id": "datastructure_q92",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "下列叙述中，错误的是（　）。",
    "options": [
      "图的深度优先搜索是一个递归过程",
      "图的深度优先搜索不适用于有向图",
      "深度优先搜索和广度优先搜索是图搜索的两种基本算法",
      "图的搜索是指从给定的顶点出发，每一个顶点仅被访问一次"
    ],
    "answer": "图的深度优先搜索不适用于有向图",
    "explanation": "深度优先搜索不仅适用于无向图，也适用于有向图。事实上，DFS 在有向图中同样有效，可以用来检测环、拓扑排序等。参见教材P241。"
  },
  {
    "id": "datastructure_q93",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "无向图 G=（V，E），其中：V={a，b，c，d，e，f}, E={（a,b），（a,e），（a,c），（b,e），（c,f），（f,d），（e,d）},对该图进行深度优先搜索，得到的顶点序列是（　）。",
    "options": [
      "a，b，e，c，d，f",
      "a，c，f，e，b，d",
      "a，e，b，c，f，d",
      "a，e，d，f，c，b"
    ],
    "answer": "a，e，b，c，f，d",
    "explanation": "假设我们从顶点 a 开始进行DFS，我们可以逐步推导出顶点的访问顺序。 1.起始顶点：a访问 a，标记 a 为已访问。选择一个与 a 相邻的顶点，可以选择 b、e 或 c。假设我们选择 b。2. 当前顶点：b访问 b，标记 b 为已访问。选择一个与 b 相邻的顶点，可以选择 a 或 e。由于 a 已经被访问，选择 e。3. 当前顶点：e访问 e，标记 e 为已访问。选择一个与 e 相邻的顶点，可以选择 a、b 或 d。由于 a 和 b 已经被访问，选择 d。4. 当前顶点：d访问 d，标记 d 为已访问。选择一个与 d 相邻的顶点，可以选择 e 或 f。由于 e 已经被访问，选择 f。5. 当前顶点：f访问 f，标记 f 为已访问。选择一个与 f 相邻的顶点，可以选择 c 或 d。由于 d 已经被访问，选择 c。6. 当前顶点：c访问 c，标记 c 为已访问。选择一个与 c 相邻的顶点，可以选择 a 或 f。由于 a 和 f 已经被访问，没有未被访问的相邻顶点，回溯到 f。根据上述步骤，得到的顶点序列是：a, b, e, d, f, c。DFS的搜索顺序取决于在每一步中选择哪条边进行搜索，因此可能存在多种有效的访问序列。然而，选项中的序列需要与某种可能的DFS搜索顺序相匹配。但选项C提供了一种与我们描述的某种可能搜索顺序相匹配的顶点序列。这个序列并不是唯一的正确序列，而是多种可能序列中的一种。参见教材P221。"
  },
  {
    "id": "datastructure_q94",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "在有向图G的拓扑排序中，若顶点vi在顶点vj之前，则下列情形中不可能出现的是（　）。",
    "options": [
      "G中有弧（vi，vj）",
      "G中有一条从vi到vj的路径",
      "G中没有弧（vi，vj）",
      "G中有一条从vj到vi的路径"
    ],
    "answer": "G中有一条从vj到vi的路径",
    "explanation": "拓扑排序是一种线性排序，使得对于每一条有向边(u, v)，顶点u在拓扑排序中都出现在顶点v之前。拓扑排序不要求每对顶点之间都有直接的边。D选项是不可能的。如果vj有一条路径到达vi，那么在拓扑排序中vj必须在vi 之前，这与题目矛盾。参见教材P237。"
  },
  {
    "id": "datastructure_q95",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "对于有向图，其邻接矩阵表示比邻接表表示更易于（　）。",
    "options": [
      "求一个顶点的度",
      "求一个顶点的邻接点",
      "进行图的广度优先遍历",
      "进行图的深度优先遍历"
    ],
    "answer": "求一个顶点的度",
    "explanation": "邻接矩阵可以通过简单地遍历矩阵的一行或一列来计算顶点的出度或入度。邻接表需要遍历顶点i的邻接链表来计算出度，而入度则需要遍历所有顶点的邻接链表，找到指向顶点 i的边，这通常更复杂和耗时。参见教材P212。"
  },
  {
    "id": "datastructure_q96",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "下列（　）的邻接矩阵是对称矩阵。",
    "options": [
      "有向图",
      "无向图",
      "AOV网",
      "AOE网"
    ],
    "answer": "无向图",
    "explanation": "无向图中每条边都没有方向，所以如果顶点 i 和顶点 j 之间有一条边，那么邻接矩阵中 A[i][j] 和 A[j][i] 都会标记为1（或相应的权值）。因此，无向图的邻接矩阵是一个对称矩阵。参见教材P208。"
  },
  {
    "id": "datastructure_q97",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "下面（　）可以判断出一个有向图是否有环（回路）。",
    "options": [
      "深度优先遍历",
      "拓扑排序",
      "求最短路径",
      "求关键路径"
    ],
    "answer": "拓扑排序",
    "explanation": "如果一个有向图能够进行拓扑排序，那么这个图一定是无环的。如果在进行拓扑排序的过程中发现无法将所有顶点排成一个线性顺序（即存在环），则说明图中有环。参见教材P237。"
  },
  {
    "id": "datastructure_q98",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "由n个顶点、e条边构成的图采用邻接表存储时，求最小生成树的 Prim 算法的时间复杂度为（　）。",
    "options": [
      "O(n)",
      "O(n+e)",
      "O(n2)",
      "O(2n)"
    ],
    "answer": "O(n+e)",
    "explanation": "假设图中包含n个顶点和e条边:1.对于每个顶点，需要扫描其所有邻接边，这个过程需要O(e)时间。2.每次选择最小边加入生成树，这个操作的时间复杂度为O(log n)，因为需要维护一个优先队列来管理边的权值。因此，对于n个顶点的图，Prim算法的时间复杂度主要由扫描邻接边和选择最小边的操作决定，但由于log n在大多数情况下远小于e，通常简化为O(n + e)。参见教材P228。"
  },
  {
    "id": "datastructure_q99",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "关键路径是事件结点网络中（　）。",
    "options": [
      "从源点到汇点的最长路径",
      "从源点到汇点的最短路径",
      "最长回路",
      "最短回路"
    ],
    "answer": "从源点到汇点的最长路径",
    "explanation": "从源点到汇点具有最大长度的路径称为关键路径。参见教材P242。"
  },
  {
    "id": "datastructure_q100",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "下列关于 A0E 网的叙述中，不正确的是（　）。",
    "options": [
      "关键活动不按期完成就会影响整个工程的完成时间",
      "任何一个关键活动提前完成，那么整个工程将会提前完成",
      "所有的关键活动提前完成，那么整个工程将会提前完成",
      "某些关键活动提前完成，那么整个工程将会提前完成"
    ],
    "answer": "任何一个关键活动提前完成，那么整个工程将会提前完成",
    "explanation": "整个工程的完成时间取决于所有关键活动的总持续时间。除非所有关键活动都提前完成，否则单个关键活动的提前完成不会影响整个工程的完成时间。参见教材P246。"
  },
  {
    "id": "datastructure_q101",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "用相邻矩阵A表示图，判定任意两个顶点 vi 和 vj之间是否有长度为m的路径相连,则只要检查（　）的第i行第j列的元素是否为零即可。",
    "options": [
      "mA",
      "A",
      "Am",
      "Am-1"
    ],
    "answer": "Am",
    "explanation": "矩阵Am 的第i 行第 j列的元素表示从vi 到vj 通过m条边的路径数。如果 Am [i][j] 不为零，说明存在从vi到vj 的长度为m的路径。参见教材P242。"
  },
  {
    "id": "datastructure_q102",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "用有向无环图描述表达式(A+B)*((A+B)/A)，至少需要顶点的数目为（　）。",
    "options": [
      "5",
      "6",
      "8",
      "9"
    ],
    "answer": "5",
    "explanation": "1. 子表达式 (A + B)：这是一个加法操作，需要两个顶点表示 (A) 和 (B)，以及一个顶点表示加法操作的结果。顶点：(A), (B), (A + B)2. 子表达式 (A + B) / A：这是一个除法操作，需要一个顶点表示 (A) 和一个顶点表示 (A + B) 的结果，以及一个顶点表示除法操作的结果。顶点：(A), (A + B), ((A + B) / A)3. 最终表达式 (A + B) * ((A + B) / A)：这是一个乘法操作，需要一个顶点表示 (A + B) 和一个顶点表示 ((A + B) / A) 的结果，以及一个顶点表示乘法操作的结果。顶点：(A + B), ((A + B) / A), ((A + B) * ((A + B) / A))总的顶点数为：(A) (1个)(B) (1个)(A + B) (1个)((A + B) / A) (1个)((A + B) * ((A + B) / A)) (1个)，总共需要 5 个顶点。参见教材P236。"
  },
  {
    "id": "datastructure_q103",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "一个有n个结点的图，最多有（　）个连通分量。",
    "options": [
      "0",
      "1",
      "n-1",
      "n"
    ],
    "answer": "n",
    "explanation": "如果每个顶点都是孤立的，即没有边连接任何两个顶点，那么每个顶点本身就是一个独立的连通分量。在这种情况下，每个顶点都构成一个单独的连通分量。因此，一个有n个结点的图，最多有n个连通分量。参见教材P211。"
  },
  {
    "id": "datastructure_q104",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "图中有关路径的定义是（　）。",
    "options": [
      "由顶点和相邻顶点序偶构成的边所形成的序列点",
      "由不同顶点所形成的序列",
      "由不同边所形成的序列",
      "上述定义都不是"
    ],
    "answer": "由顶点和相邻顶点序偶构成的边所形成的序列点",
    "explanation": "路径是指从一个顶点到另一个顶点的一系列边的序列。由顶点和相邻顶点序偶构成的边所形成的序列点。参见教材P210。"
  },
  {
    "id": "datastructure_q105",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "在一个无向图中，所有顶点的度数之和等于所有边数（　）倍。",
    "options": [
      "1/2",
      "2",
      "1",
      "4"
    ],
    "answer": "2",
    "explanation": "一个顶点的度数是指与该顶点相连的边的数量。在无向图中，每条边连接两个顶点，因此每条边会被计算两次。参见教材P209。"
  },
  {
    "id": "datastructure_q106",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "在一个有向图中，所有顶点的入度之和等于所有顶点出度之和的（　）倍。",
    "options": [
      "1/2",
      "2",
      "1",
      "4"
    ],
    "answer": "1",
    "explanation": "在有向图中，每条边有一个明确的方向，从一个顶点指向另一个顶点，所有顶点的入度之和等于所有顶点出度之和。参见教材P209。"
  },
  {
    "id": "datastructure_q107",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "用 DFS 遍历一个无环有向图，并在 DFS算法退栈返回时打印相应的顶点，则输出的顶点序列是（　）。",
    "options": [
      "逆拓扑有序",
      "拓扑有序",
      "无序的",
      "不确定"
    ],
    "answer": "逆拓扑有序",
    "explanation": "对于一个无环有向图，拓扑排序是一个线性排序，使得对于每一条有向边 (u, v)，顶点 u 在顶点 v 之前出现。在 DFS 退栈返回时打印顶点，实际上是在拓扑排序的基础上进行了逆序操作。这样得到的序列就是拓扑排序的逆序。参见教材P241。"
  },
  {
    "id": "datastructure_q108",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "下面结构中最适于表示稀疏无向图的是（　）。",
    "options": [
      "邻接矩阵",
      "逆邻接表",
      "邻接多重表",
      "邻接表"
    ],
    "answer": "邻接表",
    "explanation": "对于稀疏图，邻接矩阵会浪费大量的空间，因为大多数元素都是0。逆邻接表通常用于有向图。虽然邻接多重表可以有效地表示无向图，但在实际应用中不如邻接表常见。最适于表示稀疏无向图的是邻接表。参见教材P213。"
  },
  {
    "id": "datastructure_q109",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "如果含 n个顶点的图形形成一个环，则它有（　）棵生成树。",
    "options": [
      "1",
      "n",
      "n-1",
      "n+1"
    ],
    "answer": "n",
    "explanation": "在一个含有n个顶点的环形图中，可以通过删除任意一条边来形成一棵生成树。由于环形图有n 条边，每删除一条不同的边都会得到一棵不同的生成树。因此，环形图有n棵生成树。参见教材P226。"
  },
  {
    "id": "datastructure_q110",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "n个顶点的连通图用邻接矩阵表示时,该矩阵至少有（　）个非零元素。",
    "options": [
      "n",
      "n-1",
      "2(n-1)",
      "(n-1)/2"
    ],
    "answer": "2(n-1)",
    "explanation": "因为n个顶点的图若连通，则至少有n-1条边，无向图采用矩阵存储时，矩阵是对称的，故有2(n-1)个非零元素。参见教材P212。"
  },
  {
    "id": "datastructure_q111",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "为了实现图的广度优先遍历，BFS 算法使用的一个辅助数据结构就是（　）。",
    "options": [
      "栈",
      "队列",
      "二叉树",
      "树"
    ],
    "answer": "队列",
    "explanation": "在 BFS 中，队列用于存储即将被访问的顶点。参见教材P224。"
  },
  {
    "id": "datastructure_q112",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "在一个带权连通图G中，权值最小的边一定包含在G的（　）中。",
    "options": [
      "最小生成树",
      "生成树",
      "广度优先生成树",
      "深度优先生成树"
    ],
    "answer": "最小生成树",
    "explanation": "最小生成树是图的一个生成树，其所有边的权重之和最小。在带权连通图中，权值最小的边是指所有边中权重最小的那条边。参见教材P228。"
  },
  {
    "id": "datastructure_q113",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "若采用邻接矩阵法存储一个n个顶点的无向图，则该邻接矩阵就是一个（　）。",
    "options": [
      "上三角矩阵",
      "稀疏矩阵",
      "对角矩阵",
      "对称矩阵"
    ],
    "answer": "对称矩阵",
    "explanation": "对于无向图的邻接矩阵，由于边是双向的，因此矩阵中的元素满足 aij = aji ，这使得邻接矩阵是对称的。参见教材P212。"
  },
  {
    "id": "datastructure_q114",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "直接插入排序算法在最差情况时的时间复杂度为（　）。",
    "options": [
      "O(1)",
      "O(n)",
      "O(n2)",
      "O(2n)"
    ],
    "answer": "O(n2)",
    "explanation": "直接插入排序算法在最差情况时的时间复杂度为O(n2)。参见教材P259。"
  },
  {
    "id": "datastructure_q115",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "一般地，对含有n个元素的数组进行起泡排序，需要进行（　）趟起泡排序过程。",
    "options": [
      "n",
      "n-1",
      "n+1",
      "(n-1)/2"
    ],
    "answer": "n-1",
    "explanation": "一般地，对含有n个元素的数组进行起泡排序，需要进行n-1趟起泡排序过程。参见教材P264。"
  },
  {
    "id": "datastructure_q116",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "若用起泡排序方法对序列12,15,28,30,42,56进行降序排序，则需要进行比较操作的次数是（　）。",
    "options": [
      "5",
      "10",
      "15",
      "20"
    ],
    "answer": "15",
    "explanation": "数据元素个数n = 6，进行比较的次数是n×（n-1）/2 = 15。参见教材P265。"
  },
  {
    "id": "datastructure_q117",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "起泡排序在最优、最差及平均情况下的比较次数是相同的，时间复杂度均为（　）。",
    "options": [
      "O(1)",
      "O(n)",
      "O(n2)",
      "O(2n)"
    ],
    "answer": "O(n2)",
    "explanation": "起泡排序在最优、最差及平均情况下的比较次数是相同的，时间复杂度均为O(n2)。参见教材P267。"
  },
  {
    "id": "datastructure_q118",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "下列几种内部排序算法中，如果考虑平均时间复杂度，则（　）算法的性能最好。",
    "options": [
      "快速排序",
      "归并排序",
      "堆排序",
      "选择排序"
    ],
    "answer": "快速排序",
    "explanation": "如果考虑平均时间复杂度，则快速排序算法的性能最好，归并排序次之，堆排序更次之。参见教材P290。"
  },
  {
    "id": "datastructure_q119",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "下列排序方法中，排序趟数与序列的初始状态有关的是（　）。",
    "options": [
      "快速排序",
      "起泡排序",
      "插入排序",
      "选择排序"
    ],
    "answer": "起泡排序",
    "explanation": "起泡排序的排序趟数与序列的初始状态密切相关。如果序列已经是有序的，起泡排序只需要进行一次完整的扫描就可以完成排序。而如果序列完全逆序，起泡排序需要进行n-1 趟排序。参见教材P264。"
  },
  {
    "id": "datastructure_q120",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "若用起泡排序对关键字序列18,16,14,12,10,8进行升序排序，则所需进行的关键字比较的总次数是（　）。",
    "options": [
      "10",
      "15",
      "34",
      "21"
    ],
    "answer": "15",
    "explanation": "第一趟排序：5 次比较；第二趟排序：4 次比较；第三趟排序：3 次比较；第四趟排序：2 次比较；第五趟排序：1 次比较；总比较次数为15。参见教材P264。"
  },
  {
    "id": "datastructure_q121",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "在下面的排序方法中，辅助空间为O(n)的是（　）。",
    "options": [
      "堆排序",
      "希尔排序",
      "归并排序",
      "选择排序"
    ],
    "answer": "归并排序",
    "explanation": "归并排序在合并过程中，需要一个临时数组来存储中间结果，因此归并排序的辅助空间复杂度为 O(n)。参见教材P280。"
  },
  {
    "id": "datastructure_q122",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "在使用数据序列10, 15, 20, 25, 30建立初始大根堆时，数据对交换的次数是（　）。",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": "3",
    "explanation": "交换 15 和 30（1 次）；交换 10 和 30（2 次）；交换 15 和 25（3 次）。参见教材P276。"
  },
  {
    "id": "datastructure_q123",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "下列排序算法中，当待排序数据已有序时，花费时间反而最多的是（　）。",
    "options": [
      "堆排序",
      "希尔排序",
      "起泡排序",
      "快速排序"
    ],
    "answer": "快速排序",
    "explanation": "快速排序的时间复杂度通常为 O(n log n)，但在最坏情况下（数据已有序），快速排序的时间复杂度会退化为 O(n2)。这是因为每次划分时，基准元素总是选择为最小或最大的元素，导致每次划分都只减少一个元素，从而导致大量的递归调用。参见教材P273。"
  },
  {
    "id": "datastructure_q124",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "—组记录的关键字为46,79,56,38,40,84，利用快速排序方法，以第一个记录为枢轴，得到的一次划分结果为（　）。",
    "options": [
      "38,40,46,56,79,84",
      "40,38,46,79,56,84",
      "40,38,46,56,79,84",
      "40,38,46,84,56,79"
    ],
    "answer": "38,40,46,56,79,84",
    "explanation": "快速排序的思想是:从线性表中选取一元素，如本题中的46，将线性表后面小于46的元素移到前边，而前面大于46的元素移到后边。参见教材P269。"
  },
  {
    "id": "datastructure_q125",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "下列关于m阶B树的说法中，错误的是（　）。",
    "options": [
      "根结点至多有m棵子树",
      "所有叶结点都在同一层次上",
      "非叶结点至少有m/2 (m为偶数)或m/2+1 (m为奇数)棵子树",
      "根结点中的数据是无序的"
    ],
    "answer": "根结点中的数据是无序的",
    "explanation": "在B树中，每个结点（包括根结点）中的数据都是有序的。参见教材P318。"
  },
  {
    "id": "datastructure_q126",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "下列二叉查找树的情形中，查找效率最差的是（　）。",
    "options": [
      "结点太多",
      "结点太复杂",
      "完全二叉树",
      "没有度为2的结点"
    ],
    "answer": "没有度为2的结点",
    "explanation": "如果二叉查找树中没有度为2的结点，这意味着树退化成了一条链表。在这种情况下，查找效率会退化为 O(n)，因为每次查找都需要遍历所有节点。参见教材P305。"
  },
  {
    "id": "datastructure_q127",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "在对含n个元素的查找表进行顺序查找时，若查找每个元素的概率相同，则查找成功的平均查找长度为（　）。",
    "options": [
      "n",
      "n/2",
      "(n＋1)/2",
      "((1＋n)×n)/2"
    ],
    "answer": "(n＋1)/2",
    "explanation": "成功查找的平均查找长度为(n+1)/2。参见教材P298"
  },
  {
    "id": "datastructure_q128",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "下列关于折半查找的叙述中，正确的是（　）。",
    "options": [
      "表必须有序，而且只能从小到大排列",
      "表必须有序，且表只能以顺序方式存储",
      "表必须有序且表中数据必须是整型、实型或字符型",
      "表必须有序，表可以顺序方式存储，也可以链表方式存储"
    ],
    "answer": "表必须有序，且表只能以顺序方式存储",
    "explanation": "表中的元素在内存中是连续存储的，而不是通过链表等其他方式存储。参见教材P299。"
  },
  {
    "id": "datastructure_q129",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "深度为4的AVL树至少有（　）个结点。",
    "options": [
      "9",
      "8",
      "6",
      "7"
    ],
    "answer": "7",
    "explanation": "对于深度为 d 的AVL树，其至少有N(d)个节点，满足以下递归关系:N(0)=0，N(1)=1对于d>1,有N(d)=N(d-1)+N(d-2)+1具体计算如下:当d=2时，N(2)=N(1)+N(0)+1=1+0+1=2当d=3时，N(3)=N(2)+N(1)+1=2+1+1=4当d=4时，N(4)=N(3)+N(2)+1=4+2+1=7因此，深度为4的AVL树至少有7个节点。参见教材P312。"
  },
  {
    "id": "datastructure_q130",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "设哈希表下标为0~15，哈希函数为H(key)=key MOD 13，其中key为关键字，MOD为取余数运算，处理冲突方法为线性探查法，对于关键字序列为(22，18，38，39，48，35，9，64，29)，建立哈希表后，关键字9在哈希表的位置是（　）。",
    "options": [
      "12",
      "13",
      "11",
      "10"
    ],
    "answer": "13",
    "explanation": "位置9已被22占用，位置10已被48占用，位置11已被35占用，位置12已被38占用，位置13为空，插入9。参见教材P325。"
  },
  {
    "id": "datastructure_q131",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "下列关于哈希查找的说法中，正确的是（　）。",
    "options": [
      "除留余数法是所有哈希函数中最好的",
      "不存在特别好与坏的哈希函数，要视具体情况而定",
      "哈希函数的构造越复杂越好，因为随机性好，冲突小",
      "若需要在哈希表中删除一个元素，那么，无论用何种方法解决冲突，只需要简单地将该元素删去"
    ],
    "answer": "不存在特别好与坏的哈希函数，要视具体情况而定",
    "explanation": "哈希函数的选择取决于具体的应用场景和数据分布。没有一种哈希函数能够在所有情况下都表现最好，因此需要根据实际情况选择合适的哈希函数。参见教材P322。"
  },
  {
    "id": "datastructure_q132",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "哈希函数有一个共同的性质，即函数值应当以（　）取其值域的每个值。",
    "options": [
      "最大概率",
      "最小概率",
      "随机概率",
      "相等概率"
    ],
    "answer": "相等概率",
    "explanation": "哈希函数的一个重要特性是均匀分布，每个可能的哈希值被选中的概率应该是相等的。这样可以最大程度地减少哈希冲突，提高哈希表的查找效率。参见教材P320。"
  },
  {
    "id": "datastructure_q133",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "在关键字序列(8,12,20,25,33)中，采用二分查找25，关键字之间比较需要（　）次。",
    "options": [
      "2",
      "1",
      "4",
      "3"
    ],
    "answer": "2",
    "explanation": "第一次比较：中间位置的元素是20；第二次比较：中间位置的元素是25，查找成功。参见教材P300。"
  },
  {
    "id": "datastructure_q134",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "对于长度为11的有序表，按折半查找，在等概率情况下查找成功时，其平均查找长度是（　）。",
    "options": [
      "2",
      "1",
      "4",
      "3"
    ],
    "answer": "3",
    "explanation": "长度为11的有序表，其索引从0到10。构建一个二叉搜索树，比较次数为：根节点（索引5）：比较次数1第二层（索引2, 8）：比较次数2第三层（索引1, 4, 7, 10）：比较次数3第四层（索引0, 3, 6, 9）：比较次数4ASL=(1×1+2×2+3×4+4×4)/11=3参见教材P302。"
  },
  {
    "id": "datastructure_q135",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "影响散列查找时间效率的主要因素（　）。",
    "options": [
      "仅与散列表中实际元素个数相关",
      "仅与散列表长相关",
      "与散列表长和散列表中实际元素个数均相关",
      "与散列表长和散列表中实际元素个数均不相关"
    ],
    "answer": "与散列表长和散列表中实际元素个数均相关",
    "explanation": "如果散列表太短，即使散列函数设计得再好，也可能会导致较多的冲突，从而影响查找效率。如果实际元素个数过多，即使散列表很长，也会增加冲突的概率，从而降低查找效率。参见教材P320。"
  },
  {
    "id": "datastructure_q136",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "在带头结点的非空单向循环链表head中，指向表尾结点的指针P满足的条件是（　）。",
    "options": [
      "p == NULL",
      "p == head",
      "p->next == head",
      "p->next == NULL"
    ],
    "answer": "p->next == head",
    "explanation": "p == NULL：这表示指针 P 为空，不符合题意，因为链表是非空的。p == head：这表示指针 P 指向头结点，而不是表尾结点。p->next == head：这表示指针 P 指向的结点的 next 指针指向头结点，符合循环链表的特性。p->next == NULL：这表示指针 P 指向的结点的 next 指针为空，不符合循环链表的特性。参见教材P72。"
  },
  {
    "id": "datastructure_q137",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "带头结点的单链表head为空的判定条件是（　）。",
    "options": [
      "head == NULL",
      "head != NULL",
      "head->next == head",
      "head->next == NULL"
    ],
    "answer": "head->next == NULL",
    "explanation": "head == NULL：这表示头结点本身不存在，不符合带头结点的定义。head != NULL：这表示头结点存在，但不能确定链表是否为空。head->next == head：这表示头结点的 next 指针指向头结点本身，不符合单链表的结构。head->next == NULL：这表示头结点的 next 指针为空，表示链表中没有其他结点，链表为空。参见教材P62-P72。"
  },
  {
    "id": "datastructure_q138",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "在一个单链表中，已知q所指结点是p所指结点的前驱结点，若在q和p之间插入s所指结点，则执行的操作是（　）。",
    "options": [
      "s->next = p->next; p->next=s;",
      "p->next= s->next; s->next=p;",
      "q->next=s; s->next=p;",
      "p->next=s;s->next=q;"
    ],
    "answer": "q->next=s; s->next=p;",
    "explanation": "s->next = p->next; p->next = s;：这会将 s 插入到 p 和 p 的后继结点之间，而不是在 q 和 p 之间。p->next = s->next; s->next = p;：这会破坏链表的结构，使 p 指向 s 的后继结点，而 s 指向 p，不符合插入的要求。q->next = s; s->next = p;：这会将 s 插入到 q 和 p 之间，使得 q 的 next 指针指向 s，而 s 的 next 指针指向 p，符合插入的要求。p->next = s; s->next = q;：这会将 s 插入到 p 和 q 之间，但 q 是 p 的前驱结点，所以这不符合插入的要求。参见教材P63。"
  },
  {
    "id": "datastructure_q139",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "下列关于带头结点的单向循环链表L的叙述中，正确的是（　）。",
    "options": [
      "L中最后一个结点的指针域要指向头结点",
      "循环链表的长度为L中数据元素个数加1",
      "因为L是环形的，所以无法计算链表长度",
      "L中最后一个结点的指针域指向首个数据结点"
    ],
    "answer": "L中最后一个结点的指针域要指向头结点",
    "explanation": "选项A是正确的。在单向循环链表中，最后一个结点的 next 指针应该指向头结点，形成一个环。选项B是错误的。循环链表的长度是指实际的数据结点个数，不包括头结点。选项C是错误的。虽然链表是环形的，但仍然可以通过遍历链表来计算其长度。选项D是错误的。最后一个结点的 next 指针应该指向头结点，而不是首个数据结点。参见教材P72。"
  },
  {
    "id": "datastructure_q140",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "下列关于线性表L的叙述中，正确的是（　）。",
    "options": [
      "L是由n个相同元素组成的离散数据序列",
      "L中任意一个元素有且仅有唯一直接前驱",
      "可以在L中进行取元素、查找或排序等操作",
      "不能在L的任意位置插入或删除一个元素"
    ],
    "answer": "可以在L中进行取元素、查找或排序等操作",
    "explanation": "选项A是错误的。线性表可以由不同类型的元素组成，不一定都是相同的元素。选项B是错误的。除了第一个元素外，每个元素都有一个直接前驱，但第一个元素没有前驱。选项C是正确的。线性表支持多种操作，如取元素、查找、排序等。选项D是错误的。线性表支持在任意位置插入或删除元素。参见教材P51。"
  },
  {
    "id": "datastructure_q141",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "下列任何两个结点之间都没有逻辑关系的是（　）。",
    "options": [
      "图形结构",
      "线性结构",
      "集合",
      "树形结构"
    ],
    "answer": "集合",
    "explanation": "集合中数据元素之间除了“同属于一个集合”的关系外，任何两个结点之间都没有逻辑关系。图形结构中结点之间可以有复杂的连接关系；线性结构中数据元素之间存在一对一的线性关系；树形结构中数据元素之间存在一对多的层次关系。参见教材P34。"
  },
  {
    "id": "datastructure_q142",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "下列选项中，定义抽象数据类型时不需要做的事情是（　）。",
    "options": [
      "给出类型的名字",
      "定义类型上的操作",
      "实现类型上的操作",
      "用某种语言描述抽象数据类型"
    ],
    "answer": "实现类型上的操作",
    "explanation": "抽象数据类型（ADT）是指一个数学模型以及定义在该模型上的一组操作。定义抽象数据类型时需要给出类型的名字，定义类型上的操作，并用某种语言描述抽象数据类型（如伪代码等），但不需要实现类型上的操作，实现操作是在具体编程实现时完成的。参见教材P36。"
  },
  {
    "id": "datastructure_q143",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "在单链表L中，已知q所指结点是p所指结点的前驱结点，next是结点的指针域，若在q和p之间插入s所指结点，则执行的操作是（　）。",
    "options": [
      "s->next=p->next; p->next=s;",
      "p->next=s->next;s->next=p;",
      "p->next=s;s->next=q;",
      "q->next=s;s->next=p;"
    ],
    "answer": "q->next=s;s->next=p;",
    "explanation": "在单链表 L 中，已知 q 所指结点是 p 所指结点的前驱结点，要在 q 和 p 之间插入 s 所指结点，首先要让 q 的 next 指针指向 s，即 q->next = s；然后让 s 的 next 指针指向 p，即 s->next = p。这样就完成了在 q 和 p 之间插入 s 的操作。参见教材P63。"
  },
  {
    "id": "datastructure_q144",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "元素 a、b、c、d和e依次进入初始为空的栈中，在所有可能的出栈序列中，以元素d开头的序列个数是（　）。",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "answer": "4",
    "explanation": "元素 a、b、c、d 和 e 依次进入初始为空的栈中，要使出栈序列以 d 开头，那么 a、b、c、d 依次入栈，然后 d 出栈。此时栈内元素为 a、b、c，接下来 e 可以入栈后立即出栈，也可以在 c 出栈后入栈再出栈等情况。以 d 开头的出栈序列有：d, c, b, a, e；d, c, b, e, a；d, c, e, b, a；d, e, c, b, a ，共 4 个。参见教材P99。"
  },
  {
    "id": "datastructure_q145",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "读入数据元素序列 a,b,c,d,e,f,g并入栈。下列选项中，不可能是出栈序列的是（　）。",
    "options": [
      "f, e, g, d, a, c, b",
      "c, d, b, e,f, a, g",
      "e, f, d, g, c, b,a",
      "d, e, c, f, b, g, a"
    ],
    "answer": "f, e, g, d, a, c, b",
    "explanation": "对于选项 A，要使 f 第一个出栈，那么 a、b、c、d、e、f 依次入栈，f 出栈，e 出栈，g 入栈后 g 出栈，此时栈内元素从栈顶到栈底依次为 d、c、b、a，接下来 d 出栈后，应该是 c 出栈，而不是 a 出栈，所以 A 不可能是出栈序列。参见教材P100。"
  },
  {
    "id": "datastructure_q146",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "若以 1，2，3，4作为双端队列的输入序列，则既不能由输入受限的双端队列得到，又不能由输出受限的双端队列得到的输出序列是（　）。",
    "options": [
      "1，2，3，4",
      "4，1，3，2",
      "4，2，3，1",
      "4，2，1，3"
    ],
    "answer": "4，2，3，1",
    "explanation": "选项C，需要 4 先出队，然后 2 出队（需从另一端删除），接着 3 出队（需从原端删除），最后 1 出队。输入受限：无法在 4 和 2 之间插入 3 并保持顺序。输出受限：无法在 4 和 2 之后正确删除 3 和 1。参见教材P118。"
  },
  {
    "id": "datastructure_q147",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "广义表 A=(a, b,(c,d),(e,(f,g)))，则 Head(Tail(Head(Tail(Tail(A)))))的值为（　）。",
    "options": [
      "(g)",
      "(d)",
      "c",
      "d"
    ],
    "answer": "d",
    "explanation": "Tail(A) = (b, (c, d), (e, (f, g)))Tail(Tail(A)) = ((c, d), (e, (f, g)))Head(Tail(Tail(A))) = (c, d)Tail(Head(Tail(Tail(A)))) = (d)Head(Tail(Head(Tail(Tail(A))))) = d参见教材P154。"
  },
  {
    "id": "datastructure_q148",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "若串 S=\"software”，其子串的数目是（　）。",
    "options": [
      "8",
      "9",
      "36",
      "37"
    ],
    "answer": "37",
    "explanation": "子串计算：长度为 n 的字符串的子串数为 n(n+1)/2 + 1（包括空串）。\"software\" 的长度 n=8：非空子串数：8×9/2 = 36。包括空串：36 + 1 = 37。参见教材P155。"
  },
  {
    "id": "datastructure_q149",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "带头结点的单链表的头指针为 head，表为空的判定条件是（　）。",
    "options": [
      "head==NULL;",
      "head->next==NULL;",
      "head!=NULL;",
      "head->next==head;"
    ],
    "answer": "head->next==NULL;",
    "explanation": "在带头结点的单链表中，表为空的判定条件是head->neXt==NULL。参见教材P73。"
  },
  {
    "id": "datastructure_q150",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "稀疏矩阵的存储结构中，除存储三元组线性表的所有元素外，还包括（　）。",
    "options": [
      "稀疏矩阵的所有零元素及其位置",
      "稀疏矩阵的行数、列数及非零元素的个数",
      "三元组线性表元素之间的关系",
      "矩阵元素的数据类型"
    ],
    "answer": "稀疏矩阵的行数、列数及非零元素的个数",
    "explanation": "在稀疏矩阵的存储结构中，采用一维数组保存三元组。同时还要保存稀疏矩阵的行数和列数，还可以选择保存非0元素的个数。参见教材P147。"
  },
  {
    "id": "datastructure_q151",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "对n个元素的表做顺序查找时，若查找每个元素的概率相同，则平均查找长度为（　）。",
    "options": [
      "(n+1)/2",
      "n/2",
      "n",
      "(1+n)*n/2"
    ],
    "answer": "(n+1)/2",
    "explanation": "对n个元素的表做顺序查找时，若查找每个元素的概率相同，则平均查找长度为(n+1)/2。参见教材P298。"
  },
  {
    "id": "datastructure_q152",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "某二叉树的先序遍历序列是 abdgcefh，中序遍历序列是dgbaechf，则其后序遍历序列是（　）。",
    "options": [
      "gdbehfca",
      "abcdefgh",
      "gdbaefch",
      "ghbcdefa"
    ],
    "answer": "gdbehfca",
    "explanation": "二叉树遍历序列重建：先序确定根，中序划分左右子树。后序最后访问根。参见教材P174。"
  },
  {
    "id": "datastructure_q153",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "在一个具有n个顶点的有向图中，所有顶点的出度之和为d，则所有顶点的入度之和为（　）。",
    "options": [
      "n",
      "d-1",
      "d",
      "d+1"
    ],
    "answer": "d",
    "explanation": "有向图中所有顶点的出度之和与入度之和相等。参见教材P210。"
  },
  {
    "id": "datastructure_q154",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "对线性表进行二分查找时，要求线性表必须（　）。",
    "options": [
      "以顺序方式存储",
      "以顺序方式存储且元素有序",
      "以链式方式存储",
      "以链式方式存储且元素有序"
    ],
    "answer": "以顺序方式存储且元素有序",
    "explanation": "二分查找要求线性表必须以顺序方式存储，这样才能通过下标随机访问元素，并且元素必须有序，才能根据中间元素与查找关键字的比较结果确定下一步的查找区间。参见教材P299。"
  },
  {
    "id": "datastructure_q155",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "下列排序方法中，辅助空间为O(n)的是（　）。",
    "options": [
      "希尔排序",
      "堆排序",
      "选择排序",
      "归并排序"
    ],
    "answer": "归并排序",
    "explanation": "归并排序在合并子序列时需要额外的辅助空间来存储临时数据，其辅助空间复杂度为O(n)。希尔排序、堆排序和选择排序的辅助空间复杂度均为O(1)。参见教材P280。"
  },
  {
    "id": "datastructure_q156",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "下列关于数据的逻辑结构的叙述中，不正确的是（　）。",
    "options": [
      "数据的逻辑结构是数据间关系的描述",
      "数据的逻辑结构抽象反映数据元素间的逻辑关系",
      "数据的逻辑结构具体反映数据在计算机中的存储方式",
      "数据的逻辑结构分为线性结构和非线性结构"
    ],
    "answer": "数据的逻辑结构具体反映数据在计算机中的存储方式",
    "explanation": "数据的逻辑结构从逻辑上描述数据，表明数据元素之间的关系，与数据的存储方式无关。参见教材P34。"
  },
  {
    "id": "datastructure_q157",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "算法分析要评估的两个主要方面是（　）。",
    "options": [
      "空间复杂度和时间复杂度",
      "正确性和简明性",
      "可读性和文档性",
      "数据复杂性和程序复杂性"
    ],
    "answer": "空间复杂度和时间复杂度",
    "explanation": "算法分析要评估的两个主要方面是空间复杂度和时间复杂度。参见教材P42。"
  },
  {
    "id": "datastructure_q158",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "将斐波那契数列前n项保存在数组中，设计算法时适宜使用的策略是（　）。",
    "options": [
      "分治法",
      "穷举法",
      "递归法",
      "递推法"
    ],
    "answer": "递推法",
    "explanation": "将斐波那契数列的前n项保存在数组中，可以采用递推法求解。参见教材P42。"
  },
  {
    "id": "datastructure_q159",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "设顺序表中有n个数据元素，若删除表中第i个元素则需要移动的元素个数是（　）。",
    "options": [
      "i",
      "n+1-i",
      "n-1-i",
      "n-i"
    ],
    "answer": "n-i",
    "explanation": "顺序表中有n个数据元素，若删除表中第i个元素则需要移动的元素个数是n-i。参见教材P54。"
  },
  {
    "id": "datastructure_q160",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "在头指针为 head的非空单向循环链表中，指针p指向尾结点，下列关系成立的是（　）。",
    "options": [
      "p->next==head",
      "p->next->next==head",
      "p->next==NULL",
      "p==head"
    ],
    "answer": "p->next==head",
    "explanation": "在头指针为 head的非空单向循环链表中，指针p指向尾结点，则p->next==head。参见教材P72。"
  },
  {
    "id": "datastructure_q161",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "一个栈的输入序列为1，2，3，…，n，若输出序列的第一个元素是n，则第i(1＜i≤n)个输出元素是（　）。",
    "options": [
      "n-i-1",
      "n-i+1",
      "n-i",
      "i"
    ],
    "answer": "n-i+1",
    "explanation": "出栈序列是入栈序列的逆序列，第i个输出元素是n-i+1。参见教材P101。"
  },
  {
    "id": "datastructure_q162",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "入栈序列是1，2，3，4，出栈序列是2，4，3，1，则栈的容量最小是（　）。",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": "3",
    "explanation": "在4入栈后，栈中有3个元素，这是栈含元素最多的时刻。所以栈的容量最小是3。参见教材P102。"
  },
  {
    "id": "datastructure_q163",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "已知循环队列存储在一维数组A[0...n-1]中，且队列非空时front和rear分别指向队头元素与队尾元素。若初始时队列为空，且要求第一个进入队列的元素存储在A[0]处，则初始时front和rear的值分别是（　）。",
    "options": [
      "0，0",
      "0，n-1",
      "n-1，0",
      "n-1，n-1"
    ],
    "answer": "0，n-1",
    "explanation": "初始时，front指向数组的第一个位置，rear指向数组的最后一个位置。参见教材P112。"
  },
  {
    "id": "datastructure_q164",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "广义表((a),a)的表头和表尾分别是（　）。",
    "options": [
      "a，((a))",
      "((a))，a",
      "(a)，a",
      "(a)，(a)"
    ],
    "answer": "(a)，(a)",
    "explanation": "第一个元素称为LS的表头，其余元素组成的表称为LS的表尾。参见教材P153。"
  },
  {
    "id": "datastructure_q165",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "设有两个串p和q，其中q是p的子串，求q在p中首次出现的位置的运算称为（　）。",
    "options": [
      "模式匹配",
      "联接",
      "求子串",
      "求串长"
    ],
    "answer": "模式匹配",
    "explanation": "在主串中寻找子串(第一个字符)在主串中的位置，称为串的模式匹配。参见教材P155。"
  },
  {
    "id": "datastructure_q166",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "若一棵二叉树中度为1的结点个数是3，度为2的结点个数是4，则该二叉树叶子结点的个数是（　）。",
    "options": [
      "4",
      "5",
      "7",
      "8"
    ],
    "answer": "5",
    "explanation": "对任何非空二叉树T，设n0是叶结点的个数，n2是度为2的结点的个数，则有n0 = n2+1，代入得4+1=5。参见教材P168。"
  },
  {
    "id": "datastructure_q167",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "求带权图单源最短路径的算法称为（　）。",
    "options": [
      "迪杰斯特拉（Dijkstra）算法",
      "克鲁斯卡尔（Kruskal）算法",
      "普里姆（Prim）算法",
      "广度优先搜索算法"
    ],
    "answer": "迪杰斯特拉（Dijkstra）算法",
    "explanation": "求带权图单源最短路娃的算法称为迪杰斯特拉（Dijkstra）算法。参见教材P247。"
  },
  {
    "id": "datastructure_q168",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "平均时间复杂度为O(nlogn)的稳定排序算法是（　）。",
    "options": [
      "快速排序",
      "堆排序",
      "归并排序",
      "冒泡排序"
    ],
    "answer": "归并排序",
    "explanation": "平均时间复杂度为O(nlogn)且稳定的排序算法是归并排序。参见教材P290。"
  },
  {
    "id": "datastructure_q169",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "分块查找方法将表分为多块，并要求（　）。",
    "options": [
      "块内有序",
      "各块等长",
      "块间有序",
      "链式存储"
    ],
    "answer": "块间有序",
    "explanation": "分块查找时，每块中的值可以有序，也可以无序，但块与块之间必须有序。参见教材P303。"
  },
  {
    "id": "datastructure_q170",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "下列关键字序列中，构成大根堆的是（　）。",
    "options": [
      "5，8，1，3，9，6，2，7",
      "9，8，1，7，5，6，2，3",
      "9，8，6，3，5，1，2，7",
      "9，8，6，7，5，1，2，3"
    ],
    "answer": "9，8，6，7，5，1，2，3",
    "explanation": "任何一个分支结点的值都不小于它的子结点的值，这样的堆称为最大堆或大根堆。参见教材P184。"
  },
  {
    "id": "datastructure_q171",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "世界著名计算机科学家（　）的巨著《计算机程序设计艺术》，为数据结构奠定了理论基础。",
    "options": [
      "高德纳",
      "N.沃思",
      "图灵",
      "冯・诺依曼"
    ],
    "answer": "高德纳",
    "explanation": "世界著名计算机科学家高德纳教授的巨著《计算机程序设计艺术》，全面系统地论述相关内容并为数据结构奠定理论基础。参见教材P32。"
  },
  {
    "id": "datastructure_q172",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "下列属于抽象数据类型(ADT)特点的是（　）。",
    "options": [
      "必须明确数据元素的存储方式和操作实现细节",
      "是程序设计语言中已有的基本类型",
      "定义包括类型名字及对操作的刻画，明确“做什么”，不涉及“如何做”",
      "只能用于保存线性结构数据"
    ],
    "answer": "定义包括类型名字及对操作的刻画，明确“做什么”，不涉及“如何做”",
    "explanation": "抽象数据类型的定义包括类型的名字及对各个操作的刻画，明确“做什么”，尚未明确数据元素存储方式和操作实现细节（实现环节才处理“如何做”）；A选项说必须明确存储和实现细节，错误；B选项抽象数据类型通常是程序设计语言中没有提供的类型，不是已有基本类型；D选项抽象数据类型可用于多种结构，并非只线性结构，所以选C。参见教材P36。"
  },
  {
    "id": "datastructure_q173",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "数据结构中，逻辑结构不包括以下哪种（　）。",
    "options": [
      "集合",
      "线性结构",
      "树结构",
      "顺序结构"
    ],
    "answer": "顺序结构",
    "explanation": "从逻辑角度来看，基本的数据结构包括4类，分别是集合、线性结构、树结构和图结构。参见教材P34。"
  },
  {
    "id": "datastructure_q174",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "关于线性结构的描述，正确的是（　）。",
    "options": [
      "元素之间没有次序关系",
      "每个元素的直接前驱和直接后继都一定存在",
      "第一个元素有直接前驱，最后一个元素有直接后继",
      "数据元素之间存在先后次序关系，每个元素（除首尾）有唯一直接前驱和直接后继"
    ],
    "answer": "数据元素之间存在先后次序关系，每个元素（除首尾）有唯一直接前驱和直接后继",
    "explanation": "线性结构数据元素之间存在先后次序关系，除第一个元素无直接前驱、最后一个元素无直接后继外，每个元素有唯一直接前驱和直接后继；A选项说元素间无次序关系错误，是集合的特点；B选项说每个元素直接前驱和后继都一定存在错误；C选项首尾元素的描述错误，所以选D。参见教材P34。"
  },
  {
    "id": "datastructure_q175",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "树结构属于（　）结构。",
    "options": [
      "线性",
      "非线性",
      "集合",
      "图"
    ],
    "answer": "非线性",
    "explanation": "树结构中数据元素按层排列，元素间是一对多关系，属于非线性结构。参见教材P34。"
  },
  {
    "id": "datastructure_q176",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "下列关于顺序存储结构的说法，正确的是（　）。",
    "options": [
      "逻辑上相邻的数据元素，物理位置一定不相邻",
      "借助指针指示数据元素间逻辑关系",
      "逻辑上相邻的数据元素，存储到物理位置相邻的存储单元中",
      "一定比链式存储结构节省存储空间"
    ],
    "answer": "逻辑上相邻的数据元素，存储到物理位置相邻的存储单元中",
    "explanation": "顺序存储结构是逻辑上相邻的数据元素，存储到物理位置相邻的存储单元中；A选项说物理位置一定不相邻，错误，这是链式存储可能的情况；B选项借助指针是链式存储的特点；D选项说一定比链式节省存储空间错误，要视具体情况，所以选C。参见教材P35。"
  },
  {
    "id": "datastructure_q177",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "数据元素是构成数据的基本单位，以下关于数据元素说法错误的是（　）。",
    "options": [
      "可大可小，大到一幅地图，小到一个字符甚至1位（bit）",
      "不能再细分为数据项",
      "例如保存学生信息时，一条学生记录可看作一个数据元素",
      "数据元素之间的相互关系构成结构"
    ],
    "answer": "不能再细分为数据项",
    "explanation": "数据元素可以细分为数据项，比如学生记录中的学号、姓名等是数据项；A选项符合文中对数据元素大小的描述；C选项以学生记录为例说明数据元素正确；D选项数据元素间关系构成结构正确，所以选B。参见教材P32。"
  },
  {
    "id": "datastructure_q178",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "下列属于数据的是（　）。",
    "options": [
      "仅整数和实数",
      "源程序、文档、地图、照片、歌曲、视频等",
      "只能是程序设计语言能处理的数值",
      "不包括字符和图像"
    ],
    "answer": "源程序、文档、地图、照片、歌曲、视频等",
    "explanation": "数据是指所有能输入计算机并被计算机程序处理的符号的集合，源程序、文档、地图、照片、歌曲、视频等都可视为数据，A、C、D选项对数据的范围描述过窄，所以选B。参见教材P32。"
  },
  {
    "id": "datastructure_q179",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "关于抽象数据类型与数据类型的关系，正确的是（　）。",
    "options": [
      "抽象数据类型就是程序设计语言中的基本数据类型",
      "数据类型是类型加上对该类型数据的一组操作，抽象数据类型是其扩展，定义时不涉及实现细节",
      "抽象数据类型必须明确数据的存储和操作实现",
      "数据类型不能再分解，抽象数据类型可以再分解"
    ],
    "answer": "数据类型是类型加上对该类型数据的一组操作，抽象数据类型是其扩展，定义时不涉及实现细节",
    "explanation": "数据类型是类型加上允许对该类型数据进行的一组操作，抽象数据类型是定义抽象意义下的类型及相关操作，定义时不涉及存储和实现细节（实现环节处理）；A选项抽象数据类型通常不是程序设计语言已有基本类型；C选项抽象数据类型定义时不明确存储和实现，错误；D选项原子类型不可再分解，结构类型和抽象数据类型等相关概念与该表述不符，所以选B。参见教材P36。"
  },
  {
    "id": "datastructure_q180",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "集合结构的特点是（　）。",
    "options": [
      "元素之间存在一对一关系",
      "元素之间存在一对多关系",
      "元素之间没有次序关系，涉及元素与集合、集合与集合的操作",
      "元素之间有先后次序关系"
    ],
    "answer": "元素之间没有次序关系，涉及元素与集合、集合与集合的操作",
    "explanation": "集合中各元素之间没有次序关系，涉及元素与集合（如加入、删除、判定是否属于等）、集合与集合（如并集、交集、补集等）的操作；A选项是线性结构特点；B选项是树结构特点；D选项是线性结构特点，所以选C。参见教材P34。"
  },
  {
    "id": "datastructure_q181",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "关于算法的基本概念，下列说法错误的是（　）。",
    "options": [
      "算法在计算机出现前就已存在，如欧几里得算法",
      "算法必须由确定的、可执行步骤组成且能终止",
      "算法只能用计算机程序设计语言描述",
      "算法可以没有输入，但必须有输出"
    ],
    "answer": "算法只能用计算机程序设计语言描述",
    "explanation": "算法的描述方式多样，可使用自然语言、计算机程序设计语言，也可混合使用（如伪代码），并非只能用程序设计语言；A选项欧几里得算法确实早于计算机存在；B选项符合算法“由确定、可执行步骤组成且能终止”的定义；D选项算法可以无输入但必有输出，所以选C。参见教材P37。"
  },
  {
    "id": "datastructure_q182",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "以下不属于算法特性的是（　）。",
    "options": [
      "有穷性",
      "不确定性",
      "可行性",
      "有输出"
    ],
    "answer": "不确定性",
    "explanation": "算法的特性包括输入、输出、有穷性、确定性、可行性；不确定性不符合算法“每一步必须有确切含义”的要求，所以选B。参见教材P38。"
  },
  {
    "id": "datastructure_q183",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "衡量算法效率时，不适合作为指标的是（　）。",
    "options": [
      "程序运行的绝对时间",
      "屏蔽计算机差异后，算法执行的机器指令个数",
      "统计程序执行期间需执行的语句总数（屏蔽语句差异）",
      "用增长函数T(n)表示算法时间效率，突出算法自身特点"
    ],
    "answer": "程序运行的绝对时间",
    "explanation": "程序运行绝对时间受计算机主频、系统等差异影响，不能突出算法自身特点，不适合作为衡量算法效率的指标；B、C、D选项都是为屏蔽计算机差异、突出算法特点而采用的合理衡量方式，所以选A。参见教材P39。"
  },
  {
    "id": "datastructure_q184",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "关于算法与程序的关系，正确的是（　）。",
    "options": [
      "算法就是程序，程序就是算法",
      "程序是算法的具体实现，同一算法只能有一种程序形式",
      "程序使用程序设计语言描述数据表示并展现算法，同一算法可有不同程序形式",
      "算法规定程序的执行步骤，程序与算法无关"
    ],
    "answer": "程序使用程序设计语言描述数据表示并展现算法，同一算法可有不同程序形式",
    "explanation": "程序是算法的体现，用程序设计语言描述数据并展现算法，同一算法因编程语言、实现细节不同可有不同程序形式；A选项算法和程序概念不同，不能等同；B选项同一算法不是只能一种程序形式；D选项算法决定程序执行步骤，程序与算法密切相关，所以选C。参见教材P37。"
  },
  {
    "id": "datastructure_q185",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "顺序表分配数组空间时，以下考虑合理的是（　）。",
    "options": [
      "随意分配很小的数组空间，不够再扩容",
      "只根据当前线性表元素个数分配，不考虑后续插入",
      "依据线性表可能包含的最大元素个数分配，兼顾空间利用率和后续操作",
      "分配极大数组空间，保证绝对不会占满"
    ],
    "answer": "依据线性表可能包含的最大元素个数分配，兼顾空间利用率和后续操作",
    "explanation": "应根据线性表可能的最大元素个数分配数组，这样能在保证保存当前元素同时，为插入预留空间，兼顾空间利用率（预留过大空间利用率低，过小易满）；A选项随意分配小空间，后续可能无法插入；B选项不考虑后续插入不合理；D选项分配极大空间会降低存储效率，所以选C。参见教材P53。"
  },
  {
    "id": "datastructure_q186",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "顺序表中，在表头插入新元素时，元素移动情况是（　）。",
    "options": [
      "无需移动元素",
      "仅移动新插入元素",
      "表中当前所有元素都向表尾方向移动一个位置",
      "表中当前所有元素都向表头方向移动一个位置"
    ],
    "answer": "表中当前所有元素都向表尾方向移动一个位置",
    "explanation": "在顺序表表头插入新元素，为腾出空间，表中当前所有元素需向表尾方向移动一个位置；A选项无需移动错误；B选项只移动新元素无法腾出表头空间；D选项向表头方向移动会覆盖元素，错误，所以选C。参见教材P55。"
  },
  {
    "id": "datastructure_q187",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "顺序表的显著特点是（　）。",
    "options": [
      "元素存储地址一定不相邻",
      "元素存储地址与逻辑相邻性无关",
      "线性表逻辑相邻元素，存储地址必然相邻",
      "元素只能保存在动态分配的内存中"
    ],
    "answer": "线性表逻辑相邻元素，存储地址必然相邻",
    "explanation": "顺序表用数组顺序存储，线性表逻辑相邻元素对应数组相邻单元，存储地址必然相邻，这是其显著特点；A、B选项与顺序表存储特点相悖；D选项顺序表元素存在数组（可静态或动态分配等），不是只能动态分配，所以选C。参见教材P53。"
  },
  {
    "id": "datastructure_q188",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "要保存一个线性表为顺序表，需考虑的关键因素不包括（　）。",
    "options": [
      "分配数组的大小（依据元素最大可能个数）",
      "记录顺序表当前长度的整型变量",
      "线性表元素的具体内容（如元素是整数还是字符串）",
      "保证数组中元素依次相邻存放，以体现顺序表逻辑相邻特点"
    ],
    "answer": "线性表元素的具体内容（如元素是整数还是字符串）",
    "explanation": "保存顺序表需考虑分配数组大小（基于元素最大个数）、记录当前长度的变量、保证元素依次相邻存放体现逻辑相邻；元素具体内容不影响顺序表的存储实现方式（顺序表关注存储结构和操作，不是元素内容），所以选C。参见教材P53。"
  },
  {
    "id": "datastructure_q189",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "双端队列的特点是（　）。",
    "options": [
      "只能在一端入队和出队",
      "两端都可进行入队和出队操作，无队头队尾之分",
      "只能模拟队列，不能模拟栈",
      "入队出队只能在队尾进行"
    ],
    "answer": "两端都可进行入队和出队操作，无队头队尾之分",
    "explanation": "双端队列两端都能入队和出队，不再严格分队头队尾；A选项“只能在一端”错误，双端队列两端都行；C选项它既能模拟队列也能模拟栈（同一端入队出队可模拟栈）；D选项“只能在队尾”错误，两端都可，所以选B。参见教材P118。"
  },
  {
    "id": "datastructure_q190",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "关于双端队列与普通队列、栈的关系，说法正确的是（　）。",
    "options": [
      "双端队列完全等同于普通队列，功能无差异",
      "双端队列只能模拟栈，不能模拟普通队列",
      "双端队列同一端入队出队操作时，可模拟栈（后进先出）特性",
      "双端队列无法体现队列先进先出特性"
    ],
    "answer": "双端队列同一端入队出队操作时，可模拟栈（后进先出）特性",
    "explanation": "双端队列同一端进行入队和出队操作时，符合栈后进先出的特性（比如一端进一端出是队列，同一端进、同一端出就类似栈）；A选项双端队列功能更灵活，不等同普通队列；B选项它也能模拟普通队列（两端分别进出）；D选项双端队列两端分别进出时可体现队列先进先出，错误，所以选C。参见教材P118。"
  },
  {
    "id": "datastructure_q191",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "邮局排队情形中，“你”填完表再回到队头，相当于双端队列的（　）操作。",
    "options": [
      "在队头入队",
      "在队尾入队",
      "在队头出队",
      "在队尾出队"
    ],
    "answer": "在队头入队",
    "explanation": "邮局排队时“你”填完表回到队头，是在队头位置重新入队，让柜员接着服务。参见教材P118。"
  },
  {
    "id": "datastructure_q192",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "输入受限的双端队列是指（　）。",
    "options": [
      "两端都不能入队，只能出队",
      "一端仅允许入队，另一端既允许入队又允许出队",
      "两端都仅允许入队，不能出队",
      "一端仅允许出队，另一端既允许入队又允许出队"
    ],
    "answer": "一端仅允许入队，另一端既允许入队又允许出队",
    "explanation": "输入受限双端队列是其中一端仅允许入队，另一端既可以入队也可以出队；A选项两端都不能入队无法操作；C选项两端仅入队不能出队不符合“队列”有出队的逻辑；D选项描述的是输出受限双端队列（一端仅出队，另一端可入可出），所以选B。参见教材P118。"
  },
  {
    "id": "datastructure_q193",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "在树中，“兄弟结点”指的是（　）。​",
    "options": [
      "具有同一子结点的两个结点​",
      "父结点相同的两个结点​",
      "位于同一层次的两个结点​",
      "根结点的所有子结点​"
    ],
    "answer": "父结点相同的两个结点​",
    "explanation": "具有同一父结点的结点是兄弟结点，A、C、D均不严谨（如根结点的子结点是兄弟，但兄弟结点不一定都是根的子结点），故选B。参见教材P164。"
  },
  {
    "id": "datastructure_q194",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "双端队列画成水平方式时，常标记的两端名称可以是（　）。",
    "options": [
      "左端和右端",
      "队头和队尾",
      "上端和下端",
      "首端和尾端"
    ],
    "answer": "左端和右端",
    "explanation": "双端队列画成水平方式时，可将两端称为左端及右端；B选项队头队尾是普通队列的叫法，双端队列不严格这样区分两端（它两端都可进出）；C选项是画成垂直方式时的叫法；D选项不是文中提及的双端队列水平方式常用标记，所以选A。参见教材P118。"
  },
  {
    "id": "datastructure_q195",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "树的定义中，包含n个结点的树具有的边数是（　）。​",
    "options": [
      "n条​",
      "n-1条​",
      "n+1条​",
      "不确定，与树的结构有关​"
    ],
    "answer": "n-1条​",
    "explanation": "包含n个结点的树有且仅有n-1条边，这是树的重要特性，与结构无关，故选B。​参见教材P164。"
  },
  {
    "id": "datastructure_q196",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "树中“结点的度”指的是（　）。​",
    "options": [
      "结点所在的层次​",
      "结点拥有的子树个数（即子结点个数）​",
      "结点到根结点的路径长度​",
      "结点的子孙结点总数​"
    ],
    "answer": "结点拥有的子树个数（即子结点个数）​",
    "explanation": "树中每个结点拥有的子树的个数称为结点的度，实际上是子结点的个数，A、C、D均不符合定义，故选B。​参见教材P165。"
  },
  {
    "id": "datastructure_q197",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "以下关于叶结点的说法正确的是（　）​。",
    "options": [
      "度为0的结点（无子女结点）​",
      "度不为0的结点​",
      "仅根结点可能是叶结点​",
      "位于树的最底层的结点一定是叶结点​"
    ],
    "answer": "度为0的结点（无子女结点）​",
    "explanation": "度为0的结点称为叶结点（终端结点），B是分支结点的定义；C错误，单结点树的根是叶结点，但多结点树的根通常是分支结点；D错误，最底层结点若有度（如有子结点）则不是叶结点，故选A。​参见教材P165。"
  },
  {
    "id": "datastructure_q198",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "二叉树与树的主要区别不包括（　）​。",
    "options": [
      "二叉树允许为空树，树至少含一个结点​",
      "二叉树中结点的子结点有左、右次序，树的子结点（非有序树）无次序​",
      "二叉树的结点度最大值为2，树的度无此限制​",
      "二叉树是树的特殊子集（所有二叉树都是树）​"
    ],
    "answer": "二叉树是树的特殊子集（所有二叉树都是树）​",
    "explanation": "二叉树不是树的真子集（如空二叉树不是树），A、B、C均是两者的区别，故选D。​参见教材P166。"
  },
  {
    "id": "datastructure_q199",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "在二叉树中，若某结点只有一个子结点，则该子结点（　）​。",
    "options": [
      "只能是左子结点​",
      "只能是右子结点​",
      "可以是左子结点或右子结点（对应不同二叉树）​",
      "没有左、右之分，与树的单子女结点相同​"
    ],
    "answer": "可以是左子结点或右子结点（对应不同二叉树）​",
    "explanation": "二叉树中“单个子结点可以是左或右子结点，对应两种不同树形”，而树的单子女结点无此区分，故选C。​参见教材P167。"
  },
  {
    "id": "datastructure_q200",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "single_choice",
    "text": "树的度是指（　）​。",
    "options": [
      "根结点的度​",
      "叶结点的度​",
      "树中所有结点度的最小值​",
      "树中所有结点度的最大值​"
    ],
    "answer": "树中所有结点度的最大值​",
    "explanation": "树中结点的度的最大值称为树的度，A、B、C均不符合定义，故选D。参见教材P165。"
  },
  {
    "id": "datastructure_q201",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "short_answer",
    "text": "设二维数组A[5][6]的每个元素占4个字节，已知数组首地址为1000，A共占多少个字节？分别按行和列优先存储时，A[2][5]的起始地址分别为多少？",
    "answer": "二维数组的总元素个数 = 行数 × 列数 = 5 × 6 = 30 个。每个元素占 4 个字节，因此A总字节数 = 30 × 4 = 120 字节。按行优先存储：A[i][j]的起始地址 = 首地址 + (i × 列数 + j) × 每个元素字节数代入数据得：1000 + (2 × 6 + 5) × 4 =1068按列优先存储：A[i][j]的起始地址 = 首地址 + (j × 行数 + i) × 每个元素字节数代入数据得：1000 + (5 × 5 + 2) × 4 =1108所以，行优先存储时 A [2][5] 的起始地址是1068，列优先存储时 A [2][5] 的起始地址是1108。",
    "explanation": "参见教材P144。"
  },
  {
    "id": "datastructure_q202",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "short_answer",
    "text": "含有n个顶点的连通图G的最小生成树有哪些性质？",
    "answer": "（1）它含有图G中所有的n个顶点。（2）它没有回路，因为从构成回路的各边中去掉一条边，仍能保证其连通性，而所得的权值总和可以进一步减少。（3）它含有的边数为n-1。（4）去掉最小生成树中的一条边，换上不在最小生成树中的另外一条边，在仍要求图连通的前提下，所得的权值总和都不会小于原最小生成树的权值总和。",
    "explanation": "参见教材P228。"
  },
  {
    "id": "datastructure_q203",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "short_answer",
    "text": "设5个元素1、2、3、4、5依次入栈，以push(x)表示x入栈，pop(x)表示x出栈，写出得到出栈序列 2、1、4、3、5 的操作过程。",
    "answer": "操作过程为:push(1)，push(2)，pop(2)，pop(1)，push(3)，push(4)，pop(4)，pop(3)，push(5)，pop(5)。为了让元素2第一个出栈，必须让元素1、2依次入栈，此时栈顶是2，出栈后得到2。接下来，要得到元素1，此时栈顶正好是元素1，出栈。现在，为空栈，目前得到的部分出栈序列是2,1。剩余的入栈序列是3,4,5，要得到的出栈序列是4,3,5。类似于前面得到出栈序列2,1的过程，为了得到元素4，必须要将元素3和4均入栈，栈顶为4，出栈。然后栈顶3再出栈。最后，元素5入栈再出栈。元素全部处理完毕。",
    "explanation": "参见教材P100。"
  },
  {
    "id": "datastructure_q204",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "short_answer",
    "text": "二叉查找树具有什么特点？",
    "answer": "（1）节点值的有序性：每个节点的值大于其左子树中任意节点的值。每个节点的值小于其右子树中任意节点的值。（2）唯一性：通常情况下，二叉查找树中的节点值是唯一的，即没有重复的值。（3）动态性：二叉查找树支持高效的插入、删除和查找操作。这些操作的时间复杂度在平均情况下为O(log n)，但在最坏情况下（树退化成链表）为O(n)。（4）中序遍历：中序遍历（左子树 -> 根节点 -> 右子树）会按升序访问所有节点。（5）子树特性：左子树和右子树也都是二叉查找树。",
    "explanation": "参见教材P305。"
  },
  {
    "id": "datastructure_q205",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "short_answer",
    "text": "在4阶B树中，每个结点所含子树个数的上下限分别是多少？",
    "answer": "（1）根结点的子树数：根结点至少有2棵子树（除非它是叶子结点）。根结点最多可以有m棵子树（m为阶数）。（2）非根结点的子树数：每个非根结点至少有⌈m/2⌉棵子树，最多有m棵子树。对于4阶B树：阶数m=4。根结点的子树数：最小子树数：根结点至少有2棵子树（除非它是叶子结点）。最大子树数：根结点最多可以有4棵子树。非根结点的子树数：最小子树数：每个非根结点至少有⌈4/2⌉=2棵子树。最大子树数：每个非根结点最多可以有4棵子树。在4阶B树中，每个结点所含子树个数的上下限分别是 2 和 4。",
    "explanation": "参见教材P317。"
  },
  {
    "id": "datastructure_q206",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "short_answer",
    "text": "已知有向图 G = （V，E），其中 V= { v1,，v2，v3，v4，v5，v6，v7}，E = {（v1,v2）, （v1,v3）,（v1,v4），（v2,v5），（v3,v5），（v3,v6），（v4,v6），（v5,v7），（v6,v7）}，求G的拓扑序列。",
    "answer": "初始状态:入度为0的顶点有 v1，选择 v1 插入序列，更新邻接顶点入度。更新后:入度为0的顶点有 v3 和 v4，选择 v3 插入序列，更新邻接顶点入度。更新后:入度为0的顶点有 v4 和 v6，选择 v4 插入序列，更新邻接顶点入度。更新后:入度为0的顶点有 v6，选择 v6 插入序列，更新邻接顶点入度。更新后:入度为0的顶点有 v2 和 v5，选择 v2 插入序列，更新邻接顶点入度。更新后:入度为0的顶点有 v5 和 v7，选择 v5 插入序列，更新邻接顶点入度。更新后:入度为0的顶点有 v7，选择 v7 插入序列。最终得到的拓扑序列为: v1,v3,v4,v6,v2,v5,v7。",
    "explanation": "参见教材P239。"
  },
  {
    "id": "datastructure_q207",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "short_answer",
    "text": "带权图中的权值可以表示什么含义？举例说明。",
    "answer": "（1）权值表示两个顶点之间的物理距离。在一个城市交通网络中，顶点代表不同的地点（如公交站、地铁站），边上的权值表示两个地点之间的实际距离。（2） 权值表示从一个顶点到另一个顶点的成本或费用。在一个物流配送网络中，顶点代表不同的仓库或配送点，边上的权值表示从一个仓库到另一个仓库的运输成本。（3） 权值表示从一个顶点到另一个顶点所需的时间。在一个航班网络中，顶点代表不同的机场，边上的权值表示从一个机场飞往另一个机场所需的飞行时间。（4）权值表示边的最大容量或流量。在一个通信网络中，顶点代表不同的节点（如路由器、交换机），边上的权值表示从一个节点到另一个节点的最大数据传输速率。",
    "explanation": "参见教材P246。"
  },
  {
    "id": "datastructure_q208",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "short_answer",
    "text": "已知一棵二叉树T，如果知道T的先序遍历序列和层序遍历序列，是否可以唯一还原T?为什么？",
    "answer": "可以唯一还原这棵树。原因：（1） 根节点的确定：先序遍历的第一个节点就是树的根节点。（2）子树的划分：通过先序遍历，可以确定根节点的左子树和右子树的节点集合。（3） 层次结构的确定：通过层序遍历，可以确定每个节点在树中的层次位置，从而进一步确定左子树和右子树的具体结构。",
    "explanation": "参见教材P179。"
  },
  {
    "id": "datastructure_q209",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "short_answer",
    "text": "构造一个广义表，要求其表头和表尾相等。",
    "answer": "若需构造一个表头和表尾相等的广义表，即需设计一个广义表，其首个元素（表头）与其余部分（表尾）在结构上保持一致。由于表尾本质上是一个广义表的列表，这意味着表头也必须是一个广义表，以便与表尾在结构上相匹配。以下是一个简单的实例，满足表头和表尾相等的条件：G=((),(()))。 在这个例子中：表头 G.head 是 ()，它是一个空广义表。表尾 G.tail 是 ((()))，这是一个包含一个元素的列表，且该元素也是一个空广义表 ()。显然，这里的表头和表尾都是空广义表，因此它们在结构上是一致的。",
    "explanation": "参见教材P153。"
  },
  {
    "id": "datastructure_q210",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "short_answer",
    "text": "已知广义表 LS=((a)，((b,(c))，(d,(e,f)))，())，LS 的深度是多少。",
    "answer": "分析每个顶层元素的深度： （1）第一个元素 ( (a) )：内部结构为 ( a )，深度为 1。 （2） 第二个元素 ( ((b, (c)),(d, (e, f))) )： 第一个子元素 ( (b, (c)) )：内部结构为 ( b ) 和 ( (c) )，深度为 2。 第二个子元素 ( (d, (e, f)) )：内部结构为 ( d ) 和 ( (e, f) )，深度为 2。 因此，这个元素的深度为 3。 （3） 第三个元素 ( () )：空列表，深度为 1。 确定最大深度： 第一个元素的深度为 1。 第二个元素的深度为 3。 第三个元素的深度为 1。 因此，广义表 ( LS ) 的最大深度为 3。",
    "explanation": "参见教材P153。"
  },
  {
    "id": "datastructure_q211",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "short_answer",
    "text": "若将两个栈存入数组V[0...m-1]中，那么如何安排最好？这时栈空、栈满的条件分别是什么？",
    "answer": "为了确保两个栈不会互相干扰，通常采用“双端栈”的方式，即一个栈从数组的一端开始增长，另一个栈从另一端开始增长。栈1：从数组的起始位置（下标0）开始增长。栈2：从数组的末尾位置（下标m-1）开始增长。（1） 栈1空：top1 == -1，当栈1的栈顶指针为-1时，表示栈1为空。（2） 栈2空：top2 == m，当栈2的栈顶指针为m时，表示栈2为空。（3） 栈1满：top1 + 1 == top2，当栈1的栈顶指针的下一个位置等于栈2的栈顶指针时，表示栈1已满。（4）栈2满：top2 - 1 == top1，当栈2的栈顶指针的前一个位置等于栈1的栈顶指针时，表示栈2已满。",
    "explanation": "参见教材P124-P134。"
  },
  {
    "id": "datastructure_q212",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "short_answer",
    "text": "已知大小为10的循环队列Q，其头指针和尾指针分别为2与6，当Q的头指针和尾指针变为6与2时，入队的元素个数至少是多少。",
    "answer": "（1） 初始状态下的队列情况：队列中有4个元素（从2到6之间的元素）。空闲位置有6个（从7到1，共6个位置）。（2） 变化过程：从头指针2到头指针6，表示4个元素被出队。从尾指针6到尾指针2，表示新的元素被入队到了2的位置。（3） 计算入队的元素个数：为了使尾指针从6移动到2，至少需要入队6个元素（因为队列是循环的，从6到2需要经过7、8、9、0、1、2这6个位置）。",
    "explanation": "参见教材P110-P117。"
  },
  {
    "id": "datastructure_q213",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "short_answer",
    "text": "在顺序存储的队列中，当队列的尾指针达到数组的末尾时，即使队列的头部还有空闲空间，也无法继续插入新元素，这种现象称为“假溢出”。简述顺序存储队列时假溢出的避免方法，以及队列满或空的条件。",
    "answer": "为了避免假溢出，可以使用循环队列。循环队列的思想是将队列的存储空间看作是一个首尾相接的圆环，而不是一个线性的数组。具体实现方法如下：使用模运算：当尾指针到达数组末尾时，通过模运算将其重新定位到数组的起始位置。队列状态的判断： 队列为空：当 front == rear 时，队列为空。队列满：通常有两种方法： 牺牲一个存储单元：将队列的实际容量设为数组长度减1。当 (rear + 1) % size == front 时，队列满。增加一个标记：使用一个额外的变量来标记队列的状态，例如使用一个布尔变量 isFull 来表示队列是否已满。",
    "explanation": "参见教材P114。"
  },
  {
    "id": "datastructure_q214",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "short_answer",
    "text": "已知线性表中一个元素占8字节，一个指针占2字节，数组的大小为20个元素。在顺序及链式两种存储方式中，线性表应该采用哪种方式保存？为什么？",
    "answer": "顺序存储： 总存储空间：20×8=160个字节。链式存储：总存储空间：20×10=200个字节。顺序存储方式更加合适，原因如下：（1） 存储空间更节省：顺序存储只需要160字节，而链式存储需要200字节。（2） 访问元素更快：顺序存储支持随机访问，时间复杂度为 O(1) ，而链式存储需要顺序访问，时间复杂度为 O(n)。（3） 固定大小的数组：由于数组大小固定为20个元素，不需要频繁进行动态扩展。",
    "explanation": "参见教材P76-P84。"
  },
  {
    "id": "datastructure_q215",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "short_answer",
    "text": "在评估算法的空间效率时，需要考虑哪些占用的存储空间？",
    "answer": "算法运行时需要存储输入和输出数据。这部分空间通常是固定的，取决于输入、输出数据的大小和类型。算法本身的代码也需要占用一定的存储空间，这部分空间通常较小且固定，但在嵌入式系统或资源受限的环境中，代码大小也是一个重要的考虑因素。算法运行过程中使用的临时变量、指针、数组等。这些变量的存储空间通常是动态的，取决于算法的具体实现和输入数据的大小。在评估算法的空间效率时还需要综合考虑其他方面存储需求。",
    "explanation": "参见教材P42。"
  },
  {
    "id": "datastructure_q216",
    "subjectId": "datastructure",
    "section": "practice",
    "type": "short_answer",
    "text": "为什么不使用算法的绝对运行时间来衡量算法的时间效率？",
    "answer": "不同的计算机硬件配置（如 CPU 速度、内存大小、磁盘 I/O 速度等）会导致同一算法在不同机器上的运行时间不同。这种依赖性使得绝对运行时间无法提供一个统一的、可比较的衡量标准。算法的运行时间通常会受到输入数据的影响。即使是同一个算法，在不同的输入数据集上，其运行时间也可能有很大差异。操作系统调度、资源竞争、缓存策略等因素也会影响算法的运行时间。",
    "explanation": "参见教材P38。"
  }
];
