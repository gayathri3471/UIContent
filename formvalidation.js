function formvalidate(){
  let Username =  document.getElementById('username');
  let Password = document.getElementById('password');
  if(Username.value.trim() ==null || Username.value.trim() ==""){
    alert("Invalid User name");
    return false;
  }
  else if(Password.value.trim()==null || Password.value.trim()==""){
        alert("invalid Password");
        return false;
    }
    else{
        return true;
    }
  }
