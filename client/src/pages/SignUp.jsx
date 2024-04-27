import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div className="flex items-start justify-center min-h-screen pt-10">
      <div className="bg-white shadow-lg rounded p-12">
        <h1 className="text-2xl text-center font-semibold mb-4">
          {' '}
          Create your Propel account
        </h1>
        <form className="flex flex-col gap-5">
          Email
          <br />
          <input type="text" className="border p-3 rounded-md" id="email" />
          Name
          <br />
          <input type="text" className="border p-3 rounded-md" id="username" />
          Password
          <br />
          <input type="text" className="border p-3 rounded-md" id="password" />
          <button className="bg-indigo-800 text-white p-3 mt-4 rounded-md uppercase hover:opacity-90 disabled:opacity-50">
            Sign Up
          </button>
        </form>
        <div className="flex gap-1 mt-8 justify-center">
          <p>Have an account?</p>
          <Link to={'/signin'}>
            <span className="text-indigo-500">Sign in</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
