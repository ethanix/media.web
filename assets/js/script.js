let index_no=Math.floor(Math.random()*All_song.length);
let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let random_play = document.querySelector('#random');
let present = document.querySelector('#present');
let total = document.querySelector('#total');



let timer;
let autoplay = 0;
let randomplay = 0;


let Playing_song = false;

//create a audio Element
let track = document.createElement('audio');

// All functions
// function load the track
function load_track(index_no){
	clearInterval(timer);
	reset_slider();

	track.src = All_song[index_no].path;
	title.innerHTML = All_song[index_no].name;	
    track.load();

	timer = setInterval(range_slider ,1000);
	total.innerHTML = All_song.length;
	present.innerHTML = index_no + 1;
}

load_track(index_no);


// checking.. the song is playing or not
 function justplay(){
 	if(Playing_song==false){
 		playsong();
 	}else{
 		pausesong();
 	}
 }


// reset song slider
 function reset_slider(){
 	slider.value = 0;
 }

// play song
function playsong(){
  track.play();
  Playing_song = true;
  play.innerHTML = '<font color="red"><b aria-hidden="true">◫</b></font>';
}

//pause song
function pausesong(){
	track.pause();
	Playing_song = false;
	play.innerHTML = '<font color="blue"><b aria-hidden="true">▷</b></font>';
}


// next song
function next_song(){
	if(index_no < All_song.length - 1){
		index_no += 1;
		load_track(index_no);
		playsong();
	}else{
		index_no = 0;
		load_track(index_no);
		playsong();
	}
}


// previous song
function previous_song(){
	if(index_no > 0){
		index_no -= 1;
		load_track(index_no);
		playsong();
	}else{
		index_no = All_song.length;
		load_track(index_no);
		playsong();
	}
}

// change slider position 
function change_duration(){
	slider_position = track.duration * (slider.value / 100);
	track.currentTime = slider_position;
}

// autoplay function
function autoplay_switch(){
	if (autoplay==1){
       autoplay = 0;
       auto_play.style.background = "rgba(255,255,255,0.2)";
	}else{
       autoplay = 1;
       auto_play.style.background = "#FF8A65";
       randomplay = 0;
       random_play.style.background = "rgba(255,255,255,0.2)";
	}
}

// randomplay function
function randomplay_switch(){
	if (randomplay==1){
       randomplay = 0;
       random_play.style.background = "rgba(255,255,255,0.2)";
	}else{
       randomplay = 1;
       random_play.style.background = "#FF8A65";
	   autoplay = 0;
       auto_play.style.background = "rgba(255,255,255,0.2)";
	}
}

function range_slider(){
	let position = 0;
        // update slider position
		if(!isNaN(track.duration)){
		   position = track.currentTime * (100 / track.duration);
		   slider.value =  position;
	      }
       // function will run when the song is over
       if(track.ended){
       	 play.innerHTML = '<font color="blue"><b aria-hidden="true">▷</b></font>';
           if(randomplay==1){
		       let temp_random = Math.floor(Math.random()*10)+1;
			   if(index_no < All_song.length - temp_random){
				   index_no += temp_random;
				   load_track(index_no);
				   playsong();
			   }else{
			       index_no = index_no + temp_random - All_song.length;
				   load_track(index_no);
				   playsong();
				}
           }
           if(autoplay==1){
			   if(index_no < All_song.length - 1){
				   index_no += 1;
				   load_track(index_no);
				   playsong();
			   }else{
			       index_no = index_no + 1 - All_song.length;
				   load_track(index_no);
				   playsong();
				}
           }
	    }
     }
