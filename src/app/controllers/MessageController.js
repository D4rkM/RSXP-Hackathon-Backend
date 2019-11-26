//import from db


class MessageController {
    store(req, res){
        const { text, counter } = req.body;

        switch(counter){
            //nome
            case 1:

                return res.json({ message: `Olá ${text}, me chamo Deschamps, quantos anos você tem?` })
                break;
            //idade
            case 2:
                return res.json({ message: `Que daora cara, foram bons tempos quando eu tinha essa idade.. Foi nessa época que eu ouvi falar de programação. Já ouviu falar?` })
                // return res.json({ message: `Nossa que legal, eu tenho NaN anos, sabe o que isso quer dizer?`})
                break;
            //Rota 1 -  Espera-se que o aluno não saiba programar
            case 3:

                return res.json({ message: `Ótimo, fico feliz de poder te explicar, em resumo é simples. Programação é a forma mais atual de solucionar os nossos problemas. Todos os aplicativos no seu celular, como Uber, Netflix são feitos por programadores, eles transformam idéias em aplicativos e essas idéias ajudam um monte de gente como nós. Sabia que existem vários programadores no Brasil?` })
                break;
            //localidade
            case 4:
                return res.json({ message: `` })
                break;

            case 5:
                return res.json({ message: `` })

            default:
                break;


        }

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