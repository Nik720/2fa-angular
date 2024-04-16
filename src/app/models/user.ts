export class User {
    id?: string;
    firstname?: string;
    lastname?: string;
    email?: string;
    password?: string;
    token?: string;
    enabled2fa?: boolean;
}

export interface TOTP {
    qrCodeUrl: string;
    secret: string;
}