(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[955],{30672:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/embed/chat/readwrite",function(){return s(81537)}])},66149:function(e,t,s){"use strict";s.d(t,{h:function(){return v}});var n=s(85893),o=s(10647),i=s(8968),r=s(67294),a=s(93967),l=s.n(a),u=s(5152),d=s.n(u),c=s(41664),h=s.n(c),m=s(37039),f=s(5050),p=s.n(f);let y=d()(()=>Promise.all([s.e(7732),s.e(443),s.e(449),s.e(2306)]).then(s.bind(s,2306)).then(e=>e.UserDropdown),{loadableGenerated:{webpack:()=>[2306]},ssr:!1}),v=e=>{let{name:t,chatAvailable:s,chatDisabled:a,online:u}=e,[d,c]=(0,r.useState)(!1),{t:f}=(0,m.$G)();return(0,r.useEffect)(()=>{c(window.innerWidth>=768)},[]),(0,n.jsxs)("header",{className:l()(["".concat(p().header)],"global-header"),children:[u?(0,n.jsx)(h(),{href:"#player",className:p().skipLink,children:f("Skip to player")}):(0,n.jsx)(h(),{href:"#offline-message",className:p().skipLink,children:f("Skip to offline message")}),(0,n.jsx)(h(),{href:"#skip-to-content",className:p().skipLink,children:f("Skip to page content")}),(0,n.jsx)(h(),{href:"#footer",className:p().skipLink,children:f("Skip to footer")}),(0,n.jsxs)("div",{className:p().logo,children:[(0,n.jsx)("div",{id:"header-logo",className:p().logoImage,children:(0,n.jsx)(o.C,{src:"/logo",size:"large",shape:"circle",className:p().avatar})}),(0,n.jsx)("h1",{className:p().title,id:"global-header-text",children:t})]}),s&&!a&&(0,n.jsx)(y,{id:"user-menu",hideTitleOnMobile:!0,showToggleChatOption:d}),!s&&!a&&(0,n.jsx)(i.Z,{overlayClassName:p().toolTip,title:f("Chat will be available when the stream is live."),placement:"left",children:(0,n.jsx)("span",{className:p().chatOfflineText,children:f("Chat is offline")})})]})};t.Z=v},3064:function(e,t,s){"use strict";let n=s(39219);e.exports={translations:{en:n},defaultLang:"en",useBrowserDefault:!0,languageDataStore:"query"}},28262:function(e,t,s){"use strict";var n=s(34155);s(91479);var o=s(67294),i=o&&"object"==typeof o&&"default"in o?o:{default:o},r=void 0!==n&&n.env&&!0,a=function(e){return"[object String]"===Object.prototype.toString.call(e)},l=function(){function e(e){var t=void 0===e?{}:e,s=t.name,n=void 0===s?"stylesheet":s,o=t.optimizeForSpeed,i=void 0===o?r:o;u(a(n),"`name` must be a string"),this._name=n,this._deletedRulePlaceholder="#"+n+"-deleted-rule____{}",u("boolean"==typeof i,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=i,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var l=document.querySelector('meta[property="csp-nonce"]');this._nonce=l?l.getAttribute("content"):null}var t=e.prototype;return t.setOptimizeForSpeed=function(e){u("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),u(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},t.isOptimizeForSpeed=function(){return this._optimizeForSpeed},t.inject=function(){var e=this;if(u(!this._injected,"sheet already injected"),this._injected=!0,this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),this._optimizeForSpeed||(r||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0);return}this._serverSheet={cssRules:[],insertRule:function(t,s){return"number"==typeof s?e._serverSheet.cssRules[s]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),s},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},t.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},t.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},t.insertRule=function(e,t){if(u(a(e),"`insertRule` accepts only strings"),this._optimizeForSpeed){var s=this.getSheet();"number"!=typeof t&&(t=s.cssRules.length);try{s.insertRule(e,t)}catch(t){return r||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var n=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,n))}return this._rulesCount++},t.replaceRule=function(e,t){if(this._optimizeForSpeed){var s=this.getSheet();if(t.trim()||(t=this._deletedRulePlaceholder),!s.cssRules[e])return e;s.deleteRule(e);try{s.insertRule(t,e)}catch(n){r||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),s.insertRule(this._deletedRulePlaceholder,e)}}else{var n=this._tags[e];u(n,"old rule at index `"+e+"` not found"),n.textContent=t}return e},t.deleteRule=function(e){if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];u(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}},t.flush=function(){this._injected=!1,this._rulesCount=0,this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]},t.cssRules=function(){var e=this;return this._tags.reduce(function(t,s){return s?t=t.concat(Array.prototype.map.call(e.getSheetForTag(s).cssRules,function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[])},t.makeStyleTag=function(e,t,s){t&&u(a(t),"makeStyleTag accepts only strings as second parameter");var n=document.createElement("style");this._nonce&&n.setAttribute("nonce",this._nonce),n.type="text/css",n.setAttribute("data-"+e,""),t&&n.appendChild(document.createTextNode(t));var o=document.head||document.getElementsByTagName("head")[0];return s?o.insertBefore(n,s):o.appendChild(n),n},function(e,t){for(var s=0;s<t.length;s++){var n=t[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(e.prototype,[{key:"length",get:function(){return this._rulesCount}}]),e}();function u(e,t){if(!e)throw Error("StyleSheet: "+t+".")}var d=function(e){for(var t=5381,s=e.length;s;)t=33*t^e.charCodeAt(--s);return t>>>0},c={};function h(e,t){if(!t)return"jsx-"+e;var s=String(t),n=e+s;return c[n]||(c[n]="jsx-"+d(e+"-"+s)),c[n]}function m(e,t){var s=e+t;return c[s]||(c[s]=t.replace(/__jsx-style-dynamic-selector/g,e)),c[s]}var f=function(){function e(e){var t=void 0===e?{}:e,s=t.styleSheet,n=void 0===s?null:s,o=t.optimizeForSpeed,i=void 0!==o&&o;this._sheet=n||new l({name:"styled-jsx",optimizeForSpeed:i}),this._sheet.inject(),n&&"boolean"==typeof i&&(this._sheet.setOptimizeForSpeed(i),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer||(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var s=this.getIdAndRules(e),n=s.styleId,o=s.rules;if(n in this._instancesCounts){this._instancesCounts[n]+=1;return}var i=o.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return -1!==e});this._indices[n]=i,this._instancesCounts[n]=1},t.remove=function(e){var t=this,s=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw Error("StyleSheetRegistry: "+t+".")}(s in this._instancesCounts,"styleId: `"+s+"` not found"),this._instancesCounts[s]-=1,this._instancesCounts[s]<1){var n=this._fromServer&&this._fromServer[s];n?(n.parentNode.removeChild(n),delete this._fromServer[s]):(this._indices[s].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[s]),delete this._instancesCounts[s]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],s=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return s[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return!!e[1]}))},t.styles=function(e){var t,s;return t=this.cssRules(),void 0===(s=e)&&(s={}),t.map(function(e){var t=e[0],n=e[1];return i.default.createElement("style",{id:"__"+t,key:"__"+t,nonce:s.nonce?s.nonce:void 0,dangerouslySetInnerHTML:{__html:n}})})},t.getIdAndRules=function(e){var t=e.children,s=e.dynamic,n=e.id;if(s){var o=h(n,s);return{styleId:o,rules:Array.isArray(t)?t.map(function(e){return m(o,e)}):[m(o,t)]}}return{styleId:h(n),rules:Array.isArray(t)?t:[t]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})},e}(),p=o.createContext(null);p.displayName="StyleSheetContext";var y=i.default.useInsertionEffect||i.default.useLayoutEffect,v=new f;function g(e){var t=v||o.useContext(p);return t&&y(function(){return t.add(e),function(){t.remove(e)}},[e.id,String(e.dynamic)]),null}g.dynamic=function(e){return e.map(function(e){return h(e[0],e[1])}).join(" ")},t.style=g},6230:function(e,t,s){"use strict";e.exports=s(28262).style},81537:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return f}});var n=s(85893),o=s(6230),i=s.n(o),r=s(4480),a=s(67294),l=s(4511),u=s(49246),d=s(28049),c=s(66149),h=s(83073),m=s(69583);function f(){let e=(0,r.sJ)(d.db),t=(0,r.sJ)(d.pH),s=(0,r.sJ)(d.g1),o=(0,r.sJ)(d.RI),f=(0,r.sJ)(d.Q),p=(0,r.sJ)(d.di),{name:y,chatDisabled:v}=s,{videoAvailable:g}=f,{streamTitle:w,online:_}=o;return(0,a.useEffect)(()=>{document.body.classList.add("body-background")},[]),(0,n.jsxs)("div",{className:"jsx-cf32fe5d739e776c",children:[(0,n.jsx)(i(),{id:"cf32fe5d739e776c",children:".body-background{background:var(--theme-color-components-chat-background)}"}),(0,n.jsxs)(l.SV,{fallbackRender:e=>{let{error:t}=e;return(0,n.jsx)(m.A,{componentName:"ReadWriteChatEmbed",message:t.message})},children:[(0,n.jsx)(d.me,{}),(0,n.jsx)(h.Q,{}),(0,n.jsx)(c.Z,{name:_&&w||y,chatAvailable:!0,chatDisabled:v,online:g}),e&&(0,n.jsx)("div",{id:"chat-container",className:"jsx-cf32fe5d739e776c",children:(0,n.jsx)(u.ChatContainer,{messages:t,usernameToHighlight:e.displayName,chatUserId:e.id,isModerator:e.isModerator,showInput:!0,height:"92vh",chatAvailable:p})})]})]})}},91479:function(){},5050:function(e){e.exports={header:"Header_header__h_8kj",logoImage:"Header_logoImage__u2hPz",logo:"Header_logo__ZlfnG",title:"Header_title__t7ymt",skipLink:"Header_skipLink__v1i8a",offlineTag:"Header_offlineTag__7jcdf",avatar:"Header_avatar__izREk",chatOfflineText:"Header_chatOfflineText__6Edb1",toolTip:"Header_toolTip__X1aqP"}},39219:function(e){"use strict";e.exports=JSON.parse('{"Notify":"Notify","Level":"Level","Info":"Info","Warning":"Warning","Error":"Error","Timestamp":"Timestamp","Message":"Message","Logs":"Logs","Link":"Link","No news":"No news.","News & Updates from Owncast":"News & Updates from Owncast","Use your broadcasting software":"Use your broadcasting software","Learn how to point your existing software to your new server and start streaming your content":"Learn how to point your existing software to your new server and start streaming your content.","View":"View","Overridden via command line":"Overridden via command line.","Embed your video onto other sites":"Embed your video onto other sites","Learn how you can add your Owncast stream to other sites you control":"Learn how you can add your Owncast stream to other sites you control.","Chat is disabled":"Chat is disabled","Chat will continue to be disabled until you begin a live stream":"Chat will continue to be disabled until you begin a live stream.","Find an audience on the Owncast Directory":"Find an audience on the Owncast Directory","List yourself in the Owncast Directory and show off your stream":{" Enable it in":"List yourself in the Owncast Directory and show off your stream. Enable it in"},"settings":"settings.","Add your Owncast instance to the Fediverse":"Add your Owncast instance to the Fediverse","Enable Owncast social features":"Enable Owncast social features","to have your instance join the Fediverse, allowing people to follow, share and engage with your live stream":"to have your instance join the Fediverse, allowing people to follow, share and engage with your live stream.","No stream is active":"No stream is active","You should start one":"You should start one.","Healthy Stream":"Healthy Stream","Yes":"Yes","No":"No","Playback Health":"Playback Health","Stream health represents":"Stream health represents","of all known players":{" Other player status is unknown":"of all known players. Other player status is unknown."},"TROUBLESHOOT":"TROUBLESHOOT","Powered by Owncast":"Powered by Owncast","Documentation":"Documentation","Contribute":"Contribute","Source":"Source","Skip to player":"Skip to player","Skip to offline message":"Skip to offline message","Skip to page content":"Skip to page content","Skip to footer":"Skip to footer","Chat will be available when the stream is live":"Chat will be available when the stream is live.","Chat is offline":"Chat is offline","Stay updated!":"Stay updated!","Click and never miss future streams!":"Click and never miss future streams!","This stream is offline":"This stream is offline.","the next time goes live":"the next time goes live","Follow":"Follow","on the Fediverse to see the next time goes live":"on the Fediverse to see the next time goes live","Last live ago":"Last live ago","Time":"Time","User":"User","Visible messages":"Visible messages","Hidden messages":"Hidden messages","Chat Messages":"Chat Messages","Manage the messages from viewers that show up on your stream":"Manage the messages from viewers that show up on your stream.","Show":"Show","Hide":"Hide","Visit the":"Visit the","documentation":"documentation","to configure additional details about your viewers":"to configure additional details about your viewers.","When a stream is active and chat is enabled, connected chat clients will be displayed here":"When a stream is active and chat is enabled, connected chat clients will be displayed here.","Connected":"Connected","offline":"offline","Banned Users":"Banned Users","IP Bans":"IP Bans","Moderators":"Moderators","Hardware Info":"Hardware Info","Please wait":"Please wait","No hardware details have been collected yet":"No hardware details have been collected yet.","CPU":"CPU","Memory":"Memory","Disk":"Disk","used":"used","I want to configure my owncast instance":"I want to configure my owncast instance","Learn more":"Learn more","Help configuring my broadcasting software":"Help configuring my broadcasting software","I want to embed my stream into another site":"I want to embed my stream into another site","I want to customize my website":"I want to customize my website","I want to tweak my video output":"I want to tweak my video output","I want to use an external storage provider":"I want to use an external storage provider","I found a bug":"I found a bug","If you found a bug, then please":"If you found a bug, then please","let us know":"let us know","I have a general question":"I have a general question","Most general questions are answered in our":"Most general questions are answered in our","FAQ":"FAQ","or exist in our":"or exist in our","discussions":"discussions","I want to build add-ons for Owncast":"I want to build add-ons for Owncast","You can build your own bots, overlays, tools and add-ons with our":"You can build your own bots, overlays, tools and add-ons with our","developer APIs":"developer APIs.","How can we help you?":"How can we help you?","Troubleshooting":"Troubleshooting","Fix your problems":"Fix your problems","Read the Docs":"Read the Docs","Common tasks":"Common tasks","Other":"Other","Outbound Video Stream":"Outbound Video Stream","Outbound Audio Stream":"Outbound Audio Stream","Stream started":"Stream started","Viewers":"Viewers","Peak viewer count":"Peak viewer count","Outbound Stream Details":"Outbound Stream Details","Inbound Stream Details":"Inbound Stream Details","Input":"Input","Inbound Video Stream":"Inbound Video Stream","Inbound Audio Stream":"Inbound Audio Stream","Current stream":"Current stream","Last 12 hours":"Last 12 hours","Last 24 hours":"Last 24 hours","Last 7 days":"Last 7 days","Last 30 days":"Last 30 days","Last 3 months":"Last 3 months","Last 6 months":"Last 6 months","Viewer Info":"Viewer Info","Current viewers":"Current viewers","Max viewers this stream":"Max viewers this stream","Max viewers last stream":"Max viewers last stream","max viewers":"max viewers","No viewer data has been collected yet":"No viewer data has been collected yet."}')}},function(e){e.O(0,[4283,3800,6167,7039,5888,885,2154,944,2888,9774,179],function(){return e(e.s=30672)}),_N_E=e.O()}]);