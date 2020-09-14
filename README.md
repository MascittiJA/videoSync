# videoSync

Aplicación web desarrollada con NodeJS y ReactJS que sincroniza el video de todos los participantes conectados.

## Instalación

```bash
git clone https://github.com/MascittiJA/videoSync.git

cd videoSync/server/

npm run build
```
Luego, abrir distintas pestañas del navegador y colocar "http://localhost:5000/".
Hay algún bug por lo cual en producción no comienzan automáticamente a reproducirse los videos. Es necesario comenzar cada uno tocando el boton de "PLAY".
Una vez estén corriendo el video, se puede utilizar Play, Pause y moverse por la barra de progreso.

## Pendientes

* Poder seleccionar el video a reproducir
* Arreglar bug de inicio automático en producción
* Sincronizar inmediatamente un nuevo integrante al conectarse
