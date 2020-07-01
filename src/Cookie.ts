type Options = {
  path?: string;
  domain?: string;
  maxAge?: number;
  expires?: string;
  secure?: boolean;
  samesite?: "strict" | "lax";
};

type CookieObjectType = { [key: string]: string };

export class Cookie {
  public create(key: string, value: string, options: Options = {}): void {
    const params = [
      `${key}=${value}`,
      ...((options.path && [`path=${options.path}`]) || []),
      ...((options.domain && [`domain=${options.domain}`]) || []),
      ...((options.maxAge && [`max-age=${options.maxAge}`]) || []),
      ...((options.expires && [`expires=${options.expires}`]) || []),
      ...((options.secure && ["secure"]) || []),
      ...((options.samesite && [`samesite=${options.samesite}`]) || []),
    ];
    document.cookie = params.join(";");
  }

  public get(key: string): string | undefined {
    const cookies: CookieObjectType = this.getAll();
    if (!cookies[key]) {
      return undefined;
    }
    return cookies[key];
  }

  public edit(key: string, value: string, options?: Options): boolean {
    if (!this.get(key)) {
      console.warn(`Error: Cookie with the name ${key} does not exist.`);
      return false;
    }
    this.create(key, value, options);
    return true;
  }

  public delete(key: string): boolean {
    if (!this.get(key)) {
      return false;
    }
    document.cookie = `${key}=;max-age=-1`;
    return true;
  }

  public getAll(): CookieObjectType {
    const cookies: CookieObjectType = {};
    document.cookie.split(";").forEach((pair) => {
      const indexOfEquals = pair.trim().indexOf("=");
      const value = pair.trim().substring(indexOfEquals + 1);
      const key = pair.trim().substring(0, indexOfEquals);
      cookies[key] = value;
    });
    return cookies;
  }
}
