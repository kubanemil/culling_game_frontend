import React, { useState } from 'react';
import axios from 'axios';

const CreateCardPage: React.FC = () => {
    const [name, setName] = useState('');
    const [points, setPoints] = useState(0);
    const [image, setImage] = useState('');
    const [actionId, setActionId] = useState('');
    const [grade, setGrade] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/api/cards/', {
                name,
                points,
                image,
                action_id: actionId,
                grade,
            }, { withCredentials: true });

            console.log(response.data); // Handle the response as needed
        } catch (error) {
            console.error(error); // Handle the error as needed
        }
    };

    return (
        <div>
            <h1>Create Card</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <br />
                <label>
                    Points:
                    <input type="number" value={points} onChange={(e) => setPoints(Number(e.target.value))} />
                </label>
                <br />
                <label>
                    Image:
                    <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
                </label>
                <br />
                <label>
                    Action ID:
                    <input type="text" value={actionId} onChange={(e) => setActionId(e.target.value)} />
                </label>
                <br />
                <label>
                    Grade:
                    <input type="text" value={grade} onChange={(e) => setGrade(e.target.value)} />
                </label>
                <br />
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default CreateCardPage;