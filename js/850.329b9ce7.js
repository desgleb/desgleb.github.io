"use strict";(self["webpackChunkmoney_catcher"]=self["webpackChunkmoney_catcher"]||[]).push([[850],{5632:function(e,a,t){t.d(a,{Z:function(){return y}});var l=t(3396),n=t(4870),r=t(7139),i=t(9242),d=t(9545),o=t(1020);const c={class:"input-field"},s={key:0,selected:"",value:"12"},u=["value"],v=(0,l._)("label",null,"Фильтрация по месяцам",-1);var _=(0,l.aZ)({__name:"MonthSelectComponent",props:{showAll:{type:Boolean}},setup(e){const{transactionsMonthFilter:a}=(0,o.Jk)((0,d.C)()),t=(0,n.iH)(),_=(0,n.iH)(),m=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];return(0,l.bv)((()=>{_.value=M.FormSelect.init(t.value)})),(e,d)=>((0,l.wg)(),(0,l.iD)("div",c,[(0,l.wy)((0,l._)("select",{ref_key:"monthSelect",ref:t,"onUpdate:modelValue":d[0]||(d[0]=e=>(0,n.dq)(a)?a.value=e:null)},[e.$props.showAll?((0,l.wg)(),(0,l.iD)("option",s,"Показать всё")):(0,l.kq)("",!0),((0,l.wg)(),(0,l.iD)(l.HY,null,(0,l.Ko)(m,((e,a)=>(0,l._)("option",{key:a,value:a},(0,r.zw)(e),9,u))),64))],512),[[i.bM,(0,n.SU)(a),void 0,{number:!0}]]),v]))}});const m=_;var y=m},6838:function(e,a,t){t.d(a,{Z:function(){return m}});var l=t(3396),n=t(4870),r=t(7139),i=t(9242),d=t(9545),o=t(1020);const c={class:"input-field"},s=["value"],u=(0,l._)("label",null,"Фильтрация по годам",-1);var v=(0,l.aZ)({__name:"YearSelectComponent",setup(e){const{transactionsSortedByDate:a,transactionsYearFilter:t}=(0,o.Jk)((0,d.C)()),v=(0,n.iH)(),_=(0,n.iH)(),m=(0,l.Fl)((()=>{const e=new Set;if(e.add((new Date).getFullYear()),a.value){a.value.forEach((a=>{const t=new Date(a.date).getFullYear();e.add(t)}));const t=Array.from(e),l=Math.max.apply(null,t)+1;return e.add(l),e}return e}));return(0,l.bv)((()=>{_.value=M.FormSelect.init(v.value)})),(e,a)=>((0,l.wg)(),(0,l.iD)("div",c,[(0,l.wy)((0,l._)("select",{ref_key:"yearSelect",ref:v,"onUpdate:modelValue":a[0]||(a[0]=e=>(0,n.dq)(t)?t.value=e:null)},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(m.value,(e=>((0,l.wg)(),(0,l.iD)("option",{key:e,value:e},(0,r.zw)(e),9,s)))),128))],512),[[i.bM,(0,n.SU)(t),void 0,{number:!0}]]),u]))}});const _=v;var m=_},4850:function(e,a,t){t.r(a),t.d(a,{default:function(){return R}});var l=t(3396),n=(t(560),t(7139)),r=t(4870),i=t(3256),d=t(9545),o=t(1520),c=t(6135),s=t(8263),u=t(1020);const v=e=>((0,l.dD)("data-v-23ad760c"),e=e(),(0,l.Cn)(),e),_={class:"day-card__header"},m={class:"row valign-wrapper"},y={class:"col s12"},g={class:"center-align day-card__date"},w={class:"row valign-center blue lighten-3"},f={class:"col s12"},p={class:"center-align day-card__balance"},F={key:0,class:"valign-center"},h={class:"col s12 red white-text"},k=v((()=>(0,l._)("div",{class:"center-align day-card__overspending"},"Не учтено ",-1))),D={class:"center-align day-card__overspending"},b={class:"day-card__section day-card__section-income green lighten-4"},S={class:"center-align day-card__income-list-item"},N={class:"day-card__section day-card__section-outcome orange lighten-4"},C={class:"center-align day-card__income-list-item"},x={class:"center-align day-card__income-list"},U={class:"day-card__section day-card__section-outcome red lighten-3"},z={class:"center-align day-card__income-list-item"},Y={class:"center-align day-card__income-list"},Z={class:"day-card__footer"},H={class:"valign-center"},M={class:"col s12"};var T=(0,l.aZ)({__name:"CalendarDayCardComponent",props:{day:{}},setup(e){const a=e,{dateFilter:t,currencyFilter:v}=(0,i.y)(),{transactionsSortedByDate:T}=(0,u.Jk)((0,d.C)()),{categoriesAvailableForLimitation:I}=(0,u.Jk)((0,o.x)()),{limits:J}=(0,u.Jk)((0,c.L)()),{accounts:P}=(0,u.Jk)((0,s.o)()),K=new Date(a.day.year,a.day.month,a.day.day).getTime(),W=new Date(a.day.year,a.day.month,0).getDate(),q=new Date(a.day.year,a.day.month-1,W).getTime(),A=(0,l.Fl)((()=>P.value.map((e=>{const a=T.value.filter((a=>a.accountId===e.id)).filter((e=>"income"===e.type)).filter((e=>e.date<K)).reduce(((e,a)=>Number((e+a.amount).toFixed(2))),0),t=T.value.filter((a=>a.accountId===e.id)).filter((e=>"outcome"===e.type)).filter((e=>e.date<K)).reduce(((e,a)=>Number((e-a.amount).toFixed(2))),0),l=e.initialBalance+a+t;return{...e,resultSumTillToday:l}})).reduce(((e,a)=>Number((e+a.resultSumTillToday).toFixed(2))),0))),B=(0,l.Fl)((()=>Number(A.value+j.value-G.value-$.value))),V=(0,l.Fl)((()=>I.value.map((e=>{const a=T.value.filter((e=>e.date>q)).filter((e=>e.date<=K)).filter((e=>!e.isNotPlanned)).filter((a=>a.categoryId===e.id)).reduce(((e,a)=>Number((e+a.amount).toFixed(2))),0),t=J.value.find((a=>a.categoryId===e.id))?.limit,l=a-t>0?Number((a-t).toFixed(2)):0;return{...e,overspend:l}})).filter((e=>e.overspend>0)).reduce(((e,a)=>Number((e+a.overspend).toFixed(2))),0))),L=(0,l.Fl)((()=>T.value.filter((e=>"transfer"!==e.type)).filter((e=>e.date===K)))),j=(0,l.Fl)((()=>L.value.filter((e=>"income"===e.type)).reduce(((e,a)=>Number((e+a.amount).toFixed(2))),0))),E=(0,l.Fl)((()=>L.value.filter((e=>"outcome"===e.type)).filter((e=>!e.isNotPlanned)))),G=(0,l.Fl)((()=>E.value.reduce(((e,a)=>Number((e+a.amount).toFixed(2))),0))),$=(0,l.Fl)((()=>L.value.filter((e=>"outcome"===e.type)).filter((e=>e.isNotPlanned)).reduce(((e,a)=>Number((e+a.amount).toFixed(2))),0))),O=(0,l.Fl)((()=>T.value.filter((e=>e.isNotPlanned)).filter((e=>e.date>q)).filter((e=>e.date<=K)).reduce(((e,a)=>Number((e+a.amount).toFixed(2))),0))),Q=(0,l.Fl)((()=>I.value.map((e=>{const a=L.value.filter((e=>!e.isNotPlanned)).filter((a=>a.categoryId===e.id)).reduce(((e,a)=>Number((e+a.amount).toFixed(2))),0);return{...e,total:a}})).filter((e=>0!==e.total)))),R=(0,l.Fl)((()=>I.value.map((e=>{const a=L.value.filter((e=>e.isNotPlanned)).filter((a=>a.categoryId===e.id)).reduce(((e,a)=>Number((e+a.amount).toFixed(2))),0);return{...e,total:a}})).filter((e=>0!==e.total))));return(e,a)=>((0,l.wg)(),(0,l.iD)("article",{class:(0,n.C_)([{"border-red":B.value<0},"card-panel grey lighten-2 calendar-list__card day-card"])},[(0,l._)("header",_,[(0,l._)("div",m,[(0,l._)("div",y,[(0,l._)("div",g,(0,n.zw)((0,r.SU)(t)((0,r.SU)(K))),1)])]),(0,l._)("div",w,[(0,l._)("div",f,[(0,l._)("div",p,[(0,l._)("strong",null,"Утром "+(0,n.zw)((0,r.SU)(v)(A.value)),1)])])]),O.value+V.value>0?((0,l.wg)(),(0,l.iD)("div",F,[(0,l._)("div",h,[k,(0,l._)("div",D,(0,n.zw)((0,r.SU)(v)(O.value+V.value)),1)])])):(0,l.kq)("",!0)]),(0,l._)("section",b,[(0,l._)("div",S,[(0,l._)("strong",null,"Доход "+(0,n.zw)((0,r.SU)(v)(j.value)),1)])]),(0,l._)("section",N,[(0,l._)("div",C,[(0,l._)("strong",null,"Расход "+(0,n.zw)((0,r.SU)(v)(G.value)),1)]),(0,l._)("ul",x,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(Q.value,(e=>((0,l.wg)(),(0,l.iD)("li",{key:e.id,class:"day-card__income-list-item"},(0,n.zw)(e.name)+" - "+(0,n.zw)((0,r.SU)(v)(e["total"])),1)))),128))])]),(0,l._)("section",U,[(0,l._)("div",z,[(0,l._)("strong",null,"Вне плана "+(0,n.zw)((0,r.SU)(v)($.value)),1)]),(0,l._)("ul",Y,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(R.value,(e=>((0,l.wg)(),(0,l.iD)("li",{key:e.id,class:"day-card__income-list-item"},(0,n.zw)(e.name)+" - "+(0,n.zw)((0,r.SU)(v)(e["total"])),1)))),128))])]),(0,l._)("footer",Z,[(0,l._)("div",H,[(0,l._)("div",M,[(0,l._)("div",{class:(0,n.C_)([{"red lighten-4":B.value<0,green:B.value>=0},"center-align day-card__balance"])},[(0,l._)("strong",null,"Вечером "+(0,n.zw)((0,r.SU)(v)(B.value)),1)],2)])])])],2))}}),I=t(89);const J=(0,I.Z)(T,[["__scopeId","data-v-23ad760c"]]);var P=J;const K={class:"calendar-list"};var W=(0,l.aZ)({__name:"CalendarGridComponent",setup(e){const{transactionsMonthFilter:a,transactionsYearFilter:t}=(0,u.Jk)((0,d.C)()),r=["Su","Mo","Tu","We","Th","Fr","Sa"],i=(0,l.Fl)((()=>new Date(t.value,a.value+1,0).getDate())),o=(0,l.Fl)((()=>{const e=[];let l=1;for(let n=1;n<=i.value;n++){const i={id:0,week:0,day:0,month:0,weekday:0,weekdayName:"",year:0};i.day=n,i.month=a.value,i.year=t.value,i.weekday=new Date(t.value,a.value,n).getDay(),i.weekdayName=r[i.weekday],i.week=l,i.id=new Date(i.year,i.month,i.day).getTime(),e.push(i),0===i.weekday&&l++}return e}));return(e,a)=>((0,l.wg)(),(0,l.iD)("ul",K,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(o.value,(e=>((0,l.wg)(),(0,l.iD)("li",{key:e.id,style:(0,n.j5)({"grid-area":e.weekdayName,"grid-row":e.week}),class:"calendar-list__item"},[(0,l.Wm)(P,{day:e},null,8,["day"])],4)))),128))]))}});const q=(0,I.Z)(W,[["__scopeId","data-v-717b28f5"]]);var A=q,B=t(5632),V=t(6838);const L=(0,l._)("div",{class:"container"},[(0,l._)("h3",null,"Календарь")],-1),j=(0,l._)("hr",null,null,-1),E={class:"row"},G={class:"col s12 m2 offset-m7"},$={class:"col s12 m3"};var O=(0,l.aZ)({__name:"CalendarView",setup(e){return(e,a)=>((0,l.wg)(),(0,l.iD)(l.HY,null,[L,j,(0,l._)("div",E,[(0,l._)("div",G,[(0,l.Wm)(V.Z)]),(0,l._)("div",$,[(0,l.Wm)(B.Z,{"show-all":!1})])]),(0,l.Wm)(A)],64))}});const Q=O;var R=Q}}]);
//# sourceMappingURL=850.329b9ce7.js.map