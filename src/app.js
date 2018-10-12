console.log('APP.js is running');

var app = {
    title:'Indecision App',
    subtitle: 'Suck mah balls'
}
//JSX - Javascript XML
var template = (
<div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <ol>
        <li>fus</li>
        <li>ro</li>
        <li>dah</li>
    </ol>
</div>
);


var user = {
    name: 'Alan',
    Age: '36',
    Location: 'Sheffield'
}
var userName = 'Bob';
var userAge = '99'
var userLocation = 'Manchester'
var templateTwo = (
    <div>
        <h1>{user.name + '!'}</h1>
        <p>Age: {user.Age}</p>
        <p>Location: {user.Location}</p>
    </div>
)

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);