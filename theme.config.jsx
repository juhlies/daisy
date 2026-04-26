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
    editLink: {
        component: null
    },
    feedback: {
        content: null
    },
    docsRepositoryBase: 'https://github.com/juhlies/daisy',
    footer: {
        content: null
    },
    primaryHue: {light: 266, dark: 267},
    primarySaturation: {light: 85, dark: 84},
    primaryLightness: {light: 58, dark: 81},
    backgroundColor: {
        light: '239, 241, 245',
        dark: '30, 30, 46',
    },
}