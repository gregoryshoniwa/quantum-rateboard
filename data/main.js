
const Board = () => import('./pages/board.js');

const routes = [
  
  { path: '/', component: Board }
]

const router = new VueRouter({
  routes 
})



var app = new Vue({
    el: '#app',
    router,
    
    
  })