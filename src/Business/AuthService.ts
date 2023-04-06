import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { AppConstant } from "../Util/AppConstants";

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