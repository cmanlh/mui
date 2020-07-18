(async function ($) {
  let _template = await $loader.text("resources/todoItem.html");
  let res = Vue.compile(_template);

  Vue.component('todo-item', {
    template: _template,
    props: ['title']
  });
}($App));

