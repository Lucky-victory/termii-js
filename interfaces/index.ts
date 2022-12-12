

export interface IResponse < T > {
   success: boolean;
   data: T | null;
   error ? : TermiiHttpError
}
export type TermiiHttpError = {
   message ? : string,
   data ? : any
}
export type ResponseCallback < T >= (data: T, err: TermiiHttpError) => void
export type TermiiAuth={
   apiKey:string
}