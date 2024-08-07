const filters = document.querySelector("#filters");
const sortPrice = document.querySelector("#sortPrice");

filters.addEventListener("input", filterGoods);
sortPrice.addEventListener("change", filterGoods);

function filterGoods() {
    const
        marca = filters.querySelector("#marca").value,
        year = filters.querySelector("#year").value,
        transmision = [...filters.querySelectorAll("#transmision input:checked")].map(
            (n) => n.value
        ),
        combustible = [...filters.querySelectorAll("#combustible input:checked")].map(
            (n) => n.value
        ),
        rango = [...filters.querySelectorAll("#rango input:checked")].map(
            (n) => n.value
        ),
        sortOrder = sortPrice.value;

    let filteredGoods = DATA.filter(
        (n) =>
            (!marca || n.marca === marca) &&
            (!year || n.year === year) &&
            (!transmision.length || transmision.includes(n.transmision)) &&
            (!combustible.length || combustible.includes(n.combustible)) &&
            (!rango.length || rango.includes(n.rango))
    );

    if (sortOrder === "asc") {
        filteredGoods.sort((a, b) => parseFloat(a.precio.replace(/[^0-9.-]+/g, "")) - parseFloat(b.precio.replace(/[^0-9.-]+/g, "")));
    } else if (sortOrder === "desc") {
        filteredGoods.sort((a, b) => parseFloat(b.precio.replace(/[^0-9.-]+/g, "")) - parseFloat(a.precio.replace(/[^0-9.-]+/g, "")));
    }
    

    outputGoods(filteredGoods);
}

function outputGoods(goods) {
    document.getElementById("goods").innerHTML = goods
        .map(
            (n) =>
                `<div class="single-goods">
                    <div class="rounded-lg overflow-hidden mb-0">
                        <div class="text-center">
                            <img src="${n.image}" class="block mx-auto">
                            <h3 class="py-1 font-bold">${n.name}</h3>
                            <h3 class="py-0 font-normal">${n.year}</h3>
                            <h3 class="py-0 font-normal">${n.transmision}</h3>
                            <h3 class="py-0 font-normal">${n.combustible}</h3>
                            <p class="py-0 font-bold">${n.precio}</p>
                            <div class="overflow-hidden flex justify-center p-4">
                                <button tabindex="11" data-art="${n.name}" class="focus:outline-none w-32 py-3 rounded-md font-semibold text-white bg-yellow-400 hover:bg-yellow-500" onclick="location.href='${n.link}'">
                                    Ver auto
                                </button>
                            </div>
                        </div>
                    </div>
                </div>`
        )
        .join("");
}

const DATA = [
    {
        link: "Inventario/PC7469/PC7469.html",
        image: "Inventario/PC7469/1.jpg.avif",
        name: "SUZUKI SWIFT",
        marca: "suzuki",
        year: "2013",
        transmision: "Automática",
        combustible: "Diesel",
        precio: "$3.000.000",
        rango: "0-3",
    },
    {
        link: "Inventario/PU8637/PU8637.html",
        image: "Inventario/PU8637/1.jpg.avif",
        name: "HONDA CROSS ROAD",
        marca: "honda",
        year: "2009",
        transmision: "Automática",
        combustible: "Diesel",
        precio: "$1.000.000",
        rango: "0-3",
    },
    {
        link: "Inventario/HY4224/HY4224.html",
        image: "Inventario/HY4224/1.jpg.avif",
        name: "MAZDA DEMIO",
        marca: "mazda",
        year: "2013",
        transmision: "Automática",
        combustible: "Diesel",
        precio: "$3.300.000",
        rango: "3-6",
    },
    {
        link: "Inventario/ZL9293/ZL9293.html",
        image: "Inventario/ZL9293/1.jpg.avif",
        name: "MAZDA DEMIO",
        marca: "mazda",
        year: "2013",
        transmision: "Automática",
        combustible: "Diesel",
        precio: "$3.300.000",
        rango: "3-6",
    },
    {
        link: "Inventario/PW9473/PW9473.html",
        image: "Inventario/PW9473/1.jpg",
        name: "NISSAN NOTE",
        marca: "nissan",
        year: "2013",
        transmision: "Automática",
        combustible: "Diesel",
        precio: "$3.000.000",
        rango: "0-3",
    },
    {
        link: "Inventario/NF9303/NF9303.html",
        image: "Inventario/NF9303/1.jpg.avif",
        name: "NISSAN NOTE",
        marca: "nissan",
        year: "2013",
        transmision: "Automática",
        combustible: "Diesel",
        precio: "$3.000.000",
        rango: "0-3",
    },
    {
        link: "Inventario/ET2010/ET2010.html",
        image: "Inventario/ET2010/1.jpg.avif",
        name: "HONDA FREED HYBRID",
        marca: "honda",
        year: "2013",
        transmision: "Automática",
        combustible: "Diesel",
        precio: "$3.500.000",
        rango: "3-6",
    },
    {
        link: "Inventario/NF8859/NF8859.html",
        image: "Inventario/NF8859/1.jpg.avif",
        name: "NISSAN NOTE",
        marca: "nissan",
        year: "2013",
        transmision: "Automática",
        combustible: "Diesel",
        precio: "$3.000.000",
        rango: "0-3",
    },
    {
        link: "Inventario/XO7589/XO7589.html",
        image: "Inventario/XO7589/1.jpg.avif",
        name: "NISSAN NOTE",
        marca: "nissan",
        year: "2013",
        transmision: "Automática",
        combustible: "Diesel",
        precio: "$3.000.000",
        rango: "0-3",
    },
    {
        link: "Inventario/IF3997/IF3997.html",
        image: "Inventario/IF3997/1.jpg.avif",
        name: "NISSAN NOTE",
        marca: "nissan",
        year: "2013",
        transmision: "Automática",
        combustible: "Diesel",
        precio: "$3.000.000",
        rango: "0-3",
    },
    {
        link: "Inventario/DU2229/DU2229.html",
        image: "Inventario/DU2229/1.jpg.avif",
        name: "MAZDA DEMIO",
        marca: "mazda",
        year: "2014",
        transmision: "Automática",
        combustible: "Diesel",
        precio: "$1.000.000",
        rango: "0-3",
    },
    {
        link: "Inventario/VG2436/VG2436.html",
        image: "Inventario/VG2436/1.jpg.avif",
        name: "HONDA CRZ",
        marca: "honda",
        year: "2014",
        transmision: "Automática",
        combustible: "Diesel",
        precio: "$1.000.000",
        rango: "0-3",
    },
    {
        link: "Inventario/CP0382/CP0382.html",
        image: "Inventario/CP0382/1.jpg.avif",
        name: "NISSAN NOTE",
        marca: "nissan",
        year: "2013",
        transmision: "Automática",
        combustible: "Diesel",
        precio: "$3.000.000",
        rango: "0-3",
    },
    {
        link: "Inventario/BU6330/BU6330.html",
        image: "Inventario/BU6330/1.jpg.avif",
        name: "HONDA CRZ",
        marca: "honda",
        year: "2013",
        transmision: "Automática",
        combustible: "Diesel",
        precio: "$1.000.000",
        rango: "0-3",
    },
    {
        link: "Inventario/BV7942/BV7942.html",
        image: "Inventario/BV7942/1.jpg.avif",
        name: "HONDA FREED",
        marca: "honda",
        year: "2011",
        transmision: "Automática",
        combustible: "Diesel",
        precio: "$1.000.000",
        rango: "0-3",
    },
];

outputGoods(DATA);
