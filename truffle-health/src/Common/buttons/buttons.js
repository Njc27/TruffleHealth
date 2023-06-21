import './buttons.css';

export const PrimaryBtn =(props) =>{
    const {name} = props;
    return(
        <>
            <input type = "button" value={name} className="primary-btn"/>
        </>
    )
}