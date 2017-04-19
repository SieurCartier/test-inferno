import {Link} from 'inferno-router';

const Phone = (props) => {
    return (
        <li className="thumbnail">
            <Link to={'details/' + props.phone.id}>
                <a className="thumb">
                    <img src={'./' + props.phone.imageUrl}
                         alt={props.phone.name}/>
                </a>
            </Link>
            <Link to={'details/' + props.phone.id}>
                <a>{props.phone.name}</a>
            </Link>
            <p>{props.phone.snippet}</p>
        </li>
    );
};

export default Phone ;