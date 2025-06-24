import React, { useState, useEffect } from "react";
import axios from "axios";
import MilestoneForm from "./MilestoneForm";

const MilestoneList = () => {
  const [milestones, setMilestones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingMilestone, setEditingMilestone] = useState(null);
  const jwtToken = localStorage.getItem("jwtToken");
  useEffect(() => {
    const fetchMilestones = async () => {
      setLoading(true);
      const response = await axios.get("http://localhost:5000/api/milestones", {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });
      setMilestones(response.data);
      setLoading(false);
    };
    fetchMilestones();
  }, []);

  const handleEdit = (milestone) => {
    setEditingMilestone(milestone);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/milestones/${id}`, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
    setMilestones(milestones.filter((milestone) => milestone._id !== id));
  };

  const handleSave = async () => {
    const response = await axios.get("http://localhost:5000/api/milestones", {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
    setMilestones(response.data);
    setEditingMilestone(null);
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Your Milestones</h2>
      <MilestoneForm milestone={editingMilestone} onSave={handleSave} />
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {milestones.map((milestone) => (
          <li key={milestone._id} className="bg-gray-100 p-4 rounded shadow">
            <h3 className="font-bold">{milestone.title}</h3>
            <p>{new Date(milestone.date).toLocaleDateString()}</p>
            <button
              className="text-blue-500"
              onClick={() => handleEdit(milestone)}
            >
              Edit
            </button>
            <button
              className="text-red-500"
              onClick={() => handleDelete(milestone._id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MilestoneList;
