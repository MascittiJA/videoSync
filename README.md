# videoSync

Aplicación web desarrollada con NodeJS y ReactJS que sincroniza el video de todos los participantes conectados.
Se pueden seleccionar cualquier video de Vimeo.

## Instalación

```bash
git clone https://github.com/MascittiJA/videoSync.git && cd videoSync/ && npm run build
```
Luego, abrir distintas pestañas del navegador y colocar "http://localhost:5000/".
Una vez estén corriendo el video, se puede utilizar Play, Pause y moverse por la barra de progreso.
Se puede cambiar el video a reproducir cargando el link.

## e2e Test

Abrir dos consolas en una levantar la app y en la otra correr los test.

```bash
git clone https://github.com/MascittiJA/videoSync.git && cd videoSync/ && npm run build
```

```bash
cd videoSync/ && npm test
```

## Pendientes

* Mostrar cantidad de participantes conectados.
* Sincronizar inmediatamente un nuevo integrante al conectarse.

## Demo

[Link a la app en Heroku](https://video-syncronization.herokuapp.com/)

