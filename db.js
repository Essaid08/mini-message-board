export const messages = [
    {
        id : 0 ,
        text: "Hi there!",
        user: "Amando",
        added: new Date(),
    },
    {
        id : 1 ,
        text: "Hello World!",
        user: "Charles",
        added: new Date(),
    },
    {
        id : 2 ,
        text: "Salut cv ?",
        user: "Yacine",
        added: new Date(),
    },
    {
        id : 3 ,
        text: "Good morning",
        user: "Amine",
        added: new Date(),
    },
    {
        id : 4 ,
        text: "Holla!",
        user: "jhone",
        added: new Date(),
    },
];

export async function getAllMessages () {
    return messages ;
}

export async function getMessageById(messageName) {
    return messages.find(msg => msg.user == messageName)
}

export async function addNewMessage(user , text) {
    messages.push({
        id : messages.length ,
        text : text ,
        user : user ,
        added : new Date()
    })
}