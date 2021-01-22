module.exports = {
	title: "Freelancing in India: A Handbook",
	description:
		"A simple and comprehensive guide to start making sense of the legal framework for Indian freelancers.",
	themeConfig: {
		// string | boolean
		lastUpdated: "Last Updated",
		// Assumes GitHub. Can also be a full GitLab url.
		repo: "hirusi/freelancing-in-india-handbook",
		// Customising the header label
		// Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
		repoLabel: "GitHub",

		// Optional options for generating "Edit this page" link

		// if your docs are not at the root of the repo:
		docsDir: "docs",
		// if your docs are in a specific branch (defaults to 'master'):
		docsBranch: "main",
		// defaults to false, set to true to enable
		editLinks: true,
		// custom text for edit link. Defaults to "Edit this page"
		editLinkText: "Help me improve this page!",
		smoothScroll: true,
		nav: [{ text: "Ru Singh", link: "https://rusingh.com" }],
		sidebar: [
			"/docs/",
			"/docs/getting-started",
			"/docs/defining-export",
			"/docs/getting-paid",
			"/docs/gst-returns",
			"/docs/income-tax"
		],
		sidebarDepth: 2
	}
};
