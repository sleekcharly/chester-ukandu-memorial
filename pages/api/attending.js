import nc from "next-connect";
import { db } from "../../utils/firebase/admin";

const handler = nc();

handler.post(async (req, res) => {
  // extract attending state and user name
  let userData = req.body;
  const { attending, name } = userData;

  // define userId array
  let userId = [];

  // update users collection with attending state
  await db
    .collection("users")
    .where("name", "==", name)
    .limit(1)
    .get()
    .then(async (data) => {
      //get user id
      data.forEach((doc) => {
        userId.push(doc.id);
      });

      // update users collection with attendance
      await db
        .doc(`/users/${userId[0]}`)
        .update({ attending: attending })
        .then(() => {
          return res.json("Attendance updated successfully");
        })
        .catch((err) => {
          console.log("could not update user attendance state");
          return res.status(500).json({ error: err.code });
        });
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({ error: err.code });
    });
});

export default handler;
