<?php
/**
 * @wordpress-plugin
 * Plugin Name: Surgery Quote Generator
 * Plugin URI: https://thepetersweeney.com
 * Version: 1.0.0
 * Author: Peter Sweeney
 * Author URI: https://thepetersweeney.com
 * Description: Embed Create React App in Wordpress via plugin. Included inline using short code.
 */
 
function react_wordpress_shortcode($atts) {

    $my_array_variable = shortcode_atts(array(

    'surgery_type' => 'undefined',
    'color' => '#248ec2'

    ),$atts);

    wp_localize_script('hello-world-react', 'app_props', $my_array_variable);
 
    return '<div id="react-wordpress"></div>';
}
 
add_shortcode('react-wordpress', 'react_wordpress_shortcode');
 
function helloworld_load_assets() {
 
$react_app_js  = plugin_dir_url( __FILE__ ) . 'derrmru-react-app/build/static/js/all_in_one_file.js';
$react_app_css = plugin_dir_url( __FILE__ ) . 'derrmru-react-app/build/static/css/all_in_one_file.css'; 
      
    // time stops stylesheet/js caching while in development, might want to remove later  
    $version = null; 
    wp_enqueue_script( 'hello-world-react', $react_app_js, array(), $version, true );         
    wp_enqueue_style( 'hello-world-react', $react_app_css, array(), $version );
}
 
add_action( 'wp_enqueue_scripts', 'helloworld_load_assets' );