import{j as r}from"./header-BpO07gUl.js";import{r as i}from"./vendor-DbStWbRy.js";import{d as p}from"./Edit-CHcStD_f.js";import{u as x,a as j,c as u,B as o,q as m,I as E,x as D,M as N,p as O,J as S}from"./index-DY3Nn9As.js";import{d as b}from"./Delete-DhenMsAm.js";import{S as g}from"./Sidebar-DQqsPqq-.js";import{D as L}from"./DataGrid-CY_eJP15.js";import"./footer-DRM0n1_S.js";const _=()=>{const d=x(),t=j(),{error:s,orders:l}=u(e=>e.allOrders),{error:a,isDeleted:n}=u(e=>e.order),f=e=>{t(S(e))};i.useEffect(()=>{s&&(o.error(s),t(m())),a&&(o.error(a),t(m())),n&&(o.success("Order Deleted Successfully"),d("/admin/orders"),t({type:E})),t(D())},[t,s,a,d,n]);const h=[{field:"id",headerName:"Order ID",minWidth:300,flex:1},{field:"status",headerName:"Status",minWidth:150,flex:.5,cellClassName:e=>e.value==="Delivered"?"greenColor":"redColor"},{field:"itemsQty",headerName:"Items Qty",type:"number",minWidth:150,flex:.4},{field:"amount",headerName:"Amount",type:"number",minWidth:270,flex:.5},{field:"actions",flex:.3,headerName:"Actions",minWidth:150,type:"number",sortable:!1,renderCell:e=>r.jsxs(i.Fragment,{children:[r.jsx(O,{to:`/admin/order/${e.row.id}`,children:r.jsx(p,{})}),r.jsxs("button",{className:"MuiButtonBase-root MuiButton-root MuiButton-text",onClick:()=>f(e.row.id),children:[r.jsx("span",{class:"MuiButton-label",children:r.jsx(b,{})}),r.jsx("span",{class:"MuiTouchRipple-root"})]})]})}],c=[];return l&&l.forEach(e=>{c.push({id:e._id,itemsQty:e.orderItems.length,amount:e.totalPrice,status:e.orderStatus})}),r.jsxs(i.Fragment,{children:[r.jsx(N,{title:"ALL ORDERS - Admin"}),r.jsxs("div",{className:"dashboard",children:[r.jsx(g,{}),r.jsxs("div",{className:"productListContainer",children:[r.jsx("h1",{id:"productListHeading",children:"ALL ORDERS"}),r.jsx(L,{rows:c,columns:h,pageSize:10,disableSelectionOnClick:!0,className:"productListTable",autoHeight:!0})]})]})]})};export{_ as default};