import { ReadingTimeType } from "./readingTime";

export type FrontMatter = {
    title: string;
    date: string;
    preview: string;
    tags: string[];
    readingTime: ReadingTimeType;
    slug: string;
}