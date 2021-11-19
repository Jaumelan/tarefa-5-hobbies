/* valores com os quais devo atualizar o html */
document.getElementById("siteTitle").innerHTML = "MEUS HOBBIES";
document.getElementById("myName").innerHTML = "Jaime Burbano";
document.getElementById("myPicture").src = "img/minha-foto.jpeg";
document.getElementById("information").innerHTML = "Nasci em João Pessoa e estou solteiro";

/*information about the hobby*/

document.getElementById("myHobby").innerHTML = "Marcenaria";
document.getElementById("explanationOfTheHobby").innerHTML = "Gosto de fazer móveis rústicos";
document.getElementById("listOfLinks").innerHTML = "Lista de links explicando o Hobbie"

//links
var firstLink = document.getElementById("first-Link");
firstLink.href = "https://www.domestika.org/pt/courses/area/173-marcenaria?gclid=EAIaIQobChMIhb6Dppik9AIVU4GRCh0uAgNiEAAYAiAAEgKGHvD_BwE";
firstLink.innerHTML = "Curso de Doméstika sobre Marcenaria";
firstLink.target = "_blank";

var secondLink = document.getElementById("second-Link");
secondLink.href = "https://artedamarcenariamoderna.com.br/madeira-macica/";
secondLink.innerHTML = "Dicas para fazer seu próprio móvel";
secondLink.target = "_blank";

var thirdLink = document.getElementById("third-Link");
thirdLink.innerHTML = "Exemplo de móveis para fazer";
thirdLink.href = "https://br.pinterest.com/luizreceita/moveis-de-madeira/"
thirdLink.target = "_blank";

//images of my photos

document.getElementById("furnishing-first").src = "img/estante-banheiro.jpg";
document.getElementById("furnishing-second").src = "img/estante01.jpg";
document.getElementById("furnishing-third").src = "img/Mesas-de-cabeceira.jpg";