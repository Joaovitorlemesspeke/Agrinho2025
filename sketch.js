//cultivo do milho
let startTime; // Para armazenar o momento em que o esboço começou.
let showFirstText = true;
let showSecondText = false;
const ONE_MINUTE = 60 * 10; // Um minuto equivale a 60 segundos



function setup() {
  createCanvas(400, 400);
  background(img);
startTime = millis(); 
textAlign(CENTER, CENTER)

}


function draw() {
 

  //emoji
fill("black");
textSize(98);
text('🧍🏼‍♂️',260,200);
textSize(100)
  
 
 





 

  if (showFirstText) {
    textSize(17);
    text("Opa bao Meu nome é João Vitor", 275,70);
   
textAlign (CENTER,CENTER);
    if (millis() - startTime >= ONE_MINUTE) {
       showFirstText = false; 
  showSecondText = true;
      
         } 
  } else if (showSecondText) {textSize(17);
    text("vou falar sobre a cultura do milho ", width / 2, height / 2);
  text("O milho tem dois estagios, o de formação",width / 2, height / 1.85);
     text("e o estagio de reprodução e a colheita ",width / 2, height / 1.7);         text ("O milho rende de uma a duas espigas per pé",width / 2, height / 1.58) ;         
                             }  

}
      
 
      
      
  //imagem
  

  
  







function preload(){
  img = loadImage("Milho.jpg");
}