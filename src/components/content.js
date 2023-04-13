import privacy from '../assets/icon/Privacy.svg'
import access from '../assets/icon/Access.svg'
import legalTech from '../assets/icon/LegalTech.svg'
import wrapPrivacy from '../assets/icon/wrapPrivacy.svg'
import wrapAccess from '../assets/icon/wrapAccess.svg'
import wrapLegalTech from '../assets/icon/wrapLegalTech.svg'


//media
import theBell from '../assets/icon/the bell.svg'
import forbs from '../assets/icon/forbs.svg'
import rbk from '../assets/icon/rbc.svg'
import wired from  '../assets/icon/wired.svg'
import meduza from '../assets/icon/meduza.svg'
import techC from  '../assets/icon/TechC.svg'
import sobaka from '../assets/icon/Sobaka.svg'
import rbru from  '../assets/icon/RB ru.svg'
import ko from '../assets/icon/ko.svg'
import vc from '../assets/icon/VC.svg'
import theCalvert from '../assets/icon/The calvert.svg'
import verstka from '../assets/icon/verstka.svg'
import bumaga from '../assets/icon/bumaga.svg'
import news from '../assets/icon/news.svg'
import mediazona from '../assets/icon/mediazona.svg'
import howtoread from '../assets/icon/howtoread.svg'
import kloop from '../assets/icon/kloop.svg'
import fork from '../assets/icon/fork.svg'
import secr from '../assets/icon/secr.svg'

//партнеры
import RosComFreedom from '../assets/icon/RosComFreedom.svg'
import Habr from '../assets/icon/Habr.svg'
import QratorLabs from '../assets/icon/QratorLabs.svg'
import Proton from '../assets/icon/Proton.svg'
import InformationCulture from '../assets/icon/infocult.webp'
import RussiaVenchur from '../assets/icon/RV.webp'
import CyberLaw from '../assets/icon/Cyberlaw.svg'
import Tor from '../assets/icon/tor.svg'
import Lantern from '../assets/icon/lantern.svg'


export const ourProjects = {
    slide: {
        0: `bg-slideAmnezia`, 
        1: `bg-slideGetSiteCopy`, 
        2: `bg-slideSelfPrivacy`, 
        3: `bg-slideEppie`, 
        4: `bg-slideSecurno`
    },
}
//секрет фирмы
export const media = {
    cmi: {
        0: {
            link: 'https://thebell.io/privatnost-2021-gromkie-razoblacheniya-shpionomaniya-i-rost-investitsij-v-privacy-tech',
            icon: theBell
        },
        1: {
            link: 'https://www.forbes.ru/tekhnologii/448961-zacem-vlasti-blokiruut-tor-i-mozno-li-eto-sdelat',
            icon: forbs
        },
        2: {
            link: 'https://trends.rbc.ru/trends/industry/616ea4d99a79475ac0ce76ad',
            icon: rbk
        },
        3: {
            link: 'https://www.wired.com/story/russia-internet-censorship-splinternet/',
            icon: wired
        },
        4: {
            link: 'https://meduza.io/feature/2022/07/29/kakie-vpn-samye-nadezhnye-kak-ponyat-chto-servis-sotrudnichaet-so-spetssluzhbami-mogut-li-rossiyu-voobsche-otklyuchit-ot-normalnogo-interneta',
            icon: meduza
        },
        5: {
            link: 'https://techcrunch.com/2023/01/30/russia-skiff-block/',
            icon: techC
        },
        6: {
            link: 'https://www.sobaka.ru/lifestyle/technology/146824',
            icon: sobaka
        },
        7: {
            link: 'https://ko.ru/articles/roskomnadzor-prishel-za-vpn/',
            icon: ko
        },
        8: {
            link: 'https://vc.ru/promo/219206-korotko-akselerator-dlya-proektov-razvivayushchih-svobodnyy-internet',
            icon: vc
        },
        9: {
            link: 'https://www.calvertjournal.com/articles/show/7537/the-safe-project-russian-activist-group-launches-privacy-protection-initiat',
            icon: theCalvert
        },
        10: {
            link: 'https://verstka.media/bezopasnost-v-seti',
            icon: verstka
        },
        11: {
            link: 'https://paperpaper.ru/rabota-vedetsya-ezhednevno-roskoms/',
            icon: bumaga
        },
        12: {
            link: 'https://news.ru/society/samaya-massovaya-fishingovaya-ataka-kak-obmanyvayut-na-teme-mobilizacii/',
            icon: news
        },
        13: {
            link: 'https://zona.media/article/2022/06/06/vpnban',
            icon: mediazona
        },
        14: {
            link: 'https://howtoreadmedia.ru/lenta/razbory/kak-ustroen-vpn-i-chto-vazhno-o-nem-znat/',
            icon: howtoread
        },
        15: {
            link: 'https://kloop.kg/blog/2022/04/12/mezhdu-russkim-cheburnetom-i-turkmenskoj-blokadoj-chto-zhdet-internet-v-tsentralnoj-azii/',
            icon: kloop
        },
        16: {
            link: 'https://forklog.com/exclusive/svoboda-i-bezopasnost-v-internete-obzor-glavnyh-trendov-2021-goda',
            icon: fork
        },
        17: {
            link: 'https://secretmag.ru/survival/boi-s-tenyu-pochemu-blokirovka-tor-v-rossii-ni-k-chemu-ne-privela.htm',
            icon: secr
        },
        length: 18
    }
}

export const workContent = {
        icon: [privacy, access, legalTech],
        style: [wrapPrivacy, wrapAccess, wrapLegalTech],
        link: [
            [
                `https://selfprivacy.org/`,
                `https://go-kt.com/`,
                `https://ru.amnezia.org/`
            ],
            [
                ``,
                `https://securno.org/`
            ],
            [
                `https://personalka.org/check`,
                ``
            ]
        ]   
}
export const deamhackHak = {
    deamhackRu: `https://6.demhack.org/`,
    roskomSvoboda: `https://roskomsvoboda.org/`,
    youtube: `https://www.youtube.com/watch?v=VFOO9SwGrS8&ab_channel=%D0%A0%D0%BE%D1%81%D0%9A%D0%BE%D0%BC%D0%A1%D0%B2%D0%BE%D0%B1%D0%BE%D0%B4%D0%B0`,
    linkPreview: 'https://i.ytimg.com/vi/VFOO9SwGrS8/maxresdefault.jpg'
}

export const house = {
        seeAll: [
            `bg-SarkisDabrinyn`,
            `bg-EkaterinaAbashina`,
            `bg-MisbahSoloviev`,
            `bg-EkaterinaAbashina`,
            `bg-DmitrikNikolay`,
            `bg-ArtemIgnatenko`,
            `bg-IvanMikhailov`,
            `bg-AlexShevelev`,
            `bg-PleninDaniil`,
            `bg-BegtinIvan`,
            `bg-VladimirOjereliev`,
            `bg-orangeArrow`
        ],
        networking: {
            0: {
                networkingIcons: RosComFreedom,
                networkingLinks: `https://roskomsvoboda.org/`,
            },
            1: {
                networkingIcons: Habr,
                networkingLinks: `https://habr.com/`,
            },
            2: {
                networkingIcons: QratorLabs,
                networkingLinks: `https://qrator.net/ru/`,
            },
            3: {
                networkingIcons: Proton,
                networkingLinks: `https://proton.me/`,
            },
            4: {
                networkingIcons: InformationCulture,
                networkingLinks: `https://www.infoculture.ru/`,
            },
            5: {
                networkingIcons: RussiaVenchur,
                networkingLinks: `https://rusven.com/`,
            },
            6: {
                networkingIcons: CyberLaw,
                networkingLinks: `https://cyberlaw.center/`,
            },
            7: {
                networkingIcons: Tor,
                networkingLinks: `https://www.torproject.org/`,
            },
            8: {
                networkingIcons: Lantern,
                networkingLinks: `https://lantern.io/ru`
            },
            length: 9
        },
        networkingStepsPhoto: [
            `bg-helpFinance`,
            `bg-accessToTheMarket`,
            `bg-tracking`,
            `bg-lecture`, 
        ],
}