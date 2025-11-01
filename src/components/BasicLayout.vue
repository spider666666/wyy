<template>
  <div class="common-layout">
    <el-container id="layout">
      <el-header class="header">
        <GlobalHeader></GlobalHeader>
      </el-header>
      <el-main class="content">Main
        <router-view></router-view>
      </el-main>
      <el-footer class="footer">Footer</el-footer>
    </el-container>
  </div>
</template>

<style scoped>

#layout {
min-height: 100vh;
}

#layout .header {
  background: white;
  margin-bottom: 5px;
  box-shadow: #eee 5px 5px 4px;

}
#layout .content {
  background: linear-gradient(to right, #bbb, #fff);
  padding: 10px;
}
#layout .footer {
  background: #efefef;
  margin-bottom: 16px;
  padding: 16px;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;

}




</style>

<script setup lang="ts">
import router from '@/router';
import GlobalHeader from './GlobalHeader.vue';

</script>
