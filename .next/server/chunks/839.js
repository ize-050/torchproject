exports.id=839,exports.ids=[839],exports.modules={5452:(s,e,l)=>{Promise.resolve().then(l.bind(l,7909)),Promise.resolve().then(l.bind(l,2876)),Promise.resolve().then(l.t.bind(l,2704,23))},1040:(s,e,l)=>{Promise.resolve().then(l.t.bind(l,2583,23)),Promise.resolve().then(l.t.bind(l,6840,23)),Promise.resolve().then(l.t.bind(l,8771,23)),Promise.resolve().then(l.t.bind(l,3225,23)),Promise.resolve().then(l.t.bind(l,9295,23)),Promise.resolve().then(l.t.bind(l,3982,23))},7909:(s,e,l)=>{"use strict";l.r(e),l.d(e,{default:()=>a});var r=l(5344);l(3729);let a=function(){return r.jsx(r.Fragment,{children:r.jsx("div",{className:"pre-footer",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:"col-md-3 col-sm-6 pre-footer-col",children:[r.jsx("h2",{children:"เกี่ยวกับเรา"}),r.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam sit nonummy nibh euismod tincidunt ut laoreet dolore magna aliquarm erat sit volutpat. Nostrud exerci tation ullamcorper suscipit lobortis nisl aliquip  commodo consequat. "}),r.jsx("p",{children:"Duis autem vel eum iriure dolor vulputate velit esse molestie at dolore."})]}),(0,r.jsxs)("div",{className:"col-md-3 col-sm-6 pre-footer-col",children:[r.jsx("h2",{children:"ประเภทสินค้า"}),(0,r.jsxs)("ul",{className:"list-unstyled",children:[(0,r.jsxs)("li",{children:[r.jsx("i",{className:"fa fa-angle-right"})," ",r.jsx("a",{href:"javascript:;",children:"ไฟฉาย"})]}),(0,r.jsxs)("li",{children:[r.jsx("i",{className:"fa fa-angle-right"})," ",r.jsx("a",{href:"javascript:;",children:"หลอดไฟ"})]}),(0,r.jsxs)("li",{children:[r.jsx("i",{className:"fa fa-angle-right"})," ",r.jsx("a",{href:"javascript:;",children:"ปลั๊กไฟ"})]})]})]}),r.jsx("div",{className:"col-md-3 col-sm-6 pre-footer-col",children:r.jsx("h2",{className:"margin-bottom-0",children:"ช่องทางติดต่อ"})}),r.jsx("div",{className:"col-md-3 col-sm-6 pre-footer-col",children:r.jsx("h2",{children:"ที่อยู่"})})]}),r.jsx("div",{className:"row"})]})})})}},2876:(s,e,l)=>{"use strict";l.r(e),l.d(e,{default:()=>c});var r=l(5344),a=l(3729),i=l(8428),t=l(3608);let c=function(){let s=(0,i.useRouter)(),[e,l]=(0,a.useState)([]);return(0,a.useEffect)(()=>{(async()=>{let s=(await t.Z.get("http://www.testtourchpro.com/api/getallMenuProducts")).data;s.length>0&&(console.log("menus",s),l(s))})()},[]),r.jsx(r.Fragment,{children:r.jsx("div",{className:"header-navigation",style:{fontFamily:"Kanit"},children:(0,r.jsxs)("ul",{children:[r.jsx("li",{className:"dropdown",children:r.jsx("a",{className:"dropdown-toggle","data-toggle":"dropdown","data-target":"#",href:"javascript:void(0)",onClick:()=>{s.push("/")},children:"หน้าแรก"})}),(0,r.jsxs)("li",{className:"dropdown dropdown-megamenu",children:[r.jsx("a",{className:"dropdown-toggle","data-toggle":"dropdown","data-target":"#",href:"javascript:;",children:"สินค้า"}),r.jsx("ul",{className:"dropdown-menu",children:r.jsx("li",{children:r.jsx("div",{className:"header-navigation-content",children:r.jsx("div",{className:"row",children:e.length>0?e?.map((e,l)=>r.jsxs("div",{className:"col-md-4 header-navigation-col",children:[r.jsx("h4",{children:e.cat_name}),r.jsx("ul",{children:e.products.length>0?e.products.map((e,l)=>r.jsx(r.Fragment,{children:r.jsx("li",{children:r.jsxs("a",{href:"javascript:void(0)",onClick:()=>{s.push(`/products/${e.id}`)},children:[r.jsxs("b",{children:[l+1,"."]})," ",e.name]})},l)})):""})]},l)):""})})})})]}),r.jsx("li",{children:r.jsx("a",{href:"#",children:"เกี่ยวกับเรา"})}),r.jsx("li",{children:r.jsx("a",{href:"#",target:"_blank",children:"ติดต่อเรา"})})]})})})}},4097:(s,e,l)=>{"use strict";l.r(e),l.d(e,{default:()=>u});var r=l(5036),a=l(5411);l(2),l(5023);var i=l(6843);let t=(0,i.createProxy)(String.raw`/Users/sukitjet/freelance/torch_project/components/layouts/header.tsx`),{__esModule:c,$$typeof:o}=t,n=t.default,d=(0,i.createProxy)(String.raw`/Users/sukitjet/freelance/torch_project/components/layouts/footer.tsx`),{__esModule:h,$$typeof:j}=d,m=d.default;l(6599),l(6118),l(4378),l(4050),l(1651),l(9946),l(6590),l(5811),l(6258),l(1712),l(725),l(6301);let u=async({children:s})=>(0,r.jsxs)("html",{lang:"en",children:[(0,r.jsxs)("body",{className:"ecommerce",children:[(0,r.jsxs)("div",{className:"header",children:[r.jsx("div",{className:"pre-header",children:r.jsx("div",{className:"container",children:(0,r.jsxs)("div",{className:"row",children:[r.jsx("div",{className:"col-md-6 col-sm-6 additional-shop-info"}),r.jsx("div",{className:"col-md-6 col-sm-6 additional-nav",children:(0,r.jsxs)("ul",{className:"list-unstyled list-inline pull-right",children:[r.jsx("li",{children:r.jsx("a",{href:"shop-account.html",children:"ข่าวสาร/บทความ"})}),r.jsx("li",{children:r.jsx("a",{href:"shop-account.html",children:"เกี่ยวกับเรา"})}),r.jsx("li",{children:r.jsx("a",{href:"shop-wishlist.html",children:"นโยบายเว็ปไซค์"})})]})})]})})}),(0,r.jsxs)("div",{className:"container",children:[r.jsx("a",{className:"site-logo",href:"/",children:r.jsx("img",{src:"/logo.png",style:{width:"100px",height:"50px"},alt:"Metronic Shop UI"})}),r.jsx("a",{href:"javascript:void(0);",className:"mobi-toggler",children:r.jsx("i",{className:"fa fa-bars"})}),r.jsx(n,{})]})]}),s,r.jsx(m,{})]}),r.jsx(a.default,{src:"assets/plugins/jquery.min.js"}),r.jsx(a.default,{src:"assets/plugins/jquery-migrate.min.js"}),r.jsx(a.default,{src:"assets/plugins/bootstrap/js/bootstrap.min.js"}),r.jsx(a.default,{src:"assets/corporate/scripts/back-to-top.js"}),r.jsx(a.default,{src:"assets/plugins/jquery-slimscroll/jquery.slimscroll.min.js"}),r.jsx(a.default,{src:"assets/plugins/fancybox/source/jquery.fancybox.pack.js"}),r.jsx(a.default,{src:"assets/plugins/owl.carousel/owl.carousel.min.js"}),r.jsx(a.default,{src:"assets/plugins/zoom/jquery.zoom.min.js"}),r.jsx(a.default,{src:"assets/plugins/bootstrap-touchspin/bootstrap.touchspin.js"}),r.jsx(a.default,{src:"assets/plugins/uniform/jquery.uniform.min.js"}),r.jsx(a.default,{src:"assets/plugins/rateit/src/jquery.rateit.js"}),r.jsx(a.default,{src:"assets/corporate/scripts/layout.js"}),r.jsx(a.default,{src:"assets/pages/scripts/bs-carousel.js"})]})},4378:()=>{},1651:()=>{},4050:()=>{},9946:()=>{},6599:()=>{},6118:()=>{},6590:()=>{},5811:()=>{},6258:()=>{},725:()=>{},1712:()=>{},6301:()=>{},5023:()=>{}};