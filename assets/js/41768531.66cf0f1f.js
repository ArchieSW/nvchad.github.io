"use strict";(self.webpackChunknvchad_site=self.webpackChunknvchad_site||[]).push([[866],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var l=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,l,r=function(e,n){if(null==e)return{};var t,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)t=o[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)t=o[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=l.createContext({}),u=function(e){var n=l.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=u(e.components);return l.createElement(s.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},m=l.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(t),m=r,g=p["".concat(s,".").concat(m)]||p[m]||f[m]||o;return t?l.createElement(g,a(a({ref:n},c),{},{components:t})):l.createElement(g,a({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:r,a[1]=i;for(var u=2;u<o;u++)a[u]=t[u];return l.createElement.apply(null,a)}return l.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6878:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var l=t(7462),r=(t(7294),t(3905));const o={},a=void 0,i={unversionedId:"config/Format & lint",id:"config/Format & lint",title:"Format & lint",description:"- There are many plugins for this; I will use null-ls.nvim in this example.",source:"@site/docs/config/Format & lint.md",sourceDirName:"config",slug:"/config/Format & lint",permalink:"/config/Format & lint",tags:[],version:"current",frontMatter:{},sidebar:"config",previous:{title:"Language Server Protocol",permalink:"/config/Language Server Protocol"},next:{title:"Highlight groups",permalink:"/config/theming"}},s={},u=[{value:"Install null-ls",id:"install-null-ls",level:3},{value:"Null-ls config",id:"null-ls-config",level:3}],c={toc:u};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,l.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"There are many plugins for this; I will use null-ls.nvim in this example.")),(0,r.kt)("h3",{id:"install-null-ls"},"Install null-ls"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},' ["jose-elias-alvarez/null-ls.nvim"] = {\n      after = "nvim-lspconfig",\n      config = function()\n         require "custom.plugins.null-ls"\n      end,\n }\n\n-- load it after nvim-lspconfig cuz we lazy loaded lspconfig\n')),(0,r.kt)("h3",{id:"null-ls-config"},"Null-ls config"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"NOTE : The below is my personal config, so use it as a reference or check null-ls docs")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'local present, null_ls = pcall(require, "null-ls")\n\nif not present then\n   return\nend\n\nlocal b = null_ls.builtins\n\nlocal sources = {\n\n   -- webdev stuff\n   b.formatting.deno_fmt,\n   b.formatting.prettier,\n\n   -- Lua\n   b.formatting.stylua,\n\n   -- Shell\n   b.formatting.shfmt,\n   b.diagnostics.shellcheck.with { diagnostics_format = "#{m} [#{c}]" },\n}\n\nnull_ls.setup {\n   debug = true,\n   sources = sources,\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Format code : ",(0,r.kt)("inlineCode",{parentName:"li"},"<leader> + fm")),(0,r.kt)("li",{parentName:"ul"},"Check ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/jose-elias-alvarez/null-ls.nvim/blob/main/doc/BUILTINS.md"},"null-ls builtins")," to get the config for your language."),(0,r.kt)("li",{parentName:"ul"},"Also note that in the above example I've added some linter and formatter config in null-ls config, so those programs must be installed on your system as well (prettierd, stylua, shfmt, eslint_d, etc.)")))}p.isMDXComponent=!0}}]);