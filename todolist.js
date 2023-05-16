

let addbtn= document.getElementById('add');
let unorderlist = document.getElementById('lstelements');
let tastinput = document.getElementById('taskinput');

addbtn.addEventListener('click',function(){
 
    let newli = document.createElement('li');
    newli.classList.add('task');
    // newli.setAttribute('id','dailytask')
    let input = document.createElement('input');
    input.setAttribute('type','text');
   
    input.value = tastinput.value;
    let btn = document.createElement('button');
    btn.classList.add('addbutton');
    btn.textContent = "Save task"
    let icon = document.createElement('i');
    icon.classList.add('fa-solid', 'fa-trash');
    tastinput.value=""

    newli.appendChild(input)
    newli.appendChild(btn);
    newli.appendChild(icon);
    unorderlist.appendChild(newli);

    

    icon.addEventListener('click', function() {
        // Remove the parent li element
        this.parentNode.remove();
    });
   
   

   
})




