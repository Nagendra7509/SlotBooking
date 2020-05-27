import React from "react";
import { observer } from "mobx-react";
import { InputTag, Label, IbHubsLogo } from "../../common/components";
import { ibhubsLogo } from "../../assets";
import Strings from "../../i18n/strings.json";
import {
    SignUpPageContainer,
    SignUpForm,
    SignUpText,

    SignUpBtn,
}
from "./styledComponent"


@observer
class SignUpPage extends React.Component {

    render() {
        const {
            username,
            password,
            confirmPassword,
            onChangePasswordSignUp,
            onChangeConfirmPasswordSignUp,
            onChangeUserNameSignUp,
            onClickSignUpBtn
        } = this.props;
        return <SignUpPageContainer>
                    
                    <SignUpForm>
                        <IbHubsLogo src={ibhubsLogo.logoAdress} alt="ibhubsLogo"/>
                        <SignUpText>{Strings.signUp.hiTherePleaseSignUp}</SignUpText>
                        <Label>{Strings.signUp.userName}</Label>
                        <InputTag 
                            onChange={onChangeUserNameSignUp} 
                            value={username} 
                            type="text" 
                            placeholder="username"
                            
                        />
                        {/*<ErrorMessage>{}</ErrorMessage>*/}
                        <Label>{Strings.signUp.password}</Label>
                        <InputTag 
                            
                            onChange={onChangePasswordSignUp} 
                            value={password} 
                            type="password" 
                            placeholder="password"
                            
                        />
                        <Label>{Strings.signUp.confirmPassword}</Label>
                        <InputTag
                            onChange={onChangeConfirmPasswordSignUp}
                            value={confirmPassword}
                            type="password"
                            placeholder="confirm password"
                            
                        />
                        {/*<ConfirmPassWordError></ConfirmPassWordError>*/}
                        <SignUpBtn 
                            type="button" 
                            onClick={onClickSignUpBtn} 
                            data-testid='sign-up-button'
                        >{Strings.signUp.signUp}
                        </SignUpBtn>
                    </SignUpForm>
                    
                </SignUpPageContainer>;
    }
}

export default SignUpPage;
