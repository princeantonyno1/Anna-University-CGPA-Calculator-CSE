
function calculateSum()
{
  var m1 = parseFloat(document.getElementById("m1").value);
  var m2 = parseFloat(document.getElementById("m2").value);
  var m3 = parseFloat(document.getElementById("m3").value);
  var m4 = parseFloat(document.getElementById("m4").value);
  var m5 = parseFloat(document.getElementById("m5").value);
  var m6 = parseFloat(document.getElementById("m6").value);
  
  
  
  
  

  var sum = ((m1*2+m2*3+m3*3+m4*3+m5*3+m6*2))/16;
 document.getElementById("sum").textContent=sum;
}