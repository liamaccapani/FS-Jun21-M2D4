let addNameList = function(){
    let container = document.getElementById('name-list-container')
    let newName = document.createElement('li')
    newName.innerHTML = document.getElementById('inputName').value
    container.appendChild(newName)
}
