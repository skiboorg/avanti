"use strict";(globalThis["webpackChunkrolf_wallet"]=globalThis["webpackChunkrolf_wallet"]||[]).push([[319],{14319:(e,a,l)=>{l.r(a),l.d(a,{default:()=>H});var t=l(59835),n=l(60499),s=l(86970),u=l(18910),c=l(32316),o=l(87270),d=l(23459),i=l(46190),r=l(17779);const p={class:"flex column items-center justify-evenly full-height"},m={class:""},v=(0,t._)("p",{class:"text-bold text-negative text-center no-margin"},"На этот адрес отправляте только из сети RuPay. Отправка из другой сети приведет к сжиганию Вашей криптовалюты",-1),w={style:{"word-break":"break-all"},class:"qr-card-text no-margin"},g={key:0,class:"text-weight-bold text-center"},y={class:"qr-card-text"},_=(0,t.Uk)("Отправлейте только "),f=(0,t.Uk)(" на этот адрес. Отправка любых других монет может привести к их безвозвратной потере"),b={class:"q-gutter-md"},h=(0,t._)("div",{class:"text-h6"},"Введите сумму",-1),k={__name:"Receive",setup(e){const a=(0,u.yj)();let l=(0,n.iH)(""),k=(0,n.iH)(!1),q=(0,n.iH)(null);async function W(){await navigator.share({title:"",text:`Мой адрес в сети RUPAY актива ${$.value.name} - ${Z.value}`})}async function U(){k.value=!1,await z(`${Z.value}:${S.value}:${q.value}`)}async function x(){await(0,o.Q)(Z.value,"positive","Адрес кошелька скопирован")}const C=(0,d.Q)(),Q=(0,i.c)();let S=(0,n.iH)(0);const $=(0,t.Fl)((()=>C.assets.find((e=>e.key===S.value)))),Z=(0,t.Fl)((()=>Q.addresses[Q.currentAddressIdx].address));let V=(0,n.iH)("");const z=async e=>{try{V.value=await c.toDataURL(e,{scale:8})}catch(a){r.error(a)}};return(0,t.wF)((async()=>{S.value=parseInt(a.query.asset),l.value=`Мой кошелек ${$.value.name} ${Z.value}`,r.log($.value),await z(`${Z.value}:${S.value}:${a.query.amount}`)})),(e,a)=>{const l=(0,t.up)("page-header"),u=(0,t.up)("q-img"),c=(0,t.up)("q-card-section"),o=(0,t.up)("q-card"),d=(0,t.up)("q-btn"),i=(0,t.up)("q-input"),r=(0,t.up)("q-card-actions"),C=(0,t.up)("q-dialog"),Q=(0,t.up)("page-body"),S=(0,t.up)("page"),z=(0,t.Q2)("close-popup");return(0,t.wg)(),(0,t.j4)(S,null,{default:(0,t.w5)((()=>[(0,t.Wm)(Q,{class:"q-px-md"},{default:(0,t.w5)((()=>[(0,t.Wm)(l),(0,t._)("div",p,[(0,t._)("div",m,[(0,t.Wm)(o,{class:"qr-card"},{default:(0,t.w5)((()=>[(0,t.Wm)(c,null,{default:(0,t.w5)((()=>[v,(0,t.Wm)(u,{src:(0,n.SU)(V)},null,8,["src"]),(0,t._)("p",w,(0,s.zw)((0,n.SU)(Z)),1)])),_:1})])),_:1}),(0,n.SU)(q)?((0,t.wg)(),(0,t.iD)("p",g,"+"+(0,s.zw)((0,n.SU)(q))+" "+(0,s.zw)((0,n.SU)($).name),1)):(0,t.kq)("",!0),(0,t._)("p",y,[_,(0,t._)("strong",null,(0,s.zw)((0,n.SU)($).name),1),f])]),(0,t._)("div",b,[(0,t.Wm)(d,{label:"Скопировать",onClick:x,"no-caps":"",size:"12px",unelevated:"",stack:"",icon:"las la-copy"}),(0,t.Wm)(d,{label:"Сумма",onClick:a[0]||(a[0]=e=>(0,n.dq)(k)?k.value=!0:k=!0),"no-caps":"",unelevated:"",stack:"",icon:"las la-tag"}),(0,t.Wm)(d,{label:"Поделиться","no-caps":"",stack:"",unelevated:"",icon:"las la-share-alt",onClick:W})])]),(0,t.Wm)(C,{modelValue:(0,n.SU)(k),"onUpdate:modelValue":a[2]||(a[2]=e=>(0,n.dq)(k)?k.value=e:k=e),persistent:"","transition-show":"scale","transition-hide":"scale"},{default:(0,t.w5)((()=>[(0,t.Wm)(o,{style:{width:"100%"}},{default:(0,t.w5)((()=>[(0,t.Wm)(c,{class:"bg-primary text-white"},{default:(0,t.w5)((()=>[h])),_:1}),(0,t.Wm)(c,null,{default:(0,t.w5)((()=>[(0,t.Wm)(i,{rounded:"",dense:"",outlined:"",autofocus:"",modelValue:(0,n.SU)(q),"onUpdate:modelValue":a[1]||(a[1]=e=>(0,n.dq)(q)?q.value=e:q=e),type:"number"},null,8,["modelValue"])])),_:1}),(0,t.Wm)(r,{align:"right"},{default:(0,t.w5)((()=>[(0,t.wy)((0,t.Wm)(d,{"no-caps":"",unelevated:"",color:"primary",outline:"",rounded:"",label:"Отмена"},null,512),[[z]]),(0,t.Wm)(d,{"no-caps":"",unelevated:"",color:"primary",disable:!(0,n.SU)(q),rounded:"",onClick:U,label:"OK"},null,8,["disable"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})}}};var q=l(44458),W=l(63190),U=l(70335),x=l(24455),C=l(32074),Q=l(13119),S=l(11821),$=l(62146),Z=l(69984),V=l.n(Z);const z=k,H=z;V()(k,"components",{QCard:q.Z,QCardSection:W.Z,QImg:U.Z,QBtn:x.Z,QDialog:C.Z,QInput:Q.Z,QCardActions:S.Z}),V()(k,"directives",{ClosePopup:$.Z})}}]);