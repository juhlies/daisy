import {useRouter} from 'next/router'

export default {
    useNextSeoProps() {
        const {asPath} = useRouter()
        if (asPath !== '/') {
            return {
                titleTemplate: '%s – Daisy',
            }
        }
    },
    logo: <b>Daisy</b>,
    project: {
        link: 'https://github.com/juhlies/daisy',
    },
    docsRepositoryBase: 'https://github.com/juhlies/daisy',
    footer: {
        content: `© ${new Date().getFullYear()} Daisy (most of the documentation is lowkey skidded from blink)`,
    },
    primaryHue: {light: 266, dark: 267},
    primarySaturation: {light: 85, dark: 84},
    primaryLightness: {light: 58, dark: 81},
    backgroundColor: {
        light: '239, 241, 245',
        dark: '30, 30, 46',
    },
}