/* This class or the interface is not used ... just updating the class for completeness sakes
   I'm, now working directly with a array of JSON objects */
export class SearchDoc {
  constructor(public label: string, public value: string) {}
}

export interface IUserResponse {
  total: number;
  results: SearchUser[];
}
