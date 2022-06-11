const elementoResposta = document.querySelector("#resposta");
const inputPergunta = document.querySelector("#inputPergunta"); 
const buttonPerguntar = document.querySelector("#buttonPerguntar");
const respostas =["Certeza!",
"Não tenho tanta certeza",
"É decididamente assim.",
"Não conte com isso",
"Sem dúvidas!",
"Pergunte novamente mais tarde",
"Sim, definitivamente",
"Minha resposta é não",
"Você pode contar com isso",
"Melhor não te dizer agora",
"A meu ver, sim.",
"Provavelmente",
"Não é possivel prever agora",
 "Perspectiva boa",
"As perspectiva não são tão boas.",
"Sim",
"Concentre-se e pergunte novamente.",
"Sinais apontam que sim",
"Só vamos!!"];





function fazerPergunta()
{
    if( inputPergunta == "")
    {
        alert("Digite sua Pergunta");
        return;
    }
    buttonPerguntar.setAttribute("disabled",true);
    const pergunta = "<div>" + inputPergunta.value + "</div>";
    const totalrespostas= respostas.length;
    const numeroAleatorio= Math.floor(Math.random() * totalrespostas);
   
    elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio];

    elementoResposta.style.opacity =1;

    setTimeout(function(){
        elementoResposta.style.opacity =0;
        buttonPerguntar.removeAttribute("disabled");
    },3000);


    
}


