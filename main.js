var a=5678;
var num=0;

while(a>0){
    var b=a%10;
    a=(a-b)/10;
    num+=b
   
}
document.write(num)