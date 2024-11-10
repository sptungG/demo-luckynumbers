export interface TConfig {
  participantsCount: number;
  prizeConfig: {
    type: string;
    total: number;
  }[];
}

export interface TNumberData {
  prizeType: string;
  value: number;
}
