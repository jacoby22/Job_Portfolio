(function(module) {
  var projectsController = {};

  projectsController.index = function() {
    console.log('projects controller');
  };

  projectsController.error = function() {
    console.log('Site could not be found. Are you connected to the internet?');
  };

  module.projectsController = projectsController;
})(window);
