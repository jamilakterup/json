function load() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => again(json))
}


function again(data) {
    const count = document.getElementById('post-container');

    for (post of data) {
        const div = document.createElement('div');
        div.classList.add('color')
        div.innerHTML = `
        <h3>user-${post.userId}</h3>
        <h4>post:${post.title}</h4>
        <p>post Description:${post.body}</p >
            `
        count.appendChild(div);
    }
}