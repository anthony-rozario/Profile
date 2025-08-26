import React from 'react';

const ProjectCard = ({ url, projectName }) => {
    // Check if the URL is valid
    console.log(url);
  return (
    <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-lg group">
      {/* Website Preview */}
      <iframe
        src={url}
        title={projectName}
        className="w-full h-full border-none pointer-events-none"
      />

      {/* Hover Overlay */}
      <a className="absolute bottom-0 left-0 w-full h-1/3 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
        url={url}
        target="_blank">
        <span className="text-white text-lg font-semibold">{projectName}</span>
      </a>
    </div>
  );
};

export default ProjectCard;