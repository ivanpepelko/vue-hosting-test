import{c as i,h as v,g as N,T as fe,C as z,m as ve,v as ge,t as ee,u as me,q as te,r as V,a as be,x as he,s as w,U as ye,l as ke}from"./index.670db838.js";import{c as I,h as pe,e as M,b as xe}from"./render.d2d81712.js";const K={xs:18,sm:24,md:32,lg:38,xl:46},ne={size:String};function ae(e,n=K){return i(()=>e.size!==void 0?{fontSize:e.size in n?`${n[e.size]}px`:e.size}:null)}const F="0 0 24 24",U=e=>e,j=e=>`ionicons ${e}`,re={"mdi-":e=>`mdi ${e}`,"icon-":U,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":j,"ion-ios":j,"ion-logo":j,"iconfont ":U,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},le={o_:"-outlined",r_:"-round",s_:"-sharp"},ue={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},qe=new RegExp("^("+Object.keys(re).join("|")+")"),Ee=new RegExp("^("+Object.keys(le).join("|")+")"),D=new RegExp("^("+Object.keys(ue).join("|")+")"),$e=/^[Mm]\s?[-+]?\.?\d/,Se=/^img:/,Re=/^svguse:/,we=/^ion-/,Le=/^(fa-(solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var H=I({name:"QIcon",props:{...ne,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:n}){const{proxy:{$q:t}}=N(),u=ae(e),g=i(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),o=i(()=>{let s,a=e.name;if(a==="none"||!a)return{none:!0};if(t.iconMapFn!==null){const d=t.iconMapFn(a);if(d!==void 0)if(d.icon!==void 0){if(a=d.icon,a==="none"||!a)return{none:!0}}else return{cls:d.cls,content:d.content!==void 0?d.content:" "}}if($e.test(a)===!0){const[d,y=F]=a.split("|");return{svg:!0,viewBox:y,nodes:d.split("&&").map(k=>{const[r,p,h]=k.split("@@");return v("path",{style:p,d:r,transform:h})})}}if(Se.test(a)===!0)return{img:!0,src:a.substring(4)};if(Re.test(a)===!0){const[d,y=F]=a.split("|");return{svguse:!0,src:d.substring(7),viewBox:y}}let b=" ";const E=a.match(qe);if(E!==null)s=re[E[1]](a);else if(Le.test(a)===!0)s=a;else if(we.test(a)===!0)s=`ionicons ion-${t.platform.is.ios===!0?"ios":"md"}${a.substring(3)}`;else if(D.test(a)===!0){s="notranslate material-symbols";const d=a.match(D);d!==null&&(a=a.substring(6),s+=ue[d[1]]),b=a}else{s="notranslate material-icons";const d=a.match(Ee);d!==null&&(a=a.substring(2),s+=le[d[1]]),b=a}return{cls:s,content:b}});return()=>{const s={class:g.value,style:u.value,"aria-hidden":"true",role:"presentation"};return o.value.none===!0?v(e.tag,s,pe(n.default)):o.value.img===!0?v("span",s,M(n.default,[v("img",{src:o.value.src})])):o.value.svg===!0?v("span",s,M(n.default,[v("svg",{viewBox:o.value.viewBox||"0 0 24 24"},o.value.nodes)])):o.value.svguse===!0?v("span",s,M(n.default,[v("svg",{viewBox:o.value.viewBox},[v("use",{"xlink:href":o.value.src})])])):(o.value.cls!==void 0&&(s.class+=" "+o.value.cls),v(e.tag,s,M(n.default,[o.value.content])))}}});const _e={size:{type:[Number,String],default:"1em"},color:String};function Be(e){return{cSize:i(()=>e.size in K?`${K[e.size]}px`:e.size),classes:i(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}var Ce=I({name:"QSpinner",props:{..._e,thickness:{type:Number,default:5}},setup(e){const{cSize:n,classes:t}=Be(e);return()=>v("svg",{class:t.value+" q-spinner-mat",width:n.value,height:n.value,viewBox:"25 25 50 50"},[v("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});function Pe(e,n){const t=e.style;for(const u in n)t[u]=n[u]}function Ge(e){if(e==null)return;if(typeof e=="string")try{return document.querySelector(e)||void 0}catch{return}const n=fe(e)===!0?e.value:e;if(n)return n.$el||n}function Te(e,n=250){let t=!1,u;return function(){return t===!1&&(t=!0,setTimeout(()=>{t=!1},n),u=e.apply(this,arguments)),u}}function W(e,n,t,u){t.modifiers.stop===!0&&ee(e);const g=t.modifiers.color;let o=t.modifiers.center;o=o===!0||u===!0;const s=document.createElement("span"),a=document.createElement("span"),b=me(e),{left:E,top:d,width:y,height:k}=n.getBoundingClientRect(),r=Math.sqrt(y*y+k*k),p=r/2,h=`${(y-r)/2}px`,c=o?h:`${b.left-E-p}px`,f=`${(k-r)/2}px`,x=o?f:`${b.top-d-p}px`;a.className="q-ripple__inner",Pe(a,{height:`${r}px`,width:`${r}px`,transform:`translate3d(${c},${x},0) scale3d(.2,.2,1)`,opacity:0}),s.className=`q-ripple${g?" text-"+g:""}`,s.setAttribute("dir","ltr"),s.appendChild(a),n.appendChild(s);const R=()=>{s.remove(),clearTimeout($)};t.abort.push(R);let $=setTimeout(()=>{a.classList.add("q-ripple__inner--enter"),a.style.transform=`translate3d(${h},${f},0) scale3d(1,1,1)`,a.style.opacity=.2,$=setTimeout(()=>{a.classList.remove("q-ripple__inner--enter"),a.classList.add("q-ripple__inner--leave"),a.style.opacity=0,$=setTimeout(()=>{s.remove(),t.abort.splice(t.abort.indexOf(R),1)},275)},250)},50)}function X(e,{modifiers:n,value:t,arg:u}){const g=Object.assign({},e.cfg.ripple,n,t);e.modifiers={early:g.early===!0,stop:g.stop===!0,center:g.center===!0,color:g.color||u,keyCodes:[].concat(g.keyCodes||13)}}var Me=xe({name:"ripple",beforeMount(e,n){const t={cfg:n.instance.$.appContext.config.globalProperties.$q.config,enabled:n.value!==!1,modifiers:{},abort:[],start(u){t.enabled===!0&&u.qSkipRipple!==!0&&u.type===(t.modifiers.early===!0?"pointerdown":"click")&&W(u,e,t,u.qKeyEvent===!0)},keystart:Te(u=>{t.enabled===!0&&u.qSkipRipple!==!0&&z(u,t.modifiers.keyCodes)===!0&&u.type===`key${t.modifiers.early===!0?"down":"up"}`&&W(u,e,t,!0)},300)};X(t,n),e.__qripple=t,ve(t,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,n){if(n.oldValue!==n.value){const t=e.__qripple;t.enabled=n.value!==!1,t.enabled===!0&&Object(n.value)===n.value&&X(t,n)}},beforeUnmount(e){const n=e.__qripple;n.abort.forEach(t=>{t()}),ge(n,"main"),delete e._qripple}});const ie={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},Ae=Object.keys(ie),Oe={align:{type:String,validator:e=>Ae.includes(e)}};function je(e){return i(()=>{const n=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${ie[n]}`})}function ze(e){return e.appContext.config.globalProperties.$router!==void 0}function Y(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function G(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function Ke(e,n){for(const t in n){const u=n[t],g=e[t];if(typeof u=="string"){if(u!==g)return!1}else if(Array.isArray(g)===!1||g.length!==u.length||u.some((o,s)=>o!==g[s]))return!1}return!0}function J(e,n){return Array.isArray(n)===!0?e.length===n.length&&e.every((t,u)=>t===n[u]):e.length===1&&e[0]===n}function Ne(e,n){return Array.isArray(e)===!0?J(e,n):Array.isArray(n)===!0?J(n,e):e===n}function Ie(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(const t in e)if(Ne(e[t],n[t])===!1)return!1;return!0}const Qe={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function Ve(e){const n=N(),{props:t,proxy:u}=n,g=ze(n),o=i(()=>t.disable!==!0&&t.href!==void 0),s=i(()=>g===!0&&t.disable!==!0&&o.value!==!0&&t.to!==void 0&&t.to!==null&&t.to!==""),a=i(()=>{if(s.value===!0)try{return u.$router.resolve(t.to)}catch{}return null}),b=i(()=>a.value!==null),E=i(()=>o.value===!0||b.value===!0),d=i(()=>t.type==="a"||E.value===!0?"a":t.tag||e||"div"),y=i(()=>o.value===!0?{href:t.href,target:t.target}:b.value===!0?{href:a.value.href,target:t.target}:{}),k=i(()=>{if(b.value===!1)return null;const{matched:f}=a.value,{length:x}=f,R=f[x-1];if(R===void 0)return-1;const $=u.$route.matched;if($.length===0)return-1;const C=$.findIndex(G.bind(null,R));if(C>-1)return C;const A=Y(f[x-2]);return x>1&&Y(R)===A&&$[$.length-1].path!==A?$.findIndex(G.bind(null,f[x-2])):C}),r=i(()=>b.value===!0&&k.value>-1&&Ke(u.$route.params,a.value.params)),p=i(()=>r.value===!0&&k.value===u.$route.matched.length-1&&Ie(u.$route.params,a.value.params)),h=i(()=>b.value===!0?p.value===!0?` ${t.exactActiveClass} ${t.activeClass}`:t.exact===!0?"":r.value===!0?` ${t.activeClass}`:"":"");function c(f){return t.disable===!0||f.metaKey||f.altKey||f.ctrlKey||f.shiftKey||f.__qNavigate!==!0&&f.defaultPrevented===!0||f.button!==void 0&&f.button!==0||t.target==="_blank"?!1:(te(f),u.$router[t.replace===!0?"replace":"push"](t.to).catch(x=>x))}return{hasRouterLink:b,hasHrefLink:o,hasLink:E,linkTag:d,linkRoute:a,linkIsActive:r,linkIsExactActive:p,linkClass:h,linkProps:y,navigateToRouterLink:c}}const Z={none:0,xs:4,sm:8,md:16,lg:24,xl:32},Fe={xs:8,sm:10,md:14,lg:20,xl:24},Ue=["button","submit","reset"],De=/[^\s]\/[^\s]/,He={...ne,...Qe,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,round:Boolean,outline:Boolean,flat:Boolean,unelevated:Boolean,rounded:Boolean,push:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...Oe.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean};function We(e){const n=ae(e,Fe),t=je(e),{hasRouterLink:u,hasLink:g,linkTag:o,linkProps:s,navigateToRouterLink:a}=Ve("button"),b=i(()=>{const c=e.fab===!1&&e.fabMini===!1?n.value:{};return e.padding!==void 0?Object.assign({},c,{padding:e.padding.split(/\s+/).map(f=>f in Z?Z[f]+"px":f).join(" "),minWidth:"0",minHeight:"0"}):c}),E=i(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),d=i(()=>e.disable!==!0&&e.loading!==!0),y=i(()=>d.value===!0?e.tabindex||0:-1),k=i(()=>e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":"standard"),r=i(()=>{const c={tabindex:y.value};return g.value===!0?Object.assign(c,s.value):Ue.includes(e.type)===!0&&(c.type=e.type),o.value==="a"?(e.disable===!0?c["aria-disabled"]="true":c.href===void 0&&(c.role="button"),u.value!==!0&&De.test(e.type)===!0&&(c.type=e.type)):e.disable===!0&&(c.disabled="",c["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(c,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),c}),p=i(()=>{let c;return e.color!==void 0?e.flat===!0||e.outline===!0?c=`text-${e.textColor||e.color}`:c=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(c=`text-${e.textColor}`),`q-btn--${k.value} q-btn--${e.round===!0?"round":`rectangle${E.value===!0?" q-btn--rounded":""}`}`+(c!==void 0?" "+c:"")+(d.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")}),h=i(()=>t.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:p,style:b,innerClasses:h,attributes:r,hasRouterLink:u,hasLink:g,linkTag:o,navigateToRouterLink:a,isActionable:d}}const{passiveCapture:q}=ke;let L=null,_=null,B=null;var Je=I({name:"QBtn",props:{...He,percentage:Number,darkPercentage:Boolean},emits:["click","keydown","touchstart","mousedown","keyup"],setup(e,{slots:n,emit:t}){const{proxy:u}=N(),{classes:g,style:o,innerClasses:s,attributes:a,hasRouterLink:b,hasLink:E,linkTag:d,navigateToRouterLink:y,isActionable:k}=We(e),r=V(null),p=V(null);let h=null,c,f;const x=i(()=>e.label!==void 0&&e.label!==null&&e.label!==""),R=i(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:E.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),$=i(()=>({center:e.round})),C=i(()=>{const l=Math.max(0,Math.min(100,e.percentage));return l>0?{transition:"transform 0.6s",transform:`translateX(${l-100}%)`}:{}}),A=i(()=>e.loading===!0?{onMousedown:T,onTouchstartPassive:T,onClick:T,onKeydown:T,onKeyup:T}:k.value===!0?{onClick:Q,onKeydown:oe,onMousedown:de,onTouchstart:ce}:{onClick:w}),se=i(()=>({ref:r,class:"q-btn q-btn-item non-selectable no-outline "+g.value,style:o.value,...a.value,...A.value}));function Q(l){if(r.value!==null){if(l!==void 0){if(l.defaultPrevented===!0)return;const m=document.activeElement;if(e.type==="submit"&&m!==document.body&&r.value.contains(m)===!1&&m.contains(r.value)===!1){r.value.focus();const O=()=>{document.removeEventListener("keydown",w,!0),document.removeEventListener("keyup",O,q),r.value!==null&&r.value.removeEventListener("blur",O,q)};document.addEventListener("keydown",w,!0),document.addEventListener("keyup",O,q),r.value.addEventListener("blur",O,q)}}if(b.value===!0){const m=()=>{l.__qNavigate=!0,y(l)};t("click",l,m),l.defaultPrevented!==!0&&m()}else t("click",l)}}function oe(l){r.value!==null&&(t("keydown",l),z(l,[13,32])===!0&&_!==r.value&&(_!==null&&P(),l.defaultPrevented!==!0&&(r.value.focus(),_=r.value,r.value.classList.add("q-btn--active"),document.addEventListener("keyup",S,!0),r.value.addEventListener("blur",S,q)),w(l)))}function ce(l){r.value!==null&&(t("touchstart",l),l.defaultPrevented!==!0&&(L!==r.value&&(L!==null&&P(),L=r.value,h=l.target,h.addEventListener("touchcancel",S,q),h.addEventListener("touchend",S,q)),c=!0,clearTimeout(f),f=setTimeout(()=>{c=!1},200)))}function de(l){r.value!==null&&(l.qSkipRipple=c===!0,t("mousedown",l),l.defaultPrevented!==!0&&B!==r.value&&(B!==null&&P(),B=r.value,r.value.classList.add("q-btn--active"),document.addEventListener("mouseup",S,q)))}function S(l){if(r.value!==null&&!(l!==void 0&&l.type==="blur"&&document.activeElement===r.value)){if(l!==void 0&&l.type==="keyup"){if(_===r.value&&z(l,[13,32])===!0){const m=new MouseEvent("click",l);m.qKeyEvent=!0,l.defaultPrevented===!0&&te(m),l.cancelBubble===!0&&ee(m),r.value.dispatchEvent(m),w(l),l.qKeyEvent=!0}t("keyup",l)}P()}}function P(l){const m=p.value;l!==!0&&(L===r.value||B===r.value)&&m!==null&&m!==document.activeElement&&(m.setAttribute("tabindex",-1),m.focus()),L===r.value&&(h!==null&&(h.removeEventListener("touchcancel",S,q),h.removeEventListener("touchend",S,q)),L=h=null),B===r.value&&(document.removeEventListener("mouseup",S,q),B=null),_===r.value&&(document.removeEventListener("keyup",S,!0),r.value!==null&&r.value.removeEventListener("blur",S,q),_=null),r.value!==null&&r.value.classList.remove("q-btn--active")}function T(l){w(l),l.qSkipRipple=!0}return be(()=>{P(!0)}),Object.assign(u,{click:Q}),()=>{let l=[];e.icon!==void 0&&l.push(v(H,{name:e.icon,left:e.stack===!1&&x.value===!0,role:"img","aria-hidden":"true"})),x.value===!0&&l.push(v("span",{class:"block"},[e.label])),l=M(n.default,l),e.iconRight!==void 0&&e.round===!1&&l.push(v(H,{name:e.iconRight,right:e.stack===!1&&x.value===!0,role:"img","aria-hidden":"true"}));const m=[v("span",{class:"q-focus-helper",ref:p})];return e.loading===!0&&e.percentage!==void 0&&m.push(v("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[v("span",{class:"q-btn__progress-indicator fit block",style:C.value})])),m.push(v("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+s.value},l)),e.loading!==null&&m.push(v(ye,{name:"q-transition--fade"},()=>e.loading===!0?[v("span",{key:"loading",class:"absolute-full flex flex-center"},n.loading!==void 0?n.loading():[v(Ce)])]:null)),he(v(d.value,se.value,m),[[Me,R.value,void 0,$.value]])}}});export{H as Q,Ve as a,Je as b,Pe as c,Ge as g,Qe as u,ze as v};
