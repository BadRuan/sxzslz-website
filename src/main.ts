import "@/assets/normalize.css";
import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "@/route";

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);

app.mount("#app");
