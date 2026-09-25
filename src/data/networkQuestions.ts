import { Question } from './mockData';

export const networkQuestions: Question[] = [
  {
    "id": "net_sc_1",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "集中器的主要作用是（  ）。",
    "options": [
      "单独承担数据处理任务",
      "用多条低速线路连接主机，一条高速线路连接终端",
      "收集终端数据，通过高速线路与主机通信",
      "替代主机进行资源共享"
    ],
    "answer": "收集终端数据，通过高速线路与主机通信",
    "explanation": "集中器主要负责从终端到主机的数据集中，以及从主机到终端的数据分发，它可以放置于终端相对集中的位置，其一端用多条低速线路与各终端相连，收集终端的数据；另一端用一条较高速率的线路与主机相连，实现高速通信，以提高通信效率。故选C。参见教材P2。"
  },
  {
    "id": "net_sc_2",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "飞机订票系统（SABRE-I）属于（  ）。",
    "options": [
      "多计算机互联网络",
      "联机终端网络",
      "分组交换网络",
      "通信子网独立的网络"
    ],
    "answer": "联机终端网络",
    "explanation": "联机终端网络典型的范例是美国航空公司与IBM公司在20世纪50年代初开始联合研发、20世纪60年代初投入使用的飞机订票系统（SABRE-I）。故选B。参见教材P2。"
  },
  {
    "id": "net_sc_3",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "ARPANET的核心技术是（  ）。",
    "options": [
      "线路交换技术",
      "分组交换技术",
      "集中器技术",
      "单处理机联机技术"
    ],
    "answer": "分组交换技术",
    "explanation": "ARPANET的核心技术是分组交换技术，故选B。参见教材P4。"
  },
  {
    "id": "net_sc_4",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "计算机网络从逻辑功能上可分为（  ）。",
    "options": [
      "主机子网和终端子网",
      "资源子网和通信子网",
      "硬件子网和软件子网",
      "有线子网和无线子网"
    ],
    "answer": "资源子网和通信子网",
    "explanation": "典型的计算机网络从逻辑功能上可以分为资源子网和通信子网两部分，故选B。参见教材P7。"
  },
  {
    "id": "net_sc_5",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "资源子网的主要功能是（  ）。",
    "options": [
      "数据传输和转发",
      "全网的数据处理业务，提供网络资源与服务",
      "信号变换和编码",
      "管理通信线路"
    ],
    "answer": "全网的数据处理业务，提供网络资源与服务",
    "explanation": "资源子网负责全网的数据处理业务，并向网络用户提供各种网络资源与网络服务，故选B。参见教材P7。"
  },
  {
    "id": "net_sc_6",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "以下属于资源子网组成部分的是（  ）。",
    "options": [
      "通信控制处理机",
      "通信线路",
      "主机",
      "调制解调器"
    ],
    "answer": "主机",
    "explanation": "资源子网由主机、终端、终端控制器、联网外设、各种软件资源与信息资源组成。故选C。参见教材P7。"
  },
  {
    "id": "net_sc_7",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "通信控制处理机在通信子网中又被称为（  ）。",
    "options": [
      "主机",
      "网络节点",
      "终端控制器",
      "调制解调器"
    ],
    "answer": "网络节点",
    "explanation": "通信控制处理机在通信子网中又被称为网络节点，故选B。参见教材P8。"
  },
  {
    "id": "net_sc_8",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "网络协议软件的作用是（  ）。",
    "options": [
      "实现网络协议功能",
      "管理网络资源",
      "提供用户交互界面",
      "转换模拟信号和数字信号"
    ],
    "answer": "实现网络协议功能",
    "explanation": "网络协议软件实现网络协议功能，故选A。参见教材P9。"
  },
  {
    "id": "net_sc_9",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "以下属于计算机网络中数据交换和通信功能应用的是（  ）。",
    "options": [
      "共享高速打印机",
      "电子邮件（E-mail）",
      "利用巨型计算机进行复杂运算",
      "网络备份技术"
    ],
    "answer": "电子邮件（E-mail）",
    "explanation": "电子邮件（E-mail）可以使相隔万里的异地用户快速、准确地相互通信，属于数据交换和通信功能，故选B。A、C为资源共享，D为提高系统可靠性。参见教材P9。"
  },
  {
    "id": "net_sc_10",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "计算机网络组网的主要目标之一是（  ）。",
    "options": [
      "仅实现数据通信",
      "充分利用网络中的资源（硬件、软件和数据）",
      "提高单台计算机的运算速度",
      "减少计算机的数量"
    ],
    "answer": "充分利用网络中的资源（硬件、软件和数据）",
    "explanation": "充分利用计算机网络中提供的资源（包括硬件、软件和数据）是计算机网络组网的主要目标之一，故选B。参见教材P9。"
  },
  {
    "id": "net_sc_11",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "当网络中某台计算机任务负荷太重时，可采用的策略是（  ）。",
    "options": [
      "关闭该计算机",
      "将任务分散到网络中的其他计算机上",
      "限制其他计算机使用网络",
      "降低网络传输速率"
    ],
    "answer": "将任务分散到网络中的其他计算机上",
    "explanation": "对于大型的任务或当网络中某台计算机的任务负荷太重时，可将任务分散到网络中的其他计算机上进行，故选B。参见教材P9。"
  },
  {
    "id": "net_sc_12",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "在实时控制和高可靠性场合，计算机网络通过（  ）提高系统可靠性。",
    "options": [
      "增加计算机数量",
      "备份技术",
      "提高网络传输速率",
      "减少数据交换"
    ],
    "answer": "备份技术",
    "explanation": "在一些用于计算机实时控制和要求高可靠性的场合，通过计算机网络实现的备份技术可以提高计算机系统的可靠性。故选B。参见教材P9。"
  },
  {
    "id": "net_sc_13",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "局域网（LAN）的覆盖地理范围通常是（  ）。",
    "options": [
      "几米至10km",
      "10~100km",
      "几百千米到几千千米",
      "全球范围"
    ],
    "answer": "几米至10km",
    "explanation": "局域网所覆盖的地区范围较小，一般来说可以是几米至10km，故选A。参见教材P10。"
  },
  {
    "id": "net_sc_14",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "城域网（MAN）多采用的骨干网技术是（  ）。",
    "options": [
      "以太网",
      "ATM技术",
      "存储转发技术",
      "无线局域网技术"
    ],
    "answer": "ATM技术",
    "explanation": "城域网多采用ATM技术做骨干网，故选B。参见教材P10。"
  },
  {
    "id": "net_sc_15",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "世界上最大的广域网是（  ）。",
    "options": [
      "企业内部网",
      "城域网",
      "Internet",
      "专用网"
    ],
    "answer": "Internet",
    "explanation": "世界上最大的广域网是Internet，故选C。参见教材P10。"
  },
  {
    "id": "net_sc_16",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "广播式网络的特点是（  ）。",
    "options": [
      "有多条通信信道，各计算机独占信道",
      "仅有一条通信信道，所有计算机共享该信道",
      "计算机之间通过多条中间节点连接",
      "必须租用专线传输数据"
    ],
    "answer": "仅有一条通信信道，所有计算机共享该信道",
    "explanation": "广播式网络的特点是仅有一条通信信道，网络上的所有计算机都共享这个信道，故选B。参见教材P11。"
  },
  {
    "id": "net_sc_17",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "外联网为确保内部信息安全，需要建立（  ）。",
    "options": [
      "专用线路",
      "防火墙",
      "存储转发设备",
      "接口信息处理机"
    ],
    "answer": "防火墙",
    "explanation": "外联网必须建立防火墙把Internet与Intranet隔离开，以确保企业内部信息的安全，故选B。参见教材P12。"
  },
  {
    "id": "net_sc_18",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "总线型拓扑结构的特点是（  ）。",
    "options": [
      "以中央节点为中心连接外围节点",
      "节点连接成闭合环路，信号单向传输",
      "所有节点共享一条通信总线",
      "节点通过传输线互联，每个节点至少连接两个其他节点"
    ],
    "answer": "所有节点共享一条通信总线",
    "explanation": "总线型拓扑结构各个节点共用一个总线作为数据通路，故选C。A为星型，B为环型，D为网状型。参见教材P13。"
  },
  {
    "id": "net_sc_19",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "星型拓扑结构中，中央节点通常是（  ）。",
    "options": [
      "路由器",
      "交换机",
      "收发器",
      "总线"
    ],
    "answer": "交换机",
    "explanation": "星型拓扑结构通常以交换机作为中央节点，便于维护和管理。故选B。参见教材P13。"
  },
  {
    "id": "net_sc_20",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "树型拓扑结构的主要缺点是（  ）。",
    "options": [
      "信道利用率低",
      "整个网络对根节点依赖性大",
      "节点故障会导致整个网络瘫痪",
      "安装复杂，费用高"
    ],
    "answer": "整个网络对根节点依赖性大",
    "explanation": "树型拓扑结构缺点是整个网络对根的依赖性很大，一旦网络的“根”发生故障，整个系统就不能正常工作，故选B。C为环型缺点，D为网状型缺点。参见教材P13。"
  },
  {
    "id": "net_sc_21",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "环型拓扑结构中，为提高可靠性采用的措施是（  ）。",
    "options": [
      "增加中央节点",
      "采用双环结构",
      "减少节点数量",
      "使用双绞线作为传输介质"
    ],
    "answer": "采用双环结构",
    "explanation": "环型拓扑结构中，有些网络系统为了提高通信效率和可靠性，采用了双环结构，即在原有的单环上再套一个环，故选B。参见教材P13。"
  },
  {
    "id": "net_sc_22",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "制定开放系统互联标准的组织是（  ）。",
    "options": [
      "ITU",
      "ISO",
      "IEEE",
      "ANSI"
    ],
    "answer": "ISO",
    "explanation": "ISO制定了网络通信的标准，即开放系统互联（OSI），故选B。参见教材P14。"
  },
  {
    "id": "net_sc_23",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "信息一般通过（  ）来表示。",
    "options": [
      "信号",
      "信道",
      "数据",
      "波特率"
    ],
    "answer": "数据",
    "explanation": "信息一般用数据来表示，而表示信息的数据通常要被转变为信号才能进行传递，故选C。参见教材P17。"
  },
  {
    "id": "net_sc_24",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "数字信号在通信线路上传输时，通常用（  ）表示二进制代码。",
    "options": [
      "电流的连续变化",
      "电信号的两种状态",
      "频率的变化",
      "相位的变化"
    ],
    "answer": "电信号的两种状态",
    "explanation": "数字信号在通信线路上传输时要借助电信号的状态来表示二进制代码的值，电信号可呈现两种状态，分别表示为“0”和“1”，故选B。参见教材P17。"
  },
  {
    "id": "net_sc_25",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "曼彻斯特编码中，每个二进制位的中间有（  ）。",
    "options": [
      "电平保持不变",
      "电压跳变",
      "频率变化",
      "相位不变"
    ],
    "answer": "电压跳变",
    "explanation": "在曼彻斯特编码中，每个二进制位（码元）的中间都有电压跳变，故选B。参见教材P23。"
  },
  {
    "id": "net_sc_26",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "相移键控通过改变载波信号的（  ）值表示数字信号“0”和“1”。",
    "options": [
      "幅度",
      "频率",
      "相位",
      "周期"
    ],
    "answer": "相位",
    "explanation": "相移键控是通过改变载波信号的相位值表示数字信号“1”“0”，故选C。参见教材P22。"
  },
  {
    "id": "net_sc_27",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "脉冲编码调制的工作过程不包括（  ）。",
    "options": [
      "抽样",
      "量化",
      "编码",
      "调频"
    ],
    "answer": "调频",
    "explanation": "脉冲编码调制的工作过程包括抽样、量化和编码三部分，故选D。参见教材P24。"
  },
  {
    "id": "net_sc_28",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "电路交换又称为线路交换，它属于一种（  ）服务。",
    "options": [
      "无连接",
      "面向连接",
      "存储转发",
      "分组交换"
    ],
    "answer": "面向连接",
    "explanation": "电路交换又称为线路交换，是一种面向连接的服务。参见教材P26。"
  },
  {
    "id": "net_sc_29",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "下列交换方式中，多个用户的数据可以通过存储和排队共享一条线路的是（  ）。",
    "options": [
      "电路交换",
      "时分交换",
      "报文交换",
      "空分交换"
    ],
    "answer": "报文交换",
    "explanation": "报文交换采用存储-转发机制，不独占线路，多个用户的报文可通过排队共享线路资源，提高了线路利用率。参见教材P27。"
  },
  {
    "id": "net_sc_30",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "无线电广播属于（  ）数据传输方式。",
    "options": [
      "单工",
      "半双工",
      "全双工",
      "混合双工"
    ],
    "answer": "单工",
    "explanation": "单工数据传输指通信信道是单向信道，数据信号仅沿一个方向传输，发送方只能发送，不能接收；接收方只能接收，而不能发送，任何时候都不能改变信号传送方向。无线电广播和电视都属于单工通信。参见教材P31。"
  },
  {
    "id": "net_sc_31",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "下列传输方式需要调制器和解调器的是（  ）。",
    "options": [
      "基带传输",
      "宽带传输",
      "频带传输",
      "单工传输"
    ],
    "answer": "频带传输",
    "explanation": "所谓频带传输是指将数字信号调制成音频信号后再发送和传输，到达接收端时再把音频信号解调成原来的数字信号。可见，在采用频带传输方式时，要求发送端和接收端都要安装调制器和解调器。参见教材P32。"
  },
  {
    "id": "net_sc_32",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "时分复用（TDM）建立的基础是（  ）。",
    "options": [
      "频谱搬移技术",
      "抽样定理",
      "抗干扰保护措施",
      "载波调制技术"
    ],
    "answer": "抽样定理",
    "explanation": "时分多路复用建立在抽样定理基础上，因为抽样定理使连续的基带信号变成在时间上离散的抽样脉冲，故选B。参见教材P35。"
  },
  {
    "id": "net_sc_33",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "由传输介质电子热运动产生的噪声是（  ）。",
    "options": [
      "冲击噪声",
      "热噪声",
      "电磁干扰",
      "突发噪声"
    ],
    "answer": "热噪声",
    "explanation": "热噪声由传输介质的电子热运动产生。参见教材P40。"
  },
  {
    "id": "net_sc_34",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "奇偶校验码中，每个字符附加的校验位用于（  ）。",
    "options": [
      "提高传输速率",
      "检测传输差错",
      "增加数据保密性",
      "扩展信道带宽"
    ],
    "answer": "检测传输差错",
    "explanation": "根据采用的奇偶校验位是奇数还是偶数，推出一个字符包含“1”的数目，接收机重新计算收到字符的奇偶校验位，并确定该字符是否出现传输差错；若每个字符只采用一个奇偶校验位时，只能发现单个比特差错；如果有偶数个比特出错，奇偶校验位无效。参见教材P41。"
  },
  {
    "id": "net_sc_35",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "双绞线将绝缘铜导线互相缠绕的目的是（  ）。",
    "options": [
      "增加导线强度",
      "减少串扰及电磁干扰",
      "提高传输速率",
      "便于区分不同导线"
    ],
    "answer": "减少串扰及电磁干扰",
    "explanation": "双绞线由一对或多对绝缘铜导线组成，为了减少信号传输中串扰及电磁干扰的影响，通常将这些绝缘铜导线按一定的密度互相缠绕在一起，并且每根铜线加绝缘层用不同颜色来标记。参见教材P42。"
  },
  {
    "id": "net_sc_36",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "屏蔽双绞线主要适用于（  ）。",
    "options": [
      "家庭网络",
      "普通办公室网络",
      "安全性要求较高的网络环境",
      "传输距离极远的网络"
    ],
    "answer": "安全性要求较高的网络环境",
    "explanation": "屏蔽双绞线主要用于安全性要求较高的网络环境中，如军事网络和股票网络等，故选C。家庭和普通办公室网络多使用UTP，A、B错误；双绞线传输距离较短，D错误。参见教材P42。"
  },
  {
    "id": "net_sc_37",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "计算机网络体系结构采用的结构是（  ）。",
    "options": [
      "单层结构",
      "分层配对结构",
      "随机结构",
      "环形结构"
    ],
    "answer": "分层配对结构",
    "explanation": "计算机网络体系结构采用分层配对结构，定义和描述了一组用于计算机及其通信设施之间互联的标准和规范的集合。参见教材P49。"
  },
  {
    "id": "net_sc_38",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "网络体系结构中，相邻层之间通过（  ）交换信息。",
    "options": [
      "协议",
      "接口",
      "服务",
      "规则"
    ],
    "answer": "接口",
    "explanation": "相邻层通过它们之间的接口交换信息，高层并不需要知道低层是如何实现的，仅需要知道该层通过层间的接口所提供的服务，这样使得两层之间保持了功能的独立性。参见教材P50。"
  },
  {
    "id": "net_sc_39",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "协议中，确定数据与控制信息结构和格式的是（  ）。",
    "options": [
      "语法",
      "语义",
      "交换规则",
      "服务"
    ],
    "answer": "语法",
    "explanation": "语法的作用是确定协议元素的格式，即规定数据与控制信息的结构和格式，故选A。参见教材P50。"
  },
  {
    "id": "net_sc_40",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "OSI参考模型的最低层是（  ）。",
    "options": [
      "数据链路层",
      "网络层",
      "物理层",
      "应用层"
    ],
    "answer": "物理层",
    "explanation": "物理层是OSI模型的最低层，直接与物理信道相连，起到数据链路层和传输媒体之间逻辑接口的作用，提供建立、维护和释放物理连接的方法，并可实现在物理信道上进行比特流传输的功能。参见教材P53。"
  },
  {
    "id": "net_sc_41",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "下列属于数据链路层功能的是（  ）。",
    "options": [
      "提供网络应用服务",
      "比特流的传输",
      "物理地址寻址",
      "路由选择"
    ],
    "answer": "物理地址寻址",
    "explanation": "数据链路层需在数据帧中的头部加入源节点和目的节点的物理地址，即物理地址寻址，A是应用层功能，B是物理层功能，D是网络层功能，故选C。参见教材P55。"
  },
  {
    "id": "net_sc_42",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "媒体访问控制技术属于（  ）的功能。",
    "options": [
      "物理层",
      "数据链路层",
      "网络层",
      "传输层"
    ],
    "answer": "数据链路层",
    "explanation": "接入控制技术也称为媒体访问控制技术，而接入控制是数据链路层的功能，故选B。参见教材P56。"
  },
  {
    "id": "net_sc_43",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "TCP/IP体系结构中，与OSI数据链路层和物理层相当的是（  ）。",
    "options": [
      "网际层",
      "传输层",
      "网络接口层",
      "应用层"
    ],
    "answer": "网络接口层",
    "explanation": "TCP/IP与各种网络的接口称为网络接口层，与OSI数据链路层和物理层相当，是最底层的网络协议软件。参见教材P63。"
  },
  {
    "id": "net_sc_44",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "TCP/IP体系结构中，位于互联网层之上的是（  ）。",
    "options": [
      "网络接口层",
      "传输层",
      "表示层",
      "会话层"
    ],
    "answer": "传输层",
    "explanation": "在TCP/IP体系结构中，位于互联网层之上的一层通常称为传输层，与OSI传榆层相当，它的功能是使源端和目标端主机上的对等实体进行会话。参见教材P63。"
  },
  {
    "id": "net_sc_45",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "关于可靠性保障，TCP/IP的观点是（  ）。",
    "options": [
      "所有层次都要检测和处理错误",
      "可靠性由网络层解决",
      "可靠性是端到端问题，由传输层解决",
      "由通信子网保障可靠性"
    ],
    "answer": "可靠性是端到端问题，由传输层解决",
    "explanation": "TCP/IP认为可靠性是端到端的问题，应该由传输层来解决，而OSI强调各层都处理错误，故选C。参见教材P64。"
  },
  {
    "id": "net_sc_46",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "下列属于ICMP协议功能的是（  ）。",
    "options": [
      "实现IP地址与MAC地址的转换",
      "处理差错报告和控制",
      "提供可靠的字节流传输",
      "自动配置IP地址"
    ],
    "answer": "处理差错报告和控制",
    "explanation": "ICMP专门处理差错报告和控制，能由出错设备向源设备发送出错或控制报文。A是ARP的功能，C是TCP的功能，D是DHCP的功能，故选B。参见教材P66。"
  },
  {
    "id": "net_sc_47",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "用于实现主机之间文件传送的协议是（  ）。",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "DNS"
    ],
    "answer": "FTP",
    "explanation": "FTP用来实现主机之间的文件传送，它采用C/S模式，使用TCP提供可靠的传输服务，是一种面向连接的协议。参见教材P67。"
  },
  {
    "id": "net_sc_48",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "IP地址由（  ）位二进制数组成。",
    "options": [
      "16",
      "32",
      "64",
      "128"
    ],
    "answer": "32",
    "explanation": "根据TCP/IP规定，IP地址由32bit组成，包括地址类别、网络号和主机号三个部分。参见教材P68。"
  },
  {
    "id": "net_sc_49",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "A类IP地址的第一字节第1位是（  ）。",
    "options": [
      "0",
      "10",
      "110",
      "1110"
    ],
    "answer": "0",
    "explanation": "A类地址第一字节的第1位为“0”，B类是“10”，C类是“110”，D类是“1110”，故选A。参见教材P69。"
  },
  {
    "id": "net_sc_50",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "D类IP地址的用途是（  ）。",
    "options": [
      "分配给大型网络",
      "分配给中型网络",
      "用于多播",
      "为将来预留"
    ],
    "answer": "用于多播",
    "explanation": "D类地址用于多播，多播就是同时把数据发送给一组主机，故选C。A是A类地址用途，B是B类地址用途，D是E类地址用途。参见教材P70。"
  },
  {
    "id": "net_sc_51",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "以下不属于划分子网主要原因的是（  ）。",
    "options": [
      "充分使用IP地址",
      "划分管理职责",
      "增加IP地址的总数量",
      "提高网络性能"
    ],
    "answer": "增加IP地址的总数量",
    "explanation": "划分子网的原因包括充分使用地址、划分管理职责、提高网络性能，其目的是更高效地利用现有IP地址，而非增加总数量，故选C。参见教材P72。"
  },
  {
    "id": "net_sc_52",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "子网掩码的作用是（  ）。",
    "options": [
      "标识子网的物理地址",
      "区分IP地址中的网络号、子网号和主机号",
      "增加子网的数量",
      "改变IP地址的类别"
    ],
    "answer": "区分IP地址中的网络号、子网号和主机号",
    "explanation": "子网掩码用于定义IP地址中哪些位是网络号和子网号，哪些位是主机号，是划分子网的关键，故选B。参见教材P74。"
  },
  {
    "id": "net_sc_53",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "IPv6的地址长度是（  ）。",
    "options": [
      "32位",
      "64位",
      "128位",
      "256位"
    ],
    "answer": "128位",
    "explanation": "IPv6的128位地址长度可以提供充足的地址空间，故选C。参见教材P79。"
  },
  {
    "id": "net_sc_54",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "以下不属于局域网主要目的的是（  ）。",
    "options": [
      "资源共享",
      "信息传递",
      "远程数据通信",
      "覆盖全球通信"
    ],
    "answer": "覆盖全球通信",
    "explanation": "局域网的目的包括资源共享、信息传递和远程数据通信，D是广域网的特点，故选D。参见教材P84。"
  },
  {
    "id": "net_sc_55",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "20世纪90年代，局域网的发展特点是（  ）。",
    "options": [
      "开始研究",
      "进入高速发展阶段",
      "产品开始商品化",
      "技术初步形成"
    ],
    "answer": "进入高速发展阶段",
    "explanation": "20世纪90年代，局域网步入了更高速的发展阶段，故选B。参见教材P84。"
  },
  {
    "id": "net_sc_56",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "IEEE 802标准描述的局域网参考模型解决了OSI参考模型的（  ）功能。",
    "options": [
      "物理层和数据链路层",
      "数据链路层和网络层",
      "网络层和传输层",
      "传输层和应用层"
    ],
    "answer": "物理层和数据链路层",
    "explanation": "IEEE 802标准所描述的局域网参考模型遵循ISO/OSI参考模型的原则，只解决了最低两层——物理层和数据链路层的功能及与网络层的接口服务。参见教材P87。"
  },
  {
    "id": "net_sc_57",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "下列属于MAC子层主要功能的是（  ）。",
    "options": [
      "向高层提供逻辑接口",
      "控制对传输媒体的访问",
      "执行地址识别和CRC校验",
      "差错控制和流量控制"
    ],
    "answer": "控制对传输媒体的访问",
    "explanation": "MAC子层的功能主要是控制对传输媒体的访问。参见教材P88。"
  },
  {
    "id": "net_sc_58",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "以下不属于决定局域网特征的主要技术的是（  ）。",
    "options": [
      "拓扑结构",
      "传输介质",
      "介质访问控制方法",
      "网络操作系统"
    ],
    "answer": "网络操作系统",
    "explanation": "决定局域网特征的主要技术是拓扑结构、传输介质及介质访问控制方法，网络操作系统不属于这三种主要技术，故选D。参见教材P89。"
  },
  {
    "id": "net_sc_59",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "以下不属于以太网基本网络组成部分的是（  ）。",
    "options": [
      "共享媒体和电缆",
      "集线器",
      "路由器",
      "交换机"
    ],
    "answer": "路由器",
    "explanation": "以太网基本组成包括共享媒体和电缆、集线器/转发器、网桥、交换机，路由器属于网络层设备，不属于以太网基本组成，故选C。参见教材P97。"
  },
  {
    "id": "net_sc_60",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "以太网MAC地址的位数是（  ）。",
    "options": [
      "32位",
      "48位",
      "64位",
      "128位"
    ],
    "answer": "48位",
    "explanation": "以太网网络接口卡采用48位网络地址，这种地址是全球唯一的，故选B。参见教材P97。"
  },
  {
    "id": "net_sc_61",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "FDDI使用的MAC协议基于（  ）。",
    "options": [
      "IEEE 802.3",
      "IEEE 802.5",
      "IEEE 802.11",
      "IEEE 802.1"
    ],
    "answer": "IEEE 802.5",
    "explanation": "FDDI使用的是基于IEEE 802.5单令牌的令牌环网MAC协议，故选B。参见教材P103。"
  },
  {
    "id": "net_sc_62",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "使用共享式集线器的双绞线以太网，其实际拓扑结构是（  ）。",
    "options": [
      "星型拓扑",
      "总线型拓扑",
      "环型拓扑",
      "树型拓扑"
    ],
    "answer": "总线型拓扑",
    "explanation": "双绞线以太网，无论数据传输速率是10Mbit/s还是100Mbit/s，它们都采用了以共享集线器为中心的星型连接方式，但其实际上是总线型的拓扑结构，故选B。参见教材P104。"
  },
  {
    "id": "net_sc_63",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "交换式以太网的核心设备是（  ）。",
    "options": [
      "共享式集线器",
      "以太网交换机",
      "路由器",
      "网桥"
    ],
    "answer": "以太网交换机",
    "explanation": "交换式以太网的核心设备是以太网交换机，故选B。参见教材P105。"
  },
  {
    "id": "net_sc_64",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "交换式以太网能构造虚拟网络（VLAN），其划分依据是（  ）。",
    "options": [
      "物理位置",
      "软件方式",
      "硬件接口",
      "传输速率"
    ],
    "answer": "软件方式",
    "explanation": "交换式以太网可以构造虚拟网络（VLAN），即逻辑工作组，它以软件方式来实现逻辑工作组的划分和管理。参见教材P107。"
  },
  {
    "id": "net_sc_65",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "虚拟局域网（VLAN）建立在（  ）基础上。",
    "options": [
      "共享式集线器",
      "交换技术",
      "路由器",
      "网桥"
    ],
    "answer": "交换技术",
    "explanation": "虚拟网络是建立在交换技术基础上的，将网络上的节点按工作性质与需要划分成若干个逻辑工作组，一个逻辑工作组就组成一个虚拟网络。参见教材P109。"
  },
  {
    "id": "net_sc_66",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "以下不属于VLAN划分方法的是（  ）。",
    "options": [
      "基于端口",
      "基于MAC地址",
      "基于物理位置",
      "基于网络层协议"
    ],
    "answer": "基于物理位置",
    "explanation": "VLAN的划分方法包括基于端口、MAC地址、网络层协议等，其核心是逻辑划分，与物理位置无关，故选C。参见教材P110。"
  },
  {
    "id": "net_sc_67",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "无线局域网（WLAN）利用的技术是（  ）。",
    "options": [
      "双绞铜线传输技术",
      "射频（RF）技术",
      "光纤传输技术",
      "同轴电缆传输技术"
    ],
    "answer": "射频（RF）技术",
    "explanation": "无线局域网络是非常便利的数据传输系统，它利用射频技术，取代旧式碍手碍脚的双绞铜线所构成的局域网络，使得无线局域网络能利用简单的存取架构让用户通过它达到信息随身化、便利走天下的理想境界。参见教材P112。"
  },
  {
    "id": "net_sc_68",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "广域网不使用的传输介质是（  ）。",
    "options": [
      "光纤",
      "双绞线",
      "蓝牙",
      "卫星"
    ],
    "answer": "蓝牙",
    "explanation": "广域网使用的传输介质包括有线的光纤、双绞线、同轴电缆，以及无线的微波、卫星等，蓝牙属于短距离无线通信技术，多用于局域网或个人区域网，故选C。参见教材P117。"
  },
  {
    "id": "net_sc_69",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "广域网与局域网的互联中，局域网可以作为广域网的（  ）。",
    "options": [
      "核心设备",
      "终端系统",
      "传输介质",
      "协议标准"
    ],
    "answer": "终端系统",
    "explanation": "广域网可与局域网（LAN）互联，即局域网可以是广域网的一个终端系统，故选B。参见教材P117。"
  },
  {
    "id": "net_sc_70",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "帧中继网络目前主要提供的业务是（  ）。",
    "options": [
      "SVC",
      "PVC",
      "VPN",
      "ISDN"
    ],
    "answer": "PVC",
    "explanation": "目前的帧中继网络只提供PVC业务，PVC即永久虚电路，故选B。参见教材P119。"
  },
  {
    "id": "net_sc_71",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "帧中继采用的复用技术是（  ）。",
    "options": [
      "时分复用",
      "统计复用",
      "频分复用",
      "码分复用"
    ],
    "answer": "统计复用",
    "explanation": "帧中继采用了统计复用技术，使每一条线路和网络端口都可由多个终端用户按信息流实现共享，故选B。参见教材P119。"
  },
  {
    "id": "net_sc_72",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "以下不属于DDN优势的是（  ）。",
    "options": [
      "传输质量高",
      "网络灵活性高",
      "安全性高",
      "速率高"
    ],
    "answer": "网络灵活性高",
    "explanation": "DDN的不足之处包括网络灵活性不够高，A、C、D均是其优势，故选B。参见教材P118。"
  },
  {
    "id": "net_sc_73",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "ISDN的B信道主要用于传输（  ）。",
    "options": [
      "信令",
      "语音、数据和图像",
      "分组信息",
      "控制信号"
    ],
    "answer": "语音、数据和图像",
    "explanation": "ISDN的B信道一般用来传输语音、数据和图像，故选B。参见教材P119。"
  },
  {
    "id": "net_sc_74",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "HFC网络的传输主干和用户端分别使用的介质是（  ）。",
    "options": [
      "双绞线、光纤",
      "光纤、同轴电缆",
      "同轴电缆、光纤",
      "光纤、双绞线"
    ],
    "answer": "光纤、同轴电缆",
    "explanation": "HFC即网络传输主干为光纤，到用户端为同轴电缆的用户网络接入方式，故选B。参见教材P122。"
  },
  {
    "id": "net_sc_75",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "ATM使用的信息传输单位是（  ）。",
    "options": [
      "帧",
      "分组",
      "信元",
      "比特流"
    ],
    "answer": "信元",
    "explanation": "ATM使用固定长度的信元，可以同时传送各种信息，故选C。参见教材P123。"
  },
  {
    "id": "net_sc_76",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "ADSL的“非对称”是指（  ）。",
    "options": [
      "上行和下行传输速率不同",
      "只能传输数据不能传输语音",
      "只能使用单对电话线",
      "不同用户的速率不同"
    ],
    "answer": "上行和下行传输速率不同",
    "explanation": "ADSL为非对称数字用户环路，在两个传输方向上的速率是不一样的”，即上行和下行速率不同，故选A。参见教材P120。"
  },
  {
    "id": "net_sc_77",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "以下关于微波通信的描述，正确的是（  ）。",
    "options": [
      "频率比无线电波低",
      "需通过微波天线收发信号",
      "属于有线通信",
      "无法连接LAN"
    ],
    "answer": "需通过微波天线收发信号",
    "explanation": "微波通信包含着一个与LAN连接的微波天线，它将信号发送到远方的微波天线上，其频率比无线电波高，属于无线通信，可连接LAN，A、C、D错误，故选B。参见教材P125。"
  },
  {
    "id": "net_sc_78",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "我国无线广域网中，由中国移动提供的上网方式是（  ）。",
    "options": [
      "CDMA1X",
      "GPRS",
      "卫星通信",
      "微波通信"
    ],
    "answer": "GPRS",
    "explanation": "GPRS由中国移动提供信号，CDMA1X由中国联通提供，故选B。参见教材P125。"
  },
  {
    "id": "net_sc_79",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "无线上网卡的主要接口方式不包括（  ）。",
    "options": [
      "USB",
      "PC智能卡",
      "光纤接口",
      "以上均是"
    ],
    "answer": "光纤接口",
    "explanation": "无线上网卡主要有USB和PC智能卡两种接口方式，光纤接口是有线接口，故选C。参见教材P125。"
  },
  {
    "id": "net_sc_80",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "未来计算机网络核心层的主要网络模式是（  ）。",
    "options": [
      "以太网",
      "快速以太网",
      "千兆以太网",
      "万兆以太网"
    ],
    "answer": "千兆以太网",
    "explanation": "在核心层，其网络模式将主要为千兆以太网，以第三层高速IP交换机或高速交换路由器等为基本构成。故选C。参见教材P126。"
  },
  {
    "id": "net_sc_81",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "传统电信网将逐步向统一的（  ）宽带平台转移。",
    "options": [
      "以太网",
      "ATM",
      "帧中继",
      "DDN"
    ],
    "answer": "ATM",
    "explanation": "对于传统电信网，包括现有的公众电话网、分组交换网、DDN、帧中继等窄带网络，以及XDSL，HFC等宽带接入网络都将逐步向统一的ATM宽带平台转移。参见教材P126。"
  },
  {
    "id": "net_sc_82",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "网络操作系统中最重要、最基本的网络服务是（  ）。",
    "options": [
      "数据库服务",
      "文件服务",
      "打印服务",
      "通信服务"
    ],
    "answer": "文件服务",
    "explanation": "文件服务是网络操作系统操作中最重要、最基本的网络服务，故选B。参见教材P130。"
  },
  {
    "id": "net_sc_83",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "网络操作系统的系统容错措施不包括（  ）。",
    "options": [
      "UPS电源监控保护",
      "双机热备份",
      "磁盘镜像",
      "单一电源供电"
    ],
    "answer": "单一电源供电",
    "explanation": "系统容错措施包括UPS电源监控保护、双机热备份、磁盘镜像和热插拔等，单一电源供电不利于容错，故选D。参见教材P129。"
  },
  {
    "id": "net_sc_84",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "域名服务的主要功能是（  ）。",
    "options": [
      "实现ASCII字符串和二进制IP地址之间的转换",
      "管理共享文件",
      "提供打印队列管理",
      "处理电子邮件传输"
    ],
    "answer": "实现ASCII字符串和二进制IP地址之间的转换",
    "explanation": "域名服务用来实现ASCII字符串和二进制IP地址之间的转换，B是文件服务功能，C是打印服务功能，D是信息服务功能，故选A。参见教材P130。"
  },
  {
    "id": "net_sc_85",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "Windows 2000 Server中，可按信息包级别检测网络通信状况的工具是（  ）。",
    "options": [
      "任务管理器",
      "网络监视器",
      "组策略编辑器",
      "资源管理器"
    ],
    "answer": "网络监视器",
    "explanation": "网络监视器可以按信息包级别来检测网络上工作站与服务器的通信状况，并且还记录下这些信息，任务管理器主要监视应用程序和性能参数，故选B。参见教材P132。"
  },
  {
    "id": "net_sc_86",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "Windows Server 2003 Web版主要针对的应用场景是（  ）。",
    "options": [
      "大规模数据仓库",
      "专用Web服务和宿主",
      "企业级数据库服务",
      "复杂的分布式计算"
    ],
    "answer": "专用Web服务和宿主",
    "explanation": "Windows Server 2003 Web版是针对专用的Web服务和宿主设计的，故选B。参见教材P133。"
  },
  {
    "id": "net_sc_87",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "Windows Server 2003企业版最高支持的扩展物理内存是（  ）。",
    "options": [
      "4GB",
      "32GB",
      "64GB",
      "2GB"
    ],
    "answer": "32GB",
    "explanation": "Windows Server 2003企业版最高支持32GB的扩展物理内存，4GB是标准版，64GB是数据中心版，2GB是Web版，故选B。参见教材P133。"
  },
  {
    "id": "net_sc_88",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "以下不属于对等网络优点的是（  ）。",
    "options": [
      "计算机硬件成本低",
      "易于管理（针对用户较少的网络）",
      "不需要网络操作系统支持",
      "适合大规模网络"
    ],
    "answer": "适合大规模网络",
    "explanation": "对等网络的缺点包括在“用户多、规模大”时表现突出，不适合大规模网络，A、B、C均是其优点，故选D。参见教材P143。"
  },
  {
    "id": "net_sc_89",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "基于服务器的网络中，共享资源的管理方式是（  ）。",
    "options": [
      "分散在各计算机中，由用户自行管理",
      "集中在服务器中，由服务器集中管理",
      "仅由工作站管理",
      "无需管理，任何用户均可访问"
    ],
    "answer": "集中在服务器中，由服务器集中管理",
    "explanation": "基于服务器的网络中，网络资源由服务器集中管理，服务器控制数据、打印机以及客户机需要访问的其他资源，故选B。参见教材P143。"
  },
  {
    "id": "net_sc_90",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "对等网络中，资源安全性由（  ）负责维护。",
    "options": [
      "网络管理员",
      "每台计算机的用户自己",
      "专用服务器",
      "操作系统自动维护"
    ],
    "answer": "每台计算机的用户自己",
    "explanation": "对等网络中，每一台计算机负责维护自己资源的安全性，即由各计算机用户自行负责，故选B。参见教材P142。"
  },
  {
    "id": "net_sc_91",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "以下属于应用服务器的是（  ）。",
    "options": [
      "邮件服务器",
      "数据库服务器",
      "Web服务器",
      "视频服务器"
    ],
    "answer": "数据库服务器",
    "explanation": "数据库服务器就是一种应用服务器，A、C、D属于特殊服务器，故选B。参见教材P145。"
  },
  {
    "id": "net_sc_92",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "文件服务器的局限性是（  ）。",
    "options": [
      "处理数据速度过快",
      "增加局域网不必要的流量负载",
      "只能处理数据库任务",
      "无法存储文件"
    ],
    "answer": "增加局域网不必要的流量负载",
    "explanation": "文件服务器的功能有限，它只是简单地将文件在网络中传来传去，给局域网增加了大量不必要的流量负载。参见教材P145。"
  },
  {
    "id": "net_sc_93",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "SMP（对称多处理系统）的最大特点是（  ）。",
    "options": [
      "各处理器不共享任何资源",
      "所有处理器共享内存子系统和总线结构",
      "每个处理器有私有内存和总线",
      "仅支持2个处理器"
    ],
    "answer": "所有处理器共享内存子系统和总线结构",
    "explanation": "SMP各CPU之间共享内存子系统以及总线结构，A、C是MPP的特点，SMP可支持多个处理器（如4、8个），故选B。参见教材P146。"
  },
  {
    "id": "net_sc_94",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "以下不属于SMP系统优势的是（  ）。",
    "options": [
      "工作负载均匀分配到多个CPU，提高处理能力",
      "编程移植相对容易",
      "可扩展性强，支持100个以上处理器",
      "使用方式与微机或工作站区别不大"
    ],
    "answer": "可扩展性强，支持100个以上处理器",
    "explanation": "SMP可扩展性较差，很难做到100个以上多处理器，C不属于其优势，A、B、D均是SMP的优势，故选C。参见教材P146。"
  },
  {
    "id": "net_sc_95",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "网络互联设备不包括（  ）。",
    "options": [
      "网桥",
      "路由器",
      "集线器",
      "以上均是"
    ],
    "answer": "集线器",
    "explanation": "网络互联借助网桥、路由器等设备，集线器是局域网内部的连接设备，不属于网络互联设备，故选C。参见教材P155。"
  },
  {
    "id": "net_sc_96",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "以下不属于局域网-局域网（LAN-LAN）互联常用设备的是（  ）。",
    "options": [
      "中继器",
      "网桥",
      "网关",
      "交换机"
    ],
    "answer": "网关",
    "explanation": "LAN-LAN互联常用中继器、集线器、交换机、网桥等，网关主要用于高层协议不同的网络互联，故选C。参见教材P157。"
  },
  {
    "id": "net_sc_97",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "物理层互联的主要设备是（  ）。",
    "options": [
      "网桥",
      "路由器",
      "中继器",
      "网关"
    ],
    "answer": "中继器",
    "explanation": "物理层的连接设备主要是中继器，用于延伸局域网的长度，再生、放大信号，故选C。参见教材P158。"
  },
  {
    "id": "net_sc_98",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "中继器的主要功能是（  ）。",
    "options": [
      "进行协议转换",
      "放大、整形和转发数据信号，延长网络长度",
      "连接不同协议的局域网",
      "提供网络管理功能"
    ],
    "answer": "放大、整形和转发数据信号，延长网络长度",
    "explanation": "中继器主要作用就是负责将一个网段上传输的数据信号进行复制、整形和放大后再发送到另一个网段上去，以此来延长网络的长度，A、C、D均不是其功能，故选B。参见教材P161。"
  },
  {
    "id": "net_sc_99",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "以下不属于集线器类型的是（  ）。",
    "options": [
      "无源集线器",
      "有源集线器",
      "智能集线器",
      "无线集线器"
    ],
    "answer": "无线集线器",
    "explanation": "集线器分为无源集线器、有源集线器和智能集线器，故选D。参见教材P162。"
  },
  {
    "id": "net_sc_100",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "负责定义Internet总体结构和技术管理的组织是（  ）。",
    "options": [
      "ISOC",
      "IAB",
      "IETF",
      "IANA"
    ],
    "answer": "IAB",
    "explanation": "Internet体系结构委员会（IAB）负责定义Internet的总体结构和技术上的管理，故选B。参见教材P172。"
  },
  {
    "id": "net_sc_101",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "Internet起源于（  ）。",
    "options": [
      "英国",
      "美国",
      "中国",
      "日本"
    ],
    "answer": "美国",
    "explanation": "Internet起源于美国，并由美国扩展到世界其他地方，故选B。参见教材P171。"
  },
  {
    "id": "net_sc_102",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "Internet上最重要的资源是（  ）。",
    "options": [
      "硬件设备",
      "信息",
      "网络线路",
      "操作系统"
    ],
    "answer": "信息",
    "explanation": "信息是Internet上最重要的资源，也是使用Internet的人们希望得到的东西，故选B。参见教材P172。"
  },
  {
    "id": "net_sc_103",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "Internet采用的主机命名机制是（  ）。",
    "options": [
      "无层次命名机制",
      "层次型命名机制",
      "随机命名机制",
      "数字命名机制"
    ],
    "answer": "层次型命名机制",
    "explanation": "Internet采取了一种层次型结构的命名机制，以解决无层次命名机制的缺陷，故选B。参见教材P175。"
  },
  {
    "id": "net_sc_104",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "域名系统的数据库结构类似于（  ）。",
    "options": [
      "线性表",
      "树状结构",
      "栈",
      "队列"
    ],
    "answer": "树状结构",
    "explanation": "整个数据库是一棵倒立的树形结构，类似于文件系统的层次结构，故选B。参见教材P175。"
  },
  {
    "id": "net_sc_105",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "BOOTP协议的主要功能是（  ）。",
    "options": [
      "为无盘工作站自动获取配置信息",
      "仅分配IP地址",
      "管理域名解析",
      "实现文件传输"
    ],
    "answer": "为无盘工作站自动获取配置信息",
    "explanation": "引导程序协议（BOOTP）可以为一个无盘工作站自动获取配置信息，故选A。参见教材P179。"
  },
  {
    "id": "net_sc_106",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "DHCP采用的工作方式是（  ）。",
    "options": [
      "对等方式",
      "客户机/服务器方式",
      "单播方式",
      "广播方式"
    ],
    "answer": "客户机/服务器方式",
    "explanation": "DHCP采用客户机/服务器的工作方式，故选B。参见教材P179。"
  },
  {
    "id": "net_sc_107",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "以下不属于网络管理方式的是（  ）。",
    "options": [
      "本地终端方式",
      "远程Telnet命令方式",
      "基于SNMP的网管方式",
      "电子邮件方式"
    ],
    "answer": "电子邮件方式",
    "explanation": "网络管理方式包括本地终端方式、远程Telnet命令方式和基于SNMP的网管方式，电子邮件方式不属于网络管理方式，故选D。参见教材P180。"
  },
  {
    "id": "net_sc_108",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "WWW的信息结构是（  ）。",
    "options": [
      "线性结构",
      "树型结构",
      "网状结构",
      "环形结构"
    ],
    "answer": "网状结构",
    "explanation": "WWW的信息结构是一种纵横交错的网状系统，故选C。参见教材P182。"
  },
  {
    "id": "net_sc_109",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "HTTP协议工作在TCP/IP协议集的（  ）。",
    "options": [
      "物理层",
      "数据链路层",
      "网络层",
      "应用层"
    ],
    "answer": "应用层",
    "explanation": "HTTP是TCP/IP协议集中的应用层协议，建立在TCP之上，故选D。参见教材P182。"
  },
  {
    "id": "net_sc_110",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "电子邮件系统采用的工作方式是（  ）。",
    "options": [
      "实时交互",
      "存储转发",
      "广播发送",
      "仅能单播"
    ],
    "answer": "存储转发",
    "explanation": "电子邮件系统采用存储转发工作方式，故选B。参见教材P185。"
  },
  {
    "id": "net_sc_111",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "负责服务器之间邮件传送的协议是（  ）。",
    "options": [
      "HTTP",
      "SMTP",
      "POP3",
      "FTP"
    ],
    "answer": "SMTP",
    "explanation": "SMTP主要任务是负责服务器之间的邮件传送，故选B。参见教材P185。"
  },
  {
    "id": "net_sc_112",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "以下不属于FTP主要功能的是（  ）。",
    "options": [
      "将本地文件传送到远程计算机（上载）",
      "从远程计算机获取文件（下载）",
      "对本地和远程计算机的目录进行操作",
      "实时语音通话"
    ],
    "answer": "实时语音通话",
    "explanation": "实时语音通话不是FTP的功能，A、B、C均是FTP的主要功能，故选D。参见教材P187。"
  },
  {
    "id": "net_sc_113",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "匿名FTP服务的优点不包括（  ）。",
    "options": [
      "用户无需账户即可访问公共资源",
      "服务器管理员可掌握用户情况",
      "对公共账户无目录限制，可随意访问",
      "方便获取大量有价值的文件"
    ],
    "answer": "对公共账户无目录限制，可随意访问",
    "explanation": "匿名FTP对默认公共账户做了许多的目录限制，并非无限制，C不属于其优点，故选C。参见教材P188。"
  },
  {
    "id": "net_sc_114",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "Telnet采用的工作模式是（  ）。",
    "options": [
      "对等模式",
      "客户机/服务器模式",
      "广播模式",
      "单播模式"
    ],
    "answer": "客户机/服务器模式",
    "explanation": "Telnet采用了客户机/服务器模式，客户机程序与服务器程序协同工作，故选B。参见教材P189。"
  },
  {
    "id": "net_sc_115",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "使用Telnet成功登录后，用户的本地计算机相当于远程计算机的（  ）。",
    "options": [
      "服务器",
      "仿真终端",
      "路由器",
      "网桥"
    ],
    "answer": "仿真终端",
    "explanation": "远程登录后，本地计算机像一台与对方计算机直接连接的本地终端一样进行工作，即成为仿真终端，故选B。参见教材P189。"
  },
  {
    "id": "net_sc_116",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "电子公告牌系统（BBS）的主要功能不包括（  ）。",
    "options": [
      "发布信息",
      "私下交流（通过电子邮件）",
      "实时视频会议",
      "软件交流"
    ],
    "answer": "实时视频会议",
    "explanation": "BBS的主要功能包括信息发布、私下交流、软件交流等，实时视频会议不是其功能，故选C。参见教材P191。"
  },
  {
    "id": "net_sc_117",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "Usenet与Internet的关系是（  ）。",
    "options": [
      "Usenet是Internet的一部分",
      "Internet是Usenet的通信载体",
      "两者完全独立",
      "Usenet仅存在于校园网中"
    ],
    "answer": "Internet是Usenet的通信载体",
    "explanation": "Internet仅是Usenet的一个通信载体而已，故选B。参见教材P190。"
  },
  {
    "id": "net_sc_118",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "通过联机终端方式接入Internet时，用户计算机的角色是（  ）。",
    "options": [
      "Internet的直接主机",
      "ISP主机的一台终端",
      "独立的服务器",
      "仅能发送电子邮件的设备"
    ],
    "answer": "ISP主机的一台终端",
    "explanation": "联机终端方式中，用户计算机连接到ISP的主机上并成为该主机的一台终端，通过主机间接访问Internet，故选B。参见教材P192。"
  },
  {
    "id": "net_sc_119",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "Intranet网络平台的核心组成部分不包括（  ）。",
    "options": [
      "网络传输设备和服务器",
      "网络操作系统",
      "办公软件和浏览器",
      "网络互联设备和布线系统"
    ],
    "answer": "办公软件和浏览器",
    "explanation": "网络平台包括网络传输设备、接入设备、网络互联设备、交换设备、布线系统、服务器、网络操作系统等。参见教材P197。"
  },
  {
    "id": "net_sc_120",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "以下属于Intranet应用平台的是（  ）。",
    "options": [
      "网络操作系统",
      "管理信息系统（MIS）",
      "数据库管理系统（如Oracle）",
      "网络传输设备"
    ],
    "answer": "管理信息系统（MIS）",
    "explanation": "Intranet应用平台包括管理信息系统（MIS）、办公自动化系统等，A属于网络平台，C属于数据库平台，D属于网络平台，故选B。参见教材P197。"
  },
  {
    "id": "net_sc_121",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "Internet存在安全先天不足的原因是（  ）。",
    "options": [
      "TCP/IP协议族缺乏相应的安全机制",
      "仅用于小型局域网",
      "不支持资源共享",
      "无法实现远程访问"
    ],
    "answer": "TCP/IP协议族缺乏相应的安全机制",
    "explanation": "Internet赖以生存的TCP/IP协议族缺乏相应的安全机制，最初设计基本没有考虑安全问题，导致安全先天不足，故选A。参见教材P202。"
  },
  {
    "id": "net_sc_122",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "网络安全的基本要求中，“网络信息系统在规定条件下和规定时间内完成规定功能的特性”指的是（  ）。",
    "options": [
      "可用性",
      "可靠性",
      "保密性",
      "完整性"
    ],
    "answer": "可靠性",
    "explanation": "可靠性是网络信息系统能够在规定条件下和规定时间内完成规定功能的特性，是系统安全的基本要求之一，故选B。参见教材P203。"
  },
  {
    "id": "net_sc_123",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "以下不属于可靠性测度的是（  ）。",
    "options": [
      "抗毁性",
      "生存性",
      "有效性",
      "可控性"
    ],
    "answer": "可控性",
    "explanation": "可靠性测度包括抗毁性、生存性和有效性，可控性是网络安全的另一基本要求，故选D。参见教材P203。"
  },
  {
    "id": "net_sc_124",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "访问控制的基本原理不包括（  ）。",
    "options": [
      "检查用户标识",
      "验证用户口令",
      "根据权限限制资源利用范围",
      "直接允许所有用户访问资源"
    ],
    "answer": "直接允许所有用户访问资源",
    "explanation": "访问控制的基本原理是检查用户标识、口令，根据授予的权限限制其对资源的利用范围和程度。参见教材P205。"
  },
  {
    "id": "net_sc_125",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "“最后一次登录记录”功能的主要作用是（  ）。",
    "options": [
      "统计用户登录时长",
      "帮助用户回忆登录密码",
      "提示用户是否有非法登录尝试",
      "自动修改用户口令"
    ],
    "answer": "提示用户是否有非法登录尝试",
    "explanation": "最后一次登录报告出用户最后一次登录系统的时间和日期，以及最后一次登录后发生过多少次未成功的登录尝试。故选C。参见教材P207。"
  },
  {
    "id": "net_sc_126",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "以下不属于常见攻击类型的是（  ）。",
    "options": [
      "入侵系统攻击",
      "缓冲区溢出攻击",
      "数据备份攻击",
      "拒绝服务攻击"
    ],
    "answer": "数据备份攻击",
    "explanation": "常见攻击类型包括入侵系统、缓冲区溢出、欺骗类、拒绝服务等，数据备份是防御措施，并非攻击类型，故选C。参见教材P215。"
  },
  {
    "id": "net_sc_127",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "包过滤防火墙（网络级防火墙）主要检查的信息不包括（  ）。",
    "options": [
      "IP地址",
      "TCP/UDP分组信息",
      "数据包的内容详情",
      "端口号"
    ],
    "answer": "数据包的内容详情",
    "explanation": "包过滤防火墙检查IP地址、TCP/UDP分组信息、端口号，但不深入分析数据包的具体内容，故选C。参见教材P211。"
  },
  {
    "id": "net_sc_128",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "单机防病毒卡的局限性不包括（  ）。",
    "options": [
      "与许多国产软件不兼容",
      "误报、漏报病毒现象时有发生",
      "能有效应对所有新型病毒和复杂病毒",
      "随着病毒技术发展，无法检查或清除某些病毒"
    ],
    "answer": "能有效应对所有新型病毒和复杂病毒",
    "explanation": "单机防病毒卡的主要问题是它与许多国产的软件不兼容，误报、漏报病毒现象时有发生，并且随着病毒类型的千变万化和编写病毒的技术手段越来越高，有时它根本就无法检查或清除某些病毒。因此现在使用单机防病毒卡的用户在逐渐减少。参见教材P220。"
  },
  {
    "id": "net_sc_129",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "以下属于网络工作站防病毒方法的是（  ）。",
    "options": [
      "仅依靠服务器杀毒，不处理工作站",
      "使用无盘工作站",
      "禁止工作站接入网络",
      "定期格式化所有工作站硬盘"
    ],
    "answer": "使用无盘工作站",
    "explanation": "网络工作站防病毒方法包括采用无盘工作站、使用带防病毒芯片的网卡、使用单机防病毒卡，故选B。参见教材P219。"
  },
  {
    "id": "net_sc_130",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "密码学的两个主要分支是（  ）。",
    "options": [
      "对称加密和非对称加密",
      "密码编码学和密码分析学",
      "流密码和分组密码",
      "加密和解密"
    ],
    "answer": "密码编码学和密码分析学",
    "explanation": "密码学包括两个分支，即密码编码学和密码分析学，密码编码学研究信息加密，密码分析学研究密码破译，故选B。参见教材P220。"
  },
  {
    "id": "net_sc_131",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "“密码分析者仅已知一些用同一算法加密的密文，试图恢复明文或密钥”属于（  ）。",
    "options": [
      "唯密文攻击",
      "已知明文攻击",
      "选择明文攻击",
      "选择密文攻击"
    ],
    "answer": "唯密文攻击",
    "explanation": "唯密文攻击的定义是密码分析者已知一些消息的密文，这些消息都用同一加密算法加密，任务是恢复明文或密钥，故选A。参见教材P222。"
  },
  {
    "id": "net_sc_132",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "基带信号是指（  ）。",
    "options": [
      "经过调制后的频分复用模拟信号",
      "计算机发送的数字信号直接转换的电压信号",
      "幅度和时间连续变化的信号",
      "用于无线传输的信号"
    ],
    "answer": "计算机发送的数字信号直接转换的电压信号",
    "explanation": "基带信号就是将计算机发送的数字信号“0”或“1”用两种不同的电压表示后，直接送到线路上传输的信号，故选B。参见教材P17。"
  },
  {
    "id": "net_sc_133",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "DNS协议的功能是（  ）。",
    "options": [
      "自动分配IP地址",
      "远程登录到另一台主机",
      "将域名映射为IP地址",
      "监控网络节点状态"
    ],
    "answer": "将域名映射为IP地址",
    "explanation": "DNS用来把便于人们记忆的主机域名映射为计算机易于识别的IP地址。参见教材P67。"
  },
  {
    "id": "net_sc_134",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "Web服务器的主要功能是（  ）。",
    "options": [
      "存储和处理电子邮件",
      "提供视频点播服务",
      "供用户通过浏览器浏览信息",
      "仅存储文件，不允许客户机访问"
    ],
    "answer": "供用户通过浏览器浏览信息",
    "explanation": "Web服务器广泛应用于Internet和Intranet，用户通过客户机上的浏览器应用程序浏览Web服务器上的信息，A是邮件服务器功能，B是视频服务器功能，D错误，故选C。参见教材P145。"
  },
  {
    "id": "net_sc_135",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "SNMP网络管理模型不包括（  ）。",
    "options": [
      "网络管理站",
      "网络管理代理",
      "管理信息库",
      "域名服务器"
    ],
    "answer": "域名服务器",
    "explanation": "SNMP网络管理模型由网络管理站、网络管理代理、管理信息库以及SNMP协议组成，域名服务器不属于该模型，故选D。参见教材P180。"
  },
  {
    "id": "net_sc_136",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "防火墙无法抵御的威胁是（  ）。",
    "options": [
      "网络外部的黑客攻击",
      "网络内部的攻击和滥用",
      "来自外部的有害信息侵入",
      "软件漏洞导致的攻击"
    ],
    "answer": "网络内部的攻击和滥用",
    "explanation": "防火墙无法防止来自网络内部的攻击，也无法对网络内部的滥用做出反应，故选B。参见教材P203。"
  },
  {
    "id": "net_sc_137",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "虚拟局域网（VLAN）的安全作用不包括（  ）。",
    "options": [
      "控制网络流量，防止广播风暴",
      "利用MAC帧过滤技术增强安全性",
      "允许不同逻辑子网的设备随意通信",
      "限制黑客攻破一个子网后访问整个网络"
    ],
    "answer": "允许不同逻辑子网的设备随意通信",
    "explanation": "VLAN将网络划分为逻辑子网，限制不同子网的随意通信，增强安全性，C不属于其安全作用，故选C。参见教材P217。"
  },
  {
    "id": "net_sc_138",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "IPv6中，用于保证数据保密性和一致性的是（  ）。",
    "options": [
      "认证报头（AH）",
      "封装的安全负载报头（ESP）",
      "流标签",
      "业务流类别"
    ],
    "answer": "封装的安全负载报头（ESP）",
    "explanation": "封装的安全负载报头（ESP）用于保证数据的保密性和数据的一致性。参见教材P79。"
  },
  {
    "id": "net_sc_139",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "局域网的地域范围一般为（  ）。",
    "options": [
      "0.1~25km",
      "25~100km",
      "100~500km",
      "500km以上"
    ],
    "answer": "0.1~25km",
    "explanation": "局域网主要用于办公室、机关、工厂和学校等内部联网，其范围没有严格的定义，但一般认为距离为0.1~25km。参见教材P85。"
  },
  {
    "id": "net_sc_140",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "目前局域网的传输速率最高可以达到（  ）。",
    "options": [
      "10Mbit/s",
      "100Mbit/s",
      "1Gbit/s",
      "10Gbit/s"
    ],
    "answer": "10Gbit/s",
    "explanation": "目前局域网传输速率一般为10~100Mbit/s，最高可以达到10Gbit/s，故选D。参见教材P85。"
  },
  {
    "id": "net_sc_141",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "在局域网中，负责管理和提供资源给网络用户的设备是（  ）。",
    "options": [
      "工作站",
      "服务器",
      "集线器",
      "打印机"
    ],
    "answer": "服务器",
    "explanation": "服务器可以将其CPU、内存、磁盘、打印机、数据等资源提供给网络用户使用，并负责对这些资源的管理，故选B。参见教材P85。"
  },
  {
    "id": "net_sc_142",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "帧中继完成了OSI七层协议中的（  ）功能。",
    "options": [
      "物理层和数据链路层",
      "网络层和传输层",
      "会话层和表示层",
      "应用层"
    ],
    "answer": "物理层和数据链路层",
    "explanation": "帧中继只完成OSI七层协议中物理层和数据链路层的功能，而将流量控制、纠错等功能留给智能终端完成，故选A。参见教材P119。"
  },
  {
    "id": "net_sc_143",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "通过子网划分提高网络可靠性的原理是（  ）。",
    "options": [
      "扩大故障影响范围",
      "将故障限定在故障设备所在的子网内",
      "增加网络冲突",
      "减少子网数量"
    ],
    "answer": "将故障限定在故障设备所在的子网内",
    "explanation": "设备的故障可能导致整个网络的瘫痪，而通过子网的划分可以有效地限制设备故障对网络的影响范围，将故障限定在故障设备所在的子网内。参见教材P156。"
  },
  {
    "id": "net_tf_1",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "联机终端网络中，多个终端可以分时占用主机资源。",
    "options": [
      "对",
      "错"
    ],
    "answer": "对",
    "explanation": "从计算机技术上来看，这是由单用户独占一个系统发展到分时多用户系统，即多个终端用户分时占用主机上的资源，故正确。参见教材P2。"
  },
  {
    "id": "net_tf_2",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "通信子网的传输没有资源子网也有实际意义。",
    "options": [
      "对",
      "错"
    ],
    "answer": "错",
    "explanation": "没有通信子网，网络就不能工作；而没有资源子网，通信子网的传输也失去了意义，两者的融合组成了统一的资源共享网络，故错误。参见教材P3。"
  },
  {
    "id": "net_tf_3",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "线路交换技术是为计算机通信设计的。",
    "options": [
      "对",
      "错"
    ],
    "answer": "错",
    "explanation": "线路交换是为语音通信而设计的，故错误。参见教材P4。"
  },
  {
    "id": "net_tf_4",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "资源子网中的主机只能是大型机或中型机。",
    "options": [
      "对",
      "错"
    ],
    "answer": "错",
    "explanation": "资源子网中的主机可以是大型机、中型机、小型机、工作站或微机，故错误。参见教材P7。"
  },
  {
    "id": "net_tf_5",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "网络软件的研究重点是网络中各个独立计算机的功能。",
    "options": [
      "对",
      "错"
    ],
    "answer": "错",
    "explanation": "网络软件最重要的特征是，它研究的重点不是网络中各个独立的计算机本身的功能，而是如何实现网络特有的功能，故错误。参见教材P9。"
  },
  {
    "id": "net_tf_6",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "双绞线、光纤属于通信子网中的通信线路。",
    "options": [
      "对",
      "错"
    ],
    "answer": "对",
    "explanation": "计算机网络采用了多种通信线路，如电话线、双绞线、同轴电缆、光纤、无线通信信道、微波与卫星通信信道等，故正确。参见教材P8。"
  },
  {
    "id": "net_tf_7",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "资源共享只能共享硬件资源，不能共享软件和数据资源。",
    "options": [
      "对",
      "错"
    ],
    "answer": "错",
    "explanation": "资源共享包括硬件、软件和数据，故错误。参见教材P9。"
  },
  {
    "id": "net_tf_8",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "当某台计算机出现故障时，网络中的其他计算机不能代替其完成任务。",
    "options": [
      "对",
      "错"
    ],
    "answer": "错",
    "explanation": "当某一台计算机出现故障时，可以立即由计算机网络中的另一台计算机来代替其完成所承担的任务，故错误。参见教材P9。"
  },
  {
    "id": "net_tf_9",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "广域网使用的主要技术为广播技术。",
    "options": [
      "对",
      "错"
    ],
    "answer": "错",
    "explanation": "广域网使用的主要技术为存储转发技术，而非广播技术，故错误。参见教材P10。"
  },
  {
    "id": "net_tf_10",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "专用网由电信部门组建，可提供给任何部门和单位使用。",
    "options": [
      "对",
      "错"
    ],
    "answer": "错",
    "explanation": "专用网是由某个单位或部门组建的，不允许其他部门或单位使用，故错误。参见教材P11。"
  },
  {
    "id": "net_tf_11",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "无线网的传输介质是电磁波。",
    "options": [
      "对",
      "错"
    ],
    "answer": "对",
    "explanation": "无线网是指使用电磁波作为传输介质的计算机网络，故正确。参见教材P12。"
  },
  {
    "id": "net_tf_12",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "星型拓扑结构中，中央节点的故障会导致整个网络瘫痪。",
    "options": [
      "对",
      "错"
    ],
    "answer": "对",
    "explanation": "星型拓扑结构中，中央节点的正常运行对网络系统来说是至关重要的，即中央节点故障会影响整个网络，故正确。参见教材P13。"
  },
  {
    "id": "net_tf_13",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "树型拓扑结构与总线型拓扑结构的主要区别是树型有“根”，而总线型没有。",
    "options": [
      "对",
      "错"
    ],
    "answer": "对",
    "explanation": "树型拓扑结构与总线型拓扑结构相比，其主要区别在于总线型拓扑结构中没有“根”，故正确。参见教材P13。"
  },
  {
    "id": "net_tf_14",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "波特率与比特率的意义相同，都是表示信息传输速率。",
    "options": [
      "对",
      "错"
    ],
    "answer": "错",
    "explanation": "“波特”与“比特”的意义是不同的，模拟信号的速率通常用“波特”来表示，数字信号的速率通常用“比特”来表示，故错误。参见教材P18。"
  },
  {
    "id": "net_tf_15",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "专用信道是用户设备之间的固定电路，路径固定。",
    "options": [
      "对",
      "错"
    ],
    "answer": "对",
    "explanation": "专用信道是用户设备之间连接的固定电路，路径固定，故正确。参见教材P18。"
  },
  {
    "id": "net_tf_16",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "信道带宽是信号传输频率的最大值和最小值之差。",
    "options": [
      "对",
      "错"
    ],
    "answer": "对",
    "explanation": "信道带宽是信号传输频率的最大值和最小值之差。参见教材P20。"
  },
  {
    "id": "net_tf_17",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "编码是用模拟信号承载数据，调制是用数字信号承载数据。",
    "options": [
      "对",
      "错"
    ],
    "answer": "错",
    "explanation": "编码是用数字信号承载数字或模拟数据，而调制是用模拟信号承载数字或模拟数据，故错误。参见教材P21。"
  },
  {
    "id": "net_tf_18",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "脉冲编码调制仅用于语音数字化，不能用于图像数字化。",
    "options": [
      "对",
      "错"
    ],
    "answer": "错",
    "explanation": "脉冲编码调制是模拟数据数字化的主要方法。由于误码率低、数据传输速率高，因此在网络中除计算机直接产生的数字信号外，语音、图像信息必须数字化才能经计算机处理。故错误。参见教材P24。"
  },
  {
    "id": "net_tf_19",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "网络体系结构定义了同层次通信的协议及相邻层之间的接口和服务。",
    "options": [
      "对",
      "错"
    ],
    "answer": "对",
    "explanation": "所谓网络体系就是为了完成计算机间的通信合作，把每台计算机互联的功能划分成有明确定义的层次，并规定了同层次进行通信的协议及相邻层之间的接口及服务，将这些同层进程通信的协议及相邻层的接口统称为网络体系结构。参见教材P49。"
  },
  {
    "id": "net_tf_20",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "协议的语法规定了事件实现顺序的详细说明。",
    "options": [
      "对",
      "错"
    ],
    "answer": "错",
    "explanation": "语法确定的是数据与控制信息的结构和格式，交换规则才规定事件的实现顺序，故错误。参见教材P50。"
  },
  {
    "id": "net_tf_21",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "网络分层中，较低层只为相邻的较高层提供服务。",
    "options": [
      "对",
      "错"
    ],
    "answer": "对",
    "explanation": "对于网络层次结构化模型，其特点是每一层都建立在前一层的基础上，较低层只是为较高一层提供服务。故正确。参见教材P50。"
  },
  {
    "id": "net_tf_22",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "数据链路层的差错控制可以检测并纠正错误的帧。",
    "options": [
      "对",
      "错"
    ],
    "answer": "对",
    "explanation": "数据链路层在相邻节点之间建立链路，传送以帧为单位的数据信息，并且对传输中可能出现的差错进行检错和纠错，向网络层提供无差错的透明传输，故正确。参见教材P55。"
  },
  {
    "id": "net_tf_23",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "数据链路层的物理地址包含在数据帧的尾部。",
    "options": [
      "对",
      "错"
    ],
    "answer": "错",
    "explanation": "物理地址包含在数据帧的头部，尾部是差错控制信息，故错误。参见教材P55。"
  },
  {
    "id": "net_tf_24",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "IP协议是一个面向连接的协议，能保证数据包的可靠传输。",
    "options": [
      "对",
      "错"
    ],
    "answer": "错",
    "explanation": "IP是无连接协议，不保证数据包的可靠传输，可能出现丢失、重复等情况，可靠传输需依赖TCP等高层协议，故错误。参见教材P66。"
  },
  {
    "id": "net_tf_25",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "TCP协议在数据发送完毕后需要关闭连接。",
    "options": [
      "对",
      "错"
    ],
    "answer": "对",
    "explanation": "TCP进行报文交换的过程包括“建立连接、发送数据、发送确认、通知窗口大小，最后，在数据发送完毕后关闭连接”，故正确。参见教材P66。"
  },
  {
    "id": "net_tf_26",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "UDP协议能保证数据的可靠投递，适合传输文件。",
    "options": [
      "对",
      "错"
    ],
    "answer": "错",
    "explanation": "UDP不保证数据的可靠投递，适合快速递交比准确更重要的场景（如语音传输），文件传输需可靠传输，通常用TCP，故错误。参见教材P67。"
  },
  {
    "id": "net_tf_27",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "物理地址可以标识出设备连接的网络。",
    "options": [
      "对",
      "错"
    ],
    "answer": "错",
    "explanation": "物理地址属于非层次化的地址，它只能标识出单个的设备，标识不出该设备连接的是哪一个网络。参见教材P68。"
  },
  {
    "id": "net_tf_28",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "局域网一般为多个单位共建共享，服务于多个单位的用户。",
    "options": [
      "对",
      "错"
    ],
    "answer": "错",
    "explanation": "局域网一般为一个单位所建，在单位或部门内部控制管理和使用，服务于本单位的用户，故错误。参见教材P85。"
  },
  {
    "id": "net_tf_29",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "任何微机都可以作为网络工作站。",
    "options": [
      "对",
      "错"
    ],
    "answer": "对",
    "explanation": "网络工作站的选择比较简单，任何微机都可以作为网络工作站，故正确。参见教材P85。"
  },
  {
    "id": "net_tf_30",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "总线型拓扑结构中，同一时间内允许多个节点发送数据。",
    "options": [
      "对",
      "错"
    ],
    "answer": "错",
    "explanation": "总线型拓扑中在同一时间内，只允许一个节点发送数据，否则会出现冲突，故错误。参见教材P90。"
  },
  {
    "id": "net_tf_31",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "DDN的数字电路为全透明的永久性连接。",
    "options": [
      "对",
      "错"
    ],
    "answer": "错",
    "explanation": "DDN的数字电路是全透明的半永久性连接，信道在用户提出业务变更时可由网管调整，并非永久不变，故错误。参见教材P118。"
  },
  {
    "id": "net_tf_32",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "帧中继的用户费用相对DDN更为低廉。",
    "options": [
      "对",
      "错"
    ],
    "answer": "对",
    "explanation": "帧中继费率一般仅为同速率DDN电路的40%，费用更低，故正确。参见教材P119。"
  },
  {
    "id": "net_tf_33",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "帧中继自身具备完善的流量控制功能。",
    "options": [
      "对",
      "错"
    ],
    "answer": "错",
    "explanation": "帧中继的不足之处包括自身没有足够的流量控制功能，故错误。参见教材P118。"
  },
  {
    "id": "net_tf_34",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "HFC网络的带宽为每个用户独享。",
    "options": [
      "对",
      "错"
    ],
    "answer": "错",
    "explanation": "HFC带宽为所有用户所共享，每一用户所占的带宽并不固定，故错误。参见教材P122。"
  },
  {
    "id": "net_tf_35",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "ATM信元的长度是不固定的。",
    "options": [
      "对",
      "错"
    ],
    "answer": "错",
    "explanation": "ATM使用固定长度的信元，故错误。参见教材P123。"
  },
  {
    "id": "net_tf_36",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "微波通信的频率比无线电波通信的频率低。",
    "options": [
      "对",
      "错"
    ],
    "answer": "错",
    "explanation": "微波通信的频率比无线电波通信的频率更高，故错误。参见教材P125。"
  },
  {
    "id": "net_tf_37",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "卫星通信是无线广域网中成本最高的通信方式。",
    "options": [
      "对",
      "错"
    ],
    "answer": "对",
    "explanation": "卫星其实是创建WAN来连接LAN的通信方法中最昂贵的一种，故正确。参见教材P125。"
  },
  {
    "id": "net_tf_38",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "帧中继技术未来将独立发展，不会融合到其他网络中。",
    "options": [
      "对",
      "错"
    ],
    "answer": "错",
    "explanation": "帧中继的技术则完全融合到统一ATM网络中，故错误。参见教材P127。"
  },
  {
    "id": "net_tf_39",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "单机操作系统能满足开放网络环境的要求，为远程用户提供网络服务。",
    "options": [
      "对",
      "错"
    ],
    "answer": "错",
    "explanation": "单机操作系统只能为本地用户使用本机资源提供服务，不能满足开放网络环境的要求，故错误。参见教材P128。"
  },
  {
    "id": "net_tf_40",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "网络操作系统必须依赖特定的网络硬件才能运行。",
    "options": [
      "对",
      "错"
    ],
    "answer": "错",
    "explanation": "网络操作系统的特征之一是与硬件无关，可以在不同的网络硬件上运行，故错误。参见教材P129。"
  },
  {
    "id": "net_tf_41",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "服务器在网络中需要连续不断地工作。",
    "options": [
      "对",
      "错"
    ],
    "answer": "对",
    "explanation": "因为服务器在网络中是连续不断地工作的，且网络数据流在这里形成了一个瓶颈，所以服务器的数据处理速度和系统可靠性要比普通的计算机高得多。参见教材P145。"
  },
  {
    "id": "net_tf_42",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "应用服务器中，客户机几乎不处理信息，主要由服务器处理任务。",
    "options": [
      "对",
      "错"
    ],
    "answer": "对",
    "explanation": "应用服务器中，客户机几乎不处理信息，所有的任务都由服务器来处理，故正确。参见教材P145。"
  },
  {
    "id": "net_tf_43",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "网络互联会修改原有网络的结构和协议。",
    "options": [
      "对",
      "错"
    ],
    "answer": "错",
    "explanation": "网络互联除了要为不同子网之间的通信提供路径选择和数据交换功能之外，还应采取措施屏蔽或者容纳这些差异，力求在不修改互联在一起的各网络原有结构和协议的基础上，利用网间互联设备协调和适配各个网络的差异。参见教材P156。"
  },
  {
    "id": "net_tf_44",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "网络之间的信息传输量通常大于网络内部的传输量。",
    "options": [
      "对",
      "错"
    ],
    "answer": "错",
    "explanation": "网络之间的信息传输量远小于网络内部的信息传输量，故错误。参见教材P156。"
  },
  {
    "id": "net_tf_45",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "Internet受某一个政府或个人控制。",
    "options": [
      "对",
      "错"
    ],
    "answer": "错",
    "explanation": "Internet不受某一个政府或个人控制，故错误。参见教材P172。"
  },
  {
    "id": "net_tf_46",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "Internet仅由广域网组成，不包含局域网和城域网。",
    "options": [
      "对",
      "错"
    ],
    "answer": "错",
    "explanation": "Internet包括了各种计算机网络，从小型的局域网、城市规模的城域网，到大规模的广域网，故错误。参见教材P171。"
  },
  {
    "id": "net_tf_47",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "无层次命名机制适用于规模很大的网络（如Internet）。",
    "options": [
      "对",
      "错"
    ],
    "answer": "错",
    "explanation": "无层次命名机制无法应用于Internet这类规模很大的网络，因其无结构性，难以管理，故错误。参见教材P175。"
  },
  {
    "id": "net_tf_48",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "域名系统是集中式的主机信息数据库。",
    "options": [
      "对",
      "错"
    ],
    "answer": "错",
    "explanation": "域名系统是一个分布式的主机信息数据库，采用分层管理，并非集中式，故错误。参见教材P175。"
  },
  {
    "id": "net_tf_49",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "本地终端方式适用于管理多台网络设备。",
    "options": [
      "对",
      "错"
    ],
    "answer": "错",
    "explanation": "本地终端方式一般适用于管理单台的重要网络设备，故错误。参见教材P180。"
  },
  {
    "id": "net_tf_50",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "远程Telnet命令方式可以自动监视网络中多台设备的运行情况。",
    "options": [
      "对",
      "错"
    ],
    "answer": "错",
    "explanation": "远程Telnet命令方式只能针对某台具体设备，且无法提供网络运行情况的自动监视与跟踪功能，故错误。参见教材P180。"
  },
  {
    "id": "net_tf_51",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "超链接只能链接文本信息，不能链接图像、声音等。",
    "options": [
      "对",
      "错"
    ],
    "answer": "错",
    "explanation": "超链接可以链接的有文本、图像、动画、声音或影像等，故错误。参见教材P182。"
  },
  {
    "id": "net_tf_52",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "电子邮件地址中，用户名和邮件服务器主机名之间用“#”隔开。",
    "options": [
      "对",
      "错"
    ],
    "answer": "错",
    "explanation": "电子邮件地址中两者用“@”隔开，故错误。参见教材P186。"
  },
  {
    "id": "net_tf_53",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "每个电子邮件地址在全球范围内是唯一的。",
    "options": [
      "对",
      "错"
    ],
    "answer": "对",
    "explanation": "每一个使用电子邮件的用户都必须在各自的邮件服务器上建立一个邮箱，拥有一个全球唯一的电子邮件地址，故正确。参见教材P186。"
  },
  {
    "id": "net_tf_54",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "匿名FTP服务中，用户必须使用自己的电子邮件地址作为密码。",
    "options": [
      "对",
      "错"
    ],
    "answer": "对",
    "explanation": "匿名FTP登录时用自己的电子邮件地址作为用户密码，故正确。参见教材P188。"
  },
  {
    "id": "net_tf_55",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "FTP仅能传输文本文件，不能传输二进制文件。",
    "options": [
      "对",
      "错"
    ],
    "answer": "错",
    "explanation": "FTP能够传输多种类型、结构和格式的文件，例如，文本文件（ASCII）或二进制文件，故错误。参见教材P188。"
  },
  {
    "id": "net_tf_56",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "Internet的TCP/IP协议族有完善的安全机制，能有效防范安全威胁。",
    "options": [
      "对",
      "错"
    ],
    "answer": "错",
    "explanation": "TCP/IP协议族缺乏相应的安全机制，是网络安全的先天不足，故错误。参见教材P202。"
  },
  {
    "id": "net_tf_57",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "可用性要求网络在部分受损时，仍能为授权用户提供有效服务。",
    "options": [
      "对",
      "错"
    ],
    "answer": "对",
    "explanation": "可用性是指网络部分受损或需要降级使用时，仍能为授权用户提供有效服务的特性，故正确。参见教材P204。"
  },
  {
    "id": "net_tf_58",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "抗毁性是指系统在随机破坏（如自然老化）下的可靠性。",
    "options": [
      "对",
      "错"
    ],
    "answer": "错",
    "explanation": "抗毁性是系统在人为破坏下的可靠性，随机破坏下的可靠性是生存性，故错误。参见教材P203。"
  },
  {
    "id": "net_tf_59",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "系统生成的自动口令安全性高，且易于用户记忆。",
    "options": [
      "对",
      "错"
    ],
    "answer": "错",
    "explanation": "系统生成的口令主要缺点是难于记住，虽安全性高但易用性差，故错误。参见教材P207。"
  },
  {
    "id": "net_tf_60",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "入侵检测系统可以替代防火墙防止所有网络攻击。",
    "options": [
      "对",
      "错"
    ],
    "answer": "错",
    "explanation": "入侵检测系统主要用于检测和报警，不能替代防火墙进行访问控制，两者功能不同，故错误。参见教材P217。"
  },
  {
    "id": "net_tf_61",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "文件服务器上会进行应用程序的处理工作。",
    "options": [
      "对",
      "错"
    ],
    "answer": "错",
    "explanation": "文件服务器不进行应用程序的处理，所有任务都在客户机本地进行，故错误。参见教材P145。"
  },
  {
    "id": "net_tf_62",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "IP地址包括地址类别、网络号和主机号三个部分。（  ）",
    "options": [
      "对",
      "错"
    ],
    "answer": "对",
    "explanation": "根据TCP/IP规定，IP地址由32bit组成，包括地址类别、网络号和主机号三个部分。参见教材P68。"
  },
  {
    "id": "net_tf_63",
    "subjectId": "network",
    "section": "practice",
    "type": "single_choice",
    "text": "B类地址的网络数为214个，每个网络的有效主机数为216-2个。",
    "options": [
      "对",
      "错"
    ],
    "answer": "对",
    "explanation": "B类地址的网络数为214个，每个网络的有效主机数为216-2个。参见教材P69。"
  }
];
