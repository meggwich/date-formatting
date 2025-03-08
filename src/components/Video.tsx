import DateTime from "./DateTime";
import DateTimePretty from "./DateTimePretty";
const DateTimeFied = DateTimePretty(DateTime);

interface VideoProps {
    url: string;
    date: string;
}

function Video(props: VideoProps) {
    return (
        <div className="video">
            <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <DateTimeFied date={props.date} />
        </div>
    )
}

export default Video;