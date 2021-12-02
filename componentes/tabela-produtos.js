const tabela_produtos = Vue.component('tabela-produtos', {
    props:['produtos'],
    mounted() {
        APIlistarProdutos((data) => this.produtos = data);
    }, 
    template: '<div id="tabela">\
    <table v-if="produtos.length > 0">\
        <tr>\
            <th>ID</th>\
            <th>NOME</th>\
            <th>PRECO</th>\
        </tr>\
        <tr v-for="produto of produtos">\
            <td>{{produto.id}}</td>\
            <td>{{produto.nome}}</td>\
            <td>{{produto.preco}}</td>\
        </tr>\
    </table>\
    <h4 v-else>Não há dados na lista de produtos!</h4>\
</div>'
})