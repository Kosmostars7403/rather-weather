"use strict";(self.webpackChunkrather_weather=self.webpackChunkrather_weather||[]).push([[591],{5591:(f,i,o)=>{o.r(i),o.d(i,{NextDaysPageModule:()=>_});var d=o(6895),e=o(8256),c=o(6066),s=o(8420);function g(t,a){if(1&t&&(e.TgZ(0,"tr",11)(1,"td")(2,"div"),e._uU(3),e.ALo(4,"date"),e.qZA(),e.TgZ(5,"div"),e._uU(6),e.ALo(7,"temp"),e.ALo(8,"temp"),e.qZA()(),e.TgZ(9,"td"),e._UZ(10,"img",12),e.qZA(),e.TgZ(11,"td",13)(12,"div"),e._uU(13),e.qZA(),e.TgZ(14,"div"),e._uU(15),e.qZA()(),e.TgZ(16,"td"),e._uU(17),e.qZA(),e.TgZ(18,"td"),e._uU(19),e.qZA(),e.TgZ(20,"td"),e._uU(21),e.qZA()()),2&t){const n=a.$implicit;e.xp6(3),e.Oqu(e.xi3(4,9,1e3*n.dt,"HH:mm")),e.xp6(3),e.AsE("",e.lcZ(7,12,n.main.temp_min),"...",e.lcZ(8,14,n.main.temp_max),"\xb0C"),e.xp6(4),e.Q6J("src","http://openweathermap.org/img/wn/"+n.weather[0].icon+"@2x.png",e.LSH),e.xp6(3),e.Oqu(n.weather[0].description),e.xp6(2),e.hij("Feels like ",n.main.feels_like,""),e.xp6(2),e.Oqu(n.main.pressure),e.xp6(2),e.hij("",n.main.humidity,"%"),e.xp6(2),e.hij("",n.wind.speed," m/s")}}let l=(()=>{class t{constructor(){this.dayWeather=[],this.expanded=!1}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-day-card"]],inputs:{dayWeather:"dayWeather"},decls:22,vars:8,consts:[[1,"day-weather"],[1,"body-1","card-title"],[1,"table-expander"],[1,"day-weather-table","body-1"],[1,"time"],[1,"icon"],[1,"description-head"],[1,""],["class","table-row",4,"ngFor","ngForOf"],[1,"btn-wrapper"],[1,"more-btn",3,"click"],[1,"table-row"],["alt","weather icon",3,"src"],[1,"body-1","description"]],template:function(n,r){1&n&&(e.TgZ(0,"article",0)(1,"p",1),e._uU(2),e.ALo(3,"date"),e.qZA(),e.TgZ(4,"div",2)(5,"table",3)(6,"thead")(7,"tr"),e._UZ(8,"td",4)(9,"td",5)(10,"td",6),e.TgZ(11,"td",7),e._uU(12,"Pressure"),e.qZA(),e.TgZ(13,"td",7),e._uU(14,"Humidity"),e.qZA(),e.TgZ(15,"td",7),e._uU(16,"Wind Speed"),e.qZA()()(),e.TgZ(17,"tbody"),e.YNc(18,g,22,16,"tr",8),e.qZA()()(),e.TgZ(19,"div",9)(20,"button",10),e.NdJ("click",function(){return r.expanded=!r.expanded}),e._uU(21),e.qZA()()()),2&n&&(e.xp6(2),e.Oqu(e.xi3(3,5,1e3*r.dayWeather[0].dt,"dd MMM")),e.xp6(2),e.ekj("expanded",r.expanded),e.xp6(14),e.Q6J("ngForOf",r.dayWeather),e.xp6(3),e.Oqu(r.expanded?"Less..":"More..."))},dependencies:[d.sg,d.uU,s.Y],styles:[".day-weather[_ngcontent-%COMP%]{padding:64px;border-radius:32px;background:linear-gradient(252.44deg,rgba(239,255,253,.7) 0%,rgba(239,255,253,0) 100%)}.day-weather[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]{margin-bottom:32px;font-size:48px;line-height:52px}.day-weather[_ngcontent-%COMP%]   .table-expander[_ngcontent-%COMP%]{overflow:hidden;max-height:220px;will-change:transform;transition:.7s ease-in-out;margin-bottom:32px}.day-weather[_ngcontent-%COMP%]   .table-expander.expanded[_ngcontent-%COMP%]{max-height:5000px}.day-weather[_ngcontent-%COMP%]   .day-weather-table[_ngcontent-%COMP%]{width:100%;table-layout:fixed;border-collapse:collapse}.day-weather[_ngcontent-%COMP%]   .day-weather-table[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]{width:130px}.day-weather[_ngcontent-%COMP%]   .day-weather-table[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{width:100px}.day-weather[_ngcontent-%COMP%]   .btn-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.day-weather[_ngcontent-%COMP%]   .more-btn[_ngcontent-%COMP%]{border-radius:16px;border:none;width:200px;height:32px;cursor:pointer;background:#5D2C60;opacity:.7;color:var(--font-color);font-size:20px}.day-weather[_ngcontent-%COMP%]   .more-btn[_ngcontent-%COMP%]:hover{opacity:1}"],changeDetection:0}),t})();function h(t,a){1&t&&e._UZ(0,"app-day-card",4),2&t&&e.Q6J("dayWeather",a.$implicit)}function y(t,a){if(1&t&&(e.ynx(0),e.TgZ(1,"h1",2),e._uU(2),e.qZA(),e.YNc(3,h,1,1,"app-day-card",3),e.BQk()),2&t){const n=a.ngIf;e.xp6(2),e.hij("Weather at ",n.city.name,""),e.xp6(1),e.Q6J("ngForOf",n.list)}}function m(t,a){1&t&&e._UZ(0,"div",5)(1,"div",6)(2,"div",6)(3,"div",6)}let u=(()=>{class t{constructor(n){this.weatherService=n,this.upcomingWeather$=this.weatherService.fetchUpcomingWeather()}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(c.F))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-next-days-page"]],decls:4,vars:4,consts:[[4,"ngIf","ngIfElse"],["loading",""],[1,"title"],[3,"dayWeather",4,"ngFor","ngForOf"],[3,"dayWeather"],[1,"skeleton-container","title-skeleton"],[1,"skeleton-container","one-day-skeleton"]],template:function(n,r){if(1&n&&(e.YNc(0,y,4,2,"ng-container",0),e.ALo(1,"async"),e.YNc(2,m,4,0,"ng-template",null,1,e.W1O)),2&n){const p=e.MAs(3);e.Q6J("ngIf",e.lcZ(1,2,r.upcomingWeather$))("ngIfElse",p)}},dependencies:[d.sg,d.O5,l,d.Ov],styles:["[_nghost-%COMP%]{display:grid;grid-gap:32px}.title[_ngcontent-%COMP%]{color:var(--font-color);font-size:50px;line-height:64px}.title-skeleton[_ngcontent-%COMP%]{height:64px;border-radius:32px}.one-day-skeleton[_ngcontent-%COMP%]{height:496px;border-radius:32px}"],changeDetection:0}),t})();var x=o(2764),C=o(6844);let _=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[d.ez,x.Bz.forChild([{path:"",component:u}]),C.Y]}),t})()}}]);