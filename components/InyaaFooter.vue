<script setup>
const data = await useFetch('/config/findAll', {
  parseResponse: JSON.parse,
  baseURL: 'https://www.inyaw.com/inyaa-gateway/inyaa-admin',
  method: 'GET',
  params: {
    type: 0
  }
}).then(r => {
  if (!r) {
    return {};
  }
  if (!r.data || !r.data.value) {
    return {};
  }
  if (r.data.value.code && r.data.value.code === 200) {
    return r.data.value.data
  } else {
    return {};
  }
})
console.log('configData', data)
</script>

<template>
  <div class="pt-4 text-center">
    <footer class="text-white">
      <p><a href="https://beian.miit.gov.cn" target="_blank">{{data.WEB_ICP}}</a></p>
      <p>{{data.WEB_NAME}} ©2021 Created by {{data.WEB_ADMIN_NAME}}</p>
    </footer>
  </div>
</template>


