document.addEventListener('visibilitychange', () => {
    if(document.visibilityState === 'visible') {
        console.log('Ejecutar la funcion para ver el video...');
    } else {
        console.log('Pausar el video');    
    } 
});