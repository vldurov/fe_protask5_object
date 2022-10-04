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
        document.write(`${this.header}<br/>${this.body}<br/>${this.footer}<br/>${this.dat}`)
    },
    prntApps: function () {
        document.write(`${this.apps.header}<br/>${this.apps.body}<br/>${this.apps.footer}<br/>${this.apps.dat}`)
    }
}

documnt.prntBase();
documnt.prntApps();

