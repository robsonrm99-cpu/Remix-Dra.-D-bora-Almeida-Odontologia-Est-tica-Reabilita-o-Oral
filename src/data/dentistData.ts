export interface Specialty {
  id: string;
  title: string;
  category: 'estetica' | 'reabilitacao' | 'prevencao' | 'harmonizacao';
  shortDescription: string;
  fullDescription: string;
  indication: string;
  duration: string;
  sessions: string;
  benefits: string[];
  careTips: string[];
  accentColor: string;
}

export interface BeforeAfterCase {
  id: string;
  title: string;
  category: string;
  description: string;
  aspects: string[];
  beforeLabel: string;
  afterLabel: string;
  badge: string;
  beforeImage: string;
  afterImage: string;
  beforeDetails: {
    colorTone: string;
    description: string;
    issue: string;
  };
  afterDetails: {
    colorTone: string;
    description: string;
    solution: string;
  };
}

export interface Review {
  id: string;
  name: string;
  city: string;
  date: string;
  rating: number;
  treatment: string;
  comment: string;
  avatarInitials: string;
}

export interface InstagramPost {
  id: string;
  title: string;
  category: string;
  likes: number;
  comments: number;
  caption: string;
  date: string;
  imageAlt: string;
  themeColor: string;
}

export const DENTIST_INFO = {
  name: "Dra. Débora Almeida",
  cro: "CRO-PE 14.892",
  tagline: "Odontologia Estética & Reabilitação Oral",
  subheading: "Transformando sorrisos com precisão científica, olhar artístico e o acolhimento da odontologia humanizada no Vale do São Francisco.",
  phone: "+55 (87) 99112-3727",
  phoneRaw: "5587991123727",
  instagramHandle: "@dradeboraalmeiida",
  instagramUrl: "https://www.instagram.com/dradeboraalmeiida/",
  logoUrl: "https://res.cloudinary.com/dsevqnhts/image/upload/v1791559055/Capturar1_bh9nkn.png",
  photoUrl: "https://res.cloudinary.com/dsevqnhts/image/upload/v1791559055/Capturar_nkw0g1.png",
  address: {
    building: "Empresarial Trade Center",
    room: "Sala 1406 (14º Andar)",
    city: "Petrolina - PE",
    cep: "56302-000",
    reference: "Centro empresarial de referência de Petrolina, próximo aos principais polos médicos e bancários",
    googleMapsUrl: "https://maps.google.com/?q=Empresarial+Trade+Center+Petrolina+PE",
    wazeUrl: "https://waze.com/ul?q=Trade+Center+Petrolina",
  },
  hours: [
    { days: "Segunda a Sexta", time: "08:00 às 18:30" },
    { days: "Sábados", time: "08:00 às 12:30 (Atendimento com hora marcada)" },
    { days: "Domingos e Feriados", time: "Fechado (Plantão sob agendamento prévio)" }
  ],
  stats: [
    { value: "+1.200", label: "Sorrisos Transformados" },
    { value: "5.0 ★", label: "Avaliação no Google" },
    { value: "Sala 1406", label: "Trade Center Petrolina" },
    { value: "100%", label: "Atendimento Humanizado" }
  ]
};

export const SPECIALTIES: Specialty[] = [
  {
    id: "lentes-contato",
    title: "Lentes de Contato Dental",
    category: "estetica",
    shortDescription: "Lâminas ultrafinas de cerâmica pura para corrigir forma, cor, proporções e alinhamento do sorriso de forma definitiva.",
    fullDescription: "As lentes de contato dentais são finíssimas peças confeccionadas em porcelana/dissilicato de lítio (E-max), desenhadas milimetricamente para se adaptarem à superfície vestibular dos dentes. Com preparo ultraconservador e preservação máxima da estrutura dental natural, proporcionam brilho, translucidez e harmonia insuperáveis.",
    indication: "Dentes escurecidos, manchados, com pequenas fraturas, desalinhamentos leves, diastemas (espaços) ou proporções anatômicas desarmônicas.",
    duration: "Planejamento em 2 a 3 consultas",
    sessions: "Geralmente 3 sessões (DSD, prova do mock-up e cimentação final)",
    benefits: [
      "Estabilidade de cor permanente (não sofrem pigmentação com café, vinho ou chá)",
      "Brilho e translucidez idênticos ao esmalte dental natural",
      "Planejamento digital com teste prévio (mock-up) antes de iniciar",
      "Alta durabilidade e biocompatibilidade com os tecidos gengivais"
    ],
    careTips: [
      "Manter higienização diária e uso regular do fio dental",
      "Realizar profilaxia de manutenção preventiva a cada 6 meses",
      "Utilizar placa miorrelaxante se houver histórico de bruxismo"
    ],
    accentColor: "#C59F5A"
  },
  {
    id: "facetas-resina",
    title: "Facetas em Resina Composta",
    category: "estetica",
    shortDescription: "Técnica direta e minimamente invasiva, capaz de renovar o sorriso em sessão única com resinas de alta tecnologia.",
    fullDescription: "As facetas diretas em resina composta são esculpidas camada por camada diretamente sobre o dente pela Dra. Débora Almeida, reproduzindo mamelos, efeitos de opalescência, halo incisal e texturas tridimensionais que mimetizam a perfeição da natureza.",
    indication: "Pessoas que buscam resultado estético de alto impacto em menor tempo, fechamento de diastemas ou remodelamento de dentes conóides.",
    duration: "Sessão única ou 2 consultas",
    sessions: "1 a 2 sessões para execução e polimento de alto brilho",
    benefits: [
      "Procedimento rápido, na maioria das vezes finalizado no mesmo dia",
      "Mínimo ou nenhum desgaste da estrutura dental sadia",
      "Fácil manutenção e possibilidade de reparos pontuais sem trocar todo o jogo",
      "Excelente custo-benefício para estética de alto padrão"
    ],
    careTips: [
      "Evitar morder objetos rígidos ou abrir embalagens com os dentes",
      "Retornar semestralmente para manutenção do brilho e repolimento",
      "Higienização com escova de cerdas ultramacias"
    ],
    accentColor: "#D0AD6E"
  },
  {
    id: "clareamento-dental",
    title: "Clareamento Dental Personalizado",
    category: "estetica",
    shortDescription: "Protocolo seguro e individualizado (laser no consultório + caseiro supervisionado) com foco no conforto e sem sensibilidade dolorosa.",
    fullDescription: "Trabalhamos com o padrão-ouro de clareamento: a associação inteligente entre sessões clínicas de alta potência no consultório com moldeiras anatômicas confeccionadas sob medida para uso noturno ou diurno supervisionado, acompanhado de agentes dessensibilizantes de última geração.",
    indication: "Dentes amarelados por idade, consumo de alimentos pigmentados (café, açaí, vinho), tabagismo ou predisposição genética.",
    duration: "Tratamento de 2 a 4 semanas",
    sessions: "1 a 2 sessões de consultório + protocolo domiciliar",
    benefits: [
      "Dentes visivelmente mais brancos e luminosos de forma homogênea",
      "Protocolo anti-sensibilidade exclusivo para máximo conforto",
      "Preservação integral da integridade mineral do esmalte dental",
      "Acompanhamento fotográfico digital antes e depois"
    ],
    careTips: [
      "Evitar excesso de corantes nos primeiros dias após a sessão",
      "Utilizar o gel conforme orientação rigorosa da Dra. Débora",
      "Armazenar as moldeiras secas no estojo higiênico"
    ],
    accentColor: "#B88E4B"
  },
  {
    id: "harmonizacao-orofacial",
    title: "Harmonização Orofacial & Estética",
    category: "harmonizacao",
    shortDescription: "Procedimentos sutis que integram a moldura dos lábios e da face à beleza do seu sorriso, sempre com naturalidade.",
    fullDescription: "A harmonização facial na odontologia visa o equilíbrio entre o sorriso e a arquitetura facial. Através de toxina botulínica para correção de sorriso gengival, preenchimento labial com ácido hialurônico para contorno e hidratação e bioestimuladores de colágeno, valorizamos seus traços originais.",
    indication: "Sorriso gengival, lábios desidratados ou com perda de volume, linhas de expressão periorais (código de barras) e assimetrias.",
    duration: "Procedimento em 40 a 60 minutos",
    sessions: "1 sessão com retorno para revisão e toques em 15 dias",
    benefits: [
      "Correção precisa de exposição excessiva da gengiva ao sorrir",
      "Lábios delineados, hidratados e em proporção harmoniosa",
      "Produtos de marcas líderes globais devidamente regulamentados pela ANVISA",
      "Resultado natural: elegância que rejuvenesce sem exageros"
    ],
    careTips: [
      "Não massagear o local nas primeiras 24 horas",
      "Evitar atividades físicas intensas no dia da aplicação",
      "Usar protetor solar diariamente na região tratada"
    ],
    accentColor: "#C59F5A"
  },
  {
    id: "reabilitacao-oral",
    title: "Reabilitação Oral & Próteses",
    category: "reabilitacao",
    shortDescription: "Devolução da mastigação correta, estabilidade articular e beleza com próteses livres de metal (metal-free em zircônia).",
    fullDescription: "A reabilitação oral é o planejamento global de saúde mastigatória e fonética. Unindo próteses estéticas cerâmicas, coroas em zircônia e técnicas modernas de oclusão, restauramos tanto a função biológica de pacientes com perdas dentárias quanto a jovialidade facial.",
    indication: "Dentes fraturados, perdas de dentes posteriores ou anteriores, desgastes severos por bruxismo ou próteses antigas desadaptadas.",
    duration: "Planejado caso a caso",
    sessions: "Variável conforme o plano reabilitador global",
    benefits: [
      "Recuperação completa da mastigação e do prazer de comer",
      "Ausência de linha preta acinzentada na margem gengival (100% metal-free)",
      "Alívio de dores articulares decorrentes de perda de dimensão vertical",
      "Estética natural que rejuvenesce o terço inferior da face"
    ],
    careTips: [
      "Uso de fio dental com passa-fio ou escovas interdentais dedicadas",
      "Acompanhamento radiográfico periódico",
      "Consultas de manutenção preventiva"
    ],
    accentColor: "#9B7337"
  },
  {
    id: "profilaxia-prevencao",
    title: "Profilaxia, Check-up & Prevenção",
    category: "prevencao",
    shortDescription: "Limpeza profunda ultrassônica com jato de bicarbonato, diagnóstico precoce e blindagem da saúde gengival.",
    fullDescription: "A base de todo sorriso bonito é a gengiva saudável. Nosso protocolo de profilaxia no Trade Center conta com ultrassom delicado, remoção de biofilme e manchas extrínsecas, polimento coronário e orientação de higiene com foco em prevenção continuada.",
    indication: "Todos os pacientes para manutenção da saúde bucal a cada 6 meses, profilaxia pré-clareamento ou pré-procedimentos estéticos.",
    duration: "Sessão de 45 a 60 minutos",
    sessions: "Sessão única semestral",
    benefits: [
      "Gengivas desinflamadas, sem sangramentos e com hálito fresco",
      "Remoção de tártaro e manchas de café, chá e pigmentos",
      "Prevenção eficaz contra cáries e doenças periodontais",
      "Sensação imediata de limpeza, leveza e dentes lisos"
    ],
    careTips: [
      "Escovação após as principais refeições",
      "Uso diário de fio dental antes de dormir",
      "Agendar retorno preventivo semestral"
    ],
    accentColor: "#AA8138"
  },
  {
    id: "restauracoes-biomimeticas",
    title: "Restaurações Estéticas Biomiméticas",
    category: "reabilitacao",
    shortDescription: "Substituição de restaurações escuras antigas por resinas de última geração que se fundem perfeitamente à cor do seu dente.",
    fullDescription: "A odontologia biomimética busca imitar a biomecânica e a translucidez natural do elemento dentário. Substituímos restaurações escuras em amálgama ou resinas antigas manchadas por compósitos nanoparticulados com selamento adesivo de excelência.",
    indication: "Dentes com cáries, fraturas de restaurações antigas ou pacientes descontentes com restaurações metálicas escuras.",
    duration: "Sessão de 45 a 90 minutos por dente",
    sessions: "Normalmente 1 sessão por quadrante",
    benefits: [
      "Eliminação de manchas escuras e sombras metálicas no sorriso",
      "Selamento adesivo com proteção contra infiltrações",
      "Anatomia esculpida respeitando sulcos e cúspides naturais",
      "Reforço estrutural da cúspide dental"
    ],
    careTips: [
      "Higienização com escova macia",
      "Evitar morder gelo ou balas muito duras",
      "Check-up semestral da integridade das margens adesivas"
    ],
    accentColor: "#D0AD6E"
  },
  {
    id: "gengivoplastia-estetica",
    title: "Gengivoplastia & Plástica Periodontal",
    category: "estetica",
    shortDescription: "Remodelação do contorno gengival para corrigir assimetrias e dar proporção alongada e elegante aos dentes curtos.",
    fullDescription: "Muitas vezes o sorriso parece pequeno ou escondido porque a gengiva cobre mais da coroa do que o ideal. Com técnicas cirúrgicas minimamente invasivas e microcirurgia plástica periodontal, delineamos a moldura vermelha para que os dentes ganhem sua proporção dourada ideal.",
    indication: "Sorriso com dentes aparentemente 'curtos' ou 'quadrados', contorno gengival assimétrico ou exposição irregular de gengiva.",
    duration: "Sessão de 60 minutos",
    sessions: "1 procedimento com pós-operatório rápido e confortável",
    benefits: [
      "Dentes com altura e proporção esteticamente ideais",
      "Harmonia simétrica entre o lado direito e esquerdo do arco dental",
      "Cura rápida e confortável com protocolos de cicatrização acelerada",
      "Resultado que potencializa lentes ou clareamentos futuros"
    ],
    careTips: [
      "Alimentação morna ou fria nas primeiras 48 horas",
      "Escovação ultra suave com bochecho indicado pela profissional",
      "Retorno em 7 a 10 dias para acompanhamento de cicatrização"
    ],
    accentColor: "#B88E4B"
  }
];

export const BEFORE_AFTER_CASES: BeforeAfterCase[] = [
  {
    id: "caso-lentes",
    title: "Harmonização com Lentes em Cerâmica",
    category: "Lentes de Contato Dental",
    description: "Paciente desejava dentes mais iluminados, com fechamento de pequenos diastemas anteriores e correção da proporção incisal para um formato mais jovem e feminino.",
    aspects: ["Textura natural", "Fechamento de diastema", "Translucidez incisal", "Cor A1/BL3 natural"],
    beforeLabel: "Antes do Procedimento",
    afterLabel: "Resultado Final (30 dias)",
    badge: "Caso Clínico 01",
    beforeImage: "/src/assets/images/smile_veneers_before_1791560359359.jpg",
    afterImage: "/src/assets/images/smile_veneers_after_1791560375132.jpg",
    beforeDetails: {
      colorTone: "Tom A3 / Desarmônico",
      description: "Desgaste nas bordas incisais, manchas leves e desproporção entre os incisivos centrais e laterais com diastema.",
      issue: "Sorriso retraído e queixa de dentes amarelados ao fotografar."
    },
    afterDetails: {
      colorTone: "Tom BL3 / Brilho Natural",
      description: "6 lentes cerâmicas em dissilicato de lítio, com halo incisal suave e microtexturas que refletem a luz com naturalidade.",
      solution: "Sorriso amplo, curvilíneo e harmônico com a linha labial."
    }
  },
  {
    id: "caso-clareamento",
    title: "Clareamento Conjugado de Alta Performance",
    category: "Clareamento Dental",
    description: "Protocolo exclusivo combinando 2 sessões clínicas de consultório com 14 dias de moldeira personalizada domiciliar e dessensibilizante.",
    aspects: ["Zero sensibilidade", "Clareamento uniforme", "Brilho do esmalte", "6 tons mais claros"],
    beforeLabel: "Antes do Clareamento",
    afterLabel: "Depois do Protocolo",
    badge: "Caso Clínico 02",
    beforeImage: "/src/assets/images/whitening_before_1791560388341.jpg",
    afterImage: "/src/assets/images/whitening_clean_after_1791560467943.jpg",
    beforeDetails: {
      colorTone: "Tom A3.5 (Escala VITA)",
      description: "Pigmentação acumulada por anos de consumo diário de café e pigmentos alimentares.",
      issue: "Insegurança ao sorrir de perto e queixa de aspecto cansado."
    },
    afterDetails: {
      colorTone: "Tom B1 / Luminoso",
      description: "Remoção profunda dos cromóforos sem alterar a integridade da matriz de esmalte.",
      solution: "Dentes com vitalidade, luminosidade jovem e aspecto saudável."
    }
  },
  {
    id: "caso-facetas-resina",
    title: "Facetas em Resina Composta Estratificada",
    category: "Facetas em Resina",
    description: "Transformação realizada em sessão única sem qualquer desgaste de dente sadio, devolvendo volume aos incisivos conóides e bordas fraturadas.",
    aspects: ["Sessão única", "Zero desgaste", "Biomimética pura", "Polimento espelhado"],
    beforeLabel: "Antes das Facetas",
    afterLabel: "Imediato Pós-Polimento",
    badge: "Caso Clínico 03",
    beforeImage: "/src/assets/images/smile_resin_before_1791560417484.jpg",
    afterImage: "/src/assets/images/smile_resin_after_1791560433562.jpg",
    beforeDetails: {
      colorTone: "Dentes curtos e bordas fraturadas",
      description: "Bordas incisais fraturadas e espaços assimétricos gerando sombras nos dentes da frente.",
      issue: "Sorriso com dentes quebrados e receio de sorrir em público."
    },
    afterDetails: {
      colorTone: "Mimetismo Anatômico Perfeito",
      description: "Estratificação com resinas de esmalte, dentina e valor, recriando a proporção áurea com polimento aveludado.",
      solution: "Sorriso restaurado, simétrico e radiante em sessão única."
    }
  }
];

export const REVIEWS: Review[] = [
  {
    id: "rev-1",
    name: "Camila Guimarães",
    city: "Petrolina - PE",
    date: "Há 2 semanas",
    rating: 5,
    treatment: "Lentes de Contato Dental",
    comment: "A Dra. Débora é uma artista! Eu morria de medo de ficar com dentes brancos artificiais parecendo chiclete, mas ela fez um planejamento digital tão minucioso que o resultado ficou incrivelmente sutil e natural. A sala no Trade Center é linda e acolhedora!",
    avatarInitials: "CG"
  },
  {
    id: "rev-2",
    name: "Rodrigo Sampaio",
    city: "Juazeiro - BA",
    date: "Há 1 mês",
    rating: 5,
    treatment: "Clareamento & Profilaxia",
    comment: "Atendimento impecável! Nunca vi um consultório tão pontual. Sempre tive sensibilidade horrível em clareamentos anteriores, mas o protocolo que ela usou foi super confortável, não senti nada. Vale a pena atravessar a ponte, recomendo de olhos fechados.",
    avatarInitials: "RS"
  },
  {
    id: "rev-3",
    name: "Mariana Alencar",
    city: "Petrolina - PE",
    date: "Há 3 semanas",
    rating: 5,
    treatment: "Facetas em Resina",
    comment: "Minha autoestima renasceu. Fiz facetas em resina nos dentes anteriores para fechar um espaço que me incomodava desde a adolescência. Ela fez tudo em um único dia com uma delicadeza que me deixou sem palavras. Muito obrigada, doutora!",
    avatarInitials: "MA"
  },
  {
    id: "rev-4",
    name: "Dr. Vinicius Tavares",
    city: "Petrolina - PE",
    date: "Há 1 mês",
    rating: 5,
    treatment: "Reabilitação Estética & Check-up",
    comment: "Como médico, sou extremamente criterioso com biossegurança, tecnologia e respaldo científico. A Dra. Débora entrega uma odontologia de excelência no 14º andar do Trade Center. Equipamentos de ponta e mãos leves.",
    avatarInitials: "VT"
  },
  {
    id: "rev-5",
    name: "Beatriz Nogueira",
    city: "Lagoa Grande - PE",
    date: "Há 2 meses",
    rating: 5,
    treatment: "Harmonização & Estética Dental",
    comment: "Fiz o tratamento para sorriso gengival e clareamento. Ela explica cada detalhe com calma e carinho. O café da recepção, a vista do Trade Center e a equipe inteira merecem nota 10!",
    avatarInitials: "BN"
  }
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: "post-1",
    title: "Por que lentes de contato precisam ter textura natural?",
    category: "Estética Dental",
    likes: 428,
    comments: 34,
    caption: "O esmalte humano não é uma lâmina lisa de plástico! Ele tem periquimáceas, lóbulos de desenvolvimento e microdetalhes que refratam a luz do sol. É por isso que cada trabalho que entregamos no Trade Center é uma obra artesanal exclusiva.",
    date: "Há 3 dias",
    imageAlt: "Detalhe em macrofotografia de textura em porcelana odontológica",
    themeColor: "#EAE0D3"
  },
  {
    id: "post-2",
    title: "Clareamento sem dor: mitos e a verdade científica",
    category: "Clareamento Dental",
    likes: 512,
    comments: 48,
    caption: "Sentir dor lancinante durante o clareamento não é normal! Com a dessensibilização prévia correta e o controle do pH dos géis modernos, você consegue o branco dos sonhos com total conforto. Dúvidas sobre clareamento? Me mande uma mensagem!",
    date: "Há 6 dias",
    imageAlt: "Paciente sorrindo com moldeiras transparentes em consultório",
    themeColor: "#DFCEBA"
  },
  {
    id: "post-3",
    title: "Um dia no nosso consultório no Trade Center",
    category: "Bastidores & Consultório",
    likes: 673,
    comments: 52,
    caption: "A sala 1406 foi desenhada pensando no seu relaxamento. Tons acolhedores, iluminação suave, aromaterapia e tecnologia para transformar sua ida ao dentista em um momento de autocuidado merecido. Venha tomar um café conosco!",
    date: "Há 1 semana",
    imageAlt: "Vista e detalhes do consultório 1406 no Trade Center Petrolina",
    themeColor: "#F3EDE4"
  },
  {
    id: "post-4",
    title: "Facetas em Resina x Lentes em Cerâmica: Qual escolher?",
    category: "Guia do Paciente",
    likes: 890,
    comments: 79,
    caption: "A resina é esculpida em sessão única e não exige desgaste. A cerâmica tem maior longevidade e estabilidade absoluta de cor ao longo dos anos. Não existe um tratamento melhor, existe o tratamento ideal para o seu objetivo e rotina!",
    date: "Há 2 semanas",
    imageAlt: "Comparativo de materiais estéticos resina e porcelana",
    themeColor: "#E5D8C5"
  },
  {
    id: "post-5",
    title: "Sorriso Gengival: O impacto sutil da toxina botulínica",
    category: "Harmonização Orofacial",
    likes: 384,
    comments: 29,
    caption: "Quando a gengiva se sobressai muito ao sorrir, pequenas unidades de toxina botulínica relaxam a musculatura elevadora do lábio superior de forma leve e natural. O resultado é harmonia imediata ao gargalhar sem vergonha!",
    date: "Há 2 semanas",
    imageAlt: "Foto artística demonstrando proporções faciais do terço inferior",
    themeColor: "#DACABA"
  },
  {
    id: "post-6",
    title: "A importância da profilaxia semestral preventiva",
    category: "Saúde & Prevenção",
    likes: 320,
    comments: 18,
    caption: "Manter o biofilme e o cálculo dental longe é o melhor investimento que você pode fazer pelo seu sorriso e longevidade dos seus dentes. Agende seu check-up de manutenção com nossa equipe no WhatsApp!",
    date: "Há 3 semanas",
    imageAlt: "Instrumental odontológico estéril e biossegurança de ponta",
    themeColor: "#EFE8DF"
  }
];

export const FAQ_ITEMS = [
  {
    q: "O clareamento dental causa sensibilidade?",
    a: "No nosso consultório, aplicamos um protocolo dessensibilizante profilático antes e durante o tratamento. Além disso, personalizamos a concentração dos géis clareadores conforme a fisiologia de cada dente, garantindo resultados expressivos com máximo conforto."
  },
  {
    q: "É preciso desgastar os dentes para colocar lentes de contato?",
    a: "Nossa conduta é ultraconservadora. Nas lentes de contato dentais, o desgaste é mínimo (entre 0,2mm a 0,4mm) e restrito ao esmalte, preservando a vitalidade dental. Em muitos casos de facetas em resina, não é necessário absolutamente nenhum desgaste."
  },
  {
    q: "Como funciona o agendamento no Trade Center?",
    a: "Você pode agendar diretamente pelo nosso WhatsApp (+55 87 99112-3727). Você nos informa sua disponibilidade de horário (manhã ou tarde) e o motivo da consulta, e nossa secretária enviará as opções imediatas de horário com confirmação prévia."
  },
  {
    q: "O consultório conta com estacionamento?",
    a: "Sim! O Empresarial Trade Center possui estacionamento rotativo com segurança no próprio edifício, além de fácil acesso por elevadores modernos diretamente para a Sala 1406 no 14º andar."
  },
  {
    q: "Quais são as formas de pagamento disponíveis?",
    a: "Trabalhamos com Pix, transferências, cartões de débito e crédito com condições de parcelamento facilitadas para tratamentos estéticos e reabilitadores completos."
  }
];
