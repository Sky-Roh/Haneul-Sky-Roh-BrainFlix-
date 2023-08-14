import {useState, useEffect} from "react";
import {useNavigate, useParams} from 'react-router-dom'
import axios from "axios";
import "./HomePage.scss"
import MainVideo from "../../components/MainVideo/MainVideo"
import MainVideoDetail from "../../components/MainVideoDetail/MainVideoDetail"
import CommentList from "../../components/CommentList/CommentList"
import VideoList from "../../components/VideoList/VideoList"

const HomePage = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const [videos, setVideos] = useState(null);
    const [videoID, setVideoID] = useState("")
    const [currentVideo, setcurrentVideo] = useState(null)

    useEffect(() => {
        axios
        .get("http://localhost:8080/videos").then((res) => {
            const videoData = res.data;
            setVideos(videoData);
            const videoId = id || videoData[0].id;
            setVideoID(videoId);
            return axios.get(`http://localhost:8080/videos/${videoId}`)
        })
        .then((res) => {
            const videoDetail = res.data;
            setcurrentVideo(videoDetail)
            window.scroll(0, 0);
        })
        .catch(error => {
            console.log(error);
            navigate('/');
        })
    }, [id])

    if (currentVideo === null) {
        return <h3>...</h3>
    }

    return (
        <main className="main">
            <MainVideo currentVideo={videos}
                videoID={videoID}/>
            <div className="main__container">
                <div className="main__desktop">
                    <MainVideoDetail currentVideo ={currentVideo}
                        videoID={videoID}/>
                    <CommentList currentVideo ={currentVideo}
                        videoID={videoID}/>
                </div>
                <VideoList currentVideo={videos}
                    videoID={videoID}/>
            </div>
        </main>
    );
}

export default HomePage;