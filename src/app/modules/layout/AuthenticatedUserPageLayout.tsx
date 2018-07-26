import React from 'react';
import { comp, IInjectedProps } from '../../utils/decorators'
import { Footer, Header } from './index'



class AuthenticatedUserPageLayoutCmp extends React.Component<IInjectedProps> {
    get injectedProps() {
        return this.props as IInjectedProps
    }
    public render() {
        const { appStore } = this.injectedProps;
        const authenticatedMarkup = (
            <div>
                <Header />
                {this.props.children}
                <Footer />
            </div>
        );
        const loadingMarkup = (<div>Loading...</div>)

        return appStore.userStore.currentUser ? authenticatedMarkup : loadingMarkup
    }
}

export const AuthenticatedUserPageLayout = comp(AuthenticatedUserPageLayoutCmp);