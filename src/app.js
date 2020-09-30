console.log('App.js is running');

var template = (
    <div>
        <h1>Indecision App</h1>
        <p>This is paragraph</p>
    </div>
);

var templateTwo = (
    <div>
        <h1>Manpreet</h1>
        <p>Age: 27</p>
        <p>Location: India</p>
    </div>
);
ReactDOM.render(templateTwo, document.getElementById('app'));