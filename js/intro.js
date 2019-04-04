// ---------------------Entrance effect
// entrance click after 2s
setTimeout(() => {
        // change opacity + scaling
        $('.loading__animation').addClass('hidden');
        $('.loading').addClass('scale');
        setTimeout(() => {
            // show all markups inside main page
            $('.hidden-display').removeClass('hidden-display');
        }, 200);
        setTimeout(() => {
            $('.loading').addClass('hidden');
            $('.overflow').removeClass('overflow');
        }, 500);
        // completely remove display after opacity is 0
        setTimeout(() => {
            $('.loading').css(
                'display', 'none'
            );
            $('.hidden').css(
                'display', 'none'
            );
        }, 600);
        // load on top
        window.scrollTo(0, 0);
}, 2000);

