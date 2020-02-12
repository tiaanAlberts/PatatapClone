const express = require('express'),
app = express();

var port = process.env.PORT || 3000,
ip = process.env.IP;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, ip, () => {
    console.log('Server is running on port: ' + port);
});