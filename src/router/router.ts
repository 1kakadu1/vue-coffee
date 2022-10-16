import { createWebHistory, createRouter } from "vue-router";
import Home from "@/page/Home.vue";
import About from "@/page/About.vue";
import { VueElement } from "vue";

export enum RouterPath{
  home = "/",
  about = "/about",
  products = '/our-products',
  blog = '/blog',
  contact = '/contact',
  styleguide = '/styleguide',
}

const routes = [
  {
    path: RouterPath.home,
    name: "Home",
    component: Home,
  },
  {
    path: RouterPath.about,
    name: "About",
    component: About,
  },
];

export const routerMenu: {label: string, href: RouterPath, icon?: VueElement,}[] =[
  {label: 'Home', href: RouterPath.home},
  {label: 'Our Products', href:RouterPath.products,}, 
  {label: 'Blog', href: RouterPath.blog}, 
  {label: 'About', href: RouterPath.about}, 
  {label: 'Contact', href: RouterPath.contact}, 
  {label: 'Styleguide', href: RouterPath.styleguide}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;