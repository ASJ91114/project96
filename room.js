//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyD5E2U9mOJzBOK7IJBHTosMhyXn9p_asaM",
    authDomain: "kwitter-bbf25.firebaseapp.com",
    databaseURL: "https://kwitter-bbf25-default-rtdb.firebaseio.com",
    projectId: "kwitter-bbf25",
    storageBucket: "kwitter-bbf25.appspot.com",
    messagingSenderId: "253305006631",
    appId: "1:253305006631:web:8223d2cb0d98a6fcd5bc02",
    measurementId: "G-PL34TBV33T"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value = "";
}

function logOut() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}