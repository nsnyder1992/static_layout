//Change Navbar Color after specified scroll amt
$(window).scroll(function () {
    let y = $(window).scrollTop();
    let colorChage = 45;

    if (y > colorChage) {
        $('.navbar').addClass('lightgreen-bg');
    } else if (y <= colorChage) {
        $('.navbar').removeClass('lightgreen-bg')
    };
});


$(document).ready(function() {

    $("#about").click(function() {
        $("#about-content").toggleClass("show");
        $("#help-content").hasClass('show') ? $("#help-content").toggleClass("show") : false
        $("#community-content").hasClass('show') ? $("#community-content").toggleClass("show") : false
    })

    $("#help").click(function() {
        $("#help-content").toggleClass("show");
        $("#about-content").hasClass('show') ? $("#about-content").toggleClass("show") : false
        $("#community-content").hasClass('show') ? $("#community-content").toggleClass("show") : false
    })

    $("#community").click(function() {
        $("#community-content").toggleClass("show");
        $("#help-content").hasClass('show') ? $("#help-content").toggleClass("show") : false
        $("#about-content").hasClass('show') ? $("#about-content").toggleClass("show") : false
    });

    $(document).click(function(e) {
        let id = e.target.id;
        console.log(id)
        if (!$(e.target).hasClass('dropdown-content') && id !== 'about' && id !== 'help' && id !== 'community'){
            $('.dropdown-content').each(function(){
                $(this).hasClass('show') ? $(this).toggleClass('show') : false
            })
        }
    })
});
