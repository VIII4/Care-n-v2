(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},27:function(e,t,a){e.exports=a(59)},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(14),s=a.n(r),i=a(4),o=a(5),c=a(7),u=a(6),y=a(8),f=a(62),d=a(63),m=a(64),p=a(26),b=a(13),g={wy:[{featureType:"all",elementType:"geometry.fill",stylers:[{weight:"2.00"}]},{featureType:"all",elementType:"geometry.stroke",stylers:[{color:"#9c9c9c"}]},{featureType:"all",elementType:"labels.text",stylers:[{visibility:"on"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#f2f2f2"}]},{featureType:"landscape",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"landscape.man_made",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45}]},{featureType:"road",elementType:"geometry.fill",stylers:[{color:"#eeeeee"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#7b7b7b"}]},{featureType:"road",elementType:"labels.text.stroke",stylers:[{color:"#ffffff"}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{color:"#46bcec"},{visibility:"on"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#c8d7d4"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#070707"}]},{featureType:"water",elementType:"labels.text.stroke",stylers:[{color:"#ffffff"}]}],becomeadinosaur:[{elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"landscape.natural",elementType:"geometry.fill",stylers:[{color:"#f5f5f2"},{visibility:"on"}]},{featureType:"administrative",stylers:[{visibility:"off"}]},{featureType:"transit",stylers:[{visibility:"off"}]},{featureType:"poi.attraction",stylers:[{visibility:"off"}]},{featureType:"landscape.man_made",elementType:"geometry.fill",stylers:[{color:"#ffffff"},{visibility:"on"}]},{featureType:"poi.business",stylers:[{visibility:"off"}]},{featureType:"poi.medical",stylers:[{visibility:"off"}]},{featureType:"poi.place_of_worship",stylers:[{visibility:"off"}]},{featureType:"poi.school",stylers:[{visibility:"off"}]},{featureType:"poi.sports_complex",stylers:[{visibility:"off"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#ffffff"},{visibility:"simplified"}]},{featureType:"road.arterial",stylers:[{visibility:"simplified"},{color:"#ffffff"}]},{featureType:"road.highway",elementType:"labels.icon",stylers:[{color:"#ffffff"},{visibility:"off"}]},{featureType:"road.highway",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"road.arterial",stylers:[{color:"#ffffff"}]},{featureType:"road.local",stylers:[{color:"#ffffff"}]},{featureType:"poi.park",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"water",stylers:[{color:"#71c8d4"}]},{featureType:"landscape",stylers:[{color:"#e5e8e7"}]},{featureType:"poi.park",stylers:[{color:"#8ba129"}]},{featureType:"road",stylers:[{color:"#ffffff"}]},{featureType:"poi.sports_complex",elementType:"geometry",stylers:[{color:"#c7c7c7"},{visibility:"off"}]},{featureType:"water",stylers:[{color:"#a0d3d3"}]},{featureType:"poi.park",stylers:[{color:"#91b65d"}]},{featureType:"poi.park",stylers:[{gamma:1.51}]},{featureType:"road.local",stylers:[{visibility:"off"}]},{featureType:"road.local",elementType:"geometry",stylers:[{visibility:"on"}]},{featureType:"poi.government",elementType:"geometry",stylers:[{visibility:"off"}]},{featureType:"landscape",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{visibility:"simplified"}]},{featureType:"road.local",stylers:[{visibility:"simplified"}]},{featureType:"road"},{featureType:"road"},{},{featureType:"road.highway"}],cleangrey:[{featureType:"administrative",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"administrative.country",elementType:"geometry.stroke",stylers:[{visibility:"off"}]},{featureType:"administrative.province",elementType:"geometry.stroke",stylers:[{visibility:"off"}]},{featureType:"landscape",elementType:"geometry",stylers:[{visibility:"on"},{color:"#e3e3e3"}]},{featureType:"landscape.natural",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"all",stylers:[{color:"#cccccc"}]},{featureType:"road",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{visibility:"off"}]},{featureType:"transit.line",elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"transit.station.airport",elementType:"geometry",stylers:[{visibility:"off"}]},{featureType:"transit.station.airport",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#FFFFFF"}]},{featureType:"water",elementType:"labels",stylers:[{visibility:"off"}]}]},h=a(11),v=a.n(h),T={getIssues:function(){return v.a.get("/issue/")},getSingleIssue:function(e){return v.a.get("/issue/"+e)},createIssue:function(e){return v.a.post("/issue/add",e)},updateIssue:function(e,t){return v.a.post("/issue/updatevote/"+e,t)},deleteIssue:function(e){return v.a.delete("/issue/"+e)},getUser:function(e){return v.a.get("/users/"+e)},createUser:function(){return v.a.post("/users/add")},updateUser:function(e){return v.a.post("/users/"+e)}},E=a(12),C=a(24);function I(e){switch(e.issueType){case"Structural":return l.a.createElement(C.a,null);case"Wildlife":return l.a.createElement(E.d,null);case"Utility":return l.a.createElement(E.e,null);case"Roads":return l.a.createElement(E.f,null);case"Vandalism":return l.a.createElement(E.c,null);case"Trash":return l.a.createElement(E.g,null);case"Other":return l.a.createElement(E.a,null);default:return l.a.createElement(E.b,null)}}a(50);function k(e){var t=e.issueType,a=e.onReportIssueClick;return l.a.createElement("button",{name:t,type:"button",onClick:function(){a(t)}},l.a.createElement(I,{issueType:t}))}a(51);function w(e){var t=e.onReportIssueClick;return l.a.createElement("div",{className:"overViewPanel"},l.a.createElement("div",{className:"buttonPanel"},l.a.createElement(k,{issueType:"Wildlife",onReportIssueClick:t}),l.a.createElement(k,{issueType:"Structural",onReportIssueClick:t}),l.a.createElement(k,{issueType:"Utility",onReportIssueClick:t}),l.a.createElement(k,{issueType:"Roads",onReportIssueClick:t})),l.a.createElement("div",{className:"buttonPanel center"},l.a.createElement(k,{issueType:"Vandalism",onReportIssueClick:t}),l.a.createElement(k,{issueType:"Trash",onReportIssueClick:t}),l.a.createElement(k,{issueType:"Other",onReportIssueClick:t})))}a(52);function O(e){var t=e.selectedIssue,a=e.onVoteClick;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("h3",null,t.category),l.a.createElement("p",null,t.descr),l.a.createElement("button",{type:"button",onClick:a},"A"),l.a.createElement("button",{type:"button"},"B")))}var j="".concat("AIzaSyAlo05wNKIX0KloedL8b3ux0RTS77YmOAA"),S=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).loadIssueIntervalTime=10,a.getUpdatedLocation=function(){navigator.geolocation&&(navigator.geolocation.watchPosition(function(e){a.setState(function(t){return{currentLocation:Object(p.a)({},t.currentLatLng,{lat:e.coords.latitude,lng:e.coords.longitude})}})},function(e){return console.log(e)}),a.getLocalIssues(a.state.currentLocation),a.loadIssueSequenceID=setInterval(function(){a.getLocalIssues(a.state.currentLocation)},1e3*a.loadIssueIntervalTime))},a.checkNearLocation=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:8,n=Math.cos(Math.PI*t.lat/180)*(4e4/360),l=Math.abs(t.lng-e.lng)*n,r=Math.abs(t.lat-e.lat)*(4e4/360);return Math.sqrt(l*l+r*r)<=a},a.libraries=[],a.containerStyle={visibility:"visible",width:"100vw",height:"105vh",zIndex:1,position:"absolute"},a.options={disableDefaultUI:!0,styles:g.wy,zoomControl:!0},a.icons={marker:{url:"".concat("","/assets/images/markerA.png"),origin:{x:0,y:0},anchor:{x:30,y:50},scaledSize:{width:75,height:75}},markerA:{url:"".concat("","/assets/images/markerB.png"),origin:{x:0,y:0},anchor:{x:16,y:-1},scaledSize:{width:35,height:35}},markerB:{url:"".concat("","/assets/images/markerC.png"),origin:{x:0,y:0},anchor:{x:30,y:50},scaledSize:{width:45,height:45}}},a.onIssueMarkerClick=function(e){a.setState({selectedIssue:e}),a.setState({showingReportPanel:!1})},a.closeInfoWindow=function(){a.setState({selectedIssue:null})},a.closePanelWindow=function(){a.setState({showingReportPanel:!1})},a.onUserMarkerClick=function(e){var t=!a.state.showingReportPanel;a.setState({showingReportPanel:t}),a.setState({selectedIssue:null})},a.onVoteClick=function(){T.getSingleIssue(a.state.selectedIssue._id).then(function(e){var t=e.data.voteCount+1;T.updateIssue(e.data._id,{voteCount:t}).then(function(e){return console.log(e)}).catch(function(e){return console.log(e)})})},a.onReportIssueClick=function(e){var t={category:e,descr:"New issue added",voteCount:1,zipcode:99999,status:"Voting"};T.createIssue(t).then(function(e){return console.log(e)}).catch(function(e){return console.log(e)})},a.getLocalIssues=function(e){T.getIssues().then(function(e){var t=e.data.filter(function(e){var t={lat:e.latlng.lat,lng:e.latlng.lng};return a.checkNearLocation(t,a.state.currentLocation)});a.setState({localIssues:t})}).catch(function(e){return console.log(e)})},a.componentDidMount=function(){a.getUpdatedLocation()},a.state={currentLocation:{lat:37.804363,lng:-122.271111},localIssues:[],selectedIssue:null,showingReportPanel:!1,reportingType:""},a}return Object(y.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(b.c,{googleMapsApiKey:j},l.a.createElement(b.a,{google:this.props.google,mapContainerStyle:this.containerStyle,center:this.state.currentLocation,zoom:15,options:this.options,onClick:this.closeInfoWindow},l.a.createElement(b.d,{position:this.state.currentLocation,icon:this.icons.markerB,onClick:this.onUserMarkerClick}),this.state.localIssues.map(function(t,a){if("Closed"!==t.status)return l.a.createElement(b.d,{key:a,position:{lat:t.latlng.lat,lng:t.latlng.lng},icon:e.icons.markerA,clickable:!0,onClick:function(){e.onIssueMarkerClick(t)}})}),this.state.selectedIssue&&l.a.createElement(b.b,{onCloseClick:this.closeInfoWindow,position:{lat:this.state.selectedIssue.latlng.lat,lng:this.state.selectedIssue.latlng.lng}},l.a.createElement(O,{selectedIssue:this.state.selectedIssue,onVoteClick:this.onVoteClick})),this.state.showingReportPanel&&l.a.createElement(b.e,{position:this.state.currentLocation,mapPaneName:b.e.FLOAT_PANE},l.a.createElement(w,{onReportIssueClick:this.onReportIssueClick}))))}}]),t}(n.Component),x=(a(15),function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"contactsCardContent",className:"textBlock cardInnards"},l.a.createElement("h4",null,this.props.header),l.a.createElement("hr",null),l.a.createElement("a",{id:"aTag",href:"#"},"Local services: 555 555 5555"),l.a.createElement("br",null),l.a.createElement("a",{id:"aTag",href:"#"},"Local services: 555 555 5555"),l.a.createElement("br",null),l.a.createElement("a",{id:"aTag",href:"#"},"Local services: 555 555 5555"),l.a.createElement("br",null),l.a.createElement("a",{id:"aTag",href:"#"},"Local services: 555 555 5555"),l.a.createElement("br",null),l.a.createElement("a",{id:"aTag",href:"#"},"Local services: 555 555 5555"),l.a.createElement("br",null),l.a.createElement("a",{id:"aTag",href:"#"},"Local services: 555 555 5555"),l.a.createElement("br",null),l.a.createElement("a",{id:"aTag",href:"#"},"Local services: 555 555 5555"),l.a.createElement("br",null),l.a.createElement("a",{id:"aTag",href:"#"},"Local services: 555 555 5555"))}}]),t}(l.a.Component)),L=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"aboutCardContent",className:"textBlock cardInnards"},l.a.createElement("h4",null,this.props.header),l.a.createElement("hr",null),l.a.createElement("a",{id:"aTag",href:"#"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur vitae, asperiores inventore officia eius voluptates in veritatis facilis nulla dolorem aspernatur commodi est sunt velit laudantium debitis autem harum cum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus debitis consequuntur, officiis illo at qui repudiandae laudantium autem asperiores ex quaerat accusamus eum maiores magnam fugiat. Velit voluptas quas porro!"))}}]),t}(l.a.Component),B=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).DoSomething=function(){console.log("Event Triggered")},a}return Object(y.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"voteCardContent",className:"textBlock cardInnards"},l.a.createElement("h4",null,this.props.header),l.a.createElement("hr",null),l.a.createElement("div",{className:"voteRowCardInnard"},l.a.createElement("a",null,"Issue A"),l.a.createElement("button",{onClick:this.DoSomething},"Vote")),l.a.createElement("div",{className:"voteRowCardInnard"},l.a.createElement("a",null,"Issue A"),l.a.createElement("button",{onClick:this.DoSomething},"Vote")),l.a.createElement("div",{className:"voteRowCardInnard"},l.a.createElement("a",null,"Issue A"),l.a.createElement("button",{onClick:this.DoSomething},"Vote")))}}]),t}(l.a.Component),N=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).closeCardInnards=function(){Array.prototype.slice.call(document.getElementsByClassName("cardInnards")).forEach(function(e){e.style.display="none"})},a.closeCard=function(){document.getElementById("cardContainer").style.visibility="hidden",a.closeCardInnards()},a}return Object(y.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"cardContainer",id:"cardContainer",style:{visibility:this.props.visibility}},l.a.createElement("a",{id:"closeBtn",className:"closebtn",onClick:this.closeCard},"x"),l.a.createElement("br",null),l.a.createElement("div",{id:"cardInnards",className:"textBlock"},l.a.createElement(x,{header:"Local Government Contacts",display:"none"}),l.a.createElement(L,{header:"About",display:"none"}),l.a.createElement(B,{header:"Issues In Your Area",display:"none"})))}}]),t}(l.a.Component);var R=function(){return l.a.createElement("div",null,l.a.createElement(N,{visibility:"hidden"}),l.a.createElement(S,null))},A=(a(53),a(54),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).OpenSidebar=function(){document.getElementById("carenSidebar").style.width="30vw",document.getElementById("carenSidebar").style.borderRight="border-right: 5px solid #000",document.getElementById("main").style.marginLeft="30vw"},a.CloseSidebar=function(){document.getElementById("carenSidebar").style.width="0px",document.getElementById("carenSidebar").style.borderRight="border-right: 5px solid #000",document.getElementById("main").style.marginLeft="0px"},a.CloseCardInnards=function(){Array.prototype.slice.call(document.getElementsByClassName("cardInnards")).forEach(function(e){e.style.display="none"})},a.OpenCard=function(e,t){switch(a.CloseCardInnards(),document.getElementById("cardContainer").style.visibility="visible",t){case"contacts":document.getElementById("contactsCardContent").style.display="block",console.log("contacts");break;case"about":document.getElementById("aboutCardContent").style.display="block",console.log("contacts")}a.CloseSidebar()},a}return Object(y.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("div",{id:"main"},l.a.createElement("button",{className:"openbtn",onClick:this.OpenSidebar},"\u2630"),l.a.createElement("a",{className:"logo",href:"#"},"Care'n")),l.a.createElement("div",{id:"carenSidebar",className:"sidebar"},l.a.createElement("a",{href:"javascript:void(0)",className:"closebtn",onClick:this.CloseSidebar},"x"),l.a.createElement("a",{id:"aTag",onClick:function(t){e.OpenCard(t,"about")}},"About"),l.a.createElement("a",{id:"aTag",onClick:function(t){e.OpenCard(t,"contacts")}},"Contact")))}}]),t}(l.a.Component)),P=(a(55),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).CloseSidebar=function(){document.getElementById("carenSidebar").style.width="0px",document.getElementById("carenSidebar").style.borderRight="border-right: 5px solid #000",document.getElementById("main").style.marginLeft="0px"},a.CloseCardInnards=function(){Array.prototype.slice.call(document.getElementsByClassName("cardInnards")).forEach(function(e){e.style.display="none"})},a.OpenCard=function(e,t){a.CloseCardInnards(),document.getElementById("cardContainer").style.visibility="visible",document.getElementById("voteCardContent").style.display="block",console.log("contacts")},a}return Object(y.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"contextBtnContainer"},l.a.createElement("button",{className:"contextBtn",onClick:this.OpenCard},"..."))}}]),t}(l.a.Component)),V=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(f.a,null,l.a.createElement("div",null,l.a.createElement(A,null),l.a.createElement(d.a,null,l.a.createElement(m.a,{exact:!0,path:"/",component:R})),l.a.createElement(P,null)))}}]),t}(l.a.Component);s.a.render(l.a.createElement(V,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.bcd8e55d.chunk.js.map