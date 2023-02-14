const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/javascriptNote', {
}).then(() => console.log('Connection succesful'))
.catch((err) => console.log(err));
