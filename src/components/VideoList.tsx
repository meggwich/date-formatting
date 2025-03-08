import Video from "./Video";

interface VideoListProps {
    list: { url: string; date: string }[];
}

function VideoList(props: VideoListProps) {
    return props.list.map(item => <Video url={item.url} date={item.date} />);
}

export default VideoList;