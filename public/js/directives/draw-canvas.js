export function main($document) {
    return {
        restrict: 'A',
        scope: {
            drawPoints: '=',
        },
        link: link
    }
    function link(scope, el, attrs) {
        el.on('mousedown', (e) => {
            el.on('mousemove', onMousemove)
            $document.on('mouseup', onMouseup)
        })

        function onMouseup(e) {
            el.off('mousemove', onMousemove)
            $document.off('mouseup', onMouseup)
        }

        function onMousemove(e) {
            var x = e.pageX - el.prop('offsetLeft')
            var y = e.pageY - el.prop('offsetTop')
            console.log('x', x)
            console.log('y', y)
        }
    }


}
