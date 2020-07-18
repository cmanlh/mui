(async function ($) {
    await $loader.js("resources/todoItem.js");
    
    $.$router.addRoutes([{
        path: '/todo', component: {template: await $loader.text("resources/todoLayout.html")}
    }]);

    let _template = await $loader.text("resources/todo.html");
    let res = Vue.compile(_template);
    let Todo = new Vue({
        el:"#todo-list-example",
        template: _template,
        // render: res.render,
        // staticRenderFns: res.staticRenderFns,
        data: {
            newTodoText: '',
            todos: [
                {
                    id: 1,
                    title: 'Do the dishes',
                },
                {
                    id: 2,
                    title: 'Take out the trash',
                },
                {
                    id: 3,
                    title: 'Mow the lawn'
                }
            ],
            nextTodoId: 4
        },
        methods: {
            addNewTodo: function () {
                this.todos.push({
                    id: this.nextTodoId++,
                    title: this.newTodoText
                })
                this.newTodoText = ''
            }
        }
    });
}($App));