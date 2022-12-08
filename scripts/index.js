/*
Создать объект "Документ", в котором определить свойства "Заголовок, тело, футер, дата". 
Создать в объекте вложенный объект - "Приложение". Создать в объекте "Приложение", вложенные объекты,
 "Заголовок, тело, футер, дата". 
Создать методы для заполнения и отображения документа.
*/

const documnt = {
    header: "",
    body: "",
    footer: "",
    dat: "",
    apps: {
        header: {appHeader: ""},
        body: {appBody: ""},
        footer: {appFooter: ""},
        dat: {appDat: ""},
    },

    entrBase: function () {
        for (let inf in documnt) {
            if (inf !== "apps" && inf !== "entrBase" && inf !== "entrApps" && inf !== "prntBase") {
                documnt[inf] = prompt("Веедите данные :" + inf); 
            };
        };
    },

    entrApps: function () {
        for (let set in documnt.apps.header) {
            documnt.apps.header[set] = prompt("Веедите данные :" + set);      
        }
        for (let set in documnt.apps.body) {
            documnt.apps.body[set] = prompt("Веедите данные :" + set);
        }
        for (let set in documnt.apps.footer) {
            documnt.apps.footer[set] = prompt("Веедите данные :" + set);
        }
        for (let set in documnt.apps.dat) {
            documnt.apps.dat[set] = prompt("Веедите данные :" + set);
        }
    },

    prntBase: function () {
        for (let inf in documnt) {
            if (inf !== "apps" && inf !== "entrBase" && inf !== "entrApps" && inf !== "prntBase") {     
                documnt[inf] = document.write("Информация из " + inf + " : " + documnt[inf] + "<br/>");
            };
        };           

        for (let set in documnt.apps.header) {
            documnt.apps.header[set] = document.write("Вложенный обьект в header: " + documnt.apps.header[set] + "<br/>");      
        }
        for (let set in documnt.apps.body) {
            documnt.apps.body[set] = document.write("Вложенный обьект в body: " + documnt.apps.body[set] + "<br/>");
        }
        for (let set in documnt.apps.footer) {
            documnt.apps.footer[set] = document.write("Вложенный обьект в footer: " + documnt.apps.footer[set] + "<br/>");
        }
        for (let set in documnt.apps.dat) {
            documnt.apps.dat[set] = document.write("Вложенный обьект в dat: " + documnt.apps.dat[set] + "<br/>");
        }
    }
}

documnt.entrBase();
documnt.entrApps();
documnt.prntBase();

