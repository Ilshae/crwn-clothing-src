import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

import { PageWrapper, GlobalStyle } from './global.styles';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SignInAndSignUpPage = lazy(() =>
  import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component')
);
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <PageWrapper >
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path='/crwn-clothing/' component={HomePage} />
            <Route path='/crwn-clothing/shop' component={ShopPage} />
            <Route exact path='/crwn-clothing/checkout' component={CheckoutPage} />
            <Route
              exact
              path='/crwn-clothing/signin'
              render={() =>
                currentUser ? <Redirect to='/crwn-clothing/' /> : <SignInAndSignUpPage />
              }
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
      <Footer />
    </PageWrapper>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
