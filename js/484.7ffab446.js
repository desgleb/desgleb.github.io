"use strict";(self["webpackChunkmoney_catcher"]=self["webpackChunkmoney_catcher"]||[]).push([[484],{5509:function(e,t,l){l.d(t,{$:function(){return a}});const a=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"]},2122:function(e,t,l){l.d(t,{A:function(){return y}});l(4114);var a=l(6768),n=l(144),r=l(4232),o=l(5130),u=l(6995),c=l(3367),s=l(2132);const i={class:"input-field"},d=["value"],v=(0,a.Lk)("label",null,"Фильтрация по годам",-1);var m=(0,a.pM)({__name:"YearSelectComponent",setup(e){const{transactions:t,transactionsYearFilter:l}=(0,c.bP)((0,u.G)()),{isGlobalLoading:m}=(0,c.bP)((0,s.X)());m.value=!0;const p=(0,n.KR)(),y=(0,n.KR)(),f=(0,a.EW)((()=>{const e=[],l=new Set;l.add((new Date).getFullYear()),t.value.forEach((e=>{const t=new Date(e.date).getFullYear();l.add(t)}));const a=Math.max.apply(null,Array.from(l))+1;l.add(a);const n=Array.from(l).sort(((e,t)=>e-t));return n.forEach((t=>{const l={year:t,id:Math.floor(1e6*Math.random())};e.push(l)})),m.value=!1,e}));return(0,a.sV)((()=>{y.value=M.FormSelect.init(p.value)})),(0,a.$u)((()=>{y.value=M.FormSelect.init(p.value)})),(e,t)=>((0,a.uX)(),(0,a.CE)("div",i,[(0,a.bo)((0,a.Lk)("select",{ref_key:"yearSelect",ref:p,"onUpdate:modelValue":t[0]||(t[0]=e=>(0,n.i9)(l)?l.value=e:null)},[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(f.value,(e=>((0,a.uX)(),(0,a.CE)("option",{key:e.id,value:e.year},(0,r.v_)(e.year),9,d)))),128))],512),[[o.u1,(0,n.R1)(l),void 0,{number:!0}]]),v]))}});const p=m;var y=p},7484:function(e,t,l){l.r(t),l.d(t,{default:function(){return D}});var a=l(6768),n=l(4232),r=l(144),o=l(2122),u=l(3367),c=l(6995),s=l(6459),i=l(8078);const d={class:"collection"};var v=(0,a.pM)({__name:"OverspendRowCollectionItemComponent",props:{month:{},year:{},records:{},category:{}},setup(e){const t=e,{currencyFilter:l}=(0,s.c)(),o=(0,a.EW)((()=>t.records.filter((e=>e.categoryId===t.category))));return(e,t)=>((0,a.uX)(),(0,a.CE)("ul",d,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(o.value,((e,t)=>((0,a.uX)(),(0,a.CE)("li",{key:e.id,class:"collection-item"},[(0,a.eW)((0,n.v_)(t+1)+". ",1),(0,a.Lk)("strong",null,(0,n.v_)((0,r.R1)(l)(e.amount)),1),(0,a.eW)(" "+(0,n.v_)(e.description),1)])))),128))]))}});const m=v;var p=m;const y={class:"collection"};var f=(0,a.pM)({__name:"OverspendRowCollectionComponent",props:{month:{},year:{}},setup(e){const t=e,{transactions:l}=(0,u.bP)((0,c.G)()),{categoriesAvailableForLimitation:o}=(0,u.bP)((0,i.d)()),{currencyFilter:d}=(0,s.c)(),v=(0,a.EW)((()=>l.value.filter((e=>new Date(e.date).getFullYear()===t.year)).filter((e=>new Date(e.date).getMonth()===t.month)).filter((e=>e.isNotPlanned)).sort(((e,t)=>e.date-t.date)).sort(((e,t)=>e.category>t.category?1:e.category<t.category?-1:0)))),m=(0,a.EW)((()=>o.value.map((e=>{const t=v.value.filter((t=>t.categoryId===e.id)).reduce(((e,t)=>Number((e+t.amount).toFixed(2))),0);return{...e,total:t}})).filter((e=>e.total>0))));return(e,l)=>((0,a.uX)(),(0,a.CE)("ul",y,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(m.value,(e=>((0,a.uX)(),(0,a.CE)("li",{key:e.id,class:"collection-item"},[(0,a.eW)(" В категории "),(0,a.Lk)("strong",null,'"'+(0,n.v_)(e.name)+'"',1),(0,a.eW)(" всего "),(0,a.Lk)("strong",null,(0,n.v_)((0,r.R1)(d)(e.total)),1),(0,a.eW)(" незапланированных трат. "),(0,a.bF)(p,{month:t.month,year:t.year,records:v.value,category:e.id},null,8,["month","year","records","category"])])))),128))]))}});const h=f;var k=h,F=l(5509);const b=(0,a.Lk)("h3",null,"Сводка",-1),g=(0,a.Lk)("hr",null,null,-1),C={class:"row"},_={class:"col s12 m9"},E={class:"col s12 m2 offset-m1"},L={class:"row"},w={class:"col s12"},R={class:"collapsible-header"},X=(0,a.Lk)("i",{class:"material-icons"},"view_headline",-1),W={class:"collapsible-body"};var K=(0,a.pM)({__name:"HomeView",setup(e){const t=(0,r.KR)(),l=(0,r.KR)(),{transactionsYearFilter:i,transactionsMonthFilter:d,transactions:v}=(0,u.bP)((0,c.G)()),{currencyFilter:m}=(0,s.c)(),p=(0,a.EW)((()=>v.value.filter((e=>e.isNotPlanned)))),y=(0,a.EW)((()=>p.value.filter((e=>new Date(e.date).getFullYear()===i.value)).reduce(((e,t)=>Number((e+t.amount).toFixed(2))),0)));function f(e){return p.value.filter((e=>new Date(e.date).getFullYear()===i.value)).filter((t=>new Date(t.date).getMonth()===e)).reduce(((e,t)=>Number((e+t.amount).toFixed(2))),0)}return(0,a.sV)((()=>{l.value=M.Collapsible.init(t.value)})),(0,a.hi)((()=>{l.value.$el.length>0&&l.value.destroy()})),(e,l)=>((0,a.uX)(),(0,a.CE)(a.FK,null,[b,g,(0,a.Lk)("section",null,[(0,a.Lk)("div",C,[(0,a.Lk)("div",_,[(0,a.Lk)("h5",null,"Незапланированные траты за год: "+(0,n.v_)((0,r.R1)(m)(y.value)),1)]),(0,a.Lk)("div",E,[(0,a.bF)(o.A)])]),(0,a.Lk)("div",L,[(0,a.Lk)("div",w,[(0,a.Lk)("ul",{ref_key:"monthCollapsible",ref:t,class:"collapsible popout"},[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)((0,r.R1)(F.$),((e,t)=>((0,a.uX)(),(0,a.CE)("li",{key:t,class:(0,n.C4)({active:(0,r.R1)(d)===t})},[(0,a.Lk)("div",R,[X,(0,a.eW)((0,n.v_)(e)+" = "+(0,n.v_)((0,r.R1)(m)(f(t))),1)]),(0,a.Lk)("div",W,[(0,a.bF)(k,{month:t,year:(0,r.R1)(i)},null,8,["month","year"])])],2)))),128))],512)])])])],64))}});const Y=K;var D=Y}}]);