//  jQuery no conflict mode for no prototype issues
 jQuery.noConflict();

// Setup events after dom is loaded
jQuery(document).ready(function() {

	//  jquery slider toggle for #instructions
	jQuery('#toggle_instr').click(function() {
		jQuery('#instructions').slideToggle('medium', function() { });
	});

	//  apply .odd to every other table row for readability
	jQuery('#chord_selector tr:odd').addClass('odd');

	//  apply .highlight to each td
	jQuery('#chord_selector td').addClass('highlight');

	//  toggle when clicked to .selected
	jQuery('#chord_selector td').click(function () {
		jQuery(this).toggleClass('selected');
		namethatkey();		
	});

	//  click to remove .selected and from chord table (clears selections)
	jQuery('#clear_selected').click(function() {
		jQuery('#chord_selector td').removeClass('selected');
		namethatkey();
	});
	
	//  Add .jtab to all <td> within #diatonic_chords div
	jQuery('#diatonic_chords td').addClass('jtab');
	
	//  Display IE nag if on IE
	if (navigator.appName == 'Microsoft Internet Explorer') {
		jQuery('#ie_nag').css('display', 'block');
		}
		
	//  Don't circle of fifths if browser is not IE, otherwise display it.
	if (navigator.appName != 'Microsoft Internet Explorer') {
		jQuery('#circle_of_fifths').css('display', 'block');
		}
		else{
		jQuery('#ie_results').css('display', 'block');
		}
});