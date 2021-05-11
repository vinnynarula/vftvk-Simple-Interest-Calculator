function compute()

{
   var principal = document.getElementById("principal").value;
   if(principal==""){
       alert("enetr some value");
       documnent.getElementById("principal").focus();
       
   }
   else if (principal<= 0) {
       alert("value is negative or less than 0");
   documnent.getElementById("principal").focus();
   
       
   }    
   else{  

 
   var rate = document.getElementById("rate").value;
   var years = document.getElementById("years").value;
   var amount = principal*years*rate/100;
   var year = new Date().getFullYear()+parseInt(years);


   document.getElementById("result").innerHTML= "If you deposit "+"<mark>"+principal+"</mark>,"+'<br/>'+"at an interest rate of <mark>"+rate+"%</mark>"+"<br/>"+"You will receive amount of <mark>"+amount+"</mark>,"+"<br/>in the year<mark> "+year+"</mark>";
    
    }
     
}
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}
