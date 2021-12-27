<script setup>
import {Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems} from '@headlessui/vue'
import {BellIcon, MenuIcon, XIcon, SearchIcon} from '@heroicons/vue/outline'
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

function search() {

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
</script>
<template>
  <InyaaDialog />
  <header :class="[show ? 'top-menu left-menu fixed h-75px w-95p hover:bg-white hover:bg-opacity-80 rounded-full' : 'top-menu left-smenu fixed h-75px w-1/2 hover:bg-white hover:bg-opacity-80 rounded-full bg-white bg-opacity-80']">
    <div class="px-20px">
      <div class="group float-right ml-20px mt-22px relative" @mouseover="showLoginMenu" @mouseleave="hideLoginMenu">
        <img class="faa-shake animated-hover" src="https://media.inyaa.cn/none.png" width="30" height="30" @click="toLogin">
        <div id="loginUserMenu" class="absolute w-90px top-44px -right-11px invisible opacity-0 transform -translate-y-20px transition duration-500 group-hover:translate-y-0"
             @mouseover="showLoginMenu"
             @mouseleave="hideLoginMenu">
          <div class="py-15px rounded-xl bg-white bg-opacity-80 text-center">
            <a class="initial" @click="toLogin">登录</a>
          </div>
        </div>
      </div>
      <div class="float-right ml-20px mt-22px">
        <SearchIcon class="h-30px w-30px" @click="search" />
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
