"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4738],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>c,MDXProvider:()=>m,mdx:()=>g,useMDXComponents:()=>u,withMDXComponents:()=>s});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){return function(t){var r=u(t.components);return n.createElement(e,a({},t,{components:r}))}},u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},m=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(r),m=o,f=s["".concat(i,".").concat(m)]||s[m]||d[m]||a;return r?n.createElement(f,p(p({ref:t},c),{},{components:r})):n.createElement(f,p({ref:t},c))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},48072:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>p,metadata:()=>c,toc:()=>u});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),i=["components"],p={title:"Flipper is coming to your web and Node.js apps",author:"Andrey Goncharov",author_title:"Software Engineer",author_url:"https://github.com/aigoncharov",author_image_url:"https://avatars.githubusercontent.com/u/12794628?v=4",tags:["flipper","web","react","node.js"],description:"Flipper now provides an official JavaScript client. We will see what `js-flipper` is, go over Flipper communication protocol, talk about what it takes to build a new Flipper client.",image:"/img/js-flipper.jpg",hide_table_of_contents:!1},l=void 0,c={permalink:"/blog/2022/02/21/js-flipper-announcement",source:"@site/blog/2022-02-21-js-flipper-announcement.md",title:"Flipper is coming to your web and Node.js apps",description:"Flipper now provides an official JavaScript client. We will see what `js-flipper` is, go over Flipper communication protocol, talk about what it takes to build a new Flipper client.",date:"2022-02-21T00:00:00.000Z",formattedDate:"February 21, 2022",tags:[{label:"flipper",permalink:"/blog/tags/flipper"},{label:"web",permalink:"/blog/tags/web"},{label:"react",permalink:"/blog/tags/react"},{label:"node.js",permalink:"/blog/tags/node-js"}],readingTime:8.74,truncated:!0,authors:[{name:"Andrey Goncharov",title:"Software Engineer",url:"https://github.com/aigoncharov",imageURL:"https://avatars.githubusercontent.com/u/12794628?v=4"}],frontMatter:{title:"Flipper is coming to your web and Node.js apps",author:"Andrey Goncharov",author_title:"Software Engineer",author_url:"https://github.com/aigoncharov",author_image_url:"https://avatars.githubusercontent.com/u/12794628?v=4",tags:["flipper","web","react","node.js"],description:"Flipper now provides an official JavaScript client. We will see what `js-flipper` is, go over Flipper communication protocol, talk about what it takes to build a new Flipper client.",image:"/img/js-flipper.jpg",hide_table_of_contents:!1},prevItem:{title:"Headless Flipper - what it means for plugin developers",permalink:"/blog/2022/05/20/preparing-for-headless-flipper"},nextItem:{title:"Flipper 2021 Roadmap Update",permalink:"/blog/2021/10/14/roadmap"}},s={authorsImageUrls:[void 0]},u=[],m={toc:u};function d(e){var t=e.components,p=(0,o.Z)(e,i);return(0,a.mdx)("wrapper",(0,n.Z)({},m,p,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,(0,a.mdx)("img",{alt:"Cover image",src:r(7654).Z,width:"1748",height:"1240"})),(0,a.mdx)("p",null,"For quite some time already, Flipper has secretly provided an experimental\nJavaScript SDK to support connections from browsers and Node.js under the name\nof ",(0,a.mdx)("inlineCode",{parentName:"p"},"flipper-js-client-sdk"),". With the ongoing migration of all our clients to\nWebSockets, we have committed to providing an official documented SDK for\nJavaScript clients. Without further ado, welcome\n",(0,a.mdx)("a",{parentName:"p",href:"https://www.npmjs.com/package/js-flipper"},"js-flipper"),"!"),(0,a.mdx)("p",null,"In this post we will:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"See what ",(0,a.mdx)("inlineCode",{parentName:"li"},"js-flipper")," is"),(0,a.mdx)("li",{parentName:"ul"},"Get acquainted with how to build a Flipper plugin for a React app"),(0,a.mdx)("li",{parentName:"ul"},"Learn how Flipper talks to a mobile device"),(0,a.mdx)("li",{parentName:"ul"},"Dive deeper into the message structure"),(0,a.mdx)("li",{parentName:"ul"},"Glance at what it takes to support a new platform")))}d.isMDXComponent=!0},7654:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/js-flipper-94b22eaefb5d7fde51e4b4985e7fb41c.jpg"}}]);