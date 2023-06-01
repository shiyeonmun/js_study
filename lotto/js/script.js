let list = [];
let result = [];

for(let i=1; i<=45; i++){
    list.push(i);
}

for(let i = 1; i <=6; i++){

    let index = Math.floor(Math.random() * list.length);

    let num = list[index];
    
    list.splice(index, 1);
    
    result.push(num);
}

for(let i=0; i<6; i++){
    document.write('<span class="ball">' + result[i] + '</span>');
}
