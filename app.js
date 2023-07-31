nomeEstudanteArray = [];

function submit(){
    var displayEstudantesArray =[];

    for (var j=1 ; j<= 4 ; j++)
  {
   var nomeEstudantes = document.getElementById("nomeAluno"+j).value;
   console.log(nomeEstudantes);
   nomeEstudanteArray.push(nomeEstudantes);
  }
  console.log(nomeEstudantesArray);

  var lengthNomeEstudanteArray = nomeEstudanteArray.length;
  console.log(lengthNomeEstudanteArray);

  for ( var k = 0; k <lengthNomeEstudanteArray; k++)
  {
    displayEstudantesArray.push ("<h4>Nome - "=nomeAluno[k] + "</h4>");
    console.log(displayEstudantesArray);
  }
  console.log(displayEstudantesArray);
  document.getElementById("displayNameComAspas")
}  
