# Guía para Desplegar Tamales & Postres en Render

He preparado el código para que se pueda subir de la forma más fácil y gratuita posible a Render. 
He convertido el proyecto en un **"Unified Web Service"**, lo que significa que el servidor backend de Node.js ahora también se encargará de entregar los archivos visuales de Angular.

### Paso 1: Subir los últimos cambios a GitHub
Acabo de crear un nuevo "commit" (guardado) con las configuraciones de Render. Para subirlo a tu repositorio, abre tu terminal en la carpeta del proyecto y ejecuta:

```bash
"C:\Program Files\Git\cmd\git.exe" push -u origin main
```

### Paso 2: Conectar Render con GitHub
1. Entra a tu cuenta en [Render.com](https://render.com) (ya me mencionaste que estás logueado).
2. Haz clic en el botón de **"New +"** arriba a la derecha y selecciona **"Web Service"**.
3. Selecciona la opción **"Build and deploy from a Git repository"** y haz clic en "Next".
4. Render te pedirá conectar tu cuenta de GitHub. Autorízalo y selecciona el repositorio `tamales-y-postres-web` de la lista.

### Paso 3: Configurar el Web Service en Render
Una vez seleccionado el repositorio, llena la configuración exactamente con estos datos:

- **Name:** `tamales-y-postres` (o el que tú prefieras).
- **Environment:** `Node`
- **Region:** La que te quede más cerca (Ej. US East - Ohio).
- **Branch:** `main`
- **Build Command:** `npm run build`
- **Start Command:** `npm start`
- **Instance Type:** `Free` (Gratis)

### Paso 4: Desplegar
Haz clic en el botón verde de abajo **"Create Web Service"**.

¡Y eso es todo! 🚀 Render comenzará a descargar tu código, instalará Angular, construirá la versión optimizada y levantará el backend automáticamente. Este proceso tomará unos 3 a 5 minutos.
Cuando termine, te dará un enlace en la parte superior izquierda (ej. `tamales-y-postres.onrender.com`) desde el cual tú y tus clientes podrán ver la página en vivo.
