import React from "react";
import { getGithubRepos } from "@/lib/api-libs";
import { ProjectCard } from "@/components/projectCard";

const Page = async () => {
    const repos = await getGithubRepos();

    return (
        <section className="container my-10">
            <h1 className="text-3xl  mb-6 text-gray-400 cursor-pointer">./<span className="text-blue-700"> projects</span></h1>
            
            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Popular Repositories</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols- gap-4">
                    {repos.map((repo) => (
                        <ProjectCard key={repo.id} repo={repo} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Page;