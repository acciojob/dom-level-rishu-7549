//your JS code here. If required.
window.onload=function(){
	let ele = document.getElementById("level");
	let index = 0;
	 while (ele) {
        index++;
        ele = ele.parentElement;
    }
    alert("The level of the element is: " + index);
}

