const addInfoHeader = prompt("Введите заголовок");
const addInfoBody = prompt("Введите текст");
const addInfoFooter = prompt("Подведите итог");
const addInfoDat = prompt("Введите дату");
const addInfoHeaderApps = prompt("Введите заголовок");
const addInfoBodyApps = prompt("Введите текст");
const addInfoFooterApps = prompt("Подведите итог");
const addInfoDatApss = prompt("Введите дату");

const documnt = {
    header: addInfoHeader,
    body: addInfoBody,
    footer: addInfoFooter,
    dat: addInfoDat,
    apps: {
        header: addInfoHeaderApps,
        body: addInfoBodyApps,
        footer: addInfoFooterApps,
        dat: addInfoDatApss,
    },
    prntBase: function () {
        document.write(`Header: ${this.header}<br/>Body: ${this.body}<br/>Footer: ${this.footer}<br/>Date: ${this.dat}<br/>`)
    },
    prntApps: function () {
        document.write(`Header apps: ${this.apps.header}<br/>Body apps: ${this.apps.body}<br/>Footre apps: ${this.apps.footer}<br/>Date apps: ${this.apps.dat}<br/>`)
    }
}

documnt.prntBase();
documnt.prntApps();

