<template>
  <div class="pt-8 px-6">
    <div class="relative">
      <div class="absolute inset-0 flex items-center" aria-hidden="true">
        <div class="w-full border-t border-gray-300"/>
      </div>
      <div class="relative flex justify-center">
      <span class="px-2 bg-white bg-opacity-0 text-sm text-gray-500">
        评论
      </span>
      </div>
    </div>
    <div class="pr-4 sm:pr-6 lg:pr-8 lg:flex-shrink-0 lg:border-l lg:border-gray-200 xl:pr-0 pt-4">
      <div>
        <ul role="list" class="divide-y divide-gray-200">
          <li v-for="item in activityItems" :key="item.commit" class="py-4">
            <div class="flex space-x-3">
              <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80" alt=""/>
              <div class="flex-1 space-y-1">
                <div class="flex items-center">
                  <h3 class="text-sm font-medium">You</h3>
                  <p class="text-sm text-gray-500 pl-2">{{ item.time }}</p>
                </div>
                <p class="text-sm text-gray-500">Deployed {{ item.project }} ({{ item.commit }} in master) to
                  {{ item.environment }}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <InyaaCommentText/>
  </div>
</template>

<script>
import {Popover, PopoverButton, PopoverPanel} from '@headlessui/vue'
import {
  ChatAltIcon,
  CodeIcon,
  DotsVerticalIcon,
  EyeIcon,
  FlagIcon,
  PlusSmIcon,
  SearchIcon,
  ShareIcon,
  StarIcon,
  ThumbUpIcon,
} from '@heroicons/vue/solid'
import {BellIcon, MenuIcon, XIcon} from '@heroicons/vue/outline'
import InyaaCommentText from "./InyaaCommentText";

const user = {
  name: 'Chelsea Hagon',
  email: 'chelseahagon@example.com',
  imageUrl:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const questions = [
  {
    id: '81614',
    likes: '29',
    replies: '11',
    views: '2.7k',
    author: {
      name: 'Dries Vincent',
      imageUrl:
          'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
    },
    date: 'December 9 at 11:43 AM',
    datetime: '2020-12-09T11:43:00',
    href: '#',
    title: 'What would you have done differently if you ran Jurassic Park?',
    body: `
      <p>Jurassic Park was an incredible idea and a magnificent feat of engineering, but poor protocols and a disregard for human safety killed what could have otherwise been one of the best businesses of our generation.</p>
      <p>Ultimately, I think that if you wanted to run the park successfully and keep visitors safe, the most important thing to prioritize would be&hellip;</p>
    `,
  },
  // More questions...
]
const activityItems = [
  {project: 'Workcation', commit: '2d89f0c8', environment: 'production', time: '1h'},
  // More items...
]

export default {
  components: {
    InyaaCommentText,
    Popover,
    PopoverButton,
    PopoverPanel,
    BellIcon,
    ChatAltIcon,
    CodeIcon,
    DotsVerticalIcon,
    EyeIcon,
    FlagIcon,
    MenuIcon,
    PlusSmIcon,
    SearchIcon,
    ShareIcon,
    StarIcon,
    ThumbUpIcon,
    XIcon,
  },
  setup() {
    return {
      user,
      questions,
      activityItems,
    }
  },
}
</script>
