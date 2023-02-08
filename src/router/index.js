import {createRouter, createWebHashHistory} from 'vue-router'
import Home from "@/components/Home";
import Prepare from "@/components/Prepare/Prepare";
import Prepare2 from "@/components/Prepare/Prepare2";
import PageHome from "@/components/Page/PageHome";
import Rest from "@/components/Page/Rest";
import Finalpage from "@/components/Finalpage";

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/prepare',
        name: 'prepare',
        component: Prepare,
        children: [
            {
                path: 'prepare2',
                name: 'prepare2',
                component: Prepare2
            }
        ]
    },
    {
        path: '/page',
        name: 'page',
        components: {
            default: PageHome,

        }
    },
    {
        path: '/rest',
        name: 'rest',
        component: Rest
    },
    {
        path: '/finalpage',
        name: 'finalpage',
        component: Finalpage
    }

]

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes
})

export default router
