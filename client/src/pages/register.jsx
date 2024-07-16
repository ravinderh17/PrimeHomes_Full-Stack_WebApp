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
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-slate-500 text-center font-semibold mt-7 font-sans'> Get Started</h1>
      <span className="text-sm flex items-center justify-center mt-2 text-slate-500 mb-6">Enter credentials to create an account. </span>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 font-sans'>
        <input
          type='text'
          placeholder='Enter Username'
          className='border p-3 rounded-lg'
          id='username'
          onChange={handleChange}
        />
        <input
          type='email'
          placeholder='Enter Email'
          className='border p-3 rounded-lg'
          id='email'
          onChange={handleChange}
        />
        <input
          type='password'
          placeholder='Enter Password'
          className='border p-3 rounded-lg'
          id='password'
          onChange={handleChange}
        />
        <button
          disabled={isLoading}
          className='text-white bg-gradient-to-r bg-green-700 hover:opacity-90 font-medium rounded-lg text-sm px-5 p-3 text-center flex w-full items-center justify-center uppercase font-sans'
        >
          {isLoading ? 'Loading...' : 'Register'}
        </button>
        <OAuth/>
      </form>
      <div className='flex gap-2 mt-5'>
        <p className="font-sans">Have an account?</p>
        <Link to={'/login'}>
          <span className='text-blue-700 font-sans text-base'>Sign in</span>
        </Link>
      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  );
}
