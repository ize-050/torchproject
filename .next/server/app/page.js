(()=>{var e={};e.id=931,e.ids=[931],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},7426:(e,s,t)=>{"use strict";t.r(s),t.d(s,{GlobalError:()=>l.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>d,routeModule:()=>m,tree:()=>o});var a=t(482),r=t(9108),i=t(2563),l=t.n(i),c=t(8300),n={};for(let e in c)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>c[e]);t.d(s,n);let o=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,1136)),"/Users/sukitjet/freelance/torch_project/src/app/page.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,4097)),"/Users/sukitjet/freelance/torch_project/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/Users/sukitjet/freelance/torch_project/src/app/page.tsx"],u="/page",p={require:t,loadChunk:()=>Promise.resolve()},m=new a.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:o}})},1834:(e,s,t)=>{Promise.resolve().then(t.bind(t,1532))},1532:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>n});var a=t(5344),r=t(3729),i=t(9410),l=t(8428),c=t(3608);let n=()=>{let e=(0,l.useRouter)(),[s,t]=(0,r.useState)([]),[n,o]=(0,r.useState)([]);(0,r.useEffect)(()=>{(async()=>{let e=(await c.Z.get("http://www.testtourchpro.com/api/getAllproduct")).data;e.length>0&&t(e)})()},[]);let d=()=>{let e=[];for(;e.length<2;){let t=Math.floor(Math.random()*s.length);e.includes(s[t])||e.push(s[t])}o(e)};return(0,r.useEffect)(()=>{s.length>0&&d()},[s]),(0,a.jsxs)(a.Fragment,{children:[a.jsx("div",{className:"page-slider",children:(0,a.jsxs)("div",{id:"carousel-example-generic",className:"carousel slide carousel-slider","data-ride":"carousel",children:[(0,a.jsxs)("ol",{className:"carousel-indicators",children:[a.jsx("li",{"data-target":"#carousel-example-generic","data-slide-to":"0",className:"active"}),a.jsx("li",{"data-target":"#carousel-example-generic","data-slide-to":"1"})]}),(0,a.jsxs)("div",{className:"carousel-inner",role:"listbox",children:[a.jsx("div",{className:"item active",children:a.jsx("img",{src:"/slider3.jpg",alt:"text"})}),a.jsx("div",{className:"item",children:a.jsx("img",{src:"./slider1.jpg",alt:"Second slide"})})]}),a.jsx("a",{className:"left carousel-control",href:"#carousel-example-generic",role:"button","data-slide":"prev",children:a.jsx("i",{className:"fa fa-angle-left"})}),a.jsx("a",{className:"right carousel-control",href:"#carousel-example-generic",role:"button","data-slide":"next",children:a.jsx("i",{className:"fa fa-angle-right"})})]})}),a.jsx("div",{className:"main",style:{fontFamily:"Kanit"},children:a.jsx("div",{className:"container",children:(0,a.jsxs)("div",{className:"row margin-bottom-40",children:[(0,a.jsxs)("div",{className:"col-md-12  sale-product",children:[a.jsx("h2",{style:{fontFamily:"Kanit"},children:"สินค้าของเรา"}),a.jsx("div",{className:"owl-carousel owl-carousel5 ",children:s.map((s,t)=>a.jsx("div",{className:"col-md-3 col-xs-6",children:(0,a.jsxs)("div",{className:"product-item",children:[(0,a.jsxs)("div",{className:"pi-img-wrapper",children:[a.jsx(i.default,{src:s.images,className:"img-responsive",alt:"Berry Lace Dress",width:"200",height:"100"}),(0,a.jsxs)("div",{children:[a.jsx("a",{href:"p3.jpg",className:"btn btn-default fancybox-button",children:"Zoom"}),a.jsx("a",{href:"javascript:void(0)",onClick:()=>{e.push("/products/"+s.id)},className:"btn btn-default fancybox-fast-view",children:"View"})]})]}),a.jsx("h3",{style:{fontSize:"16px"},children:s.name}),a.jsx("div",{className:"pi-price",children:"150.00"})]})},t))})]}),(0,a.jsxs)("div",{className:"row margin-bottom-35 ",children:[(0,a.jsxs)("div",{className:"col-md-6",children:[a.jsx("h2",{children:"Two items"}),n.map((s,t)=>a.jsx("div",{className:"col-md-6",children:(0,a.jsxs)("div",{className:"product-item",children:[(0,a.jsxs)("div",{className:"pi-img-wrapper",children:[a.jsx(i.default,{src:s.images,className:"img-responsive",alt:"Berry Lace Dress",width:"200",height:"100"}),(0,a.jsxs)("div",{children:[a.jsx("a",{href:"p3.jpg",className:"btn btn-default fancybox-button",children:"Zoom"}),a.jsx("a",{href:"javascript:void(0)",onClick:()=>{e.push("/products/"+s.id)},className:"btn btn-default fancybox-fast-view",children:"View"})]})]}),a.jsx("h3",{style:{fontSize:"16px"},children:s.name}),a.jsx("div",{className:"pi-price",children:"150.00"})]})},t))]}),a.jsx("div",{className:"col-md-6 shop-index-carousel",children:a.jsx("div",{className:"content-slider",children:(0,a.jsxs)("div",{id:"myCarousel",className:"carousel slide","data-ride":"carousel",children:[(0,a.jsxs)("ol",{className:"carousel-indicators",children:[a.jsx("li",{"data-target":"#myCarousel","data-slide-to":"0",className:"active"}),a.jsx("li",{"data-target":"#myCarousel","data-slide-to":"1"}),a.jsx("li",{"data-target":"#myCarousel","data-slide-to":"2"})]}),a.jsx("div",{className:"carousel-inner",children:a.jsx("div",{className:"item active",children:a.jsx(i.default,{width:600,height:500,alt:"test",src:"/banner4.jpg",className:"img-responsive"})})})]})})})]})]})})})]})}},1136:(e,s,t)=>{"use strict";t.r(s),t.d(s,{$$typeof:()=>i,__esModule:()=>r,default:()=>l});let a=(0,t(6843).createProxy)(String.raw`/Users/sukitjet/freelance/torch_project/src/app/page.tsx`),{__esModule:r,$$typeof:i}=a,l=a.default},3881:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>r});var a=t(337);let r=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,a.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]}};var s=require("../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),a=s.X(0,[638,858,337,410,839],()=>t(7426));module.exports=a})();