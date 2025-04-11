import React, { useState, useEffect } from 'react';

const Support = () => {
  const [helplines, setHelplines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/v1/helplines')
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setHelplines(data.data);
        } else {
          setError('Failed to load helplines');
        }
      })
      .catch((error) => {
        console.error('Error fetching helplines:', error);
        setError(`Error fetching helplines: ${error.message}`);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Support Page</h1>
      <h2>Available Helplines</h2>
      <ul>
        {helplines.map((helpline, index) => (
          <li key={index}>
            <h3>{helpline.name}</h3>
            <p>{helpline.description}</p>
            {helpline.contact?.voice && <p>Voice: {helpline.contact.voice.number}</p>}
            {helpline.contact?.text && <p>Text: {helpline.contact.text.number}</p>}
            {helpline.contact?.email && <p>Email: {helpline.contact.email}</p>}
            {helpline.contact?.onlineSupport && <p>Online Support: <a href={helpline.contact.onlineSupport} target="_blank" rel="noopener noreferrer">Click here</a></p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Support;
