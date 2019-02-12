declare module "url" {
    export interface Url {
        protocol?: string;
        hostname?: string;
        pathname?: string;
    }

    export function parse(urlStr: string): Url;
}

declare module "url!*" {
    export interface Url {
        imageName?: string;
    }

    export function parse(imageStr: string): Url;
}


declare module "path" {
    export function normalize(p: string): string;
    export function join(...paths: any[]): string;
    export var sep: string;
}