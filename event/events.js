(function(){
	var active=0,temp=0,set=0;
	var club = document.getElementsByClassName("clubName");
	var eventName = document.getElementsByClassName("eventName");
	var desc = document.getElementsByClassName("description");
	var clubDrop = document.getElementsByClassName("clubDropdown")[0];
	var clubList = document.getElementsByClassName("clubList")[0];

	for(var j=0;j<club.length;j++){
		club[j].Id=j;
		club[j].addEventListener("click",function(){	
			club[active].classList.remove("selected");
			this.classList.add("selected");	
			document.querySelector(".event" + active).className="event"+active + " event-block";
			document.querySelector(".event" + this.Id).className="event"+ this.Id + " event-block active";			
			document.querySelector(".clubList").className="clubList hide";
			var name = club[this.Id].innerHTML;
			clubDrop.innerHTML=name;
			active=this.Id;
		});
	}
	for(var i=0;i<eventName.length;i++){
		eventName[i].num=i;
		eventName[i].addEventListener("click",function(){
			eventName[temp].classList.remove("selected");
			this.classList.add("selected");
			desc[temp].style.display="none";
			desc[this.num].style.display="block";
			temp=this.num;
		});
	}	
	
	clubDrop.addEventListener("click",function(){
		clubList.classList.remove("hide");
		clubList.classList.toggle("show");
		});
	var eventDrop= document.getElementsByClassName("eventDropdown");
	var eventList = document.getElementsByClassName("el");
	console.log(eventList);
	for(var k=0;k<eventDrop.length;k++){
		eventDrop[k].sec=k;
		eventDrop[k].addEventListener("click",function(){
			
			set=this.sec;
		});
	}
})();
