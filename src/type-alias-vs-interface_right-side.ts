// Interface

// Definition
interface IGameInterface {
  title: string;
  platform: string[];
}

interface IDlcInterface {
  extra: string;
  media: string;
}

// Extends
interface IGameCollectionInterface extends IGameInterface, IDlcInterface {
  online: boolean;
}

// Implements - Classes
class CreateGameClass implements IGameCollectionInterface {
  title: string;
  platform: string[];
  extra: string;
  media: string;
  online: boolean

  constructor(title: string, platform: string[], extra: string, media: string, online: boolean) {
    this.title = title;
    this.platform = platform;
    this.extra = extra;
    this.media = media;
    this.online = online;
  }
}

// Function declaration
interface IGetSimilarsInterface {
  (title: string): void
}

// Differences

// Allows multiple declarations with scope. it'll join declarations with the same name.

interface IJQueryInterface {
  prop_a: string;
}

interface IJQueryInterface {
  prop_b: string;
}

const _$: IJQueryInterface = {
  prop_a: 'foo',
  prop_b: 'bar'
} 