export interface Link {
  title: string;
  url: string;
  icon: string;
}

export interface LinkGroup {
  title: string;
  links: Link[];
}

// Other
const protonPass: Link = {
  title: "Proton Pass",
  url: "https://pass.proton.me/",
  icon: "img/protonpass.jpg",
};

const github: Link = {
  title: "GitHub",
  url: "https://github.com/krr0land?tab=repositories",
  icon: "img/github.jpg",
};

const chatgpt: Link = {
  title: "ChatGPT",
  url: "https://chatgpt.com/",
  icon: "img/chatgpt.jpg",
};

// Google
const youtube: Link = {
  title: "YouTube",
  url: "https://www.youtube.com/feed/subscriptions",
  icon: "img/youtube_2.jpg",
};

const youtubeMusic: Link = {
  title: "YouTube Music",
  url: "https://music.youtube.com/",
  icon: "img/ytmusic_2.jpg",
};

const gmail: Link = {
  title: "Gmail",
  url: "https://mail.google.com/mail/u/0/#inbox",
  icon: "img/gmail.jpg",
};

const gemini: Link = {
  title: "Gemini",
  url: "https://gemini.google.com/app",
  icon: "img/gemini.jpg",
};

const googleSearch: Link = {
  title: "Search",
  url: "https://www.google.com/",
  icon: "img/google.jpg",
};

const googleMaps: Link = {
  title: "Maps",
  url: "https://www.google.com/maps/",
  icon: "img/gmaps.jpg",
};

const googleDrive: Link = {
  title: "Drive",
  url: "https://drive.google.com/drive/home",
  icon: "img/gdrive.jpg",
};

const googleCalendar: Link = {
  title: "Calendar",
  url: "https://calendar.google.com/calendar/u/0/r/month",
  icon: "img/gcalendar.jpg",
};

const googleKeep: Link = {
  title: "Keep",
  url: "https://keep.google.com/",
  icon: "img/gkeep.jpg",
};

const googleTranslate: Link = {
  title: "Translate",
  url: "https://translate.google.com/",
  icon: "img/gtranslate.jpg",
};

const googleTravel: Link = {
  title: "Travel",
  url: "https://www.google.com/travel/",
  icon: "img/gtravel.jpg",
};

const googleDocs: Link = {
  title: "Docs",
  url: "https://docs.google.com/document/u/0/",
  icon: "img/gdocs.jpg",
};

const googleSheets: Link = {
  title: "Sheets",
  url: "https://docs.google.com/spreadsheets/u/0/",
  icon: "img/gsheets.jpg",
};

const googleSlides: Link = {
  title: "Slides",
  url: "https://docs.google.com/presentation/u/0/",
  icon: "img/gslides.jpg",
};

// Microsoft
const msnWeather: Link = {
  title: "MSN Weather",
  url: "https://www.msn.com/hu-hu/idojaras",
  icon: "img/404.jpg",
};

const microsoftAccount: Link = {
  title: "Account",
  url: "https://account.microsoft.com/",
  icon: "img/404.jpg",
};

const microsoftToDo: Link = {
  title: "To Do",
  url: "https://to-do.live.com/tasks/inbox",
  icon: "img/404.jpg",
};

const microsoftCopilot: Link = {
  title: "Copilot",
  url: "https://m365.cloud.microsoft/chat",
  icon: "img/404.jpg",
};

const outlook: Link = {
  title: "Outlook",
  url: "https://outlook.live.com/mail/0/",
  icon: "img/404.jpg",
};

const oneDrive: Link = {
  title: "OneDrive",
  url: "https://onedrive.live.com/?view=0",
  icon: "img/404.jpg",
};

const word: Link = {
  title: "Word",
  url: "https://word.cloud.microsoft/",
  icon: "img/404.jpg",
};

const excel: Link = {
  title: "Excel",
  url: "https://excel.cloud.microsoft/",
  icon: "img/404.jpg",
};

const powerPoint: Link = {
  title: "PowerPoint",
  url: "https://powerpoint.cloud.microsoft/",
  icon: "img/404.jpg",
};

const oneNote: Link = {
  title: "OneNote",
  url: "https://www.onenote.com/notebooks",
  icon: "img/404.jpg",
};

// Social
const facebook: Link = {
  title: "Facebook",
  url: "https://www.facebook.com/",
  icon: "img/facebook.jpg",
};

const instagram: Link = {
  title: "Instagram",
  url: "https://www.instagram.com/",
  icon: "img/instagram.jpg",
};

const twitter: Link = {
  title: "Twitter (X)",
  url: "https://x.com/home",
  icon: "img/twitter.jpg",
};

const bluesky: Link = {
  title: "Bluesky",
  url: "https://bsky.app/",
  icon: "img/bluesky.jpg",
};

const linkedin: Link = {
  title: "LinkedIn",
  url: "https://www.linkedin.com/feed/",
  icon: "img/linkedin.jpg",
};

const pinterest: Link = {
  title: "Pinterest",
  url: "https://hu.pinterest.com/",
  icon: "img/pinterest.jpg",
};

const moly: Link = {
  title: "Moly",
  url: "https://moly.hu/tagok/krr0land",
  icon: "img/moly.jpg",
};

const snitt: Link = {
  title: "Snitt",
  url: "https://snitt.hu/tagok/krr0land",
  icon: "img/snitt.jpg",
};

// Streaming
const netflix: Link = {
  title: "Netflix",
  url: "https://www.netflix.com/browse",
  icon: "img/netflix.jpg",
};

const hboMax: Link = {
  title: "HBO Max",
  url: "https://play.hbomax.com/home",
  icon: "img/max.jpg",
};

const disneyPlus: Link = {
  title: "Disney+",
  url: "https://www.disneyplus.com/en-gb/home",
  icon: "img/disneyplus.jpg",
};

const primeVideo: Link = {
  title: "Prime Video",
  url: "https://www.primevideo.com",
  icon: "img/primevideo.jpg",
};

const appleTVPlus: Link = {
  title: "Apple TV+",
  url: "https://tv.apple.com",
  icon: "img/appletvplus.jpg",
};

const twitch: Link = {
  title: "Twitch",
  url: "https://www.twitch.tv/directory/all",
  icon: "img/twitch.jpg",
};

const spotify: Link = {
  title: "Spotify",
  url: "https://open.spotify.com/",
  icon: "img/spotify.jpg",
};

export const linkGroups: LinkGroup[] = [
  {
    title: "Favorites",
    links: [youtube, gmail, twitter, spotify, protonPass, github, chatgpt, gemini],
  },
  {
    title: "Google",
    links: [googleSearch, googleMaps, youtube, youtubeMusic, gmail, googleDrive, googleCalendar, googleKeep, googleTranslate, gemini, googleTravel, googleDocs, googleSheets, googleSlides],
  },
  {
    title: "Microsoft",
    links: [msnWeather, microsoftAccount, microsoftToDo, microsoftCopilot, outlook, oneDrive, word, excel, powerPoint, oneNote],
  },
  {
    title: "Social",
    links: [facebook, instagram, twitter, bluesky, linkedin, pinterest, moly, snitt],
  },
  {
    title: "Streaming",
    links: [netflix, hboMax, disneyPlus, primeVideo, appleTVPlus, twitch, youtube, youtubeMusic, spotify],
  },
];
