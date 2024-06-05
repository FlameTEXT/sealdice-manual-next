import{_ as i,D as e,c,j as s,I as a,w as t,a7 as p,o as r}from"./chunks/framework.ByDU-z0G.js";const D=JSON.parse('{"title":"特色功能","description":"","frontmatter":{"lang":"zh-cn","title":"特色功能"},"headers":[],"relativePath":"deploy/special_feature.md","filePath":"deploy/special_feature.md","lastUpdated":1714442589000}'),d={name:"deploy/special_feature.md"},h=p('<h1 id="特色功能" tabindex="-1">特色功能 <a class="header-anchor" href="#特色功能" aria-label="Permalink to &quot;特色功能&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">本节内容</p><p>本节将会介绍海豹的特色功能。</p></div><h2 id="指令兼容性" tabindex="-1">指令兼容性 <a class="header-anchor" href="#指令兼容性" aria-label="Permalink to &quot;指令兼容性&quot;">​</a></h2><p>海豹核心兼容了溯洄核心、赵骰核心和塔骰核心的绝大部分主流指令，无论之前用过哪一个都可以轻松上手。</p><p>海豹核心对指令格式不敏感，你可以使用 <code>.r1d20 +1</code>、<code>.r d20+1</code>、<code>.stshow力量 敏捷</code>、<code>。st hp - 1</code> 等等各种写法。</p><div class="tip custom-block"><p class="custom-block-title">提示</p><p>虽然海豹尽可能提高兼容性，我们仍推荐适当使用空格，以避免预期外结果。</p></div><h2 id="易于部署和使用" tabindex="-1">易于部署和使用 <a class="header-anchor" href="#易于部署和使用" aria-label="Permalink to &quot;易于部署和使用&quot;">​</a></h2><p>海豹的设计初衷是 <strong>「能被任何 TRPG 玩家喜爱和使用」</strong>，同时秉持 <strong>「没有提供 UI 的功能等于不存在」</strong> 的理念。</p><p>只需一个不到 25 MB 的安装包、一个可用的机器人账号、和一小段空闲时间，任何人都可以搭建一个 TRPG 骰子。</p><div class="tip custom-block"><p class="custom-block-title">提示</p><p>如果你希望在 QQ 平台上搭建骰子，由于 QQ 原则上不允许机器人账号，你会需要使用一些<strong>特殊技术</strong>，这可能花费你更多时间和精力。</p></div><h2 id="极少的资源占用" tabindex="-1">极少的资源占用 <a class="header-anchor" href="#极少的资源占用" aria-label="Permalink to &quot;极少的资源占用&quot;">​</a></h2><p>由于 Golang 的高效，海豹核心只占用大概 40 MB 内存，以及极少的 CPU 资源。</p><p>自带的《CoC 7th 怪物之锤》和《D&amp;D 系列资料》会另外占用 50 - 70 MB 内存，但能提供极为强大的资料查询功能。</p><p>内存占用会随着持续运行而稍稍增长并有所波动。根据我们的观察，即使是持续运行数月的大型公骰，内存占用也不会超过数百 MB。</p><h2 id="强自定义" tabindex="-1">强自定义 <a class="header-anchor" href="#强自定义" aria-label="Permalink to &quot;强自定义&quot;">​</a></h2><p>提供了友好的 WebUI 界面，可以自定义大部分指令的回复语句。</p><p>同时对于自定义回复功能进行了强化，你可以编写一些复杂逻辑，使你的骰子更加鲜活。</p><h2 id="人工智能鸽子" tabindex="-1">人工智能鸽子 <a class="header-anchor" href="#人工智能鸽子" aria-label="Permalink to &quot;人工智能鸽子&quot;">​</a></h2><p>让你想咕就咕。</p>',19),u={class:"info custom-block"},b=s("p",{class:"custom-block-title"},"示例",-1),m=p('<h2 id="强大的查询功能" tabindex="-1">强大的查询功能 <a class="header-anchor" href="#强大的查询功能" aria-label="Permalink to &quot;强大的查询功能&quot;">​</a></h2><p>海豹搭载了全文搜索技术（仅限 PC 版），可以看作是一个微型搜索引擎。</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.find 30尺 法术</span></span></code></pre></div><p>细节可参见 <a href="./../use/core.html#find-词条查询指令">查询指令</a> 一节。</p><h2 id="通用特化支持" tabindex="-1">通用特化支持 <a class="header-anchor" href="#通用特化支持" aria-label="Permalink to &quot;通用特化支持&quot;">​</a></h2><h3 id="代替他人检定-操作他人属性" tabindex="-1">代替他人检定 / 操作他人属性 <a class="header-anchor" href="#代替他人检定-操作他人属性" aria-label="Permalink to &quot;代替他人检定 / 操作他人属性&quot;">​</a></h3><h2 id="coc-特化支持" tabindex="-1">CoC 特化支持 <a class="header-anchor" href="#coc-特化支持" aria-label="Permalink to &quot;CoC 特化支持&quot;">​</a></h2><h3 id="属性同义词" tabindex="-1">属性同义词 <a class="header-anchor" href="#属性同义词" aria-label="Permalink to &quot;属性同义词&quot;">​</a></h3><p>各种旧版翻译、俗称、简繁汉字的属性被视为同一属性。</p><h3 id="默认技能等级" tabindex="-1">默认技能等级 <a class="header-anchor" href="#默认技能等级" aria-label="Permalink to &quot;默认技能等级&quot;">​</a></h3><p>内置部分人物卡上没有的默认技能等级。</p><p>包括不限于速记、园艺、攀爬、各种武器等等。</p><h3 id="支持-scb-指令" tabindex="-1">支持 .scb 指令 <a class="header-anchor" href="#支持-scb-指令" aria-label="Permalink to &quot;支持 .scb 指令&quot;">​</a></h3><p>用于在 sc 时附加一个奖励骰。</p><p>适用于规则书中的<strong>关键连接</strong>自救规则。</p><h2 id="d-d-特化支持" tabindex="-1">D&amp;D 特化支持 <a class="header-anchor" href="#d-d-特化支持" aria-label="Permalink to &quot;D&amp;D 特化支持&quot;">​</a></h2><h3 id="属性同义词-1" tabindex="-1">属性同义词 <a class="header-anchor" href="#属性同义词-1" aria-label="Permalink to &quot;属性同义词&quot;">​</a></h3><p>各种旧版翻译、俗称、简繁汉字的属性被视为同一属性。</p><h3 id="优势骰劣势骰" tabindex="-1">优势骰劣势骰 <a class="header-anchor" href="#优势骰劣势骰" aria-label="Permalink to &quot;优势骰劣势骰&quot;">​</a></h3>',19),g={class:"info custom-block"},_=s("p",{class:"custom-block-title"},"示例",-1),f=p(`<h3 id="属性调整值和熟练自动计算" tabindex="-1">属性调整值和熟练自动计算 <a class="header-anchor" href="#属性调整值和熟练自动计算" aria-label="Permalink to &quot;属性调整值和熟练自动计算&quot;">​</a></h3><h3 id="临时属性" tabindex="-1">临时属性 <a class="header-anchor" href="#临时属性" aria-label="Permalink to &quot;临时属性&quot;">​</a></h3><h3 id="法术位支持" tabindex="-1">法术位支持 <a class="header-anchor" href="#法术位支持" aria-label="Permalink to &quot;法术位支持&quot;">​</a></h3><h3 id="死亡豁免" tabindex="-1">死亡豁免 <a class="header-anchor" href="#死亡豁免" aria-label="Permalink to &quot;死亡豁免&quot;">​</a></h3><h3 id="休息" tabindex="-1">休息 <a class="header-anchor" href="#休息" aria-label="Permalink to &quot;休息&quot;">​</a></h3><h2 id="可以实时编辑的跑团日志" tabindex="-1">可以实时编辑的跑团日志 <a class="header-anchor" href="#可以实时编辑的跑团日志" aria-label="Permalink to &quot;可以实时编辑的跑团日志&quot;">​</a></h2><p>海豹开发了 <a href="https://log.sealdice.com/" target="_blank" rel="noreferrer">日志在线染色器</a>。</p><p>在海豹中记录的日志会自动上传，省去你一一发送日志文件的麻烦。</p><p>除了海豹 Log 自用之外，支持 QQ 格式和塔骰格式，将你的 Log 全文粘贴到文本框里即可。</p><h2 id="是纯净骰-也是娱乐骰" tabindex="-1">是纯净骰，也是娱乐骰 <a class="header-anchor" href="#是纯净骰-也是娱乐骰" aria-label="Permalink to &quot;是纯净骰，也是娱乐骰&quot;">​</a></h2><p>海豹除了核心指令之外，都被设计为可插拔的，目前有 7 个内置扩展。</p><p>关闭对应扩展会连同扩展带来的指令一块关闭。</p><p>因此在跑团时，如果你不想要任何娱乐功能，你可以（以 CoC 团为例）：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.ext fun off // 关闭.jrrp和.gugu</span></span>
<span class="line"><span>.ext reply off // 关闭关键字回复</span></span>
<span class="line"><span>.ext deck off // 关闭抽牌 .draw</span></span>
<span class="line"><span>.ext dnd5e off // 关闭dnd5e系列指令</span></span>
<span class="line"><span>.ext story off // 关闭.name[随机指令]/.modu[魔都查询]/.who[排序]等</span></span>
<span class="line"><span></span></span>
<span class="line"><span>也可以写成一行:</span></span>
<span class="line"><span>.ext fun reply deck dnd5e story off</span></span></code></pre></div><p>这样一来，就只剩下 coc 系列指令和 log 指令了。</p><p>这个改动在当前群聊持续生效。你也可以再打开相应扩展：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.ext fun on</span></span></code></pre></div><p>如果你是骰主，你也可以在 WebUI 中设置各个扩展是否默认开启。这配置对于海豹核心新加入的群聊生效。</p><h2 id="更强的指令支持" tabindex="-1">更强的指令支持 <a class="header-anchor" href="#更强的指令支持" aria-label="Permalink to &quot;更强的指令支持&quot;">​</a></h2><p>海豹核心将表达式翻译成字节码，丢进指令虚拟机里执行，同时也做了很强的兼容性处理。</p><p>可以在不同骰系下测试一下这些指令：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.r 30 + (-1d20) + 49</span></span>
<span class="line"><span>.r d20 + (3 + 1d4)</span></span>
<span class="line"><span>.r 1 + (3+2)d(4+2d10)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.sc 0/-1</span></span>
<span class="line"><span>.sc (1+2)/0</span></span>
<span class="line"><span>.sc 0/1d4+(3*2)</span></span>
<span class="line"><span>.sc 1 / 2</span></span>
<span class="line"><span>.sc 1/2 + 3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.ra b 测试50</span></span>
<span class="line"><span>.ra b 50 测试</span></span></code></pre></div><p>彩蛋：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.r 1+d10-3*4 --asm</span></span>
<span class="line"><span>&lt;木落&gt;掷出了 1+d10-3*4=1 + 3[1d10=3] - 12=-8</span></span>
<span class="line"><span>=== VM Code ===</span></span>
<span class="line"><span>push 1</span></span>
<span class="line"><span>mark.left</span></span>
<span class="line"><span>push 1</span></span>
<span class="line"><span>mark.left</span></span>
<span class="line"><span>push 10</span></span>
<span class="line"><span>dice</span></span>
<span class="line"><span>add</span></span>
<span class="line"><span>mark.left</span></span>
<span class="line"><span>push 3</span></span>
<span class="line"><span>mark.left</span></span>
<span class="line"><span>push 4</span></span>
<span class="line"><span>mul</span></span>
<span class="line"><span>sub</span></span>
<span class="line"><span>halt</span></span>
<span class="line"><span>=== VM Code End===</span></span></code></pre></div><h2 id="跨平台" tabindex="-1">跨平台 <a class="header-anchor" href="#跨平台" aria-label="Permalink to &quot;跨平台&quot;">​</a></h2><p>海豹核心的底层架构，支持单进程<strong>多号</strong>，也支持很方便地<strong>多开</strong>。</p><p><strong>多号</strong>指每个骰子上连接多个帐号，并且支持同时连接不同平台。</p><p><strong>多开</strong>指同时运行多个海豹核心，以提供各自不同的服务内容。</p><h2 id="trpg-规则支持列表" tabindex="-1">TRPG 规则支持列表 <a class="header-anchor" href="#trpg-规则支持列表" aria-label="Permalink to &quot;TRPG 规则支持列表&quot;">​</a></h2><ul><li>COC7</li><li>COC - DeltaGreen (.setcoc dg)</li><li>DND5e</li><li>暗影狂奔 (.rsr)</li><li>WOD/无限团 (.ww)</li><li>双十字 DoubleCross (.dx)</li><li>共鸣性怪异 Emoklore (.ek .ekgen)</li><li>剑世界 2.5 (插件)</li><li>明日方舟跑团规则 (插件)</li><li>其它插件由海豹社区提供，欢迎前去 <a href="https://github.com/sealdice/javascript/tree/main/scripts/%E6%A1%8C%E6%B8%B8%E8%A7%84%E5%88%99" target="_blank" rel="noreferrer">插件仓库</a> 查看</li></ul><p>如果你不跑这些规则，或者觉得并无必要，可以在后台关闭对应的指令。</p><p>如果你喜欢的规则这里没有，那么可以去插件仓库看一看，或者自己编写规则模板插件！</p>`,32);function k(x,q,P,C,v,T){const n=e("ChatBox"),l=e("PluginTabsTab"),o=e("PluginTabs");return r(),c("div",null,[h,s("div",u,[b,a(o,null,{default:t(()=>[a(l,{label:".gugu"},{default:t(()=>[a(n,{messages:[{content:".gugu",send:!0},{content:"🕊️: <木落>在来开团的路上被巨龙叼走了！"}]})]),_:1}),a(l,{label:"查看鸽子背后的故事"},{default:t(()=>[a(n,{messages:[{content:".gugu 来源",send:!0},{content:`🕊️: 前往了一个以前捕鲸的小岛度假~这里人很亲切！但是吃了这里的鱼肉料理之后有点晕晕的诶...想到前几天<木落>的短信，还是别追究他为什么不在了。
	——鹊鹊结合实际经历创作`}]})]),_:1})]),_:1})]),m,s("div",g,[_,a(n,{messages:[{content:".set 20",send:!0},{content:"设定默认骰子面数为 20"},{content:".r d20优势",send:!0},{content:"<木落>掷出了 d20优势=[{7 | 6 }]=7"},{content:".r d劣势",send:!0},{content:"<木落>掷出了 d劣势=[{16 | 18 }]=16"}]})]),f])}const A=i(d,[["render",k]]);export{D as __pageData,A as default};
