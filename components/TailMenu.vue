<script setup>
import { Disclosure, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
const user = useCookie('user')
const route = useRoute();
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

function hideMenu() {
}
onMounted(async () => {
  document.addEventListener("scroll", hideMenu);
  initAudio();
});
const { show, updateShow, updateHide  } = useScroll();

function initAudio() {
  // 创建一个音乐播放器实例，并挂载到DOM上，同时进行相关配置
  const ap = new APlayer({
    container: document.getElementById("aplayer"),
    listFolded: true,
    audio: [ // 歌曲列表
      {
        name: "星茶会",
        artist: "灰澈-星茶会",
        url: "https://media.inyaa.cn/test_music.mp3",
        cover: "http://imge.kugou.com/stdmusic/150/20200812/20200812134914113741.jpg",
        lrc: "",
        theme: "#baf",
      },
    ]
  });
}
</script>
<style scoped>
.menu-avatar {
  @apply rounded-full flex text-sm focus:outline-none;
}
.menu-search {
  @apply block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm;
}
.menu-search-opacity {
  @apply block w-full pl-10 pr-3 py-2 border border-gray-300 border-opacity-0 rounded-md leading-5 bg-white bg-opacity-0 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm;
}
.menu-notification {
  @apply flex-shrink-0 p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none;
}
</style>
<template>
  <MobileMenu />
  <Disclosure as="nav" :class="[show ? 'hidden md:block w-full fixed top-0 z-888' : 'hidden md:block bg-white w-full fixed top-0 z-888']">
    <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex px-2 lg:px-0">
          <div class="flex-shrink-0 flex items-center">
              <a :class="[show? 'text-25px pb-2 text-white group' : 'text-25px pb-2 group']">
                <ruby>
                  <span>yoyo</span>
                  <span>の</span>
                  <span>梦中小屋</span>
                  <rt class="text-10px opacity-0 group-hover:opacity-100">瑶瑶的梦中小屋</rt>
                </ruby>
              </a>
          </div>
          <div v-if="show" class="hidden md:ml-6 md:flex md:space-x-8">
            <a v-for="item in data" :href="item.path" class="border-transparent text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
              {{ item.name }}
            </a>
          </div>
          <div v-else class="hidden md:ml-6 md:flex md:space-x-8">
            <a v-for="item in data" :href="item.path" :class="[item.path === route.path ? 'border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium']">
              {{ item.name }}
            </a>
          </div>

        </div>
        <div class="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
          <div class="max-w-lg lg:max-w-xs">
            <label for="search" class="sr-only">Search</label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <div :class="[show? 'i-carbon-search h-5 w-5 bg-white': 'i-carbon-search h-5 w-5']" aria-hidden="true" />
              </div>
              <input id="search" name="search" :class="show ? 'menu-search-opacity' : 'menu-search'" placeholder="Search" type="search" />
            </div>
          </div>
        </div>
        <div class="hidden md:ml-4 md:flex md:items-center">
          <div id="aplayer" class="hidden md:block"></div>
        </div>
        <div class="hidden md:ml-4 md:flex md:items-center">
          <button type="button" :class="[show? 'menu-notification':'bg-white menu-notification']">
            <span class="sr-only">View notifications</span>
            <div :class="[show ? 'i-carbon-notification w-6 h-6 bg-white' : 'i-carbon-notification w-6 h-6']" aria-hidden="true" />
          </button>
          <!-- Profile dropdown -->
          <Menu as="div" class="ml-4 relative flex-shrink-0">
            <div>
              <MenuButton :class="[show? 'menu-avatar' : 'text-gray-400 menu-avatar']">
                <span class="sr-only">Open user menu</span>
                <div :class="[show? 'i-carbon-user-avatar h-8 w-8 rounded-full bg-white':'i-carbon-user-avatar h-8 w-8 rounded-full']"/>
<!--                <img class="h-8 w-8 rounded-full bg-white" src="https://media.inyaa.cn/none.png" alt="" />-->
              </MenuButton>
            </div>
            <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
              <MenuItems class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <MenuItem v-for="item in userNavigation" v-slot="{ active }">
                  <a v-if="item.href === 'login'" @click="toLogin" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">{{item.name}}</a>
                  <a v-else-if="item.href === 'logout'" @click="toLogout"  :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">{{item.name}}</a>
                  <a v-else :href="item.href" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">{{item.name}}</a>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>
  </Disclosure>
</template>
