const loadData = () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
        .then(response => response.json())
        .then(data => displayData(data))
    loaderSection(true)
}

const displayData = (data) => {
    // console.log(data);
    const posts = data.slice(0, 10);
    const section = document.getElementById('load-data');
    for (const post of posts) {
        // console.log(post.title)
        div = document.createElement('div');
        div.innerHTML = `
        <h3>Id: ${post.id}</h3>
        <h5>Title: ${post.title}</h5>
        <p>Body: ${post.body}</p>
        `;
        section.appendChild(div);
        div.classList.add('color')
    }
    loaderSection(false)
}

const loaderSection = (isLoading) => {
    const load = document.getElementById('loader');
    if (isLoading) {
        load.classList.remove('d-none');
    } else {
        load.classList.add('d-none');
    }
}