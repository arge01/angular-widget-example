export interface BourseApi {
    [x: string]: any;
    name: string;
    icon: string;
    type: string;
    buy: string;
    sale: string;
}

export class BourseIcon {
    protected icon: any[] = [
        "united-states",
        "euro",
        "england",
        "switzerland",
        "japanese",
        "russian",
        "china",
        "saudi",
        "canada",
        "pakistani"
    ]

    getIcon(icon: number)
    {
        if ( this.icon[icon] )
            return this.icon[icon];
        else
            return "none";
    }
}

export class BourseModel implements BourseApi {
    name: string;
    icon: string;
    type: string;
    buy: string;
    sale: string;

    constructor(name:string, icon:string, type:string, buy:string, sale:string)
    {
        this.name = name;
        this.icon = icon;
        this.type = type;
        this.buy = buy;
        this.sale = sale;
    }
}
