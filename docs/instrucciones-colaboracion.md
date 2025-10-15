# 🛠️ Pasos para trabajar en el proyecto

## 1. Clonar el repositorio en tu máquina local 🔁
```bash
cd <directorio-proyectos>
git clone https://github.com/grupo-despliegue/ireventa.git
cd ireventa
git remote set-url origin git@github.com:grupo-despliegue/ireventa.git
```
## 2. Comenzar a trabajar en una tarea 🚀
```bash
git checkout develop
```

### Actualizar con la versión en remoto
```bash
git pull origin develop
```
### Crear una nueva rama (según el tipo de tarea) 🌿

#### Para un bug 🐞:
```bash
git checkout -b bugfix/descripcion-bug
```

#### Para una feature ✨:
```bash
git checkout -b feature/descripcion-feature
```

#### Para documentación 📝:
```bash
git checkout -b docs/descripcion-documentacion
```

## 3. Al terminar la tarea ✅ 
```bash
git add .
```
### Para un bug 🐞:
```bash
git commit -m "BUGFIX: descripción breve de la tarea terminada"
```
### Para una feature ✨:
```bash
git commit -m "FEATURE: descripción breve de la tarea terminada"
```
### Para documentación 📝:
```bash
git commit -m "DOCS: descripción breve de la tarea terminada"
```
### 4. Crear el Pull Request en GitHub 📤:

- Una vez subida la rama, id al repositorio en GitHub. Os aparecerá un mensaje como este arriba:
  - `<nombre-rama> had recent pushes --> Compare & pull request`
- Haced clic en **Compare & pull request**.
#### Ejemplo de una pull request de un bug 🐞
- Aseguraos de que el **base branch** es `develop` y el **compare branch** es `bugfix/<nombre-rama-del-bug>`.
- Relacionad el Pull Request con el issue correspondiente escribiendo en la descripción:
  - `Closes #númeroDelIssue`
- En **Reviewers**, asignad el Equipo Revisores y dadle al botón **Create pull request**.
- El que revise el código tendrá que hacer **Merge pull request** → Confirm merge.



