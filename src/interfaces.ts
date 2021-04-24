interface IGame {
  title: string;
  readonly description: string;
  genre?: string;
  platform: string[];

  getSimilars?: (title: string) => void 
}

const theLastOfUs: IGame = {
  title: 'The Last of Us',
  description: 'The best game in the world',
  platform: ['PS3, PS4'],
  getSimilars: (title: string) => {
    console.log(`Similar games to ${title}: Uncharted, A Plague Tale, Metro`);
  }
}

theLastOfUs.getSimilars && theLastOfUs.getSimilars(theLastOfUs.title);
console.log(theLastOfUs);
// theLastOfUs.description = 'Lorem ipsum description'; //readonly member


// Extending an interface
interface IDlc extends IGame {
  originalGame: IGame;
  newContent: string[];
}

const leftBehind:IDlc = {
  title: 'The Last of Us - Left Behind',
  description: 'You play as Ellie before the original game',
  originalGame: theLastOfUs,
  newContent: ['3 hours story', 'new characters'],
  platform: ['PS4']
}

// Implementing an interface
class PlaystationGame implements IGame {
  title: string;
  description: string;
  platform: string[];

  constructor(title: string, description: string, platform: string[]) {
    this.title = title;
    this.description = description;
    this.platform = platform;
  }
}