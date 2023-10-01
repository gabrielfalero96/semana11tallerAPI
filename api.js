document.addEventListener('DOMContentLoaded', function () {
    const postList = document.getElementById('postList');

    // URL de la API JSONPlaceholder para obtener publicaciones de usuarios
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

    // Realizar una solicitud GET a la API
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo obtener la lista de publicaciones.');
            }
            return response.json();
        })
        .then(data => {
            // Recorrer la lista de publicaciones y crear elementos de lista
            data.forEach(post => {
                const listItem = document.createElement('li');
                listItem.textContent = post.title;
                postList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Hubo un error:', error);
            postList.innerHTML = '<li>No se pudo obtener la lista de publicaciones.</li>';
        });
});




