




let rerender = () =>{
  console.log('changed')
}

let state = {
  sidebar: {
    infoSidebar: [
      { message: "All messages", url: "/" },
      { message: "Personals", url: "/personal" },
      { message: "Groups", url: "/groups" },
      { message: "Channels", url: "/channels" },
    ],
  },
  users: {
    user: {
      personals: [
        {
          url: "5",
          avatar:
            "https://coolsen.ru/wp-content/uploads/2021/12/106-20211224_142529-768x768.jpg",
          name: "Guli",
        },
        {
          url: "6",
          avatar:
            "https://ru-static.z-dn.net/files/ddd/02bd3a23f077cda4cc1843b6467a4db1.jpg",
          name: "Baxtiyor",
        },
        {
          url: "5",
          avatar:
            "https://phonoteka.org/uploads/posts/2021-05/thumbs/1622009950_16-phonoteka_org-p-khaker-art-krasivo-23.jpg",
          name: "Behruz",
        },
        {
          url: "4",
          avatar:
            "https://yt3.ggpht.com/ytc/AKedOLSyz9gqvLqZFO7Gv5I85oGvT74aEZvCpJbDzOpe7Q=s900-c-k-c0x00ffffff-no-rj",
          name: "girl",
        },
      ],
      groups: [
        {
          url: "3",
          avatar:
            "https://pbs.twimg.com/profile_images/378800000472427846/078357e2698399791383e11d9197e834.jpeg",
          name: "9A-class",
        },
      ],
      channels: [
        {
          url: "1",
          avatar:
            "https://yt3.ggpht.com/ytc/AMLnZu8iiop3gTj9fLTsYLj7ir5-Zv7FtBbPQUw7Lcy-Yw=s900-c-k-c0x00ffffff-no-rj",
          name: "Ustoz-shogird kanali",
        },
        {
          url: "2",
          avatar:
            "https://yt3.ggpht.com/ytc/AMLnZu8iiop3gTj9fLTsYLj7ir5-Zv7FtBbPQUw7Lcy-Yw=s900-c-k-c0x00ffffff-no-rj",
          name: "Ustoz-shoqird soxalari",
        },
      ],
    },
  },
  messages: {
    message: [
      {
        avatar:
          "https://static2.tgstat.ru/channels/_0/9f/9f91866fed044703e3a6b673ed0c470a.jpg",
        message: "hello",
      },
      {
        avatar:
          "https://static2.tgstat.ru/channels/_0/9f/9f91866fed044703e3a6b673ed0c470a.jpg",
        message: "Uzigram",
      },
      {
        avatar:
          "https://static2.tgstat.ru/channels/_0/9f/9f91866fed044703e3a6b673ed0c470a.jpg",
        message: "Great",
      },
    ],
  },
};


export const addPost = (a) => {
  let newPost = {
    avatar: "https://static2.tgstat.ru/channels/_0/9f/9f91866fed044703e3a6b673ed0c470a.jpg",
    message: a

  }
  state.messages.message.push(newPost)
  rerender(state)
}

export const subscribe = (observer) => {
  rerender = observer
}



export default state;
