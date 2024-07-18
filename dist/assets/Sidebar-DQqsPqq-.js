import{j as b,l as Oe}from"./header-BpO07gUl.js";import{r as x}from"./vendor-DbStWbRy.js";import{n as _,o as F,Z as Ve,_ as ae,a3 as E,ah as q,a8 as _e,ak as P,al as Fe,af as ce,a5 as $e,a4 as Le,a1 as j,aQ as Ue,aT as ue,a6 as Ne,aU as S,au as de,aS as re,aV as oe,aW as Ke,ao as k,aX as ze,ab as Be,aY as ne,aZ as se,p as A,a_ as We,a$ as Xe}from"./index-DY3Nn9As.js";var G={},qe=F;Object.defineProperty(G,"__esModule",{value:!0});var fe=G.default=void 0,Ge=qe(_()),Je=b;fe=G.default=(0,Ge.default)((0,Je.jsx)("path",{d:"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3m-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3m0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5m8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5"}),"People");var J={},Qe=F;Object.defineProperty(J,"__esModule",{value:!0});var pe=J.default=void 0,Ye=Qe(_()),Ze=b;pe=J.default=(0,Ye.default)((0,Ze.jsx)("path",{d:"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14zm12 0h-7.5l2-2H18z"}),"RateReview");var Q={},He=F;Object.defineProperty(Q,"__esModule",{value:!0});var me=Q.default=void 0,et=He(_()),le=b;me=Q.default=(0,et.default)([(0,le.jsx)("path",{d:"M17 19.22H5V7h7V5H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-7h-2z"},"0"),(0,le.jsx)("path",{d:"M19 2h-2v3h-3c.01.01 0 2 0 2h3v2.99c.01.01 2 0 2 0V7h3V5h-3zM7 9h8v2H7zm0 3v2h8v-2h-3zm0 3h8v2H7z"},"1")],"PostAdd");var Y={},tt=F;Object.defineProperty(Y,"__esModule",{value:!0});var Ie=Y.default=void 0,rt=tt(_()),ot=b;Ie=Y.default=(0,rt.default)((0,ot.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add");var Z={},nt=F;Object.defineProperty(Z,"__esModule",{value:!0});var ge=Z.default=void 0,st=nt(_()),lt=b;ge=Z.default=(0,st.default)((0,lt.jsx)("path",{d:"m7 10 5 5 5-5z"}),"ArrowDropDown");var H={},it=F;Object.defineProperty(H,"__esModule",{value:!0});var he=H.default=void 0,at=it(_()),ct=b;he=H.default=(0,at.default)((0,ct.jsx)("path",{d:"m10 17 5-5-5-5z"}),"ArrowRight");function ut(e){return Ve("MuiSimpleTreeView",e)}ae("MuiSimpleTreeView",["root"]);const dt=(e,t)=>{const r=x.useRef({}),[s,l]=x.useState(()=>{const a={};return e.forEach(n=>{n.models&&Object.entries(n.models).forEach(([i,c])=>{r.current[i]={isControlled:t[i]!==void 0,getDefaultValue:c.getDefaultValue},a[i]=c.getDefaultValue(t)})}),a});return Object.fromEntries(Object.entries(r.current).map(([a,n])=>{const i=t[a]??s[a];return[a,{value:i,setControlledValue:c=>{n.isControlled||l(g=>E({},g,{[a]:c}))}}]}))};class ft{constructor(){this.maxListeners=20,this.warnOnce=!1,this.events={}}on(t,r,s={}){let l=this.events[t];l||(l={highPriority:new Map,regular:new Map},this.events[t]=l),s.isFirst?l.highPriority.set(r,!0):l.regular.set(r,!0)}removeListener(t,r){this.events[t]&&(this.events[t].regular.delete(r),this.events[t].highPriority.delete(r))}removeAllListeners(){this.events={}}emit(t,...r){const s=this.events[t];if(!s)return;const l=Array.from(s.highPriority.keys()),p=Array.from(s.regular.keys());for(let a=l.length-1;a>=0;a-=1){const n=l[a];s.highPriority.has(n)&&n.apply(this,r)}for(let a=0;a<p.length;a+=1){const n=p[a];s.regular.has(n)&&n.apply(this,r)}}once(t,r){const s=this;this.on(t,function l(...p){s.removeListener(t,l),r.apply(s,p)})}}const pt=e=>e.isPropagationStopped!==void 0,be=()=>{const[e]=x.useState(()=>new ft),t=x.useCallback((...s)=>{const[l,p,a={}]=s;a.defaultMuiPrevented=!1,!(pt(a)&&a.isPropagationStopped())&&e.emit(l,p,a)},[e]),r=x.useCallback((s,l)=>(e.on(s,l),()=>{e.removeListener(s,l)}),[e]);return{instance:{$$publishEvent:t,$$subscribeEvent:r}}};be.params={};const mt=[be];function It(e){const t=x.useRef({});return e?(e.current==null&&(e.current={}),e.current):t.current}const gt=e=>{const t=[...mt,...e.plugins],r=t.reduce((I,d)=>d.getDefaultizedParams?d.getDefaultizedParams(I):I,e),s=dt(t,r),p=x.useRef({}).current,a=It(e.apiRef),n=x.useRef(null),i=q(n,e.rootRef),[c,g]=x.useState(()=>{const I={};return t.forEach(d=>{d.getInitialState&&Object.assign(I,d.getInitialState(r))}),I}),o=[],u={publicAPI:a,instance:p,rootRef:n},v=I=>{const d=I({instance:p,params:r,slots:r.slots,slotProps:r.slotProps,state:c,setState:g,rootRef:n,models:s});d.getRootProps&&o.push(d.getRootProps),d.publicAPI&&Object.assign(a,d.publicAPI),d.instance&&Object.assign(p,d.instance),d.contextValue&&Object.assign(u,d.contextValue)};t.forEach(v),u.runItemPlugins=I=>{let d=null,y=null;return t.forEach(R=>{if(!R.itemPlugin)return;const C=R.itemPlugin({props:I,rootRef:d,contentRef:y});C!=null&&C.rootRef&&(d=C.rootRef),C!=null&&C.contentRef&&(y=C.contentRef)}),{contentRef:y,rootRef:d}};const m=t.map(I=>I.wrapItem).filter(I=>!!I);u.wrapItem=({itemId:I,children:d})=>{let y=d;return m.forEach(R=>{y=R({itemId:I,children:y})}),y};const f=t.map(I=>I.wrapRoot).filter(I=>!!I);return u.wrapRoot=({children:I})=>{let d=I;return f.forEach(y=>{d=y({children:d})}),d},{getRootProps:(I={})=>{const d=E({role:"tree"},I,{ref:i});return o.forEach(y=>{Object.assign(d,y(I))}),d},rootRef:i,contextValue:u,instance:p}},xe=x.createContext(null);function ht(e){const{value:t,children:r}=e;return b.jsx(xe.Provider,{value:t,children:t.wrapRoot({children:r})})}const ve=({params:e})=>{const t=_e(e.id),r=x.useCallback((s,l)=>l??`${t}-${s}`,[t]);return{getRootProps:()=>({id:t}),instance:{getTreeItemIdAttribute:r}}};ve.params={id:!0};const ye=(e,t,r)=>{e.$$publishEvent(t,r)},O="__TREE_VIEW_ROOT_PARENT_ID__",Te=e=>{const t={};return e.forEach((r,s)=>{t[r]=s}),t},Ee=({items:e,isItemDisabled:t,getItemLabel:r,getItemId:s})=>{const l={},p={},a={[O]:[]},n=(c,g)=>{var m,f;const o=s?s(c):c.id;if(o==null)throw new Error(["MUI X: The Tree View component requires all items to have a unique `id` property.","Alternatively, you can use the `getItemId` prop to specify a custom id for each item.","An item was provided without id in the `items` prop:",JSON.stringify(c)].join(`
`));if(l[o]!=null)throw new Error(["MUI X: The Tree View component requires all items to have a unique `id` property.","Alternatively, you can use the `getItemId` prop to specify a custom id for each item.",`Two items were provided with the same id in the \`items\` prop: "${o}"`].join(`
`));const u=r?r(c):c.label;if(u==null)throw new Error(["MUI X: The Tree View component requires all items to have a `label` property.","Alternatively, you can use the `getItemLabel` prop to specify a custom label for each item.","An item was provided without label in the `items` prop:",JSON.stringify(c)].join(`
`));l[o]={id:o,label:u,parentId:g,idAttribute:void 0,expandable:!!((m=c.children)!=null&&m.length),disabled:t?t(c):!1},p[o]=c,a[o]=[];const v=g??O;a[v]||(a[v]=[]),a[v].push(o),(f=c.children)==null||f.forEach(h=>n(h,o))};e.forEach(c=>n(c,null));const i={};return Object.keys(a).forEach(c=>{i[c]=Te(a[c])}),{itemMetaMap:l,itemMap:p,itemOrderedChildrenIds:a,itemChildrenIndexes:i}},N=({instance:e,params:t,state:r,setState:s})=>{const l=x.useCallback(m=>r.items.itemMetaMap[m],[r.items.itemMetaMap]),p=x.useCallback(m=>r.items.itemMap[m],[r.items.itemMap]),a=x.useCallback(m=>{if(m==null)return!1;let f=e.getItemMeta(m);if(!f)return!1;if(f.disabled)return!0;for(;f.parentId!=null;)if(f=e.getItemMeta(f.parentId),f.disabled)return!0;return!1},[e]),n=x.useCallback(m=>{const f=e.getItemMeta(m).parentId??O;return r.items.itemChildrenIndexes[f][m]},[e,r.items.itemChildrenIndexes]),i=x.useCallback(m=>r.items.itemOrderedChildrenIds[m??O]??[],[r.items.itemOrderedChildrenIds]),c=m=>t.disabledItemsFocusable?!0:!e.isItemDisabled(m),g=x.useRef(!1),o=x.useCallback(()=>{g.current=!0},[]),u=x.useCallback(()=>g.current,[]);return x.useEffect(()=>{e.areItemUpdatesPrevented()||s(m=>{const f=Ee({items:t.items,isItemDisabled:t.isItemDisabled,getItemId:t.getItemId,getItemLabel:t.getItemLabel});return Object.values(m.items.itemMetaMap).forEach(h=>{f.itemMetaMap[h.id]||ye(e,"removeItem",{id:h.id})}),E({},m,{items:f})})},[e,s,t.items,t.isItemDisabled,t.getItemId,t.getItemLabel]),{publicAPI:{getItem:p},instance:{getItemMeta:l,getItem:p,getItemsToRender:()=>{const m=f=>{const h=r.items.itemMetaMap[f];return{label:h.label,itemId:h.id,id:h.idAttribute,children:r.items.itemOrderedChildrenIds[f].map(m)}};return r.items.itemOrderedChildrenIds[O].map(m)},getItemIndex:n,getItemOrderedChildrenIds:i,isItemDisabled:a,isItemNavigable:c,preventItemUpdates:o,areItemUpdatesPrevented:u},contextValue:{disabledItemsFocusable:t.disabledItemsFocusable}}};N.getInitialState=e=>({items:Ee({items:e.items,isItemDisabled:e.isItemDisabled,getItemId:e.getItemId,getItemLabel:e.getItemLabel})});N.getDefaultizedParams=e=>E({},e,{disabledItemsFocusable:e.disabledItemsFocusable??!1});N.params={disabledItemsFocusable:!0,items:!0,isItemDisabled:!0,getItemLabel:!0,getItemId:!0};const K=({instance:e,params:t,models:r})=>{const s=x.useMemo(()=>{const g=new Map;return r.expandedItems.value.forEach(o=>{g.set(o,!0)}),g},[r.expandedItems.value]),l=(g,o)=>{var u;(u=t.onExpandedItemsChange)==null||u.call(t,g,o),r.expandedItems.setControlledValue(o)},p=x.useCallback(g=>s.has(g),[s]),a=x.useCallback(g=>{var o;return!!((o=e.getItemMeta(g))!=null&&o.expandable)},[e]),n=P((g,o)=>{const u=e.isItemExpanded(o);e.setItemExpansion(g,o,!u)}),i=P((g,o,u)=>{if(e.isItemExpanded(o)===u)return;let m;u?m=[o].concat(r.expandedItems.value):m=r.expandedItems.value.filter(f=>f!==o),t.onItemExpansionToggle&&t.onItemExpansionToggle(g,o,u),l(g,m)});return{publicAPI:{setItemExpansion:i},instance:{isItemExpanded:p,isItemExpandable:a,setItemExpansion:i,toggleItemExpansion:n,expandAllSiblings:(g,o)=>{const u=e.getItemMeta(o),m=e.getItemOrderedChildrenIds(u.parentId).filter(h=>e.isItemExpandable(h)&&!e.isItemExpanded(h)),f=r.expandedItems.value.concat(m);m.length>0&&(t.onItemExpansionToggle&&m.forEach(h=>{t.onItemExpansionToggle(g,h,!0)}),l(g,f))}}}};K.models={expandedItems:{getDefaultValue:e=>e.defaultExpandedItems}};const bt=[];K.getDefaultizedParams=e=>E({},e,{defaultExpandedItems:e.defaultExpandedItems??bt});K.params={expandedItems:!0,defaultExpandedItems:!0,onExpandedItemsChange:!0,onItemExpansionToggle:!0};const we=(e,t)=>{let r=t.length-1;for(;r>=0&&!e.isItemNavigable(t[r]);)r-=1;if(r!==-1)return t[r]},xt=(e,t)=>{const r=e.getItemMeta(t),s=e.getItemOrderedChildrenIds(r.parentId),l=e.getItemIndex(t);if(l===0)return r.parentId;let p=s[l-1],a=we(e,e.getItemOrderedChildrenIds(p));for(;e.isItemExpanded(p)&&a!=null;)p=a,a=e.getItemOrderedChildrenIds(p).find(e.isItemNavigable);return p},U=(e,t)=>{if(e.isItemExpanded(t)){const s=e.getItemOrderedChildrenIds(t).find(e.isItemNavigable);if(s!=null)return s}let r=e.getItemMeta(t);for(;r!=null;){const s=e.getItemOrderedChildrenIds(r.parentId),l=e.getItemIndex(r.id);if(l<s.length-1){let p=l+1;for(;!e.isItemNavigable(s[p])&&p<s.length-1;)p+=1;if(e.isItemNavigable(s[p]))return s[p]}r=e.getItemMeta(r.parentId)}return null},Ce=e=>{let t=null;for(;t==null||e.isItemExpanded(t);){const r=e.getItemOrderedChildrenIds(t),s=we(e,r);if(s==null)return t;t=s}return t},V=e=>e.getItemOrderedChildrenIds(null).find(e.isItemNavigable),Me=(e,t,r)=>{if(t===r)return[t,r];const s=e.getItemMeta(t),l=e.getItemMeta(r);if(s.parentId===l.id||l.parentId===s.id)return l.parentId===s.id?[s.id,l.id]:[l.id,s.id];const p=[s.id],a=[l.id];let n=s.parentId,i=l.parentId,c=a.indexOf(n)!==-1,g=p.indexOf(i)!==-1,o=!0,u=!0;for(;!g&&!c;)o&&(p.push(n),c=a.indexOf(n)!==-1,o=n!==null,!c&&o&&(n=e.getItemMeta(n).parentId)),u&&!c&&(a.push(i),g=p.indexOf(i)!==-1,u=i!==null,!g&&u&&(i=e.getItemMeta(i).parentId));const v=c?n:i,m=e.getItemOrderedChildrenIds(v),f=p[p.indexOf(v)-1],h=a[a.indexOf(v)-1];return m.indexOf(f)<m.indexOf(h)?[t,r]:[r,t]},vt=(e,t,r)=>{const s=i=>{if(e.isItemExpandable(i)&&e.isItemExpanded(i))return e.getItemOrderedChildrenIds(i)[0];let c=e.getItemMeta(i);for(;c!=null;){const g=e.getItemOrderedChildrenIds(c.parentId),o=e.getItemIndex(c.id);if(o<g.length-1)return g[o+1];c=e.getItemMeta(c.parentId)}throw new Error("Invalid range")},[l,p]=Me(e,t,r),a=[l];let n=l;for(;n!==p;)n=s(n),e.isItemDisabled(n)||a.push(n);return a},yt=e=>{let t=V(e);const r=[];for(;t!=null;)r.push(t),t=U(e,t);return r},B=e=>Array.isArray(e)?e:e!=null?[e]:[],W=e=>{const t={};return e.forEach(r=>{t[r]=!0}),t},z=({instance:e,params:t,models:r})=>{const s=x.useRef(null),l=x.useRef({}),p=x.useMemo(()=>{const f=new Map;return Array.isArray(r.selectedItems.value)?r.selectedItems.value.forEach(h=>{f.set(h,!0)}):r.selectedItems.value!=null&&f.set(r.selectedItems.value,!0),f},[r.selectedItems.value]),a=(f,h)=>{if(t.onItemSelectionToggle)if(t.multiSelect){const I=h.filter(y=>!e.isItemSelected(y)),d=r.selectedItems.value.filter(y=>!h.includes(y));I.forEach(y=>{t.onItemSelectionToggle(f,y,!0)}),d.forEach(y=>{t.onItemSelectionToggle(f,y,!1)})}else h!==r.selectedItems.value&&(r.selectedItems.value!=null&&t.onItemSelectionToggle(f,r.selectedItems.value,!1),h!=null&&t.onItemSelectionToggle(f,h,!0));t.onSelectedItemsChange&&t.onSelectedItemsChange(f,h),r.selectedItems.setControlledValue(h)},n=f=>p.has(f),i=(f,h,I=!1)=>{if(t.disableSelection)return;let d;if(I){const y=B(r.selectedItems.value);e.isItemSelected(h)?d=y.filter(R=>R!==h):d=[h].concat(y)}else d=t.multiSelect?[h]:h;a(f,d),s.current=h,l.current={}},c=(f,[h,I])=>{if(t.disableSelection||!t.multiSelect)return;let d=B(r.selectedItems.value).slice();Object.keys(l.current).length>0&&(d=d.filter(D=>!l.current[D]));const y=W(d),R=vt(e,h,I),C=R.filter(D=>!y[D]);d=d.concat(C),a(f,d),l.current=W(R)};return{getRootProps:()=>({"aria-multiselectable":t.multiSelect}),instance:{isItemSelected:n,selectItem:i,selectAllNavigableItems:f=>{if(t.disableSelection||!t.multiSelect)return;const h=yt(e);a(f,h),l.current=W(h)},expandSelectionRange:(f,h)=>{if(s.current!=null){const[I,d]=Me(e,h,s.current);c(f,[I,d])}},selectRangeFromStartToItem:(f,h)=>{c(f,[V(e),h])},selectRangeFromItemToEnd:(f,h)=>{c(f,[h,Ce(e)])},selectItemFromArrowNavigation:(f,h,I)=>{if(t.disableSelection||!t.multiSelect)return;let d=B(r.selectedItems.value).slice();Object.keys(l.current).length===0?(d.push(I),l.current={[h]:!0,[I]:!0}):(l.current[h]||(l.current={}),l.current[I]?(d=d.filter(y=>y!==h),delete l.current[h]):(d.push(I),l.current[I]=!0)),a(f,d)}},contextValue:{selection:{multiSelect:t.multiSelect}}}};z.models={selectedItems:{getDefaultValue:e=>e.defaultSelectedItems}};const Tt=[];z.getDefaultizedParams=e=>E({},e,{disableSelection:e.disableSelection??!1,multiSelect:e.multiSelect??!1,defaultSelectedItems:e.defaultSelectedItems??(e.multiSelect?Tt:null)});z.params={disableSelection:!0,multiSelect:!0,defaultSelectedItems:!0,selectedItems:!0,onSelectedItemsChange:!0,onItemSelectionToggle:!0};const ie=1e3;class Et{constructor(t=ie){this.timeouts=new Map,this.cleanupTimeout=ie,this.cleanupTimeout=t}register(t,r,s){this.timeouts||(this.timeouts=new Map);const l=setTimeout(()=>{typeof r=="function"&&r(),this.timeouts.delete(s.cleanupToken)},this.cleanupTimeout);this.timeouts.set(s.cleanupToken,l)}unregister(t){const r=this.timeouts.get(t.cleanupToken);r&&(this.timeouts.delete(t.cleanupToken),clearTimeout(r))}reset(){this.timeouts&&(this.timeouts.forEach((t,r)=>{this.unregister({cleanupToken:r})}),this.timeouts=void 0)}}class wt{constructor(){this.registry=new FinalizationRegistry(t=>{typeof t=="function"&&t()})}register(t,r,s){this.registry.register(t,r,s)}unregister(t){this.registry.unregister(t)}reset(){}}class Ct{}function Mt(e){let t=0;return function(s,l,p){e.registry===null&&(e.registry=typeof FinalizationRegistry<"u"?new wt:new Et);const[a]=x.useState(new Ct),n=x.useRef(null),i=x.useRef();i.current=p;const c=x.useRef(null);if(!n.current&&i.current){const g=(o,u)=>{var v;u.defaultMuiPrevented||(v=i.current)==null||v.call(i,o,u)};n.current=s.$$subscribeEvent(l,g),t+=1,c.current={cleanupToken:t},e.registry.register(a,()=>{var o;(o=n.current)==null||o.call(n),n.current=null,c.current=null},c.current)}else!i.current&&n.current&&(n.current(),n.current=null,c.current&&(e.registry.unregister(c.current),c.current=null));x.useEffect(()=>{if(!n.current&&i.current){const g=(o,u)=>{var v;u.defaultMuiPrevented||(v=i.current)==null||v.call(i,o,u)};n.current=s.$$subscribeEvent(l,g)}return c.current&&e.registry&&(e.registry.unregister(c.current),c.current=null),()=>{var g;(g=n.current)==null||g.call(n),n.current=null}},[s,l])}}const Rt={registry:null},St=Mt(Rt),Re=(e=document)=>{const t=e.activeElement;return t?t.shadowRoot?Re(t.shadowRoot):t:null},Pt=(e,t)=>{const r=l=>{const p=e.getItemMeta(l);return p&&(p.parentId==null||e.isItemExpanded(p.parentId))};let s;return Array.isArray(t)?s=t.find(r):t!=null&&r(t)&&(s=t),s==null&&(s=V(e)),s},ee=({instance:e,params:t,state:r,setState:s,models:l,rootRef:p})=>{const a=Pt(e,l.selectedItems.value),n=P(I=>{const d=typeof I=="function"?I(r.focusedItemId):I;r.focusedItemId!==d&&s(y=>E({},y,{focusedItemId:d}))}),i=x.useCallback(()=>!!p.current&&p.current.contains(Re(Fe(p.current))),[p]),c=x.useCallback(I=>r.focusedItemId===I&&i(),[r.focusedItemId,i]),g=I=>{const d=e.getItemMeta(I);return d&&(d.parentId==null||e.isItemExpanded(d.parentId))},o=(I,d)=>{const y=e.getItemMeta(d),R=document.getElementById(e.getTreeItemIdAttribute(d,y.idAttribute));R&&R.focus(),n(d),t.onItemFocus&&t.onItemFocus(I,d)},u=P((I,d)=>{g(d)&&o(I,d)}),v=P(I=>{let d;Array.isArray(l.selectedItems.value)?d=l.selectedItems.value.find(g):l.selectedItems.value!=null&&g(l.selectedItems.value)&&(d=l.selectedItems.value),d==null&&(d=V(e)),o(I,d)}),m=P(()=>{if(r.focusedItemId==null)return;const I=e.getItemMeta(r.focusedItemId);if(I){const d=document.getElementById(e.getTreeItemIdAttribute(r.focusedItemId,I.idAttribute));d&&d.blur()}n(null)}),f=I=>I===a;St(e,"removeItem",({id:I})=>{r.focusedItemId===I&&e.focusDefaultItem(null)});const h=I=>d=>{var y;(y=I.onFocus)==null||y.call(I,d),!d.defaultMuiPrevented&&d.target===d.currentTarget&&e.focusDefaultItem(d)};return{getRootProps:I=>({onFocus:h(I)}),publicAPI:{focusItem:u},instance:{isItemFocused:c,canItemBeTabbed:f,focusItem:u,focusDefaultItem:v,removeFocusedItem:m}}};ee.getInitialState=()=>({focusedItemId:null});ee.params={onItemFocus:!0};function jt(e){return!!e&&e.length===1&&!!e.match(/\S/)}const Se=({instance:e,params:t,state:r})=>{const l=ce().direction==="rtl",p=x.useRef({}),a=P(o=>{p.current=o(p.current)});x.useEffect(()=>{if(e.areItemUpdatesPrevented())return;const o={},u=v=>{o[v.id]=v.label.substring(0,1).toLowerCase()};Object.values(r.items.itemMetaMap).forEach(u),p.current=o},[r.items.itemMetaMap,t.getItemId,e]);const n=(o,u)=>{const v=u.toLowerCase(),m=d=>{const y=U(e,d);return y===null?V(e):y};let f=null,h=m(o);const I={};for(;f==null&&!I[h];)p.current[h]===v?f=h:(I[h]=!0,h=m(h));return f},i=o=>!t.disableSelection&&!e.isItemDisabled(o),c=o=>!e.isItemDisabled(o)&&e.isItemExpandable(o);return{instance:{updateFirstCharMap:a,handleItemKeyDown:(o,u)=>{if(o.defaultMuiPrevented||o.altKey||o.currentTarget!==o.target)return;const v=o.ctrlKey||o.metaKey,m=o.key;switch(!0){case(m===" "&&i(u)):{o.preventDefault(),t.multiSelect&&o.shiftKey?e.expandSelectionRange(o,u):t.multiSelect?e.selectItem(o,u,!0):e.selectItem(o,u);break}case m==="Enter":{c(u)?(e.toggleItemExpansion(o,u),o.preventDefault()):i(u)&&(t.multiSelect?(o.preventDefault(),e.selectItem(o,u,!0)):e.isItemSelected(u)||(e.selectItem(o,u),o.preventDefault()));break}case m==="ArrowDown":{const f=U(e,u);f&&(o.preventDefault(),e.focusItem(o,f),t.multiSelect&&o.shiftKey&&i(f)&&e.selectItemFromArrowNavigation(o,u,f));break}case m==="ArrowUp":{const f=xt(e,u);f&&(o.preventDefault(),e.focusItem(o,f),t.multiSelect&&o.shiftKey&&i(f)&&e.selectItemFromArrowNavigation(o,u,f));break}case(m==="ArrowRight"&&!l||m==="ArrowLeft"&&l):{if(e.isItemExpanded(u)){const f=U(e,u);f&&(e.focusItem(o,f),o.preventDefault())}else c(u)&&(e.toggleItemExpansion(o,u),o.preventDefault());break}case(m==="ArrowLeft"&&!l||m==="ArrowRight"&&l):{if(c(u)&&e.isItemExpanded(u))e.toggleItemExpansion(o,u),o.preventDefault();else{const f=e.getItemMeta(u).parentId;f&&(e.focusItem(o,f),o.preventDefault())}break}case m==="Home":{i(u)&&t.multiSelect&&v&&o.shiftKey?e.selectRangeFromStartToItem(o,u):e.focusItem(o,V(e)),o.preventDefault();break}case m==="End":{i(u)&&t.multiSelect&&v&&o.shiftKey?e.selectRangeFromItemToEnd(o,u):e.focusItem(o,Ce(e)),o.preventDefault();break}case m==="*":{e.expandAllSiblings(o,u),o.preventDefault();break}case(m==="a"&&v&&t.multiSelect&&!t.disableSelection):{e.selectAllNavigableItems(o),o.preventDefault();break}case(!v&&!o.shiftKey&&jt(m)):{const f=n(u,m);f!=null&&(e.focusItem(o,f),o.preventDefault());break}}}}}};Se.params={};const Pe=({slots:e,slotProps:t})=>({contextValue:{icons:{slots:{collapseIcon:e.collapseIcon,expandIcon:e.expandIcon,endIcon:e.endIcon},slotProps:{collapseIcon:t.collapseIcon,expandIcon:t.expandIcon,endIcon:t.endIcon}}}});Pe.params={};const At=[ve,N,K,z,ee,Se,Pe],$=()=>{const e=x.useContext(xe);if(e==null)throw new Error(["MUI X: Could not find the Tree View context.","It looks like you rendered your component outside of a SimpleTreeView or RichTreeView parent component.","This can also happen if you are bundling multiple versions of the Tree View."].join(`
`));return e},je=x.createContext(null);function Ae(e){const{children:t,itemId:r=null}=e,{instance:s,rootRef:l}=$(),p=x.useRef(new Map);x.useEffect(()=>{if(!l.current)return;let n=null;if(r==null)n=l.current.id;else{const u=s.getItemMeta(r);u!==void 0&&(n=s.getTreeItemIdAttribute(r,u.idAttribute))}if(n==null)return;const i=s.getItemOrderedChildrenIds(r??null)??[],c=l.current.querySelectorAll(`${r==null?"":`*[id="${n}"] `}[role="treeitem"]:not(*[id="${n}"] [role="treeitem"] [role="treeitem"])`),g=Array.from(c).map(u=>p.current.get(u.id));(g.length!==i.length||g.some((u,v)=>u!==i[v]))&&s.setJSXItemsOrderedChildrenIds(r??null,g)});const a=x.useMemo(()=>({registerChild:(n,i)=>p.current.set(n,i),unregisterChild:n=>p.current.delete(n),parentId:r}),[r]);return b.jsx(je.Provider,{value:a,children:t})}const L=({instance:e,setState:t})=>{e.preventItemUpdates();const r=P(a=>{t(n=>{if(n.items.itemMetaMap[a.id]!=null)throw new Error(["MUI X: The Tree View component requires all items to have a unique `id` property.","Alternatively, you can use the `getItemId` prop to specify a custom id for each item.",`Two items were provided with the same id in the \`items\` prop: "${a.id}"`].join(`
`));return E({},n,{items:E({},n.items,{itemMetaMap:E({},n.items.itemMetaMap,{[a.id]:a}),itemMap:E({},n.items.itemMap,{[a.id]:{id:a.id,label:a.label}})})})})}),s=(a,n)=>{const i=a??O;t(c=>E({},c,{items:E({},c.items,{itemOrderedChildrenIds:E({},c.items.itemOrderedChildrenIds,{[i]:n}),itemChildrenIndexes:E({},c.items.itemChildrenIndexes,{[i]:Te(n)})})}))},l=P(a=>{t(n=>{const i=E({},n.items.itemMetaMap),c=E({},n.items.itemMap);return delete i[a],delete c[a],E({},n,{items:E({},n.items,{itemMetaMap:i,itemMap:c})})}),ye(e,"removeItem",{id:a})}),p=P((a,n)=>(e.updateFirstCharMap(i=>(i[a]=n,i)),()=>{e.updateFirstCharMap(i=>{const c=E({},i);return delete c[a],c})}));return{instance:{insertJSXItem:r,removeJSXItem:l,setJSXItemsOrderedChildrenIds:s,mapFirstCharFromJSX:p}}},De=e=>Array.isArray(e)?e.length>0&&e.some(De):!!e,Dt=({props:e,rootRef:t,contentRef:r})=>{const{instance:s}=$(),{children:l,disabled:p=!1,label:a,itemId:n,id:i}=e,c=x.useContext(je);if(c==null)throw new Error(["MUI X: Could not find the Tree View Children Item context.","It looks like you rendered your component outside of a SimpleTreeView parent component.","This can also happen if you are bundling multiple versions of the Tree View."].join(`
`));const{registerChild:g,unregisterChild:o,parentId:u}=c,v=De(l),m=x.useRef(null),f=q(m,r);return $e(()=>{const h=s.getTreeItemIdAttribute(n,i);return g(h,n),()=>{o(h)}},[s,g,o,n,i]),x.useEffect(()=>(s.insertJSXItem({id:n,idAttribute:i,parentId:u,expandable:v,disabled:p}),()=>s.removeJSXItem(n)),[s,u,n,v,p,i]),x.useEffect(()=>{var h;if(a)return s.mapFirstCharFromJSX(n,(((h=m.current)==null?void 0:h.textContent)??"").substring(0,1).toLowerCase())},[s,n,a]),{contentRef:f,rootRef:t}};L.itemPlugin=Dt;L.wrapItem=({children:e,itemId:t})=>b.jsx(Ae,{itemId:t,children:e});L.wrapRoot=({children:e})=>b.jsx(Ae,{children:e});L.params={};const kt=[...At,L],Ot=["slots","slotProps","apiRef"],Vt=e=>{let{props:{slots:t,slotProps:r,apiRef:s},plugins:l,rootRef:p}=e,a=Le(e.props,Ot);const n={};l.forEach(g=>{Object.assign(n,g.params)});const i={plugins:l,rootRef:p,slots:t??{},slotProps:r??{},apiRef:s},c={};return Object.keys(a).forEach(g=>{const o=a[g];n[g]?i[g]=o:c[g]=o}),{pluginParams:i,slots:t,slotProps:r,otherProps:c}},_t=e=>{const{classes:t}=e;return Ne({root:["root"]},ut,t)},Ft=j("ul",{name:"MuiSimpleTreeView",slot:"Root",overridesResolver:(e,t)=>t.root})({padding:0,margin:0,listStyle:"none",outline:0,position:"relative"}),$t=[],Lt=x.forwardRef(function(t,r){const s=Ue({props:t,name:"MuiSimpleTreeView"}),l=s,{pluginParams:p,slots:a,slotProps:n,otherProps:i}=Vt({props:E({},s,{items:$t}),plugins:kt,rootRef:r}),{getRootProps:c,contextValue:g}=gt(p),o=_t(s),u=(a==null?void 0:a.root)??Ft,v=ue({elementType:u,externalSlotProps:n==null?void 0:n.root,externalForwardedProps:i,className:o.root,getSlotProps:c,ownerState:l});return b.jsx(ht,{value:g,children:b.jsx(u,E({},v))})}),Ut=({itemId:e,children:t})=>{const{instance:r,selection:{multiSelect:s}}=$(),l={expandable:!!(Array.isArray(t)?t.length:t),expanded:r.isItemExpanded(e),focused:r.isItemFocused(e),selected:r.isItemSelected(e),disabled:r.isItemDisabled(e)};return{interactions:{handleExpansion:i=>{if(l.disabled)return;l.focused||r.focusItem(i,e);const c=s&&(i.shiftKey||i.ctrlKey||i.metaKey);l.expandable&&!(c&&r.isItemExpanded(e))&&r.toggleItemExpansion(i,e)},handleSelection:i=>{if(l.disabled)return;l.focused||r.focusItem(i,e),s&&(i.shiftKey||i.ctrlKey||i.metaKey)?i.shiftKey?r.expandSelectionRange(i,e):r.selectItem(i,e,!0):r.selectItem(i,e)}},status:l}},Nt=e=>{const{runItemPlugins:t,selection:{multiSelect:r},disabledItemsFocusable:s,instance:l,publicAPI:p}=$(),{id:a,itemId:n,label:i,children:c,rootRef:g}=e,{rootRef:o,contentRef:u}=t(e),{interactions:v,status:m}=Ut({itemId:n,children:c}),f=l.getTreeItemIdAttribute(n,a),h=q(g,o),I=w=>T=>{var te;if((te=w.onFocus)==null||te.call(w,T),T.defaultMuiPrevented)return;const M=!m.disabled||s;!m.focused&&M&&T.currentTarget===T.target&&l.focusItem(T,n)},d=w=>T=>{var M;(M=w.onBlur)==null||M.call(w,T),!T.defaultMuiPrevented&&l.removeFocusedItem()},y=w=>T=>{var M;(M=w.onKeyDown)==null||M.call(w,T),!T.defaultMuiPrevented&&l.handleItemKeyDown(T,n)},R=w=>T=>{var M;(M=w.onClick)==null||M.call(w,T),!T.defaultMuiPrevented&&(v.handleExpansion(T),v.handleSelection(T))},C=w=>T=>{var M;(M=w.onMouseDown)==null||M.call(w,T),!T.defaultMuiPrevented&&(T.shiftKey||T.ctrlKey||T.metaKey||m.disabled)&&T.preventDefault()};return{getRootProps:(w={})=>{const T=E({},S(e),S(w));let M;return r?M=m.selected:m.selected&&(M=!0),E({},T,{ref:h,role:"treeitem",tabIndex:l.canItemBeTabbed(n)?0:-1,id:f,"aria-expanded":m.expandable?m.expanded:void 0,"aria-selected":M,"aria-disabled":m.disabled||void 0},w,{onFocus:I(T),onBlur:d(T),onKeyDown:y(T)})},getContentProps:(w={})=>{const T=E({},S(e),S(w));return E({},T,w,{ref:u,onClick:R(T),onMouseDown:C(T),status:m})},getGroupTransitionProps:(w={})=>{const T=E({},S(e),S(w));return E({},T,{unmountOnExit:!0,component:"ul",role:"group",in:m.expanded,children:c},w)},getIconContainerProps:(w={})=>{const T=E({},S(e),S(w));return E({},T,w)},getLabelProps:(w={})=>{const T=E({},S(e),S(w));return E({},T,{children:i},w)},rootRef:h,status:m,publicAPI:p}},Kt=ae("MuiTreeItem",["root","groupTransition","content","expanded","selected","focused","disabled","iconContainer","label"]),zt=de(b.jsx("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"TreeViewExpandIcon"),Bt=de(b.jsx("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"TreeViewCollapseIcon");function ke(e){const{children:t,itemId:r}=e,{wrapItem:s}=$();return s({children:t,itemId:r})}ke.propTypes={children:re.node,itemId:re.string.isRequired};function Wt(e){const{slots:t,slotProps:r,status:s}=e,l=$(),p=E({},l.icons.slots,{expandIcon:l.icons.slots.expandIcon??zt,collapseIcon:l.icons.slots.collapseIcon??Bt}),a=l.icons.slotProps;let n;t!=null&&t.icon?n="icon":s.expandable?s.expanded?n="collapseIcon":n="expandIcon":n="endIcon";const i=(t==null?void 0:t[n])??p[n],c=ue({elementType:i,externalSlotProps:g=>E({},oe(a[n],g),oe(r==null?void 0:r[n],g)),ownerState:{}});return i?b.jsx(i,E({},c)):null}const Xt=j("li",{name:"MuiTreeItem2",slot:"Root",overridesResolver:(e,t)=>t.root})({listStyle:"none",margin:0,padding:0,outline:0}),qt=j("div",{name:"MuiTreeItem2",slot:"Content",overridesResolver:(e,t)=>t.content,shouldForwardProp:e=>Ke(e)&&e!=="status"})(({theme:e})=>({padding:e.spacing(.5,1),borderRadius:e.shape.borderRadius,width:"100%",boxSizing:"border-box",display:"flex",alignItems:"center",gap:e.spacing(1),cursor:"pointer",WebkitTapHighlightColor:"transparent","&:hover":{backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`& .${Kt.groupTransition}`]:{margin:0,padding:0,paddingLeft:12},variants:[{props:({status:t})=>t.disabled,style:{opacity:(e.vars||e).palette.action.disabledOpacity,backgroundColor:"transparent"}},{props:({status:t})=>t.focused,style:{backgroundColor:(e.vars||e).palette.action.focus}},{props:({status:t})=>t.selected,style:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:k(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:k(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:k(e.palette.primary.main,e.palette.action.selectedOpacity)}}}},{props:({status:t})=>t.selected&&t.focused,style:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:k(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}}]}));j("div",{name:"MuiTreeItem2",slot:"Label",overridesResolver:(e,t)=>t.label})(({theme:e})=>E({width:"100%",boxSizing:"border-box",minWidth:0,position:"relative"},e.typography.body1));const Gt=j("div",{name:"MuiTreeItem2",slot:"IconContainer",overridesResolver:(e,t)=>t.iconContainer})({width:16,display:"flex",flexShrink:0,justifyContent:"center","& svg":{fontSize:18}}),Jt=j(ze,{name:"MuiTreeItem2GroupTransition",slot:"GroupTransition",overridesResolver:(e,t)=>t.groupTransition})({margin:0,padding:0,paddingLeft:12}),Qt=j(Xt)(({theme:e})=>({color:e.palette.text.secondary})),Yt=j(qt)(({theme:e})=>({marginBottom:e.spacing(.3),color:e.palette.text.secondary,borderRadius:e.spacing(2),paddingRight:e.spacing(1),fontWeight:e.typography.fontWeightMedium,"&.expanded":{fontWeight:e.typography.fontWeightRegular},"&:hover":{backgroundColor:e.palette.action.hover},"&.focused, &.selected, &.selected.focused":{backgroundColor:`var(--tree-view-bg-color, ${e.palette.action.selected})`,color:"var(--tree-view-color)"}})),Zt=j(Gt)(({theme:e})=>({marginRight:e.spacing(1)})),Ht=j(Jt)(({theme:e})=>({marginLeft:0,"& .content":{paddingLeft:e.spacing(2)}})),X=x.forwardRef(function(t,r){const s=ce(),{id:l,itemId:p,label:a,disabled:n,children:i,bgColor:c,color:g,labelIcon:o,labelInfo:u,colorForDarkMode:v,bgColorForDarkMode:m,...f}=t,{getRootProps:h,getContentProps:I,getIconContainerProps:d,getLabelProps:y,getGroupTransitionProps:R,status:C}=Nt({id:l,itemId:p,children:i,label:a,disabled:n,rootRef:r}),D={"--tree-view-color":s.palette.mode!=="dark"?g:v,"--tree-view-bg-color":s.palette.mode!=="dark"?c:m};return b.jsx(ke,{itemId:p,children:b.jsxs(Qt,{...h({...f,style:D}),children:[b.jsxs(Yt,{...I({className:Be("content",{expanded:C.expanded,selected:C.selected,focused:C.focused})}),children:[b.jsx(Zt,{...d(),children:b.jsx(Wt,{status:C})}),b.jsxs(ne,{sx:{display:"flex",flexGrow:1,alignItems:"center",p:.5,pr:0},children:[b.jsx(ne,{component:o,color:"inherit",sx:{mr:1}}),b.jsx(se,{...y({variant:"body2",sx:{display:"flex",fontWeight:"inherit",flexGrow:1}})}),b.jsx(se,{variant:"caption",color:"inherit",children:u})]})]}),i&&b.jsx(Ht,{...R()})]})})});function er(){return b.jsx("div",{style:{width:24}})}function tr(){return b.jsx(Lt,{"aria-label":"gmail",defaultExpandedItems:["3"],defaultSelectedItems:"5",slots:{expandIcon:he,collapseIcon:ge,endIcon:er},sx:{flexGrow:1,maxWidth:400},children:b.jsxs(X,{itemId:"3",label:"Products",children:[b.jsx(A,{to:"/admin/products",children:b.jsx(X,{itemId:"5",label:"All",labelIcon:me,color:"#1a73e8",bgColor:"#e8f0fe",colorForDarkMode:"#B8E7FB",bgColorForDarkMode:k("#00b4ff",.2)})}),b.jsx(A,{to:"/admin/product",children:b.jsx(X,{itemId:"8",label:"Create",labelIcon:Ie,color:"#3c8039",bgColor:"#e6f4ea",colorForDarkMode:"#CCE8CD",bgColorForDarkMode:k("#64ff6a",.2)})})]})})}const cr=()=>b.jsxs("div",{className:`sidebar ${window.location.pathname==="/admin/dashboard"?"dash-sidebar":""}`,children:[b.jsx(A,{to:"/",children:b.jsx("img",{src:Oe,loading:"lazy",alt:"Ecommerce"})}),b.jsx(A,{to:"/admin/dashboard",children:b.jsxs("p",{children:[b.jsx(We,{})," Dashboard"]})}),b.jsx("span",{children:b.jsx(tr,{})}),b.jsx(A,{to:"/admin/orders",children:b.jsxs("p",{children:[b.jsx(Xe,{}),"Orders"]})}),b.jsx(A,{to:"/admin/users",children:b.jsxs("p",{children:[b.jsx(fe,{})," Users"]})}),b.jsx(A,{to:"/admin/reviews",children:b.jsxs("p",{children:[b.jsx(pe,{}),"Reviews"]})})]});export{cr as S};
