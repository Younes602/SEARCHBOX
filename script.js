
    let content=document.querySelector('.contentButton');
	let searchButton=document.querySelector('.searchButton');
	let cancelButton=document.querySelector('.cancelButton');
	let textButton=document.querySelector('.textButton');
	
function changes(){	
  let getWidth=parseInt( window.getComputedStyle(content).getPropertyValue("width") );
  
	if(getWidth==100){
		content.style.width=600+"px";
		content.style.transition=0.5+"s";
		
		searchButton.style.left=8+"%";
		searchButton.style.transition=0.5+"s";
		
		cancelButton.style.zIndex=1;
		cancelButton.style.left=85+"%";
		cancelButton.style.transition=0.5+"s";
		
		textButton.style.zIndex=1;
		textButton.style.transition=0.5+"s";
	}
}

function cancelTheChanges(){
	let getNewWidth=parseInt( window.getComputedStyle(content).getPropertyValue("width") );
	
	if(getNewWidth!=100){
		content.style.width=100+"px";
		content.style.transition=0.5+"s";
		
		searchButton.style.left=50+"%";
		searchButton.style.transition=0.5+"s";
		
		cancelButton.style.zIndex=-1;
		cancelButton.style.transition=0.5+"s";
		
		textButton.style.animation="changeOpacity 2s";
		textButton.style.zIndex=-1;
		textButton.style.transition=0.5+"s";
	}
}