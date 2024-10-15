import rick from '../assets/rick.json';
import Card from '../components/Card';
export default function CharacterPage() {

    const getCharacters = (limit, offset) => {
        return rick.results.slice(offset, limit);

    }
    return (
        <div>
            <h1>Información Character pages</h1>
            <Card getCharacters={getCharacters} />
        </div>
    )
}