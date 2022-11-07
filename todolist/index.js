let list = document.getElementById("list")
let todo_item = document.getElementById("todo-item")
function addItem() {

    let li = document.createElement("li")
    let liText = document.createTextNode(todo_item.value)
    li.appendChild(liText)

    if (todo_item.value !== "") {
        list.appendChild(li)
    }
    todo_item.value = ""
    let delBtn = document.createElement("button")
    let delBtnText = document.createTextNode("DELETE ITEM")
    delBtn.appendChild(delBtnText)
    li.appendChild(delBtn)
    delBtn.setAttribute("onclick", "delItem(this)")
    delBtn.setAttribute("class", "delBtn")

    let editBtn = document.createElement("button")
    let editBtnText = document.createTextNode("EDIT ITEM")
    editBtn.appendChild(editBtnText)
    li.appendChild(editBtn)
    editBtn.setAttribute("onclick", "editItem(this)")
    editBtn.setAttribute("class", "editBtn")

}
function delItem(e) {
    e.parentNode.remove()
}
function editItem(e) {
    let editPrompt = prompt("Enter Edit You Want", e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = editPrompt




    ////////////////////////////////////////////


    // let editValue = e.parentNode.firstChild.nodeValue;
    // let editLi = document.createElement("li")
    // let editInp = document.createElement("input")
    // e.parentNode.appendChild(editInp)
    // e.appendChild(editLi)
    // document.style.editBtn.display = ("none")
}
function deleteAll() {
    list.innerHTML = ""
}