<b-input type="search" variant="primary" placeholder="Unidades"></b-input><template>
  <div>
    <NavbarComponent></NavbarComponent>
    <div class="espacamento top">
      <p>Registro de Vendas</p>
      <b-input type="search" variant="primary" placeholder="Nome do Produto"></b-input>
        <b-input type="search" variant="primary" placeholder="Código de Verificação"></b-input>
        <b-input type="search" variant="primary" placeholder="Unidades"></b-input>
        <b-input type="search" variant="primary" placeholder="Nome Comprador"></b-input>
        <b-input type="search" variant="primary" placeholder="CNPJ/CPF"></b-input>
        <b-input type="search" variant="primary" placeholder="Endereço"></b-input>
        <b-button block @click="$router.push('')" variant="primary">Registrar Venda</b-button>
        <b-button block @click="$router.push('')" variant="primary">Emitir Comprovante em PDF</b-button>
    </div>

    <div class="espacamento top">
      <p>Historico de Vendas</p>
    </div>

  </div>
</template>

<script>
import NavbarComponent from '../components/navbar.vue'
  export default {
    name: 'IndexPage',
    components: {
      NavbarComponent
    }
  }
</script>

<style>
.espacamento{
  margin-top: 10%;
  margin-left: 10%;
  margin-right: 10%;
}
.top{
  margin-top: 12.5%;
}
.titulo{

  font-size: 36px;
  line-height: 44px;
  /* display: flex; */
  align-items: center;
  text-align: center;
  color: #000000;
}
botao{
  position: absolute;
  width: 546.21px;
  height: 52.89px;
  left: 68.79px;
  top: 550.73px;
  background: #0C0074 !important;
  border-radius: 8px;
}
</style>
