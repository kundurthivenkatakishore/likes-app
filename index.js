let likescount=0;
let dislikes=0;
let total=0;
function liked(){
    likescount++;
    total++;
    document.querySelector("#likes").innerHTML=likescount;
    document.querySelector("#total").innerHTML=total;
}
function disliked(){
    dislikes++;
    total++;
    document.querySelector("#dislikes").innerHTML=dislikes;
    document.querySelector("#total").innerHTML=total;
}