//add dots and dash
function formatPostCode(){
    const postCodeElement = document.querySelector("[name='inputPostCode']");
	if(parseInt(event.key)||event.key==0){
		if(event.key.match(/^[0-9]*$/)){
			if(postCodeElement.value.length===5){
				postCodeElement.value=postCodeElement.value+"-";
			}
		}
	}
	else{
		if(!parseInt(this.event.key)&&this.event.key.match(/[A-Za-z]/)&&this.event.key.length===1){
			alert("Please use numbers! \nPor favor utilize numeros!");
		}
	}
}
