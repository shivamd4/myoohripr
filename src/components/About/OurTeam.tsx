import Section from "../Section";
import Title from "../Title";
import TeamCard from "./TeamCard";

const OurTeam = () => {
  return (
    <Section>
      <div className="flex flex-col gap-y-28 items-center">
        <div className="flex flex-col xl:flex-row gap-y-10 justify-center md:gap-x-20 items-center md:px-20">
          <div className="flex flex-col items-center md:items-start gap-y-3 w-[45%]">
            <Title>US Team</Title>
            <p className="leading-7 text-justify">
              Our experienced team in the USA comprises patent attorneys and
              representatives dedicated to delivering top-notch IP services.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-y-4 gap-x-6">
            <div className="flex flex-col gap-y-4">
              <TeamCard
                member={{
                  name: "Michael Bell",
                  designation: "Partner and Advisor",
                  email: "bell_michael@myoohr.com",
                  image: "/team/michealbell.webp",
                }}
              />
              <TeamCard
                member={{
                  name: "Mike OOHR",
                  designation: "Founding Partner",
                  email: "mike@myoohr.com",
                  image: "/team/mikeoohr.webp",
                }}
              />
            </div>
            <div className="flex flex-col gap-y-4 mt-20">
              <TeamCard
                member={{
                  name: "Steve Ngo",
                  designation: "US Representative and Attorney",
                  email: "steve@myoohr.com",
                  image: "/team/stevengo.png",
                }}
              />
              <TeamCard
                member={{
                  name: "David J. Beardall",
                  designation: "Patent Attorney",
                  email: "david@myoohr.com",
                  image: "/team/davidjbeardall.webp",
                }}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse xl:flex-row gap-y-10 justify-center gap-x-20 items-center px-20">
          <div className="flex flex-col gap-y-4 items-center">
            <div className="flex flex-col md:flex-row gap-y-4 gap-x-6">
              <div className="flex flex-col gap-y-4">
                <TeamCard
                  member={{
                    name: "Ishfaq Khan",
                    designation: "Chief Business Development Executive",
                    email: "ishfaq@myoohr.com",
                    image: "/team/ishfaqkhan.webp",
                  }}
                />
                <TeamCard
                  member={{
                    name: "Martin Reed",
                    designation: "Senior Business Development Executive",
                    email: "martin_reed@myoohr.com",
                    image: "/team/martinreed.png",
                  }}
                />
              </div>
              <div className="flex flex-col gap-y-4 mt-20">
                <TeamCard
                  member={{
                    name: "Matthew Smith",
                    designation: "Senior Business Development Executive",
                    email: "matthew@myoohr.com",
                    image: "/team/matthewsmith.png",
                  }}
                />
                <TeamCard
                  member={{
                    name: "Bhat Rayees",
                    designation: "Business Development Executive",
                    image: "/team/bhatrayees.webp",
                  }}
                />
              </div>
            </div>
            <TeamCard
              member={{
                name: "Sheikh Ishfaq",
                designation: "Business Development Executive",
                image: "/team/sheikhishfaq.jpg",
              }}
            />
          </div>
          <div className="flex flex-col items-center md:items-start gap-y-3 w-[90%]">
            <Title>Business Development Team</Title>
            <p className="leading-7 text-justify">
              Our dedicated team works tirelessly around the clock to ensure
              seamless connections with clients and guarantee their
              satisfaction.
            </p>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row gap-y-10 justify-center gap-x-20 items-center px-20">
          <div className="flex flex-col items-center md:items-start gap-y-3 w-[90%]">
            <Title>Operations Head</Title>
            <p className="leading-7 text-justify">
              Our teams boast domain experts from diverse backgrounds, with our
              heads being experienced professionals and alumni of prestigious
              institutions.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-y-4 gap-x-6">
            <div className="flex flex-col gap-y-4">
              <TeamCard
                member={{
                  name: "Mukul Pant",
                  designation: "Opeartion Head",
                  education: "B.tech, M.tech",
                  image: "/team/mukulpant.png",
                }}
              />
              <TeamCard
                member={{
                  name: "Sumit Sharma",
                  designation: "Software Expert",
                  education: "IIT Delhi, PhD (Computer Vision)",
                  image: "/team/sumitsharma.jpg",
                }}
              />
            </div>
            <div className="flex flex-col gap-y-4 mt-20">
              <TeamCard
                member={{
                  name: "Dr. Madhurima Debanshi",
                  designation: "Medical and Pharma Expert",
                  education: "BDS",
                  image: "/team/madhurimadebanshi.png",
                }}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse xl:flex-row gap-y-10 justify-center gap-x-20 items-center md:px-20">
          <div className="flex flex-col md:flex-row gap-y-4 gap-x-6">
            <div className="flex flex-col gap-y-4">
              <TeamCard
                member={{
                  name: "Akash Kumar",
                  designation: "LLB/IPR Attorney India",
                  email: "trademark@myoohr.com",
                  image: "/team/akashkumar.png",
                }}
              />
              <TeamCard
                member={{
                  name: "Shivam Nautiyal",
                  designation: "Digital Media Marketing",
                  image: "/team/dummy.webp",
                }}
              />
            </div>
            <div className="flex flex-col gap-y-4 md:mt-20">
              <TeamCard
                member={{
                  name: "Khalid Fayaz",
                  designation: "Data Scientist",
                  image: "/team/dummy.webp",
                }}
              />
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start gap-y-3 w-[45%]">
            <Title>Other Team Members</Title>
            <p className="leading-7 text-justify">
              Others within our team serve as crucial pillars, fortifying our
              strength and ensuring we operate at our best.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default OurTeam;
