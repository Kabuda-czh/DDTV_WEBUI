<!--
 * @Author: Kabuda-czh
 * @Date: 2023-01-14 22:42:43
 * @LastEditors: Kabuda-czh
 * @LastEditTime: 2023-01-15 01:07:24
 * @FilePath: \DDTV_WEBUI\src\App.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by Kabuda-czh, All Rights Reserved.
-->
<template>
  <el-config-provider :locale="currentLocale">
    <router-view />
  </el-config-provider>
</template>

<script lang="ts">
import { ElConfigProvider, ElMessage, ElNotification } from "element-plus";
// import en from "element-plus/lib/locale/lang/en";
import zhCn from "element-plus/lib/locale/lang/zh-cn";
import NProgress from "nprogress";
import { defineComponent } from "vue";

export default defineComponent({
  name: "app",
  components: {
    [ElConfigProvider.name]: ElConfigProvider
  },
  setup() {
    window.$message = ElMessage;
    window.$notification = ElNotification;
    window.$loadingBar = NProgress.configure({
      // 动画方式
      easing: "ease",
      // 递增进度条的速度
      speed: 500,
      // 是否显示加载ico
      showSpinner: false,
      // 自动递增间隔
      trickleSpeed: 200,
      // 初始化时的最小百分比
      minimum: 0.3
    });
  },
  computed: {
    currentLocale() {
      return zhCn;
      // return this.$storage.locale?.locale === "zh" ? zhCn : en;
    }
  }
});
</script>
