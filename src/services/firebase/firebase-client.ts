import "firebase/compat/auth";
import config from "./config.json";
import firebase from "firebase/compat/app";

if (typeof window !== "undefined" && !firebase.apps.length) {
  firebase.initializeApp(config);
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
}

export { firebase as firebaseClient };
