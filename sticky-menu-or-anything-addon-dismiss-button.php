<?php
/*
Plugin Name: Sticky Menu (or Anything!) on Scroll Add-on: Dismiss Button
Plugin URI: http://www.senff.com/plugins/sticky-anything-wp/addon/dismiss-btton
Description: An add-on for the Sticky Menu (Or Anything) On Scroll plugin that adds a "dismiss" (or "close") button.
Author: Mark Senff
Author URI: http://www.senff.com
Version: 1.0
*/

defined('ABSPATH') or die('INSERT COIN');

if (!function_exists('load_sticky_anything_dismiss')) {
    function load_sticky_anything_dismiss() {

		include_once(ABSPATH.'wp-admin/includes/plugin.php');
		if ( is_plugin_active( 'sticky-menu-or-anything-on-scroll/sticky-menu-or-anything.php' ) ) {
			wp_register_script('stickyAnythingDismiss', plugins_url('jq-sticky-anything-dismiss.js', __FILE__), array( 'stickyAnythingLib' ), '1.0', true);
	    	wp_enqueue_script('stickyAnythingDismiss');

			wp_register_style('stickyAnythingDismissStyle', plugins_url('sticky-anything-dismiss.css', __FILE__) );
		    wp_enqueue_style('stickyAnythingDismissStyle');

	    }
	}
}

$plugin = plugin_basename(__FILE__); 
add_action('wp_enqueue_scripts', 'load_sticky_anything_dismiss',99999);
