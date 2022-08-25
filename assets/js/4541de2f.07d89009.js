"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1339],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>u,MDXProvider:()=>s,mdx:()=>v,useMDXComponents:()=>c,withMDXComponents:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),d=function(e){return function(t){var n=c(t.components);return r.createElement(e,a({},t,{components:n}))}},c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=c(n),s=o,f=d["".concat(l,".").concat(s)]||d[s]||m[s]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},67808:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>v,default:()=>y,frontMatter:()=>f,metadata:()=>b,toc:()=>g});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),l=n(44996),i=n(39960),p=n(65488),u=n(85162),d=["components"],c={toc:[{value:"Gradle Dependencies",id:"gradle-dependencies",level:3},{value:"Sending Retrofit Service",id:"sending-retrofit-service",level:3}]};function s(e){var t=e.components,n=(0,o.Z)(e,d);return(0,a.mdx)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h3",{id:"gradle-dependencies"},"Gradle Dependencies"),(0,a.mdx)("p",null,"Ensure that you already have an explicit dependency in your application's ",(0,a.mdx)("inlineCode",{parentName:"p"},"build.gradle")," including the plugin dependency, as shown in the following example:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-groovy"},'dependencies {\n  implementation "com.squareup.retrofit2:retrofit:2.9.0"\n  implementation "com.squareup.retrofit2:converter-protobuf:2.9.0"\n\n  // update version below to match latest Flipper client app\n  debugImplementation "com.facebook.flipper:flipper-retrofit2-protobuf-plugin:0.84.0"\n}\n')),(0,a.mdx)("h3",{id:"sending-retrofit-service"},"Sending Retrofit Service"),(0,a.mdx)("p",null,"If you have a Retrofit service interface ",(0,a.mdx)("inlineCode",{parentName:"p"},"PersonService")," which has Protobuf body or return types then at the time you create your implementation, call the plugin with your ",(0,a.mdx)("inlineCode",{parentName:"p"},"baseURL")," and service class, as follows:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"import com.facebook.flipper.plugins.retrofit2protobuf.SendProtobufToFlipperFromRetrofit\n...\nval personService = retrofit.create(PersonService::class.java)\nSendProtobufToFlipperFromRetrofit(baseUrl, PersonService::class.java)\n")))}s.isMDXComponent=!0;var m=["components"],f={},v=void 0,b={type:"mdx",permalink:"/docs/plugins/network/setup",source:"@site/src/embedded-pages/docs/plugins/network/setup.mdx",description:"To use the Network plugin, you need to add the plugin to your Flipper client instance.",frontMatter:{}},g=[{value:"Android",id:"android",level:2},{value:"OkHttp Integration",id:"okhttp-integration",level:3},{value:"Protobuf / Retrofit Integration",id:"protobuf--retrofit-integration",level:3},{value:"iOS",id:"ios",level:2},{value:"Protobuf + Retrofit Setup",id:"protobuf--retrofit-setup",level:2}],h={toc:g};function y(e){var t=e.components,n=(0,o.Z)(e,m);return(0,a.mdx)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"To use the ",(0,a.mdx)(i.default,{to:(0,l.default)("/docs/features/plugins/network"),mdxType:"Link"},"Network plugin"),", you need to add the plugin to your Flipper client instance."),(0,a.mdx)("h2",{id:"android"},"Android"),(0,a.mdx)("p",null,"The network plugin is shipped as a separate Maven artifact, as follows:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n  debugImplementation 'com.facebook.flipper:flipper-network-plugin:0.162.0'\n}\n")),(0,a.mdx)("p",null,"Once added to your dependencies, you can instantiate the plugin and add it to the client:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-java"},"import com.facebook.flipper.plugins.network.NetworkFlipperPlugin;\n\nNetworkFlipperPlugin networkFlipperPlugin = new NetworkFlipperPlugin();\nnew NetworkingModule.CustomClientBuilder() {\n    @Override\n    public void apply(OkHttpClient.Builder builder) {\n        builder.addNetworkInterceptor(new FlipperOkhttpInterceptor(networkFlipperPlugin));\n    }\n});\nclient.addPlugin(networkFlipperPlugin);\n")),(0,a.mdx)("h3",{id:"okhttp-integration"},"OkHttp Integration"),(0,a.mdx)("p",null,"If you are using the popular OkHttp library, you can use the Interceptors system to automatically hook into your existing stack, as shown in the following snippet:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-java"},"import com.facebook.flipper.plugins.network.FlipperOkhttpInterceptor;\n\nnew OkHttpClient.Builder()\n    .addNetworkInterceptor(new FlipperOkhttpInterceptor(networkFlipperPlugin))\n    .build();\n")),(0,a.mdx)("p",null,"As interceptors can modify the request and response, add the Flipper interceptor after all others to get an accurate view of the network traffic."),(0,a.mdx)("h3",{id:"protobuf--retrofit-integration"},"Protobuf / Retrofit Integration"),(0,a.mdx)("p",null,"If you are using Retrofit with Protobuf request or response types, you can setup automatic decoding so that the network inspector can display a human readable payload. First you must add the separate dependency:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n  debugImplementation 'com.facebook.flipper:flipper-retrofit2-protobuf-plugin:0.91.2'\n}\n")),(0,a.mdx)("p",null,"Then call ",(0,a.mdx)("inlineCode",{parentName:"p"},"SendProtobufToFlipperFromRetrofit")," for each service class:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin"},'import com.facebook.flipper.plugins.retrofit2protobuf.SendProtobufToFlipperFromRetrofit\n\nSendProtobufToFlipperFromRetrofit("https://baseurl.com/", MyApiService::class.java)\n')),(0,a.mdx)("h2",{id:"ios"},"iOS"),(0,a.mdx)("p",null,"To enable network inspection, add the following pod to your Podfile:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-ruby"},"pod 'FlipperKit/SKIOSNetworkPlugin', '~>' + flipperkit_version\n")),(0,a.mdx)("p",null,"Initialize the plugin in the following way by updating AppDelegate.m:"),(0,a.mdx)(p.default,{defaultValue:"objc",values:[{label:"ObjC",value:"objc"},{label:"Swift",value:"swift"}],mdxType:"Tabs"},(0,a.mdx)(u.default,{value:"objc",mdxType:"TabItem"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-objc"},"#import <FlipperKitNetworkPlugin/FlipperKitNetworkPlugin.h>\n\n[[FlipperClient sharedClient] addPlugin: [[FlipperKitNetworkPlugin alloc] initWithNetworkAdapter:[SKIOSNetworkAdapter new]]];\n"))),(0,a.mdx)(u.default,{value:"swift",mdxType:"TabItem"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-swift"},"import FlipperKit\n\nclient?.add(FlipperKitNetworkPlugin(networkAdapter: SKIOSNetworkAdapter()))\n")))),(0,a.mdx)("h2",{id:"protobuf--retrofit-setup"},"Protobuf + Retrofit Setup"),(0,a.mdx)(s,{mdxType:"ProtobufRetrofitSetup"}))}y.isMDXComponent=!0},85162:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var r=n(67294),o=n(86010);const a="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,o.default)(a,l),hidden:n},t)}},65488:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var r=n(83117),o=n(67294),a=n(86010),l=n(72389),i=n(67392),p=n(7094),u=n(12466);const d="tabList__CuJ",c="tabItem_LNqP";function s(e){var t,n,l=e.lazy,s=e.block,m=e.defaultValue,f=e.values,v=e.groupId,b=e.className,g=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=f?f:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,i.l)(h,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===m?m:null!=(t=null!=m?m:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:g[0].props.value;if(null!==w&&!h.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var x=(0,p.U)(),k=x.tabGroupChoices,N=x.setTabGroupChoices,O=(0,o.useState)(w),P=O[0],T=O[1],F=[],S=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var j=k[v];null!=j&&j!==P&&h.some((function(e){return e.value===j}))&&T(j)}var I=function(e){var t=e.currentTarget,n=F.indexOf(t),r=h[n].value;r!==P&&(S(t),T(r),null!=v&&N(v,String(r)))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,o=F.indexOf(e.currentTarget)+1;n=null!=(r=F[o])?r:F[0];break;case"ArrowLeft":var a,l=F.indexOf(e.currentTarget)-1;n=null!=(a=F[l])?a:F[F.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,a.default)("tabs-container",d)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.default)("tabs",{"tabs--block":s},b)},h.map((function(e){var t=e.value,n=e.label,l=e.attributes;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:P===t?0:-1,"aria-selected":P===t,key:t,ref:function(e){return F.push(e)},onKeyDown:C,onFocus:I,onClick:I},l,{className:(0,a.default)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":P===t})}),null!=n?n:t)}))),l?(0,o.cloneElement)(g.filter((function(e){return e.props.value===P}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==P})}))))}function m(e){var t=(0,l.default)();return o.createElement(s,(0,r.Z)({key:String(t)},e))}}}]);