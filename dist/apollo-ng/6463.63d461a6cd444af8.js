"use strict";(self.webpackChunkapollo_ng=self.webpackChunkapollo_ng||[]).push([[6463],{6463:(M,m,e)=>{e.r(m),e.d(m,{TipoCursoModule:()=>w});var o=e(6814),T=e(4104),c=e(6223),f=e(707),h=e(3714),l=e(6804),y=e(4480),p=e(4055),a=e(3965),r=e(1230),v=e(6760),C=e(6651),A=e(7902),E=e(6022),b=e(3722),R=e(1494),S=e(6218),I=e(3259),z=e(3904),x=e(8007),t=e(8926),O=e(5219),Z=e(9552);const U=["filter"],F=["dt1"];function _(n,g){1&n&&(t.TgZ(0,"span",2),t._uU(1,"Tipo de Curso"),t.qZA())}function B(n,g){if(1&n){const i=t.EpF();t.TgZ(0,"div",19)(1,"div",20)(2,"span",21)(3,"input",22,23),t.NdJ("input",function(d){t.CHM(i),t.oxw();const u=t.MAs(14),P=t.oxw();return t.KtG(P.onGlobalFilter(u,d))}),t.qZA()()()()}}function H(n,g){1&n&&(t.TgZ(0,"tr")(1,"th",24)(2,"div",25),t._uU(3," Id "),t.qZA()(),t.TgZ(4,"th",24)(5,"div",25),t._uU(6," Nombre Curso "),t.qZA()(),t.TgZ(7,"th",24)(8,"div",25),t._uU(9," Fecha de Registro "),t.qZA()(),t.TgZ(10,"th",24)(11,"div",25),t._uU(12," Estado "),t.qZA()()())}function D(n,g){if(1&n&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA()()),2&n){const i=g.$implicit;t.xp6(2),t.Oqu(i.nombreInstitucion),t.xp6(2),t.Oqu(i.director),t.xp6(2),t.Oqu(i.fechaRegistro),t.xp6(2),t.Oqu(i.siglas)}}function N(n,g){1&n&&(t.TgZ(0,"tr")(1,"td",26),t._uU(2,"No se encontraron registros"),t.qZA()())}function Y(n,g){1&n&&(t.TgZ(0,"tr")(1,"td",26),t._uU(2,"Cargando registros. Por favor espere."),t.qZA()())}function G(n,g){if(1&n){const i=t.EpF();t.TgZ(0,"div",3)(1,"div",4)(2,"div",5)(3,"span",6),t._UZ(4,"i",7),t.TgZ(5,"input",8),t.NdJ("ngModelChange",function(d){t.CHM(i);const u=t.oxw();return t.KtG(u.txttipocurso=d)}),t.qZA(),t.TgZ(6,"label",9),t._uU(7,"Tipo de curso"),t.qZA()()(),t.TgZ(8,"div"),t._UZ(9,"button",10),t.qZA()()(),t.TgZ(10,"div",3)(11,"div",11)(12,"div",12)(13,"p-table",13,14),t.YNc(15,B,5,0,"ng-template",15),t.YNc(16,H,13,0,"ng-template",0),t.YNc(17,D,9,4,"ng-template",16),t.YNc(18,N,3,0,"ng-template",17),t.YNc(19,Y,3,0,"ng-template",18),t.qZA()()()()}if(2&n){const i=t.oxw();t.xp6(5),t.Q6J("ngModel",i.txttipocurso),t.xp6(8),t.Q6J("value",i.ListtipoCurso)("rows",10)("loading",i.loading)("rowHover",!0)("paginator",!0)}}let J=(()=>{class n{constructor(i){this.router=i,this.ListtipoCurso=[],this.loading=!1,this.txttipocurso=""}ngOnInit(){console.log("Datos-extraidos-de-bandeja-colegiado-PARA MIEMBRO"),this.cargaInicial()}cargaInicial(){}navigateToNuevo(){this.router.navigate(["/pl-virtual/registro-instituciones"])}onGlobalFilter(i,s){i.filterGlobal(s.target.value,"contains")}onRowSelect(i){console.log("Organo-colegaido-sect")}onRowUnselect(i){}static#t=this.\u0275fac=function(s){return new(s||n)(t.Y36(x.F0))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-tipo-curso"]],viewQuery:function(s,d){if(1&s&&(t.Gf(U,5),t.Gf(F,5)),2&s){let u;t.iGM(u=t.CRH())&&(d.filter=u.first),t.iGM(u=t.CRH())&&(d.tabledt1=u.first)}},decls:3,vars:0,consts:[["pTemplate","header"],["pTemplate","content"],[1,"text-primary","font-semibold","text-xl"],[1,"row","mb-4"],[1,"grid","p-fuid"],[1,"field","col-10"],[1,"p-float-label","p-input-icon-left","w-full"],[1,"pi","pi-user-edit"],["type","text","id","nrociclos","pInputText","",1,"w-full",3,"ngModel","ngModelChange"],["for","nrociclos"],["pButton","","label","Guardar","icon","pi pi-plus","id","btnGuardar",1,"p-button-success","mb-2",2,"margin-top","15px"],[1,"grid","p-fluid"],[1,"field","col-12"],["styleClass","p-datatable-gridlines","responsiveLayout","scroll",1,"custom-search-input",3,"value","rows","loading","rowHover","paginator"],["dt1",""],["pTemplate","caption"],["pTemplate","body"],["pTemplate","emptymessage"],["pTemplate","loadingbody"],[1,"flex","justify-content-between","flex-wrap"],[1,"flex-grow-1","mb-2","mr-2"],[1,"p-input-icon-left","w-full"],["pInputText","","type","text","placeholder","Buscar Instituci\xf3n",1,"w-full",3,"input"],["filter",""],["scope","col",2,"min-width","10rem"],[1,"flex","justify-content-between","align-items-center"],["colspan","8"]],template:function(s,d){1&s&&(t.TgZ(0,"p-panel"),t.YNc(1,_,2,0,"ng-template",0),t.YNc(2,G,20,6,"ng-template",1),t.qZA())},dependencies:[c.Fj,c.JJ,c.On,f.Hq,O.jx,h.o,r.s,Z.iA]})}return n})(),j=(()=>{class n{static#t=this.\u0275fac=function(s){return new(s||n)};static#e=this.\u0275mod=t.oAB({type:n});static#n=this.\u0275inj=t.cJS({imports:[x.Bz.forChild([{path:"",component:J}]),x.Bz]})}return n})(),w=(()=>{class n{static#t=this.\u0275fac=function(s){return new(s||n)};static#e=this.\u0275mod=t.oAB({type:n});static#n=this.\u0275inj=t.cJS({imports:[o.ez,j,c.u5,v._8,E.Xt,f.hJ,A.JH,h.j,S.A,l.KZ,y.T,p.q4,a.kW,r.Q,C.q,b.O,I.z,T.EV,Z.U$,R.n,z.D]})}return n})()},6218:(M,m,e)=>{e.d(m,{A:()=>h,g:()=>f});var o=e(8926),T=e(6814),c=e(6223);let f=(()=>{class l{el;ngModel;control;cd;autoResize;onResize=new o.vpe;filled;cachedScrollHeight;ngModelSubscription;ngControlSubscription;constructor(p,a,r,v){this.el=p,this.ngModel=a,this.control=r,this.cd=v}ngOnInit(){this.ngModel&&(this.ngModelSubscription=this.ngModel.valueChanges.subscribe(()=>{this.updateState()})),this.control&&(this.ngControlSubscription=this.control.valueChanges.subscribe(()=>{this.updateState()}))}ngAfterViewChecked(){this.updateState()}ngAfterViewInit(){this.autoResize&&this.resize(),this.updateFilledState(),this.cd.detectChanges()}onInput(p){this.updateState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length}resize(p){this.el.nativeElement.style.height="auto",this.el.nativeElement.style.height=this.el.nativeElement.scrollHeight+"px",parseFloat(this.el.nativeElement.style.height)>=parseFloat(this.el.nativeElement.style.maxHeight)?(this.el.nativeElement.style.overflowY="scroll",this.el.nativeElement.style.height=this.el.nativeElement.style.maxHeight):this.el.nativeElement.style.overflow="hidden",this.onResize.emit(p||{})}updateState(){this.updateFilledState(),this.autoResize&&this.resize()}ngOnDestroy(){this.ngModelSubscription&&this.ngModelSubscription.unsubscribe(),this.ngControlSubscription&&this.ngControlSubscription.unsubscribe()}static \u0275fac=function(a){return new(a||l)(o.Y36(o.SBq),o.Y36(c.On,8),o.Y36(c.a5,8),o.Y36(o.sBO))};static \u0275dir=o.lG2({type:l,selectors:[["","pInputTextarea",""]],hostAttrs:[1,"p-inputtextarea","p-inputtext","p-component","p-element"],hostVars:4,hostBindings:function(a,r){1&a&&o.NdJ("input",function(C){return r.onInput(C)}),2&a&&o.ekj("p-filled",r.filled)("p-inputtextarea-resizable",r.autoResize)},inputs:{autoResize:"autoResize"},outputs:{onResize:"onResize"}})}return l})(),h=(()=>{class l{static \u0275fac=function(a){return new(a||l)};static \u0275mod=o.oAB({type:l});static \u0275inj=o.cJS({imports:[T.ez]})}return l})()}}]);