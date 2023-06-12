"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7993],{39058:(e,t,a)=>{a.d(t,{Z:()=>_});var l=a(80102),r=a(67294),n=a(86010),i=a(13313),m=a(87524),s=a(39960),o=a(95999);const c="sidebar_re4s",u="sidebarItemTitle_pO2u",d="sidebarItemList_Yudw",g="sidebarItem__DBe",p="sidebarItemLink_mo7H",v="sidebarItemLinkActive_I1ZP";function f(e){var t=e.sidebar;return r.createElement("aside",{className:"col col--3"},r.createElement("nav",{className:(0,n.default)(c,"thin-scrollbar"),"aria-label":(0,o.translate)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,n.default)(u,"margin-bottom--md")},t.title),r.createElement("ul",{className:(0,n.default)(d,"clean-list")},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:g},r.createElement(s.default,{isNavLink:!0,to:e.permalink,className:p,activeClassName:v},e.title))})))))}var E=a(13102);function h(e){var t=e.sidebar;return r.createElement("ul",{className:"menu__list"},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:"menu__list-item"},r.createElement(s.default,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title))})))}function b(e){return r.createElement(E.Zo,{component:h,props:e})}function N(e){var t=e.sidebar,a=(0,m.i)();return null!=t&&t.items.length?"mobile"===a?r.createElement(b,{sidebar:t}):r.createElement(f,{sidebar:t}):null}var P=["sidebar","toc","children"];function _(e){var t=e.sidebar,a=e.toc,m=e.children,s=(0,l.Z)(e,P),o=t&&t.items.length>0;return r.createElement(i.Z,s,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement(N,{sidebar:t}),r.createElement("main",{className:(0,n.default)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},m),a&&r.createElement("div",{className:"col col--2"},a))))}},99703:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(67294),r=a(95999),n=a(32244);function i(e){var t=e.metadata,a=t.previousPage,i=t.nextPage;return l.createElement("nav",{className:"pagination-nav","aria-label":(0,r.translate)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&l.createElement(n.Z,{permalink:a,title:l.createElement(r.default,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),i&&l.createElement(n.Z,{permalink:i,title:l.createElement(r.default,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},30390:(e,t,a)=>{a.d(t,{Z:()=>D});var l=a(67294),r=a(86010),n=a(9460),i=a(44996);function m(e){var t,a=e.children,r=e.className,m=(0,n.C)(),s=m.frontMatter,o=m.assets,c=(0,i.useBaseUrlUtils)().withBaseUrl,u=null!=(t=o.image)?t:s.image;return l.createElement("article",{className:r,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},u&&l.createElement("meta",{itemProp:"image",content:c(u,{absolute:!0})}),a)}var s=a(39960);const o="title_f1Hy";function c(e){var t=e.className,a=(0,n.C)(),i=a.metadata,m=a.isBlogPostPage,c=i.permalink,u=i.title,d=m?"h1":"h2";return l.createElement(d,{className:(0,r.default)(o,t),itemProp:"headline"},m?u:l.createElement(s.default,{itemProp:"url",to:c},u))}var u=a(95999),d=a(88824);const g="container_mt6G";function p(e){var t,a=e.readingTime,r=(t=(0,d.c)().selectMessage,function(e){var a=Math.ceil(e);return t(a,(0,u.translate)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))});return l.createElement(l.Fragment,null,r(a))}function v(e){var t=e.date,a=e.formattedDate;return l.createElement("time",{dateTime:t,itemProp:"datePublished"},a)}function f(){return l.createElement(l.Fragment,null," \xb7 ")}function E(e){var t=e.className,a=(0,n.C)().metadata,i=a.date,m=a.formattedDate,s=a.readingTime;return l.createElement("div",{className:(0,r.default)(g,"margin-vert--md",t)},l.createElement(v,{date:i,formattedDate:m}),void 0!==s&&l.createElement(l.Fragment,null,l.createElement(f,null),l.createElement(p,{readingTime:s})))}function h(e){return e.href?l.createElement(s.default,e):l.createElement(l.Fragment,null,e.children)}function b(e){var t=e.author,a=e.className,n=t.name,i=t.title,m=t.url,s=t.imageURL,o=t.email,c=m||o&&"mailto:"+o||void 0;return l.createElement("div",{className:(0,r.default)("avatar margin-bottom--sm",a)},s&&l.createElement(h,{href:c,className:"avatar__photo-link"},l.createElement("img",{className:"avatar__photo",src:s,alt:n})),n&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(h,{href:c,itemProp:"url"},l.createElement("span",{itemProp:"name"},n))),i&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},i)))}const N="authorCol_Hf19",P="imageOnlyAuthorRow_pa_O",_="imageOnlyAuthorCol_G86a";function k(e){var t=e.className,a=(0,n.C)(),i=a.metadata.authors,m=a.assets;if(0===i.length)return null;var s=i.every((function(e){return!e.name}));return l.createElement("div",{className:(0,r.default)("margin-top--md margin-bottom--sm",s?P:"row",t)},i.map((function(e,t){var a;return l.createElement("div",{className:(0,r.default)(!s&&"col col--6",s?_:N),key:t},l.createElement(b,{author:Object.assign({},e,{imageURL:null!=(a=m.authorsImageUrls[t])?a:e.imageURL})}))})))}function T(){return l.createElement("header",null,l.createElement(c,null),l.createElement(E,null),l.createElement(k,null))}var w=a(18780),B=a(51788),C=a.n(B);function y(e){var t=e.children,a=e.className,i=(0,n.C)().isBlogPostPage;return l.createElement("div",{id:i?w.blogPostContainerID:void 0,className:(0,r.default)("markdown",a),itemProp:"articleBody"},l.createElement(C(),null,t))}var Z=a(86121),A=a.n(Z),I=a(71526),L=a(83117),x=a(80102),M=["blogPostTitle"];function R(){return l.createElement("b",null,l.createElement(u.default,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function U(e){var t=e.blogPostTitle,a=(0,x.Z)(e,M);return l.createElement(s.default,(0,L.Z)({"aria-label":(0,u.translate)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},a),l.createElement(R,null))}const F="blogPostFooterDetailsFull_mRVl";function O(){var e=(0,n.C)(),t=e.metadata,a=e.isBlogPostPage,i=t.tags,m=t.title,s=t.editUrl,o=t.hasTruncateMarker,c=!a&&o,u=i.length>0;return u||c||s?l.createElement("footer",{className:(0,r.default)("row docusaurus-mt-lg",a&&F)},u&&l.createElement("div",{className:(0,r.default)("col",{"col--9":c})},l.createElement(I.Z,{tags:i})),a&&s&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(A(),{editUrl:s})),c&&l.createElement("div",{className:(0,r.default)("col text--right",{"col--3":u})},l.createElement(U,{blogPostTitle:m,to:t.permalink}))):null}function D(e){var t=e.children,a=e.className,i=(0,n.C)().isBlogPostPage?void 0:"margin-bottom--xl";return l.createElement(m,{className:(0,r.default)(i,a)},l.createElement(T,null),l.createElement(y,null,t),l.createElement(O,null))}},79985:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(67294),r=a(9460),n=a(30390);function i(e){var t=e.items,a=e.component,i=void 0===a?n.Z:a;return l.createElement(l.Fragment,null,t.map((function(e){var t=e.content;return l.createElement(r.n,{key:t.metadata.permalink,content:t},l.createElement(i,null,l.createElement(t,null)))})))}},9460:(e,t,a)=>{a.d(t,{C:()=>m,n:()=>i});var l=a(67294),r=a(64744),n=l.createContext(null);function i(e){var t=e.children,a=e.content,r=e.isBlogPostPage,i=function(e){var t=e.content,a=e.isBlogPostPage;return(0,l.useMemo)((function(){return{metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a}}),[t,a])}({content:a,isBlogPostPage:void 0!==r&&r});return l.createElement(n.Provider,{value:i},t)}function m(){var e=(0,l.useContext)(n);if(null===e)throw new r.i6("BlogPostProvider");return e}}}]);