//changing the color of all the h3 tags
const h3 = document.getElementsByTagName("h3");

for (const headings of h3){
    headings.style.color = "blue";
}

//changing background color of the backpack heading
const backpackTitle = document.getElementById("backpack-title");
backpackTitle.style.backgroundColor = "coral";

//changing card
const card = document.getElementsByClassName("card");
for (const cards of card){
    cards.style.backgroundColor = "lightGreen";
    cards.style.borderRadius = "30px";
}

let click = 0;
function clickCount(){
    click += 1;
    console.log("Clicked on the header button", click, "times.");
    return click;
}

//Removing buy now button
const buyNowBtns = document.getElementsByClassName("buy-now-button");
for (const btn of buyNowBtns){
    btn.addEventListener("click", function(event){
        event.target.parentNode.removeChild(event.target);
    })
}