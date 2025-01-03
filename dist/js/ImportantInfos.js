export class Infos {
    static get TownName() {
        return this.townName;
    }
    static set TownName(value) {
        this.townName = value;
    }
    static get getContinent() {
        return this.continent;
    }
    static set getContinent(value) {
        this.continent = value;
    }
}
Infos.townName = '';
Infos.continent = '';
