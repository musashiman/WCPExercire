let username;
let userresults;

username = prompt("お名前を教えてください。");
document.querySelector("#name").innerHTML = username;

let rand = Math.floor(Math.random()*5);
if(rand == 0){
    userresults = "大吉";
}
if(rand == 1){
    userresults = "中吉";
}
if(rand == 2){
    userresults = "小吉";
}
if(rand == 3){
    userresults = "吉";
}
if(rand == 4){
    userresults = "凶";
}

document.querySelector("#results").innerHTML = userresults;

if(username === ''){
    document.querySelector("#name").innerHTML = '名無しさん';
};