// const user = { id: 1, name: 'jamil', job: 'student', status: 'fokir' }
// const jam = JSON.stringify(user);
// console.log(jam)

// const shop = {
//     woner: 'alia vat',
//     address: {
//         street: 'kochekhat vuter goli',
//         city: 'dhaka',
//         country: 'uk'
//     },
//     products: ['boi', 'khata', 'kolom', 'marker'],
//     revenue: 45000,
//     isOpen: true,
//     inNew: false
// };

// console.log(shop.address.city)



// function newJson() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response => response.json())
//         .then(json => display(json))
// }

// function display(datas) {
//     for (const data of datas) {
//         // console.log(data.name);

//         const addNewItem = document.getElementById('addItem')
//         const li = document.createElement('li');
//         li.innerText = data.name;
//         addNewItem.appendChild(li);

//     }
// }






// function fileAdd() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response => response.json())
//         .then(json => fileDisplay(json))
// }


// function fileDisplay(datas) {
//     const addData = document.getElementById('dataShow');
//     for (const data of datas) {
//         // console.log(data)
//         const li = document.createElement('li');
//         li.innerHTML = `
//         <h3>Name: ${data.name}</h3>
//         <p>Phone: ${data.phone}</p>
//         <small>Zip Code: ${data.address.zipcode}</small>
//         `;
//         addData.appendChild(li);
//         li.classList.add('bl')
//     }
// }


function addCard() {
    const url = "https://jsonplaceholder.typicode.com/photos";
    fetch(url)
        .then(response => response.json())
        .then(data => displayCard(data));

    toggle(true);

}

function displayCard(cards) {
    console.log(cards);
    // const recentCard = cards.slice(0, 10);

    const newCard = document.getElementById('car-add');
    for (const card of cards) {
        // console.log(card)
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `
        <div class="col">
            <div class="card h-100">
                    <img src="${card.url}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">ID: ${card.id}</h5>
                    <p class="card-text">Title: ${card.title}</p>
                </div>
            </div>
        </div>
        `;
        newCard.appendChild(newDiv);
    };

    toggle(false);
}


function toggle(isLoading) {
    const loaderSection = document.getElementById('loader');

    if (isLoading) {
        loaderSection.classList.remove('d-none');
    } else {
        loaderSection.classList.add('d-none');
    }
}