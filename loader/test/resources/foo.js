(async function ($) {
    const Foo = {
        template: '<div>Foo</div>',
        
    };
    $.$router.addRoutes([{
        path: '/foo', component: Foo
    }]);
}($App));