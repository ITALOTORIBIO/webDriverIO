const Page = require('./page');

class HomePage extends Page {
   
    get navParallel() {
        return $('#parallelExperiments');
    }

    get btnProducto(){
        return $('#create-dropdown');
    }

    get btnFavorites(){
        return $('.button-link=Favorites');
    }
}

module.exports = new HomePage();
