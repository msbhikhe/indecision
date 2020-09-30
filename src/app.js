console.log('App.js is running');

//Create app object title/subtitle
//user title/subtitle in template

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

var user = {
    name: 'Manpreet',
    age: 27,
    location: 'India'
};

var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);
ReactDOM.render(template, document.getElementById('app'));