import{i as B,j as $,g as j,f as L,b as O,a as A,e as F}from"./@babel-CJTwEOVv.js";import{r as t}from"./react-CskVYjlA.js";import{s as K,i as T,e as V,O as C,y as X}from"./rc-util-D-V1B0B9.js";import{i as Y}from"./resize-observer-polyfill-B1PUzC5B.js";var b=t.createContext(null);function q(e){var i=e.children,r=e.onBatchResize,o=t.useRef(0),n=t.useRef([]),a=t.useContext(b),l=t.useCallback(function(d,f,u){o.current+=1;var h=o.current;n.current.push({size:d,element:f,data:u}),Promise.resolve().then(function(){h===o.current&&(r==null||r(n.current),n.current=[])}),a==null||a(d,f,u)},[r,a]);return t.createElement(b.Provider,{value:l},i)}var c=new Map;function G(e){e.forEach(function(i){var r,o=i.target;(r=c.get(o))===null||r===void 0||r.forEach(function(n){return n(o)})})}var I=new Y(G);function J(e,i){c.has(e)||(c.set(e,new Set),I.observe(e)),c.get(e).add(i)}function Q(e,i){c.has(e)&&(c.get(e).delete(i),c.get(e).size||(I.unobserve(e),c.delete(e)))}var U=function(e){B(r,e);var i=$(r);function r(){return j(this,r),i.apply(this,arguments)}return L(r,[{key:"render",value:function(){return this.props.children}}]),r}(t.Component);function Z(e,i){var r=e.children,o=e.disabled,n=t.useRef(null),a=t.useRef(null),l=t.useContext(b),d=typeof r=="function",f=d?r(n):r,u=t.useRef({width:-1,height:-1,offsetWidth:-1,offsetHeight:-1}),h=!d&&t.isValidElement(f)&&K(f),M=h?T(f):null,D=V(M,n),z=function(){var v;return C(n.current)||(n.current&&A(n.current)==="object"?C((v=n.current)===null||v===void 0?void 0:v.nativeElement):null)||C(a.current)};t.useImperativeHandle(i,function(){return z()});var E=t.useRef(e);E.current=e;var _=t.useCallback(function(s){var v=E.current,w=v.onResize,N=v.data,y=s.getBoundingClientRect(),p=y.width,m=y.height,R=s.offsetWidth,g=s.offsetHeight,x=Math.floor(p),W=Math.floor(m);if(u.current.width!==x||u.current.height!==W||u.current.offsetWidth!==R||u.current.offsetHeight!==g){var k={width:x,height:W,offsetWidth:R,offsetHeight:g};u.current=k;var P=R===Math.round(p)?p:R,S=g===Math.round(m)?m:g,H=O(O({},k),{},{offsetWidth:P,offsetHeight:S});l==null||l(H,s,N),w&&Promise.resolve().then(function(){w(H,s)})}},[]);return t.useEffect(function(){var s=z();return s&&!o&&J(s,_),function(){return Q(s,_)}},[n.current,o]),t.createElement(U,{ref:a},h?t.cloneElement(f,{ref:D}):f)}var ee=t.forwardRef(Z),re="rc-observer-key";function te(e,i){var r=e.children,o=typeof r=="function"?[r]:X(r);return o.map(function(n,a){var l=(n==null?void 0:n.key)||"".concat(re,"-").concat(a);return t.createElement(ee,F({},e,{key:l,ref:a===0?i:void 0}),n)})}var ne=t.forwardRef(te);ne.Collection=q;export{ne as R};
//# sourceMappingURL=rc-resize-observer-cfaxZLPN.js.map
