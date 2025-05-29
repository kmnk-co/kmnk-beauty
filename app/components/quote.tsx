const Intro = (props: { content: { title: string; body: string } }) => {
  return (
    <div className="my-10">
      <div className="my-5 pl-3 py-1 text-3xl prompt border-l-4 border-foreground">
        {props.content.title}
      </div>
      <div className="my-3 text-2xl hind-light">{props.content.body}</div>
    </div>
  );
};

export default Intro;
