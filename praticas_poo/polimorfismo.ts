abstract class Message {
    protected send(message: string): void {
        throw new Error("Este método deve ser sobrescrito pelas subclasses.");
    }
}

class TextMessage extends Message {
    public enviarMensagem(mensagem: string): void {
        this.send(mensagem);
    }

    protected send(message: string): void {
        console.log(`Enviando mensagem de texto: "${message}"`);
    }
}

class NotificationMessage extends Message {
    public enviarMensagem(mensagem: string): void {
        this.send(mensagem);
    }

    protected send(message: string): void {
        console.log(`Enviando notificação: "${message}"`);
    }
}
const texto = new TextMessage();
texto.enviarMensagem("Bom dia!"); 

const notificacao = new NotificationMessage();
notificacao.enviarMensagem("Sua encomenda chegou."); 

// Acesso direto ao método protegido não é permitido:
//texto.send("Teste direto");