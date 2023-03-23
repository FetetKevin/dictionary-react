export default function Definition(props) {
    const data = props.data;

    let i = 0;
    const definitions = data.definitions.map((el) => (
        <li key={i++}>{el.definition}</li>
    ));

    return (
        <>
            <h3>{data.partOfSpeech}</h3>

            <h4 className="meaning">meaning</h4>

            <ul>{definitions}</ul>
        </>
    );
}
