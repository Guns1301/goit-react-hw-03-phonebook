(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],[,,function(t,e,n){t.exports={form:"Form_form__1VMeV",label:"Form_label__V2Mn2",btn:"Form_btn__1XcPB"}},,,,,,,,,function(t,e,n){t.exports={section:"Section_section__ohVt7"}},function(t,e,n){t.exports={filter:"Filter_filter__1lB8l"}},function(t,e,n){t.exports={links:"Contacts_links__1mjCo"}},,,,,,function(t,e,n){},,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(10),o=n.n(r),i=(n(19),n(14)),s=n(3),l=n(4),u=n(7),b=n(6),m=n(11),d=n.n(m),j=n(0),h=function(t){var e=t.title,n=t.children;return Object(j.jsxs)("section",{className:d.a.section,children:[Object(j.jsx)("h1",{children:e}),n]})},f=n(5),p=n(9),O=n(24),C=n(2),x=n.n(C),g=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleSubmit=function(e){e.preventDefault(),t.props.getContact(Object(p.a)(Object(p.a)({},t.state),{},{id:Object(O.a)()})),t.setState({name:"",number:""})},t.handleNameChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(f.a)({},a,c))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(j.jsxs)("form",{className:x.a.form,onSubmit:this.handleSubmit,children:[Object(j.jsxs)("label",{className:x.a.label,children:["Name",Object(j.jsx)("input",{type:"text",name:"name",value:e,placeholder:"Enter your name",onChange:this.handleNameChange,required:!0})]}),Object(j.jsxs)("label",{className:x.a.label,children:["Number",Object(j.jsx)("input",{type:"tel",name:"number",value:n,placeholder:"Enter your number",onChange:this.handleNameChange,required:!0})]}),Object(j.jsx)("button",{type:"submit",className:x.a.btn,children:"Add contact"})]})}}]),n}(a.Component),v=n(12),y=n.n(v),_=function(t){var e=t.filter,n=t.getFilterContact;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("input",{className:y.a.filter,type:"text",name:"filter",value:e,onChange:n,placeholder:"Enter name to find"})})},S=n(13),N=n.n(S),k=function(t){var e=t.contactList,n=t.deleteContact;return Object(j.jsx)("ul",{children:e.map((function(t){return Object(j.jsxs)("li",{className:N.a.links,children:[Object(j.jsx)("p",{children:t.name}),Object(j.jsx)("p",{children:t.number}),Object(j.jsx)("button",{type:"button",onClick:function(){return n(t.id)},children:"Delete"})]},t.id)}))})},F=(n(21),function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.getContact=function(e){var n=t.state.contacts,a=n.find((function(t){return t.name===e.name}));a?alert("".concat(a.name," is already in contacts.")):t.setState({contacts:[e].concat(Object(i.a)(n))})},t.getFilterContact=function(e){t.setState({filter:e.target.value})},t.filteredContact=function(){return t.state.filter?t.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t.state.filter.toLowerCase())})):t.state.contacts},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("contacts"));t&&this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state.filter;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(h,{title:"Phonebook",children:Object(j.jsx)(g,{getContact:this.getContact})}),Object(j.jsxs)(h,{title:"Contacts",children:[Object(j.jsx)(_,{filter:t,getFilterContact:this.getFilterContact}),Object(j.jsx)(k,{contactList:this.filteredContact(),deleteContact:this.deleteContact})]})]})}}]),n}(a.Component));o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(F,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.cb887c14.chunk.js.map