var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var o={id:e,exports:{}};return n[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequired7c6=r);var o=r("iQIUW");let i,u;function l(e,n){return new Promise(((t,r)=>{const o=Math.random()>.3;setTimeout((()=>{o?t(`✅ Fulfilled promise ${e} in ${n}ms`):r(`❌ Rejected promise ${e} in ${n}ms`)}),n)}))}function s(e){o.Notify.success(e)}function f(e){o.Notify.failure(e)}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();const n=e.currentTarget,t=Number(n.elements.amount.value),r=Number(n.elements.delay.value),o=Number(n.elements.step.value);for(i=r,u=1;u<=t;u++)l(u,i).then(s).catch(f),i+=o}));
//# sourceMappingURL=03-promises.1b153a56.js.map
