var _ = require('lodash')

export function main($document) {
    return {
        restrict: 'A',
        scope: {
            drawPoints: '=',
        },
        link: link
    }
    function link(scope, el, attrs) {
        var throttledMove = _.throttle(onMousemove, 50)
        var currentPath = []
        el.on('mousedown', (e) => {
            currentPath = []
            scope.drawPoints.push(currentPath)
            el.on('mousemove', throttledMove)
            $document.on('mouseup', onMouseup)
        })

        function onMouseup(e) {
            el.off('mousemove', throttledMove)
            $document.off('mouseup', onMouseup)
        }

        function onMousemove(e) {
            var x = e.pageX - el.prop('offsetLeft')
            var y = e.pageY - el.prop('offsetTop')
            currentPath.push({x: x, y: y})
            scope.$apply(() => scope.drawPoints)
        }
    }


}
