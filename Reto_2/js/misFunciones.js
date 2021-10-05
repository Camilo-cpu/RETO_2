//CREADO POR: JUAN CAMILO FRANCO GONZALEZ MISIONTIC 2022
//apartado de las fincas---------------------------------------------------------------------------------------
function traerInformacionfinca() {
  $.ajax({
    url: "https://g3cd4fe72200838-db202109251432.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/farm/farm",
    type: "GET",
    datatype: "JSON",
    success: function (respuesta) {
      console.log(respuesta);
      $("#resultadofinca").empty();
      pintarRespuestafinca(respuesta.items);
    },
  });
}

function pintarRespuestafinca(items) {
  let myTable = "<table>";
  for (i = 0; i < items.length; i++) {
    myTable += "<tr>";
    myTable += "<td>" + items[i].id + "</td>";
    myTable += "<td>" + items[i].address + "</td>";
    myTable += "<td>" + items[i].exension + "</td>";
    myTable += "<td>" + items[i].category_id + "</td>";
    myTable += "<td>" + items[i].name + "</td>";
    myTable +=
      "<td> <button onclick='borrarElementofinca(" +
      items[i].id +
      ")'>Borrar</button>";
    myTable += "</tr>";
  }
  myTable += "</table>";
  $("#resultadofinca").append(myTable);
}
function guardarInformacionfinca() {
  let myData = {
    id: $("#id").val(),
    address: $("#addressfinca").val(),
    exension: $("#exensionfinca").val(),
    category_id: $("#categoryfinca").val(),
    name: $("#namefinca").val(),
  };
  let dataToSend = JSON.stringify(myData);
  $.ajax({
    url: "https://g3cd4fe72200838-db202109251432.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/farm/farm",
    type: "POST",
    data: myData,
    datatype: "JSON",
    success: function (respuesta) {
      $("#resultadofinca").empty();
      $("#idfinca").val("");
      $("#addressfinca").val("");
      $("#exensionfinca").val("");
      $("#categoryfinca").val("");
      $("#namefinca").val("");
      traerInformacionfinca();
      alert("se ha guardado el dato");
    },
  });
}

function editarInformacionfinca() {
  let myData = {
    id: $("#idfinca").val(),
    address: $("#addressfinca").val(),
    exension: $("#exensionfincal").val(),
    category_id: $("#categoryfinca").val(),
    name: $("#namefinca").val(),
  };
  console.log(myData);
  let dataToSend = JSON.stringify(myData);
  $.ajax({
    url: "https://g3cd4fe72200838-db202109251432.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/farm/farm",
    type: "PUT",
    data: dataToSend,
    contentType: "application/JSON",
    datatype: "JSON",
    success: function (respuesta) {
      $("#resultadofinca").empty();
      $("#idfinca").val("");
      $("#addressfinca").val("");
      $("#exensionfinca").val("");
      $("#categoryfinca").val("");
      $("#namefinca").val("");
      traerInformacionfinca();
      alert("se ha Actualizado");
    },
  });
}

function borrarElementofinca(idElemento) {
  let myData = {
    id: idElemento,
  };
  let dataToSend = JSON.stringify(myData);
  $.ajax({
    url: "https://g3cd4fe72200838-db202109251432.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/farm/farm",
    type: "DELETE",
    data: dataToSend,
    contentType: "application/JSON",
    datatype: "JSON",
    success: function (respuesta) {
      $("#resultadofinca").empty();
      traerInformacionfinca();
      alert("Se ha Eliminado.");
    },
  });
}
//Apartado del cliente-----------------------------------------------------------------------------------------
function traerInformacioncliente() {
  $.ajax({
    url: "https://g3cd4fe72200838-db202109251432.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/client/client",
    type: "GET",
    datatype: "JSON",
    success: function (respuesta) {
      console.log(respuesta);
      $("#resultadocliente").empty();
      pintarRespuestacliente(respuesta.items);
    },
  });
}

function pintarRespuestacliente(items) {
  let myTable = "<table>";
  for (i = 0; i < items.length; i++) {
    myTable += "<tr>";
    myTable += "<td>" + items[i].id + "</td>";
    myTable += "<td>" + items[i].name + "</td>";
    myTable += "<td>" + items[i].email + "</td>";
    myTable += "<td>" + items[i].age + "</td>";
    myTable +=
      "<td> <button onclick='borrarElementocliente(" +
      items[i].id +
      ")'>Borrar</button>";
    myTable += "</tr>";
  }
  myTable += "</table>";
  $("#resultadocliente").append(myTable);
}
function guardarInformacioncliente() {
  let myData = {
    id: $("#id").val(),
    name: $("#name").val(),
    email: $("#email").val(),
    age: $("#age").val(),
  };
  let dataToSend = JSON.stringify(myData);
  $.ajax({
    url: "https://g3cd4fe72200838-db202109251432.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/client/client",
    type: "POST",
    data: myData,
    datatype: "JSON",
    success: function (respuesta) {
      $("#resultadocliente").empty();
      $("#id").val("");
      $("#name").val("");
      $("#email").val("");
      $("#age").val("");
      traerInformacioncliente();
      alert("se ha guardado el dato");
    },
  });
}

function editarInformacioncliente() {
  let myData = {
    id: $("#id").val(),
    name: $("#name").val(),
    email: $("#email").val(),
    age: $("#age").val(),
  };
  console.log(myData);
  let dataToSend = JSON.stringify(myData);
  $.ajax({
    url: "https://g3cd4fe72200838-db202109251432.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/client/client",
    type: "PUT",
    data: dataToSend,
    contentType: "application/JSON",
    datatype: "JSON",
    success: function (respuesta) {
      $("#resultadocliente").empty();
      $("#id").val("");
      $("#name").val("");
      $("#email").val("");
      $("#age").val("");
      traerInformacioncliente();
      alert("se ha Actualizado");
    },
  });
}

function borrarElementocliente(idElemento) {
  let myData = {
    id: idElemento,
  };
  let dataToSend = JSON.stringify(myData);
  $.ajax({
    url: "https://g3cd4fe72200838-db202109251432.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/client/client",
    type: "DELETE",
    data: dataToSend,
    contentType: "application/JSON",
    datatype: "JSON",
    success: function (respuesta) {
      $("#resultadocliente").empty();
      traerInformacioncliente();
      alert("Se ha Eliminado.");
    },
  });
}
//Apartado de mensajeria-----------------------------------------------------------------------------------------
function traerInformacionmensaje() {
  $.ajax({
    url: "https://g3cd4fe72200838-db202109251432.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/message/message",
    type: "GET",
    datatype: "JSON",
    success: function (respuesta) {
      console.log(respuesta);
      $("#resultadomensaje").empty();
      pintarRespuestamensaje(respuesta.items);
    },
  });
}

function pintarRespuestamensaje(items) {
  let myTable = "<table>";
  for (i = 0; i < items.length; i++) {
    myTable += "<tr>";
    myTable += "<td>" + items[i].id + "</td>";
    myTable += "<td>" + items[i].messagetext + "</td>";
    myTable +=
      "<td> <button onclick='borrarElementomensaje(" +
      items[i].id +
      ")'>Borrar</button>";
    myTable += "</tr>";
  }
  myTable += "</table>";
  $("#resultadomensaje").append(myTable);
}
function guardarInformacionmensaje() {
  let myData = {
    id: $("#idmensaje").val(),
    messagetext: $("#messagetext").val(),
  };
  let dataToSend = JSON.stringify(myData);
  $.ajax({
    url: "https://g3cd4fe72200838-db202109251432.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/message/message",
    type: "POST",
    data: myData,
    datatype: "JSON",
    success: function (respuesta) {
      $("#resultadomensaje").empty();
      $("#idmensaje").val("");
      $("#messagetext").val("");
      traerInformacionmensaje();
      alert("se ha guardado el dato");
    },
  });
}

function editarInformacionmensaje() {
  let myData = {
    id: $("#idmensaje").val(),
    messagetext: $("#messagetext").val(),
  };
  console.log(myData);
  let dataToSend = JSON.stringify(myData);
  $.ajax({
    url: "https://g3cd4fe72200838-db202109251432.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/message/message",
    type: "PUT",
    data: dataToSend,
    contentType: "application/JSON",
    datatype: "JSON",
    success: function (respuesta) {
      $("#resultadomensaje").empty();
      $("#idmensaje").val("");
      $("#messagetext").val("");
      traerInformacioncliente();
      alert("se ha Actualizado");
    },
  });
}

function borrarElementomensaje(idElemento) {
  let myData = {
    id: idElemento,
  };
  let dataToSend = JSON.stringify(myData);
  $.ajax({
    url: "https://g3cd4fe72200838-db202109251432.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/message/message",
    type: "DELETE",
    data: dataToSend,
    contentType: "application/JSON",
    datatype: "JSON",
    success: function (respuesta) {
      $("#resultadomensaje").empty();
      traerInformacionmensaje();
      alert("Se ha Eliminado.");
    },
  });
}
//CREADO POR: JUAN CAMILO FRANCO GONZALEZ MISIONTIC 2022