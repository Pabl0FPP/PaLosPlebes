import Typography from "./Typography";

export default function Button(props) {
    let { text } = props;
    return (
        <div>
            <button>{text}</button>
            <Typography paragraph="Texto del párrafo" />
        </div>
    )
}