const API_URL = "https://jsonplaceholder.typicode.com/users";

function loadUsersFetch() {
    fetch(API_URL)
        .then(response => response.json())
        .then(users => {
            const tbody = document.querySelector("#userTableFetch tbody");
            tbody.innerHTML = users.map(user => `
                <tr>
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>
                        <button class="delete-btn" onclick="deleteUserFetch(${user.id}, this)">Eliminar</button>
                    </td>
                </tr>
            `).join("");
        })
        .catch(error => console.error('Error cargando usuarios con Fetch:', error));
}

function loadUsersAxios() {
    axios.get(API_URL)
        .then(response => {
            const tbody = document.querySelector("#userTableAxios tbody");
            tbody.innerHTML = response.data.map(user => `
                <tr>
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>
                        <button class="delete-btn" onclick="deleteUserAxios(${user.id}, this)">Eliminar</button>
                    </td>
                </tr>
            `).join("");
        })
        .catch(error => console.error('Error cargando usuarios con Axios:', error));
}

document.getElementById("userForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    const newUser = { name, email };

    // Simular la adición de un nuevo usuario en el frontend
    addUserToTable(newUser);

    document.getElementById("userForm").reset();
});

function addUserToTable(user) {
    const newId = Date.now(); // Simular un ID único
    const newUser = { id: newId, ...user };

    // Añadir a la tabla Fetch
    const tbodyFetch = document.querySelector("#userTableFetch tbody");
    tbodyFetch.innerHTML += `
        <tr>
            <td>${newUser.id}</td>
            <td>${newUser.name}</td>
            <td>${newUser.email}</td>
            <td>
                <button class="delete-btn" onclick="deleteUserFetch(${newUser.id}, this)">Eliminar</button>
            </td>
        </tr>
    `;

    // Añadir a la tabla Axios
    const tbodyAxios = document.querySelector("#userTableAxios tbody");
    tbodyAxios.innerHTML += `
        <tr>
            <td>${newUser.id}</td>
            <td>${newUser.name}</td>
            <td>${newUser.email}</td>
            <td>
                <button class="delete-btn" onclick="deleteUserAxios(${newUser.id}, this)">Eliminar</button>
            </td>
        </tr>
    `;
}

function deleteUserFetch(id, button) {
    fetch(`${API_URL}/${id}`, { method: "DELETE" })
        .then(() => {
            const row = button.closest("tr");
            row.remove();
        })
        .catch(error => console.error('Error eliminando usuario con Fetch:', error));
}

function deleteUserAxios(id, button) {
    axios.delete(`${API_URL}/${id}`)
        .then(() => {
            const row = button.closest("tr");
            row.remove();
        })
        .catch(error => console.error('Error eliminando usuario con Axios:', error));
}

loadUsersFetch();
loadUsersAxios();