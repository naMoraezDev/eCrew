import { FIREBASE_ERROR_MESSAGES } from "../constants";

export function getFirebaseErrorMessage(errorCode: string): string {
  return (
    FIREBASE_ERROR_MESSAGES[
      errorCode as keyof typeof FIREBASE_ERROR_MESSAGES
    ] ?? errorCode
  );
}
