
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDj8E76tXRnFkjALGuD45ydMvfVlclk69g",
    authDomain: "ludus-edu-d3b0b.firebaseapp.com",
    databaseURL: "https://ludus-edu-d3b0b.firebaseio.com",
    projectId: "ludus-edu-d3b0b",
    storageBucket: "ludus-edu-d3b0b.appspot.com",
    messagingSenderId: "525899802186"
  };
  firebase.initializeApp(config);

// Referencias
  var messagesRef = firebase.database().ref('messages');


document.getElementById('formulario').addEventListener('submit', submitForm);

// Submit Form
function submitForm(x){
    x.preventDefault();
    // get Values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var subject = getInputVal('subject');
    var message = getInputVal('message');
    
    //salvando mensagens
    saveMessage(name, email, subject, message);

    // Mostrando Alert
    document.querySelector('.sendmessage').style.display = 'block';
    // Desaparecendo Alerta 3 segundos
    setTimeout(function(){
        document.querySelector('.sendmessage').style.display = 'none';
    }, 3000);
     
}

function getInputVal(id){
    return document.getElementById(id).value;
}
//salvar mensagem para o firebase
function saveMessage(name, email, subject, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name:name,
        email:email,
        subject:subject,
        message:message
    })
}