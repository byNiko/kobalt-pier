<!doctype html>
<html <?php language_attributes(); ?>>

<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
	<?php 
	$bg_id =  get_field('homepage_background', 'options'); 
	$bg_url =  wp_get_attachment_image_src($bg_id, 'full'); 
	$bg_srcset = wp_get_attachment_image_srcset($bg_id);
	
	?>
</head>

<body <?php body_class(); ?>>
	<?php wp_body_open(); ?>
	<div class="site-bg">
		<?php echo wp_get_attachment_image($bg_id, 'full');?>
	</div>
	<div id="page" class="site-container">
		<!-- <header class="site-header" id="site-header">
			<div id="site-navigation" class="container">
				<a class="brand navbar-item" href="<?php echo site_url(); ?>">
					<?php
					$logo = wp_get_attachment_image_src(get_theme_mod('custom_logo'), 'full');
					if (has_custom_logo()) : echo '<img src="' . esc_url($logo[0]) . '" alt="' . get_bloginfo('name') . '">';
					else : echo '<span class="subtitle">' . get_bloginfo('name') . '</span>';
					endif;
					?>
				</a>

				<button class="mobile-nav-toggle hamburger hamburger--slider" type="button" aria-label="Menu" aria-expanded="false" aria-controls="site-navigation">
					<span class="hamburger-box">
						<span class="hamburger-inner"></span>
					</span>
					<span class="visually-hidden">Menu</span>
				</button>
				<nav class="navbar-menu">
					<?php
					wp_nav_menu(
						array(
							'theme_location' => 'menu-1',
							'menu_id'        => 'primary-menu',
							'menu_class' 	=> "primary-menu"
						)
					);
					?>
				</nav>
				</nav>
			</div>
		</header> -->
		<section class="page-content">