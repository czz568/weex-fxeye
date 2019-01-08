
let stream = weex.requireModule('stream');
export default {
    methods: {
        jump(to) {
            if (this.$router) {
                this.$router.push(to)
            }
        },
        isIpx() {
            return weex && (weex.config.env.deviceModel === 'iPhone10,3' || weex.config.env.deviceModel === 'iPhone10,6');
        },
        GET (api, callback) {
            return stream.fetch({
                method: 'GET',
                type: 'json',
                url: 'http://192.168.1.14:8081/src/assets/data/' + api
            }, callback);
        }

    }
}
