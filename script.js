//Change Navbar Color after specified scroll amt
$(window).scroll(function () {
    let scroll = $(window).scrollTop();
    let colorChage = 45;

    if (scroll > colorChage) {
        $('.navbar').addClass('lightgreen-bg');
    } else if (scroll <= colorChage) {
        $('.navbar').removeClass('lightgreen-bg')
    };
});


$(document).ready(function() {

    //Open about dropdown close others
    $("#about").click(function() {
        $("#about-content").toggleClass("show");
        $("#help-content").hasClass('show') ? $("#help-content").toggleClass("show") : false
        $("#community-content").hasClass('show') ? $("#community-content").toggleClass("show") : false
    })

    //Open help dropdown close others
    $("#help").click(function() {
        $("#help-content").toggleClass("show");
        $("#about-content").hasClass('show') ? $("#about-content").toggleClass("show") : false
        $("#community-content").hasClass('show') ? $("#community-content").toggleClass("show") : false
    })

    //Open community dropdown close others
    $("#community").click(function() {
        $("#community-content").toggleClass("show");
        $("#help-content").hasClass('show') ? $("#help-content").toggleClass("show") : false
        $("#about-content").hasClass('show') ? $("#about-content").toggleClass("show") : false
    });

    //Closes all dropdowns when something else is clicked
    $(document).click(function(e) {
        let id = e.target.id;
        //console.log(id)
        if (!$(e.target).hasClass('dropdown-content') && id !== 'about' && id !== 'help' && id !== 'community'){
            $('.dropdown-content').each(function(){
                $(this).hasClass('show') ? $(this).toggleClass('show') : false
            })
        }
    })
});
