const url = 'https://jsonplaceholder.typicode.com/posts/?_start=0&_limit=7'

fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });

function appendData(data) {
    let mainContainer = document.querySelector(".post-list");
    for (let i = 0; i < data.length; i++) {
        let postItem = document.createElement('div')
        postItem.classList.add('post-item')
        postItem.prepend(``)
        postItem.innerHTML = `
            <input type="checkbox" class="post-checkbox">
            <div class="post-title">${data[i].title}</div>
            <div class="post-text">${data[i].body}</div>`

        mainContainer.appendChild(postItem)

        console.log(postItem);
    }
}