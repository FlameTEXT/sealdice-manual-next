import{_ as o,c as e,o as a,a7 as t}from"./chunks/framework.ByDU-z0G.js";const u=JSON.parse('{"title":"日志","description":"","frontmatter":{"lang":"zh-cn","title":"日志"},"headers":[],"relativePath":"use/log.md","filePath":"use/log.md","lastUpdated":1712309998000}'),c={name:"use/log.md"},d=t('<h1 id="日志" tabindex="-1">日志 <a class="header-anchor" href="#日志" aria-label="Permalink to &quot;日志&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">本节内容</p><p>本节将展示记录跑团日志相关的指令，请善用侧边栏和搜索，按需阅读文档。</p></div><h2 id="log-跑团日志" tabindex="-1"><code>.log</code> 跑团日志 <a class="header-anchor" href="#log-跑团日志" aria-label="Permalink to &quot;`.log` 跑团日志&quot;">​</a></h2><h3 id="记录日志" tabindex="-1">记录日志 <a class="header-anchor" href="#记录日志" aria-label="Permalink to &quot;记录日志&quot;">​</a></h3><p>对于每个群组，有若干个<strong>日志记录</strong>和一个<strong>当前日志</strong>。日志记录是本群记录过的所有日志。当前日志指向本群的其中一个日志记录，可以为空，但不会存在多个。</p><div class="info custom-block"><p class="custom-block-title">注意</p><p>海豹核心的日志记录只在骰子启用时进行。</p><p>即，如果你在一个群中通过 <code>.bot off</code> 关闭了骰子，即使有记录中的日志，也会暂停。</p></div><p><code>.log new &lt;日志名&gt;</code></p><p>新建一份日志，并且开始记录。</p><p>如果本群的当前日志不为空，则不能创建。如果创建成功，将本群的当前日志设定成新日志。</p><p><code>.log on (&lt;日志名&gt;)</code></p><p>如果不指定日志名，如果当前日志存在，则开始记录本群的当前日志。</p><p>如果指定日志名，则开始记录指定的日志，当前日志设定为指定的日志。</p><p><code>.log off</code></p><p>暂停记录当前日志。</p><p><code>.log halt</code> / <code>.log end</code></p><p>停止记录当前日志，将本群的当前日志设定为空。</p><p>如果使用的是 <code>.log end</code>，还会向海豹日志染色器上传日志，并返回一个获取链接。</p><p>停止的日志并不会丢失，仍然存在于本群的日志记录中，可以使用 <code>.log on &lt;日志名&gt;</code> 继续记录。</p><h3 id="数据统计" tabindex="-1">数据统计 <a class="header-anchor" href="#数据统计" aria-label="Permalink to &quot;数据统计&quot;">​</a></h3><p><code>.log stat (&lt;日志名&gt;)</code> / <code>.stat log (&lt;日志名&gt;)</code></p><p>统计指定日志中检定的成功失败数量，与角色的属性数值变化。</p><p>如果本群的当前日志不为空，可以省略日志名，统计当前日志。</p><h3 id="管理日志" tabindex="-1">管理日志 <a class="header-anchor" href="#管理日志" aria-label="Permalink to &quot;管理日志&quot;">​</a></h3><p><code>.log list</code></p><p>列出本群的所有日志记录。</p><p><code>.log get &lt;日志名&gt;</code></p><p>重新获取指定日志的染色器链接。</p><p><code>.log del &lt;日志名&gt;</code></p><p>删除指定日志。</p><div class="warning custom-block"><p class="custom-block-title">注意</p><p>删除的日志在海豹核心中永远失去，无法再继续记录。</p><p>如果已经上传到染色器，该链接仍然可以使用。你也可以在海豹核心中的 <code>data/default/log-exports/</code> 目录寻找日志的文件快照。</p></div><p><code>.log export &lt;日志名&gt;</code></p><p>如果平台支持发送文件，海豹核心将以 txt 文本文件的形式发送指定日志的全文。</p><p><code>.log export &lt;日志名&gt; &lt;邮箱地址&gt; [&lt;更多邮箱地址&gt;]</code></p><p>如果骰子配置了发件邮箱（见 UI「综合设置 - 基本设置」），海豹核心可以以 txt 文件附件的形式，向每个指定的邮箱地址发送指定日志的全文。</p><p>多个收件邮箱用空格隔开。</p><h3 id="骰主代取-log" tabindex="-1">骰主代取 Log <a class="header-anchor" href="#骰主代取-log" aria-label="Permalink to &quot;骰主代取 Log&quot;">​</a></h3><p>对于已经解散/退出的群聊，如果还想要取出其中的日志，需要知道对应的群号。</p><p>你可在任意有 Master 权限的交互平台做以下操作：</p><p>首先使用 <code>.log list &lt;群号&gt;</code> 列出该群的所有日志记录。</p><p>然后，使用 <code>.log masterget &lt;群号&gt; &lt;日志名&gt;</code> 获取指定日志记录的染色器链接。</p><div class="info custom-block"><p class="custom-block-title">UI 中管理跑团 Log</p><p>作为骰主，你也可以在管理后台的 扩展功能 - 跑团日志 界面，管理所有群的所有日志。</p></div><h2 id="ob-旁观" tabindex="-1"><code>.ob</code> 旁观 <a class="header-anchor" href="#ob-旁观" aria-label="Permalink to &quot;`.ob` 旁观&quot;">​</a></h2><p><code>.ob</code></p><p>让使用者成为观众。</p><p>这个指令的作用实际是给使用者的名字上前缀 <code>ob</code>。不会造成其他的效果。</p><p>对于海豹日志染色器，名字前缀有 ob 的用户发言可以被一键去除。</p><p><code>.ob exit</code></p><p>如果使用者的名字有<code>ob</code>前缀，这个指令将其去除。</p><h2 id="sn-自动群名片" tabindex="-1"><code>.sn</code> 自动群名片 <a class="header-anchor" href="#sn-自动群名片" aria-label="Permalink to &quot;`.sn` 自动群名片&quot;">​</a></h2><p>开启后，当用户角色卡的数值变化时，自动更新用户的群名片。</p><div class="info custom-block"><p class="custom-block-title">更改其他玩家的名片，需要骰子账号有适当的权限。</p><p>对于 QQ，这个权限是群主或群管理员。</p></div><h3 id="预设模板" tabindex="-1">预设模板 <a class="header-anchor" href="#预设模板" aria-label="Permalink to &quot;预设模板&quot;">​</a></h3><p><code>.sn coc</code> / <code>.sn cocL</code> ：<code>角色名 SAN70 HP14/14 DEX60</code></p><p>克苏鲁的呼唤常用格式，使用 <code>cocL</code> 以在名片中使用小写字母。</p><p><code>.sn dnd</code>：<code>角色名 HP10/10 AC8 DC6 PP8</code></p><p>龙与地下城常用格式。</p><p><code>.sn none</code>：<code>角色名</code></p><p>空白名片，当角色名变化时也会自动更新。</p><h3 id="扩展规则" tabindex="-1">扩展规则 <a class="header-anchor" href="#扩展规则" aria-label="Permalink to &quot;扩展规则&quot;">​</a></h3><p>有些插件提供的扩展规则也定义了名片模板。对于这样的扩展规则，可以使用 <code>.sn &lt;规则名&gt;</code> 使用其模板。</p><h3 id="自定义模板" tabindex="-1">自定义模板 <a class="header-anchor" href="#自定义模板" aria-label="Permalink to &quot;自定义模板&quot;">​</a></h3><p><code>.sn expr &lt;模板&gt;</code></p><p>在模板中使用变量以自动更新。</p><p>例如，CoC 模板的等价写法是 <code>.sn expr {$t玩家_RAW} SAN{san} HP{hp}/{hpmax} DEX{dex}</code></p><h3 id="关闭自动修改" tabindex="-1">关闭自动修改 <a class="header-anchor" href="#关闭自动修改" aria-label="Permalink to &quot;关闭自动修改&quot;">​</a></h3><p><code>.sn off</code></p><h2 id="hiy-数据统计" tabindex="-1"><code>.hiy</code> 数据统计 <a class="header-anchor" href="#hiy-数据统计" aria-label="Permalink to &quot;`.hiy` 数据统计&quot;">​</a></h2><p>海豹核心不提供统计整体成功率的功能。</p>',68),p=[d];function l(s,r,i,n,h,g){return a(),e("div",null,p)}const m=o(c,[["render",l]]);export{u as __pageData,m as default};
