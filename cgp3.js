
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
      
      
      
      
      

    
      var sum = ((m1*4+m2*4+m3*3+m4*3+m5*3+m6*1.5+m7*1.5+m8*2+m9*1))/23;
     document.getElementById("sum").textContent=sum;
    }