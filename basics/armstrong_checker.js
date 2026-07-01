let n = 370;
const original = n;
let modified = 0;
while(n > 0){
    let digit = n % 10;
    modified = modified + Math.pow(digit, 3);
    n = Math.floor(n/10);
}
if(original === modified){
    console.log("Armstrong");
} else{
    console.log("Not armstrong");
}