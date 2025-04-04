import Image from 'next/image';
import axios from 'axios';
import { Calendar, MapPin, Briefcase, BadgeDollarSign } from 'lucide-react';

const WORDPRESS_API = process.env.NEXT_PUBLIC_WORDPRESS_API;

// ✅ Fetch all career post slugs for static generation
export async function generateStaticParams() {
    try {
      const response = await axios.get(`${WORDPRESS_API}/career?per_page=100`);
      const slugs = response.data.map((job) => ({ slug: job.slug }));
      console.log("Generated career slugs:", slugs); // ⬅️ Debug output
      return slugs;
    } catch (error) {
      console.error('Error fetching career slugs:', error);
      return [];
    }
  }

const CareerDetails = async ({ params }) => {
  const { slug } = params;

  try {
    const response = await axios.get(
      `${WORDPRESS_API}/career?slug=${slug}&_embed=true&acf_format=standard`
    );

    if (!response.data || response.data.length === 0) {
      return <p className="text-center mt-10 text-red-500">Job not found.</p>;
    }

    const job = response.data[0];
    const jobDetails = {
      title: job.title?.rendered || 'Untitled',
      jobTitle: job.acf?.job_title || 'Not specified',
      date: new Date(job.date).toLocaleDateString(),
      image:
        job._embedded?.['wp:featuredmedia']?.[0]?.media_details?.sizes?.full?.source_url ||
        '/assets/placeholder.png',
      content: job.acf?.job_description || '<p>No description available.</p>',
      location: job.acf?.location || 'Not specified',
      experience: job.acf?.experience || 'Not specified',
      qualification: job.acf?.qualification || 'Not specified',
      salary: job.acf?.salary || 'Not specified',
      jobType: job.acf?.job_type || 'Not specified',
      applyLink: job.acf?.apply_link || '#',
    };

    return (
      <div className="py-12 bg-white">
        {/* ✅ Banner Image */}
        {/* <div className="w-full h-[35vh] md:h-[65vh] relative">
          <Image
            className="w-full h-full object-cover"
            src={jobDetails.image}
            alt={jobDetails.title}
            layout="fill"
            objectFit="cover"
          />
        </div> */}

        <div className=" mt-20 px-6 md:px-12 py-6">
          {/* ✅ Date & Meta */}
          <div className="mt-4 text-md text-gray-500 flex flex-wrap gap-6 items-center">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <p>{jobDetails.date}</p>
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              <p>{jobDetails.location}</p>
            </div>
            <div className="flex items-center">
              <Briefcase className="w-4 h-4 mr-2" />
              <p>{jobDetails.jobType}</p>
            </div>
            <div className="flex items-center">
              <BadgeDollarSign className="w-4 h-4 mr-2" />
              <p>{jobDetails.salary}</p>
            </div>
          </div>

          {/* ✅ Job Title */}
          <h1 className="text-3xl md:text-4xl font-bold mt-4">{jobDetails.title}</h1>
          <p className="text-lg text-gray-700 mt-1 italic">{jobDetails.jobTitle}</p>

          {/* ✅ Details */}
          <div className="mt-4 space-y-2 text-lg text-gray-700">
            <p>
              <strong>Experience:</strong> {jobDetails.experience}
            </p>
            <p>
              <strong>Qualification:</strong> {jobDetails.qualification}
            </p>
            <p>
              <strong>Job Type:</strong> {jobDetails.jobType}
            </p>
            <p>
              <strong>Salary:</strong> {jobDetails.salary}
            </p>
          </div>

          {/* ✅ Description */}
          <div
            className="mt-6 text-lg text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: jobDetails.content }}
          />

          {/* ✅ Apply Button */}
          <div className="mt-10 text-left">
            <a
              href="mailto:career@altafuturis.com"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error loading career post:', error);
    return <p className="text-center mt-10 text-red-500">Error loading job.</p>;
  }
};

export default CareerDetails;