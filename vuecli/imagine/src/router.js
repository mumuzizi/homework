import Vue from 'vue'
import Router from 'vue-router'
import Error from './views/404.vue'
import Movie from './views/movie/Movie.vue'
import MovieDetail from './views/movie/MovieDetail.vue'
import Music from './views/music/Music.vue'
import Photo from './views/photo/Photo.vue'
import Book from './views/book/Book.vue'
import MusicDetail from './views/music/MusicDetail.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      name: 'movie',
      component:Movie,
    },
    {
      path: '/photo',
      name: 'photo',
      component: Photo
    },
    {
      path: '/book',
      name: 'book',
      component: Book
    },
    {
      path: '/music',
      name: 'music',
      component: Music
    },
    {
      path: '/musicdetail',
      name: 'musicdetail',
      component: MusicDetail
    },
    {
      path: '/moviedetail',
      name: 'moviedetail',
      component:MovieDetail
    },
    {
      path:'*',
      component:Error,
    }
  ]
})
