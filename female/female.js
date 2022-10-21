// const displayUsers = () => {
//     const url = 'https://randomuser.me/api/?gender=female';
//     fetch(url)
//         .then(res => res.json())
//         .then(data => loadUsers(data.results[0]))
// }

const displayUsers = async () => {
    const url = 'https://randomuser.me/api/?results=100';
    const res = await fetch(url);
    const data = await res.json();
    loadUsers(data.results)
}

const loadUsers = items => {
    const loadData = document.getElementById('load-data')
    items.forEach(item => {
        console.log(item);
        const div = document.createElement('div');
        div.classList.add('clr')
        div.innerHTML = `
        <h4 style="text-align:center">${item.gender}</h4>
        <h3 style="text-align:center">${item.phone}</h3>
        <img src="${item.picture.medium}" alt="" style="margin-left:33%" />
        `;
        loadData.appendChild(div)
    });
}
