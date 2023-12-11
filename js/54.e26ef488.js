"use strict";(self["webpackChunkmoney_catcher"]=self["webpackChunkmoney_catcher"]||[]).push([[54],{5632:function(e,l,t){t.d(l,{Z:function(){return g}});var a=t(3396),n=t(4870),r=t(7139),i=t(9242),s=t(9545),o=t(1020);const c={class:"input-field"},d={key:0,selected:"",value:"12"},u=["value"],v=(0,a._)("label",null,"Фильтрация по месяцам",-1);var m=(0,a.aZ)({__name:"MonthSelectComponent",props:{showAll:{type:Boolean}},setup(e){const{transactionsMonthFilter:l}=(0,o.Jk)((0,s.C)()),t=(0,n.iH)(),m=(0,n.iH)(),_=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];return(0,a.bv)((()=>{m.value=M.FormSelect.init(t.value)})),(e,s)=>((0,a.wg)(),(0,a.iD)("div",c,[(0,a.wy)((0,a._)("select",{ref_key:"monthSelect",ref:t,"onUpdate:modelValue":s[0]||(s[0]=e=>(0,n.dq)(l)?l.value=e:null)},[e.$props.showAll?((0,a.wg)(),(0,a.iD)("option",d,"Показать всё")):(0,a.kq)("",!0),((0,a.wg)(),(0,a.iD)(a.HY,null,(0,a.Ko)(_,((e,l)=>(0,a._)("option",{key:l,value:l},(0,r.zw)(e),9,u))),64))],512),[[i.bM,(0,n.SU)(l),void 0,{number:!0}]]),v]))}});const _=m;var g=_},6838:function(e,l,t){t.d(l,{Z:function(){return _}});var a=t(3396),n=t(4870),r=t(7139),i=t(9242),s=t(9545),o=t(1020);const c={class:"input-field"},d=["value"],u=(0,a._)("label",null,"Фильтрация по годам",-1);var v=(0,a.aZ)({__name:"YearSelectComponent",setup(e){const{transactionsSortedByDate:l,transactionsYearFilter:t}=(0,o.Jk)((0,s.C)()),v=(0,n.iH)(),m=(0,n.iH)(),_=(0,a.Fl)((()=>{const e=new Set;if(e.add((new Date).getFullYear()),l.value){l.value.forEach((l=>{const t=new Date(l.date).getFullYear();e.add(t)}));const t=Array.from(e),a=Math.max.apply(null,t)+1;return e.add(a),e}return e}));return(0,a.bv)((()=>{m.value=M.FormSelect.init(v.value)})),(e,l)=>((0,a.wg)(),(0,a.iD)("div",c,[(0,a.wy)((0,a._)("select",{ref_key:"yearSelect",ref:v,"onUpdate:modelValue":l[0]||(l[0]=e=>(0,n.dq)(t)?t.value=e:null)},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(_.value,(e=>((0,a.wg)(),(0,a.iD)("option",{key:e,value:e},(0,r.zw)(e),9,d)))),128))],512),[[i.bM,(0,n.SU)(t),void 0,{number:!0}]]),u]))}});const m=v;var _=m},2054:function(e,l,t){t.r(l),t.d(l,{default:function(){return $}});var a=t(3396),n=t(4870),r=t(7139),i=t(5632),s=t(6838),o=t(1020),c=t(1520),d=t(9545),u=t(6135),v=t(3256);const m=e=>((0,a.dD)("data-v-0b078616"),e=e(),(0,a.Cn)(),e),_=m((()=>(0,a._)("h3",null,"Планирование",-1))),g=m((()=>(0,a._)("hr",null,null,-1))),w={key:0,class:"row"},p={class:"col"},k=m((()=>(0,a._)("p",null,"У Вас нет ни одной расходной категории.",-1))),h={key:1,class:"row"},b={key:0,class:"red-text"},y={key:2},f={class:"row valign-wrapper"},F={class:"col s12 m4"},D=["disabled"],S=m((()=>(0,a._)("i",{class:"material-icons right"},"calculate",-1))),U={class:"col s12 m2 offset-m3"},C={class:"col s12 m3"},x={class:"row scrollable"},z={key:0},T={key:0,class:"red-text"},H={class:"progress"},Y={class:"highlight centered responsive-table"},M=m((()=>(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",null,"Дата"),(0,a._)("th",null,"Счёт"),(0,a._)("th",null,"Сумма"),(0,a._)("th",{class:"fixed-width"},"Комментарий"),(0,a._)("th",{class:"fixed-width"},"Действия")])],-1))),N={class:"row mb-0 flex-center"},Z={class:"col"},q=["id"],I=m((()=>(0,a._)("i",{class:"material-icons"},"done_all",-1))),J=[I],A={class:"col"},E=["id","data-target"],K=m((()=>(0,a._)("i",{class:"material-icons"},"edit",-1))),B=[K],L={class:"col"},P=["id"],V=m((()=>(0,a._)("i",{class:"material-icons"},"delete",-1))),W=[V];var j=(0,a.aZ)({__name:"PlanningView",setup(e){const{categoriesAvailableForLimitation:l}=(0,o.Jk)((0,c.x)()),{selectedTransactionId:t,outcomeTransactions:m,transactionsMonthFilter:I}=(0,o.Jk)((0,d.C)()),{changeTransactionToRegular:K}=(0,d.C)(),{limits:V}=(0,o.Jk)((0,u.L)()),{currencyFilter:j,dateFilter:O}=(0,v.y)(),R=(0,a.Fl)((()=>l.value.map((e=>{const l=m.value.filter((l=>l.categoryId===e.id)).filter((e=>e.isForecast))||[],t=m.value.filter((l=>l.categoryId===e.id)).filter((e=>!e.isForecast)).reduce(((e,l)=>Number((e+=+l.amount).toFixed(2))),0),a=V.value.find((l=>l.categoryId===e.id));let n;n=a?a.limit:0;const r=t-n>0?Number((t-n).toFixed(2)):0,i=n>0?100*t/n:n,s=i>100?100:i,o=i<80?"green":i<100?"yellow":"red";return{...e,records:l,spend:t,limit:n,overspend:r,progressPercent:s,progressColor:o}})).sort(((e,l)=>e.name>l.name?1:e.name<l.name?-1:0)))),$=(0,a.Fl)((()=>{if(12===I.value){let e=R.value.reduce(((e,l)=>Number((e+l.limit).toFixed(2))),0);return e*=I.value,e}return R.value.reduce(((e,l)=>Number((e+l.limit).toFixed(2))),0)})),G=(0,a.Fl)((()=>R.value.reduce(((e,l)=>Number((e+l.spend).toFixed(2))),0))),Q=(0,a.Fl)((()=>R.value.reduce(((e,l)=>Number((e+l.overspend).toFixed(2))),0))),X=e=>{let l;l="BUTTON"===e.target.tagName?e.target:e.target.parentElement,t.value=l.id};let ee=0;const le=async e=>{const l=e;try{if(ee++,X(l),!t.value)return;await K()}catch(a){console.log(a),ee<5&&setTimeout((()=>le(l)),100)}};return(e,t)=>{const o=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)(a.HY,null,[_,g,0===(0,n.SU)(l).length?((0,a.wg)(),(0,a.iD)("div",w,[(0,a._)("div",p,[k,(0,a._)("p",null,[(0,a.Uk)("Добавьте хотя бы одну расходную "),(0,a.Wm)(o,{to:"/categories"},{default:(0,a.w5)((()=>[(0,a.Uk)("категорию")])),_:1})])])])):((0,a.wg)(),(0,a.iD)("div",h,[(0,a._)("h5",null,[(0,a.Uk)(" Запланировано: "+(0,r.zw)((0,n.SU)(j)($.value))+". Израсходовано: "+(0,r.zw)((0,n.SU)(j)(G.value))+". ",1),Q.value>0?((0,a.wg)(),(0,a.iD)("small",b," Перерасход: "+(0,r.zw)((0,n.SU)(j)(Q.value)),1)):(0,a.kq)("",!0)])])),R.value.length>0?((0,a.wg)(),(0,a.iD)("section",y,[(0,a._)("div",f,[(0,a._)("div",F,[(0,a._)("button",{disabled:0===(0,n.SU)(l).length,class:"btn modal-trigger","data-target":"modalSetLimit"},[S,(0,a.Uk)(" Установить лимит ")],8,D)]),(0,a._)("div",U,[(0,a.Wm)(s.Z)]),(0,a._)("div",C,[(0,a.Wm)(i.Z,{"show-all":!0})])]),(0,a._)("div",x,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(R.value,(e=>((0,a.wg)(),(0,a.iD)("div",{key:e.id,class:"row"},[e&&(e.limit>0||e.records.length>0||e.spend>0)?((0,a.wg)(),(0,a.iD)("div",z,[(0,a._)("p",null,[(0,a._)("strong",null,(0,r.zw)(e.name),1),(0,a.Uk)(" "+(0,r.zw)((0,n.SU)(j)(e["spend"]))+" из "+(0,r.zw)((0,n.SU)(j)(e["limit"]))+" ",1),e.overspend>0?((0,a.wg)(),(0,a.iD)("small",T,"Перерасход на "+(0,r.zw)((0,n.SU)(j)(e.overspend)),1)):(0,a.kq)("",!0)]),(0,a._)("div",H,[(0,a._)("div",{class:(0,r.C_)([[e.progressColor],"determinate"]),style:(0,r.j5)({width:e.progressPercent+"%"})},null,6)]),(0,a._)("table",Y,[M,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.records,(e=>((0,a.wg)(),(0,a.iD)("tr",{key:e.id},[(0,a._)("td",null,(0,r.zw)((0,n.SU)(O)(e["date"])),1),(0,a._)("td",null,(0,r.zw)(e["account"]),1),(0,a._)("td",null,(0,r.zw)((0,n.SU)(j)(e["amount"])),1),(0,a._)("td",null,(0,r.zw)(e["description"]),1),(0,a._)("td",null,[(0,a._)("div",N,[(0,a._)("div",Z,[(0,a._)("button",{id:e.id,class:"green btn",onClick:le},J,8,q)]),(0,a._)("div",A,[(0,a._)("button",{id:e.id,"data-target":"transfer"===e.type?"modalEditTransfer":"modalEditTransaction",class:"yellow btn modal-trigger black-text",onClick:X},B,8,E)]),(0,a._)("div",L,[(0,a._)("button",{id:e.id,class:"red btn modal-trigger","data-target":"modalDeleteTransaction",onClick:X},W,8,P)])])])])))),128))])])])):(0,a.kq)("",!0)])))),128))])])):(0,a.kq)("",!0)],64)}}}),O=t(89);const R=(0,O.Z)(j,[["__scopeId","data-v-0b078616"]]);var $=R}}]);
//# sourceMappingURL=54.e26ef488.js.map