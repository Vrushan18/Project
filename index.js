const { Firestore } = require('@google-cloud/firestore');
const firestore = new Firestore();

exports.collectFeedback = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).send('Only POST allowed');
    return;
  }

  const { name, message } = req.body;
  await firestore.collection('feedbacks').add({ name, message, time: Date.now() });

  res.status(200).send('Feedback stored');
};
