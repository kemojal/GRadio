var isplaying = true;
        document.getElementById('play').style.backgroundColor = "black";
        var video = document.getElementById('player');
        //video.pause();
        // west coast // http://stream.westcoast.gm:8002/;
        var stations = {
            westCost1: "http://stream.westcoast.gm:8002/;",
            capatial: "http://s3.viastreaming.net:8815/;?type=.mp3/;stream.mp3",
            afri: "http://usa9-vn.webcast-server.net:8120/;?type=.mp3/;stream.mp3",
            paradise: "http://amber.streamguys.com:4340/paradise105"


        }

        function hideSplash() {
            document.getElementById('splash').style.opacity = "0";
            document.getElementById('splash').style.bottom = "-700px";
        }

        function playMusic() {
            document.getElementById('player').pause()
            document.getElementById('play').style.backgroundColor = "black";
            document.getElementById('stop').style.backgroundColor = "white";
        }

        function stopMusic() {
            document.getElementById('player').pause()
            document.getElementById('play').style.backgroundColor = "white";
            document.getElementById('stop').style.backgroundColor = "black";

        }

        function showMenu() {
            var slider = document.getElementById("stationContainer")
            slider.classList.add('slideUp');
            slider.classList.remove('slideDown');

        }

        function hideMenu() {
            var slider = document.getElementById("stationContainer")
            slider.classList.add('slideDown');
            slider.classList.remove('slideUp');
        }



        function westy() {
            document.getElementById("stationName").textContent = "West Coast";
            video.setAttribute('src', stations.westCost1)
            video.load();
            video.play();
            hideMenu();

        }

        function capital() {
            document.getElementById("stationName").textContent = "Capital";
            video.setAttribute('src', stations.capatial)
            video.load();
            video.play();
            hideMenu();
        }

        function afri() {
            document.getElementById("stationName").textContent = "AFRI";
            video.setAttribute('src', stations.afri)
            video.load();
            video.play();
            hideMenu();
        }

        function paradise() {
            document.getElementById("stationName").textContent = "Paradise";
            video.setAttribute('src', stations.paradise)
            video.load();
            video.play();
            hideMenu();
        }

        function changeSource(url) {
            var video = document.getElementById('player');
            video.src = url;
            video.play();
        }

        function changeStation(stationName) {

            document.getElementById(stationName.toString()).textContent = stationName;
        }