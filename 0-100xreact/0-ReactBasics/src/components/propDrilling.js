import React, {useState, useEffect} from 'react';


const PropsComponent = () => {
    let name = {
        name: "Deepak Chaudhary",
        age: 21,
        location: "India"
    };
    let place = {
        city: "Bangalore",
        state: "Karnataka"
    };
    
    return(
        <div>
            <PropChild name={name} place={place}/>
        </div>
    )
}

const PropChild = ({name, place}) => {
    return(
        <div>
            <em>{name.name}</em> <br />
            <em>{name.age}</em> <br />
            <em>{name.location}</em> <br />
            <em>{place.city}</em>
            <ChildofChild name={name}/>
        </div>
    )
}

const ChildofChild = ({name}) => {
    return(
        <div>
            <em>{name.name}</em> <br />
            <em>{name.age}</em> <br />
            <em>{name.location}</em>
        </div>
    )

}

// small project on prop drilling
const Time = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() =>{
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    },[])

    return (
        <div>
            <h1>{time.toLocaleTimeString()}</h1>
        </div>
    );
}

const SmallProject = () => {
    const [chooseColor, setChooseColor] = useState(null);
    const [currentTime, setCurrentTime] = useState(new Date());

    function handleChange(e) {
        setChooseColor(e.target.value);
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []); // Empty dependency array ensures that this effect runs only once after the initial render

    return (
        <div>
            <select onChange={handleChange} className='form-control'>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="orange">Orange</option>
            </select>
            <SelectColor color={chooseColor} currentTime={currentTime} />
        </div>  
    );
}

const SelectColor = ({ color, currentTime }) => {
    return (
        <div style={{ color: color }}>
            {currentTime.toLocaleTimeString()}
        </div>
    );
}

const arrayOfObject = [
    {
        name: "Deepak",
        age: 21,
        location: "India",
        image: 'https://www.bing.com/th?id=OIP.hqgXmy-r13g-63xcvlz6AwHaE7&w=148&h=100&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'
    },
    {
        name: "Piyush Singh",
        age: 24,
        location: "Noida",
        image: 'https://th.bing.com/th/id/OIP.D78FWJiiRHcoc4Rx2h0K1QAAAA?w=435&h=558&rs=1&pid=ImgDetMain'
    },
    {
        name: "Harshit Singh",
        age: 21,
        location: "Barellie",
        image: 'https://th.bing.com/th/id/OIP.7cspJH_UKg53XuMy7XXs4gHaFj?w=750&h=563&rs=1&pid=ImgDetMain'
    }
]

const ImageShowCase = () => {
    return (
        <div style={{display: 'flex'}}>
            {arrayOfObject.map((item, index) => {
                return (
                    <div key={index}>
                        <img src={item.image} alt={item.name} style={{height: '100px', width: '100px'}}/>
                        <p>{item.name}</p>
                        <p>{item.age}</p>
                        <p>{item.location}</p>
                    </div>
                )
            })}
        </div>
    )
}


export  {PropsComponent, Time, SmallProject, ImageShowCase };