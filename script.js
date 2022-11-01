const points = [4, 5, 16, 200, -45];
document.getElementById("N").innerHTML=points;

function myFunction1() {
points.sort(function(a,b){return a - b });
document.getElementById("N").innerHTML=points;
}
function myFunction2() {
points.sort(function(a,b){return b - a });
document.getElementById("N").innerHTML=points;
}


