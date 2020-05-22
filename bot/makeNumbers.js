const parse = (str, normaliseX, normaliseY) => {
  let maxY = 0,
    minY = 0,
    maxX = -1,
    currentX = -1,
    modifier = 0,
    parts = str.split(''),
    series = [];


  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];

    if(part == '[' || part == '(') {
      series.push([]);
      modifier = 0;
      currentX = -1;
      continue;
    }

    if(part == '/') {
      modifier += 1;
      continue;
    }
    
    if(part == '|') {
      modifier -= 1;
      continue;
    }
    
    currentX += 1;

    if(currentX > maxX) {
      maxX = currentX;
    }

    if(i != parts.length - 1 && part == parts[i + 1]) {
      continue;
    }

    if(parts.length - 1 > i + 2  && ( part == '^' || part == '_')) {
      let pattern = part + parts[i + 1] + parts[i + 2];
      if(pattern == '^/_' || pattern == '_|^') {
        continue;
      }
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

    if(y + modifier < minY) {
      minY = y + modifier;
    }

    series[series.length - 1].push({
      x: currentX,
      y: y + modifier
    });
  }
  
  for (let i = 0; i < series.length; i++) {
    const points = series[i];

    series[i] = points.map(({x,y}) => {
      let point = {

        //unadjusted values
        x: x,
        y: y,
        
        //percentage
        px: Math.round(Math.abs(x) / maxX * 100),
        py: Math.round(Math.abs(y) / (Math.abs(minY) + maxY) * 100),

        //normalised
        nx: normaliseX - Math.round(Math.abs(x) / maxX * normaliseX) ,
        ny: normaliseY - Math.round(Math.abs(y) / (Math.abs(minY) + maxY) * normaliseY)
      };

      if(y < 0) point.py = -point.py;
      if(y < 0) point.ny = -point.ny;

      return point;
    });
  }

  return series;
}

const isGraph = (input) => {
  return /((\[|\()[_\-^\/\|]{3,999})+/.test(input);
}

const extract = (input) => {
  if(!input) {
    return {chars: null, text: input}
  }

  let r = /((\[|\()[_\-^\/\|]{3,99999})+/;
  $chars = input.match(r);
  return {
    chars: $chars && $chars[0] || null,
    text: input.replace(r, '').trim()
  }
}

module.exports = {
  parse: parse,
  isGraph : isGraph,
  extract: extract
}
