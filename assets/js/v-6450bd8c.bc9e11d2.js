(self.webpackChunkuntil=self.webpackChunkuntil||[]).push([[379],{3261:(s,n,a)=>{"use strict";a.r(n),a.d(n,{data:()=>e});const e={key:"v-6450bd8c",path:"/tech/blog/vuepress/rfv_errors.html",title:"몇 가지 오류와 대처방법",lang:"ko-KR",frontmatter:{},excerpt:"",headers:[{level:2,title:"파워쉘 보안 문제",slug:"파워쉘-보안-문제",children:[{level:3,title:"오류 상황",slug:"오류-상황",children:[]},{level:3,title:"원인",slug:"원인",children:[]},{level:3,title:"해결",slug:"해결",children:[]}]},{level:2,title:"베이스 루트 문제",slug:"베이스-루트-문제",children:[{level:3,title:"문제 상황",slug:"문제-상황",children:[]},{level:3,title:"원인",slug:"원인-1",children:[]},{level:3,title:"해결",slug:"해결-1",children:[]},{level:3,title:"참고할만한 것",slug:"참고할만한-것",children:[]}]},{level:2,title:"플러그인 적용 실패 문제",slug:"플러그인-적용-실패-문제",children:[{level:3,title:"문제",slug:"문제",children:[]},{level:3,title:"해결",slug:"해결-2",children:[]}]},{level:2,title:"특정 파일 추가하기",slug:"특정-파일-추가하기",children:[{level:3,title:"상황 및 가정",slug:"상황-및-가정",children:[]},{level:3,title:"흐름",slug:"흐름",children:[]},{level:3,title:"find 명령어의 조금 자세한 소개",slug:"find-명령어의-조금-자세한-소개",children:[]},{level:3,title:"수정: 폴더 째로 복사하기",slug:"수정-폴더-째로-복사하기",children:[]},{level:3,title:"문제상황",slug:"문제상황",children:[]}]},{level:2,title:"텍스트 깨짐 문제(인코딩 문제)",slug:"텍스트-깨짐-문제-인코딩-문제",children:[{level:3,title:"문제 상황",slug:"문제-상황-1",children:[]},{level:3,title:"상황",slug:"상황",children:[]},{level:3,title:"문제점",slug:"문제점",children:[]},{level:3,title:"해결",slug:"해결-3",children:[]}]}],filePathRelative:"tech/blog/vuepress/rfv_errors.md",git:{updatedTime:1619559555e3}}},8425:(s,n,a)=>{"use strict";a.r(n),a.d(n,{default:()=>G});var e=a(6252);const l=(0,e.uE)('<h1 id="몇-가지-오류와-대처방법"><a class="header-anchor" href="#몇-가지-오류와-대처방법">#</a> 몇 가지 오류와 대처방법</h1><p>뷰프레스 프레임워크를 사용하여 블로그를 작성하면서, 맞닥뜨렸던 오류들을 적은 문서에요.<br> 다음의 것들을 신경쓰려고 했어요:</p><ul><li>오류가 발생된 상황</li><li>원인</li><li>해결방법</li></ul><p>부디, 당신이 겪고 있는 &#39;알 수 없는 오류&#39;가 이 문서에서 해결된 것이기를 바랄게요. ✊</p><div class="custom-container tip"><p class="custom-container-title">제보를 기다립니다.</p><p>제가 겪지 못한 오류들과 해결한 방법을 제보해주세요.<br> 아주 사소한 오류도 좋고, 심각한 오류도 좋아요.<br> 해결방법을 찾으셨다면 베스트, 해결방법이 아직 찾아지지 않았어도 일단 제보해주세요.</p><p>메일제목은 [until][오류제보] 정도로 시작해주시면 찾기 편할 것 같아요.</p></div><h2 id="파워쉘-보안-문제"><a class="header-anchor" href="#파워쉘-보안-문제">#</a> 파워쉘 보안 문제</h2><h3 id="오류-상황"><a class="header-anchor" href="#오류-상황">#</a> 오류 상황</h3><p>저는 cmd 대신 파워쉘로 npm, yarn 등을 설치하고 작업했어요.<br> yarn 설치까지는 성공했는데, 설치 확인을 위해 <code>yarn -version</code>을 명령하니,</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token builtin class-name">:</span> 이 시스템에서 스크립트를 실행할 수 없으므로\nC:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>Administrator<span class="token punctuation">\\</span>AppData<span class="token punctuation">\\</span>Roaming<span class="token punctuation">\\</span>npm<span class="token punctuation">\\</span>yarn.ps1 파일을 로드할 수 없습니다.\n자세한 내용은 about_Execution_Policies<span class="token punctuation">(</span>https://go.microsoft.com/fwlink/?LinkID<span class="token operator">=</span><span class="token number">135170</span><span class="token punctuation">)</span>\n를 참조하십시오.\n\n위치 줄:1 문자:1 + <span class="token function">yarn</span> -v + ~~~~ + CategoryInfo\n<span class="token builtin class-name">:</span> 보안 오류: <span class="token punctuation">(</span>:<span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>, PSSecurityException + FullyQualifiedErrorId <span class="token builtin class-name">:</span> UnauthorizedAccess\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>',9),p=(0,e.Uk)("이런 오류가 뜨는거에요. 어떻게 해야 하나...하다가 "),t={href:"https://extbrain.tistory.com/118",target:"_blank",rel:"noopener noreferrer"},c=(0,e.Uk)("확장형 뇌 저장소님의 글"),i=(0,e.Uk)("을 따라해 해결했답니다."),o=(0,e.uE)('<h3 id="원인"><a class="header-anchor" href="#원인">#</a> 원인</h3><p>핵심은, <strong>파워쉘에서 보안 문제로 yarn이 무언가를 실행할 수 없게 막은 것</strong> 이었어요.</p><h3 id="해결"><a class="header-anchor" href="#해결">#</a> 해결</h3><hr><ol><li>먼저, 파워쉘을 <strong>관리자 권한</strong> 으로 실행해 줍니다.</li><li>다음의 명령어를 입력해, 파워쉘 정책이 yarn을 제한시키는지 아닌지 알아봅니다.</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ ExecutionPolicy\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>(대소문자는 중요하지 않아요)</p>',7),r=(0,e.Uk)("아래 그림처럼 'Restricted'라고 뜨면, 보안 정책 문제가 맞습니다."),u=(0,e.Wm)("br",null,null,-1),d=(0,e.uE)('<ol start="3"><li>이제 보안 정책을 풀어줍니다.</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ Set-ExecutionPolicy unRestricted\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',2),m=(0,e.Uk)("중간에 정말 변경할 건지 묻는 질문에 'y'로 동의해주시는 거 잊지 말구요."),h=(0,e.Wm)("br",null,null,-1),b=(0,e.uE)('<ol start="4"><li>자, 정말 변경되었는지 확인해봅니다.</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ ExecutionPolicy\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',2),g=(0,e.uE)('<p>다 하셨다면, <code>yarn -version</code>을 명령해 문제가 해결되었는지 확인해보세요.</p><h2 id="베이스-루트-문제"><a class="header-anchor" href="#베이스-루트-문제">#</a> 베이스 루트 문제</h2><p>이 문제의 경우, <code>dev</code> 명령은 정상적이고, <code>build</code>는 의도대로 일하지 않아요.</p><h3 id="문제-상황"><a class="header-anchor" href="#문제-상황">#</a> 문제 상황</h3><p><code>yarn dev</code> 명령에서는 문제 없이 의도한 페이지가 구성되는데 <code>yarn build</code>에서는 레이아웃이 완전히 깨진(기본 테마가 전혀 적용되지 않은) 결과물이 출력됩니다. 제 경우, 세 개의 검정 사각형이 반기는 페이지가 구성되었어요.</p>',5),k=(0,e.Wm)("p",null,"해당 페이지가 빌드 실패가 아닌 '레이아웃의 깨짐'이라고 판단한 건, 페이지를 이루고 있는 내용들은 작성한 내용 그대로 출력되었기 때문입니다. 그러나 기본 테마도, 내용 정리도 이루어지지 않은 raw한 html 파일의 모습을 하고있어요.",-1),v=(0,e.Wm)("h3",{id:"원인-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#원인-1"},"#"),(0,e.Uk)(" 원인")],-1),f=(0,e.Wm)("p",null,[(0,e.Uk)("뷰프레스 블로그를 구성하다보면, config 파일에 "),(0,e.Wm)("code",null,"base="),(0,e.Uk)("를 지정하는 파트가 있어요."),(0,e.Wm)("br"),(0,e.Uk)(" 베이스는 '여러분의 블로그가 시작되는 기반 주소'를 의미하고, 제 블로그의 경우 "),(0,e.Wm)("code",null,"/until/"),(0,e.Uk)(" 이 여기에 해당되죠. "),(0,e.Wm)("strong",null,"이 베이스 주소는, 레포지토리 이름과 일치하거나 없어야 한다는 점 주의하시기 바랍니다.")],-1),W=(0,e.Wm)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-javascript"},[(0,e.Wm)("code",null,[(0,e.Uk)("base"),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Wm)("span",{class:"token string"},"'/until/'"),(0,e.Uk)("\n")])]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br")])],-1),y=(0,e.Wm)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-javascript"},[(0,e.Wm)("code",null,[(0,e.Uk)("base"),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Wm)("span",{class:"token string"},"'/'"),(0,e.Uk)("\n")])]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br")])],-1),x=(0,e.uE)('<div class="custom-container tip"><p class="custom-container-title">베이스가 없는 경우와 있는 경우의 차이</p><p>없다면 &lt;username&gt;.github.io/ 에 블로그가 디플로잉 되고,<br> 베이스를 지정했다면 &lt;username&gt;.github.io/&lt;base&gt;/에 블로그가 디플로잉이 이루어집니다.</p></div><h3 id="해결-1"><a class="header-anchor" href="#해결-1">#</a> 해결</h3><hr><p>해결법을 찾아 헤메이며 스트레스 받았지만, 의외로 간단하게 해결되었습니다. 😬<br> config.js 파일에 있는 베이스 코드가</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports<span class="token operator">=</span><span class="token punctuation">{</span>\n    base <span class="token operator">:</span> <span class="token string">&#39;/studyb/&#39;</span><span class="token punctuation">,</span>\n    <span class="token operator">~</span><span class="token operator">~</span><span class="token operator">~</span>\n   <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>라고 되어있는데, (당시 레포지토리 이름은 studyB)<br> 이를 아래와 같이 수정하고 나서야, 제대로 된 페이지를 배포할 수 있었어요.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports<span class="token operator">=</span><span class="token punctuation">{</span>\n    base <span class="token operator">:</span> <span class="token string">&#39;/studyB/&#39;</span><span class="token punctuation">,</span>\n    <span class="token operator">~</span><span class="token operator">~</span><span class="token operator">~</span>\n   <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>네 맞아요. 베이스 코드는 무려 대소문자를 구분하더라구요.</p><div class="custom-container tip"><p class="custom-container-title">이 오류를 해결하면서</p><p>아, 이래서 레포지토리 이름에 대문자를 쓰지 말라고 하는구나...하고<br> 깨달으며 레포지토리 이름을 &#39;study_b&#39;로 바꾸게 되었죠.</p></div><details class="custom-container details"><summary>이 블로그의 이름은 study_b가 아니라 until 아닌가요?</summary><p>아 죄송해요, 혼선을 드렸네요. study_b는 이전 vuepress 1 framework를 이용할 당시의 블로그 이름이에요. 지금은 vuepress 2 framework를 이용중이구요.</p></details><h3 id="참고할만한-것"><a class="header-anchor" href="#참고할만한-것">#</a> 참고할만한 것</h3>',11),j=(0,e.Uk)("뷰프레스 테마가 적용되지 않고 세 개의 검은 사각형으로 페이지가 시작되는 오류는 다양한 원인을 가지고 있어요. 여기서 서술한 원인도, 여러가지 경우 중 하나일 뿐이죠. vuejs 공식 깃허브에서도 "),U={href:"https://github.com/vuejs/vuepress/issues/575",target:"_blank",rel:"noopener noreferrer"},q=(0,e.Uk)("'Three black rectangle' 이 나온다는 이슈"),w=(0,e.Uk)("가 꽤 흔해요ㅋㅋ"),E=(0,e.uE)('<blockquote><p>참고로, 저 링크에 있는 이슈는 이 오류를 해결하는 데 아무런 도움이 되지 않았습니다 😬</p></blockquote><h2 id="플러그인-적용-실패-문제"><a class="header-anchor" href="#플러그인-적용-실패-문제">#</a> 플러그인 적용 실패 문제</h2><div class="custom-container warning"><p class="custom-container-title">vuepress 1 framework에서 발생했던 문제에요.</p><p>vuepress 2 framework 부터는 기본적으로 제공되는 기능이에요.</p></div><h3 id="문제"><a class="header-anchor" href="#문제">#</a> 문제</h3><p>블로그를 작성하면서, 몇 가지 플러그인을 넣으려고 시도 해 보았지만 제대로 되지 않았어요.</p><ul><li><strong>문제가 발생한 플러그인:</strong> &quot;back-to-top&quot;</li><li><strong>역할:</strong> 화면 우하단에 페이지 꼭대기로 갈 수 있는 버튼을 제공</li></ul>',6),_=(0,e.Uk)("이 플러그인은 뷰프레스 공식 플러그인이어서, "),$={href:"https://vuepress.vuejs.org/plugin/official/plugin-back-to-top.html#vuepress-plugin-back-to-top",target:"_blank",rel:"noopener noreferrer"},C=(0,e.Uk)("가이드가 친절하게 제공되어"),P=(0,e.Uk)(" 있어요."),B=(0,e.Wm)("br",null,null,-1),T=(0,e.Uk)(" 그다지 어려운 가이드가 아닌데도, back-to-top 버튼은 절대 생기지를 않더라구요... 😭"),R=(0,e.uE)('<h3 id="해결-2"><a class="header-anchor" href="#해결-2">#</a> 해결</h3><hr><p>이 오류의 문제점은 &#39;구글 애널리틱스&#39;를 적용하고자 하면서 찾게 되었어요. 굉장히 허무한 원인이었죠.</p><p>뷰프레스 블로그에서의 플러그인은 <strong>1)npm install이나 yarn add를 통해 필요한 파일을 설치(install)</strong> 하고, <strong>2)<code>config.js</code> 파일의 수정을 통해서 이를 적용</strong>하는 두 단계를 거쳐서 설치하는 게 일반적이에요.</p><p>제 경우, 플러그인 &#39;설치&#39;는 성공적이었어요. 문제점은 <code>config.js</code>의 수정에서 발견되었죠.</p><p>플러그인들을 적용할 때 <code>config.js</code>의 구성은 다음과 같아야 해요:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports<span class="token operator">=</span><span class="token punctuation">{</span>\n   <span class="token comment">//some codes...</span>\n   plugins<span class="token operator">=</span><span class="token punctuation">[</span>\n      <span class="token string">&#39;Name-of-Plugin&#39;</span><span class="token punctuation">,</span>\n      <span class="token punctuation">[</span>\n         <span class="token string">&#39;some-plugins-have-children&#39;</span><span class="token punctuation">,</span>\n         <span class="token punctuation">{</span>\n            <span class="token comment">//like this</span>\n            <span class="token string">&#39;ga&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;UA-00000000-0&#39;</span>\n         <span class="token punctuation">}</span>\n      <span class="token punctuation">]</span>\n   <span class="token punctuation">]</span>\n   <span class="token comment">//some codes...</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>하지만, 제 <code>config.js</code>를 유심히 살펴보니, 이것저것 셋팅한다고 하다가 어처구니 없는 실수를 했더군요.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports<span class="token operator">=</span><span class="token punctuation">{</span>\n   base <span class="token operator">:</span> <span class="token string">&#39;/study_b/&#39;</span><span class="token punctuation">,</span>\n   locales <span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token comment">//...</span>\n   <span class="token punctuation">}</span><span class="token punctuation">,</span>\n   <span class="token comment">//...</span>\n   themeConfig<span class="token operator">:</span><span class="token punctuation">{</span>\n      plugins<span class="token operator">=</span><span class="token punctuation">[</span>\n         <span class="token operator">...</span>\n      <span class="token punctuation">]</span>\n   <span class="token punctuation">}</span>\n   <span class="token comment">//...</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p><strong>맞아요, 놀랍게도 <code>plugins=[]</code>를 <code>themeConfig:{}</code> 안에 넣어버렸어요.</strong></p><p>...그리고 그걸 꺼내줬더니 짜잔! 해결되었답니다~...ㅎ</p><h2 id="특정-파일-추가하기"><a class="header-anchor" href="#특정-파일-추가하기">#</a> 특정 파일 추가하기</h2><p>특정 파일을 추가한다는 건, 오류에 대한 대처보다는 &#39;새로운 배움&#39;에 가깝죠. 생각보다 쉬운 내용이고, 정말 쓸 수 있는 곳이 많아요. 크게 몇 가지만 살펴보아도</p><ol><li>구글 서치 콘솔 소유권 증명을 위한 .html 파일을 쓸 수 있어요 <ul><li>상당히 복잡한, &lt;gtag.js&gt; 를 통한 소유권 증명 방식을 안 써도 된다는 의미에요!</li></ul></li><li>사이트맵을 수동으로 작성하고, 매번 같은 위치에 포함되게끔 설정할 수 있어요.</li><li>404.html 처럼 특정한 목적을 가진 페이지를 임의로 포함시킬 수 있어요.</li><li>예시로 들기 위한 파일을 임의로 넣을 수 있어요. <ul><li>뷰프레스가 지원하지 않는 파일이더라도 일단 넣고, 링크를 걸면 연결시킬 수 있겠죠.</li></ul></li></ol><h3 id="상황-및-가정"><a class="header-anchor" href="#상황-및-가정">#</a> 상황 및 가정</h3><ul><li><p>상황</p><ul><li>블로그 베이스 루트 주소(~/until/)에 <code>src.file</code> 이라는 파일이 있다고 할게요.</li><li>이 파일을 매번 블로그를 deploying할 때 <code>~/until/target/</code>에 포함시키고 싶어요.</li></ul></li><li><p>가정</p><ul><li>앞으로 설명할 방법은 쉘 명령을 이용한 방법이에요.</li><li>따라서, <code>deploy.sh</code>파일을 이용한 반자동 deploying을 쓰시는 분들이 사용하기 편할거에요.</li></ul></li></ul><h3 id="흐름"><a class="header-anchor" href="#흐름">#</a> 흐름</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">find</span> <span class="token builtin class-name">.</span> -maxdepth <span class="token number">1</span> -name <span class="token string">&quot;src.file&quot;</span> -exec <span class="token function">cp</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> ./target/ <span class="token punctuation">\\</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>이 명령은 &quot;src.file&quot; 이라는 파일을 찾아서, ./target/ 에 복사를 실행하라고 하고 있어요.<br> 구글에 <code>쉘 특정 파일 복사하기</code> 따위로 검색하면 비슷한 표현식들을 많이 찾을 수 있을거에요.</p><p>이제 이 명령을 적당한 때에 실행해주면 되는데, &#39;적당한 때&#39;를 찾기 위해서 블로그가 어떤 순서로 deploying되고 있는지를 우선적으로 파악해야 해요. <strong>반자동 쉘 deploying</strong>을 쓰고 있다면, 다음과 같은 순서를 거치는 게 일반적이에요.</p><ol><li>(수동) 로컬 파일에서 블로그 루트 디렉토리로 이동</li><li>(수동) <code>deploy.sh</code>를 실행 <ul><li><code>npm run build</code>를 통해서 블로그 빌드 <ul><li>빌드된 내용은 /dist/ 폴더로</li></ul></li><li>쉘이 /dist/ 폴더</li><li>/dist/ 폴더에 있는 내용(=블로그 결과물)을 gh-pages 브랜치로 푸쉬</li></ul></li></ol><p>여기서 블로그가 빌드된 후, /dist/ 내용물이 gh-pages로 푸쉬되기 전, find 명령이 실행되면 원하는 파일을 복사시킬 수 있어요. 그래서, 그 위치에 해당 명령을 넣어주면 돼요.</p><p>저는, <code>npm run build</code>와 <code>cd docs/.vuepress/dist</code> 사이에 다음 명령을 위치시켰어요.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">find</span> <span class="token builtin class-name">.</span> -maxdepth <span class="token number">1</span> -name <span class="token string">&quot;sitemap.xml&quot;</span> -exec <span class="token function">cp</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> ./docs/.vuepress/dist/ <span class="token punctuation">\\</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>이 코드는</p><ol><li>블로그가 빌드</li><li>sitemap.xml 파일을 /dist/ 폴더로 복사</li><li>쉘이 gh-pages 브랜치 푸쉬를 위해 /dist/ 폴더로 움직이게끔 해요.</li></ol><blockquote><p>실행되는 타이밍을 보고, 목적하는 경로를 어디로 둘지, 파일은 어디에 있는지 고민해야해요.</p></blockquote><h3 id="find-명령어의-조금-자세한-소개"><a class="header-anchor" href="#find-명령어의-조금-자세한-소개">#</a> find 명령어의 조금 자세한 소개</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">find</span> <span class="token builtin class-name">.</span> -maxdepth <span class="token number">1</span> -name <span class="token string">&quot;target.file&quot;</span> -exec <span class="token function">cp</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> ./targetDirectory/ <span class="token punctuation">\\</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>제가 예시로 든 이 명령에서 여러 요소들을 볼 수 있어요. 이것들은 각각 다음과 같은 역할을 수행해요.</p><ul><li><code>find</code> : 여기서 소개한 &#39;찾는&#39; 명령이죠.</li><li><code>-maxdepth 1</code> : 폴더에서만 찾으라는 제한조건. <ul><li>기본적으로 <code>find</code>는 &#39;모든 하위 디렉토리&#39;까지 포함해서 파일을 탐색.</li></ul></li><li><code>-name &quot;...&quot;</code> : 파일 이름 &quot;...&quot;으로 찾겠다는 뜻.</li><li><code>-exec cp{} ~~ \\;</code> : 복사 명령 실행.</li></ul><h3 id="수정-폴더-째로-복사하기"><a class="header-anchor" href="#수정-폴더-째로-복사하기">#</a> 수정: 폴더 째로 복사하기</h3><p>이 <code>find</code> 명령어를 HTML 문서를 다루면서 본격적으로 사용하게 되었어요. <em><strong>dist</strong></em> 폴더(블로그를 빌드한 결과물이 1차로 저장되는 폴더)에 블로그 빌드 후 특정 HTML 예제를 알맞은 위치에 복사하게끔 시켰고, 해당 예제로 링크를 걸어서 예시로 쓴 소스코드의 동작 모습을 보여줄 수 있게 되었죠.</p><h3 id="문제상황"><a class="header-anchor" href="#문제상황">#</a> 문제상황</h3><div class="custom-container danger"><p class="custom-container-title">그런데, 첫 예시를 만들 때에는 파일 한 개만 복사하면 끝이었던 문제가, 여러 개의 예시를 만들고자 하니 상당히 귀찮아지는 거에요.</p><p>위에서 예시로 든 find 명령어는 &#39;한 개의 파일&#39;을 복사하고자 한 것이었기 때문에, n의 예제에 대해 n줄의 명령어를 써야 할 판이었죠.</p></div><p>결국, 명령어를 <strong>조금</strong> 수정하게 되었어요.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">cp</span> -r CopyThisDirectory /PasteToHere/\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><code>find</code> 명령어는 폴더를 찾는 것도 무리없이 진행하기 때문에 계속 사용하고자 했지만, 복사에 한계가 있어서 훨씬 편한 <code>cp</code> 명령을 쓰게 되었어요. 위 예시 코드의 cp 명령은 다음과 같은 명령을 수행해요</p><ol><li>현재 경로에서 &#39;CopyThisDirectory&#39; 라는 폴더를 찾아서</li><li>/PasteToHere/에 복사하죠.</li></ol><p>직관적이고, 쉽죠?</p><div class="custom-container warning"><p class="custom-container-title">언젠가는...</p><p>문서 카테고리마다 예제 폴더 만드는 게 귀찮아질 날이 분명히 올 것 같아요.<br> 그 때는 또 어떤 방법을 쓰게 될까요? 예제만 한 폴더에 다 묶어두고 한 번에 복사한 다음, 각 문서에서 서로다른 링크를 타게 되지 않을까요?</p></div><h2 id="텍스트-깨짐-문제-인코딩-문제"><a class="header-anchor" href="#텍스트-깨짐-문제-인코딩-문제">#</a> 텍스트 깨짐 문제(인코딩 문제)</h2><p>vuepress 2로 블로그를 migration 하기 위해 다시 공식 가이드를 따라가는 중, 아주 머리아프고 알 수 없는 오류를 <strong>또</strong> 만났어요. 그리고 언제나와 같이, <strong>역시나</strong> 윈도우라서 문제가 생겼던 것으로 밝혀겼죠.</p><div class="custom-container tip"><p class="custom-container-title">행복-개발을 하고싶나요?</p><p>일단 당신 앞에 있는 그 윈도우부터 치워버리고 맥북을 사세요.</p></div><h3 id="문제-상황-1"><a class="header-anchor" href="#문제-상황-1">#</a> 문제 상황</h3><p>이 문제는, 블로그를 처음 셋팅할 때 주로 일어나고, <code>dev</code>나 <code>build</code>에 오류는 없지만, 내용 텍스트가 깨져버려요. 예시를 보여드릴게요:</p><ol><li>가이드를 따라서 파일 생성</li></ol>',47),D=(0,e.Wm)("ol",{start:"2"},[(0,e.Wm)("li",null,"정상적으로 생성 완료")],-1),A=(0,e.Wm)("ol",{start:"3"},[(0,e.Wm)("li",null,[(0,e.Wm)("code",null,"build"),(0,e.Uk)("등을 통해 컴파일 및 렌더링 결과, 텍스트 깨짐")])],-1),H=(0,e.Wm)("h3",{id:"상황"},[(0,e.Wm)("a",{class:"header-anchor",href:"#상황"},"#"),(0,e.Uk)(" 상황")],-1),I={href:"https://vuepress2.netlify.app/guide/getting-started.html#manual-installation",target:"_blank",rel:"noopener noreferrer"},L=(0,e.Uk)("vuepress2 공식 가이드의 Installation"),M=(0,e.Uk)("을 보면, 다음과 같은 스텝이 있어요:"),S=(0,e.uE)('<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> docs\n<span class="token builtin class-name">echo</span> <span class="token string">&#39;# Hello VuePress&#39;</span> <span class="token operator">&gt;</span> docs/README.md\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li><code>mkdir docs</code>는 docs라는 이름의 폴더 생성</li><li><code>echo &quot;...&quot; &gt; docs/README.md</code>는 뒤 경로에 앞 내용 &quot;...&quot;을 채움</li></ul><p>이 명령에는 오류가 있을리 없으니, 정상적으로 파일이 생성되죠.(예시 2번 캡쳐처럼요)<br> 하지만 실제로 <code>dev</code>를 거치면 encoding 에러가 있는, 깨진 텍스트만 보여지게 돼요.</p><p><strong>이게 만약 한글 텍스트라서 발생되는 문제였다면</strong>, 제가 보여드린 예시처럼 영어로 내용을 작성했을 때에는 일어나지 않아야 할 오류에요. 즉, 영어나 한글이냐가 중요한게 아닌, <em>근본적인 인코딩 에러</em>라는 거죠.</p><h3 id="문제점"><a class="header-anchor" href="#문제점">#</a> 문제점</h3><p>문제는, <code>echo</code> 명령에 있었어요.<br> cmd나 파워쉘과 같은 윈도우 cli의 텍스트 인코딩 방식과 웹 표준이 다르다는 문제죠.</p><ul><li>윈도우: <strong>utf-16</strong> 이 표준이고,</li><li>웹 표준: <strong>utf-8</strong> 이에요.</li></ul><p>즉, 윈도우는 <code>echo</code> 명령을 내리면 utf-16으로 인코딩 된 텍스트를 파일에 넣어줍니다.<br> 뷰프레스 프레임워크는 이 텍스트를 웹 표준인 utf-8로 인코딩해서 <code>.html</code> 파일을 만들기 때문에, 텍스트가 깨지는 것이죠.</p><h3 id="해결-3"><a class="header-anchor" href="#해결-3">#</a> 해결</h3><p>VScode를 쓰시나요? 거기서 파일을 만들면 해결돼요.</p><details class="custom-container details"><summary>웹 페이지 인코딩 방식을 바꾸는 크롬 플러그인을 설치해도 소용 없어요.</summary><p>구글에 검색하니 인코딩이 달라서 텍스트가 깨지는 거니, 인코딩 방식을 다르게 해서 읽어내는 플러그인을 사용해보라고 하더라구요. 하지만 이 문제는, 애초에 파워쉘이 utf-16으로 인코딩된 파일을 줘서, 웹팩이 컴파일하면서 텍스트가 깨진거에요. <code>build</code> 후에 <code>/docs/.vuepress/dist/</code>에 들어가서 확인해보세요. 아예 .html 파일 내용이 깨진 텍스트로 구성되어 있을거에요.</p><p>즉, 텍스트 깨짐은 프레임워크 단계, <code>dev</code>나 <code>build</code>과정에서 발생하는 것이지, 브라우저가 파일을 잘못 읽는 게 아니랍니다.</p></details>',11),G={render:function(s,n){const a=(0,e.up)("OutboundLink"),G=(0,e.up)("CodeGroupItem"),O=(0,e.up)("CodeGroup");return(0,e.wg)(),(0,e.j4)(e.HY,null,[l,(0,e.Wm)("p",null,[p,(0,e.Wm)("a",t,[c,(0,e.Wm)(a)]),i]),o,(0,e.Wm)("ul",null,[(0,e.Wm)("li",null,[r,u,(0,e.Wm)("img",{src:s.$withBase("images/vuepress/ps_001.png"),alt:"restricted"},null,8,["src"])])]),d,(0,e.Wm)("p",null,[m,h,(0,e.Wm)("img",{src:s.$withBase("images/vuepress/ps_002.png"),alt:"settingPs"},null,8,["src"])]),b,(0,e.Wm)("img",{src:s.$withBase("images/vuepress/ps_003.png"),alt:"compleps"},null,8,["src"]),g,(0,e.Wm)("img",{src:s.$withBase("images/vuepress/onlyThreeRectangle.png"),alt:"rayoutCrashed"},null,8,["src"]),k,v,f,(0,e.Wm)(O,null,{default:(0,e.w5)((()=>[(0,e.Wm)(G,{title:"베이스 O"},{default:(0,e.w5)((()=>[W])),_:1}),(0,e.Wm)(G,{title:"베이스 X"},{default:(0,e.w5)((()=>[y])),_:1})])),_:1}),x,(0,e.Wm)("p",null,[j,(0,e.Wm)("a",U,[q,(0,e.Wm)(a)]),w]),E,(0,e.Wm)("p",null,[_,(0,e.Wm)("a",$,[C,(0,e.Wm)(a)]),P,B,T]),R,(0,e.Wm)("img",{src:s.$withBase("images/vuepress/encoding-err-00.png"),style:{width:"500px"}},null,8,["src"]),D,(0,e.Wm)("img",{src:s.$withBase("images/vuepress/encoding-err-01.png")},null,8,["src"]),A,(0,e.Wm)("img",{src:s.$withBase("images/vuepress/encoding-err-02.png")},null,8,["src"]),H,(0,e.Wm)("p",null,[(0,e.Wm)("a",I,[L,(0,e.Wm)(a)]),M]),S],64)}}}}]);