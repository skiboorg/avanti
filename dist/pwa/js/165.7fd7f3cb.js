"use strict";(globalThis["webpackChunkrolf_wallet"]=globalThis["webpackChunkrolf_wallet"]||[]).push([[165],{55165:(e,a,l)=>{l.r(a),l.d(a,{default:()=>T});l(40702);var t=l(59835),s=l(86970),n=l(60499),u=l(46190),o=l(17779);const r=e=>((0,t.dD)("data-v-7f996d07"),e=e(),(0,t.Cn)(),e),c={class:"page-body--top text-white flex column items-center justify-evenly"},m={class:"flex items-center text-center q-mb-md"},i={class:"top-buttons"},d=r((()=>(0,t._)("p",{class:"no-margin text-caption lh100"},[(0,t.Uk)("Отправить"),(0,t._)("br"),(0,t.Uk)("в сети RUPAY")],-1))),p=r((()=>(0,t._)("p",{class:"no-margin text-caption lh100"},[(0,t.Uk)("Получить"),(0,t._)("br"),(0,t.Uk)("в сети RUPAY")],-1))),_=r((()=>(0,t._)("p",{class:"no-margin text-caption lh100"},"Получить",-1))),b=r((()=>(0,t._)("p",{class:"no-margin text-caption lh100"},"Обмен",-1))),w=r((()=>(0,t._)("p",{class:"no-margin text-caption lh100"},"Вывести",-1))),g=r((()=>(0,t._)("p",{class:"no-margin text-caption lh100"},"P2P",-1))),f=["src"],h={__name:"Index",setup(e){const a=(0,u.c)(),l="https://scan.rupay.pro",r=(0,n.iH)("tokens"),h=((0,n.iH)(void 0),(0,t.Fl)((()=>a.verifyPersonData)),(0,t.Fl)((()=>a.addresses[a.currentAddressIdx].address)),(0,t.Fl)((()=>a.assets))),x=(0,t.Fl)((()=>a.balances));const k=(0,t.Fl)((()=>{let e=0;if(h.value.length>0)for(let l of h.value)try{e+=x.value[l.key][0][1]*l.course}catch(a){o.log("balance error",a)}return e}));return(e,a)=>{const u=(0,t.up)("page-header"),o=(0,t.up)("q-btn"),v=(0,t.up)("q-icon"),W=(0,t.up)("q-avatar"),q=(0,t.up)("q-tabs"),y=(0,t.up)("q-separator"),U=(0,t.up)("q-item-section"),C=(0,t.up)("q-item-label"),Z=(0,t.up)("q-item"),$=(0,t.up)("q-list"),Q=(0,t.up)("q-scroll-area"),z=(0,t.up)("q-tab-panel"),I=(0,t.up)("q-tab-panels"),S=(0,t.up)("page-body"),A=(0,t.up)("page");return(0,t.wg)(),(0,t.j4)(A,null,{default:(0,t.w5)((()=>[(0,t.Wm)(S,null,{default:(0,t.w5)((()=>[(0,t._)("div",c,[(0,t.Wm)(u),(0,t._)("div",m,[(0,t._)("p",{class:(0,s.C_)(["q-mb-none q-mr-md text-h5 text-bold",{blur:e.$global.isBlur}])},"~ "+(0,s.zw)(e.$filters.convertAmount((0,n.SU)(k)))+" ₽",3),(0,t.Wm)(o,{icon:e.$global.isBlur?"las la-low-vision":"las la-eye",flat:"",dense:"",round:"",onClick:a[0]||(a[0]=a=>e.$global.toggleIsBlur())},null,8,["icon"])]),(0,t._)("div",i,[(0,t._)("div",{class:"text-center",onClick:a[1]||(a[1]=a=>e.$router.push({name:"wallet_own_assets"}))},[(0,t.Wm)(W,{class:"bg-blue-7 q-mb-sm"},{default:(0,t.w5)((()=>[(0,t.Wm)(v,{size:"22px",name:"las la-upload"})])),_:1}),d]),(0,t._)("div",{class:"text-center",onClick:a[2]||(a[2]=a=>e.$router.push({name:"wallet_select"}))},[(0,t.Wm)(W,{class:"bg-blue-7 q-mb-sm"},{default:(0,t.w5)((()=>[(0,t.Wm)(v,{size:"22px",name:"las la-download"})])),_:1}),p]),(0,t._)("div",{class:"text-center",onClick:a[3]||(a[3]=a=>e.$router.push({name:"wallet_assets_for_buy"}))},[(0,t.Wm)(W,{class:"bg-blue-7 q-mb-sm"},{default:(0,t.w5)((()=>[(0,t.Wm)(v,{size:"22px",name:"las la-tag"})])),_:1}),_]),(0,t._)("div",{class:"text-center",onClick:a[4]||(a[4]=a=>e.$router.push({name:"wallet_exchange"}))},[(0,t.Wm)(W,{class:"bg-blue-7 q-mb-sm"},{default:(0,t.w5)((()=>[(0,t.Wm)(v,{size:"22px",name:"las la-exchange-alt"})])),_:1}),b]),(0,t._)("div",{class:"text-center",onClick:a[5]||(a[5]=a=>e.$router.push({name:"withdraw"}))},[(0,t.Wm)(W,{class:"bg-blue-7 q-mb-sm"},{default:(0,t.w5)((()=>[(0,t.Wm)(v,{size:"22px",name:"las la-wallet"})])),_:1}),w]),(0,t._)("div",{class:"text-center",onClick:a[6]||(a[6]=a=>e.$router.push({name:"p2p_index"}))},[(0,t.Wm)(W,{class:"bg-blue-7 q-mb-sm"},{default:(0,t.w5)((()=>[(0,t.Wm)(v,{size:"22px",name:"las la-users"})])),_:1}),g])])]),(0,t.Wm)(q,{modelValue:r.value,"onUpdate:modelValue":a[7]||(a[7]=e=>r.value=e),class:"text-grey","active-color":"primary","indicator-color":"primary",align:"justify"},null,8,["modelValue"]),(0,t.Wm)(y),(0,t.Wm)(I,{modelValue:r.value,"onUpdate:modelValue":a[8]||(a[8]=e=>r.value=e),animated:""},{default:(0,t.w5)((()=>[(0,t.Wm)(z,{name:"tokens",class:"no-padding"},{default:(0,t.w5)((()=>[(0,t.Wm)(Q,{style:{height:"57vh"}},{default:(0,t.w5)((()=>[(0,t.Wm)($,{separator:""},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)((0,n.SU)(h),((a,u)=>((0,t.wg)(),(0,t.j4)(Z,{onClick:a=>e.$router.push({name:"wallet_asset",params:{asset_key:u}}),clickable:"",key:u},{default:(0,t.w5)((()=>[(0,t.Wm)(U,{avatar:""},{default:(0,t.w5)((()=>[(0,t.Wm)(W,{rounded:""},{default:(0,t.w5)((()=>[(0,t._)("img",{src:(0,n.SU)(l)+a.iconURL},null,8,f)])),_:2},1024)])),_:2},1024),(0,t.Wm)(U,{class:"text-weight-medium"},{default:(0,t.w5)((()=>[(0,t.Wm)(C,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,s.zw)(a.name),1)])),_:2},1024),(0,t.Wm)(C,{caption:""},{default:(0,t.w5)((()=>[(0,t.Uk)((0,s.zw)(a.course)+" ₽",1)])),_:2},1024)])),_:2},1024),(0,t.Wm)(U,null,{default:(0,t.w5)((()=>[(0,t.Wm)(C,{class:(0,s.C_)(["text-weight-medium",{blur:e.$global.isBlur}])},{default:(0,t.w5)((()=>[(0,t.Uk)((0,s.zw)((0,n.SU)(x)[a.key][0][1]),1)])),_:2},1032,["class"]),a.course?((0,t.wg)(),(0,t.j4)(C,{key:0,caption:"",class:(0,s.C_)({blur:e.$global.isBlur})},{default:(0,t.w5)((()=>[(0,t.Uk)("~ "+(0,s.zw)(e.$filters.convertAmount((0,n.SU)(x)[a.key][0][1]*a.course))+" ₽",1)])),_:2},1032,["class"])):(0,t.kq)("",!0)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1})])),_:1}),(0,t.Wm)(z,{name:"nft"})])),_:1},8,["modelValue"])])),_:1})])),_:1})}}};var x=l(11639),k=l(24455),v=l(61357),W=l(22857),q=l(47817),y=l(70900),U=l(50926),C=l(89800),Z=l(84106),$=l(66663),Q=l(13246),z=l(490),I=l(76749),S=l(33115),A=l(69984),P=l.n(A);const B=(0,x.Z)(h,[["__scopeId","data-v-7f996d07"]]),T=B;P()(h,"components",{QBtn:k.Z,QAvatar:v.Z,QIcon:W.Z,QTabs:q.Z,QTab:y.Z,QSeparator:U.Z,QTabPanels:C.Z,QTabPanel:Z.Z,QScrollArea:$.Z,QList:Q.Z,QItem:z.Z,QItemSection:I.Z,QItemLabel:S.Z})}}]);