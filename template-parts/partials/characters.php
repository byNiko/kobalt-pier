<?php 
$args = array(
	'post_type' => 'character',
	'status' => 'published',
	'posts_per_page'=> -1,
);
$posts = get_posts($args);

foreach($posts as $c):
	get_template_part(
		'/template-parts/partials/character',
		'card', 
		['post-id' => $c->ID]
	);
endforeach;
