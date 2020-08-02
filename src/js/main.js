
window.location.hash = 'Hello';

if ($(window).width() > 900) {
    $('.fullpage').fullpage({
        lockAnchors: true,
        scrollHorizontally: true,
        onLeave: function (currentIndex, nextIndex, direction) {
            let currentSection = $(this).attr('data-anchor');
            let nextSection = currentSection.replace(currentIndex, nextIndex);

            window.location.hash = nextSection;

            $('.section .content').removeClass('active');
        },
        afterLoad: function (currentAnchor, currentIndex) {
            $('.section[data-anchor="' + currentAnchor + '"] .content').addClass('active');
        }
    });

    $('[data-section]').click(function () {
        let target = $(this).attr('data-section');
        $.fn.fullpage.moveTo(target);
        // $.fn.fullpage.destroy();
    });
} else {
    $('[data-section]').click(function () {
        let section = $(this).attr('data-section');
        let target = $('.section[data-anchor="' + section + '"] .content')

        $('html, body').animate({
            scrollTop: $(target).offset().top
        });
    });
}



