
export default function Link(props) {

  const link = props.link;

  return (
    <div className={"Link"}>
      <a href={link.url}>
        <img src={link.icon} alt={link.title} />
        <p>{link.title}</p>
      </a>
    </div>
  );
}