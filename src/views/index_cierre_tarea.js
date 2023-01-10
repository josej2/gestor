
const {eliminarTarea} = require('./comunicacion_ipc_envio')


cierre_total.addEventListener('click', () => {
    eliminarTarea()
})