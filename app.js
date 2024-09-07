
function pesquisar(){

// Obtém a referência ao elemento HTML onde os resultados serão exibidos
const section = document.getElementById("resultado-pesquisa");

// Obtém o termo de pesquisa digitado pelo usuário e converte para minúsculas
let campoPesquisa = document.getElementById("campo-pesquisa").value;
campoPesquisa = campoPesquisa.toLowerCase();

//iniciando variaveis
let resultado = '' //armazenara os resultados do for

//variaveis para comparação no if
let nomeArtista = '';
let albuns = '';
let inspiracoes = ''


// Verifica se o campo de pesquisa está vazio
if(!campoPesquisa){
    section.innerHTML = '<p class="descricao-meta" style="color:#fff">Nada encontrado. Sua pesquisa está vazia :( </p>'
    return
}

// Itera sobre cada artista no array de cantores
for(let dado of cantores){

    // Prepara os dados do artista para a comparação (converte para minúsculas)
    nomeArtista = dado.nomeArtista.toLowerCase();
    albuns = dado.albumMaisAclamado.toLowerCase() + dado.albumMaisVendido.toLowerCase();
    inspiracoes = dado.inspiracoes[0].toLowerCase() + dado.inspiracoes[1].toLowerCase();
    grammys = dado.totalDeGrammys + "";


     // Verifica se o termo de pesquisa está contido em algum dos dados do artista
    if(nomeArtista.includes(campoPesquisa) || albuns.includes(campoPesquisa) || inspiracoes.includes(campoPesquisa) || grammys.includes(campoPesquisa)){
        
        //acrescenta as pesquisas em html para exibição
        resultado += ` 
            <div class="item-resultado">
                <h2>${dado.nomeArtista}</h2>
                <img src="${dado.imageLink}" width="375px" alt="foto-artista">
                <p class="descricao-meta">Seu album mais popular se chama " ${dado.albumMaisVendido} " <br> e vendeu cerca de ${dado.quantidadeVendida} de unidades</p>
                <p class="descricao-meta">Seu album mais aclamado é " ${dado.albumMaisAclamado} " </p>
                <p class="descricao-meta">Suas grandes influencias musicais são ${dado.inspiracoes[0]} e ${dado.inspiracoes[1]}</p>
                <p class="descricao-meta">Este artista atualmente possui ${dado.totalDeGrammys} Grammys!</p>

                <div><a href="${dado.perfilGrammy}" target="_blank">Saiba Mais</a></div>
            </div>
    `
    } 
}

//verifica se houve algum resultado
if(!resultado){
    //se não houver, mostrará esta mensagem
    resultado = '<p class="descricao-meta" style="color:#fff">Não encontrado :( </p>';
}

//exibe o resultado da pesquisa
section.innerHTML = resultado;

    
}