import Vue from 'vue';
import Router from 'vue-router';
import login from '@/components/common/login';
import Home from '@/components/common/Home';

import DashBoard from '@/components/page/DashBoard';
import equipment from '@/components/page/equipment';
import FormLayouts from '@/components/page/FormLayouts';
import BasicTables from '@/components/page/BasicTables';
import customer from '@/components/page/customer';
import organization from '@/components/page/organization';
import space from '@/components/page/space';
import member from '@/components/page/member';

import usermgt from '@/components/page/usermgt';

import tests from '@/components/page/tests';



Vue.use(Router)

export default new Router({
mode:'hash',
  base:__dirname,
  routes: [
    {
      path: '/',
      component: Home,
      children:[
        {
        	 path:'',
          component:DashBoard
        },
        {
          path: '/DashBoard', 
          component: DashBoard
    		},{
          path: '/customer', 
          component: customer
    		},{
          path: '/organization', 
          component: organization
    		},{
          path:'/equipment',
          component:equipment
        },{
          path:'/FormLayouts',
          component:FormLayouts
        },{
          path:'/BasicTables',
          component:BasicTables
        },{
          path:'/space',
          component:space
        },{
          path:'/member',
          component:member
        },
        {
          path:'/usermgt',
          component:usermgt
        },{
        	path:'/tests',
          component:tests
        }
 
      ]
    }
  ]
})

