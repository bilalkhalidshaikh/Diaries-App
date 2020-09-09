import React, { FC, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../rootReducer';
import Loading from '../images/Loading.gif';

const Auth = lazy(() => import('../features/auth/Auth'));
const Home = lazy(() => import('../features/home/Home'));

const App: FC = () => {
  const isLoggedIn = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  return (
    <Router>
      <Switch>
        <Route path="/">
          <Suspense
            fallback={
              <img
                src={Loading}
                style={{
                  backgroundSize: 'cover',
                  backgroundAttachment: 'fixed',
                  backgroundPosition: "center",
                  width: "100%",
                  height: "100%"
                }}
              />
            }
          >
            {isLoggedIn ? <Home /> : <Auth />}
          </Suspense>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
