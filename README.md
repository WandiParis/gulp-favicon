# gulp-favicon

Tâche gulp pour générer le favicon

## Installation

```
npm install --save-dev "github:wandiparis/gulp-favicon"
```

## Utilisation

Paramètres par défaut :

```js
// gulpfile.babel.js

import * as faviconTasks from 'gulp-favicon'

export {
    ...faviconTasks
}
```

Paramètres custom (voir ci-dessous pour la liste complète des paramètres) :

```js
// gulpfile.babel.js

import * as faviconTasks from gulp-favicon

const compile = styles({
    templateFiles: 'path/to/main/template.html',
    templateDest: 'path/to/main'
})

export {
    ...faviconTasks
}
```

## Paramètres

Tous les paramètres de la tâches sont issues de
[Real Favicon](https://realfavicongenerator.net/favicon/gulp). Ceux-ci sont
décris sur le site officiel. Seuls les paramètres suivant n'en sont pas issus :

### templateFiles

Voir [le paramètre `globs` de `gulp.src`](https://github.com/gulpjs/gulp/blob/4.0/docs/API.md#globs).

Valeur par défaut : `'app/Resources/views/base.html.twig'`

### templateDest

Voir [le paramètre `path` de `gulp.dest`](https://github.com/gulpjs/gulp/blob/4.0/docs/API.md#path).

Valeur par défaut : `'app/Resources/views'`
