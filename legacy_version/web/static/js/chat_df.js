// Inicia la función una vez que el contenido del documento ha sido completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtiene los elementos necesarios del HTML
    var messageForm = document.getElementById('message-form');
    var messageInput = document.getElementById('message-input');
    var chatBox = document.getElementById('chat-box');

    /**
     * Función para desencadenar un evento en el chatbot
     *
     * @param {string} eventName - El nombre del evento a desencadenar
     */
    function triggerEvent(eventName) {
        // Hace una petición POST a '/send_message' con el nombre del evento
        fetch('/send_message', {
            method: 'POST',
            body: JSON.stringify({
                'event': {
                    'name': eventName,
                    'languageCode': 'es'
                }
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(processResponse);
    }

    /**
     * Función para procesar la respuesta del chatbot
     *
     * @param {object} data - La respuesta del chatbot en formato JSON
     */
    function processResponse(data) {
        // Obtiene los mensajes de la respuesta
        var fulfillmentMessages = data.queryResult.fulfillmentMessages;

        // Procesa cada mensaje
        for (var i = 0; i < fulfillmentMessages.length; i++) {
            // Si el mensaje es un texto, lo añade al chat
            if ('text' in fulfillmentMessages[i]) {
                var itemText = fulfillmentMessages[i].text.text[0];

                // Reemplaza los saltos de línea con la etiqueta <br>
                itemText = itemText.replace(/\n/g, '<br>');

                chatBox.innerHTML += '<div class="chat-message bot-message"><b>SofIA:</b> ' + itemText + '</div>';
            }
            // Si el mensaje es un payload, procesa cada item del payload
            else if ('payload' in fulfillmentMessages[i]) {
                var payload = fulfillmentMessages[i].payload;
                for (var j = 0; j < payload.richContent.length; j++) {
                    for (let k = 0; k < payload.richContent[j].length; k++) {
                        let item = payload.richContent[j][k];
                        let div;
                        // Dependiendo del tipo de item, lo procesa de forma diferente
                        switch(item.type){
                            case 'description':
                                var itemText = item.text.join(' ').replace(/<bold>/g, "<b>").replace(/<\/bold>/g, "</b>");
                                chatBox.innerHTML += '<div class="chat-message bot-message"><b>SofIA:</b> ' + itemText + '</div>';
                                break;
                            case 'button':
                                // Crea un botón y lo añade al chat
                                let button = document.createElement('button');
                                button.classList.add("btn", "chat-button");
                                button.innerHTML = item.text;

                                // Verifica si hay un enlace en el botón
                                if ("link" in item) {
                                    // Si hay un enlace, añade un evento click que abre la URL en una nueva pestaña
                                    button.addEventListener('click', function() {
                                        window.open(item.link, '_blank');
                                    });
                                } else {
                                    // De otra manera, desencadena el evento como lo hace actualmente
                                    button.addEventListener('click', function() {
                                        // Cuando se hace clic en el botón, desencadena el evento correspondiente
                                        triggerEvent(item.event.name);

                                        // Deshabilita todos los botones anteriores
                                        var buttons = document.querySelectorAll('.chat-button');
                                        for (let l = 0; l < buttons.length; l++) {
                                            buttons[l].classList.add('disabled-button');                        
                                        }
                                    });
                                }
                                // Crea un nuevo div, agrega el botón a este y luego añade el div al chatBox
                                div = document.createElement('div');
                                // Agrega las clases chat-message bot-message
                                div.classList.add("chat-message", "bot-message", "button-message");
                                div.appendChild(button);
                                chatBox.appendChild(div);

                                break;
        
                            case 'image':
                                // Añade una imagen al chat
                                div = document.createElement('div');
                                div.innerHTML += '<img src="'+item.rawUrl+'" alt="'+item.accessibilityText+'">';
                                div.classList.add("chat-message", "bot-message");
                                chatBox.appendChild(div);
                                break;

                            case 'youtube':
                                // Extrae el ID del video de YouTube de la URL
                                var videoId = item.rawUrl.split('v=')[1];
                                var ampersandPosition = videoId.indexOf('&');
                                if(ampersandPosition != -1) {
                                    videoId = videoId.substring(0, ampersandPosition);
                                }

                                // Crea un contenedor responsivo para el video de YouTube y lo añade al chat
                                div = document.createElement('div');
                                div.classList.add("chat-message", "bot-message", "embed-responsive", "embed-responsive-16by9");

                                const iframe = document.createElement('iframe');
                                iframe.setAttribute("src", "https://www.youtube.com/embed/" + videoId);
                                iframe.setAttribute("frameborder", "0");
                                iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
                                iframe.setAttribute("allowfullscreen", "true");
                                iframe.classList.add("embed-responsive-item");

                                div.appendChild(iframe);
                                chatBox.appendChild(div);
                                break;
                        
                            default:
                            console.log('Unhandled type: ', item.type);
                        }
                    }
                }
            }
        }
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom
    }

    // Añade un evento 'submit' al formulario de mensajes para enviar el mensaje y obtener la respuesta del chatbot
    messageForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Obtiene el mensaje del usuario
        var message = messageInput.value;

        // Limpia el input del mensaje
        messageInput.value = '';

        // Añade el mensaje del usuario al chat
        chatBox.innerHTML += '<div class="chat-message user-message"><b>Yo:</b> ' + message + '</div>';

        // Hace una petición POST a '/send_message' con el mensaje del usuario
        fetch('/send_message', {
            method: 'POST',
            body: JSON.stringify({
                'message': message
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(processResponse);

        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom
    });

    // Dispara el evento 'intencion_saludo' al principio
    triggerEvent('intencion_saludo');

});