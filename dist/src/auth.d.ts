import { TermiiAuth } from '../interfaces/index';
export declare class Auth {
    private static auth;
    static set config(authConfig: TermiiAuth);
    static get config(): TermiiAuth;
}
