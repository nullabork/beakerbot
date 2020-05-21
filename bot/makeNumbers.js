const main = (str, normaliseX, normaliseY) => {
  let maxY = 0,
    maxX = 0,
    modifier = 0,
    parts = str.split(''),
    points = [];


  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    
    if(part == '/') {
      modifier += 1;
      continue;
    }
    
    if(part == '|') {
      modifier -= 1;
      continue;
    }

    maxX += 1;

    if(i != parts.length - 1 && part == parts[i + 1]) {
      continue;
    }

    let y = 0;
    if(part == '_') {
      y = 0;
    }
    
    if(part == '-') {
      y = 0.5;
    }

    if(part == '^') {
      y = 1;
    }

    if(y + modifier > maxY) {
      maxY = y + modifier;
    }

    points.push({
      x: maxX,
      y: y + modifier
    });
  }

  points = points.map(({x,y}) => {
    return {
      x: Math.round(x / maxX * normaliseX),
      y: Math.round(y / maxY * normaliseY)
    };
  })

  return points;
}

let numbers = main('_-^/_-^/_-^/_-^', 100,100);

console.log(numbers);