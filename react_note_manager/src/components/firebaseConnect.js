import * as firebase from 'firebase';
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDw5pPizNrIwZNrPmoYMJC9yci6vnqkd6E",
    authDomain: "notereact-c059f.firebaseapp.com",
    databaseURL: "https://notereact-c059f.firebaseio.com",
    projectId: "notereact-c059f",
    storageBucket: "notereact-c059f.appspot.com",
    messagingSenderId: "691546291553",
    appId: "1:691546291553:web:4c69e6be85594128"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const noteData = firebase.database().ref('dataForNote');
// var data = firebase.database().ref('dataForNote/note2');
// get Data
// data.once('value').then(function (snapshot) {
//     console.log(snapshot.val());
    
// });
// sua data
// data.set({
//     id:1,
//     title:"ghi chu Ngay 28/8",
//     content:"Demo content for note"
// })