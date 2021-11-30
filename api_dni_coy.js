  const api_dni_p = (dni) => {
    if (dni != "") { //validacion campos vacios
      //validacion longitud
      if (dni.length == 8) {
        $.ajax({
          type: "GET",
          url: "https://dniruc.apisperu.com/api/v1/dni/" + dni + "?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImNveWFrczE5QGdtYWlsLmNvbSJ9.1NdRT9-w-xvSN0NONmckZLfMLcVixw_7sC30dAW9ALI",
          dataType: "json",
        }).done((data) => {
          nombres = data.nombres
          if (nombres != null) {
            $('#nombre_i').val(nombres);
            var apellidos_p = data.apellidoPaterno + " " + data.apellidoMaterno;
            $('#apellidos_i').val(apellidos_p);
          } else {
            alert("DNI no existe")
          }
        });
      } else {
        alert("Los digitos deben ser 8")
      }
    } else {
      alert("Es necesario ingresar el DNI!");
    }
  }