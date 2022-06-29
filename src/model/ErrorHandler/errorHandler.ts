export interface ErrorHandlerProps {
    error: {
        code: string;
        message: string;
    };
    parentSlug: string;
}