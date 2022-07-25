module.exports = {
    get AU_IN_KM() {
        return 149587870;
    },
    convertAUtoKM(autoSum) {
        return autoSum * this.AU_IN_KM
    }
}