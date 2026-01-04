"use client";
import Image from "next/image";
import React, { useState, useMemo, useEffect } from "react";
import { FiSearch, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { BiPlayCircle } from "react-icons/bi";
import AOS from "aos";
import "aos/dist/aos.css";

interface Project {
  id: string;
  title: string;
  fileType: string;
  artist: string;
  image: string;
  url: string;
}

interface Tab {
  id: string;
  label: string;
  projects: Project[];
}

const PortfolioItem: React.FC<Project> = ({
  title,
  fileType,
  artist,
  image,
  url,
}) => {
  const [thumbnail, setThumbnail] = useState(image);
  const [isYouTube, setIsYouTube] = useState(false);
  const [videoId, setVideoId] = useState("");
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    if (url && (url.includes("youtube.com") || url.includes("youtu.be"))) {
      setIsYouTube(true);

      const videoIdMatch = url.match(
        /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
      );
      const extractedVideoId = videoIdMatch ? videoIdMatch[1] : "";

      if (extractedVideoId) {
        setVideoId(extractedVideoId);
        setThumbnail(
          `https://img.youtube.com/vi/${extractedVideoId}/mqdefault.jpg`
        );
      }
    }
  }, [url, image]);

  const toggleVideo = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowVideo(!showVideo);
  };

  if (isYouTube) {
    return (
      <div className="bg-white shadow rounded-md max-w-[400px] w-full overflow-hidden">
        <div className="relative w-full pt-[56.25%] bg-gray-100">
          {showVideo ? (
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title={title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <div
              className="absolute inset-0 cursor-pointer"
              onClick={toggleVideo}
            >
              {thumbnail ? (
                <div className="relative w-full h-full">
                  <Image
                    src={thumbnail}
                    alt={title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 hover:bg-opacity-30 transition-opacity">
                    <BiPlayCircle className="w-16 h-16 text-white opacity-90" />
                  </div>
                </div>
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-200">
                  <BiPlayCircle className="w-12 h-12 text-gray-400" />
                </div>
              )}
            </div>
          )}
        </div>

        <div className="p-4">
          {!showVideo ? (
            <button
              onClick={toggleVideo}
              className="mt-3 p-[10px] cursor-pointer bg-[#F5F6F7] inline-block rounded-[8px] font-[600] text-[12px] text-[#48484A] hover:bg-gray-200 transition-colors"
            >
              Play Video
            </button>
          ) : (
            <button
              onClick={toggleVideo}
              className="mt-3 p-[10px] cursor-pointer bg-[#F5F6F7] inline-block rounded-[8px] font-[600] text-[12px] text-[#48484A] hover:bg-gray-200 transition-colors"
            >
              Close Video
            </button>
          )}
        </div>
      </div>
    );
  }

  if (fileType === "Photography" || fileType === "Facility") {
    return (
      <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
        <Image
          src={image}
          fill
          alt={title}
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={90}
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div className="p-[10px] bg-[#FFFFFF] shadow rounded-md max-w-[400px] w-full">
      <div className="flex gap-[16px]">
        <Image
          src={image}
          width={100}
          height={100}
          alt={title}
          className="max-w-[117px] w-full h-full object-cover"
          sizes="117px"
          quality={90}
          loading="lazy"
        />
        <div className="space-y-[8px]">
          <p className="font-[600] text-[24px] text-[#48484A]">{title}</p>
          <p className="font-[400] text-[16px] text-[#48484A]">{fileType}</p>
          <p className="font-[400] text-[16px] text-[#48484A]">{artist}</p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-[10px] bg-[#F5F6F7] inline-block rounded-[8px] font-[600] text-[12px] text-[#48484A]"
          >
            Get it now
          </a>
        </div>
      </div>
    </div>
  );
};

const PortFolio: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: true,
    });
  }, []);
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 12; // Number of items to show per page

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    setCurrentPage(1); // Reset to first page when switching tabs
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to first page when searching
  };

  const projects: Project[] = useMemo(
    () => [
      // Photography projects
      {
        id: "photo1",
        title: "Photography 1",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_8976.jpg",
        url: "#",
      },
      {
        id: "photo2",
        title: "Photography 2",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_8977.jpg",
        url: "#",
      },
      {
        id: "photo3",
        title: "Photography 3",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_8978.jpg",
        url: "#",
      },
      {
        id: "photo4",
        title: "Photography 4",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_8979.jpg",
        url: "#",
      },
      {
        id: "photo5",
        title: "Photography 5",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_8980.jpg",
        url: "#",
      },
      {
        id: "photo6",
        title: "Photography 6",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_8981.jpg",
        url: "#",
      },
      {
        id: "photo7",
        title: "Photography 7",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_8987.jpg",
        url: "#",
      },
      {
        id: "photo8",
        title: "Photography 8",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_8988.jpg",
        url: "#",
      },
      {
        id: "photo9",
        title: "Photography 9",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_8989.jpg",
        url: "#",
      },
      {
        id: "photo10",
        title: "Photography 10",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_8990.jpg",
        url: "#",
      },
      {
        id: "photo11",
        title: "Photography 11",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_8991.jpg",
        url: "#",
      },
      {
        id: "photo12",
        title: "Photography 12",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_8992.jpg",
        url: "#",
      },
      {
        id: "photo13",
        title: "Photography 13",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_8995.jpg",
        url: "#",
      },
      {
        id: "photo14",
        title: "Photography 14",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_8997.jpg",
        url: "#",
      },
      {
        id: "photo15",
        title: "Photography 15",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_8999.jpg",
        url: "#",
      },
      {
        id: "photo16",
        title: "Photography 16",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_9071.jpg",
        url: "#",
      },
      {
        id: "photo17",
        title: "Photography 17",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_9072.jpg",
        url: "#",
      },
      {
        id: "photo18",
        title: "Photography 18",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_9075.jpg",
        url: "#",
      },
      {
        id: "photo19",
        title: "Photography 19",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_9076.jpg",
        url: "#",
      },
      {
        id: "photo20",
        title: "Photography 20",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_9077.jpg",
        url: "#",
      },
      {
        id: "photo21",
        title: "Photography 21",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_9078.jpg",
        url: "#",
      },
      {
        id: "photo22",
        title: "Photography 22",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_9079.jpg",
        url: "#",
      },
      {
        id: "photo23",
        title: "Photography 23",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_9083.jpg",
        url: "#",
      },
      {
        id: "photo24",
        title: "Photography 24",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_9084.jpg",
        url: "#",
      },
      {
        id: "photo25",
        title: "Photography 25",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_9094.jpg",
        url: "#",
      },
      {
        id: "photo26",
        title: "Photography 26",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_9098.jpg",
        url: "#",
      },
      {
        id: "photo27",
        title: "Photography 27",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_9099.jpg",
        url: "#",
      },
      {
        id: "photo28",
        title: "Photography 28",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_9100.jpg",
        url: "#",
      },
      {
        id: "photo29",
        title: "Photography 29",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_9101.jpg",
        url: "#",
      },
      {
        id: "photo30",
        title: "Photography 30",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_9102.jpg",
        url: "#",
      },
      {
        id: "photo31",
        title: "Photography 31",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_9104.jpg",
        url: "#",
      },
      {
        id: "photo32",
        title: "Photography 32",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_9108.jpg",
        url: "#",
      },
      {
        id: "photo33",
        title: "Photography 33",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_9109.jpg",
        url: "#",
      },
      {
        id: "photo34",
        title: "Photography 34",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_9110.jpg",
        url: "#",
      },
      {
        id: "photo35",
        title: "Photography 35",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_9111.jpg",
        url: "#",
      },
      {
        id: "photo36",
        title: "Photography 36",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_9112.jpg",
        url: "#",
      },
      {
        id: "photo37",
        title: "Photography 37",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_9113.jpg",
        url: "#",
      },
      {
        id: "photo38",
        title: "Photography 38",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_9117.jpg",
        url: "#",
      },
      {
        id: "photo39",
        title: "Photography 39",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_9118.jpg",
        url: "#",
      },
      {
        id: "photo40",
        title: "Photography 40",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_9119.jpg",
        url: "#",
      },
      {
        id: "photo41",
        title: "Photography 41",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_9120.jpg",
        url: "#",
      },
      {
        id: "photo42",
        title: "Photography 42",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_9123.jpg",
        url: "#",
      },
      {
        id: "photo43",
        title: "Photography 43",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_9124.jpg",
        url: "#",
      },
      {
        id: "photo44",
        title: "Photography 44",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_9125.jpg",
        url: "#",
      },
      {
        id: "photo45",
        title: "Photography 45",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_9126.jpg",
        url: "#",
      },
      {
        id: "photo46",
        title: "Photography 46",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_9127.jpg",
        url: "#",
      },
      {
        id: "photo47",
        title: "Photography 47",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_9132.jpg",
        url: "#",
      },
      {
        id: "photo48",
        title: "Photography 48",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_9141.jpg",
        url: "#",
      },
      {
        id: "photo49",
        title: "Photography 49",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_9142.jpg",
        url: "#",
      },
      {
        id: "photo50",
        title: "Photography 50",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_9143.jpg",
        url: "#",
      },
      {
        id: "photo51",
        title: "Photography 51",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_9155.jpg",
        url: "#",
      },
      {
        id: "photo52",
        title: "Photography 52",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_9156.jpg",
        url: "#",
      },
      {
        id: "photo53",
        title: "Photography 53",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_9157.jpg",
        url: "#",
      },
      {
        id: "photo54",
        title: "Photography 54",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_9158.jpg",
        url: "#",
      },
      {
        id: "photo55",
        title: "Photography 55",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_9160.jpg",
        url: "#",
      },
      {
        id: "photo56",
        title: "Photography 56",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_9162.jpg",
        url: "#",
      },
      {
        id: "photo57",
        title: "Photography 57",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_9167.jpg",
        url: "#",
      },
      {
        id: "photo58",
        title: "Photography 58",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_9168.jpg",
        url: "#",
      },
      {
        id: "photo59",
        title: "Photography 59",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_9173.jpg",
        url: "#",
      },
      {
        id: "photo60",
        title: "Photography 60",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_9179.jpg",
        url: "#",
      },
      {
        id: "photo61",
        title: "Photography 61",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_9182.jpg",
        url: "#",
      },
      {
        id: "photo62",
        title: "Photography 62",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_9183.jpg",
        url: "#",
      },
      {
        id: "photo63",
        title: "Photography 63",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_9185.jpg",
        url: "#",
      },
      {
        id: "photo64",
        title: "Photography 64",
      fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_9187.jpg",
        url: "#",
      },
      {
        id: "photo65",
        title: "Photography 65",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_9188.jpg",
        url: "#",
      },
      {
        id: "photo66",
        title: "Photography 66",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_9191.jpg",
        url: "#",
      },
      {
        id: "photo67",
        title: "Photography 67",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_9195.jpg",
        url: "#",
      },
      {
        id: "photo68",
        title: "Photography 68",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_9196.jpg",
        url: "#",
      },
      {
        id: "photo69",
        title: "Photography 69",
      fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_9197.jpg",
        url: "#",
      },
      {
        id: "photo70",
        title: "Photography 70",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_9198.jpg",
        url: "#",
      },
      {
        id: "photo71",
        title: "Photography 71",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_9201.jpg",
        url: "#",
      },
      {
        id: "photo72",
        title: "Photography 72",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_9203.jpg",
        url: "#",
      },
      {
        id: "photo73",
        title: "Photography 73",
      fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_9206.jpg",
        url: "#",
      },
      {
        id: "photo74",
        title: "Photography 74",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_9208.jpg",
        url: "#",
      },
      {
        id: "photo75",
        title: "Photography 75",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_9209.jpg",
        url: "#",
      },
      {
        id: "photo76",
        title: "Photography 76",
      fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Portfolio/DSC_9210.jpg",
        url: "#",
      },
      // Facility projects - Only using existing images
      {
        id: "facility1",
        title: "Facility 1",
        fileType: "Facility",
        artist: "Umpire Wave Studios",
        image: "/assets/Facility/IMG_2465.jpeg",
        url: "#",
      },
      {
        id: "facility2",
        title: "Facility 2",
        fileType: "Facility",
        artist: "Umpire Wave Studios",
        image: "/assets/Facility/IMG_2469.jpeg",
        url: "#",
      },
      {
        id: "facility3",
        title: "Facility 3",
        fileType: "Facility",
        artist: "Umpire Wave Studios",
        image: "/assets/Facility/IMG_2472.jpeg",
        url: "#",
      },
      {
        id: "facility4",
        title: "Facility 4",
        fileType: "Facility",
        artist: "Umpire Wave Studios",
        image: "/assets/Facility/IMG_2474.jpeg",
        url: "#",
      },
      {
        id: "facility5",
        title: "Facility 5",
        fileType: "Facility",
        artist: "Umpire Wave Studios",
        image: "/assets/Facility/IMG_2476.jpeg",
        url: "#",
      },
      {
        id: "facility6",
        title: "Facility 6",
        fileType: "Facility",
        artist: "Umpire Wave Studios",
        image: "/assets/Facility/IMG_2625 2.jpeg",
        url: "#",
      },
      {
        id: "facility7",
        title: "Facility 7",
        fileType: "Facility",
        artist: "Umpire Wave Studios",
        image: "/assets/Facility/IMG_4207.jpeg",
        url: "#",
      },
      {
        id: "facility8",
        title: "Facility 8",
        fileType: "Facility",
        artist: "Umpire Wave Studios",
        image: "/assets/Facility/IMG_4211.jpeg",
        url: "#",
      },
      {
        id: "facility9",
        title: "Facility 9",
        fileType: "Facility",
        artist: "Umpire Wave Studios",
        image: "/assets/Facility/IMG_4212.jpeg",
        url: "#",
      },
      {
        id: "facility10",
        title: "Facility 10",
        fileType: "Facility",
        artist: "Umpire Wave Studios",
        image: "/assets/Facility/IMG_4213.jpeg",
        url: "#",
      },
      {
        id: "facility11",
        title: "Facility 11",
        fileType: "Facility",
        artist: "Umpire Wave Studios",
        image: "/assets/Facility/IMG_4214.jpeg",
        url: "#",
      },
      {
        id: "facility12",
        title: "Facility 12",
        fileType: "Facility",
        artist: "Umpire Wave Studios",
        image: "/assets/Facility/IMG_4215.jpeg",
        url: "#",
      },
      {
        id: "facility13",
        title: "Facility 13",
        fileType: "Facility",
        artist: "Umpire Wave Studios",
        image: "/assets/Facility/IMG_4216.jpeg",
        url: "#",
      },
      {
        id: "facility14",
        title: "Facility 14",
        fileType: "Facility",
        artist: "Umpire Wave Studios",
        image: "/assets/Facility/IMG_7525.jpeg",
        url: "#",
      },
    ],
    []
  );

  const tabs: Tab[] = useMemo(
    () => [
    {
      id: "all",
      label: "All",
      projects: projects,
    },
    {
      id: "musicVideos",
      label: "Music Videos",
      projects: projects.filter((p) => p.fileType.includes("Music")),
    },
    {
      id: "filmDocumentaries",
        label: "Films",
      projects: projects.filter((p) => p.fileType.includes("Documentary")),
    },
      {
        id: "facility",
        label: "Our Facility",
        projects: projects.filter((p) => p.fileType === "Facility"),
      },
    {
      id: "photography",
      label: "Photography",
      projects: projects.filter((p) => p.fileType.includes("Photography")),
    },
    ],
    [projects]
  );

  const filteredProjects = useMemo(() => {
    const tabProjects =
      tabs.find((tab) => tab.id === activeTab)?.projects || [];

    if (!searchQuery.trim()) {
      return tabProjects;
    }

    const query = searchQuery.toLowerCase();
    return tabProjects.filter(
      (project) =>
        project.title.toLowerCase().includes(query) ||
        project.artist.toLowerCase().includes(query) ||
        project.fileType.toLowerCase().includes(query)
    );
  }, [activeTab, searchQuery, tabs]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProjects = filteredProjects.slice(startIndex, endIndex);

  // Reset to page 1 if current page is beyond available pages
  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(1);
    }
  }, [totalPages, currentPage]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      // Scroll to top of portfolio section
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="px-4 my-[70px]">
      <div
        className="max-w-[512px] mx-auto text-center mt-16"
        data-aos="fade-up"
      >
        <p className="font-[600] text-[24px] text-[#48484A] mt-2 max-w-lg mx-auto">
          Don&apos;t miss a moment! Discover the unforgettable music, film, and
          visuals created by Umpire Wave Studios.
        </p>
      </div>
      <div className="mt-8 max-w-lg mx-auto" data-aos="fade-left">
        <div className="flex items-center border border-[#48484A] rounded-[8px] px-4 py-2">
          <FiSearch className="text-[#48484A] text-xl" />
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full p-2 text-[#48484A] border-none outline-none"
          />
        </div>
      </div>
      <div
        className="mt-8 scrollbar-hidden flex items-center gap-[20px] justify-start md:justify-center overflow-x-auto w-full whitespace-nowrap"
        data-aos="fade-down"
      >
        {tabs.map((tab) => (
          <p
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`text-[16px] p-[10px] rounded-[8px] cursor-pointer inline-block ${
              activeTab === tab.id
                ? "bg-[#E7BF44] text-[#FFFFFF] font-[600]"
                : "bg-[#F5F6F7] text-[#48484A] font-[400]"
            }`}
          >
            {tab.label}
          </p>
        ))}
      </div>

      <div
        className="mt-[64px] grid md:grid-cols-2 lg:grid-cols-3 place-items-center gap-4 items-center"
        data-aos="fade-up"
      >
        {currentProjects.length > 0 ? (
          currentProjects.map((project) => (
            <PortfolioItem
              key={project.id}
              id={project.id}
              title={project.title}
              fileType={project.fileType}
              artist={project.artist}
              image={project.image}
              url={project.url}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-12 md:py-16">
            {searchQuery.trim() ? (
            <p className="font-[500] text-[18px] text-[#48484A]">
              No projects found matching &apos;{searchQuery}&apos;
            </p>
            ) : (
              <div className="space-y-3">
                <p className="font-[600] text-[24px] text-[#48484A]">
                  {activeTab === "musicVideos" && "No Music Videos Available"}
                  {activeTab === "filmDocumentaries" &&
                    "No Films & Documentaries Available"}
                  {activeTab === "all" && "No Projects Available"}
                  {activeTab === "facility" && "No Facility Images Available"}
                  {activeTab === "photography" && "No Photography Available"}
                </p>
                <p className="font-[400] text-[16px] text-gray-600 max-w-md mx-auto">
                  {activeTab === "musicVideos" &&
                    "We're working on exciting music video projects. Check back soon for updates!"}
                  {activeTab === "filmDocumentaries" &&
                    "We're currently working on new films and documentaries. Stay tuned for our upcoming releases!"}
                  {activeTab === "all" &&
                    "No projects are currently available. Please check back later."}
                  {activeTab === "facility" &&
                    "No facility images available at the moment."}
                  {activeTab === "photography" &&
                    "No photography available at the moment."}
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Pagination Controls */}
      {filteredProjects.length > itemsPerPage && (
        <div className="mt-12 flex flex-col items-center gap-4" data-aos="fade-up">
          <div className="flex items-center gap-2">
            {/* Previous Button */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`flex items-center gap-1 px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                currentPage === 1
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-[#E7BF44] text-white hover:bg-[#D4A93A] cursor-pointer"
              }`}
              aria-label="Previous page"
            >
              <FiChevronLeft className="w-5 h-5" />
              <span className="hidden sm:inline">Previous</span>
            </button>

            {/* Page Numbers */}
            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                // Show first page, last page, current page, and pages around current
                const showPage =
                  page === 1 ||
                  page === totalPages ||
                  (page >= currentPage - 1 && page <= currentPage + 1);

                if (!showPage) {
                  // Show ellipsis
                  if (page === currentPage - 2 || page === currentPage + 2) {
                    return (
                      <span
                        key={page}
                        className="px-3 py-2 text-gray-500"
                      >
                        ...
                      </span>
                    );
                  }
                  return null;
                }

                return (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                      currentPage === page
                        ? "bg-[#E7BF44] text-white"
                        : "bg-gray-100 text-[#48484A] hover:bg-gray-200 cursor-pointer"
                    }`}
                    aria-label={`Go to page ${page}`}
                    aria-current={currentPage === page ? "page" : undefined}
                  >
                    {page}
                  </button>
                );
              })}
            </div>

            {/* Next Button */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`flex items-center gap-1 px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                currentPage === totalPages
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-[#E7BF44] text-white hover:bg-[#D4A93A] cursor-pointer"
              }`}
              aria-label="Next page"
            >
              <span className="hidden sm:inline">Next</span>
              <FiChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Page Info */}
          <p className="text-sm text-gray-600">
            Showing {startIndex + 1} - {Math.min(endIndex, filteredProjects.length)} of{" "}
            {filteredProjects.length} items
          </p>
        </div>
      )}
    </div>
  );
};

export default PortFolio;
