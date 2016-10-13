import gulp from 'gulp'
import realFavicon from 'gulp-real-favicon'
import fs from 'fs'
import config from './config'

const checkUpdates = (params = {}) => {
    const cfg = {
        ...config,
        ...params
    }

    const {
        markupFile
    } = cfg

    const task = (done) => {
        const {version} = JSON.parse(fs.readFileSync(markupFile))

        realFavicon.checkForUpdates(version, (err) => {
            if (err) {
                throw err
            }

            done()
        })
    }

    task.displayName = 'favicon-check-update'
    task.description = 'Check favicon updates'

    return task
}


const generate = (params = {}) => {
    const cfg = {
        ...config,
        ...params
    }

    const task = (done) => {
        realFavicon.generateFavicon(cfg, done)
    }

    task.displayName = 'favicon-generate'
    task.description = 'Generate favicons'

    return task
}


const injectMarkup = (params = {}) => {
    const cfg = {
        ...config,
        ...params
    }

    const {
        markupFile,
        templateFiles,
        templateDest
    } = cfg

    const faviconConfig = JSON.parse(fs.readFileSync(markupFile))
    const htmlCode = faviconConfig.favicon.html_code

    const task = () => {
        return gulp.src(templateFiles)
            .pipe(realFavicon.injectFaviconMarkups(htmlCode))
            .pipe(gulp.dest(templateDest))
    }

    task.displayName = 'favicon-inject-markup'
    task.description = 'Inject favicon markup in HTML file(s)'

    return task
}

export {
    checkUpdates,
    generate,
    injectMarkup
}
