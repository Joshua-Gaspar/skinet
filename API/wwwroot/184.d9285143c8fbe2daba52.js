(self.webpackChunkclient=self.webpackChunkclient||[]).push([[184],{5184:(e,t,r)=>{"use strict";r.r(t),r.d(t,{CheckoutModule:()=>Q});var o=r(8583),i=r(15),n=r(3018);function c(e,t){if(1&e&&(n.TgZ(0,"button",5),n._uU(1,"View your order"),n.qZA()),2&e){const e=n.oxw();n.MGl("routerLink","/order/",null==e.order?null:e.order.id,"")}}function s(e,t){1&e&&(n.TgZ(0,"button",6),n._uU(1,"View your orders"),n.qZA())}let a=(()=>{class e{constructor(e){this.router=e;const t=this.router.getCurrentNavigation(),r=t&&t.extras&&t.extras.state;r&&(this.order=r)}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(i.F0))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-checkout-success"]],decls:9,vars:2,consts:[[1,"container","mt-5"],[1,"fa","fa-check-circle","fa-5x",2,"color","green"],[1,"mb-4"],["class","btn btn-outline-success",3,"routerLink",4,"ngIf"],["routerLink","/order","class","btn btn-outline-success",4,"ngIf"],[1,"btn","btn-outline-success",3,"routerLink"],["routerLink","/order",1,"btn","btn-outline-success"]],template:function(e,t){1&e&&(n.TgZ(0,"div",0),n.TgZ(1,"div"),n._UZ(2,"i",1),n.qZA(),n.TgZ(3,"h2"),n._uU(4,"Thank you, Your order is confirmed "),n.qZA(),n.TgZ(5,"p",2),n._uU(6,"Your order has not shipped yet, but this is to be expected as we are not a real store!"),n.qZA(),n.YNc(7,c,2,1,"button",3),n.YNc(8,s,2,0,"button",4),n.qZA()),2&e&&(n.xp6(7),n.Q6J("ngIf",t.order),n.xp6(1),n.Q6J("ngIf",!t.order))},directives:[o.O5,i.rH],styles:[""]}),e})();var l=r(665),d=r(4878),u=r(9508),p=r(8596);function m(e,t){if(1&e){const e=n.EpF();n.TgZ(0,"li",5),n.TgZ(1,"button",6),n.NdJ("click",function(){const t=n.CHM(e).index;return n.oxw().onClick(t)}),n._uU(2),n.qZA(),n.qZA()}if(2&e){const e=t.$implicit,r=t.index,o=n.oxw();n.xp6(1),n.ekj("active",o.selectedIndex===r),n.Q6J("disabled",!0),n.xp6(1),n.hij(" ",e.label," ")}}let h=(()=>{class e extends p.B8{ngOnInit(){this.linear=this.linearModeSelected}onClick(e){this.selectedIndex=e}}return e.\u0275fac=function(){let t;return function(r){return(t||(t=n.n5z(e)))(r||e)}}(),e.\u0275cmp=n.Xpm({type:e,selectors:[["app-stepper"]],inputs:{linearModeSelected:"linearModeSelected"},features:[n._Bn([{provide:p.B8,useExisting:e}]),n.qOj],decls:5,vars:2,consts:[[1,"container"],[1,"nav","nav-pills","nav-justified"],["class","nav-item",4,"ngFor","ngForOf"],[1,""],[3,"ngTemplateOutlet"],[1,"nav-item"],[1,"nav-link","py-3","text-uppercase","font-weight-bold","btn-block",3,"disabled","click"]],template:function(e,t){1&e&&(n.TgZ(0,"div",0),n.TgZ(1,"ul",1),n.YNc(2,m,3,4,"li",2),n.qZA(),n.TgZ(3,"div",3),n.GkF(4,4),n.qZA(),n.qZA()),2&e&&(n.xp6(2),n.Q6J("ngForOf",t.steps),n.xp6(2),n.Q6J("ngTemplateOutlet",t.selected.content))},directives:[o.sg,o.tP],styles:["button.nav-link[_ngcontent-%COMP%]{background:#e9ecef;border-radius:0;border:none;color:#000}button.nav-link[_ngcontent-%COMP%]:focus{outline:none}button.nav-link.active[_ngcontent-%COMP%]:hover{color:#fff}button.nav-link.active[_ngcontent-%COMP%]:focus, button.nav-link[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:active{outline:none}"]}),e})();var g=r(9344),f=r(4015);let v=(()=>{class e{constructor(e,t){this.accountService=e,this.toastr=t}ngOnInit(){}saveUserAddress(){this.accountService.updateUserAddress(this.checkoutForm.get("addressForm").value).subscribe(e=>{this.toastr.success("Address saved"),this.checkoutForm.get("addressForm").reset(e)},e=>{this.toastr.error(e.message),console.log(e)})}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(d.B),n.Y36(g._W))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-checkout-address"]],inputs:{checkoutForm:"checkoutForm"},decls:26,vars:9,consts:[[1,"mt-4",3,"formGroup"],[1,"d-flex","justify-content-between","align-items-center"],[1,"btn","btn-outline-success","mb-3",3,"disabled","click"],["formGroupName","addressForm",1,"row"],[1,"form-group","col-6"],["formControlName","firstName",3,"label"],["formControlName","lastName",3,"label"],["formControlName","street",3,"label"],["formControlName","city",3,"label"],["formControlName","state",3,"label"],["formControlName","zipCode",3,"label"],[1,"float-none","d-flex","justify-content-between","flex-column","flex-lg-row","mb-5"],["routerLink","/basket",1,"btn","btn-outline-primary"],[1,"fa","fa-angle-left"],["cdkStepperNext","",1,"btn","btn-primary",3,"disabled"],[1,"fa","fa-angle-right"]],template:function(e,t){1&e&&(n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.TgZ(2,"h4"),n._uU(3,"Shipping Address"),n.qZA(),n.TgZ(4,"button",2),n.NdJ("click",function(){return t.saveUserAddress()}),n._uU(5," Save as default Address "),n.qZA(),n.qZA(),n.TgZ(6,"div",3),n.TgZ(7,"div",4),n._UZ(8,"app-text-input",5),n.qZA(),n.TgZ(9,"div",4),n._UZ(10,"app-text-input",6),n.qZA(),n.TgZ(11,"div",4),n._UZ(12,"app-text-input",7),n.qZA(),n.TgZ(13,"div",4),n._UZ(14,"app-text-input",8),n.qZA(),n.TgZ(15,"div",4),n._UZ(16,"app-text-input",9),n.qZA(),n.TgZ(17,"div",4),n._UZ(18,"app-text-input",10),n.qZA(),n.qZA(),n.qZA(),n.TgZ(19,"div",11),n.TgZ(20,"button",12),n.TgZ(21,"i",13),n._uU(22," Bact to Basket"),n.qZA(),n.qZA(),n.TgZ(23,"button",14),n._uU(24," Go to Delivery "),n._UZ(25,"i",15),n.qZA(),n.qZA()),2&e&&(n.Q6J("formGroup",t.checkoutForm),n.xp6(4),n.Q6J("disabled",!t.checkoutForm.get("addressForm").valid||!t.checkoutForm.get("addressForm").dirty),n.xp6(4),n.Q6J("label","First Name"),n.xp6(2),n.Q6J("label","Last Name"),n.xp6(2),n.Q6J("label","Street"),n.xp6(2),n.Q6J("label","City"),n.xp6(2),n.Q6J("label","State"),n.xp6(2),n.Q6J("label","Zipcode"),n.xp6(5),n.Q6J("disabled",t.checkoutForm.get("addressForm").invalid))},directives:[l.JL,l.sg,l.x0,f.t,l.JJ,l.u,i.rH,p.st],styles:[""]}),e})();var b=r(8002),Z=r(2340),k=r(1841);let y=(()=>{class e{constructor(e){this.http=e,this.baseUrl=Z.N.apiUrl}createOrder(e){return this.http.post(this.baseUrl+"order",e)}getDeliveryMethods(){return this.http.get(this.baseUrl+"order/deliveryMethods").pipe((0,b.U)(e=>e.sort((e,t)=>t.price-e.price)))}}return e.\u0275fac=function(t){return new(t||e)(n.LFG(k.eN))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function x(e,t){if(1&e){const e=n.EpF();n.TgZ(0,"div",9),n.TgZ(1,"input",10),n.NdJ("click",function(){const t=n.CHM(e).$implicit;return n.oxw().setShippingPrice(t)}),n.qZA(),n.TgZ(2,"label",11),n.TgZ(3,"strong"),n._uU(4),n.ALo(5,"currency"),n.qZA(),n._UZ(6,"br"),n.TgZ(7,"span",12),n._uU(8),n.qZA(),n.qZA(),n.qZA()}if(2&e){const e=t.$implicit;n.xp6(1),n.s9C("id",e.id),n.s9C("value",e.id),n.xp6(1),n.s9C("for",e.id),n.xp6(2),n.AsE("",e.shortName," - ",n.lcZ(5,6,e.price),""),n.xp6(4),n.Oqu(e.description)}}let A=(()=>{class e{constructor(e,t){this.checkoutService=e,this.basketService=t}ngOnInit(){this.checkoutService.getDeliveryMethods().subscribe(e=>{this.deliveryMethods=e},e=>{console.log(e)})}setShippingPrice(e){this.basketService.setShippingPrice(e)}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(y),n.Y36(u.v))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-checkout-delivery"]],inputs:{checkoutForm:"checkoutForm"},decls:12,vars:3,consts:[[1,"mt-4",3,"formGroup"],[1,"row","mb-3"],["formGroupName","deliveryForm",1,"row","ml-5"],["class","col-6 form-group",4,"ngFor","ngForOf"],[1,"float-none","d-flex","justify-content-between","flex-column","flex-lg-row","mb-5"],["cdkStepperPrevious","",1,"btn","btn-outline-primary"],[1,"fa","fa-angle-left"],["cdkStepperNext","",1,"btn","btn-primary",3,"disabled"],[1,"fa","fa-angle-right"],[1,"col-6","form-group"],["type","radio","formControlName","deliveryMethods",1,"custom-control-input",3,"id","value","click"],[1,"custom-control-label",3,"for"],[1,"label-description"]],template:function(e,t){1&e&&(n.TgZ(0,"div",0),n.TgZ(1,"h4",1),n._uU(2,"Choose delivery method"),n.qZA(),n.TgZ(3,"div",2),n.YNc(4,x,9,8,"div",3),n.qZA(),n.qZA(),n.TgZ(5,"div",4),n.TgZ(6,"button",5),n.TgZ(7,"i",6),n._uU(8," Bact to Address"),n.qZA(),n.qZA(),n.TgZ(9,"button",7),n._uU(10," Go to Review "),n._UZ(11,"i",8),n.qZA(),n.qZA()),2&e&&(n.Q6J("formGroup",t.checkoutForm),n.xp6(4),n.Q6J("ngForOf",t.deliveryMethods),n.xp6(5),n.Q6J("disabled",t.checkoutForm.get("deliveryForm").invalid))},directives:[l.JL,l.sg,l.x0,o.sg,p.po,p.st,l._,l.Fj,l.JJ,l.u],pipes:[o.H9],styles:[""]}),e})();var q=r(3449);let T=(()=>{class e{constructor(e,t){this.basketService=e,this.toastr=t}ngOnInit(){}createPaymentIntent(){return this.basketService.createdPaymentIntent().subscribe(e=>{this.appStepper.next()},e=>{console.log(e)})}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(u.v),n.Y36(g._W))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-checkout-review"]],inputs:{appStepper:"appStepper"},decls:9,vars:1,consts:[[1,"mt-2"],[3,"isBasket"],[1,"float-none","d-flex","justify-content-between","flex-column","flex-lg-row","mb-5"],["cdkStepperPrevious","",1,"btn","btn-outline-primary"],[1,"fa","fa-angle-left"],[1,"btn","btn-primary",3,"click"],[1,"fa","fa-angle-right"]],template:function(e,t){1&e&&(n.TgZ(0,"div",0),n._UZ(1,"app-basket-summary",1),n.qZA(),n.TgZ(2,"div",2),n.TgZ(3,"button",3),n.TgZ(4,"i",4),n._uU(5," Bact to Delivery"),n.qZA(),n.qZA(),n.TgZ(6,"button",5),n.NdJ("click",function(){return t.createPaymentIntent()}),n._uU(7," Go to Payment "),n._UZ(8,"i",6),n.qZA(),n.qZA()),2&e&&(n.xp6(1),n.Q6J("isBasket",!1))},directives:[q.b,p.po],styles:[""]}),e})();function F(e,t,r,o){return new(r||(r=Promise))(function(i,n){function c(e){try{a(o.next(e))}catch(t){n(t)}}function s(e){try{a(o.throw(e))}catch(t){n(t)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r(function(e){e(t)})).then(c,s)}a((o=o.apply(e,t||[])).next())})}const C=["cardNumber"],_=["cardExpiry"],U=["cardCvc"];function S(e,t){if(1&e&&(n.ynx(0),n.TgZ(1,"span",17),n._uU(2),n.qZA(),n.BQk()),2&e){const e=n.oxw();n.xp6(2),n.Oqu(e.cardErrors)}}function J(e,t){1&e&&n._UZ(0,"i",18)}let N=(()=>{class e{constructor(e,t,r,o){this.basketService=e,this.checkoutService=t,this.toastr=r,this.router=o,this.cardHandler=this.onChange.bind(this),this.loading=!1,this.cardNumberValid=!1,this.cardExpiryValid=!1,this.cardCvcValid=!1}ngAfterViewInit(){this.stripe=Stripe("pk_test_51Jf44bC2eUPXSDeqiw1x8yqZmm6lWcPMzycl3kYLtf2LU62vHCqfd4SJPA57mbILie7lBXZ5V9oLoxk5iUrw38Ww00f7MktMcQ");const e=this.stripe.elements();this.cardNumber=e.create("cardNumber"),this.cardNumber.mount(this.cardNumberElement.nativeElement),this.cardNumber.addEventListener("change",this.cardHandler),this.cardCvc=e.create("cardCvc"),this.cardCvc.mount(this.cardCvcElement.nativeElement),this.cardCvc.addEventListener("change",this.cardHandler),this.cardExpiry=e.create("cardExpiry"),this.cardExpiry.mount(this.cardExpiryElement.nativeElement),this.cardExpiry.addEventListener("change",this.cardHandler)}ngOnDestroy(){this.cardNumber.destroy(),this.cardCvc.destroy(),this.cardExpiry.destroy()}onChange(e){switch(console.log(e),this.cardErrors=e.error?e.error.message:null,e.elementType){case"cardNumber":this.cardNumberValid=e.complete;break;case"cardExpiry":this.cardExpiryValid=e.complete;break;case"cardCvc":this.cardCvcValid=e.complete}}submitOrder(){return F(this,void 0,void 0,function*(){this.loading=!0;const e=this.basketService.getCurrentBasketValue();try{const t=yield this.createOrder(e),r=yield this.confirmPaymentWithStripe(e);r.paymentIntent?(this.basketService.deleteBasket(e),this.router.navigate(["checkout/success"],{state:t})):this.toastr.error(r.error.message),this.loading=!1}catch(t){console.log(t),this.loading=!1}})}confirmPaymentWithStripe(e){return F(this,void 0,void 0,function*(){return this.stripe.confirmCardPayment(e.clientSecret,{payment_method:{card:this.cardNumber,billing_details:{name:this.checkoutForm.get("paymentForm").get("nameOnCard").value}}})})}createOrder(e){return F(this,void 0,void 0,function*(){const t=this.getOrderToCreated(e);return this.checkoutService.createOrder(t).toPromise()})}getOrderToCreated(e){return{basketId:e.id,deliveryMethodId:+this.checkoutForm.get("deliveryForm").get("deliveryMethods").value,shipToAddress:this.checkoutForm.get("addressForm").value}}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(u.v),n.Y36(y),n.Y36(g._W),n.Y36(i.F0))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-checkout-payment"]],viewQuery:function(e,t){if(1&e&&(n.Gf(C,7),n.Gf(_,7),n.Gf(U,7)),2&e){let e;n.iGM(e=n.CRH())&&(t.cardNumberElement=e.first),n.iGM(e=n.CRH())&&(t.cardExpiryElement=e.first),n.iGM(e=n.CRH())&&(t.cardCvcElement=e.first)}},inputs:{checkoutForm:"checkoutForm"},decls:22,vars:5,consts:[[1,"mt-4",3,"formGroup"],[1,"row"],["formGroupName","paymentForm",1,"form-group","col-12"],["formControlName","nameOnCard",3,"label"],[1,"form-group","col-6"],[1,"form-control","py-3"],["cardNumber",""],[4,"ngIf"],[1,"form-group","col-3"],["cardExpiry",""],["cardCvc",""],[1,"float-none","d-flex","justify-content-between","flex-column","flex-lg-row","mb-5"],["cdkStepperPrevious","",1,"btn","btn-outline-primary"],[1,"fa","fa-angle-left"],[1,"btn","btn-primary",3,"disabled","click"],[1,"fa","fa-angle-right"],["class","fa fa-spinner fa-spin",4,"ngIf"],[1,"text-danger"],[1,"fa","fa-spinner","fa-spin"]],template:function(e,t){1&e&&(n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.TgZ(2,"div",2),n._UZ(3,"app-text-input",3),n.qZA(),n.TgZ(4,"div",4),n._UZ(5,"div",5,6),n.YNc(7,S,3,1,"ng-container",7),n.qZA(),n.TgZ(8,"div",8),n._UZ(9,"div",5,9),n.qZA(),n.TgZ(11,"div",8),n._UZ(12,"div",5,10),n.qZA(),n.qZA(),n.qZA(),n.TgZ(14,"div",11),n.TgZ(15,"button",12),n.TgZ(16,"i",13),n._uU(17," Bact to Review"),n.qZA(),n.qZA(),n.TgZ(18,"button",14),n.NdJ("click",function(){return t.submitOrder()}),n._uU(19," Submit Order "),n._UZ(20,"i",15),n.YNc(21,J,1,0,"i",16),n.qZA(),n.qZA()),2&e&&(n.Q6J("formGroup",t.checkoutForm),n.xp6(3),n.Q6J("label","Name on card"),n.xp6(4),n.Q6J("ngIf",t.cardErrors),n.xp6(11),n.Q6J("disabled",t.loading||t.checkoutForm.get("paymentForm").invalid||!t.cardNumberValid||!t.cardCvcValid||!t.cardExpiryValid),n.xp6(3),n.Q6J("ngIf",t.loading))},directives:[l.JL,l.sg,l.x0,f.t,l.JJ,l.u,o.O5,p.po],styles:[""]}),e})();var w=r(9281);const M=[{path:"",component:(()=>{class e{constructor(e,t,r){this.fb=e,this.accountService=t,this.basketService=r}ngOnInit(){this.creatCheckoutForm(),this.getAddressFormValue(),this.getDeliveryMethodValue()}creatCheckoutForm(){this.checkoutForm=this.fb.group({addressForm:this.fb.group({firstName:[null,l.kI.required],lastName:[null,l.kI.required],street:[null,l.kI.required],city:[null,l.kI.required],state:[null,l.kI.required],zipCode:[null,l.kI.required]}),deliveryForm:this.fb.group({deliveryMethods:[null,l.kI.required]}),paymentForm:this.fb.group({nameOnCard:[null,l.kI.required]})})}getAddressFormValue(){this.accountService.getUserAddress().subscribe(e=>{e&&this.checkoutForm.get("addressForm").patchValue(e)},e=>{console.log(e)})}getDeliveryMethodValue(){const e=this.basketService.getCurrentBasketValue();null!==e.deliveryMethodId&&this.checkoutForm.get("deliveryForm").get("deliveryMethods").patchValue(e.deliveryMethodId.toString())}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(l.qu),n.Y36(d.B),n.Y36(u.v))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-checkout"]],decls:15,vars:11,consts:[[1,"container","mt-5"],[1,"row"],[1,"col-12","col-md-8"],[3,"linearModeSelected"],["appStepper",""],[3,"label","completed"],[3,"checkoutForm"],[3,"label"],[3,"appStepper"],[1,"col-12","col-md-4"]],template:function(e,t){if(1&e&&(n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.TgZ(2,"div",2),n.TgZ(3,"app-stepper",3,4),n.TgZ(5,"cdk-step",5),n._UZ(6,"app-checkout-address",6),n.qZA(),n.TgZ(7,"cdk-step",5),n._UZ(8,"app-checkout-delivery",6),n.qZA(),n.TgZ(9,"cdk-step",7),n._UZ(10,"app-checkout-review",8),n.qZA(),n.TgZ(11,"cdk-step",7),n._UZ(12,"app-checkout-payment",6),n.qZA(),n.qZA(),n.qZA(),n.TgZ(13,"div",9),n._UZ(14,"app-order-totals"),n.qZA(),n.qZA(),n.qZA()),2&e){const e=n.MAs(4);n.xp6(3),n.Q6J("linearModeSelected",!0),n.xp6(2),n.Q6J("label","Address")("completed",t.checkoutForm.get("addressForm").valid),n.xp6(1),n.Q6J("checkoutForm",t.checkoutForm),n.xp6(1),n.Q6J("label","Delivery")("completed",t.checkoutForm.get("deliveryForm").valid),n.xp6(1),n.Q6J("checkoutForm",t.checkoutForm),n.xp6(1),n.Q6J("label","Review"),n.xp6(1),n.Q6J("appStepper",e),n.xp6(1),n.Q6J("label","Payment"),n.xp6(1),n.Q6J("checkoutForm",t.checkoutForm)}},directives:[h,p.be,v,A,T,N,w.S],styles:[""]}),e})()},{path:"success",component:a}];let O=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[i.Bz.forChild(M)],i.Bz]}),e})();var I=r(4466);let Q=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[o.ez,O,I.m]]}),e})()}}]);