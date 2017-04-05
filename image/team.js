$(function(){
	var oLi = $('.img_list ul li');
	var heights = oLi.size() * oLi.innerWidth();
	$('.img_list ul').width(heights);
	$('.img_list ul').on('mousemove',function(evt){
		var left = parseInt((evt.clientX-$('.img_list ul').offsetParent().offset().left)*(heights/1200));
		if(heights -1200 < left){
			left = heights -1200-5; 
		}else if(left <0 ){
		 	left = 0;
		}
		$(this).get(0).style.left = -left+ "px";
	})
	var str = '<div class="prveImg"><img src="../static/images/movie-button.png" alt=""></div>';
	oLi.each(function(index,els){
		$(els).hover(function(){
				$(this).find('a').append(str);
			},function(){
				$(this).find('a .prveImg').remove();
			})
	})
})