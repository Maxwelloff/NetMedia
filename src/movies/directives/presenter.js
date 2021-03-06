(function() {
    'use strict';

    angular.module('netMediaApp')
        .directive('youtube', youtube);

    function youtube($sce){
      return {
        restrict: 'EA',
        scope: { code:'=' },
        replace: true,
        template: '<div style="height:400px;"><iframe  width="100%" height="100%" src="{{url}}" frameborder="0" allowfullscreen></iframe></div>',
        link: function (scope) {
            console.log('here');
            scope.$watch('code', function (newVal) {
               if (newVal) {
                   scope.url = $sce.trustAsResourceUrl("http://www.youtube.com/embed/" + newVal);
               }
            });
        }
      };
    }        
}());
