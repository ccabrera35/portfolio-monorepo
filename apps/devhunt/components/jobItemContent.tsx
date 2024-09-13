"use client";

import Image from "next/image";
import { useActiveIdContext, useJobItem, useParsedJobItem } from "lib/hooks";
import BookmarkIcon from "./bookmarkIcon";
import Spinner from "./spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faLocationDot, faMoneyBill } from "@fortawesome/free-solid-svg-icons";

const isProd = process.env.NODE_ENV === "production";

export default function JobItemContent() {
  const { activeId } = useActiveIdContext();
  const { jobItem, isLoading } = useJobItem(activeId);
  const { qualifications, reviews } = useParsedJobItem(jobItem!);
  
  if (isLoading) return <LoadingJobContent />;
  if (!jobItem) return <EmptyJobContent />;

  const {
    id,
    title,
    company,
    description,
    duration,
    salary,
    location,
    badge_letters,
    days_ago,
    cover_img_url
  } = jobItem;
  

  return (
    <section className="flex-1 overflow-scroll relative bg-[#eff2f5] rounded-tr-[12px] rounded-br-[8px]">
      <div className="h-full">
        <Image src={cover_img_url} alt="Cover Image" height={174} width={0} sizes="100 vw" className="object-cover w-full h-[174px] absolute top-0 z-0 rounded-tr-lg select-none"/>

        <a
          className={`
            absolute bg-[#1469b3] z-20 text-[rgba(255,255,255,0.92)] text-[11px] pt-[5px] px-[10px] pb-[6px] rounded-[3px] top-3 right-3 cursor-pointer uppercase transition-all flex items-center
            hover:bg-[#1d60bd] hover:text-white
            focus:bg-[#1d60bd] focus:text-white
            leading-tight
          `}
          href={isProd ? "/devhunt" : "/"}
          target="_blank"
        >
          Apply
        </a>

        <section
          className={`
            flex relative z-10 mb-10 gap-x-4 pt-[120px] 
            before:content-[''] before:absolute before:w-full before:h-[174px] before:top-0 
            before:left-0 before:-z-10 before:rounded-tr-lg before:bg-gradient-to-t 
            before:from-[rgba(0,0,0,0.7)] before:to-[rgba(0,0,0,0.15)]
          `}
        >
          <div className="pl-[42px]">
            <div className="w-[55px] h-[70px] bg-[#1469b3] rounded-[5px] flex items-center justify-center text-[22px] font-semibold mb-[13px]">
              {badge_letters}
            </div>
            <div className="flex justify-between">
              <time className="text-xs translate-y-[1px] text-[#494d4f]">
                {days_ago}d
              </time>
              <BookmarkIcon id={id} />
            </div>
          </div>

          <div className="pr-[42px]">
            <h2 className="text-[23px] text-white font-medium">{title}</h2>
            <p className="text-[14px] italic text-white text-opacity-80">
              {company}
            </p>
            <p className="text-[14px] mt-[18px] mb-[12px] leading-[1.4]">
              {description}
            </p>
            <div className="flex gap-[35px]">
              <p className="text-[12px] flex items-center gap-[5px]">
                <span className="h-[23px] w-[23px] rounded-full bg-[#e4e9ed] flex justify-center items-center mr-[8px]">
                <FontAwesomeIcon icon={faClock} className=" text-[9px] text-[#a1a8b0]"/>
                </span>
                {duration}
              </p>
              <p className="text-[12px] flex items-center gap-[5px]">
                <span className="h-[23px] w-[23px] rounded-full bg-[#e4e9ed] flex justify-center items-center mr-[8px]">

               <FontAwesomeIcon icon={faMoneyBill} className="text-[9px] text-[#a1a8b0]"/>
                </span>
                {salary}
              </p>
              <p className="text-[12px] flex items-center gap-[5px]">
                <span className="h-[23px] w-[23px] rounded-full bg-[#e4e9ed] flex justify-center items-center mr-[8px]">
                <FontAwesomeIcon icon={faLocationDot} className="text-[9px] text-[#a1a8b0]"/>{" "}
                </span>
                {location}
              </p>
            </div>
          </div>
        </section>
        <div>
          <section className="flex pl-[42px] pr-[42px] mb-[30px]">
            <div className="mr-[35px]">
              <h4 className="text-base font-semibold capitalize">
                Qualifications
              </h4>
              <p className="text-[13px] w-[157px] mt-[3px]">
                Other qualifications may apply
              </p>
            </div>
            <ul className="flex items-start flex-wrap gap-[6px]">
              {qualifications.map((qualification) => (
                <li
                  className="text-[13px] bg-[#e6ebee] rounded-[2px] py-[6px] px-[10px] text-[#494d4f]"
                  key={qualification}
                >
                  {qualification}
                </li>
              ))}
            </ul>
          </section>

          <section className="flex pl-[42px] pr-[42px]">
            <div className="mr-[35px]">
              <h4 className="text-base font-semibold capitalize">
                Company reviews
              </h4>
              <p className="text-[13px] w-[157px] mt-[3px]">
                Recent things people are saying
              </p>
            </div>
            <ul className="flex-1 grid grid-cols-2 grid-rows-[auto_auto] gap-5">
              {reviews.map((review) => (
                <li
                className={`text-[13px] italic text-[#494d4f] relative before:content-['“'] before:absolute before:-z-10 before:text-[50px] before:-top-[18px] before:-left-[10px] before:text-[#d2d7db]`}
                style={{
                  transform: "translateZ(-1px)",
                }}
                key={review}
              >
                  {review}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <footer className="ml-[42px] mr-[42px] mt-[33px] pt-[13px] border-t border-[#dce2e8]">
          <p className="text-[#858b8f] text-[10px] pb-[16px]">
            If possible, please reference that you found the job on{" "}
            <span className="font-bold">DevHunt</span>, we would really
            appreciate it!
          </p>
        </footer>
      </div>
    </section>
  );
}

function LoadingJobContent() {
  return (
    <section className="flex-1 overflow-scroll relative bg-[#eff2f5] rounded-tr-[12px] rounded-br-[8px]">
      <div className="h-full">
        <Spinner className="mx-auto"/>
      </div>
    </section>
  );
}

function EmptyJobContent() {
  return (
    <section className="flex-1 overflow-scroll relative bg-[#eff2f5] rounded-tr-[12px] rounded-br-[8px]">
      <div className="h-full">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <p className="opacity-55 w-[275px] text-center text-[#0d1114] text-lg mb-[10px] font-semibold">
            What are you looking for?
          </p>
          <p className="opacity-55 text-[#24292d] text-sm w-[275px] text-center">
            Start by searching for any technology your ideal job is working with
          </p>
        </div>
      </div>
    </section>
  );
}
