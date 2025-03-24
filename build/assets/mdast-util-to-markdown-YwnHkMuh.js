import{l as y}from"./longest-streak-CtXnX3Xp.js";import{c as b}from"./micromark-util-classify-character-72LGz2mN.js";import{v as z}from"./unist-util-visit-C3udYUNf.js";import{t as w}from"./mdast-util-to-string-C_aolqmU.js";import{E as F}from"./unist-util-visit-parents-BzuIhZFT.js";import{p as O}from"./mdast-util-phrasing-C4Vf_nAi.js";function B(r,n,e,l){const c=e.enter("blockquote"),s=e.createTracker(l);s.move("> "),s.shift(2);const o=e.indentLines(e.containerFlow(r,s.current()),$);return c(),o}function $(r,n,e){return">"+(e?"":" ")+r}function q(r,n){return x(r,n.inConstruct,!0)&&!x(r,n.notInConstruct,!1)}function x(r,n,e){if(typeof n=="string"&&(n=[n]),!n||n.length===0)return e;let l=-1;for(;++l<n.length;)if(r.includes(n[l]))return!0;return!1}function g(r,n,e,l){let c=-1;for(;++c<e.unsafe.length;)if(e.unsafe[c].character===`
`&&q(e.stack,e.unsafe[c]))return/[ \t]/.test(l.before)?"":" ";return`\\
`}function M(r,n){return!!(n.options.fences===!1&&r.value&&!r.lang&&/[^ \r\n]/.test(r.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(r.value))}function Q(r){const n=r.options.fence||"`";if(n!=="`"&&n!=="~")throw new Error("Cannot serialize code with `"+n+"` for `options.fence`, expected `` ` `` or `~`");return n}function U(r,n,e,l){const c=Q(e),s=r.value||"",o=c==="`"?"GraveAccent":"Tilde";if(M(r,e)){const a=e.enter("codeIndented"),h=e.indentLines(s,H);return a(),h}const u=e.createTracker(l),t=c.repeat(Math.max(y(s,c)+1,3)),i=e.enter("codeFenced");let f=u.move(t);if(r.lang){const a=e.enter(`codeFencedLang${o}`);f+=u.move(e.safe(r.lang,{before:f,after:" ",encode:["`"],...u.current()})),a()}if(r.lang&&r.meta){const a=e.enter(`codeFencedMeta${o}`);f+=u.move(" "),f+=u.move(e.safe(r.meta,{before:f,after:`
`,encode:["`"],...u.current()})),a()}return f+=u.move(`
`),s&&(f+=u.move(s+`
`)),f+=u.move(t),i(),f}function H(r,n,e){return(e?"":"    ")+r}function k(r){const n=r.options.quote||'"';if(n!=='"'&&n!=="'")throw new Error("Cannot serialize title with `"+n+"` for `options.quote`, expected `\"`, or `'`");return n}function K(r,n,e,l){const c=k(e),s=c==='"'?"Quote":"Apostrophe",o=e.enter("definition");let u=e.enter("label");const t=e.createTracker(l);let i=t.move("[");return i+=t.move(e.safe(e.associationId(r),{before:i,after:"]",...t.current()})),i+=t.move("]: "),u(),!r.url||/[\0- \u007F]/.test(r.url)?(u=e.enter("destinationLiteral"),i+=t.move("<"),i+=t.move(e.safe(r.url,{before:i,after:">",...t.current()})),i+=t.move(">")):(u=e.enter("destinationRaw"),i+=t.move(e.safe(r.url,{before:i,after:r.title?" ":`
`,...t.current()}))),u(),r.title&&(u=e.enter(`title${s}`),i+=t.move(" "+c),i+=t.move(e.safe(r.title,{before:i,after:c,...t.current()})),i+=t.move(c),u()),o(),i}function D(r){const n=r.options.emphasis||"*";if(n!=="*"&&n!=="_")throw new Error("Cannot serialize emphasis with `"+n+"` for `options.emphasis`, expected `*`, or `_`");return n}function p(r){return"&#x"+r.toString(16).toUpperCase()+";"}function d(r,n,e){const l=b(r),c=b(n);return l===void 0?c===void 0?e==="_"?{inside:!0,outside:!0}:{inside:!1,outside:!1}:c===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:l===1?c===void 0?{inside:!1,outside:!1}:c===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:c===void 0?{inside:!1,outside:!1}:c===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}C.peek=G;function C(r,n,e,l){const c=D(e),s=e.enter("emphasis"),o=e.createTracker(l),u=o.move(c);let t=o.move(e.containerPhrasing(r,{after:c,before:u,...o.current()}));const i=t.charCodeAt(0),f=d(l.before.charCodeAt(l.before.length-1),i,c);f.inside&&(t=p(i)+t.slice(1));const a=t.charCodeAt(t.length-1),h=d(l.after.charCodeAt(0),a,c);h.inside&&(t=t.slice(0,-1)+p(a));const m=o.move(c);return s(),e.attentionEncodeSurroundingInfo={after:h.outside,before:f.outside},u+t+m}function G(r,n,e){return e.options.emphasis||"*"}function W(r,n){let e=!1;return z(r,function(l){if("value"in l&&/\r?\n|\r/.test(l.value)||l.type==="break")return e=!0,F}),!!((!r.depth||r.depth<3)&&w(r)&&(n.options.setext||e))}function X(r,n,e,l){const c=Math.max(Math.min(6,r.depth||1),1),s=e.createTracker(l);if(W(r,e)){const f=e.enter("headingSetext"),a=e.enter("phrasing"),h=e.containerPhrasing(r,{...s.current(),before:`
`,after:`
`});return a(),f(),h+`
`+(c===1?"=":"-").repeat(h.length-(Math.max(h.lastIndexOf("\r"),h.lastIndexOf(`
`))+1))}const o="#".repeat(c),u=e.enter("headingAtx"),t=e.enter("phrasing");s.move(o+" ");let i=e.containerPhrasing(r,{before:"# ",after:`
`,...s.current()});return/^[\t ]/.test(i)&&(i=p(i.charCodeAt(0))+i.slice(1)),i=i?o+" "+i:o,e.options.closeAtx&&(i+=" "+o),t(),u(),i}_.peek=j;function _(r){return r.value||""}function j(){return"<"}I.peek=J;function I(r,n,e,l){const c=k(e),s=c==='"'?"Quote":"Apostrophe",o=e.enter("image");let u=e.enter("label");const t=e.createTracker(l);let i=t.move("![");return i+=t.move(e.safe(r.alt,{before:i,after:"]",...t.current()})),i+=t.move("]("),u(),!r.url&&r.title||/[\0- \u007F]/.test(r.url)?(u=e.enter("destinationLiteral"),i+=t.move("<"),i+=t.move(e.safe(r.url,{before:i,after:">",...t.current()})),i+=t.move(">")):(u=e.enter("destinationRaw"),i+=t.move(e.safe(r.url,{before:i,after:r.title?" ":")",...t.current()}))),u(),r.title&&(u=e.enter(`title${s}`),i+=t.move(" "+c),i+=t.move(e.safe(r.title,{before:i,after:c,...t.current()})),i+=t.move(c),u()),i+=t.move(")"),o(),i}function J(){return"!"}A.peek=N;function A(r,n,e,l){const c=r.referenceType,s=e.enter("imageReference");let o=e.enter("label");const u=e.createTracker(l);let t=u.move("![");const i=e.safe(r.alt,{before:t,after:"]",...u.current()});t+=u.move(i+"]["),o();const f=e.stack;e.stack=[],o=e.enter("reference");const a=e.safe(e.associationId(r),{before:t,after:"]",...u.current()});return o(),e.stack=f,s(),c==="full"||!i||i!==a?t+=u.move(a+"]"):c==="shortcut"?t=t.slice(0,-1):t+=u.move("]"),t}function N(){return"!"}P.peek=V;function P(r,n,e){let l=r.value||"",c="`",s=-1;for(;new RegExp("(^|[^`])"+c+"([^`]|$)").test(l);)c+="`";for(/[^ \r\n]/.test(l)&&(/^[ \r\n]/.test(l)&&/[ \r\n]$/.test(l)||/^`|`$/.test(l))&&(l=" "+l+" ");++s<e.unsafe.length;){const o=e.unsafe[s],u=e.compilePattern(o);let t;if(o.atBreak)for(;t=u.exec(l);){let i=t.index;l.charCodeAt(i)===10&&l.charCodeAt(i-1)===13&&i--,l=l.slice(0,i)+" "+l.slice(t.index+1)}}return c+l+c}function V(){return"`"}function E(r,n){const e=w(r);return!!(!n.options.resourceLink&&r.url&&!r.title&&r.children&&r.children.length===1&&r.children[0].type==="text"&&(e===r.url||"mailto:"+e===r.url)&&/^[a-z][a-z+.-]+:/i.test(r.url)&&!/[\0- <>\u007F]/.test(r.url))}S.peek=Y;function S(r,n,e,l){const c=k(e),s=c==='"'?"Quote":"Apostrophe",o=e.createTracker(l);let u,t;if(E(r,e)){const f=e.stack;e.stack=[],u=e.enter("autolink");let a=o.move("<");return a+=o.move(e.containerPhrasing(r,{before:a,after:">",...o.current()})),a+=o.move(">"),u(),e.stack=f,a}u=e.enter("link"),t=e.enter("label");let i=o.move("[");return i+=o.move(e.containerPhrasing(r,{before:i,after:"](",...o.current()})),i+=o.move("]("),t(),!r.url&&r.title||/[\0- \u007F]/.test(r.url)?(t=e.enter("destinationLiteral"),i+=o.move("<"),i+=o.move(e.safe(r.url,{before:i,after:">",...o.current()})),i+=o.move(">")):(t=e.enter("destinationRaw"),i+=o.move(e.safe(r.url,{before:i,after:r.title?" ":")",...o.current()}))),t(),r.title&&(t=e.enter(`title${s}`),i+=o.move(" "+c),i+=o.move(e.safe(r.title,{before:i,after:c,...o.current()})),i+=o.move(c),t()),i+=o.move(")"),u(),i}function Y(r,n,e){return E(r,e)?"<":"["}T.peek=Z;function T(r,n,e,l){const c=r.referenceType,s=e.enter("linkReference");let o=e.enter("label");const u=e.createTracker(l);let t=u.move("[");const i=e.containerPhrasing(r,{before:t,after:"]",...u.current()});t+=u.move(i+"]["),o();const f=e.stack;e.stack=[],o=e.enter("reference");const a=e.safe(e.associationId(r),{before:t,after:"]",...u.current()});return o(),e.stack=f,s(),c==="full"||!i||i!==a?t+=u.move(a+"]"):c==="shortcut"?t=t.slice(0,-1):t+=u.move("]"),t}function Z(){return"["}function v(r){const n=r.options.bullet||"*";if(n!=="*"&&n!=="+"&&n!=="-")throw new Error("Cannot serialize items with `"+n+"` for `options.bullet`, expected `*`, `+`, or `-`");return n}function ee(r){const n=v(r),e=r.options.bulletOther;if(!e)return n==="*"?"-":"*";if(e!=="*"&&e!=="+"&&e!=="-")throw new Error("Cannot serialize items with `"+e+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(e===n)throw new Error("Expected `bullet` (`"+n+"`) and `bulletOther` (`"+e+"`) to be different");return e}function re(r){const n=r.options.bulletOrdered||".";if(n!=="."&&n!==")")throw new Error("Cannot serialize items with `"+n+"` for `options.bulletOrdered`, expected `.` or `)`");return n}function R(r){const n=r.options.rule||"*";if(n!=="*"&&n!=="-"&&n!=="_")throw new Error("Cannot serialize rules with `"+n+"` for `options.rule`, expected `*`, `-`, or `_`");return n}function ne(r,n,e,l){const c=e.enter("list"),s=e.bulletCurrent;let o=r.ordered?re(e):v(e);const u=r.ordered?o==="."?")":".":ee(e);let t=n&&e.bulletLastUsed?o===e.bulletLastUsed:!1;if(!r.ordered){const f=r.children?r.children[0]:void 0;if((o==="*"||o==="-")&&f&&(!f.children||!f.children[0])&&e.stack[e.stack.length-1]==="list"&&e.stack[e.stack.length-2]==="listItem"&&e.stack[e.stack.length-3]==="list"&&e.stack[e.stack.length-4]==="listItem"&&e.indexStack[e.indexStack.length-1]===0&&e.indexStack[e.indexStack.length-2]===0&&e.indexStack[e.indexStack.length-3]===0&&(t=!0),R(e)===o&&f){let a=-1;for(;++a<r.children.length;){const h=r.children[a];if(h&&h.type==="listItem"&&h.children&&h.children[0]&&h.children[0].type==="thematicBreak"){t=!0;break}}}}t&&(o=u),e.bulletCurrent=o;const i=e.containerFlow(r,l);return e.bulletLastUsed=o,e.bulletCurrent=s,c(),i}function te(r){const n=r.options.listItemIndent||"one";if(n!=="tab"&&n!=="one"&&n!=="mixed")throw new Error("Cannot serialize items with `"+n+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return n}function ie(r,n,e,l){const c=te(e);let s=e.bulletCurrent||v(e);n&&n.type==="list"&&n.ordered&&(s=(typeof n.start=="number"&&n.start>-1?n.start:1)+(e.options.incrementListMarker===!1?0:n.children.indexOf(r))+s);let o=s.length+1;(c==="tab"||c==="mixed"&&(n&&n.type==="list"&&n.spread||r.spread))&&(o=Math.ceil(o/4)*4);const u=e.createTracker(l);u.move(s+" ".repeat(o-s.length)),u.shift(o);const t=e.enter("listItem"),i=e.indentLines(e.containerFlow(r,u.current()),f);return t(),i;function f(a,h,m){return h?(m?"":" ".repeat(o))+a:(m?s:s+" ".repeat(o-s.length))+a}}function oe(r,n,e,l){const c=e.enter("paragraph"),s=e.enter("phrasing"),o=e.containerPhrasing(r,l);return s(),c(),o}function ce(r,n,e,l){return(r.children.some(function(o){return O(o)})?e.containerPhrasing:e.containerFlow).call(e,r,l)}function le(r){const n=r.options.strong||"*";if(n!=="*"&&n!=="_")throw new Error("Cannot serialize strong with `"+n+"` for `options.strong`, expected `*`, or `_`");return n}L.peek=ue;function L(r,n,e,l){const c=le(e),s=e.enter("strong"),o=e.createTracker(l),u=o.move(c+c);let t=o.move(e.containerPhrasing(r,{after:c,before:u,...o.current()}));const i=t.charCodeAt(0),f=d(l.before.charCodeAt(l.before.length-1),i,c);f.inside&&(t=p(i)+t.slice(1));const a=t.charCodeAt(t.length-1),h=d(l.after.charCodeAt(0),a,c);h.inside&&(t=t.slice(0,-1)+p(a));const m=o.move(c+c);return s(),e.attentionEncodeSurroundingInfo={after:h.outside,before:f.outside},u+t+m}function ue(r,n,e){return e.options.strong||"*"}function se(r,n,e,l){return e.safe(r.value,l)}function fe(r){const n=r.options.ruleRepetition||3;if(n<3)throw new Error("Cannot serialize rules with repetition `"+n+"` for `options.ruleRepetition`, expected `3` or more");return n}function ae(r,n,e){const l=(R(e)+(e.options.ruleSpaces?" ":"")).repeat(fe(e));return e.options.ruleSpaces?l.slice(0,-1):l}const be={blockquote:B,break:g,code:U,definition:K,emphasis:C,hardBreak:g,heading:X,html:_,image:I,imageReference:A,inlineCode:P,link:S,linkReference:T,list:ne,listItem:ie,paragraph:oe,root:ce,strong:L,text:se,thematicBreak:ae};export{be as h};
//# sourceMappingURL=mdast-util-to-markdown-YwnHkMuh.js.map
