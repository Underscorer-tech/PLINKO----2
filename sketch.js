
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint


var g1;
var particles1 = [];
var plinko1 = [];
var division1 = [];
var divisionheight=300;
var score = 0, par,turn = 5;
var state=1;
function setup() {
  createCanvas(485,650);
  engine = Engine.create();
  world = engine.world;
  g1 = new ground(windowWidth/2,652,windowWidth,30);
  Engine.run(engine);

}

function draw() {
  
  
  background("black");  

  Engine.update(engine);

  console.log(mouseX+" "+mouseY+" "+score+" "+turn+" "+state)//280,385
 //console.log(frameCount)
 push()
 textSize(26);
 if(mouseX !== 0 && mouseY !== 0){
 fill(color(mouseY,mouseX,mouseX))
 }else fill("white")
 textFont("algerian")
 text("100",255,385)
 text("100",180,385)
 text("500",100,385)
 text("500",20,385)
 text("350",340,385)
 text("350",420,385)
 pop()

 push()
 textSize(26);
 if(mouseX !== 0 && mouseY !== 0){
 fill(color(mouseY,mouseX,mouseX))
 }else fill("white")
 textFont("algerian")
 text("Score:",190,24)
 text(score,283,24)
 pop();



 for (var k = 0 ; k <= width; k = k +80){

division1.push(new division(k,height-divisionheight/2,10,divisionheight))

 }
 
for (var j = 40; j <= width;j=j+50){

plinko1.push(new plinko(j,75,15));

}

for (var j = 15; j <= width-10;j=j+50){

  plinko1.push(new plinko(j,175,15));
  
  }

  
  

  for (var k = 0; k <division1.length;k++){

    division1[k].display();
    
      }
      
      for (var a = 0; a <plinko1.length;a++){

        plinko1[a].display();
        
          }
          
if (par != null){

par.display()

}

       

 rectMode(CENTER);

 getScore();
  g1.display();

if(turn <=0){

state=0;

}


}

function mousePressed(){
  console.log(turn)
  if ( turn >= 1 && turn != -1){
par = new particles(mouseX,10,7)
  }

  if(turn >= 1){
turn=turn-1;
  }
}



function getScore(){

  if (par != null){

    
    
    if(par.body.position.x <165 && par.body.position.y > 400 && par.body.position.x>5 ){
        
  onscore500();
   
    }
    
    if(par.body.position.x <325 && par.body.position.y > 400 && par.body.position.x>170 ){
        
      onscore100();
       
        }
        
        if(par.body.position.x <490 && par.body.position.y > 400 && par.body.position.x>326 ){
        
          onscore350();
           
            }

    }
 
}



function onscore500(){


 score=score+500
if (score > 500 && turn == 4){
score=score-500
}

if (score > 1000 && turn == 3){
  score=score-500
  }
  
  if (score > 1500 && turn == 2){
    score=score-500
    }
  
    if (score > 1000 && turn == 1){
      score=score-500
      }
    
      if (score > 2000 && turn == 0){
        score=score-500
        }
      
        
       
    
            
}
function onscore100(){

score=score+100
 
  if (score > 100 && turn == 4){
  score=score-100
  }
  
  if (score > 200 && turn == 3){
    score=score-100
    }
    
    if (score > 300 && turn == 2){
      score=score-100
      }
    
      if (score > 400 && turn == 1){
        score=score-100
        }
      
        if (score > 500 && turn == 0){
          score=score-100
          }
        
 
  
  }
  
  function onscore350(){

    score=score+350
     
      if (score > 350 && turn == 4){
      score=score-350
      }
      
      if (score > 700 && turn == 3){
        score=score-350
        }
        
        if (score > 1050 && turn == 2){
          score=score-350
          }
        
          if (score > 1400 && turn == 1){
            score=score-100
            }
          
            if (score > 500 && turn == 0){
              score=score-100
              }
                   

      
      }
      