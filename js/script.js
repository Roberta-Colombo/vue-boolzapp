const {createApp} = Vue 

createApp({
    data() {
        return {
            activeContact: 0,
            newMessage: '',
            userSearch: '',
            eraseMsg: false,
            msgOpt: {
                index: null,
                show: false,
            },
            contacts: [
                {
                    name: 'Michele',
                    id: '1',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {  
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    id: '2',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    id: '3',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    id: '4',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    id: '5',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    id: '6',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    id: '7',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    id: '8',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ]
        }
    },
    computed: {
        filteredContacts() {
            return  this.contacts = this.contacts.filter((item)=>{
                const userName = item.name.toLowerCase();
                return userName.includes(this.userSearch.toLowerCase())
            })
        },
        // getLastMsgHour(contact) {
        //     const date = this.printLastMsg(contact).date
        //     const hoursAndMins = date.getHours() + ':' + date.getMinutes();
        //     console.log(hoursAndMins)
        //     return hoursAndMins;
        // }
    },
    methods: {
        activateUser(id) {
            this.activeContact = this.contacts.findIndex((item)=> {
                return id === item.id
            })
        }, 
        sendMessage() {
            if(!this.newMessage) return;
            const msgDate = new Date().toLocaleTimeString('it-IT', {
            hour: '2-digit',
            minute: '2-digit'              
        });
    
            const newSentMessage = {
                date: msgDate,
                message: this.newMessage,
                status: 'sent'
            }
            console.log(newSentMessage)
            this.contacts[this.activeContact].messages.push(newSentMessage);
            this.newMessage = '';

            setTimeout(()=> {
                const newReceivedMessage = {
                    date: msgDate,
                    message: 'OK!',
                    status: 'received'
                }
    
                this.contacts[this.activeContact].messages.push(newReceivedMessage);
            },1000)
        },
        printLastMsg(contact) {
            const receivedMsg = contact.messages.filter((message)=> {
               return message.status == 'received';
            })
            return receivedMsg[receivedMsg.length -1];
        },
        printLastAccess(contacts, activeContact) {
            const receivedMsg = contacts[activeContact].messages.filter((message)=> {
                return message.status == 'received';
             })
             return receivedMsg[receivedMsg.length -1];
        },
        showOptBox(index) {
            if(index === this.msgOpt.index && this.msgOpt.show){
                this.msgOpt.index = null;
                this.msgOpt.show = false;
            } else {
                this.msgOpt.index = index;
                this.msgOpt.show = true;
            }
        },
        deleteMsg(activeContact, index) {
            this.contacts[activeContact].messages.splice(index, 1);    
        }

        // shortDate(contact) {
        //     const lastMsgDate = printLastMsg(contact).date

        //     return lastMsgDate.toLocaleTimeString('it-IT', {
        //             hour: '2-digit',
        //             minute: '2-digit'              
        //     });            
        // }
    }
}).mount('#app')



