import { useEffect } from "react";

function Project(){

    useEffect(() => {
        document.title = "Project - PSK Performance"
      }, []);

    return (
        <h2>
            Search for a Project
        </h2>
    );
}

export default Project;