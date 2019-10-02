var hello ='Hello, world!';
console.log(hello);

document.querySelector('h1').innerText = 'mike'
document.querySelector('h1').style.background = '#ff0000'

//array
let people = [
    { name : 'anton', age : 18 },
    { name : 'mike', age : 27 },
    { name : 'god', age : 100 }
]

//outputs the array on the screen
people.forEach(function(element) {
    console.log(element['name'])
    document.querySelector('#parent').innerHTML += '<p class="title" data-age='+ element.age + '>' + element.name + '</p>' 
});

//outputs the person's age as a popup
document.querySelectorAll('p').forEach(element => {
    element.addEventListener('click',function() {
        alert(element.getAttribute('data-age'))
    })
});

//button popup
document.querySelector('button').addEventListener('click', function() {
    alert('you clicked a button')
})