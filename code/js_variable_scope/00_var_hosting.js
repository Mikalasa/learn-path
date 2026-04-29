for (var i = 0; i < 5; i++) {
    console.log(i)
}

for (var i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i)
    })
}

var fns = [];

for (var i = 0; i < 5; i++) {
    fns.push(() => console.log(i));
}

fns.forEach(fn => fn());