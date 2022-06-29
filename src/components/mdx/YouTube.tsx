interface VideoId {
    videoId: string;
}

const YouTube = ({ videoId }: VideoId) => {
    return (
        <iframe
            width="100%"
            height="315"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
        />
    );
};

export default YouTube;
