// const btn = document.querySelectorAll(".btn");
// const content = function(id)
// {
//    const con = document.querySelectorAll(".content");
//    con.forEach(element => {
//     element.classList.remove("active");
//    });
//    const act = document.getElementById(`${id}`);
//    act.classList.add("active");
// }
// btn.forEach(element => {
//     element.onclick=function(){
//         btn.forEach(ele=> {
//             ele.classList.remove("active");
//         });
//         element.classList.add("active");
//         content(element.innerHTML);
//     }
// });


const mainContent = document.querySelector("main");
const tabs = document.querySelectorAll(".btn");
const content = document.querySelectorAll(".content");

mainContent.onclick=(e)=>{
 const id = e.target.dataset.id;
 if(id)
 {
    tabs.forEach((tab)=>tab.classList.remove("active"));
    e.target.classList.add("active");
    content.forEach((curContent)=> curContent.classList.remove("active"));
    const newActive = document.getElementById(id);
    newActive.classList.add("active");
 }
}