export default function(context) {
    context.userAgent = process.server ? context.req && context.req.headers['user-agent'] : navigator.userAgent
    context.aaa = '666'
}
