var _ = require('lodash')

export function main($document) {
    var id = String(Math.round(Math.random()*100000))
    return {
        link:link,
        restrict: 'A',
        template: '<canvas id="'+id+'"></canvas>'
    }
    function link(scope, el, attrs) {
        var width = 500
        var height = 500
        var canvas = el.children(id)[0]
        var ctx = canvas.getContext('2d')
        var throttleRender = _.throttle(render, 50)
        canvas.width = width
        canvas.height = height
        ctx.lineWidth = 5
        ctx.rect(0,0,500,500)
        ctx.stroke()

        scope.$watch(attrs.drawPoints, (figure) => {
            if (!!figure) throttleRender(figure)
        }, true)

        function render(figure) {
            figure.map((path) => {
                if (path.length < 1) return
                ctx.beginPath()
                ctx.lineJoin = 'round'
                ctx.lineCap = 'round'
                ctx.moveTo(path[0].x, path[0].y)
                path.map((coord) => ctx.lineTo(coord.x, coord.y))
                ctx.stroke()
                ctx.closePath()
            })
        }
    }
}
