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
		}).done(function(data) {
				if(data){
					openAlarg();
					
					console.log(data);
				}else{
					console.log(data);
					openReg();
				}
		}).fail(function() {
				console.log("error");
		});			
	});

	$("#sendFiscalData").click(function(event) {
		$.ajax({
			url: 'http://localhost:4000/fiscal/createFiscal',
			type: 'POST',
			headers: {
				"Authorization": "Bearer "+localStorage.getItem('token')
			},
			data: {
				'rfc': $("#rfc").val(),
				'curp': $("#curp").val(),
				'address': $("#address").val(),
				'postal': $("#cp").val(),
				'social': $("#social").val(),
				'email': $("#email").val(),
				'phone': $("#phone").val(),
				'occupation': $("#occupation").val(),
				'monthlyIncome': $("#monthlyIncome").val(),
				'workplace': $("#workplace").val(),
				'academic': $("#academic option:selected" ).text(),
				'reference': $("#reference").val(),
				'beneficiary': $("#beneficiary").val()
			}
			
		})
		.done(function() {
			console.log("success");
		})
		.fail(function() {
			console.log("error");
		});
		
	});

});