// Firebase Configuration
// Replace these values with your Firebase project credentials from Firebase Console
// https://console.firebase.google.com/

export const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'your-project.firebaseapp.com',
  projectId: 'your-project-id',
  storageBucket: 'your-project.appspot.com',
  messagingSenderId: 'your-sender-id',
  appId: 'your-app-id',
};

/*
STEPS TO GET YOUR FIREBASE CONFIG:

1. Go to https://console.firebase.google.com/
2. Create a new project or use existing one
3. Go to Project Settings (gear icon)
4. Under "Your apps" section, select "Web" (</> icon)
5. Copy the Firebase config object
6. Replace the values above with your config
7. Make sure to add Firebase Storage bucket for photo uploads

IMPORTANT: Never commit this file with real credentials to GitHub!
Add 'src/app/config/firebase.config.ts' to .gitignore before committing.
*/
