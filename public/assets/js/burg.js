$(function(){

    $('.burger-form').on('submit', function(event){
        event.preventDefault();
        var newBurger = {
            burger_name: $('#newBurgerName').val().trim(),
            devoured: 0
        };

        console.log('new burger is', newBurger)

        $.ajax('/api/burgers', {
            type: "POST",
            data: newBurger
        }).then(function(){
            console.log("New Burger Cooked");
            location.reload();
        })
    });

    $('.devour').on('click', function(event){
        var id = $(this).data('id');
        var noweaten = $(this).data('devoured');
        console.log('make true' + noweaten);
        var noweatenStatus = {
            devoured: noweaten
        };

        $.ajax('/api/burgers/' + id, {
            type: "PUT",
            data: noweatenStatus
        }).then(function(){
            console.log('changed to: ', noweaten)
            location.reload();
        })
    })
})