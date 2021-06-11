import React from "react";
// react component plugin for creating beatiful tags on an input
import TagsInput from "react-tagsinput";

export default function Tags() {
  const [tags, setTags] = React.useState(["pizza", "pasta", "parmesan"]);

  const handleTags = (regularTags) => {
    setTags(regularTags);
  };
  return (
    <TagsInput
      value={tags}
      onChange={handleTags}
      tagProps={{ className: "react-tagsinput-tag info" }}
    />
  );
}
