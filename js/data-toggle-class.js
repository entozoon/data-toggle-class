/**
 * Toggle 'open' class for [data-toggle] elements when used
 */
$(function() {
	$('[data-toggle]').click(function() {
		var target = $(this).attr('data-target');
		if ($(target).hasClass('in')) {
			$(this).removeClass('open');
		} else {
			$(this).addClass('open');
		}
	});
});
