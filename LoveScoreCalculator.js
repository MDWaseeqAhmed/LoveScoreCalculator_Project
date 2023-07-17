function loveCal(){
 var name1 = prompt("Enter your Name:");
 var name2 = prompt("Enter your Crush's Name:");
 var loveScore = Math.random();
  loveScore = loveScore * 100;
  loveScore = Math.floor(loveScore) + 1;
 name_1 = name1.charAt(0).toUpperCase() + name1.slice(1);
 name_2 = name2.charAt(0).toUpperCase() + name2.slice(1);

 if (loveScore > 75) {
    alert(name_1 + " your crush " + name2 +" Loves you " + loveScore + "%, your love for each other is like Adam loves Eve!");
 }else{
    alert(name_1 + " your crush " + name2 +" Loves you " + loveScore + "%");
 }
 
}
loveCal();
