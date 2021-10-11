var login_btn = document.getElementById("login");
	//when click login
login_btn.addEventListener("click",function(){
	//read the inputs
	var user_name = document.getElementById("user_name").value;
	var user_password = document.getElementById("user_password").value;
	var user_nameArr = new Array(localStorage.length);//create an array
	//store records into an array
	for(i=0;i<localStorage.length;i++){
		user_nameArr[i] = localStorage.key(i);
	}
	//Compare password
	if(user_nameArr.includes(user_name)){
		//read password from local
		var store_password = localStorage.getItem(user_name);
			if(user_password == store_password){ 
				confirm("Login successfully!");  
				
				setTimeout(function(){
					window.location.href = "index.html";
				},600);  //After 0.6s jump to homepage
			} else{
			alert("Password incorrect!") ;
			}
	}	
	
	else{
		alert("Password incorrect!") ;
	}
})
	
