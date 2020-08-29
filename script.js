const all = document.getElementById("all");
const main = document.getElementById("main");
const dessert = document.getElementById("dessert");
const lunch = document.getElementById("lunch");

const cupcake = document.getElementById("cupcake");
const sesameChicken = document.getElementById("sesameChicken");
const braisedBeef = document.getElementById("braisedBeef");
const chickenBreast = document.getElementById("chickenBreast");
const salad = document.getElementById("salad");

let menu = {
    all: [cupcake, sesameChicken, braisedBeef, chickenBreast, salad],
    main: [sesameChicken, braisedBeef],
    dessert: [cupcake],
    lunch: [chickenBreast, salad]
}

all.addEventListener("click", function() {
    for (let i = 0; i < menu.all.length; i++) {    
            menu.all[i].classList.remove("hideItems");
            menu.all[i].classList.add("showItems");
    console.log(menu.all[i])
    menu.all[i].classList.add("showItems"); 
    }
})

main.addEventListener("click", function() {
    cupcake.classList.add("hideItems");
        chickenBreast.classList.add("hideItems");
        salad.classList.add("hideItems");


    if (sesameChicken.classList.contains("hideItems")) {
        sesameChicken.classList.remove("hideItems");
        sesameChicken.classList.add("showItems");
    } else {
        cupcake.classList.add("hideItems");
        chickenBreast.classList.add("hideItems");
        salad.classList.add("hideItems");
        sesameChicken.classList.add("showItems");
        braisedBeef.classList.add("showItems");
    }

    if (braisedBeef.classList.contains("hideItems")) {
        braisedBeef.classList.remove("hideItems");
        braisedBeef.classList.add("showItems");
    } else {
        cupcake.classList.add("hideItems");
        chickenBreast.classList.add("hideItems");
        salad.classList.add("hideItems");
        sesameChicken.classList.add("showItems");
        braisedBeef.classList.add("showItems");
    }
})

dessert.addEventListener("click", function() {
    cupcake.classList.add("showItems");
    chickenBreast.classList.add("hideItems");
        salad.classList.add("hideItems");
        sesameChicken.classList.add("hideItems");
        braisedBeef.classList.add("hideItems");


    if (cupcake.classList.contains("hideItems")) {
        cupcake.classList.remove("hideItems");
        cupcake.classList.add("showItems");
        console.log(dessert.classList)
    } else {
        chickenBreast.classList.add("hideItems");
        salad.classList.add("hideItems");
        sesameChicken.classList.add("hideItems");
        braisedBeef.classList.add("hideItems");
        cupcake.classList.add("showItems");
        console.log(dessert.classList)
    }
})

lunch.addEventListener("click", function() {
    chickenBreast.classList.add("showItems");
    salad.classList.add("showItems");
    cupcake.classList.add("hideItems");
    sesameChicken.classList.add("hideItems");
    braisedBeef.classList.add("hideItems");

    if (chickenBreast.classList.contains("hideItems")) {
        chickenBreast.classList.remove("hideItems");
        chickenBreast.classList.add("showItems");
    } else {
        cupcake.classList.add("hideItems");
        sesameChicken.classList.add("hideItems");
        braisedBeef.classList.add("hideItems");
        chickenBreast.classList.add("showItems");
        salad.classList.add("showItems");
    }

    if (salad.classList.contains("hideItems")) {
        salad.classList.remove("hideItems");
        salad.classList.add("showItems");
    } else {
        cupcake.classList.add("hideItems");
        sesameChicken.classList.add("hideItems");
        braisedBeef.classList.add("hideItems");
        chickenBreast.classList.add("showItems");
        salad.classList.add("showItems");
    }
})

