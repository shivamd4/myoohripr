import { motion } from "framer-motion";

import Header from "@/components/Header";
import { useNavigate } from "react-router-dom";
import SecondaryTitle from "@/components/SecondaryTitle";
import { LuCheckCircle } from "react-icons/lu";
import { patentProsecution } from "../../../../constants/patent-prosecution";

const SequenceListingPage = () => {
  const navigate = useNavigate();

  const list = [
    "ST.25 format doesn't align with INSDC standards, leading to data loss when input into public databases.",
    "Ambiguities in ST.25 regulations result in varying interpretations and enforcement by IP Offices globally",
    "ST.25 rules fail to encompass certain prevalent sequence types today, such as nucleotide analogs, D-amino acids, and branched sequences, thus omitting them from searchable databases.",
    "Due to its lack of structure, ST.25 format poses challenges for automated validation and data exchange.",
  ];

  const differences = [
    {
      st25: "ASCII .txt with numeric identifiers",
      st26: "XML with elements and attributes",
    },
    {
      st25: "Not required to include: - D-amino acids - Linear portions of branched sequences - Nucleotide analogs",
      st26: "Must include: - D-amino acids - Linear portions of branched sequences - Nucleotide analogs",
    },
    {
      st25: "ALL priority application information may be included",
      st26: "ONLY the earliest priority application can be included",
    },
    {
      st25: "ALL applicant and inventor names may be included",
      st26: "ONLY one applicant AND optionally ONE inventor may be included",
    },
    {
      st25: "One invention title permitted",
      st26: "Multiple invention titles permitted, each one in a different language",
    },
    {
      st25: "Sequences identified as DNA, RNA, or PRT only",
      st26: "Sequences identified as DNA, RNA, or PRT only	Sequences identified as DNA, RNA, or AA along with a mandatory mol_type qualifier to further describe the molecule",
    },
    {
      st25: "Amino acid sequences represented by three letter abbreviations",
      st26: "Amino acid sequences represented by one letter abbreviations",
    },
  ];
  return (
    <>
      <Header title="Sequence Listing" />

      <div className="flex px-28 mt-12 justify-between">
        <div className="flex flex-col gap-y-8 w-[70%]">
          <div className="flex flex-col gap-y-4">
            <SecondaryTitle title="Sequence Listing WIPO STANDARD ST.26" />
            <p className="leading-7 text-justify">
              Biotechnological advancements encompass various processes such as
              gene mutation, sequencing, and the modulation of gene expression.
              When inventors seek patents for such innovations, they must
              provide thorough descriptions, including detailed sequences. This
              entails transforming raw DNA and protein sequences into a specific
              structure mandated by patent guidelines, a process known as
              Sequence Listing. Genes are composed of polynucleotide chains,
              consisting of adenine (A), thymine (T)/uracil (U), cytosine (C),
              and guanine (G), which encode amino acids. Proteins, on the other
              hand, are comprised of these amino acids, with a standard set of
              20 naturally occurring ones, each represented by a unique
              one-letter code.
            </p>
          </div>

          <div className="flex flex-col gap-y-4">
            <SecondaryTitle title="Why WIPO ST.26?" />
            {list.map((item) => {
              return (
                <div key={item} className="flex gap-x-5">
                  <div className="w-5 mt-1">
                    <LuCheckCircle color="green" size={18} />
                  </div>
                  <p className="leading-7 text-justify">{item}</p>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col gap-y-4">
            <SecondaryTitle title="What's different (ST.25 and ST.26)?" />
            <p className="leading-7 text-justify">
              The most noticeable distinction between ST.25 and ST.26 lies in
              the file format. While ST.25 accepts TXT or PDF files, ST.26
              mandates that sequence listings be presented in XML format. A
              sample of an ST.26 sequence listing is provided.
            </p>
            <p className="leading-7 text-justify">
              Other significant alterations include the mandate to incorporate
              additional sequence types, such as D-amino acids, linear segments
              of branched sequences, and nucleotide analogs. Additionally, ST.26
              prohibits the inclusion of small sequences (defined as &lt;10
              specifically designated nucleotides or &lt; 4 specifically
              designated amino acids). Under ST.26, amino acids are now denoted
              by a single capital letter rather than three-letter codes, and
              uracil in RNA is represented by "t" instead of "u".
            </p>
          </div>

          <div className="flex flex-col gap-y-4">
            <SecondaryTitle title="WIPO ST.25 versus ST.26" />
            <table className="table-auto border-2 border-black">
              <thead className="bg-blue-600">
                <tr className="border-b-2 border-b-black">
                  <th className="border-r-2 border-black text-white font-semibold">
                    ST.25
                  </th>
                  <th className="text-white font-semibold">ST.26</th>
                </tr>
              </thead>
              <tbody>
                {differences.map((item, i) => {
                  return (
                    <tr className="border-b-2 border-b-black" key={i}>
                      <td className="border-r-2 border-black pl-4">
                        {item.st25}
                      </td>
                      <td className="pl-4">{item.st26}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col gap-y-4">
            <SecondaryTitle title="Our Service" />
            <p className="text-justify leading-7">
              OOHR Intellectual Research LLP contributes significantly to this
              service through its experienced team. With a deep understanding of
              biotechnology and patent regulations, their team ensures seamless
              compliance with the requirements of ST.26 and other relevant
              standards. Leveraging their expertise, they assist clients in
              preparing accurate and comprehensive sequence listings in XML
              format, thereby minimizing the risk of data loss and ensuring
              compatibility with public databases. Additionally, OOHR
              Intellectual Research LLP offers guidance on incorporating diverse
              sequence types, such as D-amino acids and nucleotide analogs, and
              ensures adherence to stipulated size restrictions. Their
              proficiency extends to providing user-friendly solutions for
              viewing sequence data, utilizing tools like the WIPO Sequence
              software. Clients benefit from OOHR Intellectual Research LLP's
              commitment to delivering high-quality services tailored to meet
              their specific needs in navigating the evolving landscape of
              biotechnology patents.
            </p>
          </div>
        </div>

        <motion.div
          className="flex flex-col gap-y-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        >
          <div className="flex flex-col gap-y-2">
            <p className="text-xl font-bold">Other Services</p>
            <div className="w-40 h-0.5 bg-yellow-400" />
          </div>
          {patentProsecution
            .filter((item) => item.title !== "Sequence Listing")
            .map((item) => {
              return (
                <p
                  key={item.title}
                  className={`border-b-2 font-semibold border-transparent ${
                    item.url !== ""
                      ? "hover:border-yellow-400 cursor-pointer"
                      : ""
                  } delay-75 transition-all w-fit`}
                  onClick={() => item.url !== "" && navigate(`/${item.url}`)}
                >
                  {item.title}
                </p>
              );
            })}
        </motion.div>
      </div>
    </>
  );
};

export default SequenceListingPage;
