var $footer = $('#footer');

$(window).load(function() {
    if ($footer.length) {
        $('#main').css({
            'padding-bottom': $footer.outerHeight()
        });

        $footer.css({
            'opacity': '1',
            'visibility': 'visible'
        });
    }
});