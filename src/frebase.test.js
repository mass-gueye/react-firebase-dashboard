import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDJECMdHc14evBlcNAKvETPQcRh_nmXzvE",
  authDomain: "stud-plateform-dev.firebaseapp.com",
  projectId: "stud-plateform-dev",
  storageBucket: "stud-plateform-dev.appspot.com",
  messagingSenderId: "838834759897",
  appId: "1:838834759897:web:926de868562d9775dcb6c8",
};

const app = firebase.initializeApp(firebaseConfig);

const auth = app.auth();
const db = app.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();

async function signInWithGoogle() {
  try {
    const response = await auth.signInWithPopup(googleProvider);
    const { user } = response;
    const query = db.collection("users").where("uid", " ==", user.uid).get();
    if (query.docs.length === 0) {
      const { uid, displayName, email } = user;
      await db.collection("users").add({
        uid,
        name: displayName,
        email,
        role: "student",
        isAdmin: false,
        authProvider: "google",
      });
    }
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
}

async function signInWithEmailAndPassword(email, password) {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (error) {}
}

async function registerWithEmailAndPassword(name, email, password) {
  try {
    const response = await auth.createUserWithEmailAndPassword(email, password);
    const { user } = response;
    const { uid } = user;

    await db.collection("user").add({
      uid,
      name,
      email,
      role: "student",
      isAdmin: false,
      authProvider: "local",
    });
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
}

async function sendPasswordResetEmail(email) {
  try {
    await auth.sendPasswordResetEmail(email);
    alert("password reset link sent");
  } catch (error) {
    console.error(error);
    alert(error);
  }
}

function logout() {
  auth.signOut();
}

export {
  auth,
  db,
  signInWithGoogle,
  signInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordResetEmail,
  logout,
};
