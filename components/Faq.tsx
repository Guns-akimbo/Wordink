import Accordion from "./Accordion";

const Faq = () => {
  const faq = [
    {
      title: "Lorem, ipsum dolor sit fjfkfjfk fhjf ",
      answer: "no i am not a boy ",
    },
    {
      title: "i am a boy not a girl",
      answer:
        "no i am not a boy hjfjrrkr Lorem, ipsum dolor sit fjfkfjfk fhjf fghjfjfj fhjfjkkjf fhjjf hfhjjfjfj jfjfjfjfjfj hfjfj",
    },
    {
      title: "how do i participate",
      answer: "no i am not a boy ",
    },
  ];
  return (
    <>
      <div className="flex  flex-col justify-center items-center w-full">
        <h2> how design works</h2>
        <div className="p-4 bg-white w-full laptop:w-[50%] rounded-lg text-black ">
          {faq.map((faq, idx) => (
            <Accordion key={idx} title={faq.title} answer={faq.answer} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Faq;
