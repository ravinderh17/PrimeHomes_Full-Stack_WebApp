import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Contact({ listing }) {
  const [landlord, setLandlord] = useState(null); // State to store landlord information
  const [message, setMessage] = useState(''); // State to store the message

  // Function to update message state
  const onChange = (e) => {
    setMessage(e.target.value);
  };

  // useEffect hook to fetch landlord information when the component mounts or listing.userRef changes
  useEffect(() => {
    const fetchLandlord = async () => {
      try {
        // Fetch landlord information from API using listing.userRef
        const res = await fetch(`/api/user/${listing.userRef}`);
        const data = await res.json();
        setLandlord(data); // Update landlord state with fetched data
      } catch (error) {
        console.log(error);
      }
    };
    fetchLandlord();
  }, [listing.userRef]); // Dependency array ensures useEffect runs when listing.userRef changes

  return (
    <>
      {landlord && ( // Conditional rendering when landlord data is fetched
        <div className='flex flex-col gap-2'>
          <p>
            Contact <span className='font-semibold'>{landlord.username}</span>{' '}
            for{' '}
            <span className='font-semibold'>{listing.name.toLowerCase()}</span>
          </p>
          <textarea
            name='message'
            id='message'
            rows='2'
            value={message}
            onChange={onChange}
            placeholder='Enter your message here...'
            className='w-full border p-3 rounded-lg'
          ></textarea>

          {/* Link component to send email */}
          <Link
            to={`mailto:${landlord.email}?subject=Regarding ${listing.name}&body=${message}`}
            className='bg-slate-700 text-white text-center p-3 uppercase rounded-lg hover:opacity-95'
          >
            Send Message
          </Link>
        </div>
      )}
    </>
  );
}

Contact.propTypes = {
  listing: PropTypes.shape({
    userRef: PropTypes.string.isRequired, // Example of PropTypes validation
    name: PropTypes.string.isRequired,   // You can adjust according to your actual prop types
  }).isRequired,
};
