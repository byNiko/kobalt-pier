const previews = document.querySelectorAll( '.preview-container' );
previews.forEach( embedYoutubePlayer );

async function embedYoutubePlayer( el ) {
	const endpoint = 'https://www.googleapis.com/youtube/v3/videos';
	const parameters = {
		maxWidth: 200,
		part: 'contentDetails,snippet,player',
		id: el.dataset.video_id,
		key: 'AIzaSyAf4vbBO39etdZt_8HyyMiMlcVA5-EhqEk',
	};
	const url = `${ endpoint }?${ new URLSearchParams( parameters ) }`;
	const resp = await fetch( url );
	const data = await resp.json();

	// const thumbnail = data.items[ 0 ].snippet.thumbnails.medium.url;
	const embedHtml = data.items[ 0 ].player.embedHtml;
	const aspectRatio = data.items[ 0 ].player.embedWidth / data.items[ 0 ].player.embedHeight;
	const embed = `
	<div class="embed-container" style="aspect-ratio: ${ aspectRatio }; ">
	${ embedHtml }
</div>`;

	el.innerHTML = embed;
}

// embedYoutubePlayer();
