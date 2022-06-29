export type ReadingTimeType = {
    minutes: number;
    text: string;
    time: number;
    words: number;
}

export interface ReadingTime {
    readingTime: ReadingTimeType
}