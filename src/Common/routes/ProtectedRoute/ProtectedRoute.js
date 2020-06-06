import  React,{Component} from "react";
import { observer } from "mobx-react";
import { getAccessToken } from "../../utils/StorageUtils";
import { paths } from "../../constants/NavigationConstants";

const { signInForm } = paths;
@observer
class ProtectedRoute extends Component {
render(){
    const {Component,paths, ...props} = this.props;
    return getAccessToken()?(<Route component={Component} exact patch ={path} {...props}/>)
                            :(<Redirect to ={signInForm}/>)
}
}

export default withRouter(ProtectedRoute);
