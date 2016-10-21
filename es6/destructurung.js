function b ([name, val]) {
    return [name, val]
}


function f ({ name, slay }) {
    return [name, slay]
}

b([  // => ['name', 'value']
    'name',
    'slay'
])


let list = [1, 2, 3, 4]

let [i = 12, j = 13, k = 14] = list

console.log(i, j, k);




