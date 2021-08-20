  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
      apiKey: "AIzaSyBXIfd6A_Tdl7jiD08mE7cwsCNsuGHP1rg",
      authDomain: "kwitter-cdcc1.firebaseapp.com",
      databaseURL: "https://kwitter-cdcc1-default-rtdb.firebaseio.com",
      projectId: "kwitter-cdcc1",
      storageBucket: "kwitter-cdcc1.appspot.com",
      messagingSenderId: "1062876566467",
      appId: "1:1062876566467:web:48324fbcf85d7c0a9f6376",
      measurementId: "G-P14201J18F"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();



