console.log('App.js is running');

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer!',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
    
    if(option){
        app.options.push(option);
    }
    
    e.target.elements.option.value = '';
    
    renderApp();

};

const removeAll = () => {
    app.options = [];
    renderApp();
};

const pickOption = () => {
    const index = Math.floor(Math.random() * app.options.length);
    alert(app.options[index]);
};

// JSX arrays require a key attribute so that react can diff and manage parts for re-rendering
const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
            <button disabled={app.options.length === 0} onClick={pickOption}>What should i do ?</button>
            <button onClick={removeAll}>Remove All</button>
            <ol>
                {
                    app.options.map((option, index) => <li key={index}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add option</button>
            </form>
        </div>
    );
    
    ReactDOM.render(template, document.getElementById('app'));
};

renderApp();