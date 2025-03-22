let celement=document.createElement("h1")
celement.textContent="hello"

let bd=document.body
bd.append(celement)

let elementh2=document.createElement("h2")
elementh2.textContent="well done"
bd.append(elementh2)

bd.setAttribute('bgcolor','yellow')
celement.setAttribute('align','center')

celement.setAttribute('style','background-color:deeppink;color:white')

let head=document.getElementById("head")
head.removeAttribute('style')