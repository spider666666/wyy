import HomeView from "@/components/HomeView.vue"
import NewView from '@/components/NewView.vue'
import HotView from '@/components/HotView.vue'

const routes = [ 
{
  path: '/home',
  name: 'home',
  component: HomeView,
},
{
  path: '/news',
  name: 'news',
  component: NewView,
  child:[
    {
      path: 'hot',
      name: 'hot',
      component: HotView,
    },
  ]
},
{
  path: '/me',
  name: 'me',
  component: HomeView,
},
]
export default routes;

