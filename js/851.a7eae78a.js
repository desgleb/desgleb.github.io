"use strict";(self["webpackChunkmoney_catcher"]=self["webpackChunkmoney_catcher"]||[]).push([[851],{5632:function(e,t,l){l.d(t,{Z:function(){return m}});var a=l(3396),n=l(4870),r=l(7139),o=l(9242),s=l(9545),i=l(1020);const c={class:"input-field"},u={key:0,selected:"",value:"12"},d=["value"],_=(0,a._)("label",null,"Фильтрация по месяцам",-1);var v=(0,a.aZ)({__name:"MonthSelectComponent",props:{showAll:{type:Boolean}},setup(e){const{transactionsMonthFilter:t}=(0,i.Jk)((0,s.C)()),l=(0,n.iH)(),v=(0,n.iH)(),w=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];return(0,a.bv)((()=>{v.value=M.FormSelect.init(l.value)})),(e,s)=>((0,a.wg)(),(0,a.iD)("div",c,[(0,a.wy)((0,a._)("select",{ref_key:"monthSelect",ref:l,"onUpdate:modelValue":s[0]||(s[0]=e=>(0,n.dq)(t)?t.value=e:null)},[e.$props.showAll?((0,a.wg)(),(0,a.iD)("option",u,"Показать всё")):(0,a.kq)("",!0),((0,a.wg)(),(0,a.iD)(a.HY,null,(0,a.Ko)(w,((e,t)=>(0,a._)("option",{key:t,value:t},(0,r.zw)(e),9,d))),64))],512),[[o.bM,(0,n.SU)(t),void 0,{number:!0}]]),_]))}});const w=v;var m=w},6838:function(e,t,l){l.d(t,{Z:function(){return w}});var a=l(3396),n=l(4870),r=l(7139),o=l(9242),s=l(9545),i=l(1020);const c={class:"input-field"},u=["value"],d=(0,a._)("label",null,"Фильтрация по годам",-1);var _=(0,a.aZ)({__name:"YearSelectComponent",setup(e){const{transactionsSortedByDate:t,transactionsYearFilter:l}=(0,i.Jk)((0,s.C)()),_=(0,n.iH)(),v=(0,n.iH)(),w=(0,a.Fl)((()=>{const e=new Set;if(e.add((new Date).getFullYear()),t.value){t.value.forEach((t=>{const l=new Date(t.date).getFullYear();e.add(l)}));const l=Array.from(e),a=Math.max.apply(null,l)+1;return e.add(a),e}return e}));return(0,a.bv)((()=>{v.value=M.FormSelect.init(_.value)})),(e,t)=>((0,a.wg)(),(0,a.iD)("div",c,[(0,a.wy)((0,a._)("select",{ref_key:"yearSelect",ref:_,"onUpdate:modelValue":t[0]||(t[0]=e=>(0,n.dq)(l)?l.value=e:null)},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(w.value,(e=>((0,a.wg)(),(0,a.iD)("option",{key:e,value:e},(0,r.zw)(e),9,u)))),128))],512),[[o.bM,(0,n.SU)(l),void 0,{number:!0}]]),d]))}});const v=_;var w=v},1851:function(e,t,l){l.r(t),l.d(t,{default:function(){return K}});var a=l(3396),n=l(4870),r=l(7139),o=l(3256),s=l(9545),i=l(3060),c=l(1020),u=l(5632),d=l(6838);const _=e=>((0,a.dD)("data-v-2c8a3bd2"),e=e(),(0,a.Cn)(),e),v=_((()=>(0,a._)("div",{class:"container"},[(0,a._)("h3",null,"Операции")],-1))),w=_((()=>(0,a._)("hr",null,null,-1))),m={key:0,class:"row"},p={class:"col"},y=_((()=>(0,a._)("p",null,"У вас нет ни одной категории.",-1))),g={key:1,class:"row"},h=_((()=>(0,a._)("div",{class:"col"},[(0,a._)("p",null,"У вас нет ни одной операции."),(0,a._)("p",null,"Создайте хотя бы одну операцию."),(0,a._)("p",null,'Для этого нажмите красную кнопку с "+" в нижнем правом углу экрана.')],-1))),k=[h],f={key:2,class:"row"},b={class:"col s12 m2 offset-m7"},D={class:"col s12 m3"},S={class:"highlight centered responsive-table"},C=_((()=>(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",null,"Дата"),(0,a._)("th",null,"Тип"),(0,a._)("th",null,"Статус"),(0,a._)("th",null,"Счёт"),(0,a._)("th",null,"Категория"),(0,a._)("th",null,"Сумма"),(0,a._)("th",null,"Комментарий"),(0,a._)("th",null,"Автор"),(0,a._)("th",null,"Действия")])],-1))),U={key:0,class:"material-icons red-text"},x={key:1,class:"material-icons blue-text"},F={class:"row mb-0 flex-center"},z={key:0,class:"col"},H=["id","data-target"],Y=_((()=>(0,a._)("i",{class:"material-icons"},"edit",-1))),Z=[Y],M={class:"col"},T=["id"],E=_((()=>(0,a._)("i",{class:"material-icons"},"delete",-1))),q=[E];var B=(0,a.aZ)({__name:"RecordsView",setup(e){const{currencyFilter:t,dateFilter:l}=(0,o.y)(),{selectedTransactionId:_,transactionsSortedByDate:h}=(0,c.Jk)((0,s.C)()),{isCategoryExist:Y,isTransactionExist:E}=(0,c.Jk)((0,i.e)()),B=e=>{let t;t="BUTTON"===e.target.tagName?e.target:e.target.parentElement,_.value=t.id};return(e,o)=>{const s=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)(a.HY,null,[v,w,(0,n.SU)(Y)?(0,n.SU)(E)?((0,a.wg)(),(0,a.iD)("div",f,[(0,a._)("div",b,[(0,a.Wm)(d.Z)]),(0,a._)("div",D,[(0,a.Wm)(u.Z,{"show-all":!0})]),(0,a._)("table",S,[C,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,n.SU)(h),(e=>((0,a.wg)(),(0,a.iD)("tr",{key:e.id,class:(0,r.C_)({"grey-text":e.isForecast})},[(0,a._)("td",null,(0,r.zw)((0,n.SU)(l)(e.date)),1),(0,a._)("td",{class:(0,r.C_)({"red-text":"outcome"===e.type,"green-text":"income"===e.type,"blue-text":"transfer"===e.type})},(0,r.zw)("outcome"===e.type?"Расход":"income"===e.type?"Доход":"Перевод"),3),(0,a._)("td",null,[e.isNotPlanned?((0,a.wg)(),(0,a.iD)("i",U,"error")):e.isForecast?((0,a.wg)(),(0,a.iD)("i",x,"help")):(0,a.kq)("",!0)]),(0,a._)("td",null,(0,r.zw)(e.account),1),(0,a._)("td",null,(0,r.zw)(e.category),1),(0,a._)("td",null,(0,r.zw)((0,n.SU)(t)(e.amount)),1),(0,a._)("td",null,(0,r.zw)(e.description),1),(0,a._)("td",null,(0,r.zw)(e.author),1),(0,a._)("td",null,[(0,a._)("div",F,[e.readonly?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",z,[(0,a._)("button",{id:e.id,"data-target":"transfer"===e.type?"modalEditTransfer":"modalEditTransaction",class:"yellow btn modal-trigger black-text",onClick:B},Z,8,H)])),(0,a._)("div",M,[(0,a._)("button",{id:e.id,class:"red modal-trigger btn","data-target":"modalDeleteTransaction",onClick:B},q,8,T)])])])],2)))),128))])])])):((0,a.wg)(),(0,a.iD)("div",g,k)):((0,a.wg)(),(0,a.iD)("div",m,[(0,a._)("div",p,[y,(0,a._)("p",null,[(0,a.Uk)("Создайте хотя бы одну "),(0,a.Wm)(s,{to:"/categories"},{default:(0,a.w5)((()=>[(0,a.Uk)("категорию")])),_:1})])])]))],64)}}}),J=l(89);const A=(0,J.Z)(B,[["__scopeId","data-v-2c8a3bd2"]]);var K=A}}]);
//# sourceMappingURL=851.a7eae78a.js.map