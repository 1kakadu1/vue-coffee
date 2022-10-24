import { createApp } from 'vue'

import App from './App.vue'
import router from './router/router'
import SectionText from "@/components/sections/SectionText.vue";

const app = createApp(App).use(router);
app.component("SectionText", SectionText)
app.mount('#app')
