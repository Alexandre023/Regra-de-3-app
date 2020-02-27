$(document).on("click","#calcular",function(){
  var valor1=$("#valor1").val();
  var valor2=$("#valor2").val();
  var valor3=$("#valor3").val();

  var result=(valor1*valor2)/valor3;

  $("#valor4").val(result);
});