export const checkFunction = (functionName) => {
	if (typeof functionName == 'function' || typeof functionName == 'object') {
		return true;
	} else {
		return false;
	}
}

export const addCssToDocument = (css) =>{
  var style = document.createElement('style')
  style.innerText = css
  document.head.appendChild(style)
}