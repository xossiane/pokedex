import './PokeTag.scss'
function PokeTag(props){
    const classes = props.className ? props.className : "";
    return(
    <h2 className={"Poketag" + classes}>{props.text}</h2>)
};
 export default PokeTag