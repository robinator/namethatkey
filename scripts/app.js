// Setup events after dom is loaded
$(document).ready(function() {

	//  jquery slider toggle for #instructions
	$('#toggle_instr').click(function() {
		$('#instructions').slideToggle('medium', function() { });
	});

	//  apply .highlight to each of the above td
	$('#chord_selector td').addClass('highlight');

	//  toggle when clicked to .selected and add a unique chord count id - ONLY ALLOW 5
	$('#chord_selector td').click(function () {
		if ($(this).hasClass('selected')) {
			$(this).removeClass('selected');
			$(this).removeAttr('id');
		}

		else {
			if($('#chord_selector td.selected').length < 5) {
				if($('#chord_count0').length == 0) {
					$(this).addClass('selected');
					$(this).attr('id','chord_count0');
				}
				else if($('#chord_count1').length == 0) {
					$(this).addClass('selected');
					$(this).attr('id','chord_count1');
				}
				else if($('#chord_count2').length == 0) {
					$(this).addClass('selected');
					$(this).attr('id','chord_count2');
				}
				else if($('#chord_count3').length == 0) {
					$(this).addClass('selected');
					$(this).attr('id','chord_count3');
				}
				else if($('#chord_count4').length == 0) {
					$(this).addClass('selected');
					$(this).attr('id','chord_count4');
				}
			}
		}
		namethatkey();		
	});

	//  click to remove .selected &amp; ids from chord table (clears selections)
	$('#clear_selected').click(function() {
		$('#chord_selector td').removeClass('selected');
		$('#chord_selector td').removeAttr('id');
		namethatkey();
	});
});