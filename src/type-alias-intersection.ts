// AccountInfo
// CharInfo
// PlayerInfo

type AccountInfo = {
  id: number,
  name: string,
  email?: string // optional field using ? operator
}

const account: AccountInfo = {
  id: 1,
  name: 'Daniel',
}

type CharInfo = {
  nickname: string,
  level: number,
}

const char: CharInfo = {
  nickname: 'dhfuzari',
  level: 100
}

// Extending type aliases with intersection - PlayerInfo is an intersection of AccountInfo and CharInfo
type PlayerInfo = AccountInfo & CharInfo;

const player:PlayerInfo = {
  id: 2,
  name: 'Henrique Fuzari',
  nickname: 'dhfuzari',
  level: 150
}