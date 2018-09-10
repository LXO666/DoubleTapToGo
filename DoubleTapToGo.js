$( document ).ready(function() {


    ;(function( $, window, document, undefined )
    {
        $.fn.doubleTapToGo = function( params )
        {
            if( !( 'ontouchstart' in window ) &&
                !navigator.msMaxTouchPoints &&
                !navigator.userAgent.toLowerCase().match( /windows phone os 7/i ) ) return false;

            this.each( function()
            {
                var curItem = false;

                $( this ).on( 'click', function( e )
                {
                    var item = $( this );
                    if( item[ 0 ] != curItem[ 0 ] )
                    {
                        e.preventDefault();
                        curItem = item;
                    }
                });

                $( document ).on( 'click touchstart MSPointerDown', function( e )
                {
                    var resetItem = true,
                        parents	  = $( e.target ).parents();

                    for( var i = 0; i < parents.length; i++ )
                        if( parents[ i ] == curItem[ 0 ] )
                            resetItem = false;

                    if( resetItem )
                        curItem = false;
                });
            });
            return this;
        };
    })( jQuery, window, document );

    //EXAMPLE OF USE /////////////////////////////////////////////////

    if ( $(window).width() > 992 && $(window).width() < 1367) {
        $('#mainNAV > ul > li').doubleTapToGo();
    }

    $( window ).resize(function() {
        if ( $(window).width() > 992 && $(window).width() < 1367) {
            $('#mainNAV > ul > li').doubleTapToGo();
        }
    });

    /////////////////////////////////////EXAMPLE OF USE/////////////

});