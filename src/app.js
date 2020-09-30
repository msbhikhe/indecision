console.log('App.js is running');

//Create app object title/subtitle
//user title/subtitle in template

var template = (
    <div>
        <h1>Indecision App</h1>
        <p>This is some info</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

var user = {
    name: 'Manpreet',
    age: 27,
    location: 'India'
}

var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);
ReactDOM.render(templateTwo, document.getElementById('app'));