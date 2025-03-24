import{d as ve,_ as C,a as Ca,e as J,b as Sa}from"./@babel-CJTwEOVv.js";import{c as z}from"./classnames-ELZfJkp_.js";import{K as y,C as Ae,B as _a}from"./rc-util-D-V1B0B9.js";import{R as n,r as Pa}from"./react-CskVYjlA.js";var Ra={items_per_page:"/ page",jump_to:"Go to",jump_to_confirm:"confirm",page:"Page",prev_page:"Previous Page",next_page:"Next Page",prev_5:"Previous 5 Pages",next_5:"Next 5 Pages",prev_3:"Previous 3 Pages",next_3:"Next 3 Pages",page_size:"Page Size"},ya={items_per_page:"条/页",jump_to:"跳至",jump_to_confirm:"确定",page:"页",prev_page:"上一页",next_page:"下一页",prev_5:"向前 5 页",next_5:"向后 5 页",prev_3:"向前 3 页",next_3:"向后 3 页",page_size:"页码"},Ea=[10,20,50,100],ba=function(e){var S=e.pageSizeOptions,t=S===void 0?Ea:S,p=e.locale,k=e.changeSize,j=e.pageSize,_=e.goButton,d=e.quickGo,w=e.rootPrefixCls,h=e.disabled,l=e.buildOptionText,K=e.showSizeChanger,I=e.sizeChangerRender,T=n.useState(""),R=ve(T,2),m=R[0],A=R[1],$=function(){return!m||Number.isNaN(m)?void 0:Number(m)},ae=typeof l=="function"?l:function(o){return"".concat(o," ").concat(p.items_per_page)},fe=function(s){A(s.target.value)},G=function(s){_||m===""||(A(""),!(s.relatedTarget&&(s.relatedTarget.className.indexOf("".concat(w,"-item-link"))>=0||s.relatedTarget.className.indexOf("".concat(w,"-item"))>=0))&&(d==null||d($())))},N=function(s){m!==""&&(s.keyCode===y.ENTER||s.type==="click")&&(A(""),d==null||d($()))},te=function(){return t.some(function(s){return s.toString()===j.toString()})?t:t.concat([j]).sort(function(s,H){var de=Number.isNaN(Number(s))?0:Number(s),M=Number.isNaN(Number(H))?0:Number(H);return de-M})},g="".concat(w,"-options");if(!K&&!d)return null;var q=null,V=null,D=null;return K&&I&&(q=I({disabled:h,size:j,onSizeChange:function(s){k==null||k(Number(s))},"aria-label":p.page_size,className:"".concat(g,"-size-changer"),options:te().map(function(o){return{label:ae(o),value:o}})})),d&&(_&&(D=typeof _=="boolean"?n.createElement("button",{type:"button",onClick:N,onKeyUp:N,disabled:h,className:"".concat(g,"-quick-jumper-button")},p.jump_to_confirm):n.createElement("span",{onClick:N,onKeyUp:N},_)),V=n.createElement("div",{className:"".concat(g,"-quick-jumper")},p.jump_to,n.createElement("input",{disabled:h,type:"text",value:m,onChange:fe,onKeyUp:N,onBlur:G,"aria-label":p.page}),p.page,D)),n.createElement("li",{className:g},q,V)},ee=function(e){var S=e.rootPrefixCls,t=e.page,p=e.active,k=e.className,j=e.showTitle,_=e.onClick,d=e.onKeyPress,w=e.itemRender,h="".concat(S,"-item"),l=z(h,"".concat(h,"-").concat(t),C(C({},"".concat(h,"-active"),p),"".concat(h,"-disabled"),!t),k),K=function(){_(t)},I=function(m){d(m,_,t)},T=w(t,"page",n.createElement("a",{rel:"nofollow"},t));return T?n.createElement("li",{title:j?String(t):null,className:l,onClick:K,onKeyDown:I,tabIndex:0},T):null},za=function(e,S,t){return t};function Ge(){}function qe(E){var e=Number(E);return typeof e=="number"&&!Number.isNaN(e)&&isFinite(e)&&Math.floor(e)===e}function B(E,e,S){var t=typeof E>"u"?e:E;return Math.floor((S-1)/t)+1}var Oa=function(e){var S=e.prefixCls,t=S===void 0?"rc-pagination":S,p=e.selectPrefixCls,k=p===void 0?"rc-select":p,j=e.className,_=e.current,d=e.defaultCurrent,w=d===void 0?1:d,h=e.total,l=h===void 0?0:h,K=e.pageSize,I=e.defaultPageSize,T=I===void 0?10:I,R=e.onChange,m=R===void 0?Ge:R,A=e.hideOnSinglePage,$=e.align,ae=e.showPrevNextJumpers,fe=ae===void 0?!0:ae,G=e.showQuickJumper,N=e.showLessItems,te=e.showTitle,g=te===void 0?!0:te,q=e.onShowSizeChange,V=q===void 0?Ge:q,D=e.locale,o=D===void 0?ya:D,s=e.style,H=e.totalBoundaryShowSizeChanger,de=H===void 0?50:H,M=e.disabled,O=e.simple,xe=e.showTotal,Ce=e.showSizeChanger,De=Ce===void 0?l>de:Ce,He=e.sizeChangerRender,Le=e.pageSizeOptions,Se=e.itemRender,L=Se===void 0?za:Se,_e=e.jumpPrevIcon,Pe=e.jumpNextIcon,Qe=e.prevIcon,We=e.nextIcon,Fe=n.useRef(null),Xe=Ae(10,{value:K,defaultValue:T}),ye=ve(Xe,2),f=ye[0],Ye=ye[1],Ze=Ae(1,{value:_,defaultValue:w,postState:function(i){return Math.max(1,Math.min(i,B(void 0,f,l)))}}),Ee=ve(Ze,2),r=Ee[0],be=Ee[1],ea=n.useState(r),ze=ve(ea,2),U=ze[0],ne=ze[1];Pa.useEffect(function(){ne(r)},[r]);var ke=Math.max(1,r-(N?3:5)),je=Math.min(B(void 0,f,l),r+(N?3:5));function re(a,i){var c=a||n.createElement("button",{type:"button","aria-label":i,className:"".concat(t,"-item-link")});return typeof a=="function"&&(c=n.createElement(a,Sa({},e))),c}function we(a){var i=a.target.value,c=B(void 0,f,l),b;return i===""?b=i:Number.isNaN(Number(i))?b=U:i>=c?b=c:b=Number(i),b}function aa(a){return qe(a)&&a!==r&&qe(l)&&l>0}var ta=l>f?G:!1;function na(a){(a.keyCode===y.UP||a.keyCode===y.DOWN)&&a.preventDefault()}function Ie(a){var i=we(a);switch(i!==U&&ne(i),a.keyCode){case y.ENTER:x(i);break;case y.UP:x(i-1);break;case y.DOWN:x(i+1);break}}function ra(a){x(we(a))}function ia(a){var i=B(a,f,l),c=r>i&&i!==0?i:r;Ye(a),ne(c),V==null||V(r,a),be(c),m==null||m(c,a)}function x(a){if(aa(a)&&!M){var i=B(void 0,f,l),c=a;return a>i?c=i:a<1&&(c=1),c!==U&&ne(c),be(c),m==null||m(c,f),c}return r}var ie=r>1,le=r<B(void 0,f,l);function Re(){ie&&x(r-1)}function Oe(){le&&x(r+1)}function Be(){x(ke)}function Ke(){x(je)}function Q(a,i){if(a.key==="Enter"||a.charCode===y.ENTER||a.keyCode===y.ENTER){for(var c=arguments.length,b=new Array(c>2?c-2:0),me=2;me<c;me++)b[me-2]=arguments[me];i.apply(void 0,b)}}function la(a){Q(a,Re)}function oa(a){Q(a,Oe)}function ca(a){Q(a,Be)}function ua(a){Q(a,Ke)}function sa(a){var i=L(a,"prev",re(Qe,"prev page"));return n.isValidElement(i)?n.cloneElement(i,{disabled:!ie}):i}function ma(a){var i=L(a,"next",re(We,"next page"));return n.isValidElement(i)?n.cloneElement(i,{disabled:!le}):i}function oe(a){(a.type==="click"||a.keyCode===y.ENTER)&&x(U)}var Te=null,va=_a(e,{aria:!0,data:!0}),fa=xe&&n.createElement("li",{className:"".concat(t,"-total-text")},xe(l,[l===0?0:(r-1)*f+1,r*f>l?l:r*f])),$e=null,u=B(void 0,f,l);if(A&&l<=f)return null;var v=[],W={rootPrefixCls:t,onClick:x,onKeyPress:Q,showTitle:g,itemRender:L,page:-1},da=r-1>0?r-1:0,ga=r+1<u?r+1:u,ce=G&&G.goButton,pa=Ca(O)==="object"?O.readOnly:!O,F=ce,Ve=null;O&&(ce&&(typeof ce=="boolean"?F=n.createElement("button",{type:"button",onClick:oe,onKeyUp:oe},o.jump_to_confirm):F=n.createElement("span",{onClick:oe,onKeyUp:oe},ce),F=n.createElement("li",{title:g?"".concat(o.jump_to).concat(r,"/").concat(u):null,className:"".concat(t,"-simple-pager")},F)),Ve=n.createElement("li",{title:g?"".concat(r,"/").concat(u):null,className:"".concat(t,"-simple-pager")},pa?U:n.createElement("input",{type:"text","aria-label":o.jump_to,value:U,disabled:M,onKeyDown:na,onKeyUp:Ie,onChange:Ie,onBlur:ra,size:3}),n.createElement("span",{className:"".concat(t,"-slash")},"/"),u));var P=N?1:2;if(u<=3+P*2){u||v.push(n.createElement(ee,J({},W,{key:"noPager",page:1,className:"".concat(t,"-item-disabled")})));for(var X=1;X<=u;X+=1)v.push(n.createElement(ee,J({},W,{key:X,page:X,active:r===X})))}else{var ha=N?o.prev_3:o.prev_5,Na=N?o.next_3:o.next_5,Me=L(ke,"jump-prev",re(_e,"prev page")),Ue=L(je,"jump-next",re(Pe,"next page"));fe&&(Te=Me?n.createElement("li",{title:g?ha:null,key:"prev",onClick:Be,tabIndex:0,onKeyDown:ca,className:z("".concat(t,"-jump-prev"),C({},"".concat(t,"-jump-prev-custom-icon"),!!_e))},Me):null,$e=Ue?n.createElement("li",{title:g?Na:null,key:"next",onClick:Ke,tabIndex:0,onKeyDown:ua,className:z("".concat(t,"-jump-next"),C({},"".concat(t,"-jump-next-custom-icon"),!!Pe))},Ue):null);var ge=Math.max(1,r-P),pe=Math.min(r+P,u);r-1<=P&&(pe=1+P*2),u-r<=P&&(ge=u-P*2);for(var Y=ge;Y<=pe;Y+=1)v.push(n.createElement(ee,J({},W,{key:Y,page:Y,active:r===Y})));if(r-1>=P*2&&r!==3&&(v[0]=n.cloneElement(v[0],{className:z("".concat(t,"-item-after-jump-prev"),v[0].props.className)}),v.unshift(Te)),u-r>=P*2&&r!==u-2){var Je=v[v.length-1];v[v.length-1]=n.cloneElement(Je,{className:z("".concat(t,"-item-before-jump-next"),Je.props.className)}),v.push($e)}ge!==1&&v.unshift(n.createElement(ee,J({},W,{key:1,page:1}))),pe!==u&&v.push(n.createElement(ee,J({},W,{key:u,page:u})))}var ue=sa(da);if(ue){var he=!ie||!u;ue=n.createElement("li",{title:g?o.prev_page:null,onClick:Re,tabIndex:he?null:0,onKeyDown:la,className:z("".concat(t,"-prev"),C({},"".concat(t,"-disabled"),he)),"aria-disabled":he},ue)}var se=ma(ga);if(se){var Z,Ne;O?(Z=!le,Ne=ie?0:null):(Z=!le||!u,Ne=Z?null:0),se=n.createElement("li",{title:g?o.next_page:null,onClick:Oe,tabIndex:Ne,onKeyDown:oa,className:z("".concat(t,"-next"),C({},"".concat(t,"-disabled"),Z)),"aria-disabled":Z},se)}var xa=z(t,j,C(C(C(C(C({},"".concat(t,"-start"),$==="start"),"".concat(t,"-center"),$==="center"),"".concat(t,"-end"),$==="end"),"".concat(t,"-simple"),O),"".concat(t,"-disabled"),M));return n.createElement("ul",J({className:xa,style:s,ref:Fe},va),fa,ue,O?Ve:v,se,n.createElement(ba,{locale:o,rootPrefixCls:t,disabled:M,selectPrefixCls:k,changeSize:ia,pageSize:f,pageSizeOptions:Le,quickGo:ta?x:null,goButton:F,showSizeChanger:De,sizeChangerRender:He}))};export{Oa as P,Ra as l};
//# sourceMappingURL=rc-pagination-9S6BfaxZ.js.map
