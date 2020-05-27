import React from "react";
import { InputTag, Label, IbHubsLogo, ErrorMessage } from "../../common/components";
import { ibhubsLogo } from "../../assets";
import Strings from "../../i18n/strings.json";
import { observer } from "mobx-react";
import {
    LoginPageContainer,
    LoginForm,
    SigInText,
    SignInBtn,

    DontHaveAccount,
    SignupLink
}
from "./styledComponent";

@observer
class LoginPage extends React.Component {

    render() {
        const {
            username,
            password,
            onChangeUserNameLogin,
            onChangePasswordLogin,
            onClickLogin,
            errroMessageUserName,
            errorMessagePassword
        } = this.props;
        //alert(this.errroMessageUserName == "");
        return <LoginPageContainer>
                    
                    <LoginForm>
                        <IbHubsLogo src={ibhubsLogo.logoAdress} alt="ibhubsLogo"/>
                        <SigInText>{Strings.login.hiTherePleaseSignIn}</SigInText>
                        <Label>{Strings.signUp.userName}</Label>
                        <InputTag 
                            onChange={onChangeUserNameLogin} 
                            value={username} 
                            type="text" 
                            placeholder="username"
                            
                        />
                        {errroMessageUserName!="" && <ErrorMessage>{errroMessageUserName}</ErrorMessage>}
                        <Label>{Strings.login.password}</Label>
                        <InputTag 
                            onChange={onChangePasswordLogin} 
                            value={password} 
                            type="password"
                            placeholder="password"
                        />
                        {errorMessagePassword!="" && <ErrorMessage>{errorMessagePassword}</ErrorMessage>}
                        <SignInBtn 
                            type="button" 
                            onClick={onClickLogin} 
                            data-testid='sign-up-button'
                        >{Strings.login.login}
                        </SignInBtn>
                            <DontHaveAccount>
                                {Strings.login.donotHaveAnAccount} 
                                <SignupLink href={"https://a2ae96eb5eb34fdda2eb65989640e7b0.vfs.cloud9.ap-southeast-1.amazonaws.com/slot-booking/sign-up/"}> {Strings.login.signUp}</SignupLink>
                            </DontHaveAccount>
                            
                    </LoginForm>
                    
                </LoginPageContainer>;

    }
}

export default LoginPage;