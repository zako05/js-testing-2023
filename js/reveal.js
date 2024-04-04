import '../node_modules/reveal.js/plugin/highlight/zenburn.css'
import '../node_modules/reveal.js/dist/reveal.css'
import '../node_modules/reveal.js/dist/reset.css'
import '../node_modules/reveal.js/dist/theme/moon.css'
import '../css/style.css'

import Reveal from 'reveal.js'
import RevealHighlight from 'reveal.js/plugin/highlight/highlight.esm.js'
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js'

let deck = new Reveal({
   plugins: [ Markdown, RevealHighlight ],
})

deck.initialize({
   controls: true,
   progress: true,
   hash: true,
})
