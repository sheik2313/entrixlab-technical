
import React, { useState } from 'react';
import './cityname.css'

function Cityname() {
    const [city, setCity] = useState('');
    const [citytask, setCitytask] = useState([]);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setCity(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const trimmedCity = city.trim();

        if (!trimmedCity) {
            setError('already added');
            return;
        }

        if (citytask.includes(trimmedCity)) {
            setError('City already added.');
            return;
        }

        setCitytask([...citytask, trimmedCity]);
        setCity('');
        setError('');
    };

    return (
        <div  className='fullbg'>
            <div className='firstdiv'>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text' 
                    placeholder='Enter city name' 
                    value={city} 
                    onChange={handleChange} 
                />
                <button className='addbutton' type='submit'>
                    Add City
                </button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div>
                <ul>
                    {citytask.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            </div>
        </div>
    );
}

export default Cityname;
