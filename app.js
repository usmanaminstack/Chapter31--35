
Q:1
var a = new Date();
 document.write(a + "<br>");

 Q:2 
  var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var a = new Date();
  document.write("<br><br> Current Month : " + month[a.getMonth()]); 

//Q:3
var day = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"]
document.write("<br><br>Today is " + day[(new Date).getDay()].substring(0,3));

 Q:4
var day = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"]
var d = day[(new Date()).getDay()];
if(d === "Saturday" || d === "Sunday" ){
    alert("It's Fun Day");
} 

Q:5
var i = a.getDate()
if (a < 16){
    document.write("<br><br>First fifteen days of the month<br><br>")
}
else{
    document.write("<br><br>Last fifteen days of the month<br><br>");
}

Q:6
var date = new Date();
var milli = date.getTime();
document.write("<br><br>Current Date : " + date);
document.write("<br>Elapsed milliseconds since January 1, 1970 : " + milli);
document.write("<br>Elapsed minutes since January 1, 1970 : " + milli / (1000 * 60 * 60));
 
 Q:7
 var hours = a.getHours()
 if(hours < 12){
     alert("Its AM")
 }
 else{
     alert("Its PM")
 }

Q:8
 var laterDate = new Date("Dec 31, 2020");
 document.write("Later date: " + laterDate + "<br><br>");

Q:9
var ram = new Date("24,Apr,2020");
var cdate = new Date();
var difft = cdate.getTime() - ram.getTime();
var diffd = difft / (1000*60*60*24);
document.write('<br /><br />',Math.round(diffd),' days have passed since 1st Ramdan, 2020');

Q:10
var dt = new Date("01/01/2020");
var dd = new Date();
var milli = dd.getTime() - dt.getTime();
document.write("<br><br>On reference date " + dt);
document.write("<br>" + Math.round(milli / (1000*60))+' Seconds had passed since begining of 2020')

 Q:11
var dt = new Date();
document.write("<br><br>Current date " + dt);
dt.setHours(dt.getHours() - 1);
document.write("<br>1 hour ago, it was " + dt);

Q:12

var a = new Date();
document.write("<br><br>current date: " + a);
a.setFullYear(a.getFullYear() - 100);
document.write("<br>100 years back, it was " + a);

Q:13
var age = +prompt("Enter your age:","Your age is")
var current = new Date();
var year = current.getFullYear()-age;
document.write("Your age is " + age + "<br>Your birthyear is " + year)

Q:14
 var a = new Date();
var name = prompt("Enter your name");
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var units = prompt("Enter number of units");
var charges = 16;
var netAmount = units*charges;
var latePay = 350;
var grossAmount = netAmount + latePay;
document.write("<h2>K-Electric Bill</h2>");
document.write("Customer Name: <b>"  +  name + "</b><br>Month: <b>" + month[a.getMonth()] + "</b><br>Number of units: <b>" + units + "</b><br>Units per charge: <b>" + charges + "</b>");
document.write("<br><br>Net amount payable (within Due Date): <b>" + netAmount + "</b><br>Late payment surcharge: <b>" + latePay + "</b><br>Gross Amount payable (after Due Date): <b>" + grossAmount + "</b>")

var dt = new Date();
console.log(`${dt.getHours()} : ${dt.getMinutes()} : ${dt.getSeconds()} `);

var dates = new Date();
var dt = dates.getDate(dates)
console.log(dt)


var dates = new Date();
console.log(`${dates.getHours()} : ${dates.getMinutes()}`)


var dates = new Date();
console.log(dates.getFullYear());

document.write("<center>")
for(var i = 0; i <= 7; i++){
    for(var j = 0; j <= i; j++){
        document.write("*")
    }
    document.write("<br>")
}
for(var a = 7; a >= 0; a--){
    for(var h = 0; h < a; h++){ 
     document.write("*")
}
document.write("<br>")
}

for(var i = 0; i <= 7; i++){
    for(var f = 0; f <= i; f++){
        document.write("*")
    }
    document.write("<br>")
}for(var x = 7; x >= 0; x--){
    for(var b = 0; b < x; b++){
        document.write("*")
    }
    document.write("<br>")
}


var a = new Date();
console.log(`${a.getHours()} : ${a.getMinutes()}`);



var a = new Date();
console.log(a.getMonth())

var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var a = new Date();
document.write("<br><br> Current Month :" + month[a.getMonth()]);


var a = new Date();
document.write(`${a.getHours()} : ${a.getMinutes()} : ${a.getSeconds()}`)



















var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
document.write( "Current Month :" + month[(new Date()).getMonth()] )