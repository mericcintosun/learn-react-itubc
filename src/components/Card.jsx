import profilePic from "../assets/brocode-logo.png";

const Card = () => {
  return (
    <>
      <div className="border border-[hsl(0, 0%, 80%)] rounded-md shadow-md p-[20px] m-[10px] text-center max-w-[250px] inline-block">
        <img
          className="m-w-[60%] h-auto rounded-md mb-[10px]"
          src={profilePic}
          alt="profile picture"
        />
        <h2 className="m-0 text-2xl ">Bro Code</h2>
        <p className="text-sm">I make YouTube videos and play video games.</p>
      </div>
    </>
  );
};

export default Card;
