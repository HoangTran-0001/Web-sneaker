// JavaScript Document
function scrolltop() 
{
	var lendautrang = '#back-top';

	// Kéo xuống khoảng cách 220px thì xuất hiện button
	var offset = 120;

	// THời gian di trượt là 0.5 giây
	var duration = 400;

	// Thêm vào sự kiện scroll của window, nghĩa là lúc trượt sẽ
	// kiểm tra sự ẩn hiện của button
	jQuery(window).scroll(function() {
		if (jQuery(this).scrollTop() > offset) {
			jQuery(lendautrang).fadeIn(duration);
		} else {
			jQuery(lendautrang).fadeOut(duration);
		}
	});

	// Thêm sự kiện click vào button để khi click là trượt lên top
	jQuery(lendautrang).click(function(event) {
		event.preventDefault();
		jQuery('html, body').animate({scrollTop: 0}, duration);
		return false;
	});
}
$(document).ready(function(){
	scrolltop();
});

