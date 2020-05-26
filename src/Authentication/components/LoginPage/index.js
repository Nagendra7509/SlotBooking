import React from "react";
import { InputTag, Label, IbHubsLogo } from "../../common/components";
import { ibhubsLogo } from "../../assets";
import Strings from "../../i18n/strings.json";
import { observer } from "mobx-react";
import {
    LoginPageContainer,
    LoginForm,
    SigInText,
    SignInBtn
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
            onClickLogin
        } = this.props;
        return <LoginPageContainer>
                    
                    <LoginForm>
                        <IbHubsLogo src={ibhubsLogo.logoAdress}/>
                        <SigInText>{Strings.login.hiTherePleaseSignIn}</SigInText>
                        <Label>{Strings.signUp.userName}</Label>
                        <InputTag 
                            onChange={onChangeUserNameLogin} 
                            value={username} 
                            type="text" 
                            
                        />
                        {/*<ErrorMessage>{}</ErrorMessage>*/}
                        <Label>{Strings.login.password}</Label>
                        <InputTag 
                            onChange={onChangePasswordLogin} 
                            value={password} 
                            type="password"
                        />
                        {/*<ErrorMessage>{}</ErrorMessage>*/}
                        <SignInBtn 
                            type="button" 
                            onClick={onClickLogin} 
                            data-testid='sign-up-button'
                        >{Strings.login.login}
                        </SignInBtn>
                    </LoginForm>
                    
                </LoginPageContainer>;

    }
}

export default LoginPage;
