var canvas=new fabric.Canvas('myCanvas');
ball_x=10;
ball_y=400;
hole_x=450
hole_y=30;
block_image_width =5;
block_image_height =5;
guard_x=Math.random()*450;
guard_y=Math.random()*450;
guard2_y=Math.random()*450;
guard3_y=Math.random()*450;
guard4_y=Math.random()*450;
guard5_y=Math.random()*450;
guard2_x=Math.random()*450;
guard3_x=Math.random()*450;
guard4_x=Math.random()*450;
guard5_x=Math.random()*450;
guard_block_image_height=5;
guard_block_image_width=5;

function load_img(){
	fabric.Image.fromURL("home.png",function(Img){
		hole=Img;
		hole.scaleToWidth(50);
		hole.scaleToHeight(50);
		hole.set({
			top:hole_y,
			left:hole_x
		});
		canvas.add(hole);
	});
	new_image();
	firstGuard();
	secondGuard();
	thirdGuard();
	fourthGuard();
	fifthGuard();
}

function new_image()
{
	fabric.Image.fromURL("you.png",function(Img){
		ball=Img;
		ball.scaleToWidth(50);
		ball.scaleToHeight(50);
		ball.set({
			top:ball_y,
			left:ball_x
		});
		canvas.add(ball);
		})
}

function firstGuard(){
	fabric.Image.fromURL("guard.png",function(Img){
		guard=Img;
		guard.scaleToWidth(50);
		guard.scaleToHeight(50);
		guard.set({
			top:guard_y,
			left:guard_x
		});
		canvas.add(guard);
	})
}

function secondGuard(){
	fabric.Image.fromURL("guard.png",function(Img){
		guard2=Img;
		guard2.scaleToWidth(50);
		guard2.scaleToHeight(50);
		guard2.set({
			top:guard2_y,
			left:guard2_x
		});
		canvas.add(guard2);
	})
}

function thirdGuard(){
	fabric.Image.fromURL("guard.png",function(Img){
		guard3=Img;
		guard3.scaleToWidth(50);
		guard3.scaleToHeight(50);
		guard3.set({
			top:guard3_y,
			left:guard3_x
		});
		canvas.add(guard3);
	})
}

function fourthGuard(){
	fabric.Image.fromURL("guard.png",function(Img){
		guard4=Img;
		guard4.scaleToWidth(50);
		guard4.scaleToHeight(50);
		guard4.set({
			top:guard4_y,
			left:guard4_x
		});
		canvas.add(guard4);
	})
}


function fifthGuard(){
	fabric.Image.fromURL("guard.png",function(Img){
		guard5=Img;
		guard5.scaleToWidth(50);
		guard5.scaleToHeight(50);
		guard5.set({
			top:guard5_y,
			left:guard5_x
		});
		canvas.add(guard5);
	})
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x==hole_x)&&(ball_y=hole_y)){
		canvas.remove(ball);
		win_image();
		document.getElementById("hd3").innerHTML="You won! You completed your mission and were able to return home safely!";
		document.getElementById("myCanvas").style.borderColor="red";
		console.log("won");
	}
	else if((((ball_x==0)||(ball_x==500)||(ball_y==0)||(ball_y==500)))){
		document.getElementById("hd3").innerHTML="You Lost! You were electrocuted by the fence!"
		console.log("lost");
		canvas.remove(ball);
	}
	else if((Math.abs(ball_x-guard_x)<50)&&(Math.abs(ball_y-guard_y)<50)){
		document.getElementById("hd3").innerHTML="You Lost! You were caught and killed by the guards."
		console.log("lost");
		canvas.remove(ball);
	}
	else if((Math.abs(ball_x-guard2_x)<50)&&(Math.abs(ball_y-guard2_y)<50)){
		document.getElementById("hd3").innerHTML="You Lost! You were caught and killed by the guards."
		console.log("lost");
		canvas.remove(ball);
	}
	else if((Math.abs(ball_x-guard3_x)<50)&&(Math.abs(ball_y-guard3_y)<50)){
		document.getElementById("hd3").innerHTML="You Lost! You were caught and killed by the guards."
		console.log("lost");
		canvas.remove(ball);
	}
	else if((Math.abs(ball_x-guard4_x)<50)&&(Math.abs(ball_y-guard4_y)<50)){
		document.getElementById("hd3").innerHTML="You Lost! You were caught and killed by the guards."
		console.log("lost");
		canvas.remove(ball);
	}
	else if((Math.abs(ball_x-guard5_x)<50)&&(Math.abs(ball_y-guard5_y)<50)){
		document.getElementById("hd3").innerHTML="You Lost! You were caught and killed by the guards."
		console.log("lost");
		canvas.remove(ball);
	}
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ball_y>=0){
			ball_y=ball_y-block_image_height;
			console.log(ball_x+","+ball_y);
			canvas.remove(ball);
			new_image();
		}
		if(((((guard_x>=0)||(guard2_x>=0)||(guard3_x>=0)||(guard4_x<=700)||(guard5_x>=0))))){
			guard_x=guard_x-guard_block_image_width;			
			guard2_x=guard2_x-guard_block_image_width;
			guard3_x=guard3_x-guard_block_image_width;
			guard4_x=guard4_x+guard_block_image_width;
			guard5_x=guard5_x-guard_block_image_width;
			console.log(guard_x+","+guard_y+guard2_x+","+guard2_y+guard3_x+","+guard3_y+guard4_x+","+guard4_y+guard5_x+","+guard5_y);
			canvas.remove(guard);
			canvas.remove(guard2);
			canvas.remove(guard3);
			canvas.remove(guard4);
			canvas.remove(guard5);
			firstGuard();
			secondGuard();
			thirdGuard();
			fourthGuard();
			fifthGuard();			
		}
	}

	function down()
	{
		if(ball_y<=500){
			ball_y=ball_y+block_image_height;
			console.log(ball_x+","+ball_y);
			canvas.remove(ball);
			new_image();
		}
		if(((((guard_x<=900)||(guard2_x<=900)||(guard3_y>=0)||(guard4_x<=900)||(guard5_x<=900))))){
			guard_x=guard_x+guard_block_image_width;
			guard2_x=guard2_x+guard_block_image_width;
			guard3_y=guard3_y-guard_block_image_width;
			guard4_x=guard4_x+guard_block_image_width;
			guard5_x=guard5_x+guard_block_image_width;
			console.log(ball_x+","+ball_y);
			canvas.remove(guard);
			canvas.remove(guard2);
			canvas.remove(guard3);
			canvas.remove(guard4);
			canvas.remove(guard5);
			firstGuard();
			secondGuard();
			thirdGuard();
			fourthGuard();
			fifthGuard();			
		}
	}
	}

	function left(){
	

			if(ball_x>=0){
				ball_x=ball_x-block_image_height;
				console.log(ball_x+","+ball_y);
				canvas.remove(ball);
				new_image();
			}
			if(((((guard_y>=0)||(guard2_y>=0)||(guard3_y>=0)||(guard4_y>=0)||(guard5_y>=0))))){
				guard_y=guard_y-guard_block_image_height;
				guard2_y=guard2_y-guard_block_image_height;
				guard3_y=guard3_y-guard_block_image_height;
				guard4_y=guard4_y-guard_block_image_height;
				guard5_x=guard5_x-guard_block_image_height;
				console.log(ball_x+","+ball_y);
				canvas.remove(guard);
				canvas.remove(guard2);
				canvas.remove(guard3);
				canvas.remove(guard4);
				canvas.remove(guard5);
				firstGuard();
				secondGuard();
				thirdGuard();
				fourthGuard();
				fifthGuard();			
			}
		}
		

	function right()
	{
		if(ball_x <=700)
		{
			ball_x=ball_x+block_image_height;
			console.log(ball_x+","+ball_y);
			canvas.remove(ball);
			new_image();
		}
		if(((((guard_y<=500)||(guard2_y<=500)||(guard3_y<=500)||(guard4_y<=500)||(guard5_y<=500))))){
			guard_y=guard_y+guard_block_image_height;
			guard2_y=guard2_y+guard_block_image_height;
			guard3_y=guard3_y+guard_block_image_height;
			guard4_y=guard4_y-guard_block_image_height;
			guard5_y=guard5_y+guard_block_image_height;
			console.log(ball_x+","+ball_y);
			canvas.remove(guard);
			canvas.remove(guard2);
			canvas.remove(guard3);
			canvas.remove(guard4);
			canvas.remove(guard5);
			firstGuard();
			secondGuard();
			thirdGuard();
			fourthGuard();
			fifthGuard();			
		}
	}
	

function win_image()
{
	fabric.Image.fromURL("download.png",function(Img){
		flag=Img;
		flag.scaleToWidth(100);
		flag.scaleToHeight(100);
		flag.set({
			top:hole_y,
			left:hole_x
		});
		canvas.add(flag);
		})
}

