//scrollify
$(function() {
    $.scrollify({
    section : ".fullpage-scroll",
    afterRender: function(){
        $('li a').on('click', function(){
            $.scrollify.move($(this).attr('href'));
        });
    }
    });
});
