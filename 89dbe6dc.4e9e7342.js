(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{146:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),o=(n(0),n(185)),i={id:"style-constants",title:"Constants",sidebar_label:"Constants"},s={id:"style-constants",isDocsHomePage:!1,title:"Constants",description:"React Native Navigation exposes a set of constants which can be used to get the dimensions of various navigation elements on the screen: StatusBar, TopBar and BottomTabs.",source:"@site/docs/style-constants.mdx",permalink:"/react-native-navigation/docs/style-constants",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/docs/style-constants.mdx",sidebar_label:"Constants",sidebar:"docs",previous:{title:"Changing fonts",permalink:"/react-native-navigation/docs/style-fonts"},next:{title:"Community libraries",permalink:"/react-native-navigation/docs/community-libraries"}},c=[{value:"When are constants evaluated",id:"when-are-constants-evaluated",children:[]},{value:"API",id:"api",children:[]}],l={rightToc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"React Native Navigation exposes a set of constants which can be used to get the dimensions of various navigation elements on the screen: StatusBar, TopBar and BottomTabs."),Object(o.b)("h2",{id:"when-are-constants-evaluated"},"When are constants evaluated"),Object(o.b)("p",null,"Some of the values exposed through the constants API are actually evaluated only after the UI is created (",Object(o.b)("inlineCode",{parentName:"p"},"setRoot")," has been called) and therefore are not accessible through static getters."),Object(o.b)("p",null,"For example, if you need to get the height of the BottomTabs, you'll first need to have BottomTabs visible on the screen and only then retrieve their height via the constants API."),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"We recommend you don't cache the actual constants object returned by ",Object(o.b)("inlineCode",{parentName:"p"},"await Navigation.constants()")," as it might not be accurate later on when, for example, a new root is set or orientation changes."))),Object(o.b)("h2",{id:"api"},"API"),Object(o.b)("p",null,"As explained above, constants are evaluated in native each time the API is invoked. That's why ",Object(o.b)("inlineCode",{parentName:"p"},"Navigation.constants()")," returns a promise and the use is as follows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const { Navigation } = require('react-native-navigation');\nconst {\n  statusBarHeight,\n  topBarHeight,\n  bottomTabsHeight\n} = await Navigation.constants();\n")))}p.isMDXComponent=!0},185:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?r.a.createElement(m,s(s({ref:t},l),{},{components:n})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);