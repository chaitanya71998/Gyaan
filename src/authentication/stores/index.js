import AuthService from "../services/AuthService";
import { AuthSignInStore } from "./authSignInStore/AuthSignInStore";

const authService = new AuthService();
const authSignInStore = new AuthSignInStore(authService);

export {authSignInStore};