


var register_btn = document.getElementById("register");
	//when click register
register_btn.addEventListener("click",function(){
	var user_name = document.getElementById("reg_name").value;
	var user_password = document.getElementById("reg_password").value;
	//if both boxes are empty
	if(user_name.length == 0 && user_password.length == 0){
		alert("Username and Password are empty!");
	}
	//if username is empty
	else if(user_name.length == 0){
		alert("Please enter the username!");
	}
	//if password is empty
	else if(user_password.length == 0){
		alert("Please enter the password!");
	}
	//information stored in local
	else{
		$.ajax({
			method: "post",
			url : "./php/register.php",
			data : {
				username : user_name,
				password : user_password,
			},
			success : function(result){
						alert();
						
			},
			error : function(msg){
				console.log(msg);
			}
		})


	};


})
