import Vue from 'vue'
import Router from 'vue-router'
import count from '@/components/count'
import HelloWorld from '@/components/HelloWorld'
import passwordinput from '@/components/common/passwordinput'
import home from '@/components/view/home/index'
import goodslist from '@/components/common/goodslist'
import shoplist from '@/components/view/shop/shoplist'
import searching from '@/components/view/search/searching'
import searchlist from '@/components/view/search/searchlist'
import shopdetail from '@/components/view/shop/shopdetail'
import imglist from '@/components/view/shop/imglist'
import evaluateindex from '@/components/view/shop/evaluateindex'
import city from '@/components/view/home/city'
import payorder from '@/components/view/order/payorder'
import conpon from '@/components/conpon'
import paytype from '@/components/view/order/paytype'
import addcard from '@/components/view/order/addcard'
import cardinfo from '@/components/view/order/cardinfo'
import verificationtel from '@/components/view/order/verificationtel'
import booking from '@/components/view/shop/booking'
import conponlist from '@/components/view/order/conponlist'
import payresult from '@/components/view/order/payresult'
import cardverify from '@/components/view/my/cardverify'
import moneycoins from '@/components/view/my/moneycoins'
import balance from '@/components/view/my/balance'
import consumptionlist from '@/components/view/my/consumptionlist'
import consumptioninfo from '@/components/view/my/consumptioninfo'
import myconpon from '@/components/view/my/conpon'
import myappointment from '@/components/view/my/appointment'
import myevaluate from '@/components/view/my/evaluatelist'
import mycancleappoint from '@/components/view/my/cancleappointment'
import appointmentinfo from '@/components/view/my/appointmentinfo'
import collection from '@/components/view/my/collection'
import usercenter from '@/components/view/my/usercenter'
import coinrecharge from '@/components/view/cardcorrelation/coinrecharge'
import cardlist from '@/components/view/cardcorrelation/cardlist'
import untying from '@/components/view/cardcorrelation/untying'
import cashout from '@/components/view/cardcorrelation/cashout'
import setup from '@/components/view/setup/index'
import userinfo from '@/components/view/setup/userinfo'
import forgetpassword from '@/components/view/setup/forgetpassword'
import retrievepassword from '@/components/view/setup/retrievepassword'
import usersecurity from '@/components/view/setup/usersecurity'
import phonemodify from '@/components/view/setup/phonemodify'
import oldpassword from '@/components/view/setup/oldpassword'
import msgnotice from '@/components/view/setup/msgnotice'
import publishevaluate from '@/components/view/my/publishevaluate'
import login from '@/components/view/login/login'
import msgcode from '@/components/view/login/msgcode'
import startup from '@/components/view/login/startup'
import openvip from '@/components/common/openvip' 
import applicationeditor from '@/components/view/home/applicationeditor'
import alltype from '@/components/view/home/alltype'
import draggabletest from '@/components/view/home/draggabletest'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/goodslist',
      name: 'goodslist',
      component: goodslist
    },
    {
      path: '/shoplist',
      name: 'shoplist',
      component: shoplist
    },
    {
      path: '/searching',
      name: 'searching',
      component: searching
    },
    {
      path: '/searchlist',
      name: 'searchlist',
      component: searchlist
    },
    {
      path: '/shopdetail/:idname',
      name: 'shopdetail',
      component: shopdetail
    },
    {
      path: '/imglist',
      name: 'imglist',
      component: imglist
    },    
    {
      path: '/evaluateindex',
      name: 'evaluateindex',
      component: evaluateindex
    },
    {
      path: '/count',
      name: 'count',
      component: count
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/city',
      name: 'city',
      component: city
    },
    {
      path: '/payorder',
      name: 'payorder',
      component: payorder
    },
    {
      path: '/conpon',
      name: 'conpon',
      component: conpon
    },
    {
      path: '/paytype',
      name: 'paytype',
      component: paytype
    },    
    {
      path: '/passwordinput',
      name: 'passwordinput',
      component: passwordinput
    },
    {
      path: '/addcard',
      name: 'addcard',
      component: addcard
    },
    {
      path: '/cardinfo',
      name: 'cardinfo',
      component: cardinfo
    },
    {
      path: '/verificationtel',
      name: 'verificationtel',
      component: verificationtel
    },
    {
      path: '/booking/:title',
      name: 'booking',
      component: booking
    },
    {
      path: '/forgetpassword/:type',
      name: 'forgetpassword',
      component: forgetpassword
    },
    {
      path: '/conponlist',
      name: 'conponlist',
      component: conponlist
    },    
    {
      path: '/payresult/:paystate',
      name: 'payresult',
      component: payresult
    },
    {
      path: '/retrievepassword/:type',
      name: 'retrievepassword',
      component: retrievepassword
    },
    {
      path: '/cardverify',
      name: 'cardverify',
      component: cardverify
    },
    {
      path: '/moneycoins',
      name: 'moneycoins',
      component: moneycoins
    },
    {
      path: '/balance',
      name: 'balance',
      component: balance
    },
    {
      path: '/consumptionlist',
      name: 'consumptionlist',
      component: consumptionlist
    },
    {
      path: '/consumptioninfo/:idname',
      name: 'consumptioninfo',
      component: consumptioninfo
    },
    {
      path: '/myconpon',
      name: 'myconpon',
      component: myconpon
    },
    {
      path: '/myappointment',
      name: 'myappointment',
      component: myappointment
    },
    {
      path: '/myevaluate',
      name: 'myevaluate',
      component: myevaluate
    },
    {
      path: '/mycancleappoint/:idname',
      name: 'mycancleappoint',
      component: mycancleappoint
    },    
    {
      path: '/appointmentinfo/:idname',
      name: 'appointmentinfo',
      component: appointmentinfo
    },    
    {
      path: '/collection',
      name: 'collection',
      component: collection
    },
    {
      path: '/usercenter',
      name: 'usercenter',
      component: usercenter
    },
    {
      path: '/coinrecharge',
      name: 'coinrecharge',
      component: coinrecharge
    },
    {
      path: '/cardlist',
      name: 'cardlist',
      component: cardlist
    },
    {
      path: '/untying/:type',
      name: 'untying',
      component: untying
    },
    {
      path: '/cashout',
      name: 'cashout',
      component: cashout
    },
    {
      path: '/msgnotice',
      name: 'msgnotice',
      component: msgnotice
    },
    {
      path: '/setup',
      name: 'setup',
      component: setup
    },
    {
      path: '/userinfo',
      name: 'userinfo',
      component: userinfo
    },
    {
      path: '/usersecurity',
      name: 'usersecurity',
      component: usersecurity
    },
    {
      path: '/phonemodify/:type',
      name: 'phonemodify',
      component: phonemodify
    },
    {
      path: '/oldpassword',
      name: 'oldpassword',
      component: oldpassword
    },
    {
      path: '/publishevaluate',
      name: 'publishevaluate',
      component: publishevaluate
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/msgcode',
      name: 'msgcode',
      component: msgcode
    },
    {
      path: '/startup',
      name: 'startup',
      component: startup
    },
    {
      path: '/openvip',
      name: 'openvip',
      component: openvip
    },
    {
      path: '/applicationeditor',
      name: 'applicationeditor',
      component: applicationeditor
    },
    {
      path: '/alltype',
      name: 'alltype',
      component: alltype
    },
    {
      path: '/draggabletest',
      name: 'draggabletest',
      component: draggabletest
    },
  ]
})