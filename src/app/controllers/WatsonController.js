import watson from '../../config/watson';

class WatsonController {
  async store(req, res) {
    const { text, context = {} } = req.body;

    const createSession = await watson.createSession({
      assistantId: `${process.env.ASSISTANT_ID}`
    });
    const sessionId = createSession.result.session_id;

    const params = {
      input: { text },
      assistantId: `${process.env.ASSISTANT_ID}`,
      context,
      sessionId,
    }

    watson.message(params, (err, response) => {
      console.log(err);
      if (err) res.status(500).json({ error: err });
      res.json(response);
    });
  }
}

export default new WatsonController();