import React from 'react'
import { useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaCloudRain } from "react-icons/fa6";

export const Rainfall = () => {

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [output, setOutput] = useState('');

  const handleFetch = async () => {
    try {
      const response = await fetch('/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ latitude, longitude, start_date: startDate, end_date: endDate }),
      });

      const data = await response.json();

      if (data.error) {
        setOutput(`<p>Error: ${data.error}</p>`);
      } else {
        let outputHtml = '<h3>Predicted Rainfall</h3>';
        data.forEach((item) => {
          outputHtml += `<p>Date: ${item.time}, Predicted Rain Sum (mm): ${item['predicted_rain_sum (mm)']}</p>`;
        });
        setOutput(outputHtml);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
      <div className='bg-cover bg-center h-screen w-full flex items-center ' style={{backgroundImage:"url('/public/images/ai-generated-dark-sky-and-clouds-background-storm-time-dark-thunderstorm-free-photo.jpeg')"}}>
     <div className='h-[33rem] w-[25rem] border mx-auto border-gray-200 backdrop-blur-3xl rounded-xl'>
      <h1 className='text-2xl mt-2 text-center text-[white]'>Rainfall Prediction</h1>
    <div className="max-w-lg mx-auto p-4">
      <div className="form-group">
        <label htmlFor="latitude" className='text-[white]'>Latitude</label>
        <input
          id="latitude"
          type="text"
          className="w-full p-2 mt-2 border border-gray-300 rounded-md"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="longitude" className='text-[white]'>Longitude</label>
        <input
          id="longitude"
          type="text"
          className="w-full p-2 mt-2 border border-gray-300 rounded-md"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="start_date" className='text-[white]'>Start Date</label>
        <input
          id="start_date"
          type="date"
          className="w-full p-2 mt-2 border border-gray-300 rounded-md"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="end_date" className='text-[white]'>End Date</label>
        <input
          id="end_date"
          type="date"
          className="w-full p-2 mt-2 border border-gray-300 rounded-md"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>
      <button
        onClick={handleFetch}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Fetch Prediction
      </button>
      <div id="output" className="mt-4" dangerouslySetInnerHTML={{ __html: output }}></div>
    </div>
    </div>
    </div>

  );
}



