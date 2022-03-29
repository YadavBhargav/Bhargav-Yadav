import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
export default function home() {
  return (  
    <div>
        <Link to='/create'>
            <Button>Add Data</Button>
        </Link>
        <Link to='/read'>
          <Button>Read</Button>
        </Link>
    </div>
  )
};
