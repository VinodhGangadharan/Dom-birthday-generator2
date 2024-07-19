var div = document.createElement("div");
div.className="main";

var input = document.createElement("input");
input.setAttribute("type","date");
input.id="dob";

var button= document.createElement("button");
button.setAttribute("type","button");
button.className="btn btn-primary";
button.innerHTML="Display Data";
button.addEventListener("click",date_generator);


div.append(input,button);
document.body.append(div);

var p1 = document.createElement("p");
var p2 = document.createElement("p");
var p3 = document.createElement("p");
var p4 = document.createElement("p");
var p5 = document.createElement("p");
var p6 = document.createElement("p");
var p7 = document.createElement("p");
document.body.append(p1,p2,p3,p4,p5,p6,p7);

function date_generator()
{
    var res= document.getElementById("dob").value;
    var inputdate = new Date(res);
    var currentdate =new Date();
    console.log(inputdate,currentdate);

    var millisecdiff = parseInt(currentdate.getTime()-inputdate.getTime());
    console.log(millisecdiff);


    var secdiff = Math.floor(millisecdiff/1000);
    console.log(secdiff);

        
    var mindiff = Math.floor(secdiff/60);
    console.log(mindiff);

      
    var hrdiff = Math.floor(mindiff/60);
    console.log(hrdiff);

    var daydiff = Math.floor(hrdiff/24);
    console.log(daydiff);
    
    var yeardiff = currentdate.getFullYear() - inputdate.getFullYear();
    console.log( yeardiff);

    var monthdiff = (yeardiff*12)+(currentdate.getMonth()-inputdate.getMonth());
    console.log(monthdiff);

   
  
p1.innerHTML= 'Years: ' + yeardiff;

p2.innerHTML='Months: ' +monthdiff;

p3.innerHTML='Days: ' +daydiff;

p4.innerHTML='Hours: ' +hrdiff;

p5.innerHTML= 'Minutes: ' +mindiff;

p6.innerHTML=' Seconds: ' +secdiff;

p7.innerHTML='Milliseconds: '+ millisecdiff;

}




