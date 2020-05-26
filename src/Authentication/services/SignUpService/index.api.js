import { networkCallWithApisauce } from "../../utils/APIUtils";
import { apiMethods } from "../../../../Common/constants/apiConstants/APIConstants";
import { create } from "apisauce";
import { endPoints } from "../endPoints";


class SignUpService {

    api

    constructor() {
        this.api = create({});
    }

    signInAPI = () => {
        return networkCallWithApisauce(
            this.api,
            endPoints.Sign_In_Endpoint, {},
            apiMethods.get
        );
    }
}

export default SignUpService;
