console.log('APP.js is running');

var app = {
    title:'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
};

//JSX - Javascript XML
var template = (
<div>
    <h1>{app.title}</h1>
    {(app.subtitle) && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    <ol>
        <li>fus</li>
        <li>ro</li>
        <li>dah</li>
    </ol>
</div>
);

var user = {
    name: 'Alan',
    age: '36',
    isLoggedIn: false,
    location: 'Sheff'
}; 

function getLocation(location){
if (location){
    return <p>Location: {location}</p>
    }
};

var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1> {/* ternary operator jsx epxpression not function so can be used inline. if user.name set return*/} 
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>} {/* && if the condition is true, the element right after && will appear in the output. If it is false, React will ignore and skip it. */}
        {getLocation(user.location)} {/* this wont render if returns undefined from getLocation */}
    </div>
)

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);