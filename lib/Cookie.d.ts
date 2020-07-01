declare type Options = {
    path?: string;
    domain?: string;
    maxAge?: number;
    expires?: string;
    secure?: boolean;
    samesite?: "strict" | "lax";
};
declare type CookieObjectType = {
    [key: string]: string;
};
export declare class Cookie {
    create(key: string, value: string, options?: Options): void;
    get(key: string): string | undefined;
    edit(key: string, value: string, options?: Options): boolean;
    delete(key: string): boolean;
    getAll(): CookieObjectType;
}
export {};
