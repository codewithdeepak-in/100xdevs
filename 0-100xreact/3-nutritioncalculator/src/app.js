import React, { useState } from 'react';

const App = () => {
    const [food, setFood] = useState({
        name: "",
        protein: "",
        carbs: "",
        fat: "",
        calories: "",
    });
    const [allfood, setAllFood] = useState([]);

    const handleChange = (event) => {
        setFood({
            ...food,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!food.name || !food.protein || !food.carbs || !food.fat || !food.calories) {
            alert("Please fill in all fields.");
            return;
        }
        setAllFood(prevFood => [...prevFood, food]);
        setFood({
            name: "",
            protein: "",
            carbs: "",
            fat: "",
            calories: "",
        });
    };

    return (
        <div>
            <h1>GeeksforGeeks Nutrition Meter</h1>
            <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder='Item Name' style={{ marginBottom: '10px', height: '30px' }} onChange={handleChange} value={food.name}/>
                <input type="number" name='protein' placeholder='Protein' style={{ marginBottom: '10px', height: '30px' }} onChange={handleChange} value={food.protein}/>
                <input type="number" name='carbs' placeholder='Carbs' style={{ marginBottom: '10px', height: '30px' }} onChange={handleChange} value={food.carbs}/>
                <input type="number" name='fat' placeholder='Fat' style={{ marginBottom: '10px', height: '30px' }} onChange={handleChange} value={food.fat}/>
                <input type="number" name='calories' placeholder='Calories' style={{ marginBottom: '10px', height: '30px' }} onChange={handleChange} value={food.calories   }/>
                <button type="submit">Submit</button>
            </form>
            {allfood.map((item, index) => (
                <div key={index}>
                    <h4>Name: {item.name}</h4>
                    <p>Protein: {item.protein}</p>
                    <p>Carbs: {item.carbs}</p>
                    <p>Fat: {item.fat}</p>
                    <p>Calories: {item.calories}</p>
                </div>
            ))}
        </div>
    );
};

export default App;
