import { User } from "./user/user";

const Personals = (props) => {
  return (
    <>
      <User
        url="1"
        avatar="https://coolsen.ru/wp-content/uploads/2021/12/106-20211224_142529-768x768.jpg"
        name="Guli"
      />
      <User
        url="2"
        avatar="https://ru-static.z-dn.net/files/ddd/02bd3a23f077cda4cc1843b6467a4db1.jpg"
        name="Baxtiyor"
      />
      <User
        url="3"
        avatar="https://phonoteka.org/uploads/posts/2021-05/thumbs/1622009950_16-phonoteka_org-p-khaker-art-krasivo-23.jpg"
        name="Bexruz"
      />
      <User
        url="4"
        avatar="https://yt3.ggpht.com/ytc/AKedOLSyz9gqvLqZFO7Gv5I85oGvT74aEZvCpJbDzOpe7Q=s900-c-k-c0x00ffffff-no-rj"
        name="girl"
      />
    </>
  );
};

export { Personals };
