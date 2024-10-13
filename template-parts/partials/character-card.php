<?php
$c = get_post($args['post-id']);
?>
<div class="character__item">
	<div class="character__img-cont" style="background-image:url(<?= get_the_post_thumbnail_url($args['post-id']); ?>">
	</div>
	<div class="character__name"><?= $c->post_title; ?></div>
	<div class="breakdown">
		<?//= $c->post_content; ?>
	</div>
</div>