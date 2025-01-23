$(document).ready(function() {
    $('#loadUsers').click(function() {
        $('#usersTable tbody').empty();
        $('#error').empty();
        
        $('#loading').show();
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/users',
            method: 'GET',
            success: function(users) {
                users.forEach(function(user) {
                    $('#usersTable tbody').append(`
                        <tr>
                            <td>${user.name}</td>
                            <td>${user.email}</td>
                        </tr>
                    `);
                });
            },
            error: function( errorThrown) {
                $('#error').text('Error al cargar los usuarios: ' + errorThrown);
            },
            complete: function() {
                $('#loading').hide();
            }
        });
    });
});