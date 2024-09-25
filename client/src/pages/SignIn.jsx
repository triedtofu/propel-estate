import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from '../redux/user/userSlice';
import OAuth from '../components/OAuth';

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { error, loading } = useSelector((state) => state.user);
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState({
    uppercase: false,
    digit: false,
    length: false,
    touched: false,
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    const uppercaseRegex = /[A-Z]/;
    const digitRegex = /[0-9]/;
    const lengthValid = password.length >= 10;

    setPasswordValid({
      uppercase: uppercaseRegex.test(password),
      digit: digitRegex.test(password),
      length: lengthValid,
      touched: true,
    });
  };

  const handleEmailBlur = (e) => {
    setEmailValid(validateEmail(e.target.value));
  };

  const handlePasswordBlur = (e) => {
    validatePassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate('/');
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div className="p-3 mt-10 max-w-lg mx-auto">
      <div className="bg-white shadow-lg rounded p-12">
        <h1 className="text-2xl text-center font-semibold mb-4">
          {' '}
          Sign in to your account
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          Email
          <br />
          <input
            type="email"
            className={`border p-3 rounded-md ${
              emailValid ? '' : 'border-red-500'
            }`}
            id="email"
            onChange={handleChange}
            onBlur={handleEmailBlur}
          />
          {emailValid ? null : (
            <p className="text-red-500">Please enter a valid email address.</p>
          )}
          Password
          <br />
          <input
            type="password"
            className="border p-3 rounded-md"
            id="password"
            onChange={handleChange}
            onBlur={handlePasswordBlur}
          />
          <button className="bg-indigo-800 text-white p-3 mt-4 rounded-md uppercase hover:opacity-90 disabled:opacity-50">
            {loading ? 'Loading...' : 'Sign In'}
          </button>
          <OAuth />
        </form>
        <div className="flex gap-1 mt-8 justify-center">
          <p>Dont have an account?</p>
          <Link to={'/signup'}>
            <span className="text-indigo-500">Sign up</span>
          </Link>
        </div>
        {error && <p className="text-red-500"> {error}</p>}
      </div>
    </div>
  );
}
