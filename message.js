function removeItems() {
    document.getElementById('nom').value = '';
    document.getElementById('email').value = '';
    document.getElementById('objet').value = '';
    document.getElementById('message').value = '';
}

var btn = document.getElementById('btn');
btn.addEventListener('click', function (e) {
    e.preventDefault()
    var nom = document.getElementById('nom').value;
    var email = document.getElementById('email').value;
    var objet = document.getElementById('objet').value;
    var message = document.getElementById('message').value;
    var body = '' + nom + '<br>' + email + '<br>' + objet + '<br>' + message;


    Email.send({
        Host : "smtp.gmail.com",
        Username : "hamadoutiementa@gmail.com",
        Password : "uhnurdiihxrwisvp",
        To : 'hamadoutiementa@gmail.com',
        From : email,
        Subject : objet,
        Body : body,
    }).then(
      message => alert("Message envoyer")
    );


    // Email.send({
    //     Host:"stmp.gmail.com",
    //     Username:"hamadoutiementa@gmail.com",
    //     Password:"uhnurdiihxrwisvp",
    //     To: 'hamadoutiementa@gmail.com',
    //     From:email,
    //     Subject:objet,
    //     Body:body,
    // }).then(
    //     message => alert("Message envoyer")
    // );
    removeItems();
})