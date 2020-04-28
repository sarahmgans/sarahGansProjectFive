(this["webpackJsonpchirp-tronome"]=this["webpackJsonpchirp-tronome"]||[]).push([[0],{11:function(e,t,a){e.exports=a.p+"static/media/chirp1.f93aa548.wav"},12:function(e,t,a){e.exports=a.p+"static/media/chirp2.4757f7bf.mp3"},15:function(e,t,a){e.exports=a(25)},20:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),c=a.n(l),i=a(9),o=a(10),s=a(14),p=a(13),u=(a(20),a(3)),m=a.n(u);a(22);m.a.initializeApp({apiKey:"AIzaSyAQvM7s0oSwsITm9vlEVDHh6iy8LFYBSq8",authDomain:"chirptronome.firebaseapp.com",databaseURL:"https://chirptronome.firebaseio.com",projectId:"chirptronome",storageBucket:"chirptronome.appspot.com",messagingSenderId:"453587769966",appId:"1:453587769966:web:96f859d9f1bd66f43be47f"});var h=m.a;var d=function(e){return r.a.createElement("li",{onClick:function(){console.log(e.logId),h.database().ref(e.logId).remove()}},r.a.createElement("p",null,r.a.createElement("span",{className:"bold"},"Title:")," ",e.logTitle),r.a.createElement("p",null,r.a.createElement("span",{className:"bold"},"Tempo:")," ",e.cpm," Chirps per Minute"),r.a.createElement("span",{className:"x"},"\u2612"))};var g=function(){return r.a.createElement("header",null,r.a.createElement("h1",null,r.a.createElement("span",{"aria-label":"chick",role:"img"},"\ud83d\udc25")," Chirp-tronome"," ",r.a.createElement("span",{"aria-label":"chick",role:"img"},"\ud83d\udc25")),r.a.createElement("p",null,"Why listen to a ",r.a.createElement("span",null,"click")," when you can listen to a"," ",r.a.createElement("span",null,"chick?")))};var f=function(e){return r.a.createElement("p",{className:"chirps"},r.a.createElement("span",null,e.cpm)," Chirps per Minute")};var v=function(e){return r.a.createElement("button",{className:"playing",onClick:e.startAndStop},e.playing?"Stop":"Start")},E=a(11),b=a.n(E),y=a(12),I=a.n(y),S=function(e){Object(s.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).handleSubmit=function(t){(t.preventDefault(),""!==e.state.userInput)&&(h.database().ref().push(e.state.userInput),e.setState({userInput:""}))},e.handleUserInput=function(t){e.setState({userInput:t.target.value})},e.chirp=function(){e.state.count%e.state.chirpsPerMeasure===0?e.chirp2.play():e.chirp1.play(),e.setState((function(e){return{count:(e.count+1)%e.chirpsPerMeasure}}))},e.startAndStop=function(){e.state.playing?(clearInterval(e.timer),e.setState({playing:!1})):(e.timer=setInterval(e.chirp,60/e.state.cpm*1e3),e.setState({count:0,playing:!0},e.chirp))},e.handleChange=function(t){var a=parseInt(t.target.value);e.state.playing?(clearInterval(e.timer),e.timer=setInterval(e.chirp,60/a*1e3),e.setState({count:0,cpm:a})):e.setState({cpm:a})},e.state={playing:!1,count:0,cpm:80,chirpsPerMeasure:4,logs:[],userInput:""},e.chirp1=new Audio(b.a),e.chirp2=new Audio(I.a),e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.database().ref().on("value",(function(t){var a=t.val(),n=[];for(var r in a)n.push({logName:a[r],logId:r});e.setState({logs:n})}))}},{key:"render",value:function(){var e=this.state,t=e.playing,a=e.cpm;return r.a.createElement("div",{className:"chirptronome"},r.a.createElement("div",{className:"data"},r.a.createElement(g,null),r.a.createElement("main",null,r.a.createElement(f,{cpm:a}),r.a.createElement("form",{action:"",onSubmit:this.handleSubmit},r.a.createElement("input",{className:"range",type:"range",min:"20",max:"260",value:a,onChange:this.handleChange}),r.a.createElement("div",{className:"parent"},r.a.createElement("label",null,r.a.createElement("p",null,"What"," ",r.a.createElement("span",{"aria-label":"music",className:"musicNotes",role:"img"},"\ud83c\udfb6")," ","are you playing?"),r.a.createElement("input",{className:"piece",type:"text",placeholder:"Title:",name:"piece",value:this.state.userInput,id:"userLog",onChange:this.handleUserInput})),r.a.createElement("button",{type:"submit"},"Store"),r.a.createElement(v,{playing:t,startAndStop:this.startAndStop}),r.a.createElement("ul",null,this.state.logs.map((function(e){return r.a.createElement(d,{key:e.logId,logId:e.logId,logTitle:e.logName,cpm:a})}))))))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.9aa809f4.chunk.js.map