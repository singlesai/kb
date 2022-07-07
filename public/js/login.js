function $(id){return document.getElementById(id)}

function user_input(){
	var name = $("id").value;
	var password = $("password").value;
	if(name==""){
		alert("用户名不能为空！");
		return false;
		}else{
			return true;
			}	
	}


