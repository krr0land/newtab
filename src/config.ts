export interface Link {
  title: string;
  url: string;
  icon: string;
  bgColor?: string;
  textColor?: string;
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
  bgColor: "#1b1440",
  textColor: "white",
};

const github: Link = {
  title: "GitHub",
  url: "https://github.com/krr0land?tab=repositories",
  icon: "img/github.jpg",
  bgColor: "#211f20",
  textColor: "white",
};

const chatgpt: Link = {
  title: "ChatGPT",
  url: "https://chatgpt.com/",
  icon: "img/chatgpt.jpg",
  bgColor: "#02a77d",
  textColor: "white",
};

// Google
const youtube: Link = {
  title: "YouTube",
  url: "https://www.youtube.com/feed/subscriptions",
  icon: "img/youtube_2.jpg",
};

const youtubeClassic: Link = {
  title: "YouTube",
  url: "https://www.youtube.com/feed/subscriptions",
  icon: "img/youtube.jpg",
};

const youtubeMusic: Link = {
  title: "YouTube Music",
  url: "https://music.youtube.com/",
  icon: "img/ytmusic_2.jpg",
};

const youtubeMusicClassic: Link = {
  title: "YouTube Music",
  url: "https://music.youtube.com/",
  icon: "img/ytmusic.jpg",
};

const gmail: Link = {
  title: "Gmail",
  url: "https://mail.google.com/mail/u/0/#inbox",
  icon: "img/gmail.jpg",
};

const gmailClassic: Link = {
  title: "Gmail",
  url: "https://mail.google.com/mail/u/0/#inbox",
  icon: "img/gmail_2.jpg",
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
  icon: "img/msweather.jpg",
};

const microsoftAccount: Link = {
  title: "Account",
  url: "https://account.microsoft.com/",
  icon: "img/microsoft.jpg",
};

const microsoftToDo: Link = {
  title: "To Do",
  url: "https://to-do.live.com/tasks/inbox",
  icon: "img/mstodo.jpg",
};

const microsoftCopilot: Link = {
  title: "Copilot",
  url: "https://m365.cloud.microsoft/chat",
  icon: "img/mscopilot.jpg",
};

const outlook: Link = {
  title: "Outlook",
  url: "https://outlook.live.com/mail/0/",
  icon: "img/msoutlook.jpg",
};

const oneDrive: Link = {
  title: "OneDrive",
  url: "https://onedrive.live.com/?view=0",
  icon: "img/msonedrive.jpg",
};

const word: Link = {
  title: "Word",
  url: "https://word.cloud.microsoft/",
  icon: "img/msword.jpg",
};

const excel: Link = {
  title: "Excel",
  url: "https://excel.cloud.microsoft/",
  icon: "img/msexcel.jpg",
};

const powerPoint: Link = {
  title: "PowerPoint",
  url: "https://powerpoint.cloud.microsoft/",
  icon: "img/mspowerpoint.jpg",
};

const oneNote: Link = {
  title: "OneNote",
  url: "https://www.onenote.com/notebooks",
  icon: "img/msonenote.jpg",
};

// Social
const facebook: Link = {
  title: "Facebook",
  url: "https://www.facebook.com/",
  icon: "img/facebook.jpg",
  bgColor: "#3a5797",
  textColor: "white",
};

const instagram: Link = {
  title: "Instagram",
  url: "https://www.instagram.com/",
  icon: "img/instagram.jpg",
  bgColor: "#f1a73c",
  textColor: "white",
};

const twitter: Link = {
  title: "Twitter (X)",
  url: "https://x.com/home",
  icon: "img/twitter.jpg",
  bgColor: "black",
  textColor: "white",
};

const bluesky: Link = {
  title: "Bluesky",
  url: "https://bsky.app/",
  icon: "img/bluesky.jpg",
  bgColor: "#57b8fd",
  textColor: "white",
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
  bgColor: "#b02a21",
  textColor: "white",
};

const moly: Link = {
  title: "Moly",
  url: "https://moly.hu/tagok/krr0land",
  icon: "img/moly.jpg",
  bgColor: "#cfdfef",
  textColor: "#2f5f8f",
};

const snitt: Link = {
  title: "Snitt",
  url: "https://snitt.hu/tagok/krr0land",
  icon: "img/snitt.jpg",
  bgColor: "#3f3f3f",
  textColor: "white",
};

// Streaming
const netflix: Link = {
  title: "Netflix",
  url: "https://www.netflix.com/browse",
  icon: "img/netflix.jpg",
  bgColor: "#101010",
  textColor: "white",
};

const hboMax: Link = {
  title: "HBO Max",
  url: "https://play.hbomax.com/home",
  icon: "img/max.jpg",
  bgColor: "black",
  textColor: "white",
};

const disneyPlus: Link = {
  title: "Disney+",
  url: "https://www.disneyplus.com/en-gb/home",
  icon: "img/disneyplus.jpg",
  bgColor: "#020e40",
  textColor: "white",
};

const primeVideo: Link = {
  title: "Prime Video",
  url: "https://www.primevideo.com",
  icon: "img/primevideo.jpg",
  bgColor: "#243040",
  textColor: "white",
};

const appleTVPlus: Link = {
  title: "Apple TV+",
  url: "https://tv.apple.com",
  icon: "img/appletvplus.jpg",
  bgColor: "black",
  textColor: "white",
};

const twitch: Link = {
  title: "Twitch",
  url: "https://www.twitch.tv/directory/all",
  icon: "img/twitch.jpg",
  bgColor: "#9147ff",
  textColor: "white",
};

const spotify: Link = {
  title: "Spotify",
  url: "https://open.spotify.com/",
  icon: "img/spotify.jpg",
  bgColor: "#1a1414",
  textColor: "white",
};

export const linkGroups: LinkGroup[] = [
  {
    title: "Favorites",
    links: [youtubeClassic, gmailClassic, spotify, protonPass, github, chatgpt],
  },
  {
    title: "Google",
    links: [googleSearch, googleMaps, youtube, youtubeMusic, gmail, googleDrive, googleCalendar, googleKeep, googleTranslate, gemini, googleTravel, googleDocs, googleSheets, googleSlides],
  },
  {
    title: "Microsoft",
    links: [msnWeather, microsoftAccount, microsoftToDo, microsoftCopilot, oneDrive, outlook, word, excel, powerPoint, oneNote],
  },
  {
    title: "Social",
    links: [facebook, instagram, twitter, bluesky, linkedin, pinterest, moly, snitt],
  },
  {
    title: "Streaming",
    links: [netflix, hboMax, disneyPlus, primeVideo, appleTVPlus, twitch, youtubeClassic, youtubeMusicClassic, spotify],
  },
];
