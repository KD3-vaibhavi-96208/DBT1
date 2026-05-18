import { useParams } from "react-router-dom";

function Student() {

    const { name } = useParams();

    return (
        <div>
            <h1>Student Name: {name}</h1>
        </div>
    )
}

export default Student