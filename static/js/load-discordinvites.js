const sessionStorage = window.sessionStorage;
const hasClickedDiscordLoad = sessionStorage.getItem("hasClickedDiscordLoad");

// Check if session storage has discord invite data
if (hasClickedDiscordLoad == "true") {
	document.getElementById("load-invite-button").parentElement.style = "display: none";
	loadAllInvites();
}

document.getElementById("load-invite-button").addEventListener("click", function (e) {
	loadAllInvites();
	document.getElementById("load-invite-button").parentElement.style = "display: none";
})

/**
 * Loads images and data from all invite elements on the page
 */
function loadAllInvites() {
	const invites = document.getElementsByClassName("invite");
	try {
		for (const element of invites) {
			const url = element.getAttribute("invite-url");
			loadInvite(url, element);
		}
	} catch (e) {
		// Set session storage to false on error
		sessionStorage.setItem("hasClickedDiscordLoad", "false");
		return;
	}
	sessionStorage.setItem("hasClickedDiscordLoad", "true");
}

/**
 * Load a single invite
 * @param {string} inviteCode The invite code of the url
 * @param {HTMLElement} inviteElement The element to apply the data to
 */
function loadInvite(inviteCode, inviteElement) {
	const isLoaded = sessionStorage.getItem(`${inviteCode}_isLoaded`);
	if (isLoaded && isLoaded == "true") {
		const data = {
			id: sessionStorage.getItem(`${inviteCode}_id`),
			name: sessionStorage.getItem(`${inviteCode}_name`),
			gicon: sessionStorage.getItem(`${inviteCode}_gicon`),
			gsplash: sessionStorage.getItem(`${inviteCode}_gsplash`),
			onlinecount: sessionStorage.getItem(`${inviteCode}_onlinecount`),
			membercount: sessionStorage.getItem(`${inviteCode}_membercount`)
		};

		applyInviteData(inviteCode, inviteElement, data);

		return;
	}

	const url = `https://discord.com/api/v10/invites/${inviteCode}?with_counts=true`;
	fetch(url)
		.then(response => response.json())
		.then(json => {
			if (json.code == 10006) {
				const discordTitle = inviteElement.getElementsByClassName("discord-title")[0];
				discordTitle.innerHTML = json.message;
				return;
			}

			// Getting the data
			const data = {
				id: json.guild.id,
				gicon: json.guild.icon,
				gsplash: json.guild.splash,
				name: json.guild.name,
				onlinecount: json.approximate_presence_count.toLocaleString(),
				membercount: json.approximate_member_count.toLocaleString()
			};

			applyInviteData(inviteCode, inviteElement, data);

			// Set data in session storage
			sessionStorage.setItem(`${inviteCode}_isLoaded`, "true");
			sessionStorage.setItem(`${inviteCode}_id`, data.id);
			sessionStorage.setItem(`${inviteCode}_name`, data.name);
			sessionStorage.setItem(`${inviteCode}_gicon`, data.gicon);
			sessionStorage.setItem(`${inviteCode}_gsplash`, data.gsplash);
			sessionStorage.setItem(`${inviteCode}_onlinecount`, data.onlinecount);
			sessionStorage.setItem(`${inviteCode}_membercount`, data.membercount);
		});
}

/**
 * Applies the data to the invite element
 * @param {string} inviteCode The invite code of the url
 * @param {HTMLElement} inviteElement The element to apply the data to
 * @param {Object} data The data to apply to
 */
function applyInviteData(inviteCode, inviteElement, data) {

	// Get invite parts
	const icon = inviteElement.getElementsByClassName("server-icon")[0];
	const splash = inviteElement.getElementsByClassName("splash")[0];
	const discordTitle = inviteElement.getElementsByClassName("discord-title")[0];
	const discordOnline = inviteElement.getElementsByClassName("discord-online")[0];
	const discordMembers = inviteElement.getElementsByClassName("discord-member")[0];

	// Apply data to elements
	discordTitle.innerHTML = data.name;
	discordOnline.innerHTML = data.onlinecount + " Online";
	discordMembers.innerHTML = data.membercount + " Members"

	// Apply icon which may be animated in some cases.
	let fileExtension = ".png";
	if (data.gicon.includes("a_")) {
		fileExtension = ".gif";
	}

	icon.src = `https://cdn.discordapp.com/icons/${data.id}/${data.gicon + fileExtension}?size=128`;

	// Apply splash which may not exist on some servers
	if (data.gsplash && data.gsplash != "null") {
		splash.src = `https://cdn.discordapp.com/splashes/${data.id}/${data.gsplash}.png?size=480`
		splash.style = "display: block";
	}
}