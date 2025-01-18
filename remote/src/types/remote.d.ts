declare module "vue-remote/Counter" {
  import { DefineComponent } from "vue";

  const Counter: DefineComponent<{}, {}, any>;

  export default Counter;
}

declare module "vue-remote/vue" {
  export { createApp } from "vue";
}
