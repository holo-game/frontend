export const API_URI = process.env.API_URI;
export const APP_NAME = "Hologame";
export const APP_DESCRIPTION = "Oyunlardakı balansınızı artırın";

export const REGEX = {
  email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};

export const META = {
  title: "Əsas Səhifə",
  description: "Oyunlardakı hesabınızın balansını artırın",
  keywords: "pubg mobile uc, uc yüklə, uc yukle, pubg uc yukle, free fire uc",
  url: "https://hologame.az",
  image: "/images/logo.png",
};

export const NAVIGATION_LIST = [
  {
    title: "Əsas Səhifə",
    icon: "far fa-home-alt",
    color: "text-one",
    path: "/",
  },
  {
    title: "Oyunlar",
    icon: "far fa-alien-monster",
    color: "text-two",
    path: "/games",
  },
  {
    title: "Balans Yüklə",
    icon: "far fa-sack",
    color: "text-three",
    path: "/banktransfer",
  },
];

export const CONTACT = {
  email: {
    title: "E-Mail",
    value: "info@hologame.az",
    icon: "fab fa-telegram-plane",
    highlight: false,
  },
  phone: {
    title: "Telefon",
    value: "050 680 55 45",
    icon: "far fa-phone-alt",
    highlight: true,
  },
};

export const SOCIAL = [
  {
    title: "facebook",
    icon: "fab fa-facebook-f",
    url: "#",
  },
  {
    title: "instagram",
    icon: "fab fa-instagram",
    url: "https://www.instagram.com/hologame.az/",
  },
];

export const GAME_TAGS = [
  "Pubg Mobile",
  "Free Fire",
  "Mobile Legends",
  "Point Blank",
];

export const DEVELOPER = {
  title: "Devob Creative",
  url: "https://devob.az",
};

export const LIVE_SUPPORT = `
  <!--Start of Tawk.to Script-->
  <script type="text/javascript">
  var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
  (function(){
  var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
  s1.async=true;
  s1.src='https://embed.tawk.to/5ff59634c31c9117cb6bf4d8/1erbl5fi2';
  s1.charset='UTF-8';
  s1.setAttribute('crossorigin','*');
  s0.parentNode.insertBefore(s1,s0);
  })();
  </script>
  <!--End of Tawk.to Script-->
`;