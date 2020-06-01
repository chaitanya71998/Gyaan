import AuthService from "../services/AuthService";
import { AuthSignInStore } from "./AuthStore/AuthStore";

const authService = new AuthService();
const authSignInStore = new AuthSignInStore(authService);

export {authSignInStore};