// Rahul purchased items worth 4000, there is a deal of 10% discount if the bill is more than or equal to 3999, print new bill amount if he is eligible ese print "Not Eligible"

let bill=4000;
let min_pur=3999;
if (bill >= min_pur){
  console.log("New Bill Amount Is", bill-bill*0.1);
} else {
  console.log("Not eligible");
}