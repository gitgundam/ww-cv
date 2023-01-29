<!--  -->
<script setup lang="ts">
import Title from '../../components/Title.vue'
</script>

<template>
  <div relative>
    <h1>王威</h1>
    <p>男 | 1996年4月 | 26岁 |前端开发工程师 | 3年</p>
    <p>手机/微信: 17826802670 | 邮箱: 335968838@qq.com</p>
    <p>以下为博客地址,目前持续更新中</p>
    <p flex items-end>
      <a href="https://github.com/gitgundam" target="_blank">我的GitHub</a><img mx-8px src="@/assets/github.png" alt="" w-35px h-35px />

      <a href="https://juejin.cn/user/2771187176848109" target="_blank">我的掘金博客</a><img mx-8px src="@/assets/juejin.png" alt="" w-35px h-35px />

      <a href="https://blog.csdn.net/MS6324_ZAKU?spm=1000.2115.3001.5343" target="_blank">我的CSDN </a
      ><img mx-8px src="@/assets/csdn.png" alt="" w-35px h-35px />
    </p>

    <img src="@/assets/wangwei.png" alt="" absolute right-0 top-0 w-118px h-158px />
  </div>
</template>

<style lang="scss" scoped>
p {
  margin: 10px 0;
}
a {
  color: #3782c9;
}
</style>
