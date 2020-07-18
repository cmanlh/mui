(async function ($) {
    await $loader.js("resources/vue.js");
    await $loader.js("resources/vue-router.js");
    let _template = await $loader.text("resources/app.html");
    let res = Vue.compile(_template);

    $.$App = new Vue({
        el: '#app',
        template: _template,
        // render: res.render,
        // staticRenderFns: res.staticRenderFns,
        data: {
            menus: [{
                url: "/foo",
                title: "Foo"
            },{
                url: "/todo",
                title: "Todo"
            }],
            currentRoute: window.location.pathname
        },
        router: new VueRouter({
            routes: []
        }),
        computed: {
            // 计算属性的 getter
            reversedMessage: function () {
                // `this` 指向 vm 实例
                return this.message.split('').reverse().join('')
            }
        },
        methods: {
            loadCmp: async function (url) {
                if (this.$router.currentRoute.path == url) {
                    return;
                }
                if (this.$router.matcher.match(url).matched.length <= 0) {
                    await $loader.js('resources'.concat(url).concat('.js'));
                }
                this.$router.push(url);
            }
        }
    });
}(window));