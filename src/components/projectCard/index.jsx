import React from "react";
import Link from "next/link";

export const ProjectCard = ({ repo }) => {
    return (
        <div className="border border-gray-300 rounded-lg p-4 h-full flex flex-col">
            <div className="flex justify-between items-start mb-2">
                <Link 
                    href={repo.html_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-700 hover:underline md:max-w-60 lg:max-w-96 truncate"
                >
                    {repo.name}
                </Link>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                    {repo.private ? "Private" : "Public"}
                </span>
            </div>
            
            <p className="text-sm text-gray-600 mb-4 flex-grow line-clamp-2">
                {repo.description || "No description provided"}
            </p>
            
            <div className="flex items-center text-xs text-gray-500 space-x-4">
                {repo.language && (
                    <span className="flex items-center">
                        <span 
                            className="w-3 h-3 rounded-full mr-1"
                            style={{ 
                                backgroundColor: getLanguageColor(repo.language) 
                            }}
                        ></span>
                        {repo.language}
                    </span>
                )}
                <span>⭐ {repo.stargazers_count}</span>
                <span>🔄 {repo.forks_count}</span>
            </div>
            
            {repo.topics && repo.topics.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                    {repo.topics.map((topic) => (
                        <span 
                            key={topic} 
                            className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded"
                        >
                            {topic}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
};

function getLanguageColor(language) {
    const colors = {
        'JavaScript': '#f1e05a',
        'TypeScript': '#3178c6',
        'Python': '#3572A5',
        'Java': '#b07219',
        'C++': '#f34b7d',
        'Dart': '#00B4AB',
        'HTML': '#e34c26',
        'CSS': '#563d7c'
    };
    return colors[language] || '#ccc';
}