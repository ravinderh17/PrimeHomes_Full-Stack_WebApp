import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from '../../redux/user/userSlice';
import OAuth from '../components/OAuth';

export default function Login() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      dispatch(signInFailure("Invalid email format"));
      return;
    }

    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
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
    <div className='p-3 max-w-md mx-auto'>
      <h1 className='text-3xl text-center font-semibold text-slate-800 mt-7 '>Log In </h1>
      <span className="text-md flex justify-center text-center  mt-2 text-slate-600 mb-6">Hi! Welcome back. </span>
      
      <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
      <OAuth/>
      <span className="text-md text-center items-center justify-center flex text-slate-400 mt-2">or login with email </span>
        <label htmlFor="" className='flex font-semibold'>Email</label>
        <input
          type='email'
          placeholder='Enter Email'
          className='border border-slate-200 focus:outline-blue-500 mb-2 p-3 rounded-lg '
          id='email'
          onChange={handleChange}
        />
         <label htmlFor="" className='flex font-semibold'>Password</label>
        <input
          type='assword'
          placeholder='Enter Password'
          className='border focus:outline-blue-500  p-3 rounded-lg'
          id='password'
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-70 font-medium text-md '
        >
          {loading ? 'Loading...' : 'login'}
        </button>
      
      </form>
      <div className='flex text-center items-center justify-center gap-2 mt-5'>
        <p className=''>Not registered yet?</p>
        <Link to={'/register'}>
          <span className='text-blue-700 text-center flex items-center justify-center'>Create an account</span>
        </Link>
      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  );
}
