<template>

<el-menu
    class="el-menu-demo"
    mode="horizontal"
    @select="domenuJump"
  >
  <el-menu-item v-for="item in routes" :index="item.path" :key="item.path">{{ item.name}}</el-menu-item>

  </el-menu>
</template>
<script setup lang="ts">
import routes from '@/router/routes';
import { useRouter } from 'vue-router';

//实现路由跳转的功能
const router = useRouter();
console.log(routes);
const domenuJump = (key:string) =>{
  console.log(key);
  router.push(
  {
    path: key,
  }
);
}
</script>
<style>
</style>