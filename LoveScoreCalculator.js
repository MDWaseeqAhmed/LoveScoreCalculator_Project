function loveCal(){
 var name1 = prompt("Enter your Name:");
 var name2 = prompt("Enter your Crush's Name:");
 var n = Math.random() * 100;
  n = Math.floor(n) + 1;
 name_1 = name1.charAt(0).toUpperCase() + name1.slice(1);
 name_2 = name2.charAt(0).toUpperCase() + name2.slice(1);
 alert(name_1 + " your crush " + name2 +" Loves you " + n + "%");
}
loveCal();