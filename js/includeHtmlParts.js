const body = document.getElementById("body");

function includeHTML() {
    let z, i, xhttp;
    let files = [
        body.getAttribute("include")
    ]
    for (let count = 0; count < files.length; count++) {
        let file = files[count];
        if (file) {
            /* Make an HTTP request to get html parts */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        count === 0 ?
                            body.innerHTML = this.responseText:
                            "";
                        
                    }
                    if (this.status == 404) {
                        count === 0 ?
                            body.innerHTML = "Page not found.":
                            '' ;
                    }
                    /* Remove the attribute include */
                   
                    count === 0 ?
                        body.removeAttribute("include"):
                        "";
                }
            
            }
        }
        
        xhttp.open("GET", file, true);
        xhttp.send();
    }
    return;
}
includeHTML();