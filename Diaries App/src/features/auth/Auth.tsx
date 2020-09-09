import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { User } from '../../interfaces/user.interface';
import * as Yup from 'yup';
import http from '../../services/api';
import { saveToken, setAuthState } from './authSlice';
import { setUser } from './userSlice';
import { AuthResponse } from '../../services/mirage/routes/user';
import { useAppDispatch } from '../../store';
import Login from '../../images/user_status_isometric.svg';
import Signup from '../../images/user_profile_isometric.png';

const schema = Yup.object().shape({
  username: Yup.string()
    .required('What? No username?')
    .max(16, 'Username cannot be longer than 16 characters'),
  password: Yup.string().required('Without a password, "None shall pass!"'),
  email: Yup.string().email('Please provide a valid email address (abc@xy.z)'),
});

const Auth: FC = () => {
  const { handleSubmit, register, errors } = useForm<User>({
    validationSchema: schema,
  });

  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  const submitForm = (data: User) => {
    const path = isLogin ? '/auth/login' : '/auth/signup';
    http
      .post<User, AuthResponse>(path, data)
      .then((res) => {
        if (res) {
          const { user, token } = res;
          dispatch(saveToken(token));
          dispatch(setUser(user));
          dispatch(setAuthState(true));
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div className="auth">
      <div className="card">
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="inputWrapper">
            <h3 className="formtitle">{isLogin ? 'Login' : 'SignUp'}</h3>
            {isLogin ? (
              <img src={Login} alt="Avatar" className="avatar" />
            ) : (
              <img src={Signup} alt="Avatar" className="avatar" />
            )}
            <input
              className="in"
              ref={register}
              name="username"
              placeholder="Username"
            />
            {errors && errors.username && (
              <p className="error">{errors.username.message}</p>
            )}
          </div>
          <div className="inputWrapper">
            <input
              className="in"
              ref={register}
              name="password"
              type="password"
              placeholder="Password"
            />
            {errors && errors.password && (
              <p className="error">{errors.password.message}</p>
            )}
          </div>

          {!isLogin && (
            <div className="inputWrapper">
              <input
                ref={register}
                name="email"
                placeholder="Email (optional)"
              />
              {errors && errors.email && (
                <p className="error">{errors.email.message}</p>
              )}
            </div>
          )}

          <div className="inputWrapper">
            <button className="bttn" type="submit" disabled={loading}>
              {isLogin ? 'Login' : 'Create account'}
            </button>
          </div>

          <h5
            onClick={() => setIsLogin(!isLogin)}
            style={{ cursor: 'pointer', opacity: 0.7 }}
          >
            <p
              style={{
                color: '#eee',
                fontWeight: 900,
                borderLeft: '4px solid #ccc',
                borderRight: '4px solid #ccc',
                fontSize: '1rem',
              }}
            >
              <i className="fa fa-user"></i>&nbsp;&nbsp;{isLogin ? 'No account? Create one' : 'Already have an account?'}
            </p>
          </h5>
        </form>
        <div className="credit typewriter">
          <p className="anime">Developed By Bilal Shaikh</p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
