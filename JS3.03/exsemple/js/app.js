const tabs = document.querySelectorAll(".tabheader__item");
const tabsParrent = document.querySelector(".tabheader__items");
const tabContent= document.querySelectorAll(".tabContent");

console.log(tabs);
console.log(tabsParrent);
console.log(tabContent);

const hideTabContent = () => {
    tabContent.forEach((item) => {
        item.style.display= "none";
    });
    tabs.forEach((item) => {
        item.classList.remove("tabheader__item_active");
    });
};

hideTabContent();

const showTabContent = (i =0) => {
    tabContent[i].style.display = "block";
    tabs[i].classList.add("tabheader__item_active");
};

hideTabContent();
showTabContent();

tabsParrent.addEventListener("click", (event) => {
   const target = event.target;

   if (target.classList.contains("tabheader__item")) {
       tabs.forEach(item, i) => {
           if (target=== item) {
               console.log(item);
           }
   });

   }
});





