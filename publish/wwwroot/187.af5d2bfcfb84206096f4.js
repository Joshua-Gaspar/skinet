(self.webpackChunkclient=self.webpackChunkclient||[]).push([[187],{6187:(t,r,e)=>{"use strict";e.r(r),e.d(r,{OrderModule:()=>A});var i=e(8583),o=e(15),s=e(3018),Z=e(2340),n=e(1841);let c=(()=>{class t{constructor(t){this.http=t,this.baseUrl=Z.N.apiUrl}getOrdersForUser(){return this.http.get(this.baseUrl+"order")}getOrderDetailed(t){return this.http.get(this.baseUrl+"order/"+t)}}return t.\u0275fac=function(r){return new(r||t)(s.LFG(n.eN))},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var d=e(7285);function g(t,r){if(1&t&&(s.TgZ(0,"tr"),s.TgZ(1,"th",16),s.TgZ(2,"div",17),s._UZ(3,"img",18),s.TgZ(4,"div",19),s.TgZ(5,"h5",20),s.TgZ(6,"a",21),s._uU(7),s.qZA(),s.qZA(),s.TgZ(8,"span",22),s._uU(9),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(10,"td",23),s.TgZ(11,"strong"),s._uU(12),s.ALo(13,"currency"),s.qZA(),s.qZA(),s.TgZ(14,"td",24),s.TgZ(15,"strong"),s._uU(16),s.qZA(),s.qZA(),s.TgZ(17,"td",23),s.TgZ(18,"strong"),s._uU(19),s.ALo(20,"currency"),s.qZA(),s.qZA(),s.qZA()),2&t){const t=r.$implicit;s.xp6(3),s.s9C("src",t.pictureUrl,s.LSH),s.s9C("alt",t.productName),s.xp6(3),s.MGl("routerLink","/shop/",t.id,""),s.xp6(1),s.Oqu(t.productName),s.xp6(2),s.hij("Type: ",t.type,""),s.xp6(3),s.Oqu(s.lcZ(13,8,t.price)),s.xp6(4),s.Oqu(t.quantity),s.xp6(3),s.Oqu(s.lcZ(20,10,t.price*t.quantity))}}function u(t,r){if(1&t&&(s.TgZ(0,"div",2),s.TgZ(1,"div",3),s.TgZ(2,"div",4),s.TgZ(3,"div",5),s.TgZ(4,"table",6),s.TgZ(5,"thead"),s.TgZ(6,"tr"),s.TgZ(7,"th",7),s.TgZ(8,"div",8),s._uU(9,"Product"),s.qZA(),s.qZA(),s.TgZ(10,"th",7),s.TgZ(11,"div",9),s._uU(12,"Price"),s.qZA(),s.qZA(),s.TgZ(13,"th",7),s.TgZ(14,"div",9),s._uU(15,"Quantity"),s.qZA(),s.qZA(),s.TgZ(16,"th",7),s.TgZ(17,"div",9),s._uU(18,"Total"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(19,"tbody"),s.YNc(20,g,21,12,"tr",10),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(21,"div",11),s.TgZ(22,"div",12),s._uU(23," Order Summary "),s.qZA(),s.TgZ(24,"ul",13),s.TgZ(25,"li",14),s.TgZ(26,"strong",15),s._uU(27,"Order subtotal"),s.qZA(),s.TgZ(28,"strong"),s._uU(29),s.ALo(30,"currency"),s.qZA(),s.qZA(),s.TgZ(31,"li",14),s.TgZ(32,"strong",15),s._uU(33,"Shipping "),s.qZA(),s.TgZ(34,"strong"),s._uU(35),s.ALo(36,"currency"),s.qZA(),s.qZA(),s.TgZ(37,"li",14),s.TgZ(38,"strong",15),s._uU(39,"Total"),s.qZA(),s.TgZ(40,"strong"),s._uU(41),s.ALo(42,"currency"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&t){const t=s.oxw();s.xp6(20),s.Q6J("ngForOf",t.order.orderItems),s.xp6(9),s.Oqu(s.lcZ(30,4,t.order.subTotal)),s.xp6(6),s.Oqu(s.lcZ(36,6,t.order.shippingPrice)),s.xp6(6),s.Oqu(s.lcZ(42,8,t.order.total))}}let l=(()=>{class t{constructor(t,r,e){this.route=t,this.orderService=r,this.breadcrumbService=e,this.breadcrumbService.set("@OrderDetailed"," ")}ngOnInit(){this.orderService.getOrderDetailed(+this.route.snapshot.paramMap.get("id")).subscribe(t=>{this.order=t,this.breadcrumbService.set("@OrderDetailed",`Order# ${t.id} - ${t.status}`)},t=>{console.log(t)})}}return t.\u0275fac=function(r){return new(r||t)(s.Y36(o.gz),s.Y36(c),s.Y36(d.pm))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-order-detailed"]],decls:2,vars:1,consts:[[1,"container","mt-5"],["class","row",4,"ngIf"],[1,"row"],[1,"col-md-12","col-lg-7"],[1,""],[1,"table-responsive"],[1,"table"],["scope","col",1,"border-0","bg-light"],[1,"p-2","px-3","text-uppercase"],[1,"py-2","text-uppercase"],[4,"ngFor","ngForOf"],[1,"col-md-12","col-lg-5"],[1,"bg-light","px-4","py-3","text-uppercase","font-weight-bold"],[1,"list-unstyled","mb-4"],[1,"d-flex","justify-content-between","py-3","border-bottom"],[1,"text-muted"],["scope","row"],[1,"p-2"],[1,"img-fluid",2,"max-height","50px",3,"src","alt"],[1,"ml-3","d-inline-block","align-middle"],[1,"mb-0"],[1,"text-dark",3,"routerLink"],[1,"text-muted","font-weight-normal","font-italic","d-block"],[1,"align-middle"],[1,"align-middle","px-5"]],template:function(t,r){1&t&&(s.TgZ(0,"div",0),s.YNc(1,u,43,10,"div",1),s.qZA()),2&t&&(s.xp6(1),s.Q6J("ngIf",r.order))},directives:[i.O5,i.sg,o.yS],pipes:[i.H9],styles:[""]}),t})();function a(t,r){if(1&t&&(s.TgZ(0,"tr",6),s.TgZ(1,"th"),s._uU(2),s.qZA(),s.TgZ(3,"td"),s._uU(4),s.ALo(5,"date"),s.qZA(),s.TgZ(6,"td"),s._uU(7),s.ALo(8,"currency"),s.qZA(),s.TgZ(9,"td"),s._uU(10),s.qZA(),s.qZA()),2&t){const t=r.$implicit;s.MGl("routerLink","/order/",t.id,""),s.xp6(2),s.hij("# ",t.id,""),s.xp6(2),s.Oqu(s.xi3(5,5,t.orderDate,"medium")),s.xp6(3),s.Oqu(s.lcZ(8,8,t.total)),s.xp6(3),s.Oqu(t.status)}}const p=[{path:"",component:(()=>{class t{constructor(t){this.orderService=t}ngOnInit(){this.getOrders()}getOrders(){this.orderService.getOrdersForUser().subscribe(t=>{this.orders=t},t=>{console.log(t)})}}return t.\u0275fac=function(r){return new(r||t)(s.Y36(c))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-order"]],decls:16,vars:1,consts:[[1,"container","mt-5"],[1,"row"],[1,"col-12"],[1,"table","table-hover",2,"cursor","pointer"],[1,"thead-light"],[3,"routerLink",4,"ngFor","ngForOf"],[3,"routerLink"]],template:function(t,r){1&t&&(s.TgZ(0,"div",0),s.TgZ(1,"div",1),s.TgZ(2,"div",2),s.TgZ(3,"table",3),s.TgZ(4,"thead",4),s.TgZ(5,"tr"),s.TgZ(6,"th"),s._uU(7,"Order"),s.qZA(),s.TgZ(8,"th"),s._uU(9,"Date"),s.qZA(),s.TgZ(10,"th"),s._uU(11,"Total"),s.qZA(),s.TgZ(12,"th"),s._uU(13,"Status"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(14,"tbody"),s.YNc(15,a,11,10,"tr",5),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&t&&(s.xp6(15),s.Q6J("ngForOf",r.orders))},directives:[i.sg,o.rH],pipes:[i.uU,i.H9],styles:[""]}),t})()},{path:":id",component:l,data:{breadcrumb:{alias:"OrderDetailed"}}}];let q=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[o.Bz.forChild(p)],o.Bz]}),t})(),A=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[i.ez,q]]}),t})()}}]);