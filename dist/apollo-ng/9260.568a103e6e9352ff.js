"use strict";(self.webpackChunkapollo_ng=self.webpackChunkapollo_ng||[]).push([[9260],{9260:(A,p,o)=>{o.r(p),o.d(p,{ProductoverviewModule:()=>q});var a=o(6814),c=o(6223),g=o(258),e=o(8926),Z=o(5167),v=o(707),b=o(4480),d=o(4844);const f=function(i){return{"border-primary":i}};function _(i,u){if(1&i){const l=e.EpF();e.TgZ(0,"img",70),e.NdJ("click",function(){const r=e.CHM(l).index,m=e.oxw();return e.KtG(m.selectedImageIndex=r)}),e.qZA()}if(2&i){const l=u.$implicit,n=u.index,t=e.oxw();e.MGl("src","assets/demo/images/ecommerce/productoverview/",l,"",e.LSH),e.Q6J("ngClass",e.VKq(2,f,t.selectedImageIndex===n))}}const s=function(i){return{"border-blue-500 border-2 text-blue-500":i}},x=function(i,u){return{"pi-heart text-600":i,"pi-heart-fill text-orange-500":u}};let T=(()=>{class i{constructor(){this.color="bluegray",this.size="M",this.liked=!1,this.images=[],this.selectedImageIndex=0,this.quantity=1}ngOnInit(){this.images=["product-overview-3-1.png","product-overview-3-2.png","product-overview-3-3.png","product-overview-3-4.png"]}static#e=this.\u0275fac=function(n){return new(n||i)};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["ng-component"]],decls:170,vars:30,consts:[[1,"card"],[1,"grid","mb-7"],[1,"col-12","lg:col-7"],[1,"flex"],[1,"flex","flex-column","w-2","justify-content-between",2,"row-gap","1rem"],["class","w-full cursor-pointer border-2 border-transparent transition-colors transition-duration-150 border-round",3,"ngClass","src","click",4,"ngFor","ngForOf"],[1,"pl-3","w-10","flex"],[1,"w-full","border-2","border-transparent","border-round",3,"src"],[1,"col-12","lg:col-4","py-3","lg:pl-6"],[1,"flex","align-items-center","text-xl","font-medium","text-900","mb-4"],[1,"flex","align-items-center","justify-content-between","mb-5"],[1,"text-900","font-medium","text-3xl","block"],[1,"flex","align-items-center"],[1,"mr-3"],[1,"pi","pi-star-fill","text-yellow-500","mr-1"],[1,"pi","pi-star","text-600","mr-1"],[1,"text-sm"],[1,"text-900","mr-1"],[1,"text-500"],[1,"font-bold","text-900","mb-3"],[1,"flex","align-items-center","mb-5"],[1,"w-2rem","h-2rem","flex-shrink-0","border-circle","bg-bluegray-500","mr-3","cursor-pointer","border-2","surface-border","transition-all","transition-duration-300",3,"click"],[1,"w-2rem","h-2rem","flex-shrink-0","border-circle","bg-green-500","mr-3","cursor-pointer","border-2","surface-border","transition-all","transition-duration-300",3,"click"],[1,"w-2rem","h-2rem","flex-shrink-0","border-circle","bg-blue-500","cursor-pointer","border-2","surface-border","transition-all","transition-duration-300",3,"click"],[1,"mb-3","flex","align-items-center","justify-content-between"],[1,"font-bold","text-900"],["tabindex","0",1,"cursor-pointer","text-600","text-sm","flex","align-items-center"],[1,"ml-1","pi","pi-angle-right"],[1,"grid","grid-nogutter","align-items-center","mb-5"],[1,"col","h-3rem","border-1","border-300","text-900","inline-flex","justify-content-center","align-items-center","flex-shrink-0","border-round","mr-3","cursor-pointer","hover:surface-100","transition-duration-150","transition-colors",3,"ngClass","click"],[1,"col","h-3rem","border-1","border-300","text-900","inline-flex","justify-content-center","align-items-center","flex-shrink-0","border-round","cursor-pointer","hover:surface-100","transition-duration-150","transition-colors",3,"ngClass","click"],[1,"flex","flex-column","sm:flex-row","sm:align-items-center","sm:justify-content-between"],["buttonLayout","horizontal","spinnerMode","horizontal","inputStyleClass","w-3rem text-center","decrementButtonClass","p-button-text","incrementButtonClass","p-button-text","incrementButtonIcon","pi pi-plus","decrementButtonIcon","pi pi-minus",3,"showButtons","min","ngModel","ngModelChange"],[1,"flex","align-items-center","flex-1","mt-3","sm:mt-0","ml-0","sm:ml-5"],["pButton","","pRipple","","label","Add to Cart",1,"flex-1","mr-5"],[1,"pi","text-2xl","cursor-pointer",3,"ngClass","click"],["header","Details"],[1,"text-900","font-bold","text-3xl","mb-4","mt-2"],[1,"line-height-3","text-600","p-0","mx-0","mt-0","mb-4"],[1,"grid"],[1,"col-12","lg:col-4"],[1,"text-900","block","font-medium","mb-3","font-bold"],[1,"py-0","pl-3","m-0","text-600","mb-3"],[1,"mb-2"],[1,"text-900","block","mb-3","font-bold"],[1,"list-none","p-0","m-0","text-600","mb-4","text-600"],[1,"mb-3"],[1,"font-semibold"],[1,"p-0","m-0","flex","flex-wrap","flex-column","xl:flex-row","text-600"],[1,"flex","align-items-center","white-space-nowrap","w-10rem","block","mr-2","mb-3"],[1,"pi","pi-sun","mr-2","text-900"],[1,"flex","align-items-center","white-space-nowrap","w-10rem","block","mb-3"],[1,"pi","pi-times-circle","mr-2","text-900"],[1,"flex","align-items-center","white-space-nowrap","w-10rem","block","mb-3","mr-2"],[1,"pi","pi-sliders-h","mr-2","text-900"],[1,"pi","pi-minus-circle","mr-2","text-900"],["header","Reviews"],[1,"list-none","p-0","m-0"],[1,"pb-5","border-bottom-1","surface-border"],[1,"pi","pi-star-fill","text-gray-500"],[1,"text-900","font-bold","text-xl","my-3"],[1,"mx-0","mt-0","mb-3","text-600","line-height-3"],[1,"font-medium"],[1,"py-5","border-bottom-1","surface-border"],[1,"pi","pi-star-fill","text-yellow-500"],["header","Shipping and Returns"],[1,"col-12","md:col-6"],[1,"text-900","block","font-bold","mb-3","font-bold"],[1,"text-900","block","font-bold","mb-3"],[1,"line-height-3","text-600","p-0","m-0"],[1,"w-full","cursor-pointer","border-2","border-transparent","transition-colors","transition-duration-150","border-round",3,"ngClass","src","click"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),e.YNc(5,_,1,4,"img",5),e.qZA(),e.TgZ(6,"div",6),e._UZ(7,"img",7),e.qZA()()(),e.TgZ(8,"div",8)(9,"div",9),e._uU(10,"Product Title Placeholder"),e.qZA(),e.TgZ(11,"div",10)(12,"span",11),e._uU(13,"$120"),e.qZA(),e.TgZ(14,"div",12)(15,"span",13),e._UZ(16,"i",14)(17,"i",14)(18,"i",14)(19,"i",14)(20,"i",15),e.qZA(),e.TgZ(21,"span",16)(22,"b",17),e._uU(23,"24"),e.qZA(),e._UZ(24,"span",18),e._uU(25,"reviews"),e.qZA()()(),e.TgZ(26,"div",19),e._uU(27,"Color"),e.qZA(),e.TgZ(28,"div",20)(29,"div",21),e.NdJ("click",function(){return t.color="bluegray"}),e.qZA(),e.TgZ(30,"div",22),e.NdJ("click",function(){return t.color="green"}),e.qZA(),e.TgZ(31,"div",23),e.NdJ("click",function(){return t.color="blue"}),e.qZA()(),e.TgZ(32,"div",24)(33,"span",25),e._uU(34,"Size"),e.qZA(),e.TgZ(35,"a",26),e._uU(36,"Size Guide "),e._UZ(37,"i",27),e.qZA()(),e.TgZ(38,"div",28)(39,"div",29),e.NdJ("click",function(){return t.size="XS"}),e._uU(40,"XS"),e.qZA(),e.TgZ(41,"div",29),e.NdJ("click",function(){return t.size="S"}),e._uU(42,"S"),e.qZA(),e.TgZ(43,"div",29),e.NdJ("click",function(){return t.size="M"}),e._uU(44,"M"),e.qZA(),e.TgZ(45,"div",29),e.NdJ("click",function(){return t.size="L"}),e._uU(46,"L"),e.qZA(),e.TgZ(47,"div",30),e.NdJ("click",function(){return t.size="XL"}),e._uU(48,"XL"),e.qZA()(),e.TgZ(49,"div",19),e._uU(50,"Quantity"),e.qZA(),e.TgZ(51,"div",31)(52,"p-inputNumber",32),e.NdJ("ngModelChange",function(m){return t.quantity=m}),e.qZA(),e.TgZ(53,"div",33),e._UZ(54,"button",34),e.TgZ(55,"i",35),e.NdJ("click",function(){return t.liked=!t.liked}),e.qZA()()()()(),e.TgZ(56,"p-tabView")(57,"p-tabPanel",36)(58,"div",37),e._uU(59,"Product Details"),e.qZA(),e.TgZ(60,"p",38),e._uU(61,"Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Duis ultricies lacus sed turpis tincidunt id. Sed tempus urna et pharetra. Metus vulputate eu scelerisque felis imperdiet proin fermentum. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Viverra justo nec ultrices dui sapien eget mi proin. Laoreet suspendisse interdum consectetur libero id faucibus."),e.qZA(),e.TgZ(62,"div",39)(63,"div",40)(64,"span",41),e._uU(65,"Highlights"),e.qZA(),e.TgZ(66,"ul",42)(67,"li",43),e._uU(68,"Vulputate sapien nec."),e.qZA(),e.TgZ(69,"li",43),e._uU(70,"Purus gravida quis blandit."),e.qZA(),e.TgZ(71,"li",43),e._uU(72,"Nisi quis eleifend quam adipiscing."),e.qZA(),e.TgZ(73,"li"),e._uU(74,"Imperdiet proin fermentum."),e.qZA()()(),e.TgZ(75,"div",40)(76,"span",44),e._uU(77,"Size and Fit"),e.qZA(),e.TgZ(78,"ul",45)(79,"li",46)(80,"span",47),e._uU(81,"Leo vel:"),e.qZA(),e._uU(82," Egestas congue."),e.qZA(),e.TgZ(83,"li",46)(84,"span",47),e._uU(85,"Sociis natoque:"),e.qZA(),e._uU(86," Parturient montes nascetur."),e.qZA(),e.TgZ(87,"li")(88,"span",47),e._uU(89,"Suspendisse in:"),e.qZA(),e._uU(90," Purus sit amet volutpat."),e.qZA()()(),e.TgZ(91,"div",40)(92,"span",44),e._uU(93,"Material & Care"),e.qZA(),e.TgZ(94,"ul",48)(95,"li",49),e._UZ(96,"i",50),e.TgZ(97,"span"),e._uU(98,"Not dryer safe"),e.qZA()(),e.TgZ(99,"li",51),e._UZ(100,"i",52),e.TgZ(101,"span"),e._uU(102,"No chemical wash"),e.qZA()(),e.TgZ(103,"li",53),e._UZ(104,"i",54),e.TgZ(105,"span"),e._uU(106,"Iron medium heat"),e.qZA()(),e.TgZ(107,"li",51),e._UZ(108,"i",55),e.TgZ(109,"span"),e._uU(110,"Dry flat"),e.qZA()()()()()(),e.TgZ(111,"p-tabPanel",56)(112,"div",37),e._uU(113,"Customer Reviews"),e.qZA(),e.TgZ(114,"ul",57)(115,"li",58)(116,"span"),e._UZ(117,"i",14)(118,"i",14)(119,"i",14)(120,"i",14)(121,"i",59),e.qZA(),e.TgZ(122,"div",60),e._uU(123,"Absolute Perfection!"),e.qZA(),e.TgZ(124,"p",61),e._uU(125,"Blandit libero volutpat sed cras ornare arcu dui vivamus. Arcu dictum varius duis at consectetur lorem donec massa. Imperdiet proin fermentum leo vel orci porta non. Porttitor rhoncus dolor purus non."),e.qZA(),e.TgZ(126,"span",62),e._uU(127,"Darlene Robertson, 2 days ago"),e.qZA()(),e.TgZ(128,"li",63)(129,"span"),e._UZ(130,"i",14)(131,"i",14)(132,"i",14)(133,"i",14)(134,"i",64),e.qZA(),e.TgZ(135,"div",60),e._uU(136,"Classy"),e.qZA(),e.TgZ(137,"p",61),e._uU(138,"Venenatis cras sed felis eget. Proin nibh nisl condimentum id venenatis a condimentum."),e.qZA(),e.TgZ(139,"span",62),e._uU(140,"Kristin Watson, 2 days ago"),e.qZA()()()(),e.TgZ(141,"p-tabPanel",65)(142,"div",37),e._uU(143,"Shipping Placeholder"),e.qZA(),e.TgZ(144,"p",38),e._uU(145,"Mattis aliquam faucibus purus in massa tempor nec feugiat nisl. Justo donec enim diam vulputate ut pharetra. Tempus egestas sed sed risus. Feugiat sed lectus vestibulum mattis. Tristique nulla aliquet enim tortor at auctor urna nunc. Habitant morbi tristique senectus et. Facilisi nullam vehicula ipsum."),e.qZA(),e.TgZ(146,"div",39)(147,"div",66)(148,"span",67),e._uU(149,"Shipping Costs"),e.qZA(),e.TgZ(150,"ul",42)(151,"li",43),e._uU(152,"Japan - JPY 2,500."),e.qZA(),e.TgZ(153,"li",43),e._uU(154,"Europe - EUR 10"),e.qZA(),e.TgZ(155,"li",43),e._uU(156,"Switzerland - CHF 10"),e.qZA(),e.TgZ(157,"li",43),e._uU(158,"Canada - CAD 25"),e.qZA(),e.TgZ(159,"li",43),e._uU(160,"USA - USD 20"),e.qZA(),e.TgZ(161,"li",43),e._uU(162,"Australia - AUD 30"),e.qZA(),e.TgZ(163,"li",43),e._uU(164,"United Kingdom - GBP 10"),e.qZA()()(),e.TgZ(165,"div",66)(166,"span",68),e._uU(167,"Return Policy"),e.qZA(),e.TgZ(168,"p",69),e._uU(169,"Pharetra et ultrices neque ornare aenean euismod elementum nisi. Diam phasellus vestibulum lorem sed. Mattis molestie a iaculis at. "),e.qZA()()()()()()),2&n&&(e.xp6(5),e.Q6J("ngForOf",t.images),e.xp6(2),e.MGl("src","assets/demo/images/ecommerce/productoverview/",t.images[t.selectedImageIndex],"",e.LSH),e.xp6(22),e.Udp("box-shadow","bluegray"===t.color?"0 0 0 0.2rem var(--bluegray-500)":null),e.xp6(1),e.Udp("box-shadow","green"===t.color?"0 0 0 0.2rem var(--green-500)":null),e.xp6(1),e.Udp("box-shadow","blue"===t.color?"0 0 0 0.2rem var(--blue-500)":null),e.xp6(8),e.Q6J("ngClass",e.VKq(17,s,"XS"===t.size)),e.xp6(2),e.Q6J("ngClass",e.VKq(19,s,"S"===t.size)),e.xp6(2),e.Q6J("ngClass",e.VKq(21,s,"M"===t.size)),e.xp6(2),e.Q6J("ngClass",e.VKq(23,s,"L"===t.size)),e.xp6(2),e.Q6J("ngClass",e.VKq(25,s,"XL"===t.size)),e.xp6(5),e.Q6J("showButtons",!0)("min",0)("ngModel",t.quantity),e.xp6(3),e.Q6J("ngClass",e.WLB(27,x,!t.liked,t.liked)))},dependencies:[a.mk,a.sg,c.JJ,c.On,Z.Rn,v.Hq,b.H,d.xf,d.x4],encapsulation:2})}return i})(),h=(()=>{class i{static#e=this.\u0275fac=function(n){return new(n||i)};static#t=this.\u0275mod=e.oAB({type:i});static#i=this.\u0275inj=e.cJS({imports:[g.Bz.forChild([{path:"",component:T}]),g.Bz]})}return i})(),q=(()=>{class i{static#e=this.\u0275fac=function(n){return new(n||i)};static#t=this.\u0275mod=e.oAB({type:i});static#i=this.\u0275inj=e.cJS({imports:[a.ez,c.u5,Z.L$,v.hJ,b.T,d.LU,h]})}return i})()}}]);