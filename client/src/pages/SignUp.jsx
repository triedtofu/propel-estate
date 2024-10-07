import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import OAuth from '../components/OAuth';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [emailValid, setEmailValid] = useState(true);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordValid, setPasswordValid] = useState({
    uppercase: false,
    digit: false,
    length: false,
    touched: false,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
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
      setLoading(true);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setError(null);
      setLoading(false);
      navigate('/signin');
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className="p-3 mt-10 max-w-lg mx-auto">
      <div className="bg-white shadow-lg rounded p-12">
        <h1 className="text-2xl text-center font-semibold mb-4">
          {' '}
          Create your Propel account
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
          Username
          <br />
          <input
            type="text"
            className="border p-3 rounded-md"
            id="username"
            onChange={handleChange}
          />
          Password
          <br />
          <div className="relative">
            <input
              type={passwordVisible ? 'text' : 'password'}
              className="border p-3 rounded-md w-full pr-10"
              id="password"
              onChange={handleChange}
              onBlur={handlePasswordBlur}
            />
            <div
              className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? <FaEye /> : <FaEyeSlash />}
            </div>
          </div>
          <div>
            {!passwordValid.uppercase && passwordValid.touched && (
              <p className="text-red-500">
                X Password must contain at least one uppercase letter.
              </p>
            )}
            {!passwordValid.digit && passwordValid.touched && (
              <p className="text-red-500">
                X Password must contain at least one digit.
              </p>
            )}
            {!passwordValid.length && passwordValid.touched && (
              <p className="text-red-500">
                X Password must be at least 10 characters long.
              </p>
            )}
            {passwordValid.uppercase &&
              passwordValid.digit &&
              passwordValid.length &&
              passwordValid.touched && (
                <p className="text-green-500">
                  ✓ Nice work. Your password is good
                </p>
              )}
          </div>
          <button
            disabled={
              loading ||
              !emailValid ||
              !passwordValid.uppercase ||
              !passwordValid.digit ||
              !passwordValid.length
            }
            className="bg-indigo-800 text-white p-3 mt-4 rounded-md uppercase hover:opacity-90 disabled:opacity-50"
          >
            {loading ? 'Loading...' : 'Sign Up'}
          </button>
          <OAuth />
        </form>
        <div className="flex gap-1 mt-8 justify-center">
          <p>Have an account?</p>
          <Link to={'/signin'}>
            <span className="text-indigo-500">Sign in</span>
          </Link>
        </div>
        {error && <p className="text-red-500"> {error}</p>}
      </div>
    </div>
  );
}
