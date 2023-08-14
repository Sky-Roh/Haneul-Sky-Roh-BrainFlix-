import "./Video.scss"
import {Link} from 'react-router-dom'

const Video = ({
    id,
    image,
    title,
    channel,
}) => {


    return (
        <Link className="link" to={"/videos/"+id}>
            <section className="next-video">
                <div className="next-video__list">
                    <div className="next-video__image">
                        <img className="next-video--image"
                            src={image}
                            alt={title}/>
                    </div>
                    <div className="next-video__text">
                        <h2 className="next-video__subtitle">
                            {title}</h2>
                        <h3 className="next-video__channel">
                            {channel}</h3>
                    </div>
                </div>
            </section>
        </Link>
    );
}

export default Video;
