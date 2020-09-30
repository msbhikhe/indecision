console.log('App.js is running');

var template = (
    <div>
        <h1>Indecision App</h1>
        <p>This is paragraph</p>
    </div>
);

var user = {
    name: 'Manpreet',
    age: 27,
    location: 'India'
}

// JSX can render expressions only 
// Eg:     <h1>{user}</h1> is invalid 

var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);
ReactDOM.render(templateTwo, document.getElementById('app'));