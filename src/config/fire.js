import firebase from 'firebase';

// Initialize Firebase
const config = {
	apiKey: 'AIzaSyAI6lHD3qjDppRMME8FBmc1ssw2STTYJjw',
	authDomain: 'react-auth-f1b16.firebaseapp.com',
	databaseURL: 'https://react-auth-f1b16.firebaseio.com',
	projectId: 'react-auth-f1b16',
	storageBucket: 'react-auth-f1b16.appspot.com',
	messagingSenderId: '590906335346'
};

const fire = firebase.initializeApp(config);
export default fire;
