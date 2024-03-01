import { API_URL } from "./../constants";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Select, Skeleton, Space, Spin } from "antd";
import BarChart from './../component/BarChart';
import BusinessInfoCard from './../component/BusinessInfoCard';
import axios from "axios";

const BusinessSuitability = () => {
  const [streetNames, setStreetNames] = useState([]);
  const [streetDetails, setStreetDetails] = useState(null);
  const [suitableBusiness, setSuitableBusiness] = useState(null);
  const [selectedStreet, setSelectedStreet] = useState(null);

  useEffect(() => {
    // Define a function to fetch data from the API
    const fetchStreets = async () => {
      try {
        const response = await axios.get(API_URL + "/street_names");
        setStreetNames(response.data.data.street_names);
        console.log(response.data.data.street_names);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetchStreets function when the component mounts
    fetchStreets();

    // Clean up function to cancel any pending requests
    return () => {
      // Cancel any pending requests here if needed
    };
  }, []); // Empty dependency array to only run the effect once

  // Handle selection change
  const handleSelectChange = (value) => {
    setSelectedStreet(value);

    axios
      .get(API_URL + `/suitable_business_for_a_street?street_name=${value}`)
      .then((response) => {
        setStreetDetails(response.data.data.business_data_by_groups);
        setSuitableBusiness(response.data.data.suitable_business_data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light p-4 rounded">
      <div className="position-absolute start-0 end-0 top-0 text-center mt-3 mb-5 pb-5">
        <Link to="/what-business-to-open" className="btn btn-primary me-5">
          Suitable Business 1
        </Link>
        <Link to="/overall-economic-activities" className="btn btn-primary">Economic Activities</Link>
      </div>
      <div style={{marginTop: '150px'}}>
        {streetNames.length > 0 ? (
          <div style={{ width: "600px", margin: "auto", textAlign: "center" }}>
            <h2>Select a Street</h2>
            <Space wrap>
              <Select
                defaultValue="Select an option"
                style={{
                  width: 500,
                }}
                showSearch
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
                }
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? "")
                    .toLowerCase()
                    .localeCompare((optionB?.label ?? "").toLowerCase())
                }
                onChange={handleSelectChange}
                options={streetNames}
              />
            </Space>
          </div>
        ) : (
          <div className="w-75">
            <Spin tip="Loading Streets">
              <div className="content" />
            </Spin>
          </div>
        )}
      </div>

      {selectedStreet ? (
        streetDetails && suitableBusiness ? (
          <>
            <BarChart data={streetDetails} />
            <BusinessInfoCard data={suitableBusiness} street={selectedStreet} />
          </>
        ) : (
          <>
            <Skeleton active />
            Fetching Details ...
          </>
        )
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default BusinessSuitability;
