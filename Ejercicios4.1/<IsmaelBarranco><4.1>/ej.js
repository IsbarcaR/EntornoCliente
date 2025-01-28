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
        });
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
        });
}

document.getElementById("userForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    const newUser = { name, email };

    fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
    })
        .then(() => {
            loadUsersFetch();
            loadUsersAxios();
        });

    document.getElementById("userForm").reset();
});

function deleteUserFetch(id, button) {
    fetch(`${API_URL}/${id}`, { method: "DELETE" })
        .then(() => {
            const row = button.closest("tr");
            row.remove();
        });
}

function deleteUserAxios(id, button) {
    axios.delete(`${API_URL}/${id}`)
        .then(() => {
            const row = button.closest("tr");
            row.remove();
        });
}


loadUsersFetch();
loadUsersAxios();