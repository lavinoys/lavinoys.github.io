"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[202],{1202:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var r=n(5893),o=n(1606),s=n(7294),i=n(9446),a=n(5748);function l(e){let{className:t,width:n=16,height:o=16,...s}=e;return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:t,width:n,height:o,...s,children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"})})}function d(e){let{className:t,width:n=16,height:o=16,...s}=e;return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:t,width:n,height:o,...s,children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"})})}function c(e){let{className:t,width:n=16,height:o=16,...s}=e;return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:t,width:n,height:o,...s,children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"})})}var u=n(930);function h(e){let{title:t,buttonText:n,action:o}=e;return(0,r.jsxs)("div",{className:(0,i.$)("flex items-center gap-4 text-sm"),children:[(0,r.jsx)("span",{children:t}),(0,r.jsx)("button",{onClick:o,className:(0,i.$)("cursor-pointer rounded py-1 px-2","bg-secondary active:bg-tertiary"),children:n})]})}let m=e=>"kbar-listbox-item-".concat(e);function x(e){let{query:t,searchQuery:n,actions:i,currentRootActionId:a,activeIndex:l,showing:d,options:c}=(0,o.useKBar)(e=>({searchQuery:e.searchQuery,currentRootActionId:e.currentRootActionId,actions:e.actions,activeIndex:e.activeIndex,showing:e.visualState===o.VisualState.showing})),[u,h]=s.useState(n),{defaultPlaceholder:x,...p}=e;s.useEffect(()=>(t.setSearch(""),t.getInput().focus(),()=>t.setSearch("")),[a,t]),s.useEffect(()=>{t.setSearch(u)},[t,u]);let v=s.useMemo(()=>a&&i[a]?i[a].name:null!=x?x:"Type a command or search…",[i,a,x]);return(0,r.jsx)("input",{...p,ref:t.inputRefSetter,autoFocus:!0,autoComplete:"off",role:"combobox",spellCheck:"false","aria-expanded":d,"aria-controls":"kbar-listbox","aria-activedescendant":m(l),value:u,placeholder:v,onChange:t=>{var n,r,o;null===(n=e.onChange)||void 0===n||n.call(e,t),h(t.target.value),null==c||null===(r=c.callbacks)||void 0===r||null===(o=r.onQueryChange)||void 0===o||o.call(r,t.target.value)},onKeyDown:n=>{var r;if(null===(r=e.onKeyDown)||void 0===r||r.call(e,n),a&&!u&&"Backspace"===n.key){let e=i[a].parent;t.setCurrentRootAction(e)}}})}function p(){return!function(){let{setThemeDark:e,setThemeLight:t}=(0,u.Z)();(0,o.useRegisterActions)([{id:"theme",name:"Change theme…",shortcut:["T"],keywords:"interface color theme",section:"Preferences",icon:(0,r.jsx)(l,{width:18}),priority:o.Priority.HIGH},{id:"darkTheme",name:"Change Theme to Dark",keywords:"dark theme",parent:"theme",icon:(0,r.jsx)(d,{width:18}),perform:n=>(e(),(0,a.ZP)(e=>(0,r.jsx)(h,{title:"Dark theme enabled",buttonText:"Undo",action:()=>{var t,o;null===(t=n.command)||void 0===t||null===(o=t.history)||void 0===o||o.undo(),a.ZP.dismiss(e.id),(0,a.ZP)(e=>(0,r.jsx)(h,{title:"Dark theme undone",buttonText:"Redo",action:()=>{var t,r;null===(t=n.command)||void 0===t||null===(r=t.history)||void 0===r||r.redo(),a.ZP.dismiss(e.id)}}))}})),()=>{t()})},{id:"lightTheme",name:"Change Theme to Light",keywords:"light theme",parent:"theme",icon:(0,r.jsx)(c,{width:18}),perform:n=>(t(),(0,a.ZP)(e=>(0,r.jsx)(h,{title:"Light theme enabled",buttonText:"Undo",action:()=>{var t,o;null===(t=n.command)||void 0===t||null===(o=t.history)||void 0===o||o.undo(),a.ZP.dismiss(e.id),(0,a.ZP)(e=>(0,r.jsx)(h,{title:"Light theme undone",buttonText:"Redo",action:()=>{var t,r;null===(t=n.command)||void 0===t||null===(r=t.history)||void 0===r||r.redo(),a.ZP.dismiss(e.id)}}))}})),()=>{e()})}])}(),(0,r.jsx)(o.KBarPortal,{children:(0,r.jsxs)(o.KBarPositioner,{className:"z-50",children:[(0,r.jsx)("div",{className:"pointer-events-none fixed inset-0 h-full w-full bg-white/50 backdrop-blur dark:bg-black/50"}),(0,r.jsxs)(o.KBarAnimator,{className:(0,i.$)("bg-primary w-full overflow-hidden rounded-lg shadow-xl","dark:border dark:border-neutral-800"),style:{maxWidth:"600px",boxShadow:"0 16px 70px rgb(0 0 0 / 20%)"},children:[(0,r.jsx)(x,{className:"bg-primary box-border w-full border-none px-6 py-4 outline-none placeholder:text-tertiary"}),(0,r.jsx)("div",{className:"kbar-scrollbar pb-4",children:(0,r.jsx)(v,{})})]})]})})}function v(){let{results:e}=(0,o.useMatches)();return(0,r.jsx)(o.KBarResults,{items:e,onRender:e=>{var t;let{item:n,active:o}=e;return"string"==typeof n?(0,r.jsx)("div",{className:"text-secondary mx-3 py-2 text-xs",children:n}):(0,r.jsxs)("div",{className:(0,i.$)("mx-3 flex cursor-pointer items-center gap-3 rounded-lg p-3 text-sm transition-colors",o&&"bg-secondary"),children:[n.icon&&n.icon,(0,r.jsxs)("div",{className:"flex flex-col font-medium",children:[(0,r.jsx)("div",{children:n.name}),n.subtitle&&(0,r.jsx)("span",{className:"text-secondary text-xs font-normal",children:n.subtitle})]}),(null===(t=n.shortcut)||void 0===t?void 0:t.length)&&(0,r.jsx)("div",{className:"ml-auto flex gap-2",children:n.shortcut.map(e=>(0,r.jsx)("kbd",{className:"rounded-md px-2 py-1 text-xs",style:{background:"rgba(0 0 0 / .1)"},children:e},e))})]})}})}},930:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(2010);function o(){let{resolvedTheme:e,setTheme:t}=(0,r.F)(),n="dark"===e,o=()=>t("dark"),s=()=>t("light");return{theme:e,isThemeDark:n,setThemeDark:o,setThemeLight:s,toggleTheme:()=>{n?s():o()}}}}}]);