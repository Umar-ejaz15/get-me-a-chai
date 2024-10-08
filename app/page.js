import HomePageCard from "@/components/HomePageCard";
import Button1 from "@/components/Button1";
import Button2 from "@/components/Button2";

export default function Home() {
  const CardData = [
    {
      id: 1,
      title: "Donate",
      description:
        "Donate to the people who need it the most. We are a non-profit organization that helps people in need.",
      image: "https://media1.giphy.com/media/Vnk8f29XU6GSZK8uGJ/giphy.gif",
    },
    {
      id: 2,
      title: "Volunteer",
      description:
        "Volunteer to help the people who need it the most. We are a non-profit organization that helps people in need.",
      image: "https://media4.giphy.com/media/OccMlQrNO0YU4zFchY/source.gif",
    },
    {
      id: 3,
      title: "Fundraise",
      description:
        "Fundraise to help the people who need it the most. We are a non-profit organization that helps people in need.",
      image:
        "https://cdn.dribbble.com/users/873395/screenshots/3157364/desk-full-gif.gif",
    },
  ];
  return (
    <>
      <div className=" ">
        <div className="flex flex-col items-center text-center justify-center h-[auto] mt-20 mb-10">
          <div className="flex gap-5 items-center  justify-center ">
            <h1 className="font-semibold text-6xl tracking-tighter">
              Buy Me a Chai
            </h1>

            <img
              src="https://media0.giphy.com/media/1bNudJqrpQXbLDK8lM/giphy.gif?cid=6c09b952rzmlmf1h40l4edqop2eo3tcd2xs0wcm1qnw3ia4b&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s"
              alt="chai"
              width={50}
              height={50}
            />
          </div>
          <p className="w-[70vw] mt-10">
            {" "}
            Your contribution, no matter how small, helps us continue our
            mission and keeps us fueled with the chai we love. It's a simple way
            to show your appreciation and keep the creativity flowing. Thank you
            for your support!
          </p>
          <div className="btn flex gap-5 mt-5">
            <Button1 text="Start here" />
            <Button2 text="Read more" />
          </div>
        </div>
      </div>
      <div className="bg-white w-full h-1 opacity-10"></div>
      <div className="container flex  flex-col justify-center items-center mx-auto m-10">
        <h1 className="m-10 text-3xl font-semibold uppercase">
          Your fans can buy you a chai
        </h1>
        <div className="container flex  flex-wrap">
          {CardData.map((card) => (
            <>
              <HomePageCard key={card.id} card={card} />
            </>
          ))}
        </div>
      </div>
    </>
  );
}
