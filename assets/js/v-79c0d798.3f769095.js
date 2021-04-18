(self.webpackChunkuntil=self.webpackChunkuntil||[]).push([[465],{5587:(e,t,r)=>{"use strict";r.r(t),r.d(t,{data:()=>n});const n={key:"v-79c0d798",path:"/tech/making/processing/",title:"프로세싱, 손쉬운 그래픽 상호작용",lang:"ko-KR",frontmatter:{},excerpt:"",headers:[{level:2,title:"그래서, 프로세싱이 뭔가요?",slug:"그래서-프로세싱이-뭔가요",children:[]},{level:2,title:"아두이노와 프로세싱",slug:"아두이노와-프로세싱",children:[]}],filePathRelative:"tech/making/processing/README.md",git:{updatedTime:1618269417e3}}},9816:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>k});var n=r(6252);const s=(0,n.uE)('<h1 id="프로세싱-손쉬운-그래픽-상호작용"><a class="header-anchor" href="#프로세싱-손쉬운-그래픽-상호작용">#</a> 프로세싱, 손쉬운 그래픽 상호작용</h1><p>프로세싱은 아두이노와 상당히 비슷한 느낌을 제공해요. 직접 코딩하게 되는 UI의 구성, 시리얼 모니터의 사용, 시리얼 포트를 통한 아두이노-프로세싱 간의 쉬운 연결성까지... 사용하다보면 &#39;형제 IDE 같다&#39;는 생각을 하게 된답니다. 그럼에도 불구하고, 프로세싱 &#39;자체만으로는&#39; 아두이노와 역할이 분명히 구분되어 있습니다.</p><div class="custom-container tip"><p class="custom-container-title">IDE가 뭐죠?</p><p>Integrated Development Environment, 한글로는 &#39;통합 개발 환경&#39; 이에요.<br> 쉽게 말해서, 여러분이 코딩하고 컴파일(빌드)하고, 디버그하게 해 주는 환경을 지칭합니다. 대표적으로 코드블럭이나 Dev C++가 여기에 해당돼요.<br> Processing이 제공하는 코딩 환경에는 디버깅 기능이 있지는 않아요. 하지만 텍스트 편집(코딩), 컴파일, 배포가 가능하니 일종의 IDE죠.</p></div><h2 id="그래서-프로세싱이-뭔가요"><a class="header-anchor" href="#그래서-프로세싱이-뭔가요">#</a> 그래서, 프로세싱이 뭔가요?</h2>',4),a=(0,n.Uk)("프로세싱은, 위 문단에서 말한것처럼 하나의 IDE(통합 개발 환경)이자, Python, C와 같은 '언어'에요. 프로세싱의 개발자가 '프로세싱'이라는 언어를 만든 것이고, 이를 코딩하기 위한 개발환경도 제공한 것이죠. "),i={href:"https://processing.org/",target:"_blank",rel:"noopener noreferrer"},l=(0,n.Uk)("프로세싱 공식 사이트"),o=(0,n.Uk)("에 따르면,"),c={class:"custom-container theorem"},p=(0,n.Wm)("p",{class:"custom-container-title"},"Processing is a flexible software sketchbook and a language for learning how to code within the context of the visual arts.",-1),h=(0,n.Wm)("p",null,"프로세싱은 하나의 유연한 소프트웨어 스케치북이자 언어입니다. 시각 예술을 '코딩'하는 방법을 가르치기 위해 고안되었죠.",-1),u={class:"custom-container right"},d=(0,n.Uk)("from. "),g={href:"https://processing.org/",target:"_blank",rel:"noopener noreferrer"},m=(0,n.Uk)("Processing Official site"),f=(0,n.uE)('<p>라네요.</p><p>이러한 프로세싱의 특징은, 그야말로 &#39;시각화&#39;를 너무도 간단하게 접근할 수 있다는 점입니다.<br> 파이썬과 같은 언어가 고레벨(인간과 가까운)이어서 프로그래밍의 본질에 집중하여 공부하기 좋듯이,<br> 프로세싱 역시 시각화를 위한 본질을 공부하기에 정말 좋아요.</p><h2 id="아두이노와-프로세싱"><a class="header-anchor" href="#아두이노와-프로세싱">#</a> 아두이노와 프로세싱</h2><p>아두이노의 주 역할이 센서값을 읽고, 연산하고, 처리하고, 동작하는 일련의 과정(흐름)이라면,<br> 프로세싱의 주 역할은 여러가지 값들, 정보들을 그려내고 표현하여 출력하는거에요.</p><p>아두이노와 같이 사용할 때 프로세싱은 주로 다음과 같은 역할을 수행한답니다.</p><ul><li><p>아두이노가 읽어온 값을 화면에 출력</p><ul><li>아두이노가 읽어온 값을 바탕으로 특정한 그림을 드로잉</li><li>사용자가 원하는 행동을 신호로 변경하여 아두이노에게 전송(아두이노 제어)</li></ul></li></ul><div class="custom-container warning"><p class="custom-container-title">감이 조금 오시나요?</p><p>맞아요, <strong>저는 주로 아두이노와 함께 쓰이는, 시각화 도구로서의 프로세싱을 많이 다룰거랍니다.</strong></p></div>',7),k={render:function(e,t){const r=(0,n.up)("OutboundLink");return(0,n.wg)(),(0,n.j4)(n.HY,null,[s,(0,n.Wm)("p",null,[a,(0,n.Wm)("a",i,[l,(0,n.Wm)(r)]),o]),(0,n.Wm)("div",c,[p,h,(0,n.Wm)("div",u,[(0,n.Wm)("p",null,[d,(0,n.Wm)("a",g,[m,(0,n.Wm)(r)])])])]),f],64)}}}}]);