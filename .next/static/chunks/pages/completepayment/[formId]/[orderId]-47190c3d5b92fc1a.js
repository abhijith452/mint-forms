(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[939],{37346:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/completepayment/[formId]/[orderId]",function(){return n(11503)}])},27698:function(e,r,n){"use strict";n.d(r,{Z:function(){return o}});var t=n(85893),a=n(67294);function o(e){var r=e.setError,n=e.msg,o=(0,a.useState)(!0),s=o[0],c=o[1];(0,a.useEffect)((function(){setTimeout((function(){c(!1)}),5e3)}));return(0,t.jsxs)("div",{className:"errorBox",style:{animation:"".concat(s?"fadeIn":"fadeOut"," 200ms ease-in-out")},onAnimationEnd:function(){s||r(!1)},children:[(0,t.jsxs)("span",{children:[(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",fill:"white",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-x-circle",viewBox:"0 0 24 24",children:[(0,t.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,t.jsx)("path",{d:"M15 9L9 15"}),(0,t.jsx)("path",{d:"M9 9L15 15"})]}),"\xa0Error\xa0:"]}),(0,t.jsx)("p",{children:String(n)})]})}},36248:function(e,r,n){"use strict";n.d(r,{Z:function(){return s}});var t=n(85893),a=n(23469),o=n.n(a);function s(e){return(0,t.jsx)("div",{className:o().loader,children:(0,t.jsx)("span",{className:o().span})})}},11503:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return y}});var t=n(47568),a=n(34051),o=n.n(a),s=n(85893),c=n(9669),i=n.n(c),u=n(36248),d=n(67294),p=n(27698),l=n(11163),f=n(27837);function y(){var e=(0,l.useRouter)(),r=(0,d.useState)(!1),n=r[0],a=r[1],c=(0,d.useState)(!1),y=c[0],m=c[1],h=(0,d.useState)(!1),_=h[0],v=h[1],x=(0,d.useState)(!1),w=x[0],k=x[1];function j(e,r){return I.apply(this,arguments)}function I(){return I=(0,t.Z)(o().mark((function r(n,s){var c,u;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,f.Z)("https://checkout.razorpay.com/v1/checkout.js");case 2:if(r.sent){r.next=6;break}return alert("Razorpay SDK failed to load. Are you online?"),r.abrupt("return");case 6:c={key:n.key,currency:n.currency,amount:String(n.amount),order_id:n.id,name:"Indicon 2022",description:"Thank you for registering",handler:function(){var r=(0,t.Z)(o().mark((function r(n){return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i().post("/api/pay/razorpay/verify?formId=".concat(e.query.formId,"&orderId=").concat(n.razorpay_order_id),n);case 3:e.push("/confirmation/".concat(n.razorpay_order_id)),r.next=11;break;case 6:r.prev=6,r.t0=r.catch(0),m(!0),k(void 0!==r.t0.response?r.t0.response.data.error:r.t0),a(!1);case 11:case"end":return r.stop()}}),r,null,[[0,6]])})));return function(e){return r.apply(this,arguments)}}(),prefill:{name:"".concat(s.name),email:s.email,contact:"USD"===n.amount.currency?"":"+91".concat(s.phone)}},(u=new window.Razorpay(c)).open(),u.on("payment.failed",function(){var r=(0,t.Z)(o().mark((function r(n){return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i().post("/api/pay/razorpay/failed?formId=".concat(e.query.formId),n.error);case 3:e.push("/confirmation/".concat(e.query.formId,"/").concat(n.error.metadata.order_id)),u.close(),r.next=12;break;case 7:r.prev=7,r.t0=r.catch(0),m(!0),k(void 0!==r.t0.response?r.t0.response.data.error:r.t0),a(!1);case 12:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}());case 10:case"end":return r.stop()}}),r)}))),I.apply(this,arguments)}return(0,d.useEffect)((function(){function r(){return(r=(0,t.Z)(o().mark((function r(){var n;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i().get("/api/pay/razorpay/orderDetails?orderId=".concat(e.query.orderId,"&formId=").concat(e.query.formId));case 3:n=r.sent,console.log(n),"paid"!==n.data.status?j(n.data,n.data.userDetails):v(!0),r.next=13;break;case 8:r.prev=8,r.t0=r.catch(0),m(!0),k(void 0!==r.t0.response?r.t0.response.data.error:r.t0),a(!1);case 13:case"end":return r.stop()}}),r,null,[[0,8]])})))).apply(this,arguments)}void 0!==e.query.orderId&&function(){r.apply(this,arguments)}()}),[e.query.orderId]),(0,s.jsxs)("div",{children:[y?(0,s.jsx)(p.Z,{setError:m,msg:w}):null,n?(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(u.Z,{msg:"Don't refresh this page. Redirecting to payment processing service ..."})}):null,_?(0,s.jsx)("div",{style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%,-50%)"},children:(0,s.jsx)("p",{children:"Payment already made"})}):null]})}},27837:function(e,r){"use strict";r.Z=function(e){return new Promise((function(r){var n=document.createElement("script");n.src=e,n.onload=function(){r(!0)},n.onerror=function(){r(!1)},document.body.appendChild(n)}))}},23469:function(e){e.exports={loader:"styles_loader__U57It","loader-5-1":"styles_loader-5-1__UPnjs","loader-5-2":"styles_loader-5-2__TF7p8","loader-5-3":"styles_loader-5-3__OIQYu",span:"styles_span__DF1VN","loader-5-4":"styles_loader-5-4__niyGH","loader-5-5":"styles_loader-5-5__oocD_"}}},function(e){e.O(0,[48,774,888,179],(function(){return r=37346,e(e.s=r);var r}));var r=e.O();_N_E=r}]);