document.getElementById('addTodo').addEventListener('click', addItem)
document.getElementById('item-details').focus()
function addItem(){
    const data = document.getElementById('item-details').value;
    if(data.length==0){
        document.getElementById('item-details').placeholder='task cannot be blank'
        return;}
    const addData = "<tr><td class='item-text'>" + data + '</td><td><button class="del" onclick="delItem(event)">Delete</button></td></tr>';
    document.getElementById('item-active').innerHTML += addData;
    document.getElementById('item-details').value = '';
    document.getElementById('item-details').focus()
}

function delItem(e){
    e.target.parentNode.parentNode.remove(); // removes parent tag to remove completed item
}
