export class ApiSettings {
    token: string;
    count: number;
    
    domains() 
    {
        return "hurriyet.com.tr"    
    }

    instagramSeettings()
    {
        this.token = "bc254e4729544151b9310d64cb7056eb";
        this.count = 5;
        return {'token': this.token, 'count': this.count};
    }
}