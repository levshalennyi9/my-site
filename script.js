let random = parseInt(Math.random() * 10) + 1

function guess(){
user = Number(document.getElementById('guess').value);
result =document.getElementById('result');

if(user == random){
    result.textContent = 'вітаю ви вгадали число ';
    document.body.style.background = 'green'

}
else if(user > random) {
   
    result.textContent = 'менше ';


}
else {
    result.textContent ='більше' ;

}
}