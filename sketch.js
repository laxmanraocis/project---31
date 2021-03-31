const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies;

var thunder1, thunder2;

var engine, world;

var drop = [];

function preload(){
    
}

function setup(){
    engine = Engine.create(); 
    world = engine.world; 
    createCanvas(400,700);

    if(frameCount%150 === 0){
        for(var i=0;i<100;i++){
            drop.push(new Drops(random(0,400),random(0,400)));
            
        }

    }

}

function draw(){
    background(0);

    Engine.update(engine);

    if(frameCount%150 === 0){
        for(var i=0;i<100;i++){
            drops.push(new Drops(random(0,400),0));
            
        }

    }

    for(var i=0;i<100;i++){
        drop[i].display();
        
    }    
}   

