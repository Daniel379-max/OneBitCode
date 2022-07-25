import "core-js"
import "regenerator-runtime/runtime"

import SentryObject from "./sentry_object"
import { getSentryObjects } from "./sentry_service"


async function loadSentryObjects() {
    let sentryObjects = []
    let sentryObjectJSON = await getSentryObjects()
    sentryObjectJSON.forEach(sentry => {
        const newSentry = new SentryObject(sentry["sentryId"], sentry["fullname"], sentry["year_renger_min"], sentry["year_renger_max"])
        sentryObjects.push(newSentry)
    })
    renderSentryObjects(sentryObjects)
}

function renderSentryObjects(sentryObjects) {
    const olElement = document.createElement("sentry-objects")
    sentryObjects.forEach(sentry => {
        const liElement = document.createElement("li")
        const text = `(${sentry.id}) ${sentry.name}: risco de colisão entre ${sentry.yearMin} e ${sentry.yearMax}`
        liElement.innerText = text
        olElement.appendChild(liElement)
    })
}

loadSentryObjects()