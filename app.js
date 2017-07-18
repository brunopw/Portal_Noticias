var app = require('./config/server');

//Routes Manual
//var rotaHome = require('./app/routes/home')(app);
//var rotaNoticias = require('./app/routes/noticias')(app);
//var rotaFormAddNoticia = require('./app/routes/form_add_noticia')(app);

//Start Server
app.listen(3000, function() {
    console.log("Servidor Online!");
});