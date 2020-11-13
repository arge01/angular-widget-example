export interface Source {
    id: number;
    name: string;
}

export interface Caps {
    likes: number;
    share: string;
    comments: number;
}

export interface Articles {
    [x: string]: any;
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: Source;
    title: string;
    url: string;
    urlToImage: string;
    caps: Caps;
}

export interface NewsApi {
    articles: Articles;
    status: boolean;
    totalResults: number;
}

export class NewsModel implements Articles {
    content: string;
    desceprition: string;
    publishedAt: string;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    source: any;
    caps: any;

    constructor({ author, title, description, url, urlToImage, source, caps }: { author: string; title?: string; description?: string; url: string; urlToImage: string; source?: any; caps?: any})
    {
        this.author = author;
        this.title = title;
        this.description = description;
        this.url = url;
        this.urlToImage = urlToImage;
        this.source = source;
        this.caps = caps;
    }
}

export class CapsApi implements Caps {
    likes: number;
    share: string;
    comments: number;

    constructor({ likes, share, comments }: { likes: number; share: string; comments: number; })
    {
        this.likes = likes;
        this.share = share;
        this.comments = comments;
    }
}