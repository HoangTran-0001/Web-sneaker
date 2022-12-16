function slide_img(idImgG,btn_prev,btn_next) {

  	var btn_prev = $("."+btn_prev);
  	var btn_next = $("."+btn_next);
  	var owl = $("#"+idImgG);

	$(document).ready(function() {
        owl.owlCarousel({
	        items : 1,
	        itemsCustom : false,
	        itemsDesktop : [1199,1],
	        itemsDesktopSmall : [980,1],
	        itemsTablet: [768,1],
	        itemsTabletSmall: false,
	        itemsMobile : [479,1],
	        singleItem : true,
	        itemsScaleUp : false,
	        pagination:false,
	        stopOnHover:true,
	        scrollPerPage:true
	   });
     
	    // Custom Navigation Events
	    btn_prev.click(function(){
	    	owl.trigger('owl.next');
	    })
	    btn_next.click(function(){
	    	owl.trigger('owl.prev');
	    })
    });
};

function product_img(idImgbg,idImgTh) {

  var sync1 = $("#"+idImgbg);
  var sync2 = $("#"+idImgTh);
 
  sync1.owlCarousel({
    singleItem : true,
    slideSpeed : 1000,
    navigation: false,
    pagination:false,
    afterAction : syncPosition,
    responsiveRefreshRate : 200,
    transitionStyle : "fade"
  });
 
  sync2.owlCarousel({
    items : 5,
    itemsDesktop      : [1199,5],
    itemsDesktopSmall     : [979,4],
    itemsTablet       : [768,3],
    itemsMobile       : [479,3],
    pagination:false,
    rewindNav:false,
    responsiveRefreshRate : 100,
    afterInit : function(el){
      el.find(".owl-item").eq(0).addClass("synced");
    }
  });
  $(".next-product").click(function(){
    sync2.trigger('owl.next');
  })
  $(".prev-product").click(function(){
    sync2.trigger('owl.prev');
  })
 
  function syncPosition(el){
    var current = this.currentItem;
    sync2
      .find(".owl-item")
      .removeClass("synced")
      .eq(current)
      .addClass("synced")
    if(sync2.data("owlCarousel") !== undefined){
      center(current)
    }
  }
 
  sync2.on("click", ".owl-item", function(e){
    e.preventDefault();
    var number = $(this).data("owlItem");
    sync1.trigger("owl.goTo",number);
  });
 
  function center(number){
    var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
    var num = number;
    var found = false;
    for(var i in sync2visible){
      if(num === sync2visible[i]){
        var found = true;
      }
    }
 
    if(found===false){
      if(num>sync2visible[sync2visible.length-1]){
        sync2.trigger("owl.goTo", num - sync2visible.length+2)
      }else{
        if(num - 1 === -1){
          num = 0;
        }
        sync2.trigger("owl.goTo", num);
      }
    } else if(num === sync2visible[sync2visible.length-1]){
      sync2.trigger("owl.goTo", sync2visible[1])
    } else if(num === sync2visible[0]){
      sync2.trigger("owl.goTo", num-1)
    }
    
  }
 
}