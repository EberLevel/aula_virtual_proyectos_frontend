"use strict";(self.webpackChunkapollo_ng=self.webpackChunkapollo_ng||[]).push([[6888],{6888:(C,l,r)=>{r.r(l),r.d(l,{UtilitiesModule:()=>y});var c=r(6814),p=r(8007),e=r(8926),Z=r(3859);const u=function(t,n){return{backgroundColor:t,color:n}};function g(t,n){if(1&t&&(e.TgZ(0,"div",14),e._uU(1),e.qZA()),2&t){const o=e.oxw().$implicit,i=e.oxw().$implicit;e.Q6J("ngStyle",e.WLB(3,u,"var(--"+i+"-"+o,o>500?"#fff":"#000")),e.xp6(1),e.AsE(" ",i,"-",o," ")}}function f(t,n){if(1&t&&(e.TgZ(0,"div"),e.YNc(1,g,2,6,"div",13),e.qZA()),2&t){const o=n.$implicit;e.xp6(1),e.Q6J("ngIf",0!==o)}}function m(t,n){if(1&t&&(e.TgZ(0,"div",12),e.YNc(1,f,2,1,"div",11),e.qZA()),2&t){const o=e.oxw();e.xp6(1),e.Q6J("ngForOf",o.shades)}}function h(t,n){if(1&t&&(e.TgZ(0,"div")(1,"div",14),e._uU(2),e.qZA()()),2&t){const o=n.$implicit,i=e.oxw();e.xp6(1),e.Q6J("ngStyle",e.WLB(2,u,"var(--surface-"+o,i.colorScheme?o>400?"#000":"#fff":o>500?"#fff":"#000")),e.xp6(1),e.hij(" surface-",o," ")}}let T=(()=>{class t{constructor(o){this.layoutService=o,this.colors=["blue","green","yellow","cyan","pink","indigo","red","teal","orange","bluegray","purple","gray","primary"],this.shades=[0,50,100,200,300,400,500,600,700,800,900]}get colorScheme(){return"light"!==this.layoutService.config.colorScheme}static#e=this.\u0275fac=function(i){return new(i||t)(e.Y36(Z.P))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:136,vars:2,consts:[[1,"card"],[1,"text-primary","font-medium"],[1,"app-code"],[1,"w-full"],[1,"text-900","text-left","p-2"],[1,"border-bottom-1","surface-border","p-2"],[1,"font-medium"],[1,"p-2"],[1,"flex","flex-wrap"],["class","flex flex-column mr-6 mb-6",4,"ngFor","ngForOf"],[1,"flex","flex-column"],[4,"ngFor","ngForOf"],[1,"flex","flex-column","mr-6","mb-6"],["class","flex align-items-center w-19rem  p-3 font-bold",3,"ngStyle",4,"ngIf"],[1,"flex","align-items-center","w-19rem","p-3","font-bold",3,"ngStyle"]],template:function(i,s){1&i&&(e.TgZ(0,"div",0)(1,"h2"),e._uU(2,"Colors"),e.qZA(),e.TgZ(3,"p"),e._uU(4,"Each PrimeNG theme exports its own color palette."),e.qZA(),e.TgZ(5,"h4"),e._uU(6,"Getting Started"),e.qZA(),e.TgZ(7,"p"),e._uU(8,"Colors are exported as CSS variables and used with the standard "),e.TgZ(9,"span",1),e._uU(10,"var"),e.qZA(),e._uU(11," syntax e.g. "),e.TgZ(12,"span",1),e._uU(13,"var(--text-color)"),e.qZA(),e._uU(14,"."),e.qZA(),e.TgZ(15,"pre",2)(16,"code"),e._uU(17,"<span [ngStyle]=\"{color:'var(--text-color)'}\"></span>"),e.qZA()(),e.TgZ(18,"h4"),e._uU(19,"PrimeFlex Integration"),e.qZA(),e.TgZ(20,"p"),e._uU(21,"Color utility classes of PrimeFlex such as background, text and border use the exported CSS variables from the theme so PrimeFlex or PrimeBlocks are perfectly compatible with the provided themes. "),e.qZA(),e.TgZ(22,"pre",2)(23,"code"),e._uU(24,'<div class="bg-blue-500"></div>'),e.qZA()(),e.TgZ(25,"h4"),e._uU(26,"Exported Colors"),e.qZA(),e.TgZ(27,"p"),e._uU(28,"Following is the list of colors exported as CSS variables from the theme."),e.qZA(),e.TgZ(29,"div",0)(30,"table",3)(31,"thead")(32,"tr")(33,"th",4),e._uU(34,"Variable"),e.qZA(),e.TgZ(35,"th",4),e._uU(36,"Description"),e.qZA()()(),e.TgZ(37,"tbody")(38,"tr")(39,"td",5)(40,"span",6),e._uU(41,"--text-color"),e.qZA()(),e.TgZ(42,"td",5),e._uU(43,"Font text color."),e.qZA()(),e.TgZ(44,"tr")(45,"td",5)(46,"span",6),e._uU(47,"--text-color-secondary"),e.qZA()(),e.TgZ(48,"td",5),e._uU(49,"Muted font text color with a secondary level."),e.qZA()(),e.TgZ(50,"tr")(51,"td",5)(52,"span",6),e._uU(53,"--primary-color"),e.qZA()(),e.TgZ(54,"td",5),e._uU(55,"Primary color of the theme."),e.qZA()(),e.TgZ(56,"tr")(57,"td",5)(58,"span",6),e._uU(59,"--primary-color-text"),e.qZA()(),e.TgZ(60,"td",5),e._uU(61,"Text color when background is primary color."),e.qZA()(),e.TgZ(62,"tr")(63,"td",5)(64,"span",6),e._uU(65,"--font-family"),e.qZA()(),e.TgZ(66,"td",5),e._uU(67,"Font family of the theme."),e.qZA()(),e.TgZ(68,"tr")(69,"td",5)(70,"span",6),e._uU(71,"--surface-ground"),e.qZA()(),e.TgZ(72,"td",5),e._uU(73,"Base ground color."),e.qZA()(),e.TgZ(74,"tr")(75,"td",5)(76,"span",6),e._uU(77,"--surface-section"),e.qZA()(),e.TgZ(78,"td",5),e._uU(79,"Color of a section on a ground surface."),e.qZA()(),e.TgZ(80,"tr")(81,"td",5)(82,"span",6),e._uU(83,"--surface-card"),e.qZA()(),e.TgZ(84,"td",5),e._uU(85,"Color of a surface used as a card."),e.qZA()(),e.TgZ(86,"tr")(87,"td",5)(88,"span",6),e._uU(89,"--surface-overlay"),e.qZA()(),e.TgZ(90,"td",5),e._uU(91,"Color of overlay surfaces."),e.qZA()(),e.TgZ(92,"tr")(93,"td",5)(94,"span",6),e._uU(95,"--surface-border"),e.qZA()(),e.TgZ(96,"td",5),e._uU(97,"Color of a divider."),e.qZA()(),e.TgZ(98,"tr")(99,"td",5)(100,"span",6),e._uU(101,"--surface-hover"),e.qZA()(),e.TgZ(102,"td",5),e._uU(103,"Color of an element in hover state."),e.qZA()(),e.TgZ(104,"tr")(105,"td",5)(106,"span",6),e._uU(107,"--focus-ring"),e.qZA()(),e.TgZ(108,"td",5),e._uU(109,"Box shadow of a focused item."),e.qZA()(),e.TgZ(110,"tr")(111,"td",5)(112,"span",6),e._uU(113,"--maskbg"),e.qZA()(),e.TgZ(114,"td",5),e._uU(115,"Background color of an overlay mask."),e.qZA()(),e.TgZ(116,"tr")(117,"td",7)(118,"span",6),e._uU(119,"--border-radius"),e.qZA()(),e.TgZ(120,"td",7),e._uU(121,"Border radius of an element."),e.qZA()()()()(),e.TgZ(122,"h4"),e._uU(123,"Color Palette"),e.qZA(),e.TgZ(124,"p"),e._uU(125,"A palette consists of 9 colors where each color provides tints/shades from 50 to 900."),e.qZA(),e.TgZ(126,"div",0)(127,"div",8),e.YNc(128,m,2,1,"div",9),e.qZA()(),e.TgZ(129,"h4"),e._uU(130,"Surfaces"),e.qZA(),e.TgZ(131,"p"),e._uU(132,"In addition, a theme brings a special palette called surfaces that can be used as the base when designing the surface layers and separators."),e.qZA(),e.TgZ(133,"div",0)(134,"div",10),e.YNc(135,h,3,5,"div",11),e.qZA()()()),2&i&&(e.xp6(128),e.Q6J("ngForOf",s.colors),e.xp6(7),e.Q6J("ngForOf",s.shades))},dependencies:[c.sg,c.O5,c.PC],encapsulation:2})}return t})();var U=r(7398),_=r(9862);let A=(()=>{class t{constructor(o){this.http=o,this.icons=[],this.apiUrl="assets/demo/data/icons.json"}getIcons(){return this.http.get(this.apiUrl).pipe((0,U.U)(o=>(this.icons=o.icons,this.icons)))}static#e=this.\u0275fac=function(i){return new(i||t)(e.LFG(_.eN))};static#t=this.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var d=r(3714);function q(t,n){if(1&t&&(e.TgZ(0,"div",11),e._UZ(1,"i"),e.TgZ(2,"div"),e._uU(3),e.qZA()()),2&t){const o=n.$implicit;e.xp6(1),e.Gre("text-2xl pi pi-",o.properties.name,""),e.xp6(2),e.hij("pi-",o.properties.name,"")}}let v=(()=>{class t{constructor(o){this.iconService=o,this.icons=[],this.filteredIcons=[]}ngOnInit(){this.iconService.getIcons().subscribe(o=>{let i=o=o.filter(s=>-1===s.icon.tags.indexOf("deprecate"));i.sort((s,a)=>s.properties.name<a.properties.name?-1:s.properties.name<a.properties.name?1:0),this.icons=i,this.filteredIcons=o})}onFilter(o){const i=o.target.value;this.filteredIcons=i?this.icons.filter(s=>s.icon.tags[0].includes(i)):this.icons}static#e=this.\u0275fac=function(i){return new(i||t)(e.Y36(A))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:59,vars:1,consts:[[1,"card"],[1,"app-code"],[1,"pi","pi-check",2,"margin-right",".5rem"],[1,"pi","pi-times"],[1,"pi","pi-check"],[1,"pi","pi-check",2,"font-size","2rem"],[1,"pi","pi-spin","pi-spinner",2,"font-size","2rem"],["href","https://github.com/primefaces/primeicons/issues",1,"text-primary","hover:underline"],["pInputText","","placeholder","Search an icon",1,"w-full","p-3","mt-3","mb-5","w-full","p-3","mt-3","mb-5",3,"input"],[1,"grid","text-center"],["class","col-6 sm:col-4 lg:col-3 xl:col-2 pb-5",4,"ngFor","ngForOf"],[1,"col-6","sm:col-4","lg:col-3","xl:col-2","pb-5"]],template:function(i,s){1&i&&(e.TgZ(0,"div",0)(1,"h2"),e._uU(2,"Icons"),e.qZA(),e.TgZ(3,"h4"),e._uU(4,"Download"),e.qZA(),e.TgZ(5,"pre",1)(6,"code"),e._uU(7,"npm install primeicons --save"),e.qZA()(),e.TgZ(8,"h4"),e._uU(9,"Getting Started"),e.qZA(),e.TgZ(10,"p"),e._uU(11,"PrimeIcons use the "),e.TgZ(12,"strong"),e._uU(13,"pi pi-{icon}"),e.qZA(),e._uU(14," syntax such as "),e.TgZ(15,"strong"),e._uU(16,"pi pi-check"),e.qZA(),e._uU(17,". A standalone icon can be displayed using an element such as "),e.TgZ(18,"i"),e._uU(19,"i"),e.qZA(),e._uU(20," or "),e.TgZ(21,"i"),e._uU(22,"span"),e.qZA()(),e.TgZ(23,"pre",1)(24,"code"),e._uU(25,'<i class="pi pi-check"></i>\n<i class="pi pi-times"></i>'),e.qZA()(),e._UZ(26,"i",2)(27,"i",3),e.TgZ(28,"h4"),e._uU(29,"Size"),e.qZA(),e.TgZ(30,"p"),e._uU(31,"Size of the icons can easily be changed using font-size property."),e.qZA(),e.TgZ(32,"pre",1)(33,"code"),e._uU(34,'<i class="pi pi-check"></i>'),e.qZA()(),e._UZ(35,"i",4),e.TgZ(36,"pre",1)(37,"code"),e._uU(38,'<i class="pi pi-check" style="font-size: 2rem"></i>'),e.qZA()(),e._UZ(39,"i",5),e.TgZ(40,"h4"),e._uU(41,"Spinning Animation"),e.qZA(),e.TgZ(42,"p"),e._uU(43,"Special pi-spin class applies infinite rotate to an icon."),e.qZA(),e.TgZ(44,"pre",1)(45,"code"),e._uU(46,'<i class="pi pi-spin pi-spinner" style="font-size: 2rem"></i>'),e.qZA()(),e._UZ(47,"i",6),e.TgZ(48,"h4"),e._uU(49,"List of Icons"),e.qZA(),e.TgZ(50,"p"),e._uU(51,"Here is the current list of PrimeIcons, more icons will be added periodically. You may also "),e.TgZ(52,"a",7),e._uU(53,"request new icons"),e.qZA(),e._uU(54," at the issue tracker."),e.qZA(),e.TgZ(55,"div")(56,"input",8),e.NdJ("input",function(b){return s.onFilter(b)}),e.qZA()(),e.TgZ(57,"div",9),e.YNc(58,q,4,4,"div",10),e.qZA()()),2&i&&(e.xp6(58),e.Q6J("ngForOf",s.filteredIcons))},dependencies:[c.sg,d.o],encapsulation:2})}return t})(),x=(()=>{class t{static#e=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275mod=e.oAB({type:t});static#o=this.\u0275inj=e.cJS({imports:[p.Bz.forChild([{path:"icons",data:{breadcrumb:"Prime Icons"},component:v},{path:"colors",data:{breadcrumb:"Colors"},component:T},{path:"**",redirectTo:"/notfound"}]),p.Bz]})}return t})(),y=(()=>{class t{static#e=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275mod=e.oAB({type:t});static#o=this.\u0275inj=e.cJS({imports:[c.ez,x,d.j]})}return t})()}}]);