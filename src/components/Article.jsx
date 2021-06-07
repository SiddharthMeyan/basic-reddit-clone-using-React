import React from "react";

export const Article = (props) => {
  return (
    <items className="list-group">
      <a
        href={"https://reddit.com" + props.permalink}
        target="_blank"
        className="list-group-item list-group-item-action "
        aria-current="true"
      >
        <div className="item">
          <h5 className="mb-1">{props.title}</h5>
          <div class="badge bg-secondary text-wrap" style={{ width: "6rem" }}>
            Upvotes: {props.ups}
          </div>
          <small></small>
        </div>
        <p className="mb-1">{props.content}</p>
        <small></small>
      </a>
    </items>
  );
};
