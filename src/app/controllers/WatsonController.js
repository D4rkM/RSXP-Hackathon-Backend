import watson from '../../config/watson';

class WatsonController {
  async store(req, res) {
    const { text, context = {}, counter } = req.body;
    let username = '';
    let userInput = '';
    switch (counter) {
      case 0:
        username = text;
        userInput = '';
        break; 
      case 1:
        userInput = 'Quero saber mais sobre programação';
        break;
      case 2:
        userInput = 'O Brasil tem programadores bons?';
        break;
      case 3:  
        userInput = 'O mercado tem vagas disponíveis?';
        break;
      default:
        break;
    }

    const createSession = await watson.createSession({
      assistantId: '1926dd97-a05a-4d6f-8a8d-8a94f3494d2c'
    });
    const sessionId = createSession.result.session_id;

    const params = {
      input: { 
        'message_type': 'text',
        'text': userInput, 
      }, 
      context: {
        skills: {
          'main skill': {
            'user_defined': {
              'username': username,
            }
          }
        }
      },
      assistantId: '1926dd97-a05a-4d6f-8a8d-8a94f3494d2c',  
      sessionId,
    }
    watson.message(params, (err, response) => {
      if (err) { 
        return res.status(500).json({ error: err });
      }
      return res.json(response);
    });
  }
}

export default new WatsonController();