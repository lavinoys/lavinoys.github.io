(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(t,i,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(8065)}])},4636:function(t,i,n){"use strict";n.d(i,{Z:function(){return r}});var e=n(5893),a=n(9446);function r(t){let{className:i,...n}=t;return(0,e.jsx)("h1",{...n,className:(0,a.$)("mb-4 text-3xl font-extrabold tracking-tight sm:text-5xl",i)})}},2874:function(t,i,n){"use strict";n.d(i,{HA:function(){return s},Ji:function(){return u},Oj:function(){return o},YK:function(){return l},eu:function(){return c},gS:function(){return d},rv:function(){return r},xN:function(){return a}});let e=[.6,-.05,.01,.99],a={animate:{transition:{staggerChildren:.2}}},r={animate:{transition:{staggerChildren:.1}}},o={animate:{transition:{staggerChildren:.05}}},s={animate:{transition:{staggerChildren:.01}}},l={initial:{opacity:.3,transition:{duration:.3,ease:e},willChange:"opacity"},animate:{opacity:1,transition:{duration:.3,ease:e},willChange:"opacity"},exit:{opacity:.3,transition:{duration:.3,ease:e},willChange:"opacity"}},u={initial:{opacity:0,transition:{duration:.6,ease:e},willChange:"opacity"},animate:{opacity:1,transition:{duration:.6,ease:e},willChange:"opacity"},exit:{opacity:0,transition:{duration:.6,ease:e},willChange:"opacity"}},c={initial:{opacity:0,y:30,transition:{duration:.6,ease:e},willChange:"opacity, transform"},animate:{opacity:1,y:0,transition:{duration:.6,ease:e},willChange:"opacity, transform"},exit:{opacity:0,y:30,transition:{duration:.6,ease:e},willChange:"opacity, transform"}},d={initial:{opacity:0,x:30,transition:{duration:.6,ease:e},willChange:"opacity, transform"},animate:{opacity:1,x:0,transition:{duration:.6,ease:e},willChange:"opacity, transform"},exit:{opacity:0,x:-30,transition:{duration:.6,ease:e},willChange:"opacity, transform"}}},8065:function(t,i,n){"use strict";n.r(i),n.d(i,{default:function(){return m}});var e=n(5893),a=n(8674),r=n(7294),o=n(1664),s=n.n(o),l=n(9446);function u(t){let{ref:i,className:n,href:a,children:r,...o}=t;return(0,e.jsxs)(s(),{...o,href:null!=a?a:"/",className:(0,l.$)("inline-flex h-6 items-center rounded-lg leading-7 transition-all","text-mute hover:text-primary",n),children:[r,(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"ml-1 h-6 w-6",children:(0,e.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"})})]})}var c=n(4636);let d=()=>{let t=(0,r.useRef)(null);return(0,r.useEffect)(()=>{if(!t.current)return;let i=t.current,n=i.getContext("2d"),e=()=>{i.width=Math.min(window.innerWidth/1.2,1e3),i.height=Math.min(window.innerHeight,700)};e();let a={x:i.width/2,y:i.height/2,vx:5,vy:5,radius:10},r=()=>{n.beginPath(),n.arc(a.x,a.y,a.radius,0,2*Math.PI),n.fillStyle="blue",n.fill(),n.closePath()},o=()=>{a.x+=a.vx,a.y+=a.vy,(a.x+a.radius>i.width||a.x-a.radius<0)&&(a.vx=-a.vx),(a.y+a.radius>i.height||a.y-a.radius<0)&&(a.vy=-a.vy)},s=()=>{n.clearRect(0,0,i.width,i.height),r(),o(),requestAnimationFrame(s)};s();let l=()=>{e()};return window.addEventListener("resize",l),()=>{window.removeEventListener("resize",l)}},[t]),(0,e.jsx)("canvas",{ref:t})};var h=n(8928),f=n(9607),x=n(2874);function m(){return(0,e.jsxs)(h.Z,{children:[(0,e.jsx)(f.T,{}),(0,e.jsx)(a.E.section,{variants:x.Oj,initial:"initial",animate:"animate",children:(0,e.jsx)(c.Z,{children:"Blog"})}),(0,e.jsx)(a.E.section,{className:"mt-16",variants:x.Oj,initial:"initial",animate:"animate",children:(0,e.jsx)(a.E.div,{variants:x.Ji,children:(0,e.jsx)(u,{href:"/blog",className:"mt-8",children:"Read all posts"})})}),(0,e.jsx)(d,{})]})}}},function(t){t.O(0,[664,674,266,774,888,179],function(){return t(t.s=8312)}),_N_E=t.O()}]);