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


function mostraAndar(){
    setTimeout(()=>{
        document.querySelector("#numberAndar").innerText = atual;
    },2000);
  
}

function mostraTrianguloSubindo(){
    triangulo.style.animation ='transicaoSubir 3s linear ';
}

function mostraTrianguloDescendo(){
    trianguloDescendo.style.animation = 'transicaoDescer 3s linear '; 
}

function animacoes(destino){
  
    if(atual === 0){
        setTimeout(()=>{
            document.querySelector('.img-elevador').src="img/elevadorSemiAberto.jpg";
        },1000);
        setTimeout(()=>{
            document.querySelector('.img-elevador').src="img/elevadorFechado.jpg";
        },2000); 
    }
    else if(atual === 1){
        setTimeout(()=>{
            document.querySelector('.img-elevador').src="img/elevadorSemiAberto.jpg";
        },1000);
        setTimeout(()=>{
            document.querySelector('.img-elevador').src="img/elevadorFechado.jpg";
        },2000);
    }
    else if(atual === 2){
        setTimeout(()=>{
            document.querySelector('.img-elevador').src="img/elevadorSemiAberto.jpg";
        },1000);
        setTimeout(()=>{
            document.querySelector('.img-elevador').src="img/elevadorFechado.jpg";
        },2000);
    }
    else if(atual === 3){
        setTimeout(()=>{
            document.querySelector('.img-elevador').src="img/elevadorSemiAberto.jpg";
        },1000);
        setTimeout(()=>{
            document.querySelector('.img-elevador').src="img/elevadorFechado.jpg";
        },2000);
    } 
    setTimeout(()=>{
        if(destino === 0){
            mostraTrianguloDescendo();
            setTimeout(()=>{
                document.querySelector('.img-elevador').src="img/elevadorSemiAberto.jpg";
            },1000);
            setTimeout(()=>{
                document.querySelector('.img-elevador').src="img/elevadorAberto.jpg";
            },2000);
        }
        else if(destino === 1){
            setTimeout(()=>{
                document.querySelector('.img-elevador').src="img/elevadorSemiAberto.jpg";
            },1000);
            setTimeout(()=>{
                document.querySelector('.img-elevador').src="img/elevadorAberto.jpg";
            },2000);
        }
    
        else if(destino === 2){
            setTimeout(()=>{
                document.querySelector('.img-elevador').src="img/elevadorSemiAberto.jpg";
            },1000);
            setTimeout(()=>{
                document.querySelector('.img-elevador').src="img/elevadorAberto.jpg";
            },2000);
        }
        
        else if(destino === 3){
            setTimeout(()=>{
                document.querySelector('.img-elevador').src="img/elevadorSemiAberto.jpg";
            },1000);
            setTimeout(()=>{
                document.querySelector('.img-elevador').src="img/elevadorAberto.jpg";
            },2000);
        }
    },2000);
    atual = destino;
    botoes();
}

function subir(destino){
    mostraTrianguloSubindo();
    mostraAndar();
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
