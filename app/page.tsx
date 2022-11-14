import { indexQuery } from "../lib/queries";
import { getClient } from "../lib/sanity-server";
import { Project } from "../lib/types";

async function getData() {
	const projects: Project[] = await getClient(false).fetch(indexQuery);

	console.log(projects);
	return projects;
}

export default async function Home() {
	const projects = await getData();
	return (
		<div>
			<h1>Lewis Flude</h1>
			<h2>Front-end Engineer</h2>
			{projects.map((project) => {
				return (
					<div key={project._id}>
						<h3>{project.company}</h3>
						<h4>{project.jobTitle}</h4>
					</div>
				);
			})}
		</div>
	);
}
