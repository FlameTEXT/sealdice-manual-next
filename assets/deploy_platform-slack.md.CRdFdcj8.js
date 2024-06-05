import{_ as c,D as l,c as i,j as e,a as o,I as t,a7 as s,o as d}from"./chunks/framework.ByDU-z0G.js";const A=JSON.parse('{"title":"Slack","description":"","frontmatter":{"lang":"zh-cn","title":"Slack"},"headers":[],"relativePath":"deploy/platform-slack.md","filePath":"deploy/platform-slack.md","lastUpdated":1714442589000}'),r={name:"deploy/platform-slack.md"},n=e("h1",{id:"slack",tabindex:"-1"},[o("Slack "),e("a",{class:"header-anchor",href:"#slack","aria-label":'Permalink to "Slack"'},"​")],-1),p=e("div",{class:"info custom-block"},[e("p",{class:"custom-block-title"},"本节内容"),e("p",null,"本节将包含你在 Slack 平台接入海豹核心需要了解的特定内容。")],-1),k={id:"slack-支持",tabindex:"-1"},h=e("a",{class:"header-anchor",href:"#slack-支持","aria-label":'Permalink to "Slack 支持 <Badge type="tip" text="v1.4.2" />"'},"​",-1),m=s('<h2 id="获取-token" tabindex="-1">获取 Token <a class="header-anchor" href="#获取-token" aria-label="Permalink to &quot;获取 Token&quot;">​</a></h2><p>要获取用于连接海豹的 Token 之前，你需要建立好一个应用。登录 <a href="https://api.slack.com/apps" target="_blank" rel="noreferrer">Slack Api 平台</a>，点击「Create New App」，再点击「From Scratch」。按照要求填写应用名字，并选择你想要海豹被部署到的工作区后点击「Create App」。</p><div class="tip custom-block"><p class="custom-block-title">提示：私骰模式</p><p>Slack 平台的机制使没有公开发布的应用无法加入被指定的单个工作区之外的地方。如有需求，可查看 Slack 提供的<a href="https://api.slack.com/authentication/oauth-v2" target="_blank" rel="noreferrer">发布指引</a>。</p></div><h3 id="app-token" tabindex="-1">APP Token <a class="header-anchor" href="#app-token" aria-label="Permalink to &quot;APP Token&quot;">​</a></h3><p>在侧边栏点击「Socket Mode」，打开「Enable Socket Mode」的开关。此处会弹出一个窗口，这将会是你的 <code>APP Token</code>。按需填写名字，并复制保存。 确认后点击下方「Enable Events」，打开开关后在「Subscribe to bot events」下添加如下事件：</p><ol><li><code>message.channels</code></li><li><code>message.groups</code></li><li><code>message.im</code></li><li><code>message.mpim</code></li></ol><div class="warning custom-block"><p class="custom-block-title">注意</p><p>如果这不是你期望的情况，请不要添加 <code>app_mention</code>。这个权限会让海豹只接收被 @ 到的指令和消息，导致 log 等功能无法正常工作。</p></div><h3 id="bot-token" tabindex="-1">Bot Token <a class="header-anchor" href="#bot-token" aria-label="Permalink to &quot;Bot Token&quot;">​</a></h3><p>在侧边栏点击「OAuth &amp; Permissions」，下滑在「Bot Token Scopes」下，添加海豹运作需要的权限:</p><ol><li><code>channels:history</code></li><li><code>channels:read</code></li><li><code>chat:write</code></li><li><code>chat:write.customize</code></li><li><code>files:write</code></li><li><code>groups:history</code></li><li><code>groups:read</code></li><li><code>im:history</code></li><li><code>im:read</code></li><li><code>im:write</code></li><li><code>mpim:history</code></li><li><code>mpim:read</code></li><li><code>links.embed:write</code></li><li><code>links:write</code></li></ol><p>点击侧边栏前往「Basic Information」页面，在「Install Your App」下点击「Install to Workplace」。完成后回到「OAuth &amp; Permissions」页面，在「OAuth Tokens for Your Workspace」下找到「Bot User OAuth Token」。这是你的 <code>Bot Token</code>。复制并保存。</p><h2 id="连接海豹" tabindex="-1">连接海豹 <a class="header-anchor" href="#连接海豹" aria-label="Permalink to &quot;连接海豹&quot;">​</a></h2><p>登录海豹并添加账号，选择「Slack」。在对应的区域填入 <code>APP Token</code> 和 <code>Bot Token</code>，点击连接。你的海豹应该可以正常在 Slack 平台运作了！</p>',13);function _(u,b,f,S,T,P){const a=l("Badge");return d(),i("div",null,[n,p,e("h2",k,[o("Slack 支持 "),t(a,{type:"tip",text:"v1.4.2"}),o(),h]),e("p",null,[o("海豹从 "),t(a,{type:"tip",text:"v1.4.2"}),o(" 开始支持对接 Slack。")]),m])}const v=c(r,[["render",_]]);export{A as __pageData,v as default};