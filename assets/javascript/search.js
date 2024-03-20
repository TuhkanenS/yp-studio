const product = [
    {
        id: 1,
        image: 'assets/image/hide_seek/logo.png',
        title: 'Hide & Seek',
        description: 'игровой режим, где игроки должны искать, а другие прятаться. Те, кто прячутся, выбирают блоки и прячутся. Искатели должны успеть найти всех пока не истекло время, иначе победа достанется прячущимся.',
        versions: '1.20.4 1.20.2',
        tags: 'Мультиплеер Мини-игры Новое',
        link: 'hide.html'
    }
];

function version() {
    let p = document.querySelectorAll(".map_versions_block");
    for(let i = 0; i < p.length; i++) {
        p[i].innerHTML = p[i].innerHTML.split(" ").map(w => "<h5 class=\"map_versions\">" + w + "</h5>").join(" ");
    }
}

document.getElementById('searchBar').addEventListener('keyup', (e) => {
    const searchData = e.target.value.toLowerCase();

    const filteredData = categories.filter((item) => {
        return (
            item.title.toLowerCase().includes(searchData) || item.versions.toLowerCase().includes(searchData) || item.tags.toLowerCase().includes(searchData)
            )
    })
    displayItem(filteredData)
    version(); 
});

const categories = [...new Set(product.map((item) => { return item }))]

const displayItem = (items) => {
    if (items == "") {
        document.getElementById("error").innerHTML = `<div class="content hover">
        <h5 class='text-center'><iconify-icon icon="streamline:dangerous-zone-sign-solid" width="24" height="24"  style="color: black"></iconify-icon></iconify-icon>Ни чего не найдено по вашему запросу!</h5></div>`;
    }
    else {
        document.getElementById("error").innerHTML = "";
    }
    document.getElementById('root').innerHTML = items.map((item) => {
        var { title, description, image, versions, tags, link } = item;
        return (
            `<div class="map_block hover">
                <img src="${image}" alt="logo">
                <div class="map_info">
                    <h5>${title}</h5>
                    <h5>${description}</h5>
                    <a href="${link}" style="width: 100%;"><button class="button" style="width: 100%;">Подробнее</button></a>
                </div>
            </div>
            <div class="map_block hover">
                <h5 class="map_versions_block">${versions} ${tags}</h5>
            </div>`
        )
    }).join('')
}
displayItem(categories);
    