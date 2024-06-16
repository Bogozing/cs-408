import{_ as t,c as l,o as e,a3 as a}from"./chunks/framework.D61v7-2O.js";const i="/cs-408/assets/MAC.Buw2_vm9.png",x=JSON.parse('{"title":"","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"cn/数据链路层.md","filePath":"cn/数据链路层.md"}'),r={name:"cn/数据链路层.md"},d=a('<h2 id="数据链路层基本概念" tabindex="-1">数据链路层基本概念 <a class="header-anchor" href="#数据链路层基本概念" aria-label="Permalink to &quot;数据链路层基本概念&quot;">​</a></h2><h3 id="链路、数据链路和帧" tabindex="-1">链路、数据链路和帧 <a class="header-anchor" href="#链路、数据链路和帧" aria-label="Permalink to &quot;链路、数据链路和帧&quot;">​</a></h3><p><strong>链路</strong>：一条点到点物理线路，中间没有任何其他交换节点</p><p><strong>数据链路</strong>：把实现数据传输的协议的硬件和软件加到链路上，就构成了数据链路。</p><p><strong>帧</strong>：对等实体之间水平方向逻辑通信的协议数据单元PDU</p><h3 id="三个基本问题" tabindex="-1">三个基本问题 <a class="header-anchor" href="#三个基本问题" aria-label="Permalink to &quot;三个基本问题&quot;">​</a></h3><ol><li>封装成帧</li></ol><p>在一段数据的前后分别添加首部和尾部，构成一个帧。帧首和帧尾的一个重要作用就是进行帧定界。</p><p>组帧方法包括：</p><table><thead><tr><th>组帧方法</th><th>描述</th></tr></thead><tbody><tr><td>字节填充</td><td>使用特定字符来定界一帧的开始和结束，SOH表示帧开始，EOT表示帧结束</td></tr><tr><td>零比特填充</td><td>数据出现连续的5个1就插入1个0</td></tr><tr><td>字符计数法</td><td>在帧头部使用一个计数字段来标明帧内字符数</td></tr><tr><td>违规编码法</td><td>在物理层进行比特编码时，通常采用违规编码法</td></tr></tbody></table><ol start="2"><li>透明传输</li></ol><p>数据链路层对上层交付的传输数据没有任何限制，就好似数据链路层不存在</p><ol start="3"><li>差错控制</li></ol><p>（1）相关概念</p><p><strong>比特差错</strong>：在传输过程中，1 可能会变成 0 而 0 也可能变成 1。</p><p><strong>误码率(Bit Error Rate，BER)</strong>：在一段时间内，传输错误的比特占所传输比特总数的比率。</p><p>为了保证数据传输的可靠性，在计算机网络传输数据时，必须采用各种<strong>差错检测</strong>措施，差错检查分为：</p><ul><li>检错编码：只检测帧在传输过程中出现了差错，并不能定位错误。</li><li>纠错编码：可以进行前向纠错，单开销较大，计算机网络中较少使用</li></ul><p>（2）检错编码</p><table><thead><tr><th>检错编码</th><th>描述</th></tr></thead><tbody><tr><td>奇偶校验码</td><td>在待发送的数据后面添加1位奇偶校验码。如果有奇数个位产生误码，则奇偶性发生变化，可以检查出误码；如果是偶数个位产生误码，则奇偶性不发生变化，不能检查出误码</td></tr><tr><td>循环冗余校验CRC</td><td>①收发双方约定一个生成多项式；<br>②发送方基于待发送的数据和生成多项式计算出差错检测码并一起传输；<br>③接收方通过生成多项式计算机收到的数据是否产生了误码。</td></tr></tbody></table><div class="warning custom-block"><p class="custom-block-title">⚠</p><p>CRC差错检测技术只能做到无差错接受。</p><p>无差错接受是指凡是接收端数据链路层接受的帧都没有比特差错（有差错的帧就丢弃不接受）。</p><p><strong>无比特差错</strong>并不等于<strong>无传输差错</strong>。</p></div><p>（3）纠错编码</p><p><strong>海明码</strong>实现原理：</p><p>①在有效信息位中加入几个校验码组成海明码。</p><p>②把海明码的每个二进制位分配到几个奇偶校验组中。</p><p>③当某一位出错后，就会引起有关的几个校验位的值发生变化。</p><h3 id="为网络层提供服务" tabindex="-1">为网络层提供服务 <a class="header-anchor" href="#为网络层提供服务" aria-label="Permalink to &quot;为网络层提供服务&quot;">​</a></h3><ul><li>无确认的无连接服务：适用于实时通信或误码率较低的通信信道</li><li>有确认的无连接服务：适用于误码率较高的通信信道</li><li>有确认的有连接服务：适用于对可靠性，实时性要求较高的场合</li></ul><h2 id="可靠传输" tabindex="-1">可靠传输 <a class="header-anchor" href="#可靠传输" aria-label="Permalink to &quot;可靠传输&quot;">​</a></h2><h3 id="基本概念" tabindex="-1">基本概念 <a class="header-anchor" href="#基本概念" aria-label="Permalink to &quot;基本概念&quot;">​</a></h3><p>数据链路层向上提供的服务类型：</p><ul><li>不可靠传输：直接丢弃误码的帧</li><li>可靠传输：即无传输差错，发送端发送什么，接收端接收什么，必须再加上<strong>确认</strong>和<strong>重传</strong>等机制。</li></ul><p>传输差错包括：帧丢失、帧重复、帧乱序等问题</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>一般情况，有线链路的误码率比较低，为了减小开销，并不要求数据链路层向上提供可靠传输服务，即出现误码，可靠传输由上层处理。</p><p>可靠传输服务不仅出现在数据链路层，上层也会出现相关的可靠传输。</p></div><h3 id="三种可靠传输机制" tabindex="-1">三种可靠传输机制 <a class="header-anchor" href="#三种可靠传输机制" aria-label="Permalink to &quot;三种可靠传输机制&quot;">​</a></h3><table><thead><tr><th>检错编码</th><th>描述</th></tr></thead><tbody><tr><td>停止-等待协议（SW）</td><td></td></tr><tr><td>后退N帧协议（GBN）</td><td></td></tr><tr><td>选择重传协议（SR）</td><td></td></tr></tbody></table><h2 id="点对点协议" tabindex="-1">点对点协议 <a class="header-anchor" href="#点对点协议" aria-label="Permalink to &quot;点对点协议&quot;">​</a></h2><ol><li>基本概念</li></ol><p>点对点协议（Point-to-Point Protocol，PPP）是用户和ISP通信用的数据链路层协议</p><ol start="2"><li>组成</li></ol><ul><li>封装方法：一个将 IP 数据报封装到串行链路的方法</li><li>链路控制协议（Link Control Protocol，LCP）：建立、配置、测试数据链路，协调两端设备相应选项的值（如：封帧格式，分组大小）,进行链路质量管理。</li><li>网络控制协议（Network Control Protocol，NCP）：每个协议支持不同的网络层协议</li></ul><ol start="3"><li>应满足的需求</li></ol><ul><li>简单——首要要求</li><li>封装成帧</li><li>透明性</li><li>差错检测(不需要纠错、流量控制、序号等可靠机制)</li><li>多种网络层协议 （ IP、 IPX 和 AppleTalk ）</li><li>多种类型链路 （串行、并行、同步、异步、低速、高速、电的、光的等）</li><li>检测连接状态</li><li>最大传送单元</li><li>网络层地址协商</li><li>数据压缩协商</li><li>验证协商（PAP、CHAP）</li><li>全双工</li></ul><ol start="4"><li>常用的认证协议</li></ol><ul><li>口令鉴别协议（Password Authentication Protocol，PAP）：</li><li>口令握手鉴别协议（Challenge-Handshake Authentication Protocol，CHAP）：</li></ul><h2 id="介质访问控制" tabindex="-1">介质访问控制 <a class="header-anchor" href="#介质访问控制" aria-label="Permalink to &quot;介质访问控制&quot;">​</a></h2><h3 id="信道复用技术" tabindex="-1">信道复用技术 <a class="header-anchor" href="#信道复用技术" aria-label="Permalink to &quot;信道复用技术&quot;">​</a></h3><h3 id="随机访问" tabindex="-1">随机访问 <a class="header-anchor" href="#随机访问" aria-label="Permalink to &quot;随机访问&quot;">​</a></h3><h2 id="局域网和广域网" tabindex="-1">局域网和广域网 <a class="header-anchor" href="#局域网和广域网" aria-label="Permalink to &quot;局域网和广域网&quot;">​</a></h2><h3 id="局域网体系结构" tabindex="-1">局域网体系结构 <a class="header-anchor" href="#局域网体系结构" aria-label="Permalink to &quot;局域网体系结构&quot;">​</a></h3><ol><li>拓扑结构：星形结构、总线形结构、环形结构、星形和总线形的复合结构</li></ol><ul><li>以太网：逻辑拓扑是总线形结构；物理拓扑是星形或拓展星形结构。</li><li>令牌环(EEE802.5)：逻辑拓扑是环形结构；物理拓扑是星形结构。</li><li>FDD1(IEEE802.8)：逻辑拓扑是环形结构；物理拓扑是双环结构。</li></ul><ol start="2"><li><p>传输介质：光纤、双绞线（主流）等</p></li><li><p>介质访问控制方式：CSMA/CD、令牌总线、令牌环等</p></li></ol><h3 id="以太网" tabindex="-1">以太网 <a class="header-anchor" href="#以太网" aria-label="Permalink to &quot;以太网&quot;">​</a></h3><ol><li><p>概念：以太网是遵循802.3标准的局域网</p></li><li><p>传输介质：</p></li></ol><table><thead><tr><th style="text-align:center;">参数</th><th style="text-align:center;">10Bases</th><th style="text-align:center;">10Base2</th><th style="text-align:center;">10Base-T</th><th style="text-align:center;">10Base-FL</th></tr></thead><tbody><tr><td style="text-align:center;">传输媒体</td><td style="text-align:center;">基带同轴电缆（粗）</td><td style="text-align:center;">基带同轴电缆（细）</td><td style="text-align:center;">非屏蔽双绞线</td><td style="text-align:center;">光纤</td></tr><tr><td style="text-align:center;">编码</td><td style="text-align:center;">曼彻斯特编码</td><td style="text-align:center;">曼彻斯特编码</td><td style="text-align:center;">曼彻斯特编码</td><td style="text-align:center;">曼彻斯特编码</td></tr><tr><td style="text-align:center;">拓扑结构</td><td style="text-align:center;">总线形</td><td style="text-align:center;">总线形</td><td style="text-align:center;">星形</td><td style="text-align:center;">点对点</td></tr><tr><td style="text-align:center;">最大段长</td><td style="text-align:center;">500m</td><td style="text-align:center;">185m</td><td style="text-align:center;">100m</td><td style="text-align:center;">2000m</td></tr><tr><td style="text-align:center;">最大结点数目</td><td style="text-align:center;">100</td><td style="text-align:center;">30</td><td style="text-align:center;">2</td><td style="text-align:center;">2</td></tr></tbody></table><ol start="3"><li>以太网MAC帧</li></ol><p>（1）基本概念</p><p>在局域网中，硬件地址又称为物理地址，或 MAC 地址,或适配器地址。</p><p>（2）MAC帧格式</p><p><img src="'+i+'" alt="alt text"></p><table><thead><tr><th style="text-align:center;">字段</th><th>说明</th></tr></thead><tbody><tr><td style="text-align:center;">类型</td><td>标志数据部分使用的是什么协议（0x0800：IP；0x8137：IPX）</td></tr><tr><td style="text-align:center;">数据</td><td>数据字段 46 ~ 1500 字节</td></tr><tr><td style="text-align:center;">FCS</td><td>校验范围是从目的地址到数据端末尾，采用32位循环冗余码</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>数据字段最小长度：最小帧 长64 字节 - 首部和尾部的18 字节</p><p>当数据字段的长度小于 46 字节时，应在数据字段的后面加入整数字节的填充字段</p></div><h3 id="虚拟局域网" tabindex="-1">虚拟局域网 <a class="header-anchor" href="#虚拟局域网" aria-label="Permalink to &quot;虚拟局域网&quot;">​</a></h3><p>虚拟局域网（VLAN）是由一些局域网网段构成的与物理位置无关的逻辑组。</p><p>三种划分VLAN的方法：</p><ul><li>基于端口</li><li>基于 MAC 地址</li><li>基于 IP 地址</li></ul><p>VLAN的优点：</p><ul><li>有效共享网络资源</li><li>简化网络管理</li><li>提高网络的安全性</li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>虚拟局域网并不是一种新型局域网，只是局域网给用户提供的一种服务。</p><p>虚拟局域网 VLAN技术可以分割广播域。</p></div><h3 id="对比" tabindex="-1">对比 <a class="header-anchor" href="#对比" aria-label="Permalink to &quot;对比&quot;">​</a></h3><table><thead><tr><th>比较标准</th><th>局域网</th><th>广域网</th></tr></thead><tbody><tr><td>覆盖范围</td><td>较小，通常在一个区域内</td><td>很广，通常跨区域</td></tr><tr><td>连接方式</td><td>普遍采用多点接入技术</td><td>节点之间都是点到点连接，但为了提高网络的可靠性，一个结点交换机往往与多个节点交换机相连</td></tr><tr><td>OSI层次</td><td>两层：物理层，数据链路层</td><td>三层：物理层，数据路层，网络层</td></tr><tr><td>着重点</td><td>强调数据传输</td><td>强调资源共享，通信子树主要使用分组交换技术</td></tr></tbody></table><p>两者相似点：</p><ul><li>广域网和局域网都是互联网的重要组成财构建，从互联网的角度来看，二者平等</li><li>连接到一个广城网和一个局域网上的主机在该网内进行通信，只需妻使用其网络的物理地址</li></ul><h2 id="数据链路层设备" tabindex="-1">数据链路层设备 <a class="header-anchor" href="#数据链路层设备" aria-label="Permalink to &quot;数据链路层设备&quot;">​</a></h2><h3 id="网桥" tabindex="-1">网桥 <a class="header-anchor" href="#网桥" aria-label="Permalink to &quot;网桥&quot;">​</a></h3><h3 id="交换机" tabindex="-1">交换机 <a class="header-anchor" href="#交换机" aria-label="Permalink to &quot;交换机&quot;">​</a></h3><ol><li><p>概念：交换机本质是一个多端口的网桥，每个端口都可以连接主机或者集线器，每两个端口都是一个冲突域，一般都工作在全双工方式。</p></li><li><p>特点</p></li></ol><ul><li>工作在全双工方式</li><li>能同时连通许多对接口，使每一对相互通信的主机都能无碰撞地传输数据。</li></ul><ol start="3"><li>自学习算法</li></ol><p>交换机收到一帧后先进行自学习。查找转发表中与收到帧的源地址有无相匹配的项目。</p><ul><li>如没有，就在转发表中增加一个项目（源地址、进入接口和时间）。</li><li>如有，则把原有的项目进行更新。</li></ul><p>转发帧。查找转发表中与收到帧的目的地址有无相匹配的项目。</p><ul><li>如没有，则通过所有其他接口（但进入交换机的接口除外）进行转发。</li><li>如有，则按转发表中给出的接口进行处理。若转发表中给出的接口就是该帧进入交换机的接口，则应丢弃这个帧（因为这时不需要经过交换机进行转发）。</li></ul><ol start="4"><li>两种交换模式</li></ol><ul><li>直通式交换机：检查帧的目的地址后立即发送出去</li><li>存储转发式交换机：先缓存，检查数据正确后再发送出去</li></ul>',86),o=[d];function n(s,h,c,p,u,b){return e(),l("div",null,o)}const P=t(r,[["render",n]]);export{x as __pageData,P as default};
