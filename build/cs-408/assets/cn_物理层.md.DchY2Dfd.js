import{_ as t,c as l,o as d,a3 as a}from"./chunks/framework.D61v7-2O.js";const i="/cs-408/assets/image.CZxwCsGh.png",g=JSON.parse('{"title":"","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"cn/物理层.md","filePath":"cn/物理层.md"}'),e={name:"cn/物理层.md"},r=a('<h2 id="物理层基本概念" tabindex="-1">物理层基本概念 <a class="header-anchor" href="#物理层基本概念" aria-label="Permalink to &quot;物理层基本概念&quot;">​</a></h2><p>物理层主要任务：确定与传输媒体的接口的一些特性。</p><ul><li>机械特性：指明接口所用接线器的形状和尺寸、引线数目和排列等等。</li><li>电气特性：指明在接口电缆的各条线上出现的电压的范围。</li><li>功能特性：指明某条线上出现的某一电平的电压表示何种意义。</li><li>规程特性：指明对于不同功能的各种可能事件的出现顺序。</li></ul><h2 id="通信基础" tabindex="-1">通信基础 <a class="header-anchor" href="#通信基础" aria-label="Permalink to &quot;通信基础&quot;">​</a></h2><h3 id="数据通信术语" tabindex="-1">数据通信术语 <a class="header-anchor" href="#数据通信术语" aria-label="Permalink to &quot;数据通信术语&quot;">​</a></h3><p>通信的目的是交换信息， 信息的载体可以是数字、文字、语音、图像等。</p><p><strong>数据</strong>：运送数据的实体。</p><p><strong>信号</strong>：数据的电气的或电磁的表现。信号分为<em>模拟信号</em>和<em>数字信号</em>。</p><ul><li>模拟信号：代表消息的参数取值是连续的，模拟信号的信号电平是连续变化的；</li><li>数字信号：代表消息的参数的取值是离散的，数字信号是用两种不同的电平表示0、1比特序列。</li></ul><p><strong>信源</strong>：产生或发送数据的源头。</p><p><strong>信宿</strong>：接收数据的终点。</p><p><strong>信道</strong>：用来表示向某一个方向传送信息的媒体。</p><p><strong>三种通信方式</strong>：</p><ul><li>单工通信：只能有一个方向的通信而没有反方向的交互。</li><li>半双工通信：通信的双方都可以发送信息，但不能双方同时发送（当然也就不能同时接收）。</li><li>全双工通信：通信的双方可以同时发送和接收信息。</li></ul><p><strong>两种数据传输方式</strong>：</p><ul><li>串行传输：速度慢，费用低，适合远距离</li><li>并行传输：速度快，费用高，适合近距离</li></ul><h3 id="奈氏准则和香农定理" tabindex="-1">奈氏准则和香农定理 <a class="header-anchor" href="#奈氏准则和香农定理" aria-label="Permalink to &quot;奈氏准则和香农定理&quot;">​</a></h3><p><strong>信号传输过程中出现差错的原因</strong></p><ol><li>码间串扰</li></ol><p>接收端收到的信号波形失去了码元之间清晰界限的现象</p><ol start="2"><li>失真</li></ol><p>信号在传输过程中，由于实际信道有噪声、干扰、带宽的限制，导致接收端接收的信号和发送端发送的信号不一致。</p><p>失真的影响因素：码元传输速率、信号的传输距离、噪声干扰、传输媒体的质量。</p><p><strong>奈氏准则</strong></p><p>准则：是在理想低通（没有噪声、带宽有限）的信道中，极限码元传输率为2w波特</p><p>理想低通信道下极限数据传输速率 = 2W * log2V</p><ul><li>W是信道带宽，单位:HZ</li><li>V是码元的离散电平数目，即共有几种码元</li></ul><p>奈氏准则，可以得出以下结论:</p><ul><li>在任何信道中，码元传输的速率(采样频率)是有上限的。其实数据传输率理论上来说是没有上限的，因为一个码元能携带二进制数越多，数据传输率越高。</li><li>信道的频带越宽，就可用更高的速率进行码元的有效传输。</li></ul><p><strong>香农定理</strong></p><p>定理：带宽受限且有噪声的信道中，为了不产生误差，信息的数据传输率有上限值</p><p>信噪比：信号的平均功率和噪声的平均功率之比，常记于S/N，并用分贝(dB)作为度量单位。信噪比(dB)=10 lg(S/N)(dB)</p><p>信道的极限数据传输速率 = W log2(1+S/N) (b/s)</p><ul><li>W是带宽，单位:HZ</li><li>S/N是信噪比</li></ul><p>香农定理可以得出以下结论:</p><ul><li>要使信道上信息的极限传输速率提高，就要提高信比。信道上的信比固定，传输速率就固定,</li><li>只要信息的传输速率低于信道极限传输速率，就一定能找到某种方法来实现无差别的传输。</li><li>实际信道得传输速率要比极限速率低不少。</li></ul><h3 id="编码和调制" tabindex="-1">编码和调制 <a class="header-anchor" href="#编码和调制" aria-label="Permalink to &quot;编码和调制&quot;">​</a></h3><p>编码：数据 ---&gt; 数字信号</p><p>调制：数据 ---&gt; 模拟信号</p><p>常用编码：</p><ol><li>数字数据<em>编码</em>为数字信号</li></ol><table><thead><tr><th>编码方式</th><th>描述</th><th>特点</th></tr></thead><tbody><tr><td>归零编码</td><td>信号电平在一个码元之内都要恢复到零。</td><td>编码在传输过程中处于低电平的情况多，信道利用率低。</td></tr><tr><td>非归零编码</td><td>正电平表示1，负电平表示0。</td><td>为了保证收发双方的同步，需要额外的一根传输线传输同步信号。即存在同步问题。</td></tr><tr><td>反向不归零编码</td><td>信号电平翻转表示0，信号电平不变表示1。</td><td>对于全部是1的信号同样难以确认一共发送了多少个信号。</td></tr><tr><td>曼彻斯特编码</td><td>由高到低为“0”，由低到高为“1”。</td><td>每个比特的中间有一次电平跳变，两次电平跳变的时间间隔可以是T/2或T。利用电平跳变可以产生收发双方的同步信号。</td></tr><tr><td>差分曼彻斯特编码</td><td>若码元为1，则前半个码元的电平与上一个码元的电平相同，若为0，则相反。</td><td>在每个码元中间都有一次电平的跳转。</td></tr><tr><td>4B/5B编码</td><td>比特流中插入额外的比特以打破一连串的0或1，就是用5个比特来编码4个比特的数据，之后再传给接收方。</td><td>编码效率为80%</td></tr></tbody></table><ol start="2"><li>数字数据<em>调制</em>为模拟信号</li></ol><table><thead><tr><th>调制方式</th><th>描述</th></tr></thead><tbody><tr><td>调幅（ASK）</td><td>用载波的两个不同的振幅来表示两个二进制值。无信号表示0，有信号表示1。</td></tr><tr><td>调频（FSK）</td><td>用载波的两个不同的频率来表示两个二进制值。信号频率为f表示0，信号频率为2f表示1。</td></tr><tr><td>调相（PSK）</td><td>用载波的两个不同的初始相位来表示两个二进制值。信号相位角为0表示0，信号相位角为π表示1。</td></tr></tbody></table><p><img src="'+i+'" alt="alt text"></p><ol start="3"><li>模拟数据<em>编码</em>为数字信号</li></ol><p>现在的数字传输系统都是采用脉冲编码调制（PCM）体制将模拟数据进行数字信号编码。转换过程须经过三个步骤：</p><ul><li>取样：按一定间隔对语音信号进行采样</li><li>量化：对每个样本舍入到量化级别上</li><li>编码：对每个舍入后的样本进行编码</li></ul><ol start="4"><li>模拟数据<em>调制</em>为模拟信号</li></ol><p>在模拟信号传输过程中，可能信道的长度非常长，环境比较恶劣，会导致传输的模拟信号受到衰减。为了保证传输的有效性，需要将信号调制成频率更高的信号来应对传输过程的衰减。接收方接收到调制的信号后，通过解调器将信号还原为原来的信号。</p><h2 id="传输媒体" tabindex="-1">传输媒体 <a class="header-anchor" href="#传输媒体" aria-label="Permalink to &quot;传输媒体&quot;">​</a></h2><h3 id="物理层的传输媒体" tabindex="-1">物理层的传输媒体 <a class="header-anchor" href="#物理层的传输媒体" aria-label="Permalink to &quot;物理层的传输媒体&quot;">​</a></h3><p>传输媒体处于物理层协议的下面。因此也有人把传输媒体当做第0层。</p><p>传输媒体可以分为：</p><ul><li>导引型传输媒体：电磁波被导引沿着固体媒体传播</li><li>非导引型传输媒体：自由空间</li></ul><h3 id="导引型传输媒体" tabindex="-1">导引型传输媒体 <a class="header-anchor" href="#导引型传输媒体" aria-label="Permalink to &quot;导引型传输媒体&quot;">​</a></h3><table><thead><tr><th>传输媒体</th><th>结构</th><th>分类</th><th>特点</th></tr></thead><tbody><tr><td>双绞线</td><td>由按螺旋结构排列的两根绝缘线构成。</td><td>非屏蔽双绞线（Shielded Twisted Pair，FTP）和屏蔽双绞线（Unshielded Twisted Pair，UTP）。</td><td>价格便宜，通信距离短。</td></tr><tr><td>同轴电缆</td><td>一个空心外部导体围裹着一个内部导体。</td><td>基带同轴电缆和带宽同轴电缆</td><td>具有很好的抗干扰特性，被广泛用于传输较高速率的数据，其传输距离比双绞线更远，价格也更高。</td></tr><tr><td>光纤</td><td>利用光纤传递光脉冲来进行通信。</td><td>由纤芯和包层构成。</td><td>单模光纤和多模光纤</td></tr></tbody></table><h3 id="非导引型传输媒体" tabindex="-1">非导引型传输媒体 <a class="header-anchor" href="#非导引型传输媒体" aria-label="Permalink to &quot;非导引型传输媒体&quot;">​</a></h3><p>无线介质使用无线电或微波承载表示二进制数字的电磁信号。</p><p>无线电波在自由空间传输可以解决由于地形复杂导致的施工难等问题，无线设备不断增加，无线网络成为家庭网络首选。</p><p>无线网络缺点：</p><ul><li>覆盖范围：某些建筑材料以及地形会限制它的有效覆盖。</li><li>干扰：易受家用电子设备以及其它无线通信装置干扰。</li><li>安全性：未经授权的设备和用户也能访问网络。</li></ul><h2 id="物理层设备" tabindex="-1">物理层设备 <a class="header-anchor" href="#物理层设备" aria-label="Permalink to &quot;物理层设备&quot;">​</a></h2><table><thead><tr><th>设备</th><th>功能</th></tr></thead><tbody><tr><td>中继器</td><td>对信号再生和还原，保持与原数据相同，以增加信号传输的距离，延长网络的长度。</td></tr><tr><td>集线器</td><td>对信号进行再生放大转发，对衰减的信号进行放大，端口收到数据后，从除输入端口外的所有端口广播出去。不具备信号的定向传送能力，是一个共享设备。</td></tr></tbody></table><h2 id="信道复用技术" tabindex="-1">信道复用技术 <a class="header-anchor" href="#信道复用技术" aria-label="Permalink to &quot;信道复用技术&quot;">​</a></h2><p>信道复用是利用一条物理线路同时传送多个不同数据流的方法，以提高传输线路的利用率。即把若干个彼此无关的信号合并为一个复合信号，并在一条共用信道上进行传输。</p><p>常用的信道复用技术：</p><table><thead><tr><th>复用技术</th><th>描述</th></tr></thead><tbody><tr><td>频分复用（Frequency Division Multiplexing，FDM）</td><td>所有用户同时占用不同的频带发送数据</td></tr><tr><td>时分复用（Time Division Multiplexing，TDM）</td><td></td></tr><tr><td>统计时分复用（Statistic TDM，STDM）</td><td></td></tr><tr><td>波分复用（Wavelength Division Multiplexing）</td><td></td></tr><tr><td>码分多路复用（Code Division Multiple Access，CDMA）</td><td></td></tr></tbody></table>',68),o=[r];function h(p,n,s,u,c,b){return d(),l("div",null,o)}const _=t(e,[["render",h]]);export{g as __pageData,_ as default};
