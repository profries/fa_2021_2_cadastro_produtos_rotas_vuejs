const rotas = [
    { path: '/cadastro', component: form_produtos },
    { path: '/lista', component: tabela_produtos },
    //{ path: '/', redirect: '/lista' },
];

const router = new VueRouter({
    routes: rotas
})

const app = new Vue({
    router,
    el: "main",
    created: function(){
        console.log("Iniciando..");
    }

})