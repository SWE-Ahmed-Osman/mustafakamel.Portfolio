const SingleSocial = props => {

  return(
    <li>
      <a href="#">
        <div className="icon">
          {props.icon}
        </div>
        <p className="d-none d-md-block">{props.text}</p>
      </a>
    </li>
  );
  
};

export default SingleSocial;