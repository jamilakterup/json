const findUsers = () => {
    const url = 'https://randomuser.me/api/?results=10';
    fetch(url)
        .then(res => res.json())
        .then(data => displayUsers(data.results))
}

const displayUsers = (data) => {
    console.log(data)
    const userId = document.getElementById('users-container');

    for (const user of data) {
        // console.log(user)
        const div = document.createElement('div');
        div.innerHTML = `
        <h1>Gender: ${user.gender}</h1>
        <h3>E-mail: ${user.email}</h3>
        <h4>User Name: ${user.name.title} ${user.name.first} ${user.name.last}</h4>
        <h5>User Location: ${user.location.city} ${user.location.country}</h5>
        `;
        userId.appendChild(div);
        div.classList.add('color');
    }
}