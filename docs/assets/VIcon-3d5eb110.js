import{p as g,g as Q,r as x,a1 as p,k as ee,A as I,a2 as D,B as te,l as P,a3 as ne,y as se,c as h,d as f,m as l,q as ae,E as F,n as re,S as q,s as C,a4 as ie,U as oe,Y as E,Z as le,M as ue,a5 as ce,L as N,a6 as z,a7 as M,a8 as H,K as de,X as ve,u as ge,w as me,a9 as fe,v as he,aa as Se,ab as be}from"./index-7c6dfd50.js";const V=g({class:[String,Array],style:{type:[String,Array,Object],default:null}},"component");function B(e){const n=Q("useRender");n.render=e}function Oe(e){const n=x(),s=x();if(p){const t=new ResizeObserver(a=>{e==null||e(a,t),a.length&&(s.value=a[0].contentRect)});ee(()=>{t.disconnect()}),I(n,(a,r)=>{r&&(t.unobserve(D(r)),s.value=void 0),a&&t.observe(D(a))},{flush:"post"})}return{resizeRef:n,contentRect:te(s)}}const ye=g({tag:{type:String,default:"div"}},"tag"),_e=g({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),je=P(!1)({name:"VDefaultsProvider",props:_e(),setup(e,n){let{slots:s}=n;const{defaults:t,disabled:a,reset:r,root:o,scoped:d}=ne(e);return se(t,{reset:r,root:o,scoped:d,disabled:a}),()=>{var m;return(m=s.default)==null?void 0:m.call(s)}}});const Ce=g({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function ze(e){return{dimensionStyles:h(()=>({height:f(e.height),maxHeight:f(e.maxHeight),maxWidth:f(e.maxWidth),minHeight:f(e.minHeight),minWidth:f(e.minWidth),width:f(e.width)}))}}function Re(e){return{aspectStyles:h(()=>{const n=Number(e.aspectRatio);return n?{paddingBottom:String(1/n*100)+"%"}:void 0})}}const U=g({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...V(),...Ce()},"VResponsive"),A=P()({name:"VResponsive",props:U(),setup(e,n){let{slots:s}=n;const{aspectStyles:t}=Re(e),{dimensionStyles:a}=ze(e);return B(()=>{var r;return l("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[a.value,e.style]},[l("div",{class:"v-responsive__sizer",style:t.value},null),(r=s.additional)==null?void 0:r.call(s),s.default&&l("div",{class:["v-responsive__content",e.contentClass]},[s.default()])])}),{}}}),ke=g({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),k=(e,n)=>{let{slots:s}=n;const{transition:t,disabled:a,...r}=e,{component:o=re,...d}=typeof t=="object"?t:{};return ae(o,F(typeof t=="string"?{name:a?"":t}:d,r,{disabled:a}),s)};function Ie(e,n){if(!q)return;const s=n.modifiers||{},t=n.value,{handler:a,options:r}=typeof t=="object"?t:{handler:t,options:{}},o=new IntersectionObserver(function(){var S;let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],m=arguments.length>1?arguments[1]:void 0;const u=(S=e._observe)==null?void 0:S[n.instance.$.uid];if(!u)return;const v=d.some(y=>y.isIntersecting);a&&(!s.quiet||u.init)&&(!s.once||v||u.init)&&a(v,d,m),v&&s.once?L(e,n):u.init=!0},r);e._observe=Object(e._observe),e._observe[n.instance.$.uid]={init:!1,observer:o},o.observe(e)}function L(e,n){var t;const s=(t=e._observe)==null?void 0:t[n.instance.$.uid];s&&(s.observer.unobserve(e),delete e._observe[n.instance.$.uid])}const xe={mounted:Ie,unmounted:L},Pe=xe,Ne=g({alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,...U(),...V(),...ke()},"VImg"),De=P()({name:"VImg",directives:{intersect:Pe},props:Ne(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,n){let{emit:s,slots:t}=n;const a=C(""),r=x(),o=C(e.eager?"loading":"idle"),d=C(),m=C(),u=h(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),v=h(()=>u.value.aspect||d.value/m.value||0);I(()=>e.src,()=>{S(o.value!=="idle")}),I(v,(i,c)=>{!i&&c&&r.value&&R(r.value)}),ie(()=>S());function S(i){if(!(e.eager&&i)&&!(q&&!i&&!e.eager)){if(o.value="loading",u.value.lazySrc){const c=new Image;c.src=u.value.lazySrc,R(c,null)}u.value.src&&oe(()=>{var c,b;if(s("loadstart",((c=r.value)==null?void 0:c.currentSrc)||u.value.src),(b=r.value)!=null&&b.complete){if(r.value.naturalWidth||_(),o.value==="error")return;v.value||R(r.value,null),y()}else v.value||R(r.value),$()})}}function y(){var i;$(),o.value="loaded",s("load",((i=r.value)==null?void 0:i.currentSrc)||u.value.src)}function _(){var i;o.value="error",s("error",((i=r.value)==null?void 0:i.currentSrc)||u.value.src)}function $(){const i=r.value;i&&(a.value=i.currentSrc||i.src)}let T=-1;function R(i){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const b=()=>{clearTimeout(T);const{naturalHeight:O,naturalWidth:j}=i;O||j?(d.value=j,m.value=O):!i.complete&&o.value==="loading"&&c!=null?T=window.setTimeout(b,c):(i.currentSrc.endsWith(".svg")||i.currentSrc.startsWith("data:image/svg+xml"))&&(d.value=1,m.value=1)};b()}const w=h(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),X=()=>{var b;if(!u.value.src||o.value==="idle")return null;const i=l("img",{class:["v-img__img",w.value],src:u.value.src,srcset:u.value.srcset,alt:e.alt,sizes:e.sizes,ref:r,onLoad:y,onError:_},null),c=(b=t.sources)==null?void 0:b.call(t);return l(k,{transition:e.transition,appear:!0},{default:()=>[E(c?l("picture",{class:"v-img__picture"},[c,i]):i,[[ce,o.value==="loaded"]])]})},Y=()=>l(k,{transition:e.transition},{default:()=>[u.value.lazySrc&&o.value!=="loaded"&&l("img",{class:["v-img__img","v-img__img--preload",w.value],src:u.value.lazySrc,alt:e.alt},null)]}),Z=()=>t.placeholder?l(k,{transition:e.transition,appear:!0},{default:()=>[(o.value==="loading"||o.value==="error"&&!t.error)&&l("div",{class:"v-img__placeholder"},[t.placeholder()])]}):null,G=()=>t.error?l(k,{transition:e.transition,appear:!0},{default:()=>[o.value==="error"&&l("div",{class:"v-img__error"},[t.error()])]}):null,J=()=>e.gradient?l("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,W=C(!1);{const i=I(v,c=>{c&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{W.value=!0})}),i())})}return B(()=>{const[i]=A.filterProps(e);return E(l(A,F({class:["v-img",{"v-img--booting":!W.value},e.class],style:e.style},i,{aspectRatio:v.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>l(ue,null,[l(X,null,null),l(Y,null,null),l(J,null,null),l(Z,null,null),l(G,null,null)]),default:t.default}),[[le("intersect"),{handler:S,options:e.options},null,{once:!0}]])}),{currentSrc:a,image:r,state:o,naturalWidth:d,naturalHeight:m}}}),Ee=g({border:[Boolean,Number,String]},"border");function He(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:N();return{borderClasses:h(()=>{const t=z(e)?e.value:e.border,a=[];if(t===!0||t==="")a.push(`${n}--border`);else if(typeof t=="string"||t===0)for(const r of String(t).split(" "))a.push(`border-${r}`);return a})}}function K(e){return M(()=>{const n=[],s={};return e.value.background&&(H(e.value.background)?s.backgroundColor=e.value.background:n.push(`bg-${e.value.background}`)),e.value.text&&(H(e.value.text)?(s.color=e.value.text,s.caretColor=e.value.text):n.push(`text-${e.value.text}`)),{colorClasses:n,colorStyles:s}})}function Ve(e,n){const s=h(()=>({text:z(e)?e.value:n?e[n]:null})),{colorClasses:t,colorStyles:a}=K(s);return{textColorClasses:t,textColorStyles:a}}function Ae(e,n){const s=h(()=>({background:z(e)?e.value:n?e[n]:null})),{colorClasses:t,colorStyles:a}=K(s);return{backgroundColorClasses:t,backgroundColorStyles:a}}const Fe=g({elevation:{type:[Number,String],validator(e){const n=parseInt(e);return!isNaN(n)&&n>=0&&n<=24}}},"elevation");function qe(e){return{elevationClasses:h(()=>{const s=z(e)?e.value:e.elevation,t=[];return s==null||t.push(`elevation-${s}`),t})}}const Me=g({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function Ue(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:N();return{roundedClasses:h(()=>{const t=z(e)?e.value:e.rounded,a=[];if(t===!0||t==="")a.push(`${n}--rounded`);else if(typeof t=="string"||t===0)for(const r of String(t).split(" "))a.push(`rounded-${r}`);return a})}}const Be=["x-small","small","default","large","x-large"],$e=g({size:{type:[String,Number],default:"default"}},"size");function Te(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:N();return M(()=>{let s,t;return de(Be,e.size)?s=`${n}--size-${e.size}`:e.size&&(t={width:f(e.size),height:f(e.size)}),{sizeClasses:s,sizeStyles:t}})}const we=g({color:String,start:Boolean,end:Boolean,icon:ve,...V(),...$e(),...ye({tag:"i"}),...ge()},"VIcon"),Le=P()({name:"VIcon",props:we(),setup(e,n){let{attrs:s,slots:t}=n;const a=x(),{themeClasses:r}=me(e),{iconData:o}=fe(h(()=>a.value||e.icon)),{sizeClasses:d}=Te(e),{textColorClasses:m,textColorStyles:u}=Ve(he(e,"color"));return B(()=>{var S,y;const v=(S=t.default)==null?void 0:S.call(t);return v&&(a.value=(y=Se(v).filter(_=>_.type===be&&_.children&&typeof _.children=="string")[0])==null?void 0:y.children),l(o.value.component,{tag:e.tag,icon:o.value.icon,class:["v-icon","notranslate",r.value,d.value,m.value,{"v-icon--clickable":!!s.onClick,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[d.value?void 0:{fontSize:f(e.size),height:f(e.size),width:f(e.size)},u.value,e.style],role:s.onClick?"button":void 0,"aria-hidden":!s.onClick},{default:()=>[v]})}),{}}});export{De as V,ye as a,B as b,Ee as c,Fe as d,Me as e,Ae as f,He as g,qe as h,Ue as i,je as j,Le as k,K as l,V as m,$e as n,Te as o,Ve as p,Ce as q,ze as r,A as s,Oe as u};
