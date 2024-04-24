"use strict";(self.webpackChunkiudx_website=self.webpackChunkiudx_website||[]).push([[6096],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=a,k=c["".concat(s,".").concat(u)]||c[u]||d[u]||o;return n?r.createElement(k,i(i({ref:t},m),{},{components:n})):r.createElement(k,i({ref:t},m))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},53787:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={sidebar_position:16},s=void 0,p={unversionedId:"Deployment/Docker Swarm-Based Deployment/IUDX Component Installation/Data- Ingestion Server",id:"version-5.0.0/Deployment/Docker Swarm-Based Deployment/IUDX Component Installation/Data- Ingestion Server",isDocsHomePage:!1,title:"Data- Ingestion Server",description:"Will be deploying using swarm stack yaml files",source:"@site/versioned_docs/version-5.0.0/Deployment/Docker Swarm-Based Deployment/IUDX Component Installation/Data- Ingestion Server.md",sourceDirName:"Deployment/Docker Swarm-Based Deployment/IUDX Component Installation",slug:"/Deployment/Docker Swarm-Based Deployment/IUDX Component Installation/Data- Ingestion Server",permalink:"/docs/Deployment/Docker Swarm-Based Deployment/IUDX Component Installation/Data- Ingestion Server",editUrl:"https://github.com/datakaveri/iudx-developer-docs/blob/main/versioned_docs/version-5.0.0/Deployment/Docker Swarm-Based Deployment/IUDX Component Installation/Data- Ingestion Server.md",tags:[],version:"5.0.0",sidebarPosition:16,frontMatter:{sidebar_position:16},sidebar:"version-5.0.0/tutorialSidebar",previous:{title:"File Server",permalink:"/docs/Deployment/Docker Swarm-Based Deployment/IUDX Component Installation/File Server"},next:{title:"GIS-Server",permalink:"/docs/Deployment/Docker Swarm-Based Deployment/IUDX Component Installation/GIS-Server"}},m=[{value:"Installation",id:"installation",children:[],level:3},{value:"Notes",id:"notes",children:[],level:3}],c={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Will be deploying using swarm stack yaml files"),(0,o.kt)("h3",{id:"installation"},"Installation"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Navigate to the directory:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"cd iudx-deployment/Docker-Swarm-deployment/single-node/data-ingestion-server/\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Assign the node label if not assigned during swarm installation:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"docker node update --label-add di-node=true <node_name>\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Make a copy of the sample secrets directory by running the following command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"cp -r example-secrets/secrets .\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Provide a correct config file for bringing up Data-Ingestion server. Substitute appropriate values using commands mentioned in config files.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Configure the ",(0,o.kt)("inlineCode",{parentName:"p"},".di.env")," file, referring to ",(0,o.kt)("inlineCode",{parentName:"p"},"example-env"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Define appropriate values of resources:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"CPU requests and limits"),(0,o.kt)("li",{parentName:"ul"},"RAM requests and limits"),(0,o.kt)("li",{parentName:"ul"},"PID limit")),(0,o.kt)("p",{parentName:"li"},"in ",(0,o.kt)("inlineCode",{parentName:"p"},"di-stack.resources.yml")," as shown in the sample file ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/datakaveri/iudx-deployment/blob/4.5.0/Docker-Swarm-deployment/single-node/data-ingestion-server/example-di-stack.resources.yaml"},"example-di-stack.resources.yaml")),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To install Data-Ingestion server stack, use the following command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"cp example-di-stack.resources.yaml di-stack.resources.yaml\n\ndocker stack deploy -c di-stack.yaml -c di-stack.resources.yaml di\n")))),(0,o.kt)("h3",{id:"notes"},"Notes"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"di-server api documentation can be accessed from ",(0,o.kt)("strong",{parentName:"li"},"https://< di-domain >/apis")),(0,o.kt)("li",{parentName:"ol"},"To check if the di-server are deployed and running: ",(0,o.kt)("inlineCode",{parentName:"li"},"docker stack ps di")),(0,o.kt)("li",{parentName:"ol"},"For more information on installation instructions, refer ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/datakaveri/iudx-deployment/tree/4.5.0/Docker-Swarm-deployment/single-node/data-ingestion-server#install"},"here")),"."),(0,o.kt)("li",{parentName:"ol"},"For more information about the di-server, refer ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/datakaveri/iudx-data-ingestion-server#iudx-data-ingestion-server"},"here")),".")))}d.isMDXComponent=!0}}]);