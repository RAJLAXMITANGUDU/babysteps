import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MilestoneForm = ({ milestone, onSave }) => {
    const [title, setTitle] = useState(milestone ? milestone.title : '');
    const [date, setDate] = useState(milestone ? milestone.date : '');
    const [note, setNote] = useState(milestone ? milestone.note : '');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (milestone) {
            await axios.put(`http://localhost:5000/api/milestones/${milestone._id}`, { title, date, note });
        } else {
            await axios.post('http://localhost:5000/api/milestones', { title, date, note });
        }
        onSave();
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md">
            <h2 className="text-lg font-bold mb-2">{milestone ? 'Edit Milestone' : 'Add Milestone'}</h2>
            <input type="text" className="border p-2 mb-2 w-full" placeholder="Milestone Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <input type="date" className="border p-2 mb-2 w-full" value={date} onChange={(e) => setDate(e.target.value)} required />
            <textarea className="border p-2 mb-2 w-full" placeholder="Optional Note" value={note} onChange={(e) => setNote(e.target.value)} />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">{milestone ? 'Update' : 'Add'} Milestone</button>
        </form>
    );
};

export default MilestoneForm;
