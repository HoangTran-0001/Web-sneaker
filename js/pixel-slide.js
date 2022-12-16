/*
Pixel-slide - sản phẩm của PixelADD.com
Phiên bản 1.2 - 2016
Bản quyền miễn phí
Sử dụng: Mọi người đều có thể sử dụng sản phẩm này mà không cần phải trả phí
Không: Chịu trách nhiệm về sự sử dụng vào các mục đích không đúng, hoặc sự sai lệch khi hoạt động
Cấm: sử dụng sản phẩm này quảng bá với tên gọi khác của PixelADD.com, hoặc thay đổi mã nguồn với ý đồ không tốt rồi phân phối quảng bá

Xem thông tin về phiên bản tại www.tinhocthoidai.vn/jquery-plugin
*/
(function ( $ ) {
 
    $.fn.pixel_slide = function(options) {
    	var settings = $.extend({
    		width:"100%",
    		height:"100%",
    		delayTime:3000,
    		mouseEnterStop:false,
    		pageSlide:true,
			caption_smart: false,
    	}, options);

        var obSpan = null;

        this.css({ 
        	"width":settings.width,
        	"height":settings.height
        });
        this.children().filter("div").each(function(i,item) {
        	$(item).css({
        		"width":settings.width,
        		"height":settings.height
        	});
        });

        var obDiv = this.children().filter("div").map(function() {
        	return this;
        }).get();

        var slide_isshow=0;
        this.children().filter("div").each(function(i,item) {
        	if (i==0) {
        		$(item).show();
        		slide_isshow=0;caption_show(slide_isshow);
        	}
        	$(item).css({ "background-image":"url("+$(item).attr("data-img")+")" });
        });

        var flag_show=false;
        function slide_show() {
        	if (!flag_show) {
        		flag_show=true;
        		if((obDiv.length-1)==slide_isshow) {
	        		$(obDiv[slide_isshow]).fadeOut();
	        		$(obDiv[0]).fadeIn();
	        		slide_isshow=0;
					caption_show(slide_isshow);

	        		if (obSpan!=null) {
			        	$(obSpan).css({ "box-shadow":"none", "background-color":"rgba(0,0,0,0.35)" });
			        	$(obSpan[slide_isshow]).css({ "box-shadow":"0px 0px 6px -1px rgba(0,139,139,1)", "background-color":"rgba(0,0,0,0.15)" });
			        }
					
	        	} else {
					caption_hide(slide_isshow);
	        		$(obDiv[slide_isshow]).fadeOut();
	        		$(obDiv[slide_isshow+1]).fadeIn();
	        		slide_isshow++;
					caption_show(slide_isshow);

	        		if (obSpan!=null) {
			        	$(obSpan).css({ "box-shadow":"none", "background-color":"rgba(0,0,0,0.35)" });
			        	$(obSpan[slide_isshow]).css({ "box-shadow":"0px 0px 6px -1px rgba(0,139,139,1)", "background-color":"rgba(0,0,0,0.15)" });
			        }
					
	        	}

	        	flag_show=false;
        	}
        }
		
		//caption smart
		function caption_show (sIndex) {
			
			if (settings.caption_smart) {
				obDiv_captionSmart = $(obDiv[sIndex]).children().filter("div .caption-smart").map(function() {
					return this;
				}).get();
				//4 option top,bottom,top-right,bottom-right
				for (i=0;i<obDiv_captionSmart.length;i++) {
					//location top
					if ($(obDiv_captionSmart[i]).attr("data-location")=="top") {
						$(obDiv_captionSmart[i]).css({"left":$(obDiv_captionSmart[i]).width()*-1,"display":"block","top":i*$(obDiv_captionSmart[i]).height()});
						
						$(obDiv_captionSmart[i]).animate({
							left:20,
							opacity:1
						},1200*Math.random());
					} else if ($(obDiv_captionSmart[i]).attr("data-location")=="bottom") {
						$(obDiv_captionSmart[i]).css({"left":$(obDiv_captionSmart[i]).width()*-1,"display":"block","bottom":i*$(obDiv_captionSmart[i]).height()});
						$(obDiv_captionSmart[i]).animate({
							left:20,
							opacity:1
						},1200*Math.random());
					} else if ($(obDiv_captionSmart[i]).attr("data-location")=="top-right") {
						$(obDiv_captionSmart[i]).css({"right":$(obDiv_captionSmart[i]).width()*-1,"display":"block","top":i*$(obDiv_captionSmart[i]).height()});
						$(obDiv_captionSmart[i]).animate({
							right:20,
							opacity:1
						},1200*Math.random());
					} else if ($(obDiv_captionSmart[i]).attr("data-location")=="bottom-right") {
						$(obDiv_captionSmart[i]).css({"right":$(obDiv_captionSmart[i]).width()*-1,"display":"block","bottom":i*$(obDiv_captionSmart[i]).height()});
						$(obDiv_captionSmart[i]).animate({
							right:20,
							opacity:1
						},1200*Math.random());
					}
				}
			}
		}
		function caption_hide (sIndex) {
			if (settings.caption_smart) {
				obDiv_captionSmart = $(obDiv[sIndex]).children().filter("div .caption-smart").map(function() {
					return this;
				}).get();
				//4 option top,bottom,top-right,bottom-right
				for (i=0;i<obDiv_captionSmart.length;i++) {
					//location top
					if ($(obDiv_captionSmart[i]).attr("data-location")=="top") {						
						$(obDiv_captionSmart[i]).animate({
							left:$(obDiv_captionSmart[i]).width()*-1,
							opacity:0
						},1200*Math.random());
					} else if ($(obDiv_captionSmart[i]).attr("data-location")=="bottom") {
						$(obDiv_captionSmart[i]).animate({
							left:$(obDiv_captionSmart[i]).width()*-1,
							opacity:1
						},1200*Math.random());
					} else if ($(obDiv_captionSmart[i]).attr("data-location")=="top-right") {
						$(obDiv_captionSmart[i]).animate({
							right:$(obDiv_captionSmart[i]).width()*-1,
							opacity:1
						},1200*Math.random());
					} else if ($(obDiv_captionSmart[i]).attr("data-location")=="bottom-right") {
						$(obDiv_captionSmart[i]).animate({
							right:$(obDiv_captionSmart[i]).width()*-1,
							opacity:1
						},1200*Math.random());
					}
				}
			}
			
		}
		//

        var loopInval = setInterval(function(){
        	slide_show();
        }, settings.delayTime);

        //event on mouse enter with option is stop
        if (settings.mouseEnterStop) {
        	$(obDiv).bind("mouseenter", function() {
        		clearInterval(loopInval);
        	});

        	$(obDiv).bind("mouseleave", function() {
        		loopInval = setInterval(function(){
		        	slide_show();
		        }, settings.delayTime);
        	});
        }

        function slide_show_pick(i) {
            clearInterval(loopInval);   //xoa auto
			
			caption_hide(slide_isshow);
        	slide_isshow=i;
        	$(obDiv).fadeOut();
	        $(obDiv[i]).fadeIn();
			caption_show(slide_isshow);
			
	        if (obSpan!=null) {
	        	$(obSpan).css({ "box-shadow":"none", "background-color":"rgba(0,0,0,0.35)" });
	        	$(obSpan[i]).css({ "box-shadow":"0px 0px 6px -1px rgba(0,139,139,1)", "background-color":"rgba(0,0,0,0.15)" });
	        }
            //khoi dong lai auto
            loopInval = setInterval(function(){
                slide_show();
            }, settings.delayTime);
        }

        if (settings.pageSlide) {
        	//show page slide
        	var strSpan='<span class="page-slide">';
        	for (var i=0;i<obDiv.length;i++) {
        		strSpan+='<span id="'+i+'"></span>';
        	}
        	strSpan+='</span>';
        	this.append(strSpan);

        	//bind event click
        	var obSpan = this.children().filter("span").children().map(function() {
	        	return this;
	        }).get();

	        $(obSpan).each(function(i,item) {
	        	$(item).bind("click", function() {
	        		slide_show_pick(i);
	        	});
	        });
        } else {
		
        }

        return this;
    };
 
}( jQuery ));