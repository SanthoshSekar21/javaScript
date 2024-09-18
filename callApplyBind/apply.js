//The apply method is similar to call, but it takes an array of arguments instead of listing them individually.
function introduce(greeting, age) {
    console.log(greeting + ', I am ' + this.name + ' and I am ' + age + ' years old.');
}

const person = { name: 'Bob' };

introduce.apply(person, ['Hi', 30]); // Outputs: Hi, I am Bob and I am 30 years old.
