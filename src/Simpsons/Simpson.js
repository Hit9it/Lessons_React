let Simpson = (props) =>{
    let {name, surname, image} = props;
    return(
      <div>
          <div>Name: {name}</div>
          <div>Surname: {surname}</div>
          <img src={image} alt={name}/>
      </div>
    );
}
export {Simpson};