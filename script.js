$( document ).ready( function () {
    $( "form" ).submit( function () {
        // event.preventDefault();

        $( "#table" ).append( "\
        <p>" + $( '#fname' ).val() + "</p>\
        <p>" + $( '#lname' ).val() + "</p>\
        <p>" + $( '#email' ).val() + "</p>\
        <p>" + $( '#contactnr' ).val() + "</p>\
        " );

        document.getElementById( "userForm" ).reset ();
        return false;

    })
})