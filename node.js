// function newData() {
//     fetch('https://jsonplaceholder.typicode.com/photos')
//         .then(res => res.json())
//         .then(data => callData(data))
// }

// function callData(data) {
//     const ul = document.getElementById('example')
//     for (const user of data) {
//         const li = document.createElement('li');
//         li.innerText = user.name;
//         ul.appendChild(li)
//     }
// }






const rest = () => {
    const url = 'https://api.kanye.rest';
    fetch(url)
        .then(res => res.json())
        .then(data => display(data))
}

const display = (data) => {
    console.log(data.quote)
}