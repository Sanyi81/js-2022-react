export default function Simpson (props) {
    let {name, surname, age, logo} = props;
    return (
        <div>
            <h2>{name} {surname}</h2>
            <h3>Age: {age}</h3>
            <img src={logo} alt="{name}"/>
        </div>
    );

}