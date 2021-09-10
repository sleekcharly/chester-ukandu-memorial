import nc from "next-connect";
import { db, storage } from "../../firebase";

const handler = nc();

handler.post(async (req, res) => {
  if (req.body.body.trim() === "") {
    return res.status(400).json({ body: "Message content is empty" });
  }

  //   let memory = req.body.thumbnail;

  // extract message body
  let newMessage = {
    body: req.body.body,
    messenger: req.body.username,
    messengerImage: req.body.userImage,
    createdAt: new Date().toISOString(),
  };

  //   post to database
  await db
    .collection("messages")
    .add(newMessage)
    .then((doc) => {
      //   if (memory) {
      //     const uploadTask = storage
      //       .ref(`messages/${doc.id}`)
      //       .putString(memory, "data_url");

      //     uploadTask.on(
      //       "state_change",
      //       null,
      //       (error) => console.error(error),
      //       () => {
      //         //when the upload completes
      //         storage
      //           .ref("messages")
      //           .getDownloadURL()
      //           .then((url) => {
      //             db.collection("messages")
      //               .doc(doc.id)
      //               .set({ memoryImage: url }, { merge: true });
      //           });
      //       }
      //     );
      //   }
      return res.json(newMessage);
    })
    .catch((err) => {
      console.error(err);
    });
});

export default handler;

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "500mb",
    },
  },
};
