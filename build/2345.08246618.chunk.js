"use strict";(self.webpackChunkapi=self.webpackChunkapi||[]).push([[2345],{42345:(x,D,s)=>{s.d(D,{ProtectedSSO:()=>N});var t=s(92132),g=s(42455),R=s(38413),L=s(55356),h=s(85963),m=s(4198),A=s(83997),v=s(30893),M=s(90151),E=s(68074),C=s(7441),I=s(43739),c=s(95336),O=s(56654),o=s(55506),W=s(54514),B=s(61535),y=s(54894),d=s(12083),r=s(85629),S=s(96110),q=s(15126),ss=s(63299),ts=s(67014),as=s(59080),os=s(79275),_s=s(14718),ns=s(21272),ls=s(82437),es=s(5790),Es=s(35223),is=s(5409),ds=s(74930),rs=s(2600),Ms=s(48940),Os=s(41286),Ps=s(56336),Ds=s(13426),gs=s(84624),Rs=s(77965),Ls=s(54257),hs=s(71210),ms=s(51187),As=s(39404),vs=s(58692),Cs=s(501),Is=s(57646),cs=s(23120),Ws=s(44414),Bs=s(25962),Ts=s(14664),fs=s(42588),Ks=s(90325),Us=s(62785),us=s(87443),xs=s(41032),ys=s(22957),Ss=s(93179),js=s(73055),ps=s(15747),Ns=s(85306),Fs=s(26509),zs=s(32058),Vs=s(81185),Hs=s(82261);const j=d.Ik().shape({autoRegister:d.lc().required(o.iW.required),defaultRole:d.gl().when("autoRegister",(a,_)=>a?_.required(o.iW.required):_.nullable()),ssoLockedRoles:d.YO().nullable().of(d.gl().when("ssoLockedRoles",(a,_)=>a?_.required(o.iW.required):_.nullable()))}),p=()=>{(0,o.L4)();const{formatMessage:a}=(0,y.A)(),_=(0,r.j)(e=>e.admin_app.permissions),{lockApp:F,unlockApp:z}=(0,o.MA)(),T=(0,o.hN)(),{_unstableFormatAPIError:V,_unstableFormatValidationErrors:H}=(0,o.wq)(),{isLoading:Q,data:J}=(0,r.W)(),[X,{isLoading:Y}]=(0,r.X)(),{isLoading:Z,allowedActions:{canUpdate:f,canReadRoles:$}}=(0,o.ec)({..._.settings?.sso,readRoles:_.settings?.roles.read??[]}),{roles:U,isLoading:G}=(0,S.u)(void 0,{skip:!$}),k=async(e,P)=>{F();try{const n=await X(e);if("error"in n){(0,r.x)(n.error)&&n.error.name==="ValidationError"?P.setErrors(H(n.error)):T({type:"warning",message:V(n.error)});return}T({type:"success",message:{id:"notification.success.saved"}})}catch{T({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred, please try again."}})}finally{z()}},u=G||Z||Q;return(0,t.jsxs)(g.P,{children:[(0,t.jsx)(o.x7,{name:"SSO"}),(0,t.jsx)(R.g,{"aria-busy":Y||u,tabIndex:-1,children:(0,t.jsx)(B.l1,{onSubmit:k,initialValues:J||{autoRegister:!1,defaultRole:null,ssoLockedRoles:null},validationSchema:j,validateOnChange:!1,enableReinitialize:!0,children:({handleChange:e,isSubmitting:P,values:n,setFieldValue:b,dirty:w,errors:i})=>(0,t.jsxs)(o.lV,{children:[(0,t.jsx)(L.Q,{primaryAction:(0,t.jsx)(h.$,{disabled:!w,loading:P,startIcon:(0,t.jsx)(W.A,{}),type:"submit",size:"L",children:a({id:"global.save",defaultMessage:"Save"})}),title:a({id:"Settings.sso.title",defaultMessage:"Single Sign-On"}),subtitle:a({id:"Settings.sso.description",defaultMessage:"Configure the settings for the Single Sign-On feature."})}),(0,t.jsx)(m.s,{children:P||u?(0,t.jsx)(o.Bl,{}):(0,t.jsxs)(A.s,{direction:"column",alignItems:"stretch",gap:4,background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:[(0,t.jsx)(v.o,{variant:"delta",as:"h2",children:a({id:"global.settings",defaultMessage:"Settings"})}),(0,t.jsxs)(M.x,{gap:4,children:[(0,t.jsx)(E.E,{col:6,s:12,children:(0,t.jsx)(C.l,{disabled:!f,checked:n.autoRegister,hint:a({id:"Settings.sso.form.registration.description",defaultMessage:"Create new user on SSO login if no account exists"}),label:a({id:"Settings.sso.form.registration.label",defaultMessage:"Auto-registration"}),name:"autoRegister",offLabel:a({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:a({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:e})}),(0,t.jsx)(E.E,{col:6,s:12,children:(0,t.jsx)(I.l,{disabled:!f,hint:a({id:"Settings.sso.form.defaultRole.description",defaultMessage:"It will attach the new authenticated user to the selected role"}),error:i.defaultRole?a({id:i.defaultRole,defaultMessage:i.defaultRole}):"",label:a({id:"Settings.sso.form.defaultRole.label",defaultMessage:"Default role"}),name:"defaultRole",onChange:l=>e({target:{name:"defaultRole",value:l}}),placeholder:a({id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"}),value:n.defaultRole,children:U.map(({id:l,name:K})=>(0,t.jsx)(c.c,{value:l.toString(),children:K},l))})}),(0,t.jsx)(E.E,{col:6,s:12,children:(0,t.jsx)(O.KF,{disabled:!f,hint:a({id:"Settings.sso.form.localAuthenticationLock.description",defaultMessage:"Select the roles for which you want to disable the local authentication"}),error:i.ssoLockedRoles?a({id:i.ssoLockedRoles,defaultMessage:i.ssoLockedRoles}):"",label:a({id:"Settings.sso.form.localAuthenticationLock.label",defaultMessage:"Local authentication lock-out"}),name:"ssoLockedRoles",onChange:l=>e({target:{value:l,name:"ssoLockedRoles"}}),placeholder:a({id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"}),onClear:()=>b("ssoLockedRoles",[]),value:n.ssoLockedRoles||[],withTags:!0,children:U.map(({id:l,name:K})=>(0,t.jsx)(O.fe,{value:l.toString(),children:K},l))})})]})]})})]})})})]})},N=()=>{const a=(0,r.j)(_=>_.admin_app.permissions.settings?.sso?.main);return(0,t.jsx)(o.kz,{permissions:a,children:(0,t.jsx)(p,{})})}},96110:(x,D,s)=>{s.d(D,{u:()=>h});var t=s(21272),g=s(55506),R=s(54894),L=s(85629);const h=(m={},A)=>{const{locale:v}=(0,R.A)(),M=(0,g.QM)(v,{sensitivity:"base"}),{data:E,error:C,isError:I,isLoading:c,refetch:O}=(0,L.z)(m,A);return{roles:t.useMemo(()=>[...E??[]].sort((W,B)=>M.compare(W.name,B.name)),[E,M]),error:C,isError:I,isLoading:c,refetch:O}}}}]);
