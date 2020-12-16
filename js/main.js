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
		var rfc = $("#rfc").val();
		if(
			rfc = $("#rfc").val().length 			!= 12 ||
			$("#curp").val().length 				== 0 ||
			$("#address").val().length 				== 0 ||
			$("#cp").val().length 					== 0 ||
			$("#social").val().length 				== 0 ||
			$("#email").val().length 				== 0 ||
			$("#phone").val().length				== 0 ||
			$("#occupation").val().length			== 0 ||
			$("#monthlyIncome").val()				== 0 ||
			$("#workplace").val()					== 0 ||
			$("#academic option:selected").text()	== 0 ||
			$("#reference").val()					== 0 ||
			$("#beneficiary").val()					== 0
		){
			alert("Algunos campos pueden estar incorrectos, por favor, verifíquelos");
		}else{
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
			.done(function(data) {
				if(!data._id){
					alert("Ha ocurrido un error, por favor, verifique los datos");	
				}else{
					closeReg(); 
					closeIn2();
					openAlarg();
				}
			})
			.fail(function() {
				alert("Ha ocurrido un error, por favor, verifique los datos");
			})
			.error(function() {
				alert("Ha ocurrido un error, por favor, verifique los datos");
			});
		}
		/*$.ajax({
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
		.done(function(data) {
			if(!data.id){
				alert("Ha ocurrido un error, por favor, verifique los datos");	
			}else{
				console.log(data);
			}
		})
		.fail(function() {
			alert("Ha ocurrido un error, por favor, verifique los datos");
		})
		.error(function() {
			alert("Ha ocurrido un error, por favor, verifique los datos");
		});
		
		*/
	});

});