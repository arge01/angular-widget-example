export class ApiSettings {
    token: string;
    count: number;
    
    domains() 
    {
        return "hurriyet.com.tr"    
    }

    instagramSeettings()
    {
        this.token = "8288129000.1677ed0.add33334f54c44f5af621f9fcb7e668a";
        this.count = 5;
        return {'token': this.token, 'count': this.count};
    }
}