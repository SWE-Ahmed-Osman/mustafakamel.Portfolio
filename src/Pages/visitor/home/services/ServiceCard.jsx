import ScrollTransition from "../../../../UI/ScrollTransition";

const ServiceCard = props => {


  return(
    <ScrollTransition 
      elementTop={props.elementTop}
      duration={1.5}
      delay={`${props.index / 2}`}
      classes="col-12 col-md-6"
    >
      <div className="service_card side_border">
        {props.icon}
        <h3 className="service_card_title">{props.title}</h3>
        <p className="service_card_paragraph text_gray">{props.parag}</p>
      </div>
    </ScrollTransition>
  );
};

export default ServiceCard;