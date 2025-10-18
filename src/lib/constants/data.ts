import type { Experience } from '$lib/types/experience';

export const ACTIVE_EXPERIENCE: Experience['id'] = 'scmc';

export const EXPERIENCES: Experience[] = [
	{
		id: 'scmc',
		company: 'SM Supermalls',
		date: '2024 Dec to Present',
		position: 'Software Engineer',
		description: `Project: SM Malls Online\n- Provided maintenance and support for microsite features within the mobile application.\n- Developed the Mall Guide feature, enabling users to easily search and locate store tenants in a specific mall.\n- Supported the Coupons feature, allowing users to redeem vouchers and apply discounts on their purchases across the mall.\n- Implemented enhancements and adjustments to the mobile application itself beyond microsite features.\n\nProject: Proof of Concepts (POCs)\n- In-App Messaging System – Built a real-time messaging feature using WebSockets for seamless communication within the app.\n- Mall Directory with Navigation – Developed an interactive 2D/3D map that guides users through malls with turn-by-turn directions.\n- AI-Powered CCTV Analytics – Implemented a visitor counting system using computer vision to detect and track unique individuals.\n- eKYC Solution – Created an AI-driven identity verification process that validates IDs and uses OCR to extract text accurately.`
	},
	{
		id: 'ubx',
		company: 'UBX Philippines',
		date: '2023 Mar to 2024 Dec',
		description: `Project: SeekCap\n- Provided maintenance support for the project.\n- Proficient in deploying frequent enhancements to the platform, covering a spectrum of features.\n- Instrumental in addressing and resolving bugs, ensuring the app's reliability, and enhancing the overall user experience.\n- Tools: React, AWS Cloudwatch, Postman\n\nProject: CashBux Remittance\n- Developed a proof of concept (POC) mobile application for the CashBux remittance feature.\n- Integrated with PAX A920 device to facilitate secure and efficient remittance transactions.\n- Developed working knowledge of Kotlin specifically to implement a package that integrates the device’s printing functionality.\n- Tools: React Native, TypeScript, Kotlin, PAX A920\n\nProjects: BUx, Sentro, i2i\n- Handled tickets for these projects as needed due to resource constraints.\n- Tools: React.js, Redux.js, Python (Django)`,
		position: 'Junior Software Engineer'
	},
	{
		id: 'datawords',
		company: 'Datawords Philippines',
		date: '2022 Jan to May',
		description: `- Executed web mastering responsibilities as a digital specialist, utilizing Salesforce to enhance, customize, and localize e-commerce websites for a variety of clients.`,
		position: 'Digital Specialist'
	},
	{
		id: 'wearforward',
		company: 'Wear Forward',
		date: '2021 Aug to Dec',
		description: `- Served as a Full Stack Web Developer and designed user interfaces.\n- Engaged in discussions to plan the startup company's online platform.\n- Collaborated with co-workers to design and implement the company's website, incorporating its carbon footprint calculator feature.\n- Executed the design, build, and deployment phases using NextJS, Figma, and Git.`,
		position: 'Technology Engineer'
	}
];
