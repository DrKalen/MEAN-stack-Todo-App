var configValues = require('./config');

module.exports = {

    getDbConnectionString: function() {
        return 'mongodb://' + configValues.uname + ':' + 
        configValues.pwd +
        '@ds131329.mlab.com:31329/nodetodokh';
    }
}