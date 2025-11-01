<template>
    <div class="common-layout">
      <el-container>
        <el-header class="header">Header</el-header>
        <el-container>
          <el-aside width="200px" class="aside">Aside</el-aside>
          <el-main class="content">Main</el-main>
        </el-container>
      </el-container>
    </div>
  </template>


<style>
.common-layout #layout {
  min-height: 100vh;
}
.common-layout .header {
  background: blue;
  margin-bottom: 5px;
  box-shadow: #eee 5px 5px 4px;
}
.common-layout .aside {
  background: yellow;
  margin-bottom: 5px;
  box-shadow: #eee 5px 5px 4px;
  height: calc(100vh - 64px - 5px);
}
.common-layout .content {
  background: green;
  margin-bottom: 5px;
  box-shadow: #eee 5px 5px 4px;
}
</style>
  