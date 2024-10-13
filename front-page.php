<?php

/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package byniko
 */

get_header();

?>
<main id="primary" class="site-main">
	<section class="landing-section">
		<div class="hero">
			<div class="logo-wrapper">
				<?php echo wp_get_attachment_image(37, 'full', false, ['class' => 'hero-logo']); ?>
			</div>
			<!-- test -->
			<div class="container container">
				<div class="logline blur-background dark-background border-radius container-padding"> <?= get_field('logline', 'options'); ?>
				</div>
				<div class="cta-wrapper d-none button-group">
					<button class="button-primary">Purchase</button>
					<button class="button-primary">Play Trailer</button>
				</div>
			</div>
		</div>
	</section>
	<section class="text-content">
		<section class="container grid">
			<div class="col">
				<header>
					<h2 class="h2 section-title">Synopsis</h2>
				</header>
				<div class="content has-sidebar">
					<?= get_field('synopsis', 'options'); ?>
				</div>
			</div>
		</section>
		<section class="container container-wide">
			<header>
				<h2 class="h2 section-title">Characters</h2>
			</header>
			<div class="grid character--items">
				<?php get_template_part('/template-parts/partials/characters'); ?>
			</div>
		</section>
		<section class="container">
			<header>
				<h2 class="h2 section-title">About</h2>
			</header>
			<div class="content">
				<?= get_field('about', 'options'); ?>
			</div>
		</section>
		<section class="container">
			<header>
				<h2 class="h2 section-title">Credits </h2>
			</header>
			<div class="content">
				<?= get_field('credits', 'options'); ?>
			</div>
		</section>
		
	</section>
</main><!-- #main -->
<?php
get_footer();
