import nc from "next-connect";
import { db } from "../../utils/firebase/admin";

const handler = nc();

handler.get(async (req, res) => {
  // update users collection with attending state
  await db
    .collection("messages")
    .get()
    .then((data) => {
      let posts = [];
      data.forEach((doc) => {
        posts.push({
          postId: doc.id,
          ...doc.data(),
        });
      });
      return res.json(posts);
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({ error: err.response.data });
    });
});

export default handler;
