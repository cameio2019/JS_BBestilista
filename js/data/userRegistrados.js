//Desafio 14
$(document).ready(() => {
    $('#personas').hide();

    $('#getComments').click(function() {
        $.ajax({
            type: 'GET',
            url: 'https://randomuser.me/api/?results=10',
            dataType: 'json'
        }).done((data) => {
            let personas = data.results;

            $('#personas tbody').empty();

            $.each(personas, function(indice, persona){
                let fila = $('<tr>');
                fila.append($(`<td>${persona.name.first}</td>`));
                fila.append($(`<td>${persona.name.last}</td>`));
                fila.append($(`<td>${persona.dob.age}</td>`));
                fila.append($(`<td>${persona.email}</td>`));
                $('#personas tbody').append(fila);
            });

            $('#personas').show();
        });
    });
});

ScrollReveal().reveal('#getComments', { delay: 1000 });