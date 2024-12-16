import React, { useEffect, useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import axios from 'axios';
import BackToTop from './BackToTop';


const Waveform = () => {
  const [audio, setAudio] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    totalItems: 0,
    totalPages: 0
  });

  useEffect(() => {
    const fetchAudio = async () => {
      try {
        const { page, limit } = pagination; // Get current page and limit
        const response = await axios.get('https://titoscornerwebservice.onrender.com/api/podcast', {
          params: {
            page,
            limit
          }
        });

        const data = response.data;

        if (data && data.podcasts) {
          setAudio(data.podcasts);
          setPagination(data.pagination); // Set pagination data
        } else {
          console.error('Expected podcasts data but got:', data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchAudio();
  }, [pagination.page, pagination.limit]);

  const handlePageChange = (newPage) => {
    setPagination((prev) => ({
      ...prev,
      page: newPage
    }));
  };

  return (
    <section className="pt-32 flex flex-wrap justify-center">
      {audio.map((audioItem) => (
        <div key={audioItem._id} className="h-auto xl:w-96 lg:w-96 md:w-72 sm:w-80 w-full p-5 rounded-lg mt-2 mx-2" id='back'>
          <h1 className="uppercase font-bold text-white">{audioItem.title}</h1>
          <p className="font-semibold pt-2 text-yellow-500">{audioItem.description}</p>
          <p className="font-semibold pt-2 text-white">{audioItem.producers}</p>
          <ReactAudioPlayer
            src={audioItem.audioUrl}
            type="audio/mpeg"
            controls
            className="pt-3 w-full"
          />
        </div>
      ))}
      
      <div className="pagination mt-5 flex justify-center">
        <button
          onClick={() => handlePageChange(pagination.page - 1)}
          disabled={pagination.page <= 1}
          className="px-4 py-1 bg-gray-300 rounded-lg cursor-pointer"
        >
          Previous
        </button>
        <span className="mx-4">
          Page {pagination.page} of {pagination.totalPages}
        </span>
        <button
          onClick={() => handlePageChange(pagination.page + 1)}
          disabled={pagination.page >= pagination.totalPages}
          className="px-4 py-1 bg-gray-300 rounded-lg cursor-pointer"
        >
          Next
        </button>
      </div>
      <BackToTop />
    </section>
  );
};

export default Waveform;
