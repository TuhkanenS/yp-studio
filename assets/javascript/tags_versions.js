window.onload = function() {
    let p = document.querySelectorAll(".map_versions_block");
    for(let i = 0; i < p.length; i++) {
        p[i].innerHTML = p[i].innerHTML.split(" ").map(w => "<h5 class=\"map_versions\">" + w + "</h5>").join(" ");
    }
}

document.getElementById('version_1.20.4').addEventListener('click', function handleClick() {
    document.getElementById('searchBar').value = '1.20.4';

    const searchData = document.getElementById('searchBar').value.toLowerCase();

    const filteredData = categories.filter((item) => {
        return (
            item.versions.toLowerCase().includes(searchData)
            )
    })
    displayItem(filteredData)
    version(); 
});

document.getElementById('version_1.20.2').addEventListener('click', function handleClick() {
    document.getElementById('searchBar').value = '1.20.2';

    const searchData = document.getElementById('searchBar').value.toLowerCase();

    const filteredData = categories.filter((item) => {
        return (
            item.versions.toLowerCase().includes(searchData)
            )
    })
    displayItem(filteredData)
    version(); 
});

document.getElementById('multipleer').addEventListener('click', function handleClick() {
    document.getElementById('searchBar').value = 'Мультиплеер';

    const searchData = document.getElementById('searchBar').value.toLowerCase();

    const filteredData = categories.filter((item) => {
        return (
            item.tags.toLowerCase().includes(searchData)
            )
    })
    displayItem(filteredData)
    version(); 
});

document.getElementById('minigames').addEventListener('click', function handleClick() {
    document.getElementById('searchBar').value = 'Мини-игры';

    const searchData = document.getElementById('searchBar').value.toLowerCase();

    const filteredData = categories.filter((item) => {
        return (
            item.tags.toLowerCase().includes(searchData)
            )
    })
    displayItem(filteredData)
    version(); 
});

document.getElementById('new').addEventListener('click', function handleClick() {
    document.getElementById('searchBar').value = 'Новое';

    const searchData = document.getElementById('searchBar').value.toLowerCase();

    const filteredData = categories.filter((item) => {
        return (
            item.tags.toLowerCase().includes(searchData)
            )
    })
    displayItem(filteredData)
    version(); 
});

document.getElementById('clear').addEventListener('click', function handleClick() {
    document.getElementById('searchBar').value = '';

    const searchData = document.getElementById('searchBar').value.toLowerCase();

    const filteredData = categories.filter((item) => {
        return (
            item.title.toLowerCase().includes(searchData) || item.versions.toLowerCase().includes(searchData) || item.tags.toLowerCase().includes(searchData)
            )
    })
    displayItem(filteredData)
    version(); 
});