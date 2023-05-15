const lblOnline = document.querySelector('#lblOnline')
const lblOffline = document.querySelector('#lblOffline')
const txtMensaje = document.querySelector('#txtMensaje')
const btnEnviar = document.querySelector('#btnEnviar')

const socket = io();

socket.on('connect', ()=>{
    console.log('Conectado al servidor');
    lblOnline.style.display = 'block';
    lblOffline.style.display = 'none';
})
socket.on('disconnect', ()=>{

    console.log('Desconectado del servidor');
    lblOnline.style.display = 'none';
    lblOffline.style.display = 'block';
    
})

btnEnviar.addEventListener('click', ()=>{

    const mensaje = txtMensaje.value;

    socket.emit( 'enviar-mensaje', mensaje )

})