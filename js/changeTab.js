const getElementClick = ()=>{
    setTab(this.event.target.id);
    
}
const setNext = ()=>{
    this.event.preventDefault();
    const id = document.querySelector(".active").getAttribute("id");
    if(id==="personal"){
        setTab("family");   
    }else if(id==="family"){
        setTab("professional");
    }
}
const setTab = (id)=>{
    
    const tabOptions = {
        personal:document.getElementById("personal"),
        family:document.getElementById("family"),
        professional:document.getElementById("professional")
    }
    const styles = {
        family:{
            display:"",
        },
        personal:{
            display:"",
        },
        professional:{
            display:""
        }
    }
    if(id==="family"){
        styles.family.display = "flex";
        styles.personal.display = "none";
        styles.professional.display = "none";

        tabOptions.personal.classList.remove("active");
        tabOptions.family.classList.add("active");
        tabOptions.professional.classList.remove("active");
    }else if(id==="personal"){
        styles.personal.display = "flex";
        styles.family.display = "none";
        styles.professional.display = "none";

        tabOptions.personal.classList.add("active");
        tabOptions.family.classList.remove("active");
        tabOptions.professional.classList.remove("active");
    }else if(id==="professional"){
        styles.professional.display = "flex";
        styles.personal.display = "none";
        styles.family.display = "none";      
        
        tabOptions.personal.classList.remove("active");
        tabOptions.family.classList.remove("active");
        tabOptions.professional.classList.add("active");
    }
    const tabContainer = {
        personal:document.getElementById("containerPersonal"),
        family:document.getElementById("containerFamily"),
        professional:document.getElementById("containerProfessional")
    }
    tabContainer.personal.style.display=styles.personal.display;
    tabContainer.family.style.display=styles.family.display;
    tabContainer.professional.style.display=styles.professional.display;
}
    