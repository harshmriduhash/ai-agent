import{o as a}from"./devlop-Cl3hj7Sz.js";import{n as s}from"./micromark-util-normalize-identifier-C9ANKk3v.js";u.peek=S;function F(){this.buffer()}function b(e){this.enter({type:"footnoteReference",identifier:"",label:""},e)}function k(){this.buffer()}function d(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e)}function x(e){const n=this.resume(),t=this.stack[this.stack.length-1];a(t.type==="footnoteReference"),t.identifier=s(this.sliceSerialize(e)).toLowerCase(),t.label=n}function D(e){this.exit(e)}function p(e){const n=this.resume(),t=this.stack[this.stack.length-1];a(t.type==="footnoteDefinition"),t.identifier=s(this.sliceSerialize(e)).toLowerCase(),t.label=n}function C(e){this.exit(e)}function S(){return"["}function u(e,n,t,r){const l=t.createTracker(r);let o=l.move("[^");const c=t.enter("footnoteReference"),i=t.enter("reference");return o+=l.move(t.safe(t.associationId(e),{after:"]",before:o})),i(),c(),o+=l.move("]"),o}function R(){return{enter:{gfmFootnoteCallString:F,gfmFootnoteCall:b,gfmFootnoteDefinitionLabelString:k,gfmFootnoteDefinition:d},exit:{gfmFootnoteCallString:x,gfmFootnoteCall:D,gfmFootnoteDefinitionLabelString:p,gfmFootnoteDefinition:C}}}function y(e){let n=!1;return e&&e.firstLineBlank&&(n=!0),{handlers:{footnoteDefinition:t,footnoteReference:u},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function t(r,l,o,c){const i=o.createTracker(c);let f=i.move("[^");const h=o.enter("footnoteDefinition"),g=o.enter("label");return f+=i.move(o.safe(o.associationId(r),{before:f,after:"]"})),g(),f+=i.move("]:"),r.children&&r.children.length>0&&(i.shift(4),f+=i.move((n?`
`:" ")+o.indentLines(o.containerFlow(r,i.current()),n?m:v))),h(),f}}function v(e,n,t){return n===0?e:m(e,n,t)}function m(e,n,t){return(t?"":"    ")+e}export{y as a,R as g};
//# sourceMappingURL=mdast-util-gfm-footnote-DOFKMeKV.js.map
