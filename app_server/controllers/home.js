var homepageController = function(req,res){
	res.render('index',{title: 'Express'})
};
module.exports.homepage = homepageController;