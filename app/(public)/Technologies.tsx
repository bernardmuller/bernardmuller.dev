import Image from "next/image";

const Technologies = ({ data }: { data: any }) => {
	return (
		<div className="w-full flex">
			{data.map((tech: any) => (
				<div className="relative flex justify-center items-center h-6">
					<Image
						src={`https://img.shields.io/badge/-${tech.title}-black?style=flat-square&logo=${tech.badge}`}
						alt={tech.title}
						fill
						className="relative h-full w-full object-contain"
					/>
				</div>
			))}
			{/* <img
        src="https://img.shields.io/badge/-Typescript-black?style=flat-square&logo=typescript"
        alt=""
    />
    <img
        src="https://img.shields.io/badge/-Nodejs-black?style=flat-square&logo=Node.js"
        alt=""
    />
    <img
        src="https://img.shields.io/badge/-Python-black?style=flat-square&logo=Python"
        alt=""
    />
    <img
        src="https://img.shields.io/badge/-PostgreSql-black?style=flat-square&logo=postgresql"
        alt=""
    />

    <img
        src="https://img.shields.io/badge/-Railway-black?style=flat-square&logo=railway"
        alt=""
    />
    <img
        src="https://img.shields.io/badge/-Vercel-black?style=flat-square&logo=vercel"
        alt=""
    />
    <img
        src="https://img.shields.io/badge/-Git-black?style=flat-square&logo=git"
        alt=""
    />
    <img
        src="https://img.shields.io/badge/-GitHub-black?style=flat-square&logo=github"
        alt=""
    /> */}
		</div>
	);
};

export default Technologies;
