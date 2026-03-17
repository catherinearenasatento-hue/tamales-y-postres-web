# Repositorio de Tamales y Postres - Guía de Subida a GitHub

Como veo que no tienes **Git** instalado en tu computadora, aquí te dejo los pasos exactos para subir este proyecto a GitHub.

### Paso 1: Descargar e Instalar Git
1. Ve a la página oficial de Git: https://git-scm.com/download/win
2. Descarga la versión de 64-bit para Windows y ejecuta el instalador. (Puedes darle "Siguiente" a todo, las opciones por defecto están bien).
3. Una vez instalado, abre una nueva terminal (PowerShell o CMD).

### Paso 2: Crear el repositorio en GitHub
1. Entra a tu cuenta en [GitHub.com](https://github.com).
2. Haz clic en el botón verde **"New"** (Nuevo Repositorio).
3. Escribe un nombre para el proyecto, por ejemplo: `tamales-y-postres-web`.
4. Elige si lo quieres Público o Privado y haz clic en **"Create repository"**.
5. *Nota: No inicialices el repositorio con un README ni .gitignore, déjalo completamente en blanco.*

### Paso 3: Subir tu código
Abre una terminal directamente en la carpeta donde creamos el proyecto:
`C:\Users\CATE Y EMY\Desktop\pagina venta tamales y postres`

Ejecuta los siguientes comandos uno por uno (reemplaza `TU_USUARIO` y `TU_REPOSITORIO` con los datos del paso anterior):

```bash
# 1. Inicializar git en la carpeta
git init

# 2. Agregar todos los archivos
git add .

# 3. Crear el primer "commit" (guardado)
git commit -m "Primer commit: Proyecto base Tamales y Postres"

# 4. Cambiar el nombre de la rama principal a 'main'
git branch -M main

# 5. Conectar tu código local con GitHub (CAMBIA ESTA URL POR LA TUYA)
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git

# 6. Subir el código a GitHub
git push -u origin main
```

¡Listo! Ya tendrás tu código en la nube. 🚀
