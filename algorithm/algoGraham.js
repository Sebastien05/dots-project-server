const {sortByPixel, crossProduct} = require('./utils.js');

module.exports = function (points) {
    
    if (points.length<4) return points;
    start = new Date().getTime();
    result = sortByPixel(points);
    result = result.res
    for (var i=1; i<result.length+2; i++) {
        p = result[(i-1)%result.length];
        q = result[i%result.length];
        r = result[(i+1)%result.length];
        if (crossProduct(p,q,p,r)>0) {
            result.splice(i%result.length,1);
            if (i==2) i=1;
            if (i>2) i-=2;
        }
    }
    end = new Date().getTime()
    return {points: result, timeExec: end - start};
}