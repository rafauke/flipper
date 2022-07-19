"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2670],{3905:(e,n,r)=>{r.r(n),r.d(n,{MDXContext:()=>d,MDXProvider:()=>u,mdx:()=>g,useMDXComponents:()=>c,withMDXComponents:()=>s});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},i.apply(this,arguments)}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=t.createContext({}),s=function(e){return function(n){var r=c(n.components);return t.createElement(e,i({},n,{components:r}))}},c=function(e){var n=t.useContext(d),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(d.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=c(r),u=o,h=s["".concat(a,".").concat(u)]||s[u]||m[u]||i;return r?t.createElement(h,l(l({ref:n},d),{},{components:r})):t.createElement(h,l({ref:n},d))}));function g(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=h;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var d=2;d<i;d++)a[d]=r[d];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}h.displayName="MDXCreateElement"},61197:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var t=r(83117),o=r(80102),i=(r(67294),r(3905)),a=["components"],l={id:"error-handling",title:"Error Handling"},p=void 0,d={unversionedId:"extending/error-handling",id:"extending/error-handling",title:"Error Handling",description:"Errors in Flipper plugins should be hidden from the user while providing actionable data to the plugin Developer.",source:"@site/../docs/extending/error-handling.mdx",sourceDirName:"extending",slug:"/extending/error-handling",permalink:"/docs/extending/error-handling",draft:!1,editUrl:"https://github.com/facebook/flipper/blob/main/website/../docs/extending/error-handling.mdx",tags:[],version:"current",frontMatter:{id:"error-handling",title:"Error Handling"},sidebar:"main",previous:{title:"Client Plugin API",permalink:"/docs/extending/create-plugin"},next:{title:"Architecture",permalink:"/docs/extending/arch"}},s={},c=[{value:"Android",id:"android",level:2},{value:"C++",id:"c",level:2}],u={toc:c};function m(e){var n=e.components,r=(0,o.Z)(e,a);return(0,i.mdx)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"Errors in Flipper plugins should be hidden from the user while providing actionable data to the plugin Developer."),(0,i.mdx)("h2",{id:"android"},"Android"),(0,i.mdx)("p",null,"To gracefully handle errors in Flipper, use the following classes:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"p"},"FlipperResponder")," - an instance is provided to the client plugin on every method call, which enables it to return results. When an error occurs during a Flipper method call that can't be handled, pass the error to the responder. This will let the desktop plugin handle it, and if it doesn't, the error will be displayed in the DevTools console.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"p"},"ErrorReportingRunnable")," - a custom ",(0,i.mdx)("inlineCode",{parentName:"p"},"Runnable")," that catches all exceptions, stopping them from crashing the application and reports them to Flipper. These error messages will show up in the DevTools console."))),(0,i.mdx)("p",null,"Executing the following block of code will always finish without error but may transfer any silent errors to the Flipper desktop app:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},"new ErrorReportingRunnable(mConnection) {\n  @Override\n  public void runOrThrow() throws Exception {\n    mightThrowException();\n  }\n}.run();\n")),(0,i.mdx)("p",null,"During plugin development these java stack traces are surfaced in the chrome dev console."),(0,i.mdx)("p",null,"Always use ",(0,i.mdx)("inlineCode",{parentName:"p"},"ErrorReportingRunnable")," for error handling instead of ",(0,i.mdx)("inlineCode",{parentName:"p"},"try"),"/",(0,i.mdx)("inlineCode",{parentName:"p"},"catch")," or, even worse, letting errors crash the app. With ErrorReportingRunnable you won't block anyone, and you won't hide any stack traces."),(0,i.mdx)("h2",{id:"c"},"C++"),(0,i.mdx)("p",null,"To gracefully handle errors in Flipper, all transactions are performed inside of a 'Try' block, which catches all exceptions, stops them from crashing the application,  and reports them to the plugin Developer. This includes your own customs implementations of ",(0,i.mdx)("inlineCode",{parentName:"p"},"FlipperPlugin::didConnect()")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"FlipperConnection::send()")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"::receive()"),"."),(0,i.mdx)("p",null,"This means you can safely throw exceptions in your plugin code; the exception messages will be sent to the Flipper desktop app."),(0,i.mdx)("p",null,"During plugin development the exception messages are surfaced in the Chrome dev console."),(0,i.mdx)("p",null,"If your plugin performs asynchronous work in which exceptions are thrown, these exceptions will not be caught by the Flipper infrastructure. You should handle them appropriately."))}m.isMDXComponent=!0}}]);