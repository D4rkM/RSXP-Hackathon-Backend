//import from db


class MessageController {
    store(req, res){
        const { text } = req.body;

        if(!text)
            return res.status(404).json({message: "No message sent."});

        if(text == "Oi"){
            return res.json({ message: "Olá tudo bem com você?" });
        }else if (text == "Preciso de Ajuda" || text == "preciso de ajuda" || text == "ajuda") {

        } else {
            return res.json({ message: "Não entendi o que você falou"});
        }
    }


}

export default new MessageController();