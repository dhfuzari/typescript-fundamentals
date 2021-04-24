interface IGame {
  title: string;
  readonly description: string;
  genre?: string;
  platform: string[];

  getSimilars: (title: string) => void 
}

const theLastOfUs: IGame = {
  title: 'The Last of Us',
  description: 'The best game in the world',
  platform: ['PS3, PS4'],
  getSimilars: (title: string) => {
    console.log(`Similar games to ${title}: Uncharted, A Plague Tale, Metro`);
  }
}

theLastOfUs.getSimilars(theLastOfUs.title);
console.log(theLastOfUs);
// theLastOfUs.description = 'Lorem ipsum description'; //readonly member