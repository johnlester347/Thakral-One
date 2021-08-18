const video = document.getElementById('f_video');
const photography = document.getElementById('photography');
const social = document.getElementById('social');
const pr = document.getElementById('pr');
const radio = document.getElementById('radio');
const videoContent = document.querySelector('.video');
const deletE = document.querySelector('.deletE');
const footer = document.querySelector('.footer');
const middle = document.querySelector('.middle');

const middleLink = document.querySelectorAll('.middle__link');

social.addEventListener('click', function(e) {

    if(social) {
        social.classList.toggle('active');
        deletE.classList.add('social');
        video.classList.remove('active');
        photography.classList.remove('active');
        pr.classList.remove('active');
        radio.classList.remove('active');
        deletE.classList.remove('video');
        deletE.innerHTML = '';
        deletE.innerHTML = `<img src="img/social.png" alt="social-img" class="social__img">
        <div class="social__text">
            <p>The companies movie storyboard showcase the entire story, completely inspired by stunning images
                captured in the Whitsundays, with all 20 winning scenes accompanying the images.</p>

            <a class="button">View Project</a>
        </div>`;
        deletE.classList.remove('photography');
        deletE.classList.remove('pr');
        deletE.classList.remove('video');
        deletE.classList.remove('radio');
    } 
});

video.addEventListener('click', function(e) {
    
    if(video) {
        video.classList.toggle('active');
        deletE.classList.add('video');
        social.classList.remove('active');
        photography.classList.remove('active');
        pr.classList.remove('active');
        radio.classList.remove('active');
        deletE.innerHTML = '';
        deletE.innerHTML = `<img src="img/video.png" alt="video-img" class="video__img">
        <div class="video__text">
            <p>A 60 second promotional movie trailer played on TV, online as pre rolls and via Facebook, to promote the movie that was waiting to be written to our movie-loving target audience, and encourage them to enter.</p>

            <a class="button">View Project</a>
        </div>`;
        deletE.classList.remove('photography');
        deletE.classList.remove('pr');
        deletE.classList.remove('social');
        deletE.classList.remove('radio');
    } 
});

photography.addEventListener('click', function(e) {
    
    if(photography) {
        photography.classList.toggle('active');
        deletE.classList.add('photography');
        social.classList.remove('active');
        pr.classList.remove('active');
        radio.classList.remove('active');
        video.classList.remove('active');
        deletE.innerHTML = '';
        deletE.innerHTML = `<img src="img/picture.png" alt="photography-img" class="photography__img">

        <div class="photography__text">
            <p>Shot posted on Facebook and Instagram everyday inspired thousands of entires. We reacted to the
                storylines as it developed in realtime, selecting and treating the next image according to the day's
                winning scene.</p>

            <a class="button">View Project</a>
        </div>`;
        deletE.classList.remove('video');
        deletE.classList.remove('pr');
        deletE.classList.remove('social');
        deletE.classList.remove('radio');
    } 
});

pr.addEventListener('click', function(e) {
    
    if(pr) {
        pr.classList.toggle('active');
        deletE.classList.add('pr');
        social.classList.remove('active');
        photography.classList.remove('active');
        radio.classList.remove('active');
        video.classList.remove('active');

        deletE.innerHTML = '';
        deletE.innerHTML = ` <img src="img/pr.png" alt="pr-img" class="pr__img">
        <div class="pr__text">
            <p>We enlisted the help of Craig Peace as script supervisor, who was tasked with choosing the winner
                each day to ensure the story flowed properly, and providing daily writing tips to encouraged people
                to take part.</p>

            <a class="button">View Project</a>
        </div>`;
        deletE.classList.remove('video');
        deletE.classList.remove('photography');
        deletE.classList.remove('social');
        deletE.classList.remove('radio');
    } 
});

radio.addEventListener('click', function(e) {

    if(radio) {
        radio.classList.toggle('active');
        deletE.classList.add('radio');
        video.classList.remove('active');
        photography.classList.remove('active');
        pr.classList.remove('active');
        social.classList.remove('active');
        deletE.classList.remove('video');
        deletE.innerHTML = '';
        deletE.innerHTML = ` <img src="img/radio.png" alt="radio-img" class="radio__img">

        <div class="radio__text">
            <p>Live reads from NOVA presenters reflected the ever-evolving story of Jake in realtime, and encouraged
                people to get involved to shape the story themselves.</p>

            <a class="button">View Project</a>
        </div>`;
        deletE.classList.remove('photography');
        deletE.classList.remove('pr');
        deletE.classList.remove('video');
        deletE.classList.remove('social');
    } 
});

