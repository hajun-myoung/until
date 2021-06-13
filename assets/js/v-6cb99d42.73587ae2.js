(self.webpackChunkuntil=self.webpackChunkuntil||[]).push([[440],{6398:(l,e,t)=>{"use strict";t.r(e),t.d(e,{data:()=>r});const r={key:"v-6cb99d42",path:"/pj/making/battery-to-wired/v1_0_0.html",title:"v1.0.0 개발일지",lang:"ko-KR",frontmatter:{},excerpt:"",headers:[{level:2,title:"1. 전압을 3V로 낮출 방법찾기",slug:"_1-전압을-3v로-낮출-방법찾기",children:[{level:3,title:"(채택X) 변압기",slug:"채택x-변압기",children:[]},{level:3,title:"(채택O) 어댑터",slug:"채택o-어댑터",children:[]}]},{level:2,title:"1.5. 어댑터 구매",slug:"_1-5-어댑터-구매",children:[]},{level:2,title:"2. 어댑터 테스트",slug:"_2-어댑터-테스트",children:[]},{level:2,title:"3. 메이킹",slug:"_3-메이킹",children:[{level:3,title:"1) 출력부 전선 노출 및 테스트",slug:"_1-출력부-전선-노출-및-테스트",children:[]},{level:3,title:"2) 배터리 케이스에 결합",slug:"_2-배터리-케이스에-결합",children:[]},{level:3,title:"3) 외관정리",slug:"_3-외관정리",children:[]}]}],filePathRelative:"pj/making/battery-to-wired/v1_0_0.md",git:{updatedTime:1623603901e3}}},5724:(l,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>P});var r=t(6252);const i=(0,r.uE)('<h1 id="v1-0-0-개발일지"><a class="header-anchor" href="#v1-0-0-개발일지">#</a> v1.0.0 개발일지</h1><p>이 프로젝트는 다음과 같은 순서로 진행될 예정입니다 😃</p><ol><li>220V를 3V로 낮출 방법 찾기</li><li>메이킹</li></ol><h2 id="_1-전압을-3v로-낮출-방법찾기"><a class="header-anchor" href="#_1-전압을-3v로-낮출-방법찾기">#</a> 1. 전압을 3V로 낮출 방법찾기</h2><p>여러가지 방법을 찾고, 여러 생각을 하다가 어댑터로 우선 결정했어요.</p><h3 id="채택x-변압기"><a class="header-anchor" href="#채택x-변압기">#</a> (채택X) 변압기</h3><p>먼저, 220V를 3V로 변환하는 변압기(Transformer)가 있지 않을까 해서, 구글에 검색을 해 보았습니다.</p>',7),a=(0,r.Wm)("p",null,"검색결과, 알리익스프레스로 통하는 링크 하나를 얻게 되었어요. 해당 링크에서는,",-1),m=(0,r.uE)('<p>보통 우리가 사용하는 가정집용 220V AC(교류전류)를 3V DC(직류전류)로 바꿔주는 변압기를 팔고 있더라구요? 그래서, 이 친구를 우선 고민선상에 놓았죠.</p><p><strong>하지만</strong>, 두 가지 걸리는 사항이 있었어요.</p><ol><li>LED 컨트롤러라고 명시되어있다는 점 <ul><li>실제 상품도 컨트롤할 LED 갯수에 따라 다른 옵션을 제공해요.</li></ul></li><li>INPUT을 전선으로 직접 해줘야 한다는 점 <ul><li>220V 플러그를 &#39;따로&#39; 구매해서 전선을 이어줘야 할 것만 같은 불안함...</li></ul></li></ol><p>그래서 고민하다가, 다른 아이디어를 떠올리게 되었죠.</p><h3 id="채택o-어댑터"><a class="header-anchor" href="#채택o-어댑터">#</a> (채택O) 어댑터</h3><p>생각해보니, &#39;어댑터&#39;라는 아주 현명한 방법이 있더라구요!<br> 변압기에 비해 구하기도 쉽고, 가격이 그리 비싸지도 않고, <em>해외배송이 아니라 배송도 빠를</em> 획기적인 아이템이죠. 심지어, 만약 어댑터가 제 역할을 잘 수행해주기만 한다면 변압기에게 걱정되었던 문제점들을 모두 해결할 수 있을거에요!</p><p>어댑터는,</p><ol><li>LED 컨트롤러가 아닌 &#39;변압&#39;해서 &#39;출력&#39;하는 목적을 가지고 있으니까요.</li><li>INPUT은 어련히 알아서 220V 플러그로 되어있죠.</li></ol><p>그래서 현재는, 3V로 출력하는 것들 중 어떤 어댑터가 좋을까 찾고있답니다.</p><h2 id="_1-5-어댑터-구매"><a class="header-anchor" href="#_1-5-어댑터-구매">#</a> 1.5. 어댑터 구매</h2><p>어댑터는 보통 KRW 5000~7000의 가격대로 찾을 수 있었어요. (그냥 G마켓, 11번가와 같은 오픈마켓들에서 찾아봤죠.)<br> 몇 가지 후보군을 형성시킬 수 있었는데, 다음과 같아요.</p><ul><li>3V, 300mA</li><li>3.3V, 1A</li><li>3.3V, 2A</li></ul><p>사실, AA배터리 두 개를 사용하는 걸로 보아 3V를 구매해야 한다고 생각했어요. 과전압이 걸리면 회로에 무리가 갈까 싶어서요. 하지만 AA배터리 신품이 1.6V까지도 나간다고 하는 걸 듣고, 3.3V도 크게 문제가 되지는 않겠구나 싶었죠. 사실 그보다 더 중요한 판단기준은 <strong>암페어</strong> 였어요. 암페어는 전압과 달리 높을수록 좋다고 알고 있고, 3V 짜리는 300mA 옵션밖에 제공하지 않더라구요. 그래서, <strong><em>3.3V 2A</em></strong> 어댑터를 구매하는 것으로 결정했어요.</p>',13),n=(0,r.Wm)("blockquote",null,[(0,r.Wm)("p",null,"8,950원 들었네요. 배송비가 붙었거든요. 😂")],-1),s=(0,r.Wm)("h2",{id:"_2-어댑터-테스트"},[(0,r.Wm)("a",{class:"header-anchor",href:"#_2-어댑터-테스트"},"#"),(0,r.Uk)(" 2. 어댑터 테스트")],-1),u=(0,r.Wm)("p",null,"우선, 구매한 어댑터는 다음과 같이 팁을 교체할 수 있는 형태였어요.",-1),c=(0,r.Wm)("th",null,"전체 모습",-1),h=(0,r.Wm)("th",null,"팁 교체부",-1),d=(0,r.Wm)("tr",null,[(0,r.Wm)("td",null," 220V 플러그 연결부와 팁 교체부 "),(0,r.Wm)("td",null," 팁 제거 시 두 개의 구멍이 있음. ")],-1),W=(0,r.Wm)("p",null,"박스에 써 있는 설명을 참고하고, 전압계를 이용해 팁 교체부의 +, - 극성과 전압을 측정할 수 있었어요.",-1),p=(0,r.Wm)("th",null,"이미지",-1),o=(0,r.Wm)("th",null,"세부내용",-1),g=(0,r.Wm)("td",null,[(0,r.Uk)(" 약 3.4~3.6V를 왔다갔다 하는 모습을 보여주었어요."),(0,r.Wm)("br"),(0,r.Wm)("br"),(0,r.Uk)(" 이렇게 전압을 측정할 때,"),(0,r.Wm)("br"),(0,r.Uk)("어댑터가 220V에 꽂혀있는 상태라 퍽 무서웠답니다 ")],-1),w=(0,r.Wm)("h2",{id:"_3-메이킹"},[(0,r.Wm)("a",{class:"header-anchor",href:"#_3-메이킹"},"#"),(0,r.Uk)(" 3. 메이킹")],-1),b=(0,r.Wm)("h3",{id:"_1-출력부-전선-노출-및-테스트"},[(0,r.Wm)("a",{class:"header-anchor",href:"#_1-출력부-전선-노출-및-테스트"},"#"),(0,r.Uk)(" 1) 출력부 전선 노출 및 테스트")],-1),_=(0,r.Wm)("p",null,[(0,r.Uk)("본격적인 메이킹에 들어가기에 앞서, 어댑터를 어떻게 연결해야 하는지 먼저 고민했어요."),(0,r.Wm)("br"),(0,r.Uk)(" 현재 보풀제거기는 이런 상태에요:")],-1),k=(0,r.Wm)("td",null,[(0,r.Uk)(" 1.5V 전압의 배터리를 총 두 개 연결하게끔 구성되어 있고,"),(0,r.Wm)("br"),(0,r.Uk)("그 힘으로 모터가 돌아가고 있죠."),(0,r.Wm)("br"),(0,r.Wm)("br"),(0,r.Uk)(" 당연히 배터리가 없는 상태에서 전원부는 '끊긴 회로' 혹은 '열린 회로'의 모습을 하게 될 거구요. ")],-1),y=(0,r.Wm)("p",null,"여기서, 첫 번째 고민이 발생했어요.",-1),V=(0,r.Wm)("ol",null,[(0,r.Wm)("li",null,"배터리 홀더 둘 중 하나에만 어댑터의 +,- 극을 연결하면 작동할 리가 없는데"),(0,r.Wm)("li",null,"한 쪽의 +, 다른쪽의 -극에 어댑터를 연결시키고 남은 배터리 홀더의 -, + 극을 서로 연결시켜야 하나?")],-1),f=(0,r.Wm)("p",null,[(0,r.Uk)("하지만, 이윽고 이게 쓸데없는 고민이라는 걸 깨달았죠. 😂"),(0,r.Wm)("br"),(0,r.Uk)(" 다음과 같이 어댑터를 연결하면, 배터리 홀더끼리 연결이 되어있는가는 중요해지지 않거든요:")],-1),v={width:"236"},U=(0,r.Wm)("td",null,"배터리 전원부를 무시하고, 깔끔하게 닫힌 회로의 모습을 그려낼 수 있어요. 다만, 한 가지 문제가 더 발생하죠.",-1),B=(0,r.Wm)("p",null,"남은 과제는 꽤 중요한데, 어디가 올바른 +극이고, -극인지 선택하는 일이 그거였어요:",-1),$={width:"335",style:{"text-align":"center"}},A={width:"335",style:{"text-align":"center"}},x=(0,r.Wm)("tr",null,[(0,r.Wm)("td",{width:"335",style:{"text-align":"center"}},"이렇게 선택되면 다행이겠지만,"),(0,r.Wm)("td",{width:"335",style:{"text-align":"center"}},"이렇게 선택되면 아마 회로가 타지 않을까요?")],-1),j=(0,r.Uk)(" 명백한 사실은, 보풀제거기를 완전하게 분해해서 작업하는 것이 가장 확실하고 깔끔하다는 거에요. 하지만 아쉽게도, 어찌나 결합이 잘 되어있던지 분해는 도저히 안되더라구요. 그래서, (어차피 3.3V인 걸 확인했으니) 장갑을 끼고 하나씩 테스트해보기로 마음먹었죠. "),E=(0,r.Wm)("h4",{id:"테스트-진행-과정"},[(0,r.Wm)("a",{class:"header-anchor",href:"#테스트-진행-과정"},"#"),(0,r.Uk)(" 테스트 진행 과정")],-1),T=(0,r.Wm)("p",null,"먼저 테스트를 위해, 점프케이블로 출력단자를 연장했어요.",-1),C=(0,r.Wm)("li",null,[(0,r.Wm)("p",null,"각종 극성에 접촉시켜 보다가 아주 약한 스파크도 경험했어요. 이 경우가 바로 위에서 걱정한 '배터리 홀더와 홀더 사이에 DC 전원을 연결한 경우'죠. 회로가 타지는 않았지만 아주 작은 스파크를 내면서 타려고 하더라구요.(사실 조금 탔...)"),(0,r.Wm)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/uKvuTzTKZVQ",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;\n picture-in-picture",allowfullscreen:""})],-1),D=(0,r.Wm)("li",null,[(0,r.Wm)("p",null,"그리고 마침내, 반대쪽에 극성을 맞게 연결하고 전원 버튼을 한번 토글시키자"),(0,r.Wm)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/gwE5v5cVIuQ",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;\n picture-in-picture",allowfullscreen:""}),(0,r.Wm)("p",null,[(0,r.Wm)("strong",null,"정상적으로 작동했어요!")])],-1),K=(0,r.Wm)("p",null,[(0,r.Uk)("이걸로 어댑터를 통해 충분히 보풀제거기를 작동시킬 수 있다는 걸 확인했어요."),(0,r.Wm)("br"),(0,r.Uk)(" 이제 납땜 여부를 결정하고, 배선을 조정하기만 하면 되겠네요!")],-1),I=(0,r.Wm)("h3",{id:"_2-배터리-케이스에-결합"},[(0,r.Wm)("a",{class:"header-anchor",href:"#_2-배터리-케이스에-결합"},"#"),(0,r.Uk)(" 2) 배터리 케이스에 결합")],-1),L=(0,r.Wm)("h3",{id:"_3-외관정리"},[(0,r.Wm)("a",{class:"header-anchor",href:"#_3-외관정리"},"#"),(0,r.Uk)(" 3) 외관정리")],-1),P={render:function(l,e){return(0,r.wg)(),(0,r.j4)(r.HY,null,[i,(0,r.Wm)("img",{src:l.$withBase("images/battery-to-wired/sr_001.png"),alt:"검색결과01"},null,8,["src"]),a,(0,r.Wm)("img",{src:l.$withBase("images/battery-to-wired/sr_002.png"),alt:"검색결과02"},null,8,["src"]),m,(0,r.Wm)("img",{src:l.$withBase("images/battery-to-wired/pc_001.png"),alt:"주문내역"},null,8,["src"]),n,s,u,(0,r.Wm)("table",null,[c,h,(0,r.Wm)("tr",null,[(0,r.Wm)("td",null,[(0,r.Wm)("img",{src:l.$withBase("images/battery-to-wired/adapter_01.jpg")},null,8,["src"])]),(0,r.Wm)("td",null,[(0,r.Wm)("img",{src:l.$withBase("images/battery-to-wired/adapter_02.jpg")},null,8,["src"])])]),d]),W,(0,r.Wm)("table",null,[p,o,(0,r.Wm)("tr",null,[(0,r.Wm)("td",null,[(0,r.Wm)("img",{src:l.$withBase("images/battery-to-wired/testing_01.jpg")},null,8,["src"])]),g])]),w,b,_,(0,r.Wm)("table",null,[(0,r.Wm)("tr",null,[(0,r.Wm)("td",null,[(0,r.Wm)("img",{src:l.$withBase("images/battery-to-wired/circuit_01.png")},null,8,["src"])]),k])]),y,V,f,(0,r.Wm)("table",null,[(0,r.Wm)("tr",null,[(0,r.Wm)("td",v,[(0,r.Wm)("img",{src:l.$withBase("images/battery-to-wired/circuit_02.png")},null,8,["src"])]),U])]),B,(0,r.Wm)("table",null,[(0,r.Wm)("tr",null,[(0,r.Wm)("td",$,[(0,r.Wm)("img",{src:l.$withBase("images/battery-to-wired/circuit_02.png")},null,8,["src"])]),(0,r.Wm)("td",A,[(0,r.Wm)("img",{src:l.$withBase("images/battery-to-wired/circuit_03.png")},null,8,["src"])])]),x]),j,E,(0,r.Wm)("ol",null,[(0,r.Wm)("li",null,[T,(0,r.Wm)("img",{src:l.$withBase("images/battery-to-wired/line_01.jpg")},null,8,["src"])]),C,D]),K,I,L],64)}}}}]);