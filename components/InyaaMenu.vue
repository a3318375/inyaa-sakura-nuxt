<script setup>
import {Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems} from '@headlessui/vue'
import {BellIcon, MenuIcon, XIcon} from '@heroicons/vue/outline'
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
  { name: '退出登陆', href: '#' },
] : [{ name: '登陆', href: 'login' }]

function toLogin() {
  console.log(1111)
  toOpen()
}

function hideMenu() {
}
onMounted(async () => {
  document.addEventListener("scroll", hideMenu);
});
</script>
<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <InyaaDialog />
  <Disclosure as="nav" class="bg-white bg-opacity-80 border-b border-gray-200 w-full fixed top-0 z-50" v-slot="{ open }">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="flex-shrink-0 flex items-center">
            <img class="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow"/>
            <img class="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg" alt="Workflow"/>
          </div>
          <div class="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
            <a v-for="item in data" :key="item.name" :href="item.path" :class="[item.current ? 'border-indigo-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700', 'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">
              {{ item.name }}
            </a>
          </div>
        </div>
        <div class="hidden sm:ml-6 sm:flex sm:items-center">
          <!-- <button type="button" class="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span class="sr-only">View notifications</span>
            <BellIcon class="h-6 w-6" aria-hidden="true"/>
          </button> -->
          <a class="bg-white p-1 rounded-full text-gray-400" href="/notice"><BellIcon class="h-6 w-6" aria-hidden="true"/></a>
          <!-- Profile dropdown -->
          <Menu as="div" class="ml-3 relative">
            <div>
              <MenuButton class="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span class="sr-only">Open user menu</span>
                <img class="h-8 w-8 rounded-full" :src="userInfo.imageUrl" alt=""/>
              </MenuButton>
            </div>
            <transition enter-active-class="transition ease-out duration-200" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
              <MenuItems class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
                  <a v-if="item.href === 'login'" @click="toLogin" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">
                    {{ item.name }}
                  </a>
                  <a v-else :href="item.href" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">
                    {{ item.name }}
                  </a>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
        <div class="-mr-2 flex items-center sm:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton class="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span class="sr-only">Open main menu</span>
            <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true"/>
            <XIcon v-else class="block h-6 w-6" aria-hidden="true"/>
          </DisclosureButton>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="pt-2 pb-3 space-y-1">
        <DisclosureButton v-for="item in data" :key="item.name" as="a" :href="item.path" :class="[item.current ? 'bg-indigo-50 border-indigo-500 text-indigo-700' : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800', 'block pl-3 pr-4 py-2 border-l-4 text-base font-medium']" :aria-current="item.current ? 'page' : undefined">
          {{ item.name }}
        </DisclosureButton>
      </div>
      <div class="pt-4 pb-3 border-t border-gray-200">
        <div class="flex items-center px-4">
          <div class="flex-shrink-0" v-if="isLogin">
            <img class="h-10 w-10 rounded-full" :src="userInfo.imageUrl" alt=""/>
          </div>
          <div class="ml-3" v-if="isLogin">
            <div class="text-base font-medium text-gray-800">{{ userInfo.name }}</div>
            <div class="text-sm font-medium text-gray-500">{{ userInfo.email }}</div>
          </div>
          <button v-if="isLogin" type="button" class="ml-auto bg-white flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span class="sr-only">View notifications</span>
            <BellIcon class="h-6 w-6" aria-hidden="true"/>
          </button>
        </div>
        <div class="mt-3 space-y-1">
          <DisclosureButton v-for="item in userNavigation" :key="item.name" as="a" :href="item.href" class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">
            {{ item.name }}
          </DisclosureButton>
        </div>
      </div>
    </DisclosurePanel>
  </Disclosure>


</template>
