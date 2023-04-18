import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {

    const firebaseConfig = {
      apiKey: "AIzaSyBsOg12N6-DKASl1C1B4zehcaS9Sxf2f98",
      authDomain: "lordhealth-ce260.firebaseapp.com",
      databaseURL: "https://lordhealth-ce260-default-rtdb.firebaseio.com",
      projectId: "lordhealth-ce260",
      storageBucket: "lordhealth-ce260.appspot.com",
      messagingSenderId: "410053223810",
      appId: "1:410053223810:web:3e8391b149fc9ad9659b9b"
    };


    firebase.initializeApp(firebaseConfig)
  }
  title = 'LordHealthMain';
}
