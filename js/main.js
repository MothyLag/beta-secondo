$(document).ready(function () {
  $.ajax({
    url: "http://localhost:4000/credits/list",
  })
    .done(function (data) {
      console.log(data);
      data.map((actual) => {
        var added =
          '<div class="swiper-slide"><div class="ac-title-card"><div class="ac-sun-spec"><figure class="sun-icon"></figure></div><h2 class="ac-amount-title">$' +
          actual.monto +
          ' MXN</h2></div><div class="ac-title-specs"><h3 class="ac-title-sub-heading">Interes: ' +
          actual.interes +
          '%</h3><h3 class="ac-title-sub-heading">Plazo a pagar: ' +
          actual.plazo +
          ' semanas</h3><h3 class="ac-title-sub-heading">Inicio de pago: ' +
          actual.inicioPago +
          ' semanas</h3></div><div class="ac-person-spec"><h2 class="ac-person-name"></h2></div><div class="ac-cta"><a class="cta-link-card" onclick="openCredit(\'' +
          actual._id +
          "','" +
          actual.monto +
          "','" +
          actual.interes +
          "','" +
          actual.plazo +
          "','" +
          actual.inicioPago +
          "')\">Ver más</a></div></div>";
        $("#dynamicCards").append(added);
      });
      var swiper = new Swiper(".swiper-container", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: { el: ".swiper-pagination" },
      });
    })
    .fail(function () {});

    $.ajax({
    	url: 'http://localhost:4000/users/getInfo',
    	headers: {
       		Authorization: "Bearer " + localStorage.getItem("token"),
      	},
    }).done(function(data) {
    	$("#nameRequest").html(data.name+" "+data.lastName);
    }).fail(function() {
    	console.log("error");
    });
    


  $("#solicitarCreditoPc").click(function (event) {
    //openAlarg();
    //localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZDkzZGQ3YTk1NGMzMGVkNWRjNjBkNyIsImlhdCI6MTYwODA3MjY2M30.waCYt33YBVvWqDuqJmnf_0jGb1ijgafeJbg0_Kh_dK0");
    //console.log(localStorage.getItem("token"));
    $.ajax({
      url: "http://localhost:4000/users/hasFiscal",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .done(function (data) {
        if (data) {
          openAlarg();
        } else {
          openReg();
        }
      })
      .fail(function () {});
  });

  $("#sendFiscalData").click(function (event) {
    if (
      (rfc =
        $("#rfc").val().length != 12 ||
        $("#curp").val().length == 0 ||
        $("#address").val().length == 0 ||
        $("#cp").val().length == 0 ||
        $("#social").val().length == 0 ||
        $("#email").val().length == 0 ||
        $("#phone").val().length == 0 ||
        $("#occupation").val().length == 0 ||
        $("#monthlyIncome").val() == 0 ||
        $("#workplace").val() == 0 ||
        $("#academic option:selected").text() == 0 ||
        $("#reference").val() == 0 ||
        $("#beneficiary").val() == 0)
    ) {
      alert("Algunos campos pueden estar incorrectos, por favor, verifíquelos");
    } else {
      $.ajax({
        url: "http://localhost:4000/fiscal/createFiscal",
        type: "POST",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        data: {
          rfc: $("#rfc").val(),
          curp: $("#curp").val(),
          address: $("#address").val(),
          postal: $("#cp").val(),
          social: $("#social").val(),
          email: $("#email").val(),
          phone: $("#phone").val(),
          occupation: $("#occupation").val(),
          monthlyIncome: $("#monthlyIncome").val(),
          workplace: $("#workplace").val(),
          academic: $("#academic option:selected").text(),
          reference: $("#reference").val(),
          beneficiary: $("#beneficiary").val(),
        },
      })
        .done(function (data) {
          if (!data._id) {
            alert("Ha ocurrido un error, por favor, verifique los datos");
          } else {
            closeReg();
            closeIn2();
            openAlarg();
          }
        })
        .fail(function () {
          alert("Ha ocurrido un error, por favor, verifique los datos");
        })
        .error(function () {
          alert("Ha ocurrido un error, por favor, verifique los datos");
        });
    }
  });
});
