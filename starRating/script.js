var starContainer = document.querySelector(".star-container");
var stars = document.querySelectorAll(".star");
var count = document.querySelector("#count");
var currentRating = 0;

starContainer.addEventListener("mouseover", function(e){
    let id = getRating(e);
    if(!id){
        return;
    }
    fillStar(id);
    return;
});

starContainer.addEventListener("click", function(e){
    let id = getRating(e);
    if(!id){
        return;
    }
    currentRating = id;
    fillStar(id);
    return;
});

starContainer.addEventListener("mouseleave", resetStar);

function getRating(e){
    let n = e.target;
    let isStarClicked = n.hasAttribute("data-index");
    if(!isStarClicked){
        return;
    }
    let id = n.getAttribute("data-index");
    return id;
}

function fillStar(id){
    for(let i = 0; i < id; i++){
        stars[i].setAttribute("class","star-filled");
    }
    count.innerText = id;
    return;
}
function resetStar(id){
    for(let i = 0; i < 5; i++){
        stars[i].setAttribute("class","star");
    }
    count.innerText = 0;
    fillStar(currentRating);
    return;
}