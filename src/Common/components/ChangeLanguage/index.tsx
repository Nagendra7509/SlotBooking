import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { WithTranslation, withTranslation } from 'react-i18next'
import i18n from '../../i18n'

import {
   LanguageChangeWrapper,
   TeluguButton,
   EnglishButton,
   HindiButton
} from './styledComponents'

@observer
class LanguageChange extends React.Component<WithTranslation> {
   ChangeLanguage = e => {
      const { t } = this.props
      const value = e.target.id
      switch (value) {
         case t(`common:telugu`):
            i18n.changeLanguage('te')
            break
         case t(`common:english`):
            i18n.changeLanguage('en')
            break
         case t(`common:hindi`):
            i18n.changeLanguage('hi')
            break
         case t(`common:tamil`):
            i18n.changeLanguage('ta')
            break
         default:
            i18n.changeLanguage('en')
      }
   }

   render() {
      const { t } = this.props
      return (
         <LanguageChangeWrapper>
            <TeluguButton onClick={this.ChangeLanguage} id={t(`common:telugu`)}>
               {t(`common:telugu`)}
            </TeluguButton>
            <EnglishButton
               onClick={this.ChangeLanguage}
               id={t(`common:english`)}
            >
               {t(`common:english`)}
            </EnglishButton>
            <HindiButton onClick={this.ChangeLanguage} id={t(`common:hindi`)}>
               {t(`common:hindi`)}
            </HindiButton>
            <HindiButton onClick={this.ChangeLanguage} id={t(`common:tamil`)}>
               {t(`common:tamil`)}
            </HindiButton>
         </LanguageChangeWrapper>
      )
   }
}

export default withTranslation('translation', {})(LanguageChange)
