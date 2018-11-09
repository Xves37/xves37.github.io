var slider = document.getElementsByTagName('img');

var halfSlides = Math.floor(slider.length / 2);
var pileLeft = [], pileRight = [], center = slider[0];

for(i=0;i<halfSlides;i++){
	pileLeft.push(slider[slider.length - i - 1]);
	pileLeft[i].style.right = "400px";
}
for(i=0;i<(slider.length - halfSlides - 1);i++){
	pileRight.push(slider[i + 1]);
	pileRight[i].style.right = "-400px";
}

$(function(){
	$('.right-btn').on("click", function(){
		if($(center).css('right') == '0px'){
			$(center).css("z-index", "2");		
			$(pileLeft[pileLeft.length - 1]).css("z-index", "2");
			$(center).animate({
				"right": "-400px"
			})
			pileRight.push(center);
			center = pileLeft[pileLeft.length - 1];
			pileLeft.pop();
			$(center).animate({
				"right": "0"
			})
			if(pileLeft.length < 2){
				$(pileRight[0]).css("z-index", "1");
				pileLeft.unshift(pileRight[0]);
				$(pileRight[0]).css("right", "400px");
				pileRight.shift();
			}
		}
	})
})
$(function(){
	$('.left-btn').on("click", function(){
		if($(center).css('right') == '0px'){
			$(center).css("z-index", "2");		
			$(pileRight[pileRight.length - 1]).css("z-index", "2");
			$(center).animate({
				"right": "400px"
			});
			pileLeft.push(center);
			center = pileRight[pileRight.length - 1];
			pileRight.pop();
			$(center).animate({
				"right": "0"
			})
			if(pileRight.length < 2){
				$(pileLeft[0]).css("z-index", "1");
				pileRight.unshift(pileLeft[0]);
				$(pileLeft[0]).css("right", "-400px");			
				pileLeft.shift();
			}
		}
	})
})