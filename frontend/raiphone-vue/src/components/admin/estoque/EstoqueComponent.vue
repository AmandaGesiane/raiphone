<template>
  <div>

  <nav class="navbar navbar-expand-lg " id="navbar">
    <div class="container">
      <a class="navbar-brand" @click="$router.push('/admin')">RAIPHONE</a>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" @click="logOutUser">SAIR</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    <!-- <div class="espacamento top">
      <b-input type="search" variant="primary" placeholder="Nome do Usuario"></b-input>
      <b-input type="search" variant="primary" placeholder="Cargo"></b-input>
      <b-input type="search" variant="primary" placeholder="Liberar Modo Administrador? Sim/Não"></b-input>
      <b-button block @click="$router.push('')" variant="primary">CADASTRAR</b-button>
    </div> -->
  </div>
</template>

<script src="./Estoque.js"></script>

<style src="" scoped>
#navbar {
  background-color: #0C0074 !important;
}
</style>
