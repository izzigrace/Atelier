"use strict";(self.webpackChunkatelier=self.webpackChunkatelier||[]).push([[322],{6636:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(5466),i=t(3823);function o(e){var n,t=e.imageUpload;return(0,r.useEffect)((function(){n=window.cloudinary.createUploadWidget({cloudName:"space-invaders",uploadPreset:"Atelier-space-invaders"},(function(e,n){!e&&n&&"success"===n.event&&(console.log("Done! Here is the image info: ",n.info),t(n.info.url))})),document.getElementById("upload_widget").addEventListener("click",(function(){n.open()}),!1)}),[]),(0,i.jsx)("button",{type:"button",id:"upload_widget",children:"Upload"})}},6656:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(5466),i=t(1225),o=t(3823);function a(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function l(e){var n,t,l=e.photos,c=(n=(0,r.useState)(!0),t=2,function(e){if(Array.isArray(e))return e}(n)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,o=[],a=!0,l=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);a=!0);}catch(e){l=!0,i=e}finally{try{a||null==t.return||t.return()}finally{if(l)throw i}}return o}}(n,t)||function(e,n){if(e){if("string"==typeof e)return a(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?a(e,n):void 0}}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),s=c[0],u=c[1];return(0,o.jsx)("div",{children:s?(0,o.jsx)("img",{src:l.url,alt:"imageOfLa",width:"100",height:"70",onClick:function(){return u(!1)}}):(0,o.jsx)(i.a,{src:l.url,alt:"imageOfLa",onClick:function(){return u(!0)}})})}},8322:(e,n,t)=>{t.r(n),t.d(n,{default:()=>un});var r,i,o,a,l,c,s,u,d,p,f,m,h,x,g,y,v,b,j,w,S,O,A,P,C,k,Z,F,I,E,R,_,z=t(5466),T=t(6116),L=t(4559),N=t.n(L),U=t(3592),D=t(8549);function M(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var q=D.ZP.div(r||(r=M(["\n  display: flex;\n  justify-content: center;\n  margin: 0 auto;\n  max-width: 85vw\n  // @media (min-width: 768px) {\n  //   // max-width: 600px;\n  //   // margin-right: 100px;\n  // }\n  // @media (max-width: 375px) {\n  // }\n"]))),B=D.ZP.div(i||(i=M(["\n  margin-bottom: 10px;\n  margin-top: 20px;\n  @media (max-width: 400px) {\n    width: 85vw;\n  }\n"]))),$=D.ZP.button(o||(o=M(["\n  // padding: 0;\n  // border: 4px black;\n  // background: none;\n  // text-decoration: underline;\n  // cursor: pointer;\n  // font-size: 15px;\n  // margin-left: 15px;\n  // margin-right: 15px;\n\n  // padding-left: 1.5rem;\n  // padding-right: 1.5rem;\n  font-family: 'Oswald', sans-serif;\n  font-weight: 200;\n  height: 30px;\n  background-color: white;\n  font-size: 18px;\n  cursor: pointer;\n  margin-right: 2.5px;\n  margin-left: 2.5px;\n\n  &:hover {\n    background-color: #99AEAD;\n  }\n  @media (max-width: 400px) {\n    margin-left: 30px;\n  }\n"]))),H=D.ZP.div(a||(a=M(["\n  height: 12px;\n  width: 180px;\n  border-radius: 10px;\n  background-color: rgb(210, 210, 210);\n  margin: 10px;\n  position: relative;\n  bottom: 4px;\n  .percentagefill {\n    height: 100%;\n    border-radius: 10px;\n    background-color: #5AC856;\n    text-align: right;\n    padding: 0;\n  }\n  .percentagefill-opened {\n    height: 100%;\n    border-radius: 10px;\n    background-color: #FE8214;\n    text-align: right;\n    padding: 0;\n  }\n"]))),W=D.ZP.div(l||(l=M(["\n  display: flex;\n  flex-direction: row;\n  width: 340px;\n  cursor: pointer;\n  &:hover .percentagefill {\n    background-color: #E0EF5D;\n  }\n"]))),Y=D.ZP.span(c||(c=M(["\n  text-decoration: underline;\n"]))),G=D.ZP.div(s||(s=M(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  column-gap: 2px;\n  width: 214px;\n  grid-row: 2;\n  grid-column: 1/4;\n  position: relative;\n"]))),Q=D.ZP.div(u||(u=M(["\n  height: 9px;\n  width: 70px;\n  background-color: rgb(210, 210, 210);\n"]))),V=D.ZP.img(d||(d=M(["\n  position: absolute;\n  width: 14px;\n  top: -6px;\n  z-index: 1;\n  margin-left: -7px;\n  padding: 0;\n"]))),X=D.ZP.div(p||(p=M(["\n  display: grid;\n  position: relative;\n  width: 214px;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: 25px 10px 15px;\n  padding-bottom: 20px;\n  word-break: break-all;\n"]))),J=D.ZP.span(f||(f=M(["\n  grid-row: 3;\n  font-size: 12px;\n"]))),K=D.ZP.span(m||(m=M(["\n  grid-row: 1;\n  grid-column: 1/2;\n  font-size: 15px;\n"]))),ee=D.ZP.div(h||(h=M(["\n  display: grid;\n  width: 100%;\n  margin-bottom: 130px;\n  // margin-left: 50px;\n  // margin-right: 30px;\n  @media (min-width: 501px) {\n    grid-template-columns: 40% 60%;\n    grid-gap: 50px;\n  }\n  @media (max-width: 500px) {\n    grid-template-rows: auto auto;\n  }\n"]))),ne=D.ZP.div(x||(x=M(["\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n  max-width: 100%;\n  // @media (min-width: 768px) {\n  // }\n  @media (max-width: 400px) {\n    margin-left: 20px;\n  }\n"]))),te=D.ZP.div(g||(g=M(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-right: 45px;\n"]))),re=D.ZP.div(y||(y=M(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),ie=D.ZP.button(v||(v=M(["\n  padding: 0;\n  border: none;\n  background: none;\n  text-decoration: underline;\n  font-family: 'Oswald', sans-serif;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: light;\n  opacity:0.6;\n"]))),oe=D.ZP.span(b||(b=M(["\n  padding-left: 2px;\n  font-size: 13px;\n  font-weight: light;\n  opacity: 0.6;\n"]))),ae=D.ZP.div(j||(j=M(["\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  justify-content: space-evenly;\n  margin-bottom: 0px;\n  width: 400px;\n"]))),le=D.ZP.div(w||(w=M(["\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),ce=D.ZP.input(S||(S=M(["\n  align-self: center;\n"]))),se=D.ZP.div(O||(O=M(["\n  margin-top: 16px;\n  margin: 0 auto;\n  max-width: 90%;\n  overflow-y: auto;\n  overflow-x: hidden;\n  word-wrap: break-word;\n  max-height: 500px;\n  // @media (max-width: 375px) {\n  //   width: 400px;\n  // }\n  // @media (max-width: 400px) {\n  //   margin-left: 30px;\n  // }\n"]))),ue=D.ZP.div(A||(A=M(["\n  padding: 10px;\n  border-bottom: 1px dashed;\n  margin-top: 0px;\n"]))),de=D.ZP.h3(P||(P=M(["\n  display: flex;\n  align-items: flex-start;\n  color: #007185;\n  font-weight: bold;\n  margin-left: 0px;\n  width: 60%;\n"]))),pe=D.ZP.p(C||(C=M(["\n"]))),fe=D.ZP.small(k||(k=M(["\n  display: flex;\n  flex-direction: column;\n  align-self: center;\n  margin-bottom: 10px;\n"]))),me=D.ZP.div(Z||(Z=M(["\n  display: flex;\n  justify-content: space-between;\n"]))),he=D.ZP.img(F||(F=M(["\n  width: 20px;\n"]))),xe=D.ZP.small(I||(I=M(["\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n"]))),ge=D.ZP.div(E||(E=M(["\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  margin-left: 50px;\n  margin-bottom: -40px;\n"]))),ye=D.ZP.div(R||(R=M(["\n  display: flex;\n  flex-direction: row;\n  @media (max-width: 400px) {\n    margin-left: 30px;\n  }\n"]))),ve=D.ZP.select(_||(_=M(["\n  // padding-left: 3px;\n  border-color: transparent;\n  display: flex;\n  min-height: 38px;\n  margin-left: -0.5px;\n  font-family: 'Oswald', sans-serif;\n  flex-wrap: wrap;\n  text-decoration: underline 2px;\n  font-size: 20px;\n\n  &:focus {\n    outline: none;\n  }\n"])));const be=t.p+"client/src/Components/Ratings&Reviews/assets/check-mark.0ad340259a8c140a65cdc05ef692831a.png";var je=t(1225),we=t(6656),Se=t(3823);function Oe(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var Ae={year:"numeric",month:"long",day:"numeric"};function Pe(e){var n,t,r=e.review,i=new Date(r.date).toLocaleDateString("en-US",Ae),o=(n=(0,z.useState)(r.helpfulness),t=2,function(e){if(Array.isArray(e))return e}(n)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,o=[],a=!0,l=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);a=!0);}catch(e){l=!0,i=e}finally{try{a||null==t.return||t.return()}finally{if(l)throw i}}return o}}(n,t)||function(e,n){if(e){if("string"==typeof e)return Oe(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Oe(e,n):void 0}}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=o[0],l=o[1];return(0,Se.jsxs)(ue,{children:[(0,Se.jsxs)(me,{children:[(0,Se.jsx)(U.Z,{rating:r.rating,review_id:r.review_id,styled:{marginTop:"100px"}}),(0,Se.jsx)(fe,{children:"".concat(r.reviewer_name,",  ").concat(i)})]}),r.summary.length>0?(0,Se.jsx)(de,{children:r.summary.slice(0,250)}):null,(0,Se.jsx)(pe,{children:r.body.slice(0,250)}),r.response&&(0,Se.jsx)("p",{children:r.response}),0===r.photos.length?null:(0,Se.jsxs)(je.L,{children:[" ",r.photos.map((function(e,n){return(0,Se.jsx)(we.Z,{photos:e},n)}))," "]}),(0,Se.jsxs)(xe,{children:[r.recommend&&(0,Se.jsxs)("small",{style:{marginBottom:"15px",marginTop:"-10px"},children:[(0,Se.jsx)(he,{src:be}),"I recommend this product"]}),(0,Se.jsxs)("div",{children:[(0,Se.jsx)(oe,{children:"Helpful?"})," ",(0,Se.jsx)(ie,{type:"button",onClick:function(){l(a+1),N()({method:"put",url:"/reviews/".concat(r.review_id,"/helpful")}).then((function(e){})).catch((function(e){console.log(e)}))},children:"Yes"}),(0,Se.jsx)(oe,{children:"(".concat(a,") | ")}),(0,Se.jsx)(ie,{type:"button",onClick:function(){N()({method:"put",url:"/reviews/".concat(r.review_id,"/report")}).then((function(e){})).catch((function(e){console.log(e)}))},children:"Report"})]})]})]})}var Ce=t(4170);function ke(e){var n=e.title,t=e.description,r=e.onClose;return(0,Se.jsxs)(Ce.lb,{children:[(0,Se.jsx)(Ce.iV,{onClick:function(){return r()},children:"X"}),(0,Se.jsxs)(Ce.cs,{children:[(0,Se.jsx)("h1",{children:n}),(0,Se.jsx)("p",{children:t})]})]})}function Ze(e){var n=e.isOpen,t=e.onCloseRequest,r=e.title,i=e.description,o=e.children;return n?(0,Se.jsxs)(Ce.Gk,{children:[(0,Se.jsx)(Ce.m4,{}),(0,Se.jsxs)(Ce.Mh,{children:[(0,Se.jsx)(ke,{title:r,description:i,onClose:t}),(0,Se.jsx)(Ce.bC,{children:o})]})]}):null}var Fe=t(6636),Ie=t(5642);function Ee(e){return function(e){if(Array.isArray(e))return _e(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Re(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Re(e,n){if(e){if("string"==typeof e)return _e(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_e(e,n):void 0}}function _e(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function ze(e){var n,t,r=e.onChange,i=(n=(0,z.useState)(1),t=2,function(e){if(Array.isArray(e))return e}(n)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,o=[],a=!0,l=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);a=!0);}catch(e){l=!0,i=e}finally{try{a||null==t.return||t.return()}finally{if(l)throw i}}return o}}(n,t)||Re(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=i[0],a=i[1];return(0,z.useEffect)((function(){console.log("formstarbutton"),r(o)}),[o]),(0,Se.jsx)("div",{style:{cursor:"pointer"},onClick:function(e){a(e.target.getAttribute("data-star-id"))},children:Ee(Array(5)).map((function(e,n){return(0,Se.jsx)(Ie.Z,{percent:o>=n+1?"100":"0",index:"StarButton_".concat(n),starId:n+1},"StarButton_".concat(n))}))})}function Te(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function Le(e){var n,t=e.characteristic,r=e.handleClick;return(0,Se.jsxs)("div",{children:[(0,Se.jsx)("p",{children:t.name}),(0,Se.jsx)(ae,{children:(n=Array(5),function(e){if(Array.isArray(e))return Te(e)}(n)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(n)||function(e,n){if(e){if("string"==typeof e)return Te(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Te(e,n):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e,n){return(0,Se.jsxs)(le,{children:[(0,Se.jsx)("label",{htmlFor:"".concat(t.name,"_").concat(n),children:n+1}),(0,Se.jsx)(ce,{type:"radio",id:"".concat(t.name,"_").concat(n),name:t.id,value:n+1,onClick:r,required:!0}),n+1===1?(0,Se.jsx)("label",{htmlFor:"".concat(t.name,"_").concat(n),children:t.descriptionOne}):null,n+1===5?(0,Se.jsx)("label",{htmlFor:"".concat(t.name,"_").concat(n),children:t.descriptionTwo}):null]})}))})]})}function Ne(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Ue(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Ne(Object(t),!0).forEach((function(n){De(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ne(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function De(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Me(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,o=[],a=!0,l=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);a=!0);}catch(e){l=!0,i=e}finally{try{a||null==t.return||t.return()}finally{if(l)throw i}}return o}}(e,n)||qe(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function qe(e,n){if(e){if("string"==typeof e)return Be(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Be(e,n):void 0}}function Be(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var $e={product_id:0,rating:1,summary:"",recommend:!1,body:"",name:"",email:"",photos:[],characteristics:{}};function He(e){var n=e.characteristics,t=e.product_id,r=Me((0,z.useState)($e),2),i=r[0],o=r[1],a=Me((0,z.useState)([]),2),l=a[0],c=a[1],s=Me((0,z.useState)({}),2),u=s[0],d=s[1];(0,z.useEffect)((function(){console.log("addReview"),o(Ue(Ue({},i),{},{characteristics:u}))}),[u]),(0,z.useEffect)((function(){console.log("addReviewForm1"),o(Ue(Ue({},i),{},{product_id:t}))}),[]);var p=function(e){var n=e.target,t=n.name,r=n.value;o(Ue(Ue({},i),{},De({},t,r)))},f=function(e){var n=e.target,t=n.name,r=n.value;t&&d(Ue(Ue({},u),{},De({},t,Number(r))))},m=n.map((function(e){return(0,Se.jsx)("div",{className:"text",children:(0,Se.jsx)(Le,{characteristic:e,handleClick:f})})}));return(0,Se.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=i;n.photos=l,N().post("/reviews/addreview",n).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))},children:[(0,Se.jsx)("div",{className:"button",children:(0,Se.jsx)(ze,{onChange:("rating",function(e){o(Ue(Ue({},i),{},De({},"rating",Number(e))))})})}),(0,Se.jsxs)("div",{className:"recommended",onChange:function(e){var n=e.target,t=n.name,r=n.value;o(Ue(Ue({},i),{},De({},t,Boolean(r))))},children:[(0,Se.jsx)("p",{children:"Do you recommend this product?"}),(0,Se.jsx)("input",{type:"radio",id:"rec",name:"recommend",value:!0,required:!0}),(0,Se.jsx)("label",{htmlFor:"rec",children:"Yes"}),(0,Se.jsx)("br",{}),(0,Se.jsx)("input",{type:"radio",id:"noRec",name:"recommend",value:!1,required:!0}),(0,Se.jsx)("label",{htmlFor:"noRec",children:"No"}),(0,Se.jsx)("br",{})]}),m,(0,Se.jsxs)("div",{className:"name",children:[(0,Se.jsx)("input",{type:"text",name:"name",placeholder:"Enter a name",maxLength:"100",id:"nameForm",value:i.name,onChange:p,required:!0}),i.name.length>0?(0,Se.jsxs)("label",{htmlFor:"nameForm",style:{fontSize:"10px"},children:["Characters Left: ",100-i.name.length]}):null]}),(0,Se.jsxs)("div",{className:"email",children:[(0,Se.jsx)("input",{type:"email",name:"email",placeholder:"Enter an email",maxLength:"60",value:i.email,onChange:p,required:!0}),i.email.length>0?(0,Se.jsxs)("label",{htmlFor:"nameForm",style:{fontSize:"10px"},children:["Characters Left: ",60-i.email.length]}):null]}),(0,Se.jsxs)("div",{className:"text",children:[(0,Se.jsx)("input",{type:"text",name:"summary",placeholder:"Enter a summary...",maxLength:"60",size:"50",value:i.summary,onChange:p}),i.summary.length>0?(0,Se.jsxs)("label",{htmlFor:"nameForm",style:{fontSize:"10px"},children:["Characters Left: ",60-i.summary.length]}):null]}),(0,Se.jsxs)("div",{className:"text",children:[(0,Se.jsx)("input",{type:"text",name:"body",placeholder:"Enter an review...",maxLength:"1000",size:"100",value:i.body,onChange:p,required:!0}),i.body.length>0?(0,Se.jsxs)("label",{htmlFor:"nameForm",style:{fontSize:"10px"},children:["Characters Left: ",1e3-i.body.length]}):null]}),(0,Se.jsx)(Fe.Z,{imageUpload:function(e){c((function(n){return[].concat(function(e){if(Array.isArray(e))return Be(e)}(t=n)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||qe(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[e]);var t}))}}),(0,Se.jsx)("div",{children:(0,Se.jsx)("input",{type:"submit",value:"Submit Review"})})]})}function We(e){var n=e.selectHandler,t=e.reviewCount;return(0,Se.jsxs)(ye,{children:[(0,Se.jsx)("label",{htmlFor:"sort-select",children:(0,Se.jsxs)("h3",{children:[(0,Se.jsxs)("b",{children:[t," ","reviews"]}),", sorted by"]})}),(0,Se.jsxs)(ve,{name:"sort-select",id:"sort-select",onChange:n,children:[(0,Se.jsx)("option",{value:"relevance",children:"relevance"}),(0,Se.jsx)("option",{value:"helpful",children:"helpful"}),(0,Se.jsx)("option",{value:"newest",children:"newest"})]})]})}function Ye(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function Ge(e){var n,t,r=e.reviews,i=e.loadMoreReviews,o=e.characteristics,a=e.product_id,l=e.selectHandler,c=e.reviewCount,s=(n=(0,z.useState)(!1),t=2,function(e){if(Array.isArray(e))return e}(n)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,o=[],a=!0,l=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);a=!0);}catch(e){l=!0,i=e}finally{try{a||null==t.return||t.return()}finally{if(l)throw i}}return o}}(n,t)||function(e,n){if(e){if("string"==typeof e)return Ye(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Ye(e,n):void 0}}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=s[0],d=s[1];return(0,Se.jsxs)(B,{children:[(0,Se.jsx)(We,{selectHandler:l,reviewCount:c}),(0,Se.jsxs)(se,{children:[u?(0,Se.jsx)(Ze,{title:"Add a Review",description:"A short description of the modal's contents",isOpen:u,onCloseRequest:function(){d(!1)},children:(0,Se.jsx)(He,{characteristics:o,product_id:a})}):null,r.map((function(e){return(0,Se.jsx)(Pe,{review:e},e.review_id)}))]}),(0,Se.jsxs)("div",{style:{marginTop:"15px",display:"flex"},children:[(0,Se.jsx)($,{type:"button",onClick:i,children:"More Reviews"}),(0,Se.jsx)($,{type:"button",onClick:function(){return d(!0)},children:"Add a Review"})]})]})}function Qe(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function Ve(e){var n,t,r=e.percentage,i=e.star,o=e.numStars,a=e.addFilter,l=e.deleteFilter,c=(n=(0,z.useState)(!1),t=2,function(e){if(Array.isArray(e))return e}(n)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,o=[],a=!0,l=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);a=!0);}catch(e){l=!0,i=e}finally{try{a||null==t.return||t.return()}finally{if(l)throw i}}return o}}(n,t)||function(e,n){if(e){if("string"==typeof e)return Qe(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Qe(e,n):void 0}}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),s=c[0],u=c[1];return(0,Se.jsx)("div",{children:(0,Se.jsxs)(W,{onClick:function(){u(!s),s?l(i):a(i)},children:[(0,Se.jsxs)(Y,{children:[i," star"]}),(0,Se.jsx)(H,{children:(0,Se.jsx)("div",{style:{width:"".concat(r,"%"),borderRadius:"10px"},className:s?"percentagefill-opened":"percentagefill"})}),(0,Se.jsx)("span",{children:"".concat(o," votes")})]})})}function Xe(e){var n=e.percentages,t=e.addFilter,r=e.deleteFilter,i=e.ratings;return(0,Se.jsx)(re,{children:n.map((function(e,n){return(0,Se.jsx)(Ve,{percentage:e[1],star:e[0],numStars:i[e[0]],addFilter:t,deleteFilter:r},n)}))})}const Je=t.p+"client/src/Components/Ratings&Reviews/assets/down.233460ca03dd45491ec5ec1031e22d18.png";function Ke(e){var n=e.characteristic;return(0,Se.jsxs)(X,{children:[(0,Se.jsx)(K,{children:n.name}),(0,Se.jsxs)(G,{children:[(0,Se.jsx)(Q,{}),(0,Se.jsx)(Q,{}),(0,Se.jsx)(Q,{}),(0,Se.jsx)(V,{style:{left:"".concat(n.percent,"%")},src:Je})]}),(0,Se.jsx)(J,{style:{gridColumn:"1/3",justifySelf:"start"},children:n.descriptionOne}),(0,Se.jsx)(J,{style:{gridColumn:"2/4",justifySelf:"end"},children:n.descriptionTwo})]})}function en(e){var n=e.characteristics;return(0,Se.jsx)(te,{children:n.map((function(e){return(0,Se.jsx)(Ke,{characteristic:e},e.id)}))})}function nn(e){var n=e.ratings,t=e.recommended,r=e.characteristics,i=e.reviewCount,o=e.overallRating,a=e.addFilter,l=e.deleteFilter,c=Object.keys(n).map((function(e){return[Number(e),100*(Number(n[e])/i).toFixed(2)]})).reverse(),s=Math.round(10*o)/10,u=(t.true/i*100).toFixed();return(0,Se.jsxs)(ne,{children:[(0,Se.jsx)("h2",{style:{marginBottom:"-30px",marginLeft:"50px"},children:"Ratings & Reviews"}),(0,Se.jsxs)(ge,{children:[(0,Se.jsx)("h2",{style:{fontSize:"50px",marginRight:"15px"},children:s}),(0,Se.jsx)("span",{style:{marginTop:"68px"},children:(0,Se.jsx)(U.Z,{rating:o,review_id:40344})})]}),(0,Se.jsx)("p",{style:{marginLeft:"40px",marginBottom:"15px",marginTop:"15px"},children:"".concat(u,"% of reviews recommend this product")}),(0,Se.jsx)(Xe,{percentages:c,addFilter:a,deleteFilter:l,ratings:n,style:{marginBottom:"20px"}}),(0,Se.jsx)(en,{style:{marginTop:"60px"},characteristics:r})]})}var tn=t(4061);function rn(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function on(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?rn(Object(t),!0).forEach((function(n){an(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):rn(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function an(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function ln(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,o=[],a=!0,l=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);a=!0);}catch(e){l=!0,i=e}finally{try{a||null==t.return||t.return()}finally{if(l)throw i}}return o}}(e,n)||function(e,n){if(e){if("string"==typeof e)return cn(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?cn(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function cn(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function sn(e){var n=e.product_id,t=ln((0,z.useState)([]),2),r=t[0],i=t[1],o=ln((0,z.useState)("relevant"),2),a=o[0],l=o[1],c=ln((0,z.useState)(2),2),s=c[0],u=c[1],d=ln((0,z.useState)(0),2),p=d[0],f=d[1],m=(0,z.useContext)(tn.I).setRatingAndCount,h=ln((0,z.useState)({}),2),x=h[0],g=h[1],y=ln((0,z.useState)({}),2),v=y[0],b=y[1],j=ln((0,z.useState)([]),2),w=j[0],S=j[1],O=ln((0,z.useState)(0),2),A=O[0],P=O[1],C=ln((0,z.useState)({}),2),k=C[0],Z=C[1],F=ln((0,z.useState)(!0),2),I=F[0],E=F[1],R=function(e){for(var n=0,t=0,r=1;r<6;r++)n+=Number(e[r])*r,t+=Number(e[r]);return[.25*Math.round(n/t/.25),t]};return(0,z.useEffect)((function(){console.log("Review Main"),N()({method:"get",url:"/reviews/meta",params:{product_id:n}}).then((function(e){var t=e.data,r=R(t.ratings)[0],i=R(t.ratings)[1];return T.unstable_batchedUpdates((function(){f(r.toFixed(2)),b(t.recommended),P(i),g(t.ratings),m([r,i]),S(Object.keys(t.characteristics).map((function(e){var n="",r="";switch(e){case"Fit":n="Too small",r="Too large";break;case"Length":n="Runs short",r="Runs large";break;case"Comfort":n="Uncomfortable",r="Perfect";break;case"Quality":n="Poor",r="Perfect";break;case"Size":n="A size too small",r="A size too wide";break;case"Width":n="Too narrow",r="Too wide"}return{name:e,id:t.characteristics[e].id,percent:(t.characteristics[e].value/5*100).toFixed(),descriptionOne:n,descriptionTwo:r}})))})),N()({method:"get",url:"/reviews",params:{product_id:n,sort:a,count:i}})})).then((function(e){var n=e.data;T.unstable_batchedUpdates((function(){i(n.results),E(!1)}))})).catch((function(e){return console.log(e)}))}),[a]),I?null:(0,Se.jsx)(q,{id:"review",children:(0,Se.jsxs)(ee,{children:[(0,Se.jsx)(nn,{ratings:x,overallRating:p,recommended:v,characteristics:w,reviewCount:A,addFilter:function(e){e in k||(Z((function(n){return on(on({},n),{},an({},e,e))})),u(2))},deleteFilter:function(e){if(e in k){var n=on({},k);delete n[e],Z(n),u(2)}},style:{marginLeft:"-30px"}}),(0,Se.jsx)(Ge,{reviews:0===Object.keys(k).length?r.slice(0,s):r.filter((function(e){return!!k.hasOwnProperty(e.rating)})).slice(0,s),loadMoreReviews:function(){u((function(e){return e+2}))},style:{marginRight:"100px"},characteristics:w,product_id:n,selectHandler:function(e){l(e.target.value),u(2)},reviewCount:r.length})]})})}const un=(0,z.memo)(sn)},1225:(e,n,t)=>{t.d(n,{L:()=>l,a:()=>c});var r,i,o=t(8549);function a(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var l=o.ZP.div(r||(r=a(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n  margin-top: 10px;\n  cursor: pointer;\n  div {\n    padding-right: 20px;\n    width: 100px;\n  }\n  background: white;\n"]))),c=o.ZP.img(i||(i=a(["\n  position: fixed;\n  width: 50%;\n  height: 60%;\n  z-index: 3;\n  top: 20%;\n  left: 25%;\n  cursor: pointer;\n  backdrop-filter: blur(8px);\n"])))}}]);
//# sourceMappingURL=322.bundle.js.map