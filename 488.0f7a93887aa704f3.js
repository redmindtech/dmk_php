"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[488],{5488:(C,g,s)=>{s.r(g),s.d(g,{MiscDemoModule:()=>W});var i=s(9808),m=s(1247),a=s(2382),f=s(590),n=s(4893),y=s(1491),v=s(1424);let b=(()=>{class t{constructor(e,r,p){this.fb=e,this.dataService=r,this.router=p,this.rq=[],this.rq_form=[]}toggle5(e){this.customer=[];for(const r in this.ApiService.requestTable)this.customer.push(this.ApiService.requestTable[r]);this.customer.pop()}ngOnInit(){console.log(this.dataService.requestTable),this.customer=[];for(const e in this.dataService.requestTable)this.customer.push(this.dataService.requestTable[e]),this.dataService.requestTable=this.customer,this.reqform=new a.cw({name:new a.NI(this.customer[0].name),user_id:new a.NI(this.customer[0].id),email:new a.NI(this.customer[0].email),applied_role:new a.NI(this.customer[0].applied_role),new_designation:new a.NI(null,a.kI.required),reason:new a.NI(null,a.kI.required)})}request_form(e){console.log(e),this.ApiService.request_form(e);for(const r in this.ApiService.request_form)this.rq.push(this.ApiService.request_form[r])}getrequest(){this.ApiService.request_admin()}postdata(e){console.log(e),(e.status="valid")?this.dataService.rq_form(e.value.name,e.value.user_id,e.value.email,e.value.new_designation,e.value.applied_role,e.value.reason).pipe((0,f.P)()).subscribe(r=>{console.log(e.value.name,e.value.user_id,e.value.email,e.value.new_designation,e.value.applied_role,e.value.reason),alert("Request has been created successfully!"),e.reset(),this.router.navigate(["uikit/formlayout"])},r=>{console.log(r)}):alert("Please enter the valid details")}get email(){return this.reqform.get("email")}get user_id(){return this.reqform.get("user_id")}get name(){return this.reqform.get("name")}get new_designation(){return this.reqform.get("new_designation")}get applied_role(){return this.reqform.get(" applied_role")}get reason(){return this.reqform.get("reason")}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(a.qu),n.Y36(y.s),n.Y36(m.F0))},t.\u0275cmp=n.Xpm({type:t,selectors:[["ng-component"]],decls:35,vars:1,consts:[[2,"background-image","linear-gradient(to right, #0e24b1, #0042c6, #005cd8, #0075e8, hsl(208, 93%, 52%))"],[1,"text-center",2,"color","white"],["src","assets/demo/images/dmklogo.png","alt","...","width","100px",2,"margin-top","60px","margin-bottom","-20px"],[2,"margin","20px","padding-bottom","30px"],[1,"col-12","md:col-6",2,"padding-left","300px"],[1,"card","p-fluid"],[1,"text-center"],[1,"h4","text-gray-900","mb-4"],["autocomplete","off",1,"request-form",3,"formGroup","ngSubmit"],[1,"field","grid"],[1,"col-6","md:col-10"],["pInputText","","type","text","name","name","formControlName","name","placeholder"," Name / \u0baa\u0bc6\u0baf\u0bb0\u0bcd"],[1,"col-6","md:col-6"],["pInputText","","type","text","name","user_id","formControlName","user_id","placeholder","user_id "],["pInputText","","type","text","name","email","formControlName","email","placeholder","email "],["pInputText","","type","text","name","applied_role","formControlName","applied_role","placeholder","Old Designation "],["pInputText","","type","text","name","new_designation","formControlName","new_designation","placeholder","New Designation "],["pInputText","","type","text","name","reason","formControlName","reason","placeholder","Reason "],[1,"col-3","md:col-3"]],template:function(e,r){1&e&&(n.TgZ(0,"div",0)(1,"h2",1),n._UZ(2,"img",2),n.TgZ(3,"span",3),n._uU(4,"DMK Engineers Wing"),n.qZA()(),n.TgZ(5,"div",4)(6,"div",5)(7,"div",6)(8,"h1",7),n._uU(9,"request form"),n.qZA()(),n.TgZ(10,"form",8),n.NdJ("ngSubmit",function(){return r.postdata(r.reqform)}),n.TgZ(11,"div",9)(12,"div",10),n._UZ(13,"input",11),n.qZA()(),n.TgZ(14,"div",9)(15,"div",12),n._UZ(16,"input",13),n.qZA()(),n.TgZ(17,"div",9)(18,"div",12),n._UZ(19,"input",14),n.qZA()(),n.TgZ(20,"div",9)(21,"div",12),n._UZ(22,"input",15),n.qZA()(),n.TgZ(23,"div",9)(24,"div",12),n._UZ(25,"input",16),n.qZA()(),n.TgZ(26,"div",9)(27,"div",12),n._UZ(28,"input",17),n.qZA()(),n.TgZ(29,"div",9),n._UZ(30,"div",18),n.TgZ(31,"div",12)(32,"button"),n._uU(33,"Request apply"),n.qZA()(),n._UZ(34,"div",18),n.qZA()()()()()),2&e&&(n.xp6(10),n.Q6J("formGroup",r.reqform))},dependencies:[a._Y,a.Fj,a.JJ,a.JL,v.o,a.sg,a.u],encapsulation:2}),t})(),l=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[m.Bz.forChild([{path:"",component:b}]),m.Bz]}),t})();var d=s(8185),c=s(85),u=s(2266);let x=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[i.ez]}),t})(),w=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[i.ez]}),t})();var T=s(2472);let S=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[i.ez]}),t})();var M=s(845);let B=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[i.ez]}),t})(),_=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[i.ez]}),t})();var A=s(2145),P=s(5652),I=s(2939),L=s(4036),k=s(2537),Z=s(7010),V=s(1075),H=s(6526),N=s(3407),z=s(9603),R=s(8850),Y=s(5315),j=s(8952),U=s(5223),X=s(464),F=s(3986),O=s(1874),q=s(3640);let W=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[i.ez,l,d.q,c.TX,u.F,x,w,T.o,M.hJ,S,B,_,i.ez,a.u5,A.WN,P._8,I.Gg,L.kW,k.zz,Z.L$,V.XH,H.q4,N.A,v.j,z.cc,R.$,Y.S,j.U$,U.l,X.S,F.l,O.$9,q.y,a.UX]}),t})()},8185:(C,g,s)=>{s.d(g,{k:()=>v,q:()=>b});var i=s(4893),m=s(9808);function a(l,d){if(1&l&&(i.TgZ(0,"div",5),i._uU(1),i.qZA()),2&l){const c=i.oxw(2);i.Udp("display",null!=c.value&&0!==c.value?"flex":"none"),i.xp6(1),i.AsE("",c.value,"",c.unit,"")}}function f(l,d){if(1&l&&(i.TgZ(0,"div",3),i.YNc(1,a,2,4,"div",4),i.qZA()),2&l){const c=i.oxw();i.Udp("width",c.value+"%"),i.xp6(1),i.Q6J("ngIf",c.showValue)}}function n(l,d){1&l&&(i.TgZ(0,"div",6),i._UZ(1,"div",7),i.qZA())}const y=function(l,d){return{"p-progressbar p-component":!0,"p-progressbar-determinate":l,"p-progressbar-indeterminate":d}};let v=(()=>{class l{constructor(){this.showValue=!0,this.unit="%",this.mode="determinate"}}return l.\u0275fac=function(c){return new(c||l)},l.\u0275cmp=i.Xpm({type:l,selectors:[["p-progressBar"]],hostAttrs:[1,"p-element"],inputs:{value:"value",showValue:"showValue",style:"style",styleClass:"styleClass",unit:"unit",mode:"mode"},decls:3,vars:10,consts:[["role","progressbar","aria-valuemin","0","aria-valuemax","100",3,"ngStyle","ngClass"],["class","p-progressbar-value p-progressbar-value-animate","style","display:flex",3,"width",4,"ngIf"],["class","p-progressbar-indeterminate-container",4,"ngIf"],[1,"p-progressbar-value","p-progressbar-value-animate",2,"display","flex"],["class","p-progressbar-label",3,"display",4,"ngIf"],[1,"p-progressbar-label"],[1,"p-progressbar-indeterminate-container"],[1,"p-progressbar-value","p-progressbar-value-animate"]],template:function(c,u){1&c&&(i.TgZ(0,"div",0),i.YNc(1,f,2,3,"div",1),i.YNc(2,n,2,0,"div",2),i.qZA()),2&c&&(i.Tol(u.styleClass),i.Q6J("ngStyle",u.style)("ngClass",i.WLB(7,y,"determinate"===u.mode,"indeterminate"===u.mode)),i.uIk("aria-valuenow",u.value),i.xp6(1),i.Q6J("ngIf","determinate"===u.mode),i.xp6(1),i.Q6J("ngIf","indeterminate"===u.mode))},dependencies:[m.mk,m.O5,m.PC],styles:['.p-progressbar{position:relative;overflow:hidden}.p-progressbar-determinate .p-progressbar-value{height:100%;width:0%;position:absolute;display:none;border:0 none;display:flex;align-items:center;justify-content:center;overflow:hidden}.p-progressbar-determinate .p-progressbar-label{display:inline-flex}.p-progressbar-determinate .p-progressbar-value-animate{transition:width 1s ease-in-out}.p-progressbar-indeterminate .p-progressbar-value:before{content:"";position:absolute;background-color:inherit;top:0;left:0;bottom:0;will-change:left,right;animation:p-progressbar-indeterminate-anim 2.1s cubic-bezier(.65,.815,.735,.395) infinite}.p-progressbar-indeterminate .p-progressbar-value:after{content:"";position:absolute;background-color:inherit;top:0;left:0;bottom:0;will-change:left,right;animation:p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(.165,.84,.44,1) infinite;animation-delay:1.15s}@keyframes p-progressbar-indeterminate-anim{0%{left:-35%;right:100%}60%{left:100%;right:-90%}to{left:100%;right:-90%}}@keyframes p-progressbar-indeterminate-anim-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}\n'],encapsulation:2,changeDetection:0}),l})(),b=(()=>{class l{}return l.\u0275fac=function(c){return new(c||l)},l.\u0275mod=i.oAB({type:l}),l.\u0275inj=i.cJS({imports:[m.ez]}),l})()}}]);