import React from "react";
import Issue from "./Issue";

export default function UserIssueList(props){
    const { issues } = props;
    return (
        <div className="issue--profile--container">
            {issues.map(issue => <Issue key={issue._id} {...issue} issueId={issue._id} />)}
        </div>
    )
}