<script setup>
import {useMobileMenuHide} from "../composables/mobileMenuHide";

const user = useCookie('user')
const isLogin = useCookie('isLogin')
isLogin.value = isLogin.value || false
let userInfo = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
      'https://media.inyaa.cn/none.png',
}
if (user && user.value) {
  userInfo = user.value
}

const { toOpen } = useLoginDialog()
const data = useState("menuData", () => []);
const userNavigation = isLogin.value ? [
  { name: '账号管理', href: '#' },
  { name: '账号设置', href: '#' },
  { name: '退出登陆', href: 'logout' },
] : [{ name: '登陆', href: 'login' }]

function toLogin() {
  console.log('开始登陆')
  toOpen()
}
function toLogout() {
  console.log('开始退出')
  isLogin.value = false
  user.value = null
  window.location.reload()
}
const route = useRoute();
function search() {
  if (route.params.title) {
    window.location.href = window.location.host + '/search/' + route.params.title;
  }
}
function showLoginMenu() {
  document.getElementById('loginUserMenu').style.visibility = 'visible'
  document.getElementById('loginUserMenu').style.opacity = '1'
}

function hideLoginMenu() {
  setTimeout(() => {
    document.getElementById('loginUserMenu').style.visibility = 'hidden'
    document.getElementById('loginUserMenu').style.opacity = '0'
  }, 400);
}
const { show, updateShow, updateHide  } = useScroll();
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
      <img class="rounded-full w-100px h-100px" src="https://media.inyaa.cn/99db72d3abaaef4beece7e9f94b3623.jpg" />
    </div>
    <ul>
      <li v-for="menu in data" class="text-center py-1">
        <a :href="menu.path">{{ menu.name }}</a>
      </li>
    </ul>
  </div>
  <header :class="[show ? 'top-menu left-menu fixed h-75px w-95p hidden md:block hover:bg-white hover:bg-opacity-80 rounded-full z-888' : 'top-menu left-smenu fixed h-75px w-1/2 hidden md:block hover:bg-white hover:bg-opacity-80 rounded-full bg-white bg-opacity-80 z-888']">
    <div class="px-20px">
      <div class="group float-right ml-20px mt-22px relative" @mouseover="showLoginMenu" @mouseleave="hideLoginMenu">
        <img class="faa-shake animated-hover" src="https://media.inyaa.cn/none.png" width="24" height="24" @click="toLogin">
        <div id="loginUserMenu" class="absolute w-90px top-44px -right-11px invisible opacity-0 transform -translate-y-20px transition duration-500 group-hover:translate-y-0"
             @mouseover="showLoginMenu"
             @mouseleave="hideLoginMenu">
          <div class="py-15px rounded-xl bg-white bg-opacity-80 text-center">
            <a class="initial" @click="toLogin">登录</a>
          </div>
        </div>
      </div>
      <div class="float-right ml-20px mt-22px">
        <div class="i-carbon-search w-24px h-24px" @click="search" />
      </div>
      <div class="relative mt-15px float-right inline-block">
        <nav>
          <ul id="menu-new" class="menu">
            <li v-for="menu in data" class="float-left ml-28px relative">
              <a :href="menu.path" class="py-10px inline-block">{{ menu.name }}</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>
