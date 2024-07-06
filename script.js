const openMenu = document.querySelector(".burger");
const mobileMenu = document.querySelector(".menu_mobile");
const devider_top = document.querySelector(".devider_top");
const devider_midle = document.querySelector(".devider_midle");
const devider_bottom = document.querySelector(".devider_bottom");
const span_text = document.querySelector(".span_text");
const span_content = document.querySelector(".span_content");




document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById('searchInput');
    const dataContainer = document.getElementById('dataContainer');
    const items = dataContainer.getElementsByClassName('main_proposition_about_info');
    let debounceTimer;

    const performSearch = () => {
        const filter = searchInput.value.toLowerCase();
        
        for (const item of items) {
            const h2 = item.querySelector("h2")
            const text = h2.textContent || h2.innerText;
            const match = text.toLowerCase().includes(filter);
            item.style.display = match ? "" : "none";
        }
    };

    searchInput.addEventListener('input', function() {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(performSearch, 300);
    });

 
    performSearch();
});


openMenu.addEventListener("click",function(){
    mobileMenu.classList.toggle("active")
    if(mobileMenu.classList.contains("active")){
        span_text.textContent = `Закрити`;
        devider_top.style.transform = "rotate(49deg)";
        devider_bottom.style.transform = "rotate(-49deg)";
        devider_midle.style.display = "none";
        span_content.style.gap = 0 + "px";
    }
    else{
        span_text.textContent = `Меню`;
        devider_top.style.transform = "rotate(0deg)";
        devider_bottom.style.transform = "rotate(0deg)";
        devider_midle.style.display = "block";
        span_content.style.gap = 6 + "px"; 
    }
})