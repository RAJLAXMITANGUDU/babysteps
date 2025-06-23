import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Tips = ({ milestoneId }) => {
    const [tips, setTips] = useState([]);
    const [content, setContent] = useState('');

    useEffect(() => {
        const fetchTips = async () => {
            const response = await axios.get(`http://localhost:5000/api/milestones/${milestoneId}/tips`);
            setTips(response.data);
        };
        fetchTips();
    }, [milestoneId]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post(`http://localhost:5000/api/milestones/${milestoneId}/tips`, { content });
        setContent('');
        // Re-fetch tips after adding a new one
        const response = await axios.get(`http://localhost:5000/api/milestones/${milestoneId}/tips`);
        setTips(response.data);
    };

    return (
        <div>
            <h3>Community Tips</h3>
            <form onSubmit={handleSubmit}>
                <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Share your tip..." required />
                <button type="submit">Submit Tip</button>
            </form>
            <ul>
                {tips.map(tip => (
                    <li key={tip._id}>
                        {tip.content} - {tip.likes} Likes
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Tips;
