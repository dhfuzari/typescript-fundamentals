// Union: number | string -> use pipe to separate types and make an union
let uniqueIdentifier: number | string;
uniqueIdentifier = 12345;
uniqueIdentifier = 'abcde';


// Type alias

function logDetails(uuid: number | string, item: string) {
  console.log(`A product with ${uuid} has a title as ${item}`)
}

// instead og use "number | string" union, I could use the "Uuid" type alias
type Uuid = number | string;

function logInfo(uuid: Uuid, user: string) {
  console.log(`An user with ${uuid} has a name as ${user}`)
}

logDetails(39, "shoes"); // uuid as a number
logDetails('37', "snickers") // uuid as a string

logInfo(12, "Daniel"); // uuid as number
logInfo('13', "Henrique"); // uuid as string

// Type alias for pre-defined values
type PLatform = 'MacOS' | 'Linux' | 'Windows';

function renderPlatform(platform: PLatform) {
  console.log(`My platform is ${platform}`);
}
renderPlatform('MacOS');
// renderPlatform('Unix'); // It accepts only 'MacOS' | 'Linux' | 'Windows' pre-declared in the union
