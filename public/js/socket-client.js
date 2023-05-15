const lblOnline = document.querySelector('#lblOnline')
const lblOffline = document.querySelector('#lblOffline')
const txtMensaje = document.querySelector('#txtMensaje')
const btnEnviar = document.querySelector('#btnEnviar')

const socket = io();

socket.on('connect', ()=>{
    // console.log('Conectado al servidor');
    lblOnline.style.display = 'block';
    lblOffline.style.display = 'none';
})
socket.on('disconnect', ()=>{

    console.log('Desconectado del servidor');
    lblOnline.style.display = 'none';
    lblOffline.style.display = 'block';
    
})

socket.on('enviar-mensaje', (payload)=>{
    // console.log('holaa');
    console.log(payload);
})

btnEnviar.addEventListener('click', ()=>{

    const mensaje = txtMensaje.value;
    const payload = {
        mensaje,
        id: '123ABC',
        fecha: new Date().getTime()
    }

    socket.emit( 'enviar-mensaje', payload, (id)=>{
        console.log('Desde el server', id);
    } )

})