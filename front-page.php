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
			 <div class="container">
			 <div class="distro blur-background dark-background border-radius ">
				<h3 class="pt-3">Available On:</h3>
					<ul class="distro__icons">
						<?php
						$distro = get_field('distro_list', 'options');
						foreach ($distro as $item):
						?>
							<li class="distro__item">
								<a class="distro__link" href="<?= $item['url']; ?>">
									<img src="<?= $item['icon']; ?>" alt="" class="distro__icon">
								</a>
								<div class="distro__name">
									<?= $item['name']; ?>
								</div>
							</li>
						<?php
						endforeach;
						?>
					</ul>
				</div>
			 </div>
			<div class="container">
				<div class="logline blur-background dark-background border-radius container-padding"> <?= get_field('logline', 'options'); ?>
				</div>
			</div>
			<div class="container">
				
				
			<div class="cta-wrapper  button-group d-none">
					
					<!-- <iframe src="https://podcasters.spotify.com/pod/show/kobalt-pier/embed/episodes/Ep--1---The-Northern-Route-e2phdfl/a-abitot0" height="102px" width="400px" frameborder="0" scrolling="no"></iframe> -->
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
