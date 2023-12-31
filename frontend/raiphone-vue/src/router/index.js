import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../components/auth-components/login/LoginComponent'),
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../components/auth-components/home/HomeComponent'),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../components/auth-components/register/RegisterComponent'),
  },
  {
    path: '/mylist',
    name: 'mylist',
    component: () => import('../components/client_user/list/MyListComponent'),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: '/mycalls',
    name: 'mycalls',
    component: () => import('../components/client_user/calls/MyCallsComponent'),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../components/client_user/contact/ContactComponent'),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: '/myshopping',
    name: 'myshopping',
    component: () => import('../components/client_user/shopping/MyShoppingComponent'),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: '/admin/cadastroproduto',
    name: 'cadastroproduto',
    component: () => import('../components/admin/cadastro/produto/CadastroProdutoComponent'),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: '/admin/cadastrousuario',
    name: 'cadastrousuario',
    component: () => import('../components/admin/cadastro/usuario/CadastroUsuarioComponent'),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: '/admin/estoque',
    name: 'estoque',
    component: () => import('../components/admin/estoque/EstoqueComponent'),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: '/admin/vendas',
    name: 'vendas',
    component: () => import('../components/admin/vendas/VendasComponent'),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: '/admin',
    name: 'adminhome',
    component: () => import('../components/admin/home/AdminHomeComponent'),
    meta: {
      requireAuth: true,
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

// Lógica inerente ao NProgress
router.beforeResolve((to, from, next) => {
  // Se caso não for uma página inicial de carregamento
  if (to.name) {
    // Quando houver carregamento de uma página inicial, então usar o NProgress:
    NProgress.start();
  }
  next();
});

// Lógica inerente ao realizar o 'Log out' remover o token no local Storage:
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requireAuth)) {
    if (localStorage.getItem('jwt') == null) {
      next({
        path: '/',
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

router.afterEach((to, from) => {
  // Completando a animação da rota no NProgress
  NProgress.done();
});

export default router;
