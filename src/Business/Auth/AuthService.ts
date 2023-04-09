import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { AppConstant } from "../../Util/AppConstants";

export const loginUserService = async (email: string, password: string): Promise<string> => {
    try {
        let idToken = "";
        let userCredential = await signInWithEmailAndPassword(auth, email, password);
        idToken = await userCredential.user.getIdToken();
        return idToken;
    } catch (e) {
        return AppConstant.LoginFailed;
    }
}

export const getAuthToken = async (): Promise<string> => {
    try {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log("user: " + user.email);
                return user.getIdToken();
            }
        });
        return auth.currentUser?.getIdToken() ?? AppConstant.LoginFailed;
    } catch (e) {
        return AppConstant.LoginFailed;
    }
}

export const logoutService = async () => {
    await auth.signOut();
}