const colors =  ["#e74c3c", "#8e44ad", "#3498db","e67e22","#2ecc71"];

const body  = document.getElementById('container');
const circles = 800;
for ( let i=0; i<circles; i++){
    const circle = document.createElement("div");
    circle.classList.add("circle");
  
    circle.addEventListener("mouseover",()=>{
        setcolor(circle);
    })
    circle.addEventListener("mouseout",()=>{
        removecolor(circle);
    })
    body.appendChild(circle);
}
const random = () =>{
    return colors[Math.floor(Math.random()*5)];
}
const setcolor= (circle)=>{
    const color = random();
    circle.style.background = "rgba(255, 255, 255, 0.36)";
}
const removecolor = (circle) =>{
    circle.style.background = "rgb(236,82,66)";
}