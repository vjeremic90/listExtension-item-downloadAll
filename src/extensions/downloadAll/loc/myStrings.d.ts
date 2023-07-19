declare interface IDownloadAllCommandSetStrings {
  Command1: string;
  Command2: string;
}

declare module 'DownloadAllCommandSetStrings' {
  const strings: IDownloadAllCommandSetStrings;
  export = strings;
}
