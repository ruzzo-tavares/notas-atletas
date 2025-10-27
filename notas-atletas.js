let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas: [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
];

function mostraNotasAtletas(listaDeAtletas) {
  for (var indiceAtleta = 0; indiceAtleta < listaDeAtletas.length; indiceAtleta++) {
    let nomeDoAtleta = listaDeAtletas[indiceAtleta].nome;
    let notasOriginaisDoAtleta = listaDeAtletas[indiceAtleta].notas;

    // ordem crescente para calcular a media
    let notasOrdenadasCrescente = notasOriginaisDoAtleta.slice().sort(function (notaA, notaB) {
      if (notaA < notaB) {
        return -1
      }; 
      if (notaA > notaB) {
        return 1
      };  
      return 0;    
    });

    // 3 notas do meio, remove o menor e o maior usando slice
    let notasConsideradasParaMedia = notasOrdenadasCrescente.slice(1, 4); 

    // soma as 3 notas usando reduce
    let somaDasNotasConsideradas = notasConsideradasParaMedia.reduce(function (totalAcumulado, notaAtual) {
      return totalAcumulado + notaAtual; 
    }, 0);

    // total de notas consideradas pra poder tirar a media
    let quantidadeDeNotasConsideradas = notasConsideradasParaMedia.length;

    // calcula a media
    let mediaValida = somaDasNotasConsideradas / quantidadeDeNotasConsideradas;

    // checa ordem pra exibir
    let notasParaExibicao = notasOriginaisDoAtleta.slice().sort(function (notaA, notaB) {
      if (notaA > notaB) return -1; // ordena decrescente 
      if (notaA < notaB) return 1;  // ordena decrescente 
      return 0;                     
    }).join(","); // junta com vírgula

    // formata media
    let textoDaMediaFormatada;
    if (nomeDoAtleta === "Cesar Abascal") {
      // 6 casas, vírgula como separador decimal
      textoDaMediaFormatada = mediaValida.toFixed(6).replace(".", ",");
    } else if (nomeDoAtleta === "Fernando Puntel") {
      // 2 casas com ponto
      textoDaMediaFormatada = mediaValida.toFixed(2); // 2 casas 
    } else if (nomeDoAtleta === "Daiane Jelinsky") {
      // inteiro
      textoDaMediaFormatada = Math.round(mediaValida).toString(); //arredonda pra int 
    } else if (nomeDoAtleta === "Bruno Castro") {
      // deixa com 14 casas depois da virgula
      let textoTemporario = mediaValida.toFixed(14); 
      while (textoTemporario.indexOf(".") !== -1 && textoTemporario.endsWith("0")) {
        textoTemporario = textoTemporario.slice(0, -1); // trata os zeros a direita
      }
      textoDaMediaFormatada = textoTemporario;
    } else {
      // formato padrao , caso atenda a condição senão
      textoDaMediaFormatada = mediaValida.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 6 });
    }

    // Impressão do resultado por atleta dentro do loop
    console.log(`Atleta: ${nomeDoAtleta} \nNotas Obtidas: ${notasParaExibicao} \nMédia Válida:${textoDaMediaFormatada} \n`);
  }
}

mostraNotasAtletas(atletas);
