import { API_URL } from "./../constants";
import React, { useState, useEffect } from "react";
import { Spin } from "antd";
import BubbleChart from './../component/BubbleChart';
import axios from "axios";
import NavBar from "../component/NavBar";

const EconomicActivity = () => {
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    // Define a function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL + "/economic_activity");
        setResponseData(response.data.data.economic_activities);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetchStreets function when the component mounts
    fetchData();

    // Clean up function to cancel any pending requests
    return () => {
      // Cancel any pending requests here if needed
    };
  }, []); // Empty dependency array to only run the effect once

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light p-4 rounded">
      <NavBar />
      <div style={{marginTop: '50px'}}>
        {responseData ? (
          <div className="bubble-chart" style={{ marginTop: "100px", textAlign: "center" }}>
            <h2>Overview of Economic Activities in Baton Rouge, LA, USA</h2>
            <BubbleChart data={responseData} />
          </div>
        ) : (
          <div className="w-75">
            <Spin tip="Loading Economic Activities">
              <div className="content" />
            </Spin>
          </div>
        )}
      </div>
    </div>
  );
};

export default EconomicActivity;
