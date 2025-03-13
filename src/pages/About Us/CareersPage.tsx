import CareerForm from "@/components/About/CareerForm";
import Header from "@/components/Header";

const CareersPage = () => {
  return (
    <>
      <Header title="Careers" />
      <div className="mt-9 flex flex-col gap-y-7 px-10 md:px-20">
        <div className="flex flex-col gap-y-2">
          <p className="text-4xl font-bold">CAREERS</p>
          <div className="w-40 h-0.5 bg-yellow-400" />
        </div>
        <p className="text-justify">
          <span className="text-green-600">Oohr Intellectual Research LLP</span>{" "}
          is the name of a collection of individuals who believe in excellence.
          We specialize in hiring people who have the drive to succeed and the
          will to implement the discipline required to succeed. We focus on
          nurturing our team and providing our team an environment that is
          conductive to creative thought. We focus on eliminating stress and
          pressure so our team can think clearly and creatively. We help People
          to build their careers.
        </p>

        <CareerForm />
      </div>
    </>
  );
};

export default CareersPage;
