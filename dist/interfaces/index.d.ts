export interface IResponse<T = object> {
    success: boolean;
    data: T | null;
    error?: TermiiHttpError | null;
}
export type TermiiHttpError = {
    message?: string;
    data?: any;
    status?: number;
};
export type ResponseCallback<T> = (data: IResponse<T> | null, err: IResponse<T> | null) => void;
export type TermiiAuth = {
    apiKey: string;
};
