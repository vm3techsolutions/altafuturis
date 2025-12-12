"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function CaseStudyDetails({ params }) {
  const { slug } = params;
  const [study, setStudy] = useState(null);

  useEffect(() => {
    fetch("/data/case-study.json")
      .then((res) => res.json())
      .then((json) => {
        // const allStudies = json.categories.flatMap((cat) =>
        //   cat.caseStudy.map((item) => ({
        //     ...item,
        //     slug: item.title
        //       .toLowerCase()
        //       .replace(/ /g, "-")
        //       .replace(/[^a-zA-Z0-9-]/g, ""),
        //   }))
        // );

        // const foundStudy = allStudies.find((cs) => cs.slug === slug);
        // setStudy(foundStudy);

        const allStudies = json.categories.flatMap((cat) =>
  cat.caseStudy.map((item) => ({
    ...item,
    slug: item.link.replace("/", "")
  }))
);

const foundStudy = allStudies.find((cs) => cs.slug === slug);
setStudy(foundStudy);

      });
  }, [slug]);

  if (!study)
    return <p className="text-center mt-40 text-xl font-semibold">Loading...</p>;

  return (
    <div className="mx-auto  py-32 px-10">

      <Image
        src={study.image}
        width={1200}
        height={600}
        alt={study.title}
        className="w-full h-96 object-cover rounded-xl"
      />

      <p className="text-gray-500 mt-4">📅 {study.p}</p>

      <h1 className="text-4xl font-bold mt-3">{study.title}</h1>

      <p className="text-gray-700 leading-7 mt-6">
        {study.description}
      </p>

      <Link href="/case-studies">
        <button className="bg-blueColor  text-white px-4 py-2 rounded-md mt-10">
          ← Back to Case Studies
        </button>
      </Link>
    </div>
  );
}
