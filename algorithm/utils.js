module.exports = {
    distanceTo: function (dot1, dot2) {
        return Math.sqrt(Math.pow(dot2.x - dot1.x, 2) + Math.pow(dot2.y - dot1.y, 2))
    },
    crossProduct: function (p, q, s, t) {
        return ((q.x-p.x)*(t.y-s.y)-(q.y-p.y)*(t.x-s.x));
    },
    sortByPixel: function(points) {
        
        if (points.length<4) return points;
        
        maxX = points[0].x;
        for (var i = 0; i<points.length; i++) if (points[i].x > maxX) maxX = points[i].x;
        
        maxY = []; minY = [];
        for (var i = 0; i < maxX+1; i++){
            maxY.push(null);
            minY.push(null);
        }
        for (var i = 0; i<points.length; i++) {
            p = points[i]
            if (maxY[p.x]==null||p.y>maxY[p.x].y) {
                maxY[p.x]=p;
            }
            if (minY[p.x]==null||p.y<minY[p.x].y){
                minY[p.x]=p;
            }
        }

        result = []; resultH = []; resultD = [];
        for (var i = 0; i < maxX+1; i++){
            if (maxY[i]!=null){
                result.push(maxY[i]);
                resultH.push(maxY[i]);
            }
        }
        for (var i = maxX; i >= 0; i--) {
            if (minY[i]!=null && !module.exports.equalPoint(result[result.length-1], minY[i])){
                result.push(minY[i]); 
                resultD.push(minY[i]);
            }
        }
        if (module.exports.equalPoint(result[result.length-1], result[0])) result.splice(result.length-1,1);
        return {res: result, resH: resultH, resD: resultD};
    },
    equalPoint: function (dot1, dot2) {
        return dot1.x == dot2.x && dot1.y == dot2.y; 
    },
    removePoint: function (dots, dot1) {
        return dots.filter(function (value, index, arr) {
            return (value.x != dot1.x && value.y != dot1.y);
        });
    },
}