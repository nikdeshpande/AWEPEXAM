function entername() {
    let user = document.querySelector("#username").value;
    let newelement = document.querySelector("#referenec").cloneNode(true);
    newelement.removeAttribute("id");

    newelement.children[0].innerHTML = user;
    const commentbox = document.querySelector("#commentbox");
    commentbox.insertBefore(newelement, commentbox.firstChild);
    document.querySelector("#username").value = "";
}

function enterpassword() {
    let user = document.querySelector("#passwords").value;
    let newele = document.querySelector("#referenec").cloneNode(true);
    newele.removeAttribute("id");
    //  newele.style.visibility = "visible";
    const commentbox = document.querySelector("#commentbox");
    commentbox.insertBefore(newele, commentbox.secondChild);
    newele.children[0].innerHTML = user;
    document.querySelector("#username").value = "";
}