const terreoAndar = document.querySelectorAll('.terreoAndar');
const primeiroAndar = document.querySelectorAll('.primeiroAndar');
const segundoAndar = document.querySelectorAll('.segundoAndar');
const terceiroAndar = document.querySelectorAll('.terceiroAndar');
const btnTerreo = document.querySelectorAll('#btn-terreo');
const btnPrimeiro = document.querySelectorAll('#btn-primeiro');
const btnSegundo = document.querySelectorAll('#btn-segundo');
const btnTerceiro = document.querySelectorAll('#btn-terceiro');
const numberAndar = document.querySelectorAll('#numberAndar');
const triangulo = document.querySelector('.triangulo');
const trianguloDescendo = document.querySelector('.trianguloDescendo');


let atual = 0;
let andar = 'T';

function mostraAndar(destino){

    if(atual === 0 && destino === 1){
        mostraTrianguloSubindo()
        setTimeout(()=>{
            document.querySelector("#numberAndar").innerText = destino;
        },3200);
    }
    else if(atual === 0 && destino === 2){
        mostraTrianguloSubindo()
        setTimeout(()=>{
            document.querySelector("#numberAndar").innerText = '1';
        },3200);
        setTimeout(()=>{
            document.querySelector("#numberAndar").innerText = destino;
        },4000);
    }
    else if(atual === 0 && destino === 3){
        mostraTrianguloSubindo()
        setTimeout(()=>{
            document.querySelector("#numberAndar").innerText = '1';
        },3200);
        setTimeout(()=>{
            document.querySelector("#numberAndar").innerText = '2';
        },4000);
        setTimeout(()=>{
            document.querySelector("#numberAndar").innerText = destino;
        },5000);
    }

    if(atual === 1 && destino === 2){
        mostraTrianguloSubindo()
        setTimeout(()=>{
            document.querySelector("#numberAndar").innerText = destino;
        },3200);
    }
    else if(atual === 1 && destino === 3){
        mostraTrianguloSubindo()
        setTimeout(()=>{
            document.querySelector("#numberAndar").innerText = '2';
        },3200);
        setTimeout(()=>{
            document.querySelector("#numberAndar").innerText = destino;
        },4000);
    }
    if(atual === 2 && destino === 0){
        mostraTrianguloDescendo()
        setTimeout(()=>{
            document.querySelector("#numberAndar").innerText = '1';
        },3200);
        setTimeout(()=>{
            document.querySelector("#numberAndar").innerText = 'T';
        },4000);
    }

    if(atual === 2 && destino === 3){
        mostraTrianguloSubindo()
        setTimeout(()=>{
            document.querySelector("#numberAndar").innerText = destino;
        },3200);
    }

    if(atual === 3 && destino === 0){
        mostraTrianguloDescendo()
        setTimeout(()=>{
            document.querySelector("#numberAndar").innerText = '2';
        },3200);
        setTimeout(()=>{
            document.querySelector("#numberAndar").innerText = '1';
        },4000);
        setTimeout(()=>{
            document.querySelector("#numberAndar").innerText = 'T';
        },5000);
    }
    
}

function mostraTrianguloSubindo(){
    triangulo.style.animation ='transicaoSubir 5s linear ';
}

function mostraTrianguloDescendo(){
    trianguloDescendo.style.animation = 'transicaoDescer 5s linear '; 
}

function animacoes(destino){
    
    if(atual === 0){
        setTimeout(()=>{
            document.querySelector('.img-elevador').src="img/elevadorSemiAberto.jpg";
        },2000);
        setTimeout(()=>{
            document.querySelector('.img-elevador').src="img/elevadorFechado.jpg";
        },3000); 
    }
    else if(atual === 1){
        setTimeout(()=>{
            document.querySelector('.img-elevador').src="img/elevadorSemiAberto.jpg";
        },2000);
        setTimeout(()=>{
            document.querySelector('.img-elevador').src="img/elevadorFechado.jpg";
        },3000);
    }
    else if(atual === 2){
        setTimeout(()=>{
            document.querySelector('.img-elevador').src="img/elevadorSemiAberto.jpg";
        },2000);
        setTimeout(()=>{
            document.querySelector('.img-elevador').src="img/elevadorFechado.jpg";
        },3000);
    }
    else if(atual === 3){
        setTimeout(()=>{
            document.querySelector('.img-elevador').src="img/elevadorSemiAberto.jpg";
        },2000);
        setTimeout(()=>{
            document.querySelector('.img-elevador').src="img/elevadorFechado.jpg";
        },3000);
    } 
    setTimeout(()=>{
        if(destino === 0){
            mostraTrianguloDescendo();
            setTimeout(()=>{
                document.querySelector('.img-elevador').src="img/elevadorSemiAberto.jpg";
            },2000);
            setTimeout(()=>{
                document.querySelector('.img-elevador').src="img/elevadorAberto.jpg";
            },3000);
        }
        else if(destino === 1){
            mostraTrianguloSubindo();
            setTimeout(()=>{
                document.querySelector('.img-elevador').src="img/elevadorSemiAberto.jpg";
            },2000);
            setTimeout(()=>{
                document.querySelector('.img-elevador').src="img/elevadorAberto.jpg";
            },3000);
        }
    
        else if(destino=== 2){
            mostraTrianguloSubindo();
            setTimeout(()=>{
                document.querySelector('.img-elevador').src="img/elevadorSemiAberto.jpg";
            },2000);
            setTimeout(()=>{
                document.querySelector('.img-elevador').src="img/elevadorAberto.jpg";
            },3000);
        }
        
        else if(destino === 3){
            mostraTrianguloSubindo();
            setTimeout(()=>{
                document.querySelector('.img-elevador').src="img/elevadorSemiAberto.jpg";
            },2000);
            setTimeout(()=>{
                document.querySelector('.img-elevador').src="img/elevadorAberto.jpg";
            },3000);
        }
    },3000);
  
    atual = destino;
    botoes();
}

function subir(destino){ 
    mostraAndar(destino);
    animacoes(destino);
}

function botoes(){
    if(atual === 0){
        document.querySelector('#btn-terreo').disabled= true;
        document.querySelector('#btn-primeiro').disabled= false;
        document.querySelector('#btn-segundo').disabled= false;
        document.querySelector('#btn-terceiro').disabled= false;
    }
    else if(atual === 1){
        document.querySelector('#btn-terreo').disabled= false;
        document.querySelector('#btn-primeiro').disabled= true;
        document.querySelector('#btn-segundo').disabled= false;
        document.querySelector('#btn-terceiro').disabled= false;
    }
    else if(atual === 2){
        document.querySelector('#btn-terreo').disabled= false;
        document.querySelector('#btn-primeiro').disabled= true;
        document.querySelector('#btn-segundo').disabled= true;
        document.querySelector('#btn-terceiro').disabled= false;
    }
    else if(atual === 3){
        document.querySelector('#btn-terreo').disabled= false;
        document.querySelector('#btn-primeiro').disabled= true;
        document.querySelector('#btn-segundo').disabled= true;
        document.querySelector('#btn-terceiro').disabled= true;
    }
}
