module.exports = {
    generate(number, width, height) {
        pointsList = [];
        for (var i = 0; i < number; i++){
            xCoord = Math.floor(Math.random() * Math.floor(width*0.5))+210;
            yCoord = Math.floor(Math.random() * Math.floor(height*0.6)+120);
            pointsList.push({x: xCoord, y: yCoord});
        }
        return pointsList;
    },
    generateGaussian(number, width, height) {
        pointsList = [];
        for (var i = 0; i < number; i++){
            xCoord = Math.floor(this.normalDistribution() * Math.floor(width*0.55))+420;
            yCoord = Math.floor(this.normalDistribution() * Math.floor(height*0.55))+270;
            pointsList.push({x: xCoord, y: yCoord});
        }
        return pointsList;
    },
    normalDistribution (mu = 0, sigma = 0.1) {
        let x, y, r

        do {
        x = Math.random() * 2 - 1
        y = Math.random() * 2 - 1
        r = x * x + y * y
        } while (!r || r > 1)
    
        return mu + sigma * y * Math.sqrt(-2 * Math.log(r) / r)
      }
}