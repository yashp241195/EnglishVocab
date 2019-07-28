var min=0;
var a=2;

function FindQ(){
var index=document.getElementById("SearchQuiz").value;
if(index>=min && index<=max){
document.getElementById("demo").innerHTML="";
document.getElementById("qBank").innerHTML="";
document.getElementById("heading").innerHTML="Welcome to Weekly Vocab Quiz ("+index+")";
loadQ('q'+index+'.js');
}
}

function rearrange(){
	document.getElementById("SearchQuiz").value=a;
	FindQ();
}

function loadJS(source){
// DOM: Create the script element
 var jsElm = document.createElement("script");
    // set the type attribute
    jsElm.type = "application/javascript";
    // make the script element load file
    jsElm.src =source;
    // finally insert the element to the body element in order to load the script
     document.getElementById("qBank").appendChild(jsElm);
}
function loadQ(source){
loadJS('./quiz/'+source);
loadJS('./Func/quizengine.js');
}

document.getElementById("heading").innerHTML+="Welcome to Weekly Vocab Quiz ("+max+")";


function NloadQ(){
document.getElementById("demo").innerHTML="";
document.getElementById("qBank").innerHTML="";
var i=a;
i++;
if(i>=min && i<=max){
document.getElementById("heading").innerHTML="Welcome to Weekly Vocab Quiz ("+i+")";
loadQ('q'+i+'.js');
a++;
}else if(i>max){
a=max+1;
document.getElementById("demo").innerHTML="<br>Not Available Yet";
}
}

function PloadQ(){
document.getElementById("demo").innerHTML="";
document.getElementById("qBank").innerHTML="";
var i=a;
i--;
if(i>=min && i<=max){
document.getElementById("heading").innerHTML="Welcome to Weekly Vocab Quiz ("+i+")";
loadQ('q'+i+'.js');
a--;
}else if(i<0){
a=min-1;
document.getElementById("demo").innerHTML="<br>Indexing start from 0 <br>Please Enter Valid index<br>";
}
}
loadQ('q'+max+'.js');