 (function(module) {
   var portfolio = {};

   portfolio.selectNav = function() {
     $('.navigation').on('click', '.tab', function() {
       console.log($(this).data('content'));
       var $selectedTab = $(this).data('content');
       $('.tab-content').hide();
       $('#' + $selectedTab).fadeIn(250);
     });
   };

   portfolio.showIndex = function() {
     portfolio.selectNav();
   };

   portfolio.selectNav();

   console.log('loaded');

   module.portfolio = portfolio;
 })(window);
