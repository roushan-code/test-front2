import{j as s}from"./header-BpO07gUl.js";import{r}from"./vendor-DbStWbRy.js";import{u as x,a as P,b as j,c as h,B as l,d as g,L as v,M as N,e as C,r as S}from"./index-DY3Nn9As.js";import{d as y}from"./Lock-CJUoFPTZ.js";import"./footer-DRM0n1_S.js";const U=()=>{const d=x(),a=P(),{token:u}=j(),{error:t,success:n,loading:m}=h(e=>e.forgotPassword),[i,p]=r.useState(""),[c,w]=r.useState(""),f=e=>{e.preventDefault();const o=new FormData;o.set("password",i),o.set("confirmPassword",c),a(S(u,o))};return r.useEffect(()=>{t&&(l.error(t),a(g())),n&&(l.success("Password Updated Successfully"),d("/login"))},[a,t,d,n]),s.jsx(r.Fragment,{children:m?s.jsx(v,{}):s.jsxs(r.Fragment,{children:[s.jsx(N,{title:"Change Password"}),s.jsx("div",{className:"resetPasswordContainer",children:s.jsxs("div",{className:"resetPasswordBox",children:[s.jsx("h2",{className:"resetPasswordHeading",children:"Update Profile"}),s.jsxs("form",{className:"resetPasswordForm",onSubmit:f,children:[s.jsxs("div",{children:[s.jsx(C,{}),s.jsx("input",{type:"password",placeholder:"New Password",required:!0,value:i,onChange:e=>p(e.target.value)})]}),s.jsxs("div",{className:"loginPassword",children:[s.jsx(y,{}),s.jsx("input",{type:"password",placeholder:"Confirm Password",required:!0,value:c,onChange:e=>w(e.target.value)})]}),s.jsx("input",{type:"submit",value:"Update",className:"resetPasswordBtn"})]})]})})]})})};export{U as default};