// 1. 定义（路由）组件。也可以从其他文件 import 进来
import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import Table from './views/nav1/Table.vue'
import Form from './views/nav1/Form.vue'
import user from './views/nav1/user.vue'
import Page4 from './views/nav2/Page4.vue'
import Page5 from './views/nav2/Page5.vue'
import Page6 from './views/nav3/Page6.vue'
import echarts from './views/charts/echarts.vue'
// 广告管理
import SearchList from './views/ad-manage/SearchList.vue'
import SearchDetail from './views/ad-manage/SearchDetail.vue'
import PlayCard from './views/ad-manage/searchList/PlayCard.vue'
import OpenScreen from './views/ad-manage/searchList/OpenScreen.vue'
import addChange from './views/ad-manage/addChange.vue'
// 发现页轮播图
import fpaddChange from './views/find-pic/fpaddChange.vue'
import fpSearchDetail from './views/find-pic/fpSearchDetail.vue'
import fpSearchList from './views/find-pic/fpSearchList.vue'
// 发现页菜单项
import fmaddChange from './views/find-menu/fmaddChange.vue'
import fmSearchList from './views/find-menu/fmSearchList.vue'
//  顺风车等一系列单模块
import sfCar from './views/sfCar/sfCar.vue'
import message from './views/message/message.vue'
import synchroId from './views/synchroId/synchroId.vue'
import deleteEquip from './views/deleteEquip/deleteEquip.vue'
import officialAccont from './views/officialAccont/officialAccont.vue'

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是通过 Vue.extend() 创建的组件构造器，
// 这种定义方法叫命名路由
let routes = [
    {
        // 父路由上尽量写绝对路径,下面这种就是绝对路径
        path: '/login',
        // 使用组件  组件必须注册才能使用
        // 这种写法也是可以的 component: require('./views/Login.vue')
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    //{ path: '/main', component: Main },
    {
        path: '/',
        component: Home,
        name: '导航一',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            // vue路径不区分大小写，只要和组件名相同就行
            { path: '/main', component: Main, name: '主页', hidden: true },
            { path: '/table', component: Table, name: 'Table'},
            { path: '/form', component: Form, name: 'Form' },
            { path: '/user', component: user, name: '列表' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '导航二',
        iconCls: 'fa fa-id-card-o',
        children: [
            {path: '/page4', component: Page4, name: '页面4'},
            { path: '/page5', component: Page5, name: '页面5' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '测试',
        iconCls: 'fa fa-address-card',
        leaf: true,// 只有一个节点  leaf: true意思就是只有一个节点，不是2个也不是3个，就是1个
        children: [
            { path: '/page6', component: Page6, name: '导航三' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '测试3',
        iconCls: 'fa fa-bar-chart',
        children: [
            { path: '/echarts', component: echarts, name: 'echarts' }
        ]
    },

    {
        path: '/',
        component: Home,
        name: '广告管理',
        iconCls: 'fa fa-address-card',
        children: [
            {
                path: '/SearchList',
                component: SearchList,
                name: '查询列表',
                // 对于chilidren.children里面的内容,目前只能渲染到上一级页面里的router-view,目前还没找到方法让它指定渲染到顶层router-view 如果上面component强行写Home，渲染出的效果只会是二级页面再复制了一遍外层的标签再渲染
                // 其实对于折叠栏来选项来说,它只是起到一个导航效果，并不要实际的内容页,所以呢，折叠栏写一个空标签里面加一层router-view页面就能达到预期效果（折叠栏写一个空页面单纯的只是想让它坐路由渲染，没有别的需求）,并不需要指定渲染到顶层路由
                children: [
                    { path: '/playCard', component: PlayCard, name: '打卡数据' },
                    { path: '/openScreen', component: OpenScreen, name: '开屏数据' }
                ]
            },
            { path: '/searchDetail', component: SearchDetail, name: '查询详情' },
            { path: '/addChange', component: addChange, name: '新增修改' }
        ]
    },

    {
        path: '/',
        component: Home,
        name: '发现页-轮播图',
        iconCls: 'fa fa-bar-chart',
        children: [
            { path: '/fpSearchList', component: fpSearchList, name: '查询-列表'},
            { path: '/fpSearchDetail', component: fpSearchDetail, name: '查询-详情'},
            { path: '/fpaddChange', component: fpaddChange, name: '新增修改'}
        ]
    },

    {
        path: '/',
        component: Home,
        name: '发现页-菜单项',
        iconCls: 'fa fa-address-card',
        children: [
            { path: '/fmSearchList', component: fmSearchList, name: '查询-列表'},
            { path: '/fmaddChange', component: fmaddChange, name: '新增修改'}
        ]
    },

    {
        path: '/',
        component: Home,
        name: '顺风车',
        iconCls: 'fa fa-address-card',
        leaf: true,
        children: [
            { path: '/sfCar', component: sfCar, name: '顺风车'}
        ]
    },

    {
        path: '/',
        component: Home,
        name: '消息数据',
        iconCls: 'fa fa-address-card',
        leaf: true,
        children: [
            { path: '/message', component: message, name: '消息数据'}
        ]
    },

    {
        path: '/',
        component: Home,
        name: '同步账号',
        iconCls: 'fa fa-address-card',
        leaf: true,
        children: [
            { path: '/synchroId', component: synchroId, name: '同步账号'}
        ]
    },

    {
        path: '/',
        component: Home,
        name: '清除打卡设备',
        iconCls: 'fa fa-address-card',
        leaf: true,
        children: [
            { path: '/deleteEquip', component: deleteEquip, name: '清除打卡设备'}
        ]
    },

    {
        path: '/',
        component: Home,
        name: '公众号',
        iconCls: 'fa fa-address-card',
        leaf: true,
        children: [
            { path: '/officialAccont', component: officialAccont, name: '公众号'}
        ]
    },

    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;