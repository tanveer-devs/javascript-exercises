let n = 1234;
let cnt = 0;
while(n > 0){
    n = Math.floor(n/10);
    cnt++;
}
console.log(cnt);