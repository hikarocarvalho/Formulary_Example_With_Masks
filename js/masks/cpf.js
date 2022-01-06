
//add dots and dash
function formatCpf(){
    const cpfElement = document.querySelector("[name='inputCpf']");
	if(parseInt(event.key)||event.key==0){
		if(event.key.match(/^[0-9]*$/)){
			if(
				cpfElement.value.length===3||
				cpfElement.value.length===7	
			){
				cpfElement.value=cpfElement.value+".";
			}else if(
				cpfElement.value.length===11
			){
				cpfElement.value=cpfElement.value+"-";
			}
		}
	}
	else{
		if(!parseInt(this.event.key)&&this.event.key.match(/[A-Za-z]/)&&this.event.key.length===1){
			alert("Please use numbers! \nPor favor utilize numeros!");
		}
	}
}
