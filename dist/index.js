"use strict";var c=function(a,i){return function(){return i||a((i={exports:{}}).exports,i),i.exports}};var l=c(function(E,g){
var d=require('@stdlib/math-base-assert-is-positive-zero/dist'),k=require('@stdlib/math-base-assert-is-negative-zero/dist'),m=require('@stdlib/math-base-assert-is-nan/dist');function N(a,i,n,f){var t,u,v,o,e,r,s;if(t=i.data,u=i.accessors[0],a===1||n===0)return r=u(t,f),m(r)?NaN:r;for(e=f,s=0;s<a&&(r=u(t,e),r!==r);s++)e+=n;if(s===a)return NaN;for(o=r,v=o,s+=1,s;s<a;s++)e+=n,r=u(t,e),!m(r)&&(r<o||r===o&&k(r)?o=r:(r>v||r===v&&d(r))&&(v=r));return(v+o)/2}g.exports=N
});var q=c(function(F,y){
var P=require('@stdlib/array-base-arraylike2object/dist'),j=require('@stdlib/math-base-assert-is-positive-zero/dist'),O=require('@stdlib/math-base-assert-is-negative-zero/dist'),x=require('@stdlib/math-base-assert-is-nan/dist'),R=l();function h(a,i,n,f){var t,u,v,o,e,r;if(a<=0)return NaN;if(o=P(i),o.accessorProtocol)return R(a,o,n,f);if(a===1||n===0)return e=i[f],x(e)?NaN:e;for(v=f,r=0;r<a&&(e=i[v],e!==e);r++)v+=n;if(r===a)return NaN;for(u=e,t=u,r+=1,r;r<a;r++)v+=n,e=i[v],!x(e)&&(e<u||e===u&&O(e)?u=e:(e>t||e===t&&j(e))&&(t=e));return(t+u)/2}y.exports=h
});var p=c(function(G,b){
var w=require('@stdlib/strided-base-stride2offset/dist'),z=q();function A(a,i,n){return z(a,i,n,w(a,n))}b.exports=A
});var B=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),Z=p(),C=q();B(Z,"ndarray",C);module.exports=Z;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
