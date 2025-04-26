import React, { useState } from "react";
import { Icon } from "../ui/elements/Icon";
// import { Search, ChevronUp, ChevronDown, X, Link2, Maximize2 } from 'lucide-react';

const PDFViewer = ({
  isOpen,
  onClose,
  pdfUrl,
  title,
  author,
}: {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  title: string;
  author: string;
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isContentsOpen, setIsContentsOpen] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-6xl h-5/6 flex flex-col rounded-lg overflow-hidden">
        {/* Header with blue background */}
        <div className="bg-blue-500 text-white p-2 text-lg">PDF Preview</div>

        {/* Main Content Area */}
        <div className="flex-1 flex overflow-hidden">
          {/* Left Sidebar */}
          <div className="w-72 bg-gray-200 p-4">
            <div className="bg-black text-white rounded-full p-2 mb-4 relative">
              <div className="flex justify-between items-center">
                <div>
                  <div>Publications</div>
                  <div className="text-xs text-gray-300">
                    By {author || "Yorkshire Archaeological..."}
                  </div>
                </div>
                <button className="p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Main PDF Display */}
          <div className="flex-1 bg-gray-100 flex flex-col">
            {/* PDF Content Area */}
            <div className="flex-1 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Green Area with "Hive" text */}
                <div className="bg-green-500 text-white w-full h-full flex">
                  <div className="flex-1 flex p-8">
                    <div className="text-9xl font-bold flex flex-col justify-center">
                      <div className="rotate-90">Hive</div>
                    </div>

                    <div className="flex-1 flex flex-col justify-center">
                      <div className="space-y-4 font-medium pl-8">
                        <div>Ebooks</div>
                        <div>Magazines</div>
                        <div>Catalogs</div>
                        <div>Brochures</div>
                        <div>Reports</div>
                        <div>Presentations</div>
                        <div>Booklets</div>
                        <div>Restaurant menus</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* White section at bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-white h-1/3 p-8">
                  <div className="text-4xl font-bold">
                    <span className="font-normal">Amazing</span> online
                    publications to impress your clients
                  </div>
                </div>
              </div>

              {/* Controls Overlay */}
              <div className="absolute top-4 right-4 flex space-x-2">
                <button className="bg-black text-white rounded-full p-2 hover:bg-gray-800">
                  <ChevronUp size={24} />
                </button>
                <button className="bg-black text-white rounded-full p-2 hover:bg-gray-800">
                  <ChevronDown size={24} />
                </button>
                <button
                  onClick={onClose}
                  className="bg-black text-white rounded-full p-2 hover:bg-gray-800"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Bottom Toolbar */}
            <div className="bg-gray-800 text-white p-2 flex justify-between items-center">
              <div className="flex items-center space-x-2 bg-gray-900 rounded px-2 py-1 w-64">
                <Icon name="search" size={16} />
                <input
                  type="text"
                  placeholder="Search in this book"
                  className="bg-transparent border-none outline-none w-full text-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="flex items-center">
                <button
                  className="flex items-center space-x-1 px-3"
                  onClick={() => setIsContentsOpen(!isContentsOpen)}
                >
                  <span>Contents</span>
                  <Icon
                    name="arrow_Down_ios"
                    size={16}
                    className={isContentsOpen ? "transform rotate-180" : ""}
                  />
                </button>
              </div>

              <div className="flex items-center space-x-2">
                <button className="p-1 hover:bg-gray-700 rounded">
                  <Icon name="search" size={20} />
                </button>
                <button className="p-1 hover:bg-gray-700 rounded">
                  <Icon
                    name="search"
                    size={20}
                    className="transform scale-125"
                  />
                </button>
                <div className="h-6 border-l border-gray-600 mx-1"></div>
                <button className="p-1 hover:bg-gray-700 rounded">I</button>
                <button className="p-1 hover:bg-gray-700 rounded">II</button>
                <button className="p-1 hover:bg-gray-700 rounded">
                  <div className="grid grid-cols-3 gap-0.5">
                    {[...Array(9)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1 h-1 bg-white rounded-full"
                      ></div>
                    ))}
                  </div>
                </button>
                <div className="h-6 border-l border-gray-600 mx-1"></div>
                <button className="p-1 hover:bg-gray-700 rounded">
                  {/* <Link2 size={20} /> */}
                </button>
                <button className="p-1 hover:bg-gray-700 rounded">
                  {/* <Maximize2 size={20} /> */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDFViewer;
