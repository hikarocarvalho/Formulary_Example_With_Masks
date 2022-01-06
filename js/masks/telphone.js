//add dots and dash
function formatPhone(){
    const phoneElement = document.querySelector("[name='inputCellPhoneNumber']");
	if(parseInt(event.key)||event.key==0){
		if(event.key.match(/^[0-9]*$/)){
			if(phoneElement.value.length===2){

				phoneElement.value="("+phoneElement.value+") ";

			}else if(phoneElement.value.length===10){

				phoneElement.value=phoneElement.value+"-";
			}
		}
	}
	else{
		if(!parseInt(this.event.key)&&this.event.key.match(/[A-Za-z]/)&&this.event.key.length===1){
			alert("Please use numbers! \nPor favor utilize numeros!");
		}
	}
}
