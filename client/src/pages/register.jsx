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
      console.log(data);
      if (data.success === false) {
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
    <div className='p-3 max-w-md mx-auto '>
      <h1 className='text-3xl text-slate-800 flex font-semibold mt-4'> Register</h1>
      <span className="text-md flex mt-1 text-slate-400 mb-3">Enter credentials to create an account. </span>
      <form onSubmit={handleSubmit} className='flex flex-col gap-2 '>
      <label htmlFor="" className='flex font-semibold '>Username</label>
        <input
          type='text'
          placeholder='Enter Username'
          className='border focus:outline-blue-500 p-3 rounded-lg '
          id='username'
          onChange={handleChange}
        />
          <label htmlFor="" className='flex font-semibold'>Email</label>
        <input
          type='email'
          placeholder='Enter Email'
          className='border focus:outline-blue-500 p-3 rounded-lg '
          id='email'
          onChange={handleChange}
        />
          <label htmlFor="" className='flex font-semibold'>Password</label>
        <input
          type='password'
          placeholder='Enter Password'
          className='border focus:outline-blue-500 p-3 rounded-lg '
          id='password'
          onChange={handleChange}
        />
        <button
          disabled={isLoading}
          className='text-white bg-gradient-to-r bg-slate-700 hover:opacity-90 font-medium rounded-lg text-sm px-5 p-3 text-center flex w-full items-center justify-center uppercase font-sans'
        >
          {isLoading ? 'Loading...' : 'Register'}
        </button>
        <OAuth/>
      </form>
      <div className='flex gap-2 mt-2 text-center items-center justify-center'>
        <p className="font-sans">Have an account?</p>
        <Link to={'/login'}>
          <span className='text-blue-700 font-sans text-base'>Sign in</span>
        </Link>
      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  );
}
