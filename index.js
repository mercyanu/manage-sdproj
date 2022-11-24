
//long using html onclick event attribute
// function openDropDown(){
//     let ham = document.getElementById("ham");
//     if(!ham.classList.contains("open")){
//         ham.classList.add("open");
//         document.getElementById("mobile_menu").classList.remove("hidden");
//     }
//     else{
//         ham.classList.remove("open");
//         document.getElementById("mobile_menu").classList.add("hidden");
//     }
    
// }

//shorter implementation w/ arrow func and event listener
const btn = document.getElementById("ham");
const menu = document.getElementById("mobile_menu");

btn.addEventListener('click', () =>{
    btn.classList.toggle('open');
    menu.classList.toggle('hidden');
})