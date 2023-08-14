import CommentForm from "../CommentForm/CommentForm";
import Comment from "../Comment/Comment"
import "./CommentList.scss"

const CommentList = ({currentVideo}) => { 

    return (
        <>
            <CommentForm currentVideo={currentVideo}/> {
        }
            {
            currentVideo.comments.map((video) => {
                return <Comment key={
                        video.id
                    }
                    name={
                        video.name
                    }
                    comment={
                        video.comment
                    }
                    likes={
                        video.likes
                    }
                    timestamp={
                        video.timestamp
                    }/>

            })
        } </>

    );
}

export default CommentList;
