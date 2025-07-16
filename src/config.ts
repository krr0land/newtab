export interface Link {
  title: string;
  url: string;
  icon: string;
}

export interface LinkGroup {
  title: string;
  links: Link[];
}

export const linkGroups: LinkGroup[] = [
  // Favorites
  {
    title: "Favorites",
    links: [
      {
        title: "YouTube",
        url: "https://www.youtube.com/feed/subscriptions",
        icon: "img/youtube.jpg",
      },
      {
        title: "Gmail",
        url: "https://mail.google.com/mail/u/0/#inbox",
        icon: "img/gmail.jpg",
      },
      {
        title: "Twitter",
        url: "https://twitter.com/home",
        icon: "img/twitter.jpg",
      },
      {
        title: "Spotify",
        url: "https://open.spotify.com",
        icon: "img/spotify.jpg",
      },
      {
        title: "Proton Pass",
        url: "https://pass.proton.me/",
        icon: "img/404.jpg",
      },
      {
        title: "GitHub",
        url: "https://github.com/krr0land?tab=repositories",
        icon: "img/github.jpg",
      },
      {
        title: "ChatGPT",
        url: "https://chatgpt.com/",
        icon: "img/404.jpg",
      },
      {
        title: "Gemini",
        url: "https://gemini.google.com/app",
        icon: "img/404.jpg",
      },
    ],
  },
  // Google
  {
    title: "Google",
    links: [
      {
        title: "Search",
        url: "https://www.google.com/",
        icon: "img/404.jpg",
      },
      {
        title: "Maps",
        url: "https://www.google.com/maps/",
        icon: "img/404.jpg",
      },
      {
        title: "Youtube",
        url: "https://www.youtube.com/feed/subscriptions",
        icon: "img/youtube.jpg",
      },
      {
        title: "Youtube Music",
        url: "https://music.youtube.com/",
        icon: "img/404.jpg",
      },
      {
        title: "Gmail",
        url: "https://mail.google.com/mail/u/0/#inbox",
        icon: "img/gmail.jpg",
      },
      {
        title: "Drive",
        url: "https://drive.google.com/drive/home",
        icon: "img/404.jpg",
      },
      {
        title: "Calendar",
        url: "https://calendar.google.com/calendar/u/0/r/month",
        icon: "img/404.jpg",
      },
      {
        title: "Keep",
        url: "https://keep.google.com/",
        icon: "img/404.jpg",
      },
      {
        title: "Translate",
        url: "https://translate.google.com/",
        icon: "img/404.jpg",
      },
      {
        title: "Gemini",
        url: "https://gemini.google.com/app",
        icon: "img/404.jpg",
      },
      {
        title: "Travel",
        url: "https://www.google.com/travel/",
        icon: "img/404.jpg",
      },
      {
        title: "Docs",
        url: "https://docs.google.com/document/u/0/",
        icon: "img/404.jpg",
      },
      {
        title: "Sheets",
        url: "https://docs.google.com/spreadsheets/u/0/",
        icon: "img/404.jpg",
      },
      {
        title: "Slides",
        url: "https://docs.google.com/presentation/u/0/",
        icon: "img/404.jpg",
      },
    ],
  },
  // Microsoft
  {
    title: "Microsoft",
    links: [
      {
        title: "MSN Weather",
        url: "https://www.msn.com/hu-hu/idojaras",
        icon: "img/404.jpg",
      },
      {
        title: "Account",
        url: "https://account.microsoft.com/",
        icon: "img/404.jpg",
      },
      {
        title: "To Do",
        url: "https://to-do.live.com/tasks/inbox",
        icon: "img/404.jpg",
      },
      {
        title: "Copilot",
        url: "https://m365.cloud.microsoft/chat",
        icon: "img/404.jpg",
      },
      {
        title: "Outlook",
        url: "https://outlook.live.com/mail/0/",
        icon: "img/404.jpg",
      },
      {
        title: "OneDrive",
        url: "https://onedrive.live.com/?view=0",
        icon: "img/404.jpg",
      },
      {
        title: "Word",
        url: "https://word.cloud.microsoft/",
        icon: "img/404.jpg",
      },
      {
        title: "Excel",
        url: "https://excel.cloud.microsoft/",
        icon: "img/404.jpg",
      },
      {
        title: "PowerPoint",
        url: "https://powerpoint.cloud.microsoft/",
        icon: "img/404.jpg",
      },
      {
        title: "OneNote",
        url: "https://www.onenote.com/notebooks",
        icon: "img/404.jpg",
      },
    ],
  },
  // Social
  {
    title: "Social",
    links: [
      {
        title: "Facebook",
        url: "https://www.facebook.com/",
        icon: "img/facebook.jpg",
      },
      {
        title: "Instagram",
        url: "https://www.instagram.com/",
        icon: "img/404.jpg",
      },
      {
        title: "Twitter (X)",
        url: "https://x.com/home",
        icon: "img/twitter.jpg",
      },
      {
        title: "Bluesky",
        url: "https://bsky.app/",
        icon: "img/404.jpg",
      },
      {
        title: "LinkedIn",
        url: "https://www.linkedin.com/feed/",
        icon: "img/404.jpg",
      },
      {
        title: "Pinterest",
        url: "https://hu.pinterest.com/",
        icon: "img/404.jpg",
      },
      {
        title: "Moly",
        url: "https://moly.hu/tagok/krr0land",
        icon: "img/404.jpg",
      },
      {
        title: "Snitt",
        url: "https://snitt.hu/tagok/krr0land",
        icon: "img/404.jpg",
      },
    ],
  },
  // Streaming
  {
    title: "Streaming",
    links: [
      {
        title: "Netflix",
        url: "https://www.netflix.com/browse",
        icon: "img/netflix.jpg",
      },
      {
        title: "HBO Max",
        url: "https://play.hbomax.com/home",
        icon: "img/max.jpg",
      },
      {
        title: "Disney+",
        url: "https://www.disneyplus.com/en-gb/home",
        icon: "img/disneyplus.jpg",
      },
      {
        title: "Prime Video",
        url: "https://www.primevideo.com",
        icon: "img/primevideo.jpg",
      },
      {
        title: "Apple TV+",
        url: "https://tv.apple.com",
        icon: "img/appletvplus.jpg",
      },
      {
        title: "Twitch",
        url: "https://www.twitch.tv/directory/all",
        icon: "img/twitch.jpg",
      },
      {
        title: "Youtube",
        url: "https://www.youtube.com/feed/subscriptions",
        icon: "img/youtube.jpg",
      },
      {
        title: "Youtube Music",
        url: "https://music.youtube.com/",
        icon: "img/404.jpg",
      },
      {
        title: "Spotify",
        url: "https://open.spotify.com/",
        icon: "img/spotify.jpg",
      },
    ],
  },
];
