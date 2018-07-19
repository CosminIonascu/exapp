import React from 'react'
import { observer, inject } from 'mobx-react'
import { translate } from 'react-i18next'
import { AuthenticationComponent } from '../modules/authentication/authenticationComponent'
import { Button } from '../modules/elements'

import { indexStyles } from './index.css'
@inject('appStore')
@translate(['data'])
@observer
class LandingPage extends React.Component {
  constructor(props) {
    super(props)
  }
  render = () => {
    const authenticationStore = this.props.appStore
    const { t } = this.props
    return (
      <div className="landing-page">
        <div className="content-bg-wrap">
          <div className="header-spacer--standard" />
          <div className="container">
            <div className="row display-flex">
              <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="landing-content">
                  <h1> {t('index.mainCallToAction')}</h1>
                  <Button
                    className="btn btn-md btn-border c-white"
                    onClick={authenticationStore.setRegisterFormActive}
                  >
                    {t('index.joinUsButton')}
                  </Button>
                </div>
              </div>
              <AuthenticationComponent />
            </div>
          </div>
        </div>
        <style jsx>{indexStyles}</style>
      </div>
    )
  }
}

export default LandingPage;
