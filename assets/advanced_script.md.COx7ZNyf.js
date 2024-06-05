import{_ as t,c as a,o as s,a7 as e}from"./chunks/framework.ByDU-z0G.js";const b=JSON.parse('{"title":"内置脚本语言","description":"","frontmatter":{"lang":"zh-cn","title":"内置脚本语言"},"headers":[],"relativePath":"advanced/script.md","filePath":"advanced/script.md","lastUpdated":1715349720000}'),d={name:"advanced/script.md"},n=e(`<h1 id="内置脚本语言" tabindex="-1">内置脚本语言 <a class="header-anchor" href="#内置脚本语言" aria-label="Permalink to &quot;内置脚本语言&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">本节内容</p><p>本节将介绍海豹内置的脚本语言，请善用侧边栏和搜索，按需阅读文档。</p></div><p>为了在很多地方支持实现一些逻辑，但又不至于直接使用学习门槛较高的正式编程语言，海豹提供了一种简单易学的脚本语言，可以称为「海豹语」「豹语」等。</p><h2 id="变量" tabindex="-1">变量 <a class="header-anchor" href="#变量" aria-label="Permalink to &quot;变量&quot;">​</a></h2><p>你可能注意到，在自定义文案等地方，出现了一些以 <code>$t</code> 开头的东西，这些是海豹中的<strong>变量</strong>。</p><p>变量的名称可以是汉字、字母和数字，<code>$t</code> 是一个特殊的变量前缀，还有其它的前缀。不同前缀代表不同的作用域：</p><table><thead><tr><th>变量名字</th><th>用途</th><th>举例</th></tr></thead><tbody><tr><td>普通名字</td><td>玩家的角色属性</td><td>理智、力量、智力</td></tr><tr><td><code>$t开头</code></td><td>个人临时变量，不存数据库</td><td><code>$t随机点数</code></td></tr><tr><td><code>$m开头</code></td><td>个人变量，跨群存在</td><td><code>$m今日人品</code></td></tr><tr><td><code>$g开头</code></td><td>群变量，群内所有人共享</td><td><code>$g群主体重</code></td></tr></tbody></table><p>所有变量均可以在 <code>.rx</code> / <code>.rxh</code> / <code>.ra</code>/ <code>.text</code> 等指令以及「自定义文案」中使用。</p><div class="warning custom-block"><p class="custom-block-title">注意：<code>$t</code> 是临时变量</p><p><code>$t</code> 开头的临时变量的存活周期<strong>仅为单次指令执行</strong>，执行完毕后<strong>不应当认为该变量值还保留</strong>。</p><p>在下一次指令中使用上一次指令设置的 <code>$t</code> 变量属于<strong>未定义行为</strong>，可能会出现包括但不限于变量值不变，变量值丢失，变量值被覆盖，变量值变为随机数，变量值变成 <code>114514</code> 等任何情况。如果你需要这样的持久变量，请使用 <code>$m</code> 或 <code>$g</code> 代替。</p><p><em>内置的 <code>$t</code> 变量的值固定并不代表它们是持久变量，其值是在每次指令执行的初始阶段设置的。</em></p></div><div class="tip custom-block"><p class="custom-block-title">提示：变量不生效？</p><p>如果一部分变量无效，请检查海豹是否为最新版本。</p></div><div class="info custom-block"><p class="custom-block-title">一些内置变量</p><table><thead><tr><th>变量名</th><th>内容</th><th>示例结果</th></tr></thead><tbody><tr><td><code>$t玩家</code></td><td>当前人物卡的名字，如果不存在则为群昵称或 QQ 昵称。</td><td>&lt;木落&gt;</td></tr><tr><td><code>$t玩家_RAW</code></td><td>同上，但没有&lt;&gt;</td><td>木落</td></tr><tr><td><code>$tQQ昵称</code></td><td>QQ 昵称</td><td>&lt;木落&gt;</td></tr><tr><td><code>$t账号ID</code></td><td>海豹格式的 ID</td><td>QQ:123456789</td></tr><tr><td><code>$t账号ID_RAW</code></td><td>原始格式的 ID</td><td>123456789</td></tr><tr><td><code>$tQQ</code></td><td>海豹格式的 ID</td><td>QQ:123456789</td></tr><tr><td><code>$t群名</code></td><td>群名</td><td>海豹核心·SealDice 用户群</td></tr><tr><td><code>$t群号</code></td><td>海豹格式的 ID</td><td>QQ-Group:987654321</td></tr><tr><td><code>$t群号_RAW</code></td><td>原始格式的 ID</td><td>987654321</td></tr><tr><td><code>$t个人骰子面数</code></td><td>个人骰子面数</td><td>100</td></tr><tr><td><code>$tDate</code></td><td>数字格式的现日期</td><td>20230109</td></tr><tr><td><code>$tYear</code></td><td>数字格式的年份</td><td>2023</td></tr><tr><td><code>$tMonth</code></td><td>数字格式的现月份</td><td>1</td></tr><tr><td><code>$tDay</code></td><td>数字格式的现日期</td><td>9</td></tr><tr><td><code>$tWeekday</code></td><td>数字格式的星期（1-7）</td><td>1</td></tr><tr><td><code>$tHour</code></td><td>数字格式的现时间（小时）</td><td>15</td></tr><tr><td><code>$tMinute</code></td><td>数字格式的现时间（分钟）</td><td>41</td></tr><tr><td><code>$tSecond</code></td><td>数字格式的现时间（秒）</td><td>55</td></tr><tr><td><code>$tTimestamp</code></td><td>数字格式的 10 位时间戳</td><td>1673250115</td></tr><tr><td><code>$t文本长度</code></td><td>触发消息的文本，汉字长度为 3，英文字母和数字长度为 1。</td><td>6</td></tr><tr><td><code>$t平台</code></td><td>触发的平台</td><td>QQ</td></tr><tr><td><code>$t游戏模式</code></td><td>随 <code>.set coc/dnd</code> 改变</td><td>coc7</td></tr><tr><td><code>$t消息类型</code></td><td>触发位置为群还是私聊（group/private）</td><td>group</td></tr><tr><td><code>娱乐:今日人品</code></td><td>自定义文案</td><td>&lt;木落&gt; 的今日人品为 0</td></tr><tr><td><code>常量:APPNAME</code></td><td>软件名</td><td>SealDice</td></tr><tr><td><code>常量:VERSION</code></td><td>版本号</td><td>1.4.0</td></tr><tr><td><code>$tMsgID</code></td><td>消息 ID，仅自定义回复中可用。</td><td>-123</td></tr></tbody></table><p>所有自定义文案也均为可用变量。</p></div><h2 id="数据类型和赋值" tabindex="-1">数据类型和赋值 <a class="header-anchor" href="#数据类型和赋值" aria-label="Permalink to &quot;数据类型和赋值&quot;">​</a></h2><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 注意，目前并不支持写注释，此为教程中便于展示</span></span>
<span class="line"><span>// 文本类型</span></span>
<span class="line"><span>$t0 = &#39;文本&#39;</span></span>
<span class="line"><span>$t0 = &quot;也是文本&quot;</span></span>
<span class="line"><span>$t0 = \`特殊文本类型，可以插入表达式，例如，玩家的力量数值: {力量}\`</span></span>
<span class="line"><span>$t0 = \`另一种插入表达式的写法 {% 力量 %} \`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 数字类型</span></span>
<span class="line"><span>$t0 = 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 布尔类型：没有专门的布尔类型，0 或空字符串被视为 False，非零和非空字符串为 True</span></span>
<span class="line"><span>$t0 &gt; 1</span></span>
<span class="line"><span>$t0 &gt;= 1</span></span>
<span class="line"><span>$t0 == 1</span></span>
<span class="line"><span>$t0 != 1</span></span>
<span class="line"><span>$t0 &lt; 1</span></span>
<span class="line"><span>$t0 &lt;= 1</span></span></code></pre></div><h2 id="语句" tabindex="-1">语句 <a class="header-anchor" href="#语句" aria-label="Permalink to &quot;语句&quot;">​</a></h2><p>多个语句可以用 <code>;</code> 分隔，取分隔后的最后一项的值，为整个表达式的值，例如：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$t0 = 1;2;3</span></span></code></pre></div><p>此时 <code>$t0</code> 的值为 3。</p><div class="warning custom-block"><p class="custom-block-title">注意：分号的使用</p><p><strong>不要</strong>在最后一条语句的后面再使用分号，会变得不幸。</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark has-highlighted vp-code" tabindex="0"><code><span class="line"><span>// 正确写法</span></span>
<span class="line"><span>if 1 {</span></span>
<span class="line"><span>    $t0 = 1;</span></span>
<span class="line highlighted"><span>    $t1 = 2</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 错误写法</span></span>
<span class="line"><span>if 1 {</span></span>
<span class="line"><span>    $t0 = 1;</span></span>
<span class="line highlighted error"><span>    $t1 = 2;</span></span>
<span class="line"><span>}</span></span></code></pre></div></div><h2 id="运算符" tabindex="-1">运算符 <a class="header-anchor" href="#运算符" aria-label="Permalink to &quot;运算符&quot;">​</a></h2><h3 id="数学运算" tabindex="-1">数学运算 <a class="header-anchor" href="#数学运算" aria-label="Permalink to &quot;数学运算&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>加减乘除余 + - * / %</span></span>
<span class="line"><span>乘方 ^ ** // 2 ** 3 或 2 ^ 3，即 2 的 3 次方</span></span></code></pre></div><h3 id="逻辑运算" tabindex="-1">逻辑运算 <a class="header-anchor" href="#逻辑运算" aria-label="Permalink to &quot;逻辑运算&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&amp;&amp; 逻辑与</span></span>
<span class="line"><span>|| 逻辑或</span></span>
<span class="line"><span>!  逻辑非</span></span></code></pre></div><h3 id="骰子算符" tabindex="-1">骰子算符 <a class="header-anchor" href="#骰子算符" aria-label="Permalink to &quot;骰子算符&quot;">​</a></h3><p><code>d</code> 常规骰子算符，用法举例 <code>d20</code> <code>2d20k1</code> <code>d20 优势</code>。</p><p><code>f</code> 命运骰，随机骰 4 次，每骰结果可能是 -1 0 1，记为 - 0 +。</p><p><code>b</code> 奖励骰 (CoC)。</p><p><code>p</code> 惩罚骰 (CoC)。</p><p><code>c</code> 双十字。</p><h3 id="条件算符" tabindex="-1">条件算符 <a class="header-anchor" href="#条件算符" aria-label="Permalink to &quot;条件算符&quot;">​</a></h3><h4 id="条件算符-1" tabindex="-1">条件算符 <code>?</code> <a class="header-anchor" href="#条件算符-1" aria-label="Permalink to &quot;条件算符 \`?\`&quot;">​</a></h4><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>灵视 &gt;= 40 ? &#39;如果灵视达到40以上，你就能看到这句话&#39;</span></span></code></pre></div><p>可以用这个指令测试，下同：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.st 灵视 41</span></span>
<span class="line"><span>.text {灵视 &gt;= 40 ? &#39;如果灵视达到 40 以上，你就能看到这句话&#39;}</span></span></code></pre></div><h4 id="多重条件算符" tabindex="-1">多重条件算符 <code>? ,</code> <a class="header-anchor" href="#多重条件算符" aria-label="Permalink to &quot;多重条件算符 \`? ,\`&quot;">​</a></h4><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>灵视 &gt;= 80 ? &#39;看得很清楚吗？&#39;,</span></span>
<span class="line"><span>灵视 &gt;= 50 ? &#39;不错，再靠近一点……&#39;,</span></span>
<span class="line"><span>灵视 &gt;= 30 ? &#39;仔细听……&#39;,</span></span>
<span class="line"><span>灵视 &gt;= 0 ? &#39;呵，无知之人。&#39;</span></span></code></pre></div><p>应用举例，默认的 jrrp</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{$t玩家} 今日人品为{$t人品}，{%</span></span>
<span class="line"><span>    $t人品 &gt; 95 ? &#39;人品爆表！&#39;,</span></span>
<span class="line"><span>    $t人品 &gt; 80 ? &#39;运气还不错！&#39;,</span></span>
<span class="line"><span>    $t人品 &gt; 50 ? &#39;人品还行吧&#39;,</span></span>
<span class="line"><span>    $t人品 &gt; 10 ? &#39;今天不太行&#39;,</span></span>
<span class="line"><span>    1 ? &#39;流年不利啊！&#39;</span></span>
<span class="line"><span>%}</span></span></code></pre></div><h4 id="三目运算符" tabindex="-1">三目运算符 <code>? :</code> <a class="header-anchor" href="#三目运算符" aria-label="Permalink to &quot;三目运算符 \`? :\`&quot;">​</a></h4><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>灵视 &gt;= 40 ? &#39;如果灵视达到 40 以上，你就能看到这句话&#39; : &#39;无知亦是幸运&#39;</span></span></code></pre></div><h2 id="条件语句" tabindex="-1">条件语句 <a class="header-anchor" href="#条件语句" aria-label="Permalink to &quot;条件语句&quot;">​</a></h2><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>if $t0 &gt; 10 {</span></span>
<span class="line"><span>    $t1 = &quot;aaa&quot;</span></span>
<span class="line"><span>} else {</span></span>
<span class="line"><span>    $t1 = &#39;bbb&#39;</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">提示：出现格式化错误</p><p>如果上面的代码输出「格式化错误」，那是因为你的 <code>$t0</code> 不是数值。字符串当然不能和数值比较大小，所以会报错。</p><p>解决方法：<code>.text {$t0=0}</code></p></div><p>实际测试：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.text {% if $t0 &gt; 10 { $t1=&quot;aaa&quot;} else { $t1 = &#39;bbb&#39; }; $t1 %}</span></span></code></pre></div>`,45),p=[n];function c(o,l,i,r,h,g){return s(),a("div",null,p)}const v=t(d,[["render",c]]);export{b as __pageData,v as default};
