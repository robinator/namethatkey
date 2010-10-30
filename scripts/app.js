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

	//  toggle when clicked to .selected and add a unique chord count id - ONLY ALLOW 5
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
	
	
	/*
	//  Major Initialize Animation
	jQuery('#C_Major .pie').addClass('selected_slice');
	setTimeout("jQuery('#C_Major .pie').removeClass('selected_slice')",150);
	
	setTimeout("jQuery('#G_Major .pie').addClass('selected_slice')",150);
	setTimeout("jQuery('#G_Major .pie').removeClass('selected_slice')",300);
	
	setTimeout("jQuery('#D_Major .pie').addClass('selected_slice')",300);
	setTimeout("jQuery('#D_Major .pie').removeClass('selected_slice')",450);
	
	setTimeout("jQuery('#A_Major .pie').addClass('selected_slice')",450);
	setTimeout("jQuery('#A_Major .pie').removeClass('selected_slice')",600);
	
	setTimeout("jQuery('#E_Major .pie').addClass('selected_slice')",600);
	setTimeout("jQuery('#E_Major .pie').removeClass('selected_slice')",750);
	
	setTimeout("jQuery('#B_Major .pie').addClass('selected_slice')",750);
	setTimeout("jQuery('#B_Major .pie').removeClass('selected_slice')",900);
	
	setTimeout("jQuery('#Fsharp_Major .pie').addClass('selected_slice')",900);
	setTimeout("jQuery('#Fsharp_Major .pie').removeClass('selected_slice')",1050);
	
	setTimeout("jQuery('#Csharp_Major .pie').addClass('selected_slice')",1050);
	setTimeout("jQuery('#Csharp_Major .pie').removeClass('selected_slice')",1200);
	
	setTimeout("jQuery('#Ab_Major .pie').addClass('selected_slice')",1200);
	setTimeout("jQuery('#Ab_Major .pie').removeClass('selected_slice')",1350);
	
	setTimeout("jQuery('#Eb_Major .pie').addClass('selected_slice')",1350);
	setTimeout("jQuery('#Eb_Major .pie').removeClass('selected_slice')",1500);
	
	setTimeout("jQuery('#Bb_Major .pie').addClass('selected_slice')",1500);
	setTimeout("jQuery('#Bb_Major .pie').removeClass('selected_slice')",1650);
	
	setTimeout("jQuery('#F_Major .pie').addClass('selected_slice')",1650);
	setTimeout("jQuery('#F_Major .pie').removeClass('selected_slice')",1800);
	
		//  Minor Initialize Animation
	jQuery('#A_Minor .pie_minor').addClass('selected_slice_minor');
	setTimeout("jQuery('#A_Minor .pie_minor').removeClass('selected_slice_minor')",150);
	
	setTimeout("jQuery('#D_Minor .pie_minor').addClass('selected_slice_minor')",150);
	setTimeout("jQuery('#D_Minor .pie_minor').removeClass('selected_slice_minor')",300);
	
	setTimeout("jQuery('#G_Minor .pie_minor').addClass('selected_slice_minor')",300);
	setTimeout("jQuery('#G_Minor .pie_minor').removeClass('selected_slice_minor')",450);
	
	setTimeout("jQuery('#C_Minor .pie_minor').addClass('selected_slice_minor')",450);
	setTimeout("jQuery('#C_Minor .pie_minor').removeClass('selected_slice_minor')",600);
	
	setTimeout("jQuery('#F_Minor .pie_minor').addClass('selected_slice_minor')",600);
	setTimeout("jQuery('#F_Minor .pie_minor').removeClass('selected_slice_minor')",750);
	
	setTimeout("jQuery('#Bb_Minor .pie_minor').addClass('selected_slice_minor')",750);
	setTimeout("jQuery('#Bb_Minor .pie_minor').removeClass('selected_slice_minor')",900);
	
	setTimeout("jQuery('#Eb_Minor .pie_minor').addClass('selected_slice_minor')",900);
	setTimeout("jQuery('#Eb_Minor .pie_minor').removeClass('selected_slice_minor')",1050);
	
	setTimeout("jQuery('#Ab_Minor .pie_minor').addClass('selected_slice_minor')",1050);
	setTimeout("jQuery('#Ab_Minor .pie_minor').removeClass('selected_slice_minor')",1200);
	
	setTimeout("jQuery('#Csharp_Minor .pie_minor').addClass('selected_slice_minor')",1200);
	setTimeout("jQuery('#Csharp_Minor .pie_minor').removeClass('selected_slice_minor')",1350);
	
	setTimeout("jQuery('#Fsharp_Minor .pie_minor').addClass('selected_slice_minor')",1350);
	setTimeout("jQuery('#Fsharp_Minor .pie_minor').removeClass('selected_slice_minor')",1500);
	
	setTimeout("jQuery('#B_Minor .pie_minor').addClass('selected_slice_minor')",1500);
	setTimeout("jQuery('#B_Minor .pie_minor').removeClass('selected_slice_minor')",1650);
	
	setTimeout("jQuery('#E_Minor .pie_minor').addClass('selected_slice_minor')",1650);
	setTimeout("jQuery('#E_Minor .pie_minor').removeClass('selected_slice_minor')",1800);
*/
	
	
});