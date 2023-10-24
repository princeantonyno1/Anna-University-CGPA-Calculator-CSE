
    function calculateSum()
    {
      var m1 = parseFloat(document.getElementById("m1").value);
      var m2 = parseFloat(document.getElementById("m2").value);
      var m3 = parseFloat(document.getElementById("m3").value);
      var m4 = parseFloat(document.getElementById("m4").value);
      var m5 = parseFloat(document.getElementById("m5").value);
      var m6 = parseFloat(document.getElementById("m6").value);
      var m7 = parseFloat(document.getElementById("m7").value);
      var m8 = parseFloat(document.getElementById("m8").value);
      var m9 = parseFloat(document.getElementById("m9").value);
      
      
      
      
      

      var sum = ((m1*3+m2*4+m3*3+m4*3+m5*3+m6*1+m7*2+m8*2+m9*1))/22;
     document.getElementById("sum").textContent=sum;
    }