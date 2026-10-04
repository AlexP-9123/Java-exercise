const erti = document.getElementById("one");
const ori = document.querySelector(".upper");
const three = document.getElementById("two");
const paragraph = document.createElement("p");
const four = document.getElementById("switch");
const five = document.getElementById("activation");
const image = document.querySelector(".surati");
const colorBlue = document.getElementById("lurji");
const colorRed = document.getElementById("witeli");
const vanish = document.getElementById("start");
const press = document.querySelector(".buttons")

erti.addEventListener("click",()=>{
    ori.classList.add("Active");
    erti.classList.add("Red")
    erti.textContent = "Clicked!"
    const content = document.querySelector(".upper");
    paragraph.textContent = "Hellow World!";

content.append(paragraph);


});

three.addEventListener("click", ()=>{
    ori.classList.remove("Active");
    erti.classList.remove("Red");
    three.textContent = "Removed!"
    paragraph.remove()


});

four.addEventListener("click", ()=>{

    ori.classList.toggle("box");
    erti.classList.toggle("Red");

});

five.addEventListener("click", ()=>{
    image.classList.toggle("active");
   
   
    
});

colorBlue.addEventListener("click", ()=>{
    ori.classList.add("blue");
});

colorRed.addEventListener("click", ()=>{
    ori.classList.add("red");
});

vanish.addEventListener("click", ()=>{
    press.classList.remove("hidden")
})

