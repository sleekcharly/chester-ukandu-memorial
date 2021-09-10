import nc from "next-connect";
import { db } from "../../../utils/firebase/admin";

const handler = nc();

handler.get(async (req, res) => {
  // extract attending state and user name
  let username = req.query.username;

  // update users collection with attending state
  await db
    .collection("users")
    .where("name", "==", username)
    .limit(1)
    .get()
    .then((data) => {
      //get user
      if (data) {
        return res.json(data.docs[0].data());
      }
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({ error: err.response.data });
    });
});

export default handler;
