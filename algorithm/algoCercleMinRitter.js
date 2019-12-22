const {distanceTo, removePoint} = require('./utils.js');

module.exports = function (pointsList, improve=false) {

    if (pointsList.length<2){
        return null;
    }

    rest  = pointsList.slice(0);
    p = rest[0]; 
    q = rest[1]; 
    start = new Date().getTime();

    if (!improve){
    
        dummy = rest[0];
        for (s in rest) if (distanceTo(dummy, s)>distanceTo(dummy, p)) p = s;
        q = p;
        for (s in rest) if (distanceTo(p, s)>distanceTo(p, q)) q = s;
    
    } else {
        for (s in rest) for (t in rest) if (distanceTo(s,t)>distanceTo(p,q)) {p=s;q=t;}
    }

    cX = (p.x+q.x)/2;
    cY = (p.y+q.y)/2;
    cRadius = distanceTo(p, q)/2;

    rest = removePoint(rest, p);
    rest = removePoint(rest, q);
    
    while (!rest.length <= 0){
        s = rest.splice(0,1)[0];
        distanceFromCToS = Math.sqrt((s.x-cX)*(s.x-cX)+(s.y-cY)*(s.y-cY));
        if (distanceFromCToS<=cRadius) continue;

        cPrimeRadius = .5*(cRadius+distanceFromCToS);
        alpha = cPrimeRadius/(1.0*distanceFromCToS);
        beta = (distanceFromCToS-cPrimeRadius)/(1.0*distanceFromCToS);

        cPrimeX = alpha*cX+beta*s.x;
        cPrimeY = alpha*cY+beta*s.y;
        cRadius = cPrimeRadius;
        
        cX = cPrimeX;
        cY = cPrimeY;
    }
    end = new Date().getTime()
    return {point: {x: cX, y:cY}, rad: cRadius, timeExec: end - start};
}