$(document).ready(function() {

    // Toggle modal component
    // --------------------------------------------------------------------------

    // $('[data-toggle="modal"]').on('click', function(e) {
    //
    //     e.preventDefault();
    //
    //     $(".Modal").addClass('is-displayed');
    // });
    //
    // $('[data-dismiss="modal"]').on('click', function(e) {
    //
    //     e.preventDefault();
    //
    //     var modalClose = $(this),
    //         modalWindow = modalClose.parents(".Modal"),
    //         modalVideo = modalWindow.find("video");
    //
    //     $(".Modal").removeClass('is-displayed');
    //     // modalVideo.get(0).pause();
    // });


    // Animate input label on :focus
    // @url: http://codepen.io/oknoblich/pen/wFGIH
    // --------------------------------------------------------------------------

    $('input, textarea').each(function() {
        $(this).on('focus', function() {
            $(this).parent('.Form-group').addClass('is-active');
        });
        $(this).on('blur', function() {
            if ($(this).val().length == 0) {
                $(this).parent('.Form-group').removeClass('is-active');
            }
        });
        if ($(this).val() != '') {
            $(this).parent('.Form-group').addClass('is-active');
        }
    });

    $("label").click(function() {
        var labelID = $(this).attr("for");
        $("#" + labelID).focus()
    })


    // Object-fit fallback for IE/Edge
    // @url: https://medium.com/@primozcigler/neat-trick-for-css-object-fit-fallback-on-edge-and-other-browsers-afbc53bbb2c3#.bs809jr8g
    // --------------------------------------------------------------------------

    if ( ! Modernizr.objectfit ) {
        $('.FlexEmbed-content').each(function () {
            var $container = $(this),
                imgUrl = $container.find('img').prop('src');

            if (imgUrl) {
                $container
                    .css('backgroundImage', 'url(' + imgUrl + ')')
                    .addClass('u-posAbsoluteCenter CoverImage lazyload ls-blur');
            }
        });
    }


});
