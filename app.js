<script>
var food =["banana","apple","mango","watermelon"];

function loadfood() {
  document.getElementById("food").innerHTML = food;
}
function myfunction() {
  var food = prompt("what is your fav food?");
  food[food.length] = food;
  document.getElementById('food').innerHTML = food;
}
</script>
