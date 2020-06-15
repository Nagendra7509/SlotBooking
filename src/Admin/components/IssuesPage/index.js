import React from 'react'
import { observer } from 'mobx-react'
import { IssuesPageContainer } from './styledComponents'

@observer
class IssuesPage extends React.Component {
   render() {
      return <IssuesPageContainer>IssuesPage</IssuesPageContainer>
   }
}

export default IssuesPage
