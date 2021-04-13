import React, {useState} from "react";
import BlogRow from "./BlogRow.js";

function BlogsEntity(props) {
  const rows = [];
  const [blogs] = useState(props.blogs);

  blogs.forEach((blog) => {
    rows.push(
      <BlogRow
        blog={blog}
      />
    );
  });
  return (
          <table>
            <tbody>{rows}</tbody>
          </table>
  );
}
export default BlogsEntity;