import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
        ru: { 
            translation: {
                lan: 'eng',
                button: 'Подать заявку',
                mediaShow: 'Показать все',
                mediaHide: 'Свернуть',
                li: "Проекты, Как мы работаем, Команда, Контакты",
                startPageTitle: 'Помогаем запускать, качественные продукты, в сфере,  приватности, и свободы интернета',
                ourProjects: {
                  mainTitle: "Наши проекты",
                  projects: {
                    0: {
                      title: 'Amnezia',
                      subtitle: 'помогает получать доступ к заблокированному контенту, не раскрывая конфиденциальность даже провайдерам VPN.',
                      description: {
                        0:'Amnezia VPN помогает получать доступ к заблокированному контенту, не раскрывая конфиденциальность даже провайдерам VPN. Проект стал победителем первого хакатона Demhack (https://demhack.ru) и получил финансирование на развитие open-source разработки от двух НКО-фондов. Сервис отличают простота установки и использования, безопасность и отсутствие платы за пользование VPN, которые помогают противостоять цензуре и блокировке сайтов и онлайн-сервисов.',
                        1:'На текущий момент Amnezia использует широкий стек протоколов (OpenVPN, WireGuard, Shadowsocks, Cloak, Pluggable Transport) и как следствие ее сложнее заблокировать. Amnezia VPN работрает с применением технологий с открытым исходным кодом и успешно прошла аудит безопасности, проведенный Cure53. Таким образом Amnezia VPN можно использовать уязвимыми группами населения, в том числе независимыми медиа и правозащитниками, а также при нахождении в репрессивных режимах или затронутых конфликтами средах. C марта по ноябрь 2022 года аудитория проекта увеличилась в 5 раз. А с введением Amnezia Free -  бесплатного сервиса по доступу к заблокированным соцсетям и медиа в России, удалось увеличить активную аудиторию проекта до 150К, а общее количество загрузок Amnezia VPN для десктопов достигло 60К. Без анонсирования мобильной версии число скачиваний приложения для Android оказалось более 10К.',
                        length: 2
                      },
                      rightColumns: {
                        block0: {
                          0:'60К',
                          1:'количество загрузок AmneziaVPN для десктопов за 6 мес',
                        },
                        block1: {
                          0:'+150К',
                          1:'увеличили активную аудиторию проекта за 8 месяцев',
                        },
                        length: 2
                      },

                    },
                    1: {
                      title: 'Get site copy',
                      subtitle: 'Решение для предоставления доступа к СМИ, заблокированным государственной цензурой в России. Сейчас бот использует 40% заблокированных СМИ.',
                      description: {
                        0:'Решение для предоставления доступа к СМИ, заблокированным государственной цензурой в России. Сейчас бот использует 40% заблокированных СМИ. Общая аудитория СМИ, использующих наше решение - 520К. Проект-победитель хакатона Demhack-5 и акселератора, позже проект интегрирован в Роскомсвободу.',    
                        length: 1
                      },
                      rightColumns: {
                        block0: {
                          0:'40%',
                          1:'заблокированных СМИ используют этот бот',
                        },
                        block1: {
                          0:'520К',
                          1:'аудитория',
                        },
                        length: 2
                      },
                    },
                    2: {
                      title: 'Self Privacy',
                      subtitle: 'Open-source сервер-платформа на хостинге пользователя для развертывания персональных приватных сервисов (чатов, соцсети, почта, vpn и пр.)',
                      description: {
                        0:'Open-source сервер-платформа на хостинге пользователя для развертывания персональных приватных сервисов (чатов, соцсети, почта, vpn и пр.), управляемых с помощью мобильного приложения через API провайдеров (Hetzner, AWS, Cloudflare). Команда развивает приложение, которое управляет личными облачными сервисами, такими как почта, чаты, файловое облако, парольный менеджер и т.п. и не сливает ваши данные.',
                        length: 1
                      },
                      rightColumns: {
                        length: 0
                      },

                    },
                    3: {
                      title: 'Eppie',
                      subtitle: 'Децентрализованная электронная почта, т.е. работает без участия почтового сервера, поэтому ее практически невозможно взломать или заблокировать,',
                      description: {
                        0:'Децентрализованная электронная почта, т.е. работает без участия почтового сервера, поэтому ее практически невозможно взломать или заблокировать, а личные данные из нее недоступны для кражи, анализа и рекламного таргетинга, и даже разработчикам. Сейчас в приложении доступно копирование почты из любого почтового аккаунта в безопасную распределенную сеть. Продукт Eppie на этом фоне выгодно отличается своими ключевыми характеристиками: Децентрализация. Полностью децентрализованная платформа делает невозможной блокировку и потерю данных. Шифрование. E2E шифрование включено по умолчанию для защиты переписки от просмотра и анализа. Простота. Привычный пользователям продукт, обратно совместимый с классической почтой, доступный на любом устройстве. Как будет работать сервис: Каждый пользователь, который установит Eppie, будет являться узлом сети. Чем больше пользователей, тем более надежной становится сеть; Пересылка писем будет происходить напрямую через одноранговую сеть без использования почтовых серверов; Перед отправкой каждое письмо шифруется, чтобы только получатель смог его прочитать; Зашифрованное письмо делится на части и шифруется еще раз, а части сохраняются в децентрализованной сети; При получении письма адресатом, зашифрованные части собираются в единое целое и расшифровываются.',
                        1:'При этом сейчас децентрализованная почта Eppie выглядит как стандартное почтовое приложение. Помимо использования собственного функционала, к почте можно подключить стандартные сервисы Gmail, Yandex и пр. если пользователь хочет написать письмо из Eppie в одну из классических почт, будут использоваться специально разработанные мосты. Приватность таких переписок, конечно, сразу снизится - так как содержимое письма пришедшего на Gmail сразу станет известно компании Google. Так что фича будет удобная для определенных менее чувствительных переписок, но для полностью безопасных коммуникаций нужно будет посылать сообщения только внутри децентрализованной почты. В период работы в Privacy Accelerator, команда активно работала с менторами по развитию бизнеса и маркетингу, сделала анализ рынка, занималась подготовкой планов по продвижению. Были изучены основные игроков рынка онлайн-почтовиков, включая Gmail, Outlook, Yahoo!, Yandex, Mail.ru. Децентрализованная почта, по сравнению с ними, имеет гораздо более высокий уровень приватности, ключи шифрования находятся у пользователей, и почтовая программа не имеет доступа к ним. Если же сравнивать решение Eppie с ProtonMail, Tutanotra, Countermail, то оно выглядит более безопасным, т.к. не использует серверы, а все данные шифруются и хранятся распределенно. Команда оценивает состояние рынка, как благоприятное для выпуска децентрализованной почты Eppie, т.к. продукт имеет выраженные преимущества перед конкурентами, а рынок Privacy Tech в целом растет. Закрытое бета-тестирование первого этапа по плану началось в феврале 2022 года. На него приглашаются энтузиасты для тестирования и получения обратной связи по работе почты. К концу 2022 года планируется аудит безопасности, а в 2023 стартует открытое бета-тестирование децентрализованной почты с привлечением до 10 тысяч пользователей. Далее - возможно развитие B2B версии, что может дать возможности по монетизации.',
                        length: 2
                      },
                      rightColumns: {
                        block0: {
                          0:'Web 3.0',
                          1:'первая почта',
                        },
                        length: 1
                      },

                    },
                    4: {
                      title: 'Securno',
                      subtitle: 'Проект«Секьюрно» – персональный ассистент по комплексной безопасности человека.',
                      description: {
                        0:'Проект«Секьюрно» – персональный ассистент по комплексной безопасности человека. Это волонтерский проект, разработанный специалистами по информационной безопасности и юристами Роскомсвободы. Авторы заявляют, что персональный ассистент поможет пользователям разобраться в аспектах цифровой, финансовой и личной безопасности, не прикладывая лишних усилий. Перед началом использования ресурса пользователям предлагается пройти короткий тест, который определит модель угроз, на основе которой и сформируется персональная система тренировки. Сейчас на сайте уже доступны гайды о том, настроить VPN, установить двухфакторную аутентификацию, зашифровать свои файлы и данные и многое другое. Еженедельно команда проекта размещает новые материалы, которые обучают, как действовать в чрезвычайных ситуациях, как оказать первую помощь, что надо предусмотреть, если придется срочно уезжать, стоит ли покупать криптовалюту и где хранить деньги. Этапы работы сервиса для пользователей с полным доступом: регистрация и создание аккаунта; прохождение тестирования для определения модели угроз. На ее основе сформируется ваша программа тренировки. самостоятельное изучение материалов и выполнение задач из персонального to-do листа.',
                        1:'В сервисе предусмотрена возможность читать все материалы без регистрации, однако для персонализации тренировок, выбора статей и использования менеджера задач необходима авторизация. За время акселератора команда проекта провела серию пользовательских интервью с правозащитниками, журналистами и аудиторией с невысоким уровнем технических знаний, так как именно эти категории видятся наиболее уязвимыми потенциальным рискам. Команда проекта «Секьюрно» придумала несколько новых фич, которые сейчас находятся в процессе реализации. Например, в ближайших планах: разработать авторизацию через телеграм; сделать функцию анонсов следующих материалов; спроектировать персональную рассылку пользователям, которая будет работать как “тревожная кнопка” – оперативно оповещать о повышении вероятность угрозы. Команда проекта небольшая, поэтому им важно начать формировать сообщество энтузиастов, готовых быть тестировщиками продукта, ловить баги, предлагать идеи новых материалов.',
                        length: 2
                      },
                      rightColumns: {
                        length: 0
                      },
                    },
                    length: 5
                  },
                },
                media: {
                  title: "Медиа о нас"
                },
                workContent: {
                  mainTitle: "Направления работы, на которых мы специализируемся",
                  page0: {
                    title: 'Приватность',
                    text: {
                      0: 'Проекты, отстаивающие право на конфиденциальность и направленные на защиту персональных данных пользователя, защиту информации, переписок, логи посещения сайтов',
                      1: 'Мы хотим создать технические решения по защите права на конфиденциальность.',
                      2: 'То есть тут блок скорее про свободу, отсутствие конфиденциальности в сети значит наличие контроля за твоими данными сторонних организаций или отдельных лиц',    
                      length: 3
                    },
                    exampleTitle: {
                        0: 'SelfPrivacy', 
                        1: 'KittyCloud', 
                        2: 'Amnezia',
                        length: 3
                    },
                    exampleText: {
                        0: `Платформа на хостинге пользователя для разворачивания приватных сервисов, управляемых мобильным приложением.`,
                        1: `Облачное файлохранилище с p2p-шифрованием.`,
                        2: `Бесплатное программное обеспечение с открытым исходным кодом для создания личного VPN на своём сервере.`,
                        length: 3
                    },
                  },
                  page1: {
                    title: 'Доступ, к информации',
                    text: {
                      0: 'Противодействие блокировкам (Амнезия), защита свободы слова (Get Site Copy) или же содействие улучшению качества распространения информации (Cекьюрно)',    
                      length: 1
                    },
                    exampleTitle: {
                        0: 'get site copy', 
                        1: 'Секьюрно',
                        length: 2
                    },
                    exampleText: {
                        0: `Телеграм-бот, позволяющий читать материалы заблокированных медиа без использования VPN`,
                        1: `Трекер привычек и персональный ассистент безопасности`,
                        length: 2
                    },
                  },
                  page2: {
                    title: 'LegalTech',
                    text: {
                      0: 'Проекты для автоматизации и цифровизации юридической работы',    
                      length: 1
                    },
                    exampleTitle: {
                      0: 'Персоналка', 
                      1: 'Nabu',
                      length: 2

                    },
                    exampleText: {
                        0: `Проверка соглашений о персональных данных`,
                        1: `WEB-сервис, извлекающий массивы данных по судебным решениям судов РФ`,
                        length: 2
                    },
                  },
                  example: 'Примеры',
                },
                deamhack: {
                  hackathon: 'Хакатон',
                  href: 'demhack.ru', 
                  text: {
                    0: 'Цель хакатона — поддержка духа сообщества, создание площадки для взаимодействия и сотрудничества специалистов из разных стран, возможность реализовать свои идеи для блага людей по всему миру и, защитить права на приватность и доступ к информации.', 
                    1: 'Мы собираем интересные идеи в формате заявок и задач на хакатон, а после хакатона поддерживаем команды, которые хотят продолжать работать над проектом. Основываясь на экспертных оценках и наблюдениях за работой команд на хакатоне, мы принимаем решение о продолжении работы с проектом в рамках акселератора.',
                    2: 'Таким образом мы выстраиваем цепочку создания и развития проектов в области свободы интернета и приватности от момента инициации идеи до выхода проекта на рынок.', 
                    3: 'С 2020 года Privacy Accelerator и ',
                    4: 'Роскомсвобода', 
                    5: ' проводят хакатон Demhack дважды в год.',
                    length: 6
                  },
                },
                moreAccelerator: {
                  mainTitle: {
                    0: 'Больше, чем', 
                    1: 'просто акселератор',
                  },
                  projects: {
                    0: {
                      title: 'Преакселератор',
                      context: 'В преакселераторе мы помогаем командам провести исследование рынка и анализ конкурентов, изучить аудиторию. Вы сможете развить свою идею и определиться с продуктом, который будет полезен для аудитории и востребован на рынке.',
                      needed: 'Наличие идеи и первоначальной разработки. Команда готова тратить на проект как минимум 20 часов в неделю.', 
                    },
                    1: {
                      title: 'Акселератор',
                      context: 'В акселераторе мы обеспечиваем менторскую поддержку или сопровождение проектов в областях cusdev, маркетинг, ui/ux, управление проектами, право и т.д. Кроме того иногда мы привлекаем экспертов в области кибербезопасности, devops и разработки, но сама разработка всех остается на стороне команд. Программа акселератора рассчитана на 3 месяца.',
                      needed: 'Наличие MVP и необходимой команды, готовых тратить на проект как минимум 20 часов в неделю. Для коммерческих проектов обязателен менеджер по продукту.',
                    }, 
                    2: {
                      title: 'Инкубатор',
                      context: 'Подойдет проектам на стадии масштабирования, а также командам, которые не готовы к акселерации из-за временных ограничений. Вы сможете пользоваться нашим нетворкингом, прицельно проконсультироваться с экспертами и получить помощь в своем проекте по нашим сферам компетенций.',
                      needed: 'Проект в сфере приватности, свободы информации или legaltech. Есть оцифрованные результаты развития проекта.',
                    },
                    length: 3
                  },
                  requirements: "требования",
                  price: '0₽',
                  subtitle: 'Стоимость участия',
                  pretitle: 'Как для некоммерческих, так и для коммерческих проектов участие бесплатно.',
                },
                house: {
                  mainTitle: {
                    0: 'Вот, что', 
                    1: 'может дать',
                    2: 'вашему проекту',
                  },
                  consultation: "Консультации с экспертами",
                  show: "Посмотреть всех экспертов",
                  experts: {
                    0: {
                      name: 'Станислав Шакиров',
                      description: 'Основатель Privacy Accelerator, сооснователь Школы киберправа и Digital Rights Center, технический директор и сооснователь Роскомсвободы. Эксперт в продвижении IT-продуктов, кибербезопасности и интернет-предпринимательстве.', 
                      photo: 'bg-StanislavShakirov',
                      allDescription: 'Основатель Privacy Accelerator, сооснователь Школы киберправа и Digital Rights Center, технический директор и сооснователь Роскомсвободы. Эксперт в продвижении IT-продуктов, кибербезопасности и интернет-предпринимательстве.',
                    },
                    1: {
                      name: 'Иван Михайлов',
                      description: 'CEO компании ADWIST, экс-заместитель исполнительного директора Hearst Shkulev Media. Эксперт по маркетингу для b2b и b2c продуктов, развитии и запуске проектов на международных рынках.', 
                      photo: 'bg-IvanMikhailov',
                      allDescription: 'CEO компании ADWIST, экс-заместитель исполнительного директора Hearst Shkulev Media. Эксперт по маркетингу для b2b и b2c продуктов, развитии и запуске проектов на международных рынках.',
                    },
                    2: {
                      name: 'Наталья Малышева',
                      description: 'Руководитель по связям с общественностью РосКомСвободы, журналист и экоактивист. Эксперт в области СМИ, коммуникаций и продвижения, организации общественных кампаний.', 
                      photo: 'bg-NataliyMalishova',
                      allDescription: 'Руководитель по связям с общественностью РосКомСвободы, журналист и экоактивист. Эксперт в области СМИ, коммуникаций и продвижения, организации общественных кампаний.',
                    },
                    3: {
                      name: 'Дарья Горбачева',
                      description: 'Координатор Privacy Accelerator. Опыт в области комьюнити-менеджмента, организации онлайн- и оффлайн-мероприятий.', 
                      photo: 'bg-DariaGorbacheva',
                      allDescription: 'Координатор Privacy Accelerator. Опыт в области комьюнити-менеджмента, организации онлайн- и оффлайн-мероприятий.',
                    },
                    4: {
                      name: 'Артем Игнатенко',
                      description: 'Agile Coach в X5 Retail, ex-Product Owner в Альфа-Банке, экс-директор департамента разработки группы IT-компаний, предприниматель.', 
                      photo: 'bg-ArtemIgnatenko',
                      allDescription: 'Agile Coach в X5 Retail, ex-Product Owner в Альфа-Банке, экс-директор департамента разработки группы IT-компаний, предприниматель. Эксперт в организации быстрой проверки продуктовых гипотез и организации процессов разработки продуктов.',
                    },
                    5: {
                      name: 'Екатерина Абашина',
                      description: 'Адвокат, медиаюрист. Эксперт в сфере медиа, электронной коммерции и защиты частной жизни.', 
                      photo: 'bg-EkaterinaAbashina',
                      allDescription: 'Адвокат, медиаюрист. Эксперт в сфере медиа, электронной коммерции и защиты частной жизни.',
                    },
                    6: {
                      name: 'Вадим Мисбах-Соловьев',
                      description: 'Системный администратор и технический консультант РосКомСвободы, интернет-предприниматель, эксперт по вопросам внедрения IT-технологий, криптографии и opensource-энтузиаст.', 
                      photo: 'bg-MisbahSoloviev',
                      allDescription: 'Системный администратор и технический консультант РосКомСвободы, интернет-предприниматель, эксперт по вопросам внедрения IT-технологий, криптографии и opensource-энтузиаст.',
                    },
                    7: {
                      name: 'Саркис Дарбинян',
                      description: 'Адвокат, глава юридической практики РосКомСвободы, управляющий в Цифровая коллегия адвокатов "DBA & Partners", эксперт в сфере защиты приватности и законодательства в сфере IT и IP.', 
                      photo: 'bg-SarkisDabrinyn',
                      allDescription: 'Адвокат, глава юридической практики РосКомСвободы, управляющий в Цифровая коллегия адвокатов "DBA & Partners", эксперт в сфере защиты приватности и законодательства в сфере IT и IP.',
                    },
                    8: {
                      name: 'Иван Бегтин',
                      description: 'Директор АНО Информационная культура, ведущий российский эксперт в области открытых данных, цифрового государства, госзакупок, госфинансов, приватности.', 
                      photo: 'bg-BegtinIvan',
                      allDescription: 'Директор АНО Информационная культура, ведущий российский эксперт в области открытых данных, цифрового государства, госзакупок, госфинансов, приватности.',
                    },
                    9: {
                      name: 'Владимир Ожерельев',
                      description: 'Юрист Центра цифровых прав. Эксперт в области персональных данных, интеллектуальной собственности, защиты деловой репутации и налогов.', 
                      photo: 'bg-VladimirOjereliev',
                      allDescription: 'Юрист Центра цифровых прав. Эксперт в области персональных данных, интеллектуальной собственности, защиты деловой репутации и налогов.',
                    },
                    10: {
                      name: 'Даниил Пленин',
                      description: 'Основатель Telegram-канала о венчурном бизнесе и стартапах «Русский венчур», пиар-директор международного образовательного стартапа «Алгоритмика».', 
                      photo: 'bg-PleninDaniil',
                      allDescription: 'Основатель Telegram-канала о венчурном бизнесе и стартапах «Русский венчур», пиар-директор международного образовательного стартапа «Алгоритмика».',
                    },
                    11: {
                      name: 'Алексей Шевелёв',
                      description: 'Руководитель отдела по работе с пользователями Хабр.', 
                      photo: 'bg-AlexShevelev',
                      allDescription: 'Руководитель отдела по работе с пользователями Хабр.',
                    },
                    12: {
                      name: 'Николай Дмитрик',
                      description: 'Заведующий лабораторией правовой информатики и кибернетики Юридического факультета МГУ имени М.В. Ломоносова. Эксперт в области электронного управления и цифровой трансформации государства и права.', 
                      photo: 'bg-DmitrikNikolay',
                      allDescription: 'Заведующий лабораторией правовой информатики и кибернетики Юридического факультета МГУ имени М.В. Ломоносова. Эксперт в области электронного управления и цифровой трансформации государства и права.',
                    },
                    13: {
                      name: 'Андрей Черватюк',
                      description: 'UX/UI-дизайнер. Эксперт по проектированию интерфейсов и юзабилити.', 
                      photo: 'bg-AndreyChevartuk',
                      allDescription: 'UX/UI-дизайнер. Эксперт по проектированию интерфейсов и юзабилити.',
                    },
                    length: 14,
                  },
                  networking: "Нетворкинг",
                  networkingDescription: "Обширные партнерские связи и нетворкинг с русскоязычными медиа и компаниями, а также международными проектами и фондами.",
                  networkingStepsTitle1: "Помощь с финансированием",
                  networkingStepsTitle2: "Выход на рынок",
                  networkingStepsTitle3: "Трекинг",
                  networkingStepsTitle4: "Лекции и воркшопы",
                  networkingStepsDescription1: "Бизнес-ангелы, венчурные и некоммерческие фонд",
                  networkingStepsDescription2: "Аудитория для Customer Development, первые последователи, масштабирование",
                  networkingStepsDescription3: "Целеполагание, четкий road map, развитие навыков, опыт и инструменты, чтобы бежать быстрее и эффективнее",
                  networkingStepsDescription4: "Практические занятия и материалы о Product Management, Customer Development, Fundraising",
                  popUpTitle: 'Эксперты'
                },
                team: {
                  mainTitle: 'Команда Акселератора',
                  experts: {
                    0: {
                      name: 'Станислав Шакиров',
                      description: 'Основатель Privacy Accelerator, сооснователь Школы киберправа и Digital Rights Center, технический директор и сооснователь Роскомсвободы. Эксперт в продвижении IT-продуктов, кибербезопасности и интернет-предпринимательстве.', 
                      photo: 'bg-StanislavShakirov',
                    },
                    1: {
                      name: 'Наталья Малышева',
                      description: 'Руководитель по связям с общественностью РосКомСвободы, журналист и экоактивист. Эксперт в области СМИ, коммуникаций и продвижения, организации общественных кампаний.', 
                      photo: 'bg-NataliyMalishova',
                    },
                    2: {
                      name: 'Дарья Горбачева',
                      description: 'Координатор Privacy Accelerator. Опыт в области комьюнити-менеджмента, организации онлайн- и оффлайн-мероприятий.', 
                      photo: 'bg-DariaGorbacheva',
                    },
                    length: 3
                  },
                  title: 'В 2020 году',
                  about: {
                    0: 'команда Роскомсвободы запустила акселератор для поддержки инициатив в сферах приватности и анонимности, доступа к информации и свободы слова, электронного участия, развития ценностей цифрового гражданства, защиту прав и реализацию интересов граждан в цифровой среде. Политическая и интернет-цензура в Российской Федерации неуклонно усиливается с 2012 года, достигнув пика в 2022 году. В ответ мы видим все больший запрос в обществе на сервисы для защиты данных и свободы интернета.',
                    1: 'Так например в 2022 году Россия переместилась с 15 места в мире по скачиванию VPN-сервисов на 2-е (с 2-3 млн до 12 млн. скачиваний). В Privacy Accelerator мы стремимся решить эти проблемы, запуская большее количество качественных проектов в сфере приватности и свободы интернета, а также повышая значимость проблем защиты данных, развивая интерес к теме среди разработчиков и предпринимателей.', 
                    2: 'История Рунета за 10 лет:',
                  },
                  href: 'https://x.roskomsvoboda.org'
                },
                contact: {
                  mainTitle: 'Контакты',
                  blocks: 'Подать заявку на вступление можно* Связаться с нами по всем остальным вопросам:* Следите за нами:',
                  value: 'здесь, почта, Telegram, Signal, на Хабре, в Telegram-канале, Facebook, LinkedIn',
                  here: "https://pd.roskomsvoboda.org/privacyaccelerator/",
                  mail: "mailto:team@privacyaccelerator.org",
                  telegram: "https://t.me/privacyaccelerator_team",
                  signal: "",
                  habr: "https://habr.com/en/company/privacyaccelerator/profile/",
                  telegramChanel: "https://t.me/privacyaccelerator",
                  facebook: "https://facebook.com/privacyaccelerator",
                  linkedIn: "https://www.linkedin.com/company/privacyaccelerator/about/",
                }

            },
        },
        en: {
            translation: {
                lan: 'рус',
                button: 'Apply',
                mediaShow: 'Show all',
                mediaHide: 'Hide',
                li: 'Projects, Our work, Team, Contacts',
                startPageTitle: 'We help to launch, hidh-quality products, in the sphere, of privacy, and Internet freedom',
                ourProjects: {
                  mainTitle: "Our projects",
                  projects: {
                    0: {
                      title: 'Amnezia',
                      subtitle: 'Amnezia VPN helps to access blocked content without revealing your privacy, even to VPN providers.',
                      description: {
                        0:'Amnezia VPN helps to access blocked content without revealing your privacy, even to VPN providers. The project won the first Demhack hackathon (https://demhack.ru) and received funding for open-source development from two non-profit foundations. The service is notable for its simple installation and usability, security and no fees for using VPN. These all things help to resist censorship and blockages of websites and online services.',
                        1:'Amnezia currently uses a wide stack of protocols (OpenVPN, WireGuard, Shadowsocks, Cloak, Pluggable Transport) and as a result is more difficult to block. Amnezia VPN works with open source technologies and has successfully passed a security audit conducted by Cure53. Amnezia VPN can thus be used by vulnerable groups, including independent media and human rights activists, as well as in repressive regimes or conflict-affected environments. From March to November 2022, the project\'s audience grew x5. And with the introduction of Amnezia Free - a free service for access blocked social networks and media in Russia, it was possible to increase the active audience of the project up to 150K, and the total number of downloads of Amnezia VPN for desktops reached 60K. Without the announcement of a mobile version, the number of downloads of the application for Android was more than 10K.',
                        length: 2
                      },
                      rightColumns: {
                        block0: {
                          0:'60К',
                          1:'total number of downloads of Amnezia VPN for desktops of 6 month',
                        },
                        block1: {
                          0:'+150К',
                          1:'increase the active audience of the project of 8 month',
                        },
                        length: 2
                      },
                    },
                    1: {
                      title: 'Get site copy',
                      subtitle: 'This tool provides access to media blocked by authorities in Russia. Currently the bot is used by 40% of the blocked media.',
                      description: {
                        0:'This tool provides access to media blocked by authorities in Russia. Currently the bot is used by 40% of the blocked media. The total audience of the media that uses our solution - 520K. Winner of the Demhack-5 hackathon and the Accelerator, the project was later integrated into Roskomsvoboda.',    
                        length: 1
                      },
                      rightColumns: {
                        block0: {
                          0:'40%',
                          1:'the bot is used the blocked media',
                        },
                        block1: {
                          0:'520К',
                          1:'total audience',
                        },
                        length: 2
                      },
                    },
                    2: {
                      title: 'Self Privacy',
                      subtitle: 'Open-source server platform on a user\'s hosting for deployment of personal private services (chat, social networking, mail, vpn, etc.)',
                      description: {
                        0:'Open-source server platform on a user\'s hosting for deployment of personal private services (chat, social networking, mail, vpn, etc.) managed through a mobile app via providers API (Hetzner, AWS, Cloudflare). Team develops an app that manages personal cloud services such as mail, chat, file cloud, password manager, etc. and doesn\'t leak your data.',
                        length: 1
                      },
                      rightColumns: {
                        length: 0
                      },

                    },
                    3: {
                      title: 'Eppie',
                      subtitle: 'Decentralized email, that works without the involvement of a mail server, so it is impossible to hack or block it',
                      description: {
                        0:'Decentralized email, that works without the involvement of a mail server, so it is impossible to hack or block it, and personal data is inaccessible to theft, analysis and advertising targeting, and even to developers. The app now allows users to copy mail from any mail account into a secure distributed network. The Eppie product is outstanding for its key features: - Decentralization. Fully decentralized platform makes data blocking and loss impossible. - Encryption. E2E encryption is enabled by default to protect correspondence from viewing and analysis. - Simplicity. User-friendly product, backward compatible with classic email, available on any device. How the service works:  Each user that installs Eppie will be a network node. The more users, the more secure the network becomes; Mail will be sent directly over the peer-to-peer network without the use of mail servers; Before sending, each mail is encrypted so that only the recipient could read it; Encrypted mail is divided into parts and encrypted again and the parts are stored in the decentralized network; When the recipient receives the mail, the encrypted parts are assembled as a whole and decrypted.',
                        1:'Eppie\'s decentralized mail now looks like a standard email application. In addition to using its own functionality, the mail can be connected to the standard services Gmail, Yandex, etc. If the user wants to write a letter from Eppie to one of the classic mail, specially designed bridges will be used. Privacy of such correspondence will immediately decrease - because the content of the letter sent to Gmail will immediately become known to Google. So this feature will be convenient for certain less sensitive correspondence, but for absolutely secure communication it will be necessary to send messages only within the decentralized mail. While working on Privacy Accelerator, the team worked with mentors on business development and marketing, did a market analysis, and prepared plans for the promotion. The major players in the online mail market including Gmail, Outlook, Yahoo!, Yandex, Mail.ru were studied. Decentralized mail in comparison has a much higher level of privacy, the encryption keys are with the users, and the mail program does not have access to them. If we compare the Eppie solution with ProtonMail, Tutanotra, Countermail, it looks more secure because it does not use servers and all data is encrypted and stored in a distributed manner. The team assesses the state of the market as favorable for the release of decentralized mail Eppie, as the product has distinct advantages over competitors, and the Privacy Tech market in general is growing. Closed beta testing of the first phase is scheduled to begin in February 2022. Enthusiasts are invited to test it and get feedback on mail performance. By the end of 2022 we\'ll have a security audit, and in 2023 we\'ll start open beta testing for decentralized mail, with up to 10,000 users. Then it is possible to develop a B2B version, which can provide monetization opportunities.',
                        length: 2
                      },
                      rightColumns: {
                        block0: {
                          0:'Web 3.0',
                          1:'first mail',
                        },
                        length: 1
                      },

                    },
                    4: {
                      title: 'Securno',
                      subtitle: 'The "Securno" project is a personal assistant for human security.',
                      description: {
                        0:'The "Securno" project is a personal assistant for human security. It is a volunteer project developed by information security specialists and RoskomSvoboda lawyers. The authors declare that the personal assistant will help users to understand the aspects of digital, financial and personal security without any extra effort. Before starting to use this tool, users are offered to take a short test that will determine the threat model. On its basis a personal training system will be formed. Now there are already guides on how to set up a VPN, two-factor authentication, encryption of personal files and data, and more. Every week the project team places new materials which teach how to act in emergency situations, how to provide first aid, what to do if you have to leave urgently, whether to buy cryptocurrency and where to keep money. Stages of the service for users with full access: register and create an account; go through testing to determine the threat model. Your training program will be formed on its basis. self-study of materials and performing tasks from your personal to-do list.',
                        1:'The service allows users to read all materials without registration, but authorization is required to personalize training, select articles, and use the task manager. During the acceleration program, the project team conducted a series of user interviews with human rights defenders, journalists, and the audience with a low level of technical knowledge, as these are the categories seen as most vulnerable to potential risks. The Securno project team came up with several new features, which are now in the process of implementation. For example, in the near future plans: to develop an authorization via Telegram, to make a function of announcement of the next materials, to design a personal newsletter to users, which will work as an "alarm button" - to promptly notify about the possible threat. The project team is small, so it is important for them to start building a community of enthusiasts who are ready to be testers of the product, catch bugs, and propose ideas for new materials. ',
                        length: 2
                      },
                      rightColumns: {
                        length: 0
                      },
                    },
                    length: 5
                  },
                },
                media: {
                  title: "Media about us"
                },
                workContent: {
                  mainTitle: "Areas of work in which we specialize",
                  page0: {
                    title: 'Privacy',
                    text: {
                      0: 'Projects that defend the right to privacy and are aimed at protecting the personal data of users, protecting information, correspondence, and logs of sites visiting.',
                      1: 'We want to create technical solutions to defend the right to privacy.',
                      2: 'So here the block is more about freedom, no privacy on the net means that there is a control of your data by a third party or an individual',    
                      length: 3
                    },
                    exampleTitle: {
                        0: 'SelfPrivacy', 
                        1: 'KittyCloud', 
                        2: 'Amnezia',
                        length: 3
                    },
                    exampleText: {
                        0: `A platform on a user’s hosting to deploy private services managed by a mobile app.`,
                        1: `Cloud file storage with p2p encryption.`,
                        2: `Free open source software for creating a personal VPN on your own server.`,
                        length: 3
                    },
                  },
                  page1: {
                    title: 'Access, to information',
                    text: {
                      0: 'Countermeasures against blockages (Amnezia), protecting freedom of speech (Get Site Copy), or assisting in improving the quality of information dissemination (Securno)',    
                      length: 1
                    },
                    exampleTitle: {
                        0: 'get site copy', 
                        1: 'Securno',
                        length: 2
                    },
                    exampleText: {
                        0: `Telegram bot that allows to read content from blocked media without using a VPN`,
                        1: `Habit tracker and personal security assistant`,
                        length: 2
                    },
                  },
                  page2: {
                    title: 'LegalTech',
                    text: {
                      0: 'Projects for automation and digitalization of legal work',    
                      length: 1
                    },
                    exampleTitle: {
                      0: 'Personalka', 
                      1: 'Nabu',
                      length: 2

                    },
                    exampleText: {
                        0: `Verification of personal data agreements`,
                        1: `WEB-service that retrieves data sets of judicial decisions of courts of Russian Federation`,
                        length: 2
                    },
                  },
                  example: 'Examples',
                },
                deamhack: {
                  hackathon: 'Hackathon',
                  href: 'demhack.ru',
                  text: {
                    0: 'The purpose of the hackathon is to support community spirit, create a platform for interaction and cooperation between specialists from different countries, the possibility to implement your ideas for the benefit of people around the world and to protect the rights for privacy and access to information.', 
                    1: 'We accumulate interesting ideas in the form of applications and tasks for the hackathon, and after the hackathon we support teams that want to continue their work on the project. Based on expert evaluations and observations of the teams\' work at the hackathon, we decide to continue working with the project within the acceleration program.',
                    2: 'This is how we build a chain for the development and creation of projects in the sphere of Internet freedom and privacy, from the moment the idea is initiated until the project enters the market.', 
                    3: 'Since 2020 Privacy Accelerator and ',
                    4: 'Roskomskvoboda', 
                    5: ' hold a Demhack hackathon twice a year.',
                    length: 6
                  },
                },
                moreAccelerator: {
                  mainTitle: {
                    0: 'More than',
                    1: 'just an accelerator',
                  },
                  projects: {
                    0: {
                      title: 'Pre-accelerator',
                      context: 'At the preaccelerator level, we help teams conduct market research and competitor analysis and study the target audience. We help to develop the idea and decide on the product, which will be useful for the audience and demanded in the market.',
                      needed: 'Have an idea and initial development. The team is ready to spend at least 20 hours a week on the project.', 
                    },
                    1: {
                      title: 'Accelerator',
                      context: 'In the accelerator we provide mentorship or support for projects in the spheres of cusdev, marketing, ui/ux, project management, law, etc. We also involve experts in cybersecurity, devops and development spheres, but the development itself remains on the side of the teams. The acceleration program is designed for 3 months.',
                      needed: 'MVP and the necessary team ready to spend at least 20 hours per week for the project. A product manager is mandatory for commercial projects.',
                    }, 
                    2: {
                      title: 'Incubator',
                      context: 'Suitable for projects in the scaling stage, as well as for teams that are not ready for acceleration due to time constraints. You will benefit from our networking, targeted consultations with experts and assistance with your project in our areas of expertise.',
                      needed: 'A project in the sphere of privacy, freedom of information or legaltech. Got digitized results of project development.',
                    },
                    length: 3
                  },
                  requirements: "requirements",
                  price: '0$',
                  subtitle: 'Cost of participation',
                  pretitle: 'Participation is free for both non-profit and for-profit projects.',
                },
                house: {
                  mainTitle: {
                    0: 'That\'s what',
                    1: 'can give', 
                    2: 'your project',
                  },
                  consultation: "Consultations with experts",
                  show: "View all experts",
                  experts: {
                    0: {
                      name: 'Stanislav Shakirov',
                      description: 'Founder of Privacy Accelerator, co-founder of Cyberlaw School and Digital Rights Center, CTO and co-founder of Roskomsvoboda. Expert in the promotion of IT products, cyber-security and internet-entrepreneurship.', 
                      photo: 'bg-StanislavShakirov',
                      allDescription: 'Founder of Privacy Accelerator, co-founder of Cyberlaw School and Digital Rights Center, CTO and co-founder of Roskomsvoboda. Expert in the promotion of IT products, cyber-security and internet-entrepreneurship.',
                    },
                    1: {
                      name: 'Ivan Mikhailov',
                      description: 'CEO of ADWIST, former deputy executive director of Hearst Shkulev Media. Expert in marketing for b2b and b2c products, development and launch of projects in international markets.', 
                      photo: 'bg-IvanMikhailov',
                      allDescription: 'CEO of ADWIST, former deputy executive director of Hearst Shkulev Media. Expert in marketing for b2b and b2c products, development and launch of projects in international markets.',
                    },
                    2: {
                      name: 'Natalya Malysheva',
                      description: 'Head of communications for Roskomsvoboda, journalist and eco-activist. Expert in the sphere of mass media, communications and promotion, organizing public campaigns.', 
                      photo: 'bg-NataliyMalishova',
                      allDescription: 'Head of communications for Roskomsvoboda, journalist and eco-activist. Expert in the sphere of mass media, communications and promotion, organizing public campaigns.',
                    },
                    3: {
                      name: 'Daria Gorbacheva',
                      description: 'Coordinator of Privacy Accelerator. Experienced in community management and the organization of online and offline events.', 
                      photo: 'bg-DariaGorbacheva',
                      allDescription: 'Coordinator of Privacy Accelerator. Experienced in community management and the organization of online and offline events.',
                    },
                    4: {
                      name: 'Artem Ignatenko',
                      description: 'Agile Coach at X5 Retail, ex Product Owner at Alfa Bank, ex-Director of Development department of the group of IT companies, entrepreneur.', 
                      photo: 'bg-ArtemIgnatenko',
                      allDescription: 'Agile Coach at X5 Retail, ex Product Owner at Alfa Bank, ex-Director of Development department of the group of IT companies, entrepreneur. Expert in quick methods of hypothesis testing and arrangement of product development processes.',
                    },
                    5: {
                      name: 'Ekaterina Abashina.',
                      description: 'Attorney and media lawyer. Expert in media, e-commerce and privacy protection.', 
                      photo: 'bg-EkaterinaAbashina',
                      allDescription: 'Attorney and media lawyer. Expert in media, e-commerce and privacy protection.',
                    },
                    6: {
                      name: 'Vadim Misbach-Soloviev.',
                      description: 'System administrator and technical advisor for Roskomsvoboda, Internet entrepreneur, expert in implementation of IT technologies, cryptography and opensource-enthusiast.', 
                      photo: 'bg-MisbahSoloviev',
                      allDescription: 'System administrator and technical advisor for Roskomsvoboda, Internet entrepreneur, expert in implementation of IT technologies, cryptography and opensource-enthusiast.',
                    },
                    7: {
                      name: 'Sarkis Darbinyan',
                      description: 'Attorney at law, head of Roskomsvoboda legal department, managing partner at Digital Bar Association “DBA & Partners", expert in the protection of privacy and legislation in the sphere of IT and IP.', 
                      photo: 'bg-SarkisDabrinyn',
                      allDescription: 'Attorney at law, head of Roskomsvoboda legal department, managing partner at Digital Bar Association “DBA & Partners", expert in the protection of privacy and legislation in the sphere of IT and IP.',
                    },
                    8: {
                      name: 'Ivan Begtin',
                      description: 'Director of ANO InfoCulture, the leading Russian expert in the field of open data, digital government, public procurement, public finance, privacy.', 
                      photo: 'bg-BegtinIvan',
                      allDescription: 'Director of ANO InfoCulture, the leading Russian expert in the field of open data, digital government, public procurement, public finance, privacy.',
                    },
                    9: {
                      name: 'Vladimir Ozherelyev',
                      description: 'Lawyer of Digital Rights Centre. Expert in the sphere of personal data, IP, protection of business reputation and taxes.', 
                      photo: 'bg-VladimirOjereliev',
                      allDescription: 'Lawyer of Digital Rights Centre. Expert in the sphere of personal data, IP, protection of business reputation and taxes.',
                    },
                    10: {
                      name: 'Daniil Plenin',
                      description: 'Daniel is founder of the Russian Venture Telegram channel about venture business and startups; PR-director of the international educational startup «Algoritmika».', 
                      photo: 'bg-PleninDaniil',
                      allDescription: 'Daniel is founder of the Russian Venture Telegram channel about venture business and startups; PR-director of the international educational startup «Algoritmika».',
                    },
                    11: {
                      name: 'Alexey Shevelev',
                      description: 'Head of user relations at Habr.', 
                      photo: 'bg-AlexShevelev',
                      allDescription: 'Head of user relations at Habr.',
                    },
                    12: {
                      name: 'Nikolay Dmitrik',
                      description: 'Head of Legal Informatics and Cybernetics Laboratory of the Faculty of Law of Lomonosov Moscow State University. Expert in the sphere of electronic governance and digital transformation of the state and law.', 
                      photo: 'bg-DmitrikNikolay',
                      allDescription: 'Head of Legal Informatics and Cybernetics Laboratory of the Faculty of Law of Lomonosov Moscow State University. Expert in the sphere of electronic governance and digital transformation of the state and law.',
                    },
                    13: {
                      name: 'Andrei Chervatyuk',
                      description: 'UX/UI designer. Expert in designing interfaces and usability.',
                      photo: 'bg-AndreyChevartuk',
                      allDescription: 'UX/UI designer. Expert in designing interfaces and usability.',
                    },
                    length: 14
                  },
                  networking: "Networking",
                  networkingDescription: "Extensive partnerships and networking with Russian-language media and companies as well as international projects and foundations.",
                  networkingStepsTitle1: "Assistance with financing",
                  networkingStepsTitle2: "Access to the market",
                  networkingStepsTitle3: "Tracking",
                  networkingStepsTitle4: "Lectures and workshops",
                  networkingStepsDescription1: "Business angels, venture capital and nonprofit foundations",
                  networkingStepsDescription2: "Customer Development Audiences, First Followers, Scaling Up",
                  networkingStepsDescription3: "Goal setting, a clear road map, skill development, experience and tools to run faster and more efficiently",
                  networkingStepsDescription4: "Hands-on sessions and materials on Product Management, Customer Development, Fundraising",
                  popUpTitle: 'Experts'
                },
                team: {
                  mainTitle: 'Team of Accelerator',
                  experts: {
                    0: {
                      name: 'Stanislav Shakirov', 
                      description: 'Founder of Privacy Accelerator, co-founder of Cyberlaw School and Digital Rights Center, CTO and co-founder of Roskomsvoboda. Expert in the promotion of IT products, cyber-security and internet-entrepreneurship.',
                      photo: 'bg-StanislavShakirov'
                    },
                    1: {
                      name: 'Natalya Malysheva', 
                      description: 'Head of communications for Roskomsvoboda, journalist and eco-activist. Expert in the sphere of mass media, communications and promotion, organizing public campaigns.',
                      photo: 'bg-NataliyMalishova'
                    },
                    2: {
                      name: 'Daria Gorbacheva', 
                      description: 'Coordinator of Privacy Accelerator. Experienced in community management and the organization of online and offline events.',
                      photo: 'bg-DariaGorbacheva'
                    },
                    length: 3
                  },
                  title: 'In 2020',
                  about: {
                    0: 'Roskomsvoboda launched an Accelerator to support projects in the spheres of privacy and anonymity, access to information and freedom of speech, e-participation, development of digital citizenship values, protection of rights and protection of citizens\' interests in the digital environment. Political and Internet censorship in the Russian Federation has been steadily increasing since 2012, peaking in 2022. As a response, we see a growing demand in society for services that protect data and freedom of the Internet.',
                    1: 'For example, in 2022, Russia moved from the 15th place in the world to the 2nd (from 2-3 million to 12 million downloads) in downloading VPN services. Privacy Accelerator is meant to solve these problems by launching more high-quality projects in the sphere of privacy and Internet freedom, as well as increasing the importance of data protection issues, developing interest to the topic among developers and entrepreneurs.', 
                    2: 'History of Runet in 10 years:',
                  },
                  href: 'https://x.roskomsvoboda.org'
                },
                contact: {
                  mainTitle: 'Contacts',
                  blocks: 'You can apply to join* Contact us for all other questions:* Follow us:',
                  value: 'here, mail, Telegram, Signal, Habr, Telegram chanel, Facebook, LinkedIn',
                  here: "https://pd.roskomsvoboda.org/privacyaccelerator/",
                  mail: "mailto:team@privacyaccelerator.org",
                  telegram: "https://t.me/privacyaccelerator_team",
                  signal: "",
                  habr: "https://habr.com/en/company/privacyaccelerator/profile/",
                  telegramChanel: "https://t.me/privacyaccelerator",
                  facebook: "https://facebook.com/privacyaccelerator",
                  linkedIn: "https://www.linkedin.com/company/privacyaccelerator/about/",
                }
            }
        }
    }
  })

export default i18n;