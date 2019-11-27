import watson from '../../config/watson';

class WatsonController {
  async store(req, res) {
    const { text, context = {}, counter } = req.body;
    let username = '';

    if (counter == 0) {
      username = text;
      
      console.log(username);

      const createSession = await watson.createSession({
        assistantId: '1926dd97-a05a-4d6f-8a8d-8a94f3494d2c'
      });
      const sessionId = createSession.result.session_id;
  
      const params = {
        input: { 
          'message_type': 'text',
          'text': '', 
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
          res.status(500).json({ error: err });
        }
        return res.status(200).json(response);
      });
    } 

    switch (counter) {
      case 1:
        const createSession = await watson.createSession({
          assistantId: '1926dd97-a05a-4d6f-8a8d-8a94f3494d2c'
        });
        const sessionId = createSession.result.session_id;
    
        const params = {
          input: { 
            'message_type': 'text',
            'text': 'Quero saber mais sobre programação', 
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
            res.status(500).json({ error: err });
          }
          return res.status(200).json(response);
        });

      case 2: {
        const createSession = await watson.createSession({
          assistantId: '1926dd97-a05a-4d6f-8a8d-8a94f3494d2c'
        });
        const sessionId = createSession.result.session_id;
    
        const params = {
          input: { 
            'message_type': 'text',
            'text': 'O Brasil tem programadores bons?', 
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
            res.status(500).json({ error: err });
          }
          return res.status(200).json(response);
        });
      }
    }

    // if (!text) {
    //   return res.status(401).json({ error: 'Cannot answer that' });
    // }

    const createSession = await watson.createSession({
      assistantId: '1926dd97-a05a-4d6f-8a8d-8a94f3494d2c'
    });
    const sessionId = createSession.result.session_id;

    const params = {
      input: { 
        'message_type': 'text',
        'text': text, 
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
      if (err) 
        res.status(500).json({ error: err });
      return res.json(response);
    });
  }
}

export default new WatsonController();