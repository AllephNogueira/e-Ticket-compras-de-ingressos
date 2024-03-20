// Configurando a quantidade de ingressos

let pista = 400; 
let cadeiraSuperior = 200;
let cadeiraInferior = 400;
quantidadeIngresso(pista, cadeiraSuperior, cadeiraInferior);

// Pegando o ingresso que o usuario escolheu

function comprar(){
    let opcao = document.getElementById('tipo-ingresso').value;
    let qnt = document.getElementById('qtd').value;

    

    if (qnt > 0){

        if(opcao == 'pista'){

            let quantidade = pista;
            if(pista > 0 && qnt <= quantidade){
                pista = pista - qnt;
                document.getElementById('qtd-pista').innerHTML = `${pista}`;
            }else{
                alert(`Nossos ingressos chegaram ao fim, total disponiveis: ${pista}`)
                return
            }
        }else if(opcao == 'superior'){
            let quantidade = cadeiraSuperior;
            if(cadeiraSuperior > 0 && qnt <= quantidade){
                cadeiraSuperior = cadeiraSuperior - qnt;
                document.getElementById('qtd-superior').innerHTML = `${cadeiraSuperior}`;
            }else{
                alert(`Nossos ingressos chegaram ao fim, total disponiveis: ${cadeiraSuperior}`)
                return
            }
        }else{
            let quantidade = cadeiraInferior;
            if(cadeiraInferior > 0 && qnt <= quantidade){
                cadeiraInferior = cadeiraInferior - qnt;
                document.getElementById('qtd-inferior').innerHTML = `${cadeiraInferior}`;
            }else{
                alert(`Nossos ingressos chegaram ao fim, total disponiveis: ${cadeiraInferior}`)
                return
            }
            

        }
    }else{

        alert('Atençao a quantidade de ingresso deve ser maior que 1');

    }
}


// Agora fazer uma funçao para alterar a quantidade de ingressos que aparecem no site

function quantidadeIngresso(pista, cadeiraSuperior, cadeiraInferior){

    document.getElementById('qtd-pista').innerHTML = `${pista}`;
    document.getElementById('qtd-superior').innerHTML = `${cadeiraSuperior}`;
    document.getElementById('qtd-inferior').innerHTML = `${cadeiraInferior}`;


}