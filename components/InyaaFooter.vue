<script setup>
let page = 0
const { data } = await useFetch('/config/findAll', {
  baseURL: 'https://www.inyaa.cn/inyaa-gateway/inyaa-admin',
  method: 'GET',
  params: {
    type: 0
  }
})
</script>

<template>
  <div class="pt-4 text-center">
    <footer class="text-white">
      <p><a href="http://www.beian.miit.gov.cn" target="_blank">{{data.data.WEB_ICP}}</a></p>
      <p>{{data.data.WEB_NAME}} ©2021 Created by {{data.data.WEB_ADMIN_NAME}}</p>
    </footer>
  </div>
</template>


