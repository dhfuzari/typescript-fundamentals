// Type Alias

// Definition
type GameType = {
  title: string;
  platform: string[];
}

type DlcType = {
  extra: string;
  media: string;
}

// Intersection
type GameCollection = GameType & DlcType;



// Implements - Classes
class CreateGameType implements GameCollection {
  title: string;
  platform: string[];
  extra: string;
  media: string;

  constructor(title: string, platform: string[], extra: string, media: string) {
    this.title = title;
    this.platform = platform;
    this.extra = extra;
    this.media = media
  }
}



// Function declaration
type getSimilarsType = (title: string) => void;

function get(fn: getSimilarsType) {
 console.log(fn);
}

// Differences

// Allows to declare primitive types
type Idt = string | number

// Allows to declare tuples
type tupleType = [number, number];

[1,2] as tupleType;

//Allows only one declaration with scope
type JQueryType = { prop_a: string };
// type JQueryType = { prop_b: string }; // causes an error

