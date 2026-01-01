"use client";
import Image from "next/image";
import React, { useState, useMemo, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
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

  if (fileType === "Photography") {
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

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const projects: Project[] = useMemo(
    () => [
      {
        id: "project4",
        title: "Photography 1",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Images/IMG_4206.jpeg",
        url: "#",
      },
      {
        id: "project5",
        title: "Photography 2",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Images/IMG_4207.jpeg",
        url: "#",
      },
      {
        id: "project6",
        title: "Photography 3",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Images/IMG_4208.jpeg",
        url: "#",
      },
      {
        id: "project10",
        title: "Photography 4",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Images/IMG_4209.jpeg",
        url: "#",
      },
      {
        id: "project11",
        title: "Photography 5",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Images/IMG_4210.jpeg",
        url: "#",
      },
      {
        id: "project12",
        title: "Photography 6",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Images/IMG_4211.jpeg",
        url: "#",
      },
      {
        id: "project15",
        title: "Photography 7",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Images/IMG_4212.jpeg",
        url: "#",
      },
      {
        id: "project16",
        title: "Photography 8",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Images/IMG_4213.jpeg",
        url: "#",
      },
      {
        id: "project17",
        title: "Photography 9",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Images/IMG_4214.jpeg",
        url: "#",
      },
      {
        id: "project19",
        title: "Photography 10",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Images/IMG_4215.jpeg",
        url: "#",
      },
      {
        id: "project20",
        title: "Photography 11",
        fileType: "Photography",
        artist: "Umpire Wave Studios",
        image: "/assets/Images/IMG_4216.jpeg",
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
        label: "Films & Documentaries",
        projects: projects.filter((p) => p.fileType.includes("Documentary")),
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
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
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
                  {activeTab === "photography" && "No Photography Available"}
                </p>
                <p className="font-[400] text-[16px] text-gray-600 max-w-md mx-auto">
                  {activeTab === "musicVideos" &&
                    "We're working on exciting music video projects. Check back soon for updates!"}
                  {activeTab === "filmDocumentaries" &&
                    "We're currently working on new films and documentaries. Stay tuned for our upcoming releases!"}
                  {activeTab === "all" &&
                    "No projects are currently available. Please check back later."}
                  {activeTab === "photography" &&
                    "No photography available at the moment."}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PortFolio;
