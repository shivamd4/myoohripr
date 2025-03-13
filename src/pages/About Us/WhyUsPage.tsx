import Header from "@/components/Header";
import { LuCheckCircle } from "react-icons/lu";

const WhyUsPage = () => {
  const reasons = [
    {
      title: "24/7 work policy",
      description:
        "We neither go out of connection nor turn the phone off. It's on 24/7 and it gets answered whenever you call. So you can be assured of round-the-clock service (and, trust us, some clients do need it).",
    },
    {
      title: "Good at what we do",
      description:
        "We are result-oriented, and We are good at what we do (click here for testimonials). We want to add value and our goal are always and regularly to construct significant prospects for our clients.",
    },
    {
      title: "Do exactly what client want",
      description:
        "We put a lot of effort and evolve according to the client's desires. We do not follow the traditional pattern of work with everyone. We work on what exactly the client wants so we can deliver it.",
    },
    {
      title: "No suprises",
      description:
        "We operate on a 'no surprises' policy. No missed deadlines. No shoddy service. No budget blow-out. No unexpected bills. No broken promises.",
    },
    {
      title: "Go the extra mile",
      description:
        "We always go the extra mile. Usually, we work on partnership agreements with maximum clients, in that we fulfill all their requirements with additional productive suggestions.",
    },
  ];

  const situations = [
    "Have tight budget",
    "Facing short deadlines",
    "Need concrete results",
    "Necessity of illustration within 24hrs",
    "Required an entire B team within back",
    "Want to work with someone they can trust",
  ];

  const workWithUs = [
    "We build an enduring relationship with you",
    "We Are cost-effective",
    "Consistently fo the extra mile",
    "Always do the job properly",
    "Work according to client desire and deliver the results our clients want",
    "We are always pleasant to work with",
  ];
  return (
    <>
      <Header title="Why Us" />
      <div className="mt-9 flex flex-col gap-y-7 px-10 md:px-20">
        <div className="flex flex-col gap-y-2">
          <p className="text-2xl font-bold">
            WHY US-WE STAND DIFFERENT AMONG ALL AND ARE RECOGNIZED BY EVERY
            CLIENT DUE TO FOLLOWING REASONS
          </p>
          <div className="w-40 h-0.5 bg-yellow-400" />
        </div>

        <div className="mt-9 flex flex-col gap-y-5">
          {reasons.map((item) => {
            return (
              <div key={item.title} className="flex gap-x-3">
                <LuCheckCircle color="green" size={20} />
                <p>
                  <span className="font-bold">{item.title}: </span>
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between gap-y-10 md:gap-y-0 items-center">
        <div className="mt-9 flex flex-col gap-y-5 px-10 md:px-20">
          <div className="flex flex-col gap-y-2">
            <p className="text-2xl font-bold">
              THE CLIENT LOVES US IN THE FOLLOWING SITUATIONS. DO YOU FIT IN
              THIS PROFILE?
            </p>
            <div className="w-40 h-0.5 bg-yellow-400" />
          </div>

          <div className="mt-9 flex flex-col gap-y-5">
            {situations.map((item) => {
              return (
                <div key={item} className="flex gap-x-3">
                  <LuCheckCircle color="green" size={20} />
                  <p>{item}</p>
                </div>
              );
            })}
          </div>
        </div>
        <img
          src="/why-choose-us.webp"
          alt="Why Choose Us"
          className="mr-8 rounded-3xl w-[275px] lg:w-[400px]"
        />
      </div>

      <div className="flex flex-col md:flex-row md:justify-between gap-y-10 md:gap-y-0 items-center">
        <div className="mt-9 flex flex-col gap-y-5 px-10 md:px-20">
          <div className="flex flex-col gap-y-2">
            <p className="text-2xl font-bold">WHY SHOULD YOU WORK WITH US</p>
            <div className="w-40 h-0.5 bg-yellow-400" />
          </div>

          <div className="mt-9 flex flex-col gap-y-5">
            {workWithUs.map((item) => {
              return (
                <div key={item} className="flex gap-x-3">
                  <LuCheckCircle color="green" size={20} />
                  <p>{item}</p>
                </div>
              );
            })}
          </div>
        </div>
        <img
          src="/cost.webp"
          alt="COST"
          className="w-[275px] lg:w-[400px] rounded-3xl mr-8"
        />
      </div>
    </>
  );
};

export default WhyUsPage;
