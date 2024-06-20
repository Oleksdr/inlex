document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById('searchInput');
    const dataContainer = document.getElementById('dataContainer');
    const items = dataContainer.getElementsByClassName('main_proposition_about_info');

    searchInput.addEventListener('keyup', function() {
        const filter = searchInput.value.toLowerCase();
        Array.from(items).forEach(item => {
            const text = item.textContent || item.innerText;
            if (text.toLowerCase().includes(filter)) {
                item.style.display = "";
            } else {
                item.style.display = "none";
            }
        });
    });
});

