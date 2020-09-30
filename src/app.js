console.log('App.js is running');

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer!'
};

var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

// Conditional Rendering
// if statements (using functions)
// ternary operator
// logical operator

var user = {
    name: 'Manpreet',
    age: 27,
    location: 'India'
};

function getLocation(user) {
    if(user.location){
    return <p>Location: {user.location}</p>;
    } else {
        return 'Unknown';
    }
};

var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {user.age >= 18 && <p>Age: {user.age}</p>}
        {getLocation(user)}
        {<p>This is also possible</p>}
    </div>
);
ReactDOM.render(templateTwo, document.getElementById('app'));