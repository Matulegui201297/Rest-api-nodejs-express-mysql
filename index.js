import app from "./app";


const main = () => {
    app.listen(app.get('port'))
    console.log('El servidor esta conectado en el puerto')
};

main();