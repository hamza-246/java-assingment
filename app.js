// //chapter 1 : alert//

// //Q1
// alert("hello visiter");

// //Q2
// alert("Error! Please enter a valid password.");

// //Q3
// alert('Welcome to JS Land... \n Happy Coding!');

// //Q4
// alert("Welcome to JS land...");
// alert("Happy coding!");
// //Q5
// console.log(alert("Hello... I can run JS through my web browser's console"))

// //Q6
// //in htmlfile

// //Q7
// // C.







// //chapter 2 : Variable for strings

// //Q1
// var username;

// //Q2
// var myName = "Muhammad Hamza Dandia";

// //Q3
// var message = "hello World";
// alert(message);

// //Q4
// var student = "Jhone Doe";
// var studentAge = "16 years old"
// var certified = "certified Mobile Application Development"
// alert(student);
// alert(studentAge)
// alert(certified)

// //Q5
// var pizza = "PIZZA\nPIZZ\nPIZ\nPI\nP";
// alert(pizza);

// //Q6
// var email = "hamzajawwad456@gmail.com";
// alert(email);

// //Q7
// var book = "A smarter way to learn JavaScript";
// alert(book);

// //Q8
// var htmlview = "Yah! I can write HTML content through Javascript";
// document.write(htmlview);

// //Q9
// var tag = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(tag);







// //chapter 3 : variable for numbers

// //Q1
// var Age = "I am " + 15 + " years old ";
// alert(Age);

// //Q2
// var track = "You have visited this site" + 14 + "times";
// alert(track);

// //Q3
// var birthyear = "<br>" + "<br>" + "My birth year is " +  2004 ;
// document.write(birthyear);

// //Q4
// var shop ="<br>" + "<br>" + "<b>" + "John Doe" + "</b>" + " ordered" + "<b>" +  5  + " T-shirt(s)" + "</b>" + " on XYZ Clothing store";
// document.write(shop);

           
// //chapter no 4 : Variable name :legal and illigal

// //Q1
// var hamza , jawwad , dandia;

// //Q2 : legal
// var hamza , hamzaJawwad , Hamza123  , hamza_556 , asdsa$_34;

// //Q2 : illegal
// // var 12adsdfgd , ddd& , hamza-jawwad , hamza jawwad , var;
// // commented because of error//

// //Q3a
// var stating = "<br>" + "<br>" + "<b>" + "Rules for naming JS variables" + "</b>";
// document.write(stating);


// //Q3b
// var names = "<br>" + "<br>" + "Variable names can only contain letters, numbers, underscores, or dollar signs. For example $my_1stVariable";
// document.write(names);

// //Q3c
// var namess = "<br>" + "<br>" + "Variable names must begin with a letter, an underscore (_) or a dollar sign ($). $hamza, _hamza or hamza";
// document.write(namess);

// //Q3d
// var namesss = "<br>" + "<br>" + "Variable names are case sensitive";
// document.write(namesss);


// //Q3e
// var namessss = "<br>" + "<br>" + "Variable names should not be JS keywords";
// document.write(namessss);










// //chapter no 5 : MATH EXPRESSIONS 
// //Q1
// var A = 3;
// var B = 5;
// var sum = A+B;
// document.write("<br>" + "<br>" + "Sum of 3 and 5 is " + sum);

// //Q2
// var A = 3;
// var B = 5;
// var sub = A-B;
// document.write("<br>" + "<br>" + "subtraction of 3 and 5 is " + sub);

// var A = 3;
// var B = 5;
// var mul = A*B;
// document.write("<br>" + "<br>" + "multiply of 3 and 5 is " + mul);

// var A = 3;
// var B = 5;
// var div = A/B;
// document.write("<br>" + "<br>" + "divide of 3 and 5 is " + div);

// var A = 3;
// var B = 5;
// var mod = A%B;
// document.write("<br>" + "<br>" + "modulus of 3 and 5 is " + mod);


// //Q3a,b
// var  Mathematic = "<br>" + "<br>" + "Value after variable declaration is:" + typeof Mathematic ;
// document.write(Mathematic);
// //Q3c,d
// var Mathematic1 ="<br>" + "<br>" + "initial value is:" + 5;
// document.write(Mathematic1)
// //Q3 e f
// var i = 5;
// var increment = ++i;
// document.write("<br>" + "<br>" + "value after increment is:" + increment);

// //Q3 g h
// var i = 5;
// var increment = ++i + 7;
// document.write("<br>" + "<br>" + "Value after addition is:" + increment);

// //Q3 i j
// var i = 5;
// var increment = --i + 8; 
// document.write("<br>" + "<br>" + "Value after decrement is:" + increment);

// //Q3 k l
// var i = 5;
// var increment = 12%3  ; 
// document.write("<br>" + "<br>" + "The remainder is :" + increment);



// //Q4
// var movie = 600;
// var multi = movie*5;
// document.write("<br>" + "<br>" +  "total cost to buy 5 tickets to movie is " + multi + "PKR");

// //Q5
// document.write("<br>" + "<br>" + "<b>" + "<h1>" + "Table of 4" + "</h1>" + "</b>");
// var table = 4;
// document.write("<br>");
// for (i = 1 ; i <= 10 ; i++){
// document.write(table + " x " + i + "= " + table*i + "<br>");
// }

// //Q6
// var Celsius = 25;




// //Q7
// var item1 = 650;
// var item2 =100;
// var orderQ1 = 3;
// var orderQ2 = 7;
// var shipping = 100;
// var total = (item1 * orderQ1) + (item2 * orderQ2) + shipping;
// document.write( "<br>" + "<b>" + "<h1>" + "SHOPPING CART" + "</h1>" + "</b>");
// document.write( "<br>" +  "Price of item 1 is " + item1 );
// document.write( "<br>" +  "Ordered quantity of item 1 is " + orderQ1 );
// document.write( "<br>" +  "Price of item 2 is " + item2 );
// document.write( "<br>" +  "Ordered quantity of item 2 is " + orderQ2 );
// document.write( "<br>" +  " Shipping charges is " + shipping );
// document.write( "<br>" + "<br>" + "  total cost of your order is " + total );


// //Q8
// var totalMarks = 980;
// var obtMarks = 804;
// var percentage = obtMarks/totalMarks * 100;
// document.write( "<br>" + "<b>" + "<h1>" + "MARKSHEET" + "</h1>" + "</b>");
// document.write( "<br>" + "total Marks" + totalMarks);
// document.write( "<br>" +  "Obtained Marks " + obtMarks);
// document.write( "<br>" +   "percentage " + percentage);


// //Q9
// var UsDollar = 10;
// var SaudiRiyals = 25;
// var us_pk = UsDollar*104.80;
// var sad_pk = SaudiRiyals*28;
// var tot_pk = us_pk + sad_pk;
// document.write( "<br>" + "<b>" + "<h1>" + "CURRENCY IN PKR" + "</h1>" + "</b>");
// document.write( " Total Currency in PKR: " + tot_pk);

// //Q10 
// var memory = (10 + 5 * 10 )/2;

// //Q11
// var current_year = 2020;
// var birth_year = 2004;
// var age_cal = current_year-birth_year;
// document.write( "<br>" + "<b>" + "<h1>" + "AGE CALCULATOR" + "</h1>" + "</b>");
// document.write("<br>" + " current year: " + current_year);
// document.write("<br>" + " Birth year: " + birth_year);
// document.write("<br>" + " your age is: " + age_cal);

// //Q12 
// var radius = 20;
// var circumference = 2 * 3.142 * radius;
// var area = 3.142 * 20 * 20;
// document.write( "<br>" + "<b>" + "<h1>" + "The Geometrizer" + "</h1>" + "</b>");
// document.write("<br>" + " radius of a circle is " + radius);
// document.write("<br>" + " The circumference is " +  circumference);
// document.write("<br>" + " The area is " + area);

// //Q13 
// var favorite_snack = "chocolate chip";
// var current_Age = 15;
// var max_age = 65;
// var amountOf_Snack = 3;
// var years_mul = ((max_age-current_Age)*1461)-2;
// var eat_Total = years_mul*amountOf_Snack;
// document.write( "<br>" + "<b>" + "<h1>" + "The Lifetime Supply Calculator" + "</h1>" + "</b>");
// document.write("<br>" + " favorite snack: " + favorite_snack);
// document.write("<br>" + " current Age: " + current_Age);
// document.write("<br>" + " Estimated max Age: " + max_age);
// document.write("<br>" + " Amount of snack per day: " + amountOf_Snack);
// document.write("<br>" + " You will need " +  years_mul  + " to last you until the ripe old age of 65 ");







// //chapter no 6-9

// //Q1
// var Y = 10;
// ++Y;
// var Y_1 = Y;
// Y++;
// var Y_2 = Y;
// Y--;
// var Y_3 = Y;
// --Y;
// var Y_4 = Y;

// document.write( "<br>" + "<b>" + "<h1>" + "chp 6-9" + "</h1>" + "</b>");
// document.write( "<b>" + "<h1>" + "Increament" + "</h1>" + "</b>");
// document.write( "Result:" + "<br>" + "The value of a is " + Y + "<br>" + ".................................");

// document.write( "<br>" + "The value of ++a is: " + Y_1);
// document.write( "<br>" + "Now the value of a is: " + Y_1);

// document.write( "<br>" + "<br>" + "The value of a++ is: " + Y_1);
// document.write( "<br>" + "Now the value of a is: " + Y_2);

// document.write( "<br>" + "<br>" + "The value of --a is: " + Y_3);
// document.write( "<br>" + "Now the value of a is: " + Y_3);

// document.write( "<br>" + "<br>" + "The value of a-- is: " + Y_3);
// document.write( "<br>" + "Now the value of a is: " + Y_4);

// //Q2
// var chp6_A = 2;
// var chp6_B = 1;
// chp6_ABResult = --chp6_A - --chp6_B + ++chp6_B + chp6_B--;
// document.write( "<b>" + "<h1>" + "Increament2" + "</h1>" + "</b>");
// document.write(  "<br>" + "A is " + 2 );
// document.write(  "<br>" + "B is " + 1 );
// document.write(  "<br>" + "Result is " + 3 );

// //Q3
// var chp6_prompt = prompt("what is your name","enter your name");
// alert("hello " + chp6_prompt);

// //Q6
// var chp6_Subject1 = prompt("write your subject1");
// var chp6_Subject2 = prompt("write your subject2");
// var chp6_Subject3 = prompt("write your subject3");
// var chp6_Max = 100;
// var chp6_obtMarks1 = +prompt("Enter " + chp6_Subject1 + "marks");
// var chp6_obtMarks2 = +prompt("Enter " + chp6_Subject2 + "marks");
// var chp6_obtMarks3 = +prompt("Enter " + chp6_Subject3 + "marks");
// var chp6_obtper1 = (chp6_obtMarks1/chp6_Max)*100;
// var chp6_obtper2 = (chp6_obtMarks2/chp6_Max)*100;
// var chp6_obtper3 = (chp6_obtMarks3/chp6_Max)*100;
// var chp6_TotalMax = chp6_Max*3;
// var chp6_totalobt = chp6_obtMarks1 + chp6_obtMarks2 + chp6_obtMarks3;
// var chp6_totalper = (chp6_totalobt/chp6_TotalMax)*100;
// document.write( "<b>" + "<h1>" + "Mark Sheet" + "</h1>" + "</b>");
// document.write("<b>" +  "Subject " + "total marks " + "obtained marks " + "percentage " +  "</b>");
// document.write(  "<br>" + chp6_Subject1 );
// document.write( "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + chp6_Max );
// document.write(  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + chp6_obtMarks1 );
// document.write(  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + chp6_obtper1 + "%");

// document.write(  "<br>" + chp6_Subject2 );
// document.write( "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + chp6_Max );
// document.write( "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + chp6_obtMarks2 );
// document.write(  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + chp6_obtper2 + "%");

// document.write(  "<br>" + chp6_Subject3 );
// document.write( "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + chp6_Max );
// document.write(  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + chp6_obtMarks3 );
// document.write(  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + chp6_obtper3 + "%");
// document.write("<br>" +  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "<b>" + chp6_TotalMax + "</b>" );
// document.write( "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "<b>" + chp6_totalobt + "</b>");
// document.write( "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "<b>" + chp6_totalper + "%" + "</b>");







// //CHAPTER NO 9-11

// //Q1
// var chp9_City = prompt("enter your country name");

// if(chp9_City === "karachi"){
//     alert("Welcome to city of lights")
// }

// //Q2
// var sir = prompt("enter your gender","male or female");
// if(sir === "male"){
//     alert("Good Morning Sir")
// }
// else if(sir === "female"){
//     alert("Good Morning Ma’am");
// }
// else{
//     alert("enter valid gender");
// }

// //Q3
// var signal = prompt("enter color of road traffic signal ");
// if(signal === "red"){
//     alert("Must Stop");
// }
// else if(signal === "yellow"){
//     alert("Ready to move");
// }
// else if(signal === "green"){
//     alert("Move now")
// }
// else{
//     alert("enter valid signal");
// }

// //Q4
// var fuel = +prompt(" remaining fuel in car (in litres),","Example 1" );
// if(fuel <= 0.25 ){
//    alert("Please refill the fuel in your car")
// }
// else if(fuel <= 5){
//     alert("your car fuel is normal")
// }
// else if(fuel <= 10){
//     alert("your car fuel is full")
// }
// else{
// alert("enter valid number less than or equal to 10")
// }

// //Q5

// //part A 
// //output is diplayed

// //part B
// // output is not diplayed

// //part C
// // condition 2 and 4 is displayed

// //part D
// //output is diplayed

// //part E
// //true is displayed

// //part F
// //output is diplayed

// //Q6
// var chp9_obbtMaks = +prompt("Enter your obtained marks");
// var chp9_totMarks = +prompt("Enter total marks");
// var chp9_totalPer = (chp9_obbtMaks/chp9_totMarks)*100;

// document.write( "<b>" + "<h1>" + "Status Mark Sheet" + "</h1>" + "</b>");
// document.write("<br>" + "Total Marks: " + chp9_totMarks);
// document.write("<br>" + "Marks Obtained: " + chp9_obbtMaks);
// document.write("<br>" + "percentage: " + chp9_totalPer + "%");
// if(chp9_totalPer >= 80 && chp9_totalPer <= 100){
//     document.write("<br>" + "Grade: " + "A-one" + "<br>" + "Remarks: " + "Excellent")
// }
// else if(chp9_totalPer >= 70 && chp9_totalPer < 80){
//     document.write("<br>" + "Grade: " + "A" + "<br>" + "Remarks: " + "Good")
// }
// else if(chp9_totalPer >= 60 && chp9_totalPer < 70){
//     document.write("<br>" + "Grade: " + "B" + "<br>" + "Remarks: " + "You need to improve")
// }
// else if(chp9_totalPer < 60){
//     document.write("<br>" + "Grade: " + "Fail" + "<br>" + "Remarks: " + "Sorry")
// }


// //Q7
// // document.write( "<b>" + "<h1>" + "Guess game:" + "</h1>" + "</b>");
// var bingo_num = 4;
// var guess_num = +prompt("Guess a number under 1 to 10");

// if(bingo_num === guess_num){
//     alert("Bingo! Correct answer")
// }
// else if(bingo_num === ++guess_num){
//     alert("Close enough to the correct answer")
// }
// else{
//     alert("ohno! wrong answer")
// }

// //Q8
// var chp9_div3 = +prompt("Enter a number that is divisible by 3");
// var chp9_div3f =chp9_div3/3;
// if(chp9_div3f){
//     alert("your number is divisible by 3")
// } 
// else if(chp9_div3 ){
//     alert("your number is not divisible by 3")
// }

// //Q9
// var chp9_evenOdd = +prompt("write a value");
// if(chp9_evenOdd % 2 === 0){
//     alert("this is even number")
// }
// else{
//     alert("this is Odd number")
// }

// //Q10
// var chp9_temperature = +prompt("enter current temperature");
// if(chp9_temperature > 40){
//     alert("It is too hot outside.");
// }
// else if(chp9_temperature >= 30){
//     alert("The Weather today is Normal")
// }
// else if(chp9_temperature > 20){
//     alert("Today’s Weather is cool")
// }
// else if(chp9_temperature > 10){
//     alert("OMG! Today’s weather is so Cool.")
// }

// //Q11
// var chp9_firstNumber = +prompt("enter first value");
// var chp9_sign = prompt("enter Sign");
// var chp9_secondNumber = +prompt("enter second value");
// if(chp9_sign == "+"){
//     alert(chp9_firstNumber + chp9_secondNumber)
// }
// else if(chp9_sign == "-"){
//     alert(chp9_firstNumber - chp9_secondNumber)
// }
// else if(chp9_sign == "*"){
//     alert(chp9_firstNumber * chp9_secondNumber)
// }
// else if(chp9_sign == "/"){
//     alert(chp9_firstNumber / chp9_secondNumber)
// }
// else if(chp9_sign == "%"){
//     alert(chp9_firstNumber % chp9_secondNumber)
// }


// //CHAPTER 12-13


// //Q3
// var chp12_test = +prompt("enter value");
// if(chp12_test < 0){
//     alert("negative number");
// }
// else if(chp12_test === 0){
//     alert("zero")
// }
// else if(chp12_test > 0){
//     alert("positive number")
// }

// //Q4
// var chp12_vowels = prompt("enter one string value");
// if(chp12_vowels === "a" || chp12_vowels === "e" || chp12_vowels === "i" || chp12_vowels === "o" || chp12_vowels === "u"){
//     alert("True")
// }
// else{
//     alert("false")
// }

// //Q5
// var chp12_password = "Hamza456";
// var chp12_pass = prompt("enter a password");
// var chp12_passAgain = prompt("Enter password again");

// if(chp12_pass == ""){
//     alert("Please enter your password");
// }
// if(chp12_password == chp12_pass){
//     if(chp12_pass == chp12_passAgain){
//         alert("correct");
//     }
//     else{
//         alert("password not same");
//     }
// }
// else{
//     alert("password incorrect");
// }

// //Q6
// var greeting;
// var hour = 13;
// if(hour < 18){
// greeting = "Good day";
// }
// else{
// greeting = "Good evening";
// }
// console.log(greeting);

// //Q7
// var chp12_Time = 2100;

// if(chp12_Time >= 0000 && chp12_Time < 1200){
//     alert("good Morning")
// } 
// else if(chp12_Time >= 1200 && chp12_Time < 1700){
//     alert("Good afternoon");
// }
// else if(chp12_Time >= 1700 && chp12_Time < 2100){
//     alert("Good evening");
// }
// else if(chp12_Time >= 2100 && chp12_Time <= 2359){
//     alert("Good night");
// }



// //CHAPTER NO 14-16


// //Q1,2
// var arr = ["" , "" , ""];

// //Q3
// var arr = ["hamza" , "jawwad" , "dandia"];

// //Q4
// var arr = [1 , 2 , 3];

// //Q5,6
// var arr = ["hamza" , "34" , "true" , "hamza45"];

// //Q7
// var arr = [ "SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"]

// document.write("<br>" + "<h1>" + "<b>" + "qualifications" + "</b>" + "</h1>");
// for(chp14_i=0;chp14_i < arr.length;chp14_i++){
//     document.write("<br>"+ arr[chp14_i]);
// }

// //Q8
// var chp14_students = ["Hamza" , "ubaid" , "abdul hadi"]
// var chp14_score = [320 , 230 , 480];
// var chp14_totscore = 500
// var chp14_score1 = (320/500)*100;
// var chp14_score2 = (230/500)*100;
// var chp14_score3 = (480/500)*100;
// var chp14_scoreper = [chp14_score1 , chp14_score2 , chp14_score3];

// document.write("<br>" + "<br>" + "Score of " + chp14_students[0] + " is " + chp14_score[0] +  " percentage: " + chp14_scoreper[0]);
// document.write("<br>" + "Score of " + chp14_students[1] + " is " + chp14_score[1] +  " percentage: " + chp14_scoreper[1]);
// document.write("<br>" + "Score of " + chp14_students[2] + " is " + chp14_score[2] +  " percentage: " + chp14_scoreper[2]);



// //Q9







//CHAPTER 17-20
//Q1,2
var chp17_init = [ [0123] , [1012] , [2101]];
document.write("<br>" + chp17_init[0] + "<br>" + chp17_init[1] + "<br>" + chp17_init[2] + "<br>");

//Q3
for(chp17_i = 0 ; chp17_i <= 10 ; chp17_i++){
    document.write("<br>" + chp17_i);
}

//Q4
document.write("<br>" + "<br>" + "<b>" + "<h1>" + "Table of 4" + "</h1>" + "</b>");
var chp17_table = prompt("Enter a number to show its multiplication");
var chp17_length = prompt("Enter length of table")
document.write("<br>");
for (chp17_ti = 1 ; chp17_ti < chp17_length.length ; chp17_ti++){
document.write(chp17_table + " x " + chp17_ti + "= " + chp17_table*chp17_ti + "<br>");
}
