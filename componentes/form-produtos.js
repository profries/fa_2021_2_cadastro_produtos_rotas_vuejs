const form_produtos = Vue.component('form-produtos', {
    data: function() {
        return {
            produto: {}
        }
    },
    methods: {
        cadastrar: function() {
            APIinserirProduto(this.produto, (prod) => {
                this.produto = {};
            });
        }
    },
    template: `
    <div id="formulario">
        <label for="nome">Nome: </label>
        <input id="nome" v-model="produto.nome"> <br />
        <label for="preco">Preco: </label>
        <input type="number" id="preco" v-model="produto.preco"> <br />
        <button @click="cadastrar">Salvar</button> <br />
    </div>
    `
})