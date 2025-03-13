import { motion } from "framer-motion";

import Header from "@/components/Header";
import SecondaryTitle from "@/components/SecondaryTitle";
import { patentSearch } from "../../../../constants/patent-search";
import { useNavigate } from "react-router-dom";
import { LuCheckCircle } from "react-icons/lu";

const BiologicalSequenceSearch = () => {
  const navigate = useNavigate();

  const list = [
    "To understand competitors",
    "To demonstrate the patentability and/or freedom to operate concerning certain distinct biological sequences: Types are Nucleotide sequences (RNA, DNA, Probes, genes, primers, etc.), Amino acid sequences (antibodies, peptides, enzymes, proteins, etc.).",
  ];

  const list2 = [
    "A team of experts in Biotechnology specializes in biological sequence search",
    "Years of experience in medical/chemical/biological sequence search similar domains.",
    "Perform exhaustive FTO/invalidity/Patentability searches.",
    "Perform similarity analysis based upon the available data.",
  ];
  return (
    <>
      <Header title="Biological Sequence Search" />

      <div className="flex flex-col xl:flex-row gap-y-6 px-10 2xl:px-28 mt-12 justify-between">
        <div className="flex flex-col gap-y-8 w-[97%] xl:w-[70%]">
          <div className="flex flex-col gap-y-4">
            <SecondaryTitle title="Biological Sequence Search" />
            <p className="leading-7 text-justify">
              Generally prior art searches refers to sequences of nucleotides or
              amino acids. It is a single, continuous molecule of nucleic acid
              or protein. is a single, continuous molecule of nucleic acid or
              protein. Biological sequences generally refer to sequences of
              nucleotides or amino acids. One hierarchy is that of the
              underlying molecule type: DNA, RNA, or protein. The other
              hierarchy is the way the underlying biological sequence is
              represented by the data structure. It could be a physical or
              genetic map, an actual sequence of amino acids or nucleic acids,
              or some more complicated data structure building a composite view
              from other entries.
            </p>
          </div>

          <div className="flex flex-col gap-y-4">
            <SecondaryTitle title="Why conduct biological sequence search?" />
            {list.map((item) => {
              return (
                <div key={item} className="flex gap-x-5">
                  <div className="w-6">
                    <LuCheckCircle color="green" size={18} />
                  </div>
                  <p className="leading-7 text-justify">{item}</p>
                </div>
              );
            })}
            <p className="leading-7 text-justify">
              In Biological sequence search, we focus on finding the sequence in
              patent and non-patent literature. We have a specialized team in
              searching and examine, bio-sequences-based patents and expertise
              both in free and paid databases. We utilize extensive searching
              tools like NCBI-BLAST, EMBL, STN, GenomeQuest, PCTGene, UNIPROT,
              ExPAsy, GENESEQ, for bio-sequences.
            </p>
          </div>

          <div className="flex flex-col gap-y-4">
            <SecondaryTitle title="Biological Sequence Search Listing" />
            <p className="leading-7 text-justify">
              Biological Sequence Search listings allow biological sequence data
              in patent applications to be collected and transferred to
              searchable databases used by the United States Patent and
              Trademark Office (USPTO)/WIPO/EPO /(other jurisdictions) and the
              public. Biological sequences serve as state of the art and as a
              reference for future research and innovation. Presentation of
              biological sequence data in a standardized sequence list format
              facilitates publication and inclusion in searchable databases. A
              sequence listing provides a standardized means of presenting the
              completeness of biological sequence data that is described in a
              patent application in a single document. More specifically, it
              includes a list of nucleotide (DNA or RNA) and/or amino acid
              protein sequences that are described in the patent application by
              listing their residues and that meet sequence length thresholds A
              biological sequence search is a single/continuous molecule of
              nucleic acid or protein. It can be thought of as a hierarchy of
              multiple inheritance classes. One hierarchy is that of a basic
              type of molecule: DNA, RNA, or protein. Another hierarchy is the
              way the underlying biological sequence is represented by a data
              structure. It can be a physical or genetic map, an actual sequence
              of amino acids or nucleic acids, or some more complicated data
              structure creating a composite view from other records.
            </p>
          </div>

          <div className="flex flex-col gap-y-4">
            <SecondaryTitle title="BIOSEQ: The Biological Sequence" />
            <p className="leading-7 text-justify">
              Bioseq represents a single continuous molecule of nucleic acid or
              protein. It can be a genetic map or a physical map. All Bioseqs
              have more commonalities than differences. All Bioseqs must have at
              least one identifier, the Seq-id (ie, the Bioseq must be citable).
            </p>
          </div>

          <div className="flex flex-col gap-y-4">
            <SecondaryTitle title="SEQ-ID: Identifying the BIOSEQ" />
            <p className="leading-7 text-justify">
              Each Bioseq MUST have at least one Seq-id or sequence identifier
              to make Bioseq always citable. You can refer to it with some
              label.
            </p>
          </div>

          <div className="flex flex-col gap-y-4">
            <SecondaryTitle title="SEQ-ANNOT: Annotation the BIOSEQ" />
            <p className="leading-7 text-justify">
              A seq-annot is a self-contained package of sequence annotations or
              information that refer to specific locations on specific Bioseqs.
              Each Seq-annot can have an Object-id for local use by software, a
              Dbtag to globally identify the source of the Seq-annot, and/or a
              name and description for human display and use. These describe the
              entire annotation package and allow it to be assigned to a
              resource independently of the Bioseq resource. A seq-annot can
              contain a feature table, a set of sequence alignments, or a set of
              attribute graphs along a sequence.
            </p>
          </div>

          <div className="flex flex-col gap-y-4">
            <SecondaryTitle title="SEQ-DESCR: Describing the BIOSEQ and Placing it in Context" />
            <p className="leading-7 text-justify">
              The seq-descr is to describe the Bioseq (or Bioseq set.. see
              Bioseq Sets) and place it in a biological and/or bibliographic
              context. Seq-descrs apply to the entire Bioseq. Some Seq-descr
              classes also appear as functions when used to describe a specific
              part of a Bioseq. But anything that appears at the Seq-descr level
              applies to the whole thing.
            </p>
          </div>

          <div className="flex flex-col gap-y-4">
            <SecondaryTitle title="Why Us?" />
            {list2.map((item) => {
              return (
                <div key={item} className="flex gap-x-5">
                  <div className="w-6">
                    <LuCheckCircle color="green" size={18} />
                  </div>
                  <p className="leading-7 text-justify">{item}</p>
                </div>
              );
            })}
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
          {patentSearch
            .filter((item) => item.title !== "Biological Sequence Search")
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

export default BiologicalSequenceSearch;
