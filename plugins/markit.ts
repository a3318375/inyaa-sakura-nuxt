import {defineNuxtPlugin} from '#app';

import mdit from 'markdown-it';
import manchor from 'markdown-it-anchor';
import toc from 'markdown-it-toc-done-right';
import highlightLines from 'markdown-it-highlight-lines';
import hljs from 'highlight.js';

const markdownit = new mdit({
    html: true,
    xhtmlOut: true,
    breaks: false,
    langPrefix: 'language-',
    linkify: true,
    typographer: true,
    quotes: '“”‘’',
    highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return '<pre class="highlight-wrap"><code class="hjs" data-rel="' + lang + '">' +
                    hljs.highlight(str, {language: lang, ignoreIllegals: true}).value +
                    '</code>' +
                    '<button type="button" class="copy-code sm:flex sm:items-center sm:justify-center relative w-9 h-9 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 text-gray-400 hover:text-gray-600 group ml-2.5" :style="color:#06B6D4" onclick="toCopy(this)" style="">' +
                    '<div class="hidden">' + str + '</div><div class="i-carbon-copy w-24px h-24px bg-white" /></button></pre>';
            } catch (error) {
                console.log(error)
            }
        }
        return '<pre class="highlight-wrap"><code class="hjs">' + markdownit.utils.escapeHtml(str) + '</code>' +
            '<button type="button" class="copy-code sm:flex sm:items-center sm:justify-center relative w-9 h-9 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 text-gray-400 hover:text-gray-600 group ml-2.5" :style="color:#06B6D4" onclick="toCopy(this)" style="">' +
            '<div class="hidden">' + str + '</div><div class="i-carbon-copy w-24px h-24px bg-white" /></button>' +
            '</pre>';
    }
});
markdownit.use(manchor);
markdownit.use(highlightLines);
markdownit.use(toc, {
    containerClass: 'TOC-text',
    listClass: 'toc-list',
    itemClass: 'toc-list-item',
    listType: 'ul',
    linkClass: 'px-5px py-10px',
    callback: function (html, ast) {
        markdownit.topHtml = html
    }
});
markdownit.disable([ 'link']);

markdownit.linkify.set({fuzzyEmail: false});


export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.provide('markit', markdownit);
});
