export interface FilmProject {
  id: string;
  index: string;
  title: string;
  nepaliTitle?: string;
  year?: string;
  type: 'Musical Film' | 'Music Video' | 'Career Milestone';
  role: string;
  image: string;
  fallbackExternalUrl?: string;
  secondaryImage?: string;
  objectPosition?: string;
  editorialNote: string;
  credits: { label: string; value: string }[];
  youtubeId?: string;
  externalLink?: string;
  externalLinkLabel?: string;
  isFeatured?: boolean;
  is3DPoster?: boolean;
}

export interface TheatreProduction {
  id: string;
  index: string;
  title: string;
  year?: string;
  role: string;
  venue?: string;
  image: string;
  additionalImages?: string[];
  videoLink?: string;
  videoLinkLabel?: string;
  fallbackExternalUrl?: string;
  objectPosition?: string;
  editorialNote: string;
  isDualRoleFeature?: boolean;
}

export interface GalleryItem {
  id: string;
  plateNumber: string;
  title: string;
  category: 'PORTRAITS' | 'FILM' | 'THEATRE' | 'BEHIND THE SCENES' | 'ART GHAR';
  projectRef: string;
  image: string;
  fallbackExternalUrl?: string;
  aspectClass: 'full-bleed' | 'portrait-tall' | 'landscape-wide' | 'offset-editorial';
  objectPosition?: string;
  caption: string;
}

export interface EducationEntry {
  institution: string;
  qualification: string;
  period: string;
  location: string;
}

export interface ExperienceEntry {
  role: string;
  organization: string;
  period: string;
  category: 'Education & Academic Leadership' | 'Performance & Direction' | 'Creative Leadership';
  detail: string;
}

export const OFFICIAL_ASSETS = {
  // 3D Background-Removed Realistic Studio Cutout (from user's exact photograph)
  santosh3DModel: '/images/santosh-cutout.png',
  santoshMainPortrait: '/images/santosh-main-portrait.jpg',

  // Hero Main Stage Image (3D Background-Removed Model)
  heroMain: '/images/santosh-cutout.png',
  artistPortrait: '/images/santosh-cutout.png',

  // Official Actor Introduction Video (YouTube Short)
  introVideoYoutubeId: 'bKjrFPyS8LI',
  introVideoUrl: 'https://youtube.com/shorts/bKjrFPyS8LI?feature=shared',
  introVideoThumb: '/images/intro-short-thumb.jpg',

  // New Official Gallery & Film Tape Photographs
  galleryPhoto1: '/images/santosh-gallery-1.jpg',
  galleryTape1: '/images/santosh-gallery-tape-1.jpg',
  galleryTape2: '/images/santosh-gallery-tape-2.jpg',
  galleryTape3: '/images/tape-portrait-3.jpg',
  galleryTape3Remote:
    'https://scontent.fktm17-1.fna.fbcdn.net/v/t39.30808-6/480214432_1843422399824004_2598817396733738043_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1350&ctp=s640x640&_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=_LW25WZ15-cQ7kNvwG2E1ib&_nc_oc=AdpCD6ey7OGYR4CM8XNwSnBb_xmNY-i11KquGQh5GLKb1o3_suKvfYO1dABWz_kLPR6cZvCPkfzgkzsZpHiMI0Qb&_nc_zt=23&_nc_ht=scontent.fktm17-1.fna&_nc_gid=Hl5NTO-1KaLL5jldnhUzgg&_nc_ss=7b2a8&oh=00_AQPanx-_GpNtMQjOf6WdFagQmQMinIu_iifrgdqa6GAbUw&oe=6AC59A24',
  galleryPhoto4: '/images/gallery-portrait-4.jpg',
  galleryPhoto4Remote:
    'https://scontent.fktm17-1.fna.fbcdn.net/v/t39.30808-6/476223097_1835678853931692_6300687199489822699_n.jpg?stp=dst-jpg_tt6&cstp=mx958x958&ctp=s958x958&_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_ohc=X5EwuORZZSsQ7kNvwG1SuPo&_nc_oc=Adplf1HT42_9IThxU_gFkkttZe8m7rs9iBPLWwBNiaa9H-tKxIK9Tamts5UySy4dLNoaglwgYWjT2SvybY1TzhQ_&_nc_zt=23&_nc_ht=scontent.fktm17-1.fna&_nc_gid=K8yonG4FAuUBHRX4xYJ7XA&_nc_ss=7b2a8&oh=00_AQOclgArMwTllSRq5elhjesM8LMVIfmgeZzerNwIfFqatw&oe=6AC58BEF',
  galleryPhoto5: '/images/gallery-portrait-5.jpg',
  galleryPhoto5Remote:
    'https://scontent.fktm17-1.fna.fbcdn.net/v/t1.6435-9/154278013_897630794403174_8427048745700005194_n.jpg?stp=dst-jpg_tt6&cstp=mx1066x1332&ctp=s640x640&_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=TdjoichGwXMQ7kNvwHwb9Ys&_nc_oc=Adp3EmN5I-fnt2M3pd10M9HVNLlawCEOlVeP56rCsTBJmRWc3jGRaFbuvupUWFRVhngJYhn6941tsxJCICLBHVdj&_nc_zt=23&_nc_ht=scontent.fktm17-1.fna&_nc_gid=eq3qrG3duxxcHT7zcn-lbA&_nc_ss=7b2a8&oh=00_AQMZFpVJix8HYGa98JDc8T-aA57Re9_hUTFwDRPM_YxEXQ&oe=6AE72AF8',
  galleryPhoto6: '/images/gallery-portrait-6.jpg',
  galleryPhoto6Remote:
    'https://scontent.fktm17-1.fna.fbcdn.net/v/t39.30808-6/468517389_1785648412268070_5980594836576833457_n.jpg?stp=dst-jpg_tt6&cstp=mx1569x1569&ctp=s1569x1569&_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=Kcg2fedjVwUQ7kNvwEjoC9p&_nc_oc=AdofQnkDN7YMZVHu4Vkq4sRDpyJAja9cRd_FneOivp2lbRfNQdnoZToesK_KQReAhlfs9oWYLm-vGIxv-MRYHRVo&_nc_zt=23&_nc_ht=scontent.fktm17-1.fna&_nc_gid=49LMjfrdb0QHKO8Lt0wa7w&_nc_ss=7b2a8&oh=00_AQOJFjNZYykcwwJK6QjJEOLPP1OvwjPXyav_rxc5SonPzw&oe=6AC57E88',

  // Chhoro (Musical Film)
  choroMain: '/images/choro-yt.jpg',
  choroStill1: '/images/choro-still-1.jpg',
  choroStill2: '/images/choro-still-2.jpg',
  choroStill3: '/images/choro-still-3.jpg',
  choroVideoUrl: 'https://youtu.be/dI9WaT4prRI?si=YvGMihWnYLM9dYmn',
  choroYoutubeId: 'dI9WaT4prRI',

  // Kotha (Musical Film)
  kothaMain: '/images/kotha-poster.png',
  kothaStill1: '/images/kotha-still-1.jpg',
  kothaStill2: '/images/kotha-still-2.jpg',
  kothaStill3: '/images/kotha-still-3.jpg',
  kothaVideoUrl: 'https://youtu.be/AMSwIFy_aLI?si=wIALKck18Y9DUXKr',
  kothaYoutubeId: 'AMSwIFy_aLI',
  kothaPosterRemote:
    'https://plain-apac-prod-public.komododecks.com/202610/02/LoVJfYvsnUSb0IvVnsKm/image.png',

  // Manko Bhasa (Music Video)
  mankoBhasaMain: '/images/manko-bhasa-poster.png',
  mankoBhasaVideoUrl: 'https://youtu.be/MjTLwRaSvcs?si=CyOvveqUBzWfr2Nv',
  mankoBhasaYoutubeId: 'MjTLwRaSvcs',
  mankoBhasaPosterRemote:
    'https://plain-apac-prod-public.komododecks.com/202610/02/sp8DOfJEINQdWeH566sc/image.png',

  // Manish Harayeko Suchana (Mandala Theatre Nepal)
  manishPoster: '/images/manish-harayeko-suchana.png',
  manishProduction: '/images/manish-feature-production.jpg',
  manishProductionRemote:
    'https://scontent.fktm17-1.fna.fbcdn.net/v/t39.30808-6/482083532_1851288812370696_2008146561185737849_n.jpg?stp=dst-jpg_tt6&cstp=mx957x960&ctp=s957x960&_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=S5sKdZDkfzEQ7kNvwHt2M1Q&_nc_oc=Ado7qOgboQjLFItg7nHJfGmzaTDQe4JabwTOcBuFKVNZxrAkrdEzHNPPOIquLZ8SoBH4mHtY0MRAMTTOi6Q2Invo&_nc_zt=23&_nc_ht=scontent.fktm17-1.fna&_nc_gid=bEVhlC-nIAnRNOQ5AgyQwQ&_nc_ss=7b2a8&oh=00_AQPXosoH42rLWPJj0Lf9Y3zxnFAdlJJiXtUyWzVWjnPZGQ&oe=6AC583A5',
  manishStage1: '/images/manish-stage-1.jpg',
  manishStage2: '/images/manish-stage-2.jpg',
  manishStage3: '/images/manish-stage-3.jpg',
  manishPosterRemote:
    'https://plain-apac-prod-public.komododecks.com/202610/02/ZM7MuzdNmRRTw9ylMZO3/image.png',

  // Mandavi (2026 Theatre Production)
  mandaviMain: '/images/mandavi-main.jpg',
  mandaviVideoUrl: 'https://www.facebook.com/share/r/1RSQmbxANG/',
  mandaviMainRemote:
    'https://scontent.fktm17-1.fna.fbcdn.net/v/t39.30808-6/825329241_1417834980555744_4081931586716507539_n.jpg?stp=dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=T9vRwVMgY0gQ7kNvwH6h2vl&_nc_oc=AdolczuEXOTD1GXQ63jZkuaJm2NQ2Vsqrsp-rUpOe6_HYN-SbHIQPbAEdPWOQzEjZ3_ZD_bWxIHZIYpkl5KwTuzI&_nc_zt=23&_nc_ht=scontent.fktm17-1.fna&_nc_gid=c7AkUGi5W4J2XQXKjoXl-g&_nc_ss=7b289&oh=00_AQMi6ILTDkJNZ1AYIoLtGN8xSrjywuvT3OsTw_r-DvPj4Q&oe=6AC5652E',

  // Tantra (Theatre Production)
  tantraMain: '/images/tantra-poster.jpg',
  tantraRemote:
    'https://scontent.fktm17-1.fna.fbcdn.net/v/t39.30808-6/482217343_1860859494746961_8967419445373180846_n.jpg?stp=dst-jpg_tt6&cstp=mx1365x1706&ctp=s1365x1706&_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=vvM1CozIBPIQ7kNvwG1KALT&_nc_oc=AdrcGYW62XDq-QEUOcT2-F8vAQ04DV6OKIbKNjmu9B5Bg7D-j7I8OvKUIfiTxj7ACQQ9OMaJx5s9oWn6Ms3k8QyX&_nc_zt=23&_nc_ht=scontent.fktm17-1.fna&_nc_gid=FtpKZSyzPr7ETH40XT2-yA&_nc_ss=7b2a8&oh=00_AQPVJjWVttEaEgoR3GFwjDi5-6fSWH8qKFQD2fWSpvHNQg&oe=6AC59DD9',
};

export const BRAND_IDENTITY = {
  name: 'SANTOSH BISTA',
  primaryIdentity: 'Actor • Director • Theatre Artist • Drama Educator',
  affiliation: 'CEO & Actor — Art Ghar',
  editorialStatement: 'Stories become alive through performance.',
  introHeadline: ['An actor shaped by', 'theatre, cinema', 'and storytelling.'],
  introProse:
    'Santosh Bista is an actor and filmmaker with experience across short films, theatrical productions and music videos. His professional background also includes directing, coordinating film-related education and teaching drama.',
  careerCorpusNote:
    'Acted in more than 12 short films and multiple theatrical productions.',
  location: 'New Baneshwor, Kathmandu, Nepal',
  phone: '+977 9840805286',
  phoneHref: 'tel:+9779840805286',
  email: 'santoshbista968@gmail.com',
  emailHref: 'mailto:santoshbista968@gmail.com',
};

export const PERSONAL_SOCIALS = [
  {
    name: 'Instagram',
    handle: '@being_santosh_bista',
    url: 'https://www.instagram.com/being_santosh_bista/',
  },
  {
    name: 'Facebook',
    handle: 'Santosh Bista',
    url: 'https://www.facebook.com/santosh.bista.12327/',
  },
  {
    name: 'LinkedIn',
    handle: 'Santosh Bista',
    url: 'https://np.linkedin.com/in/santosh-bista-a59b381a5',
  },
];

export const ART_GHAR_SOCIALS = [
  {
    name: 'YouTube',
    handle: '@artgharofficial',
    url: 'https://www.youtube.com/@artgharofficial',
  },
  {
    name: 'Facebook',
    handle: 'Art Ghar Official',
    url: 'https://www.facebook.com/artgharofficial/',
  },
  {
    name: 'TikTok',
    handle: '@artghar_official',
    url: 'https://www.tiktok.com/@artghar_official',
  },
];

export const FILM_PROJECTS: FilmProject[] = [
  {
    id: 'chhoro',
    index: '01',
    title: 'CHHORO',
    nepaliTitle: 'छोरो',
    type: 'Musical Film',
    role: 'Son — Lead Character',
    image: OFFICIAL_ASSETS.choroMain,
    secondaryImage: OFFICIAL_ASSETS.choroStill3,
    objectPosition: 'center 25%',
    editorialNote:
      'Presented by Emric Studios in association with Art Ghar. Santosh Bista leads the musical film as the Son, delivering an intimate portrait of family, solitude, and unspoken devotion.',
    credits: [
      { label: 'Format', value: 'Musical Film' },
      { label: 'Role', value: 'Son — Lead Character' },
      { label: 'Director', value: 'Prem Thapa' },
      { label: 'Production', value: 'Emric Studios & Art Ghar' },
      { label: 'Project Manager', value: 'Santosh Bista' },
    ],
    youtubeId: OFFICIAL_ASSETS.choroYoutubeId,
    externalLink: OFFICIAL_ASSETS.choroVideoUrl,
    externalLinkLabel: 'Watch Film on YouTube',
    isFeatured: true,
  },
  {
    id: 'kotha',
    index: '02',
    title: 'KOTHA',
    nepaliTitle: 'कोठा',
    type: 'Musical Film',
    role: 'Appearance',
    image: OFFICIAL_ASSETS.kothaMain,
    fallbackExternalUrl: OFFICIAL_ASSETS.kothaPosterRemote,
    secondaryImage: OFFICIAL_ASSETS.kothaStill1,
    objectPosition: 'center center',
    editorialNote:
      'An Art Ghar musical film exploring displacement, memory, and quiet resilience in Kathmandu, featuring an appearance by Santosh Bista.',
    credits: [
      { label: 'Format', value: 'Musical Film' },
      { label: 'Role', value: 'Appearance' },
      { label: 'Production', value: 'Art Ghar' },
    ],
    youtubeId: OFFICIAL_ASSETS.kothaYoutubeId,
    externalLink: OFFICIAL_ASSETS.kothaVideoUrl,
    externalLinkLabel: 'Watch Film on YouTube',
  },
  {
    id: 'manko-bhasa',
    index: '03',
    title: 'MANKO BHASA',
    type: 'Music Video',
    role: 'Actor',
    image: OFFICIAL_ASSETS.mankoBhasaMain,
    fallbackExternalUrl: OFFICIAL_ASSETS.mankoBhasaPosterRemote,
    objectPosition: 'center center',
    editorialNote:
      'Official music video featuring Santosh Bista as Actor, grounded in naturalism and restrained visual storytelling.',
    credits: [
      { label: 'Format', value: 'Music Video' },
      { label: 'Role', value: 'Actor' },
      { label: 'Performer', value: 'Santosh Bista' },
    ],
    youtubeId: OFFICIAL_ASSETS.mankoBhasaYoutubeId,
    externalLink: OFFICIAL_ASSETS.mankoBhasaVideoUrl,
    externalLinkLabel: 'Watch Video on YouTube',
  },
  {
    id: 'twelve-plus-short-films',
    index: '04',
    title: '12+ SHORT FILMS',
    type: 'Career Milestone',
    role: 'Actor across Narrative Short Cinema',
    image: OFFICIAL_ASSETS.santosh3DModel,
    fallbackExternalUrl: OFFICIAL_ASSETS.santoshMainPortrait,
    objectPosition: 'center 15%',
    editorialNote:
      'Santosh Bista has acted in more than 12 short films across independent and academic productions, honing a disciplined screen craft shaped by formal training at Everest Film Academy.',
    credits: [
      { label: 'Repertoire', value: '12+ Short Films' },
      { label: 'Discipline', value: 'Screen Acting & Filmmaking' },
      { label: 'Education', value: 'Everest Film Academy (2019–2021)' },
    ],
    is3DPoster: true,
  },
];

export const THEATRE_PRODUCTIONS: TheatreProduction[] = [
  {
    id: 'manish-harayeko-suchana',
    index: '01',
    title: 'MANISH HARAYEKO SUCHANA',
    role: 'Director & Actor',
    venue: 'Mandala Theatre Nepal',
    image: OFFICIAL_ASSETS.manishPoster,
    fallbackExternalUrl: OFFICIAL_ASSETS.manishPosterRemote,
    objectPosition: 'center center',
    editorialNote:
      'Staged at Mandala Theatre Nepal, Manish Harayeko Suchana is a defining theatrical production in which Santosh Bista served simultaneously as Director and Actor.',
    isDualRoleFeature: true,
  },
  {
    id: 'tantra',
    index: '02',
    title: 'TANTRA',
    role: 'Actor',
    image: OFFICIAL_ASSETS.tantraMain,
    fallbackExternalUrl: OFFICIAL_ASSETS.tantraRemote,
    objectPosition: 'center center',
    editorialNote:
      'Theatrical stage production featuring Santosh Bista as Actor, rooted in physical ensemble work and dramatic stagecraft.',
  },
  {
    id: 'mandavi',
    index: '03',
    title: 'MANDAVI',
    year: '2026',
    role: 'Actor',
    image: OFFICIAL_ASSETS.mandaviMain,
    fallbackExternalUrl: OFFICIAL_ASSETS.mandaviMainRemote,
    videoLink: OFFICIAL_ASSETS.mandaviVideoUrl,
    videoLinkLabel: 'Watch Mandavi Stage Reel',
    objectPosition: 'center 20%',
    editorialNote:
      '2026 stage production featuring Santosh Bista as Actor, continuing his dedication to contemporary Nepali theatre.',
  },
];

export const EDUCATION_LIST: EducationEntry[] = [
  {
    institution: 'Kathmandu, Nepal',
    qualification: 'Bachelor in Political Science and Journalism',
    period: 'Present',
    location: 'Kathmandu, Nepal',
  },
  {
    institution: 'Everest Film Academy',
    qualification: 'Diploma in Acting and Filmmaking',
    period: '2019 – 2021',
    location: 'Kathmandu, Nepal',
  },
  {
    institution: 'Pentagon International College',
    qualification: '+2 in Hotel Management and Tourism',
    period: '2017 – 2019',
    location: 'Kathmandu, Nepal',
  },
];

export const EXPERIENCE_TIMELINE: ExperienceEntry[] = [
  {
    role: 'Drama Teacher',
    organization: 'Kavya School',
    period: 'Jan 2024 — Present',
    category: 'Education & Academic Leadership',
    detail:
      'Teaching drama, stagecraft, and expressive performance to students through structured theatrical pedagogy.',
  },
  {
    role: 'Academic Coordinator',
    organization: 'Everest Film Academy',
    period: 'Sep 2023 — Mar 2025',
    category: 'Education & Academic Leadership',
    detail:
      'Coordinated film-related academic programs, acting and filmmaking curriculum, and student production schedules.',
  },
  {
    role: 'CEO & Actor',
    organization: 'Art Ghar',
    period: 'Present',
    category: 'Creative Leadership',
    detail:
      'Leading creative production, narrative direction, and acting work across musical films and original storytelling.',
  },
  {
    role: 'Actor / Director',
    organization: 'Film & Theatre Projects',
    period: '12+ Short Films · Multiple Theatre Productions',
    category: 'Performance & Direction',
    detail:
      'Acted in more than 12 short films, musical films (Chhoro, Kotha), music videos (Manko Bhasa), and stage productions (Tantra, Mandavi, and Director & Actor for Manish Harayeko Suchana at Mandala Theatre Nepal).',
  },
];

export const VERIFIED_SKILLS = [
  {
    title: 'ACTING',
    context: '12+ Short Films · Musical Films · Theatre Productions',
  },
  {
    title: 'THEATRE',
    context: 'Mandala Theatre Nepal · Tantra · Manish Harayeko Suchana · Mandavi',
  },
  {
    title: 'DIRECTING',
    context: 'Stage Direction (Manish Harayeko Suchana) & Visual Storytelling',
  },
  {
    title: 'DRAMA EDUCATION',
    context: 'Kavya School · Everest Film Academy Academic Coordination',
  },
  {
    title: 'FILMMAKING',
    context: 'Diploma in Acting & Filmmaking · Production Stewardship',
  },
  {
    title: 'CONTENT WRITING',
    context: 'Narrative Development · Script & Dramatic Structuring',
  },
];

export const VERIFIED_LANGUAGES = [
  { language: 'Nepali', note: 'Native / Primary Performance Language' },
  { language: 'English', note: 'Professional & Academic Fluency' },
  { language: 'Hindi', note: 'Performance & Conversational Fluency' },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-santosh-3d-portrait',
    plateNumber: '01',
    title: '',
    category: 'PORTRAITS',
    projectRef: '',
    image: OFFICIAL_ASSETS.santosh3DModel,
    fallbackExternalUrl: OFFICIAL_ASSETS.santoshMainPortrait,
    aspectClass: 'portrait-tall',
    objectPosition: 'center 15%',
    caption: 'Santosh Bista — Actor, Director, Theatre Artist, and CEO of Art Ghar.',
  },
  {
    id: 'gal-santosh-tape-2',
    plateNumber: '02',
    title: '',
    category: 'PORTRAITS',
    projectRef: '',
    image: OFFICIAL_ASSETS.galleryTape2,
    aspectClass: 'portrait-tall',
    objectPosition: 'center 20%',
    caption: 'Editorial portrait of Santosh Bista.',
  },
  {
    id: 'gal-chhoro-lead',
    plateNumber: '03',
    title: '',
    category: 'FILM',
    projectRef: '',
    image: OFFICIAL_ASSETS.choroMain,
    aspectClass: 'full-bleed',
    objectPosition: 'center 25%',
    caption: 'Santosh Bista in Chhoro — Musical Film (Role: Son — Lead Character).',
  },
  {
    id: 'gal-santosh-tape-1',
    plateNumber: '04',
    title: '',
    category: 'FILM',
    projectRef: '',
    image: OFFICIAL_ASSETS.galleryTape1,
    aspectClass: 'portrait-tall',
    objectPosition: 'center 20%',
    caption: 'Behind the character of Chhoro (छोरो) — Musical Film.',
  },
  {
    id: 'gal-santosh-sunil-thapa',
    plateNumber: '05',
    title: '',
    category: 'BEHIND THE SCENES',
    projectRef: '',
    image: OFFICIAL_ASSETS.galleryPhoto1,
    aspectClass: 'portrait-tall',
    objectPosition: 'center 20%',
    caption: 'Santosh Bista with veteran actor Sunil Thapa.',
  },
  {
    id: 'gal-mandavi-main',
    plateNumber: '06',
    title: '',
    category: 'THEATRE',
    projectRef: '',
    image: OFFICIAL_ASSETS.mandaviMain,
    fallbackExternalUrl: OFFICIAL_ASSETS.mandaviMainRemote,
    aspectClass: 'landscape-wide',
    objectPosition: 'center 20%',
    caption: 'Santosh Bista on stage in Mandavi (2026).',
  },
  {
    id: 'gal-manish-poster',
    plateNumber: '07',
    title: '',
    category: 'THEATRE',
    projectRef: '',
    image: OFFICIAL_ASSETS.manishPoster,
    fallbackExternalUrl: OFFICIAL_ASSETS.manishPosterRemote,
    aspectClass: 'offset-editorial',
    objectPosition: 'center center',
    caption: 'Official promotional poster for Manish Harayeko Suchana at Mandala Theatre Nepal.',
  },
  {
    id: 'gal-manish-production',
    plateNumber: '08',
    title: '',
    category: 'THEATRE',
    projectRef: '',
    image: OFFICIAL_ASSETS.manishProduction,
    fallbackExternalUrl: OFFICIAL_ASSETS.manishProductionRemote,
    aspectClass: 'offset-editorial',
    objectPosition: 'center center',
    caption: 'Stage production visual for Manish Harayeko Suchana at Mandala Theatre Nepal.',
  },
  {
    id: 'gal-tantra-stage',
    plateNumber: '09',
    title: '',
    category: 'THEATRE',
    projectRef: 'T',
    image: OFFICIAL_ASSETS.tantraMain,
    fallbackExternalUrl: OFFICIAL_ASSETS.tantraRemote,
    aspectClass: 'portrait-tall',
    objectPosition: 'center center',
    caption: 'Official poster for the theatrical stage play Tantra featuring Santosh Bista.',
  },
  {
    id: 'gal-manko-bhasa',
    plateNumber: '10',
    title: '',
    category: 'FILM',
    projectRef: '',
    image: OFFICIAL_ASSETS.mankoBhasaMain,
    fallbackExternalUrl: OFFICIAL_ASSETS.mankoBhasaPosterRemote,
    aspectClass: 'offset-editorial',
    objectPosition: 'center center',
    caption: 'Official poster for Manko Bhasa featuring Santosh Bista.',
  },
  {
    id: 'gal-kotha-film',
    plateNumber: '11',
    title: '',
    category: 'ART GHAR',
    projectRef: '',
    image: OFFICIAL_ASSETS.kothaMain,
    fallbackExternalUrl: OFFICIAL_ASSETS.kothaPosterRemote,
    aspectClass: 'full-bleed',
    objectPosition: 'center center',
    caption: 'Official poster from Kotha, produced by Art Ghar.',
  },
  {
    id: 'gal-portrait-study-monochrome',
    plateNumber: '12',
    title: '',
    category: 'PORTRAITS',
    projectRef: 'A',
    image: OFFICIAL_ASSETS.galleryPhoto4,
    fallbackExternalUrl: OFFICIAL_ASSETS.galleryPhoto4Remote,
    aspectClass: 'portrait-tall',
    objectPosition: 'center center',
    caption: 'Santosh Bista.',
  },
  {
    id: 'gal-portrait-early-archive',
    plateNumber: '13',
    title: '',
    category: 'PORTRAITS',
    projectRef: '',
    image: OFFICIAL_ASSETS.galleryPhoto5,
    fallbackExternalUrl: OFFICIAL_ASSETS.galleryPhoto5Remote,
    aspectClass: 'portrait-tall',
    objectPosition: 'center center',
    caption: 'Dramatic character study from the performance archives.',
  },
  {
    id: 'gal-portrait-dramatic-profile',
    plateNumber: '14',
    title: '',
    category: 'PORTRAITS',
    projectRef: '',
    image: OFFICIAL_ASSETS.galleryPhoto6,
    fallbackExternalUrl: OFFICIAL_ASSETS.galleryPhoto6Remote,
    aspectClass: 'offset-editorial',
    objectPosition: 'center center',
    caption: 'High-contrast studio character study of Santosh Bista.',
  },
];
