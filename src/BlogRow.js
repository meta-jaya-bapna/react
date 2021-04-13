import React, {useState} from "react";
import Avatar from '@material-ui/core/Avatar';
import Logo from './images.png';

function BlogRow(props) {
    const [blog] = useState(props.blog);
  
    return (
        <tr>
          <td><Avatar src="/broken-image.jpg" /></td>
          <tr>
            <td>{blog.title}</td>
          </tr>
          <tr>
            <td>{blog.description}</td>
          </tr>
          <td><img src={Logo} style = {{width: '40px', height: '50px'}}/></td>
        </tr>
      );
  }
export default BlogRow;