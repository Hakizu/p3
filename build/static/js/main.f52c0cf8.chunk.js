(this.webpackJsonpselene=this.webpackJsonpselene||[]).push([[0],{14:function(e,t,n){e.exports=n(37)},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(13),c=n.n(u),l=n(2),o=function(e){var t=e.setNewSearch,n=e.newSearch;return r.a.createElement("div",null,"Filter for:",r.a.createElement("input",{onChange:function(e){return t(e.target.value)},value:n}))},m=function(e){var t=e.newPerson,n=e.newName,a=e.setNewName,u=e.newNumber,c=e.setNewNumber;return r.a.createElement("form",{onSubmit:t},r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"name:"),r.a.createElement("td",null,r.a.createElement("input",{value:n,onChange:function(e){return a(e.target.value.replace(/[^a-zA-Z\s]/g,""))}}))),r.a.createElement("tr",null,r.a.createElement("td",null,"number:"),r.a.createElement("td",null,r.a.createElement("input",{value:u,onChange:function(e){return t=e.target.value,c(t.replace(/[^0-9]/g,""));var t}}))))),r.a.createElement("button",{type:"submit"},"add"))},i=function(e){var t=e.name,n=e.number,a=e.remove;return r.a.createElement("tr",null,r.a.createElement("td",null,t," "),r.a.createElement("td",{className:"number"},n),r.a.createElement("td",null,r.a.createElement("button",{onClick:a},"Delete Entry")," "))},s=n(3),f=n.n(s),d="/api/persons",b=function(){return f.a.get(d).then((function(e){return e.data}))},E=function(e){return f.a.post(d,e).then((function(e){return e.data}))},h=function(e,t){return f.a.put("".concat(d,"/").concat(t),e).then((function(e){return e.data}))},v=function(e){return f.a.delete("".concat(d,"/").concat(e)).then((function(e){return e.data}))},w=function(e){var t=e.message;return null===t?null:r.a.createElement("div",{className:"success"},t)},p=function(e){var t=e.error;return null===t?null:r.a.createElement("div",{className:"error"},t)},N=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],u=t[1],c=Object(a.useState)(""),s=Object(l.a)(c,2),f=s[0],d=s[1],N=Object(a.useState)(""),g=Object(l.a)(N,2),j=g[0],O=g[1],y=Object(a.useState)(""),S=Object(l.a)(y,2),C=S[0],k=S[1],P=Object(a.useState)(null),T=Object(l.a)(P,2),D=T[0],x=T[1],A=Object(a.useState)(null),J=Object(l.a)(A,2),L=J[0],z=J[1];Object(a.useEffect)((function(){b().then((function(e){u(e)}))}),[]);var B=C?n.filter((function(e){return e.name.toLowerCase().includes(C.toLowerCase())})):n;return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(w,{message:D}),r.a.createElement(p,{error:L}),r.a.createElement(o,{setNewSearch:k,newSearch:C}),r.a.createElement("h2",null,"Contacts"),r.a.createElement("table",null,r.a.createElement("tbody",null,B.map((function(e,t){return r.a.createElement(i,{key:t,name:e.name,number:e.number,remove:function(){return t=[e.id,e.name],void(window.confirm("Do you want to delete ".concat(t[1]," ?"))&&v(t[0]).then(u(n.filter((function(e){return e.id!==t[0]})))).catch((function(e){z("".concat(t[1]," was already removed from server")),setTimeout((function(){z(null)}),5e3)})));var t}})})))),r.a.createElement("h2",null,"Add new Contact"),r.a.createElement(m,{newPerson:function(e){e.preventDefault();var t={name:j,number:f,id:n.length+1},a=n.filter((function(e){return e.name===t.name})),r=a.length>0;r||E(t).then((function(e){u(n.concat(e)),O(""),d(""),x("".concat(t.name," was added to the Phonebook")),setTimeout((function(){x(null)}),5e3)}));var c="".concat(t.name," already exists,")+"do you want to update his Number with: ".concat(t.number,"?");r&&window.confirm(c)&&h(t,a[0].id).then((function(e){u(n.map((function(t){return t.id!==a[0].id?t:e}))),O(""),d(""),x("".concat(t.name," phone number was updated")),setTimeout((function(){x(null)}),5e3)})).catch((function(e){z("".concat(a[0].name," was already removed from server")),setTimeout((function(){z(null)}),5e3)}))},newName:j,setNewName:O,newNumber:f,setNewNumber:d}),r.a.createElement("h2",null,"Numbers"))};n(36);c.a.render(r.a.createElement(N,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.f52c0cf8.chunk.js.map