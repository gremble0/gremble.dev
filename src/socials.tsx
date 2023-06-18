import Social from './social';
import { Props } from './types';

function Socials({ items }: Props) {
    return (
        <div className = "socials">
            <h1 className = "title-socials">Contact me</h1>
            { items.map((item, i) => (
                <Social key = {i} {...item} />
            ))}
        </div>
    )
}

export default Socials
