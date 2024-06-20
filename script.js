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


