<script setup>
const nuxtApp = useNuxtApp();
const { data } = await useFetch("/blog/web/archive/list", {
  baseURL: "https://www.inyaa.cn/inyaa-gateway/inyaa-admin",
  method: "GET",
});

useMeta({
  title: '归档',
  link: [
    {rel: 'icon', href: 'https://media.inyaa.cn/favicon.ico'}
  ],
  meta: [
    { name: 'keywords', content: '瑶瑶,梦中小屋,瑶瑶的梦中小屋' },
    { name: 'description', content: '瑶瑶的梦中小屋，一个个人小站.' },
  ],
})
const activity = [
  {
    id: 1,
    type: "comment",
    title: "這個是標題",
    person: { name: "Eduardo Benz", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. ",
    date: "6d ago",
  },
  {
    id: 4,
    type: "comment",
    title: "這個是標題",
    person: { name: "Jason Meyers", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. Scelerisque amet elit non sit ut tincidunt condimentum. Nisl ultrices eu venenatis diam.",
    date: "2h ago",
  },
];
function updateTop(){
  document.getElementById('divHover').style.top = '75%'
  document.getElementById('divHover').style.transition = '0.5s'
}

function updateTopAll(){
  document.getElementById('divHover').style.removeProperty('top')
  document.getElementById('divHover').style.transition = '0.5s'
}
</script>

<template>
  <div class="py-10 pt-17">
    <header>
      <div
          class="max-w-5xl mx-auto bg-white bg-opacity-80 flex flex-col relative"
          @mouseover="updateTop"
          @mouseleave="updateTopAll"
      >
        <div
            class="bg-cover bg-center bg-no-repeat md:h-96"
        ></div>
        <div
            id="divHover"
            class="
            inset-0
            mx-auto
            absolute
            flex flex-col
            text-center
            justify-center
            backdrop-filter backdrop-blur
            transition
            duration-500
            ease-in-out
            transform
          "
        >
          <h1 class="text-3xl text-white">关于</h1>
          <p class="text-white">
            <span>
              <img
                class="w-9 h-9 align-middle float-none inline rounded-full"
                src="https://media.inyaa.cn/99db72d3abaaef4beece7e9f94b3623.jpg"
              />
            </span>
            <span> bymoye </span>
            <span>·</span>2021-02-28 <span>·</span>684 次阅读
          </p>
        </div>
      </div>
    </header>
    <main>
      <div class="max-w-5xl mx-auto">
        <!-- Replace with your content -->
        <div class="pl-4 py-8 sm:px-0 bg-white bg-opacity-80">
          <div class="flow-root">
            <ul role="list" class="-mb-8">
              <li
                v-for="(activityItem, activityItemIdx) in data.data"
                :key="activityItem.id"
              >
                <div class="relative pb-8">
                  <span
                    v-if="activityItemIdx !== activity.length - 1"
                    class="
                      absolute
                      top-5
                      left-5
                      -ml-px
                      h-full
                      w-0.5
                      bg-gray-200
                    "
                    aria-hidden="true"
                  />
                  <div class="relative flex items-start space-x-3">
                      <div class="relative">
                        <img
                          class="
                            h-10
                            w-10
                            rounded-full
                            bg-gray-400
                            flex
                            items-center
                            justify-center
                            ring-8 ring-white
                          "
                          src="https://media.inyaa.cn/99db72d3abaaef4beece7e9f94b3623.jpg"
                          alt=""
                        />

                        <span
                          class="
                            absolute
                            -bottom-0.5
                            -right-1
                            bg-white
                            rounded-tl
                            px-0.5
                            py-px
                          "
                        >
                        </span>
                      </div>
                      <div class="min-w-0 flex-1">
                        <div>
                          <div class="text-sm">
                            <a
                              :href="activityItem.id"
                              class="font-medium text-gray-900"
                              >{{ activityItem.title }}</a
                            >
                          </div>
                          <p class="mt-0.5 text-sm text-gray-500">
                            发布于 {{ nuxtApp.$dayjs(activityItem.createTime).fromNow() }}
                          </p>
                        </div>
                        <div class="mt-2 text-sm text-gray-700">
                          <p>
                            {{ activityItem.summary }}
                          </p>
                        </div>
                      </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!-- /End replace -->
      </div>
    </main>
  </div>
</template>
