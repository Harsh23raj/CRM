import React, { useState } from "react";
import axios from "axios";

const SegmentForm = () => {
  const [filters, setFilters] = useState([]);
  const [name, setName] = useState("");

  const handleAddFilter = () => {
    setFilters([...filters, { field: "", operator: "", value: "" }]);
  };

  const handleSubmit = async () => {
    const response = await axios.post("http://localhost:5000/api/segments", {
      name,
      filters,
    });
    console.log(response.data);
  };

  return (
    <div>
      <h1>Create Audience Segment</h1>
      <button onClick={handleAddFilter}>Add Filter</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default SegmentForm;
