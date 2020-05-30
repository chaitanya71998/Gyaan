import{ DashboardStore} from "./store/DashboardStore";
import DashboardService from "../services/DashboardService/AuthService";


const dashboardStore = new DashboardStore(new DashboardService());

export  {dashboardStore} ;