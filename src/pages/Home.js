import { API_URL } from "./../constants";
import React, { useState, useEffect } from "react";
import { Spin } from "antd";
import axios from "axios";

import NavBar from './../component/NavBar';

const Home = () => {
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    // Define a function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        setResponseData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();

    // Clean up function to cancel any pending requests
    return () => {
      // Cancel any pending requests here if needed
    };
  }, []); // Empty dependency array to only run the effect once

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light p-4 rounded">
        <NavBar />
      {responseData ? (
        <div>
          <h2 className="text-center mb-4">Data from DB</h2>
          <div className="text-center">
            <p className="mb-2">Status: {responseData.status}</p>
            <p>Total Records: {responseData.total_records}</p>
          </div>
        </div>
      ) : (
        <Spin tip="Loading" size="large">
          <div className="content" />
        </Spin>
      )}
    </div>
  );
};

export default Home;
