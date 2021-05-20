export interface Bible {
    Book?: Book[];
}

export interface Book {
    Chapter?: Chapter[];
}

export interface Chapter {
    Verse?: Verse[];
}

export interface Verse {
    Verseid?: string;
    Verse?:   string;
}

export interface BibleVerse {
    Book?: number;
    Chapter?: number;
    Verse?: number;    
}

// Converts JSON strings to/from your types
export class Convert {
    public static toBible(json: string): Bible {
        return JSON.parse(json);
    }

    public static bibleToJson(value: Bible): string {
        return JSON.stringify(value);
    }
}
