import nextra from 'nextra'
import {readFileSync} from 'fs'
import {join} from 'path'
import {bundledLanguages} from 'shiki'

const daisy_grammar = JSON.parse(
    readFileSync(join(process.cwd(), 'public/syntax/daisy.tmLanguage.json'), 'utf-8')
)

bundledLanguages['daisy'] = () => ({default: daisy_grammar})

const withNextra = nextra({
    mdxOptions: {
        rehypePrettyCodeOptions: {
            theme: {
                light: 'catppuccin-latte',
                dark: 'catppuccin-mocha',
            },
        },
    },
})

export default withNextra({
    output: 'export',
    basePath: '/daisy',
    images: {unoptimized: true},
})