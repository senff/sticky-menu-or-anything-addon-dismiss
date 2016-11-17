<?php
	if ( !defined( 'WP_UNINSTALL_PLUGIN' ) )
	exit;
	if ( get_option( 'sticky_anything_addon_dismiss_button' ) != false ) {
		delete_option( 'sticky_anything_addon_dismiss_button' );
	}
?>
