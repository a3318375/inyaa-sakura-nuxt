<script setup>
const data = useState("menuData", () => []);
const { mobileMenuShow, updateMobileMenu, updateMobileMenuHide } = useMobileMenuHide();
</script>
<template>
  <InyaaDialog />
  <div :class="[ mobileMenuShow ? 'fixed pl-3 pt-3 z-888 md:hidden transition duration-300 transform translate-x-250px' : 'fixed pl-3 pt-3 z-888 md:hidden transition duration-300 transform translate-x-0']" @click="updateMobileMenu">
    <div class="i-carbon-menu w-24px h-24px" v-if="!mobileMenuShow"/>
    <div class="i-carbon-x w-24px h-24px" v-if="mobileMenuShow"/>
  </div>
  <div :class="[ mobileMenuShow ? 'fixed z-777 bg-white w-250px h-full transition duration-300' : 'fixed z-777 bg-white w-250px h-full transition duration-300 transform -translate-x-250px']">
    <div class="py-40px w-250px mx-75px">
      <img class="rounded-full w-100px h-100px" src="https://media.inyaw.com/icon/99db72d3abaaef4beece7e9f94b3623.jpg" />
    </div>
    <ul>
      <li v-for="menu in data" class="text-center py-1">
        <a :href="menu.path">{{ menu.name }}</a>
      </li>
    </ul>
  </div>
</template>
