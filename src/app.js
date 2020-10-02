console.log('App.js is running');

// Conditional Rendering
// if statements (using functions)
// ternary operator
// logical operator

// Challenge 3
// only render subtitle if it exists - logical operator
// if options.length > 0 "Here are your options" else "No Options"

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer!',
    options: ['One', 'Two', 'Three']
};

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
            <li>Item three</li>
        </ol>
    </div>
);



const user = {
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

const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {user.age >= 18 && <p>Age: {user.age}</p>}
        {getLocation(user)}
        {<p>This is also possible</p>}
    </div>
);
ReactDOM.render(template, document.getElementById('app'));