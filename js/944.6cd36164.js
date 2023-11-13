"use strict";(self["webpackChunkmoney_catcher"]=self["webpackChunkmoney_catcher"]||[]).push([[944],{1944:function(e,a,t){t.r(a),t.d(a,{default:function(){return Ve}});var l=t(3396),i=t(4870),o=t(7139),c=t(9242),r=t(5797),s=t.n(r),n=t(4219),u=t(5420),d=t(1520);const y={class:"mc-card-category card-panel orange lighten-4 col s12"},g={class:"mc-form-category"},m={class:"row"},p={class:"input-field col s12"},v=(0,l._)("i",{class:"material-icons prefix"},"mode_edit",-1),_=(0,l._)("label",{for:"categoryName"},"Название категории",-1),w={key:0,class:"helper-text red-text"},h={key:1,class:"helper-text red-text"},b={class:"row"},k={class:"input-field col s12"},x=(0,l._)("i",{class:"material-icons prefix"},"mode_edit",-1),D=(0,l._)("label",{for:"categoryDescription"},"Описание категории",-1),f={class:"row"},N={class:"col s3"},U={class:"black-text"},C=(0,l._)("span",null,"Расход",-1),$={class:"col s3"},S={class:"black-text"},q=(0,l._)("span",null,"Доход",-1),T={class:"row"},M={class:"col center-align"},z=["disabled","onClick"],V=(0,l._)("i",{class:"material-icons right"},"add_circle_outline",-1);var H=(0,l.aZ)({__name:"AddCategoryComponent",setup(e){const a=(0,i.iH)(!1),t=(0,i.iH)("outcome"),{pushNewCategory:r}=(0,d.x)(),H=(0,i.iH)(3),F=(0,i.qj)({categoryName:"",categoryDescription:""}),L={categoryName:{required:u.BM.withMessage("Поле НАЗВАНИЕ КАТЕГОРИИ является обязательным.",u.C1),minLength:u.BM.withMessage((({$params:e})=>`Длина названия категории должна быть не менее, чем ${e.min} символа.`),(0,u.Ei)(H))}},B=(0,n.Xw)(L,F),E=(0,l.Fl)((()=>B.value.categoryName.$dirty&&B.value.categoryName.required.$invalid)),G=(0,l.Fl)((()=>B.value.categoryName.$dirty&&B.value.categoryName.minLength.$invalid)),J=async()=>{if(B.value.$invalid)return void B.value.$touch();a.value=!0;const e={categoryName:F.categoryName,categoryType:t.value,categoryDescription:F.categoryDescription};try{await r(e)}catch(l){}finally{F.categoryName="",F.categoryDescription="",a.value=!1}};return(0,l.bv)((()=>{s().updateTextFields()})),(e,r)=>((0,l.wg)(),(0,l.iD)("div",y,[(0,l._)("form",g,[(0,l._)("div",m,[(0,l._)("div",p,[v,(0,l.wy)((0,l._)("input",{id:"categoryName","onUpdate:modelValue":r[0]||(r[0]=e=>F.categoryName=e),class:(0,o.C_)({invalid:E.value||G.value}),type:"text"},null,2),[[c.nr,F.categoryName,void 0,{trim:!0}]]),_,E.value?((0,l.wg)(),(0,l.iD)("small",w,(0,o.zw)((0,i.SU)(B).categoryName.required.$message),1)):G.value?((0,l.wg)(),(0,l.iD)("small",h,(0,o.zw)((0,i.SU)(B).categoryName.minLength.$message),1)):(0,l.kq)("",!0)])]),(0,l._)("div",b,[(0,l._)("div",k,[x,(0,l.wy)((0,l._)("textarea",{id:"categoryDescription","onUpdate:modelValue":r[1]||(r[1]=e=>F.categoryDescription=e),class:"materialize-textarea",type:"text"},null,512),[[c.nr,F.categoryDescription,void 0,{trim:!0}]]),D])]),(0,l._)("div",f,[(0,l._)("div",N,[(0,l._)("p",null,[(0,l._)("label",U,[(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":r[2]||(r[2]=e=>t.value=e),class:"with-gap",name:"category",type:"radio",value:"outcome"},null,512),[[c.G2,t.value]]),C])])]),(0,l._)("div",$,[(0,l._)("p",null,[(0,l._)("label",S,[(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":r[3]||(r[3]=e=>t.value=e),class:"with-gap",name:"category",type:"radio",value:"income"},null,512),[[c.G2,t.value]]),q])])])]),(0,l._)("div",T,[(0,l._)("div",M,[(0,l._)("button",{disabled:a.value,class:"mc-button-submit btn light-green darken-4",name:"action",type:"submit",onClick:(0,c.iM)(J,["prevent"])},[(0,l.Uk)(" Добавить категорию "),V],8,z)])])])]))}});const F=H;var L=F,B=t(1020);const E={class:"mc-card-category card-panel orange lighten-4 col s12"},G=["onSubmit"],J={class:"row"},W={class:"input-field col s12"},Z=["value"],A=(0,l._)("label",null,"Выберите категорию",-1),Y={class:"row"},j={class:"input-field col s12"},I=(0,l._)("i",{class:"material-icons prefix"},"mode_edit",-1),K=(0,l._)("label",{for:"categoryName"},"Название категории",-1),X={key:0,class:"helper-text red-text"},O={key:1,class:"helper-text red-text"},P={class:"row"},Q={class:"input-field col s12"},R=(0,l._)("i",{class:"material-icons prefix"},"mode_edit",-1),ee=(0,l._)("label",{for:"categoryDescription"},"Описание категории",-1),ae={class:"row"},te={class:"col s3"},le={class:"black-text"},ie=(0,l._)("span",null,"Расход",-1),oe={class:"col s3"},ce={class:"black-text"},re=(0,l._)("span",null,"Доход",-1),se=(0,l._)("div",{class:"row"},[(0,l._)("div",{class:"col center-align"},[(0,l._)("button",{class:"mc-button-submit btn light-green darken-4",name:"action",type:"submit"},[(0,l.Uk)("Изменить категорию "),(0,l._)("i",{class:"material-icons right"},"refresh")])])],-1),ne={key:0,class:"row"},ue={class:"col"},de={class:"input-field col s12"},ye=(0,l._)("label",{for:"categoryDelete"},"Чтобы удалить категорию, введите слово УДАЛИТЬ",-1),ge=["disabled"],me=(0,l._)("i",{class:"material-icons right"},"delete",-1);var pe=(0,l.aZ)({__name:"ChangeCategoryComponent",setup(e){const a=(0,i.iH)(""),t=(0,i.iH)(),r=(0,i.iH)(),{categories:y,selectedCategoryId:g,selectedCategory:m}=(0,B.Jk)((0,d.x)()),{changeCategory:p,deleteCategory:v}=(0,d.x)(),_=(0,i.iH)(3),w=(0,i.qj)({categoryName:"",categoryDescription:"",categoryType:""}),h={categoryName:{required:u.BM.withMessage("Поле НАЗВАНИЕ КАТЕГОРИИ является обязательным.",u.C1),minLength:u.BM.withMessage((({$params:e})=>`Длина названия категории должна быть не менее, чем ${e.min} символа.`),(0,u.Ei)(_))}},b=(0,n.Xw)(h,w),k=(0,l.Fl)((()=>b.value.categoryName.$dirty&&b.value.categoryName.required.$invalid)),x=(0,l.Fl)((()=>b.value.categoryName.$dirty&&b.value.categoryName.minLength.$invalid)),D=()=>{w.categoryName=m.value?.name,w.categoryDescription=m.value?.description,w.categoryType=m.value?.type},f=async()=>{if(b.value.$invalid)return void b.value.$touch();const e={categoryName:w.categoryName,categoryType:w.categoryType,categoryDescription:w.categoryDescription,categoryId:g.value,categoryAuthor:""};try{await p(e)}catch(a){}finally{w.categoryName="",w.categoryDescription="",w.categoryType=""}};return(0,l.ic)((()=>{r.value=s().FormSelect.init(t.value),s().updateTextFields()})),(0,l.bv)((()=>{r.value=s().FormSelect.init(t.value),s().updateTextFields()})),(0,l.Jd)((()=>{r.value&&r.value.destroy&&r.value.destroy()})),(e,r)=>((0,l.wg)(),(0,l.iD)("div",E,[(0,l._)("form",{class:"mc-form-category",onSubmit:(0,c.iM)(f,["prevent"])},[(0,l._)("div",J,[(0,l._)("div",W,[(0,l.wy)((0,l._)("select",{ref_key:"categorySelect",ref:t,"onUpdate:modelValue":r[0]||(r[0]=e=>(0,i.dq)(g)?g.value=e:null),onChange:D},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)((0,i.SU)(y),(e=>((0,l.wg)(),(0,l.iD)("option",{key:e.id,value:e.id},(0,o.zw)(e["name"]),9,Z)))),128))],544),[[c.bM,(0,i.SU)(g)]]),A])]),(0,l._)("div",Y,[(0,l._)("div",j,[I,(0,l.wy)((0,l._)("input",{id:"categoryName","onUpdate:modelValue":r[1]||(r[1]=e=>w.categoryName=e),class:(0,o.C_)({invalid:k.value||x.value}),type:"text"},null,2),[[c.nr,w.categoryName,void 0,{trim:!0}]]),K,k.value?((0,l.wg)(),(0,l.iD)("small",X,(0,o.zw)((0,i.SU)(b).categoryName.required.$message),1)):x.value?((0,l.wg)(),(0,l.iD)("small",O,(0,o.zw)((0,i.SU)(b).categoryName.minLength.$message),1)):(0,l.kq)("",!0)])]),(0,l._)("div",P,[(0,l._)("div",Q,[R,(0,l.wy)((0,l._)("textarea",{id:"categoryDescription","onUpdate:modelValue":r[2]||(r[2]=e=>w.categoryDescription=e),class:"materialize-textarea",type:"text"},null,512),[[c.nr,w.categoryDescription,void 0,{trim:!0}]]),ee])]),(0,l._)("div",ae,[(0,l._)("div",te,[(0,l._)("p",null,[(0,l._)("label",le,[(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":r[3]||(r[3]=e=>w.categoryType=e),class:"with-gap",name:"category",type:"radio",value:"outcome"},null,512),[[c.G2,w.categoryType]]),ie])])]),(0,l._)("div",oe,[(0,l._)("p",null,[(0,l._)("label",ce,[(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":r[4]||(r[4]=e=>w.categoryType=e),class:"with-gap",name:"category",type:"radio",value:"income"},null,512),[[c.G2,w.categoryType]]),re])])])]),se,(0,i.SU)(g)?((0,l.wg)(),(0,l.iD)("div",ne,[(0,l._)("div",ue,[(0,l._)("div",de,[(0,l.wy)((0,l._)("input",{id:"categoryDelete","onUpdate:modelValue":r[5]||(r[5]=e=>a.value=e),type:"text"},null,512),[[c.nr,a.value,void 0,{trim:!0}]]),ye]),(0,l._)("button",{disabled:!("УДАЛИТЬ"===a.value),class:"mc-button-submit btn red darken-4",name:"action",type:"button",onClick:r[6]||(r[6]=(0,c.iM)(((...e)=>(0,i.SU)(v)&&(0,i.SU)(v)(...e)),["prevent"]))},[(0,l.Uk)("Удалить категорию "),me],8,ge)])])):(0,l.kq)("",!0)],40,G)]))}});const ve=pe;var _e=ve;const we={class:"highlight centered responsive-table"},he=(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th",null,"Наименование"),(0,l._)("th",null,"Тип категории"),(0,l._)("th",null,"Описание категории"),(0,l._)("th",null,"Автор категории")])],-1);var be=(0,l.aZ)({__name:"CategoriesListTable",setup(e){const{categories:a}=(0,B.Jk)((0,d.x)());return(e,t)=>((0,l.wg)(),(0,l.iD)("table",we,[he,(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)((0,i.SU)(a),(e=>((0,l.wg)(),(0,l.iD)("tr",{key:e.id},[(0,l._)("td",null,(0,o.zw)(e["name"]),1),(0,l._)("td",{class:(0,o.C_)({"red-text":"outcome"===e.type,"green-text":"income"===e.type})},(0,o.zw)("outcome"===e["type"]?"Расход":"Доход"),3),(0,l._)("td",null,(0,o.zw)(e["description"]),1),(0,l._)("td",null,(0,o.zw)(e["author"]),1)])))),128))])]))}});const ke=be;var xe=ke,De=t(3060);const fe=(0,l._)("h3",null,"Ваши категории",-1),Ne={key:0,class:"row"},Ue={class:"col"},Ce=(0,l._)("p",null,"У Вас пока нет добавленных счетов",-1),$e={key:1,class:"row"},Se={class:"col s12 m6"},qe={key:0,class:"col s12 m6"},Te={key:2,class:"row"};var Me=(0,l.aZ)({__name:"CategoriesView",setup(e){const{isAccountExist:a,isCategoryExist:t}=(0,B.Jk)((0,De.e)());return(e,o)=>{const c=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)(l.HY,null,[fe,(0,i.SU)(a)?((0,l.wg)(),(0,l.iD)("div",$e,[(0,l._)("div",Se,[(0,l.Wm)(L)]),(0,i.SU)(t)?((0,l.wg)(),(0,l.iD)("div",qe,[(0,l.Wm)(_e)])):(0,l.kq)("",!0)])):((0,l.wg)(),(0,l.iD)("div",Ne,[(0,l._)("div",Ue,[Ce,(0,l._)("p",null,[(0,l.Uk)("Добавьте хотя бы один "),(0,l.Wm)(c,{to:"/accounts"},{default:(0,l.w5)((()=>[(0,l.Uk)("счёт")])),_:1})])])])),(0,i.SU)(t)?((0,l.wg)(),(0,l.iD)("div",Te,[(0,l.Wm)(xe)])):(0,l.kq)("",!0)],64)}}});const ze=Me;var Ve=ze}}]);
//# sourceMappingURL=944.6cd36164.js.map