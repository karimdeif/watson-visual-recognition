(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{19:function(e,t,n){},21:function(e,t,n){e.exports=n.p+"static/media/github.860a4c62.svg"},23:function(e,t,n){e.exports=n.p+"static/media/photo.2b0f570e.svg"},24:function(e,t,n){e.exports=n.p+"static/media/failed.f16429a9.svg"},25:function(e,t,n){e.exports=n.p+"static/media/upload.82ff87d3.svg"},27:function(e,t,n){e.exports=n(56)},32:function(e,t,n){},33:function(e,t,n){},52:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(20),i=n.n(c),l=(n(32),n(33),n(21)),s=n.n(l),o=n(7),m=n.n(o),u=n(8),p=n(3),d=n(4),v=n(6),g=n(5),f=n(9),h=n.n(f),E=(n(52),function(){return r.a.createElement("div",{className:"dropzone-content"},r.a.createElement("div",{className:"loading"},r.a.createElement("div",{className:"finger finger-1"},r.a.createElement("div",{className:"finger-item"},r.a.createElement("span",null),r.a.createElement("i",null))),r.a.createElement("div",{className:"finger finger-2"},r.a.createElement("div",{className:"finger-item"},r.a.createElement("span",null),r.a.createElement("i",null))),r.a.createElement("div",{className:"finger finger-3"},r.a.createElement("div",{className:"finger-item"},r.a.createElement("span",null),r.a.createElement("i",null))),r.a.createElement("div",{className:"finger finger-4"},r.a.createElement("div",{className:"finger-item"},r.a.createElement("span",null),r.a.createElement("i",null))),r.a.createElement("div",{className:"last-finger"},r.a.createElement("div",{className:"last-finger-item"},r.a.createElement("i",null)))))}),y=n(26),b=(n(55),n(23)),w=n.n(b),N=n(24),k=n.n(N),S=n(25),j=n.n(S),x=function(e){Object(v.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).onDrop=function(t){if(t.length){var n=t[0],a=new FormData;a.append("document",n),e.props.callVisionApi(a)}},e}return Object(d.a)(n,[{key:"render",value:function(){return r.a.createElement(y.a,{onDrop:this.onDrop.bind(this),accept:"image/*",multiple:!1},(function(e){var t=e.getRootProps,n=e.getInputProps,a=e.isDragActive,c=e.isDragReject;return r.a.createElement("div",t(),r.a.createElement("input",n()),c?r.a.createElement("div",{className:"dropzone-content"},r.a.createElement("div",null,"File type not accepted/",r.a.createElement("br",null),"Multiple files not allowed",r.a.createElement("br",null),"Please try again"),r.a.createElement("img",{src:k.a,className:"drop-logo",alt:"failed-logo"})):a?r.a.createElement("div",{className:"dropzone-content"},r.a.createElement("div",null,"Drop your file here"),r.a.createElement("img",{src:j.a,className:"drop-logo",alt:"uploading-logo"})):r.a.createElement("div",{className:"dropzone-content"},r.a.createElement("div",null,"Drag image file here or",r.a.createElement("br",null),"Click inside the box to browse"),r.a.createElement("img",{src:w.a,className:"drop-logo",alt:"upload-logo"})))}))}}]),n}(a.Component),O=(n(19),function(e){Object(v.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={result:{}},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.result;this.setState({result:e})}},{key:"componentDidUpdate",value:function(e){var t=this.props.result;e.result!==t&&this.setState({result:t})}},{key:"render",value:function(){var e=this.state.result;return r.a.createElement(a.Fragment,null,Object.keys(e).length?r.a.createElement("div",{className:"result"},r.a.createElement("div",{className:"result-image"},r.a.createElement("img",{src:e.mediaLink,className:"media-image",alt:"media-logo"})),r.a.createElement("div",{className:"result-description"},e.description)):r.a.createElement("div",null,"Please add some images"))}}]),n}(a.Component)),D=function(e){Object(v.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contents:[]},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.contents;this.setState({contents:e})}},{key:"componentDidUpdate",value:function(e){var t=this.props.contents;e.contents!==t&&this.setState({contents:t})}},{key:"render",value:function(){var e=this.state.contents;return r.a.createElement("div",null,e.length?e.map((function(e,t){return r.a.createElement("div",{className:"result",key:t},r.a.createElement("div",{className:"result-image"},r.a.createElement("img",{src:e.mediaLink,className:"media-image",alt:"media-logo"})),r.a.createElement("div",{className:"result-description"},e.description))})):r.a.createElement("div",null,"Please add some images"))}}]),n}(a.Component),F="/api/contents",C=function(e){Object(v.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contents:[],result:{},isFetching:!1,view:""},e.setStateSync=function(t){return new Promise((function(n){e.setState(t,n())}))},e.goToHome=function(){e.setState({view:""})},e.getHistoryData=function(){var t=Object(u.a)(m.a.mark((function t(n){var a,r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setStateSync({isFetching:!0});case 2:return t.prev=2,t.next=5,h.a.get(F);case 5:return a=t.sent,r=a.data.contents,t.next=9,e.setStateSync({isFetching:!1,contents:r,view:"ViewHistory"});case 9:t.next=16;break;case 11:return t.prev=11,t.t0=t.catch(2),console.log(t.t0),t.next=16,e.setStateSync({isFetching:!1,view:""});case 16:case"end":return t.stop()}}),t,null,[[2,11]])})));return function(e){return t.apply(this,arguments)}}(),e.callVisionApi=function(){var t=Object(u.a)(m.a.mark((function t(n){var a,r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setStateSync({isFetching:!0});case 2:return t.prev=2,t.next=5,h.a.post(F,n,{headers:{"Content-Type":"multipart/form-data"}});case 5:return a=t.sent,r=a.data.result,t.next=9,e.setStateSync({isFetching:!1,result:r,view:"ViewContent"});case 9:t.next=16;break;case 11:return t.prev=11,t.t0=t.catch(2),console.log(t.t0),t.next=16,e.setStateSync({isFetching:!1,view:""});case 16:case"end":return t.stop()}}),t,null,[[2,11]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.isFetching,n=e.contents,c=e.result,i=e.view;return r.a.createElement(a.Fragment,null,t?null:r.a.createElement("div",null,"ViewHistory"===i?r.a.createElement("button",{type:"button",onClick:this.goToHome},"Home"):r.a.createElement("button",{type:"button",onClick:this.getHistoryData},"Display previous results")),r.a.createElement("div",{className:"dropzone"},t?r.a.createElement(E,null):"ViewContent"===i?r.a.createElement(O,{result:c}):"ViewHistory"===i?r.a.createElement(D,{contents:n}):r.a.createElement(x,{callVisionApi:this.callVisionApi})))}}]),n}(a.Component);var A=function(){return r.a.createElement(a.Fragment,null,r.a.createElement("a",{target:"_blank",href:"https://github.com/manvendra22/image-text-reader",className:"git-link"},r.a.createElement("img",{src:s.a,alt:"github-logo",className:"icon-git"})),r.a.createElement("div",{className:"container"},r.a.createElement(C,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.1fbdcb1f.chunk.js.map