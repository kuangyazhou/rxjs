import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Todo from '@/components/todo';
import Lesson from '@/components/lesson/one';
import Two from '@/components/lesson/two';
import Three from '@/components/lesson/three';

Vue.use(Router)

export default new Router({
  model: history,
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/todo',
      name: 'todo',
      component: Todo
    },
    {
      path: '/lesson',
      name: 'lesson',
      component: Lesson
    }, {
      path: '/two',
      name: 'two',
      component: Two
    },
    {
      path: '/three',
      name: 'three',
      component: Three
    }
  ]
})
