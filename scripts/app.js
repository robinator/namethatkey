// Setup events after dom is loaded
$(document).ready(function() {

	//  jquery slider toggle for #instructions
	$('#toggle_instr').click(function() {
		$('#instructions').slideToggle('medium', function() { });
	});

	//  apply .odd to every other table row for readability
	$('#chord_selector tr:odd').addClass('odd');
	
	
	// jQuery tools - tool tip library.  http://flowplayer.org/tools/tooltip/index.html
	//$('[title]').tooltip({ effect: 'slide'});
	
	//  apply .highlight to each of the above td
	$('#chord_selector td').addClass('highlight');

	//  toggle when clicked to .selected and add a unique chord count id - ONLY ALLOW 5
	$('#chord_selector td').click(function () {
		$(this).toggleClass('selected');
		namethatkey();		
	});

	//  click to remove .selected and from chord table (clears selections)
	$('#clear_selected').click(function() {
		$('#chord_selector td').removeClass('selected');
		namethatkey();
	});
});