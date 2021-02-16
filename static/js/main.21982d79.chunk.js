(this.webpackJsonptankdb=this.webpackJsonptankdb||[]).push([[0],{17:function(t){t.exports=JSON.parse('[{"id":1,"name":"M22 Locust","weight":"16,400lbs","length":"(12ft, 11in)","width":"(7ft, 1in)","height":"(6ft, 1in)","size":"37mm","type":"Light","country":"USA","speed":"40mph"},{"id":1,"name":"M24 Chaffee","weight":"40,500lbs","length":"(18ft, 3in)","width":"(9ft, 10in)","height":"(9ft, 1in)","size":"75mm","type":"Light","country":"USA","speed":"35mph"},{"id":1,"name":"M3 Stuart","weight":"33,500lbs","length":"(15ft, 10.5in)","width":"(7ft, 6in)","height":"(8ft, 5in)","size":"37mm","type":"Light","country":"USA","speed":"36mph"},{"id":1,"name":"M5 Stuart","weight":"33,500lbs","length":"(15ft, 10.5in)","width":"(7ft, 6in)","height":"(8ft, 5in)","size":"37mm","type":"Light","country":"USA","speed":"36mph"},{"id":1,"name":"M3 Lee/Grant","weight":"60,000lbs","length":"(18ft, 6in)","width":"(8ft, 11in)","height":"(10ft, 3in)","size":"75mm","type":"Medium","country":"USA","speed":"26mph"},{"id":1,"name":"M4 (HWTZR)","weight":"84,000lbs","length":"(20ft, 7in)","width":"(9ft, 10in)","height":"(9ft, 9in)","size":"105mm","type":"Medium","country":"USA","speed":"22mph"},{"id":1,"name":"M2","weight":"41,000lbs","length":"(17ft, 8in)","width":"(8ft, 6in)","height":"(9ft, 3in)","size":"37mm","type":"Medium","country":"USA","speed":"26mph"},{"id":1,"name":"M26 Pershing","weight":"92,000lbs","length":"(20ft, 9.5in)","width":"(11ft, 6in)","height":"(9ft, 1.5in)","size":"90mm","type":"Heavy","country":"USA","speed":"30mph"},{"id":1,"name":"M10","weight":"65,200lbs","length":"(19ft, 7in)","width":"(10ft, 0in)","height":"(9ft, 6in)","size":"3in","type":"Destroyer","country":"USA","speed":"25mph"},{"id":1,"name":"M18 Hellcat","weight":"39,000lbs","length":"(21ft, 10in)","width":"(9ft, 5in)","height":"(8ft, 5in)","size":"76mm","type":"Destroyer","country":"USA","speed":"60mph"},{"id":1,"name":"M36 Jackson","weight":"63,000lbs","length":"(24ft, 6in)","width":"(10ft, 0in)","height":"(10ft, 9in)","size":"90mm","type":"Destroyer","country":"USA","speed":"26mph"}]')},23:function(t,e,i){},34:function(t,e,i){"use strict";i.r(e);var s=i(1),n=i(15),c=i.n(n),h=i(18),a=(i(23),i(9)),d=i(2),r=i(0);var o=function(){return Object(r.jsx)("div",{class:"about-body",children:Object(r.jsx)("div",{class:"about-box",children:Object(r.jsx)("h4",{class:"about-text",children:Object(r.jsx)("span",{children:Object(r.jsx)("p",{class:"span-text",children:"This database was created for you, to learn something you didnt already know! The application lets you pick and choose through an ordered list of tanks from all three WWII super powers. Everything you see on this application is handcrafted and created from scratch. All of the information is correct and is up to date. If you find an error please contact me and I will try my best to correct it. -Caleb Dunahee, Thanks!"})})})})})};var p=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{class:"home-title",children:Object(r.jsx)("span",{children:Object(r.jsx)("p",{class:"span-text1",children:"Welcome to the Tank Database!"})})}),Object(r.jsx)("p",{class:"home-title2",children:Object(r.jsx)("span",{children:Object(r.jsx)("p",{class:"span-text1",children:"The tanks are listed from left to right in descending order: (Light), (Medium), (Heavy), (Destroyers)"})})})]})};var l=Object(d.f)((function(){return Object(r.jsx)("div",{children:Object(r.jsxs)("nav",{class:"navbar navbar-light",id:"nav-color",children:[Object(r.jsx)(a.b,{class:"navbar-brand",to:"/home",children:Object(r.jsx)("p",{children:Object(r.jsx)("span",{class:"nav-bg",children:"Home"})})}),Object(r.jsx)("img",{src:"https://cdn2.bigcommerce.com/server1700/01wp0ckw/products/2624/images/7707/LOGO_LOCO_004__83210.1503522736.500.500.png?c=2",height:"50px",width:"50px",id:"logos"}),Object(r.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_Soviet_Union.svg/1200px-Flag_of_the_Soviet_Union.svg.png",height:"30px",width:"50px",id:"logos"}),Object(r.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",height:"30px",width:"50px",id:"logos"}),Object(r.jsx)(a.b,{class:"navbar-brand",to:"/about",children:Object(r.jsx)("p",{children:Object(r.jsx)("span",{class:"nav-bg",children:"About"})})})]})})}));var j=function(t){return Object(r.jsx)("div",{children:Object(r.jsx)("button",{onClick:function(){return t.displayTank("Name:  "+t.Name+"  Weight:  "+t.Weight+"  Length:  "+t.Length+"  Width:  "+t.Width+"  Height:  "+t.Height+"  Cannon:  "+t.Size+"  Speed:  "+t.Speed+"  Type:  "+t.Type+"  Country:  "+t.Count)},class:"dta-btns",children:t.Name})})};var g=function(t){return Object(r.jsx)("div",{children:Object(r.jsx)("main",{children:Object(r.jsx)("p",{class:"display-text",children:t.chosenTank})})})};var m=function(){return Object(r.jsx)("div",{children:Object(r.jsx)("footer",{class:"footer"})})},b=i(17),x=function(){return Object(r.jsxs)("div",{class:"overflow",children:[Object(r.jsx)("h1",{class:"display-text2",children:"M22 Locust"}),Object(r.jsx)("img",{id:"pic",src:"https://upload.wikimedia.org/wikipedia/commons/e/e0/M22_Locust_light_tank_at_Bovington.jpg",width:"300px",height:"220px"}),Object(r.jsx)("h1",{class:"display-text2",children:"M24 Chaffee"}),Object(r.jsx)("img",{id:"pic",src:"https://upload.wikimedia.org/wikipedia/commons/8/89/M24_Chaffee_33314_4CV_pic07.JPG",width:"300px",height:"220px"}),Object(r.jsx)("h1",{class:"display-text2",children:"M3 Stuart"}),Object(r.jsx)("img",{id:"pic",src:"https://upload.wikimedia.org/wikipedia/commons/c/cb/Stuart_m5a1_cfb_borden_4.JPG",width:"300px",height:"220px"}),Object(r.jsx)("h1",{class:"display-text2",children:"M5 Stuart"}),Object(r.jsx)("img",{id:"pic",src:"https://lh3.googleusercontent.com/proxy/Gw3Z4aNFMNCk7LYm9c0kjLPbZpUtIC6YScUJtkGtQLFqbatCqsUA84u6W58BZbbmnYDxvjNW5QhpSxWvBClOP4HbjTPRiA3mNGVnIUtS5CAVTDJzQ2dY3BhQA66BBBRrfghOjpvKxuF8YtY",width:"300px",height:"220px"}),Object(r.jsx)("h1",{class:"display-text2",children:"M3 Lee/Grant"}),Object(r.jsx)("img",{id:"pic",src:"https://static.wikia.nocookie.net/military/images/8/8e/M3_Lee.jpg/revision/latest/scale-to-width-down/340?cb=20100613134012",width:"300px",height:"220px"}),Object(r.jsx)("h1",{class:"display-text2",children:"M4 (HWTZR)"}),Object(r.jsx)("img",{id:"pic",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/M4_Sherman_tank_-_Flickr_-_Joost_J._Bakker_IJmuiden.jpg/1200px-M4_Sherman_tank_-_Flickr_-_Joost_J._Bakker_IJmuiden.jpg",width:"300px",height:"220px"}),Object(r.jsx)("h1",{class:"display-text2",children:"M2"}),Object(r.jsx)("img",{id:"pic",src:"https://upload.wikimedia.org/wikipedia/commons/b/b5/Aberdean_proving_grounds_014.JPG",width:"300px",height:"220px"}),Object(r.jsx)("h1",{class:"display-text2",children:"M26 Pershing"}),Object(r.jsx)("img",{id:"pic",src:"https://upload.wikimedia.org/wikipedia/commons/a/a2/Tanks_at_the_USS_Alabama_-_Mobile%2C_AL_-_001.jpg",width:"300px",height:"220px"}),Object(r.jsx)("h1",{class:"display-text2",children:"M10"}),Object(r.jsx)("img",{id:"pic",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Aberdean_proving_grounds_036.JPG",width:"300px",height:"220px"}),Object(r.jsx)("h1",{class:"display-text2",children:"M18 Hellcat"}),Object(r.jsx)("img",{id:"pic",src:"https://upload.wikimedia.org/wikipedia/commons/4/43/M18_hellcat_side.jpg",width:"300px",height:"220px"}),Object(r.jsx)("h1",{class:"display-text2",children:"M36 Jackson"}),Object(r.jsx)("img",{id:"pic",src:"https://i.redd.it/o4iv4f0lpam21.jpg",width:"300px",height:"220px"})]})};var u=function(){var t=Object(s.useState)(""),e=Object(h.a)(t,2),i=e[0],n=e[1],c=function(t){n(t)};return Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)(a.a,{children:[Object(r.jsx)(l,{}),Object(r.jsxs)(d.c,{children:[Object(r.jsxs)(d.a,{path:"/home",children:[Object(r.jsx)(p,{}),Object(r.jsx)("div",{class:"container",id:"Ui",children:Object(r.jsxs)("div",{class:"row",children:[Object(r.jsx)("div",{class:"col-sm",children:Object(r.jsx)(g,{chosenTank:i})}),Object(r.jsx)("div",{class:"col-sm",id:"tank-list",children:b.map((function(t){return Object(r.jsx)(j,{id:t.id,Name:t.name,Weight:t.weight,Length:t.length,Width:t.width,Height:t.height,Size:t.size,Speed:t.speed,Type:t.type,Count:t.country,Img:t.img,displayTank:c})}))}),Object(r.jsx)("div",{class:"col-sm",children:Object(r.jsx)(x,{})})]})})]}),Object(r.jsx)(d.a,{path:"/about",children:Object(r.jsx)(o,{})})]}),Object(r.jsx)(m,{})]})})},O=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,35)).then((function(e){var i=e.getCLS,s=e.getFID,n=e.getFCP,c=e.getLCP,h=e.getTTFB;i(t),s(t),n(t),c(t),h(t)}))};i(30),i(31),i(32),i(33);c.a.render(Object(r.jsx)(s.StrictMode,{children:Object(r.jsx)(u,{})}),document.getElementById("root")),O()}},[[34,1,2]]]);
//# sourceMappingURL=main.21982d79.chunk.js.map