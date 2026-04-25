import nextra from 'nextra';
import fs from 'fs';
import path from 'path';

const daisyGrammar = JSON.parse(
  fs.readFileSync(path.resolve(process.cwd(), 'public/syntax/daisy.tmLanguage.json'), 'utf-8')
);

const withNextra = nextra({
  mdxOptions: {
    rehypePrettyCodeOptions: {
      theme: {
        light: 'catppuccin-latte',
        dark: 'catppuccin-mocha'
      },
      langs: [
        {
          ...daisyGrammar,
          name: 'daisy',
          scopeName: 'source.daisy'
        }
      ]
    },
  },
})

export default withNextra({
  output: 'export',
  basePath: '/daisy',
  images: {
    unoptimized: true,
  }
})