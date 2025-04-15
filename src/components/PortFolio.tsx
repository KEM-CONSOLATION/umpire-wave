"use client";
import Image from "next/image";
import React, { useState, useMemo } from "react";
import { FiSearch } from "react-icons/fi";

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
  return (
    <div className="p-[10px] bg-[#FFFFFF] shadow rounded-md max-w-[400px] w-full">
      <div className="flex gap-[16px]">
        <Image
          src={image}
          width={100}
          height={100}
          alt={title}
          className="max-w-[117px] w-full h-full"
        />
        <div className="space-y-[8px]">
          <p className="font-[600] text-[24px] text-[#48484A]">{title}</p>
          <p className="font-[400] text-[16px] text-[#48484A]">{fileType}</p>
          <p className="font-[400] text-[16px] text-[#48484A]">{artist}</p>
          <a
            href={url}
            target="blank"
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
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const projects: Project[] = [
    {
      id: "project1",
      title: "Danza Kuduro",
      fileType: "Music Audio",
      artist: "Don Omar, Lucenzo",
      image: "/assets/portfolioImage.png",
      url: "https://www.google.com/",
    },
    {
      id: "project2",
      title: "Havana",
      fileType: "Music Video",
      artist: "Camila Cabello",
      image: "/assets/portfolioImage.png",
      url: "https://www.google.com/",
    },
    {
      id: "project3",
      title: "Life on Earth",
      fileType: "Documentary",
      artist: "David Attenborough",
      image: "/assets/portfolioImage.png",
      url: "https://www.google.com/",
    },
    {
      id: "project4",
      title: "City Lights",
      fileType: "Photography",
      artist: "Jane Doe",
      image: "/assets/portfolioImage.png",
      url: "https://www.google.com/",
    },
    {
      id: "project5",
      title: "Global Tour",
      fileType: "Artiste Campaign",
      artist: "World Band",
      image: "/assets/portfolioImage.png",
      url: "https://www.google.com/",
    },
    {
      id: "project6",
      title: "Summer Sale",
      fileType: "Commercial",
      artist: "Fashion Brand",
      image: "/assets/portfolioImage.png",
      url: "https://www.google.com/",
    },
    {
      id: "project7",
      title: "Blinding Lights",
      fileType: "Music Video",
      artist: "The Weeknd",
      image: "/assets/portfolioImage.png",
      url: "https://www.google.com/",
    },
    {
      id: "project8",
      title: "Bad Guy",
      fileType: "Music Audio",
      artist: "Billie Eilish",
      image: "/assets/portfolioImage.png",
      url: "https://www.google.com/",
    },
    {
      id: "project9",
      title: "Ocean Depths",
      fileType: "Documentary",
      artist: "Marine Institute",
      image: "/assets/portfolioImage.png",
      url: "https://www.google.com/",
    },
    {
      id: "project10",
      title: "Urban Architecture",
      fileType: "Photography",
      artist: "Robert Smith",
      image: "/assets/portfolioImage.png",
      url: "https://www.google.com/",
    },
    {
      id: "project11",
      title: "Imagine Dragons Tour",
      fileType: "Artiste Campaign",
      artist: "Imagine Dragons",
      image: "/assets/portfolioImage.png",
      url: "https://www.google.com/",
    },
    {
      id: "project12",
      title: "Holiday Collection",
      fileType: "Commercial",
      artist: "Luxury Brand",
      image: "/assets/portfolioImage.png",
      url: "https://www.google.com/",
    },
    {
      id: "project13",
      title: "Industry Baby",
      fileType: "Music Video",
      artist: "Lil Nas X",
      image: "/assets/portfolioImage.png",
      url: "https://www.google.com/",
    },
    {
      id: "project14",
      title: "Climate Change",
      fileType: "Documentary",
      artist: "Environmental Network",
      image: "/assets/portfolioImage.png",
      url: "https://www.google.com/",
    },
    {
      id: "project15",
      title: "Wildlife Moments",
      fileType: "Photography",
      artist: "Nature Collective",
      image: "/assets/portfolioImage.png",
      url: "https://www.google.com/",
    },
    {
      id: "project16",
      title: "Album Launch",
      fileType: "Artiste Campaign",
      artist: "Taylor Swift",
      image: "/assets/portfolioImage.png",
      url: "https://www.google.com/",
    },
    {
      id: "project17",
      title: "Spring Promotion",
      fileType: "Commercial",
      artist: "Department Store",
      image: "/assets/portfolioImage.png",
      url: "https://www.google.com/",
    },
    {
      id: "project18",
      title: "Circles",
      fileType: "Music Audio",
      artist: "Post Malone",
      image: "/assets/portfolioImage.png",
      url: "https://www.google.com/",
    },
    {
      id: "project19",
      title: "Desert Landscapes",
      fileType: "Photography",
      artist: "Sarah Johnson",
      image: "/assets/portfolioImage.png",
      url: "https://www.google.com/",
    },
    {
      id: "project20",
      title: "New Technology",
      fileType: "Commercial",
      artist: "Tech Company",
      image: "/assets/portfolioImage.png",
      url: "https://www.google.com/",
    },
    {
      id: "project21",
      title: "Concert Series",
      fileType: "Artiste Campaign",
      artist: "Various Artists",
      image: "/assets/portfolioImage.png",
      url: "https://www.google.com/",
    },
    {
      id: "project22",
      title: "Mountain Expedition",
      fileType: "Documentary",
      artist: "Adventure Team",
      image: "/assets/portfolioImage.png",
      url: "https://www.google.com/",
    },
    {
      id: "project23",
      title: "Levitating",
      fileType: "Music Video",
      artist: "Dua Lipa",
      image: "/assets/portfolioImage.png",
      url: "https://www.google.com/",
    },
    {
      id: "project24",
      title: "Urban Life",
      fileType: "Documentary",
      artist: "City Studios",
      image: "/assets/portfolioImage.png",
      url: "https://www.google.com/",
    },
  ];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const tabs: Tab[] = [
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
    {
      id: "artisteCampaigns",
      label: "Artiste Campaigns",
      projects: projects.filter((p) => p.fileType.includes("Artiste")),
    },
    {
      id: "commercialsBrandedContent",
      label: "Commercials & Branded Content",
      projects: projects.filter((p) => p.fileType.includes("Commercial")),
    },
  ];

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
      <div className="max-w-[512px] mx-auto text-center mt-16">
        <p className="font-[600] text-[24px] text-[#48484A] mt-2 max-w-lg mx-auto">
          Don&apos;t miss a moment! Discover the unforgettable music, film, and
          visuals created by Umpire Wave Studios.
        </p>
      </div>
      {/* Search Input */}
      <div className="mt-8 max-w-lg mx-auto">
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
      {/* Tabs */}
      <div className="mt-8 scrollbar-hidden flex items-center gap-[20px] justify-start md:justify-center overflow-x-auto w-full whitespace-nowrap">
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

      {/* Tab Content */}
      <div className="mt-[64px] grid md:grid-cols-2 lg:grid-cols-3 place-items-center gap-4 items-center">
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
          <div className="col-span-full text-center py-8">
            <p className="font-[500] text-[18px] text-[#48484A]">
              No projects found matching &apos;{searchQuery}&apos;
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PortFolio;
