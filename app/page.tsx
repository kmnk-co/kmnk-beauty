import BlogPreview from "./components/blog-preview";
import Quote from "./components/quote";
import Jumbotron from "./components/jumbotron";

const Quotes = [
  {
    title: "Inclusive. Professional. Judgment-free.",
    body: "Step into a space where your comfort, identity, and goals come first. Whether you're here for a full transformation or just a little touch-up, you'll be met with expertise, empathy, and zero judgment — always. Your skin, your pace, your journey.",
  },
  {
    title: "You belong here — just as you are.",
    body: "This is more than just hair removal — it’s a celebration of self-love, gender-affirmation, and feeling at home in your own skin. Come exactly as you are, and let’s create something beautiful together — one session at a time.",
  },
];

const Page = () => {
  return (
    <>
      <Jumbotron />
      <div className="cmp-container">
        <Quote content={Quotes[0]} />
        <Quote content={Quotes[1]} />
        <BlogPreview />
      </div>
    </>
  );
};

export default Page;
