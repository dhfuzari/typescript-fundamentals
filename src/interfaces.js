var theLastOfUs = {
    title: 'The Last of Us',
    description: 'The best game in the world',
    platform: ['PS3, PS4'],
    getSimilars: function (title) {
        console.log("Similar games to ".concat(title, ": Uncharted, A Plague Tale, Metro"));
    }
};
theLastOfUs.getSimilars && theLastOfUs.getSimilars(theLastOfUs.title);
console.log("🚀 ~ file: interfaces.ts ~ line 21 ~ theLastOfUs", theLastOfUs);
var leftBehind = {
    title: 'The Last of Us - Left Behind',
    description: 'You play as Ellie before the original game',
    originalGame: theLastOfUs,
    newContent: ['3 hours story', 'new characters'],
    platform: ['PS4']
};
// Implementing an interface
var PlaystationGame = /** @class */ (function () {
    function PlaystationGame(title, description, platform) {
        this.title = title;
        this.description = description;
        this.platform = platform;
    }
    return PlaystationGame;
}());
var DlcGame = /** @class */ (function () {
    function DlcGame(title, description, platform, originalGame, newContent) {
        this.title = title;
        this.description = description;
        this.platform = platform;
        this.originalGame = originalGame;
        this.newContent = newContent;
    }
    return DlcGame;
}());
var rightBehind = new DlcGame('Right Behind', 'You play as John before the original game', ['PS4, PS5'], theLastOfUs, ['4 hours history']);
console.log("🚀 ~ file: interfaces.ts ~ line 69 ~ rightBehind", rightBehind);
