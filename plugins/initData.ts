import {defineNuxtPlugin} from '#app';

export default defineNuxtPlugin(async () => {
    const data = useState("menuData", () => []);

    data.value = await useFetch('/menu/findMenuList', {
        parseResponse: JSON.parse,
        baseURL: 'https://api.inyaw.com/inyaa-admin',
        method: 'GET',
        params: {
            enable: true
        },
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
    console.log('menuData', data)
})
