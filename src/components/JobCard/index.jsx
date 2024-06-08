import React from 'react';
import dayjs from 'dayjs';

function JobCard() {

    const skills = ["js", "react", "node"];
    const date1 = dayjs(Date.now());
    const diffInDays = date1.diff('2023-28-10','days');

    return (
        <div>

            <div>
                <h1>title / company name</h1>
                <p> options1/option2/option3 (eg1)</p>
                <div>
                    {skills.map((skill) => {
                        <p>{skill}</p>
                    })}
                </div>
            </div>

            <div>
                <p>Posted {diffInDays} ago</p>
                <button>Apply</button>
            </div>

        </div>
    )
}

export default JobCard

// eg area

// eg 1 : (Full Time &#x2022; Fresher &#x2022; Fresher)
