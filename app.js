//$(function() {
	var tab_genres = [{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},
	{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},
	{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},
	{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},
	{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}];

	/*
	$( window ).ready(function() {
		$.ajax({
			url: 'https://api.themoviedb.org/3/genre/movie/list', // 'https://api.themoviedb.org/3/search/'+search_type, 
			type : 'GET',
			//dataType: 'json',
			data : {
				'api_key': omdbApiKey,
				'language': 'en-US',
			},
			success: function(data) {
				//$('.genres').append(data.genres[2].name);
				window.tab_genres = data.genres;
				//alert(TAB_GENRES[2].id + ' - ' + TAB_GENRES[2].name);
			},

			error : function(result) {
				alert('erreur réseau !');
			},

			// complete: function(result) {
			//     console.log('fini !');
			// }
			
		});
		//window.tab_genres = tab_genres;
		
	});
	//alert(tab_genres[2].id + ' - ' + tab_genres[2].name);
	*/
	
	const search = $('#search');
	const bouton = $('#bouton');
	const omdbApiKey = '6***********************************5';

	bouton.click(function() {
		//alert( search.val() );
		$.ajax({
			url: 'https://api.themoviedb.org/3/search/movie', // 'https://api.themoviedb.org/3/search/'+search_type, 
			type : 'GET',
			//dataType: 'json',
			data : {
				'api_key': omdbApiKey,
				'language': 'en-US',
				'include_adult': 'false',
				'query': search.val(),
				// data: "id=" + jQuery(this).data('id') + "&mode=" + jQuery(this).data('mode'), si plusieurs paramètres !! 
				//'s' : $(this).val()
			},
			success: function(data) {
				
				$('#results').html('');
				data.results.forEach(function(movie){
					
					let genres_names = '';
					for (let k = 0; k < tab_genres.length; k++){
						if (movie.genre_ids.includes(tab_genres[k].id)){
							genres_names = genres_names + tab_genres[k].name + ' - ';
						}
					}
					
					let tab = movie.release_date.split('-');
					let frDate = tab[2]+'-'+tab[1]+'-'+tab[0];
			
					let movieHtml = '<div class="card">' +
								'<div class="card-header">' + movie.original_title+ '</div>' +
								'<div class="card-body" style="text-align:justify;">' +
									'<img style="max-width: 250px;height: auto;float: left; margin-right: 2em;"'+ 
									'src="https://image.tmdb.org/t/p/w500/'+movie.poster_path+'"/>' + movie.overview + 
									'<br>Release date : ' + frDate +
									'<br>Original language : ' + movie.original_language +
									'<br>Popularity : ' + movie.popularity +
									'<br>Vote average : ' + movie.vote_average +
									'<br>Genres : ' + genres_names.substring(0, genres_names.length-2) +
									'<img style="max-width: 250px;height: auto; float:right;margin-left: 2em;"'+ 
									'src="https://image.tmdb.org/t/p/w500/'+movie.backdrop_path+'"/>'
									'</div>' +
								'</div>';
					$('#results').append(movieHtml);
				   
				});
			},

			error : function(result) {
				alert('erreur réseau !');
			},

			// complete: function(result) {
			//     console.log('fini !');
			// }
		});
		
		// Recherche genres
		/*
		$.ajax({
			url: 'https://api.themoviedb.org/3/genre/movie/list', // 'https://api.themoviedb.org/3/search/'+search_type, 
			type : 'GET',
			//dataType: 'json',
			data : {
				'api_key': omdbApiKey,
				'language': 'en-US',
			},
			success: function(data) {
				//$('.genres').append(data.genres[2].name);
				const tab_genres = data.genres;
				//alert(tab_genres[2].id + ' - ' + tab_genres[2].name);
			},

			error : function(result) {
				alert('erreur réseau !');
			},

			// complete: function(result) {
			//     console.log('fini !');
			// }
		});
		$('.genres').ready(function(){
			alert($('.genres').html(' - '));
		});
		*/
	});
//});


/*      if (search.val().length >= 3 ) {

                   $('#results').html('');

                   if (result.Search && result.Search.length > 0) {


                       // comme en PHP : foreach ($result['Search'] as $movie)
                       result.Search.forEach(function (movie) {

                           console.log(movie);

                           let movieHtml = '<div class="card">' +
                               '<div class="card-header">' + movie.name + '</div>' +
                               '<div class="card-body"><img src="' + movie.profile_path + '" height="100"></div>' +
                               '</div>';

                           $('#results').append(movieHtml);
                       });
                   }
               }*/
			   
/*
const uri = 'https://mozilla.org/?x=шеллы';
const encoded = encodeURI(uri);
console.log(encoded);  // expected output: "https://mozilla.org/?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B"

try {
  console.log(decodeURI(encoded));  // expected output: "https://mozilla.org/?x=шеллы"
} catch (e) { // catches a malformed URI
  console.error(e);
}
*/
