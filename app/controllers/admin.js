module.exports.formulario_inclusao_noticia = function(application, req, res) {

    res.render("admin/form_add_noticia", { validacao: {}, noticia : {} });
};

module.exports.noticias_salvar = function(application, req, res) {
    
    var noticia = req.body;

    req.assert('titulo','Título é obrigatório').notEmpty();
    req.assert('resumo','Resumo é obrigatório').notEmpty();
    req.assert('resumo','Resumo deve conter entre 10 e 100 caracteres').len(10,100);
    req.assert('autor','Autor é obrigatório').notEmpty();
    req.assert('data_noticia','Data é obrigatório').notEmpty().isDate({format: 'YYYY-MM-DD'});
    req.assert('noticia','Notícia é obrigatório').notEmpty();

    var errors = req.validationErrors();

    if(errors) {
        
        res.render("admin/form_add_noticia", {validacao : errors, noticia : noticia});
        return;
    }
    
    var connection = application.config.dbConnection();
    var noticiasDAO = new application.app.models.NoticiasDAO(connection);

    noticiasDAO.salvarNoticia(noticia, function(error, result) {
        
        res.redirect('/noticias');
    });
};