import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Ebook = () => {
  const [ebooks, setEbooks] = useState([]); // Stores the eBooks
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    totalItems: 0,
    totalPages: 0
  });

  useEffect(() => {
    const fetchEbooks = async () => {
      try {
        const { page, limit } = pagination; // Get current page and limit from state
        const response = await axios.get('https://titoscornerwebservice.onrender.com/api/books', {
          params: {
            page,
            limit
          }
        });

        const data = response.data;

        if (data && data.ebooks) {
          setEbooks(data.ebooks); // Update state with eBooks
          setPagination(data.pagination); // Update state with pagination info
        } else {
          console.error('Expected ebooks data but got:', data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchEbooks(); // Fetch data when the component mounts or when pagination changes
  }, [pagination.page, pagination.limit]); // Re-fetch when page or limit changes

  // Function to handle page change
  const handlePageChange = (newPage) => {
    setPagination((prev) => ({
      ...prev,
      page: newPage
    }));
  };

  return (
    <section className="pt-24 flex flex-wrap justify-center gap-8">
      {ebooks.map((book) => (
        <div 
          key={book.id} 
          className="w-full sm:w-10/12 md:w-5/12 xl:w-1/4 p-8 rounded-lg shadow-lg" 
          data-aos="fade-up" 
          data-aos-duration="3000"
          id='back'
        >
          <div className="flex flex-col items-center">
            <img src={book.imageUrl} className="w-44 xl:w-60" loading="lazy" alt="cover" />
            <div className="pt-3 text-center">
              <h1 className="font-bold text-xl uppercase text-white">{book.title}</h1>
              <p className="text-sm pt-1 text-white">{book.description}</p>
              <p className="text-sm pt-1 text-yellow-500"># {book.price}</p>
              <p className="text-sm pt-1 text-white">{book.pages} pages</p>
              <button className="bg-yellow-500 px-4 py-2 border-2 border-red-500 rounded-xl mt-2 text-white hover:bg-red-500 transition duration-300 ease-in-out">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Pagination Controls */}
      <div className="pagination mt-5 flex justify-center">
        {/* Previous Page Button */}
        <button
          onClick={() => handlePageChange(pagination.page - 1)}
          disabled={pagination.page <= 1}
          className="px-4 py-2 bg-gray-300 rounded-lg cursor-pointer"
        >
          Previous
        </button>

        {/* Page Number */}
        <span className="mx-4">
          Page {pagination.page} of {pagination.totalPages}
        </span>

        {/* Next Page Button */}
        <button
          onClick={() => handlePageChange(pagination.page + 1)}
          disabled={pagination.page >= pagination.totalPages}
          className="px-4 py-2 bg-gray-300 rounded-lg cursor-pointer"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Ebook;
