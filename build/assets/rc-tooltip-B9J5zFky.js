import{c as g}from"./classnames-ELZfJkp_.js";import{r as l}from"./react-CskVYjlA.js";import{c as W,b as s,e as q}from"./@babel-CJTwEOVv.js";import{T as z}from"./@rc-component-C9wQ5nzW.js";function F(o){var e=o.children,f=o.prefixCls,u=o.id,v=o.overlayInnerStyle,d=o.bodyClassName,m=o.className,c=o.style;return l.createElement("div",{className:g("".concat(f,"-content"),m),style:c},l.createElement("div",{className:g("".concat(f,"-inner"),d),id:u,role:"tooltip",style:v},typeof e=="function"?e():e))}var r={shiftX:64,adjustY:1},n={adjustX:1,shiftY:!0},t=[0,0],G={left:{points:["cr","cl"],overflow:n,offset:[-4,0],targetOffset:t},right:{points:["cl","cr"],overflow:n,offset:[4,0],targetOffset:t},top:{points:["bc","tc"],overflow:r,offset:[0,-4],targetOffset:t},bottom:{points:["tc","bc"],overflow:r,offset:[0,4],targetOffset:t},topLeft:{points:["bl","tl"],overflow:r,offset:[0,-4],targetOffset:t},leftTop:{points:["tr","tl"],overflow:n,offset:[-4,0],targetOffset:t},topRight:{points:["br","tr"],overflow:r,offset:[0,-4],targetOffset:t},rightTop:{points:["tl","tr"],overflow:n,offset:[4,0],targetOffset:t},bottomRight:{points:["tr","br"],overflow:r,offset:[0,4],targetOffset:t},rightBottom:{points:["bl","br"],overflow:n,offset:[4,0],targetOffset:t},bottomLeft:{points:["tl","bl"],overflow:r,offset:[0,4],targetOffset:t},leftBottom:{points:["br","bl"],overflow:n,offset:[-4,0],targetOffset:t}},J=["overlayClassName","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle","prefixCls","children","onVisibleChange","afterVisibleChange","transitionName","animation","motion","placement","align","destroyTooltipOnHide","defaultVisible","getTooltipContainer","overlayInnerStyle","arrowContent","overlay","id","showArrow","classNames","styles"],K=function(e,f){var u=e.overlayClassName,v=e.trigger,d=v===void 0?["hover"]:v,m=e.mouseEnterDelay,c=m===void 0?0:m,y=e.mouseLeaveDelay,x=y===void 0?.1:y,P=e.overlayStyle,p=e.prefixCls,b=p===void 0?"rc-tooltip":p,V=e.children,E=e.onVisibleChange,S=e.afterVisibleChange,_=e.transitionName,D=e.animation,$=e.motion,C=e.placement,A=C===void 0?"right":C,h=e.align,L=h===void 0?{}:h,w=e.destroyTooltipOnHide,j=w===void 0?!1:w,I=e.defaultVisible,R=e.getTooltipContainer,H=e.overlayInnerStyle;e.arrowContent;var B=e.overlay,X=e.id,N=e.showArrow,Y=N===void 0?!0:N,a=e.classNames,i=e.styles,k=W(e,J),O=l.useRef(null);l.useImperativeHandle(f,function(){return O.current});var T=s({},k);"visible"in e&&(T.popupVisible=e.visible);var M=function(){return l.createElement(F,{key:"content",prefixCls:b,id:X,bodyClassName:a==null?void 0:a.body,overlayInnerStyle:s(s({},H),i==null?void 0:i.body)},B)};return l.createElement(z,q({popupClassName:g(u,a==null?void 0:a.root),prefixCls:b,popup:M,action:d,builtinPlacements:G,popupPlacement:A,ref:O,popupAlign:L,getPopupContainer:R,onPopupVisibleChange:E,afterPopupVisibleChange:S,popupTransitionName:_,popupAnimation:D,popupMotion:$,defaultPopupVisible:I,autoDestroy:j,mouseLeaveDelay:x,popupStyle:s(s({},P),i==null?void 0:i.root),mouseEnterDelay:c,arrow:Y},T),V)};const oe=l.forwardRef(K);export{F as P,oe as T};
//# sourceMappingURL=rc-tooltip-B9J5zFky.js.map
