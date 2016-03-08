var score = 0, highScore=0;
var x = 0, dinoHeight=0, dinoUpDown=1;
var cactus0 = 0, cactusPosition0  =-20;
var cactus1 = 0, cactusPosition1  =-20;
var cactus2 = 0, cactusPosition2  =-20; 
var spacebar = false;
var t = 0; 
var start = 0;
var stopGame=false;
var speed=1;

$(document).ready(function(){
	"use strict";
	setInterval(function(){
		if(start){ 	
				displayScoreText();
								
				//make game more difficult
				 speed+= 0.0001;
				
				//*count up score*/
				score+=0.01;
				
				//*define position of cactus and dino*/
				getPositon();
				
				//*if block reaches left wall=reset to right wall*/
				moveAndResetPosition();
				
				//*Make dino Jump if spacbar is pressed (Timeout for Spacebar)*/
				dinoJump();
				
				//** If catus and dino are in the same place aka Dino touches cactus = End of Game/Dino dead*/
				dinoKill();
				
			 
		} 	 
	}, 10 );
   
});

$(document).keydown(function(key) {
			
	"use strict";	
	if (key.keyCode === 32) {
		 
		start=true;
		spacebar=1; 
		 
		
													
	}
}).keyup(function(key){
	"use strict";

	if (key.keyCode === 32) {
		 	 
			$(".block").css("background-color", "blue");
		  start=true;
	}
			
});



function displayScoreText(){
	"use strict";
	/**display text in the upper right corner*/
	$(".VarValue").empty();
	if(score>highScore){highScore=Math.floor(score);}
	$(".scoreText").empty();
	$(".scoreText").append("Score: "+ Math.floor(score) );
	$(".highScoreText").empty();
	$(".highScoreText").append("Highscore: "+ highScore);  
	
}

function endOfGame(stopGame){
	"use strict";
	console.log("Stop "+stopGame);
	console.log("Start "+start);
	$(".block").css("background-color", "tomato");
	$(".highScoreText").empty();
	$(".scoreText").empty();
	$(".scoreText").append("Score: "+ Math.floor(score) );
	score=0;
	$(".highScoreText").append("Highscore: "+ highScore); 
	$(".VarValue").empty();
	$(".VarValue").append("Press Spacebar to start again"); 
	cactusPosition0  =-20;
	cactusPosition1  =-20;
	cactusPosition2  =-20;
	speed=1;
	start=false; 
	console.log("Stop Nachher "+stopGame);
	console.log("Start Nachher "+start);

}
function dinoJump(){
	if(spacebar===1){
		t+=1;
		if(dinoHeight===0||dinoHeight<0){dinoUpDown=1;}
		if(dinoHeight===39||dinoHeight>40){dinoUpDown=-1;}
		dinoHeight+=dinoUpDown;
		
		if(t>77 ){t=0;spacebar=0;dinoHeight=0;} 
		
		$(".block").css("bottom", dinoHeight);
										 
	}
}
function dinoKill(){
		if(dinoHeight<10){ 
					if(cactus0.left<25&&cactus0.left>15){stopGame=true;}
					if(cactus1.left<25&&cactus1.left>15){stopGame=true;}
					if(cactus2.left<25&&cactus2.left>15){stopGame=true;}			
		}
		if(stopGame){  
					endOfGame(stopGame);	
					stopGame=false;
		}
}
function getPositon(){
		/**get the position of the block "top,left"*/
				x=$(".block").position(); 
				x.top=Math.floor(x.top);
				
				/**get the position of the cactus0"x,y"*/
				cactus0=$(".blockcactus0").position(); 
				cactus1=$(".blockcactus1").position();
				cactus2=$(".blockcactus2").position();
}
function moveAndResetPosition(){
		/**move catus from right to left count up*/ 
				if(Math.abs(cactusPosition0-cactusPosition2 )>=0 )	{cactusPosition0 	+=speed; }
				if(Math.abs(cactusPosition0-cactusPosition1 )>170)	{cactusPosition1	+=speed; }
				if(Math.abs(cactusPosition1-cactusPosition2)>170)	{cactusPosition2	+=speed; }
		/**if cactus0is of the far left, reset is to right position*/
				if((cactusPosition0) > 520){cactusPosition0  = -1*(Math.floor((Math.random()*8+1))*10+20);}
				if((cactusPosition1) > 520){cactusPosition1 = -1*(Math.floor((Math.random()*8+1))*10+20);}
				if((cactusPosition2) > 520){cactusPosition2 = -1*(Math.floor((Math.random()*8+1))*10+20);}
		/**Place catus and create the movement*/
				$(".blockcactus0").css("right", cactusPosition0	);  
				$(".blockcactus1").css("right", cactusPosition1	);  
				$(".blockcactus2").css("right", cactusPosition2	);
}