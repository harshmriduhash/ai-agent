import{b as B,_ as N,e as st,d as H,a as Ye,f as Dt,g as zt,c as Tt}from"./@babel-CJTwEOVv.js";import{c as ze}from"./classnames-ELZfJkp_.js";import{R as ct}from"./rc-resize-observer-cfaxZLPN.js";import{x as U,O as Ct,b as Re,j as tt}from"./rc-util-D-V1B0B9.js";import{r as t}from"./react-CskVYjlA.js";import{r as rt}from"./react-dom-vpJdduAb.js";var ft=t.forwardRef(function(e,c){var m=e.height,i=e.offsetY,f=e.offsetX,S=e.children,s=e.prefixCls,o=e.onInnerResize,M=e.innerProps,v=e.rtl,R=e.extra,n={},g={display:"flex",flexDirection:"column"};return i!==void 0&&(n={height:m,position:"relative",overflow:"hidden"},g=B(B({},g),{},N(N(N(N(N({transform:"translateY(".concat(i,"px)")},v?"marginRight":"marginLeft",-f),"position","absolute"),"left",0),"right",0),"top",0))),t.createElement("div",{style:n},t.createElement(ct,{onResize:function(d){var l=d.offsetHeight;l&&o&&o()}},t.createElement("div",st({style:g,className:ze(N({},"".concat(s,"-holder-inner"),s)),ref:c},M),S,R)))});ft.displayName="Filler";function It(e){var c=e.children,m=e.setRef,i=t.useCallback(function(f){m(f)},[]);return t.cloneElement(c,{ref:i})}function Ht(e,c,m,i,f,S,s,o){var M=o.getKey;return e.slice(c,m+1).map(function(v,R){var n=c+R,g=s(v,n,{style:{width:i},offsetX:f}),u=M(v);return t.createElement(It,{key:u,setRef:function(l){return S(v,l)}},g)})}function Pt(e,c,m){var i=e.length,f=c.length,S,s;if(i===0&&f===0)return null;i<f?(S=e,s=c):(S=c,s=e);var o={__EMPTY_ITEM__:!0};function M(d){return d!==void 0?m(d):o}for(var v=null,R=Math.abs(i-f)!==1,n=0;n<s.length;n+=1){var g=M(S[n]),u=M(s[n]);if(g!==u){v=n,R=R||g!==M(s[n+1]);break}}return v===null?null:{index:v,multiple:R}}function Ot(e,c,m){var i=t.useState(e),f=H(i,2),S=f[0],s=f[1],o=t.useState(null),M=H(o,2),v=M[0],R=M[1];return t.useEffect(function(){var n=Pt(S||[],e||[],c);(n==null?void 0:n.index)!==void 0&&R(e[n.index]),s(e)},[e]),[v]}var nt=(typeof navigator>"u"?"undefined":Ye(navigator))==="object"&&/Firefox/i.test(navigator.userAgent);const vt=function(e,c,m,i){var f=t.useRef(!1),S=t.useRef(null);function s(){clearTimeout(S.current),f.current=!0,S.current=setTimeout(function(){f.current=!1},50)}var o=t.useRef({top:e,bottom:c,left:m,right:i});return o.current.top=e,o.current.bottom=c,o.current.left=m,o.current.right=i,function(M,v){var R=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,n=M?v<0&&o.current.left||v>0&&o.current.right:v<0&&o.current.top||v>0&&o.current.bottom;return R&&n?(clearTimeout(S.current),f.current=!1):(!n||f.current)&&s(),!f.current&&n}};function Nt(e,c,m,i,f,S,s){var o=t.useRef(0),M=t.useRef(null),v=t.useRef(null),R=t.useRef(!1),n=vt(c,m,i,f);function g(h,E){if(U.cancel(M.current),!n(!1,E)){var w=h;if(!w._virtualHandled)w._virtualHandled=!0;else return;o.current+=E,v.current=E,nt||w.preventDefault(),M.current=U(function(){var F=R.current?10:1;s(o.current*F,!1),o.current=0})}}function u(h,E){s(E,!0),nt||h.preventDefault()}var d=t.useRef(null),l=t.useRef(null);function y(h){if(e){U.cancel(l.current),l.current=U(function(){d.current=null},2);var E=h.deltaX,w=h.deltaY,F=h.shiftKey,P=E,x=w;(d.current==="sx"||!d.current&&F&&w&&!E)&&(P=w,x=0,d.current="sx");var $=Math.abs(P),X=Math.abs(x);d.current===null&&(d.current=S&&$>X?"x":"y"),d.current==="y"?g(h,x):u(h,P)}}function b(h){e&&(R.current=h.detail===v.current)}return[y,b]}function $t(e,c,m,i){var f=t.useMemo(function(){return[new Map,[]]},[e,m.id,i]),S=H(f,2),s=S[0],o=S[1],M=function(R){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:R,g=s.get(R),u=s.get(n);if(g===void 0||u===void 0)for(var d=e.length,l=o.length;l<d;l+=1){var y,b=e[l],h=c(b);s.set(h,l);var E=(y=m.get(h))!==null&&y!==void 0?y:i;if(o[l]=(o[l-1]||0)+E,h===R&&(g=l),h===n&&(u=l),g!==void 0&&u!==void 0)break}return{top:o[g-1]||0,bottom:o[u]}};return M}var kt=function(){function e(){zt(this,e),N(this,"maps",void 0),N(this,"id",0),N(this,"diffKeys",new Set),this.maps=Object.create(null)}return Dt(e,[{key:"set",value:function(m,i){this.maps[m]=i,this.id+=1,this.diffKeys.add(m)}},{key:"get",value:function(m){return this.maps[m]}},{key:"resetRecord",value:function(){this.diffKeys.clear()}},{key:"getRecord",value:function(){return this.diffKeys}}]),e}();function at(e){var c=parseFloat(e);return isNaN(c)?0:c}function Bt(e,c,m){var i=t.useState(0),f=H(i,2),S=f[0],s=f[1],o=t.useRef(new Map),M=t.useRef(new kt),v=t.useRef(0);function R(){v.current+=1}function n(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;R();var d=function(){var b=!1;o.current.forEach(function(h,E){if(h&&h.offsetParent){var w=Ct(h),F=w.offsetHeight,P=getComputedStyle(w),x=P.marginTop,$=P.marginBottom,X=at(x),G=at($),I=F+X+G;M.current.get(E)!==I&&(M.current.set(E,I),b=!0)}}),b&&s(function(h){return h+1})};if(u)d();else{v.current+=1;var l=v.current;Promise.resolve().then(function(){l===v.current&&d()})}}function g(u,d){var l=e(u);o.current.get(l),d?(o.current.set(l,d),n()):o.current.delete(l)}return t.useEffect(function(){return R},[]),[g,n,M.current,S]}var it=14/15;function Ft(e,c,m){var i=t.useRef(!1),f=t.useRef(0),S=t.useRef(0),s=t.useRef(null),o=t.useRef(null),M,v=function(u){if(i.current){var d=Math.ceil(u.touches[0].pageX),l=Math.ceil(u.touches[0].pageY),y=f.current-d,b=S.current-l,h=Math.abs(y)>Math.abs(b);h?f.current=d:S.current=l;var E=m(h,h?y:b,!1,u);E&&u.preventDefault(),clearInterval(o.current),E&&(o.current=setInterval(function(){h?y*=it:b*=it;var w=Math.floor(h?y:b);(!m(h,w,!0)||Math.abs(w)<=.1)&&clearInterval(o.current)},16))}},R=function(){i.current=!1,M()},n=function(u){M(),u.touches.length===1&&!i.current&&(i.current=!0,f.current=Math.ceil(u.touches[0].pageX),S.current=Math.ceil(u.touches[0].pageY),s.current=u.target,s.current.addEventListener("touchmove",v,{passive:!1}),s.current.addEventListener("touchend",R,{passive:!0}))};M=function(){s.current&&(s.current.removeEventListener("touchmove",v),s.current.removeEventListener("touchend",R))},Re(function(){return e&&c.current.addEventListener("touchstart",n,{passive:!0}),function(){var g;(g=c.current)===null||g===void 0||g.removeEventListener("touchstart",n),M(),clearInterval(o.current)}},[e])}function ot(e){return Math.floor(Math.pow(e,.5))}function Fe(e,c){var m="touches"in e?e.touches[0]:e;return m[c?"pageX":"pageY"]-window[c?"scrollX":"scrollY"]}function Yt(e,c,m){t.useEffect(function(){var i=c.current;if(e&&i){var f=!1,S,s,o=function(){U.cancel(S)},M=function g(){o(),S=U(function(){m(s),g()})},v=function(u){var d=u;d._virtualHandled||(d._virtualHandled=!0,f=!0)},R=function(){f=!1,o()},n=function(u){if(f){var d=Fe(u,!1),l=i.getBoundingClientRect(),y=l.top,b=l.bottom;if(d<=y){var h=y-d;s=-ot(h),M()}else if(d>=b){var E=d-b;s=ot(E),M()}else o()}};return i.addEventListener("mousedown",v),i.ownerDocument.addEventListener("mouseup",R),i.ownerDocument.addEventListener("mousemove",n),function(){i.removeEventListener("mousedown",v),i.ownerDocument.removeEventListener("mouseup",R),i.ownerDocument.removeEventListener("mousemove",n),o()}}},[e])}var Xt=10;function Wt(e,c,m,i,f,S,s,o){var M=t.useRef(),v=t.useState(null),R=H(v,2),n=R[0],g=R[1];return Re(function(){if(n&&n.times<Xt){if(!e.current){g(function(ne){return B({},ne)});return}S();var u=n.targetAlign,d=n.originAlign,l=n.index,y=n.offset,b=e.current.clientHeight,h=!1,E=u,w=null;if(b){for(var F=u||d,P=0,x=0,$=0,X=Math.min(c.length-1,l),G=0;G<=X;G+=1){var I=f(c[G]);x=P;var Q=m.get(I);$=x+(Q===void 0?i:Q),P=$}for(var K=F==="top"?y:b-y,ee=X;ee>=0;ee-=1){var te=f(c[ee]),O=m.get(te);if(O===void 0){h=!0;break}if(K-=O,K<=0)break}switch(F){case"top":w=x-y;break;case"bottom":w=$-b+y;break;default:{var re=e.current.scrollTop,k=re+b;x<re?E="top":$>k&&(E="bottom")}}w!==null&&s(w),w!==n.lastTop&&(h=!0)}h&&g(B(B({},n),{},{times:n.times+1,targetAlign:E,lastTop:w}))}},[n,e.current]),function(u){if(u==null){o();return}if(U.cancel(M.current),typeof u=="number")s(u);else if(u&&Ye(u)==="object"){var d,l=u.align;"index"in u?d=u.index:d=c.findIndex(function(h){return f(h)===u.key});var y=u.offset,b=y===void 0?0:y;g({times:0,index:d,offset:b,originAlign:l})}}}var ut=t.forwardRef(function(e,c){var m=e.prefixCls,i=e.rtl,f=e.scrollOffset,S=e.scrollRange,s=e.onStartMove,o=e.onStopMove,M=e.onScroll,v=e.horizontal,R=e.spinSize,n=e.containerSize,g=e.style,u=e.thumbStyle,d=e.showScrollBar,l=t.useState(!1),y=H(l,2),b=y[0],h=y[1],E=t.useState(null),w=H(E,2),F=w[0],P=w[1],x=t.useState(null),$=H(x,2),X=$[0],G=$[1],I=!i,Q=t.useRef(),K=t.useRef(),ee=t.useState(d),te=H(ee,2),O=te[0],re=te[1],k=t.useRef(),ne=function(){d===!0||d===!1||(clearTimeout(k.current),re(!0),k.current=setTimeout(function(){re(!1)},3e3))},A=S-n||0,W=n-R||0,ae=t.useMemo(function(){if(f===0||A===0)return 0;var Y=f/A;return Y*W},[f,A,W]),D=function(z){z.stopPropagation(),z.preventDefault()},V=t.useRef({top:ae,dragging:b,pageY:F,startTop:X});V.current={top:ae,dragging:b,pageY:F,startTop:X};var le=function(z){h(!0),P(Fe(z,v)),G(V.current.top),s(),z.stopPropagation(),z.preventDefault()};t.useEffect(function(){var Y=function(de){de.preventDefault()},z=Q.current,T=K.current;return z.addEventListener("touchstart",Y,{passive:!1}),T.addEventListener("touchstart",le,{passive:!1}),function(){z.removeEventListener("touchstart",Y),T.removeEventListener("touchstart",le)}},[]);var ve=t.useRef();ve.current=A;var pe=t.useRef();pe.current=W,t.useEffect(function(){if(b){var Y,z=function(de){var se=V.current,Te=se.dragging,Me=se.pageY,be=se.startTop;U.cancel(Y);var he=Q.current.getBoundingClientRect(),Ce=n/(v?he.width:he.height);if(Te){var q=(Fe(de,v)-Me)*Ce,ce=be;!I&&v?ce-=q:ce+=q;var ye=ve.current,Ee=pe.current,Ie=Ee?ce/Ee:0,oe=Math.ceil(Ie*ye);oe=Math.max(oe,0),oe=Math.min(oe,ye),Y=U(function(){M(oe,v)})}},T=function(){h(!1),o()};return window.addEventListener("mousemove",z,{passive:!0}),window.addEventListener("touchmove",z,{passive:!0}),window.addEventListener("mouseup",T,{passive:!0}),window.addEventListener("touchend",T,{passive:!0}),function(){window.removeEventListener("mousemove",z),window.removeEventListener("touchmove",z),window.removeEventListener("mouseup",T),window.removeEventListener("touchend",T),U.cancel(Y)}}},[b]),t.useEffect(function(){return ne(),function(){clearTimeout(k.current)}},[f]),t.useImperativeHandle(c,function(){return{delayHidden:ne}});var Z="".concat(m,"-scrollbar"),_={position:"absolute",visibility:O?null:"hidden"},j={position:"absolute",background:"rgba(0, 0, 0, 0.5)",borderRadius:99,cursor:"pointer",userSelect:"none"};return v?(_.height=8,_.left=0,_.right=0,_.bottom=0,j.height="100%",j.width=R,I?j.left=ae:j.right=ae):(_.width=8,_.top=0,_.bottom=0,I?_.right=0:_.left=0,j.width="100%",j.height=R,j.top=ae),t.createElement("div",{ref:Q,className:ze(Z,N(N(N({},"".concat(Z,"-horizontal"),v),"".concat(Z,"-vertical"),!v),"".concat(Z,"-visible"),O)),style:B(B({},_),g),onMouseDown:D,onMouseMove:ne},t.createElement("div",{ref:K,className:ze("".concat(Z,"-thumb"),N({},"".concat(Z,"-thumb-moving"),b)),style:B(B({},j),u),onMouseDown:le}))}),At=20;function lt(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,m=e/c*e;return isNaN(m)&&(m=0),m=Math.max(m,At),Math.floor(m)}var Kt=["prefixCls","className","height","itemHeight","fullHeight","style","data","children","itemKey","virtual","direction","scrollWidth","component","onScroll","onVirtualScroll","onVisibleChange","innerProps","extraRender","styles","showScrollBar"],Vt=[],jt={overflowY:"auto",overflowAnchor:"none"};function Ut(e,c){var m=e.prefixCls,i=m===void 0?"rc-virtual-list":m,f=e.className,S=e.height,s=e.itemHeight,o=e.fullHeight,M=o===void 0?!0:o,v=e.style,R=e.data,n=e.children,g=e.itemKey,u=e.virtual,d=e.direction,l=e.scrollWidth,y=e.component,b=y===void 0?"div":y,h=e.onScroll,E=e.onVirtualScroll,w=e.onVisibleChange,F=e.innerProps,P=e.extraRender,x=e.styles,$=e.showScrollBar,X=$===void 0?"optional":$,G=Tt(e,Kt),I=t.useCallback(function(a){return typeof g=="function"?g(a):a==null?void 0:a[g]},[g]),Q=Bt(I),K=H(Q,4),ee=K[0],te=K[1],O=K[2],re=K[3],k=!!(u!==!1&&S&&s),ne=t.useMemo(function(){return Object.values(O.maps).reduce(function(a,r){return a+r},0)},[O.id,O.maps]),A=k&&R&&(Math.max(s*R.length,ne)>S||!!l),W=d==="rtl",ae=ze(i,N({},"".concat(i,"-rtl"),W),f),D=R||Vt,V=t.useRef(),le=t.useRef(),ve=t.useRef(),pe=t.useState(0),Z=H(pe,2),_=Z[0],j=Z[1],Y=t.useState(0),z=H(Y,2),T=z[0],ie=z[1],de=t.useState(!1),se=H(de,2),Te=se[0],Me=se[1],be=function(){Me(!0)},he=function(){Me(!1)},Ce={getKey:I};function q(a){j(function(r){var p;typeof a=="function"?p=a(r):p=a;var L=Rt(p);return V.current.scrollTop=L,L})}var ce=t.useRef({start:0,end:D.length}),ye=t.useRef(),Ee=Ot(D,I),Ie=H(Ee,1),oe=Ie[0];ye.current=oe;var we=t.useMemo(function(){if(!k)return{scrollHeight:void 0,start:0,end:D.length-1,offset:void 0};if(!A){var a;return{scrollHeight:((a=le.current)===null||a===void 0?void 0:a.offsetHeight)||0,start:0,end:D.length-1,offset:void 0}}for(var r=0,p,L,C,De=D.length,ge=0;ge<De;ge+=1){var Lt=D[ge],_t=I(Lt),et=O.get(_t),Be=r+(et===void 0?s:et);Be>=_&&p===void 0&&(p=ge,L=r),Be>_+S&&C===void 0&&(C=ge),r=Be}return p===void 0&&(p=0,L=0,C=Math.ceil(S/s)),C===void 0&&(C=D.length-1),C=Math.min(C+1,D.length-1),{scrollHeight:r,start:p,end:C,offset:L}},[A,k,_,D,re,S]),ue=we.scrollHeight,fe=we.start,me=we.end,Xe=we.offset;ce.current.start=fe,ce.current.end=me,t.useLayoutEffect(function(){var a=O.getRecord();if(a.size===1){var r=Array.from(a)[0],p=I(D[fe]);if(p===r){var L=O.get(r),C=L-s;q(function(De){return De+C})}}O.resetRecord()},[ue]);var dt=t.useState({width:0,height:S}),We=H(dt,2),J=We[0],ht=We[1],mt=function(r){ht({width:r.offsetWidth,height:r.offsetHeight})},Ae=t.useRef(),Ke=t.useRef(),St=t.useMemo(function(){return lt(J.width,l)},[J.width,l]),gt=t.useMemo(function(){return lt(J.height,ue)},[J.height,ue]),He=ue-S,Pe=t.useRef(He);Pe.current=He;function Rt(a){var r=a;return Number.isNaN(Pe.current)||(r=Math.min(r,Pe.current)),r=Math.max(r,0),r}var xe=_<=0,Le=_>=He,Ve=T<=0,je=T>=l,pt=vt(xe,Le,Ve,je),Oe=function(){return{x:W?-T:T,y:_}},Ne=t.useRef(Oe()),_e=tt(function(a){if(E){var r=B(B({},Oe()),a);(Ne.current.x!==r.x||Ne.current.y!==r.y)&&(E(r),Ne.current=r)}});function Ue(a,r){var p=a;r?(rt.flushSync(function(){ie(p)}),_e()):q(p)}function Mt(a){var r=a.currentTarget.scrollTop;r!==_&&q(r),h==null||h(a),_e()}var $e=function(r){var p=r,L=l?l-J.width:0;return p=Math.max(p,0),p=Math.min(p,L),p},bt=tt(function(a,r){r?(rt.flushSync(function(){ie(function(p){var L=p+(W?-a:a);return $e(L)})}),_e()):q(function(p){var L=p+a;return L})}),yt=Nt(k,xe,Le,Ve,je,!!l,bt),Ge=H(yt,2),ke=Ge[0],Ze=Ge[1];Ft(k,V,function(a,r,p,L){var C=L;return pt(a,r,p)?!1:!C||!C._virtualHandled?(C&&(C._virtualHandled=!0),ke({preventDefault:function(){},deltaX:a?r:0,deltaY:a?0:r}),!0):!1}),Yt(A,V,function(a){q(function(r){return r+a})}),Re(function(){function a(p){var L=xe&&p.detail<0,C=Le&&p.detail>0;k&&!L&&!C&&p.preventDefault()}var r=V.current;return r.addEventListener("wheel",ke,{passive:!1}),r.addEventListener("DOMMouseScroll",Ze,{passive:!0}),r.addEventListener("MozMousePixelScroll",a,{passive:!1}),function(){r.removeEventListener("wheel",ke),r.removeEventListener("DOMMouseScroll",Ze),r.removeEventListener("MozMousePixelScroll",a)}},[k,xe,Le]),Re(function(){if(l){var a=$e(T);ie(a),_e({x:a})}},[J.width,l]);var qe=function(){var r,p;(r=Ae.current)===null||r===void 0||r.delayHidden(),(p=Ke.current)===null||p===void 0||p.delayHidden()},Je=Wt(V,D,O,s,I,function(){return te(!0)},q,qe);t.useImperativeHandle(c,function(){return{nativeElement:ve.current,getScrollInfo:Oe,scrollTo:function(r){function p(L){return L&&Ye(L)==="object"&&("left"in L||"top"in L)}p(r)?(r.left!==void 0&&ie($e(r.left)),Je(r.top)):Je(r)}}}),Re(function(){if(w){var a=D.slice(fe,me+1);w(a,D)}},[fe,me,D]);var Et=$t(D,I,O,s),wt=P==null?void 0:P({start:fe,end:me,virtual:A,offsetX:T,offsetY:Xe,rtl:W,getSize:Et}),xt=Ht(D,fe,me,l,T,ee,n,Ce),Se=null;S&&(Se=B(N({},M?"height":"maxHeight",S),jt),k&&(Se.overflowY="hidden",l&&(Se.overflowX="hidden"),Te&&(Se.pointerEvents="none")));var Qe={};return W&&(Qe.dir="rtl"),t.createElement("div",st({ref:ve,style:B(B({},v),{},{position:"relative"}),className:ae},Qe,G),t.createElement(ct,{onResize:mt},t.createElement(b,{className:"".concat(i,"-holder"),style:Se,ref:V,onScroll:Mt,onMouseEnter:qe},t.createElement(ft,{prefixCls:i,height:ue,offsetX:T,offsetY:Xe,scrollWidth:l,onInnerResize:te,ref:le,innerProps:F,rtl:W,extra:wt},xt))),A&&ue>S&&t.createElement(ut,{ref:Ae,prefixCls:i,scrollOffset:_,scrollRange:ue,rtl:W,onScroll:Ue,onStartMove:be,onStopMove:he,spinSize:gt,containerSize:J.height,style:x==null?void 0:x.verticalScrollBar,thumbStyle:x==null?void 0:x.verticalScrollBarThumb,showScrollBar:X}),A&&l>J.width&&t.createElement(ut,{ref:Ke,prefixCls:i,scrollOffset:T,scrollRange:l,rtl:W,onScroll:Ue,onStartMove:be,onStopMove:he,spinSize:St,containerSize:J.width,horizontal:!0,style:x==null?void 0:x.horizontalScrollBar,thumbStyle:x==null?void 0:x.horizontalScrollBarThumb,showScrollBar:X}))}var Gt=t.forwardRef(Ut);Gt.displayName="List";export{Gt as L};
//# sourceMappingURL=rc-virtual-list-DwKUOcNr.js.map
