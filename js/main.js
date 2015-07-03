// Create an immediately invoked functional expression to wrap our code
(function() {

console.log('loaded main js');

 [].slice.call( document.querySelectorAll( '.photostack' ) ).forEach( function( el ) { new Photostack( el ); } );
			
			new Photostack( document.getElementById( 'photostack-1' ), {
				callback : function( item ) {
					console.log(item);
				}
			} );
			// new Photostack( document.getElementById( 'photostack-2' ), {
			// 	callback : function( item ) {
			// 		//console.log(item)
			// 	}
			// } );
			// new Photostack( document.getElementById( 'photostack-3' ), {
			// 	callback : function( item ) {
			// 		//console.log(item)
			// 	}
			// } );

})();