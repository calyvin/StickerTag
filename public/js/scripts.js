var shoot_button = document.getElementById('shoot_button');

shoot_button.addEventListener('click', function(){
   document.getElementById('weapon_input').disabled = true;
   var opponent = document.getElementById("opponent").textContent;
   var player = document.getElementById("player").textContent;
   var name = document.getElementById("name").textContent;
   
   document.getElementById('weapon_prompt').innerText = name+" chose:";
   
   play_button = document.getElementById("play_button").classList.remove("invisible");

   document.getElementById("shoot_button").classList.add("invisible");

   var choice = Math.random();
   
   if(choice < .33){
   		var c_choice="paper";
   }else if(choice < .66){
   		var c_choice="rock";
   }else{
   		var c_choice="scissors";
   }

   var p_choice = document.getElementById("weapon_input").value
   console.log(p_choice);

   var element = document.getElementById('cpu_weapon');
   element.innerText =opponent.charAt(0).toUpperCase() + opponent.slice(1)+" chose "+c_choice;

   document.getElementById("graphics").innerHTML = "<img src = \"images/"+player+"/"+p_choice+".svg\" width = \"128\" height = \"128\"><img src = \"images/"+opponent+"/"+c_choice+".svg\" style =\"float:right;\" width = \"128\" height = \"128\">";

   element = document.getElementById('outcome');
  
   if(c_choice==p_choice){
   	  element.innerHTML ="<br>"+"It's a tie!";
   }
   else if((p_choice=="paper" && c_choice=="rock" )
           ||(p_choice=="rock" && c_choice=="scissors")
           ||(p_choice=="scissors" && c_choice=="paper")){
   	element.innerHTML ="<br>"+name +" wins!";
   }
   else element.innerHTML ="<br>Computer wins!";
}); 

var play_button = document.getElementById('play_button');

play_button.addEventListener('click', function(){
   shoot_button = document.getElementById("shoot_button").classList.remove("invisible");
   document.getElementById('weapon_input').disabled = false;
   document.getElementById("play_button").classList.add("invisible");
   document.getElementById('cpu_weapon').innerText ="";
   document.getElementById('outcome').innerText ="";
   document.getElementById('graphics').innerHTML = "";
});




