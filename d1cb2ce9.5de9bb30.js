(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{165:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return c})),t.d(e,"metadata",(function(){return s})),t.d(e,"rightToc",(function(){return l})),t.d(e,"default",(function(){return u}));var o=t(2),a=t(6),i=(t(0),t(185)),r=t(190),c={id:"advanced-navigation",title:"Advanced navigation",sidebar_label:"Advanced navigation"},s={id:"advanced-navigation",isDocsHomePage:!1,title:"Advanced navigation",description:"Tab navigation",source:"@site/docs/docs-advanced-navigation.mdx",permalink:"/react-native-navigation/docs/advanced-navigation",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/docs/docs-advanced-navigation.mdx",sidebar_label:"Advanced navigation",sidebar:"docs",previous:{title:"Basic navigation",permalink:"/react-native-navigation/docs/basic-navigation"},next:{title:"Screen Lifecycle",permalink:"/react-native-navigation/docs/screen-lifecycle"}},l=[{value:"Tab navigation",id:"tab-navigation",children:[]},{value:"Replacing the root",id:"replacing-the-root",children:[]},{value:"Conditional roots",id:"conditional-roots",children:[]}],p={rightToc:l};function u(n){var e=n.components,t=Object(a.a)(n,["components"]);return Object(i.b)("wrapper",Object(o.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"tab-navigation"},"Tab navigation"),Object(i.b)("p",null,"As mobile applications become bigger and more complex, they usually end up containing multiple primary high-level destinations, which are logically independent from one another. The ",Object(i.b)("inlineCode",{parentName:"p"},"BottomTabs")," layout is often used when an app contains three to five top-level destinations which should be accessible from anywhere in the app."),Object(i.b)("p",null,"Lets return to the example code from the previous section (",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"basic-navigation"}),"Basic navigation"),") and see how we can convert it to a tab-based application. We'll use the BottomTabs layout to display tabs at the bottom of the screen. Similarly to ",Object(i.b)("inlineCode",{parentName:"p"},"Stack")," layout, The BottomTabs layout also contains a ",Object(i.b)("inlineCode",{parentName:"p"},"children")," property where each child will be displayed in a tab."),Object(i.b)("p",null,"Lets change our code to the following and reload the app."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"const Navigation = require('./services/Navigation');\nconst React = require('react');\nconst { View, Text, Button, StyleSheet } = require('react-native');\n\nconst HomeScreen = (props) => {\n  return (\n    <View style={styles.root}>\n      <Text>Hello React Native Navigation \ud83d\udc4b</Text>\n\n      <Button\n        title='Push Settings Screen'\n        color='#710ce3'\n        onPress={() => Navigation.push(props.componentId, {\n          component: {\n            name: 'Settings'\n          }\n        })} />\n    </View>\n  );\n};\nHomeScreen.options = {\n  topBar: {\n    title: {\n      text: 'Home'\n    }\n  },\n  bottomTab: {\n    text: 'Home'\n  }\n};\n\nconst SettingsScreen = () => {\n  return (\n    <View style={styles.root}>\n      <Text>Settings Screen</Text>\n    </View>\n  );\n}\nSettingsScreen.options = {\n  topBar: {\n    title: {\n      text: 'Settings'\n    }\n  },\n  bottomTab: {\n    text: 'Settings'\n  }\n}\n\nNavigation.registerComponent('Home', () => HomeScreen);\nNavigation.registerComponent('Settings', () => SettingsScreen);\n\nNavigation.setDefaultOptions({\n  statusBar: {\n    backgroundColor: '#4d089a'\n  },\n  topBar: {\n    title: {\n      color: 'white'\n    },\n    backButton: {\n      color: 'white'\n    },\n    background: {\n      color: '#4d089a'\n    }\n  },\n  bottomTab: {\n    fontSize: 14,\n    selectedFontSize: 14\n  }\n});\n\nNavigation.events().registerAppLaunchedListener(async () => {\n  Navigation.setRoot({\n    root: {\n      bottomTabs: {\n        children: [\n          {\n            stack: {\n              children: [\n                {\n                  component: {\n                    name: 'Home'\n                  }\n                },\n              ]\n            }\n          },\n          {\n            stack: {\n              children: [\n                {\n                  component: {\n                    name: 'Settings'\n                  }\n                }\n              ]\n            }\n          }\n        ]\n      }\n    }\n  });\n});\n\nconst styles = StyleSheet.create({\n  root: {\n    flex: 1,\n    alignItems: 'center',\n    justifyContent: 'center',\n    backgroundColor: 'whitesmoke'\n  }\n});\n")),Object(i.b)("p",null,"Now our app has two tabs at the bottom of the screen and our users can easily navigate between them."),Object(i.b)("img",{width:"40%",src:Object(r.a)("img/stack4.png")}),Object(i.b)("h2",{id:"replacing-the-root"},"Replacing the root"),Object(i.b)("p",null,"Up until now, we've discussed how to navigate within the same layout structure. We'll now learn how to replace the entire layout structure to display a new Root. A real life example for this use case would be, for instance, if you need to switch from a login screen to the app's main root. Replacing the root fits this use case since we'd like to discard the previous root (login root) entirely when switching to the main root."),Object(i.b)("p",null,"To demonstrate this, we'll make the following changes to our code:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Add a login screen with a login button."),Object(i.b)("li",{parentName:"ol"},"When the button is clicked, we will switch to the main root."),Object(i.b)("li",{parentName:"ol"},"Replace our current root with the login screen. We'll also extract both roots to variables to improve code readability.")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"const LoginScreen = () => {\n  return (\n    <View style={styles.root}>\n      <Button\n        title='Login'\n        color='#710ce3'\n        onPress={() => Navigation.setRoot(mainRoot)}\n      />\n    </View>\n  );\n};\n\nconst HomeScreen = (props) => {\n  return (\n    <View style={styles.root}>\n      <Text>Hello React Native Navigation \ud83d\udc4b</Text>\n\n      <Button\n        title='Push Settings Screen'\n        color='#710ce3'\n        onPress={() => Navigation.push(props.componentId, {\n          component: {\n            name: 'Settings'\n          }\n        })} />\n    </View>\n  );\n};\nHomeScreen.options = {\n  topBar: {\n    title: {\n      text: 'Home'\n    }\n  },\n  bottomTab: {\n    text: 'Home'\n  }\n};\n\nconst SettingsScreen = () => {\n  return (\n    <View style={styles.root}>\n      <Text>Settings Screen</Text>\n    </View>\n  );\n}\nSettingsScreen.options = {\n  topBar: {\n    title: {\n      text: 'Settings'\n    }\n  },\n  bottomTab: {\n    text: 'Settings'\n  }\n}\n\nNavigation.registerComponent('Login', () => LoginScreen);\nNavigation.registerComponent('Home', () => HomeScreen);\nNavigation.registerComponent('Settings', () => SettingsScreen);\n\nconst mainRoot = {\n  root: {\n    bottomTabs: {\n      children: [\n        {\n          stack: {\n            children: [\n              {\n                component: {\n                  name: 'Home'\n                }\n              },\n            ]\n          }\n        },\n        {\n          stack: {\n            children: [\n              {\n                component: {\n                  name: 'Settings'\n                }\n              }\n            ]\n          }\n        }\n      ]\n    }\n  }\n};\nconst loginRoot = {\n  root: {\n    component: {\n      name: 'Login'\n    }\n  }\n};\n\n\nNavigation.setDefaultOptions({\n  statusBar: {\n    backgroundColor: '#4d089a'\n  },\n  topBar: {\n    title: {\n      color: 'white'\n    },\n    backButton: {\n      color: 'white'\n    },\n    background: {\n      color: '#4d089a'\n    }\n  },\n  bottomTab: {\n    fontSize: 14,\n    selectedFontSize: 14\n  }\n});\nNavigation.events().registerAppLaunchedListener(async () => {\n  Navigation.setRoot(loginRoot);\n});\n\nconst styles = StyleSheet.create({\n  root: {\n    flex: 1,\n    alignItems: 'center',\n    justifyContent: 'center',\n    backgroundColor: 'whitesmoke'\n  }\n});\n")),Object(i.b)("h2",{id:"conditional-roots"},"Conditional roots"),Object(i.b)("p",null,"Now that our initial root is the Login root, we're facing a new problem - how do we show the Login root only to users that are not logged in? Since our initial root is determined in the ",Object(i.b)("inlineCode",{parentName:"p"},"registerAppLaunchedListener")," callback, we'll check if a user is logged in there and set the appropriate root accordingly."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"Navigation.events().registerAppLaunchedListener(async () => {\n  Navigation.setRoot(isLoggedIn() ? mainRoot : loginRoot);\n});\n\nfunction isLoggedIn() {\n  // TODO: your business logic goes here\n}\n")))}u.isMDXComponent=!0},185:function(n,e,t){"use strict";t.d(e,"a",(function(){return u})),t.d(e,"b",(function(){return d}));var o=t(0),a=t.n(o);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function c(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,o,a=function(n,e){if(null==n)return{};var t,o,a={},i=Object.keys(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var l=a.a.createContext({}),p=function(n){var e=a.a.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):c(c({},e),n)),t},u=function(n){var e=p(n.components);return a.a.createElement(l.Provider,{value:e},n.children)},b={inlineCode:"code",wrapper:function(n){var e=n.children;return a.a.createElement(a.a.Fragment,{},e)}},g=a.a.forwardRef((function(n,e){var t=n.components,o=n.mdxType,i=n.originalType,r=n.parentName,l=s(n,["components","mdxType","originalType","parentName"]),u=p(t),g=o,d=u["".concat(r,".").concat(g)]||u[g]||b[g]||i;return t?a.a.createElement(d,c(c({ref:e},l),{},{components:t})):a.a.createElement(d,c({ref:e},l))}));function d(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var i=t.length,r=new Array(i);r[0]=g;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=n,c.mdxType="string"==typeof n?n:o,r[1]=c;for(var l=2;l<i;l++)r[l]=t[l];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},186:function(n,e,t){"use strict";var o=t(0),a=t(36);e.a=function(){return Object(o.useContext)(a.a)}},190:function(n,e,t){"use strict";t.d(e,"a",(function(){return i}));var o=t(186),a=t(193);function i(n,{forcePrependBaseUrl:e=!1,absolute:t=!1}={}){const{siteConfig:{baseUrl:i="/",url:r}={}}=Object(o.a)();if(!n)return n;if(e)return i+n;if(!Object(a.a)(n))return n;const c=i+n.replace(/^\//,"");return t?r+c:c}},193:function(n,e,t){"use strict";function o(n){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(n)}t.d(e,"a",(function(){return o}))}}]);