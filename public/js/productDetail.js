function renderProduct(productToRender) {
    const grid = document.getElementById('bodyCard');

    grid.style.display = 'grid';

    grid.innerHTML = `
        <div class="card">
            <img src="${productToRender.image}" alt="Card Image" class="card-img">
            <h1 class="card-title">${productToRender.title}</h1>
            <p class="card-desc">
                ${productToRender.description}
            </p>
        </div>
    `

    // grid.innerHTML = [
    //     '<h1>Hello</h1>'
    // ].join('');
}
// console.log(blog);
// console.log(blogs.title)

renderProduct(product);