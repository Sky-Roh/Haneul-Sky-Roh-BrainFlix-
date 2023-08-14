import "./MainVideoDetail.scss"
import viewIcon from "../../assets/icons/views.svg"
import likeIcon from "../../assets/icons/likes.svg"
import convertDateFormat from "../../utils/utils.js"


const MainVideoDetail = ({currentVideo}) => { // seperate it later


    if (currentVideo === null) {
        return (
            <div className="loading__container">
                <h2 className="loading"></h2>
            </div>
        )
    }

    return (
        <div className="video__detail">
            <h2 className="video__title">
                {
                currentVideo.title
            }</h2>
            <div className="video__info">
                <div className="video__channelAndDate">
                    <p className="video__channel">By {
                        currentVideo.channel
                    }</p>
                    <p className="video__timestamp">
                        {
                        convertDateFormat(currentVideo.timestamp)
                    }</p>
                </div>
                <div className="video__menu">
                    <div className="video__view">
                        <img className="video__like--img"
                            src={viewIcon}
                            alt="eye icon"/>
                        <p className="video__view--number">
                            {
                            currentVideo.views
                        }</p>
                    </div>
                    <div className="video__like">
                        <img className="video__like--img"
                            src={likeIcon}
                            alt="heart icon"/>
                        <p className="video__like--number">
                            {
                            currentVideo.likes
                        }</p>
                    </div>
                </div>
            </div>

            <p className="video__description">
                {
                currentVideo.description
            }</p>
        </div>


    );
}

export default MainVideoDetail;
