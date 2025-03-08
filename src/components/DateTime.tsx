export type DateTimeProps = {
    date: string;
};

function DateTime(props: DateTimeProps) {
    return (
        <p className="date">{props.date}</p>
    )
}
export default DateTime;