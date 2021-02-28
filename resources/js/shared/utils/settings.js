export function setSystemMode(systemMode){
	localStorage.setItem('systemMode', systemMode);
}

export function getSystemMode(){
	const systemMode = localStorage.getItem('systemMode');
	if(systemMode){
		return systemMode;
	}
	else{
		return 'conversion';
	}	
}

export function setView(view){
	localStorage.setItem('view', view);
}

export function getView(){
	const view = localStorage.getItem('view');
	if(view){
		return view;
	}
	else{
		return 0;
	}
}

export function setOpenCampaigns(openCampaigns){
	localStorage.setItem('openCampaigns', openCampaigns);
}

export function getOpenCampaigns(){
	const openCampaigns = localStorage.getItem('openCampaigns');
	
	if(openCampaigns){

		return openCampaigns;
	}
	else{
		return "[]";
	}	
}

export function setOpenAdgroups(openAdgroups){
	localStorage.setItem('openAdgroups', openAdgroups);
}

export function getOpenAdgroups(){
	const openAdgroups = localStorage.getItem('openAdgroups');
	
	if(openAdgroups){

		return openAdgroups;
	}
	else{
		return "[]";
	}	
}

export function setOpenAdgroupsKey(openAdgroupsKey){
	localStorage.setItem('openAdgroupsKey', openAdgroupsKey);
}

export function getOpenAdgroupsKey(){
	const openAdgroupsKey = localStorage.getItem('openAdgroupsKey');
	
	if(openAdgroupsKey){

		return openAdgroupsKey;
	}
	else{
		return "[]";
	}	
}

export function setOpenCriterias(openCriterias){
	localStorage.setItem('openCriterias', openCriterias);
}

export function getOpenCriterias(){
	const openCriterias = localStorage.getItem('openCriterias');
	
	if(openCriterias){

		return openCriterias;
	}
	else{
		return "[]";
	}	
}