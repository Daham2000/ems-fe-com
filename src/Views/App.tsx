import { useState, useEffect } from 'react';
import { getAuthToken } from '../Business/AuthService';
import '../Styles/App.css';
import { AppConstant } from '../Util/AppConstants';
import { JwtPayloadType, decodeToken } from '../Util/decodeToken';
import RouterComponent from './router-component';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import { ActionTypes } from '../store/actionType';
import { useNavigate } from 'react-router';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

function App(props: any) {

  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getCurrentUser();
  }, []);

  const getCurrentUser = async (): Promise<number> => {
    setIsLoading(true);
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const idToken = await user.getIdToken();
        console.log("idToken: " + idToken);

        if (idToken !== AppConstant.LoginFailed) {
          const user = decodeToken(idToken);
          props.updateUserDetails(idToken, user);
          if (user !== undefined) {
            setIsLoading(false);
            navigate("/dashboard-admin");
          }
          return 200;
        }
        setIsLoading(false);
      }else {
        setIsLoading(false);
      }
    });
    return 401;
  }

  return (
    <div className="App">
      {!isLoading ?
        <RouterComponent /> :
        <>
          <p>Loading...</p>
        </>}
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    idToken: state.idToken,
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateUserDetails: (idToken: string, user: JwtPayloadType) => dispatch({
      type: ActionTypes.SAVE_USER_DETAILS,
      payload: { idToken, user }
    })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);