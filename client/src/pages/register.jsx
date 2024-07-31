import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OAuth from '../components/OAuth';

export default function Register() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

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
    setError("");

    if (!validateEmail(formData.email)) {
      setError("Invalid email format");
      return;
    }

    try {
      setIsLoading(true);
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!data.success) {
        setIsLoading(false);
        setError(data.message);
        return;
      }
      setIsLoading(false);
      setError(null);
      navigate('/login');
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className='p-4 max-w-md mx-10 lg:mx-auto mt-6'>
      <h1 className='text-3xl font-bold text-slate-800 text-center'>Register</h1>
      <p className="text-md text-slate-600 text-center mb-6 mt-1">Create an account to get started.</p>
      
      
      <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
        <div>
          <label htmlFor="username" className='font-semibold'>Username</label>
          <input
            type='text'
            id='username'
            placeholder='Enter Username'
            className='border border-slate-300 p-3 rounded-lg mt-1 w-full
            hover:bg-slate-100 hover:border-slate-100 '
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email" className='font-semibold'>Email</label>
          <input
            type='email'
            id='email'
            placeholder='Enter Email'
            className='border border-slate-300 p-3 rounded-lg mt-1 w-full
            hover:bg-slate-100 hover:border-slate-100 '
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
            hover:bg-slate-100 hover:border-slate-100 '
            onChange={handleChange}
          />
        </div>
        <button
          disabled={isLoading}
          className='bg-blue-700 text-white py-3 rounded-lg uppercase font-semibold text-center w-full hover:opacity-90 disabled:opacity-50'
        >
          {isLoading ? 'Loading...' : 'Register'}
        </button>
      </form>
      <div className='flex justify-center mt-4'>
        <p className="text-slate-600">Already have an account?</p>
        <Link to={'/login'} className='text-blue-700 ml-1'>Sign in</Link>
      </div>
      
      {error && <p className='text-red-500 mt-4'>{error}</p>}
    </div>
  );
}
