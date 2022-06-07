<script>
const Start_btn = document.querySelector("Start_btn")

function get_random_number() {
  min=Math.ceil(0);
  max=Math.floor(100);
  var random_number = Math.floor(Math.random()*max-min+1)-min; // generate random number between 0 and 1
  return random_number;
}

function Randomizer_Average(){
	var maxRuns = window.prompt("How many runs would you like to do? (No more that 100 runs)");
    var Runs = parseInt(maxRuns);
    var counter = 0;
    var total = 0;
    var average = 0;
    while(Runs>100){
    	maxRuns = window.prompt("That is an invalid input. Please type again");
        Runs = parseInt(maxRuns);
    }  
    
    while(counter<Runs)
    {
    	counter+=1;
        total+=get_random_number();
	}
    
    average = total/counter;
    alert("Here is the total generated from the Randomizer: " + total)
    alert("Here is the average generated from the Randomizer: " + average)
}

Start_btn.addEventListener('click', Randomizer_Average)
</script>
