### Deployment link : 
<a href="https:[//example.com](https://delicate-conkies-e06c68.netlify.app/" target="_blank" rel="noopener noreferrer">View Project</a>


# Setup 

* First , you need to run npm install 
* Then you need to install all libraries
* If you want to store notes in database , then you need to connect your firebase . You can do this by replacing

  const firebaseConfig = {
    apiKey: "your-api-key",
  
    authDomain: "your-auth-domain",
  
    projectId: "your-project-id",
  
    storageBucket: "your-storage-bucket",
  
    messagingSenderId: "your-messaging-sender-id",
  
    appId: "your-app-id"

};

in your firebase.js file by your own key , domain and id .
