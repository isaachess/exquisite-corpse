export function main() {
    return {
        restrict: 'A',
        scope: {
            drawPoints: '=',
        },
        link: link
    }
    function link(scope, el, attrs) {
        el.on('mousemove', (e) => {
            var x = e.pageX - el.prop('offsetLeft')
            var y = e.pageY - el.prop('offsetTop')
            console.log('x', x)
            console.log('y', y)
        })
    }

}
