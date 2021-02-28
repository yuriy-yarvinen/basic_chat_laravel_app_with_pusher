const changePhoneButtonCss = (button, marginBottomDesc, marginRightDesc, marginBottomMobile, marginRightMobile, type) => {
	
	function checkNumbers(value){
		const preg = /^[0-9]+$/;
		if(preg.test(value)){
			return value + 'px';
		}
		else{
			return value;
		}
	}
	
	if(type){
		button.style.bottom = checkNumbers(marginBottomMobile);
		button.style.right = checkNumbers(marginRightMobile);
	}
	if(!type){
		button.style.bottom = checkNumbers(marginBottomDesc);
		button.style.right = checkNumbers(marginRightDesc);
	}
}

export default changePhoneButtonCss;