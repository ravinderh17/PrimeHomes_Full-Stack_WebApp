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
      if (!data.success) {
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
    <div className='p-4 max-w-md mx-10 lg:mx-auto
    mt-6 text-slate-100
    '>
      <h1 className='text-3xl font-semibold '>Log In</h1>
      <p className="text-sm mb-6 mt-1">Welcome back! Please enter credentials.</p>
      
      <OAuth />
      <span className="text-sm text-center mt-4 mb-4
      flex justify-center
      
      ">or login with your email</span>
      
      <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
        <div>
          <label htmlFor="email" className='font-semibold'>Email</label>
          <input
            type='email'
            id='email'
            placeholder='Enter Email'
            className='border border-slate-300 p-3 rounded-lg mt-1 w-full font-semibold text-black
            hover:bg-slate-200 hover:border-slate-100 
            '
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password" className='font-semibold'>Password</label>
          <input
            type='password'
            id='password'
            placeholder='Enter Password'
            className='border border-slate-300 p-3 rounded-lg mt-1 w-full
            font-semibold text-black
            hover:bg-slate-200  hover:border-slate-100 
            '
            onChange={handleChange}
          />
        </div>
        <button
          disabled={loading}
          className='bg-blue-800 text-white py-3 rounded-lg uppercase font-semibold text-center w-full hover:opacity-50 disabled:opacity-50'
        >
          {loading ? 'Loading...' : 'Login'}
        </button>
      </form>
      
      <div className='flex mt-4'>
        <p className=" text-sm">Don&apos;t have an account?</p>
        <Link to={'/register'} className='hover:text-blue-300 ml-1 text-sm'>Create an account</Link>
      </div>
      
      {error && <p className='text-red-500 mt-4'>{error}</p>}
    </div>
  );
}
