/*@author Tushar Borole
 * @description user has to jsut mention the percent, on completion of that percentage scroll; expression will be fired
 * for example <div id="fixed" when-scrolled="loadMore()" percent="70">*/



angular.module('angular-scroll-complete', []).directive('whenScrolled', function () {
    return function (scope, elm, attr) {
        var raw = elm[0];
        var scrollCompleted = true;
        scope.$on('scrollCompleted', function () {
            scrollCompleted = true;

        });
        elm.bind('scroll', function () {
            var remainingHeight = raw.offsetHeight - raw.scrollHeight;
            var scrollTop = raw.scrollTop;
            var percent = Math.abs((scrollTop / remainingHeight) * 100);
            if (percent > attr.percent) {
                if (scrollCompleted) {
                  scrollCompleted = false;
                    scope.$apply(attr.whenScrolled);

                }
            }
        });
    };
});
