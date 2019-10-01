var hello ='Hello world';

console.log(hello);

function foo(name){
    console.log(name)
}

foo('mike');

function getName(x) {
    x.name = 'john'
    return x.name
}

var person = {
    name: 'mike',
    age : 27,
    child: {
        name: 'bob'
    }
}

console.log(person.name) // mike

let result = getName(person)

console.log(result) // ? john
console.log(person.name) // ? john
console.log('')


document.querySelector('h1').innerText = 'mike'
document.querySelector('h1').style.background = '#ff0000'
//alert('hello') //popup

let people = [
    { name : 'antonnnnn', age : 18 },
    { name : 'mike', age : 27 },
    { name : 'god', age : 100 }
]

//console.log(people[1])

people.forEach(function(element) {

    console.log(element['name'])
    document.querySelector('#parent').innerHTML += '<p data-age='+ element.age + '>' + element.name + '</p>'
});


document.querySelector('button').addEventListener('click', function() {
    alert('you clicked a button')
})



// [EXERCISE] - Create an array of objects containing a name and age.
// Output each persons name in a <p> with their age as a data attribute.