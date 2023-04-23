var div= document.createElement("div");
div.style.textAlign="center";
div.style.marginTop="150px";

var inputdata=document.createElement("input");
inputdata.setAttribute("type", "date");
inputdata.id="dob";
inputdata.style.width="30%";

var button= document.createElement("button");
button.setAttribute("type", "button");
button.classList.add("btn", "btn-primary");
button.innerHTML="Display Data";
button.style. margin="10px";

button.addEventListener("click",displayData);
var outputdata=document.createElement("div");
outputdata.style.fontSize="20px";

div.append(inputdata, button, outputdata);
document.body.append(div);


function displayData(){
    var input=document.getElementById("dob").value;
    var birthdate=new Date(input);
    console.log(birthdate);
 

    var currentdate=new Date();
    console.log(currentdate);

    var millisecond=parseInt(currentdate.getTime()) - parseInt(birthdate.getTime());
    console.log(millisecond);
  

    var seconddiff=Math.floor(millisecond/1000);
    console.log(`SecondDiff : ${seconddiff}`);
    

    var minutediff=Math.floor(seconddiff/60);
    console.log(`MinuteDiff : ${minutediff}`);
   

    var hoursdiff=Math.floor(minutediff/60);
    console.log(`HoursDiff : ${hoursdiff}`);
    
    var daydiff=Math.floor(hoursdiff/24);
    console.log(`DayDiff  : ${daydiff}`);
    

    var yeardiff=currentdate.getFullYear()-birthdate.getFullYear();
    console.log(`Yeardiff : ${yeardiff}`);

    var monthdiff=yeardiff*12+((currentdate.getMonth()+1) -(birthdate.getMonth()+1));
    console.log(`MonthDiffer : ${monthdiff}`);

    outputdata.innerHTML=`
    Given date : ${birthdate}  <br>
    year : ${yeardiff}  <br>
    month :${monthdiff} <br>
    day :${daydiff} <br>
    hour : ${hoursdiff} <br>
    second :${seconddiff} <br>
    MillieSecond :${millisecond} <br>
    `;
}


