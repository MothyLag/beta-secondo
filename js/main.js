$(document).ready(function() {

	$("#solicitarCreditoPc").click(function(event) {
		//openAlarg();
		//localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZDkzZGQ3YTk1NGMzMGVkNWRjNjBkNyIsImlhdCI6MTYwODA3MjY2M30.waCYt33YBVvWqDuqJmnf_0jGb1ijgafeJbg0_Kh_dK0");
		//console.log(localStorage.getItem("token"));
		$.ajax({
			url: 'http://localhost:4000/users/hasFiscal',
			headers: {
				"Authorization": "Bearer "+localStorage.getItem('token')
			}
		})
		.done(function(data) {
			if(data){
				console.log(data);
			}else{
				console.log(data);
				openAlarg();
			}
		})
		.fail(function() {
			console.log("error");
		});
		
	});
});