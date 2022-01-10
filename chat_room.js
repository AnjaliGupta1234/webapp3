const firebaseConfig = {
    apiKey: "AIzaSyADMhYj1M1BuBWMmUWMmlZFu6YR4_20NZ0",
    authDomain: "webapp-f1a7c.firebaseapp.com",
    databaseURL: "https://webapp-f1a7c-default-rtdb.firebaseio.com",
    projectId: "webapp-f1a7c",
    storageBucket: "webapp-f1a7c.appspot.com",
    messagingSenderId: "979840205546",
    appId: "1:979840205546:web:92e3e32c0b9251fa5f4d93",
    measurementId: "G-E5G58GW7WZ"
  };

  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome "+user_name+" !"

function addRoom()
{
  room_name = document.getElementById("room_name").value ;
  firebase.database().ref("/").child(room_name).update({
    purpose :"adding room name"
  });

  localStorage.setItem("room_name" , room_name);
  window.location = "chat_room.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
console.log("Room Name - " + Room_names);
row = "<div class = 'room_name' id=" +Room_names+"onclick='redirectToRoomName(this.id)' >#" + Room_names+"</div><hr>"
document.getElementById("output").innerHTML +=row;
    //End code
    });});}
getData();


function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name" , room_name);
  window.location="chat_page.html";
}
