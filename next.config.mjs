import nextra from 'nextra'
import {createHighlighter} from 'shiki'
import {readFileSync} from 'fs'
import {join} from 'path'

const daisy_grammar = JSON.parse(
    readFileSync(join(process.cwd(), 'public/syntax/daisy.tmLanguage.json'), 'utf-8')
) 

const withNextra = nextra({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.jsx',
    mdxOptions: {
        rehypePrettyCodeOptions: {
            getHighlighter: (options) =>
                createHighlighter({
                    ...options,
                    langs: [...(options.langs ?? []), daisy_grammar],
                }),
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