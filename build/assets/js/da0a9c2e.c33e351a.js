"use strict";(self.webpackChunkiudx_website=self.webpackChunkiudx_website||[]).push([[717],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,k=d["".concat(l,".").concat(u)]||d[u]||m[u]||i;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},70007:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={sidebar_position:2},l=void 0,c={unversionedId:"Deployment/Kubernetes-Based Deployment/Infrastructure Provisioning/Addons/Centralised-Nginx",id:"Deployment/Kubernetes-Based Deployment/Infrastructure Provisioning/Addons/Centralised-Nginx",isDocsHomePage:!1,title:"Centralised-Nginx",description:"+ It acts as reverse proxy doing TLS termination, rate limiting for all (HTTP) public/outward facing IUDX endpoints",source:"@site/docs/Deployment/Kubernetes-Based Deployment/Infrastructure Provisioning/Addons/Centralised-Nginx.md",sourceDirName:"Deployment/Kubernetes-Based Deployment/Infrastructure Provisioning/Addons",slug:"/Deployment/Kubernetes-Based Deployment/Infrastructure Provisioning/Addons/Centralised-Nginx",permalink:"/docs/next/Deployment/Kubernetes-Based Deployment/Infrastructure Provisioning/Addons/Centralised-Nginx",editUrl:"https://github.com/datakaveri/iudx-developer-docs/blob/main/docs/Deployment/Kubernetes-Based Deployment/Infrastructure Provisioning/Addons/Centralised-Nginx.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Provisioning Node-exporter and docker daemon metrics",permalink:"/docs/next/Deployment/Kubernetes-Based Deployment/Infrastructure Provisioning/Addons/Provisioning Node-exporter and docker daemon metrics"},next:{title:"Monitoring-stack",permalink:"/docs/next/Deployment/Kubernetes-Based Deployment/Infrastructure Provisioning/Addons/Monitoring-stack"}},p=[{value:"Prerequisite",id:"prerequisite",children:[],level:3},{value:"Installation",id:"installation",children:[{value:"To check if the nginx stacks are deployed and running use command:",id:"to-check-if-the-nginx-stacks-are-deployed-and-running-use-command",children:[],level:4},{value:'You can check any endpoint that the nginx handles. If the application server isn\u2019t deployed then it throws an error of <div class="txt_color"><code>502: Bad Gateway</code></div>',id:"you-can-check-any-endpoint-that-the-nginx-handles-if-the-application-server-isnt-deployed-then-it-throws-an-error-of-502-bad-gateway",children:[],level:4},{value:"To check certificates are generated for all requested domains:",id:"to-check-certificates-are-generated-for-all-requested-domains",children:[],level:4}],level:3}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"It acts as reverse proxy doing TLS termination, rate limiting for all (HTTP) public/outward facing IUDX endpoints")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Nginx will be deployed using stack yaml files.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"It does proxy for catalogue server, resource server (rs), AAA (Authorization, Authentication and Accounting), grafana and kibana."))),(0,i.kt)("h3",{id:"prerequisite"},"Prerequisite"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Need DNS provider credentials of the domain\xa0 to add TXT record for\xa0 Let\u2019s Encrypt Certificate generation")),(0,i.kt)("h3",{id:"installation"},"Installation"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Navigate to the below directory ",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"cd iudx-deployment/Docker-Swarm-deployment/single-node/nginx/\n")))),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Assign the node label if not assigned during swarm installation using:\xa0"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"docker node update --label-add nginx-node=true <node_name> \n")))),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Make a copy of example-configs directory:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"cp -r example-configs/conf . \n")),(0,i.kt)("hr",{parentName:"li"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Make a copy of example-secrets directory:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"cp -r example-secrets/secrets . \n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"For each nginx server configuration in conf/ direcotory that would be used (some of the config might not be used for particular deployment, in that case no need to do any changes for those configs and also no changes for error.conf, default.conf file), substitute appropriate domain name next to ",(0,i.kt)("inlineCode",{parentName:"p"},"server_name")," directive and path of certificates (by default points to self signed certificates)",(0,i.kt)("br",null)," For example:- If cos domain is ",(0,i.kt)("inlineCode",{parentName:"p"},"cos-domain.iudx.org")," , then substitute it in conf/cos.conf as follows"),(0,i.kt)("div",{class:"boxBorder"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"server_name"),"\xa0         ","\xa0","\xa0","\xa0","\xa0","cos-domain.iudx.org;",(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"ssl_certificate"),"      ","\xa0","\xa0","\xa0","\xa0","/etc/nginx/certs/cos-domain.iudx.org/cert.pem;",(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"ssl_certificate_key"),"  ","\xa0","/etc/nginx/certs/cos-domain.iudx.org/key.pem; ")),(0,i.kt)("br",null)),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"For each domain that needs a certificate generated, add domain names in ","[","conf/acme-config.json] (./example-configs/conf/acme-config.json) "),(0,i.kt)("br",null),"Example:-",(0,i.kt)("table",{parentName:"li"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},'{"hostnames": ',"[\xa0",(0,i.kt)("br",null),'\xa0\xa0\xa0 "cos-domain.iudx.org",\xa0\xa0',(0,i.kt)("br",null),'\xa0\xa0 "databroker-domain.iudx.org"]',"}")))))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"If this needs to be tried on a local machine, you can use self signed certificates (default-ssl) and not generate certificates through acme by putting an empty array for hostnames in acme-config.json.")))),(0,i.kt)("ol",{start:7},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Define Appropriate values of resources\xa0in in ",(0,i.kt)("inlineCode",{parentName:"p"},"nginx-stack.resources.yaml")," for nginx as shown in sample resource-values file ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/datakaveri/iudx-deployment/blob/5.0.0/Docker-Swarm-deployment/single-node/nginx/example-nginx-stack.resources.yaml"},"example-nginx-stack.resources.yaml"))),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"CPU requests and limits")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"RAM requests and limits")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"PID limit"))))),(0,i.kt)("ol",{start:8},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Deploy nginx stack as follows:\xa0"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"cp example-nginx-stack.resources.yaml nginx-stack.resources.yaml\n\ndocker stack deploy -c nginx-stack.yaml -c nginx-stack.resources.yaml nginx-stack \n")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Nginx URL for respective service: ",(0,i.kt)("strong",{parentName:"p"},"https://<service-domain-name",">"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For more information on installation instructions, refer ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/datakaveri/iudx-deployment/tree/5.0.0/Docker-Swarm-deployment/single-node/nginx"},"here")),"."))))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("div",{class:"test_color"},"Testing")),(0,i.kt)("h4",{id:"to-check-if-the-nginx-stacks-are-deployed-and-running-use-command"},"To check if the nginx stacks are deployed and running use command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker stack ps nginx-stack \n")),(0,i.kt)("h4",{id:"you-can-check-any-endpoint-that-the-nginx-handles-if-the-application-server-isnt-deployed-then-it-throws-an-error-of-502-bad-gateway"},"You can check any endpoint that the nginx handles. If the application server isn\u2019t deployed then it throws an error of ",(0,i.kt)("div",{class:"txt_color"},(0,i.kt)("inlineCode",{parentName:"h4"},"502: Bad Gateway"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"curl https://<api-serverdomain>/apis \n")),(0,i.kt)("h4",{id:"to-check-certificates-are-generated-for-all-requested-domains"},"To check certificates are generated for all requested domains:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Exec inside the nginx-acme container:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker exec -it <nginx-container-id> /bin/bash\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Check cert status:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"acme.sh --list\n"))))}m.isMDXComponent=!0}}]);