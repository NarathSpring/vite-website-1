import { createWebHashHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Doc from "../views/Doc.vue";
import Intro from "../components/Intro.vue";
import Switch from "../lib/Switch.vue";
import Article2 from "../components/Article2.vue";
import Article3 from "../components/Article3.vue";
import Article4 from "../components/Article4.vue";
import Article5 from "../components/Article5.vue";

const history = createWebHashHistory();
const router = createRouter({
  history: history,
  routes: [
    { path: "/", component: Home },
    {
      path: "/doc",
      component: Doc,
      children: [
        { path: "intro", component: Intro },
        { path: "switch", component: Switch },
        { path: "a2", component: Article2 },
        { path: "a3", component: Article3 },
        { path: "a4", component: Article4 },
        { path: "a5", component: Article5 }
      ]
    }
  ]
});

export default router;
