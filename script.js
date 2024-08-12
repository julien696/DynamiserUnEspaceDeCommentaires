/*Première partie création du nouveau commentaire*/
let inputFirstName = document.querySelector("#first-name");
let inputLastName = document.querySelector("#last-name");
let inputMessage = document.getElementById("message");
let form = document.querySelector("form");
let divComment = document.getElementById("comment-list");

function createComment (){
    let p = document.querySelectorAll("p")[1];
    let message = p.cloneNode();
    let textMessage = document.createTextNode(inputMessage.value);
    message.appendChild(textMessage);

    let containerP = p.parentNode;
    let containerMessage = containerP.cloneNode();
    containerMessage.appendChild(message);

    let h3 = containerP.previousElementSibling;
    let user = h3.cloneNode();
    let userValue = document.createTextNode(inputFirstName.value + " " + inputLastName.value);
    user.style.textTransform = "capitalize";
    user.appendChild(userValue);

    let parentH3 = h3.parentNode;
    let containerComment = parentH3.cloneNode();
    containerComment.appendChild(user);
    containerComment.appendChild(containerMessage);
   

    let grandParentH3 = parentH3.parentNode;
    let newComment = grandParentH3.cloneNode();

    newComment.appendChild(containerComment);

    divComment.appendChild(newComment);
}

/*Deuxième partie ajout du message d'erreur */
let error = document.querySelector("#error-message");

function errorMessage (){
    if (inputFirstName.value.length < 1 | inputLastName.value.length <1 | inputMessage.value.length <1){
        error.style.display ="block";
    }else{
        error.style.display = "none";
        createComment();
    }};

/*Troisième partie ajout de l'événement */
form.onsubmit = (e) => {
    e.preventDefault();
    errorMessage();   
    form.reset();
}



