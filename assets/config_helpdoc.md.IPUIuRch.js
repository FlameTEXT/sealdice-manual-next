import{_ as p,D as c,c as l,j as a,a as e,I as o,a7 as s,o as i}from"./chunks/framework.ByDU-z0G.js";const r="/sealdice-manual-next/assets/helpdoc-ui.BSAvcQ-L.png",d="/sealdice-manual-next/assets/helpdoc-upload.vCwM61uF.png",n="/sealdice-manual-next/assets/helpdoc-edit-group.0i3M9SvD.png",h="/sealdice-manual-next/assets/helpdoc-delete.YxqErX-u.png",_="/sealdice-manual-next/assets/helpdoc-itemlist.lVEcsDO6.png",D=JSON.parse('{"title":"帮助文档","description":"","frontmatter":{"lang":"zh-cn","title":"帮助文档"},"headers":[],"relativePath":"config/helpdoc.md","filePath":"config/helpdoc.md","lastUpdated":1712309998000}'),m={name:"config/helpdoc.md"},u=s('<h1 id="帮助文档" tabindex="-1">帮助文档 <a class="header-anchor" href="#帮助文档" aria-label="Permalink to &quot;帮助文档&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">本节内容</p><p>本节将介绍帮助文档功能，请善用侧边栏和搜索，按需阅读文档。</p></div><h2 id="什么是帮助文档" tabindex="-1">什么是帮助文档？ <a class="header-anchor" href="#什么是帮助文档" aria-label="Permalink to &quot;什么是帮助文档？&quot;">​</a></h2><p>「帮助文档」是提供给骰子使用的查询资料，一般用于各种规则的资料查询，也可用于编写骰子的使用帮助。</p><h2 id="获取帮助文档" tabindex="-1">获取帮助文档 <a class="header-anchor" href="#获取帮助文档" aria-label="Permalink to &quot;获取帮助文档&quot;">​</a></h2><p>你可以在 <a href="https://github.com/sealdice/helpdoc" target="_blank" rel="noreferrer">帮助文档仓库</a> 或官方群的群文件中找到其他骰主分享的帮助文档。</p><div class="tip custom-block"><p class="custom-block-title">提示：无法访问仓库？</p><p>仓库位于 GitHub，访问时请确认你的网络状况。</p></div><p>海豹目前可以健康食用的 helpdoc 格式为 <code>json</code> 以及 <code>xlsx</code>，其中更多使用后者来编写资料查询文档。</p><p>海豹官方安装包中也默认提供了 CoC 和 D&amp;D 的资料查询文档，无需额外下载即可使用相关内容搜索。</p><h2 id="如何使用帮助文档" tabindex="-1">如何使用帮助文档？ <a class="header-anchor" href="#如何使用帮助文档" aria-label="Permalink to &quot;如何使用帮助文档？&quot;">​</a></h2><p>当你在帮助文档中写下 <code>词条A</code> 后，通过 <code>.help 词条A</code> 即可返回对应词条内容。</p><p>对于资料查询，更建议使用 <code>.find</code> 来搜索词条内容。</p><p>见 <a href="./../use/core.html#find查询-查询指令">使用 - 核心指令</a>。</p><h2 id="如何管理帮助文档" tabindex="-1">如何管理帮助文档？ <a class="header-anchor" href="#如何管理帮助文档" aria-label="Permalink to &quot;如何管理帮助文档？&quot;">​</a></h2><p>点击海豹 UI 界面的「扩展功能 - 帮助文档」选项，你就可以进入帮助文档的管理页面。</p><p><img src="'+r+'" alt="帮助文档管理"></p><p>我们可以看到默认置入的 CoC 与 D&amp;D 的资料文档已经在列表中展示出来了。</p><p>帮助文档列表以文件树的形式展示。文件夹内部的文档在一级文件夹下平铺展示，最外层的 <strong>一级文件夹名将作为其中所有文档的分组名</strong>，用于精确控制查询范围的分组。</p>',18),b=s('<p>详见 <a href="./../use/core.html#find-词条查询指令">使用 - 核心指令</a>。</p><p>修改帮助文档后，需要点击「重载帮助文档」来刷新。</p><div class="tip custom-block"><p class="custom-block-title">提示：重载帮助文档</p><p>帮助文档的文本量较大，重载过程需要一定时间（通常为几分钟，与文档数量、机器性能有关）。在重载期间，搜索功能会暂时不可用，所以建议在骰子使用的低峰期进行重载。</p></div><h3 id="上传帮助文档" tabindex="-1">上传帮助文档 <a class="header-anchor" href="#上传帮助文档" aria-label="Permalink to &quot;上传帮助文档&quot;">​</a></h3><p>点击「上传」按钮，即可弹出帮助文档的上传框：</p><img src="'+d+'" alt="帮助文档的上传" width="65%"><p>「分组」即是一级文件夹，可以选择已有的分组，也可手动填写新的分组名来创建文件夹。</p><p>选择分组和相应文档后，点击「上传」即可将文档上传至骰子。</p><div class="tip custom-block"><p class="custom-block-title">提示：默认分组</p><p>分组选择中存在一个「默认」分组，代表位于文档根目录的帮助文档位置，和一级文件夹同级。</p><p><strong>非常不建议你将文档放在这个文件夹中进行管理。</strong> 对指定分组的搜索需要有意义的分组名。</p></div>',9),f={id:"为分组添加别名",tabindex:"-1"},x=a("a",{class:"header-anchor",href:"#为分组添加别名","aria-label":'Permalink to "为分组添加别名 <Badge type="tip" text="v1.4.2" />"'},"​",-1),g=s('<p><img src="'+n+'" alt="帮助文档分组别名"></p><p>点击页面上的「设置」按钮，将列出现有的所有分组和它们的别名，你可按需要进行编辑。</p><h3 id="删除帮助文档" tabindex="-1">删除帮助文档 <a class="header-anchor" href="#删除帮助文档" aria-label="Permalink to &quot;删除帮助文档&quot;">​</a></h3><p>如需删除某些帮助文档，勾选对应文档前的选框后点击「删除所选」，即可批量删除帮助文档。</p><p><img src="'+h+'" alt="尝试删除帮助文档"></p><h3 id="查看帮助文档词条" tabindex="-1">查看帮助文档词条 <a class="header-anchor" href="#查看帮助文档词条" aria-label="Permalink to &quot;查看帮助文档词条&quot;">​</a></h3><p>切换标签页到「词条」，即可浏览当前已经加载的帮助文档词条。</p><p><img src="'+_+'" alt="帮助文档词条"></p><p>通过筛选可以快速查找到相应的词条内容。</p><h2 id="如何编写帮助文档" tabindex="-1">如何编写帮助文档？ <a class="header-anchor" href="#如何编写帮助文档" aria-label="Permalink to &quot;如何编写帮助文档？&quot;">​</a></h2><p>见 <a href="./../advanced/edit_helpdoc.html">进阶 - 编写帮助文档</a>。</p>',11);function k(q,v,T,P,S,A){const t=c("Badge");return i(),l("div",null,[u,a("p",null,[e("从 "),o(t,{type:"tip",text:"v1.4.2"}),e(" 版本起，支持通过指令在每个群组中设置默认搜索分组。")]),b,a("h3",f,[e("为分组添加别名 "),o(t,{type:"tip",text:"v1.4.2"}),e(),x]),a("p",null,[e("从 "),o(t,{type:"tip",text:"v1.4.2"}),e(" 版本起，你可以为每个分组添加若干别名。")]),g])}const V=p(m,[["render",k]]);export{D as __pageData,V as default};
